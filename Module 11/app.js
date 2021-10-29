//To import a module
const http = require('http')

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const sequelize= require("./util/database") 
const Product = require("./models/product")
const User = require("./models/user")
const Cart = require('./models/cart')
const CartItem = require('./models/cart-item')

const adminData = require('./routes/admin.js')
const shopRoutes = require('./routes/shop.js')
const page404Routes = require('./routes/404.js')



const app = express()
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next)=>{
    //The idea is to pase the user by the req object to all
    //the request send
    User.findByPk(1).then(user=>{
        req.user=user
        next()
    }).catch(err =>{
        console.log(err)
    })
})


app.use("/admin",adminData.routes)
app.use(shopRoutes)
app.use(page404Routes) 


Product.belongsTo(User,{
    constraints: true,
    onDelete: 'CASCADE'
})
User.hasMany(Product)
User.hasOne(Cart)
Cart.belongsToMany(Product, {through: CartItem})
//Product.belongsToMany(Cart, {through: CartItem})
 
sequelize.sync() //It checks all the models and then create the tables orjust fetch them.
    .then(result =>{
        return User.findByPk(1)
    }).then(user =>{
        if(!user){
            console.log("User created")
            return User.create({username: "Charlie", email:"charlie@charlie.com"})
        }
        return Promise.resolve(user)
    //}).then(user=>{
        //return user.createCart();
    }).then( cart =>{
        app.listen(3001)
    }).catch(err =>{
        console.log(err)
    })

