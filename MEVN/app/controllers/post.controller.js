const mongoose = require('mongoose');
const Post =  require("../models/post.model.js")(mongoose);

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Postman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

/*
getAllPosts - user filter to check for tags
filterByTags
createOnePost
deleteOnePost
updateOnePost
getOnePost
getUsersPosts
getLikedPosts
*/


// Create and Save a new post
exports.create = (req, res) => {
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