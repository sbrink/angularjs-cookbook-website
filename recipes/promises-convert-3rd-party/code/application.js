angular.module('cookbookApp', [])
  .controller('MainController', function($scope, $q) {
    $q.when($.ajax({ url: 'users.json' })).then(function(users) {
      $scope.users = users;
    });
  });