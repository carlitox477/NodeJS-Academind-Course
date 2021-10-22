# Dynamic Routes & Advanced Models
This module is to ebchance thre previous modules concepts

## Extract id from URL
To send an id (or any other extra string) by URL and use it to render a dinamic page we must soecufued the URL in any render method (use, get, post) like:
``` javascript
router.get("/movies/:idMovie", movieControler.getMovieDetails)
```
Doing this, the routes order in the file matters.

``` javascript
router.get("/movies/:idMovie", movieControler.getMovieDetails)
router.get("/movies/showAll", movieControler.getMovieDetails) //This will never be render

router.get("/books/showAll", movieControler.getMovieDetails) //this will be render
router.get("/books/:idBook", movieControler.getMovieDetails) //this too
```

The data pass by paramater will be passed in the request object and we can use it with ```req.params.paramName```

## Pass local data in EJS file
If we had a loop, and ejs code we are using that require local data from this loop we must pass it in a JSON like second parameter of the include function.
```ejs
    <% for (let product of prods) { %>
        <article class="card product-item">
            <%- include('../includes/product-detail.ejs',{product: product}) %>
        </article>
    <% } %>
```

## Query parameters
These are the ones that we send by URL like *localhost/admin/edit-product/1?queryParam1=true&queryParam2=false*. We can access them in express by just accesing the query object from the request
```javascript
const param1 =req.query.queryParam1
```
All the paramaters are string, sometimes we will need to cast them

## Summary
* Dynamic Routing
    * You can pass dynamic path segments by adding a ":" to the Express router path
    * The name you add after ":" is the name by which you can extract the data on *req.params*
    * Optional (query) parameter can also be passed (```?param=value&b=2```) and extracted (```req.query.myParam```) 