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

      this.refreshState = {
        errors: function() {
          cm.errors = monster.getErrorTypes();
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

      this.addSkill = function(){
        var status = MonsterUtils.addSkill(this.newSkill, this.data);

        if (status.type == "OK"){ this.refreshState.errors(); this.refreshState.inputs(); }
        else { this.errors.skills = status; }
      };

      this.deleteSkill = function (skillIndex) {
        MonsterUtils.deleteSkill(skillIndex, this.data);
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