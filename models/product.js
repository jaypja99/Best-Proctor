const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
  {
    productname: {
      type: String,
      required: true,
      trim: true
    },
    schoolname: {
      type: String,
      required: true,
      trim: true
    },
    Standard: {
      type: String,
      required: true,
      trim: true
    },
    productcat: {
      type: String,
      required: true,
      trim: true
    },
    productsubcat:{
      type: String,
      required: true,
      trim: true
    },
    productquantity:{
      type: String,
      required: true,
      trim: true
    },
   
    productprice:{
      type: String,
      required: true,
      trim: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    }
  
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('product', productSchema);