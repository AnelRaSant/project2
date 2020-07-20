// Requiring our models
var db = require("../models");

module.exports = function (sequelize, DataTypes) {
    const Shoppingcart_Book = sequelize.define('Shoppingcart_Book', {
        ShoppingcartId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Shoppingcart, 
                key: 'id'
            }
        },
        BookId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Book, 
                key: 'id'
            }
            // defaultValue: 0
        }
    });

    return Shoppingcart_Book;
}