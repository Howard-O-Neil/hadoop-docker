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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-e4b7453b"],{

/***/ "./desktop/core/src/desktop/js/catalog/DataCatalogEntry.ts":
/*!*****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/DataCatalogEntry.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DataCatalogEntry)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/api */ "./desktop/core/src/desktop/js/catalog/api.ts");
/* harmony import */ var catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/catalogUtils */ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apps/editor/execution/api */ "./desktop/core/src/desktop/js/apps/editor/execution/api.ts");
/* harmony import */ var _dataCatalog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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









var cachedOnly = function cachedOnly(options) {
  return !!(options && options.cachedOnly);
};

var shouldReload = function shouldReload(options) {
  return !!(!_dataCatalog__WEBPACK_IMPORTED_MODULE_7__.DataCatalog.cacheEnabled() || options && (options.refreshCache || options.refreshAnalysis));
};
/**
 * Helper function to get the multi table catalog version of a catalog entry
 */


var getMultiTableEntry = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(catalogEntry) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (catalogEntry.isTableOrView()) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", Promise.reject());

          case 2:
            return _context.abrupt("return", catalogEntry.dataCatalog.getMultiTableEntry({
              namespace: catalogEntry.namespace,
              compute: catalogEntry.compute,
              paths: [catalogEntry.path]
            }));

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMultiTableEntry(_x) {
    return _ref.apply(this, arguments);
  };
}();

