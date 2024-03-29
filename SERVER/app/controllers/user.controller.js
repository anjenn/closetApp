const mongoose = require('mongoose');
const User =  require("../models/user.model.js")(mongoose);

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Userman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

exports.createUser = (req, res) => {
    // Validate request
    if (!req.body.userName) {
      res.status(400).send({ message: "Content cannot be empty" });
      return;
    }
    // Create a User
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      password: req.body.password,
      userName: req.body.userName,
      savedPosts: req.body.savedPosts
    });
    // Save User in the database
    user
      .save(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User."
        });
    });
};
exports.getUserInfo = (req, res) => {
  // IT'S USERNAME, DO NOT CONFUSE WITH OBJECT ID!!!!
    const {userName} = req.query;
    // console.log(userName);
    User.find({"userName": {$in: userName}})
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found User with id " + userName });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving User with id=" + userName });
    });
};
exports.deleteUserInfo = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      } else {
        res.send({
          message: "User was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete User with id=" + id
      });
    });
}
exports.updateUserInfo = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const {userID} = req.query;
  User.findByIdAndUpdate(userID, req.body, { useFindAndModify: false })
  .then(data => {
    if (!data) {
      res.status(404).send({
        message: `Cannot update User with id=${userID}. Maybe User was not found!`
      });
    } else res.send({ message: "User was updated successfully." });
  })
  .catch(err => {
    res.status(500).send({
      message: "Error updating User with id=" + userID
    });
  });
  /* // sth like only updating a specific field, but this doesn't work now for unknown reason
  User.findByIdAndUpdate(userID, { $set: {savedPosts}}, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${userID}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + userID
      });
    });
  */
}

exports.updateUserInfo2 = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;

    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id=${id}. Maybe User was not found!`
        });
      } else res.send({ message: "User was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
  }
/*
Version that only updates the 'savedPosts' field (doesn't work)
exports.updateUserInfo2 = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
    const id = req.params.id;
    User.findByIdAndUpdate(id, { $set: {savedPosts}}, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update User with id=${id}. Maybe User was not found!`
          });
        } else res.send({ message: "User was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
*/