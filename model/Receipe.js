const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
})