require('./create-monster.scss');

function CreateMonster(MonsterResource, MonsterUtils, CreateMonsterRequest){
  return {
    restrict: 'E',
    scope: {},
    template: require('./create-monster.html'),
    controller: function(){
      var cm = this;
      var monster = new CreateMonsterRequest();
      this.data = monster.getData();        
      this.arrayTraits = MonsterUtils.getEnumerables();

      this.refreshState = {
        errors: function() {
          cm.errors = [];
        },
        inputs: function() {
          cm.newItems = monster.getInitialVals();
        }
      };

      this.refreshAll = function(){
        for (var key in cm.refreshState){
          cm.refreshState[key]();
        }
      };
      this.refreshAll();

      this.addItem = function(enumId, newItem, dataArray){
        var status = MonsterUtils.addItem(enumId, newItem, dataArray);

        if (status.type == "OK"){ this.refreshState.errors(); this.refreshState.inputs(); }
        else { this.errors[enumId] = status; }
      };

      this.addItemOnEnter = function($event, enumId, newItem, dataArray){
        if ($event.charCode == 13){
          this.addItem(enumId, newItem, dataArray);
        }
      };

      this.deleteItem = function (skillIndex,dataArray) {
        MonsterUtils.deleteItem(skillIndex, dataArray);
      };

      this.save = function(){
        console.log(this.data);
      };

    },
    controllerAs: 'cm',
    bindToController: {

    }
  };
}

CreateMonster.$inject = ['MonsterResource', 'MonsterUtils', 'CreateMonsterRequest'];

module.exports = CreateMonster;