const mongoose = require('mongoose');

const ContentOfferingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  views: {
    type: String,
    required: true
  },
  locations: {
    type: [String],
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('ContentOffering', ContentOfferingSchema);
