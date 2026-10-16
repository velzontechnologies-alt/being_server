const mongoose = require("mongoose");

const demoSchema = new mongoose.Schema({
  
    name: {
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

module.exports = mongoose.model("demo", demoSchema);
