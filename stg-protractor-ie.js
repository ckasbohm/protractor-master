exports.config = {
  seleniumServerJar: 'C:\Users\ckasbohm\Desktop\SeleniumRC\selenium-server-standalone-2.39.0.jar',
 // seleniumPort: null,
  ieDriver: 'C:\Users\ckasbohm\Desktop\iedriver\IEDriverServer.exe',
 // seleniumArgs: [],

  //sauceUser: null,
 // sauceKey: null,

  seleniumAddress: 'http://127.0.0.1:5555',

  specs: [
    'DEV-DailyTicket.js'
  ],

  capabilities: {
    'browserName': 'internet explorer'

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
