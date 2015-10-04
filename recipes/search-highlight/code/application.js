angular.module('cookbookApp', ['ngSanitize'])
  .filter('highlight', function() {
    return function (input, search) {
      if (search === '') {
        return input;
      } else {
        var searchRegExp = new RegExp('('+ search + ')', 'gi');
        return input.replace(searchRegExp, '<span class="highlight">$1</span>');
      }
    };
  })
  .controller('MainController', function($scope) {
    $scope.items = ['Car', 'Jacket', 'Glasses'];
  });


