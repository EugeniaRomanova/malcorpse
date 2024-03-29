module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: "compressed"
                },
                files: {
                    "style/style.css": "style/style.scss"
                }
            }
        },
        
        watch: {
            css: {
                files: ['style/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
              }
        }
      });

    
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  
  grunt.registerTask("default",["sass", "watch"]);

};