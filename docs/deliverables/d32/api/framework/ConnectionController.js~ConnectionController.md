</div>
<div class="self-detail detail">

ConnectionController {#connectioncontroller data-ice="name"}
====================

<div class="instance-docs" data-ice="instanceDocs">

<span>You can directly use instance of this class.</span> <span
data-ice="instanceDoc"><span>[connectionController](../../../variable/index.html#static-variable-connectionController)</span></span>

</div>

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>src/utils/EventEmitter\~EventEmitter</span> → ConnectionController

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
data-ice="name"><span>[constructor](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(syncher: <span>\*</span>)</span>

</div>

<div>

</div>

</div>

<div data-ice="memberSummary">

Member Summary
--------------

Public Members <span class="access" data-ice="access">public</span>
<span class="kind" data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectObserver](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-set-dataObjectObserver)</span></span><span
data-ice="signature">(dataObject: <span>ConnectionDataObject</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Set the dataObject in the controller

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectObserver](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-get-dataObjectObserver)</span></span><span
data-ice="signature">: <span>ConnectionDataObject</span>:
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

return the dataObject in the controller

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectReporter](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-set-dataObjectReporter)</span></span><span
data-ice="signature">(dataObject: <span>ConnectionDataObject</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Set the dataObject in the controller

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[dataObjectReporter](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-get-dataObjectReporter)</span></span><span
data-ice="signature">: <span>ConnectionDataObject</span>:
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

return the dataObject in the controller

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[remotePeerInformation](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-set-remotePeerInformation)</span></span><span
data-ice="signature">(remotePeerInformation:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Set Remote peer information, like Hyperty.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[remotePeerInformation](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-get-remotePeerInformation)</span></span><span
data-ice="signature">:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>:
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Get information relative to the Remote Peer;

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
data-ice="name"><span>[accept](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-accept)</span></span><span
data-ice="signature">(options: <span>\*</span>):
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

Used to accept an incoming connection request.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[addPeer](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-addPeer)</span></span><span
data-ice="signature">():
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

Used to add/invite new peers on an existing connection instance (for
multiparty connections).

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[changePeerInformation](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-changePeerInformation)</span></span><span
data-ice="signature">(dataObjectObserver: <span>\*</span>)</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createAnswer](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-createAnswer)</span></span><span
data-ice="signature">()</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createOffer](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-createOffer)</span></span><span
data-ice="signature">()</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[decline](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-decline)</span></span><span
data-ice="signature">():
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

Used to decline an incoming connection request.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[disableCam](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-disableCam)</span></span><span
data-ice="signature">(): <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[disableMic](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-disableMic)</span></span><span
data-ice="signature">(): <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[disconnect](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-disconnect)</span></span><span
data-ice="signature">():
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

Used to close an existing connection instance.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[getUserMedia](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-getUserMedia)</span></span><span
data-ice="signature">(options:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>):
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

Get WebRTC API resources

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[infoError](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-infoError)</span></span><span
data-ice="signature">(err: <span>\*</span>)</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[mute](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-mute)</span></span><span
data-ice="signature">(): <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[onLocalSessionCreated](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-onLocalSessionCreated)</span></span><span
data-ice="signature">(description: <span>\*</span>)</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[processPeerInformation](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-processPeerInformation)</span></span><span
data-ice="signature">(data: <span>\*</span>)</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[remoteDescriptionError](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-remoteDescriptionError)</span></span><span
data-ice="signature">(error: <span>\*</span>)</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[remoteDescriptionSuccess](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-remoteDescriptionSuccess)</span></span><span
data-ice="signature">()</span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[removePeer](../../../class/src/hyperty/ConnectionController.js~ConnectionController.html#instance-method-removePeer)</span></span><span
data-ice="signature">():
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span>

</div>

<div>

<div data-ice="description">

Used to remove a peer from an existing connection instance.

</div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(syncher: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber14)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description syncher <span>\*</span>

</div>

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">dataObjectObserver</span><span data-ice="signature">(dataObject: <span>ConnectionDataObject</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber160)</span></span> </span> {#instance-set-dataObjectObserver data-ice="anchor"}

<div data-ice="description">

Set the dataObject in the controller

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">dataObjectObserver</span><span data-ice="signature">: <span>ConnectionDataObject</span>: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber173)</span></span> </span> {#instance-get-dataObjectObserver data-ice="anchor"}

<div data-ice="description">

return the dataObject in the controller

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>ConnectionDataObject</span>    | dataObject                           |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">dataObjectReporter</span><span data-ice="signature">(dataObject: <span>ConnectionDataObject</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber112)</span></span> </span> {#instance-set-dataObjectReporter data-ice="anchor"}

<div data-ice="description">

Set the dataObject in the controller

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">dataObjectReporter</span><span data-ice="signature">: <span>ConnectionDataObject</span>: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber151)</span></span> </span> {#instance-get-dataObjectReporter data-ice="anchor"}

<div data-ice="description">

return the dataObject in the controller

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>ConnectionDataObject</span>    | dataObject                           |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">set</span> <span data-ice="name">remotePeerInformation</span><span data-ice="signature">(remotePeerInformation: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber94)</span></span> </span> {#instance-set-remotePeerInformation data-ice="anchor"}

<div data-ice="description">

Set Remote peer information, like Hyperty.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">remotePeerInformation</span><span data-ice="signature">: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber103)</span></span> </span> {#instance-get-remotePeerInformation data-ice="anchor"}

<div data-ice="description">

Get information relative to the Remote Peer;

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>[Object](https://developer.moz | remotePeerInformation;               |
| %20illa.org/en-US/docs/Web/JavaScrip |                                      |
| t/R%20eference/Global_Objects/Object |                                      |
| )&lt;/spa                            |                                      |
| n&gt;                                |                                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">accept</span><span data-ice="signature">(options: <span>\*</span>): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber294)</span></span> </span> {#instance-method-accept data-ice="anchor"}

<div data-ice="description">

Used to accept an incoming connection request.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description options <span>\*</span>

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  ------------------------------------------------------------------------------------------------------------------
  <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>
  ------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">addPeer</span><span data-ice="signature">(): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber382)</span></span> </span> {#instance-method-addPeer data-ice="anchor"}

<div data-ice="description">

Used to add/invite new peers on an existing connection instance (for
multiparty connections).

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  ------------------------------------------------------------------------------------------------------------------
  <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>
  ------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">changePeerInformation</span><span data-ice="signature">(dataObjectObserver: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber200)</span></span> </span> {#instance-method-changePeerInformation data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-2 data-ice="title"}

Name Type Attribute Description dataObjectObserver <span>\*</span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createAnswer</span><span data-ice="signature">()</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber255)</span></span> </span> {#instance-method-createAnswer data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createOffer</span><span data-ice="signature">()</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber246)</span></span> </span> {#instance-method-createOffer data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">decline</span><span data-ice="signature">(): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber334)</span></span> </span> {#instance-method-decline data-ice="anchor"}

<div data-ice="description">

Used to decline an incoming connection request.

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  ------------------------------------------------------------------------------------------------------------------
  <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>
  ------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">disableCam</span><span data-ice="signature">(): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber415)</span></span> </span> {#instance-method-disableCam data-ice="anchor"}

<div data-ice="properties">

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

### <span class="access" data-ice="access">public</span> <span data-ice="name">disableMic</span><span data-ice="signature">(): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber396)</span></span> </span> {#instance-method-disableMic data-ice="anchor"}

<div data-ice="properties">

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

### <span class="access" data-ice="access">public</span> <span data-ice="name">disconnect</span><span data-ice="signature">(): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber356)</span></span> </span> {#instance-method-disconnect data-ice="anchor"}

<div data-ice="description">

Used to close an existing connection instance.

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  ------------------------------------------------------------------------------------------------------------------
  <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>
  ------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">getUserMedia</span><span data-ice="signature">(options: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber183)</span></span> </span> {#instance-method-getUserMedia data-ice="anchor"}

<div data-ice="description">

Get WebRTC API resources

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-3 data-ice="title"}

Name Type Attribute Description options
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>
Object containing the information that resources will be used (camera,
mic, resolution, etc);

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  ------------------------------------------------------------------------------------------------------------------
  <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>
  ------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">infoError</span><span data-ice="signature">(err: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber285)</span></span> </span> {#instance-method-infoError data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-4 data-ice="title"}

Name Type Attribute Description err <span>\*</span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">mute</span><span data-ice="signature">(): <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber434)</span></span> </span> {#instance-method-mute data-ice="anchor"}

<div data-ice="properties">

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

### <span class="access" data-ice="access">public</span> <span data-ice="name">onLocalSessionCreated</span><span data-ice="signature">(description: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber263)</span></span> </span> {#instance-method-onLocalSessionCreated data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-5 data-ice="title"}

Name Type Attribute Description description <span>\*</span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">processPeerInformation</span><span data-ice="signature">(data: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber213)</span></span> </span> {#instance-method-processPeerInformation data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-6 data-ice="title"}

Name Type Attribute Description data <span>\*</span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">remoteDescriptionError</span><span data-ice="signature">(error: <span>\*</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber242)</span></span> </span> {#instance-method-remoteDescriptionError data-ice="anchor"}

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-7 data-ice="title"}

Name Type Attribute Description error <span>\*</span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">remoteDescriptionSuccess</span><span data-ice="signature">()</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber238)</span></span> </span> {#instance-method-remoteDescriptionSuccess data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">removePeer</span><span data-ice="signature">(): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/hyperty/ConnectionController.js.html#lineNumber391)</span></span> </span> {#instance-method-removePeer data-ice="anchor"}

<div data-ice="description">

Used to remove a peer from an existing connection instance.

</div>

<div data-ice="properties">

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  ------------------------------------------------------------------------------------------------------------------
  <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>
  ------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.3)</span>](https://esdoc.org)
