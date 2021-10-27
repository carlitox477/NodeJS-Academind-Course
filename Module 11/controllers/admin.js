const Product = require('../models/product')

//Admin pages
//Add product
exports.getAddProductPage = (req, res, next)=>{
    //DONE
    res.render("admin/edit-product",{
        pageTitle: "Add product",
        path:"/admin/add-product",
        activeAddProduct: true,
        product: null
    })
}

exports.postAddProduct = (req, res, next)=>{
    //DONE
    Product.create(
        {
            title: req.body.title,
            price: parseFloat(req.body.price).toFixed(2),
            imageUrl: req.body.imageUrl,
            description: req.body.description
        }
    ).then(result =>{
        console.log(result)
        res.redirect("/")
    }).catch(err =>{
        console.log(err)
    })
}

//Edit product
exports.getEditProductPage = (req, res, next)=>{
    //DONE
    Product.findByPk(req.params.productId).then(productJSON =>{
        res.render("admin/edit-product",{
            product: productJSON,
            pageTitle: "Edit "+productJSON.title,
            path:"/admin/products",
            activeAddProduct: true}
            )
    }).catch(err=>{
        console.log(err)
        res.redirect('/404')
    })
}

exports.postEditProduct = (req, res, next)=>{
    //TODO
    Product.findByPk(req.body.productId).then(product =>{
        product.title=req.body.title;
        product.description=req.body.description;
        product.price=req.body.price;
        product.imageUrl=req.body.imageUrl;
        return product.save()
    }).then(result =>{
        //console.log("Updated product")
        res.redirect("/admin/products")
    }).catch(err=>{
        console.log(err)
    })
}

exports.postDeleteProduct = (req, res, next)=>{
    //DONE
    Product.findByPk(req.query.productId).then(product =>{
        return product.destroy()
    }).then( result =>{
        console.log("Destroyed product")
        res.redirect("/admin/products")
    })
}

// Products page
exports.getProductsPage = (req, res, next) =>{
    //DONE
    Product.findAll().then(products =>{
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin products',
            path: "/admin/products",
            hasProducts: products.length > 0,
            activeShop: true})
    }).catch(err =>{
        console.log(err)
    })
}