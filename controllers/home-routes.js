const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/login", (req, res) => {
  //   if (req.session.loggedIn) {
  //     res.redirect("/");
  //     return;
  //   }

  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    title: "Sign Up"
  });
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard", {
        title: "Activity-Schedule Page"
    })
})

module.exports = router;
