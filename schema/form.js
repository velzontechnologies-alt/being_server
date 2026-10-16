const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  event_id:{
type:String
  },
  program_id:{
type:String
  },
    name: {
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

  interested_in: [
    {
      type: String,
      enum: [
        "Figure to Future Preview",
        "Orchestration of Life",
        "Personal Coaching",
        "Youth Coaching",
        "Women's Programmes",
        "Corporate Workshops",
        "Speaking Engagements",
        "Not Sure Yet",
        "Other",
      ],
    },
  ],

  support_with: [
    {
      type: String,
      enum: [
        "Life Direction & Purpose",
        "Career & Business",
        "Relationships",
        "Personal Growth",
        "Confidence & Self-Esteem",
        "Stress & Emotional Wellbeing",
        "Leadership Development",
        "Other",
      ],
    },
  ],

  source_about_us: {
    type: String,
    enum: [
      "Social Media",
      "Friend/Referral",
      "Google Search",
      "Event",
      "LinkedIn",
      "Media Feature",
      "Other",
    ],
  },

  status:{
    type:String
  },

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Form", formSchema);
