/*
- Express is for building the Rest apis
- body-parser helps to parse the request and create the req.body object
- cors provides Express middleware to enable CORS with various options.
*/

require('dotenv').config();
const express = require("express");
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
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

/* Simple Route */
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to Jenn's application." });
// });

/* linking DBs */
require("./app/routes/post.routes")(app); // needs it before listen()
require("./app/routes/user.routes")(app); // needs it before listen()
require("./app/routes/photo.routes")(app); // needs it before listen()

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