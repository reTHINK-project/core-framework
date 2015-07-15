System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm/github/*.js",
    "npm:*": "jspm/npm/*.js",
    "bower:*": "jspm/bower/*.js"
  }
});

System.config({
  "map": {
    "babel": "npm:babel-core@5.6.15",
    "babel-runtime": "npm:babel-runtime@5.6.15",
    "core-js": "npm:core-js@0.9.18",
    "es6-promise": "npm:es6-promise@2.3.0",
    "jquery": "npm:jquery@2.1.4",
    "lodash": "bower:lodash@3.10.0",
    "postal.federation": "bower:postal.federation@0.2.4",
    "postal.js": "bower:postal.js@1.0.6",
    "postal.xframe": "bower:postal.xframe@0.3.2",
    "riveter": "bower:riveter@0.1.2",
    "serviceworker-cache-polyfill": "npm:serviceworker-cache-polyfill@3.0.0",
    "underscore": "npm:underscore@1.8.3",
    "bower:postal.federation@0.2.4": {
      "lodash": "bower:lodash@2.4.2"
    },
    "bower:postal.js@1.0.6": {
      "lodash": "bower:lodash@3.10.0"
    },
    "bower:postal.xframe@0.3.2": {
      "lodash": "bower:lodash@2.4.2"
    },
    "bower:riveter@0.1.2": {
      "underscore": "bower:underscore@1.5.2"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});
