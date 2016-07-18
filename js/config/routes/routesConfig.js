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

    // DEFAULT route
    $routeProvider.otherwise({redirectTo: '/404.html'});
  }
})();
