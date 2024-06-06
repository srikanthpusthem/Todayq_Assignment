const express = require('express');
const multer = require('multer');
const { completeTransaction } = require('../controllers/checkout');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.any(), completeTransaction);

module.exports = router;