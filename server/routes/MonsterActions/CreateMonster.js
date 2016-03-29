var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.post('/CreateMonster', function (req, res) {

    res.json({health: "ok"});
});

module.exports = router;