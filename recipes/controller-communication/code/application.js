angular.module('cookbookApp', [])
  .factory('ItemsService', function(){
    var items = ['One', 'Two', 'Three'];

    function getItems() {
      return items;
    }

    return {
      getItems: getItems
    };
  })
  .controller('FirstController', function($scope, ItemsService) {
    $scope.items = ItemsService.getItems();
  })
  .controller('SecondController', function($scope, ItemsService) {
    $scope.items = ItemsService.getItems();

    $scope.addItem = function() {
      $scope.items.push(Math.random());
    };
  });


