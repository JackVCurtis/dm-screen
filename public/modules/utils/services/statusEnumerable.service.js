var statusOK = function(){
	this.type = "OK";
	this.message = "Everything's fine";
	this.error = false;
};

var statusInputError = function(message){
	this.type = "InputError";
	this.message = "Invalid input: " + message;
	this.error = true;
};

var StatusEnumberable = function(){
	this.OK = function(){
		return new statusOK();
	};

	this.InputError = function (message) {
		return new statusInputError(message);
	};
};

module.exports = StatusEnumberable;