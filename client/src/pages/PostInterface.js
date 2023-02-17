import Post from '../components/Post'
import Posts from '../components/Posts'
import { useState, useEffect } from 'react'
import axios from 'axios'


const PostInterface = (props) => {

  const [posts, setPosts] = useState([])

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


  return (
    <div className='posts'>
      <Post getPosts={getPosts} />
      <Posts posts={posts} />

    </div>
  )
}

export default PostInterface