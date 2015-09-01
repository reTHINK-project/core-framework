###Description for slide 7 -> architecture 4

CSP - Communication Service Provider
NSP - Network Service Provider, Network Operator

* WebRTC/ Web Server - Server used by a CSPs. It runs the code of a communication service (application).
    * Note: not sure about network hyperty here since we want to stay universal
    
* Broker - provides an easy to use interface for CSPs so they can provide specialized network services but without the need of contacting each NSP.
    * Needs to communicate with underlying NSPs.
    * Needs to provide general specialized network services information, e.g. DSCP markings (look https://tools.ietf.org/html/draft-ietf-tsvwg-rtcweb-qos-04)
    * Needs to provide a token to a given CSP. This token for a certain time, amount of data etc. would provide an access to specialized network services. CSP would provide this token to its users.
    
    
