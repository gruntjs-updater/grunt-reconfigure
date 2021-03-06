/*
 * grunt-reconfigure
 * https://github.com/jlindsey/grunt-reconfigure
 *
 * Copyright (c) 2013 Joshua Lindsey
 * Licensed under the MIT license.
 */
 
'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      options: {
        "laxcomma": true,
        "curly": true,
        "eqeqeq": true,
        "immed": true,
        "latedef": true,
        "newcap": true,
        "noarg": true,
        "sub": true,
        "undef": true,
        "boss": true,
        "eqnull": true,
        "node": true,
        "es5": true
      },
      
      files: ['Gruntfile.js', 'tasks/*.js', 'test/**/*.js']
    },

    nodeunit: {
      all: ['test/*_test.js']
    },

    watch: {
      all: {
        files: ['<%= jshint.files %>'],
        tasks: ['default'],
        options: {
          interrupt: true
        }
      }
    },

    testdata: {
      options: {
        foo: 'bar',        
        baz: false,
        fizz: 'buzz',
        reconfigureOverrides: {
          test: {
            foo: 'qux',
            baz: true
          },
          test2: {
            fizz: 'boo'
          },
          test3: {
            fuzz: 'fizz'
          }
        }
      },

      additional: {
        options: {
          shorts: 'shorts',
          reconfigureOverrides: {
            test: {
              shorts: 'pants'
            }
          }
        }
      },

      object_test: {
        options: {
          foo: {
            bar: 'baz'
          },
          reconfigureOverrides: {
            test4: {
              foo: {
                fizz: 'buzz'
              }
            },
            test5: {
              foo: {
                bar: 'foo'
              }
            }
          }
        }
      },

      nested: {
        another: {
          level_3: {
            options: {
              josh: 'shorts',
              reconfigureOverrides: {
                pants: {
                  josh: 'pants'
                }
              }
            }
          }
        }
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'nodeunit']);
};
