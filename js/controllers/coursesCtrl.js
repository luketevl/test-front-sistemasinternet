(function(){
  'use strict';

  angular.module('app').controller('coursesCtrl', coursesCtrl);

  coursesCtrl.$inject = ['$scope', '$mdDialog', 'coursesService', 'toastService'];

  function coursesCtrl($scope, $mdDialog, coursesService, toastService){
    // GET LIST courses
    $scope.courses = coursesService.getListCourse();
    $scope.showAdd = function(ev, course) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/formCourse.html',
      targetEvent: ev,
      locals:{
        course: course,
      }
    })
    .then(function(course) {
      var resp = coursesService.add(course);
      if(!resp){
        toastService.show('Curso já existe, cadastre com nome diferente');
        return false;
      }
      toastService.show('Adicionado com sucesso');
      $scope.courses.push(course);
    }, function() {});
  };

    // Function to remove
    $scope.remove = function(course){
        coursesService.remove(course);
        toastService.show('Excluido com sucesso');
        $scope.courses = coursesService.getListCourse();
    }
  }
  function DialogController($scope, $mdDialog, course) {
    $scope.course = course;
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.add = function(course) {
      $mdDialog.hide(course);
    };
  }
})();
