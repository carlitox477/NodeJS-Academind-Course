//To import a module
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const page404Routes = require('./routes/404.js')

const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use("/admin",adminData.routes)
app.use(shopRoutes)
app.use(page404Routes) 




//const server = http.createServer(app);
app.listen(3001)