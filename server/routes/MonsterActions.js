var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

var normalizedPath = path.join(__dirname, "MonsterActions");

fs.readdirSync(normalizedPath).forEach(function(file) {
    var route = require("./MonsterActions/" + file);
    router.use('/monsters/actions', route);
});

module.exports = router;
