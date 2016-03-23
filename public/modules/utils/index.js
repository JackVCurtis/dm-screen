// Directives
var ContentEditable = require('./directives/contenteditable.directive.js');

angular.module('utils', []);

module.exports = angular.module('utils')
					.directive('contenteditable', ContentEditable)
					.name;