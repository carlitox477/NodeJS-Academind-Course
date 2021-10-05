const path = require('path')

module.exports = ()=>{
    //console.log(path.dirname(require.main.filename))
    return path.dirname(require.main.filename)
}

//process.mainModule or require.main reference to the main module process
//process.mainModule.filename or require.main.filename reference to the main module process
