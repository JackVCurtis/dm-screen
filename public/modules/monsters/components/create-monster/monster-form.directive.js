require('./monster-form.scss');

function MonsterForm(){
  return {
    restrict: 'E',
    scope: {},
    template: require('./monster-form.html'),
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