angular.module('mockHttpApp', [])
  .factory('Task', function($http) {
    return {
      all: function() {
        return $http.get('/tasks').then(function(tasksResponse){
          return tasksResponse.data;
        });
      }
    };
  });

