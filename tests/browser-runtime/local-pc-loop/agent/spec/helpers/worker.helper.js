export class Helper {

  constructor() {

  }

  getWorker(path) {
    var http = new XMLHttpRequest();
    http.open('GET', path, false);
    http.send();

    return http.responseText;
  }

  workerTester(workerCode) {

    // Define onmessage from the worker
    eval(workerCode);

    return new Promise(function(resolve, reject){
      
    });

    // The worker will call this method with the post-back data
    function postMessage(data) {
      deferred.resolve(data);
    }

    var thenAssertOn = function(assertion) {
      deferred.then(function(data) {
        assertion(data);
      });
    };

    var sendMessage = function(data) {
      // Call into the worker code
      onmessage({data: data});

      return {thenAssertOn: thenAssertOn};
    };

    return {sendMessage: sendMessage};
  }

}

export default new Helper();
