const mongoose = require('mongoose');

const receipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 225
  },
  description: {
    type: String,
    required: true,
    min: 6
  },
  ingredient: {
    type: [String],
    required: true
  },
  BeforeYouCook: {
    type: [String],
    required: true
  },
  CookingDirections: {
    type: [String],
    required: true
  },
  tools : {
    type: [String],
    required: true
  },
  imageUrl: {
    type: String,
    required: true,
    min: 6
  }
});

module.exports = mongoose.model('Receipe', receipeSchema);