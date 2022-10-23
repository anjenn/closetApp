module.exports = app => {
    const users = require("../controllers/user.controller.js")
  
    var router = require("express").Router();
  
    // Create a new User
    router.post("/SignUp", users.createUser);
    // Retrieve one User info
    router.get("/LogIn", users.getUserInfo);
    // Delete a User info with id
    router.delete("/MyPage/:id", users.deleteUserInfo);
    // Update a User info with id
    router.put("/FeedView", users.updateUserInfo);
    // Update a User info with id
    router.put("/MyPage/:id", users.updateUserInfo2);
  
    app.use('/api', router);
  };