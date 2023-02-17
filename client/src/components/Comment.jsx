import axios from 'axios'
import { useState } from 'react'

const Comment = () => {


  const initialState = {
    commentor: '',
    comment: ''
  }

  const [commentsState, setCommentsState] = useState(initialState)

  const getComments = async () => {
    try {
      let res = await axios.get('http://localhost:3001/posts/:id')

      setCommentsState(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    await axios.put('http://localhost:3001/posts/:id', commentsState)

    setCommentsState(initialState)
    getComments()
  }



  const handleChange = (e) => {
    setCommentsState({ ...commentsState, [e.target.id]: e.target.value })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='commentor'>Commentor:</label>
        <input type='text' id='commentor' onChange={handleChange} value={commentsState.commentor} />
        <label htmlFor='comment'>Comment:</label>
        <input type='text' id='comment' onChange={handleChange} value={commentsState.comment} />

        <button type='submit'>Comment</button>
      </form>
    </div>
  )
}

export default Comment