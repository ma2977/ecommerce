const Category = require("./Category");
const Product = require("./Product");
const Image = require(".models/Image");
Category.hasMany(Product);
Product.belongTo(Category);
Image.belongTo(Product);
Product.hasMany(Image);
