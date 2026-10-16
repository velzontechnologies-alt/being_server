const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  admin_id: {
    type:String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  start_date: {
    type: Date,
  },
  end_date: {
    type: Date,
  },
  start_time: {
    type: String,
  },
  end_time: {
    type: String,
  },
  status: {
    type: Boolean,
  },

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Event", eventSchema);
