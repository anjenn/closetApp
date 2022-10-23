module.exports = app => {
    const users = require("../controllers/photo.controller.js")
  
    var router = require("express").Router();
  
    // Add a new photo object
    router.post("/PostEditor/:postID", users.createPhoto);
    // Delete a photo with id
    router.delete("/PostEditor/:postID", posts.deletePhoto);
    // Retrieve a photo info
    router.get("/PostEditor/:postID", users.getPhoto);
    // Update/replace a photo
    router.put("/PostEditor/:postID", users.updatePhoto);
    
    app.use('/api', router);
  };