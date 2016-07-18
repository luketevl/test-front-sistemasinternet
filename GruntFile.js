'use strict';
module.exports = (grunt) => {

  // Config

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
      force: true
    },
      js: {
        files: {
          'dist/js/scripts.js': ['dist/js/scripts.js']
        }
      },
    },
    concat:{
        dist: {
        src: ['js/**/*.js'],
        dest: 'dist/js/scripts.js',
      },
    },
  });

  // LOAD libraries
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Tasks
  grunt.registerTask('default', ['concat', 'uglify']);
};
