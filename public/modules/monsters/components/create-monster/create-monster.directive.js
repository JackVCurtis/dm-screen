require('./create-monster.scss');

function CreateMonster(MonsterResource, MonsterUtils, CreateMonsterRequest){
  return {
    restrict: 'E',
    scope: {},
    template: require('./create-monster.html'),
    controller: function(){
      this.errorMsgs = [];

      var monster = new CreateMonsterRequest();      
      this.data = monster.getData();

      this.newSkill = "";

      this.addSkill = function(){
        var skill = MonsterUtils.createSkill(this.newSkill, this.errorMsgs);
        
        if (skill){
          this.data.skills.push(skill);
          this.newSkill = "";
        }
      };

      this.deleteSkill = function(skillId){
        this.data.skills = MonsterUtils.deleteSkill(this.data.skills, skillId);
      };

      this.save = function(){
        console.log(this.data);
      };

      // Display helpers

    },
    controllerAs: 'cm',
    bindToController: {

    }
  };
}

CreateMonster.$inject = ['MonsterResource', 'MonsterUtils', 'CreateMonsterRequest'];

module.exports = CreateMonster;