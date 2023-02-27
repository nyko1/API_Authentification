const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const indexController = require('../controllers/indexController');


router.post('/index',auth, indexController.index);


module.exports = router;