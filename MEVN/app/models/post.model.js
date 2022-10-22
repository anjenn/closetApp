module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userId: String,
        urls: [{ type: String }],
        tag: String
      },
      { timestamps: true }
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Post = mongoose.model("post", schema);
    return Post;
};


// its object looks like:
/*
{
    "userId": "Jenn",
    "urls": [
        "http1",
        "http2",
        "http3",
        "http4"
    ],
    "likedBy": [
        "user1",
        "user2",
        "user3",
        "user4"
    ],
    "tags": "Tag",
    "createdAt": "2022-10-16T22:44:05.037Z",
    "updatedAt": "2022-10-16T22:44:05.037Z",
    "id": "634c893520424c8e5b5c41dc"
}
*/