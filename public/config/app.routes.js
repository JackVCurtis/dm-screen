var RouteConfig = function($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise("/campaigns");

  $stateProvider
    .state('app', {
      	url: "/",
      	template: require('../views/root.html'),
      	controller: 'RootCtrl'
    })
    .state('app.campaigns', {
      url: "campaigns",
      template: require('../views/campaign.html'),
      controller: 'CampaignCtrl'
    })
    .state('app.campaigns.monsters', {
    	url: ":campaignId/monsters",
    	template: require('../views/monster.html'),
    	controller: 'MonsterCtrl'
    });
};

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

module.exports = RouteConfig;