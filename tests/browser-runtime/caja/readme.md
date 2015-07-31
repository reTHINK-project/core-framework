### Caja - Client side tests

is important have the browser console opened to see the output;

I try to call inside a cajoule and:
 * WebRTC - not allowed;
 * Object.observe - not allowed (https://github.com/google/caja/issues/1934) - ```TypeError {message: "Object.observe is not a function"}```
 * navigator.geoLocation - not allowed (https://github.com/google/caja/issues/1813)
 * send an alert() and console.log  - it's possible but need some extra code, see: index.html
 * I add and addEventListener to an button and it throw me an error(Untaming of guest constructed objects unsupported: [domado object HTMLButtonElement BUTTON], you can test by click on button 'click me');

But we can:
 * handle with some dom elements inside the guest.html
 * createElements dynamically (but with some console warning);

For debug is complicated because we can't know where error is.
(https://github.com/google/caja/issues/1832) don't have any response, yet;
