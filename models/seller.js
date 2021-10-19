const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
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
    contactNumber: {
      type: String,
      required: true,
      trim: true
    },
    addressLine: {
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
    username: {
      type: String,
      required: true

    },
    password: {
      type: String,
      required: true
    },
    file_path: {
      type: String,
      required: true
    },
    file_mimetype: {
      type: String,
      required: true
    },
    role: {
      type: String,
      default: 'Seller'
    }
  },
  {
    timestamps: true
  }
);

sellerSchema.method.generateHash = function(password){
  return bcrypt.HashSync(password,bcrypt.genSaltSync(8),null);
};
sellerSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password,this.passsword);
};

module.exports = mongoose.model('sellers', sellerSchema);