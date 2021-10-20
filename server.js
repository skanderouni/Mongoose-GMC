// require express
const express = require('express');
const connectDB = require('./config/connectDB');

//instance methods of all express methods
const app = express();
require('dotenv').config();

// connection with database
connectDB();

// middleware to read the json type
app.use(express.json());

app.use('/api/person', require('./router/Person'));
// Port
const PORT = process.env.PORT;

//create server
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log('server is running ', PORT)
);
