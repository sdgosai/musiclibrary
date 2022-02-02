const express = require('express');
const router = new express.Router();

const userController = require('../controller/usercontroller');

router.post('/add_userdata',userController.addUserData);
router.get('/get_user',userController.getUser);


module.exports = router;