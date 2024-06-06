const ContentOffering = require('../models/ContentOffering');

exports.createOffering = async (req, res) => {
  console.log('Request body:', req.body);
  console.log('Request file:', req.file);

  const { title, description, price } = req.body;
  const file = req.file ? req.file.path : null;

  if (!title || !description || !price || !file) {
    console.error('Missing required fields');
    return res.status(400).send('All fields are required');
  }

  try {
    const newOffering = new ContentOffering({ title, description, price, file });
    await newOffering.save();
    res.status(201).send('Content offering created');
  } catch (error) {
    console.error('Error creating content offering:', error); // Log the error
    res.status(400).send('Error creating content offering');
  }
};

exports.getOfferings = async (req, res) => {
  try {
    const offerings = await ContentOffering.find();
    res.status(200).json(offerings);
  } catch (error) {
    res.status(400).send('Error fetching content offerings');
  }
};