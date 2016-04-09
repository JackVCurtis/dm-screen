require('./addAction.scss');

function addAction() {
	return {
		restrict: 'E',
		scope: {},
		template: require('./addAction.html'),
		controller: function(){
			
		},
		controllerAs: 'aaCtrl',
		bindToController: {
			
		}
	};
}

module.exports = addAction;