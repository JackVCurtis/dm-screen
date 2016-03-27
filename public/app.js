// Style
require('./app.scss');

// Modules
var utils = require('./modules/utils');
var monsters = require('./modules/monsters');


// Controllers
var RootCtrl = require('./controllers/root.js');

angular.module('app', [monsters, utils]);

angular.module('app')
  .controller('RootCtrl', RootCtrl);
