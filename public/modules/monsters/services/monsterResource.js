function MonsterResource($resource){

	this.createMonster = function(monsterModel){
		console.log('Saving monster: ', monsterModel);
	};
	
};

MonsterResource.$inject = ['$resource']

module.exports = MonsterResource;