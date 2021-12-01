const mongoose = require('mongoose');

const parentSchema = mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true
    },
    schoolType: {
      type: String,
      required: true,
      trim: true
    },
    Standard: {
      type: String,
      required: true,
      trim: true
    },
    Age: {
      type: String,
      required: true,
      trim: true
    },
    addressLine:{
      type: String,
      required: true,
      trim: true
    },
    schoolName:{
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
    parentName:{
      type: String,
      required: true,
      trim: true
    },
    email:{
      type: String,
      required: true,
      trim: true
    },
    username:{
        type: String,
      required: true
      
    },
    password:{
        type:String,
        required:true
    },
    contactNumber:{
      type:String,
      required:true
  },
    
    role:{
        type: String,
        default:'Parent'
    },
    valid:{
      type:Boolean,
      default:false
    }
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('parents', parentSchema);