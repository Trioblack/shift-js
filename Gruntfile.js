module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      api: {
        src: 'client/app/components/repl/browserApi.js',
        dest: 'client/app/components/repl/api.js'
      }
    },

    mochaTest: {
      lexer: {
        options: {
          reporter: 'spec'
        },
        src: [
          'tests/lexerTests.js'
        ]
      },
      parser: {
        options: {
          reporter: 'spec'
        },
        src: [
          'tests/parserTestsFirstMilestone.js',
          'tests/parserTestsSecondMilestone.js',
          'tests/parserTestsThirdMilestone.js'
        ]
      },
      test: {
        options: {
          reporter: 'spec'
        },
        src: [
          'tests/lexerTests.js',
          'tests/parserTestsFirstMilestone.js',
          'tests/parserTestsSecondMilestone.js',
          'tests/parserTestsThirdMilestone.js'
        ]
      }

    },

    jshint: {
      files: [
        'transpiler/**/*'
      ],
      options: {
        force: false,
        jshintrc: '.jshintrc',
        ignores: [
        ]
      }
    },

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-browserify');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('test', [
    // 'jshint',
    'mochaTest:test'
  ]);

  grunt.registerTask('testLexer', [
    // 'jshint',
    'mochaTest:lexer'
  ]);

  grunt.registerTask('testParser', [
    // 'jshint',
    'mochaTest:parser'
  ]);

  grunt.registerTask('build', [
    'browserify',
    'test'
  ]);

};
