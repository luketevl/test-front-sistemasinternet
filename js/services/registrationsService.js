(function(){
  'use strict';

  angular.module('app').factory('registrationsService', registrationsService);

  function registrationsService(){
    var _listRegistrations = [];
    /**
      * ADD new registration
      * @author lukete
      * @param registration
      * @since 17/07/16
    **/
    var _add = function(registration) {
      if(_isExists(registration)) return false;
      _listRegistrations.push(registration);
      return true;
    };
    /**
      * GET LIST OF registrations
      * @author lukete
      * @since 17/07/16
    **/
    var _getListRegistration = function(){
      // Imutable
      return [].concat(_listRegistrations);
    };
    /**
      * REMOVE new registration
      * @author lukete
      * @param registration
      * @since 17/07/16
    **/
    var _remove = function(registration) {
      _listRegistrations = _listRegistrations.filter(function(el){
        if(el.name != registration.name) return el.name;
      });
    };

    /**
      * Verify if registration exists
      * @author lukete
      * @param registration
      * @since 17/07/16
    **/
    var _isExists = function(registration) {
      var exists = false;
      _listRegistrations.forEach(function(el){
        if(el.name == registration.name){ exists = true; return;};
      });
      return exists;
    };

    return {
      add: _add,
      remove: _remove,
      getListRegistration: _getListRegistration,
    }
  }
})();
