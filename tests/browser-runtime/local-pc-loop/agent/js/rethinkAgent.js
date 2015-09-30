import ObjectEvent from './rethink/utils/objectEvent';
import LocalAgent from './rethink/localAgent';
import ExternalAgents from './rethink/externalAgents';

import signalingBus from './rethink/mbus/signalingBus';

import * as config from './configs/config';

export class RethinkAgent extends ObjectEvent {

  constructor(isInitiator) {

    super();

    var _this = this;

    console.log('create agent local');

    var rethinkIframe = document.getElementById('rethink-iframe');
    _this.rethinkIframe = rethinkIframe;

    var localAgent = new LocalAgent(isInitiator);
    localAgent.addEventListener('remote:stream:added', function(stream) {
      _this.trigger('remote:stream:added', stream);
    });

    _this.localAgent = localAgent;

    // window.addEventListener('message', function(event) {
    //
    //   var message = event.data;
    //
    //   console.log(message);
    //
    //   switch (message.type) {
    //
    //     case 'token:created':
    //       _this.trigger('token:created', message.message);
    //       break;
    //
    //     case 'remote:stream:added':
    //       _this.trigger('remote:stream:added', message.stream);
    //       break;
    //
    //     case 'call:incoming':
    //       _this.trigger('call:incoming', message.data);
    //       break;
    //
    //     case 'local:stream:added':
    //       _this.trigger('local:stream:added', message.stream);
    //       break;
    //
    //   }
    //
    // });

    var externalAgent = new ExternalAgents();

    externalAgent.addEventListener('token:created', function(token) {
      _this.trigger('token:created', token);
    });

    externalAgent.addEventListener('remote:stream:added', function(stream) {
      // console.log('remote stream added: ', stream);
      _this.trigger('remote:stream:added', stream);
    });

    externalAgent.addEventListener('local:stream:added', function(stream) {
      // console.log('local stream added: ', stream);
      _this.trigger('local:stream:added', stream);
    });

    externalAgent.addEventListener('call:incoming', function(data) {
      _this.trigger('call:incoming', data);
    });

    _this.externalAgent = externalAgent;

  }

  getMedia(resources) {

    var _this = this;
    var localAgent = _this.localAgent;
    var requestResources = resources || config.defaultMedia;

    return new Promise(function(resolve, reject) {
      navigator.getUserMedia(requestResources, function(stream) {

        localAgent.addStream(stream);
        localAgent.createOffer();
        resolve(stream);

      }, function(error) {

        reject(error);

      });
    });

  }

  callTo(name, stream) {
    var _this = this;

    // console.log(stream);
    //
    // window.stream = stream;
    // signalingBus.sendStream(stream);
    //
    // _this.rethinkIframe.contentWindow.postMessage({
    //   type: 'callTo',
    //   name: name,
    //   stream: stream2
    // }, 'http://localhost:8080');

    var externalAgent = _this.externalAgent;

    externalAgent.callTo(name, stream);

  }

  accept() {
    var _this = this;

    // _this.rethinkIframe.contentWindow.postMessage({
    //   type: 'accept'
    // }, '*');

    var externalAgent = _this.externalAgent;

    externalAgent.accept();

  }

}

// module.exports = RethinkAgent;
export default RethinkAgent;
window.RethinkAgent = RethinkAgent;
