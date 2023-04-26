const express  = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const {randomBytes} = require("crypto")
const axios = require("axios")

const app = express()
app.use(cors())
app.use(bodyparser.json())

const commentsByPostId = {}

app.get("/posts/:id/comment",(req,res) => {
    res.status(202).json(commentsByPostId[req.params.id] || [])
})

app.post("/posts/:id/comment", async (req,res) => {
    const commentId = randomBytes(4).toString("hex");
    const {content} = req.body;

    const comments = commentsByPostId[req.params.id] || []
    const postId = req.params.id
    comments.push({id: commentId, content})

    commentsByPostId[req.params.id] = comments;

    await axios.post('http://localhost:4005/events',{
        type:"CommentCreated",
        data: {id:commentId,content,postId}
    })

    res.status(201).json(comments)
})

// handling incoming events
app.post('/events/',(req,res) => {
    console.log("Event Recevied Comments", req.body.type)
    res.send("Ok")
})
app.listen(4001,(req,res) => console.log("commments is runnning on 4001"))
