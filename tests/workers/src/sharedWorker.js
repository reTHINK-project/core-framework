var connections = [];

self.addEventListener("connect", function (e) {

    var port = e.ports[0];
    connections.push(port);

    port.addEventListener("message", function (e) {

      connections.forEach(function(conn) {
        conn.postMessage(e.data);
        console.log("Worker with ", e.data , " (On port #", conn, ")");
      });

    }, false);

    port.start();

}, false);
