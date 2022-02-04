const { Router } = require('express');
const authGuard = require("../middleware/authGuard");
const timersDb= require("../middleware/timersDb");





const userController = require("../controller/userController")

const router = Router();



router.get('/user', userController.getC );

router.post('/user', authGuard, timersDb,  userController.postC);

router.delete('/user', userController.deleteC);

router.patch('/user', userController.patchC);



module.exports = router