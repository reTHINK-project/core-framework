var config = require('./config.json');

(function() {

  var all;
  if (typeof self !== 'undefined') {
    all = self; // Web Worker
  } else if (typeof window !== 'undefined') {
    all = window; // Browser
  } else if (typeof global !== 'undefined') {
    all = global; // Node.js
  }

  all.config = config;

  if (typeof module !== 'undefined') {
    module.exports = config;
  }
})();
