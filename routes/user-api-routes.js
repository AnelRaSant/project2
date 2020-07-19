var db = require("../models");

module.exports = function (app) {

    // Get all the users
    app.get("/api/users", function (req, res) {
        db.User.findAll({
            include: [db.Shoppingcart, db.Purchase]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    /* 
    [
        {
            "id": 1,
            "name": "Jorge",
            "email": "jorge@email.com",
            "password": "password",
            "preferences1": "Fiction",
            "preferences2": "Drama",
            "preferences3": "Comedy",
            "ShoppingcartId": null,
            "PurchaseId": null,
            "createdAt": "2020-07-19T18:16:22.000Z",
            "updatedAt": "2020-07-19T18:16:22.000Z",
            "Shoppingcart": null,
            "Purchases": []
        },
    ]
    */



    // Get one user by its id
    app.get("/api/users/:id", function (req, res) { // Missing: user and password validation
        db.User.findOne({
            where: {
                id: req.params.id
            },
            include: [{
                model: db.Shoppingcart,
                // include: ["User_Book"]
            }, {
                model: db.Purchase,
                // include: ["Purchase_Book"]
            }]
        }).then(function (dbUser) {
            res.json(dbUser);
        });
    });

    /* 
    {
        "id": 1,
        "name": "Jorge",
        "email": "jorge@email.com",
        "password": "password",
        "preferences1": "Fiction",
        "preferences2": "Drama",
        "preferences3": "Comedy",
        "ShoppingcartId": null,
        "PurchaseId": null,
        "createdAt": "2020-07-19T18:16:22.000Z",
        "updatedAt": "2020-07-19T18:16:22.000Z",
        "Shoppingcart": null,
        "Purchases": []
    }
    */



    // Create a new user - For Sign Up
    app.post("/api/users", function (req, res) {
        db.User.create(req.body).then(function (dbUser) {
            console.log('In .POST /api/users - create()');
            console.log('req.body: ', req.body);
            console.log('dbUser: ', dbUser);
            res.json(dbUser);
        });
    });

    /* 
    {
        "id": 4,
        "name": "4",
        "email": "4@email.com",
        "password": "4",
        "preferences1": "Fiction",
        "preferences2": "Drama",
        "preferences3": "Comedy",
        "ShoppingcartId": null,
        "PurchaseId": null,
        "updatedAt": "2020-07-19T18:30:00.620Z",
        "createdAt": "2020-07-19T18:30:00.620Z"
    }
    */


    // Update an user by its id
    app.put("/api/users", function (req, res) {
        db.User.update(
            req.body,
            {
                where: {
                    id: req.body.id
                }
            }).then(function (dbUser) {
                console.log('In .PUT /api/users - update()');
                console.log('req.body: ', req.body);
                console.log('dbUser: ', dbUser);
                res.json(dbUser);
            });
    });

    /* 
    [
        1
    ]
    */


    // Delete an user by its id
    app.delete("/api/users/:id", function (req, res) {
        db.User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbUser) {
            console.log('In .DELETE /api/users - destroy()');
                console.log('req.body: ', req.body);
                console.log('dbUser: ', dbUser);
            res.json(dbUser);
        });
    });

    /* 
        1
    */

};
