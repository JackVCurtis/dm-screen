require('./jvc-tab-navbar.scss');

function jvcNavBar() {
	return {
		restrict: 'E',
		scope: {},
		template: require('./jvc-tab-navbar.html'),
		controller: function(){

		},
		controllerAs: 'navCtrl',
		bindToController: {
			'locations': '='
		}
	};
}

