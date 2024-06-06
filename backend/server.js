require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const offeringsRouter = require('./routes/offerings');

const app = express();

const mongoURI = process.env.MONGO_URI; // Use environment variable for MongoDB URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.error('MongoDB connection error:', error));

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/offerings', offeringsRouter);

app.listen(5001, () => console.log('Server running on port 5001'));
