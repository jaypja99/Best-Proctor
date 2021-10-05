const mongoose = require('mongoose');


const schoolSchema = mongoose.Schema(
  {
    schoolName: {
      type: String,
      required: true,
      trim: true
     
    },
    schoolType: {
      type: String,
      required: true,
      trim: true
    },
    contactNumber:{
      type: String,
      required: true,
      trim: true
    },
    addressLine:{
      type: String,
      required: true,
      trim: true
    },
   
    State:{
      type: String,
      required: true,
      trim: true
    },
    city: {
      type: String,
      required: true
    },
    pinCode:{
      type: String,
      required: true,
      trim: true
    },
    adminName:{
      type: String,
      required: true,
      trim: true
    },
    adminNumber:{
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true
    },
    username:{
        type: String,
      required: true
      
    },
    password:{
        type:String,
        required:true
    },
    
    role:{
        type: String,
        default:'School'
    }
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('School', schoolSchema);