const express= require('express')
const path = require('path')
const rootDir = require("./util/path")
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const error404Router = require('./routes/404')

const app= express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(rootDir, 'public')))
app.use(indexRouter)
app.use(usersRouter)
app.use(error404Router)

app.listen(3001)
