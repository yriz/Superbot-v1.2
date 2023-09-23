const express = require("express"),
  CheckAuth = require("../auth/CheckAuth"),
  router = express.Router();



  

  router.get("/", async (req, res) => {
    res.redirect("/home");
  });

   router.get("/", CheckAuth, async (req, res) => {
    res.redirect("/Dashboard");
  });

router.get("/", CheckAuth, async (req, res) => {
  res.redirect("/Terms-of-use");
});

router.get("/", CheckAuth, async (req, res) => {
  res.redirect("/Privacy-Policy");
});


router.get("/", CheckAuth, async (req, res) => {
  res.redirect("/selector");
});




router.get("/home", async (req, res) => {
  res.render("home", {
    user: req.userInfos,
    currentURL: `${req.client.config.DASHBOARD.baseURL}/${req.originalUrl}`,
  });
});

router.get("/Terms-of-use", CheckAuth, async (req, res) => {
  res.render("Terms-of-use", {
    user: req.userInfos,
    currentURL: `${req.client.config.DASHBOARD.baseURL}/${req.originalUrl}`,
  });
});


router.get("/Privacy-Policy", CheckAuth, async (req, res) => {
  res.render("Privacy-Policy", {
    user: req.userInfos,
    currentURL: `${req.client.config.DASHBOARD.baseURL}/${req.originalUrl}`,
  });
});


router.get("/selector", CheckAuth, async (req, res) => {
  res.render("selector", {
    user: req.userInfos,
    currentURL: `${req.client.config.DASHBOARD.baseURL}/${req.originalUrl}`,
  });
});


router.get("/Dashboard", CheckAuth, async (req, res) => {
  res.render("Dashboard", {
    user: req.userInfos,
    currentURL: `${req.client.config.DASHBOARD.baseURL}/${req.originalUrl}`,
  });
});

module.exports = router;
