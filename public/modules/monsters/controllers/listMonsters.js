var ListMonsters = function($scope, $http, MonsterResource){

	$scope.monsters = [];


	getMonsters().then(function(res){
		$scope.monsters = res.monsters;
	});

	function getMonsters(){
		return MonsterResource.listMonsters({});
	}

};

ListMonsters.$inject = ['$scope', '$http', 'MonsterResource'];

module.exports = ListMonsters;