// *********************************************************************************
// books-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the books
  app.get("/api/books", function(req, res) {
    db.Book.findAll({}).then(function (dbBook) {
      console.log('In .get /api/books - findAll()');
      console.log('req.body: ', req.body);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });
    

  // Get route for retrieving a single book
  app.get("/api/books/:id", function(req, res) {
    db.Book.findOne({
      where: {
        id: req.params.id
      },
      // include: [db.Author]
    }).then(function (dbBook) {
      console.log('In .get /api/books - findOne()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });


  // Get route for retrieving a single category
  app.get("/api/books/category/:category", function(req, res) {
    db.Book.findAll({
      where: {
        categories: req.params.category
      },
      // include: [db.Author]
    }).then(function (dbBook) {
      console.log('In .get /api/books/:category - findAll()');
      console.log('req.params.category: ', req.params.category);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

  
  // POST route for saving a new book
  app.post("/api/books", function(req, res) {
    db.Book.create(req.body).then(function (dbBook) {
      console.log('In .POST /api/books - create()');
      console.log('req.body: ', req.body);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

  
  // DELETE route for deleting posts
  app.delete("/api/books/:id", function(req, res) {
    db.Book.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbBook) {
      console.log('In .DELETE /api/books - destroy()');
      console.log('req.params.id: ', req.params.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });


  // PUT route for updating posts
  app.put("/api/books", function(req, res) {
    db.Book.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbBook) {
      console.log('In .PUT /api/books - update()');
      console.log('req.body.id: ', req.body.id);
      console.log('dbBook: ', dbBook);
      res.json(dbBook);
    });
  });

};
