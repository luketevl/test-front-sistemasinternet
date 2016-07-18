(function(){
  
  'esversion 6';
  angular.module('app').directive('reponsiveTable', responsiveTable);

  function responsiveTable(){
    return {
      restrict: 'E',
      scope: {
        items: '=',
        columns: '='
      },
      templateUrl : function ($scope, $attrs) {
        return $attrs.templateName || '' ;
      },
    };
  }
})();
