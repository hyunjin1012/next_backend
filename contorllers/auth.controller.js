const db = require("../models");
const config = require("../config/auth.config")
const User = db.User;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const jwtHelper = require("./lib/jwtHelper")

exports.list = async (req, res) => {
  const users = await User.findAll({ order: [["createdAt", "DESC"]] });

  res.json({users:users})
};

exports.signup = async (req, res) => {
  const usernameCheck = await User.findAll({
    where: { username: req.body.username },
  });
  const emailCheck = await User.findOne({ where: { email: req.body.email } });

  if (usernameCheck.length) {
    res.send({ success: false, message: "Invalid username." });
    return;
  } else if (emailCheck) {
    res.send({ success: false, message: "Invalid email" });
    return;
  } else
    await User.create({
      username: req.body.username,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    })
      .then((user) => {
        var token = jwt.sign({ id: user.id }, config.secret, {
          expiresIn: 86400,
        });
        res.send({
          message: "Thanks for joining hyunjin.xyz!",
          user: user,
          accessToken: token,
          success: true,
        });
      })
      .catch((err) => {
        res.status(500).send({ success: false, message: err.message });
      });
};

exports.signin = async (req, res) => {

  await User.findOne({
    where: {
      email: req.body.email,
    },  
  })
    .then((user) => {
      console.log(user)
      if (!user) {
        return res.send({ success: false, message: "User Not found." });
      }
      
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.send({
          accessToken: null,
          success: false,
          message: "Invalid Password.",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400,
      });

      res.status(200).send({
        success: true,
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          accessToken: token,
        },
        message: "Welcome back!"
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
  
};

exports.userinfo = async(req, res) => {
  const decoded = await jwtHelper.decodeHelper(req);
  const userId = decoded.userId;

  if(!userId) {
    res.send({success: false, message: "Please login first."})
    return;
  }
  const user = db.User.findOne({where: {id: userId}})

  if(!user) {
    res.send({success: false, message: "User not found. Please login."})
    return;
  }

  const userInfo = {
    username: user.username,
    email: user.email,
    password: user.password,
  }
  res.send({success: true, userInfo: userInfo})
}
