const fs= require('fs')
const path = require('path')
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
    constructor(name, description, price, imageUrl){
        this.name=name
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
    }

    save(){
        this.id = Math.random().toString()
        getProductFromFile(products=>{
            products.push(this)
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


}