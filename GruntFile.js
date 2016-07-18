'use strict';
module.exports = (grunt) => {

  // Config

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner
      },
    },
  });

  // LOAD libraries
  grunt.loadNpmTalks('grunt-contrib-uglify');

  // Tasks
  grunt.registerTask('default', ['uglify']);
};
