module.exports = function MonsterUtils(StatusEnumerable){

	this.addItem = function (enumId, itemId, dataArray) {	
		var item;
		var enumType = this.getEnumerable(enumId);

		if (enumType.list) {
			item = enumType.list().filter(function (item){
				return item.id == itemId.toLowerCase();
			})[0];
		} 
		else {
			item = itemId;
		}

		if (item) {
			dataArray.push(item);
			return StatusEnumerable.OK();
		}
		else {
			return StatusEnumerable.InputError(itemId + " is not a legal value");
		}
	};

	this.deleteItem = function (index, dataArray) {
		dataArray.splice(index, 1);
	};

};