var DataCatalogEntry = /*#__PURE__*/function () {
  function DataCatalogEntry(options) {
    _classCallCheck(this, DataCatalogEntry);

    this.compute = void 0;
    this.dataCatalog = void 0;
    this.definition = void 0;
    this.isTemporary = void 0;
    this.name = void 0;
    this.namespace = void 0;
    this.path = void 0;
    this.saveTimeout = -1;
    this.commentObservable = void 0;
    this.analysis = void 0;
    this.analysisPromise = void 0;
    this.childrenPromise = void 0;
    this.navigatorMeta = void 0;
    this.navigatorMetaForChildrenPromise = void 0;
    this.navigatorMetaPromise = void 0;
    this.sqlAnalyzerMeta = void 0;
    this.sqlAnalyzerMetaPromise = void 0;
    this.sqlAnalyzerPopularity = void 0;
    this.sqlAnalyzerPopularityForChildrenPromise = void 0;
    this.partitions = void 0;
    this.partitionsPromise = void 0;
    this.sample = void 0;
    this.samplePromise = void 0;
    this.sourceMeta = void 0;
    this.sourceMetaPromise = void 0;

    if (!options.dataCatalog.connector) {
      throw new Error('DataCatalogEntry created without connector');
    }

    this.namespace = options.namespace;
    this.compute = options.compute;
    this.dataCatalog = options.dataCatalog;
    this.path = typeof options.path === 'string' ? options.path.split('.') : options.path || [];
    this.name = this.path.length ? this.path[this.path.length - 1] : this.getConnector().id;
    this.isTemporary = options.isTemporary;

    if (options.definition) {
      this.definition = options.definition;
    } else if (this.path.length === 0) {
      this.definition = {
        type: 'source'
      };
    } else if (this.path.length === 1) {
      this.definition = {
        type: 'database'
      };
    } else if (this.path.length === 2) {
      this.definition = {
        type: 'table'
      };
    }

    this.reset();
  }
  /**
   * Resets the entry to an empty state, it might still have some details cached
   */


  _createClass(DataCatalogEntry, [{
    key: "reset",
    value: function reset() {
      this.saveTimeout = -1;
      this.analysis = undefined;
      this.analysisPromise = undefined;
      this.childrenPromise = undefined;
      this.navigatorMeta = undefined;
      this.navigatorMetaForChildrenPromise = undefined;
      this.navigatorMetaPromise = undefined;
      this.sqlAnalyzerMeta = undefined;
      this.sqlAnalyzerMetaPromise = undefined;
      this.sqlAnalyzerPopularity = undefined;
      this.sqlAnalyzerPopularityForChildrenPromise = undefined;
      this.partitions = undefined;
      this.partitionsPromise = undefined;
      this.sample = undefined;
      this.samplePromise = undefined;
      this.sourceMeta = undefined;
      this.sourceMetaPromise = undefined;

      if (this.path.length) {
        this.dataCatalog.getKnownEntry({
          namespace: this.namespace,
          compute: this.compute,
          path: this.path.slice(0, this.path.length - 1)
        }).then(function (parent) {
          if (parent) {
            parent.navigatorMetaForChildrenPromise = undefined;
            parent.sqlAnalyzerPopularityForChildrenPromise = undefined;
          }
        })["catch"](function (err) {
          console.warn(err);
        });
      }
    }
    /**
     * Resets the entry and clears the cache
     */

  }, {
    key: "clearCache",
    value: function () {
      var _clearCache = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(options) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!options) {
                  options = {};
                }

                if (this.definition && this.definition.sqlAnalyzerLoaded) {
                  delete this.definition.sqlAnalyzerLoaded;
                }

                this.reset();
                _context2.prev = 3;

                if (!options.cascade) {
                  _context2.next = 9;
                  break;
                }

                _context2.next = 7;
                return this.dataCatalog.clearStorageCascade(this.namespace, this.compute, this.path);

              case 7:
                _context2.next = 11;
                break;

              case 9:
                _context2.next = 11;
                return this.save();

              case 11:
                _context2.next = 15;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](3);

              case 15:
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_4__.default.publish('data.catalog.entry.refreshed', {
                  entry: this,
                  cascade: !!options.cascade
                });

              case 16:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 13]]);
      }));

      function clearCache(_x2) {
        return _clearCache.apply(this, arguments);
      }

      return clearCache;
    }()
  }, {
    key: "reloadAnalysis",
    value: function reloadAnalysis(options) {
      var _this = this;

      this.analysisPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject, onCancel) {
          var fetchPromise;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  fetchPromise = (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchDescribe)(_objectSpread({
                    entry: _this
                  }, options));
                  onCancel(function () {
                    fetchPromise.cancel();
                  });
                  _context3.prev = 2;
                  _context3.next = 5;
                  return fetchPromise;

                case 5:
                  _this.analysis = _context3.sent;
                  resolve(_this.analysis);
                  _context3.next = 13;
                  break;

                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](2);
                  reject(_context3.t0 || 'Fetch failed');
                  return _context3.abrupt("return");

                case 13:
                  _this.saveLater();

                case 14:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, null, [[2, 9]]);
        }));

        return function (_x3, _x4, _x5) {
          return _ref2.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.analysisPromise, options);
    }
  }, {
    key: "reloadNavigatorMeta",
    value: function reloadNavigatorMeta(options) {
      var _this2 = this;

      if (this.canHaveNavigatorMetadata()) {
        this.navigatorMetaPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject) {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.prev = 0;
                    _context4.next = 3;
                    return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchNavigatorMetadata)(_objectSpread(_objectSpread({}, options), {}, {
                      entry: _this2
                    }));

                  case 3:
                    _this2.navigatorMeta = _context4.sent;
                    resolve(_this2.navigatorMeta);
                    _context4.next = 11;
                    break;

                  case 7:
                    _context4.prev = 7;
                    _context4.t0 = _context4["catch"](0);
                    reject(_context4.t0 || 'Fetch failed');
                    return _context4.abrupt("return");

                  case 11:
                    _this2.saveLater();

                    if (_this2.commentObservable) {
                      _this2.commentObservable(_this2.getResolvedComment());
                    }

                  case 13:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[0, 7]]);
          }));

          return function (_x6, _x7) {
            return _ref3.apply(this, arguments);
          };
        }());
      } else {
        this.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaPromise);
    }
    /**
     * Helper function to reload the nav opt metadata for the given entry
     */

  }, {
    key: "reloadSqlAnalyzerMeta",
    value: function reloadSqlAnalyzerMeta(_ref4) {
      var _this3 = this;

      var cancellable = _ref4.cancellable,
          silenceErrors = _ref4.silenceErrors,
          sqlAnalyzer = _ref4.sqlAnalyzer;

      if (this.dataCatalog.canHaveSqlAnalyzerMeta()) {
        this.sqlAnalyzerMetaPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject, onCancel) {
            var fetchPromise;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    fetchPromise = sqlAnalyzer.fetchSqlAnalyzerMeta({
                      path: _this3.path,
                      silenceErrors: silenceErrors
                    });
                    onCancel(function () {
                      fetchPromise.cancel();
                    });
                    _context5.prev = 2;
                    _context5.next = 5;
                    return fetchPromise;

                  case 5:
                    _this3.sqlAnalyzerMeta = _context5.sent;
                    resolve(_this3.sqlAnalyzerMeta);
                    _context5.next = 13;
                    break;

                  case 9:
                    _context5.prev = 9;
                    _context5.t0 = _context5["catch"](2);
                    reject(_context5.t0 || 'Fetch failed');
                    return _context5.abrupt("return");

                  case 13:
                    _this3.saveLater();

                  case 14:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, null, [[2, 9]]);
          }));

          return function (_x8, _x9, _x10) {
            return _ref5.apply(this, arguments);
          };
        }());
      } else {
        this.sqlAnalyzerMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerMetaPromise, {
        cancellable: cancellable
      });
    }
  }, {
    key: "reloadPartitions",
    value: function reloadPartitions(options) {
      var _this4 = this;

      this.partitionsPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  _context6.prev = 0;
                  _context6.next = 3;
                  return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchPartitions)(_objectSpread(_objectSpread({}, options), {}, {
                    entry: _this4
                  }));

                case 3:
                  _this4.partitions = _context6.sent;
                  resolve(_this4.partitions);
                  _context6.next = 11;
                  break;

                case 7:
                  _context6.prev = 7;
                  _context6.t0 = _context6["catch"](0);
                  reject(_context6.t0 || 'Fetch failed');
                  return _context6.abrupt("return");

                case 11:
                  _this4.saveLater();

                case 12:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[0, 7]]);
        }));

        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.partitionsPromise, options);
    }
  }, {
    key: "reloadSample",
    value: function reloadSample(options) {
      var _this5 = this;

      this.samplePromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.prev = 0;
                  _context7.next = 3;
                  return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchSample)(_objectSpread(_objectSpread({}, options), {}, {
                    entry: _this5
                  }));

                case 3:
                  _this5.sample = _context7.sent;
                  resolve(_this5.sample);
                  _context7.next = 11;
                  break;

                case 7:
                  _context7.prev = 7;
                  _context7.t0 = _context7["catch"](0);
                  reject(_context7.t0 || 'Fetch failed');
                  return _context7.abrupt("return");

                case 11:
                  _this5.saveLater();

                case 12:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, null, [[0, 7]]);
        }));

        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.samplePromise, options);
    }
  }, {
    key: "reloadSourceMeta",
    value: function reloadSourceMeta(options) {
      var _this6 = this;

      this.sourceMetaPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(resolve, reject) {
          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  if (!_this6.dataCatalog.invalidatePromise) {
                    _context8.next = 8;
                    break;
                  }

                  _context8.prev = 1;
                  _context8.next = 4;
                  return _this6.dataCatalog.invalidatePromise;

                case 4:
                  _context8.next = 8;
                  break;

                case 6:
                  _context8.prev = 6;
                  _context8.t0 = _context8["catch"](1);

                case 8:
                  _context8.prev = 8;
                  _context8.next = 11;
                  return (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchSourceMetadata)(_objectSpread(_objectSpread({}, options), {}, {
                    entry: _this6
                  }));

                case 11:
                  _this6.sourceMeta = _context8.sent;
                  resolve(_this6.sourceMeta);
                  _context8.next = 19;
                  break;

                case 15:
                  _context8.prev = 15;
                  _context8.t1 = _context8["catch"](8);
                  reject(_context8.t1 || 'Fetch failed');
                  return _context8.abrupt("return");

                case 19:
                  _this6.saveLater();

                case 20:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, null, [[1, 6], [8, 15]]);
        }));

        return function (_x15, _x16) {
          return _ref8.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sourceMetaPromise, options);
    }
  }, {
    key: "drop",
    value: function drop(cascade) {
      var _this7 = this;

      if (!this.isDatabase() && !this.isTableOrView()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject('Drop is only possible for a database, table or view.');
      }

      var statement = "DROP ".concat(this.isDatabase() ? 'DATABASE' : this.isView() ? 'VIEW' : 'TABLE', " IF EXISTS `").concat(this.path.join('`.`'), "`").concat(this.isDatabase() && cascade ? ' CASCADE;' : ';');
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise(function (resolve, reject, onCancel) {
        var executePromise = (0,apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_6__.executeSingleStatement)({
          connector: _this7.getConnector(),
          namespace: _this7.namespace,
          compute: _this7.compute,
          statement: statement
        });
        onCancel(function () {
          executePromise.cancel();
        });
        executePromise.then(function () {
          _this7.clearCache({
            cascade: true
          })["catch"]();

          resolve();
        })["catch"](reject);
      });
    }
    /**
     * Save the entry to cache
     */

  }, {
    key: "save",
    value: function () {
      var _save = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
        return regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                window.clearTimeout(this.saveTimeout);
                _context9.prev = 1;
                _context9.next = 4;
                return this.dataCatalog.persistCatalogEntry(this);

              case 4:
                _context9.next = 8;
                break;

              case 6:
                _context9.prev = 6;
                _context9.t0 = _context9["catch"](1);

              case 8:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[1, 6]]);
      }));

      function save() {
        return _save.apply(this, arguments);
      }

      return save;
    }()
    /**
     * Save the entry at a later point of time
     */

  }, {
    key: "saveLater",
    value: function saveLater() {
      var _CACHEABLE_TTL,
          _this8 = this;

      if ((((_CACHEABLE_TTL = window.CACHEABLE_TTL) === null || _CACHEABLE_TTL === void 0 ? void 0 : _CACHEABLE_TTL["default"]) || 0) > 0) {
        window.clearTimeout(this.saveTimeout);
        this.saveTimeout = window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
          return regeneratorRuntime.wrap(function _callee10$(_context10) {
            while (1) {
              switch (_context10.prev = _context10.next) {
                case 0:
                  _context10.next = 2;
                  return _this8.save();

                case 2:
                case "end":
                  return _context10.stop();
              }
            }
          }, _callee10);
        })), 1000);
      }
    }
    /**
     * Gets the parent entry, rejected if there's no parent.
     */

  }, {
    key: "getParent",
    value: function getParent() {
      if (!this.path.length) {
        return Promise.reject();
      }

      return this.dataCatalog.getEntry({
        namespace: this.namespace,
        compute: this.compute,
        path: this.path.slice(0, this.path.length - 1)
      });
    }
    /**
     * Get the children of the catalog entry, columns for a table entry etc.
     */

  }, {
    key: "getChildren",
    value: function getChildren(options) {
      var _this9 = this;

      if (this.childrenPromise && this.childrenPromise.cancelled) {
        this.childrenPromise = undefined;
      }

      if (!this.childrenPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (this.childrenPromise && !shouldReload(options)) {
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.childrenPromise, options);
      }

      this.childrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(resolve, reject, onCancel) {
          var sourceMeta, cancelled, partitionKeys, tableSourceMeta, primaryKeys, foreignKeys, entities, promises, index, fieldSourceMeta, complexAttributes;
          return regeneratorRuntime.wrap(function _callee11$(_context11) {
            while (1) {
              switch (_context11.prev = _context11.next) {
                case 0:
                  cancelled = false;
                  onCancel(function () {
                    cancelled = true;
                  });
                  _context11.prev = 2;
                  _context11.next = 5;
                  return _this9.getSourceMeta(options);

                case 5:
                  sourceMeta = _context11.sent;
                  _context11.next = 10;
                  break;

                case 8:
                  _context11.prev = 8;
                  _context11.t0 = _context11["catch"](2);

                case 10:
                  if (!cancelled) {
                    _context11.next = 13;
                    break;
                  }

                  reject('Cancelled');
                  return _context11.abrupt("return");

                case 13:
                  if (sourceMeta) {
                    _context11.next = 16;
                    break;
                  }

                  reject('No source meta found');
                  return _context11.abrupt("return");

                case 16:
                  if (!sourceMeta.notFound) {
                    _context11.next = 19;
                    break;
                  }

                  resolve([]);
                  return _context11.abrupt("return");

                case 19:
                  partitionKeys = {};
                  tableSourceMeta = sourceMeta;

                  if (tableSourceMeta.partition_keys) {
                    tableSourceMeta.partition_keys.forEach(function (partitionKey) {
                      partitionKeys[partitionKey.name] = true;
                    });
                  }

                  primaryKeys = {};

                  if (tableSourceMeta.primary_keys) {
                    tableSourceMeta.primary_keys.forEach(function (primaryKey) {
                      primaryKeys[primaryKey.name] = true;
                    });
                  }

                  foreignKeys = {};

                  if (tableSourceMeta.foreign_keys) {
                    tableSourceMeta.foreign_keys.forEach(function (foreignKey) {
                      foreignKeys[foreignKey.name] = foreignKey;
                    });
                  }

                  entities = sourceMeta.databases || sourceMeta.tables_meta || sourceMeta.extended_columns || sourceMeta.fields || sourceMeta.columns || [];
                  promises = [];
                  index = 0;
                  entities.forEach(function (entity) {
                    if (!sourceMeta.databases || entity !== '_impala_builtins') {
                      var _name = entity.name || entity;

                      var promise = _this9.dataCatalog.getEntry({
                        namespace: _this9.namespace,
                        compute: _this9.compute,
                        path: [].concat(_toConsumableArray(_this9.path), [_name])
                      });

                      promise.then(function (catalogEntry) {
                        if (!catalogEntry.definition || typeof catalogEntry.definition.index === 'undefined') {
                          var definition = _typeof(entity) === 'object' ? entity : {
                            name: entity
                          };

                          if (!definition.type) {
                            if (_this9.path.length === 0) {
                              definition.type = 'database';
                            } else if (_this9.path.length === 1) {
                              definition.type = 'table';
                            } else if (_this9.path.length === 2) {
                              definition.type = 'column';
                            }
                          }

                          if (sourceMeta.partition_keys) {
                            definition.partitionKey = partitionKeys[_name];
                          }

                          if (sourceMeta.primary_keys) {
                            definition.primaryKey = primaryKeys[_name];
                          }

                          if (sourceMeta.foreign_keys) {
                            definition.foreignKey = foreignKeys[_name];
                          }

                          definition.index = index++;
                          catalogEntry.definition = definition;
                          catalogEntry.saveLater();
                        }
                      })["catch"](function (err) {
                        console.warn(err);
                      });
                      promises.push(promise);
                    }
                  }); // TODO: Move to connector attributes

                  if (sourceMeta && (_this9.getDialect() === 'impala' || _this9.getDialect() === 'hive') && _this9.isComplex()) {
                    fieldSourceMeta = sourceMeta;
                    complexAttributes = fieldSourceMeta.type === 'map' ? ['key', 'value'] : ['item'];
                    complexAttributes.forEach(function (path) {
                      var definition = fieldSourceMeta[path];

                      if (definition) {
                        var promise = _this9.dataCatalog.getEntry({
                          namespace: _this9.namespace,
                          compute: _this9.compute,
                          path: [].concat(_toConsumableArray(_this9.path), [path])
                        });

                        promise.then(function (catalogEntry) {
                          if (!catalogEntry.definition || typeof catalogEntry.definition.index === 'undefined') {
                            definition.index = index++;
                            definition.isMapValue = path === 'value';
                            catalogEntry.definition = definition;
                            catalogEntry.saveLater();
                          }
                        })["catch"](function (err) {
                          console.warn(err);
                        });
                        promises.push(promise);
                      }
                    });
                  }

                  Promise.all(promises).then(resolve)["catch"](reject);

                case 32:
                case "end":
                  return _context11.stop();
              }
            }
          }, _callee11, null, [[2, 8]]);
        }));

        return function (_x17, _x18, _x19) {
          return _ref10.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.childrenPromise, options);
    }
    /**
     * Loads navigator metadata for children, only applicable to databases and tables
     */

  }, {
    key: "loadNavigatorMetaForChildren",
    value: function loadNavigatorMetaForChildren(options) {
      var _this10 = this;

      if (this.navigatorMetaForChildrenPromise && this.navigatorMetaForChildrenPromise.cancelled) {
        this.navigatorMetaPromise = undefined;
      }

      options = (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.forceSilencedErrors)(options);

      if (!this.canHaveNavigatorMetadata() || this.isField()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
      }

      if (this.navigatorMetaForChildrenPromise && !shouldReload(options)) {
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaForChildrenPromise, options);
      }

      this.navigatorMetaForChildrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(resolve, reject, onCancel) {
          var cancellablePromises, _options, childPromise, children, someHaveNavMeta, query, rejectUnknown, searchPromise;

          return regeneratorRuntime.wrap(function _callee12$(_context12) {
            while (1) {
              switch (_context12.prev = _context12.next) {
                case 0:
                  cancellablePromises = [];
                  onCancel(function () {
                    cancellablePromises.forEach(function (cancellable) {
                      cancellable.cancel();
                    });
                  });
                  _context12.prev = 2;
                  childPromise = _this10.getChildren(options);
                  cancellablePromises.push(childPromise);
                  _context12.next = 7;
                  return childPromise;

                case 7:
                  children = _context12.sent;
                  someHaveNavMeta = children.some(function (childEntry) {
                    return childEntry.navigatorMeta;
                  });

                  if (!(someHaveNavMeta && !shouldReload(options))) {
                    _context12.next = 12;
                    break;
                  }

                  resolve(children);
                  return _context12.abrupt("return");

                case 12:
                  // TODO: Add sourceType to nav search query
                  query = _this10.path.length ? "parentPath:\"/".concat(_this10.path.join('/'), "\" AND type:(table view field)") : 'type:database';

                  rejectUnknown = function rejectUnknown() {
                    children.forEach(function (childEntry) {
                      if (!childEntry.navigatorMeta) {
                        childEntry.navigatorMeta = undefined;
                        childEntry.navigatorMetaPromise = undefined;
                      }
                    });
                  };

                  searchPromise = (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.searchEntities)({
                    query: query,
                    rawQuery: true,
                    limit: children.length,
                    silenceErrors: (_options = options) === null || _options === void 0 ? void 0 : _options.silenceErrors
                  });
                  cancellablePromises.push(searchPromise);
                  searchPromise.then(function (result) {
                    if (result && result.entities) {
                      var childEntryIndex = {};
                      children.forEach(function (childEntry) {
                        childEntryIndex[childEntry.name.toLowerCase()] = childEntry;
                      });
                      result.entities.forEach(function (entity) {
                        var matchingChildEntry = childEntryIndex[(entity.original_name || entity.originalName).toLowerCase()];

                        if (matchingChildEntry) {
                          matchingChildEntry.navigatorMeta = entity;
                          entity.hueTimestamp = Date.now();
                          matchingChildEntry.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(matchingChildEntry.navigatorMeta);

                          if (entity && matchingChildEntry.commentObservable) {
                            matchingChildEntry.commentObservable(matchingChildEntry.getResolvedComment());
                          }

                          matchingChildEntry.saveLater();
                        }
                      });
                    }
                  })["catch"](function () {
                    return resolve([]);
                  })["finally"](function () {
                    rejectUnknown();
                    resolve(children);
                  });
                  _context12.next = 23;
                  break;

                case 19:
                  _context12.prev = 19;
                  _context12.t0 = _context12["catch"](2);
                  resolve([]);
                  return _context12.abrupt("return");

                case 23:
                case "end":
                  return _context12.stop();
              }
            }
          }, _callee12, null, [[2, 19]]);
        }));

        return function (_x20, _x21, _x22) {
          return _ref11.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaForChildrenPromise, options);
    }
    /**
     * Helper function used when loading navopt metdata for children
     */

  }, {
    key: "applySqlAnalyzerResponseToChildren",
    value: function applySqlAnalyzerResponseToChildren(response, options) {
      var _this11 = this;

      if (!this.definition) {
        this.definition = {};
      }

      this.definition.sqlAnalyzerLoaded = true;
      this.saveLater();
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13(resolve, reject, onCancel) {
          var childPromise, childEntries, entriesByName, updatedIndex, addSqlAnalyzerPopularity, popularEntries;
          return regeneratorRuntime.wrap(function _callee13$(_context13) {
            while (1) {
              switch (_context13.prev = _context13.next) {
                case 0:
                  childPromise = _this11.getChildren(options);
                  onCancel(function () {
                    childPromise.cancel();
                  });
                  _context13.prev = 2;
                  _context13.next = 5;
                  return childPromise;

                case 5:
                  childEntries = _context13.sent;
                  entriesByName = {};
                  childEntries.forEach(function (childEntry) {
                    entriesByName[childEntry.name.toLowerCase()] = childEntry;
                  });
                  updatedIndex = {};

                  if (_this11.isDatabase() && response.top_tables) {
                    response.top_tables.forEach(function (topTable) {
                      if (!topTable.name) {
                        return;
                      }

                      var matchingChild = entriesByName[topTable.name.toLowerCase()];

                      if (matchingChild) {
                        matchingChild.sqlAnalyzerPopularity = topTable;
                        matchingChild.saveLater();
                        updatedIndex[matchingChild.getQualifiedPath()] = matchingChild;
                      }
                    });
                  } else if (_this11.isTableOrView() && response.values) {
                    addSqlAnalyzerPopularity = function addSqlAnalyzerPopularity(columns, type) {
                      if (columns) {
                        columns.forEach(function (column) {
                          if (!column.columnName) {
                            return;
                          }

                          var matchingChild = entriesByName[column.columnName.toLowerCase()];

                          if (matchingChild) {
                            if (!matchingChild.sqlAnalyzerPopularity) {
                              matchingChild.sqlAnalyzerPopularity = {
                                column_count: 0,
                                columnCount: 0
                              };
                            }

                            matchingChild.sqlAnalyzerPopularity[type] = column;
                            matchingChild.saveLater();
                            updatedIndex[matchingChild.getQualifiedPath()] = matchingChild;
                          }
                        });
                      }
                    };

                    addSqlAnalyzerPopularity(response.values.filterColumns, 'filterColumn');
                    addSqlAnalyzerPopularity(response.values.groupbyColumns, 'groupByColumn');
                    addSqlAnalyzerPopularity(response.values.joinColumns, 'joinColumn');
                    addSqlAnalyzerPopularity(response.values.orderbyColumns, 'orderByColumn');
                    addSqlAnalyzerPopularity(response.values.selectColumns, 'selectColumn');
                  }

                  popularEntries = [];
                  Object.keys(updatedIndex).forEach(function (path) {
                    popularEntries.push(updatedIndex[path]);
                  });
                  resolve(popularEntries);
                  _context13.next = 18;
                  break;

                case 15:
                  _context13.prev = 15;
                  _context13.t0 = _context13["catch"](2);
                  reject(_context13.t0);

                case 18:
                case "end":
                  return _context13.stop();
              }
            }
          }, _callee13, null, [[2, 15]]);
        }));

        return function (_x23, _x24, _x25) {
          return _ref12.apply(this, arguments);
        };
      }());
    }
    /**
     * Loads SQL Analyzer popularity for the children of this entry.
     */

  }, {
    key: "loadSqlAnalyzerPopularityForChildren",
    value: function loadSqlAnalyzerPopularityForChildren(options) {
      var _this12 = this;

      if (this.sqlAnalyzerPopularityForChildrenPromise && this.sqlAnalyzerPopularityForChildrenPromise.cancelled) {
        this.sqlAnalyzerPopularityForChildrenPromise = undefined;
      }

      options.silenceErrors = true;

      if (!this.dataCatalog.canHaveSqlAnalyzerMeta()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (this.sqlAnalyzerPopularityForChildrenPromise && !shouldReload(options)) {
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerPopularityForChildrenPromise, options);
      }

      if (this.definition && this.definition.sqlAnalyzerLoaded && !shouldReload(options)) {
        this.sqlAnalyzerPopularityForChildrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(resolve, reject, onCancel) {
            var childPromise, _children;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    childPromise = _this12.getChildren(options);
                    onCancel(function () {
                      childPromise.cancel();
                    });
                    _context14.prev = 2;
                    _context14.next = 5;
                    return childPromise;

                  case 5:
                    _children = _context14.sent;
                    resolve(_children.filter(function (child) {
                      return child.sqlAnalyzerPopularity;
                    }));
                    _context14.next = 12;
                    break;

                  case 9:
                    _context14.prev = 9;
                    _context14.t0 = _context14["catch"](2);
                    reject(_context14.t0);

                  case 12:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, null, [[2, 9]]);
          }));

          return function (_x26, _x27, _x28) {
            return _ref13.apply(this, arguments);
          };
        }());
      } else if (this.isDatabase() || this.isTableOrView()) {
        this.sqlAnalyzerPopularityForChildrenPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15(resolve, reject, onCancel) {
            var cancellablePromises, popularityPromise, analyzerResponse, applyPromise, entries;
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    cancellablePromises = [];
                    onCancel(function () {
                      cancellablePromises.forEach(function (cancellable) {
                        return cancellable.cancel();
                      });
                    });
                    popularityPromise = options.sqlAnalyzer.fetchPopularity(_objectSpread(_objectSpread({}, options), {}, {
                      paths: [_this12.path]
                    }));
                    cancellablePromises.push(popularityPromise);
                    _context15.prev = 4;
                    _context15.next = 7;
                    return popularityPromise;

                  case 7:
                    analyzerResponse = _context15.sent;
                    applyPromise = _this12.applySqlAnalyzerResponseToChildren(analyzerResponse, options);
                    cancellablePromises.push(applyPromise);
                    _context15.next = 12;
                    return applyPromise;

                  case 12:
                    entries = _context15.sent;
                    resolve(entries);
                    _context15.next = 19;
                    break;

                  case 16:
                    _context15.prev = 16;
                    _context15.t0 = _context15["catch"](4);
                    resolve([]);

                  case 19:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, null, [[4, 16]]);
          }));

          return function (_x29, _x30, _x31) {
            return _ref14.apply(this, arguments);
          };
        }());
      } else {
        this.sqlAnalyzerPopularityForChildrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerPopularityForChildrenPromise);
    }
    /**
     * Returns true if the catalog entry can have navigator metadata
     */

  }, {
    key: "canHaveNavigatorMetadata",
    value: function canHaveNavigatorMetadata() {
      if (!window.HAS_CATALOG) {
        return false;
      } // TODO: Move to connector attributes


      return (this.getDialect() === 'hive' || this.getDialect() === 'impala') && (this.isDatabase() || this.isTableOrView() || this.isColumn());
    }
    /**
     * Returns the currently known comment without loading any additional metadata
     */

  }, {
    key: "getResolvedComment",
    value: function getResolvedComment() {
      // TODO: Move to connector attributes
      if (this.navigatorMeta && (this.getDialect() === 'hive' || this.getDialect() === 'impala')) {
        if (this.navigatorMeta.description) {
          return this.navigatorMeta.description;
        }

        if (this.navigatorMeta.originalDescription) {
          return this.navigatorMeta.originalDescription;
        }
      }

      if (this.definition && this.definition.comment) {
        return this.definition.comment;
      }

      return this.sourceMeta && this.sourceMeta.comment || '';
    }
    /**
     * This can be used to get an observable for the comment which will be updated once a comment has been
     * resolved.
     */

  }, {
    key: "getCommentObservable",
    value: function getCommentObservable() {
      if (!this.commentObservable) {
        this.commentObservable = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(this.getResolvedComment());
      }

      return this.commentObservable;
    }
    /**
     * Checks whether the comment is known and has been loaded from the proper source
     */

  }, {
    key: "hasResolvedComment",
    value: function hasResolvedComment() {
      if (this.canHaveNavigatorMetadata()) {
        return typeof this.navigatorMeta !== 'undefined';
      }

      return typeof this.sourceMeta !== 'undefined';
    }
    /**
     * Gets the comment for this entry, fetching it if necessary from the proper source.
     */

  }, {
    key: "getComment",
    value: function getComment(options) {
      var _this13 = this;

      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(resolve, reject, onCancel) {
          var cancellablePromises, navigatorMetaPromise, navigatorMeta, sourceMetaPromise, sourceMeta;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  cancellablePromises = [];
                  onCancel(function () {
                    cancellablePromises.forEach(function (cancellable) {
                      return cancellable.cancel();
                    });
                  });

                  if (!_this13.canHaveNavigatorMetadata()) {
                    _context16.next = 16;
                    break;
                  }

                  navigatorMetaPromise = _this13.getNavigatorMeta(options);
                  cancellablePromises.push(navigatorMetaPromise);
                  _context16.prev = 5;
                  _context16.next = 8;
                  return navigatorMetaPromise;

                case 8:
                  navigatorMeta = _context16.sent;

                  if (!navigatorMeta) {
                    _context16.next = 12;
                    break;
                  }

                  resolve(navigatorMeta.description || navigatorMeta.originalDescription || '');
                  return _context16.abrupt("return");

                case 12:
                  _context16.next = 16;
                  break;

                case 14:
                  _context16.prev = 14;
                  _context16.t0 = _context16["catch"](5);

                case 16:
                  if (!_this13.sourceMeta) {
                    _context16.next = 20;
                    break;
                  }

                  resolve(_this13.sourceMeta.comment || '');
                  _context16.next = 35;
                  break;

                case 20:
                  if (!(_this13.definition && _this13.definition.comment)) {
                    _context16.next = 24;
                    break;
                  }

                  resolve(_this13.definition.comment);
                  _context16.next = 35;
                  break;

                case 24:
                  sourceMetaPromise = _this13.getSourceMeta(options);
                  _context16.prev = 25;
                  _context16.next = 28;
                  return sourceMetaPromise;

                case 28:
                  sourceMeta = _context16.sent;
                  resolve(sourceMeta && sourceMeta.comment || '');
                  _context16.next = 35;
                  break;

                case 32:
                  _context16.prev = 32;
                  _context16.t1 = _context16["catch"](25);
                  reject(_context16.t1);

                case 35:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16, null, [[5, 14], [25, 32]]);
        }));

        return function (_x32, _x33, _x34) {
          return _ref15.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }
    /**
     * Updates custom navigator metadata for the catalog entry
     */

  }, {
    key: "updateNavigatorCustomMetadata",
    value: function () {
      var _updateNavigatorCustomMetadata = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17(modifiedCustomMetadata, deletedCustomMetadataKeys, apiOptions) {
        var _this14 = this;

        var navigatorMeta;
        return regeneratorRuntime.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                if (this.canHaveNavigatorMetadata()) {
                  _context17.next = 2;
                  break;
                }

                return _context17.abrupt("return", Promise.reject());

              case 2:
                _context17.next = 4;
                return this.getNavigatorMeta(apiOptions);

              case 4:
                navigatorMeta = _context17.sent;

                if (navigatorMeta) {
                  _context17.next = 7;
                  break;
                }

                throw new Error('Could not load navigator metadata.');

              case 7:
                return _context17.abrupt("return", new Promise(function (resolve, reject) {
                  (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.updateNavigatorProperties)({
                    identity: navigatorMeta.identity,
                    modifiedCustomMetadata: modifiedCustomMetadata,
                    deletedCustomMetadataKeys: deletedCustomMetadataKeys
                  }).then(function (entity) {
                    if (entity) {
                      _this14.navigatorMeta = entity;
                      _this14.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);

                      _this14.saveLater();

                      resolve(entity);
                    } else {
                      reject();
                    }
                  })["catch"](reject);
                }));

              case 8:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      function updateNavigatorCustomMetadata(_x35, _x36, _x37) {
        return _updateNavigatorCustomMetadata.apply(this, arguments);
      }

      return updateNavigatorCustomMetadata;
    }()
    /**
     * Sets the comment in the proper source
     */

  }, {
    key: "setComment",
    value: function () {
      var _setComment = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20(comment, options) {
        var _this15 = this;

        var navigatorMeta;
        return regeneratorRuntime.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!this.canHaveNavigatorMetadata()) {
                  _context20.next = 7;
                  break;
                }

                _context20.next = 3;
                return this.getNavigatorMeta(options);

              case 3:
                navigatorMeta = _context20.sent;

                if (navigatorMeta) {
                  _context20.next = 6;
                  break;
                }

                throw new Error('Could not load navigator metadata.');

              case 6:
                return _context20.abrupt("return", new Promise(function (resolve, reject) {
                  (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.updateNavigatorProperties)({
                    identity: navigatorMeta.identity,
                    properties: {
                      description: comment
                    }
                  }).then( /*#__PURE__*/function () {
                    var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(entity) {
                      return regeneratorRuntime.wrap(function _callee18$(_context18) {
                        while (1) {
                          switch (_context18.prev = _context18.next) {
                            case 0:
                              if (entity) {
                                _this15.navigatorMeta = entity;
                                _this15.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);

                                _this15.saveLater();
                              }

                              _this15.getComment(options).then(function (comment) {
                                if (_this15.commentObservable) {
                                  _this15.commentObservable(comment);
                                }

                                resolve(comment);
                              })["catch"](reject);

                            case 2:
                            case "end":
                              return _context18.stop();
                          }
                        }
                      }, _callee18);
                    }));

                    return function (_x40) {
                      return _ref16.apply(this, arguments);
                    };
                  }())["catch"](reject);
                }));

              case 7:
                return _context20.abrupt("return", new Promise(function (resolve, reject) {
                  (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.updateSourceMetadata)({
                    entry: _this15,
                    properties: {
                      comment: comment
                    },
                    silenceErrors: options === null || options === void 0 ? void 0 : options.silenceErrors
                  }).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                    var _comment;

                    return regeneratorRuntime.wrap(function _callee19$(_context19) {
                      while (1) {
                        switch (_context19.prev = _context19.next) {
                          case 0:
                            _context19.prev = 0;
                            _context19.next = 3;
                            return _this15.reloadSourceMeta(options);

                          case 3:
                            _context19.next = 5;
                            return _this15.getComment(options);

                          case 5:
                            _comment = _context19.sent;

                            if (_this15.commentObservable) {
                              _this15.commentObservable(_comment);
                            }

                            resolve(_comment);
                            _context19.next = 13;
                            break;

                          case 10:
                            _context19.prev = 10;
                            _context19.t0 = _context19["catch"](0);
                            reject(_context19.t0);

                          case 13:
                          case "end":
                            return _context19.stop();
                        }
                      }
                    }, _callee19, null, [[0, 10]]);
                  })))["catch"](reject);
                }));

              case 8:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      function setComment(_x38, _x39) {
        return _setComment.apply(this, arguments);
      }

      return setComment;
    }()
    /**
     * Adds a list of tags and updates the navigator metadata of the entry
     */

  }, {
    key: "addNavigatorTags",
    value: function () {
      var _addNavigatorTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21(tags, apiOptions) {
        var _this16 = this;

        var navigatorMeta;
        return regeneratorRuntime.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                if (this.canHaveNavigatorMetadata()) {
                  _context21.next = 2;
                  break;
                }

                return _context21.abrupt("return", Promise.reject());

              case 2:
                _context21.next = 4;
                return this.getNavigatorMeta(apiOptions);

              case 4:
                navigatorMeta = _context21.sent;
                return _context21.abrupt("return", new Promise(function (resolve, reject) {
                  (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.addNavTags)(navigatorMeta.identity, tags).then(function (entity) {
                    if (entity) {
                      _this16.navigatorMeta = entity;
                      _this16.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);

                      _this16.saveLater();

                      resolve(entity);
                    } else {
                      reject();
                    }
                  })["catch"](reject);
                }));

              case 6:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      function addNavigatorTags(_x41, _x42) {
        return _addNavigatorTags.apply(this, arguments);
      }

      return addNavigatorTags;
    }()
    /**
     * Removes a list of tags and updates the navigator metadata of the entry
     */

  }, {
    key: "deleteNavigatorTags",
    value: function () {
      var _deleteNavigatorTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22(tags, apiOptions) {
        var _this17 = this;

        var navigatorMeta;
        return regeneratorRuntime.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                if (this.canHaveNavigatorMetadata()) {
                  _context22.next = 2;
                  break;
                }

                return _context22.abrupt("return", Promise.reject());

              case 2:
                _context22.next = 4;
                return this.getNavigatorMeta(apiOptions);

              case 4:
                navigatorMeta = _context22.sent;
                return _context22.abrupt("return", new Promise(function (resolve, reject) {
                  (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.deleteNavTags)(navigatorMeta.identity, tags).then(function (entity) {
                    if (entity) {
                      _this17.navigatorMeta = entity;
                      _this17.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entity);

                      _this17.saveLater();

                      resolve(entity);
                    } else {
                      reject();
                    }
                  })["catch"](reject);
                }));

              case 6:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      function deleteNavigatorTags(_x43, _x44) {
        return _deleteNavigatorTags.apply(this, arguments);
      }

      return deleteNavigatorTags;
    }()
    /**
     * Checks if the entry can have children or not without fetching additional metadata.
     */

  }, {
    key: "hasPossibleChildren",
    value: function hasPossibleChildren() {
      return this.path.length < 3 || !this.definition && !this.sourceMeta || !!this.sourceMeta && /^(?:struct|array|map)/i.test(this.sourceMeta.type) || !!this.definition && !!this.definition.type && /^(?:struct|array|map)/i.test(this.definition.type);
    }
    /**
     * Returns the index representing the order in which the backend returned this entry.
     */

  }, {
    key: "getIndex",
    value: function getIndex() {
      return this.definition && this.definition.index || 0;
    }
    /**
     * Returns the dialect of this entry.
     */

  }, {
    key: "getDialect",
    value: function getDialect() {
      return this.getConnector().dialect || this.getConnector().id; // .id for editor v1
    }
    /**
     * Returns the connector for this entry
     */

  }, {
    key: "getConnector",
    value: function getConnector() {
      return this.dataCatalog.connector;
    }
    /**
     * Returns true if the entry represents a data source.
     *
     * @return {boolean}
     */

  }, {
    key: "isSource",
    value: function isSource() {
      return this.path.length === 0;
    }
    /**
     * Returns true if the entry is a database.
     */

  }, {
    key: "isDatabase",
    value: function isDatabase() {
      return this.path.length === 1;
    }
    /**
     * Returns true if the entry is a table or a view.
     *
     * @return {boolean}
     */

  }, {
    key: "isTableOrView",
    value: function isTableOrView() {
      return this.path.length === 2;
    }
    /**
     * Returns the default title used for the entry, the qualified path with type for fields. Optionally include
     * the comment after, if already resolved.
     */

  }, {
    key: "getTitle",
    value: function getTitle(includeComment) {
      var title = this.getQualifiedPath();

      if (this.isField()) {
        var type = this.getType();

        if (type) {
          title += ' (' + type + ')';
        }
      } else if (this.definition && this.definition.type && this.definition.type.toLowerCase() === 'materialized_view') {
        title += ' (' + (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_5__.default)('Materialized') + ')';
      }

      if (includeComment && this.hasResolvedComment() && this.getResolvedComment()) {
        title += ' - ' + this.getResolvedComment();
      }

      return title;
    }
    /**
     * Returns the fully qualified path for this entry.
     */

  }, {
    key: "getQualifiedPath",
    value: function getQualifiedPath() {
      return this.path.join('.');
    }
    /**
     * Returns the display name for the entry, name or qualified path plus type for fields
     */

  }, {
    key: "getDisplayName",
    value: function getDisplayName(qualified) {
      var displayName = qualified ? this.getQualifiedPath() : this.name;

      if (this.isField()) {
        var type = this.getType();

        if (type) {
          return "".concat(displayName, " (").concat(type, ")");
        }
      }

      return displayName;
    }
    /**
     * Returns true for columns that are a primary key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */

  }, {
    key: "isPrimaryKey",
    value: function isPrimaryKey() {
      return !!(this.isColumn() && this.definition && this.definition.primaryKey);
    }
    /**
     * Returns true if the entry is a partition key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */

  }, {
    key: "isPartitionKey",
    value: function isPartitionKey() {
      return !!(this.definition && this.definition.partitionKey);
    }
    /**
     * Returns true if the entry is a foreign key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */

  }, {
    key: "isForeignKey",
    value: function isForeignKey() {
      return !!this.definition && !!this.definition.foreignKey;
    }
    /**
     * Returns true if the entry is either a partition or primary key. Note that the definition has to come from a parent entry, i.e.
     * getChildren().
     */

  }, {
    key: "isKey",
    value: function isKey() {
      return this.isPartitionKey() || this.isPrimaryKey() || this.isForeignKey();
    }
    /**
     * Returns true if the entry is a table. It will be accurate once the source meta has been loaded.
     */

  }, {
    key: "isTable",
    value: function isTable() {
      if (this.path.length === 2) {
        if (this.analysis && this.analysis.details && this.analysis.details.properties && this.analysis.details.properties.table_type === 'VIRTUAL_VIEW') {
          return false;
        }

        if (this.sourceMeta) {
          return !this.sourceMeta.is_view;
        }

        if (this.definition && this.definition.type) {
          return this.definition.type.toLowerCase() === 'table';
        }

        return true;
      }

      return false;
    }
    /**
     * Returns true if the entry is a view. It will be accurate once the source meta has been loaded.
     */

  }, {
    key: "isView",
    value: function isView() {
      if (this.path.length === 2) {
        if (this.sourceMeta && this.sourceMeta.is_view) {
          return true;
        }

        if (this.definition && this.definition.type && (this.definition.type.toLowerCase() === 'view' || this.definition.type.toLowerCase() === 'materialized_view')) {
          return true;
        }

        if (this.analysis && this.analysis.details && this.analysis.details.properties && this.analysis.details.properties.table_type === 'VIRTUAL_VIEW') {
          return true;
        }
      }

      return false;
    }
    /**
     * Returns true if the entry is a ML Model. It will be accurate once the source meta has been loaded.
     */

  }, {
    key: "isModel",
    value: function isModel() {
      return this.path.length === 2 && !!this.definition && !!this.definition.type && this.definition.type.toLowerCase() === 'model';
    }
    /**
     * Returns true if the entry is a column.
     */

  }, {
    key: "isColumn",
    value: function isColumn() {
      return this.path.length === 3;
    }
    /**
     * Returns true if the entry is a column. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     */

  }, {
    key: "isComplex",
    value: function isComplex() {
      var sourceMeta = this.sourceMeta;
      return !!(this.path.length > 2 && (sourceMeta && /^(?:struct|array|map)/i.test(sourceMeta.type) || this.definition && this.definition.type && /^(?:struct|array|map)/i.test(this.definition.type)));
    }
    /**
     * Returns true if the entry is a field, i.e. column or child of a complex type.
     */

  }, {
    key: "isField",
    value: function isField() {
      return this.path.length > 2;
    }
    /**
     * Returns true if the entry is an array. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     */

  }, {
    key: "isArray",
    value: function isArray() {
      return !!this.sourceMeta && /^array/i.test(this.sourceMeta.type) || !!this.definition && !!this.definition.type && /^array/i.test(this.definition.type);
    }
    /**
     * Returns true if the entry is a map. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     */

  }, {
    key: "isMap",
    value: function isMap() {
      return !!this.sourceMeta && /^map/i.test(this.sourceMeta.type) || !!this.definition && !!this.definition.type && /^map/i.test(this.definition.type);
    }
    /**
     * Returns true if the entry is a map value. It will be accurate once the source meta has been loaded or if loaded
     * from a parent entry via getChildren().
     */

  }, {
    key: "isMapValue",
    value: function isMapValue() {
      return !!this.definition && !!this.definition.isMapValue;
    }
    /**
     * Returns the type of the entry. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     *
     * The returned string is always lower case and for complex entries the type definition is stripped to
     * either 'array', 'map' or 'struct'.
     */

  }, {
    key: "getType",
    value: function getType() {
      var type = this.getRawType();

      if (type.indexOf('<') !== -1) {
        type = type.substring(0, type.indexOf('<'));
      }

      return type.toLowerCase();
    }
    /**
     * Returns the raw type of the entry. It will be accurate once the source meta has been loaded or if loaded from
     * a parent entry via getChildren().
     *
     * For complex entries the type definition is the full version.
     */

  }, {
    key: "getRawType",
    value: function getRawType() {
      return this.sourceMeta && this.sourceMeta.type || this.definition && this.definition.type || '';
    }
    /**
     * Gets the source metadata for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getSourceMeta",
    value: function getSourceMeta(options) {
      if (this.sourceMetaPromise && this.sourceMetaPromise.cancelled) {
        this.sourceMetaPromise = undefined;
      }

      if (!this.sourceMetaPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.sourceMetaPromise || shouldReload(options)) {
        return this.reloadSourceMeta(options);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sourceMetaPromise, options);
    }
    /**
     * Gets the analysis for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getAnalysis",
    value: function getAnalysis(options) {
      if (this.analysisPromise && this.analysisPromise.cancelled) {
        this.analysisPromise = undefined;
      }

      if (!this.analysisPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.analysisPromise || shouldReload(options)) {
        return this.reloadAnalysis(options);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.analysisPromise, options);
    }
    /**
     * Gets the partitions for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getPartitions",
    value: function getPartitions(options) {
      if (this.partitionsPromise && this.partitionsPromise.cancelled) {
        this.partitionsPromise = undefined;
      }

      if (!this.isTableOrView() || !this.partitionsPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.partitionsPromise || shouldReload(options)) {
        return this.reloadPartitions(options);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.partitionsPromise, options);
    }
    /**
     * Gets the Navigator metadata for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getNavigatorMeta",
    value: function getNavigatorMeta(options) {
      if (this.navigatorMetaPromise && this.navigatorMetaPromise.cancelled) {
        this.navigatorMetaPromise = undefined;
      }

      options = (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.forceSilencedErrors)(options);

      if (!this.canHaveNavigatorMetadata() || !this.navigatorMetaPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.navigatorMetaPromise || shouldReload(options)) {
        return this.reloadNavigatorMeta(options);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.navigatorMetaPromise, options);
    }
    /**
     * Gets the SQL Analyzer metadata for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getSqlAnalyzerMeta",
    value: function getSqlAnalyzerMeta(options) {
      if (this.sqlAnalyzerMetaPromise && this.sqlAnalyzerMetaPromise.cancelled) {
        this.sqlAnalyzerMetaPromise = undefined;
      }

      options.silenceErrors = true;

      if (!this.dataCatalog.canHaveSqlAnalyzerMeta() || !this.isTableOrView()) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.sqlAnalyzerMetaPromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.sqlAnalyzerMetaPromise || shouldReload(options)) {
        return this.reloadSqlAnalyzerMeta(options);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.sqlAnalyzerMetaPromise, options);
    }
    /**
     * Gets the sample for the entry, if unknown it will first check if any parent table already has the sample. It
     * will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getSample",
    value: function getSample(options) {
      var _this18 = this;

      if (this.samplePromise && this.samplePromise.cancelled) {
        this.samplePromise = undefined;
      } // This prevents caching of any non-standard sample queries, i.e. DISTINCT etc.


      if (options && options.operation && options.operation !== 'default') {
        var operation = options.operation;
        var samplePromise = (0,catalog_api__WEBPACK_IMPORTED_MODULE_2__.fetchSample)({
          entry: this,
          operation: operation,
          silenceErrors: options.silenceErrors
        });
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(samplePromise, options);
      } // Check if parent has a sample that we can reuse


      if (!this.samplePromise && this.isColumn() && !shouldReload(options)) {
        this.samplePromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
          var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24(resolve, reject, onCancel) {
            var cancellablePromises, tableEntry, _ret, reloadPromise;

            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    cancellablePromises = [];
                    onCancel(function () {
                      cancellablePromises.forEach(function (promise) {
                        return promise.cancel();
                      });
                    });
                    _context24.prev = 2;
                    _context24.next = 5;
                    return _this18.dataCatalog.getEntry({
                      namespace: _this18.namespace,
                      compute: _this18.compute,
                      path: _this18.path.slice(0, 2),
                      definition: {
                        type: 'table'
                      }
                    });

                  case 5:
                    tableEntry = _context24.sent;

                    if (!(tableEntry && tableEntry.samplePromise)) {
                      _context24.next = 11;
                      break;
                    }

                    return _context24.delegateYield( /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
                      var parentSample, colSample, _loop, i, _ret2;

                      return regeneratorRuntime.wrap(function _callee23$(_context23) {
                        while (1) {
                          switch (_context23.prev = _context23.next) {
                            case 0:
                              cancellablePromises.push((0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(tableEntry.samplePromise, options));
                              _context23.next = 3;
                              return tableEntry.samplePromise;

                            case 3:
                              parentSample = _context23.sent;
                              colSample = {
                                hueTimestamp: parentSample.hueTimestamp,
                                has_more: parentSample.has_more,
                                type: parentSample.type,
                                data: [],
                                meta: []
                              };

                              if (!parentSample.meta) {
                                _context23.next = 15;
                                break;
                              }

                              _loop = function _loop(i) {
                                if (parentSample.meta[i].name.toLowerCase() === _this18.name.toLowerCase()) {
                                  colSample.meta[0] = parentSample.meta[i];
                                  parentSample.data.forEach(function (parentRow) {
                                    colSample.data.push([parentRow[i]]);
                                  });
                                  return "break";
                                }
                              };

                              i = 0;

                            case 8:
                              if (!(i < parentSample.meta.length)) {
                                _context23.next = 15;
                                break;
                              }

                              _ret2 = _loop(i);

                              if (!(_ret2 === "break")) {
                                _context23.next = 12;
                                break;
                              }

                              return _context23.abrupt("break", 15);

                            case 12:
                              i++;
                              _context23.next = 8;
                              break;

                            case 15:
                              if (!colSample.meta.length) {
                                _context23.next = 19;
                                break;
                              }

                              _this18.sample = colSample;
                              resolve(_this18.sample);
                              return _context23.abrupt("return", {
                                v: void 0
                              });

                            case 19:
                            case "end":
                              return _context23.stop();
                          }
                        }
                      }, _callee23);
                    })(), "t0", 8);

                  case 8:
                    _ret = _context24.t0;

                    if (!(_typeof(_ret) === "object")) {
                      _context24.next = 11;
                      break;
                    }

                    return _context24.abrupt("return", _ret.v);

                  case 11:
                    _context24.next = 15;
                    break;

                  case 13:
                    _context24.prev = 13;
                    _context24.t1 = _context24["catch"](2);

                  case 15:
                    if (!cachedOnly(options)) {
                      _context24.next = 19;
                      break;
                    }

                    reject();
                    _context24.next = 31;
                    break;

                  case 19:
                    reloadPromise = _this18.reloadSample(options);
                    _context24.prev = 20;
                    _context24.t2 = resolve;
                    _context24.next = 24;
                    return reloadPromise;

                  case 24:
                    _context24.t3 = _context24.sent;
                    (0, _context24.t2)(_context24.t3);
                    _context24.next = 31;
                    break;

                  case 28:
                    _context24.prev = 28;
                    _context24.t4 = _context24["catch"](20);
                    reject();

                  case 31:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, null, [[2, 13], [20, 28]]);
          }));

          return function (_x45, _x46, _x47) {
            return _ref18.apply(this, arguments);
          };
        }());
        return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.samplePromise, options);
      }

      if (!this.samplePromise && cachedOnly(options)) {
        return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
      }

      if (!this.samplePromise || shouldReload(options)) {
        return this.reloadSample(options);
      }

      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(this.samplePromise, options);
    }
    /**
     * Gets the top aggregate UDFs for the entry if it's a table or view. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getTopAggs",
    value: function getTopAggs(options) {
      var _this19 = this;

      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25(resolve, reject, onCancel) {
          var multiTableEntry, topAggsPromise;
          return regeneratorRuntime.wrap(function _callee25$(_context25) {
            while (1) {
              switch (_context25.prev = _context25.next) {
                case 0:
                  _context25.next = 2;
                  return getMultiTableEntry(_this19);

                case 2:
                  multiTableEntry = _context25.sent;
                  topAggsPromise = multiTableEntry.getTopAggs(options);
                  onCancel(function () {
                    topAggsPromise.cancel();
                  });
                  topAggsPromise.then(resolve)["catch"](reject);

                case 6:
                case "end":
                  return _context25.stop();
              }
            }
          }, _callee25);
        }));

        return function (_x48, _x49, _x50) {
          return _ref19.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }
    /**
     * Gets the top filters for the entry if it's a table or view. It will fetch it if not cached or if the refresh option is set.
     *
     * @return {CancellableJqPromise}
     */

  }, {
    key: "getTopFilters",
    value: function getTopFilters(options) {
      var _this20 = this;

      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26(resolve, reject, onCancel) {
          var multiTableEntry, topFiltersPromise;
          return regeneratorRuntime.wrap(function _callee26$(_context26) {
            while (1) {
              switch (_context26.prev = _context26.next) {
                case 0:
                  _context26.next = 2;
                  return getMultiTableEntry(_this20);

                case 2:
                  multiTableEntry = _context26.sent;
                  topFiltersPromise = multiTableEntry.getTopFilters(options);
                  onCancel(function () {
                    topFiltersPromise.cancel();
                  });
                  topFiltersPromise.then(resolve)["catch"](reject);

                case 6:
                case "end":
                  return _context26.stop();
              }
            }
          }, _callee26);
        }));

        return function (_x51, _x52, _x53) {
          return _ref20.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }
    /**
     * Gets the top joins for the entry if it's a table or view. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getTopJoins",
    value: function getTopJoins(options) {
      var _this21 = this;

      var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref21 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27(resolve, reject, onCancel) {
          var multiTableEntry, topJoinsPromise;
          return regeneratorRuntime.wrap(function _callee27$(_context27) {
            while (1) {
              switch (_context27.prev = _context27.next) {
                case 0:
                  _context27.next = 2;
                  return getMultiTableEntry(_this21);

                case 2:
                  multiTableEntry = _context27.sent;
                  topJoinsPromise = multiTableEntry.getTopJoins(options);
                  onCancel(function () {
                    topJoinsPromise.cancel();
                  });
                  topJoinsPromise.then(resolve)["catch"](reject);

                case 6:
                case "end":
                  return _context27.stop();
              }
            }
          }, _callee27);
        }));

        return function (_x54, _x55, _x56) {
          return _ref21.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_3__.applyCancellable)(promise);
    }
  }]);

  return DataCatalogEntry;
}();



/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/GeneralDataCatalog.ts":
/*!*******************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/GeneralDataCatalog.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GeneralDataCatalog)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./desktop/core/src/desktop/js/catalog/api.ts");
/* harmony import */ var _dataCatalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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



