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
        Shoppingcart.belongsTo(models.User, {  // foreignKey ??
            allowNull: true
        });
        Shoppingcart.belongsToMany(models.Book, { through: 'Shoppingcart_Book' }); 
    };

    return Shoppingcart;
};