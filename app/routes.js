angular.module('assessment')
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('/', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state('about', {
        url: '/about',
        templateUrl: '../views/about.html'
      })
      .state('blog', {
        url: '/blog',
        templateUrl: '../views/blog.html'
      })
      .state('pets', {
        url: '/pets',
        templateUrl: '../views/pets.html'
      })
      .state('bio', {
        url: '/bio/:id',
        templateUrl: '../views/pet-bio.html',
        controller: function($scope, $stateParams, mainService) {
          $scope.id = $stateParams.id;
          mainService.getBio($scope.id).then(function(response) {
            $scope.vm = response;
            console.log($scope.vm);
          });


        }
      })



})
