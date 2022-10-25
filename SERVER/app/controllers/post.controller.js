const mongoose = require('mongoose');
const Post =  require("../models/post.model.js")(mongoose);

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Postman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

// Create and Save a new post
exports.createPost = (req, res) => {
    // Validate request
    if (!req.body.userID) {
      res.status(400).send({ message: "Content cannot be empty" });
      return;
    }
    // Create a Post
    const post = new Post({
      userID: req.body.userID,
      tag: req.body.tag,
      photos: req.body.photos
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
  const {tags} = req.query;
  const tagArr = tags.split(',');
  if(tagArr[0]!=null){
    Post.find({"tag": {$in: tagArr}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  }
  else{
    // must check if this scenario would ever work
    console.log("non-filter scenario executed");
    Post.find()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  }
};
exports.deletePost = (req, res) => {
  // if you have the route /student/:id, then the “id” property is available as req.params.id
  const id = req.params.id;
  const {db} = req.query;
  console.log(`postID: ${id} db: ${db}`);
  if(db == "post"){
    Post.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`
        });
      } else {
        res.send({
          message: "Post was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Post with id=" + id
      });
    });
  }
}
exports.updatePost = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const id = req.params.id;
  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found!`
        });
      } else res.send({ message: "Post was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Post with id=" + id
      });
    });
}
exports.getOnePost = (req, res) => {
  const id = req.params.id;
  Post.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Post with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Post with id=" + id });
    });
}

exports.getUserPosts = (req, res) => {
  const userID = req.params.id;
  // console.log(userID)
  Post.find({"userID": userID})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving posts."
      });
    });
}

exports.getSavedPosts = (req, res) => {
  const {postIDs} = req.query;
  const idArr = postIDs.split(',');
  if(idArr[0]!=null){
    console.log("filter scenario executed");
    Post.find({"_id": {$in: [ '63547f02fb78d40d15ab6873', '63547f1bfb78d40d15ab6879' ]}})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving posts."
        });
      });
  }
  else{
    res.status(400).send({ message: "post ID is not valid" });
      return;
  }
}