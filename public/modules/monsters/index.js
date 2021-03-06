// Libraries
var ngResource = require('angular-resource');

// Routes
var MonsterRoutes = require('./config/monsterRoutes.js');

// Services
var MonsterResource = require('./services/monsterResource.js');
var MonsterUtils = require('./services/monsterUtils.js');

// Components
var MonsterForm = require('./components/monster-form/monsterForm.directive.js');
var MonsterList = require('./components/monster-list/monsterList.directive.js');
var MonsterSummary = require('./components/monster-summary/monsterSummary.directive.js');
var AddAction = require('./components/add-action/addAction.directive.js');

// Controllers
var MonsterController = require('./controllers/Monster.js');
var CreateMonsterController = require('./controllers/CreateMonster.js');
var ListMonstersController = require('./controllers/ListMonsters.js');
var ViewMonsterController = require('./controllers/ViewMonster.js');

angular.module('monsters', ['utils', ngResource]);

module.exports = angular.module('monsters')
					.service('MonsterResource', MonsterResource)
					.service('MonsterUtils', MonsterUtils)
					.controller('MonsterCtrl', MonsterController)
					.controller('CreateMonsterCtrl', CreateMonsterController)
					.controller('ListMonstersCtrl', ListMonstersController)
					.controller('ViewMonsterCtrl', ViewMonsterController)
					.directive('monsterForm', MonsterForm)
					.directive('monsterList', MonsterList)
					.directive('monsterSummary', MonsterSummary)
					.directive('addAction', AddAction)
					.config(MonsterRoutes)
					.name;