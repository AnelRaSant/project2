// *********************************************************************************
// shoppingcart-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // GET route for getting all of the shoppingcarts
  app.get("/api/shoppingcarts", function (req, res) {
    db.Shoppingcart.findAll({
      include: [db.Book]
    }).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });


  // Get route for retrieving a single shoppingcart for a Userid
  app.get("/api/shoppingcart/:UserId", function (req, res) {
    db.Shoppingcart.findOne({
      where: {
        UserId: req.params.UserId
      },
      // include: [db.Author]
    }).then(function (dbShoppingcart) {
      console.log('In .get /api/shoppingcarts - findOne()');
      console.log('req.params.UserId: ', req.params.UserId);
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
  app.post("/api/shoppingcarts", function (req, res) {
    db.Shoppingcart.create({
      UserId: req.body.UserId,
      BookId: req.body.BookId
    }).then(function (dbShoppingcart) {
      console.log('In .POST /api/shoppingcarts - create()');
      console.log('req.body: ', req.body);
      console.log('dbShoppingcart: ', dbShoppingcart);
      console.log('dbShoppingcart.id: ', dbShoppingcart.id);
      // res.json(dbShoppingcart);

      // Also insert into the intermediary table
      db.Shoppingcart_Book.create({
        ShoppingcartId: dbShoppingcart.id,
        BookId: req.body.BookId
      }).then(function (dbShoppingcart_Book) {
        console.log('In .POST /api/shoppingcarts - create() - Shoppingcart_Book');
        console.log('req.body: ', req.body);
        console.log('dbShoppingcart_Book: ', dbShoppingcart_Book);
        res.json(dbShoppingcart_Book);
      });
    });
  });


  // DELETE route for deleting a shoppingcart
  app.delete("/api/shoppingcarts/:UserId", function (req, res) {
    db.Shoppingcart.destroy({
      where: {
        UserId: req.params.UserId
      }
    }).then(function (dbShoppingcart) {
      console.log('In .DELETE /api/shoppingcarts - destroy()');
      console.log('req.params.UserId: ', req.params.UserId);
      console.log('dbShoppingcart: ', dbShoppingcart);
      res.json(dbShoppingcart);
    });
  });


  // PUT route for updating posts
  app.put("/api/shoppingcarts", function (req, res) {
    db.Shoppingcart.update(
      req.body,
      {
        where: {
          UserId: req.body.UserId
        }
      }).then(function (dbShoppingcart) {
        console.log('In .PUT /api/shoppingcarts - update()');
        console.log('req.body.UserId: ', req.body.UserId);
        console.log('dbShoppingcart: ', dbShoppingcart);
        res.json(dbShoppingcart);
      });
  });

};
