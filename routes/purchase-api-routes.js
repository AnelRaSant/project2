// *********************************************************************************
// Purchase-api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {
    console.log('In purchase-api-routes.js');
    // console.log("db.Purchase: ", db.Purchase);

    // GET route for getting all of the purchases
    app.get("/api/purchases", function (req, res) {
        db.Purchase.findAll({
            include: [db.Book]
        }).then(function (dbPurchase) {
            console.log('In .get /api/purchases - findAll()');
            console.log('req.body: ', req.body);
            console.log('dbPurchase: ', dbPurchase);
            res.json(dbPurchase);
        });
    });


    // Get route for retrieving a single Purchase for a Userid
    app.get("/api/purchase/:UserId", function (req, res) {
        db.Purchase.findAll({
            where: {
                UserId: req.params.UserId
            },
            include: [db.Book]
        }).then(function (dbPurchase) {
            console.log('In .get /api/purchase/:UserId - findAll()');
            console.log('req.params.UserId: ', req.params.UserId);
            console.log('dbPurchase: ', dbPurchase);
            res.json(dbPurchase);
        });
    });

    /* 
      // Get route for retrieving a single category
      app.get("/api/purchases/category/:category", function(req, res) {
        db.Purchase.findAll({
          where: {
            categories: req.params.category
          },
          // include: [db.Author]
        }).then(function (dbPurchase) {
          console.log('In .get /api/purchases/:category - findAll()');
          console.log('req.params.category: ', req.params.category);
          console.log('dbPurchase: ', dbPurchase);
          res.json(dbPurchase);
        });
      });
     */

    // POST route for saving a new Purchase
    app.post("/api/purchases", function (req, res) {
        db.Purchase.create({
            UserId: req.body.UserId,
            BookId: req.body.BookId,
            // total: req.body.total,
            date: new Date()
        }).then(function (dbPurchase) {
            console.log('In .POST /api/purchases - create()');
            console.log('req.body: ', req.body);
            console.log('dbPurchase: ', dbPurchase);
            // res.json(dbPurchase);

            // Also insert into the intermediary table
            db.Purchase_Book.create({
                PurchaseId: dbPurchase.id,
                BookId: req.body.BookId
            }).then(function (dbPurchase_Book) {
                console.log('In .POST /api/purchase - create() - Purchase_Book');
                console.log('req.body: ', req.body);
                console.log('dbPurchase_Book: ', dbPurchase_Book);
                res.json(dbPurchase_Book);
            });
        });
    });


    // DELETE route for deleting a Purchase
    app.delete("/api/purchases/:UserId", function (req, res) {
        db.Purchase.destroy({
            where: {
                UserId: req.params.UserId
            }
        }).then(function (dbPurchase) {
            console.log('In .DELETE /api/purchases - destroy()');
            console.log('req.params.UserId: ', req.params.UserId);
            console.log('dbPurchase: ', dbPurchase);
            res.json(dbPurchase);
        });
    });


    // PUT route for updating posts
    app.put("/api/purchases", function (req, res) {
        db.Purchase.update(
            req.body,
            {
                where: {
                    UserId: req.body.UserId
                }
            }).then(function (dbPurchase) {
                console.log('In .PUT /api/purchases - update()');
                console.log('req.body.UserId: ', req.body.UserId);
                console.log('dbPurchase: ', dbPurchase);
                res.json(dbPurchase);
            });
    });

};
