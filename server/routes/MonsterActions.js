var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var normalizedPath = path.join(__dirname, "MonsterActions");

router.use('/monsters', function(req, res, next){console.log(req.body); next()}, require('./MonsterActions/CreateMonster.js'))

module.exports = router;
