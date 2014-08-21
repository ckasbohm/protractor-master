var webdriverjs = require('webdriverjs');

var client = webdriverjs.remote({
    host: 'localhost',
    port: 4444
});

client.init();

client.url('https://stg-store.accesso.com/CF-KBF')
  .getTitle(function(err, title) { console.log (title)}).call(function () {});

client.end();