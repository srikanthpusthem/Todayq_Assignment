const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
  cart: {
    type: Array,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
  files: {
    type: [String],
    required: true
  }
});

module.exports = mongoose.model('Transaction', TransactionSchema);