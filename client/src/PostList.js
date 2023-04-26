import React, {useState, useEffect} from 'react'
import axios from 'axios'
import CommentCreate from './CommentCreate'
import CommentList from './CommentList'

export default function PostList() {

    const [posts,setPosts]= useState({})
    
    useEffect(() => {
        axios.get("http://localhost:4002/posts")
        .then((response) => {

            setPosts(response.data)
        })
    },[])

    const renderedPost = Object.values(posts).map(post => {
        return <div 
        key={post.id} 
        className='card mx-3' 
        style={{width: "30%",marginBottom:"20px"}}>

        <div className="card-body">
        <h3>{post.title}</h3>
        <CommentList comments={post.comments} />
        <CommentCreate postId={post.id} />
        </div>


        </div>
    })
  return (
    <div className='row'>
    {
        renderedPost
    }</div>
  )
}
