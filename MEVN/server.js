const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
require('dotenv').config();
const mongoString = process.env.DATABASE_URL
/*
Express is for building the Rest apis
body-parser helps to parse the request and create the req.body object
cors provides Express middleware to enable CORS with various options.
*/
const routes = require('./app/routes/routes');
app.use('/api', routes); //now all endpoints will start from '/api' ex) localhost:3000/api/getAll

var corsOptions = {
  origin: "http://localhost:8000",
};

/* MiddleWare */
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/* Simple Route */
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jenn's application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// calling connect() method
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})