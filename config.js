System.config({
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime"
    ]
  },
  "paths": {
    "*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  },
  "bundles": {
    "app-bundle": [
      "npm:process@0.10.1/browser",
      "github:aurelia/history@0.6.1/aurelia-history",
      "npm:process@0.10.1",
      "github:aurelia/history@0.6.1",
      "github:jspm/nodelibs-process@0.1.1/index",
      "github:jspm/nodelibs-process@0.1.1",
      "npm:core-js@0.9.18/client/shim.min",
      "npm:core-js@0.9.18",
      "github:aurelia/history-browser@0.6.2/aurelia-history-browser",
      "github:aurelia/history-browser@0.6.2",
      "github:aurelia/path@0.8.1/aurelia-path",
      "github:aurelia/path@0.8.1",
      "github:aurelia/loader@0.8.3/aurelia-loader",
      "github:aurelia/loader@0.8.3",
      "github:aurelia/metadata@0.7.1/aurelia-metadata",
      "github:aurelia/metadata@0.7.1",
      "github:aurelia/loader-default@0.9.1/aurelia-loader-default",
      "github:aurelia/loader-default@0.9.1",
      "github:aurelia/logging@0.6.2/aurelia-logging",
      "github:aurelia/route-recognizer@0.6.1/aurelia-route-recognizer",
      "github:aurelia/event-aggregator@0.6.2/aurelia-event-aggregator",
      "github:aurelia/task-queue@0.6.1/aurelia-task-queue",
      "github:aurelia/templating-router@0.14.1/router-view",
      "github:aurelia/templating-router@0.14.1/route-href",
      "github:aurelia/logging@0.6.2",
      "github:aurelia/route-recognizer@0.6.1",
      "github:aurelia/event-aggregator@0.6.2",
      "github:aurelia/task-queue@0.6.1",
      "github:aurelia/dependency-injection@0.9.1/aurelia-dependency-injection",
      "github:aurelia/binding@0.8.4/aurelia-binding",
      "github:aurelia/dependency-injection@0.9.1",
      "github:aurelia/binding@0.8.4",
      "github:aurelia/templating@0.13.15/aurelia-templating",
      "github:aurelia/templating@0.13.15",
      "github:aurelia/router@0.10.3/aurelia-router",
      "github:aurelia/templating-router@0.14.1/route-loader",
      "github:aurelia/router@0.10.3",
      "github:aurelia/templating-router@0.14.1/aurelia-templating-router",
      "github:aurelia/templating-router@0.14.1",
      "github:aurelia/templating-resources@0.13.3/if",
      "github:aurelia/templating-resources@0.13.3/with",
      "github:aurelia/templating-resources@0.13.3/repeat",
      "github:aurelia/templating-resources@0.13.3/show",
      "github:aurelia/templating-resources@0.13.3/global-behavior",
      "github:aurelia/templating-resources@0.13.3/sanitize-html",
      "github:aurelia/templating-resources@0.13.3/replaceable",
      "github:aurelia/templating-resources@0.13.3/focus",
      "github:aurelia/templating-resources@0.13.3/compose",
      "github:aurelia/templating-resources@0.13.3/aurelia-templating-resources",
      "github:aurelia/templating-resources@0.13.3",
      "github:aurelia/templating-binding@0.13.2/aurelia-templating-binding",
      "github:aurelia/templating-binding@0.13.2",
      "github:aurelia/http-client@0.10.2/aurelia-http-client",
      "github:aurelia/http-client@0.10.2",
      "github:aurelia/logging-console@0.6.1/aurelia-logging-console",
      "github:aurelia/logging-console@0.6.1",
      "github:aurelia/framework@0.13.4/aurelia-framework",
      "github:aurelia/framework@0.13.4",
      "github:aurelia/bootstrapper@0.14.1/aurelia-bootstrapper",
      "github:aurelia/bootstrapper@0.14.1",
      "github:benib/aurelia-leaflet@0.0.2/index",
      "github:benib/aurelia-leaflet@0.0.2",
      "quickstart",
      "github:github/fetch@0.9.0/fetch",
      "github:github/fetch@0.9.0",
      "main",
      "examples",
      "app"
    ]
  },
  "defaultJSExtensions": true
});

