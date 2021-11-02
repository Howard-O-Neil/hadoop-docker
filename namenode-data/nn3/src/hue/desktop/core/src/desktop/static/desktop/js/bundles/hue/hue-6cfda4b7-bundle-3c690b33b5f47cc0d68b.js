/*!
 * 
 * Licensed to Cloudera, Inc. under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  Cloudera, Inc. licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-6cfda4b7"],{

/***/ "./desktop/core/src/desktop/js/config/events.ts":
/*!******************************************************!*\
  !*** ./desktop/core/src/desktop/js/config/events.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REFRESH_CONFIG_TOPIC": () => (/* binding */ REFRESH_CONFIG_TOPIC),
/* harmony export */   "CONFIG_REFRESHED_TOPIC": () => (/* binding */ CONFIG_REFRESHED_TOPIC),
/* harmony export */   "GET_KNOWN_CONFIG_TOPIC": () => (/* binding */ GET_KNOWN_CONFIG_TOPIC)
/* harmony export */ });
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var REFRESH_CONFIG_TOPIC = 'cluster.config.refresh.config';
var CONFIG_REFRESHED_TOPIC = 'cluster.config.set.config';
var GET_KNOWN_CONFIG_TOPIC = 'cluster.config.get.config';

/***/ }),

/***/ "./desktop/core/src/desktop/js/config/hueConfig.ts":
/*!*********************************************************!*\
  !*** ./desktop/core/src/desktop/js/config/hueConfig.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "refreshConfig": () => (/* binding */ refreshConfig),
/* harmony export */   "getLastKnownConfig": () => (/* binding */ getLastKnownConfig),
/* harmony export */   "getConfig": () => (/* binding */ getConfig),
/* harmony export */   "findDashboardConnector": () => (/* binding */ findDashboardConnector),
/* harmony export */   "findBrowserConnector": () => (/* binding */ findBrowserConnector),
/* harmony export */   "findEditorConnector": () => (/* binding */ findEditorConnector),
/* harmony export */   "filterBrowserConnectors": () => (/* binding */ filterBrowserConnectors),
/* harmony export */   "filterEditorConnectors": () => (/* binding */ filterEditorConnectors),
/* harmony export */   "getRootFilePath": () => (/* binding */ getRootFilePath),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
/* harmony import */ var _api_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/urls */ "./desktop/core/src/desktop/js/api/urls.js");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./desktop/core/src/desktop/js/config/types.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.





var lastConfigPromise;
var lastKnownConfig;
var refreshConfig = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            lastConfigPromise = new Promise( /*#__PURE__*/function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject) {
                var apiResponse;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.prev = 0;
                        _context.next = 3;
                        return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(_api_urls__WEBPACK_IMPORTED_MODULE_1__.FETCH_CONFIG_API, {}, {
                          silenceErrors: true
                        });

                      case 3:
                        apiResponse = _context.sent;

                        if (apiResponse.status == 0) {
                          lastKnownConfig = apiResponse;
                          resolve(lastKnownConfig);
                        } else {
                          utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__.default.publish('hue.error', apiResponse.message);
                          reject();
                        }

                        _context.next = 10;
                        break;

                      case 7:
                        _context.prev = 7;
                        _context.t0 = _context["catch"](0);
                        reject(_context.t0);

                      case 10:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, null, [[0, 7]]);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }());
            lastConfigPromise.then(function (config) {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__.default.publish(_events__WEBPACK_IMPORTED_MODULE_2__.CONFIG_REFRESHED_TOPIC, config);
            })["catch"](function () {
              utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__.default.publish(_events__WEBPACK_IMPORTED_MODULE_2__.CONFIG_REFRESHED_TOPIC);
            });
            return _context2.abrupt("return", lastConfigPromise);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function refreshConfig() {
    return _ref.apply(this, arguments);
  };
}();
var getLastKnownConfig = function getLastKnownConfig() {
  return lastKnownConfig;
};
var getConfig = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", getLastKnownConfig() || refreshConfig());

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getConfig() {
    return _ref3.apply(this, arguments);
  };
}();

var getInterpreters = function getInterpreters(appType) {
  if (!lastKnownConfig || !lastKnownConfig.app_config) {
    return [];
  }

  var appConfig = lastKnownConfig.app_config[appType];

  if (!appConfig) {
    console.warn("No app config for type ".concat(appType));
    return [];
  }

  if (!appConfig.interpreters) {
    console.warn("No interpreters configured for type ".concat(appType));
    return [];
  }

  return appConfig.interpreters;
};

var findConnector = function findConnector(appType, connectorTest) {
  return getInterpreters(appType).find(connectorTest);
};

