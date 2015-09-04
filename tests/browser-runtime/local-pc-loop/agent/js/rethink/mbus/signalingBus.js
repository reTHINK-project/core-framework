import ObjectEvent from './../utils/objectEvent';
import utils from './../utils/utils';

export class SignalingBus extends ObjectEvent {

  /**
   * Internal SignalingBus
   * @method constructor
   * @return {[type]}
   */
  constructor() {

    super();

    var _this = this;

    var rethinkIframe = document.getElementById('rethink-iframe');
    _this.rethinkIframe = rethinkIframe;

    _this.setDomain();

    window.addEventListener('message', function(event) {

      var message = event;

      console.log(message);

      switch (message.type) {

        case 'offer':
        case 'answer':
        case 'message':
          _this.trigger('message', message);
          break;

      }

      console.log('signalinb bus: ', _this);

      /* if (message.hasOwnProperty('sdp')) {
        _this.trigger('sdpMessage', e.data);
      } else {
        _this.trigger('iceMessage', e.data);
      } */
    });

  }

  setDomain() {

    var _this = this;

    if (_this.rethinkIframe) {
      var url = _this.rethinkIframe.src;
      var iframeLocation = utils.parseURL(url);
      _this.secureDomain = iframeLocation.protocol + '//' + iframeLocation.hostname + ':' + iframeLocation.port;
    }

    // var referrer = document.referrer;
    var domain = '*';
    if ('referrer' in document) { domain = document.referrer; }

    _this.externalDomain = domain;

  }

  postMessage(data) {
    var _this = this;
    var domain;

    if (_this.rethinkIframe) {
      domain = _this.secureDomain;
      _this.rethinkIframe.contentWindow.postMessage(data, domain);
    } else {
      domain = _this.externalDomain;
      window.parent.postMessage(data, domain);
    }

  }

  sendStream(stream) {
    var _this = this;

    console.info(stream);

    _this.trigger('send:stream', stream);
  }

}

export default new SignalingBus();
