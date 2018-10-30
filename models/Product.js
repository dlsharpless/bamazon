module.exports = function(sequelize, DataTypes) {
    const Products = sequelize.define('Products', {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      department_name: {
        type: DataTypes.SRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
      },
      stock_quantity: {
        type: DataTypes.INTEGER
      },
    });
  
    return Products;
  }

// * Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).