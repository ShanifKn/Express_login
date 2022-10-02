var express = require("express");
const { response } = require("../app");
var router = express.Router();
let statusBar = false;

const users = {
  name: "John",
  email: "123@exmaple.com",
  password: 123,
};

router.get("/", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
  } else {
    res.render("login", { statusBar });
  }
});

router.post("/", function (req, res) {
  signIn(req.body).then((response) => {
    if (response.status) {
      req.session.loggedIn = true;
      req.session.user = response.user;
      statusBar = false;
      res.redirect("/");
    } else {
      statusBar = true;
      res.redirect("/login");
    }
  });
});

function signIn(userData) {
  return new Promise((resolve, reject) => {
    const { email, password } = userData;
    let response = {};
    if (email == users.email && password == users.password) {
      response.status = true;
      response.user = users.name;
      resolve(response);
    } else {
      response.status = false;
      resolve(response);
    }
  });
}

module.exports = router;
