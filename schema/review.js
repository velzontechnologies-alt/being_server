const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  
    name: {
    type: String,
  },

  tag: {
    type: String,
  },

 
  description: {
    type: String,
  },

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
