module.exports = mongoose => {
    var schema = mongoose.Schema(
      {
        userID: String,
        tag: String,
        photos: [
          {
            order: Number,
            url: String,
            imageEdits: {
              brightness: Number,
              contrast: Number,
              saturation: Number
            }
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
        "userID": 4,
        "tag": "tag1",
        "photos": [
            {
                "order": 1,
                "url": "url1",
                "imageEdits": [
                    0,
                    1,
                    4,
                    5
                ],
                "_id": "6357ff4ef3570dc984b5ec25"
            }
        ],
        "createdAt": "2022-10-25T15:22:54.543Z",
        "updatedAt": "2022-10-25T15:22:54.543Z",
        "id": "6357ff4ef3570dc984b5ec24"
    }
// id format is "id" in the frontend, "_id" in the backend
*/