
#### ServiceWorker - postMessage test
This is a minimum example to test the exchange of messages between a service worker and a html page in both directions. It it just about posting and receiving messages, not about any kind of caching.

The service worker script simply increases a counter, every time it receives a message and sends the counter and message back to the active clients. 

Tested with Chrome 43 and FF 40

##### How to test?
The two files under public_html have no external dependencies.
 * place/link them under the document-root of a webserver and open index.html in browser
 * on the very first load the service worker is installed
 * you will be asked to reload the page to make the service worker the active controller for this page
 * you should see "service worker registered successfully"
 * enter a message in the input field and press "Post message"
 * you should see the message, prefixed by the counter, echoed back from the service worker
