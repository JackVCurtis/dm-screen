var RootCtrl = function($stateParams, $state){
	if (!$stateParams.campaignId){
		$state.go('app.campaigns');
	}
};

RootCtrl.$inject = ['$stateParams', '$state'];

module.exports = RootCtrl;