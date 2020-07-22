// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/views/signup.html"));
    // res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/home");
    }
    res.sendFile(path.join(__dirname, "../public/views/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/home.html"));
  });


  // browse route loads browse.html
  app.get("/browse", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/browse.html"));
  });

  // cart route loads cart.html
  app.get("/cart", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/cart.html"));
  });

  // signupLogin route loads signupLogin.html
  /* app.get("/signupLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/signupLogin.html"));
  }); */

};