angular.module('cookbookApp', [])
  .directive('prefill', function() {
    return {
      templateUrl: function(element, attrs) {
        return attrs.prefill + '.html';
      }
    };
  });


