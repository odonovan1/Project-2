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
  let posts = await Post.find({}).populate('comments')
  res.send(posts)
})

app.get('/posts/:id', async (req, res) => {
  const id = req.params.id;
  const post = await Post.findById(id).populate('comments')

  res.send(post)
})

app.post('/posts', async (req, res) => {
  let newPost = await Post.create(req.body)
  res.send(newPost)
})

app.delete('/posts/:id', async (req, res) => {
  const id = req.params.id;
  await Post.findByIdAndDelete(id);
  res.send('post was deleted')
});

app.put('/posts/:id/comment', async (req, res) => {

  const id = req.params.id
  const post = await Post.findOne({ _id: id })
  let newComment = await Comment.create(req.body)
  console.log(newComment)
  post.comments.push(newComment._id)
  await post.save()
  res.send(post)

})

app.listen(PORT, () => {
  console.log(`Connected to port:`, PORT)
})
