angular.module('cookbookApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/pages/:pages*', { templateUrl: 'demo.html' })
      .when('/:lang?/admin',  { templateUrl: 'demo.html' });
  })
  .controller('RouteController', function($scope, $location, $routeParams) {
    $scope.locationPath = $location.path();
    $scope.routeParams = $routeParams;
  });


