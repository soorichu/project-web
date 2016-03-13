/**
 * Created by Daniel on 2016. 3. 13..
 */
'use strict';
define([
    'jquery',
    'angular',
    'bootstrap',
    'uiRouter',
    'uibootstraptpls'
], function(jquery, angular, bootstrap, uiRouter, uibootstraptpls) {
    angular.module('sbAdminApp.dashboard', [
        'ui.router',
        'ui.bootstrap'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url:'/dashboard',
                controller: 'dashboardCtrl',
                templateUrl: 'modules/dashboard/views/dashboard.html'
            })
    }])
    .controller('dashboardCtrl', ['$scope', function($scope) {
        $scope.numbers = 10;
    }]);
});

