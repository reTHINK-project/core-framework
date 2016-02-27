<div class="self-detail detail">

ReadMessageBody {#readmessagebody data-ice="name"}
===============

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>
→ ReadMessageBody

</div>

</div>

<div class="description" data-ice="description">

Class representation of the ReadMessageBody data object

</div>

</div>

<div data-ice="constructorSummary">

Constructor Summary
-------------------

Public Constructor <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[constructor](../../../class/src/message-factory/MessageBody.js~ReadMessageBody.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(idToken: <span>Identity.JWT</span>, accessToken:
<span>Identity.JWT</span>, resource: <span>URL.URL</span>, schema:
<span>URL.HypertyCatalogueURL</span>, assertedIdentity:
<span>Identity.Identity</span>, attribute:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
criteriaSyntax:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
criteria:
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>)</span>

</div>

<div>

</div>

</div>

<div data-ice="memberSummary">

Member Summary
--------------

Public Members <span class="access" data-ice="access">public</span>
<span class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[attribute](../../../class/src/message-factory/MessageBody.js~ReadMessageBody.html#instance-member-attribute)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[criteria](../../../class/src/message-factory/MessageBody.js~ReadMessageBody.html#instance-member-criteria)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[criteriaSyntax](../../../class/src/message-factory/MessageBody.js~ReadMessageBody.html#instance-member-criteriaSyntax)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

</div>

<div class="inherited-summary" data-ice="inheritedSummary">

Inherited Summary
-----------------

<span class="toggle closed"></span> From class
<span>[MessageBody](../../../class/src/message-factory/MessageBody.js~MessageBody.html)</span>
<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[accessToken](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-member-accessToken)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[assertedIdentity](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-member-assertedIdentity)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[idToken](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-member-idToken)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[resource](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-member-resource)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[schema](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-member-schema)</span></span><span
data-ice="signature">: <span>\*</span></span>

</div>

<div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(idToken: <span>Identity.JWT</span>, accessToken: <span>Identity.JWT</span>, resource: <span>URL.URL</span>, schema: <span>URL.HypertyCatalogueURL</span>, assertedIdentity: <span>Identity.Identity</span>, attribute: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, criteriaSyntax: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, criteria: <span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageBody.js.html#lineNumber78)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="override">

#### Override:

<span>[MessageBody\#constructor](../../../class/src/message-factory/MessageBody.js~MessageBody.html#instance-constructor-constructor)</span>

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description idToken <span>Identity.JWT</span>
accessToken <span>Identity.JWT</span> resource <span>URL.URL</span> URL
of the objec

schema <span>URL.HypertyCatalogueURL</span> URL of the Data object
schema stored in the Catalogue

assertedIdentity <span>Identity.Identity</span> AssertedIdentity is
compliant with User Identity Data Model

attribute
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Identifies the attribute in the Object to be read (optional)

criteriaSyntax
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Defines the criteria syntax used in criteria field. To be used for
search purposes. Valid criteria Syntax are: "key-value", "mongodb",
"sql"(?), ...

criteria
<span>[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Defines the criteria to be used for search purposes. Syntax used to
define the criteria is set in the criteriaSyntax.

</div>

</div>

</div>

</div>

<div data-ice="memberDetails">

Public Members {#public-members data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">attribute</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageBody.js.html#lineNumber83)</span></span> </span> {#instance-member-attribute data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">criteria</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageBody.js.html#lineNumber89)</span></span> </span> {#instance-member-criteria data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">criteriaSyntax</span><span data-ice="signature">: <span>\*</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/message-factory/MessageBody.js.html#lineNumber86)</span></span> </span> {#instance-member-criteriaSyntax data-ice="anchor"}

<div data-ice="properties">

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.4)</span>](https://esdoc.org)
