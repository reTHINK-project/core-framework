onconnect = function(e) {
    var port = e.ports[0];

    port.onmessage = function(e) {

      console.log("shared worker connected:", e);

      port.postMessage(e.data);
    };

    port.start();
};
