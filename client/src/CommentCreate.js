import React, {useState} from 'react'
import axios from 'axios'

export default function CommentCreate({postId}) {

    const [comment,setComment] = useState("")

    const onSubmit = async () => {
        
        await axios.post(`http://localhost:4001/posts/${postId}/comment`, {
            content: comment
        })

        setComment("")
    }
  return (
    <div>
    <form >
    <div className="form-group">
    <label >Comment</label>
    <input value={comment} onChange={e =>setComment(e.currentTarget.value) } className='form-control' type="text" />
    </div>
    <button onClick={onSubmit}  className='btn btn-primary' type='button'>Submit</button>
    </form>
    </div>
  )
}
