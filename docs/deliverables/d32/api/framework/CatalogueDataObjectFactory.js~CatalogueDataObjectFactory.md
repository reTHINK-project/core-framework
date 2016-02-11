CatalogueDataObjectFactory {#cataloguedataobjectfactory data-ice="name"}
==========================

<div class="instance-docs" data-ice="instanceDocs">

<span>You can directly use instance of this class.</span> <span
data-ice="instanceDoc"><span>[catalogueDataObjectFactory](../../../variable/index.html#static-variable-catalogueDataObjectFactory)</span></span>

</div>

<div class="flat-list" data-ice="extendsChain">

#### Extends:

<div>

<span>src/reTHINKObject/RethinkObject\~RethinkObject</span> →
CatalogueDataObjectFactory

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
data-ice="name"><span>[constructor](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-constructor-constructor)</span></span><span
data-ice="signature">(validation:
<span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span>,
schema: <span>URL.URL </span>)</span>

</div>

<div>

<div data-ice="description">

Constructor

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
data-ice="name"><span>[createCatalogueDataObject](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createCatalogueDataObject)</span></span><span
data-ice="signature">(guid:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
type:
<span>[CatalogueObjectType](../../../variable/index.html#static-variable-CatalogueObjectType)</span>,
objectName:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
description:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
language:
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>,
sourcePackageURL:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>):
<span>[CatalogueDataObject](../../../class/src/catalogue-factory/CatalogueDataObject.js~CatalogueDataObject.html)</span></span>

</div>

<div>

<div data-ice="description">

Create CatalogueDataObject

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createDataObjectSchema](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createDataObjectSchema)</span></span><span
data-ice="signature">(guid:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
objectName:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
description:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
language:
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>,
sourcePackageURL:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>):
<span>[DataObjectSchema](../../../class/src/catalogue-factory/DataObjectSchema.js~DataObjectSchema.html)</span></span>

</div>

<div>

<div data-ice="description">

Create DataObjectSchema

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createHypertyDescriptorObject](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createHypertyDescriptorObject)</span></span><span
data-ice="signature">(guid:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
objectName:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
description:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
language:
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>,
sourcePackageURL:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
hypertyType: <span>int</span>, dataObjects: <span>URL.URLList</span>):
<span>[HypertyDescriptor](../../../class/src/catalogue-factory/HypertyDescriptor.js~HypertyDescriptor.html)</span></span>

</div>

<div>

<div data-ice="description">

Create HypertyDescriptor

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createHypertyRuntimeDescriptorObject](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createHypertyRuntimeDescriptorObject)</span></span><span
data-ice="signature">(guid:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
objectName:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
description:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
language:
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>,
sourcePackageURL:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
runtimeType: <span>\*</span>, hypertyCapabilities: <span>\*</span>,
protocolCapabilities: <span>\*</span>):
<span>[HypertyRuntimeDescriptor](../../../class/src/catalogue-factory/HypertyRuntimeDescriptor.js~HypertyRuntimeDescriptor.html)</span></span>

</div>

<div>

<div data-ice="description">

Create HypertyRuntimeDescriptor

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createPolicyEnforcerDescriptorObject](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createPolicyEnforcerDescriptorObject)</span></span><span
data-ice="signature">(guid:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
objectName:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
description:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
language:
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>,
sourcePackageURL:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
configuration: <span>\*</span>, policies: <span>\*</span>):
<span>[PolicyEnforcerDescriptor](../../../class/src/catalogue-factory/PolicyEnforcerDescriptor.js~PolicyEnforcerDescriptor.html)</span></span>

</div>

<div>

<div data-ice="description">

Create PolicyEnforcerDescriptor

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createProtoStubDescriptorObject](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createProtoStubDescriptorObject)</span></span><span
data-ice="signature">(guid:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
objectName:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
description:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
language:
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>,
sourcePackageURL:
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>,
messageSchemas: <span>URL.URL</span>, configuration: <span>\*</span>,
constraints: <span>\*</span>):
<span>[ProtocolStubDescriptor](../../../class/src/catalogue-factory/ProtocolStubDescriptor.js~ProtocolStubDescriptor.html)</span></span>

</div>

<div>

<div data-ice="description">

Create ProtocolStubDescriptor

</div>

</div>

<span class="access" data-ice="access">public</span> <span
class="override" data-ice="override"></span>
<div>

