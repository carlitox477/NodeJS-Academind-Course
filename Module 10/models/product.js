
const Cart = require('./cart')
const db= require("../util/database") //Promise pool


module.exports = class Product{
    constructor(id, title, description, price, imageUrl){
        this.id=id
        this.title=title
        this.description=description
        this.price=price
        this.imageUrl=imageUrl
    }

    save(){
        if(this.id===null){
            return db.execute("INSERT INTO products (title, price, description, imageUrl) VALUES (?,?,?,?)",
            [this.title,this.price,this.description,this.imageUrl]
            )
        }else{
            return db.execute(`UPDATE products SET title = '${this.title}', price = ${this.price.toFixed(2)}, description = '${this.description}', imageUrl = ${this.imageUrl} WHERE (id = ${this.id})`)
        }
    }

    static fetchAll(){
        return db.execute("SELECT * FROM products")
    }

    static findById(productId){
        return db.execute("SELECT * FROM products WHERE id = ?",[productId])
    }

    static deleteById(productId){
        return db.execute("DELETE FROM products WHERE (id = ?)",[productId])
    }

    

}