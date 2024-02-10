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
    default: Date.now,
  },
});

module.exports = productSchema;
