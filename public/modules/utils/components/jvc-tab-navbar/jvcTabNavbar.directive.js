require('./jvcTabNavbar.scss');

function jvcNavBar() {
	return {
		restrict: 'E',
		scope: {},
		template: require('./jvcTabNavbar.html'),
		controller: function(){

		},
		controllerAs: 'navCtrl',
		bindToController: {
			'locations': '='
		}
	};
}

module.exports = jvcNavBar;