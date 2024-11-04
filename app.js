//require ('dotenv').confing()

const express = require('express')
const app = express()



const HOST = process.env.HOST
const PORT = process.env.PORT

app.use(express.static('/public'))

app.listen(3000, (req, res) => {
    console.log(`server is running at  "http://127.0.0.1":3000}`);
})


app.get('/'(req, res) => {
    res.send('posts rest API')
})




const posts = require('./db/posts.js')
app.get('/posts', (req, res) => {
    res.json({ data: posts, count: posts.length })
});


