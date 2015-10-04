angular.module('cookbookApp', [])
  .directive('markdownPreview', function() {
    var converter = new Showdown.converter();
    return {
      restrict: 'E',
      scope : {
        model: '='
      },
      link: function(scope, element) {
        scope.$watch('model', function(markdownText){
          var resultHtml = converter.makeHtml(markdownText || '');
          element.html(resultHtml);
        });
      }
    };
  });

