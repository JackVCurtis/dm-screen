var RootCtrl = function($scope, CreateMonsterRequest){

      $scope.monsterData = new CreateMonsterRequest().getData(); 
      $scope.save = function () {
      	console.log(this.monsterData);
      };      
};

RootCtrl.$inject = ['$scope', 'CreateMonsterRequest'];

module.exports = RootCtrl;