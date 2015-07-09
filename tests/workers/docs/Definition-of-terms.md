*work in progress*


**Device (Runtime) Registration**

Through this registration the Messaging Service should be aware of that a Device is connected to it and there will exist a mechanism to send bi-direcctional asynchronous notificacions. This session is not to create a multimedia/data communication but a way to authenticate both sides and let the messaging server know where to send notifications.

The need to Re-registrer for mobility and/or long sessions reasons should be ruled by policies. 

**Hyperty Instance Registration**



**End User (Tangible Entity) Registration**

Users logging on to a Domain on a particular device, with a particular start date/time... making the end-user reachable for in-coming communication. Such procedure should imply the creation of an Identity in the Runtime. Identities should be handled by Hyperties to make this procedure similar to Hyperty Instance Registration.

The separation of Device and End-user registrations enables Use Cases where Devices may be used by several End-Users eg TV sets or public devices things ...

**Communication Session**

*Note: to be adapted taking into account we may have Communication Session that only uses Messages with no Media Stream eg Adhoc Chat or IoT/M2M*

A single interaction that is defined by exchange of signalling, negotiating parameters for both parties, lasting as long as the media session continues to flow, or until session termination message has been received.

Set of signaling messages and the media or data streams exchanged by peers connected to Messaging services.

Within each "Session" a "HTTP session cookie"-like mechanism could be used to authenticate all the subsequents requests. This would make sessions independent from lower connectivity levels. Risk associated with cookies must be considered: http://resources.infosecinstitute.com/risk-associated-cookies/. An alternative is the usage of Web JSON Tokens:
http://www.toptal.com/web/cookie-free-authentication-with-json-web-tokens-an-example-in-laravel-and-angularjs
