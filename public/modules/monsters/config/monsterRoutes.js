var RouteConfig = function($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state('app.monsters', {
    	url: "monsters/",
    	template: require('../views/monster.html'),
    	controller: 'MonsterCtrl'
    })
    .state('app.monsters.new', {
    	url: 'new',
    	template: require('../views/createMonster.html'),
    	controller: 'CreateMonsterCtrl'
    })
    .state('app.monsters.list', {
    	url: 'list',
    	template: require('../views/listMonsters.html'),
    	controller: 'ListMonstersCtrl'
    })
    .state('app.monsters.view', {
    	url: 'view/:id',
    	template: require('../views/viewMonster.html'),
    	controller: 'ViewMonsterCtrl'
    });
};

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

module.exports = RouteConfig;