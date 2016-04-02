require('./monsterSummary.scss');

function monsterSummary() {
	return {
		restrict: 'E',
		scope: {},
		template: require('./monsterSummary.html'),
		controller: function(){
			
		},
		controllerAs: 'msCtrl',
		bindToController: {
			'monster': '='
		}
	};
}

module.exports = monsterSummary;