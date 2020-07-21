// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads home.html
  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/views/home.html"));
  res.render("index")
  });
  

  // browse route loads browse.html
  app.get("/browse", function(req, res) {
    res.render("mycart")
  });

  // cart route loads cart.html
  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/cart.html"));
  });

  // signupLogin route loads signupLogin.html
  app.get("/signupLogin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/views/signupLogin.html"));
  });

};