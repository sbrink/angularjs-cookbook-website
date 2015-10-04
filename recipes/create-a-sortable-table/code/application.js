angular.module('cookbookApp', [])
  .directive('thSortable', function() {
    return {
      transclude: true,
      template: '<a href ng-click="changeColumn()" ng-class="{' +
        'active: sort.column == column, ' +
        'asc: !sort.reverse, ' +
        'desc: sort.reverse' +
        '}">' +
        '<span ng-transclude></span></a>',
      scope : {
        sort: '=thSortable',
        column: '@thColumn'
      },
      controller: function($scope, $attrs) {
        $scope.sort = $scope.sort || {};

        if (angular.isDefined($attrs.thDefault)) {
          $scope.sort.column = 'name';
        }

        $scope.changeColumn = function() {
          if ($scope.sort.column === $scope.column) {
            $scope.sort.reverse = !$scope.sort.reverse;
          } else {
            $scope.sort = { column: $scope.column, reverse: false };
          }
        };
      }
    };
  })
  .controller('MainController', function($scope, $http) {
    $http.get('users.json').then(function(usersResponse) {
      $scope.users = usersResponse.data;
    });
  });


