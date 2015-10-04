angular.module('cookbookApp', [])
  .filter('bogosort', function(){
    function shuffle(v) {
      // http://jsfromhell.com/array/shuffle
      for(var j, x,
            i = v.length; i;
          j = parseInt(Math.random() * i, 10), x = v[--i], v[i] = v[j], v[j] = x
        );
      return v;
    }
    function isSorted(v){
      for(var i=1; i<v.length; i++) {
        if (v[i-1] > v[i]) { return false; }
      }
      return true;
    }
    return function(input) {
      var sorted = false;
      while(sorted === false){
        input = shuffle(input);
        sorted = isSorted(input);
      }
      return input;
    };
  })
  .controller('MainController', function($scope) {
    $scope.items = [Math.random(), Math.random(), Math.random()];

    $scope.addItem = function() {
      $scope.items.push(Math.random());
    };
  });