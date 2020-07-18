module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING, // Missing: email validation
        password: DataTypes.STRING,  // Missing: change with bcrypt
        preferences1: DataTypes.STRING,
        preferences2: DataTypes.STRING,
        preferences3: DataTypes.STRING,
        shoppingcartId: {
            type: DataTypes.INTEGER,
        },
        purchaseId: {
            type: DataTypes.INTEGER,
        }
    });

    User.associate = function (models) {
        // Associating User with Shoppingcart
        // When an User is deleted, also delete any associated Shoppingcarts
        User.hasOne(models.Shoppingcart, {
            allowNull: true
        });
        User.hasMany(models.Purchase, {
        });
    };

    return User;
};

