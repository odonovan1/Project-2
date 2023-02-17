
import axios from "axios";
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
const Posts = ({ posts }) => {

  const [clickCount, setClickCount] = useState(0);

  let { id } = useParams()


  const handleDelete = async (id) => {
    console.log(id)

    if (clickCount >= 3) {
      await axios.delete({ _id: id })
    } else {
      setClickCount(clickCount + 1);
    }
  };


  return (
    <div id="posts">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.postType} | {post.userTag}</h3>

          <p className="postMessage">{post.message}</p>
          <button onClick={() => handleDelete(post._id)}>Vote to Delete!</button>
          <Link to={`${post._id}`}>
            <h4>Post Details</h4>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts