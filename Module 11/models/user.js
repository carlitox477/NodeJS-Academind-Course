const Sequelize = require('sequelize').Sequelize
const sequlize = require('../util/database')

const User = sequlize.define('user',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
    }

})

module.exports=User