<span
data-ice="name"><span>[createSourcePackage](../../../class/src/catalogue-factory/CatalogueDataObjectFactory.js~CatalogueDataObjectFactory.html#instance-method-createSourcePackage)</span></span><span
data-ice="signature">(sourceCodeClassname: <span>\*</span>, sourceCode:
<span>\*</span>):
<span>[SourcePackage](../../../class/src/catalogue-factory/SourcePackage.js~SourcePackage.html)</span></span>

</div>

<div>

<div data-ice="description">

Create SourcePackage

</div>

</div>

</div>

<div data-ice="constructorDetails">

Public Constructors {#public-constructors data-ice="title"}
-------------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">constructor</span><span data-ice="signature">(validation: <span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span>, schema: <span>URL.URL </span>)</span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber29)</span></span> </span> {#instance-constructor-constructor data-ice="anchor"}

<div data-ice="description">

Constructor

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params data-ice="title"}

Name Type Attribute Description validation
<span>[boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)</span>
schema <span>URL.URL </span> link to the schema

</div>

</div>

</div>

</div>

<div data-ice="methodDetails">

Public Methods {#public-methods data-ice="title"}
--------------

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createCatalogueDataObject</span><span data-ice="signature">(guid: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, type: <span>[CatalogueObjectType](../../../variable/index.html#static-variable-CatalogueObjectType)</span>, objectName: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, description: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, language: <span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>, sourcePackageURL: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>): <span>[CatalogueDataObject](../../../class/src/catalogue-factory/CatalogueDataObject.js~CatalogueDataObject.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber43)</span></span> </span> {#instance-method-createCatalogueDataObject data-ice="anchor"}

<div data-ice="description">

Create CatalogueDataObject

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-1 data-ice="title"}

Name Type Attribute Description guid
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Catalogue Global Unique identifier of the Catalogue Object

type
<span>[CatalogueObjectType](../../../variable/index.html#static-variable-CatalogueObjectType)</span>
Indicates the type of Catalogue Data Object

objectName
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Human-understandable name of the catalogue object

description
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
language
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>
Programming language used in the SourcePackage

sourcePackageURL
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
URL from where the source code package of the corresponding catalogue
object can be downloaded.

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  --------------------------------------------------------------------------------------------------------------------------
  <span>[CatalogueDataObject](../../../class/src/catalogue-factory/CatalogueDataObject.js~CatalogueDataObject.html)</span>
  --------------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createDataObjectSchema</span><span data-ice="signature">(guid: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, objectName: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, description: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, language: <span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>, sourcePackageURL: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>): <span>[DataObjectSchema](../../../class/src/catalogue-factory/DataObjectSchema.js~DataObjectSchema.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber179)</span></span> </span> {#instance-method-createDataObjectSchema data-ice="anchor"}

<div data-ice="description">

Create DataObjectSchema

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-2 data-ice="title"}

Name Type Attribute Description guid
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Catalogue Global Unique identifier of the Catalogue Object

objectName
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Human-understandable name of the catalogue object

description
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
language
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>
Programming language used in the SourcePackage

sourcePackageURL
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
URL from where the source code package of the corresponding catalogue
object can be downloaded.

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------------------------------------------------------------------------------------------------------
  <span>[DataObjectSchema](../../../class/src/catalogue-factory/DataObjectSchema.js~DataObjectSchema.html)</span>
  -----------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createHypertyDescriptorObject</span><span data-ice="signature">(guid: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, objectName: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, description: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, language: <span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>, sourcePackageURL: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, hypertyType: <span>int</span>, dataObjects: <span>URL.URLList</span>): <span>[HypertyDescriptor](../../../class/src/catalogue-factory/HypertyDescriptor.js~HypertyDescriptor.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber67)</span></span> </span> {#instance-method-createHypertyDescriptorObject data-ice="anchor"}

<div data-ice="description">

Create HypertyDescriptor

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-3 data-ice="title"}

Name Type Attribute Description guid
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Catalogue Global Unique identifier of the Catalogue Object

objectName
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Human-understandable name of the catalogue object

description
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
language
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>
Programming language used in the SourcePackage

sourcePackageURL
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
URL from where the source code package of the corresponding catalogue
object can be downloaded.

hypertyType <span>int</span> A tag that identifies what type of hyperty
is described in the object.

dataObjects <span>URL.URLList</span> Defines the Data Object Schemas
supported by the Hyperty through a list of Catalogue URLs from where
these schemas can be reached.

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  --------------------------------------------------------------------------------------------------------------------
  <span>[HypertyDescriptor](../../../class/src/catalogue-factory/HypertyDescriptor.js~HypertyDescriptor.html)</span>
  --------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createHypertyRuntimeDescriptorObject</span><span data-ice="signature">(guid: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, objectName: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, description: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, language: <span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>, sourcePackageURL: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, runtimeType: <span>\*</span>, hypertyCapabilities: <span>\*</span>, protocolCapabilities: <span>\*</span>): <span>[HypertyRuntimeDescriptor](../../../class/src/catalogue-factory/HypertyRuntimeDescriptor.js~HypertyRuntimeDescriptor.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber124)</span></span> </span> {#instance-method-createHypertyRuntimeDescriptorObject data-ice="anchor"}

<div data-ice="description">

Create HypertyRuntimeDescriptor

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-4 data-ice="title"}

Name Type Attribute Description guid
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Catalogue Global Unique identifier of the Catalogue Object

objectName
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Human-understandable name of the catalogue object

description
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
language
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>
Programming language used in the SourcePackage

sourcePackageURL
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
URL from where the source code package of the corresponding catalogue
object can be downloaded.

runtimeType <span>\*</span> hypertyCapabilities <span>\*</span>
Supported capabilities to execute Hyperties

protocolCapabilities <span>\*</span> Supported capabilities to execute
Protocol Stubs

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------------------------------------------------------------------------------------------------------------------------------
  <span>[HypertyRuntimeDescriptor](../../../class/src/catalogue-factory/HypertyRuntimeDescriptor.js~HypertyRuntimeDescriptor.html)</span>
  -----------------------------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createPolicyEnforcerDescriptorObject</span><span data-ice="signature">(guid: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, objectName: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, description: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, language: <span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>, sourcePackageURL: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, configuration: <span>\*</span>, policies: <span>\*</span>): <span>[PolicyEnforcerDescriptor](../../../class/src/catalogue-factory/PolicyEnforcerDescriptor.js~PolicyEnforcerDescriptor.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber153)</span></span> </span> {#instance-method-createPolicyEnforcerDescriptorObject data-ice="anchor"}

<div data-ice="description">

Create PolicyEnforcerDescriptor

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-5 data-ice="title"}

Name Type Attribute Description guid
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Catalogue Global Unique identifier of the Catalogue Object

objectName
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Human-understandable name of the catalogue object

description
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
language
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>
Programming language used in the SourcePackage

sourcePackageURL
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
URL from where the source code package of the corresponding catalogue
object can be downloaded.

configuration <span>\*</span> policies <span>\*</span>

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------------------------------------------------------------------------------------------------------------------------------
  <span>[PolicyEnforcerDescriptor](../../../class/src/catalogue-factory/PolicyEnforcerDescriptor.js~PolicyEnforcerDescriptor.html)</span>
  -----------------------------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createProtoStubDescriptorObject</span><span data-ice="signature">(guid: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, objectName: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, description: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, language: <span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>, sourcePackageURL: <span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>, messageSchemas: <span>URL.URL</span>, configuration: <span>\*</span>, constraints: <span>\*</span>): <span>[ProtocolStubDescriptor](../../../class/src/catalogue-factory/ProtocolStubDescriptor.js~ProtocolStubDescriptor.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber95)</span></span> </span> {#instance-method-createProtoStubDescriptorObject data-ice="anchor"}

<div data-ice="description">

Create ProtocolStubDescriptor

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-6 data-ice="title"}

Name Type Attribute Description guid
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Catalogue Global Unique identifier of the Catalogue Object

objectName
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
Human-understandable name of the catalogue object

description
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
language
<span>[DataObjectSourceLanguage](../../../variable/index.html#static-variable-DataObjectSourceLanguage)</span>
Programming language used in the SourcePackage

sourcePackageURL
<span>[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)</span>
URL from where the source code package of the corresponding catalogue
object can be downloaded.

messageSchemas <span>URL.URL</span> Defines the Schema describing the
Message Data Model used by the Hyperty through the Catalogue URL from
where the Message schema can be reached. If not defined, by default it
is assumed the standard Message Model is used.

configuration <span>\*</span> Data required to configure the
ProtocolStub

constraints <span>\*</span> Describes capabilities required from the
Hyperty Runtime in order to be able to execute the ProtocolStub

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  -----------------------------------------------------------------------------------------------------------------------------------
  <span>[ProtocolStubDescriptor](../../../class/src/catalogue-factory/ProtocolStubDescriptor.js~ProtocolStubDescriptor.html)</span>
  -----------------------------------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

<div class="detail" data-ice="detail">

### <span class="access" data-ice="access">public</span> <span data-ice="name">createSourcePackage</span><span data-ice="signature">(sourceCodeClassname: <span>\*</span>, sourceCode: <span>\*</span>): <span>[SourcePackage](../../../class/src/catalogue-factory/SourcePackage.js~SourcePackage.html)</span></span> <span class="right-info"> <span data-ice="source"><span>[source](../../../file/src/catalogue-factory/CatalogueDataObjectFactory.js.html#lineNumber198)</span></span> </span> {#instance-method-createSourcePackage data-ice="anchor"}

<div data-ice="description">

Create SourcePackage

</div>

<div data-ice="properties">

<div data-ice="properties">

#### Params: {#params-7 data-ice="title"}

Name Type Attribute Description sourceCodeClassname <span>\*</span> The
Class-name of the SourceCode

sourceCode <span>\*</span> The source code of the catalogue object

</div>

</div>

<div class="return-params" data-ice="returnParams">

#### Return:

  --------------------------------------------------------------------------------------------------------
  <span>[SourcePackage](../../../class/src/catalogue-factory/SourcePackage.js~SourcePackage.html)</span>
  --------------------------------------------------------------------------------------------------------

<div data-ice="returnProperties">

</div>

</div>

</div>

</div>

</div>
Generated by [ESDoc<span
data-ice="esdocVersion">(0.4.3)</span>](https://esdoc.org)
