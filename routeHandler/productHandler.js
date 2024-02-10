const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const productSchema = require("../schemas/productSchemas");

 

const Product = new mongoose.model("Product", productSchema);

// Handle GET request for all products
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
});

router.get("/:id", async (req, res) => {
  try {
    const result = await Product.findOne({ _id: new ObjectId(req.params.id) });
    res.json(result || { error: "Product not found" });
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Handle POST request to add a new product
router.post("/", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json({
      message: "Product added successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

// Handle DELETE request to delete a product by ID
router.delete("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const deletedProduct = await Product.deleteOne({ _id: productId });

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;
