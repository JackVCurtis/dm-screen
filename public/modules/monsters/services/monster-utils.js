module.exports = function MonsterUtils(){

	this.getAbilities = function(){
		return [
	        {
	          name: 'Strength',
	          key: 'str'
	        },
	        {
	          name: 'Dexterity',
	          key: 'dex'
	        },
	        {
	          name: 'Constitution',
	          key: 'con'
	        },
	        {
	          name: 'Intelligence',
	          key: 'int'
	        },
	        {
	          name: 'Wisdom',
	          key: 'wis'
	        },
	        {
	          name: 'Charisma',
	          key: 'cha'
	        }
      	];
	};

};