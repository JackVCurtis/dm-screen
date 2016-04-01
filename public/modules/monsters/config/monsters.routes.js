var RouteConfig = function($stateProvider, $urlRouterProvider, $locationProvider){
  $stateProvider
    .state('app.monsters', {
    	url: "monsters/",
    	template: require('../views/monster.html'),
    	controller: 'MonsterCtrl'
    });
};

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

module.exports = RouteConfig;