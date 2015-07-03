### Data Synchronisation Communication implementation

<!--
@startuml "hyperty-data-synchronisation.png"


	node "Hyperty Instance" as H {

		node "Data Object" as Obj {

		}
	}


	node "Syncer" as Syncer {

	}

	node "Router" as Router {

	}

	Obj -down- Syncer : observe and report to syncer\n(based on object.observe API)

	Syncer -down- Router : sync-api \n(send/receive synchronisation messages)


@enduml
-->

![hyperty data synchronisation communication model](hyperty-data-synchronisation.png)

Usage of the emerging [object.observe](https://developer.mozilla.org/pt-PT/docs/Web/JavaScript/Reference/Global_Objects/Object/observe) javascript API to support Hyperty communication based on object synchronisation. If not supported by the native runtime we can use a few [existing libraries](https://github.com/MaxArt2501/object-observe).

The synchronisation API could be based on [meteor DDP protocol](https://github.com/meteor/meteor/blob/devel/packages/ddp/DDP.md) that could be implemented by Router component.