<div class="self-detail detail">

ChatGroup {#chatgroup data-ice="name"}
=========

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>[EventEmitter](../../../class/src/utils/EventEmitter.js~EventEmitter.html)</span>
→ ChatGroup

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
data-ice="name"><span>[constructor](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(syncher: <span>\*</span>, hypertyDiscovery:
<span>\*</span>)</span>

</div>

<div>

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
data-ice="name"><span>[dataObject](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-get-dataObject)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectObserver](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-set-dataObjectObserver)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectObserver](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-get-dataObjectObserver)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectReporter](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-set-dataObjectReporter)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectReporter](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-get-dataObjectReporter)</span></span><span
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
data-ice="name"><span>[addParticipant](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-addParticipant)</span></span><span
data-ice="signature">(email: <span>\*</span>):
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

This function is used to add / invite new participant on an existing
Group Chat instance.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[close](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-close)</span></span><span
data-ice="signature">()</span>

</div>

<div>

<div data-ice="description">

This function is used to close an existing Group Chat instance.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[join](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-join)</span></span><span
data-ice="signature">(resource: <span>\*</span>): <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[open](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-open)</span></span><span
data-ice="signature">(): <span>\[type\]</span></span>

</div>

<div>

<div data-ice="description">

This function is used to open a Group Chat instance that was previously
closed.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[processPartipants](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-processPartipants)</span></span><span
data-ice="signature">(dataObject: <span>\*</span>)</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[removeParticipant](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-removeParticipant)</span></span><span
data-ice="signature">():
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

This function is used to remove a participant from an existing Group
Chat instance.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[send](../../../class/src/hyperty-chat/Chat.js~ChatGroup.html#instance-method-send)</span></span><span
data-ice="signature">(message:
<span>[Message](../../../class/src/message-factory/Message.js~Message.html)</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

This function is used to send a chat message.

</div>

</div>

</div>

<div class="inherited-summary" data-ice="inheritedSummary">

Inherited Summary
-----------------

<span class="toggle closed"></span> From class
<span>[EventEmitter](../../../class/src/utils/EventEmitter.js~EventEmitter.html)</span>
<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[addEventListener](../../../class/src/utils/EventEmitter.js~EventEmitter.html#instance-method-addEventListener)</span></span><span
data-ice="signature">(eventType:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
cb:
<span>[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span>)</span>

</div>

<div>

<div data-ice="description">

addEventListener listen for an eventType

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[trigger](../../../class/src/utils/EventEmitter.js~EventEmitter.html#instance-method-trigger)</span></span><span
data-ice="signature">(eventType:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
params:
<span>[object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>)</span>

</div>

<div>

<div data-ice="description">

Invoke the eventType

</div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(syncher: <span>\*</span>, hypertyDiscovery: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber6)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description syncher <span>\*</span> hypertyDiscovery
<span>\*</span>

</div>

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">dataObject</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber74)</span></span> </span> {#instance-get-dataObject data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">dataObjectObserver</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber51)</span></span> </span> {#instance-set-dataObjectObserver data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">dataObjectObserver</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber69)</span></span> </span> {#instance-get-dataObjectObserver data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">dataObjectReporter</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber20)</span></span> </span> {#instance-set-dataObjectReporter data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">dataObjectReporter</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber46)</span></span> </span> {#instance-get-dataObjectReporter data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">addParticipant</span><span data-ice="signature">(email: <span>\*</span>): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber165)</span></span> </span> {#instance-method-addParticipant data-ice="anchor"}

<div data-ice="description">

This function is used to add / invite new participant on an existing
Group Chat instance.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description email <span>\*</span>

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>[Promise](https://developer.mo | Promise with the status              |
| %20zilla.org/en-US/docs/Web/JavaScri |                                      |
| pt/%20Reference/Global_Objects/Promi |                                      |
| se)&lt;/s                            |                                      |
| pan&gt;                              |                                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">close</span><span data-ice="signature">()</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber140)</span></span> </span> {#instance-method-close data-ice="anchor"}

<div data-ice="description">

This function is used to close an existing Group Chat instance.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">join</span><span data-ice="signature">(resource: <span>\*</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber144)</span></span> </span> {#instance-method-join data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-2 data-ice="title"}

Name Type Attribute Description resource <span>\*</span>

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

### <span class="access" data-ice="access">public</span> <span data-ice="name">open</span><span data-ice="signature">(): <span>\[type\]</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber198)</span></span> </span> {#instance-method-open data-ice="anchor"}

<div data-ice="description">

This function is used to open a Group Chat instance that was previously
closed.

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>\[type\]</span>                | \[description\]                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">processPartipants</span><span data-ice="signature">(dataObject: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber79)</span></span> </span> {#instance-method-processPartipants data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-3 data-ice="title"}

Name Type Attribute Description dataObject <span>\*</span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">removeParticipant</span><span data-ice="signature">(): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber181)</span></span> </span> {#instance-method-removeParticipant data-ice="anchor"}

<div data-ice="description">

This function is used to remove a participant from an existing Group
Chat instance.

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>[Promise](https://developer.mo | Promise with the status              |
| %20zilla.org/en-US/docs/Web/JavaScri |                                      |
| pt/%20Reference/Global_Objects/Promi |                                      |
| se)&lt;/s                            |                                      |
| pan&gt;                              |                                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">send</span><span data-ice="signature">(message: <span>[Message](../../../class/src/message-factory/Message.js~Message.html)</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty-chat/Chat.js.html#lineNumber111)</span></span> </span> {#instance-method-send data-ice="anchor"}

<div data-ice="description">

This function is used to send a chat message.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-4 data-ice="title"}

Name Type Attribute Description message
<span>[Message](../../../class/src/message-factory/Message.js~Message.html)</span>
text to be send

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
data-ice="esdocVersion">(0.4.4)</span>](https://esdoc.org)
