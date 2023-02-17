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

      <div>

        <h1 className='postDetails'>Post Author: {post.userTag}</h1>
        <h2 className='postDetails'>Post Type: {post.postType}</h2>
        <p className='userPost'>{post.message}</p>
      </div>
      <CommentSection post={post} />





    </div>
  )
}
export default PostInfo