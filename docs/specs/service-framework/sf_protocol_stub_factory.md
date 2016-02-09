**This is OUTDATED!! Most updated version is [here](https://github.com/reTHINK-project/dev-service-framework/tree/d3.2-working-docs/docs/specs/service-framework)**
===================================================================================================================================================================

### Protocol Stub Descriptor Factory

The Protocol Stub Descriptor Factory creates Data Objects that model each Protocol Stub as specified [here](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/hyperty-catalogue) used to connect to a certain Service Provider domains.

*Personal remark: The dynamic views do not help that much, because the process of creating these objects is not described. Also the semantics and real content of the attributes is not yet clear. Therefore this is just a plain "translation" of what was modelled so far.*

#### Class [RuntimeConstraintList](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/RuntimeConstraintList.json)

-	extends the ReThinkType[List](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/RethinkType/List.json)
-	Holds a list of RuntimeConstraint Objects
-	no additional **attributes** or **methods** (assuming that basic list management functions like add, remove etc. are inherited from ReThinkType.List)

#### Class [RuntimeConstraint](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/RuntimeConstraint.json)

-	extends the ReThinkType[ListElement](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/RethinkType/ListElement.json)
-	represents an instance of a RuntimeConstraint Object

The RuntimeConstraint class holds following **attributes**:* `constraint` - an instance of [HypertyRuntimeDescriptor.RuntimeProtocolCapabilityType](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/HypertyRuntimeDescriptor/RuntimeProtocolCapability.json) (semantic description ?WP2?)

The RuntimeConstraint class provides following **methods**:* `constructor( HypertyRuntimeDescriptor.RuntimeProtocolCapabilityType type )`* `getConstraint()` ... returns [HypertyRuntimeDescriptor.RuntimeProtocolCapabilityType](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/HypertyRuntimeDescriptor/RuntimeProtocolCapabilityType.json)

#### Class [ConfigurationDataList](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/ConfigurationDataList.json)

-	extends the ReThinkType[List](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/RethinkType/List.json)
-	Holds a list of ConfigurationData Objects
-	no additional **attributes** or **methods** (assuming that basic list management functions like add, remove etc. are inherited from ReThinkType.List)

#### Class [ConfigurationData](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/ConfigurationData.json)

-	extends the ReThinkType[ListElement](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/RethinkType/ListElement.json)
-	represents an instance of a [ConfigurationData](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/ConfigurationData.json) Object

The ConfigurationData class defines no additional **attributes**.

The ConfigurationData class provides following **methods**:* `constructor( ConfigurationData configData )`* `getConfigurationData()` ... returns a [ConfigurationData](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/ConfigurationData.json) instance representing a particular configuration item

#### Class [ProtoStubDescriptor](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/ProtoStubDescriptor.json)

The ProtoStubDescriptor class holds following **attributes**:* `messageSchemas` - [URL.HypertyCatalogueURL](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/URL/HypertyCatalogueURL.json) a URL pointing to the corresponding Messages schema descriptor in the Catalogue* `configuration` - required runtime protocol capabilities (List of RuntimeConstraints)* `constraints` - data needed to configure the Protocol stub deployment in the runtime (List of ConfigurationData)

The ProtoStubDescriptor class holds following **methods**:

-	`constructor( URL.HypertyCatalogueURL url, ConfigurationDataList configDataList,  RuntimeConstraintList constraints)`
-	`getConfigurationDataList()` ... returns a [ConfigurationDataList](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/ConfigurationDataList.json) representing the list of ConfigurationData
-	`getConstraints()` ... returns [RuntimeConstraintList](https://github.com/reTHINK-project/architecture/blob/master/docs/datamodel/json-schema/ProtoStubDescriptor/RuntimeConstraintList.json)
