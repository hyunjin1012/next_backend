const controller = require("../contorllers/auth.controller")

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/auth/signup", controller.signup);

  app.get("/users", controller.list);
  app.get("userinfo", controller.userinfo)

  app.post("/auth/signin", controller.signin);

  // app.post("/api/user/info", controller.userinfo);
  // app.post("/api/user/update", controller.update)

};

