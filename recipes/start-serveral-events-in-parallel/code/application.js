angular.module('cookbookApp', [])
  .controller('MainController', function($scope, $q) {
    var defer = $q.defer();
    var firstPromise = defer.promise;
    var secondPromise = $q.when('Resolved second promise');

    $scope.resolve = function() {
      defer.resolve('Resolved first promise');
    };
    $scope.reject = function() {
      defer.reject('Error in first promise');
    };

    $q.all([firstPromise, secondPromise]).then(function(messages) {
      $scope.resultAll =  messages.join(' and ');
    }, function(reason) {
      $scope.resultAll = reason;
    });
  });