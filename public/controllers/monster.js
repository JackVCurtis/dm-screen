var MonsterCtrl = function($scope){
  	$scope.creatMonsterData = new CreateMonsterRequest().getData(); 
  	
  	$scope.createMonster = function () {
  		console.log(this.monsterData);
  	};      
};

MonsterCtrl.$inject = ['$scope'];

module.exports = MonsterCtrl;