var config = {

  rethink: {
    server: 'http://193.136.93.35:8080/'
  },

  iceServersConfig: {
    iceServers: [{
      url: 'stun:stun.l.google.com:19302'
    }, {
      url: 'turn:luis@185.17.229.117',
      credential: 'luis123'
    }
  ]},

  RTPDataChannelsConfig: {
    optional: [{
      RtpDataChannels: true
    }]
  },

  mediaConstraints: {
    optional: [],
    mandatory: {
      OfferToReceiveAudio: true, // Hmm!!
      OfferToReceiveVideo: true // Hmm!!
    }
  },

  defaultMedia: {
    video: true,
    audio: true
  }

};

(function() {

  var all;
  if (typeof self !== 'undefined') {
    all = self; // Web Worker
  } else if (typeof window !== 'undefined') {
    all = window; // Browser
  } else if (typeof global !== 'undefined') {
    all = global; // NodeJS
  }

  all.config = config;

  if (typeof module !== 'undefined') {
    module.exports = config;
  }
})();
