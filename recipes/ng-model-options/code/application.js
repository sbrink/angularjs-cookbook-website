angular.module('cookbookApp', [])
  .controller('MainController', function($scope) {
    $scope.users = ['Bill', 'John', 'Anne', 'Phil', 'Mary'];
  });