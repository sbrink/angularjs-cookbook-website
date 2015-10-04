angular.module('cookbookApp', [])
  .directive('unique', function () {
    return {
      require:'ngModel',
      link: function (scope, element, attrs, ngModelCtrl) {
        var original;
        ngModelCtrl.$formatters.unshift(function(modelValue) {
          original = modelValue;
          return modelValue;
        });
        ngModelCtrl.$parsers.push(function (value) {
          if (value && value !== original) {
            scope[attrs.unique](value).then(function(result) {
              ngModelCtrl.$setValidity('unique', result);
            });
            return value;
          }
        });
      }
    };
  })
  .controller('MainController', function($scope, $http) {
    $scope.checkUniqueLogin = function(value) {
      return $http.get('users.json').then(function(usersResponse) {
        return !usersResponse.data.filter(function(user){
          return user.login === value;
        }).length;
      });
    };
  });