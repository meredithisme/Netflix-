/*
 * SERVICES
 */

'use strict';

angular.module('myApp.services', [])
  .factory('Movie', function ($window, $resource) {
    return $resource($window.location.origin + '/api/movies/:id', { id: '@id' }, {
      update: { method: 'PUT'} 
    });
  });