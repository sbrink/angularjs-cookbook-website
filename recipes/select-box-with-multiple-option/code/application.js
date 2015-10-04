angular.module('cookbookApp', [])
  .controller('MainController', function($scope) {
    $scope.people = [
      { id:1, name:'John' },
      { id:2, name:'Bill' },
      { id:3, name:'Phil' }
    ];

    $scope.selected = [1,2];
  });