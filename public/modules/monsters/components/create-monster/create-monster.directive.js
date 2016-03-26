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
      this.enumerableTraits = MonsterUtils.getEnumerables;

      this.refreshState = {
        errors: function() {
          cm.errors = [];
        },
        inputs: function() {
          cm.newSkill = "";
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