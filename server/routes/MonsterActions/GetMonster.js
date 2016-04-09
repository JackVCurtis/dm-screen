var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.get('/GetMonster/:id', function (req, res, next) {
	Monster.findOne({_id: req.params.id}, function(err, monster){
		if (err){ return next(err); }

	    res.json({monster: monster});		
	})
});

module.exports = router;