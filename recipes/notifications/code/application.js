angular.module('cookbookApp', [])
  .factory('NotificationService', function($timeout) {
    var globalCounter = 0, list = [];

    function getCounter() { return globalCounter += 1; }
    function getList() { return list; }

    function add(text, sticky, timeout) {
      var counter = getCounter();
      list.unshift({ id: counter, text: text});
      if (!sticky) {
        $timeout(
          function(){ remove(counter); },
          (timeout || 3000)
        );
      }
    }

    function remove(id){
      for (var i=0; i<list.length; i++) {
        if (list[i].id === parseInt(id, 10)) {
          return list.splice(i, 1);
        }
      }
    }

    return {
      add: add,
      remove: remove,
      getList: getList
    };
  })
  .controller('NotificationsController', function($scope, NotificationService) {
    $scope.notifications = NotificationService;
  })
  .controller('MainController', function($scope, NotificationService) {
    $scope.addNotification = function(sticky) {
      NotificationService.add(new Date(), sticky, 1000);
    };
  });


