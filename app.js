//require ('dotenv').confing()

const express = require('express')
const app = express()
const port = 3000

app.listen(3000, (req,res) => {
    console.log(`server is running at http://localhost: ${port}`);
  })

