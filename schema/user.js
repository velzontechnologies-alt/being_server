const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 event_id:{
type:String
 },
 first_name: {
    type: String,
  },
  last_name: {
    type: String,
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

  DOB:{
    type:String
  },

country:{
type:String
},
occupation:{
type:String
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


status:{
  type:String
},

  created_by: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
