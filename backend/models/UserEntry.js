const mongoose = require('mongoose');

const UserEntrySchema = new mongoose.Schema({
  courses: [
    {
      name: String,
      credits: Number,
      grade: String,
    },
  ],
  cgpa: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserEntry', UserEntrySchema);
