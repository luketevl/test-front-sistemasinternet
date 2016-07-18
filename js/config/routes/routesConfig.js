(function(){
  'use strict';

  angular.module('app').config(routes);

  routes.$inject = ['$routeProvider'];

  function routes($routeProvider){
    // Route COURSES
    $routeProvider.when('/courses', {
      templateUrl: '/views/courses.html',
      controller:  'coursesCtrl',
    });

    $routeProvider.when('/studants', {
      templateUrl: '/views/studants.html',
      controller: 'studantsCtrl',
    });

    $routeProvider.when('/registration', {
      templateUrl: '/views/registration.html',
      controller: 'registrationsCtrl'
    });
    // DEFAULT route
    $routeProvider.otherwise({redirectTo: '/courses'});
  }
})();
