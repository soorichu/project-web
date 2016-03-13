
'use strict';

/**
 * Created by Daniel on 2016. 3. 13..
 */
define([
    'jquery',
    'angular',
    'bootstrap',
    'uiRouter',
    'uibootstraptpls',
    'modules/dashboard/dashboard'
], function(jquery, angular, bootstrap, uiRouter, uiTpl, dashboard) {
    // Declare app level module which depends on views, and components
    return angular.module('sbAdminApp', [
        'ui.router',
        'ui.bootstrap',
        'sbAdminApp.dashboard'
    ]).
    config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/dashboard');
    }]);
});