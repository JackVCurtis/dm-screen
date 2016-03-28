var RouteConfig = function($stateProvider, $urlRouterProvider, $locationProvider){
    $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/monsters");

  $stateProvider
    .state('app', {
      	url: "/",
      	template: require('../views/root.html'),
      	controller: 'RootCtrl'
    })
    .state('app.monsters', {
    	url: "monsters",
    	template: require('../views/monster.html'),
    	controller: 'MonsterCtrl'
    })
};

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

module.exports = RouteConfig;