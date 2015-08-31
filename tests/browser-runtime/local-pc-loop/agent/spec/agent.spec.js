import Agent from '../js/rethink/agent';
import signalingBus from '../js/rethink/mbus/signalingBus';
import signalingServer from '../js/rethink/mbus/signalingServer';

describe('Rethink agent', function() {

  describe('Constructor', function() {

    it('Instanciate new local agent', function() {

      let agent = new Agent(true, true, signalingBus);
      expect(agent.autoAccept).toBe(true);
      expect(agent.isInitiator).toBe(true);

    });

    it('Instanciate new Remote agent', function() {

      let agent = new Agent(true, false, signalingServer);

      expect(agent.autoAccept).toBe(false);
      expect(agent.isInitiator).toBe(true);

    });

  });

});
