var express = require('express');
var router = express.Router();

var Monster = require('../../models/Monster');

router.get('/ListMonsters', function (req, res) {
	Monster.find({}, function(err, monsters){
		if (err) { return next(err); }
		
	    res.json({monsters: monsters});		
	})
});

module.exports = router;