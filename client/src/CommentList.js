import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function CommentList({comments}) {
  

  return (
    <div>
    <ul>
    {
        comments.map((item) => <li key={item.id}>
        {item.content}
        </li>)
    }
    </ul>
    </div>
  )
}
