const express = require('express');
const multer = require('multer');
const ContentOffering = require('../models/ContentOffering');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/', async (req, res) => {
  try {
    const offerings = await ContentOffering.find();
    res.json(offerings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', upload.single('logo'), async (req, res) => {
  const { title, link, views, locations, rating, type, price } = req.body;
  const logo = req.file ? req.file.path : '';

  const newOffering = new ContentOffering({
    title,
    link,
    logo,
    views,
    locations: locations.split(','),
    rating,
    type,
    price
  });

  try {
    const savedOffering = await newOffering.save();
    res.status(201).json(savedOffering);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
