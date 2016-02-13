</div>
<div class="self-detail detail">

DataObjectReporter {#dataobjectreporter data-ice="name"}
==================

<div class="instance-docs" data-ice="instanceDocs">

<span>You can directly use instance of this class.</span> <span
data-ice="instanceDoc"><span>[dataObjectReporter](../../../variable/index.html#static-variable-dataObjectReporter)</span></span>

</div>

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>src/syncher/DataObject\~DataObject</span> → DataObjectReporter

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
data-ice="name"><span>[subscriptions](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html#instance-get-subscriptions)</span></span><span
data-ice="signature">:
<span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>HypertyURL</span>,
<span>SyncSubscription</span>&gt;</span>

</div>

<div>

<div data-ice="description">

Subscriptions requested and accepted to this reporter

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
data-ice="name"><span>[onResponse](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html#instance-method-onResponse)</span></span><span
data-ice="signature">(callback:
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>)</span>

</div>

<div>

<div data-ice="description">

Setup the callback to process response notifications of the create's

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[onSubscription](../../../class/src/syncher/DataObjectReporter.js~DataObjectReporter.html#instance-method-onSubscription)</span></span><span
data-ice="signature">(callback:
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>)</span>

</div>

<div>

<div data-ice="description">

Setup the callback to process subscribe and unsubscribe notifications

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span class="kind" data-ice="kind">get</span> <span data-ice="name">subscriptions</span><span data-ice="signature">: <span>[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)</span>&lt;<span>HypertyURL</span>, <span>SyncSubscription</span>&gt;</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObjectReporter.js.html#lineNumber38)</span></span> </span> {#instance-get-subscriptions data-ice="anchor"}

<div data-ice="description">

Subscriptions requested and accepted to this reporter

</div>

<div data-ice="properties">

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">onResponse</span><span data-ice="signature">(callback: <span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event: <span>MsgEvent</span>)</span></span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObjectReporter.js.html#lineNumber52)</span></span> </span> {#instance-method-onResponse data-ice="anchor"}

<div data-ice="description">

Setup the callback to process response notifications of the create's

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description callback
<span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event:
<span>MsgEvent</span>)</span></span>

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">onSubscription</span><span data-ice="signature">(callback: <span><span>[function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)</span><span>(event: <span>MsgEvent</span>)</span></span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/syncher/DataObjectReporter.js.html#lineNumber44)</span></span> </span> {#instance-method-onSubscription data-ice="anchor"}

<div data-ice="description">

Setup the callback to process subscribe and unsubscribe notifications

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
