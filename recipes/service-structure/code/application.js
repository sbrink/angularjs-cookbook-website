angular.module('cookbookApp', [])
  .factory('Task', function () {
    var tasks = ['Tidy up'];
    function inRange(i) {
      return i <= tasks.length-1;
    }
    function all() {
      return angular.copy(tasks);
    }
    function find(i) {
      return inRange(i)? tasks[i] : 'Not in range';
    }
    return {
      all: all,
      find: function(i) {
        return find(i);
      }
    };
  })
  .controller('MainController', function($scope, Task) {
    $scope.tasks = Task.all();
    $scope.task = Task.find(0);
  });



