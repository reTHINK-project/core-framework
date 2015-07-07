### Identity Management dynamic view

**Kevin contribution:**

![Kevin proposal](identity-kevin.png)

**questions and answers as discussed on 7th July meeting:**

* **Q: Identity Module similar to Runtime Arch Identities Container?**
* A: Yes
* **Q: If Yes, I would separate authorisation related functionalities from IDSelector/Vault to support other types of policies**
* A: agreed
* **Q: Endo IdP Proxy / Exo Proxy seems to be more related with protocol stubs ie it is a stub that enables runtime components to interact with back-end side Identity Management functionalities. Anyway, not clear the differences between the two**
* A: In principle IdP Proxy can be partially supported by a IdP protocol stub, but some functionalities can be supported by an Hyperty or by the Identities Container. Such separation requires further study and work on specific Use Cases. Endo is to handle "my identity" and Exo is to verify the Identities of others.
* **Q: Registry / Discovery are runtime local?**
* A: yes


#### [User Registration](user-registration.md)

#### [Discover Protocol Stub URL](discover-protostub-url.md)

#### [Login into Domain](domain-login.md)

#### [Discover Hyperty URL](discover-hyperty-url.md)

#### [Associate User Identity to Hyperty Instance](user-to-hyperty-binding.md)

#### [Discover User](discover-user.md)

#### [Assert User Identity](user-identity-assertion.md)

#### [User Profile Management](user-profile-management.md)

