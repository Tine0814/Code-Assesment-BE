const express = require("express");
const {
  getLists,
  getList,
  createList,
  deleteList,
  updateList,
} = require("../controller/TimeInOutController");

const router = express.Router();

// get all list
router.get("/", getLists);

// get list by ID
router.get("/:employeeID", getList);

// POST new List
router.post("/", createList);

// DELETE List
router.delete("/:id", deleteList);

// UPDATE  List
router.put("/:id", updateList);

module.exports = router;
