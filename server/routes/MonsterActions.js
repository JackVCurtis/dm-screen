var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var normalizedPath = path.join(__dirname, "MonsterActions");

router.use('/monsters', require('./MonsterActions/CreateMonster.js'))
router.use('/monsters', require('./MonsterActions/GetMonster.js'))
router.use('/monsters', require('./MonsterActions/ListMonsters.js'))

module.exports = router;
