angular.module('cookbookApp', [])
  .factory('ThemeService', function(){
    var themes = { available: ['default', 'greenish'], active: 'default' };

    function getTheme() { return themes.active; }

    function setTheme(name) {
      if (themes.available.indexOf(name) === -1) { return; }
      themes.active = name;
    }

    return {
      getTheme: getTheme,
      setTheme: setTheme
    };
  })
  .controller('HeadController', function($scope, ThemeService) {
    $scope.getTheme = ThemeService.getTheme;
  })
  .controller('MainController', function($scope, ThemeService) {
    $scope.setTheme = ThemeService.setTheme;
  });


