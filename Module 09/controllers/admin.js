const Product = require('../models/product')

//Admin pages
//Add product
exports.getAddProductPage = (req, res, next)=>{
    res.render("admin/add-product",{
        pageTitle: "Add product",
        path:"/admin/add-product",
        activeAddProduct: true}
        )
}

exports.postAddProduct = (req, res, next)=>{
    console.log(req.body.imgURL)
    const product=new Product(req.body.name,
        req.body.description,
        parseFloat(req.body.price).toFixed(2),
        req.body.imgURL)
    product.save()
    res.redirect("/")
}

//Edit Added Product
exports.getEditAddedProductPage = (req, res, next)=>{
    res.render("admin/edit-added-product",{
        pageTitle: "Edit added product",
        path:"/admin/edit-added-product",
        activeAddProduct: true}
        )
}

exports.postEditAddedProductPage = (req, res, next)=>{
    const product=new Product(req.body.title)
    product.save()
    res.redirect("/")
}

// Product page
exports.getProductsPage = (req, res, next) =>{
    Product.fetchAll((products)=>{
        res.render('admin/products', {
            prods: products,
            pageTitle: 'Admin products',
            path: "/admin/products",
            hasProducts: products.length > 0,
            activeShop: true})
    })
}