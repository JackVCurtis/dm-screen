var arrayInputScss = require('./array-input.scss');

var ArrayInput = function(){
	return {
		restrict: 'E',
		scope: {},
    	template: require('./array-input.html'),
    	controller: function(){
            var ai = this;
            this.dataArray = [];

            this.refresh = function(){
                this.errors = [];
                this.newItem = "";
            };

            this.refresh();


            this.submit = function(){
                var item = this.addItem(this.newItem);
                console.log(item);

                this.dataArray.push(item);
                this.refresh();
            };

            this.delete = function(skillIndex){
                this.deleteItem(skillIndex);
                this.dataArray.splice(skillIndex, 1);
            };

        },
    	controllerAs: 'ai',
    	bindToController: {
	       addItem: '&',
           deleteItem: '&'
    	}
	};
};

module.exports = ArrayInput;	