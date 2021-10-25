const fs = require('fs')
const path = require('path')
const mysql = require('mysql2')


const currentFilePath = path.dirname(process.mainModule.filename)
const dbConfiguration =path.join(
    currentFilePath,
    'util',
    'database-config.json')

const mysql_configuration= JSON.parse(fs.readFileSync(dbConfiguration))

const pool = mysql.createPool(mysql_configuration)

// For a better code?
module.exports = pool.promise()