var STORAGE_POSTFIX = window.LOGGED_USERNAME;
var DATA_CATALOG_VERSION = 5;
var NAV_TAGS_STORE_ID = 'hue.dataCatalog.allNavTags';

var GeneralDataCatalog = /*#__PURE__*/function () {
  function GeneralDataCatalog() {
    _classCallCheck(this, GeneralDataCatalog);

    this.store = void 0;
    this.allNavigatorTagsPromise = void 0;
    this.store = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'HueDataCatalog_' + STORAGE_POSTFIX
    });
  }

  _createClass(GeneralDataCatalog, [{
    key: "getAllNavigatorTags",
    value: function () {
      var _getAllNavigatorTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(options) {
        var _this = this;

        var ttl;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.allNavigatorTagsPromise && _dataCatalog__WEBPACK_IMPORTED_MODULE_2__.DataCatalog.cacheEnabled() && (!options || !options.refreshCache))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", this.allNavigatorTagsPromise);

              case 2:
                if (window.HAS_CATALOG) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return", {});

              case 4:
                ttl = window.CACHEABLE_TTL || {};
                this.allNavigatorTagsPromise = new Promise(function (resolve, reject) {
                  var reloadAllTags = function reloadAllTags() {
                    (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchAllNavigatorTags)({
                      silenceErrors: options && options.silenceErrors
                    }).then(function (allTags) {
                      resolve(allTags);

                      if (ttl["default"] && ttl["default"] > 0) {
                        _this.store.setItem(NAV_TAGS_STORE_ID, {
                          allTags: allTags,
                          hueTimestamp: Date.now(),
                          version: DATA_CATALOG_VERSION
                        });
                      }
                    })["catch"](reject);
                  };

                  if (ttl["default"] && ttl["default"] > 0 && _dataCatalog__WEBPACK_IMPORTED_MODULE_2__.DataCatalog.cacheEnabled() && (!options || !options.refreshCache)) {
                    _this.store.getItem(NAV_TAGS_STORE_ID).then(function (storeEntry) {
                      if (storeEntry && storeEntry.version === DATA_CATALOG_VERSION && ttl["default"] && (!storeEntry.hueTimestamp || Date.now() - storeEntry.hueTimestamp < ttl["default"])) {
                        resolve(storeEntry.allTags);
                      } else {
                        reloadAllTags();
                      }
                    })["catch"](reloadAllTags);
                  } else {
                    reloadAllTags();
                  }
                });
                return _context.abrupt("return", this.allNavigatorTagsPromise);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAllNavigatorTags(_x) {
        return _getAllNavigatorTags.apply(this, arguments);
      }

      return getAllNavigatorTags;
    }()
  }, {
    key: "updateAllNavigatorTags",
    value: function () {
      var _updateAllNavigatorTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tagsToAdd, tagsToRemove) {
        var allTags;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.allNavigatorTagsPromise) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 3;
                return this.allNavigatorTagsPromise;

              case 3:
                allTags = _context2.sent;
                tagsToAdd.forEach(function (newTag) {
                  if (!allTags[newTag]) {
                    allTags[newTag] = 0;
                  }

                  allTags[newTag]++;
                });
                tagsToRemove.forEach(function (removedTag) {
                  if (!allTags[removedTag]) {
                    allTags[removedTag]--;

                    if (allTags[removedTag] === 0) {
                      delete allTags[removedTag];
                    }
                  }
                });
                _context2.next = 8;
                return this.store.setItem(NAV_TAGS_STORE_ID, {
                  allTags: allTags,
                  hueTimestamp: Date.now(),
                  version: DATA_CATALOG_VERSION
                });

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateAllNavigatorTags(_x2, _x3) {
        return _updateAllNavigatorTags.apply(this, arguments);
      }

      return updateAllNavigatorTags;
    }()
  }]);

  return GeneralDataCatalog;
}();



