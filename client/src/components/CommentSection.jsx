import { useState } from "react"
import { Link } from "react-router-dom"
import Comment from "./Comment"

const CommentSection = (props) => {
  console.log(props)

  return (
    <div>
      <Comment />
      <div id="posts">
        {props.posts.map((post) => (
          <div key={post._id} className="post">
            <h3>Type: {post.postType}</h3>
            <p>Message: {post.message}</p>

          </div>
        ))}
      </div>

    </div>
  )
}

export default CommentSection