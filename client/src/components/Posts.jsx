
import { useState } from "react"
import { Link } from "react-router-dom"
const Posts = ({ posts }) => {

  const [clickCount, setClickCount] = useState(0);


  const handleDelete = async (e) => {
    console.log(posts)
    console.log(e)
    if (clickCount >= 3) {
      console.log('its three')
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
          <button onClick={handleDelete}>Delete Counter</button>
          <Link to={`${post._id}`}>
            <h1>YAYEET</h1>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Posts