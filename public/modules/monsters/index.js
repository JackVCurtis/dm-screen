var MonsterRoutes = require('./config/monsters.routes.js');

// Services
var MonsterResource = require('./services/monster-resource.js');
var MonsterUtils = require('./services/monster-utils.js');

// Components
var MonsterForm = require('./components/create-monster/monster-form.directive.js');

// Controllers
var MonsterController = require('./controllers/monster.js')

angular.module('monsters', ['utils']);

module.exports = angular.module('monsters')
					.service('MonsterResource', MonsterResource)
					.service('MonsterUtils', MonsterUtils)
					.controller('MonsterCtrl', MonsterController)
					.directive('monsterForm', MonsterForm)
					.config(MonsterRoutes)
					.name;