var filterConnector = function filterConnector(appType, connectorTest) {
  return getInterpreters(appType).filter(connectorTest);
};

var findDashboardConnector = function findDashboardConnector(connectorTest) {
  return findConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.dashboard, connectorTest);
};
var findBrowserConnector = function findBrowserConnector(connectorTest) {
  return findConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.browser, connectorTest);
};
var findEditorConnector = function findEditorConnector(connectorTest) {
  return findConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.editor, connectorTest);
};
var filterBrowserConnectors = function filterBrowserConnectors(connectorTest) {
  return filterConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.browser, connectorTest);
};
var filterEditorConnectors = function filterEditorConnectors(connectorTest) {
  return filterConnector(_types__WEBPACK_IMPORTED_MODULE_3__.AppType.editor, connectorTest);
};
var rootPathRegex = /.*%3A%2F%2F(.+)$/;
/**
 * This takes the initial path from the "browser" config, used in cases where the users can't access '/'
 * for abfs etc.
 */

var getRootFilePath = function getRootFilePath(connector) {
  if (!connector || connector.type === 'hdfs') {
    return '';
  }

  var match = connector.page.match(rootPathRegex);

  if (match) {
    return match[1] + '/';
  }

  return '';
};
utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__.default.subscribe(_events__WEBPACK_IMPORTED_MODULE_2__.REFRESH_CONFIG_TOPIC, refreshConfig); // TODO: Replace GET_KNOWN_CONFIG_TOPIC pubSub with sync getKnownConfig const

utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__.default.subscribe(_events__WEBPACK_IMPORTED_MODULE_2__.GET_KNOWN_CONFIG_TOPIC, function (callback) {
  if (lastConfigPromise && callback) {
    lastConfigPromise.then(callback)["catch"](callback);
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  refreshConfig: refreshConfig,
  getInterpreters: getInterpreters,
  getLastKnownConfig: getLastKnownConfig,
  getRootFilePath: getRootFilePath,
  findBrowserConnector: findBrowserConnector,
  findDashboardConnector: findDashboardConnector,
  findEditorConnector: findEditorConnector
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/config/types.ts":
/*!*****************************************************!*\
  !*** ./desktop/core/src/desktop/js/config/types.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppType": () => (/* binding */ AppType)
/* harmony export */ });
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var AppType;

(function (AppType) {
  AppType["browser"] = "browser";
  AppType["editor"] = "editor";
  AppType["dashboard"] = "dashboard";
  AppType["scheduler"] = "scheduler";
  AppType["sdkapps"] = "sdkapps";
})(AppType || (AppType = {}));

/***/ }),

/***/ "./desktop/core/src/desktop/js/doc/docSupport.js":
/*!*******************************************************!*\
  !*** ./desktop/core/src/desktop/js/doc/docSupport.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOCUMENT_TYPE_I18n": () => (/* binding */ DOCUMENT_TYPE_I18n),
/* harmony export */   "DOCUMENT_TYPES": () => (/* binding */ DOCUMENT_TYPES)
/* harmony export */ });
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
// Licensed to Cloudera, Inc. under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  Cloudera, Inc. licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

var DOCUMENT_TYPE_I18n = {
  all: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('All'),
  directory: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Directory'),
  'link-pigscript': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Pig Design'),
  'link-workflow': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Job Design'),
  notebook: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Notebook'),
  'oozie-bundle2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Oozie Bundle'),
  'oozie-coordinator2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Oozie Schedule'),
  'oozie-workflow2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Oozie Workflow'),
  'query-hive': window.ENABLE_UNIFIED_ANALYTICS ? (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Unified Analytics Query') : (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Hive Query'),
  'query-impala': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Impala Query'),
  'search-dashboard': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Search Dashboard'),
  'query-mapreduce': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('MapReduce Job'),
  'query-sqoop1': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Import Job'),
  'query-spark2': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Spark Job'),
  'query-java': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Java Job'),
  'query-pig': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Pig Script'),
  'query-shell': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('Shell Script'),
  'query-distcp': (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_0__.default)('DistCp Job')
};
var DOCUMENT_TYPES = [];
Object.keys(DOCUMENT_TYPE_I18n).forEach(function (key) {
  if (key !== 'all') {
    DOCUMENT_TYPES.push({
      type: key,
      label: DOCUMENT_TYPE_I18n[key]
    });
  }
});
DOCUMENT_TYPES.sort(function (a, b) {
  return a.label.localeCompare(b.label);
});
DOCUMENT_TYPES.unshift({
  type: 'all',
  label: DOCUMENT_TYPE_I18n['all']
});


/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-6cfda4b7-bundle-3c690b33b5f47cc0d68b.js.map