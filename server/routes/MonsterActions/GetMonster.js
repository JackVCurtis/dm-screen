var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.get('/GetMonster/:id', function (req, res) {

    res.json({health: "ok"});
});

module.exports = router;