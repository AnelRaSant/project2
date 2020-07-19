// Requiring our models
var db = require("../models");

module.exports = function (sequelize, DataTypes) {
    const Shoppingcart_Book = sequelize.define('Shoppingcart_Book', {
        ShoppingcartId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Shoppingcart, // 'Movies' would also work
                key: 'id'
            }
        },
        BookId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Book, // 'Actors' would also work
                key: 'id'
            }
        }
    });

    return Shoppingcart_Book;
}