const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema({
  admin_id: {
    type:String,
  },
  image: {
    type: String,
  },
  status: {
    type: String,
  },
  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GalleryImage", galleryImageSchema);