/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/MultiTableEntry.ts":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/MultiTableEntry.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dataCatalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/catalogUtils */ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts");
/* harmony import */ var utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/timing/noop */ "./desktop/core/src/desktop/js/utils/timing/noop.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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





var fetchAndSave = function fetchAndSave(sqlAnalyzerFunction, setFunction, entry, apiOptions) {
  var promise = sqlAnalyzerFunction({
    paths: entry.paths,
    // Set for MultiTableEntry
    silenceErrors: apiOptions && apiOptions.silenceErrors
  });
  promise.then(function (data) {
    setFunction(data);
    entry.saveLater();
  })["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__.default);
  return promise;
};
/**
 * Helper function to reload a SQL Analyzer multi table attribute, like topAggs or topFilters
 */


var genericSqlAnalyzerReload = function genericSqlAnalyzerReload(multiTableEntry, options, promiseSetter, dataAttributeSetter, sqlAnalyzerFunction) {
  var promise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise(function (resolve, reject, onCancel) {
    if (!multiTableEntry.dataCatalog.canHaveSqlAnalyzerMeta()) {
      reject();
      return;
    }

    var fetchPromise = fetchAndSave(sqlAnalyzerFunction, dataAttributeSetter, multiTableEntry, options);
    onCancel(function () {
      if (fetchPromise.cancel) {
        fetchPromise.cancel();
      }
    });
    fetchPromise.then(resolve)["catch"](function (err) {
      if (fetchPromise.cancelled) {
        promiseSetter(undefined);
      }

      reject(err);
    });
  });
  promiseSetter(promise);
  return promise;
};
/**
 * Helper function to get a SQL Analyzer multi table attribute, like topAggs or topFilters
 */


var genericSqlAnalyzerGet = function genericSqlAnalyzerGet(multiTableEntry, options, promiseSetter, promiseGetter, dataAttributeSetter, apiHelperFunction) {
  var promise = promiseGetter();

  if (_dataCatalog__WEBPACK_IMPORTED_MODULE_0__.DataCatalog.cacheEnabled() && options && options.cachedOnly) {
    return promise && (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(promise) || api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.reject();
  }

  if (!promise || !_dataCatalog__WEBPACK_IMPORTED_MODULE_0__.DataCatalog.cacheEnabled() || options && options.refreshCache) {
    promise = genericSqlAnalyzerReload(multiTableEntry, options, promiseSetter, dataAttributeSetter, apiHelperFunction);
  }

  return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(promise, options);
};

var MultiTableEntry = /*#__PURE__*/function () {
  function MultiTableEntry(options) {
    _classCallCheck(this, MultiTableEntry);

    this.dataCatalog = void 0;
    this.identifier = void 0;
    this.paths = void 0;
    this.saveTimeout = -1;
    this.topAggs = void 0;
    this.topAggsPromise = void 0;
    this.topColumns = void 0;
    this.topColumnsPromise = void 0;
    this.topFilters = void 0;
    this.topFiltersPromise = void 0;
    this.topJoins = void 0;
    this.topJoinsPromise = void 0;
    this.identifier = options.identifier;
    this.dataCatalog = options.dataCatalog;
    this.paths = options.paths;
  }
  /**
   * Save the multi table entry to cache
   *
   * @return {Promise}
   */


  _createClass(MultiTableEntry, [{
    key: "save",
    value: function save() {
      window.clearTimeout(this.saveTimeout);
      return this.dataCatalog.persistMultiTableEntry(this);
    }
    /**
     * Save the multi table entry at a later point of time
     */

  }, {
    key: "saveLater",
    value: function saveLater() {
      var _this = this;

      var ttl = window.CACHEABLE_TTL;

      if (ttl && ttl["default"] && ttl["default"] > 0) {
        window.clearTimeout(this.saveTimeout);
        this.saveTimeout = window.setTimeout(function () {
          _this.save()["catch"]();
        }, 1000);
      }
    }
    /**
     * Returns the dialect of this entry.
     */

  }, {
    key: "getDialect",
    value: function getDialect() {
      return this.getConnector().dialect || this.getConnector().id; // .id for editor v1
    }
    /**
     * Returns the connector for this entry
     */

  }, {
    key: "getConnector",
    value: function getConnector() {
      return this.dataCatalog.connector;
    }
    /**
     * Gets the top aggregate UDFs for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getTopAggs",
    value: function getTopAggs(options) {
      var _this2 = this;

      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this2.topAggsPromise = promise;
      }, function () {
        return _this2.topAggsPromise;
      }, function (val) {
        _this2.topAggs = val;
      }, options.sqlAnalyzer.fetchTopAggs.bind(options.sqlAnalyzer));
    }
    /**
     * Gets the top columns for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getTopColumns",
    value: function getTopColumns(options) {
      var _this3 = this;

      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this3.topColumnsPromise = promise;
      }, function () {
        return _this3.topColumnsPromise;
      }, function (val) {
        _this3.topColumns = val;
      }, options.sqlAnalyzer.fetchTopColumns.bind(options.sqlAnalyzer));
    }
    /**
     * Gets the top filters for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getTopFilters",
    value: function getTopFilters(options) {
      var _this4 = this;

      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this4.topFiltersPromise = promise;
      }, function () {
        return _this4.topFiltersPromise;
      }, function (val) {
        _this4.topFilters = val;
      }, options.sqlAnalyzer.fetchTopFilters.bind(options.sqlAnalyzer));
    }
    /**
     * Gets the top joins for the entry. It will fetch it if not cached or if the refresh option is set.
     */

  }, {
    key: "getTopJoins",
    value: function getTopJoins(options) {
      var _this5 = this;

      return genericSqlAnalyzerGet(this, options, function (promise) {
        _this5.topJoinsPromise = promise;
      }, function () {
        return _this5.topJoinsPromise;
      }, function (val) {
        _this5.topJoins = val;
      }, options.sqlAnalyzer.fetchTopJoins.bind(options.sqlAnalyzer));
    }
  }]);

  return MultiTableEntry;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiTableEntry);

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/ApiSqlAnalyzer.ts":
/*!************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/ApiSqlAnalyzer.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApiSqlAnalyzer)
/* harmony export */ });
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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


/**
 * Fetches the popularity for various aspects of the given tables
 */
var genericSqlAnalyzerMultiTableFetch = function genericSqlAnalyzerMultiTableFetch(_ref, url) {
  var silenceErrors = _ref.silenceErrors,
      paths = _ref.paths,
      connector = _ref.connector;
  var dbTables = new Set();
  paths.forEach(function (path) {
    dbTables.add(path.join('.'));
  });
  var data = {
    connector: JSON.stringify(connector),
    dbTables: JSON.stringify(_toConsumableArray(dbTables.values()))
  };
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(url, data, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessage)(response));
      } else {
        response.hueTimestamp = Date.now();
        resolve(response);
      }
    }
  });
};

var COMPATIBILITY_URL = '/api/optimizer/query_compatibility';
var PREDICT_URL = '/api/optimizer/predict';
var RISK_URL = '/api/optimizer/query_risk/';
var SIMILARITY_URL = '/api/optimizer/similar_queries';
var TOP_AGGS_URL = '/api/optimizer/top_aggs';
var TOP_COLUMNS_URL = '/api/optimizer/top_columns';
var TOP_FILTERS_URL = '/api/optimizer/top_filters';
var TOP_JOINS_URL = '/api/optimizer/top_joins';
var TOP_TABLES_URL = '/api/optimizer/top_tables';
var TABLE_DETAILS_URL = '/api/optimizer/table_details';

var ApiSqlAnalyzer = /*#__PURE__*/function () {
  function ApiSqlAnalyzer(connector) {
    _classCallCheck(this, ApiSqlAnalyzer);

    this.connector = void 0;
    this.connector = connector;
  }

  _createClass(ApiSqlAnalyzer, [{
    key: "analyzeCompatibility",
    value: function analyzeCompatibility(_ref2) {
      var notebookJson = _ref2.notebookJson,
          snippetJson = _ref2.snippetJson,
          sourcePlatform = _ref2.sourcePlatform,
          targetPlatform = _ref2.targetPlatform,
          silenceErrors = _ref2.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(COMPATIBILITY_URL, {
        connector: JSON.stringify(this.connector),
        notebook: notebookJson,
        snippet: snippetJson,
        sourcePlatform: sourcePlatform,
        targetPlatform: targetPlatform
      }, {
        silenceErrors: silenceErrors
      });
    }
  }, {
    key: "analyzeRisk",
    value: function analyzeRisk(_ref3) {
      var notebookJson = _ref3.notebookJson,
          snippetJson = _ref3.snippetJson,
          silenceErrors = _ref3.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(RISK_URL, {
        connector: JSON.stringify(this.connector),
        notebook: notebookJson,
        snippet: snippetJson
      }, {
        silenceErrors: silenceErrors
      });
    }
  }, {
    key: "analyzeSimilarity",
    value: function analyzeSimilarity(_ref4) {
      var notebookJson = _ref4.notebookJson,
          snippetJson = _ref4.snippetJson,
          sourcePlatform = _ref4.sourcePlatform,
          silenceErrors = _ref4.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(SIMILARITY_URL, {
        connector: JSON.stringify(this.connector),
        notebook: notebookJson,
        snippet: snippetJson,
        sourcePlatform: sourcePlatform
      }, {
        silenceErrors: silenceErrors
      });
    }
  }, {
    key: "fetchPopularity",
    value: function fetchPopularity(_ref5) {
      var paths = _ref5.paths,
          silenceErrors = _ref5.silenceErrors;
      var url, data;

      if (paths.length === 1 && paths[0].length === 1) {
        url = TOP_TABLES_URL;
        data = {
          connector: JSON.stringify(this.connector),
          database: paths[0][0]
        };
      } else {
        url = TOP_COLUMNS_URL;
        data = {
          connector: JSON.stringify(this.connector),
          dbTables: JSON.stringify(paths.map(function (path) {
            return path.join('.');
          }))
        };
      }

      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(url, data, {
        silenceErrors: silenceErrors,
        handleSuccess: function handleSuccess(response, resolve, reject) {
          if ((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.successResponseIsError)(response)) {
            reject((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessage)(response));
          } else {
            response.hueTimestamp = Date.now();
            resolve(response);
          }
        }
      });
    }
  }, {
    key: "fetchTopAggs",
    value: function fetchTopAggs(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_AGGS_URL);
    }
  }, {
    key: "fetchTopColumns",
    value: function fetchTopColumns(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_COLUMNS_URL);
    }
  }, {
    key: "fetchTopFilters",
    value: function fetchTopFilters(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_FILTERS_URL);
    }
  }, {
    key: "fetchTopJoins",
    value: function fetchTopJoins(options) {
      return genericSqlAnalyzerMultiTableFetch(_objectSpread(_objectSpread({}, options), {}, {
        connector: this.connector
      }), TOP_JOINS_URL);
    }
  }, {
    key: "fetchSqlAnalyzerMeta",
    value: function fetchSqlAnalyzerMeta(_ref6) {
      var path = _ref6.path,
          silenceErrors = _ref6.silenceErrors;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(TABLE_DETAILS_URL, {
        connector: JSON.stringify(this.connector),
        databaseName: path[0],
        tableName: path[1]
      }, {
        silenceErrors: silenceErrors,
        handleSuccess: function handleSuccess(response, resolve, reject) {
          if (response.status === 0 && response.details) {
            response.details.hueTimestamp = Date.now();
            resolve(response.details);
          }

          reject((0,api_utils__WEBPACK_IMPORTED_MODULE_0__.extractErrorMessage)(response));
        }
      });
    }
  }, {
    key: "predict",
    value: function predict(_ref7) {
      var beforeCursor = _ref7.beforeCursor,
          afterCursor = _ref7.afterCursor;
      return (0,api_utils__WEBPACK_IMPORTED_MODULE_0__.post)(PREDICT_URL, {
        connector: JSON.stringify(this.connector),
        beforeCursor: beforeCursor,
        afterCursor: afterCursor
      }, {
        silenceErrors: true,
        handleSuccess: function handleSuccess(response, resolve) {
          resolve(response);
        }
      });
    }
  }]);

  return ApiSqlAnalyzer;
}();



/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/CombinedSqlAnalyser.ts":
/*!*****************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/CombinedSqlAnalyser.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CombinedSqlAnalyser)
/* harmony export */ });
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! catalog/contextCatalog */ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts");
/* harmony import */ var _ApiSqlAnalyzer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiSqlAnalyzer */ "./desktop/core/src/desktop/js/catalog/analyzer/ApiSqlAnalyzer.ts");
/* harmony import */ var catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/analyzer/types */ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var parse_sql_sqlParserRepository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse/sql/sqlParserRepository */ "./desktop/core/src/desktop/js/parse/sql/sqlParserRepository.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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








