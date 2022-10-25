
module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userName: String,
        password: String,
        email: String,
        savedPosts: [{ type: String }] // postIDs
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
    "userName": "user01",
    "password": "abc12345",
    "email": "abc@gmail.com",
    "savedPosts": [
        "6357ec9a4f47830e941ed0a6",
        "6357ff334f47830e941ed0aa"
    ],
    "id": "63581b400d967569c559eacf"
}
*/

// the user id should be saved in the local storage
// the array of posts that user likes should also be saved in the local storage
// when user deletes or likes id, user is found by id, and the post id is deleted or appended via update