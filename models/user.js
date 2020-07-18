module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: DataTypes.STRING,
        email: DataTypes.STRING, // Missing: email validation
        password: DataTypes.STRING,  // Missing: change with bcrypt
        preferences: DataTypes.ARRAY(DataTypes.STRING),
    });

    User.associate = function (models) {
        // Associating User with Shoppingcart
        // When an User is deleted, also delete any associated Shoppingcarts
        User.hasOne(models.Shoppingcart, {
            onDelete: "cascade"
        });
        User.hasMany(models.Purchase, {
            onDelete: "cascade"
        });
    };

    return User;
};

