'use strict';

define([
	'angular',
	'angularRoute',
	'view1/view1',
	'view2/view2',
	'index/index'
], function(angular, angularRoute, view1, view2) {
	// Declare app level module which depends on views, and components
	return angular.module('projectWeb', [
		'ngRoute',
		'projectWeb.view1',
		'projectWeb.view2',
		'projectWeb.index'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/index'});
	}]);
});

