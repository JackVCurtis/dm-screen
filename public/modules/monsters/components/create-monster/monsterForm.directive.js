require('./monsterForm.scss');

function MonsterForm(){
  return {
    restrict: 'E',
    scope: {},
    template: require('./monsterForm.html'),
    controller: function(){
      console.log(this);
    },
    controllerAs: 'cm',
    bindToController: {
      data: '=',
      onSubmit: '&'
    }
  };
}

MonsterForm.$inject = [];

module.exports = MonsterForm;