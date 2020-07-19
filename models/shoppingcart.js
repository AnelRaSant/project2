module.exports = function (sequelize, DataTypes) {
    var Shoppingcart = sequelize.define("Shoppingcart", {
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    });

    Shoppingcart.associate = function (models) {
        // We're saying that a Shoppingcart should belong to an User
        // A Shoppingcart can't be created without an User due to the foreign key constraint
        Shoppingcart.belongsTo(models.User, {
            allowNull: true
        });
        Shoppingcart.belongsToMany(models.Book, { through: 'Shoppingcart_Book' }); // Missing variables book_id and user_id
        // Shoppingcart.belongsToMany(models.Shoppingcart_Book, { through: 'Shoppingcart_Book' });
    };

    return Shoppingcart;
};



/* shoppingcarts	many-many users-books
id
book_id
user_id
*/