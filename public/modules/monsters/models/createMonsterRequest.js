var CreateMonsterRequest = function(){

	this.data = {};

	this.refreshData = function(){
		this.data = {
			name: "",
			description: "",
			size: "",
			type: "",
			alignment: "",
			cr: 1,
			ac: 15,
			hitDice: "1d8",
			hitPoints: 5,
			speed: {
				base: 30,
				burrow: 0,
				climb: 0,
				fly: 0,
				swim: 0
			},
			abilityScores: {
				str: 10,
	        	dex: 10,
	          	con: 10,
	          	int: 10,
	          	wis: 10,
	          	cha: 10
			}
		};
	};

	this.getData = function () {
		return this.data;
	};

	this.refreshData();

};

module.exports = CreateMonsterRequest;