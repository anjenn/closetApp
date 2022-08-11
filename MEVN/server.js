const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const db = require("./app/models");

///////
// https://medium.com/bb-tutorials-and-thoughts/how-to-develop-and-build-vue-js-app-with-nodejs-bd86feec1a20
const users = [];
app.get("/MEVN/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.get("/api/users", (req, res) => {
  console.log("api/users called!");
  res.json(users);
});

app.post("/api/user", (req, res) => {
  const user = req.body.user;
  console.log("Adding user:::::", user);
  users.push(user);
  res.json("user addedd");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../my-app/build/index.html"));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

/////////////

var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to jenn's application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
