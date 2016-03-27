var ChallengeRating = function(cr){
	this.lookup = require('../resources/StatsByCR.json');

	this.data = {};
	this.data.level = cr;
	this.data.xp = this.getXp();
	this.data.proficiencyBonus = this.getProficiency();
};

ChallengeRating.prototype.getXp = function(){
	return this.lookup[this.data.level].xp;
};

ChallengeRating.prototype.getProficiency = function(){
	return this.lookup[this.data.level].proficiency;
}

module.exports = ChallengeRating;