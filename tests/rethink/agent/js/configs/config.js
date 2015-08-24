var rethink = {
  server: 'http://127.0.0.1:8080'
};

var iceServersConfig = {
  iceServers: [{
    url: 'stun:stun.l.google.com:19302'
  }
]};

var RTPDataChannelsConfig = {
  optional: [{
    RtpDataChannels: true
  }]
};

var mediaConstraints = {
  optional: [],
  mandatory: {
    OfferToReceiveAudio: true, // Hmm!!
    OfferToReceiveVideo: true // Hmm!!
  }
};

var defaultMedia = {
  video: true,
  audio:true
}

module.exports = {
  rethink: rethink,
  defaultMedia: defaultMedia,
  mediaConstraints: mediaConstraints,
  iceServersConfig: iceServersConfig,
  RTPDataChannelsConfig: RTPDataChannelsConfig
}
