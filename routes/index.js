const express = require('express');

const homeController = require('../controllers/home_controller');

const router = express.Router();

// console.log('router loaded')

router.get('/',homeController.home);
router.use('/users', require('./users'))

//for any further routes, access from here
//router.use('/routeName',require('./routerfile));

module.exports = router;
