###Description for slide 7 -> architecture 4

CSP - Communication Service Provider
NSP - Network Service Provider, Network Operator

General:
* WebRTC/ Web Server - Server used by a CSPs. 
    * Runs the code of a communication service (application).
    * Note: not sure about network hyperty here since we want to stay universal

* Broker - provides an easy to use interface for CSPs so they can provide specialized network services but without the need of contacting each NSP.
    * Needs to communicate with underlying NSPs.
    * Needs to provide general specialized network services information, e.g. DSCP markings (look https://tools.ietf.org/html/draft-ietf-tsvwg-rtcweb-qos-04)
    * Needs to provide a token to a given CSP. This token for a certain time, amount of data etc. would provide an access to specialized network services. CSP would provide this token to its users.
    * Provides CSP with a list of preferred TURN servers to use.

* Backend QOS Function (Connector)
    * Manages TURN servers (?)
* TURN server - media relay
    * Use in a path as a way in order to be able to identify and steer the traffic

Mobile:
* PCRF - generates policy for specialized network services.

* PDN Gateway - rules will be applied here according to PCRF

* AF Connector - Provides information to PCRF concerning specialized network services configuration and service information.
 
* TDF - provides filters allowing to detect if a traffic flow is at a destination of a TURN server, so if it can benefit from specialized bearer.


Fix:
* HGW Home Gateway - identifies flows based on their destination address, i.e. specialized TURN servers address and according to that marks them with a DSCP tag.

* QoS for Fixed (Connector) - used to assure appropriate functionality of the home gateway. 

