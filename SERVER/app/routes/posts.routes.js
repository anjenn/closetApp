module.exports = app => {
    const posts = require("../controllers/post.controller.js")
  
    var router = require("express").Router();
  
    // (one) Create a new Post
    router.post("/PostEditor", posts.createPost); // works
    // (many) Retrieve all Posts
    router.get("/FeedView", posts.getAllPosts); // works
    // (one) Delete a Post with id
    router.delete("/PostEditor/:id", posts.deletePost); // works
    // (one) Update a Post with id
    router.put("/PostEditor/:id", posts.updatePost); // works (sent the entire output object including id & timestampe. All field was modifiable)
    // (one) Retrieve a single Post with id
    router.get("/PostEditor/:id", posts.getOnePost); // works
    // (many) Retrieve posts with multiple IDs
    router.get("/MyPage", posts.getSavedPosts); // works
    // (many) Get users' posts
    router.get("/MyPage/:id", posts.getUserPosts); // works
  
    app.use('/api', router);
  };