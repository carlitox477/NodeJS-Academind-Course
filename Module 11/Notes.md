# Sequelize
* It is a an object-relational maping (ORM) library.
* It allow us to generate models (tables), instances, queries and associations.
* Installation: ```npm install --save sequelize``` (It needs mysql2 package)
* Using sequelize
```javascript
const Sequelize = require('sequelize') //Class importation
const sequelize = new Sequelize("database","user","password",{
    dialect: "dbGestor",
    host: "host"
})
```

## Create/load a model/table
First we need to define all our models (this can be done in different files)
```javascript
const Product = sequelize.define('table_name',
    {
        column_name1KEY:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        column_name2: Sequelize.STRING,
        column_name3: Sequelize.STRING,
        column_name4: Sequelize.STRING,    
    }
)
```
Then we call the sync method:
```javascript
sequelize.sync()
    .then(result=>{
        //code
    }).catch(err =>{
        console.log(err)
    })
```
It is recommended to call sync in the app.js file. More information [here](https://sequelize.org/master/manual/model-basics.html#model-synchronization)

## Add a row to a table
We need the sequelize model object that w eobtain with the define method. Then we use the create method, which first parameter is a JSON which attributes are the column names, and their values are the values of the new entry.
```javascript
//Product is a sequilez model obtained by the define method
SequelizeModel.create(
        {
            att1: "att1",
            att2: "att2",
            att3: "att3",
        }
    ).then(result =>{
        //..
    }).catch(err =>{
        //...
    })
```

## Updating value
We need to obtain the isntance from the DB, update its attributes and save it
```javascript
// Product is a sequelize model
Product.findByPk(req.body.productId).then(product =>{
        product.title=req.body.title;
        product.description=req.body.description;
        product.price=req.body.price;
        product.imageUrl=req.body.imageUrl;
        return product.save()
    }).then(result =>{
        console.log("Updated product")
        res.redirect("/admin/products")
    }).catch(err=>{
        console.log(err)
    })
```

## Updating value
We need to obtain the instance from the DB, then call the destroy method
```javascript
// Product is a sequelize model
Product.findByPk(req.body.productId).then(product =>{
        return product.destroy()
    }).then(result =>{
        res.redirect("/admin/products")
    }).catch(err=>{
        console.log(err)
    })
```