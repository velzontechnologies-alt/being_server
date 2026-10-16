const mongoose = require("mongoose");

const programSchema = new mongoose.Schema({
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  card_image: {
    type: String,
  },

  card_description: {
    type: String,
  },

  card_title: {
    type: String,
  },

  card_status: {
    type: Boolean,
    default: true,
  },
  ideal: {
    type: String,
  },
  what_you_gain: {
    type: String,
  },
  suitable: {
    type: String,
  },
  tagline: {
    type: String,
  },
  key_out_come: {
    type: String,
  },

  status: {
    type: String
  },

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Program", programSchema);
