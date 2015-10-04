angular.module('cookbookApp', [])
  .directive('stackedBar', function() {
    return {
      restrict: 'E',
      template:   '<div class="stacked-bar-chart">' +
        '<div ng-repeat="bar in bars track by $index" ' +
        'class="stacked-bar stacked-bar-{{$index}}" ' +
        'ng-style="{width: bar+\'%\'}">' +
        '</div>' +
        '</div>',
      scope : {
        bars: '='
      }
    };
  })
  .controller('MainController', function($scope) {
    $scope.bars = [30,30,40];
  });



