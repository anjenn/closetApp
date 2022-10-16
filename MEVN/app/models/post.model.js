/*
var dataSchema = require('mongoose').Schema({
    userId: String,
    url: [{ type: String }],
    tags: [{ type: String }],
    },
    { timestamps: true }
);
schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
module.exports = mongoose.model('Post', dataSchema)

*/
module.exports = mongoose => {
    const Post = mongoose.model(
      "post",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Post;
  };