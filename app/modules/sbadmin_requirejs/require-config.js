'use strict';
/*
*
* @date 2016-03-14
* 아 어렵다....
* */
require.config({
	paths: {
		jquery            : '../../bower_components/jquery/dist/jquery',
		bootstrap         : '../../bower_components/bootstrap/dist/js/bootstrap',
		angular           : '../../bower_components/angular/angular',
		uiRouter          : '../../bower_components/angular-ui-router/release/angular-ui-router',
		json3             : '../../bower_components/json3/lib/json3',
		oclazyload        : '../../bower_components/oclazyload/dist/ocLazyLoad',
		angularLoadingBar : '../../bower_components/angular-loading-bar/build/loading-bar',
		uibootstraptpls   : '../../bower_components/angular-bootstrap/ui-bootstrap-tpls',
		metisMenu         : '../../bower_components/metisMenu/dist/metisMenu',
		chart             : '../../bower_components/Chart.js/Chart'
	},
	shim : {
		'angular' : {
			exports : 'angular'
		},
		'uiRouter' : {
			deps : ['angular'],
			exports : 'uiRouter'
		},
		'bootstrap':{
			deps : ['jquery']
		},
		'uibootstraptpls' : {
			deps: ['angular']
		}
	},
	priority: [
		"angular"
	]
	//,
	//deps: window.__karma__ ? allTestFiles : [],
	//callback: window.__karma__ ? window.__karma__.start : null,
	//baseUrl: window.__karma__ ? '/base/index' : '',
});

require([
	'jquery',
	'angular',
	'bootstrap',
	'uiRouter',
	'index'
	], function(jquery, angular, bootstrap, uiRouter, index) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);

		/*
		*
		* sb-admin.js 초기화 로딩
		* */

		angular.element().ready(function() {
			// bootstrap the index manually
			angular.bootstrap(document, ['sbAdminApp']);
		});
	}
);