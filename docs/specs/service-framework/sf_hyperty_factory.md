### Hyperty Decriptor, Catalogue Data Objects
The Hyperty Decriptor module implements a couple of classes from the specified [CatalogueDataObject](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue) in D2.2.

####Class CatalogueDataObject
The CatalogueDataObject Class has following class attributes:
* ```guid``` - string
* ```id``` - string
* ```classname``` - string
* ```description``` - string
* ```domain``` - URL.DomainURL
* ```sourceCode``` - URL.URL


####HypertyType (Enumeration)
``` 
var HypertyType = new enums.Enum("COMMUNICATOR", "IDENTITY", "CONTEXT");
```

####Class HypertyDescriptor extends CatalogueDataObject
* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)
 
#####Class ProtoStubDescriptor extends CatalogueDataObject (Sync with Steffen)
* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

#####Class HypertyRuntimeDescriptor extends CatalogueDataObject
* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

#####Class PolicyEnforcerDescriptor extends CatalogueDataObject
* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)

#####Class DataObjectsSchema extends CatalogueDataObject
* class attributes as specified in [D2.2 Data Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue)


#### class CatalogueDataObjectFactory
The CatalogueDataObjectFactory creates data objects according to the [Catalogue Data Object Model](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/message) and the different descriptor sub classed. 

####Methods
* ```constructor()```
* ```createCatalogueDataObject(String jsonString)```
* ```createHypertyDescriptorObject(String jsonString)```
* ```createProtoStubDescriptorObject(string jsonString)```
* ```createHypertRuntimeDescriptor(jsonString)```
* ```createPolicyEnforcerDescriptor(jsonString)```
* ```createDataObjectSchema(jsonString) ```