var CombinedSqlAnalyser = /*#__PURE__*/function () {
  function CombinedSqlAnalyser(connector) {
    _classCallCheck(this, CombinedSqlAnalyser);

    this.apiAnalyzer = void 0;
    this.connector = void 0;
    this.apiAnalyzer = new _ApiSqlAnalyzer__WEBPACK_IMPORTED_MODULE_2__.default(connector);
    this.connector = connector;
  }

  _createClass(CombinedSqlAnalyser, [{
    key: "analyzeRisk",
    value: function analyzeRisk(options) {
      var _this = this;

      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resolve, reject, onCancel) {
          var apiPromise, snippet, missingLimit, hints, isSelectStar, apiResponse;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (_this.connector.dialect) {
                    _context.next = 3;
                    break;
                  }

                  reject();
                  return _context.abrupt("return");

                case 3:
                  apiPromise = _this.apiAnalyzer.analyzeRisk(_objectSpread(_objectSpread({}, options), {}, {
                    silenceErrors: true
                  }));
                  onCancel(function () {
                    apiPromise.cancel();
                  });
                  snippet = JSON.parse(options.snippetJson);
                  _context.next = 8;
                  return _this.checkMissingLimit(snippet.statement, _this.connector.dialect);

                case 8:
                  missingLimit = _context.sent;
                  hints = missingLimit ? [{
                    riskTables: [],
                    riskAnalysis: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Query has no limit'),
                    riskId: 17,
                    risk: 'low',
                    riskRecommendation: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Append a limit clause to reduce the size of the result set')
                  }] : [];
                  _context.next = 12;
                  return _this.checkSelectStar(snippet.statement, _this.connector.dialect);

                case 12:
                  isSelectStar = _context.sent;

                  if (isSelectStar) {
                    hints.push({
                      riskTables: [],
                      riskAnalysis: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Query doing a SELECT *'),
                      // Could be triggered only if column number > 10 (todo in Validator API)
                      riskId: 18,
                      risk: 'low',
                      riskRecommendation: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Select only a subset of columns instead of all of them')
                    });
                  }

                  _context.prev = 14;
                  _context.next = 17;
                  return apiPromise;

                case 17:
                  apiResponse = _context.sent;

                  if (apiResponse.query_complexity && apiResponse.query_complexity.hints) {
                    hints.push.apply(hints, _toConsumableArray(apiResponse.query_complexity.hints));
                  }

                  _context.next = 23;
                  break;

                case 21:
                  _context.prev = 21;
                  _context.t0 = _context["catch"](14);

                case 23:
                  resolve({
                    status: 0,
                    message: '',
                    query_complexity: {
                      hints: hints,
                      noStats: true,
                      noDDL: false
                    }
                  });

                case 24:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[14, 21]]);
        }));

        return function (_x, _x2, _x3) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "checkMissingLimit",
    value: function () {
      var _checkMissingLimit = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(statement, dialect) {
        var autocompleter, parsedStatement;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return parse_sql_sqlParserRepository__WEBPACK_IMPORTED_MODULE_5__.default.getAutocompleteParser(dialect);

              case 2:
                autocompleter = _context2.sent;
                _context2.prev = 3;
                parsedStatement = autocompleter.parseSql(statement + ' ', '');
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](3);
                return _context2.abrupt("return", false);

              case 10:
                return _context2.abrupt("return", parsedStatement.locations.some(function (location) {
                  return location.type === 'statementType' && location.identifier === 'SELECT';
                }) && parsedStatement.locations.some(function (location) {
                  return location.type === 'table';
                }) && parsedStatement.locations.some(function (location) {
                  return location.type === 'limitClause' && location.missing;
                }));

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[3, 7]]);
      }));

      function checkMissingLimit(_x4, _x5) {
        return _checkMissingLimit.apply(this, arguments);
      }

      return checkMissingLimit;
    }()
  }, {
    key: "checkSelectStar",
    value: function () {
      var _checkSelectStar = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(statement, dialect) {
        var autocompleter, parsedStatement;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return parse_sql_sqlParserRepository__WEBPACK_IMPORTED_MODULE_5__.default.getAutocompleteParser(dialect);

              case 2:
                autocompleter = _context3.sent;
                _context3.prev = 3;
                parsedStatement = autocompleter.parseSql(statement + ' ', '');
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](3);
                return _context3.abrupt("return", false);

              case 10:
                return _context3.abrupt("return", parsedStatement.locations.some(function (location) {
                  return location.type === 'statementType' && location.identifier === 'SELECT';
                }) && parsedStatement.locations.some(function (location) {
                  return location.type === 'selectList' && !location.missing;
                }) && parsedStatement.locations.some(function (location) {
                  return location.type === 'asterisk';
                }));

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[3, 7]]);
      }));

      function checkSelectStar(_x6, _x7) {
        return _checkSelectStar.apply(this, arguments);
      }

      return checkSelectStar;
    }()
  }, {
    key: "fetchTopJoins",
    value: function fetchTopJoins(options) {
      var _this2 = this;

      var apiPromise = this.apiAnalyzer.fetchTopJoins(options);
      var path = options.paths[0].join('.');
      return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise(function (resolve, reject, onCancel) {
        (0,catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_1__.getNamespaces)(_objectSpread({
          connector: _this2.connector
        }, options)).then( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(result) {
            var entry, sourceMetaPromise, sourceMeta, values, apiResponse;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!(!result.namespaces.length || !result.namespaces[0].computes.length)) {
                      _context4.next = 4;
                      break;
                    }

                    reject('No namespace or compute found');
                    console.warn(result);
                    return _context4.abrupt("return");

                  case 4:
                    _context4.next = 6;
                    return catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_4__.default.getEntry({
                      connector: _this2.connector,
                      path: path,
                      namespace: result.namespaces[0],
                      compute: result.namespaces[0].computes[0]
                    });

                  case 6:
                    entry = _context4.sent;
                    sourceMetaPromise = entry.getSourceMeta(options);
                    onCancel(function () {
                      apiPromise.cancel();
                      sourceMetaPromise.cancel();
                    });
                    _context4.prev = 9;
                    _context4.next = 12;
                    return sourceMetaPromise;

                  case 12:
                    sourceMeta = _context4.sent;
                    values = (sourceMeta.foreign_keys || []).map(function (key) {
                      return {
                        totalTableCount: 22,
                        totalQueryCount: 3,
                        joinCols: [{
                          columns: [path + '.' + key.name, key.to]
                        }],
                        tables: [path].concat(key.to.split('.', 2).join('.')),
                        joinType: 'join'
                      };
                    });
                    _context4.prev = 14;
                    _context4.next = 17;
                    return apiPromise;

                  case 17:
                    apiResponse = _context4.sent;
                    values.push.apply(values, _toConsumableArray(apiResponse.values));
                    _context4.next = 23;
                    break;

                  case 21:
                    _context4.prev = 21;
                    _context4.t0 = _context4["catch"](14);

                  case 23:
                    resolve({
                      values: values
                    });
                    _context4.next = 29;
                    break;

                  case 26:
                    _context4.prev = 26;
                    _context4.t1 = _context4["catch"](9);
                    reject(_context4.t1);

                  case 29:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, null, [[9, 26], [14, 21]]);
          }));

          return function (_x8) {
            return _ref2.apply(this, arguments);
          };
        }())["catch"](reject);
      });
    }
  }, {
    key: "analyzeCompatibility",
    value: function analyzeCompatibility(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.analyzeCompatibility(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeCompatibility is not Implemented');
    }
  }, {
    key: "analyzeSimilarity",
    value: function analyzeSimilarity(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.analyzeSimilarity(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeSimilarity is not Implemented');
    }
  }, {
    key: "fetchSqlAnalyzerMeta",
    value: function fetchSqlAnalyzerMeta(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchSqlAnalyzerMeta(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchSqlAnalyzerMeta is not Implemented');
    }
  }, {
    key: "fetchPopularity",
    value: function fetchPopularity(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchPopularity(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchPopularity is not Implemented');
    }
  }, {
    key: "fetchTopAggs",
    value: function fetchTopAggs(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchTopAggs(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopAggs is not Implemented');
    }
  }, {
    key: "fetchTopColumns",
    value: function fetchTopColumns(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchTopColumns(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopColumns is not Implemented');
    }
  }, {
    key: "fetchTopFilters",
    value: function fetchTopFilters(options) {
      if (window.SQL_ANALYZER_MODE === catalog_analyzer_types__WEBPACK_IMPORTED_MODULE_3__.SqlAnalyzerMode.api) {
        return this.apiAnalyzer.fetchTopFilters(options);
      }

      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopFilters is not Implemented');
    }
  }, {
    key: "predict",
    value: function predict(options) {
      return this.apiAnalyzer.predict(options);
    }
  }]);

  return CombinedSqlAnalyser;
}();



/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/NoopSqlAnalyzer.ts":
/*!*************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/NoopSqlAnalyzer.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoopSqlAnalyzer)
/* harmony export */ });
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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


var NoopSqlAnalyzer = /*#__PURE__*/function () {
  function NoopSqlAnalyzer() {
    _classCallCheck(this, NoopSqlAnalyzer);
  }

  _createClass(NoopSqlAnalyzer, [{
    key: "analyzeCompatibility",
    value: // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function analyzeCompatibility(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeCompatibility is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "analyzeRisk",
    value: function analyzeRisk(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeRisk is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "analyzeSimilarity",
    value: function analyzeSimilarity(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeSimilarity is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "fetchSqlAnalyzerMeta",
    value: function fetchSqlAnalyzerMeta(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchSqlAnalyzerMeta is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "fetchPopularity",
    value: function fetchPopularity(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('analyzeCompatibility is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "fetchTopAggs",
    value: function fetchTopAggs(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopAggs is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "fetchTopColumns",
    value: function fetchTopColumns(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopColumns is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "fetchTopFilters",
    value: function fetchTopFilters(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopFilters is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "fetchTopJoins",
    value: function fetchTopJoins(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('fetchTopJoins is not Implemented');
    } // eslint-disable-next-line @typescript-eslint/no-unused-vars

  }, {
    key: "predict",
    value: function predict(options) {
      return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('predict is not Implemented');
    }
  }]);

  return NoopSqlAnalyzer;
}();



/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/sqlAnalyzerRepository.ts":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/sqlAnalyzerRepository.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CombinedSqlAnalyser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CombinedSqlAnalyser */ "./desktop/core/src/desktop/js/catalog/analyzer/CombinedSqlAnalyser.ts");
/* harmony import */ var _NoopSqlAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoopSqlAnalyzer */ "./desktop/core/src/desktop/js/catalog/analyzer/NoopSqlAnalyzer.ts");
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


var sqlAnalyzerInstances = {};

var createSqlAnalyzer = function createSqlAnalyzer(connector) {
  if (connector.optimizer === 'api') {
    return new _CombinedSqlAnalyser__WEBPACK_IMPORTED_MODULE_0__.default(connector);
  }

  return new _NoopSqlAnalyzer__WEBPACK_IMPORTED_MODULE_1__.default();
};

var sqlAnalyzerRepository = {
  getSqlAnalyzer: function getSqlAnalyzer(connector) {
    var sqlAnalyzer = sqlAnalyzerInstances[connector.id];

    if (!sqlAnalyzer) {
      sqlAnalyzer = createSqlAnalyzer(connector);
      sqlAnalyzerInstances[connector.id] = sqlAnalyzer;
    }

    return sqlAnalyzer;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sqlAnalyzerRepository);

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/analyzer/types.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SqlAnalyzerMode": () => (/* binding */ SqlAnalyzerMode)
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
var SqlAnalyzerMode;

(function (SqlAnalyzerMode) {
  SqlAnalyzerMode["local"] = "local";
  SqlAnalyzerMode["api"] = "api";
  SqlAnalyzerMode["off"] = "off";
})(SqlAnalyzerMode || (SqlAnalyzerMode = {}));

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/api.ts":
/*!****************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/api.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchDescribe": () => (/* binding */ fetchDescribe),
/* harmony export */   "fetchClusters": () => (/* binding */ fetchClusters),
/* harmony export */   "fetchComputes": () => (/* binding */ fetchComputes),
/* harmony export */   "fetchNamespaces": () => (/* binding */ fetchNamespaces),
/* harmony export */   "fetchNavigatorMetadata": () => (/* binding */ fetchNavigatorMetadata),
/* harmony export */   "fetchAllNavigatorTags": () => (/* binding */ fetchAllNavigatorTags),
/* harmony export */   "fetchPartitions": () => (/* binding */ fetchPartitions),
/* harmony export */   "fetchSample": () => (/* binding */ fetchSample),
/* harmony export */   "fetchSourceMetadata": () => (/* binding */ fetchSourceMetadata),
/* harmony export */   "searchEntities": () => (/* binding */ searchEntities),
/* harmony export */   "updateNavigatorProperties": () => (/* binding */ updateNavigatorProperties),
/* harmony export */   "updateSourceMetadata": () => (/* binding */ updateSourceMetadata),
/* harmony export */   "addNavTags": () => (/* binding */ addNavTags),
/* harmony export */   "deleteNavTags": () => (/* binding */ deleteNavTags)
/* harmony export */ });
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var api_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/utils */ "./desktop/core/src/desktop/js/api/utils.ts");
/* harmony import */ var apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apps/editor/execution/api */ "./desktop/core/src/desktop/js/apps/editor/execution/api.ts");
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/json.bigDataParse */ "./desktop/core/src/desktop/js/utils/json.bigDataParse.js");
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_timing_sleep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/timing/sleep */ "./desktop/core/src/desktop/js/utils/timing/sleep.ts");
/* harmony import */ var utils_string_UUID__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/string/UUID */ "./desktop/core/src/desktop/js/utils/string/UUID.ts");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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






var ADD_TAGS_URL = '/metadata/api/catalog/add_tags';
var AUTOCOMPLETE_URL_PREFIX = '/api/editor/autocomplete/';
var CANCEL_STATEMENT_URL = '/api/editor/cancel_statement';
var CHECK_STATUS_URL = '/api/editor/check_status';
var DELETE_TAGS_URL = '/metadata/api/catalog/delete_tags';
var DESCRIBE_URL = '/api/editor/describe/';
var FETCH_RESULT_DATA_URL = '/api/editor/fetch_result_data';
var FIND_ENTITY_URL = '/metadata/api/catalog/find_entity';
var LIST_TAGS_URL = '/metadata/api/catalog/list_tags';
var METASTORE_TABLE_URL_PREFIX = '/metastore/table/';
var SAMPLE_URL_PREFIX = '/api/editor/sample/';
var SEARCH_URL = '/desktop/api/search/entities';
var UPDATE_PROPERTIES_URL = '/metadata/api/catalog/update_properties';

var getEntryUrlPath = function getEntryUrlPath(entry) {
  return entry.path.join('/') + (entry.path.length ? '/' : '');
};

var performAnalyze = function performAnalyze(_ref) {
  var entry = _ref.entry,
      silenceErrors = _ref.silenceErrors;

  if (entry.isDatabase()) {
    return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.resolve();
  }

  var cancelled = false;

  var pollForAnalysis = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url, delay) {
      var analyzeResponse;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(url, undefined, {
                silenceErrors: silenceErrors
              });

            case 2:
              analyzeResponse = _context.sent;

              if (!cancelled) {
                _context.next = 5;
                break;
              }

              throw new Error('Cancelled');

            case 5:
              if (!(!analyzeResponse.isFailure && !analyzeResponse.isSuccess)) {
                _context.next = 11;
                break;
              }

              _context.next = 8;
              return (0,utils_timing_sleep__WEBPACK_IMPORTED_MODULE_4__.default)(delay);

            case 8:
              return _context.abrupt("return", pollForAnalysis(url, 1000));

            case 11:
              return _context.abrupt("return", analyzeResponse);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function pollForAnalysis(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(resolve, reject, onCancel) {
      var analyzeResponse;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              onCancel(function () {
                cancelled = true;
              });
              _context2.prev = 1;
              _context2.next = 4;
              return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("/api/".concat(entry.getConnector().id === 'hive' ? 'beeswax' : entry.getConnector().id, "/analyze/").concat(getEntryUrlPath(entry)), undefined, {
                silenceErrors: silenceErrors
              });

            case 4:
              analyzeResponse = _context2.sent;

              if (!(!cancelled && analyzeResponse && analyzeResponse.status === 0 && analyzeResponse.watch_url)) {
                _context2.next = 13;
                break;
              }

              _context2.t0 = resolve;
              _context2.next = 9;
              return pollForAnalysis(analyzeResponse.watch_url, 500);

            case 9:
              _context2.t1 = _context2.sent;
              (0, _context2.t0)(_context2.t1);
              _context2.next = 14;
              break;

            case 13:
              reject('Analyze failed');

            case 14:
              _context2.next = 19;
              break;

            case 16:
              _context2.prev = 16;
              _context2.t2 = _context2["catch"](1);
              reject(_context2.t2 || 'Analyze failed');

            case 19:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 16]]);
    }));

    return function (_x3, _x4, _x5) {
      return _ref3.apply(this, arguments);
    };
  }());
};

var fetchDescribe = function fetchDescribe(_ref4) {
  var entry = _ref4.entry,
      silenceErrors = _ref4.silenceErrors,
      refreshAnalysis = _ref4.refreshAnalysis;
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject, onCancel) {
      var analyzePromise, _entry$path, database, table, fields, url, describePromise;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!entry.isSource()) {
                _context3.next = 3;
                break;
              }

              reject('Describe is not possible on the source');
              return _context3.abrupt("return");

            case 3:
              if (!refreshAnalysis) {
                _context3.next = 13;
                break;
              }

              analyzePromise = performAnalyze({
                entry: entry,
                silenceErrors: silenceErrors
              });
              onCancel(analyzePromise.cancel.bind(analyzePromise));
              _context3.prev = 6;
              _context3.next = 9;
              return analyzePromise;

            case 9:
              _context3.next = 13;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](6);

            case 13:
              _entry$path = _toArray(entry.path), database = _entry$path[0], table = _entry$path[1], fields = _entry$path.slice(2);
              url = "".concat(DESCRIBE_URL).concat(database);

              if (table && fields.length) {
                url += "/".concat(table, "/stats/").concat(fields.join('/'));
              } else if (table) {
                url += "/".concat(table, "/");
              }

              describePromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(url, {
                format: 'json',
                cluster: JSON.stringify(entry.compute),
                source_type: entry.getConnector().id,
                connector: JSON.stringify(entry.getConnector())
              }, {
                silenceErrors: silenceErrors,
                handleSuccess: function handleSuccess(response, postResolve, postReject) {
                  if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
                    postReject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
                  } else {
                    var adjustedResponse = response;
                    adjustedResponse.hueTimestamp = Date.now();
                    postResolve(adjustedResponse);
                  }
                }
              });
              _context3.prev = 17;
              _context3.t1 = resolve;
              _context3.next = 21;
              return describePromise;

            case 21:
              _context3.t2 = _context3.sent;
              (0, _context3.t1)(_context3.t2);
              _context3.next = 28;
              break;

            case 25:
              _context3.prev = 25;
              _context3.t3 = _context3["catch"](17);
              reject(_context3.t3 || 'Describe failed');

            case 28:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[6, 11], [17, 25]]);
    }));

    return function (_x6, _x7, _x8) {
      return _ref5.apply(this, arguments);
    };
  }());
};
var fetchClusters = function fetchClusters(connector, silenceErrors) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.get)("/desktop/api2/context/clusters/".concat(connector.id), undefined, {
    silenceErrors: silenceErrors
  });
};
var fetchComputes = function fetchComputes(connector, silenceErrors) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.get)("/desktop/api2/context/computes/".concat(connector.id), undefined, {
    silenceErrors: silenceErrors
  });
};
var fetchNamespaces = function fetchNamespaces(connector, silenceErrors) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.get)("/api/get_namespaces/".concat(connector.id), undefined, {
    silenceErrors: silenceErrors
  });
};
var fetchNavigatorMetadata = function fetchNavigatorMetadata(_ref6) {
  var entry = _ref6.entry,
      silenceErrors = _ref6.silenceErrors;
  var params = new URLSearchParams();

  var _entry$path2 = _slicedToArray(entry.path, 3),
      database = _entry$path2[0],
      tableOrView = _entry$path2[1],
      field = _entry$path2[2];

  if (database && tableOrView && field) {
    params.append('type', 'field');
    params.append('database', database);
    params.append('table', tableOrView);
  } else if (database && tableOrView) {
    params.append('type', entry.isView() ? 'view' : 'table');
    params.append('database', database);
  } else if (database) {
    params.append('type', 'database');
  } else {
    return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject('Navigator metadata is not possible on the source');
  }

  params.append('name', entry.name);
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(FIND_ENTITY_URL, "?").concat(params), {
    notebook: {},
    snippet: JSON.stringify({
      type: entry.getConnector().id,
      source: 'data'
    }),
    cluster: entry.compute && JSON.stringify(entry.compute) || '""'
  }, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
      } else {
        var adjustedResponse = response.entity || response;
        adjustedResponse.hueTimestamp = Date.now();
        resolve(adjustedResponse);
      }
    }
  });
};
var fetchAllNavigatorTags = function fetchAllNavigatorTags(_ref7) {
  var silenceErrors = _ref7.silenceErrors;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(LIST_TAGS_URL, undefined, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
      } else {
        resolve(response.tags || {});
      }
    }
  });
};
var fetchPartitions = function fetchPartitions(_ref8) {
  var entry = _ref8.entry,
      silenceErrors = _ref8.silenceErrors;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(METASTORE_TABLE_URL_PREFIX).concat(getEntryUrlPath(entry), "partitions"), {
    format: 'json',
    cluster: entry.compute && JSON.stringify(entry.compute) || '""'
  }, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      var adjustedResponse = response || {};
      adjustedResponse.hueTimestamp = Date.now();

      if ((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject("Partitions failed: ".concat((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response)));
      } else {
        resolve(adjustedResponse);
      }
    },
    handleError: function handleError(errorResponse, resolve, reject) {
      if (errorResponse.response && errorResponse.response.data && errorResponse.response.data.indexOf('is not partitioned') !== -1) {
        resolve({
          hueTimestamp: Date.now(),
          partition_keys_json: [],
          partition_values_json: []
        });
      } else {
        reject(errorResponse);
      }
    }
  });
};

