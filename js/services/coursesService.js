(function(){
  'use strict';

  angular.module('app').factory('coursesService', coursesService);

  function coursesService(){
    var _listCourses = [];
    /**
      * ADD new course
      * @author lukete
      * @param course
      * @since 17/07/16
    **/
    var _add = function(course) {
      if(_isExists(course)) return false;
      _listCourses.push(course);
      return true;
    };
    /**
      * GET LIST OF courses
      * @author lukete
      * @since 17/07/16
    **/
    var _getListCourse = function(){
      // Imutable
      return [].concat(_listCourses);
    };
    /**
      * REMOVE new course
      * @author lukete
      * @param course
      * @since 17/07/16
    **/
    var _remove = function(course) {
      _listCourses = _listCourses.filter(function(el){
        if(el.name != course.name) return el.name;
      });
    };

    /**
      * Verify if course exists
      * @author lukete
      * @param course
      * @since 17/07/16
    **/
    var _isExists = function(course) {
      var exists = false;
      _listCourses.forEach(function(el){
        if(el.name == course.name){ exists = true; return;};
      });
      return exists;
    };

    return {
      add: _add,
      remove: _remove,
      getListCourse: _getListCourse,
    }
  }
})();
