angular.module('cookbookApp', [])
  .controller('MainController', function($scope) {
    $scope.tasks = [];

    $scope.addTask = function(taskName) {
      $scope.tasks.push(taskName);
    };
  });


