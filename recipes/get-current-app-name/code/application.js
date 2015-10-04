angular.module('cookbookApp', [])
  .controller('MainController', function($scope, $rootElement) {
    $scope.appName = $rootElement.attr('ng-app');
  });


