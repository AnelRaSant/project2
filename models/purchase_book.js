// Requiring our models
var db = require("../models");

module.exports = function (sequelize, DataTypes) {
    const Purchase_Book = sequelize.define('Purchase_Book', {
        PurchaseId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Purchase, 
                key: 'id'
            }
        },
        BookId: {
            type: DataTypes.INTEGER,
            references: {
                model: db.Book, 
                key: 'id'
            }
        }
    });

    return Purchase_Book;
}