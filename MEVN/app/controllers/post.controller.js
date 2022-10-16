const mongoose = require('mongoose');
const Post =  require("../models/post.model.js")(mongoose);

/*
CHECK WHERE IT'S SUPPOSED TO BE PLURAL AND WHERE IT'S SUPPOSED TO BE SINGULAR
*/

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Postman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

// Create and Save a new post
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Tutorial
    const post = new Post({
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Tutorial in the database
    post
      .save(post)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };


/*
exports.create = (req, res) => {
  if (!req.body.url.length) {
    console.log(`Checking req.body.url.length: ${req.body.url.length}`);
    res.status(400).send({ message: "You need to add at least one photo" });
    return;
  }
  if (!req.body.tags.length) {
    console.log(`Checking req.body.url.length: ${req.body.url.length}`);
    res.status(400).send({ message: "You need to add at least one url" });
    return;
  }
  // Create a Post
  const post = new Post({
    userID: req.body.userID,
    url: req.body.url,
    tags: req.body.tags,
  });
  // Save Post in the database
  post
    .save(post)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the post.",
      });
    });
};
*/



// Retrieve all posts from the database, by the same user (myPage)
// query is used mostly for searching, sorting, filtering, pagination, etc
exports.findAll = (req, res) => {
  const userID = req.query.userID;
  var condition = userID
    ? { userID: { $regex: new RegExp(userID), $options: "i" } }
    : {};
  Post.find(condition)
    .then((date) => {
      res.send(data);
    })
    .catch((err) => {
      message: err.message || "Some error occured while retrieving posts.";
    });
};

/*
// Find a single post with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Post with id" + id });
      else res.send(data);
    })
    .catch((err) => {
      res.status(500).send({ message: "Error retrieving Post with id= " + id });
    });
};
// Update a post by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found!`,
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Post with id=" + id,
      });
    });
};
// Delete a post with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Post.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        });
      } else {
        res.send({
          message: "Post was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id,
      });
    });
};
// Delete all post from the database.
exports.deleteAll = (req, res) => {
  Post.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Posts were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Posts.",
      });
    });
};
*/