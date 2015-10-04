angular.module('cookbookApp', [])
  .controller('MainController', function($scope) {
    $scope.tasks = [
      { completed: true,  title: 'Wash dishes' },
      { completed: false, title: 'Tidy up' },
      { completed: false, title: 'Do laundry' }
    ];

    $scope.$watch('tasks', function(tasks) {
      $scope.completedTasksCount = tasks.filter(function(task) {
        return task.completed;
      }).length;
    }, true);

    $scope.selectAllTasks = function() {
      angular.forEach($scope.tasks, function(task) {
        task.completed = true;
      });
    };

    $scope.deselectAllTasks = function() {
      angular.forEach($scope.tasks, function(task) {
        task.completed = false;
      });
    };

    $scope.invertAllTasks = function() {
      angular.forEach($scope.tasks, function(task) {
        task.completed = !task.completed;
      });
    };
  });