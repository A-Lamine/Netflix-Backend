const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')
const verifyToken = require('../helpers/verifyToken')

router.post('/login', userController.login)
router.post('/register',userController.register)
router.post('/updateuser',userController.updateUser)
router.get('/verifytoken',verifyToken, userController.verifyToken);


module.exports = router;