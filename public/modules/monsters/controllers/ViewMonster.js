var ViewMonsterCtrl = function($scope, $stateParams, MonsterResource){

	$scope.monster = {};

	MonsterResource.getMonster($stateParams.id)
		.then(function(data){
			$scope.monster = data.monster;
		});

};

ViewMonsterCtrl.$inject = ['$scope', '$stateParams', 'MonsterResource'];

module.exports = ViewMonsterCtrl;