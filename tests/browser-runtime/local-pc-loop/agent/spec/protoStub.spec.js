import helper from './helpers/worker.helper';

describe('Hyperty with Protocol Stub', function() {

  var workerCode = helper.getWorker('js/rethink/workers/protoStub.js');

  describe('Recive message through "postMessage" and handle it', function() {

    helper.workerTester(workerCode)
    .sendMessage([{foo: 1}, {foo: 2}, {foo: 3}])

    .thenAssertOn(function(sum) {
      expect(sum).toBe(6);
    });

    beforeEach(function() {

      spyOn(self, 'handleWithMessage');

    });

    it('should be "handleWithMessage" function defined', function() {
      expect(self.handleWithMessage).toBeDefined();
    });

    it('tracks that the spy was called', function() {
      self.handleWithMessage();
      expect(self.handleWithMessage).toHaveBeenCalled();
    });

    it('should be an object', function() {
      self.handleWithMessage({type: 'candidate'});
      expect(self.handleWithMessage).toEqual(jasmine.any(Object));
    });

    it('shouldn\'t be null', function() {
      self.handleWithMessage({type: 'candidate'});
      expect(self.handleWithMessage).not.toBe(null);
    });

    it('should be an ice candidate', function() {

      let data = {
        type: 'candidate',
        candidate: '',
        sdpMid: 'video',
        sdpMLineIndex: 0
      };

      self.handleWithMessage(data);
      expect(resultMessage).toEqual(jasmine.any(Object));
      expect(resultMessage.candidate).toEqual(jasmine.any(String));
      expect(resultMessage).toEqual(jasmine.objectContaining({type: 'candidate'}));

    });

    it('should be an sdp', function() {

      let data = {
        sdp: 'sdp string',
        type: 'offer'
      };

      // self.handleWithMessage(data);
      expect(resultMessage).toEqual(jasmine.any(Object));
      expect(resultMessage.sdp).toEqual(jasmine.any(String));
      expect(resultMessage).toEqual(jasmine.objectContaining({type: 'offer'}));
    });

  });

  describe('Send message to server and wait for response', function() {

    it('should send message', function() {

    });

  });

});
