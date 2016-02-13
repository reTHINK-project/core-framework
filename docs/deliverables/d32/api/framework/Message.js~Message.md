</div>
<div class="self-detail detail">

Message {#message data-ice="name"}
=======

</div>

<div data-ice="constructorSummary">

Constructor Summary
-------------------

Public Constructor <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[constructor](../../../class/src/message-factory/Message.js~Message.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(id:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
from: <span>URL.URL</span>, toList: <span>URL.URLList</span>, type:
<span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span>,
body:
<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>)</span>

</div>

<div>

<div data-ice="description">

Generates a message data object

</div>

</div>

</div>

<div data-ice="memberSummary">

Member Summary
--------------

Public Members <span class="access" data-ice="access">public</span>
<span class="kind" data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[body](../../../class/src/message-factory/Message.js~Message.html#instance-get-body)</span></span><span
data-ice="signature">:
<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span></span>

</div>

<div>

<div data-ice="description">

The Message body

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[body](../../../class/src/message-factory/Message.js~Message.html#instance-set-body)</span></span><span
data-ice="signature">(msgBody:
<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the message body

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[from](../../../class/src/message-factory/Message.js~Message.html#instance-get-from)</span></span><span
data-ice="signature">: <span>URL.URL</span></span>

</div>

<div>

<div data-ice="description">

The sender of the Message.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[from](../../../class/src/message-factory/Message.js~Message.html#instance-set-from)</span></span><span
data-ice="signature">(sender: <span>URL.URL</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the sender of the Message

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[id](../../../class/src/message-factory/Message.js~Message.html#instance-get-id)</span></span><span
data-ice="signature">:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span></span>

</div>

<div>

<div data-ice="description">

The Message identifier.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[to](../../../class/src/message-factory/Message.js~Message.html#instance-get-to)</span></span><span
data-ice="signature">: <span>URL.URLList</span></span>

</div>

<div>

<div data-ice="description">

The recipient of the Message.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[to](../../../class/src/message-factory/Message.js~Message.html#instance-set-to)</span></span><span
data-ice="signature">(recipientList: <span>URL.URLList</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the list of recipients

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[type](../../../class/src/message-factory/Message.js~Message.html#instance-get-type)</span></span><span
data-ice="signature">:
<span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span></span>

</div>

<div>

<div data-ice="description">

The Message type.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[type](../../../class/src/message-factory/Message.js~Message.html#instance-set-type)</span></span><span
data-ice="signature">(msgType:
<span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the message type

</div>

</div>

</div>

<div data-ice="methodSummary">

Method Summary
--------------

Public Methods <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[addAccessToken](../../../class/src/message-factory/Message.js~Message.html#instance-method-addAccessToken)</span></span><span
data-ice="signature">(token: <span>Identity.JWT</span>):
<span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Add an access token to the given message

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[addIdToken](../../../class/src/message-factory/Message.js~Message.html#instance-method-addIdToken)</span></span><span
data-ice="signature">(token: <span>Identity.JWT</span>):
<span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Adds an Id token to the given message

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[assertIdentity](../../../class/src/message-factory/Message.js~Message.html#instance-method-assertIdentity)</span></span><span
data-ice="signature">(token: <span>Identity.JWT</span>, identity:
<span>Identity.Identity</span>): <span>Message.Message</span></span>

</div>

<div>

<div data-ice="description">

Adds the asserted identity to the message body and removes the given
token from the message

</div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(id: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, from: <span>URL.URL</span>, toList: <span>URL.URLList</span>, type: <span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span>, body: <span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber23)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="description">

Generates a message data object

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description id
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
To be used to associate Response messages to the initial request
message.

from <span>URL.URL</span> URL of Hyperty instance or User associated
with it

toList <span>URL.URLList</span> One or more URLs of Message recipients.
According to the URL scheme it may be handled in different ways

type
<span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span>
The URL of the reTHINK Data Object Resource associated with the message
that can be used for routing purposes

body
<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>
Optionally, all message bodies exchanged between different Runtime
Messge BUS can contain JWT tokens for Access Control for Identity
Assertion purposes that are inserted by the Identity Module before the
message is routed to proto stubs

</div>

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">body</span><span data-ice="signature">: <span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber60)</span></span> </span> {#instance-get-body data-ice="anchor"}

<div data-ice="description">

The Message body

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">body</span><span data-ice="signature">(msgBody: <span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber84)</span></span> </span> {#instance-set-body data-ice="anchor"}

<div data-ice="description">

set the message body

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">from</span><span data-ice="signature">: <span>URL.URL</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber42)</span></span> </span> {#instance-get-from data-ice="anchor"}

<div data-ice="description">

The sender of the Message.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">from</span><span data-ice="signature">(sender: <span>URL.URL</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber66)</span></span> </span> {#instance-set-from data-ice="anchor"}

<div data-ice="description">

set the sender of the Message

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">id</span><span data-ice="signature">: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber36)</span></span> </span> {#instance-get-id data-ice="anchor"}

<div data-ice="description">

The Message identifier.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">to</span><span data-ice="signature">: <span>URL.URLList</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber48)</span></span> </span> {#instance-get-to data-ice="anchor"}

<div data-ice="description">

The recipient of the Message.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">to</span><span data-ice="signature">(recipientList: <span>URL.URLList</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber93)</span></span> </span> {#instance-set-to data-ice="anchor"}

<div data-ice="description">

set the list of recipients

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">type</span><span data-ice="signature">: <span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber54)</span></span> </span> {#instance-get-type data-ice="anchor"}

<div data-ice="description">

The Message type.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">type</span><span data-ice="signature">(msgType: <span>[MessageType](../../../variable/index.html#static-variable-MessageType)</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber75)</span></span> </span> {#instance-set-type data-ice="anchor"}

<div data-ice="description">

set the message type

</div>

<div data-ice="properties">

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">addAccessToken</span><span data-ice="signature">(token: <span>Identity.JWT</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber136)</span></span> </span> {#instance-method-addAccessToken data-ice="anchor"}

<div data-ice="description">

Add an access token to the given message

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description token <span>Identity.JWT</span> token to
be added to the given message

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | the updated Message                  |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">addIdToken</span><span data-ice="signature">(token: <span>Identity.JWT</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber122)</span></span> </span> {#instance-method-addIdToken data-ice="anchor"}

<div data-ice="description">

Adds an Id token to the given message

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-2 data-ice="title"}

Name Type Attribute Description token <span>Identity.JWT</span> identity
token to include in the message

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | the updated message                  |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">assertIdentity</span><span data-ice="signature">(token: <span>Identity.JWT</span>, identity: <span>Identity.Identity</span>): <span>Message.Message</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/Message.js.html#lineNumber104)</span></span> </span> {#instance-method-assertIdentity data-ice="anchor"}

<div data-ice="description">

Adds the asserted identity to the message body and removes the given
token from the message

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-3 data-ice="title"}

Name Type Attribute Description token <span>Identity.JWT</span> idToken
to remove from message

identity <span>Identity.Identity</span> asserted identity to include

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>Message.Message</span>         | message - updated message            |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.3)</span>](https://esdoc.org)
