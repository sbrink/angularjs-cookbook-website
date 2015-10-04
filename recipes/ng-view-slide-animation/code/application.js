angular.module('cookbookApp', ['ngRoute', 'ngAnimate'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/1', { template: '<h1>first page</h1>' })
      .when('/2', { template: '<h1>second page</h1>' })
      .otherwise({redirectTo: '/1' });
  })
  .controller('MainController', function($scope, $location) {
    $scope.moveLeft = function(href) {
      $scope.direction = 'left';
      $location.path(href);
    };

    $scope.moveRight = function(href) {
      $scope.direction = 'right';
      $location.path(href);
    };
  });


