const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const posts = {

}

app.get('/posts',(req,res) => {
    res.send(posts)
})

// handling events
app.post('/events',(req,res) => {
    const {type,data} = req.body;

    if(type==="PostCreated")
    {
        const {id,title} = data;
        posts[id] = {
            id: id,
            title: title,
            comments: []
        }
    }
    if(type === "CommentCreated")
    {
        const {id,content,postId} = data;
        var datat =  posts[postId]
        datat.comments.push({id,content})
        posts[postId] = datat
    }
    console.log(posts)
    res.send("Done")

})
app.listen(4002,() => console.log("Listening at 4002"))