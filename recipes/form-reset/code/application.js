angular.module('cookbookApp', [])
  .controller('MainController', function($scope, $q) {
    var initialFormData;

    $q.when({ firstName: 'John', lastName: 'Doe' }).then(function(formResponse) {
      initialFormData = formResponse;
      $scope.form = angular.copy(initialFormData);
    });

    $scope.reset =function() {
      $scope.form = angular.copy(initialFormData);
    };

  });