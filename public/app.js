/*
 * ANGULAR APP.JS
 */

'use strict';

angular.module('myApp', ['ui.router',
                         'ngResource',
                         'myApp.controllers',
                         'myApp.services'])

  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
      .state('posts', {
        url: "/",
        templateUrl: 'routes/movies',
        controller: 'MoviesIndexCtrl'
      })

      .state('post', {
        url: "/posts/:id",
        templateUrl: 'routes/movies',
        controller: 'MoviesShowCtrl'
      });

      
    $urlRouterProvider.otherwise("/state1");

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
  }]);
