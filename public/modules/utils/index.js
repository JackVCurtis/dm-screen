// Services
var DisplayHelpers = require('./services/display-helpers.service.js');

// Directives
var ContentEditable = require('./directives/contenteditable.directive.js');

angular.module('utils', []);

module.exports = angular.module('utils')
					.service('DisplayHelpers', DisplayHelpers)
					.directive('contenteditable', ContentEditable)
					.name;