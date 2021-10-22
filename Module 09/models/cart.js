const fs = require('fs')
const path = require('path')

const cartFilePath = path.join(path.dirname(process.mainModule.filename),'data','cart.json')


module.exports = class Cart{
    static getCart(cb){
        fs.readFile(cartFilePath, (err,fileContent)=>{
            let cart= {products:[], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
            cb(cart)
        })
    }

    static addProduct(id, productPrice){
        //Fetch the previous cart
        fs.readFile(cartFilePath, (err,fileContent)=>{
            let cart = {products:[], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
            //Anyleze the cart => find existing product
            const existingProductIndex = cart.products.findIndex( prod => prod.id===id)
            const existingProduct = cart.products[existingProductIndex]
            let updatedProduct
            if(existingProduct){
                updatedProduct= {...existingProduct}
                updatedProduct.qty++
                cart.products[existingProductIndex]=updatedProduct
            }else{
                updatedProduct = {id: id, qty: 1}
                cart.products = [...cart.products]
                cart.products.push(updatedProduct)
            }
            cart.totalPrice= cart.totalPrice+ +parseFloat(productPrice).toFixed(2)
            fs.writeFile(cartFilePath, JSON.stringify(cart), err =>{
                if(err){
                    console.log(err)
                }else{
                    //console.log(cart)
                }
                
            })
        })
        

    }

    static deleteProduct(id, productPrice){
        //Fetch the previous cart
        fs.readFile(cartFilePath, (err,fileContent)=>{
            let cart = {products:[], totalPrice: 0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
            //Anyleze the cart => find existing product
            const updatedCart= {...cart}
            const product = updatedCart.products.find( prod => prod.id===id)
            if(product){
                const productQty = product.qty

                console.log("Band: "+product.title)
                console.log("productQty: "+productQty)
                updatedCart.products = updatedCart.products.filter(p => p.id !== id)
                updatedCart.totalPrice-= productQty * productPrice
                //console.log(updatedCart)
    
                fs.writeFile(cartFilePath, JSON.stringify(updatedCart), err =>{
                    if(err){
                        console.log(err)
                    }else{
                        console.log(cart)
                    }
                    
                })
            }
            
        })
    }

}