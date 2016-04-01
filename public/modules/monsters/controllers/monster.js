var CreateMonsterRequest = require('../models/create-monster-request');

var MonsterCtrl = function($scope, $rootScope, $http){
	$rootScope.title = "Monsters";

	var newMonster = $scope.newMonster = new CreateMonsterRequest();
  	$scope.createMonsterData = newMonster.getData();

  	$scope.createMonster = function () {
  		$http.post('/api/monsters/CreateMonster', $scope.createMonsterData, function(res){
  			console.log(res);
  		});
  	};      
};

MonsterCtrl.$inject = ['$scope', '$http'];

module.exports = MonsterCtrl;