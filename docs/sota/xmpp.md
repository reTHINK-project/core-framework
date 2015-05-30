
## XMPP Evaluation


From http://xmpp.org/:

> The Extensible Messaging and Presence Protocol (XMPP) is an open technology for real-time communication, which powers a wide range of applications including instant messaging, presence, multi-party chat, voice and video calls, collaboration, lightweight middleware, content syndication, and generalized routing of XML data. 



### Overview

In the scope of the reTHINK project XMPP is a candidate technology for the Messaging Node.


##### Highlights:

* **Open** - the XMPP protocols are free, open, public, and easily understandable; in addition, multiple implementations exist in the form clients, servers, server components, and code libraries.

* **Standard** - the Internet Engineering Task Force (IETF) has formalized the core XML streaming protocols as an approved instant messaging and presence technology. The XMPP specifications were published as RFC 3920 and RFC 3921 in 2004, and the XMPP Standards Foundation continues to publish many XMPP Extension Protocols. In 2011 the core RFCs were revised, resulting in the most up-to-date specifications (RFC 6120, RFC 6121, and RFC 6122).

* **Proven** - the first Jabber/XMPP technologies were developed by Jeremie Miller in 1998 and are now quite stable; hundreds of developers are working on these technologies, there are tens of thousands of XMPP servers running on the Internet today, and millions of people use XMPP for instant messaging through public services such as Google Talk and XMPP deployments at organizations worldwide.

* **Decentralized** - the architecture of the XMPP network is similar to email; as a result, anyone can run their own XMPP server, enabling individuals and organizations to take control of their communications experience.

* **Secure** - any XMPP server may be isolated from the public network (e.g., on a company intranet) and robust security using SASL and TLS has been built into the core XMPP specifications. In addition, the XMPP developer community is actively working on end-to-end encryption to raise the security bar even further.

* **Extensible** - using the power of XML, anyone can build custom functionality on top of the core protocols; to maintain interoperability, common extensions are published in the XEP series, but such publication is not required and organizations can maintain their own private extensions if so desired.

* **Flexible** - XMPP applications beyond IM include network management, content syndication, collaboration tools, file sharing, gaming, remote systems monitoring, web services, lightweight middleware, cloud computing, and much more.

* **Diverse** - a wide range of companies and open-source projects use XMPP to build and deploy real-time applications and services; you will never get “locked in” when you use XMPP technologies.

### Architecture

![image](....png)

### APIs, Bindings and Extensions

#### APIs

