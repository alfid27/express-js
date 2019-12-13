// const express = require ('express');
var express = require('express');
var app = express();
const homeController = require ('../controller/homecontroller');
var router = express.Router();

router.post('/proses', homeController.prosesGet)
// router.post('/proses/:id', homeController.prosesPost)

module.exports = router;