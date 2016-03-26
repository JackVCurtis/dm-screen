module.exports = function MonsterUtils(StatusEnumerable){

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

	this.addSkill = function (skillId, monsterData) {		
		var newSkill = this.getSkills().filter(function (skill){
			return skill.id == skillId.toLowerCase();
		})[0];

		if (newSkill) {
			monsterData.skills.push(newSkill);
			return StatusEnumerable.OK();
		}
		else {
			return StatusEnumerable.InputError("Skill not found");
		}
	};

	this.deleteSkill = function (skillIndex, monsterData) {
		monsterData.skills.splice(skillIndex, 1);
	};

};