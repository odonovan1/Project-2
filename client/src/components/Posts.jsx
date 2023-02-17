
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
          <h3>Type: {post.postType}</h3>
          <p>Subject: {post.userTag}</p>
          <p>Message: {post.message}</p>
          <button onClick={() => handleDelete(post)}>Delete Counter</button>
          <Link to={`${post._id}`}>
            <h1>YAYEET</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts