import React, { useContext } from 'react'
import Time from './Time'
import { AuthContext } from './auth'

const Comment = ({ comment }) => {
    //const auth = useContext(AuthContext)
    return (
      <div>
        <span class="text-black-50 border-bottom">{comment.content} por: {comment.user.name} em: <Time timestamp={comment.createdAt} /></span>
        <p></p>
      </div>
    )
  }

  export default Comment
