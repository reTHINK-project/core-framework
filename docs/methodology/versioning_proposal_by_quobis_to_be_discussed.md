#Versioning proposal.

This is the Quobis' proposal for  versioning and code management of the project. The goal was to keep a very simple scheme given some freedom to each partner.

1. For each project wthere will be a master branch as usual.
2. The code in this master branch will stable and tested code, which will include the unit tests associated to it. During the first weeks/months the code in master may not be usable, but after this brief period the code there should be usable. 
3. To add new features, development branches should be created. 
4. A proposal for the dev branch names could be: *dev-\<milestone\>*
5. *just push with dev branche when tests are success*
5. Dev branches should be used just for development tasks or internal tests but they shouldn't be used by other partners if their are not involved in the development of that project.
6. To refer exact point in the project code timeline, we can use tags in master branch. Tags are friendly labels for commits. For example, if you have susscesully tested that some new code implements a feature, after merging and commiting the changes in master branch you will create a label.
7. We can use for label names the following scheme: *\<project name\>\-\<major version\>.\<medium version\>.\<Minor version\>*
increasing the numbers respect the version before depending on the changes included in the merge (see version numbering reference below).
8. When you test your code with projects with other partners by default the code from master branch should be used, however you can be notified that a specific tag should be used. Any contribution to be deployed on the testbed has to be tested using the docker image that WP-6 will provide as a OS-baseline for all testbed deployments.
9. Partners which are in charge of different projects can keep a coherent versioning numbering in the tags of their master branches.
10. It is strongly recommended to keep updated the Readme file indicating the tag versions of other projects the code has been tested with (in case the code it applies for that project).
11. This scheme is intented to be valid during the life of reTHINK project. Once the project is finished and the code is fully functional a branch can be created to keep the final code and master can be left for development.

##Version numbering reference. 
* Major version: major changes applied to the structure of the code, general changes in the architecture.    
* Medium version: new features added.
* Minor version: just fixes added
