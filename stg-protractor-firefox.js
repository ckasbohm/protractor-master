exports.config = {
  seleniumServerJar: 'C:\Users\ckasbohm\Desktop\SeleniumRC\selenium-server-standalone-2.39.0.jar',
 // seleniumPort: null,
  firefoxDriver: 'C:\Program Files (x86)\Mozilla Firefox\firefox.exe',
 // seleniumArgs: [],

  //sauceUser: null,
 // sauceKey: null,

  seleniumAddress: 'http://127.0.0.1:4445/wd/hub',

  specs: [
    'DEV-DailyTicket.js'
  ],

  capabilities: {
    'browserName': 'firefox'
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
