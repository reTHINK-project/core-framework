// To extract WP3 Requirements from Github
var GitHubApi = require("github");


var github = new GitHubApi({
    // required
    version: "3.0.0",
    // optional
    debug: true,
    protocol: "https",
    host: "api.github.com", // should be api.github.com for GitHub
    pathPrefix: "", // for some GHEs; none for GitHub
    timeout: 5000,
    headers: {
        "user-agent": "My-Cool-GitHub-App" // GitHub is happy with a unique user agent
    }
});

github.authenticate({
    type: "oauth",
    token: "85c24218fcfef098b9276ee7f862c4d3657b51f3"
});

// collect Messaging Node requirements

github.issues.repoIssues({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "rethink-project",
    repo: "core-framework",
    labels: "Messaging Node Requirement"

}, function(err, res) {
//    console.log(JSON.stringify(res));

    var requirements = "## Messaging Node Requirements\n";
//    requirements = requirements + "| **Requirement Name** |</br> **Description** | <br/> | --- | --- |";

    for ( var i = 0 ; i<res.length; i++) {
    console.log(res[i].title);

    requirements = requirements + "- **" + res[i].title + ":** " + res[i].body +"\n";

    }


   var fs = require('fs');

    fs.writeFile("messaging-requirements.md", requirements);



});

// collect runtime requirements

github.issues.repoIssues({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "rethink-project",
    repo: "core-framework",
    labels: "Runtime Requirement"

}, function(err, res) {
//    console.log(JSON.stringify(res));

    var requirements = "## Runtime Node Requirements\n";
//    requirements = requirements + "| **Requirement Name** |</br> **Description** | <br/> | --- | --- |";

    for ( var i = 0 ; i<res.length; i++) {
    console.log(res[i].title);

    requirements = requirements + "- **" + res[i].title + ":** " + res[i].body +"\n";
    }

   var fs = require('fs');

    fs.writeFile("runtime-requirements.md", requirements);



});


// collect runtime requirements

github.issues.repoIssues({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "rethink-project",
    repo: "core-framework",
    labels: "Network QoS Requirement"

}, function(err, res) {
//    console.log(JSON.stringify(res));

    var requirements = "## Network QoS  Requirements\n";
//    requirements = requirements + "| **Requirement Name** |</br> **Description** | <br/> | --- | --- |";

    for ( var i = 0 ; i<res.length; i++) {
    console.log(res[i].title);

    requirements = requirements + "- **" + res[i].title + ":** " + res[i].body +"\n";
    }

   var fs = require('fs');

    fs.writeFile("qos-requirements.md", requirements);



});


// collect service framework requirements

github.issues.repoIssues({
    // optional:
    // headers: {
    //     "cookie": "blahblah"
    // },
    user: "rethink-project",
    repo: "core-framework",
    labels: "Service Framework Requirement"

}, function(err, res) {
//    console.log(JSON.stringify(res));

    var requirements = "## Service Framework  Requirements</br></br>\n";
//    requirements = requirements + "| **Requirement Name** |</br> **Description** | <br/> | --- | --- |";

    for ( var i = 0 ; i<res.length; i++) {
    console.log(res[i].title);

    requirements = requirements + "- **" + res[i].title + ":** " + res[i].body +"\n";
    }

   var fs = require('fs');

    fs.writeFile("framework-requirements.md", requirements);



});
