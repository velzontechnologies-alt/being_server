const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema({
  admin_id: {
    type:String,
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

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Image", imageSchema);
