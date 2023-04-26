import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

function App()
{
    return (
        <div>
        <h3>Blog App</h3>
        <PostCreate/>
        <hr />
        <h3>Posts</h3>
        <PostList />
           
        </div>
    )
}

export default App