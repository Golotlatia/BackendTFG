const { Router } = require('express');
const authGuard = require("../middleware/authGuard");






const userController = require("../controller/userController")

const router = Router();



router.get('/user', userController.getC );



router.delete('/user', userController.deleteC);

router.patch('/user', userController.patchC);



module.exports = router