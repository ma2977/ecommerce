const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt = require('bcrypt');

const Category = sequelize.define('category', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
    
Category.beforeCreate(async category => {
  category.password =await bcrypt.hash(category.password,10);
  return category;
});

Category.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    delete values.password;
    return values;
}

module.exports = Category;