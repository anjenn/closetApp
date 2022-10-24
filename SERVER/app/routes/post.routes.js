module.exports = app => {
    const posts = require("../controllers/post.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Post
    router.post("/PostEditor", posts.createPost); // works
    // Retrieve all Posts
    router.get("/FeedView", posts.getAllPosts); // works
    // Delete a Post with id
    router.delete("/PostEditor/:id", posts.deletePost); // works
    // Update a Post with id
    router.put("/PostEditor/:id", posts.updatePost); // works (sent the entire output object including id & timestampe. All field was modifiable)
    // Retrieve a single Post with id
    router.get("/PostEditor/:id", posts.getOnePost); // works
    // Retrieve a single Post with id
    router.get("/MyPage", posts.getSavedPosts); // works
    // Get users' posts
    router.get("/MyPage/:id", posts.getUserPosts); // works
  
    app.use('/api', router);
  };