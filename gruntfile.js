module.exports = function(grunt) {

  grunt.initConfig({
    ts: {
      default : {
        src: ['**/*.ts', '!node_modules/**'],
        options: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true
        }
      }
    },
    less: { // Set up to detect files dynamically versus statically
      mini: {
        options: {
          cleancss: true, // minify
            report: 'min' // minification results
        },
        expand: true, // set to true to enable options following options:
        cwd: 'app', // all sources relative to this path
        src: ['**/*.less', '!less-library/*'], // source folder patterns to match, relative to cwd
        dest: 'app', // dest folder patterns to match, relative to cwd
        ext: '.css', // replace any existing extension with this value in dest folder
        flatten: false  // flatten folder structure to single level
      }
    },
    watch: {
      ts: {
        files: ['**/*.ts', '!node_modules/**'],
        tasks: ['ts']
      },
      less: {
        files: ['**/*.less', '!node_modules/**'],
        tasks: ['less']
      }
    }
  });

  grunt.loadNpmTasks('grunt-ts');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['ts', 'less']);

};