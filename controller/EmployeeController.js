const employee = require("../model/EmployeeModel");
const mongoose = require("mongoose");

// GET ALL LISTS

const getLists = async (req, res) => {
  const list = await employee.find({}).sort({ createdAt: -1 });

  res.status(200).json(list);
};

// GET A SINGLE LIST

const getList = async (req, res) => {
  const { employeeID } = req.params;

  const employeeData = await employee.findOne({ employeeID });

  if (!employeeData) {
    return res.status(404).json({ error: "Employee not found" });
  }

  res.status(200).json(employeeData);
};

// CREATE A NEW LIST

const createList = async (req, res) => {
  const { name, employeeID, timeIn, timeOut } = req.body;

  try {
    const list = await employee.create({
      name,
      employeeID,
      timeIn,
      timeOut,
    });
    res.status(200).json(list);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// DELETE A LIST

const deleteList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no Such list" });
  }

  const list = await employee.findOneAndDelete({ _id: id });

  if (!list) {
    return res.status(400).json({ error: "no Such list" });
  }

  res.status(200).json(list);
};

// UPDATE A LIST
const updateList = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no Such list" });
  }

  const list = await employee.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!list) {
    return res.status(400).json({ error: "no Such list" });
  }

  res.status(200).json(list);
};

module.exports = {
  getLists,
  getList,
  createList,
  deleteList,
  updateList,
};
