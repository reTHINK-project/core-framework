MessageFactory {#messagefactory data-ice="name"}
==============

<div class="instance-docs" data-ice="instanceDocs">

<span>You can directly use instance of this class.</span> <span
data-ice="instanceDoc"><span>[messageFactory](../../../variable/index.html#static-variable-messageFactory)</span></span>

</div>

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>[RethinkObject](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html)</span>
→ MessageFactory

</div>

</div>

</div>
<div data-ice="constructorSummary">

Constructor Summary
-------------------

Public Constructor <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[constructor](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(validation:
<span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span>,
schema: <span>URL.URL </span>)</span>

</div>

<div>

<div data-ice="description">

Constructor to be used to instantiate an object of the Message Factory

</div>

</div>

</div>

<div data-ice="memberSummary">

Member Summary
--------------

Public Members <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[myGenerator](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-member-myGenerator)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

</div>

<div data-ice="methodSummary">

Method Summary
--------------

Public Methods <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createCreateMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createCreateMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, to-:
<span>URL.URLList</span>, value:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
policy: <span>URL.URL</span>): <span>\*</span></span>

</div>

<div>

<div data-ice="description">

Creates a Message of TYPE CREATE and Create Message Body

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createDeleteMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createDeleteMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, to:
<span>URL.URLList</span>, resource: <span>URL.URl</span>, attribute:
<span>\*</span>): <span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Create Delete Message of Type DELETE and delete message body

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createForwardMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createForwardMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, to-:
<span>URL.URLList</span>, message: <span>\*</span>):
<span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Creates a Message of TYPE FORWARD and Forward Message Body, which
contains the message to be forwarded

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createMessageResponse](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createMessageResponse)</span></span><span
data-ice="signature">(message: <span>\*</span>, code: <span>\*</span>,
value: <span>\*</span>, source: <span>\*</span>): <span>\*</span></span>

</div>

<div>

<div data-ice="description">

