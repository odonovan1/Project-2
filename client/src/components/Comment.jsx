import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Comment = () => {

  let { id } = useParams()
  const initialState = {
    commentor: '',
    comment: ''
  }

  const [commentsState, setCommentsState] = useState(initialState)

  const getComments = async () => {

    let res = await axios.get(`http://localhost:3001/posts/${id}`)
    console.log(res)
    setCommentsState(res.data)

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    await axios.put(`http://localhost:3001/posts/${id}/comment`, commentsState)

    setCommentsState(initialState)
    getComments()

  }

  const handleChange = (e) => {
    setCommentsState({ ...commentsState, [e.target.id]: e.target.value })
  }

  return (
    <div >
      <form onSubmit={handleSubmit} className='commentForm'>
        <label htmlFor='commentor'>Commentor:</label>
        <input type='text' id='commentor' onChange={handleChange} value={commentsState.commentor} />
        <label htmlFor='comment'>Comment:</label>

        <textarea id="comment" cols="50" rows="10" onChange={handleChange} value={commentsState.comment}></textarea>
        <button type='submit'>Comment</button>
      </form>
    </div>
  )
}

export default Comment