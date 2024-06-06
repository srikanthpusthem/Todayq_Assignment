const Transaction = require('../models/Transaction');

exports.completeTransaction = async (req, res) => {
  const { cart, total } = req.body;
  const files = req.files;

  if (!cart || !total || files.length === 0) {
    return res.status(400).send('All fields are required');
  }

  const cartItems = JSON.parse(cart);
  const filePaths = files.map(file => file.path);

  try {
    const newTransaction = new Transaction({
      cart: cartItems,
      total,
      files: filePaths
    });
    await newTransaction.save();
    res.status(201).send('Transaction completed');
  } catch (error) {
    console.error('Error completing transaction:', error);
    res.status(400).send('Error completing transaction');
  }
};