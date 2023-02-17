
import axios from "axios";
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
const Posts = ({ posts }) => {

  const [clickCount, setClickCount] = useState(0);

  let { id } = useParams()


  const handleDelete = async (post) => {
    console.log(post)

    if (clickCount >= 3) {
      await axios.delete({ _id: post._id })
    } else {
      setClickCount(clickCount + 1);
    }
  };


  return (
    <div id="posts">
      {posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.postType} | {post.userTag}</h3>

          <p>Message: {post.message}</p>
          <button onClick={() => handleDelete(post._id)}>Vote to Delete!</button>
          <Link to={`${post._id}`}>
            <h1>Post Details</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts