export class Helper {

  constructor() {

  }

  getWorker(path) {
    var http = new XMLHttpRequest();

    // progress on transfers from the server to the client (downloads)
    function updateProgress(oEvent) {
      console.log('progress:', oEvent);
    }

    function transferComplete(evt) {
      console.log('The transfer is complete.');
    }

    function transferFailed(evt) {
      console.log('An error occurred while transferring the file.');
    }

    function transferCanceled(evt) {
      console.log('The transfer has been canceled by the user.');
    }

    http.addEventListener('progress', updateProgress, false);
    http.addEventListener('load', transferComplete, false);
    http.addEventListener('error', transferFailed, false);
    http.addEventListener('abort', transferCanceled, false);

    http.open('GET', path);
    http.send();
    console.log('path:', path);
    return http.responseText;
  }

  workerTester(workerCode) {

    console.log(workerCode);

    var promise = Promise;

    // The worker will call this method with the post-back data
    function postMessage(data) {
      promise.resolve(data);
    }

    var thenAssertOn = function(assertion) {
      promise.then(function(data) {
        assertion(data);
      });
    };

    var sendMessage = function(data) {
      onmessage(data);
      return {thenAssertOn: thenAssertOn};
    };

    return {sendMessage: sendMessage};

    // var deferred = $.Deferred();
    //
    // // Define onmessage from the worker
    // eval(workerCode);
    //
    // // The worker will call this method with the post-back data
    // function postMessage(data) {
    //   deferred.resolve(data);
    // }
    //
    // var thenAssertOn = function(assertion) {
    //   deferred.promise().then(function(data) {
    //     assertion(data);
    //   });
    // };
    //
    // var sendMessage = function(data) {
    //   // Call into the worker code
    //   onmessage({data: data});
    //
    //   return {thenAssertOn: thenAssertOn};
    // };
    //
    // return {sendMessage: sendMessage};
  }

}

export default new Helper();
