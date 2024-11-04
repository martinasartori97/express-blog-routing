//require ('dotenv').confing()

const express = require('express')
const app = express()



const HOST = process.env.HOST
const PORT = process.env.PORT

app.listen(PORT, (req,res) => {
    console.log(`server is running at ${HOST}: ${PORT}`);
  })


app.get(','(req,res) => {
    res.send('posts rest API')
})

// POSTS API
app.get('/pizze',(req,res) => {
    res.json({
        data:
        counter:
    })
})


