require('./create-monster.scss');

function CreateMonster(MonsterResource, MonsterUtils, CreateMonsterRequest){
  return {
    restrict: 'E',
    scope: {},
    template: require('./create-monster.html'),
    controller: function(){
      var monster = new CreateMonsterRequest();

      this.data = monster.getData();

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