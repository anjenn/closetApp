const mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "This field is required",
  },
  id: {
    type: number,
    required: "this field is required",
  },
  author: {
    type: String,
    required: "this field is required",
  },
  tags: {
    type: Object,
    required: "this field is required",
  },
});

mongoose.model("Post", postSchema);

/* module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      title: String,
      description: String,
      published: Boolean,
    },
    { timestamps: true }
  );
  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });
  const postManager = mongoose.model("postManager", schema);
  return postManager;
};
*/
