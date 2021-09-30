const mongoose = require('mongoose');

const sellerSchema = mongoose.Schema(
  {
    sellerName: {
      type: String,
      required: true,
      trim: true
    },
    shopName: {
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
    city: {
      type: String,
      required: true
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
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    },
    role:{
        type: String,
      default:'Seller'
    }
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('Seller', sellerSchema);