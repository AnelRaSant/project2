module.exports = function (sequelize, DataTypes) {
    var Shoppingcart = sequelize.define("Shoppingcart", {
    });

    Shoppingcart.associate = function (models) {
        // We're saying that a Shoppingcart should belong to an User
        // A Shoppingcart can't be created without an User due to the foreign key constraint
        Shoppingcart.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Shoppingcart.belongsToMany(models.Book, { through: 'User_Book' }); // Missing variables book_id and user_id
    };

    return Shoppingcart;
};



/* shoppingcarts	many-many users-books
id
book_id
user_id
*/