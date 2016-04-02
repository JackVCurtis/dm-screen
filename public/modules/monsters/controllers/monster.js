var MonsterCtrl = function($scope, $rootScope, $http){
	$rootScope.title = "Monsters";
	
	$scope.activeMonster = {
		name: "Test Monster"
	};

	$scope.navLocations = [
		{
			id: 'list',
			label: "All Monsters",
			sref: 'app.monsters.list'
		},
		{
			id:'new',
			label: 'New Monster',
			sref: 'app.monsters.new'
		}
	]; 
};

MonsterCtrl.$inject = ['$scope', '$http'];

module.exports = MonsterCtrl;