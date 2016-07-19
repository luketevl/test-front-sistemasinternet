(function(){
'use strict';

describe('coursesCtrl', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  describe('$scope.courses', function() {
    it('verify if courses is empty object', function() {
      var $scope = {};
      var controller = $controller('coursesCtrl', {$scope: $scope});
      expect($scope.courses).toEqual([]);
    });
  });
});
})();
