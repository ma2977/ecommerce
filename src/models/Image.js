const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const bcrypt = require('bcrypt');

const Image = sequelize.define('image', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
        publicId: {
            type: DataTypes.STRING,
            allowNull: false
        },
//productId

});
    

module.exports = Image;