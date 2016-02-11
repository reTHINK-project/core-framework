DataObject {#dataobject data-ice="name"}
==========

<div class="instance-docs" data-ice="instanceDocs">

<span>You can directly use instance of this class.</span> <span
data-ice="instanceDoc"><span>[dataObject](../../../variable/index.html#static-variable-dataObject)</span></span>

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
data-ice="name"><span>[children](../../../class/src/syncher/DataObject.js~DataObject.html#instance-get-children)</span></span><span
data-ice="signature">:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>ChildId</span>,
<span>[DataObjectChild](../../../class/src/syncher/DataObjectChild.js~DataObjectChild.html)</span>&gt;</span>

</div>

<div>

<div data-ice="description">

All created children's since the subscription, doesn't contain all
children's since reporter creation.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[data](../../../class/src/syncher/DataObject.js~DataObject.html#instance-get-data)</span></span><span
data-ice="signature">:
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span></span>

</div>

<div>

<div data-ice="description">

Data structure to be synchronized.

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[schema](../../../class/src/syncher/DataObject.js~DataObject.html#instance-get-schema)</span></span><span
data-ice="signature">: <span>SchemaURL</span></span>

</div>

<div>

<div data-ice="description">

Object schema URL (this field is not yet stable, and is subsject to
change)

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[status](../../../class/src/syncher/DataObject.js~DataObject.html#instance-get-status)</span></span><span
data-ice="signature">: <span>Status</span></span>

</div>

<div>

<div data-ice="description">

Status of the reporter or observer connection (this field is not yet
stable, and is subsject to change)

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[url](../../../class/src/syncher/DataObject.js~DataObject.html#instance-get-url)</span></span><span
data-ice="signature">: <span>ObjectURL</span></span>

</div>

<div>

<div data-ice="description">

Object URL of reporter or observer

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
data-ice="name"><span>[addChildren](../../../class/src/syncher/DataObject.js~DataObject.html#instance-method-addChildren)</span></span><span
data-ice="signature">(resource:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
initialData:
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>):
<span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>&lt;<span>[DataObjectChild](../../../class/src/syncher/DataObjectChild.js~DataObjectChild.html)</span>&gt;</span>

</div>

<div>

<div data-ice="description">

Create and add a children to the subscription group.

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[onAddChildren](../../../class/src/syncher/DataObject.js~DataObject.html#instance-method-onAddChildren)</span></span><span
data-ice="signature">(callback:
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>)</span>

</div>

<div>

<div data-ice="description">

Setup the callback to process create and delete childrens

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">children</span><span data-ice="signature">: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>ChildId</span>, <span>[DataObjectChild](../../../class/src/syncher/DataObjectChild.js~DataObjectChild.html)</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber88)</span></span> </span> {#instance-get-children data-ice="anchor"}

<div data-ice="description">

All created children's since the subscription, doesn't contain all
children's since reporter creation.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">data</span><span data-ice="signature">: <span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber82)</span></span> </span> {#instance-get-data data-ice="anchor"}

<div data-ice="description">

Data structure to be synchronized.

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">schema</span><span data-ice="signature">: <span>SchemaURL</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber70)</span></span> </span> {#instance-get-schema data-ice="anchor"}

<div data-ice="description">

Object schema URL (this field is not yet stable, and is subsject to
change)

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">status</span><span data-ice="signature">: <span>Status</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber76)</span></span> </span> {#instance-get-status data-ice="anchor"}

<div data-ice="description">

Status of the reporter or observer connection (this field is not yet
stable, and is subsject to change)

</div>

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">url</span><span data-ice="signature">: <span>ObjectURL</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber64)</span></span> </span> {#instance-get-url data-ice="anchor"}

<div data-ice="description">

Object URL of reporter or observer

</div>

<div data-ice="properties">

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">addChildren</span><span data-ice="signature">(resource: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, initialData: <span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>): <span>[Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)</span>&lt;<span>[DataObjectChild](../../../class/src/syncher/DataObjectChild.js~DataObjectChild.html)</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber127)</span></span> </span> {#instance-method-addChildren data-ice="anchor"}

<div data-ice="description">

Create and add a children to the subscription group.

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description resource
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Resource name, one of the items in the schema.properties.scheme of the
parent object.

initialData
<span>[JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)</span>
Initial data of the child

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

+--------------------------------------+--------------------------------------+
| <span>[Promise](https://developer.mo | Return Promise to a new Children.    |
| %20zilla.org/en-US/docs/Web/JavaScri |                                      |
| pt/%20Reference/Global_Objects/Promi |                                      |
| se)&lt;/s                            |                                      |
| pan&gt;&lt;<span>[DataObjectChild](. |                                      |
| ./.%20./../class/src/syncher/DataObj |                                      |
| ectChi%20ld.js~DataObjectChild.html) |                                      |
| </span>&g                            |                                      |
| t;                                   |                                      |
+--------------------------------------+--------------------------------------+

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">onAddChildren</span><span data-ice="signature">(callback: <span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event: <span>MsgEvent</span>)</span></span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObject.js.html#lineNumber160)</span></span> </span> {#instance-method-onAddChildren data-ice="anchor"}

<div data-ice="description">

Setup the callback to process create and delete childrens

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description callback
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.3)</span>](https://esdoc.org)
