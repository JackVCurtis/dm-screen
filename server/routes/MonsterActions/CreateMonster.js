var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.post('/CreateMonster', function (req, res, next) {
	var newMonster = new Monster({
		name: req.body.name,
		description: req.body.description,
		size: req.body.size,
		type: req.body.type,
		alignment: req.body.alignment,
		cr: req.body.cr,
		ac: req.body.ac,
		hitPoints: req.body.hitPoints,
		hitDice: req.body.hitDice,
		baseSpeed: req.body.speed.base,
		abilityScores: req.body.abilityScores
	});

	newMonster.save(function (err, monster) {
		if (err){ return next(err); }
		res.json({message: "New monster created", monster: monster});
	});
		
});

module.exports = router;