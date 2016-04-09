var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var normalizedPath = path.join(__dirname, "MonsterActions");

router.use('/monsters/actions', require('./MonsterActions/CreateMonster.js'))
router.use('/monsters/actions', require('./MonsterActions/GetMonster.js'))
router.use('/monsters/actions', require('./MonsterActions/ListMonsters.js'))
router.use('/monsters/actions', require('./MonsterActions/AddAction.js'))
router.use('/monsters/actions', require('./MonsterActions/UpdateActions.js'))

module.exports = router;
