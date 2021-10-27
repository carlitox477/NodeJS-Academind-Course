const Product = require('../models/product')

//Admin pages
//Add product
exports.getAddProductPage = (req, res, next)=>{
    res.render("admin/edit-product",{
        pageTitle: "Add product",
        path:"/admin/add-product",
        activeAddProduct: true,
        product: null
    })
}

exports.postAddProduct = (req, res, next)=>{
    

    const product=new Product(null,
        req.body.title,
        req.body.description,
        parseFloat(req.body.price).toFixed(2),
        req.body.imageUrl)
    product.save().
        then(()=>{
            res.redirect("/")
        })
        .catch(err =>{
            console.log(err)
        })
}

//Edit product
exports.getEditProductPage = (req, res, next)=>{
    Product.findById(req.params.productId).then(([products, fieldData]) =>{
        if(products.length === 1){
            const product=products[0]
            console.log(product)
            res.render("admin/edit-product",{
                product: product,
                pageTitle: "Edit "+product.title,
                path:"/admin/products",
                activeAddProduct: true}
                )
        }else{
            res.redirect('/404')
        }
    })
    /*
    Product.findById(req.params.productId,(product)=>{
        if(product){
            res.render("admin/edit-product",{
                product: product,
                pageTitle: "Edit "+product.name,
                path:"/admin/products",
                activeAddProduct: true}
                )
        }else{
            res.redirect('/404')
        }
        
    })
    */
}

exports.postEditProduct = (req, res, next)=>{
    const product =new Product(req.body.productId,
        req.body.title,
        req.body.description,
        req.body.price,
        req.body.imageUrl
        )
    product.save()
    res.redirect("/admin/products")
}

exports.postDeleteProduct = (req, res, next)=>{
    //Product.deleteById(req.params.productId)
    Product.deleteById(req.query.productId).then(
        ()=>{
            res.redirect("/admin/products")
        }
    )
}

// Products page
exports.getProductsPage = (req, res, next) =>{
    Product.fetchAll()
        .then(([products, fieldData])=> {
            res.render('admin/products', {
                prods: products,
                pageTitle: 'Admin products',
                path: "/admin/products",
                hasProducts: products.length > 0,
                activeShop: true})
    })
}