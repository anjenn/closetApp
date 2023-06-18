module.exports = app => {
    const users = require("../controllers/user.controller.js")
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/SignUp", users.createUser); // works
    // Retrieve one user info
    router.get("/LogIn", users.getUserInfo); // works
    // Delete a user info with id
    router.delete("/MyPage/:id", users.deleteUserInfo); // works
    // Update a user info with id
    router.put("/FeedView", users.updateUserInfo); // works
    // Update a user info with id
    router.put("/MyPage/:id", users.updateUserInfo2); // works
  
    app.use('/api', router);
};