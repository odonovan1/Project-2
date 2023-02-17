import { useEffect } from "react"
import Comment from "./Comment"

const CommentSection = ({ post }) => {
  const initialState = []

  useEffect(() => {

  }, [post])

  return (
    <div className="commentDiv">

      <Comment />
      <h1>COMMENT SECTION</h1>
      {post.comments &&
        <div id="comments">
          {post.comments.map((comment) => (
            <div key={comment.commentor} className="comment">
              <h3>Commentor: {comment.commentor}</h3>
              <p>Reply: {comment.comment}</p>

            </div>
          ))}
        </div>
      }
    </div>
  )
}

export default CommentSection