const mongoose = require('mongoose');
const Photo =  require("../models/photo.model.js")(mongoose);

/*
In the callback, we have a res and a req. res means response, and req means request. We use res for sending responses to our client, like Userman, or any front-end client. And we use req for receiving requests from a client app like Postman, or any front-end client.
*/

exports.createPhoto = (req, res) => {
    // Validate request
    if (!req.body.url) {
      res.status(400).send({ message: "Content cannot be empty" });
      return;
    }
    // Create a Photo
    const photo = new Photo({
        order: req.body.order,
        url: req.body.url,
        edits: req.body.edits,
    });
    photo
      .save(photo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Photo."
        });
    });
};
exports.getPhoto = (req, res) => {
    const photoID = req.params.id;
    Photo.findById(photoID)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Photo with id " + photoID });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Photo with id=" + photoID });
    });
};
exports.deletePhoto = (req, res) => {
  const photoID = req.params.id;
  Photo.findByIdAndRemove(photoID)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Photo with id=${photoID}. Maybe Photo was not found!`
        });
      } else {
        res.send({
          message: "Photo was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Photo with id=" + photoID
      });
    });
}
exports.updatePhoto = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }
  const photoID = req.params.id;
  Photo.findByIdAndUpdate(userID, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Photo with id=${userID}. Maybe Photo was not found!`
        });
      } else res.send({ message: "Photo was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Photo with id=" + userID
      });
    });
}
