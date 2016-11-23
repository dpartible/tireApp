/*
 *		Router file for app
 *
 */

var myApp = angular.module('myApp', ['ui.router', 'myAppCtrl']);

myApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

	// console.log('running my app config');

	$urlRouterProvider.otherwise('/');	// if url is unknown default to home page

	$stateProvider
		.state('home', {	// set home page to vehicle search

			url: '/',
			views:{
				"mainBody": {
					templateUrl: '/partials/byvehicle.html',
					controller: 'MyAppController'
				},"dataTable": {
					templateUrl: '/partials/dataTable.html',
					controller: 'MyAppController'
				},
				// "navBar": {
				// 	templateUrl: '/partials/navBar.html',
				// 	controller: 'MyAppController'
				// }
			}


		}).state('byvehicle', {	// set route for search by vehicle

			url: '/byvehicle',
			views:{
				"mainBody": {
					templateUrl: '/partials/byvehicle.html',
					controller: 'MyAppController'
				},
				"dataTable": {
					templateUrl: '/partials/dataTable.html',
					controller: 'MyAppController'
				},
				// "navBar": {
				// 	templateUrl: '/partials/navBar.html',
				// 	controller: 'MyAppController'
				// }
			}


		}).state('bytiresize', {	// set route for search by tire size

			url: '/bysize',
			views:{
				"mainBody": {
					templateUrl: '/partials/bytiresize.html',
					controller: 'MyAppController'
				},
				// "navBar": {
				// 	templateUrl: '/partials/navBar.html',
				// 	controller: 'MyAppController'
				// }
			}

		});

}]);
