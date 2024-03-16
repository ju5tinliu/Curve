const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  progress: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('Skill', skillSchema);
