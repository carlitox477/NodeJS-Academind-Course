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
    constructor(title){
        this.title=title
    }

    save(){
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


}