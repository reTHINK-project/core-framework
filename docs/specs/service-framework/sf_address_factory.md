### Address Resource Factory

The Address Resource Factory creates the different types of URLs required as specified [here](https://github.com/reTHINK-project/architecture/tree/master/docs/datamodel/address). 

#####Address Data Model

All the attributes below are internally getter/setters functions. In the setter functions value validation will be included. 

* ```href``` - It allows to get and set the complete URL string.
* ```scheme``` - It allows to get and set the scheme of the URL. In traditional URL it defines the protocol for which the URL was intended for.
* ```username``` - It allows to get and set the username of the URL.
* ```password``` - It allows to get and set the password of the URL.
* ```host``` - It allows to get and set the host of the URL.
* ```hostname``` - It allows to get and set the hostname of the URL.
* ```port``` - It allows to get and set the port of the URL.
* ```pathname``` - It allows to get and set the pathname of the URL.
* ```search``` - It allows to get and set the query string of the URL.
* ```hash``` - It allows to get and set the fragment identifier of the URL.

###Functions
* ```constructor(url, base)``` - Constructor function
* ```validateScheme()``` - this function allows to validate if the URL is totally compliant with any of the schemes define for reTHINK. 
* ```urlToASCII(domain)``` - This function return the URL in ASCII code
* ```urlToUnicode(domain)``` - This function returns the URL in unicode


-----------------------
Define and specify functionalities from the [dynamic views](https://github.com/reTHINK-project/core-framework/tree/master/docs/specs/runtime/dynamic-view) that relate in creating and managing the Data Objects.
