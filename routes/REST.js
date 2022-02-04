const { Router } = require('express');

const restController = require("../controller/restController")

const router = Router();

router.post('/addTimer', restController.addTimer );

//router.post('/', restController.postC);

router.delete('/', restController.deleteC);

router.patch('/', restController.patchC);

router.get('/read', restController.read);



module.exports = router