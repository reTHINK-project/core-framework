var count = 0;

self.addEventListener('activate', function (event) {
    console.log("service-worker - activate!");
});

self.addEventListener('message', function (event) {
    console.log("service-worker received message: " + event.data);
    count ++;

    var msg = count + '. ' + event.data;
    if (event.source) {
        console.log("event.source present");
        event.source.postMessage(msg);
    }
    else {
        console.log("No event.source");
        if (event.data.port) {
            event.data.port.postMessage(msg);
        }
    }

    if (self.clients) {
        console.log("Attempting postMessage via clients API");
        clients.matchAll().then(function (clients) {
            for (i = 0; i < clients.length; i++ )
                clients[i].postMessage(msg);
        });
    }

});

self.addEventListener('fetch', function (event) {

    console.log("service-worker onFetch: " + event.request.url);
    var url = decodeURIComponent(event.request.url),
            urlToMatch = 'http://localhost/~steffen/ServiceWorker/public_html/catchme.html',
            responseText = 'request caught by service worker';

    if (url === urlToMatch) {
        count++;
        event.respondWith(new Response(responseText + "  number " + count));
    }

});

