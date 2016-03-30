var MonsterCtrl = function($scope, $http, CreateMonsterRequest){

	var newMonster = $scope.newMonster = new CreateMonsterRequest();
  	$scope.createMonsterData = newMonster.getData();

  	$scope.createMonster = function () {
  		$http.post('/api/monsters/CreateMonster', $scope.createMonsterData, function(res){
  			console.log(res);
  		});
  	};      
};

MonsterCtrl.$inject = ['$scope', '$http', 'CreateMonsterRequest'];

module.exports = MonsterCtrl;