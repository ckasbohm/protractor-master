exports.config = {
  //seleniumServerJar: 'test/selenium/selenium.jar',
  seleniumPort: null,
  chromeDriver: 'C:\Users\ckasbohm\Desktop\SeleniumRC\chromedriver_win32\chromedriver.exe',
  seleniumArgs: [],

  sauceUser: null,
  sauceKey: null,

  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',

  specs: [
    '../Protractor/*.js',
  ],

  capabilities: {
    'browserName': 'chrome'
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
