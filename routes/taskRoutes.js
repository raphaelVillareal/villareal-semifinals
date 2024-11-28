// routes/itemRoutes.js
const express = require("express");
const routes = express.Router();
const {
  getAllItems,
  getItemById,
  addItem,
  updateItem,
  deleteItem,
} = require("../controllers/taskController");

// Route definitions
routes.get("/", getAllItems);
routes.get("/:id", getItemById);
routes.post("/", addItem);
routes.put("/:id", updateItem);
routes.delete("/:id", deleteItem);

module.exports = routes;