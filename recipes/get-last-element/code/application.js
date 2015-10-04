angular.module('cookbookApp', [])
  .controller('MainController', function($scope) {
    $scope.items = [{ id: 1, name: 'First'  },
                    { id: 2, name: 'Second' },
                    { id: 3, name: 'Third'  },
                    { id: 4, name: 'Forth'  }];
  });


