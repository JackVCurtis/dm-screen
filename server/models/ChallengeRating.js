var ChallengeRating = function(cr){
	this.StatsByCR = require('../resources/StatsByCR.json');

	this.data = {};
	this.data.level = cr;
	this.data.xp = this.getXp();
	this.data.proficiencyBonus = this.getProficiency();
};

ChallengeRating.prototype.getXp = function(){
	return this.StatsByCR[this.data.level].xp;
};

ChallengeRating.prototype.getProficiency = function(){
	return this.StatsByCR[this.data.level].proficiency;
}

module.exports = ChallengeRating;