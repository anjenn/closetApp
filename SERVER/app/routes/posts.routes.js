module.exports = app => {
    const posts = require("../controllers/post.controller.js")
  
    var router = require("express").Router();
  
    // (one) Create a new post
    router.post("/PostEditor", posts.createPost); // works
    // (many) Retrieve all posts
    router.get("/FeedView", posts.getAllPosts); // works
    // (one) Delete a post with id
    router.delete("/PostEditor/:id", posts.deletePost); // works
    // (one) Update a post with id
    router.put("/PostEditor/:id", posts.updatePost); // works (sent the entire output object including id & timestampe. All field was modifiable)
    // (one) Retrieve a single post with id
    router.get("/PostEditor/:id", posts.getOnePost); // works

    router.get("/MyPage/:id", posts.getAllPostsMp);
    app.use('/api', router);
};