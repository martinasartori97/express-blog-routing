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

const PostsController = require('./controllers/PostsController');
app.get('/posts', postsController.index);



app.get('/posts/:id', PostsController.show);


const express = require('express')
const app = express()
const PizzaController = require('./controllers/PizzaController');
// static files (optional)
app.use(express.static('/public'))

app.get('/pizze', PizzaController.index);
app.get('/pizze/:id', PizzaController.show);

