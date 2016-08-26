angular.module('assessment')
  .controller('mainCtrl', function($scope, mainService) {

    $scope.getPets = mainService.getPets().then
                          (function(response) {
                              $scope.pets = response;
      });



})
