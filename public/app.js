// Style
require('./app.scss');

// Libraries
require('angular-ui-router');

// Modules
var utils = require('./modules/utils');
var monsters = require('./modules/monsters');
var campaigns = require('./modules/campaigns');

// Controllers
var RootCtrl = require('./controllers/root.js');
var MonsterCtrl = require('./controllers/monster.js');
var CampaignCtrl = require('./controllers/campaign.js');

// Config
var RouteConfig = require('./config/app.routes.js');

angular.module('app', ['ui.router', monsters, utils]);

angular.module('app')
  .controller('RootCtrl', RootCtrl)
  .controller('MonsterCtrl', MonsterCtrl)
  .controller('CampaignCtrl', CampaignCtrl)
  .config(RouteConfig);
