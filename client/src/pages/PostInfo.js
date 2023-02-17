import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from "react-router-dom"
import CommentSection from '../components/CommentSection'
import Comment from '../components/Comment'


const PostInfo = (props) => {


  const [posts, setPosts] = useState([])

  const [post, setPost] = useState({})

  const getPosts = async () => {
    try {
      let res = await axios.get('http://localhost:3001/posts')
      setPosts(res.data)
    } catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    getPosts()
  }, [])

  let { id } = useParams()
  const getPost = async () => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i]._id === id) {
        setPost(posts[i])

      } else {
        console.log(`${posts[i]._id} was not chosen`)
      }
    }
  }

  useEffect(() => {
    getPost()
  }, [posts])

  return (
    <div>
      <h1>POSTINFO</h1>
      <div>
        <h3>Post Type: {post.postType}</h3>
        <h3>User: {post.userTag}</h3>
        <p>{post.message}</p>
      </div>
      <CommentSection post={post} />





    </div>
  )
}
export default PostInfo