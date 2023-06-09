const express = require("express")
const {randomBytes} = require("crypto")
const bodyParser = require("body-parser")
const cors = require("cors")
const axios = require("axios")

const app = express()
app.use(cors())
app.use(bodyParser.json())

const posts = {};

app.get('/posts',(req,res) => {
    res.status(200).json(posts)
})

app.post('/posts', async (req,res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body;

    posts[id] = { id,title}

    // emmiting event
    await axios.post('http://localhost:4005/events', {
        type: 'PostCreated',
        data: {
            id, title
        }
    })

    res.status(201).send(posts[id]);

})

// handling incoming events
app.post('/events/',(req,res) => {
    console.log("Event Recevied POSTS", req.body.type)
    res.send("Ok")
})

app.listen(4000,() => console.log("Posts service is running at 4000") )