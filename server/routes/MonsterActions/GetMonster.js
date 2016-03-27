var express = require('express');
var router = express.Router();

router.get('/GetMonster', function (req, res) {

    res.json({health: "ok"});
});

module.exports = router;