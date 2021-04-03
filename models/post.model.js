const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  post_img_id: {
    type: String,
  },
  donatee_img_id: {
    type: String,
  },
  donatee_desc: {
    type: String,
  },
  donatee_name: {
    type: String,
  },
  title: {
    type: String,
  },
  summary: {
    type: String,
  },
  content: {
    type: String,
  },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
  user_id: { type: Schema.Types.ObjectId },
  post_type: {
    type: Boolean,
  },
  is_deleted: { type: Boolean },

});
PostSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.model("post", PostSchema);