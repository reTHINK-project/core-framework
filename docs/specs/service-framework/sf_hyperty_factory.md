**This is OUTDATED!! Most updated version is [here](https://github.com/reTHINK-project/dev-service-framework/tree/d3.2-working-docs/docs/specs/service-framework)**
===================================================================================================================================================================

### Hyperty Decriptor, Catalogue Data Objects

The Hyperty Decriptor module implements a couple of classes from the specified [CatalogueDataObject](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue) in D2.2.

####class CatalogueDataObject The CatalogueDataObject Class has following class attributes:* `guid` - string* `id ?` - string (to be renamed to name based on discussions [here](https://github.com/reTHINK-project/architecture/issues/64#issuecomment-152624482)\)* `classname` - string* `description` - string* `domain ?` - URL.DomainURL string (to be removed based on discussions [here](https://github.com/reTHINK-project/architecture/issues/64#issuecomment-152624482)\)* `sourceCode` - URL.URL

####HypertyType (Enumeration)`
var HypertyType = new enums.Enum("COMMUNICATOR", "IDENTITY", "CONTEXT");
`

####class HypertyDescriptor extends CatalogueDataObject* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

####class ProtoStubDescriptor extends CatalogueDataObject (Sync with Steffen)* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

####class HypertyRuntimeDescriptor extends CatalogueDataObject* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

####class PolicyEnforcerDescriptor extends CatalogueDataObject* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

####class DataObjectsSchema extends CatalogueDataObject* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

#### class CatalogueDataObjectFactory

The CatalogueDataObjectFactory creates data objects according to the [Catalogue Data Object Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue) and the different descriptor sub classed.

####Functions* `constructor()`* `createCatalogueDataObject(String jsonString) : <CatalogueDataObject>`* `createHypertyDescriptorObject(String jsonString) : <HypertyDescriptor>`* `createProtoStubDescriptorObject(string jsonString) : <ProtoStubDescriptor>`* `createHypertRuntimeDescriptorObject(jsonString) : <HypertRuntimeDescriptor>`* `createPolicyEnforcerDescriptorObject(jsonString) : <PolicyEnforcerDescriptor>`* `createDataObjectSchema(jsonString) : <DataObjectsSchema>`
