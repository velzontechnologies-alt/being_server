const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_number: {
    type: String,
  },
  password: {
    type: String,
  },
  description: {
    type: String,
  },
  profile_image: {
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

module.exports = mongoose.model("Admin", adminSchema);
