var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.post('/CreateMonster', function (req, res, next) {
	Monster.create(req.body)
		.then(function (err, monster){
			if (err) { return next(err); }
		    res.json({message: "New monster created", monster: monster});
		})
});

module.exports = router;