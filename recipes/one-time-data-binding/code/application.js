angular.module('cookbookApp', [])
  .controller('MainController', function($scope) { 
    $scope.items = ['Ball', 'Hat', 'Car'];
  });