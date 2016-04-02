var MonsterRoutes = require('./config/monsterRoutes.js');

// Services
var MonsterResource = require('./services/monsterResource.js');
var MonsterUtils = require('./services/monsterUtils.js');

// Components
var MonsterForm = require('./components/create-monster/monsterForm.directive.js');

// Controllers
var MonsterController = require('./controllers/monster.js');

angular.module('monsters', ['utils']);

module.exports = angular.module('monsters')
					.service('MonsterResource', MonsterResource)
					.service('MonsterUtils', MonsterUtils)
					.controller('MonsterCtrl', MonsterController)
					.directive('monsterForm', MonsterForm)
					.config(MonsterRoutes)
					.name;