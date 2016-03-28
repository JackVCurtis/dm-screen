// Style
require('./app.scss');

// Libraries
require('angular-ui-router');

// Modules
var utils = require('./modules/utils');
var monsters = require('./modules/monsters');


// Controllers
var RootCtrl = require('./controllers/root.js');
var MonsterCtrl = require('./controllers/root.js');

// Config
var RouteConfig = require('./config/app.routes.js');

angular.module('app', ['ui.router', monsters, utils]);

angular.module('app')
  .controller('RootCtrl', RootCtrl)
  .controller('MonsterCtrl', MonsterCtrl)
  .config(RouteConfig);
