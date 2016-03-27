module.exports = function MonsterUtils(StatusEnumerable){

	this.getEnumerables = function (){
		var enumerableTraits = [
			{
				id: "skills",
				label: "Skills",
				list: this.getSkills
			},
			{
				id: "vulnerabilities",
				label: "Vulnerabilities",
				list: null
			},			
			{
				id: "resistances",
				label: "Resistances",
				list: null
			},			
			{
				id: "immunities",
				label: "Immunities",
				list: null
			},
			{
				id: "senses",
				label: "Senses",
				list: null
			},
			{
				id: "languages",
				label: "Languages",
				list: null
			}
		];

		return enumerableTraits;
	};

	this.getEnumerable = function(enumId){
		var enumerableTraits = this.getEnumerables();

		return enumerableTraits.filter(function(enumerable){ 
			return enumerable.id == enumId; 
		})[0];
	};

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

	this.getSkills = function(){
		return [
			{
				id: 'climb',
				label: 'Climb',
				abilityId: 'str'
			},
			{
				id: 'perception',
				label: 'Perception',
				abilityId: 'wis'
			}
		];
	};

	this.addItem = function (enumId, itemId, dataArray) {	
		var item;
		var enumType = this.getEnumerable(enumId);

		if (enumType.list) {
			item = enumType.list().filter(function (item){
				return item.id == itemId.toLowerCase();
			})[0];
		} 
		else {
			item = itemId;
		}

		if (item) {
			dataArray.push(item);
			return StatusEnumerable.OK();
		}
		else {
			return StatusEnumerable.InputError(itemId + " is not a legal value");
		}
	};

	this.deleteItem = function (index, dataArray) {
		dataArray.splice(index, 1);
	};

};