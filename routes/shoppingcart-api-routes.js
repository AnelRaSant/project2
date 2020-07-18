// *********************************************************************************
// shoppingcart-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    console.log('In shoppingcart-api-routes.js');
    // console.log("db.Shoppingcart: ", db.Shoppingcart);

  // GET route for getting all of the shoppingcarts
  app.get("/api/shoppingcarts", function(req, res) {
    db.Shoppingcart.findAll({}).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });
    

  // Get route for retrieving a single shoppingcart for a Userid
  app.get("/api/shoppingcart/:Userid", function(req, res) {
    db.Shoppingcart.findOne({
      where: {
        Userid: req.params.Userid
      },
      // include: [db.Author]
    }).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts - findOne()');
      console.log('req.params.Userid: ', req.params.Userid);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });

/* 
  // Get route for retrieving a single category
  app.get("/api/shoppingcarts/category/:category", function(req, res) {
    db.Shoppingcart.findAll({
      where: {
        categories: req.params.category
      },
      // include: [db.Author]
    }).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts/:category - findAll()');
      console.log('req.params.category: ', req.params.category);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });
 */
  
  // POST route for saving a new shoppingcart
  app.post("/api/shoppingcarts", function(req, res) {
    db.Shoppingcart.create(req.body).then(function (dbShoppingcart) {
      console.log('In .POST /api/shoppingcarts - create()');
      console.log('req.body: ', req.body);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });

  
  // DELETE route for deleting a shoppingcart
  app.delete("/api/shoppingcarts/:Userid", function(req, res) {
    db.Shoppingcart.destroy({
      where: {
        Userid: req.params.Userid
      }
    }).then(function (dbShoppingcart) {
      console.log('In .DELETE /api/shoppingcarts - destroy()');
      console.log('req.params.Userid: ', req.params.Userid);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });


  // PUT route for updating posts
  app.put("/api/shoppingcarts", function(req, res) {
    db.Shoppingcart.update(
      req.body,
      {
        where: {
          Userid: req.body.Userid
        }
      }).then(function (dbShoppingcart) {
      console.log('In .PUT /api/shoppingcarts - update()');
      console.log('req.body.Userid: ', req.body.Userid);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });

};
