const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const costSchema = require("../schemas/costSchemas.js");
const Cost = mongoose.model("Cost", costSchema);

router.get("/getCost", async (req, res) => {
  try {
    const userId = req.query.userId;
    const cost = await Cost.findById(userId);
    res.send(cost);
  } catch (error) {
    console.error("Error fetching cost:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const costs = await Cost.find();
    res.send(costs);
  } catch (error) {
    console.error("Error fetching costs:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const costData = req.body;
    const newCost = await Cost.create(costData);
    res.status(201).send(newCost);
  } catch (error) {
    console.error("Error creating cost:", error);
    res.status(500).send({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const costId = req.params.id;
    const deletedProduct = await Cost.deleteOne({ _id: costId });

    res.status(200).json({
      message: "Cost deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

module.exports = router;