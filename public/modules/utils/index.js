// Services
var DisplayHelpers = require('./services/display-helpers.service.js');
var StatusEnumerable = require('./services/status-enumerable.service.js');

// Directives
var ContentEditable = require('./directives/contenteditable.directive.js');
var ArrayInput = require('./components/array-input/array-input.directive.js');

angular.module('utils', []);

module.exports = angular.module('utils')
					.service('StatusEnumerable', StatusEnumerable)
					.service('DisplayHelpers', DisplayHelpers)
					.directive('contenteditable', ContentEditable)
					.directive('arrayInput', ArrayInput)
					.name;