Creates the response to the Message

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createReadMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createReadMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, to-:
<span>URL.URLList</span>, resource: <span>URL.URl</span>, attribute:
<span>\*</span>): <span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Creates a Message of type READ

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createSubscribeMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createSubscribeMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, to-:
<span>URL.URLList</span>, resource: <span>URL.URL</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Creates a Message of type SUBSCRIBE

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createUnsubscribeMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createUnsubscribeMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, to-:
<span>URL.URLList</span>, resource: <span>URL.URL</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Creates a Message of type UNSUBSCRIBE

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createUpdateMessageRequest](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-createUpdateMessageRequest)</span></span><span
data-ice="signature">(from: <span>URL.URL</span>, value:
<span>\*</span>, resource: <span>URL.URL</span>, attribute:
<span>\*</span>): <span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Creates an Update Message Request

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[generateMessageResponse](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-generateMessageResponse)</span></span><span
data-ice="signature">(data:
<span>[Message](../../../class/src/message-factory/Message.js~Message.html)</span>,
code: <span>ResponseCode</span>, value:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Generate a response to the given Message Request - Response transactions
A Response to a Request message should follow this rule: Response.from =
Request.to Response.to = Request.from Response.id = Request.id It should
be note, the Request.id MUST be incremented every time a new Request
message is created.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[validate](../../../class/src/message-factory/MessageFactory.js~MessageFactory.html#instance-method-validate)</span></span><span
data-ice="signature">(data: <span>\*</span>): <span>\*</span></span>

</div>

<div>

<div data-ice="description">

Validates the message against the reTHINK Message Data Schema

</div>

</div>

</div>

<div class="inherited-summary" data-ice="inheritedSummary">

Inherited Summary
-----------------

<span class="toggle closed"></span> From class
<span>[RethinkObject](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html)</span>
<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[schema](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html#instance-member-schema)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[validation](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html#instance-member-validation)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[validate](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html#instance-method-validate)</span></span><span
data-ice="signature">(data: <span>\*</span>):
<span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span></span>

</div>

<div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(validation: <span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span>, schema: <span>URL.URL </span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber20)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="description">

Constructor to be used to instantiate an object of the Message Factory

</div>

<div data-ice="override">

#### Override:

<span>[RethinkObject\#constructor](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html#instance-constructor-constructor)</span>

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description validation
<span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span>
schema <span>URL.URL </span> link to the reTHINK Message Data Schema

</div>

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">myGenerator</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber23)</span></span> </span> {#instance-member-myGenerator data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createCreateMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, to-: <span>URL.URLList</span>, value: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, policy: <span>URL.URL</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber44)</span></span> </span> {#instance-method-createCreateMessageRequest data-ice="anchor"}

<div data-ice="description">

Creates a Message of TYPE CREATE and Create Message Body

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

to- <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

value
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Contains the created object in JSON format

policy <span>URL.URL</span> the sender of this message

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------
  <span>\*</span>
  -----------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createDeleteMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, to: <span>URL.URLList</span>, resource: <span>URL.URl</span>, attribute: <span>\*</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber83)</span></span> </span> {#instance-method-createDeleteMessageRequest data-ice="anchor"}

<div data-ice="description">

Create Delete Message of Type DELETE and delete message body

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-2 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

to <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

resource <span>URL.URl</span> URL of Data Object Resource associated
with the message

attribute <span>\*</span> Identifies the attribute in the Object to be
deleted

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | Message - the Delete Message Request |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createForwardMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, to-: <span>URL.URLList</span>, message: <span>\*</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber63)</span></span> </span> {#instance-method-createForwardMessageRequest data-ice="anchor"}

<div data-ice="description">

Creates a Message of TYPE FORWARD and Forward Message Body, which
contains the message to be forwarded

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-3 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

to- <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

message <span>\*</span> {Message.Message} message - the message to be
forwarded

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | Message - the Forward Message        |
|                                      | Request                              |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createMessageResponse</span><span data-ice="signature">(message: <span>\*</span>, code: <span>\*</span>, value: <span>\*</span>, source: <span>\*</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber177)</span></span> </span> {#instance-method-createMessageResponse data-ice="anchor"}

<div data-ice="description">

Creates the response to the Message

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-4 data-ice="title"}

Name Type Attribute Description message <span>\*</span> the message
request from which the response should be generated

code <span>\*</span> the response code compliant with HTTP response
codes (RFC7231).

value <span>\*</span> contains a data value in JSON format. Applicable
to Responses to READ MessageType.

source <span>\*</span> Contains the original creator of the response.
Useful to identify the real source of the response to a one-to-many
message delivery ie multiple responses coming coming from different
sources.

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------
  <span>\*</span>
  -----------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createReadMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, to-: <span>URL.URLList</span>, resource: <span>URL.URl</span>, attribute: <span>\*</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber124)</span></span> </span> {#instance-method-createReadMessageRequest data-ice="anchor"}

<div data-ice="description">

Creates a Message of type READ

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-5 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

to- <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

resource <span>URL.URl</span> URL of Data Object Resource associated
with the message

attribute <span>\*</span> Identifies the attribute in the Object to be
read

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | Message - the Read message request   |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createSubscribeMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, to-: <span>URL.URLList</span>, resource: <span>URL.URL</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber142)</span></span> </span> {#instance-method-createSubscribeMessageRequest data-ice="anchor"}

<div data-ice="description">

Creates a Message of type SUBSCRIBE

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-6 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

to- <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

resource <span>URL.URL</span> URL of the object

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------
  <span>\*</span>
  -----------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createUnsubscribeMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, to-: <span>URL.URLList</span>, resource: <span>URL.URL</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber159)</span></span> </span> {#instance-method-createUnsubscribeMessageRequest data-ice="anchor"}

<div data-ice="description">

Creates a Message of type UNSUBSCRIBE

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-7 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

to- <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

resource <span>URL.URL</span> URL of the object

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------
  <span>\*</span>
  -----------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createUpdateMessageRequest</span><span data-ice="signature">(from: <span>URL.URL</span>, value: <span>\*</span>, resource: <span>URL.URL</span>, attribute: <span>\*</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber105)</span></span> </span> {#instance-method-createUpdateMessageRequest data-ice="anchor"}

<div data-ice="description">

Creates an Update Message Request

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-8 data-ice="title"}

Name Type Attribute Description from <span>URL.URL</span> the sender of
this message

{URL.URLList}to <span>\*</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

value <span>\*</span> The new value of the attribute to be updated

resource <span>URL.URL</span> URL of Data Object Resource associated
with the message

attribute <span>\*</span> Identifies the attribute in the Object to be
updated

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | Message - the Update message request |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">generateMessageResponse</span><span data-ice="signature">(data: <span>[Message](../../../class/src/message-factory/Message.js~Message.html)</span>, code: <span>ResponseCode</span>, value: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber199)</span></span> </span> {#instance-method-generateMessageResponse data-ice="anchor"}

<div data-ice="description">

Generate a response to the given Message Request - Response transactions
A Response to a Request message should follow this rule: Response.from =
Request.to Response.to = Request.from Response.id = Request.id It should
be note, the Request.id MUST be incremented every time a new Request
message is created.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-9 data-ice="title"}

Name Type Attribute Description data
<span>[Message](../../../class/src/message-factory/Message.js~Message.html)</span>
Message to be updated

code <span>ResponseCode</span> response code compliant with HTTP
response codes (RFC7231).

value
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Contains a data value in JSON format.

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------
  <span>\*</span>
  -----------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">validate</span><span data-ice="signature">(data: <span>\*</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageFactory.js.html#lineNumber31)</span></span> </span> {#instance-method-validate data-ice="anchor"}

<div data-ice="description">

Validates the message against the reTHINK Message Data Schema

</div>

<div data-ice="override">

#### Override:

<span>[RethinkObject\#validate](../../../class/src/reTHINKObject/RethinkObject.js~RethinkObject.html#instance-method-validate)</span>

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-10 data-ice="title"}

Name Type Attribute Description data <span>\*</span>

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------
  <span>\*</span>
  -----------------

<div data-ice="returnProperties">

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.3)</span>](https://esdoc.org)
