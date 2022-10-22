const mongoose = require('mongoose');
const Post =  require("../models/post.model.js")(mongoose);

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Postman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

/*
done:
createOnePost

tba:
getAllPosts - user filter to check for tags
filterByTags
deleteOnePost
updateOnePost
getOnePost
getUsersPosts
getLikedPosts
*/

// Create and Save a new post
exports.createPost = (req, res) => {
    // Validate request
    if (!req.body.userId) {
      res.status(400).send({ message: "Content cannot be empty" });
      return;
    }
    // Create a Post
    const post = new Post({
      userId: req.body.userId,
      urls: req.body.urls,
      tags: req.body.tags
    });
    // Save Post in the database
    post
      .save(post)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Post."
        });
    });
};

exports.getAllPosts = (req, res) => {
  const {tag1, tag2, tag3, tag4, tag5} = req.query;
  // something like this, but tags is an array, not a single item
  // also, since there are 5 fields for tags, any given from the parameter, and given from database match via "null"
  // the search fails.
  // however, i need a way to make sure the number of slots is constant
  Post.find({tags: {$in: [`${tag1}, ${tag2}, ${tag3}, ${tag4}, ${tag5}`]}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};


//figure out how to sort the data with tags (from local storage or from other database)