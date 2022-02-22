const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true,});

const mongoConnection = mongoose.connection;

mongoConnection.once('open', () => {
  console.log("MongoDB connected successfully");
})

const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
  console.log('Listening on port ::', PORT);
})

