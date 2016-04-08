function MonsterResource($resource){
	var Monsters = $resource('/api/monsters/actions/:action', null,
		{
			do: {method: 'POST'}
		});

	this.createMonster = function(monsterData){
		return Monsters.do({action: 'CreateMonster'}, monsterData).$promise;
	};
	
	this.listMonsters = function(query){
		return Monsters.do({action: 'ListMonsters'}, query).$promise;
	};
}

MonsterResource.$inject = ['$resource'];

module.exports = MonsterResource;