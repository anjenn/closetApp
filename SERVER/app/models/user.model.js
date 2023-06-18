module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        firstName: String,
        lastName: String,
        password: String,
        userName: String,
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
    "firstName": "JeongHyun",
    "lastName": "An",
    "password": "abc12345",
    "userName": "Jenn",
    "savedPosts": [
        "6357ec9a4f47830e941ed0a6",
        "6357ff334f47830e941ed0aa",
        "6357ff4ef3570dc984b5ec24"
    ],
    "id": "635820a640d88fdcda137cb5"
}
*/

// the user id should be saved in the local storage
// the array of posts that user likes should also be saved in the local storage
// when user deletes or likes id, user is found by id, and the post id is deleted or appended via update