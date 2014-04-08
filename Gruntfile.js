module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    recess: {
    dist: {
        options: {
            compile: true,
            compress: true
        },
        files: {
            'assets/css/main.min.css': ['assets/less/main.less']
        }
    }
}
  });

  // Load the plugin
  grunt.loadNpmTasks('grunt-recess');

  // Default task(s).
  grunt.registerTask('default', ['recess']);

};