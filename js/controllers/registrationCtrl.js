(function(){
  'use strict';

  angular.module('app').controller('registrationsCtrl', registrationsCtrl);

  registrationsCtrl.$inject = ['$scope', '$mdDialog', 'registrationsService', 'coursesService', 'studantsService', 'toastService'];

  function registrationsCtrl($scope, $mdDialog, registrationsService, coursesService, studantsService, toastService){
    // GET LIST registrations
    $scope.registrations  = registrationsService.getListRegistration();
    $scope.courses        = coursesService.getListCourse();
    $scope.studants       = studantsService.getListStudant();
    $scope.add = function(studant, course) {
      var registry = {studant, course};
      var resp = registrationsService.add(registry);
      if(!resp){
        toastService.show('Curso já existe, cadastre com nome diferente');
        return false;
      }
      toastService.show('Adicionado com sucesso');
      $scope.registrations.push(registry);
  };

    // Function to remove
    $scope.remove = function(registration){
        registrationsService.remove(registration);
        toastService.show('Excluido com sucesso');
        $scope.registrations = registrationsService.getListRegistration();
    }
  }
})();
