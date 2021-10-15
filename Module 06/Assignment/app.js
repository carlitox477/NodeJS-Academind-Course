const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app_main_dir = require('./util/path')

const error404Router = require('./routes/404')
const addUserRouter = require('./routes/add-user')
const usersRouter = require('./routes/users')


const app= express()
app.set('view engine', 'pug')
app.use(express.static(path.join(app_main_dir, 'public')))
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(usersRouter)
app.use(addUserRouter)
app.use(error404Router)


app.listen(3001)