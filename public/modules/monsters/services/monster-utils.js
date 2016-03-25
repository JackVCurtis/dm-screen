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

	this.skillData = function(){
		return [
			{
				id: 'climb',
				name: 'Climb',
				abilityId: 'str'
			},
			{
				id: 'perception',
				name: 'Perception',
				abilityId: 'wis'
			}
		];
	};

	this.createSkill = function(skillName, errorMsgs){
		var newSkill = this.skillData().filter(function (skill){
			return skill.id == skillName.toLowerCase();
		})[0];

		if(newSkill){
			return newSkill;
		}
		else {
			errorMsgs.push(new Error("Invalid skill name"));
			return false;
		}
	};

	this.deleteSkill = function(skillList, skillId){
		return skillList.filter(function(skill){
			return skill.id != skillId;
		});
	}

};