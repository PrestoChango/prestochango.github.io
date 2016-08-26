angular.module('assessment')
  .controller('petsCtrl', function($scope, mainService) {

      $scope.getBio = function(id) {
        console.log(id);
      }
      console.log('i exist')
})
