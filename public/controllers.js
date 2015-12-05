/*
 * CONTROLLERS
 */

'use strict';

angular.module('myApp.controllers', [])
  .controller('MainCtrl', ['$rootScope', '$scope', '$location', function ($rootScope, $scope, $location) {
    // INITIALIZATION AND NAVBAR LOGIC
  }])

  //MOVIES
  .controller('MoviesIndexCtrl', ['Post', '$scope', '$location', '$http', function (Post, $scope, $location, $http) {
    // GET MOVIES
    $scope.Movies = Movie.query();

    // CREATE A MOVIE   
    $scope.createMovie = function() {
      var post = new Movie($scope.movie);
      movie.$save(function(data) {
        $scope.movies.unshift(data);
        $scope.post = {};
      });
    };

    // DELETE A POST
    $scope.deleteMovie = function(movie, index) {
      Movie.remove({ id: movie._id }, function(data) {
        $scope.movies.splice(index, 1);
      })
    };
  }])

  .controller('MusicSearch', function($http, $window, $scope) {
    $scope.searchMusic = function() {
      var term = { term: $scope.term };
      $http.post($window.location.origin + '/api/music/search', term)
        .success(function(response) {
          $scope.tracks = response['tracks']['items']
        })
        .error(function(response) {
          console.log(response)
        })
    }
  })
  ;
