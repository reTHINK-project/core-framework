// polyfill
// import serviceWorker from 'serviceworker-cache-polyfill';
// window.Promise = window.Promise || require('es6-promise').Promise;
/*
function waitUntilInstalled(registration) {
  return new Promise(function(resolve, reject) {
    if (registration.installing) {
      document.querySelector('#service-worker-registration').textContent = 'Installing...';
      registration.installing.addEventListener('statechange', function(e) {
        if (e.target.state == 'installed') {
          document.querySelector('#service-worker-registration').textContent = '✓ Success';
          resolve();
        } else if(e.target.state == 'redundant') {
          document.querySelector('#service-worker-registration').textContent = '✘ Redundent';
          reject();
        }
      });
    } else {
      document.querySelector('#service-worker-registration').textContent = '✓ Already Installed!';
      resolve();
    }
  });
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(waitUntilInstalled)
    .catch(function(error) {
      document.querySelector('#service-worker-registration').textContent = '✘ Error:' + error;
    });
} else {
  document.querySelector('#service-worker-registration').textContent = '✘ Unavailable!';
}
*/

import form from 'js/form';
