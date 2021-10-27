const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize').Sequelize
const currentFilePath = path.dirname(process.mainModule.filename)
const dbConfigPath =path.join(
    currentFilePath,
    'util',
    'database-config.json')

const dbConfig= JSON.parse(fs.readFileSync(dbConfigPath))

const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.password,{
    dialect: 'mysql',
    host: dbConfig.host
})


module.exports = sequelize