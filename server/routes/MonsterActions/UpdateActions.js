var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.post('/UpdateActions/:id', function (req, res, next) {
	Monster.findOne({_id: req.params.id }, function(err, monster){
		if (err){ return next(err); }

		monster.actions = req.body.actions;

		monster.save(function(err, monster){
			if (err){ return next(err); }
			res.json({updatedMonster: monster});
		})
	})
});

module.exports = router;