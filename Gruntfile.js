module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        name: '<%= pkg.name %>.<%= pkg.version %>',
        jshint: {
            files: ['gruntfile.js', 'src/js/**/*.js', 'test/**/*.js'],
            options: {
                reporterOutput: "",
                jshintrc: true,
                ignores: ['src/js/Chart/flotlib/jquery.flot.navigate.js']
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'watch']);

    grunt.registerTask('default', ['jshint']);
};
