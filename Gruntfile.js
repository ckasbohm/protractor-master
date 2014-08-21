module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  
    shell: {
		options: {
			stdout:true
		},
		protractor_install:{
			command:'npm install protractor'
		},
		npm_cacheClean:{
			command:'npm cache clean'
		},		
		npm_install:{
			command:'npm install'
			}
		},
  
    protractor: {
      options: {
        keepAlive: true,
        configFile: "stg-protractor-chrome.js"
      },
      auto: {
        keepAlive: true,
        options: {
          args: {
            seleniumPort: 4444
          }
        }
      }
    }

  });
  
  grunt.registerTask('install',['shell:npm_cacheClean','shell:npm_install','shell:protractor_install']);
  grunt.registerTask('default','protractor:auto');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-shell-spawn');

};