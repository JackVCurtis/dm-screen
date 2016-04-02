var ListMonsters = function($scope, $http){

	$scope.monsters = []


	getMonsters().then(function(res){
		$scope.monsters = res.data.monsters;
	});

	function getMonsters(){
		return $http.get('/api/monsters/ListMonsters');
	}

};

ListMonsters.$inject = ['$scope', '$http'];

module.exports = ListMonsters;