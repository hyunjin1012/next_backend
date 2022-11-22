var jwt = require("jsonwebtoken");
const config = require("../../config/auth.config")

exports.decodeHelper = async (req) => {
  let token = req.headers["Authorization"].split("")[1];
  const options = {ignoreExpiration: true}

  const verifyPromise = () => new Promise(function(resolve, reject){
    jwt.verify(token, config.secret, options, function(err, decoded){
      if (err) {
        reject (err);
        return;
      }
      resolve(decoded)
    })
  })

  const decoded = await verifyPromise();
  const userId = decoded.id;

  return {
    success: true,
    userId: userId
  }
}
