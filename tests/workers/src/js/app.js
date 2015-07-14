// polyfill
// import serviceWorker from 'serviceworker-cache-polyfill';
// window.Promise = window.Promise || require('es6-promise').Promise;

var serviceWorker;

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

  document.querySelector('#service-worker-registration').textContent = '✓ Is available but not active';

  // TODO: activate service worker instalation

  /* navigator.serviceWorker.register('/sw.js', {scope: '/'})
    .then(waitUntilInstalled)
    .catch(function(error) {
      document.querySelector('#service-worker-registration').textContent = '✘ Error:' + error;
  }); */

  /* document.querySelector('#service-worker-registration').textContent = '✓ Is available but not active';
  var activateBtn = document.querySelector('.link-btn');
  var deactivateBtn = document.querySelector('.link-deactivate');

  activateBtn.addEventListener('click', activateServiceWorker);
  deactivateBtn.addEventListener('click', deactivateServiceWorker); */

} else {
  document.querySelector('#service-worker-registration').textContent = '✘ Unavailable!';
}

function deactivateServiceWorker(e) {
  serviceWorker.unregister('/sw.js')
    .then(function() {
      console.log('Successfully uninstalled ServiceWorker');
      delete window.ourServiceWorker;
    }, function(why) {
      console.log('Failed to uninstall'+why);
    });
}

import form from 'js/form';
