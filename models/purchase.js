module.exports = function (sequelize, DataTypes) {
    var Purchase = sequelize.define("Purchase", {
        date: DataTypes.DATE,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: new Date()
        }
    });

    Purchase.associate = function (models) {
        Purchase.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Purchase.belongsToMany(models.Book, { through: 'Purchase_Book' }); // Missing variables purchase_id and book_id
    };

    return Purchase;
};
