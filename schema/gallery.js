const mongoose = require("mongoose");

const galleryImageSchema = new mongoose.Schema({
  admin_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: {
    type: String,
  },
  heading: {
    type: String
  },
  title: {
    type: String
  },
  status: {
    type: Boolean,
    default: true
  },
  description: {
    type: String,
  },
  sub_image: [
    {
      type: String,
    },
  ],
  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GalleryImage", galleryImageSchema);
