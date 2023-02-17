
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"
const Posts = ({ posts }) => {

  let navigate = useNavigate()

  const handleDelete = async (id) => {

    await axios.delete(`http://localhost:3001/posts/${id}`)
    navigate('/')
  };


  return (
    <div id="posts">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.postType} | {post.userTag}</h3>

          <p className="postMessage">{post.message}</p>
          <button onClick={() => handleDelete(post._id)}>Vote to Delete!</button>
          <Link to={`${post._id}`}>
            <h4 className="details">Post Details</h4>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts