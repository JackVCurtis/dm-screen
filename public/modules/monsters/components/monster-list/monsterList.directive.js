require('./monsterList.scss');

function monsterList() {
	return {
		restrict: 'E',
		scope: {},
		template: require('./monsterList.html'),
		controller: function(){

		},
		controllerAs: 'mlCtrl',
		bindToController: {
			'monsters': '='
		}
	};
}

module.exports = monsterList;