System.config({
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.8.4",
    "aurelia-bootstrapper": "github:aurelia/bootstrapper@0.14.1",
    "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
    "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
    "aurelia-fetch-client": "github:aurelia/fetch-client@0.1.1",
    "aurelia-framework": "github:aurelia/framework@0.13.4",
    "aurelia-history": "github:aurelia/history@0.6.1",
    "aurelia-history-browser": "github:aurelia/history-browser@0.6.2",
    "aurelia-http-client": "github:aurelia/http-client@0.10.2",
    "aurelia-loader": "github:aurelia/loader@0.8.3",
    "aurelia-loader-default": "github:aurelia/loader-default@0.9.1",
    "aurelia-logging": "github:aurelia/logging@0.6.2",
    "aurelia-metadata": "github:aurelia/metadata@0.7.1",
    "aurelia-path": "github:aurelia/path@0.8.1",
    "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
    "aurelia-router": "github:aurelia/router@0.10.3",
    "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
    "aurelia-templating": "github:aurelia/templating@0.13.15",
    "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.2",
    "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.3",
    "aurelia-templating-router": "github:aurelia/templating-router@0.14.1",
    "aurelia/fetch-client": "github:aurelia/fetch-client@0.1.1",
    "babel": "npm:babel-core@5.8.19",
    "babel-runtime": "npm:babel-runtime@5.8.19",
    "benib/aurelia-leaflet": "github:benib/aurelia-leaflet@0.0.2",
    "bootstrap": "github:twbs/bootstrap@3.3.5",
    "core-js": "npm:core-js@0.9.18",
    "css": "github:systemjs/plugin-css@0.1.13",
    "fetch": "github:github/fetch@0.9.0",
    "font-awesome": "npm:font-awesome@4.4.0",
    "github:aurelia/binding@0.8.4": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/bootstrapper@0.14.1": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-framework": "github:aurelia/framework@0.13.4",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-history-browser": "github:aurelia/history-browser@0.6.2",
      "aurelia-loader-default": "github:aurelia/loader-default@0.9.1",
      "aurelia-logging-console": "github:aurelia/logging-console@0.6.1",
      "aurelia-router": "github:aurelia/router@0.10.3",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "aurelia-templating-binding": "github:aurelia/templating-binding@0.13.2",
      "aurelia-templating-resources": "github:aurelia/templating-resources@0.13.3",
      "aurelia-templating-router": "github:aurelia/templating-router@0.14.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/dependency-injection@0.9.1": {
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/event-aggregator@0.6.2": {
      "aurelia-logging": "github:aurelia/logging@0.6.2"
    },
    "github:aurelia/fetch-client@0.1.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/framework@0.13.4": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/history-browser@0.6.2": {
      "aurelia-history": "github:aurelia/history@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/http-client@0.10.2": {
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/loader-default@0.9.1": {
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1"
    },
    "github:aurelia/loader@0.8.3": {
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "core-js": "npm:core-js@0.9.18",
      "webcomponentsjs": "github:webcomponents/webcomponentsjs@0.6.3"
    },
    "github:aurelia/metadata@0.7.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/route-recognizer@0.6.1": {
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/router@0.10.3": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-history": "github:aurelia/history@0.6.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-route-recognizer": "github:aurelia/route-recognizer@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-binding@0.13.2": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-templating": "github:aurelia/templating@0.13.15"
    },
    "github:aurelia/templating-resources@0.13.3": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "aurelia-templating": "github:aurelia/templating@0.13.15",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:aurelia/templating-router@0.14.1": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-router": "github:aurelia/router@0.10.3",
      "aurelia-templating": "github:aurelia/templating@0.13.15"
    },
    "github:aurelia/templating@0.13.15": {
      "aurelia-binding": "github:aurelia/binding@0.8.4",
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.9.1",
      "aurelia-html-template-element": "github:aurelia/html-template-element@0.2.0",
      "aurelia-loader": "github:aurelia/loader@0.8.3",
      "aurelia-logging": "github:aurelia/logging@0.6.2",
      "aurelia-metadata": "github:aurelia/metadata@0.7.1",
      "aurelia-path": "github:aurelia/path@0.8.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.6.1",
      "core-js": "npm:core-js@0.9.18"
    },
    "github:benib/aurelia-leaflet@0.0.2": {
      "aurelia-event-aggregator": "github:aurelia/event-aggregator@0.6.2",
      "aurelia-framework": "github:aurelia/framework@0.13.4"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "npm:babel-runtime@5.8.19": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.13"
    }
  }
});

