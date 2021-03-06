module.exports = function (grunt) {
    grunt.initConfig({
        concat: {
            js: {
                src: ['js/*.js'],
                dest: 'dist/bundle.js'
            },
            css: {
                src: ['css/*.css'],
                dest: 'dist/bundle.css'
            }
        },
        htmlmin: {
            options: {
                collapseWhitespace: true,
                preserveLineBreaks: false
            },
            files: {
                src: 'dist/index.html',
                dest: 'dist/index.html'
            }
        },
        uglify: {
            'dist/bundle.min.js': 'dist/bundle.js'
        },
        cssmin: {
            'dist/bundle.min.css': 'dist/bundle.css'
        },
	clean: {
            end: ['dist/bundle.css', 'dist/bundle.js', '.tmp']
        },
        copy: {
            html: {
                src: './index.html',
                dest: './dist/index.html'
            }
        },
        useminPrepare: {
            html: 'index.html',
            options: {
                dest: 'dist'
            }
        },
        usemin: {
            html: ['dist/index.html']
        }
    });
   
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-usemin');
  
    grunt.registerTask('build', ['copy:html','useminPrepare','concat','uglify', 'cssmin','usemin','htmlmin','clean:end']);
};
