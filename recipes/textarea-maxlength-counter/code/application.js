angular.module('cookbookApp', [])
  .directive('maxlengthCounter', function ($compile) {
    var counterTemplate = '<p>Remaining charaters: {{remaining}}</p>';
    return {
      require:'ngModel',
      link:function (scope, element, attrs, ngModelCtrl) {
        var maxLength = parseInt(attrs.maxlengthCounter, 10);

        var counterScope = scope.$new();
        counterScope.remaining = maxLength;
        element.after($compile(counterTemplate)(counterScope));

        ngModelCtrl.$parsers.push(function (value) {
          var currentLength = parseInt(value.length, 10);

          if (currentLength > maxLength) {
            element.val(value.substr(0, maxLength));
            currentLength = maxLength;
          }
          counterScope.remaining = maxLength - currentLength;
        });
      }
    };
  });


