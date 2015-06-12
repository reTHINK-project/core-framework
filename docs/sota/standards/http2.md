#HTTP/2 

## Introduction

HTTP/1.1 has served the Web for more than 15 years, but its age is starting to show. Web application has evolved a lot from the beginning but the protocol which transport it has not evolved at the same pace.

Loading a Web page is more resource intensive than ever because HTTP practically only allows one outstanding request per TCP connection:
* Browsers have used multiple TCP connections to issue parallel requests. This is counter-productive (TCP congestion control is effectively negated leading to congestion events), and unfair (browsers take more network resources).
* At the same time, the large number of requests means a lot of duplicated data “on the wire”.
* These factors mean that HTTP/1.1 requests have a lot of overhead associated with them; the more  requests are made, the worse performance we get.

This problems leaded the industry to consider “Best Practices” things like: spriting, data inlining, domain sharding and concatenation which are just workarounds which improves the user experience.These hacks are indications of underlying problems in the protocol itself, and cause a number of problems on their own when used.
On the other side, the way in which the Web is accessed has also change a lot, mobile devices has become the main point of entry to the web. Characteristics of wireless connections (high latency, jitter and packet loss) may prevent Web applications served with HTTP over TCP from being responsive and even usable.

HTTP/2, which soon will become a definitive RFC, was designed to be adapted to the new conditions of the WWW and its main goal is to improve the user experience. HTTP/2 is an evolution of SPDY, experimental protocol mainly developed by Google which is currenlty being used in production in many Google applications.
To take advantage of HTTP/2 new features a new transport protocol, QUIC, has been designed. Both protocols combined will be extensily used in Internet in the next years. 

## HTTP/2 history and current status

## Main features of HTTP/2

|HTTP/1.1   | HTTP/2  | 
|---|---|
|textual   | binary  |
| ordered and blocking  | fully multiplexed  |
| several connections for parallelism  |  one connection for parallelism |
| only content compression  | header compression  |
|   not proactive push     |     allows servers to “push” responses proactively into client caches      |


## Why using for HTTP/2 in ReTHINK project.
