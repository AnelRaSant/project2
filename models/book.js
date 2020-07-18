module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define("Book", {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    authors: DataTypes.STRING,
    categories: DataTypes.STRING,
    thumbnail: DataTypes.STRING,
    description: DataTypes.TEXT,
    published_year: DataTypes.INTEGER,
    average_rating: DataTypes.DECIMAL,
    num_pages: DataTypes.INTEGER,
    ratings_count: DataTypes.INTEGER,
  });

  Book.associate = function(models) {
      Book.belongsToMany(models.Shoppingcart, { through: 'User_Book' }); // Missing variables book_id and user_id
      Book.belongsToMany(models.Purchase, { through: 'Purchase_Book' }); // Missing variables purchase_id and book_id
  };

  return Book;
};
