// Services
var MonsterResource = require('./services/monster-resource.js');
var MonsterUtils = require('./services/monster-utils.js');

// Models
var CreateMonsterRequest = require('./models/create-monster-request.js');

//Components
var CreateMonster = require('./components/create-monster/create-monster.directive.js');

angular.module('monsters', ['utils']);

module.exports = angular.module('monsters')
					.service('MonsterResource', MonsterResource)
					.service('MonsterUtils', MonsterUtils)
					.factory('CreateMonsterRequest', CreateMonsterRequest)
					.directive('createMonster', CreateMonster)
					.name;