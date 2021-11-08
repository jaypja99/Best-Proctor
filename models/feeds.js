const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const feedsSchema = mongoose.Schema(
  {
    Title: {
      type: String,
      required: true,
      trim: true
    },
    Caption: {
      type: String,
      required: true,
      trim: true
    },
    Privacy: {
      type: String,
      required: true,
      trim: true
    },
    Notify: {
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



module.exports = mongoose.model('feeds', feedsSchema);