// Style
require('./app.css');

// Components
var MonsterForm = require("./components/monster-form/monster.form.directive.js");
var MonsterService = require("./services/monster.service.js")

angular.module('app', []);

var RootCtrl = function(MonsterService){
  this.MonsterService = MonsterService;
};

RootCtrl.$inject = ['MonsterService']

angular.module('app')
  .controller('RootCtrl', RootCtrl)
  .directive('monsterForm', MonsterForm)
  .service('MonsterService', MonsterService);

