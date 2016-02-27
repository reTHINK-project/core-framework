<div class="self-detail detail">

Syncher {#syncher data-ice="name"}
=======

<div class="description" data-ice="description">

The main class for the syncher package. The Syncher is a singleton class
per Hyperty/URL and it is the owner of all created Data Sync Objects
according to the Reporter - Observer pattern. Main functionality is to
create reporters and to subscribe to existing ones.

</div>

</div>

<div data-ice="constructorSummary">

Constructor Summary
-------------------

Public Constructor <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[constructor](../../../class/src/syncher/Syncher.js~Syncher.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(owner: <span>HypertyURL</span>, bus:
<span>MiniBus</span>, config:
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>)</span>

</div>

<div>

<div data-ice="description">

Constructor that should be used by the Hyperty owner

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
data-ice="name"><span>[observers](../../../class/src/syncher/Syncher.js~Syncher.html#instance-get-observers)</span></span><span
data-ice="signature">:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>URL</span>,
<span>[DataObjectObserver](../../../class/src/syncher/DataObjectObserver.js~DataObjectObserver.html)</span>&gt;</span>

</div>

<div>

<div data-ice="description">

All owned observers, the ones that were created by a local subscription

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[owner](../../../class/src/syncher/Syncher.js~Syncher.html#instance-get-owner)</span></span><span
data-ice="signature">: <span>HypertyURL</span></span>

</div>

<div>

<div data-ice="description">

The owner of the Syncher and all created reporters.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[reporters](../../../class/src/syncher/Syncher.js~Syncher.html#instance-get-reporters)</span></span><span
data-ice="signature">:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>URL</span>,
<span>[DataObjectReporter](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html)</span>&gt;</span>

</div>

<div>

<div data-ice="description">

All owned reporters, the ones that were created by a create

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
data-ice="name"><span>[create](../../../class/src/syncher/Syncher.js~Syncher.html#instance-method-create)</span></span><span
data-ice="signature">(schema: <span>SchemaURL</span>, observers:
<span><span>HypertyURL</span><span>\[\]</span></span>, initialData:
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>):
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>&lt;<span>[DataObjectReporter](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html)</span>&gt;</span>

</div>

<div>

<div data-ice="description">

Request a DataObjectReporter creation.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[onNotification](../../../class/src/syncher/Syncher.js~Syncher.html#instance-method-onNotification)</span></span><span
data-ice="signature">(callback:
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>)</span>

</div>

<div>

<div data-ice="description">

Setup the callback to process create and delete events of remove
Reporter objects.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[subscribe](../../../class/src/syncher/Syncher.js~Syncher.html#instance-method-subscribe)</span></span><span
data-ice="signature">(schema: <span>SchemaURL</span>, objURL:
<span>ObjectURL</span>):
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>&lt;<span>[DataObjectObserver](../../../class/src/syncher/DataObjectObserver.js~DataObjectObserver.html)</span>&gt;</span>

</div>

<div>

<div data-ice="description">

Request a subscription to an existent object.

</div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(owner: <span>HypertyURL</span>, bus: <span>MiniBus</span>, config: <span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber31)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="description">

Constructor that should be used by the Hyperty owner

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description owner <span>HypertyURL</span> Hyperty
URL owner. An URL allocated by the runtime that uniquely identifies the
Hyperty.

bus <span>MiniBus</span> An instance of the MiniBus provided in the
sandbox. When an object (Reporter or Observed) is created, the
SyncherManager will add a listener in the MiniBus to receive/send
Messages of that object.

config
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>
Configuration data. The only required field for now is the runtimeURL.

</div>

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">observers</span><span data-ice="signature">: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>URL</span>, <span>[DataObjectObserver](../../../class/src/syncher/DataObjectObserver.js~DataObjectObserver.html)</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber68)</span></span> </span> {#instance-get-observers data-ice="anchor"}

<div data-ice="description">

All owned observers, the ones that were created by a local subscription

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">owner</span><span data-ice="signature">: <span>HypertyURL</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber56)</span></span> </span> {#instance-get-owner data-ice="anchor"}

<div data-ice="description">

The owner of the Syncher and all created reporters.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">reporters</span><span data-ice="signature">: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>URL</span>, <span>[DataObjectReporter](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html)</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber62)</span></span> </span> {#instance-get-reporters data-ice="anchor"}

<div data-ice="description">

All owned reporters, the ones that were created by a create

</div>

<div data-ice="properties">

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">create</span><span data-ice="signature">(schema: <span>SchemaURL</span>, observers: <span><span>HypertyURL</span><span>\[\]</span></span>, initialData: <span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>&lt;<span>[DataObjectReporter](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html)</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber77)</span></span> </span> {#instance-method-create data-ice="anchor"}

<div data-ice="description">

Request a DataObjectReporter creation. The URL will be be requested by
the allocation mechanism.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description schema <span>SchemaURL</span> URL of the
object descriptor

observers <span><span>HypertyURL</span><span>\[\]</span></span> List of
hyperties that are pre-authorized for subscription

initialData
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>
Initial data of the reporter

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>[Promise](https://developer.mo | Return Promise to a new Reporter.    |
| %20zilla.org/en-US/docs/Web/JavaScri | The reporter can be accepted or      |
| pt/%20Reference/Global_Objects/Promi | rejected by the PEP                  |
| se)&lt;/s                            |                                      |
| pan&gt;&lt;<span>[DataObjectReporter |                                      |
| ](.%20./../../class/src/syncher/Data |                                      |
| Object%20Reporter.js~DataObjectRepor |                                      |
| ter.html)                            |                                      |
| </span>&gt;                          |                                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">onNotification</span><span data-ice="signature">(callback: <span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event: <span>MsgEvent</span>)</span></span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber148)</span></span> </span> {#instance-method-onNotification data-ice="anchor"}

<div data-ice="description">

Setup the callback to process create and delete events of remove
Reporter objects. This is releated to the messagens sent by create to
the observers Hyperty array.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-2 data-ice="title"}

Name Type Attribute Description callback
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">subscribe</span><span data-ice="signature">(schema: <span>SchemaURL</span>, objURL: <span>ObjectURL</span>): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>&lt;<span>[DataObjectObserver](../../../class/src/syncher/DataObjectObserver.js~DataObjectObserver.html)</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/Syncher.js.html#lineNumber111)</span></span> </span> {#instance-method-subscribe data-ice="anchor"}

<div data-ice="description">

Request a subscription to an existent object.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-3 data-ice="title"}

Name Type Attribute Description schema <span>SchemaURL</span> URL of the
object descriptor

objURL <span>ObjectURL</span> Address of the existent reporter object

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>[Promise](https://developer.mo | Return Promise to a new observer.    |
| %20zilla.org/en-US/docs/Web/JavaScri |                                      |
| pt/%20Reference/Global_Objects/Promi |                                      |
| se)&lt;/s                            |                                      |
| pan&gt;&lt;<span>[DataObjectObserver |                                      |
| ](.%20./../../class/src/syncher/Data |                                      |
| Object%20Observer.js~DataObjectObser |                                      |
| ver.html)                            |                                      |
| </span>&gt;                          |                                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.4)</span>](https://esdoc.org)
