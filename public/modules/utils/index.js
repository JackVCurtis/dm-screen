// Modules

// Services
var DisplayHelpers = require('./services/displayHelpers.service.js');
var StatusEnumerable = require('./services/statusEnumerable.service.js');

// Directives
var ContentEditable = require('./directives/contenteditable.directive.js');
var ArrayInput = require('./components/array-input/arrayInput.directive.js');
var jvcTabNav = require('./components/jvc-tab-navbar/jvcTabNavbar.directive.js');

angular.module('utils', []);

module.exports = angular.module('utils')
					.service('StatusEnumerable', StatusEnumerable)
					.service('DisplayHelpers', DisplayHelpers)
					.directive('contenteditable', ContentEditable)
					.directive('arrayInput', ArrayInput)
					.directive('jvcTabNav', jvcTabNav)
					.name;