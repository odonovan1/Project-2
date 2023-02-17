const { Schema } = require('mongoose')

const postSchema = new Schema(
  {
    postType: { type: String, required: false },
    userTag: { type: String, required: false },
    message: { type: String, required: false },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
  },
  { timestamps: true }
)

module.exports = postSchema