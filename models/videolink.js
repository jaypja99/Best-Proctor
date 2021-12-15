const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const videoSchema = mongoose.Schema(
  {
    Standard: {
      type: String,
      required: true,
      trim: true
    },
    Subjects: {
      type: String,
      required: true,
      trim: true
    },
    description:{
      type: String,
      required: true,
      trim: true
    }
  },
  {
    timestamps: true
  }
);



module.exports = mongoose.model('videolink', videoSchema);