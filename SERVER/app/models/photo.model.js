module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        postID: Number,
        order: Number,
        url: String,
        edits: [{ type: String }]
      }
    );
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Photo = mongoose.model("photo", schema);
    return Photo;
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