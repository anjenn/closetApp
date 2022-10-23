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
    "userName": "abc",
    "password": "abc12345",
    "email": "abc@gmail.com",
    "savedPosts": [
        "63547f02fb78d40d15ab6873",
        "63547f1bfb78d40d15ab6879"
    ],
    "id": "635586756863c66b3f070053"
}
*/

// the user id should be saved in the local storage
// the array of posts that user likes should also be saved in the local storage
// when user deletes or likes id, user is found by id, and the post id is deleted or appended via update