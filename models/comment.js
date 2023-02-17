const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    commentor: { type: String, required: false },
    comment: { type: String, required: false }

  },
  { timestamps: true }
)

module.exports = commentSchema