import React, {useState} from 'react'
import axios from 'axios'

export default function PostCreate() {
    const [title,setTitle] = useState("")

    const handlePostSubmit = async  () => {
     
        await axios.post("http://localhost:4000/posts", {
            title
        });

        setTitle("")
    }

    return (
        <div style={{ padding: 30}}>
        <form action="">
            <label>Title</label>
            <input value={title} onChange={e => setTitle(e.currentTarget.value) } style={{padding: 10,margin: 10}} type="text" />
                <br />
            <button onClick={handlePostSubmit} type='button'>Submit</button>
        </form>
        </div>
    )
}
