module.exports = app => {
    const users = require("../controllers/user.controller.js")
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/SignUp", users.createUser); // works
    // Retrieve one User info
    router.get("/LogIn", users.getUserInfo); // works
    // Delete a User info with id
    router.delete("/MyPage/:id", users.deleteUserInfo); // works
    // Update a User info with id
    router.put("/FeedView", users.updateUserInfo); // works
    // Update a User info with id
    router.put("/MyPage/:id", users.updateUserInfo2); // works
  
    app.use('/api', router);
  };