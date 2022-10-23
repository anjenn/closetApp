module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userName: String,
        password: String,
        email: String,
        savedPosts: [{ type: String }]
      }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const User = mongoose.model("user", schema);
    return User;
};


// its object looks like:
/*
{
    "userName": "Jenn",
    "password": "abcde",
    "email": "abcde@gmail.com",
    "savedPosts": [
        "postId1",
        "postId2",
        "postId3",
        "postId4"
    ],
    "id": "634c893520424c8e5b5c41dc"
}
*/

// the user id should be saved in the local storage
// the array of posts that user likes should also be saved in the local storage
// when user deletes or likes id, user is found by id, and the post id is deleted or appended via update