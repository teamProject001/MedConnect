var express = require("express")

var router = express.Router()

const {Register, Login, Test}= require ("../controllers/users.controllers.js")

const {AddProfile,FindAllProfiles,FindSingleProfile,DeleteProfile} = require ("../controllers/profiles.controllers.js")

router.post('/register',Register)
router.post('/login',Login)

router.get('/test',Test)


/** Routes Profiles */

router.post('/add',AddProfile)
router.get('/getProfile',FindAllProfiles)
router.get('/getProfile/:id',FindSingleProfile)
router.delete('/deleteProfile/:id',DeleteProfile)


module.exports = router;