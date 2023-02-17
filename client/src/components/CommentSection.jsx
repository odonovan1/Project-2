import { useState } from "react"
import { Link } from "react-router-dom"
import Comment from "./Comment"
import axios from "axios"

const CommentSection = ({ post }) => {
  const initialState = []

  const [commentsState, setCommentsState] = useState(initialState)

  const getComments = async () => {
    try {
      let res = await axios.get('http://localhost:3001/posts/:id')

      setCommentsState(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  getComments()

  console.log(post.comments)


  return (
    <div>
      <Comment />
      <h1>COMMENT SECTION</h1>
      <div id="comments">
        {commentsState.map((comment) => (
          <div key={comment.commenter} className="post">
            <h3>Commentor: {comment.commenter}</h3>
            <p>Message: {comment.comment}</p>

          </div>
        ))}
      </div>

    </div>
  )
}

export default CommentSection