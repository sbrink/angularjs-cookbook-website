angular.module('cookbookApp', [])
  .directive('blacklist', function ($parse) {
    return {
      require:'ngModel',
      link: function (scope, element, attrs, ngModel) {
        var badWords = $parse(attrs.blacklist)(scope) || [];

        ngModel.$validators.blacklist = function(value) {
          return badWords.every(function(str) {
            return value.indexOf(str) === -1;
          });
        }
      }
    };
  })
  .controller('MainController', function($scope) {
    $scope.blacklistValues = ['hello', 'bye'];
  });
