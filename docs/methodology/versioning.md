#Versioning

This is the Quobis' proposal for  versioning and code management of the project. The goal was to keep a very simple scheme given some freedom to each partner.

1. For each project there is a master branch where only Repo Administrators can push code and make releases. 
2. The code in this master branch will be stable and tested code, which will include the unit tests associated to it. During the first weeks/months the code in master may not be usable, but after this brief period the code there should be usable. 
3. To add new features, development branches should be created. 
4. dev branch names are: *dev-\<milestone\>* or just *develop*
5. It is strongly recommended review the tests before pushing new code to the branch. The developer must make sure that the current tests are still valid and they make sense with the new code. New test must also be added when new code is pushed in the repository.
6. Dev branches should be used just for development tasks or internal tests but they shouldn't be used by other partners if their are not involved in the development of that project.
7. To refer exact point in the project code timeline, we can use tags in master branch. Tags are friendly labels for commits. For example, if you have susscesully tested that some new code implements a feature, after merging and commiting the changes in master branch you will create a label.
8. We can use for label names the following scheme: *\<major version\>.\<medium version\>.\<Minor version\>*
increasing the numbers respect the version before depending on the changes included in the merge (see version numbering reference below).
9. When you test your code with projects with other partners by default the code from master branch should be used, however you can be notified that a specific tag should be used. Any contribution to be deployed on the testbed has to be tested using the docker image that WP-6 will provide as a OS-baseline for all testbed deployments.
10. Partners which are in charge of different projects can keep a coherent versioning numbering in the tags of their master branches.
11. It is strongly recommended to keep updated the Readme file indicating the tag versions of other projects the code has been tested with (in case the code it applies for that project).
12. This scheme is intented to be valid during the life of reTHINK project. Once the project is finished and the code is fully functional a branch can be created to keep the final code and master can be left for development.

##Version numbering reference. 

The versioning scheme is a way to let the other members of the team know what they can expect from the new version of a module.

It is important to pay attention to it, specially when the code is going to be used by other repositories. The versions must be properly indicated as git labels.

We propose for reTHINK project the convention below to increase the versioning number:

* *Major version*: major changes applied to the code structure of the module, general changes in the architecture. *Normally a major version will break the compability with previous versions so a general revision of the code using the new version of the module must be done.*   
* *Medium version*: addition/modification/removal of new methods/functions. Compability may be broken in the specific methods/fucntions which have been modified. *The changelog/commit lits must be checked in order to avoid compability issues with the code which uses a previos medium version of the module.* 
* _Minor version_: just fixes for existing issues or code improvements which does not add/modify/remove any  feature. Several fixes can be added in each minor version. *Minor version should not break compability with previous minor versions, however the fixes must be checked to make sure they will not have an impact in the code which uses the module.* 
