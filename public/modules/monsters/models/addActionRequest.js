var AddActionRequest = function(){

	this.data = {};

	this.refreshData = function(){
		this.data = {
			name: "testAction",
			description: "testing"
		};
	};

	this.getData = function () {
		return this.data;
	};

	this.refreshData();

};

module.exports = AddActionRequest;