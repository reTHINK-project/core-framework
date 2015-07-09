### Content Security Policy Level 2

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware.

Defines a policy language used to declare a set of content restrictions for a web resource, and a mechanism for transmitting the policy from a server to a client where the policy is enforced. 

CSP provides a standard HTTP header that allows website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

The following header names are in use as part of an experimental CSP implementations:

Content-Security-Policy — standard header name proposed by the W3C document. Google Chrome supports this as of version 25. Firefox supports this as of version 23, released on 6 August 2013.
X-WebKit-CSP — experimental header introduced into Google Chrome and other WebKit-based browsers (Safari) in 2011.
X-Content-Security-Policy — experimental header introduced in Gecko 2 based browsers (Firefox 4 to Firefox 22, Thunderbird 3.3, SeaMonkey 2.1).
Support for the sandbox directive is also available in Internet Explorer 10 and Internet Explorer 11 using the experimental X-Content-Security-Policy header.

There's initial support for CSP in some web frameworks such as AngularJS and Django.

Example:
```script-src 'self'; object-src 'none'```

Security policies contain a set of security policy directives (script-src and object-src in the example above), each responsible for declaring the restrictions for a particular resource type, or manipulating a specific aspect of the policy’s restrictions. 

The server delivers a policy to the user agent via an HTTP response header or an HTML meta element.
The Content-Security-Policy header field is the preferred mechanism for delivering a policy. The grammar is as follows:

```"Content-Security-Policy:" 1#policy-token```

For example, a response might include the following header field:
```Content-Security-Policy: script-src 'self'```

A Content Security Policy consists of a U+003B SEMICOLON (;) delimited list of directives. 


#### Applicability in reTHINK 

In a preliminary analysis CSP seems too limited to be applied for the runtime policy engine but it may be useful to improve security in the protOfly engine.

#### References

* http://www.w3.org/TR/CSP2/
* https://developer.mozilla.org/en-US/docs/Web/Security/CSP/Introducing_Content_Security_Policy
* http://en.wikipedia.org/wiki/Content_Security_Policy

