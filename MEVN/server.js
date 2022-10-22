/*
- Express is for building the Rest apis
- body-parser helps to parse the request and create the req.body object
- cors provides Express middleware to enable CORS with various options.
*/

require('dotenv').config();
const express = require("express");
// const bodyParser = require("body-parser"); // apparently body-parser is now deprecated and express does the job
const cors = require("cors");
const app = express();
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL

var corsOptions = {
  origin: "http://localhost:8000",
};

/* MiddleWare */
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// app.use(bodyParser.json()); // deprecated?
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true })); // deprecated?

/* Simple Route */
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Jenn's application." });
// });


require("./app/routes/post.routes")(app); // needs it before listen()

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// calling connect() method
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const database = mongoose.connection;
database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})