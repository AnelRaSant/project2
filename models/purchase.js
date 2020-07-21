module.exports = function (sequelize, DataTypes) {
    var Purchase = sequelize.define("Purchase", {
        // total: DataTypes.DECIMAL(10,2),
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
            foreignKey: {  // ??
                allowNull: false
            }
        });
        Purchase.belongsToMany(models.Book, { through: 'Purchase_Book' });
    };

    return Purchase;
};