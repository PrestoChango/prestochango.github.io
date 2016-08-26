angular.module('assessment')
  .directive('petCont', function() {

    return {
      restrict: 'EA',
      templateUrl: '../../views/pet-tmpl.html',
      scope: {
        dog: '='
      },
      controller: function($scope, mainService) {

      },
      link: function(scope, element, attr) {

      }

    }

})
