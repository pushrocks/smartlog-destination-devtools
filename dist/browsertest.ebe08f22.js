// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"node_modules/@pushrocks/smartlog/dist/smartlog.classes.logrouter.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogRouter {
    constructor() {
        /**
         * all log destinations
         */
        this.logDestinations = [];
    }
    addLogDestination(logDestination) {
        this.logDestinations.push(logDestination);
    }
    // routes the log according to added logDestinations
    routeLog(logPackageArg) {
        for (const logDestination of this.logDestinations) {
            logDestination.handleLog(logPackageArg);
        }
    }
}
exports.LogRouter = LogRouter;

},{}],"node_modules/@pushrocks/smartlog/dist/smartlog.classes.smartlog.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartlog_classes_logrouter_1 = require("./smartlog.classes.logrouter");
class Smartlog {
    constructor(optionsArg) {
        this.logRouter = new smartlog_classes_logrouter_1.LogRouter();
        this.logContext = optionsArg.logContext;
        this.minimumLogLevel = optionsArg.minimumLogLevel;
    }
    addLogDestination(logDestinationArg) {
        this.logRouter.addLogDestination(logDestinationArg);
    }
    // ============
    // Logger Setup
    // ============
    /**
     * enables console logging
     */
    enableConsole() {
        this.consoleEnabled = true;
    }
    // =============
    // log functions
    // =============
    /**
     * main log method
     * @param logLevelArg - the log level
     * @param logMessageArg - the log message
     * @param logDataArg - any additional log data
     */
    log(logLevelArg, logMessageArg, logDataArg) {
        if (this.consoleEnabled) {
            console.log(`LOG: ${logLevelArg}: ${logMessageArg}`);
        }
        const logPackage = {
            timestamp: Date.now(),
            type: 'log',
            context: this.logContext,
            level: logLevelArg,
            message: logMessageArg
        };
        if (logDataArg) {
            logPackage.data = logDataArg;
        }
        this.logRouter.routeLog(logPackage);
    }
    increment(logLevelArg, logMessageArg) {
        if (this.consoleEnabled) {
            console.log(`INCREMENT: ${logLevelArg}: ${logMessageArg}`);
        }
        this.logRouter.routeLog({
            timestamp: Date.now(),
            type: 'increment',
            context: this.logContext,
            level: logLevelArg,
            message: logMessageArg
        });
    }
    handleLogPackage(logPackageArg) {
        this.logRouter.routeLog(logPackageArg);
    }
}
exports.Smartlog = Smartlog;

},{"./smartlog.classes.logrouter":"node_modules/@pushrocks/smartlog/dist/smartlog.classes.logrouter.js"}],"node_modules/@pushrocks/smartlog/dist/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smartlog_classes_smartlog_1 = require("./smartlog.classes.smartlog");
exports.Smartlog = smartlog_classes_smartlog_1.Smartlog;
const defaultLogger = new smartlog_classes_smartlog_1.Smartlog({
    logContext: {
        company: 'undefined',
        companyunit: 'undefefined',
        containerName: 'undefined',
        environment: 'local',
        runtime: 'node',
        zone: 'undefined'
    }
});
exports.defaultLogger = defaultLogger;

},{"./smartlog.classes.smartlog":"node_modules/@pushrocks/smartlog/dist/smartlog.classes.smartlog.js"}],"ts/index.ts":[function(require,module,exports) {
"use strict";

exports.__esModule = true;

var SmartlogDestinationDevtools =
/** @class */
function () {
  function SmartlogDestinationDevtools() {}

  SmartlogDestinationDevtools.prototype.handleLog = function (logPackageArg) {
    this.logInBrowser(logPackageArg);
  };

  SmartlogDestinationDevtools.prototype.logInBrowser = function (logPackage) {
    switch (logPackage.level) {
      case 'error':
        console.log("%c Error: %c " + logPackage.message, 'background:#000000;color:#800000;', 'color:#000000;');
        break;

      case 'info':
        console.log("%c Info: %c " + logPackage.message, 'background:#EC407A;color:#ffffff;', 'color:#EC407A;');
        break;

      case 'ok':
        console.log("%c OK: %c " + logPackage.message, 'background:#000000;color:#8BC34A;', 'color:#000000;');
        break;

      case 'success':
        console.log("%c Success: %c " + logPackage.message, 'background:#8BC34A;color:#ffffff;', 'color:#8BC34A;');
        break;

      case 'warn':
        console.log("%c Warn: %c " + logPackage.message, 'background:#000000;color:#FB8C00;', 'color:#000000;');
        break;

      case 'note':
        console.log("%c Note: %c " + logPackage.message, 'background:#42A5F5;color:#ffffff', 'color:#42A5F5;');
        break;

      default:
        console.log("unknown logType for \"" + logPackage.message + "\"");
        break;
    }
  };

  return SmartlogDestinationDevtools;
}();

exports.SmartlogDestinationDevtools = SmartlogDestinationDevtools;
},{}],"test/browsertest.ts":[function(require,module,exports) {
"use strict";

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

exports.__esModule = true;

var smartlog = __importStar(require("@pushrocks/smartlog"));

var logger = smartlog.defaultLogger;
var logContext = {
  company: 'Lossless GmbH',
  companyunit: 'Lossless.Cloud',
  containerName: 'testContainer',
  environment: 'staging',
  runtime: 'chrome',
  zone: 'servezone'
}; // import the module to test

var smartlogDestinationDevtools = __importStar(require("../ts/index"));

var testDestination = new smartlogDestinationDevtools.SmartlogDestinationDevtools();
testDestination.handleLog({
  timestamp: Date.now(),
  type: 'log',
  context: logContext,
  level: 'info',
  message: 'wait, what? Hi, this is a message!'
});
},{"@pushrocks/smartlog":"node_modules/@pushrocks/smartlog/dist/index.js","../ts/index":"ts/index.ts"}],"../../../.nvm/versions/node/v10.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57186" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.nvm/versions/node/v10.13.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","test/browsertest.ts"], null)
//# sourceMappingURL=/browsertest.ebe08f22.map