/**
 * Checks the status for the given snippet ID
 * Note: similar to notebook and search check_status.
 *
 * @param {Object} options
 * @param {Object} options.notebookJson
 * @param {Object} options.snippetJson
 * @param {boolean} [options.silenceErrors]
 *
 * @return {CancellableJqPromise}
 */
var whenAvailable = function whenAvailable(options) {
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve, reject, onCancel) {
      var promiseToCancel, cancelled, checkStatusPromise, response, status, whenPromise;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              cancelled = false;
              onCancel(function () {
                cancelled = true;

                if (promiseToCancel) {
                  promiseToCancel.cancel();
                }
              });
              checkStatusPromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(CHECK_STATUS_URL, {
                notebook: options.notebookJson,
                snippet: options.snippetJson,
                cluster: options.entry.compute && JSON.stringify(options.entry.compute) || '""'
              }, {
                silenceErrors: options.silenceErrors
              });
              _context4.prev = 3;
              promiseToCancel = checkStatusPromise;
              _context4.next = 7;
              return checkStatusPromise;

            case 7:
              response = _context4.sent;

              if (!(response && response.query_status && response.query_status.status)) {
                _context4.next = 34;
                break;
              }

              status = response.query_status.status;

              if (!(status === 'available')) {
                _context4.next = 14;
                break;
              }

              resolve(response.query_status);
              _context4.next = 31;
              break;

            case 14:
              if (!(status === 'running' || status === 'starting' || status === 'waiting')) {
                _context4.next = 31;
                break;
              }

              _context4.next = 17;
              return (0,utils_timing_sleep__WEBPACK_IMPORTED_MODULE_4__.default)(500);

            case 17:
              _context4.prev = 17;

              if (cancelled) {
                _context4.next = 27;
                break;
              }

              whenPromise = whenAvailable(options);
              promiseToCancel = whenPromise;
              _context4.t0 = resolve;
              _context4.next = 24;
              return whenPromise;

            case 24:
              _context4.t1 = _context4.sent;
              (0, _context4.t0)(_context4.t1);
              return _context4.abrupt("return");

            case 27:
              _context4.next = 31;
              break;

            case 29:
              _context4.prev = 29;
              _context4.t2 = _context4["catch"](17);

            case 31:
              reject(response.query_status);
              _context4.next = 35;
              break;

            case 34:
              reject('Cancelled');

            case 35:
              _context4.next = 40;
              break;

            case 37:
              _context4.prev = 37;
              _context4.t3 = _context4["catch"](3);
              reject(_context4.t3);

            case 40:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[3, 37], [17, 29]]);
    }));

    return function (_x9, _x10, _x11) {
      return _ref9.apply(this, arguments);
    };
  }());
};

var fetchSample = function fetchSample(_ref10) {
  var entry = _ref10.entry,
      silenceErrors = _ref10.silenceErrors,
      operation = _ref10.operation,
      sampleCount = _ref10.sampleCount;
  return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise( /*#__PURE__*/function () {
    var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject, onCancel) {
      var cancellablePromises, notebookJson, snippetJson, cancelQuery, samplePromise, sampleResponse, queryResult, statusPromise, resultStatus, transformResponse, resultPromise, _sampleResponse, sample, closeSessions;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              cancellablePromises = [];
              notebookJson = undefined;
              snippetJson = undefined;

              cancelQuery = /*#__PURE__*/function () {
                var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!notebookJson) {
                            _context5.next = 8;
                            break;
                          }

                          _context5.prev = 1;
                          _context5.next = 4;
                          return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(CANCEL_STATEMENT_URL, {
                            notebook: notebookJson,
                            snippet: snippetJson,
                            cluster: entry.compute && JSON.stringify(entry.compute) || '""'
                          }, {
                            silenceErrors: true
                          });

                        case 4:
                          _context5.next = 8;
                          break;

                        case 6:
                          _context5.prev = 6;
                          _context5.t0 = _context5["catch"](1);

                        case 8:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[1, 6]]);
                }));

                return function cancelQuery() {
                  return _ref12.apply(this, arguments);
                };
              }();

              onCancel(function () {
                cancellablePromises.forEach(function (cancellable) {
                  return cancellable.cancel();
                });
              });
              cancellablePromises.push({
                cancel: function () {
                  var _cancel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                    return regeneratorRuntime.wrap(function _callee6$(_context6) {
                      while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            _context6.prev = 0;
                            _context6.next = 3;
                            return cancelQuery();

                          case 3:
                            _context6.next = 7;
                            break;

                          case 5:
                            _context6.prev = 5;
                            _context6.t0 = _context6["catch"](0);

                          case 7:
                          case "end":
                            return _context6.stop();
                        }
                      }
                    }, _callee6, null, [[0, 5]]);
                  }));

                  function cancel() {
                    return _cancel.apply(this, arguments);
                  }

                  return cancel;
                }()
              });
              samplePromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(SAMPLE_URL_PREFIX).concat(getEntryUrlPath(entry)), {
                notebook: {},
                snippet: JSON.stringify({
                  type: entry.getConnector().id,
                  compute: entry.compute
                }),
                async: true,
                operation: "\"".concat(operation || 'default', "\""),
                cluster: entry.compute && JSON.stringify(entry.compute) || '""'
              }, {
                silenceErrors: silenceErrors
              });
              _context7.prev = 7;
              cancellablePromises.push(samplePromise);
              _context7.next = 11;
              return samplePromise;

            case 11:
              sampleResponse = _context7.sent;
              cancellablePromises.pop();
              queryResult = {
                id: (0,utils_string_UUID__WEBPACK_IMPORTED_MODULE_5__.default)(),
                type: sampleResponse.result && sampleResponse.result.type || entry.getConnector().id,
                compute: entry.compute,
                status: 'running',
                result: sampleResponse.result || {}
              };
              queryResult.result.type = 'table';
              notebookJson = JSON.stringify({
                type: entry.getConnector().id
              });
              snippetJson = JSON.stringify(queryResult);

              if (!(sampleResponse && sampleResponse.rows)) {
                _context7.next = 21;
                break;
              }

              // Sync results
              resolve({
                type: 'table',
                hueTimestamp: Date.now(),
                data: sampleResponse.rows,
                meta: sampleResponse.full_headers || []
              });
              _context7.next = 48;
              break;

            case 21:
              statusPromise = whenAvailable({
                notebookJson: notebookJson,
                snippetJson: snippetJson,
                entry: entry,
                silenceErrors: silenceErrors
              });
              cancellablePromises.push(statusPromise);
              _context7.next = 25;
              return statusPromise;

            case 25:
              resultStatus = _context7.sent;
              cancellablePromises.pop();

              if (!(resultStatus.status !== 'available')) {
                _context7.next = 30;
                break;
              }

              reject();
              return _context7.abrupt("return");

            case 30:
              snippetJson = JSON.stringify(queryResult); // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore

              transformResponse = function transformResponse(response) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                return JSON.bigdataParse(response);
              };

              resultPromise = (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(FETCH_RESULT_DATA_URL, {
                notebook: notebookJson,
                snippet: snippetJson,
                rows: sampleCount || 100,
                startOver: 'false'
              }, {
                silenceErrors: silenceErrors,
                transformResponse: transformResponse
              });
              _context7.next = 35;
              return resultPromise;

            case 35:
              _sampleResponse = _context7.sent;
              sample = {
                hueTimestamp: Date.now(),
                type: 'table',
                data: _sampleResponse.result && _sampleResponse.result.data || [],
                meta: _sampleResponse.result && _sampleResponse.result.meta || []
              };
              resolve(sample);
              cancellablePromises.pop();
              closeSessions = window.CLOSE_SESSIONS;

              if (!(closeSessions && closeSessions[entry.getConnector().dialect || ''] && queryResult.result.handle && queryResult.result.handle.session_id)) {
                _context7.next = 48;
                break;
              }

              _context7.prev = 41;
              _context7.next = 44;
              return (0,apps_editor_execution_api__WEBPACK_IMPORTED_MODULE_2__.closeSession)({
                session: {
                  id: queryResult.result.handle.session_id,
                  session_id: queryResult.result.handle.session_guid || '',
                  type: entry.getConnector().id,
                  properties: []
                },
                silenceErrors: silenceErrors
              });

            case 44:
              _context7.next = 48;
              break;

            case 46:
              _context7.prev = 46;
              _context7.t0 = _context7["catch"](41);

            case 48:
              _context7.next = 53;
              break;

            case 50:
              _context7.prev = 50;
              _context7.t1 = _context7["catch"](7);
              reject();

            case 53:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, null, [[7, 50], [41, 46]]);
    }));

    return function (_x12, _x13, _x14) {
      return _ref11.apply(this, arguments);
    };
  }());
};
var fetchSourceMetadata = function fetchSourceMetadata(_ref13) {
  var entry = _ref13.entry,
      silenceErrors = _ref13.silenceErrors;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)("".concat(AUTOCOMPLETE_URL_PREFIX).concat(getEntryUrlPath(entry)), {
    notebook: {},
    snippet: JSON.stringify({
      type: entry.getConnector().id,
      source: 'data'
    }),
    operation: entry.isModel() ? 'model' : 'default',
    cluster: entry.compute && JSON.stringify(entry.compute) || '""'
  }, {
    silenceErrors: silenceErrors,
    handleSuccess: function handleSuccess(response, resolve, reject) {
      var message = response.error || response.message || '';
      var adjustedResponse = response || {};
      adjustedResponse.notFound = !!response && response.status === 0 && response.code === 500 && (message.indexOf('Error 10001') !== -1 || message.indexOf('AnalysisException') !== -1);
      adjustedResponse.hueTimestamp = Date.now();

      if (!adjustedResponse.notFound && (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.successResponseIsError)(response)) {
        reject((0,api_utils__WEBPACK_IMPORTED_MODULE_1__.extractErrorMessage)(response));
      } else {
        resolve(adjustedResponse);
      }
    }
  });
};
var searchEntities = function searchEntities(_ref14) {
  var limit = _ref14.limit,
      query = _ref14.query,
      rawQuery = _ref14.rawQuery,
      silenceErrors = _ref14.silenceErrors,
      sources = _ref14.sources;
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(SEARCH_URL, {
    query_s: JSON.stringify(query),
    limit: limit || 100,
    raw_query: !!rawQuery,
    sources: sources && JSON.stringify(sources) || '["sql"]'
  }, {
    silenceErrors: silenceErrors
  });
};
var updateNavigatorProperties = function updateNavigatorProperties(_ref15) {
  var deletedCustomMetadataKeys = _ref15.deletedCustomMetadataKeys,
      identity = _ref15.identity,
      modifiedCustomMetadata = _ref15.modifiedCustomMetadata,
      properties = _ref15.properties,
      silenceErrors = _ref15.silenceErrors;
  var data = {
    id: JSON.stringify(identity)
  };

  if (properties) {
    data.properties = JSON.stringify(properties);
  }

  if (modifiedCustomMetadata) {
    data.modifiedCustomMetadata = JSON.stringify(modifiedCustomMetadata);
  }

  if (deletedCustomMetadataKeys) {
    data.deletedCustomMetadataKeys = JSON.stringify(deletedCustomMetadataKeys);
  }

  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(UPDATE_PROPERTIES_URL, data, {
    silenceErrors: silenceErrors
  });
};
var updateSourceMetadata = function updateSourceMetadata(_ref16) {
  var entry = _ref16.entry,
      properties = _ref16.properties,
      silenceErrors = _ref16.silenceErrors;
  var url;
  var data = {
    source_type: entry.getConnector().id
  };

  if (entry.path.length === 1) {
    url = "/metastore/databases/".concat(entry.path[0], "/alter");
    data.properties = JSON.stringify(properties);
  } else if (entry.path.length === 2) {
    url = "/metastore/table/".concat(entry.path[0], "/").concat(entry.path[1], "/alter");

    if (properties !== null && properties !== void 0 && properties.name) {
      data.new_table_name = properties.name;
    }
  } else if (entry.path.length > 2) {
    url = "/metastore/table/".concat(entry.path[0], "/").concat(entry.path[1], "/alter_column");
    data.column = entry.path.slice(2).join('.');

    if (properties !== null && properties !== void 0 && properties.name) {
      data.new_column_name = properties.name;
    }

    if (properties !== null && properties !== void 0 && properties.type) {
      data.new_column_type = properties.type;
    }

    if (properties !== null && properties !== void 0 && properties.partitions) {
      data.partition_spec = JSON.stringify(properties.partitions);
    }
  }

  if (properties !== null && properties !== void 0 && properties.comment) {
    data.comment = properties.comment;
  }

  if (!url) {
    return api_cancellablePromise__WEBPACK_IMPORTED_MODULE_0__.CancellablePromise.reject();
  }

  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(url, data, {
    silenceErrors: silenceErrors
  });
};
var addNavTags = function addNavTags(entityId, tags) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(ADD_TAGS_URL, {
    id: JSON.stringify(entityId),
    tags: JSON.stringify(tags)
  });
};
var deleteNavTags = function deleteNavTags(entityId, tags) {
  return (0,api_utils__WEBPACK_IMPORTED_MODULE_1__.post)(DELETE_TAGS_URL, {
    id: JSON.stringify(entityId),
    tags: JSON.stringify(tags)
  });
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts":
/*!*************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/catalogUtils.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "forceSilencedErrors": () => (/* binding */ forceSilencedErrors),
/* harmony export */   "applyCancellable": () => (/* binding */ applyCancellable)
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

/**
 * Helper function that adds sets the silence errors option to true if not specified
 */
var forceSilencedErrors = function forceSilencedErrors(options) {
  if (!options) {
    options = {};
  }

  if (typeof options.silenceErrors === 'undefined') {
    options.silenceErrors = true;
  }

  return options;
};
/**
 * Helper function to apply the cancellable option to an existing or new promise
 */

var applyCancellable = function applyCancellable(promise, options) {
  if (promise && promise.preventCancel && (!options || !options.cancellable)) {
    promise.preventCancel();
  }

  return promise;
};

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts":
/*!***************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/contextCatalog.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNamespaces": () => (/* binding */ getNamespaces),
/* harmony export */   "getComputes": () => (/* binding */ getComputes),
/* harmony export */   "getClusters": () => (/* binding */ getClusters),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./desktop/core/src/desktop/js/catalog/api.ts");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/timing/noop */ "./desktop/core/src/desktop/js/utils/timing/noop.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./desktop/core/src/desktop/js/catalog/events.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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





var ContextTypes;

(function (ContextTypes) {
  ContextTypes["Namespace"] = "namespace";
  ContextTypes["Compute"] = "compute";
  ContextTypes["Cluster"] = "cluster";
})(ContextTypes || (ContextTypes = {}));

var STORAGE_POSTFIX = window.LOGGED_USERNAME;
var CONTEXT_CATALOG_VERSION = 4;
var DISABLE_CACHE = true;
var store = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
  name: "HueContextCatalog_".concat(STORAGE_POSTFIX)
});
var namespacePromises = new Map();
var computePromises = new Map();
var clusterPromises = new Map();
utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__.default.subscribe(_events__WEBPACK_IMPORTED_MODULE_4__.REFRESH_CONTEXT_CATALOG_TOPIC, /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var namespacesToRefresh;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          namespacesToRefresh = _toConsumableArray(namespacePromises.keys());
          namespacePromises.clear();
          computePromises.clear();
          clusterPromises.clear();
          _context.prev = 4;
          _context.next = 7;
          return store.clear();

        case 7:
          _context.next = 11;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](4);

        case 11:
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__.default.publish(_events__WEBPACK_IMPORTED_MODULE_4__.CONTEXT_CATALOG_REFRESHED_TOPIC);
          namespacesToRefresh.forEach(function (connectorId) {
            utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__.default.publish(_events__WEBPACK_IMPORTED_MODULE_4__.NAMESPACES_REFRESHED_TOPIC, connectorId);
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, null, [[4, 9]]);
})));

var saveLaterToCache = function saveLaterToCache(type, connector, entry) {
  if (entry) {
    window.setTimeout( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return store.setItem("".concat(type, "_").concat(connector.id), {
                version: CONTEXT_CATALOG_VERSION,
                entry: entry
              });

            case 3:
              _context2.next = 7;
              break;

            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 5]]);
    })), 1000);
  }
};

var deleteFromCache = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(type, connector) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return store.removeItem("".concat(type, "_").concat(connector.id));

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteFromCache(_x, _x2) {
    return _ref3.apply(this, arguments);
  };
}();

