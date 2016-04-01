// Style
require('./app.scss');

// Libraries
require('angular-ui-router');
var Rx = require('rxjs');
// Extend Observable to be able to wrap scope
Rx.Observable.$watch = function (scope, watchExpression, objectEquality) {
    return Rx.Observable.create(function (observer) {
        // Create function to handle old and new Value
        function listener (newValue, oldValue) {
            observer.onNext({ oldValue: oldValue, newValue: newValue });
        }

        // Returns function which disconnects the $watch expression
        return scope.$watch(watchExpression, listener, objectEquality);
    });
};

// Modules
var utils = require('./modules/utils');
var monsters = require('./modules/monsters');
var campaigns = require('./modules/campaigns');

// Controllers
var RootCtrl = require('./controllers/root.js');
var CampaignCtrl = require('./controllers/campaign.js');

// Config
var RouteConfig = require('./config/app.routes.js');

angular.module('app', ['ui.router', monsters, utils]);

angular.module('app')
  .controller('RootCtrl', RootCtrl)
  .config(RouteConfig);
