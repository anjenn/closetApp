const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
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