| Name                      | Language(s)                        | Details                                                                 |
|---------------------------|------------------------------------|-------------------------------------------------------------------------|
| agsXMPPSDK                | C#/.NET/Mono                       | [Link](http://www.ag-software.net/agsxmpp-sdk/)                         |
| AnyEvent::XMPP            | Perl                               | [Link](http://www.ta-sa.org/projects/net_xmpp2.html)                    |
| as3xmpp                   | Flash/ActionScript                 | [Link](http://code.google.com/p/seesmic-as3-xmpp/)                      |
| asmack                    | Java(Android)                      | [Link](https://github.com/flowdalic/asmack)                             |
| AXMPP                     | Ada                                | [Link](http://forge.ada-ru.org/axmpp)                                   |
| Babbler                   | Java                               | [Link](http://babbler-xmpp.blogspot.de/)                                |
| Babylon                   | Ruby                               | [Link](https://github.com/bryanwoods/babylon)                           |
| Blather                   | Ruby                               | [Link](http://adhearsion.com/blather)                                   |
| cl-xmpp                   | Lisp                               | [Link](http://common-lisp.net/project/cl-xmpp/)                         |
| CoversantSoapBoxSDKStudio | C#/.NET/Mono/C                     | [Link](http://www.coversant.com/products/soapbox-sdk)                   |
| dojox.xmpp                | JavaScript                         | [Link](http://api.dojotoolkit.org/jsdoc/1.3/dojox.xmpp)                 |
| dxmpp                     | C                                  | [Link](http://deusexmachinae.se/dxmpp)                                  |
| EchomineFeridian          | Java                               | [Link](http://freecode.com/projects/feridian)                           |
| Eiffel                    | PHP                                | [Link](https://github.com/jocelyn/bricabrac/wiki/Eiffel-XMPP)           |
| emite                     | Java                               | [Link](https://github.com/EmiteGWT)                                     |
| exmpp                     | Erlang                             | [Link](http://exmpp.org/)                                               |
| frabjous                  | JavaScript                         | [Link](https://github.com/theozaurus/frabjous)                          |
| gloox                     | C                                  | [Link](http://camaya.net/gloox)                                         |
| goexmpp                   | Go                                 | [Link](http://code.google.com/p/goexmpp/)                               |
| headstock                 | Python                             | [Link](https://github.com/Lawouach/headstock)                           |
| hsxmpp                    | Haskell                            | [Link](http://חנוך.se/hsxmpp/)                                          |
| hxmpp                     | haXe                               | [Link](http://hxmpp.disktree.net/)                                      |
| iksemel                   | C                                  | [Link](http://code.google.com/p/iksemel/)                               |
| IP*WorksInternetToolkit   | ActiveX C C# .NET Mono Delphi Java | [Link](http://www.nsoftware.com/ipworks/)                               |
| Iris                      | C                                  | [Link](http://delta.affinix.com/iris/)                                  |
| jabber-net                | C#/.NET/Mono                       | [Link](http://code.google.com/p/jabber-net/)                            |
| jabber.py                 | Python                             | [Link](http://jabberpy.sourceforge.net/)                                |
| JabberLib                 | Tcl                                | [Link](http://coccinella.im/jabberlib)                                  |
| JabberStreamObjects(JSO)  | Java                               | [Link](http://java.net/projects/jso/)                                   |
| JAXL                      | PHP                                | [Link](http://code.google.com/p/jaxl/)                                  |
| jQuery-XMPP-plugin        | JavaScript                         | [Link](http://github.com/maxpowel/jQuery-XMPP-plugin)                   |
| Jreen                     | C/Qt                               | [Link](http://qutim.org/jreen)                                          |
| JSJaC                     | JavaScript                         | [Link](http://blog.jwchat.org/jsjac/)                                   |
| libstrophe                | C                                  | [Link](http://strophe.im/)                                              |
| Lightr                    | PHP                                | [Link](http://code.google.com/p/lightr/)                                |
| Loudmouth                 | C                                  | [Link](http://groups.google.com/group/loudmouth-dev)                    |
| Loudmouth                 | Ruby                               | [Link](http://groups.google.com/group/loudmouth-dev/web/loudmouth-ruby) |
| MatriX                    | C#/.NET/Mono                       | [Link](http://www.ag-software.net/matrix-xmpp-sdk/)                     |
| Net::XMPP                 | Perl                               | [Link](http://search.cpan.org/dist/Net-XMPP/)                           |
| node-xmpp                 | JavaScript                         | [Link](http://github.com/astro/node-xmpp)                               |
| oajabber                  | C                                  | [Link](http://www.openaether.org/oajabber.html)                         |
| PontariusXMPP             | Haskell                            | [Link](https://github.com/pontarius/pontarius-xmpp/)                    |
| pyxmpp                    | Python                             | [Link](http://pyxmpp.jajcus.net/)                                       |
| QXmpp                     | C                                  | [Link](http://code.google.com/p/qxmpp/)                                 |
| seesmic-as3-xmpp          | Flash/ActionScript                 | [Link](http://code.google.com/p/seesmic-as3-xmpp/)                      |
| SleekXMPP                 | Python                             | [Link](http://github.com/fritzy/SleekXMPP/wiki)                         |
| Smack                     | Java                               | [Link](http://igniterealtime.org/projects/smack/)                       |
| stanza.io                 | JavaScript                         | [Link](https://github.com/legastero/stanza.io)                          |
| strophe.js                | JavaScript                         | [Link](http://strophe.im/)                                              |
| StropheCappuccino         | Objective-J                        | [Link](http://github.com/primalmotion/strophecappuccino)                |
| Swiften                   | C                                  | [Link](http://swift.im/swiften/)                                        |
| Tinder                    | Java                               | [Link](http://igniterealtime.org/projects/tinder/)                      |
| txmpp                     | C                                  | [Link](http://github.com/silas/txmpp)                                   |
| TwistedWords              | Python                             | [Link](http://twistedmatrix.com/trac/)                                  |
| Ubeity                    | C#                                 | [Link](https://github.com/ubiety/xmpp)                                  |
| Verse                     | Lua                                | [Link](http://matthewwild.co.uk/projects/verse/home)                    |
| XIFF                      | Flash/ActionScript                 | [Link](http://igniterealtime.org/projects/xiff/)                        |
| xmpp-psn                  | Python                             | [Link](http://code.google.com/p/xmpp-psn/)                              |
| jaxmpp2                   | Java/Android/GoogleWebToolkit      | [Link](https://projects.tigase.org/projects/jaxmpp2)                    |
| xmpp4js                   | JavaScript                         | [Link](http://xmpp4js.sourceforge.net/)                                 |
| XMPP4R                    | Ruby                               | [Link](http://home.gna.org/xmpp4r/)                                     |
| xmpp4r-simple             | Ruby                               | [Link](http://code.google.com/p/xmpp4r-simple/)                         |
| xmppframework             | ObjectiveC                         | [Link](https://github.com/robbiehanson/XMPPFramework)                   |
| xmpphp                    | PHP                                | [Link](http://code.google.com/p/xmpphp/)                                |
| xmppy                     | Python                             | [Link](http://xmpppy.sourceforge.net/)                                  |
| XMPP-FTW                  | JavaScript                         | [Link](https://github.com/lloydwatkin/xmpp-ftw)                         |
| Z-XMPP                    | JavaScript                         | [Link](http://ivan.vucica.net/zxmpp/)                                   |


#### Relevant Extensions

* [XEP-0166: Jingle](http://xmpp.org/extensions/xep-0166.html) Protocol extension for initiating and managing peer-to-peer media sessions  (e.g., voice chat, video chat, file transfer) with a wide variety of transport methods (e.g., TCP, UDP, ICE, application-specific transports)


* [XEP-0343: Signaling WebRTC datachannels in Jingle](http://xmpp.org/extensions/xep-0343.html) Defines how to use the ICE-UDP Jingle transport method to send media data using WebRTC DataChannels.

* [XEP-0060: Publish-Subscribe](http://www.xmpp.org/extensions/xep-0060.html) Protocol extension for generic publish-subscribe functionality

* [XEP-0045: Multi-User Chat](http://xmpp.org/extensions/xep-0045.html) Protocol extension for multi-user text chat.

* [XEP-0072: SOAP Over XMPP](http://www.xmpp.org/extensions/xep-0072.html) Defines methods for transporting SOAP messages over XMPP

* [XEP-0124: Bidirectional-streams Over Synchronous HTTP (BOSH)](http://xmpp.org/extensions/xep-0124.html) bidirectional TCP connection between two entities (such as a client and a server) by efficiently using multiple synchronous HTTP request/response pairs.

* [XMPP over WebSocket](http://tools.ietf.org/html/rfc7395) Binding for the XMPP protocol over a
   WebSocket transport layer. It provides  higher performance than the current HTTP binding for XMPP.


* [XEP-0030: Service Discovery](http://xmpp.org/extensions/xep-0030.html) Protocol extension for discovering information about other XMPP entities.

### Requirements Analysis

Analysis against **Messaging Node** Requirements

* [It should be possible to support Protocol on-the-fly](https://github.com/reTHINK-project/core-framework/issues/21)
  ...

* [Messaging Transport Protocols](https://github.com/reTHINK-project/core-framework/issues/20)
  ...
   
* [Message Caching](https://github.com/reTHINK-project/core-framework/issues/19)
  ...

* [Message Node logging](https://github.com/reTHINK-project/core-framework/issues/18)
  ...

* [Message delivery reliability](https://github.com/reTHINK-project/core-framework/issues/17)
  ...

* [Messaging Node deployments with carrier grade scalability](https://github.com/reTHINK-project/core-framework/issues/16)
  ...

* [Messaging Node should be tolerant to unstable connections](https://github.com/reTHINK-project/core-framework/issues/15)
  ...

* [Events about clients connection / disconnection from Messaging Node](https://github.com/reTHINK-project/core-framework/issues/14)
  ...

* [Messaging Node must support very low message delivery latency](https://github.com/reTHINK-project/core-framework/issues/13)
  ...

* [Messaging Node must be deployable in the most used Virtual Machines](https://github.com/reTHINK-project/core-framework/issues/12)
  ...

* [Messaging Node should require minimal computing resources](https://github.com/reTHINK-project/core-framework/issues/11)
  ...

* [Messaging Node must support external authentication and Authorisation](https://github.com/reTHINK-project/core-framework/issues/10)
  ...

* [Messaging Node must support pub/sub](https://github.com/reTHINK-project/core-framework/issues/9)
  ...
