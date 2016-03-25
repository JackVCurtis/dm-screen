var DisplayHelpers = function(){

	this.joinList = function(list, opt){
		var options = opt || {};
		var delimiter = options.delimiter || ", ";
		var transform = options.transform || false;

		if (transform) {
			return list.map(transform).join(delimiter);
		}
		else {
			return list.join(delimiter);
		}
	};
	
};

DisplayHelpers.$inject = [];

module.exports = DisplayHelpers;