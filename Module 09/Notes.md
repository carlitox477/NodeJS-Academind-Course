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