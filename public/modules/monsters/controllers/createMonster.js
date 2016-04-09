var CreateMonsterRequest = require('../models/createMonsterRequest');

var MonsterCtrl = function($scope, $http, $state, MonsterResource){
	
	var newMonster = $scope.newMonster = new CreateMonsterRequest();
  	$scope.createMonsterData = newMonster.getData();

  	$scope.createMonster = function () {
  		MonsterResource.createMonster($scope.createMonsterData)
  			.then(function(res){
  				$state.go('app.monsters.list');
  			});
  	};      
};

MonsterCtrl.$inject = ['$scope', '$http', '$state', 'MonsterResource'];

module.exports = MonsterCtrl;