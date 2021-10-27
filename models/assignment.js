const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const assignmentSchema = mongoose.Schema(
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



module.exports = mongoose.model('assignment', assignmentSchema);