angular.module('cookbookApp', [])
  .directive('waitingForRequest', function($http) {
    var pendingRequests = function() {
      return $http.pendingRequests.length > 0;
    };
    return {
      restrict: 'E',
      scope: {},
      template: '<div ng-show="waiting">Waiting for request to finish...</div>',
      controller: function($scope) {
        $scope.$watch(pendingRequests, function(value) {
          console.log('Pending requests: '+ $http.pendingRequests.length);
          $scope.waiting = value;
        });
      }
    };
  })
  .controller('MainController', function($scope, $http) {
    $http.get('https://api.github.com/users/sbrink');
  });