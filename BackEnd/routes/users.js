var express = require("express")

var router = express.Router()

const {Register, Login, Test}= require ("../controllers/users.controllers.js")

router.post('/register',Register)
router.post('/login',Login)

router.get('/test',Test)


module.exports = router;