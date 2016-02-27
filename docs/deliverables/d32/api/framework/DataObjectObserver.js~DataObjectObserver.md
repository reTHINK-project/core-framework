<div class="self-detail detail">

DataObjectObserver {#dataobjectobserver data-ice="name"}
==================

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>[DataObject](../../../class/src/syncher/DataObject.js~DataObject.html)</span>
→ DataObjectObserver

</div>

</div>

<div class="description" data-ice="description">

The class returned from the Syncher subscribe call. To be used as an
observation point from a DataObjectReporter change.

</div>

</div>

<div data-ice="methodSummary">

Method Summary
--------------

Public Methods <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[onChange](../../../class/src/syncher/DataObjectObserver.js~DataObjectObserver.html#instance-method-onChange)</span></span><span
data-ice="signature">(filter:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
callback:
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>)</span>

</div>

<div>

<div data-ice="description">

Register the change listeners sent by the reporter

</div>

</div>

</div>

<div class="inherited-summary" data-ice="inheritedSummary">

Inherited Summary
-----------------

<span class="toggle closed"></span> From class
<span>[DataObject](../../../class/src/syncher/DataObject.js~DataObject.html)</span>
<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
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

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
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

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">onChange</span><span data-ice="signature">(filter: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, callback: <span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event: <span>MsgEvent</span>)</span></span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObjectObserver.js.html#lineNumber44)</span></span> </span> {#instance-method-onChange data-ice="anchor"}

<div data-ice="description">

Register the change listeners sent by the reporter

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description filter
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Filter that identifies the field (separeted dot path). Accepts \* at the
end for a more unrestricted filtering.

callback
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.4)</span>](https://esdoc.org)
