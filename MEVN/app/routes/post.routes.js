module.exports = app => {
    const posts = require("../controllers/post.controller.js")
  
    var router = require("express").Router();
  
    // Create a new Post
    router.post("/PostEditor", posts.createPost);
    // Retrieve all Posts
    router.get("/FeedView", posts.getAllPosts);
    // Delete a Post with id
    router.delete("/PostEditor/:id", posts.deletePost);
    // Update a Post with id
    router.put("/PostEditor/:id", posts.updatePost);
    // Retrieve a single Post with id
    router.get("/PostEditor/:id", posts.getOnePost);  
    // Get users' posts
    router.get("/MyPage", posts.getUserPosts);
  
    app.use('/api', router);
  };