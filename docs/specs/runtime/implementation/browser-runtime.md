#### Browser Runtime Implementation

<!--
@startuml "Runtime_Browser_Implementation.png"

title Packages - Component Diagram

node "WebRTC Device" {
  [Device WebRTC API] as WebRTCDevice
}

node "Auth" {
  [Auth Server] as Auth
}

node "Message Node" {
  [Message Node] as MNode
}

rectangle "host | app.domain" {

    component [video] as GUIVideo
    component [app.js] as App
    
    component [WebRTC User Agent] as PeerLocal
    component [WebRTC API] as WebRTCApiLocal

    rectangle rething.js {
  
        component [API Stub] as APIStub

        rectangle "iframe | reThink.domain" {
        
            component [ReThink WebRTC] as PeerRemote
            component [WebRTC API] as WebRTCApiRemote
            
            component [Service Worker] as ServiceWorker
            note bottom
                Cache all
                application
                files
            endnote
            
            component [RunTime\nUser Agent] as Agent
            note bottom
                Install all
                components
                needed, after
                auth
            endnote

            node "Web Worker\nHyperty 1" as W1 {
              [ProtoStub] as PS
            }
        
            node "Web Worker\nHyperty 2" as W2 {
              component [API Skeleton] as APIS2
              [hyperty 1] as H1
            }
        
            node "Web Worker\nHyperty 3" as W3 {
              component [Service Provider2\nPolicy Enforcer]
            }

            node "Core Sandbox" as Core {
            
                component [Registry] as Registry
                component [Identities\nContainer] as IContainer
                component [Msg BUS\nPEP] as Policy
                component [Policy Decision (PDP)\n(incl Authorisation)\n+Policies Repository )] as PDP
                
            
                rectangle "Message Bus Events" as MsgBusEvent {
                    component [* Message BUS *] as MsgBus
                    component [* Message BUS (crud) *] as MsgBusCrud
                }
            }

        }
    }
}

Auth <-[hidden]down-> WebRTCDevice
WebRTCApiRemote <-[hidden]down-> Core


App -down-> APIStub
APIStub -down-> MsgBus

GUIVideo -left-> PeerLocal
PeerLocal <-left-> WebRTCApiLocal
PeerLocal <-down-> PeerRemote : Peer Connection
PeerRemote <-right-> WebRTCApiRemote
PeerRemote <-down-> MsgBus
WebRTCApiRemote <-right-> WebRTCDevice : WebRTC API\nConnection with\nexternal device

Registry -down-> MsgBusEvent
IContainer -left- Registry

MsgBus <-> Policy
MsgBusCrud <-> Policy
PDP -left-> Policy

Policy <-right-> W1 : only postMessage\nare allowed
Policy <-right-> W2 : only postMessage\nare allowed
Policy <-down-> W3 : only postMessage\nare allowed


MsgBusCrud <-right-> MNode : Send CRUD Messages\nto message node
Agent <-right-> Auth

@enduml
-->
* A Service Worker is used to manage the cache of Runtime Core Components
* Hyperties and Protocol Stubs are implemented inside Web Workers 
* Runtime Core components, Hyperties and Protocol Stub are executed inside an iFrame loaded from reTHINK runtime provider domain
* Web Workers are only able to interact each other with self.postMessage(..) which is caught by
    window.addEventListener('message', handleSizingResponse, false); 
implemented by the Runtime MsgBUS Core Component
* The same Service Worker may also be used to manage the cache of Hyperties and protostubs
* Since it is not possible to use webrtc APIs inside a web worker, there will be a "reTHINK WebRTC" component inside the iFrame but outside the web worker, that is in charge of interacting with the WebRTC API on behalf of Hyperties running inside Web Workers, through messages exchanged between Hyperties and the "reTHINK WebRTC". There will be a "Hyperty WebRTC Proxy" that will expose standard WebRTC APIs to be used by the Hyperty. In this way the Hyperty is not aware that it is not interacting directly with the native WebRTC API. It should be analysed whether communication between "reTHINK WebRTC" and "Hyperty WebRTC Agent" will be supported by the Message BUS or by something else.
* Since it is not possible to pass WebRTC Media and Data Streams handled inside the iFrame towards the Application that is outside the iFrame, a local loop peerconnection is established between the "reTHINK WebRTC" and an "App WebRTC Agent" running on Application side. See more details below.
* In addition, the Hyperty API to be consumed by the Application can't be directly used by the App since it is inside a Web Worker. There will a kind of RPC communication through messages exchanged between the HypertyAPIStub component running on the App side and an API Skeleton running on Hyperty side. It should be analysed whether communication between these components will be supported by the Message BUS or by something else.


![](Runtime_Browser_Implementation.png)

## Runtime Architecture with IFrame

After some investigation we find away to send stream from app client to iframe with our domain.
We use peer connection to send media stream.

#### how it works
The peer getUserMedia from app client and make a call to peer inside the rethink iframe, and this answer with null stream (we send stream one way), after this, peer can send the stream through peer connection to another client.

We need to do an experimentation code to make an complete validation for  this architecture. 
