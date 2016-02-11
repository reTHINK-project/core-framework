UpdateMessageBody {#updatemessagebody data-ice="name"}
=================

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>
→ UpdateMessageBody

</div>

</div>

<div class="description" data-ice="description">

Class representation of the UpdateMessageBody data object

</div>

</div>
<div data-ice="constructorSummary">

Constructor Summary
-------------------

Public Constructor <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[constructor](../../../class/src/message-factory/MessageBody.js~UpdateMessageBody.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(idToken: <span>Identity.JWT</span>, accessToken:
<span>Identity.JWT</span>, resource: <span>URL.URL</span>, schema:
<span>URL.HypertyCatalogueURL</span>, assertedIdentity:
<span>Identity.Identity</span>, attribute:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
value:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>)</span>

</div>

<div>

<div data-ice="description">

Constructor to create the object

</div>

</div>

</div>

<div class="inherited-summary" data-ice="inheritedSummary">

Inherited Summary
-----------------

<span class="toggle closed"></span> From class
<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>
<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[accessToken](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-get-accessToken)</span></span><span
data-ice="signature">: <span>Identity.JWT</span>: <span>\*</span></span>

</div>

<div>

<div data-ice="description">

Get the access token

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[accessToken](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-set-accessToken)</span></span><span
data-ice="signature">(token: <span>Identity.JWT</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the access token

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[assertedIdentity](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-get-assertedIdentity)</span></span><span
data-ice="signature">: <span>Identity.Identity</span>:
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Return the asserted Identity

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[assertedIdentity](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-set-assertedIdentity)</span></span><span
data-ice="signature">(assertedIdentity: <span>Identity.Identity</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the asserted identity

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[idToken](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-get-idToken)</span></span><span
data-ice="signature">: <span>Identity.JWT</span>: <span>\*</span></span>

</div>

<div>

<div data-ice="description">

Get the id token

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[idToken](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-set-idToken)</span></span><span
data-ice="signature">(token: <span>Identity.JWT</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the token identifier

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[resource](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-get-resource)</span></span><span
data-ice="signature">: <span>URL.URL</span>: <span>\*</span></span>

</div>

<div>

<div data-ice="description">

The the resource URL

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[resource](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-set-resource)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the resource

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">get</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[schema](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-get-schema)</span></span><span
data-ice="signature">: <span>URL.HypertyCatalogueURL</span>:
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

Return the URL of the schema on the HypertyCatalogue

</div>

</div>

<span class="access" data-ice="access">public</span> <span class="kind"
data-ice="kind">set</span> <span class="override"
data-ice="override"></span>
<div>

<span
data-ice="name"><span>[schema](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-set-schema)</span></span><span
data-ice="signature">(schema: <span>URL.HypertyCatalogueURL</span>):
<span>\*</span></span>

</div>

<div>

<div data-ice="description">

set the schema URL

</div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(idToken: <span>Identity.JWT</span>, accessToken: <span>Identity.JWT</span>, resource: <span>URL.URL</span>, schema: <span>URL.HypertyCatalogueURL</span>, assertedIdentity: <span>Identity.Identity</span>, attribute: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, value: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageBody.js.html#lineNumber218)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="description">

Constructor to create the object

</div>

<div data-ice="override">

#### Override:

<span>[MessageBody\#constructor](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-constructor-constructor)</span>

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description idToken <span>Identity.JWT</span>
accessToken <span>Identity.JWT</span> resource <span>URL.URL</span> URL
of the object

schema <span>URL.HypertyCatalogueURL</span> URL of the Data object
schema stored in the Catalogue

assertedIdentity <span>Identity.Identity</span> AssertedIdentity is
compliant with User Identity Data Model

attribute
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Identifies the attribute in the Object to be deleted (optional)

value
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Contains the updated value object in JSON format.

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.3)</span>](https://esdoc.org)