var getCached = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(type, connector) {
    var storedItem;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (DISABLE_CACHE) {
              _context4.next = 12;
              break;
            }

            _context4.prev = 1;
            _context4.next = 4;
            return store.getItem("".concat(type, "_").concat(connector.id));

          case 4:
            storedItem = _context4.sent;

            if (!(storedItem && storedItem.version === CONTEXT_CATALOG_VERSION)) {
              _context4.next = 7;
              break;
            }

            return _context4.abrupt("return", storedItem.entry);

          case 7:
            _context4.next = 12;
            break;

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](1);
            console.warn(_context4.t0);

          case 12:
            return _context4.abrupt("return", undefined);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[1, 9]]);
  }));

  return function getCached(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var getNamespaces = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref5) {
    var connector, clearCache, silenceErrors, notifyForRefresh;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            connector = _ref5.connector, clearCache = _ref5.clearCache, silenceErrors = _ref5.silenceErrors;
            notifyForRefresh = namespacePromises.has(connector.id) && clearCache;

            if (!clearCache) {
              _context6.next = 6;
              break;
            }

            namespacePromises["delete"](connector.id);
            _context6.next = 6;
            return deleteFromCache(ContextTypes.Namespace, connector);

          case 6:
            if (!namespacePromises.has(connector.id)) {
              namespacePromises.set(connector.id, new Promise( /*#__PURE__*/function () {
                var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject) {
                  var cached, fetchedNamespaces, namespaces, dynamic, connectorNamespaces;
                  return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          _context5.prev = 0;
                          _context5.next = 3;
                          return getCached(ContextTypes.Namespace, connector);

                        case 3:
                          cached = _context5.sent;

                          if (!cached) {
                            _context5.next = 7;
                            break;
                          }

                          resolve(cached);
                          return _context5.abrupt("return");

                        case 7:
                          _context5.next = 11;
                          break;

                        case 9:
                          _context5.prev = 9;
                          _context5.t0 = _context5["catch"](0);

                        case 11:
                          _context5.next = 13;
                          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchNamespaces)(connector, silenceErrors);

                        case 13:
                          fetchedNamespaces = _context5.sent;
                          namespaces = fetchedNamespaces[connector.id];

                          if (namespaces) {
                            dynamic = fetchedNamespaces.dynamicClusters;
                            namespaces.forEach(function (namespace) {
                              // Adapt computes, TODO: Still needed?
                              namespace.computes.forEach(function (compute) {
                                if (!compute.id && compute.crn) {
                                  compute.id = compute.crn;
                                }

                                if (!compute.name && compute.clusterName) {
                                  compute.name = compute.clusterName;
                                }
                              });
                            });
                            connectorNamespaces = {
                              namespaces: namespaces.filter(function (namespace) {
                                return namespace.name;
                              }),
                              dynamic: dynamic,
                              hueTimestamp: Date.now()
                            };
                            resolve(connectorNamespaces);

                            if (notifyForRefresh) {
                              utils_huePubSub__WEBPACK_IMPORTED_MODULE_2__.default.publish(_events__WEBPACK_IMPORTED_MODULE_4__.NAMESPACES_REFRESHED_TOPIC, connector.id);
                            }

                            if (connectorNamespaces.namespaces.length) {
                              saveLaterToCache(ContextTypes.Namespace, connector, connectorNamespaces);
                            } else {
                              deleteFromCache(ContextTypes.Namespace, connector)["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__.default);
                            }
                          } else {
                            reject();
                          }

                        case 16:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, null, [[0, 9]]);
                }));

                return function (_x6, _x7) {
                  return _ref7.apply(this, arguments);
                };
              }()));
            }

            return _context6.abrupt("return", namespacePromises.get(connector.id));

          case 8:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function getNamespaces(_x5) {
    return _ref6.apply(this, arguments);
  };
}();
var getComputes = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref8) {
    var connector, clearCache, silenceErrors;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            connector = _ref8.connector, clearCache = _ref8.clearCache, silenceErrors = _ref8.silenceErrors;

            if (!clearCache) {
              _context8.next = 5;
              break;
            }

            computePromises["delete"](connector.id);
            _context8.next = 5;
            return deleteFromCache(ContextTypes.Compute, connector);

          case 5:
            if (!computePromises.has(connector.id)) {
              computePromises.set(connector.id, new Promise( /*#__PURE__*/function () {
                var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(resolve, reject) {
                  var cached, fetchedComputes, computes;
                  return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                      switch (_context7.prev = _context7.next) {
                        case 0:
                          _context7.prev = 0;
                          _context7.next = 3;
                          return getCached(ContextTypes.Compute, connector);

                        case 3:
                          cached = _context7.sent;

                          if (!cached) {
                            _context7.next = 7;
                            break;
                          }

                          resolve(cached);
                          return _context7.abrupt("return");

                        case 7:
                          _context7.next = 11;
                          break;

                        case 9:
                          _context7.prev = 9;
                          _context7.t0 = _context7["catch"](0);

                        case 11:
                          _context7.next = 13;
                          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchComputes)(connector, silenceErrors);

                        case 13:
                          fetchedComputes = _context7.sent;
                          computes = fetchedComputes[connector.id];

                          if (computes) {
                            resolve(computes);

                            if (computes.length) {
                              saveLaterToCache(ContextTypes.Compute, connector, computes);
                            } else {
                              deleteFromCache(ContextTypes.Compute, connector)["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__.default);
                            }
                          } else {
                            reject();
                          }

                        case 16:
                        case "end":
                          return _context7.stop();
                      }
                    }
                  }, _callee7, null, [[0, 9]]);
                }));

                return function (_x9, _x10) {
                  return _ref10.apply(this, arguments);
                };
              }()));
            }

            return _context8.abrupt("return", computePromises.get(connector.id));

          case 7:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function getComputes(_x8) {
    return _ref9.apply(this, arguments);
  };
}();
var getClusters = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref11) {
    var connector, clearCache, silenceErrors;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            connector = _ref11.connector, clearCache = _ref11.clearCache, silenceErrors = _ref11.silenceErrors;

            if (!clearCache) {
              _context10.next = 5;
              break;
            }

            clusterPromises["delete"](connector.id);
            _context10.next = 5;
            return deleteFromCache(ContextTypes.Cluster, connector);

          case 5:
            if (!clusterPromises.has(connector.id)) {
              clusterPromises.set(connector.id, new Promise( /*#__PURE__*/function () {
                var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve, reject) {
                  var cached, fetchedClusters, clusters;
                  return regeneratorRuntime.wrap(function _callee9$(_context9) {
                    while (1) {
                      switch (_context9.prev = _context9.next) {
                        case 0:
                          _context9.prev = 0;
                          _context9.next = 3;
                          return getCached(ContextTypes.Cluster, connector);

                        case 3:
                          cached = _context9.sent;

                          if (!cached) {
                            _context9.next = 7;
                            break;
                          }

                          resolve(cached);
                          return _context9.abrupt("return");

                        case 7:
                          _context9.next = 11;
                          break;

                        case 9:
                          _context9.prev = 9;
                          _context9.t0 = _context9["catch"](0);

                        case 11:
                          _context9.next = 13;
                          return (0,_api__WEBPACK_IMPORTED_MODULE_1__.fetchClusters)(connector, silenceErrors);

                        case 13:
                          fetchedClusters = _context9.sent;
                          clusters = fetchedClusters[connector.id];

                          if (clusters) {
                            resolve(clusters);

                            if (clusters.length) {
                              saveLaterToCache(ContextTypes.Cluster, connector, clusters);
                            } else {
                              deleteFromCache(ContextTypes.Cluster, connector)["catch"](utils_timing_noop__WEBPACK_IMPORTED_MODULE_3__.default);
                            }
                          } else {
                            reject();
                          }

                        case 16:
                        case "end":
                          return _context9.stop();
                      }
                    }
                  }, _callee9, null, [[0, 9]]);
                }));

                return function (_x12, _x13) {
                  return _ref13.apply(this, arguments);
                };
              }()));
            }

            return _context10.abrupt("return", clusterPromises.get(connector.id));

          case 7:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function getClusters(_x11) {
    return _ref12.apply(this, arguments);
  };
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getNamespaces: getNamespaces,
  getComputes: getComputes,
  getClusters: getClusters
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/dataCatalog.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataCatalog": () => (/* binding */ DataCatalog),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api/cancellablePromise */ "./desktop/core/src/desktop/js/api/cancellablePromise.ts");
/* harmony import */ var catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! catalog/catalogUtils */ "./desktop/core/src/desktop/js/catalog/catalogUtils.ts");
/* harmony import */ var catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! catalog/DataCatalogEntry */ "./desktop/core/src/desktop/js/catalog/DataCatalogEntry.ts");
/* harmony import */ var catalog_GeneralDataCatalog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! catalog/GeneralDataCatalog */ "./desktop/core/src/desktop/js/catalog/GeneralDataCatalog.ts");
/* harmony import */ var catalog_MultiTableEntry__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! catalog/MultiTableEntry */ "./desktop/core/src/desktop/js/catalog/MultiTableEntry.ts");
/* harmony import */ var _analyzer_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analyzer/types */ "./desktop/core/src/desktop/js/catalog/analyzer/types.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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







var STORAGE_POSTFIX = window.LOGGED_USERNAME || '';
var DATA_CATALOG_VERSION = 5;
var _cacheEnabled = true;
/**
 * Creates a cache identifier given a namespace and path(s)
 */

var generateEntryCacheId = function generateEntryCacheId(options) {
  var id = options.namespace.id;

  if (options.path) {
    if (typeof options.path === 'string') {
      id += '_' + options.path;
    } else if (options.path.length) {
      id += '_' + options.path.join('.');
    }
  } else if (options.paths && options.paths.length) {
    var pathSet = {};
    options.paths.forEach(function (path) {
      pathSet[path.join('.')] = true;
    });
    var uniquePaths = Object.keys(pathSet);
    uniquePaths.sort();
    id += '_' + uniquePaths.join(',');
  }

  return id;
};

var isFresh = function isFresh(storeEntryValue, ttl) {
  var confTtl = window.CACHEABLE_TTL || {};
  var ttlToCheck = typeof ttl !== 'undefined' ? ttl : confTtl["default"];

  if (!storeEntryValue.hueTimestamp || typeof ttlToCheck === 'undefined') {
    return true;
  }

  return Date.now() - storeEntryValue.hueTimestamp < ttlToCheck;
};
/**
 * Helper function to fill a catalog entry with cached metadata.
 */


var mergeEntry = function mergeEntry(dataCatalogEntry, storeEntry) {
  if (storeEntry.version !== DATA_CATALOG_VERSION) {
    return;
  }

  if (storeEntry.definition && isFresh(storeEntry.definition)) {
    dataCatalogEntry.definition = storeEntry.definition;
  }

  if (storeEntry.sourceMeta && isFresh(storeEntry.sourceMeta)) {
    dataCatalogEntry.sourceMeta = storeEntry.sourceMeta;
    dataCatalogEntry.sourceMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.sourceMeta);
  }

  if (storeEntry.analysis && isFresh(storeEntry.analysis)) {
    dataCatalogEntry.analysis = storeEntry.analysis;
    dataCatalogEntry.analysisPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.analysis);
  }

  if (storeEntry.partitions && isFresh(storeEntry.partitions)) {
    dataCatalogEntry.partitions = storeEntry.partitions;
    dataCatalogEntry.partitionsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.partitions);
  }

  if (storeEntry.sample && isFresh(storeEntry.sample)) {
    dataCatalogEntry.sample = storeEntry.sample;
    dataCatalogEntry.samplePromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.sample);
  }

  if (storeEntry.navigatorMeta && isFresh(storeEntry.navigatorMeta)) {
    dataCatalogEntry.navigatorMeta = storeEntry.navigatorMeta;
    dataCatalogEntry.navigatorMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.navigatorMeta);
  }

  if (dataCatalogEntry.getConnector().optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local) {
    var confTtl = window.CACHEABLE_TTL || {};

    if (storeEntry.sqlAnalyzerMeta && isFresh(storeEntry.sqlAnalyzerMeta, confTtl.sqlAnalyzer)) {
      dataCatalogEntry.sqlAnalyzerMeta = storeEntry.sqlAnalyzerMeta;
      dataCatalogEntry.sqlAnalyzerMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(dataCatalogEntry.sqlAnalyzerMeta);
    }

    if (storeEntry.sqlAnalyzerPopularity && isFresh(storeEntry.sqlAnalyzerPopularity, confTtl.sqlAnalyzer)) {
      dataCatalogEntry.sqlAnalyzerPopularity = storeEntry.sqlAnalyzerPopularity;
    }
  }
};
/**
 * Helper function to fill a multi table catalog entry with cached metadata.
 */


var mergeMultiTableEntry = function mergeMultiTableEntry(multiTableEntry, storeEntry) {
  if (multiTableEntry.getConnector().optimizer === _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local || storeEntry.version !== DATA_CATALOG_VERSION) {
    return;
  }

  var confTtl = window.CACHEABLE_TTL || {};

  if (storeEntry.topAggs && isFresh(storeEntry.topAggs, confTtl.sqlAnalyzer)) {
    multiTableEntry.topAggs = storeEntry.topAggs;
    multiTableEntry.topAggsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topAggs);
  }

  if (storeEntry.topColumns && isFresh(storeEntry.topColumns, confTtl.sqlAnalyzer)) {
    multiTableEntry.topColumns = storeEntry.topColumns;
    multiTableEntry.topColumnsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topColumns);
  }

  if (storeEntry.topFilters && isFresh(storeEntry.topFilters, confTtl.sqlAnalyzer)) {
    multiTableEntry.topFilters = storeEntry.topFilters;
    multiTableEntry.topFiltersPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topFilters);
  }

  if (storeEntry.topJoins && isFresh(storeEntry.topJoins, confTtl.sqlAnalyzer)) {
    multiTableEntry.topJoins = storeEntry.topJoins;
    multiTableEntry.topJoinsPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(multiTableEntry.topJoins);
  }
};

