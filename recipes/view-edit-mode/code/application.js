angular.module('cookbookApp', [])
  .directive('editMode', function() {
    return function(scope, element) {
      scope.$watch('editMode', function() {
        if (scope.editMode) {
          element.removeClass('viewable')
            .addClass('editable')
            .removeAttr('disabled');
        } else {
          element.removeClass('editable')
            .addClass('viewable')
            .attr('disabled','disabled');
        }
      });
    };
  })
  .controller('MainController', function($scope) {
    $scope.editMode = false;
    $scope.name = 'AngularJS';
  });


