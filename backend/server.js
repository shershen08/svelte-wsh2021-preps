const users = require('./users.json')
const posts = require('./posts.json');

const express = require('express')
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
const port = 3000



app.use(bodyParser.urlencoded({ extended: true }));

app.post('/auth/login', (req, res) => {
    
    console.log(req.body.password, req.body.username)
    //      if (!req.headers.authorization) res.send(400, 'missing authorization header');

    if(req.body.username && req.body.password === 'test'){
        res.json({
            key: '23456789sdfghjkl'
        })
    } else {
        res.sendStatus(401);
    }
})

app.get('/users', (req, res) => {
    res.json(users)
  })

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})