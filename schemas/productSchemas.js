const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
  },
  image: {
    type: String,
  },
  productQuantity: {
    type: Number,
  },
  productPrice: {
    type: Number,
  },
  productType: {
    type: String,
  },
  productDescription: {
    type: String,
  },
  date: {
    type: Date,
    default: function () {
      return moment().tz("Asia/Dhaka").toDate();
    },
  },
});

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({}, { strict: false })
);

module.exports = Product;
