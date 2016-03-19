require('./monster.form.scss');

module.exports = function MonsterForm(){
  return {
    restrict: 'E',
    scope: {},
    template: require('./monster.form.html'),
    controller: function(){
      this.data = {
        name: '',
        attributes: {
          'str': 10,
          'dex': 10,
          'con': 10,
          'int': 10,
          'wis': 10,
          'cha': 10
        }
      };

      this.attributeList = [
        {
          name: 'Strength',
          key: 'str'
        },
        {
          name: 'Dexterity',
          key: 'dex'
        },
        {
          name: 'Constitution',
          key: 'con'
        },
        {
          name: 'Intelligence',
          key: 'int'
        },
        {
          name: 'Wisdom',
          key: 'wis'
        },
        {
          name: 'Charisma',
          key: 'cha'
        }
      ];
    },
    controllerAs: 'monsterForm',
    bindToController: {
      test: '&'
    }
  };
};