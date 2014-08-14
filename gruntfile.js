module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.initConfig({
		uglify:{
			my_target: {
				files: {
					'js/script.js' : ['js/uglify_js/*.js']
				} //files
			} //my_target
		}, //uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				} //options
			} //dev
		}, //compass
		cssmin: {
		  add_banner: {
		    options: {
		      banner: '/* My minified css file */'
		    }, //banner
		    files: {
		      'css/required-styles.css': ['css/other_styles/*.css', 'css/other_styles/*.min.css']
		    } //files
		  } //add_banner
		}, //cssmin
		watch: {
			files: ['js/uglify_js/*.js'],
			tasks: ['uglify'],
			sass: {
				files: ['css/sass/*.scss'],
				tasks: ['compass:dev']
			}, //sass
			cssmin: {
				files: ['css/other_styles/*.css', 'css/other_styles/*.min.css'],
				tasks: ['cssmin']
			}
		} //watch
	}) //initConfig
	grunt.registerTask('default', 'watch');
} //exports