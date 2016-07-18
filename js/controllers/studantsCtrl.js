(function(){
  'use strict';

  angular.module('app').controller('studantsCtrl', studantsCtrl);

  studantsCtrl.$inject = ['$scope', '$mdDialog', 'studantsService', 'toastService'];

  function studantsCtrl($scope, $mdDialog, studantsService, toastService){
    // GET LIST studants
    $scope.studants = studantsService.getListStudant();
    $scope.showAdd = function(ev, studant) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/formStudant.html',
      targetEvent: ev,
      locals:{
        studant: studant,
      }
    })
    .then(function(studant) {
      var resp = studantsService.add(studant);
      if(!resp){
        toastService.show('Curso já existe, cadastre com nome diferente');
        return false;
      }
      toastService.show('Adicionado com sucesso');
      $scope.studants.push(studant);
    }, function() {});
  };

    // Function to remove
    $scope.remove = function(studant){
        studantsService.remove(studant);
        toastService.show('Excluido com sucesso');
        $scope.studants = studantsService.getListStudant();
    }
  }
  function DialogController($scope, $mdDialog, studant) {
    $scope.studant = studant;
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.add = function(studant) {
      $mdDialog.hide(studant);
    };
  }
})();
