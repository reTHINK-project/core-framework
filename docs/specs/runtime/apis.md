Some considerations about the API for the architecture components.
Defining some aspects of the API and simulate some use case scenarios could help to envision architecture changes in the future.

##Router (Draft)
The main responsibility of the Router is to select the appropriate channel for communication between Hyperties.
the Hyperty will select the channel for example with a call to ```var channel = router.select('address', 'p2p', 'video\audio')```
Definition for select function could be in TypeScript -> ```function select(address: string, delivery: string, type: string): Channel```
* address -> hyperty end point address or multi channel name to subcribe
* delivery -> type of delivery (p2p, multi, tree-mesh, ...). p2p is a direct one to one connection between peers, and multi is a one to many.
* type -> data type to send/receive (video/audio stream, signal, binary, ...)

...TODO
Examples:

...TODO
Study a way of extending **delivery** and **type** options ?

...TODO
If hyperty address doesn't have any reference to domain, maybe should be necessary a domain field.

... TODO (tree-mesh delivery !!)
Study of Peer5 https://www.peer5.com/ communication scenario, and how can this be implemented with the actual architecture?
