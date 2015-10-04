angular.module('cookbookApp', [])
  .factory('People', function($http) {
    return {
      getList: function() { return $http.get('person.json'); }
    };
  })
  .directive('dynamicSelect', function($injector) {
    return {
      restrict : 'E',
      scope: {
        model: '=',
        resourceId: '@',
        resourceLabel: '@'
      },
      template: '<select ng-model="model" ng-options="item[resourceId] ' +
        'as item[resourceLabel] for item in items" />',
      link: function(scope, element, attrs) {
        var temp = attrs.resource.split('.');
        var params = { name: temp[0], fn: temp[1] };

        var service = $injector.get(params.name);

        service[params.fn]().then(function(serviceResponse) {
          scope.items = serviceResponse.data;
        });
      }
    };
  })
  .controller('MainController', function($scope) {
    $scope.personId = 2;
  });