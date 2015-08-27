module.exports = {

  rethink: {
    server: 'http://193.136.93.187:8080/'
  },

  iceServersConfig: {
    iceServers: [{
      url: 'stun:stun.l.google.com:19302'
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
