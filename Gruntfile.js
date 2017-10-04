module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    "dest/css/skeleton.css": "src/scss/skeleton.scss"
                }
            }
        },
        embed: {
          home: {
            options: {
              threshold: '15KB'
            },
            files: {
              'dest/index.html': 'src/index.html'
            }
          }
        },
        watch: {
            options: {
                livereload: true,
            },
            styles: {
                files: ['src/scss/**/*.scss','src/*.html'], // which files to watch
                tasks: ['sass','embed'],
                options: {
                    nospawn: true
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-embed');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.registerTask('default', ['sass','embed','watch']);
};
