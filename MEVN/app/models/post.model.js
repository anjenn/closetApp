module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userID: Number,
        tag: String,
        photos: [ // should be checked
          {
            order: Number,
            url: String,
            edits: [{ type: String }],
            id: Number
          }
        ]
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
    "userID": "Jenn",
    "tag": "Tag",
    "createdAt": "2022-10-16T22:44:05.037Z",
    "updatedAt": "2022-10-16T22:44:05.037Z",
    "id": "634c893520424c8e5b5c41dc"
}
// id format is "id" in the frontend, "_id" in the backend
*/