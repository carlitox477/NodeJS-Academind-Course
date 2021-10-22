const fs= require('fs')
const path = require('path')
const Cart = require('./cart')
const currentFilePath = path.dirname(process.mainModule.filename)
const productsJSONPath =path.join(
    currentFilePath,
    'data',
    'products.json')

const getProductFromFile = (cb)=>{
    fs.readFile(productsJSONPath,(err,fileContent)=>{
        if(err){
            cb([])
            return
        }
        cb(JSON.parse(fileContent))
    })
}


module.exports = class Product{
    constructor(id, title, description, price, imageUrl){
        this.id=id
        this.title=title
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
    }

    save(){
        getProductFromFile(products=>{
            if(this.id){
                const productIndex = products.findIndex(p => p.id === this.id)
                products[productIndex]=this
            }else{
                this.id = Math.random().toString()
                products.push(this)
            }
            fs.writeFile(productsJSONPath, JSON.stringify(products), (err)=>{
                if(err){
                    console.log(err)
                }
            })

        })
    }

    static fetchAll(cb){
        getProductFromFile(cb)
    }

    static findById(productId, cb){
        getProductFromFile((products)=>{
            const product = products.find(p => p.id === productId)
            cb(product)
        })
    }

    static deleteById(productId){
        
        getProductFromFile((products)=>{
            const product = products.find(p => p.id === productId) 
            products = products.filter(p => p.id !== productId)
            fs.writeFile(productsJSONPath, JSON.stringify(products), (err)=>{
                if(err){
                    console.log(err)
                }else{
                    Cart.deleteProduct(productId,product.price)
                }
                
            })
        })
    }

    

}