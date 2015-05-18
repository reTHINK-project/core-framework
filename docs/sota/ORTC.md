

ORTC is an alternative to the current WebRTC API 1.0 to write WebRTC Applications to be executed in Web browser. 

The protocols on the wire are exactly the same so it is compatible with aaplications written using the current API.  

Those are the main differences from WebRTC 1.0:
- ORTC specifically tailored to provide the direct control needed to enable advanced multimedia and conferencing features.
- Limitations of the WebRTC API 1.0 have been addressed in the new version.
- many of the parameters which are automatically handled by the browser in WebRTC 1.0 can be now modified by using native methods.
- SDP is not the mandatory format to exchange information between browsers. 

SDP is not mandatory but WebRTC 1.0 applications would make it compatible thanks to Javasrcipts shims. 
All the use cases that ORTC would enable are already possible but they are more complex to implement as they require
manual SDP manipulations which are error-prone and may require several Offer/Answer SDP exchanges to update the multimedia sessions.


Some elements described in ORTC have been added to WebRTC 1.0 as they provide the ability to modify low level paramaters.
Namely

ORTC is the WebRTC API which Microsoft will implement in Internet Explorer and Skype will be supported in the Web Browser supporting ORTC
along as other browsers which supports WebRTC 1.0.
