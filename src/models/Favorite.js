const sequelize = require("../utils/connection");
const { DataTypes } = require('sequelize');
const Favorite = sequelize.define('favorite', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  //newsId
  //userId
});
module.export = Favorite;
