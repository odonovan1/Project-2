import axios from "axios"
import { useState, useEffect } from "react"

const Post = (props) => {
  const initialState = {
    postTitle: '',
    userTag: '',
    message: '',
  }

  const [postState, setPostState] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.post('http://localhost:3001/posts', postState)

    setPostState(initialState)
    props.getPosts()
  }

  const handleChange = (e) => {
    setPostState({ ...postState, [e.target.id]: e.target.value })
  }



  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="postType">Type of Post:</label>
      <select id="postType" onChange={handleChange} value={postState.postType}>
        <option value="hot">Hot Take</option>
        <option value="contro">Controversial</option>
        <option value="shower">Shower Thought</option>
      </select>
      <label htmlFor="userTag">User Tag:</label>
      <input type="text" id="userTag" onChange={handleChange} value={postState.userTag} />
      <label htmlFor="message">Message</label>
      <textarea id="message" cols="30" rows="10" onChange={handleChange} value={postState.message}></textarea>
      <button type="submit">Send</button>
    </form>
  )
}

export default Post