var DataCatalog = /*#__PURE__*/function () {
  function DataCatalog(connector) {
    _classCallCheck(this, DataCatalog);

    this.connector = void 0;
    this.entries = {};
    this.temporaryEntries = {};
    this.multiTableEntries = {};
    this.store = void 0;
    this.multiTableStore = void 0;
    this.invalidatePromise = void 0;

    if (!connector || !connector.id) {
      throw new Error('DataCatalog created without connector or id');
    }

    this.connector = connector;
    this.store = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'HueDataCatalog_' + this.connector.id + '_' + STORAGE_POSTFIX
    });
    this.multiTableStore = localforage__WEBPACK_IMPORTED_MODULE_0___default().createInstance({
      name: 'HueDataCatalog_' + this.connector.id + '_multiTable_' + STORAGE_POSTFIX
    });
  }
  /**
   * Disables the caching for subsequent operations, mainly used for test purposes
   */


  _createClass(DataCatalog, [{
    key: "canHaveSqlAnalyzerMeta",
    value:
    /**
     * Returns true if the catalog can have SQL Analyzer metadata
     */
    function canHaveSqlAnalyzerMeta() {
      return !!(window.HAS_SQL_ANALYZER && this.connector && this.connector.optimizer && this.connector.optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.off);
    }
    /**
     * Clears the data catalog and cache for the given path and any children thereof.
     */

  }, {
    key: "clearStorageCascade",
    value: function () {
      var _clearStorageCascade = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(namespace, compute, pathToClear) {
        var _this = this;

        var keyPrefix, deletePromises, keys;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!namespace || !compute)) {
                  _context.next = 5;
                  break;
                }

                if (!(!pathToClear || pathToClear.length === 0)) {
                  _context.next = 4;
                  break;
                }

                this.entries = {};
                return _context.abrupt("return", this.store.clear());

              case 4:
                return _context.abrupt("return");

              case 5:
                keyPrefix = generateEntryCacheId({
                  namespace: namespace,
                  path: pathToClear
                });
                Object.keys(this.entries).forEach(function (key) {
                  if (key.indexOf(keyPrefix) === 0) {
                    delete _this.entries[key];
                  }
                });
                deletePromises = [];
                _context.prev = 8;
                _context.next = 11;
                return this.store.keys();

              case 11:
                keys = _context.sent;
                keys.forEach(function (key) {
                  if (key.indexOf(keyPrefix) === 0) {
                    deletePromises.push(_this.store.removeItem(key));
                  }
                });
                _context.next = 15;
                return Promise.all(deletePromises);

              case 15:
                _context.next = 19;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](8);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 17]]);
      }));

      function clearStorageCascade(_x, _x2, _x3) {
        return _clearStorageCascade.apply(this, arguments);
      }

      return clearStorageCascade;
    }()
    /**
     * Updates the cache for the given entry
     */

  }, {
    key: "persistCatalogEntry",
    value: function () {
      var _persistCatalogEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dataCatalogEntry) {
        var confTtl, identifier;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                confTtl = window.CACHEABLE_TTL || {};

                if (!(!_cacheEnabled || !confTtl["default"] || confTtl["default"] <= 0)) {
                  _context2.next = 3;
                  break;
                }

                return _context2.abrupt("return");

              case 3:
                identifier = generateEntryCacheId(dataCatalogEntry);
                _context2.next = 6;
                return this.store.setItem(identifier, {
                  version: DATA_CATALOG_VERSION,
                  definition: dataCatalogEntry.definition,
                  sourceMeta: dataCatalogEntry.sourceMeta,
                  analysis: dataCatalogEntry.analysis,
                  partitions: dataCatalogEntry.partitions,
                  sample: dataCatalogEntry.sample,
                  navigatorMeta: dataCatalogEntry.navigatorMeta,
                  sqlAnalyzerMeta: this.connector.optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local ? dataCatalogEntry.sqlAnalyzerMeta : undefined,
                  sqlAnalyzerPopularity: this.connector.optimizer !== _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local ? dataCatalogEntry.sqlAnalyzerPopularity : undefined
                });

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function persistCatalogEntry(_x4) {
        return _persistCatalogEntry.apply(this, arguments);
      }

      return persistCatalogEntry;
    }()
    /**
     * Loads SQL Analyzer popularity for multiple tables in one go.
     */

  }, {
    key: "loadSqlAnalyzerPopularityForTables",
    value: function loadSqlAnalyzerPopularityForTables(options) {
      var _this2 = this;

      var cancellablePromises = [];
      var popularEntries = [];
      var pathsToLoad = [];
      var existingPromises = [];
      options.paths.forEach(function (path) {
        var existingPromise = new Promise( /*#__PURE__*/function () {
          var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(resolve, reject) {
            var tableEntry, existingPopularEntries, childPromise, childEntries;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.prev = 0;
                    _context3.next = 3;
                    return _this2.getEntry({
                      namespace: options.namespace,
                      compute: options.compute,
                      path: path
                    });

                  case 3:
                    tableEntry = _context3.sent;

                    if (!tableEntry.sqlAnalyzerPopularityForChildrenPromise) {
                      _context3.next = 11;
                      break;
                    }

                    _context3.next = 7;
                    return tableEntry.sqlAnalyzerPopularityForChildrenPromise;

                  case 7:
                    existingPopularEntries = _context3.sent;
                    popularEntries.push.apply(popularEntries, _toConsumableArray(existingPopularEntries));
                    _context3.next = 21;
                    break;

                  case 11:
                    if (!(tableEntry.definition && tableEntry.definition.sqlAnalyzerLoaded)) {
                      _context3.next = 20;
                      break;
                    }

                    childPromise = tableEntry.getChildren(_objectSpread(_objectSpread({}, options), {}, {
                      silenceErrors: true
                    }));
                    cancellablePromises.push(childPromise);
                    _context3.next = 16;
                    return childPromise;

                  case 16:
                    childEntries = _context3.sent;
                    childEntries.forEach(function (childEntry) {
                      if (childEntry.sqlAnalyzerPopularity) {
                        popularEntries.push(childEntry);
                      }
                    });
                    _context3.next = 21;
                    break;

                  case 20:
                    pathsToLoad.push(path);

                  case 21:
                    _context3.next = 26;
                    break;

                  case 23:
                    _context3.prev = 23;
                    _context3.t0 = _context3["catch"](0);
                    reject(_context3.t0);

                  case 26:
                    resolve();

                  case 27:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, null, [[0, 23]]);
          }));

          return function (_x5, _x6) {
            return _ref.apply(this, arguments);
          };
        }());
        existingPromises.push(existingPromise);
      });
      var popularityPromise = new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(resolve, reject, onCancel) {
          var fetchPromise, data, perTable, splitSqlAnalyzerValuesPerTable, tablePromises;
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  onCancel(function () {
                    cancellablePromises.forEach(function (cancellable) {
                      cancellable.cancel();
                    });
                  });
                  _context5.prev = 1;
                  _context5.next = 4;
                  return Promise.all(existingPromises);

                case 4:
                  _context5.next = 8;
                  break;

                case 6:
                  _context5.prev = 6;
                  _context5.t0 = _context5["catch"](1);

                case 8:
                  if (pathsToLoad.length) {
                    _context5.next = 11;
                    break;
                  }

                  resolve(popularEntries);
                  return _context5.abrupt("return");

                case 11:
                  fetchPromise = options.sqlAnalyzer.fetchPopularity({
                    silenceErrors: true,
                    paths: pathsToLoad
                  });
                  cancellablePromises.push(fetchPromise);
                  _context5.prev = 13;
                  _context5.next = 16;
                  return fetchPromise;

                case 16:
                  data = _context5.sent;
                  perTable = {};

                  splitSqlAnalyzerValuesPerTable = function splitSqlAnalyzerValuesPerTable(listName) {
                    var values = data.values && data.values[listName];

                    if (values) {
                      values.forEach(function (column) {
                        var tableMeta = perTable[column.dbName + '.' + column.tableName];

                        if (!tableMeta) {
                          tableMeta = {
                            values: {}
                          };
                          perTable[column.dbName + '.' + column.tableName] = tableMeta;
                        }

                        if (tableMeta.values) {
                          var valuesList = tableMeta.values[listName];

                          if (!valuesList) {
                            valuesList = [];
                            tableMeta.values[listName] = valuesList;
                          }

                          valuesList.push(column);
                        }
                      });
                    }
                  };

                  if (data.values) {
                    splitSqlAnalyzerValuesPerTable('filterColumns');
                    splitSqlAnalyzerValuesPerTable('groupbyColumns');
                    splitSqlAnalyzerValuesPerTable('joinColumns');
                    splitSqlAnalyzerValuesPerTable('orderbyColumns');
                    splitSqlAnalyzerValuesPerTable('selectColumns');
                  }

                  tablePromises = Object.keys(perTable).map(function (path) {
                    return new Promise( /*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(resolve) {
                        var entry, applyPromise;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return _this2.getEntry({
                                  namespace: options.namespace,
                                  compute: options.compute,
                                  path: path
                                });

                              case 3:
                                entry = _context4.sent;
                                applyPromise = entry.applySqlAnalyzerResponseToChildren(perTable[path], _objectSpread(_objectSpread({}, options), {}, {
                                  silenceErrors: true
                                }));
                                cancellablePromises.push(applyPromise);
                                _context4.t0 = popularEntries.push;
                                _context4.t1 = popularEntries;
                                _context4.t2 = _toConsumableArray;
                                _context4.next = 11;
                                return applyPromise;

                              case 11:
                                _context4.t3 = _context4.sent;
                                _context4.t4 = (0, _context4.t2)(_context4.t3);

                                _context4.t0.apply.call(_context4.t0, _context4.t1, _context4.t4);

                                _context4.next = 18;
                                break;

                              case 16:
                                _context4.prev = 16;
                                _context4.t5 = _context4["catch"](0);

                              case 18:
                                resolve();

                              case 19:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, null, [[0, 16]]);
                      }));

                      return function (_x10) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  });
                  Promise.all(tablePromises)["finally"](function () {
                    resolve(popularEntries);
                  });
                  _context5.next = 27;
                  break;

                case 24:
                  _context5.prev = 24;
                  _context5.t1 = _context5["catch"](13);
                  resolve(popularEntries);

                case 27:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, null, [[1, 6], [13, 24]]);
        }));

        return function (_x7, _x8, _x9) {
          return _ref2.apply(this, arguments);
        };
      }());
      return (0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(popularityPromise);
    }
  }, {
    key: "getKnownEntry",
    value: function () {
      var _getKnownEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(options) {
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", this.entries[generateEntryCacheId(options)]);

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getKnownEntry(_x11) {
        return _getKnownEntry.apply(this, arguments);
      }

      return getKnownEntry;
    }()
    /**
     * Adds a temporary table to the data catalog. This would allow autocomplete etc. of tables that haven't
     * been created yet.
     *
     * Calling this returns a handle that allows deletion of any created entries by calling delete() on the handle.
     */

  }, {
    key: "addTemporaryTable",
    value: function addTemporaryTable(options) {
      var _this3 = this;

      var database = options.database || 'default';
      var path = [database, options.name];
      var identifiersToClean = [];

      var addEntryMeta = function addEntryMeta(entry, sourceMeta) {
        entry.sourceMeta = sourceMeta || entry.definition;
        entry.sourceMetaPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(entry.sourceMeta);
      };

      var sourceIdentifier = generateEntryCacheId({
        namespace: options.namespace,
        path: []
      }); // Create the source entry if not already present

      if (!this.temporaryEntries[sourceIdentifier]) {
        var sourceEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
          isTemporary: true,
          dataCatalog: this,
          namespace: options.namespace,
          compute: options.compute,
          path: [],
          definition: {
            index: 0,
            sqlAnalyzerLoaded: true,
            type: 'source'
          }
        });
        addEntryMeta(sourceEntry);
        identifiersToClean.push(sourceIdentifier);
        sourceEntry.childrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
        this.temporaryEntries[sourceIdentifier] = Promise.resolve(sourceEntry);
      }

      this.temporaryEntries[sourceIdentifier].then( /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(sourceEntry) {
          var existingTemporaryDatabases, databaseIdentifier, _databaseEntry, databaseEntry, existingTemporaryTables, tableIdentifier, _tableEntry, index, tableEntry, tableSourceMeta, columnEntries;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _context7.next = 2;
                  return sourceEntry.getChildren();

                case 2:
                  existingTemporaryDatabases = _context7.sent;
                  databaseIdentifier = generateEntryCacheId({
                    namespace: options.namespace,
                    path: [database]
                  }); // Create the database entry if not already present

                  if (!_this3.temporaryEntries[databaseIdentifier]) {
                    _databaseEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
                      isTemporary: true,
                      dataCatalog: _this3,
                      namespace: options.namespace,
                      compute: options.compute,
                      path: [database],
                      definition: {
                        index: 0,
                        sqlAnalyzerLoaded: true,
                        type: 'database'
                      }
                    });
                    addEntryMeta(_databaseEntry);
                    _databaseEntry.childrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve([]);
                    identifiersToClean.push(databaseIdentifier);
                    existingTemporaryDatabases.push(_databaseEntry);
                    _this3.temporaryEntries[databaseIdentifier] = Promise.resolve(_databaseEntry);
                  }

                  _context7.next = 7;
                  return _this3.temporaryEntries[databaseIdentifier];

                case 7:
                  databaseEntry = _context7.sent;
                  _context7.next = 10;
                  return databaseEntry.getChildren();

                case 10:
                  existingTemporaryTables = _context7.sent;
                  tableIdentifier = generateEntryCacheId({
                    namespace: options.namespace,
                    path: path
                  }); // Unlink any existing table with the same identifier

                  if (!_this3.temporaryEntries[tableIdentifier]) {
                    _context7.next = 18;
                    break;
                  }

                  _context7.next = 15;
                  return _this3.temporaryEntries[tableIdentifier];

                case 15:
                  _tableEntry = _context7.sent;
                  index = existingTemporaryTables.indexOf(_tableEntry);

                  if (index !== -1) {
                    existingTemporaryTables.splice(index, 1);
                  }

                case 18:
                  tableEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
                    isTemporary: true,
                    dataCatalog: _this3,
                    namespace: options.namespace,
                    compute: options.compute,
                    path: path,
                    definition: {
                      comment: '',
                      index: existingTemporaryTables.length,
                      name: options.name,
                      sqlAnalyzerLoaded: true,
                      type: 'table'
                    }
                  });
                  existingTemporaryTables.push(tableEntry);
                  tableSourceMeta = {
                    columns: (options.columns || []).map(function (col) {
                      return col.name;
                    }),
                    extended_columns: options.columns || [],
                    comment: '',
                    notFound: false,
                    is_view: false
                  };
                  addEntryMeta(tableEntry, tableSourceMeta);
                  tableEntry.sample = {
                    data: options.sample,
                    meta: options.columns,
                    type: 'table'
                  };
                  tableEntry.samplePromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(tableEntry.sample);
                  identifiersToClean.push(tableIdentifier);
                  _this3.temporaryEntries[tableIdentifier] = Promise.resolve(tableEntry);
                  columnEntries = [];
                  tableEntry.childrenPromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(columnEntries);
                  options.columns.forEach(function (column, index) {
                    var columnPath = [].concat(path, [column.name]);
                    var columnEntry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
                      isTemporary: true,
                      dataCatalog: _this3,
                      namespace: options.namespace,
                      compute: options.compute,
                      path: columnPath,
                      definition: {
                        comment: '',
                        index: index,
                        name: column.name,
                        partitionKey: false,
                        type: column.type
                      }
                    });
                    columnEntry.sample = {
                      data: options.sample.map(function (sampleRow) {
                        return [sampleRow[index]];
                      }),
                      meta: [column],
                      type: 'table'
                    };
                    columnEntry.samplePromise = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(columnEntry.sample);
                    tableSourceMeta.columns.push(column.name);
                    tableSourceMeta.extended_columns.push(columnEntry.definition);
                    addEntryMeta(columnEntry, {
                      comment: '',
                      name: column.name,
                      notFound: false,
                      sample: columnEntry.sample.data,
                      type: column.type
                    });
                    var columnIdentifier = generateEntryCacheId({
                      namespace: options.namespace,
                      path: columnPath
                    });
                    identifiersToClean.push(columnIdentifier);
                    _this3.temporaryEntries[columnIdentifier] = api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise.resolve(columnEntry);
                  });

                case 29:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7);
        }));

        return function (_x12) {
          return _ref4.apply(this, arguments);
        };
      }());
      return {
        "delete": function _delete() {
          while (identifiersToClean.length) {
            var nextToDelete = identifiersToClean.pop();

            if (nextToDelete) {
              delete _this3.temporaryEntries[nextToDelete];
            }
          }
        }
      };
    }
  }, {
    key: "getEntry",
    value: function () {
      var _getEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(options) {
        var _this4 = this;

        var identifier;
        return regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                identifier = generateEntryCacheId(options);

                if (!options.temporaryOnly) {
                  _context8.next = 3;
                  break;
                }

                return _context8.abrupt("return", this.temporaryEntries[identifier] || $.Deferred().reject().promise());

              case 3:
                if (!this.entries[identifier]) {
                  _context8.next = 5;
                  break;
                }

                return _context8.abrupt("return", this.entries[identifier]);

              case 5:
                this.entries[identifier] = new Promise(function (resolve) {
                  if (!_cacheEnabled) {
                    resolve(new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
                      dataCatalog: _this4,
                      namespace: options.namespace,
                      compute: options.compute,
                      path: options.path,
                      definition: options.definition
                    }));
                  } else {
                    _this4.store.getItem(identifier).then(function (storeEntry) {
                      var definition = storeEntry ? storeEntry.definition : options.definition;
                      var entry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
                        dataCatalog: _this4,
                        namespace: options.namespace,
                        compute: options.compute,
                        path: options.path,
                        definition: definition
                      });

                      if (storeEntry) {
                        mergeEntry(entry, storeEntry);
                      } else if (!options.cachedOnly && options.definition) {
                        entry.saveLater();
                      }

                      resolve(entry);
                    })["catch"](function (error) {
                      console.warn(error);
                      var entry = new catalog_DataCatalogEntry__WEBPACK_IMPORTED_MODULE_3__.default({
                        dataCatalog: _this4,
                        namespace: options.namespace,
                        compute: options.compute,
                        path: options.path,
                        definition: options.definition
                      });

                      if (!options.cachedOnly && options.definition) {
                        entry.saveLater();
                      }

                      resolve(entry);
                    });
                  }
                });
                return _context8.abrupt("return", this.entries[identifier]);

              case 7:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function getEntry(_x13) {
        return _getEntry.apply(this, arguments);
      }

      return getEntry;
    }()
  }, {
    key: "getMultiTableEntry",
    value: function () {
      var _getMultiTableEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(options) {
        var _this5 = this;

        var identifier, newEntry;
        return regeneratorRuntime.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                identifier = generateEntryCacheId(options);

                if (!this.multiTableEntries[identifier]) {
                  _context10.next = 3;
                  break;
                }

                return _context10.abrupt("return", this.multiTableEntries[identifier]);

              case 3:
                newEntry = new catalog_MultiTableEntry__WEBPACK_IMPORTED_MODULE_5__.default({
                  identifier: identifier,
                  dataCatalog: this,
                  paths: options.paths
                });
                this.multiTableEntries[identifier] = new Promise( /*#__PURE__*/function () {
                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(resolve) {
                    var storeEntry;
                    return regeneratorRuntime.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            if (_cacheEnabled) {
                              _context9.next = 3;
                              break;
                            }

                            resolve(newEntry);
                            return _context9.abrupt("return");

                          case 3:
                            _context9.prev = 3;
                            _context9.next = 6;
                            return _this5.multiTableStore.getItem(identifier);

                          case 6:
                            storeEntry = _context9.sent;

                            if (storeEntry) {
                              mergeMultiTableEntry(newEntry, storeEntry);
                            }

                            _context9.next = 13;
                            break;

                          case 10:
                            _context9.prev = 10;
                            _context9.t0 = _context9["catch"](3);
                            console.warn(_context9.t0);

                          case 13:
                            resolve(newEntry);

                          case 14:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9, null, [[3, 10]]);
                  }));

                  return function (_x15) {
                    return _ref5.apply(this, arguments);
                  };
                }());
                return _context10.abrupt("return", this.multiTableEntries[identifier]);

              case 6:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function getMultiTableEntry(_x14) {
        return _getMultiTableEntry.apply(this, arguments);
      }

      return getMultiTableEntry;
    }()
    /**
     * Updates the cache for the given multi table entry
     */

  }, {
    key: "persistMultiTableEntry",
    value: function () {
      var _persistMultiTableEntry = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(multiTableEntry) {
        var confTtl;
        return regeneratorRuntime.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                confTtl = window.CACHEABLE_TTL || {};

                if (!(!_cacheEnabled || confTtl["default"] && confTtl["default"] <= 0 || confTtl.sqlAnalyzer && confTtl.sqlAnalyzer <= 0 || multiTableEntry.getConnector().optimizer === _analyzer_types__WEBPACK_IMPORTED_MODULE_6__.SqlAnalyzerMode.local)) {
                  _context11.next = 3;
                  break;
                }

                return _context11.abrupt("return");

              case 3:
                _context11.next = 5;
                return this.multiTableStore.setItem(multiTableEntry.identifier, {
                  version: DATA_CATALOG_VERSION,
                  topAggs: multiTableEntry.topAggs,
                  topColumns: multiTableEntry.topColumns,
                  topFilters: multiTableEntry.topFilters,
                  topJoins: multiTableEntry.topJoins
                });

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      function persistMultiTableEntry(_x16) {
        return _persistMultiTableEntry.apply(this, arguments);
      }

      return persistMultiTableEntry;
    }()
  }], [{
    key: "disableCache",
    value: function disableCache() {
      _cacheEnabled = false;
    }
    /**
     * Enables the cache for subsequent operations, mainly used for test purposes
     */

  }, {
    key: "enableCache",
    value: function enableCache() {
      _cacheEnabled = true;
    }
  }, {
    key: "cacheEnabled",
    value: function cacheEnabled() {
      return _cacheEnabled;
    }
  }]);

  return DataCatalog;
}();
var generalDataCatalog = new catalog_GeneralDataCatalog__WEBPACK_IMPORTED_MODULE_4__.default();
var sourceBoundCatalogs = {};
/**
 * Helper function to get the DataCatalog instance for a given data source.
 */

var getCatalog = function getCatalog(connector) {
  if (!connector || !connector.id) {
    throw new Error('getCatalog called without connector with id');
  }

  return sourceBoundCatalogs[connector.id] || (sourceBoundCatalogs[connector.id] = new DataCatalog(connector));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Adds a detached (temporary) entry to the data catalog. This would allow autocomplete etc. of tables that haven't
   * been created yet.
   *
   * Calling this returns a handle that allows deletion of any created entries by calling delete() on the handle.
   */
  addTemporaryTable: function addTemporaryTable(options) {
    return getCatalog(options.connector).addTemporaryTable(options);
  },
  getEntry: function getEntry(options) {
    return getCatalog(options.connector).getEntry(options);
  },
  getMultiTableEntry: function getMultiTableEntry(options) {
    return getCatalog(options.connector).getMultiTableEntry(options);
  },

  /**
   * This can be used as a shorthand function to get the child entries of the given path. Same as first calling
   * getEntry then getChildren.
   */
  getChildren: function getChildren(options) {
    return new api_cancellablePromise__WEBPACK_IMPORTED_MODULE_1__.CancellablePromise( /*#__PURE__*/function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(resolve, reject, onCancel) {
        var entry, childPromise;
        return regeneratorRuntime.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.prev = 0;
                _context12.next = 3;
                return getCatalog(options.connector).getEntry(options);

              case 3:
                entry = _context12.sent;
                childPromise = entry.getChildren(options);
                onCancel(function () {
                  childPromise.cancel();
                });
                resolve((0,catalog_catalogUtils__WEBPACK_IMPORTED_MODULE_2__.applyCancellable)(childPromise, options));
                _context12.next = 12;
                break;

              case 9:
                _context12.prev = 9;
                _context12.t0 = _context12["catch"](0);
                reject(_context12.t0);

              case 12:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[0, 9]]);
      }));

      return function (_x17, _x18, _x19) {
        return _ref6.apply(this, arguments);
      };
    }());
  },
  getCatalog: getCatalog,
  getAllNavigatorTags: generalDataCatalog.getAllNavigatorTags.bind(generalDataCatalog),
  updateAllNavigatorTags: generalDataCatalog.updateAllNavigatorTags.bind(generalDataCatalog),
  enableCache: function enableCache() {
    _cacheEnabled = true;
  },
  disableCache: function disableCache() {
    _cacheEnabled = false;
  }
});

/***/ }),

/***/ "./desktop/core/src/desktop/js/catalog/events.ts":
/*!*******************************************************!*\
  !*** ./desktop/core/src/desktop/js/catalog/events.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REFRESH_CONTEXT_CATALOG_TOPIC": () => (/* binding */ REFRESH_CONTEXT_CATALOG_TOPIC),
/* harmony export */   "CONTEXT_CATALOG_REFRESHED_TOPIC": () => (/* binding */ CONTEXT_CATALOG_REFRESHED_TOPIC),
/* harmony export */   "NAMESPACES_REFRESHED_TOPIC": () => (/* binding */ NAMESPACES_REFRESHED_TOPIC)
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
var REFRESH_CONTEXT_CATALOG_TOPIC = 'context.catalog.refresh';
var CONTEXT_CATALOG_REFRESHED_TOPIC = 'context.catalog.refreshed';
var NAMESPACES_REFRESHED_TOPIC = 'context.catalog.namespaces.refreshed';

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-e4b7453b-bundle-3c690b33b5f47cc0d68b.js.map