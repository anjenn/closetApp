module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      userId: String,
      url: { type: [String], index: true },
      tags: { type: [String], index: true },
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
