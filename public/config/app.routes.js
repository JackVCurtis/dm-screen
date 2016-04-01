var RouteConfig = function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/app/monsters/");

  $stateProvider
    .state('app', {
      	url: "/app/",
      	template: require('../views/root.html'),
      	controller: 'RootCtrl'
    });
};

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

module.exports = RouteConfig;