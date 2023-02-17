import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CommentSection from '../components/CommentSection'



const PostInfo = () => {

  let { id } = useParams()

  const [posts, setPosts] = useState([])

  const [post, setPost] = useState({})

  const getPosts = async () => {

    let res = await axios.get('http://localhost:3001/posts')

    setPosts(res.data)

  }
  useEffect(() => {
    getPosts()
  }, [])

  const getPost = async () => {
    for (let i = 0; i < posts.length; i++) {
      if (posts[i]._id === id) {
        console.log("hello")
        setPost(posts[i])
        getPost()
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