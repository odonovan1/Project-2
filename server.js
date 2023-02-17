const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001

const db = require('./db')

const { Post } = require('./models')
const { Comment } = require('./models')

const app = express()

// middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))


app.get('/posts', async (req, res) => {
  console.log(req.body)
  let posts = await Post.find({})
  res.send(posts)
})

app.post('/posts', async (req, res) => {
  let newPost = await Post.create(req.body)
  res.send(newPost)
})

app.delete('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const deletedPost = await Post.findByIdAndDelete(id);
  res.send(deletedPost)
});

app.put('/posts/:id', async (req, res) => {

  const { id } = req.params
  const comments = await Post.findOne({ _id: id })
  let newComment = await Comment.create(req.body)
  const updated = await Post.findOneAndUpdate(
    { _id: id },
    { comments: [...comments.comments, newComment] },
    { new: true }
  )


  res.send(updated)

})

app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT)
})
