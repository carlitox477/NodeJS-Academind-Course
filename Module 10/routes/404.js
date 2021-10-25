const express = require('express')
const router = express.Router()
const errorControler = require('./../controllers/error')

router.use('/',errorControler.getErrorPage)

module.exports = router