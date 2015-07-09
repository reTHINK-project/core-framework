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
    "jquery": "npm:jquery@2.1.4",
    "lodash": "bower:lodash@3.10.0",
    "postal.federation": "bower:postal.federation@0.2.4",
    "postal.js": "bower:postal.js@1.0.6",
    "postal.xframe": "bower:postal.xframe@0.3.2",
    "riveter": "bower:riveter@0.1.2",
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
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.6.15": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:jquery@2.1.4": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

