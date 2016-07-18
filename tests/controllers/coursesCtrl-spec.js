describe('coursesCtrl', function(){
  beforeEach(angular.module('app'));

  it('Check the variable is empty', inject(function($controler){
    var scope = {};
    var ctrl = $controler('coursesCtrl', {
      $scope: scope
    });

    expect(scope.courses).toBe({});
  }));
});
