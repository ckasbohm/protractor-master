var HtmlReporter = require('protractor-html-screenshot-reporter');
var path = require('path');


exports.config = {
  seleniumServerJar: 'C:\Users\ckasbohm\Desktop\SeleniumRC\selenium-server-standalone-2.39.0.jar',
  //seleniumPort: null,
  //chromeDriver: 'C:\Users\ckasbohm\Desktop\SeleniumRC\chromedriver.exe',
  //seleniumArgs: [],

  // sauceUser: 'ckasbohm',
  // sauceKey: '369d6989-0b2d-4bca-9103-b0585e1ccfc9',
  
  //seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',
  specs: [
    
	'DEV-DailyTicket.js'
  ],

  capabilities: { 
  'browserName' : 'IE',
  'browserstack.user' : 'annika2',
  'browserstack.key' : 'f2uAxezsEaBKRvJPNFyS',
  'os' : 'Windows',
  'os_version' : '7',  
  'browser_version' : '11.0',
  
  
  
  

  },
  
   onPrepare: function() {
      // Add a reporter and store screenshots to `screnshots`:
      jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'screenshots',
         pathBuilder: function pathBuilder(spec, descriptions, results, capabilities) {
          
            var monthMap = {
              "0": "Jan",
              "1": "Feb",
              "2": "Mar",
              "3": "Apr",
              "4": "May",
              "5": "Jun",
              "6": "Jul",
              "7": "Aug",
              "8": "Sep",
              "9": "Oct",
              "10": "Nov",
              "11": "Dec"
            };

            var currentDate = new Date(),
                currentHoursIn24Hour = currentDate.getHours(),
                currentTimeInHours = currentHoursIn24Hour>12? currentHoursIn24Hour-12: currentHoursIn24Hour,
                totalDateString = currentDate.getDate()+'-'+ monthMap[currentDate.getMonth()]+ '-'+(currentDate.getYear()+1900) + 
                                      '-'+ currentTimeInHours+'h-' + currentDate.getMinutes()+'m';

            return path.join(totalDateString,capabilities.caps_.browserName, descriptions.join('-'));
         }
      }));
   },


  rootElement: 'body',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 5000
  }
};
