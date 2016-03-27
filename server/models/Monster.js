var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MonsterSchema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true},
	size: {type: String, required: true},
	type: {type: String, required: true},
	alignment: {type: String, required: true},
	ac: {type: Number, required: true},
	hitDice: {type: String, required: true},
	hitPoints: {type: Number, required: true},
	cr: {type: Schema.Types.Mixed, required: true}, //Uses strings to work with fractional CRs
	baseSpeed: {type: Number, required: true},
	altSpeeds: [Schema.Types.Mixed],
	abilityScores: [Schema.Types.Mixed],
	skills: [Schema.Types.Mixed],
	vulnerabilities: [String],
	resistances: [String],
	immunities: [String],
	senses: [String],
	languages: [String],
	properties: [Schema.Types.Mixed],
	actions: [Schema.Types.Mixed],
	reactions: [Schema.Types.Mixed]
});

module.exports = mongoose.model('Monster', MonsterSchema);
