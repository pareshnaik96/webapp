const express = require('express')
const router = express.Router()
const userController = require('../Controllers/userController')

//=============== routes =====================================//

router.post('/api/post', userController.postUser)
router.get('/api/get', userController.getData)
router.get('/api/get/user', userController.getUser)


module.exports = router;