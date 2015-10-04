angular.module('focusApp', [])
  .directive('focusMe', function() {
    return {
      link: function (scope, element) {
        element[0].focus();
      }
    };
  });