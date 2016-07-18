(function(){
  'use strict';

  angular.module('app').factory('studantsService', studantsService);

  function studantsService(){
    var _listStudants = [];
    /**
      * ADD new studant
      * @author lukete
      * @param studant
      * @since 17/07/16
    **/
    var _add = function(studant) {
      if(_isExists(studant)) return false;
      _listStudants.push(studant);
      return true;
    };
    /**
      * GET LIST OF studants
      * @author lukete
      * @since 17/07/16
    **/
    var _getListStudant = function(){
      // Imutable
      return [].concat(_listStudants);
    };
    /**
      * REMOVE new studant
      * @author lukete
      * @param studant
      * @since 17/07/16
    **/
    var _remove = function(studant) {
      _listStudants = _listStudants.filter(function(el){
        if(el.name != studant.name) return el.name;
      });
    };

    /**
      * Verify if studant exists
      * @author lukete
      * @param studant
      * @since 17/07/16
    **/
    var _isExists = function(studant) {
      var exists = false;
      _listStudants.forEach(function(el){
        if(el.name == studant.name){ exists = true; return;};
      });
      return exists;
    };

    return {
      add: _add,
      remove: _remove,
      getListStudant: _getListStudant,
    }
  }
})();
