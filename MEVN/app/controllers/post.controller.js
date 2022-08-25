// const db = require("../models");
const express = required("express");
const Post = db.posts;

/*
CHECK WHERE IT'S SUPPOSED TO BE PLURAL AND WHERE IT'S SUPPOSED TO BE SINGULAR
*/

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Postman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

// Create and Save a new post
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
    userName: req.body.userName,
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
// Retrieve all posts from the database.
exports.findAll = (req, res) => {
  const userName = req.query.userName;
  var condition = userName ? {userName: {$regex: new RegExp(userName), $options: 'i'}}
};
// Find a single post with an id
exports.findOne = (req, res) => {};
// Update a post by the id in the request
exports.update = (req, res) => {};
// Delete a post with the specified id in the request
exports.delete = (req, res) => {};
// Delete all post from the database.
exports.deleteAll = (req, res) => {};
// Find all published posts
exports.findAllPublished = (req, res) => {};
