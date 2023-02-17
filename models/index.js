const mongoose = require('mongoose')
const postSchema = require('./post')
const commentSchema = require('./comment')

const Post = mongoose.model('Post', postSchema)
const Comment = mongoose.model('Comment', commentSchema)

module.exports = {
  Post,
  Comment
}