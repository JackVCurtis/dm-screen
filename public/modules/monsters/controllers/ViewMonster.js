var AddActionRequest = require("../models/addActionRequest.js");

var ViewMonsterCtrl = function($scope, $stateParams, MonsterResource){

	$scope.monster = {};

	MonsterResource.getMonster($stateParams.id)
		.then(function(data){
			$scope.monster = data.monster;
		});

	var newAction = $scope.newAction = new AddActionRequest();
	$scope.newActionData = newAction.getData();

	$scope.addAction = function(){
		MonsterResource.addActionToMonster($scope.monster._id, $scope.newActionData)
			.then(function(){
				$scope.newActionData = newAction.getData();
			});
	};

};

ViewMonsterCtrl.$inject = ['$scope', '$stateParams', 'MonsterResource'];

module.exports = ViewMonsterCtrl;