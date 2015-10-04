angular.module('cookbookApp', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', { 
        template: '<h1>{{title}} from router template</h1>', 
        controller: 'demoController',
        title: 'My page title'
      })
      .otherwise('/');
  })
  .controller('demoController', function($scope, $route) {
    $scope.title = $route.current.title;
  })
  .directive('pageTitle', function(){
    return {
      template: '{{title}} from Directive',
      link: function(scope) {
        scope.$on('$routeChangeSuccess', function(event, current, previous) {
          scope.title = current.title;
        });
      }
    }    
  });


