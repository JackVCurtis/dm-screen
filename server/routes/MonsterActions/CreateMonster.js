var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');
var ChallengeRating = require('../../models/ChallengeRating');

router.post('/CreateMonster', function (req, res) {

    res.json({health: "ok"});
});

module.exports = router;