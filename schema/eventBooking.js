const mongoose = require("mongoose");

const eventbookingSchema = new mongoose.Schema({
  event_id: {
    type: String
  },
  form_id:
  {
    type: String
  },

  event_name: {
    type: String
  },
  program_id:
  {
    type: String
  },
  first_name: {
    type: String,
  },
  last_name:
  {
    type: String,
  },

  email: {
    type: String,
  },

  phone_number: {
    type: String,
  },

  description: {
    type: String,
  },

  DOB: {
    type: String
  },

  country: {
    type: String
  },
  occupation: {
    type: String
  },

  interested_in: [
    {
      type: String,

    },
  ],

  support_with: [
    {
      type: String,

    },
  ],

  source_about_us: [{
    type: String,

  }],

  status: [{
    type: String,
    enum: ["FORM", "CONTACT_US", "EVENT"],
  }],

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Eventbooking", eventbookingSchema);
