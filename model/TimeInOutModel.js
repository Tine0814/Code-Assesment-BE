const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const timeInOutSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  employeeID: {
    type: String,
    required: true,
  },
  timeIn: {
    type: String, // Using String type for timeIn
  },
  timeOut: {
    type: String,
  },
});

module.exports = mongoose.model("Attendance", timeInOutSchema);
