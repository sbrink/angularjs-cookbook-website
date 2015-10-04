angular.module('cookbookApp', [])
  .service('Bogosort', function($rootScope){
    function shuffleArray(v) {
      // http://jsfromhell.com/array/shuffle
      for(var j, x,
            i = v.length; i;
            j = parseInt(Math.random()*i, 10), x=v[--i], v[i]=v[j], v[j]=x
      );
    }
    function isSorted(v){
      for(var i=1; i<v.length; i++) {
        if (v[i-1] > v[i]) { return false; }
      }
      return true;
    }
    function blockingSort(input) {
      while(!isSorted(input)){
        shuffleArray(input);
      }
    }
    function nonBlockingSort(input) {
      function next() {
        var counter = 0;
        console.log('Shuffle...');

        while(!isSorted(input) && counter++ < 1000){
          shuffleArray(input);
        }

        if (isSorted(input)) {
          $rootScope.$apply();
        } else {
          setTimeout(next, 0);
        }
      }
      setTimeout(next, 0);
    }
    return {
      nonBlockingSort: nonBlockingSort,
      blockingSort: blockingSort
    };
  })
  .controller('MainController', function($scope, Bogosort) {
    $scope.items = [];
    for(var i=1; i<11; i++) {
      $scope.items.push(Math.random());
    }
    $scope.sortBlocking = Bogosort.blockingSort;
    $scope.sortNonBlocking = Bogosort.nonBlockingSort;
  });