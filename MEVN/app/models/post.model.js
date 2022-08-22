module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      tags: String,
      numOfTags: Number,
      published: Boolean,
    },
    {
      url: {
        first: String,
        second: String,
        third: String,
        fourth: String,
      },
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const Post = mongoose.model("post", schema);
  return Post;
};

/*
Result looks like:
{
  "title": "Js Tut#",
  "description": "Description for Tut#",
  "published": true,
  "createdAt": "2020-02-02T02:59:31.198Z",
  "updatedAt": "2020-02-02T02:59:31.198Z",
  "id": "5e363b135036a835ac1a7da8"
}
*/
