var express = require("express")

var router = express.Router()


const {getAll} = require('../controllers/patients.controllers')


router.get('/getPatient',getAll)


module.exports = router;