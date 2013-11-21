/*
 * grunt-helpers
 * https://github.com/jonschlinkert/grunt-helpers
 *
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      files: ['test/test-*.js'],
    },

    jshint: {
      options: {jshintrc: '.jshintrc'},
      all: {
        src: ['Gruntfile.js', 'lib/*.js', 'test/*.js']
      }
    },

    clean: {
      test: ['test/actual/*']
    }
  });
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-readme');

  // Tests to be run.
  grunt.registerTask('test', ['jshint', 'nodeunit']);

  // Default task.
  grunt.registerTask('default', ['clean', 'jshint', 'readme']);

};
