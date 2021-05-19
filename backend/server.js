const users = require('./users.json')
const posts = require('./posts.json');

const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors')

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/auth/login', (req, res) => {
    
    console.log(req.body.password, req.body.username)
    //if (!req.headers.authorization) res.send(400, 'missing authorization header');

    if(req.body.username === 'codemotion' && req.body.password === 'demo'){
        res.json({
            key: '9e2fd657-1ef4-47e2-b9cc-90198b29c1fa'
        })
    } else {
        res.sendStatus(401);
    }
})

app.get('/users', (req, res) => {
    //setTimeout((() => {
        res.json(users)
    //}), 2000)
  })

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})