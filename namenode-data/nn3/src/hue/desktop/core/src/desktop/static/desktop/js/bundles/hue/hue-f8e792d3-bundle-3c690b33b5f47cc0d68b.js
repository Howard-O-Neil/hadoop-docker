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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-f8e792d3"],{

/***/ "./desktop/core/src/desktop/js/apps/about/components/ko.connectorsConfig.js":
/*!**********************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/about/components/ko.connectorsConfig.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apiUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
/* harmony import */ var config_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! config/events */ "./desktop/core/src/desktop/js/config/events.ts");
/* harmony import */ var _ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ko/components/componentUtils */ "./desktop/core/src/desktop/js/ko/components/componentUtils.js");
/* harmony import */ var _ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ko/components/DisposableComponent */ "./desktop/core/src/desktop/js/ko/components/DisposableComponent.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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







var NAME = 'connectors-config'; // prettier-ignore

var TEMPLATE = "\n<script type=\"text/html\" id=\"installed-connectors-page\">\n  <div class=\"row-fluid\">\n    <a href=\"javascript:void(0)\" data-bind=\"click: addNewConnector.bind($data)\">\n      + Connector\n    </a>\n  </div>\n\n  <div data-bind=\"template: { name: 'connectors-page', data: instances() }\"></div>\n\n</script>\n\n\n<script type=\"text/html\" id=\"add-connector-page\">\n  <div class=\"row-fluid\">\n    Add a Connector\n  </div>\n\n  <div data-bind=\"template: { name: 'connectors-page', data: connectors() }\"></div>\n</script>\n\n\n<script type=\"text/html\" id=\"connectors-page\">\n  <div style=\"margin: 0 10px;\">\n    <div class=\"pull-right\" style=\"display: inline-block\">\n      <div style=\"display: inline-block; margin-right: 10px;\" data-bind=\"component: {\n          name: 'hue-drop-down',\n          params: {\n            fixedPosition: true,\n            value: $parent.selectedConnectorCategory,\n            labelAttribute: 'name',\n            entries: $parent.filterCategories,\n            linkTitle: '".concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Category'), "'\n          }\n        }\n      \"></div>\n      <input type=\"text\" class=\"input-large\" style=\"padding: 3px 4px; border-radius: 2px; margin-top: 8px; margin-right: 10px;\" placeholder=\"").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Filter...'), "\" data-bind=\"\n          clearable: $parent.connectorsFilter,\n          valueUpdate: 'afterkeydown'\n      \">\n      <span>\n        <a href=\"https://docs.gethue.com/administrator/configuration/connectors/\" target=\"_blank\">\n          <i class=\"fa fa-question-circle\"></i> ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Help'), "\n        </a>\n      </span>\n    </div>\n  </div>\n\n  <div class=\"card card-small margin-top-10\">\n    <div class=\"card-body clearfix\">\n\n      <div class=\"span10\">\n        <div class=\"margin-top-10\">\n          <div data-bind=\"foreach: $parent.filteredConnectors()\">\n            <h4 data-bind=\"text: category_name\"></h4>\n            <table class=\"table table-condensed\">\n              <thead>\n                <tr>\n                  <th width=\"30%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Name'), "</th>\n                  <th>").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Description'), "</th>\n                </tr>\n              </thead>\n              <!-- ko if: $data.values.length > 0 -->\n              <tbody data-bind=\"foreach: values\">\n                <tr data-bind=\"click: $parents[2].editConnector.bind($parents[2])\">\n                  <td data-bind=\"text: nice_name\"></td>\n                  <td data-bind=\"text: description\"></td>\n                </tr>\n              </tbody>\n              <!-- /ko -->\n              <!-- ko ifnot: $data.values.length > 0 -->\n              <tfoot>\n                <tr>\n                  <td colspan=\"2\">\n                    ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('No connectors'), "\n                    <!-- ko if: $parents[1].section() === 'installed-connectors-page' -->\n                      <a href=\"javascript:void(0)\" data-bind=\"click: function() { $parents[1].selectedConnectorCategory($data.category); $parents[1].addNewConnector(); }\">\n                        ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Add one ?'), "\n                      </a>\n                    <!-- /ko -->\n                  </td>\n                </tr>\n              </tfoot>\n              <!-- /ko -->\n            </table>\n          </div>\n\n          <!-- ko if: $parent.filteredConnectors().length == 0 -->\n          <table class=\"table table-condensed\">\n            <thead>\n              <tr>\n                <th width=\"30%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Name'), "</th>\n                <th>").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Instances'), "</th>\n              </tr>\n            </thead>\n            <tfoot>\n              <tr>\n                <td colspan=\"2\">\n                  ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('No connectors'), "\n                  <!-- ko if: $parent.section() == 'installed-connectors-page' -->\n                    <a href=\"javascript:void(0)\" data-bind=\"click: function() { $parent.selectedConnectorCategory($data.category); $parent.addNewConnector(); }\">\n                      ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Add one ?'), "\n                    </a>\n                  <!-- /ko -->\n                </td>\n              </tr>\n            </tfoot>\n          </table>\n          <!-- /ko -->\n        </div>\n      </div>\n    </div>\n\n  </div>\n</script>\n\n\n<script type=\"text/html\" id=\"connector-page\">\n  <div class=\"row-fluid\">\n    <input data-bind=\"value: nice_name\">\n    <!-- ko if: typeof id != 'undefined' -->\n      <!-- ko if: id -->\n        (<span data-bind=\"text: name\"></span>)\n        <a href=\"javascript:void(0)\" data-bind=\"click: $parent.updateConnector.bind($parent)\">\n          ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Update'), "\n        </a>\n        <a href=\"javascript:void(0)\" data-bind=\"click: $parent.deleteConnector.bind($parent)\">\n          ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Delete'), "\n        </a>\n      <!-- /ko -->\n      <!-- ko ifnot: id -->\n        <a href=\"javascript:void(0)\" data-bind=\"click: $parent.updateConnector.bind($parent)\">\n          ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Save'), "\n        </a>\n        <a href=\"javascript:void(0)\" data-bind=\"click: function() { $parent.section('add-connector-page'); }\">\n          ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Cancel'), "\n        </a>\n      <!-- /ko -->\n    <!-- /ko -->\n    <a href=\"javascript:void(0)\" data-bind=\"click: $parent.testConnector.bind($parent)\">\n      ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Test connection'), "\n    </a>\n    <span>\n      <i class=\"fa fa-spinner fa-spin\" data-bind=\"visible: $parent.testConnectionExecuting()\"></i>\n      <i class=\"fa fa-question\" data-bind=\"visible: !$parent.testConnectionExecuted() && !$parent.testConnectionExecuting()\"></i>\n      <i class=\"fa fa-check\" data-bind=\"visible: $parent.testConnectionExecuted() && !$parent.testConnectionErrors().length\"></i>\n      <i class=\"fa fa-exclamation\" data-bind=\"visible: $parent.testConnectionExecuted() && $parent.testConnectionErrors().length\"></i>\n      <span data-bind=\"visible: $parent.testConnectionExecuted() && $parent.testConnectionErrors().length, text: $parent.testConnectionErrors\">\n      </span>\n    </span>\n    <table class=\"table table-condensed\">\n      <thead>\n        <tr>\n          <th width=\"30%\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Name'), "</th>\n          <th>").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Value'), "</th>\n        </tr>\n      </thead>\n      <tbody data-bind=\"foreach: settings\">\n        <tr>\n          <td data-bind=\"text: name\"></td>\n          <td><input data-bind=\"value: value\" class=\"input-xxlarge\"></td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</script>\n\n<div class=\"container-fluid\">\n  <a href=\"javascript:void(0)\" data-bind=\"click: function() { section('installed-connectors-page'); }\">\n    ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('Connectors'), "\n  </a>\n\n  <!-- ko if: section() === 'installed-connectors-page' -->\n    <div data-bind=\"template: { name: 'installed-connectors-page' }\"></div>\n  <!-- /ko -->\n\n  <!-- ko if: section() === 'add-connector-page' -->\n    <div data-bind=\"template: { name: 'add-connector-page' }\"></div>\n  <!-- /ko -->\n\n  <!-- ko if: section() === 'connector-page' && instance() -->\n    <div data-bind=\"template: { name: 'connector-page', data: instance() }\"></div>\n  <!-- /ko -->\n</div>\n");
var ALL_CATEGORY = {
  type: 'all',
  name: (0,_utils_i18n__WEBPACK_IMPORTED_MODULE_6__.default)('All')
};

var ConnectorsConfig = /*#__PURE__*/function (_DisposableComponent) {
  _inherits(ConnectorsConfig, _DisposableComponent);

  var _super = _createSuper(ConnectorsConfig);

  function ConnectorsConfig() {
    var _this;

    _classCallCheck(this, ConnectorsConfig);

    _this = _super.call(this);
    _this.section = knockout__WEBPACK_IMPORTED_MODULE_0__.observable('installed-connectors-page');

    _this.section.subscribe(function () {
      _this.connectorsFilter('');

      _this.testConnectionExecuted(false);
    });

    _this.categories = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray();
    _this.filterCategories = knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(function () {
      return [ALL_CATEGORY].concat(_this.categories());
    });
    _this.selectedConnectorCategory = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(ALL_CATEGORY);
    _this.connectorsFilter = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    _this.testConnectionExecuted = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    _this.testConnectionExecuting = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(false);
    _this.testConnectionErrors = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(''); // Handle two types of objects are being listed: connector instances and types

    _this.instances = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray(); // Connector instances (e.g. connector to a MySql DB on a certain host)

    _this.instance = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    _this.connectors = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray(); // Connector types (e.g. mysql dialect)

    _this.connector = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    _this.selectedConnectors = knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(function () {
      var connectors = _this.section() === 'installed-connectors-page' ? _this.instances() : _this.connectors();

      if (_this.selectedConnectorCategory() === ALL_CATEGORY) {
        return connectors;
      }

      return connectors.filter(function (connector) {
        return connector.category === _this.selectedConnectorCategory().type;
      });
    });
    _this.filteredConnectors = knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(function () {
      if (!_this.connectorsFilter()) {
        return _this.selectedConnectors();
      }

      var lowerQuery = _this.connectorsFilter().toLowerCase();

      var filteredConnectors = [];

      var categoryIndex = _this.categories().reduce(function (index, category) {
        index[category.type] = category.category_name;
        return index;
      }, {});

      _this.selectedConnectors().forEach(function (connector) {
        var filteredConnector = {
          category: connector.category,
          category_name: categoryIndex[connector.category],
          values: connector.values.filter(function (val) {
            return val.nice_name.toLowerCase().indexOf(lowerQuery) !== -1;
          })
        };

        if (filteredConnector.values.length > 0) {
          filteredConnectors.push(filteredConnector);
        }
      });

      return filteredConnectors;
    });

    _this.fetchConnectors();

    return _this;
  }

  _createClass(ConnectorsConfig, [{
    key: "addNewConnector",
    value: function addNewConnector() {
      this.section('add-connector-page');
    }
  }, {
    key: "fetchConnectors",
    value: function fetchConnectors() {
      var _this2 = this;

      this.fetchConnectorTypes(); // TODO: might be cleaner to chain below

      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simpleGet)('/desktop/connectors/api/instances/', {}, {
        successCallback: function successCallback(data) {
          _this2.instances(data.connectors);
        }
      });
    }
  }, {
    key: "editConnector",
    value: function editConnector(data) {
      if (this.section() === 'installed-connectors-page') {
        this.instance(data);
      } else {
        this.newConnector(data.dialect, data["interface"]);
      }

      this.section('connector-page');
    }
  }, {
    key: "newConnector",
    value: function newConnector(dialect, con_interface) {
      var _this3 = this;

      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simpleGet)('/desktop/connectors/api/instance/new/' + dialect + '/' + con_interface, {}, {
        successCallback: function successCallback(data) {
          _this3.instance(knockout__WEBPACK_IMPORTED_MODULE_0__.mapping.fromJS(data.connector));
        }
      });
    }
  }, {
    key: "fetchConnector",
    value: function fetchConnector(id) {
      var _this4 = this;

      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simpleGet)('/desktop/connectors/api/instance/get/' + id, {}, {
        successCallback: function successCallback(data) {
          _this4.instance(knockout__WEBPACK_IMPORTED_MODULE_0__.mapping.fromJS(data.connector));
        }
      });
    }
  }, {
    key: "deleteConnector",
    value: function deleteConnector(connector) {
      var _this5 = this;

      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simplePost)('/desktop/connectors/api/instance/delete', {
        connector: knockout__WEBPACK_IMPORTED_MODULE_0__.mapping.toJSON(connector)
      }, {
        successCallback: function successCallback(data) {
          _this5.section('installed-connectors-page');

          _this5.fetchConnectors();

          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__.default.publish(config_events__WEBPACK_IMPORTED_MODULE_2__.REFRESH_CONFIG_TOPIC);
        }
      });
    }
  }, {
    key: "updateConnector",
    value: function updateConnector(connector) {
      var _this6 = this;

      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simplePost)('/desktop/connectors/api/instance/update', {
        connector: knockout__WEBPACK_IMPORTED_MODULE_0__.mapping.toJSON(connector)
      }, {
        successCallback: function successCallback(data) {
          connector.id = data.connector.id;

          _this6.section('installed-connectors-page');

          _this6.fetchConnectors();

          utils_huePubSub__WEBPACK_IMPORTED_MODULE_5__.default.publish(config_events__WEBPACK_IMPORTED_MODULE_2__.REFRESH_CONFIG_TOPIC);
        }
      });
    }
  }, {
    key: "fetchConnectorTypes",
    value: function fetchConnectorTypes() {
      var _this7 = this;

      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simpleGet)('/desktop/connectors/api/types/', {}, {
        successCallback: function successCallback(data) {
          _this7.connectors(data.connectors);

          _this7.categories(data.categories);
        }
      });
    }
  }, {
    key: "testConnector",
    value: function testConnector(connector) {
      var _this8 = this;

      this.testConnectionExecuted(false);
      this.testConnectionExecuting(true);
      this.testConnectionErrors('');
      (0,_api_apiUtils__WEBPACK_IMPORTED_MODULE_1__.simplePost)('/desktop/connectors/api/instance/test', {
        connector: knockout__WEBPACK_IMPORTED_MODULE_0__.mapping.toJSON(connector)
      }, {
        successCallback: function successCallback(data) {
          _this8.testConnectionExecuted(true);

          _this8.testConnectionExecuting(false);

          _this8.testConnectionErrors(data.warnings);
        }
      });
    }
  }]);

  return ConnectorsConfig;
}(_ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_4__.default);

_ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_3__.default.registerComponent(NAME, ConnectorsConfig, TEMPLATE);

/***/ }),

/***/ "./desktop/core/src/desktop/js/apps/about/components/ko.hueConfigTree.js":
/*!*******************************************************************************!*\
  !*** ./desktop/core/src/desktop/js/apps/about/components/ko.hueConfigTree.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NAME": () => (/* binding */ NAME)
/* harmony export */ });
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! knockout */ "./node_modules/knockout/build/output/knockout-latest.js");
/* harmony import */ var knockout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(knockout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var _ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ko/components/componentUtils */ "./desktop/core/src/desktop/js/ko/components/componentUtils.js");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ko/components/DisposableComponent */ "./desktop/core/src/desktop/js/ko/components/DisposableComponent.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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





var NAME = 'hue-config-tree'; // prettier-ignore

var TEMPLATE = "\n<script id=\"config-values-template\" type=\"text/html\">\n  <tr>\n    <th>\n    <!-- ko if: config.is_anonymous -->\n      <i>(".concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('default section'), ")</i>\n    <!-- /ko -->\n    <!-- ko ifnot: config.is_anonymous -->\n      <span data-bind=\"text: config.key\"></span>\n    <!-- /ko -->\n    </th>\n    <td data-bind=\"css: { 'border-top': depth === 1 ? '0' : null }\">\n      <!-- ko if: typeof config.values !== 'undefined' -->\n        <!-- ko if: config.help || !config.values.length -->\n        <i data-bind=\"text: config.help || '").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('No help available.'), "'\"></i>\n        <!-- /ko -->\n        <table class=\"table table-condensed recurse\">\n          <tbody>\n            <!-- ko foreach: config.values -->\n              <!-- ko template: { name: 'config-values-template', data: { config: $data, depth: $parent.depth + 1 } } --><!-- /ko -->\n            <!-- /ko -->\n          </tbody>\n        </table>\n        <!-- /ko -->\n      <!-- ko if: typeof config.value !== 'undefined' -->\n        <code data-bind=\"text: config.value\"></code><br/>\n        <i data-bind=\"text: config.help || '").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('No help available.'), "'\"></i>\n        <span class=\"muted\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('Default:'), " <i data-bind=\"text: config.default\"></i></span>\n      <!-- /ko -->\n    </td>\n  </tr>\n</script>\n\n<div class=\"container-fluid\">\n  <!-- ko hueSpinner: { spin:  loading, center: true, size: 'large' } --><!-- /ko -->\n  <!-- ko ifnot: loading -->\n    <!-- ko if: errorMessage -->\n      <div class=\"alert alert-error\" style=\"margin: 20px\" data-bind=\"text: errorMessage\"></div>\n    <!-- /ko -->\n    <!-- ko ifnot: errorMessage -->\n      <div class=\"row-fluid\">\n        <div class=\"card card-home\">\n          <div class=\"pull-right muted margin-top-30\">\n            ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('Configuration files located in'), " <code style=\"color: #0B7FAD\" data-bind=\"text: configDir\"></code>\n          </div>\n          <h1 class=\"inline-block margin-top-20\">\n            ").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('Sections'), "\n          </h1>\n          <form class=\"form-inline\" autocomplete=\"off\">\n            <input class=\"inline-autocomp-input\" type=\"text\" ").concat(window.PREVENT_AUTOFILL_INPUT_ATTRS, " placeholder=\"").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('Filter...'), "\" data-bind=\"textInput: filter, clearable: { value: filter }\">\n          </form>\n          <div class=\"card-body clearfix\">\n            <div class=\"span2\">\n              <ul class=\"nav nav-pills nav-stacked\" data-bind=\"foreach: filteredSections\">\n                <li data-bind=\"\n                    css: { 'active': $data.key === $parent.selectedKey() },\n                    click: function () { $parent.selectedKey($data.key) }\n                  \">\n                  <a href=\"javascript: void(0);\" data-bind=\"text: key\"></a>\n                </li>\n              </ul>\n            </div>\n            <div class=\"span10\" data-bind=\"with: selectedConfig\">\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\">\n                  <!-- ko if: values.length -->\n                  <table class=\"table table-condensed recurse\">\n                    <tbody data-bind=\"foreach: values\">\n                      <!-- ko template: { name: 'config-values-template', data: { config: $data, depth: 1 } } --><!-- /ko -->\n                    </tbody>\n                  </table>\n                  <!-- /ko -->\n                  <!-- ko ifnot: values.length -->\n                    <i>").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('Empty configuration section'), "</i>\n                  <!-- /ko -->\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card card-home\" style=\"margin-top: 50px\">\n          <h2 class=\"card-heading simple\">").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('Installed Applications'), "</h2>\n          <div class=\"card-body\" data-bind=\"foreach: apps\">\n            <!-- ko if: has_ui -->\n              <a href=\"javascript: void(0);\" data-bind=\"hueLink: display_name\"><span class=\"badge badge-info\" data-bind=\"text: name\"></span></a>\n            <!-- /ko -->\n            <!-- ko ifnot: has_ui -->\n              <span class=\"badge\" title=\"").concat((0,_utils_i18n__WEBPACK_IMPORTED_MODULE_3__.default)('This app does not have a UI'), "\" data-bind=\"text: name\"></span>\n            <!-- /ko -->\n          </div>\n        </div>\n      </div>\n    <!-- /ko -->\n  <!-- /ko -->\n</div>\n");

var filterConfig = function filterConfig(config, lowerCaseFilter) {
  if (config.value && config.value.indexOf(lowerCaseFilter) !== -1 || !config.is_anonymous && config.key.indexOf(lowerCaseFilter) !== -1) {
    return config;
  }

  if (config.values) {
    var values = [];
    config.values.forEach(function (val) {
      var filtered = filterConfig(val, lowerCaseFilter);

      if (filtered) {
        values.push(filtered);
      }
    });

    if (values.length) {
      return {
        key: config.key,
        is_anonymous: config.is_anonymous,
        help: config.help,
        values: values
      };
    }
  }
};

var HueConfigTree = /*#__PURE__*/function (_DisposableComponent) {
  _inherits(HueConfigTree, _DisposableComponent);

  var _super = _createSuper(HueConfigTree);

  function HueConfigTree(params) {
    var _this;

    _classCallCheck(this, HueConfigTree);

    _this = _super.call(this);
    _this.loading = knockout__WEBPACK_IMPORTED_MODULE_0__.observable(true);
    _this.filter = knockout__WEBPACK_IMPORTED_MODULE_0__.observable().extend({
      throttle: 500
    });
    _this.errorMessage = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    _this.apps = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray();
    _this.config = knockout__WEBPACK_IMPORTED_MODULE_0__.observableArray();
    _this.configDir = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    _this.selectedKey = knockout__WEBPACK_IMPORTED_MODULE_0__.observable();
    _this.filteredSections = knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(function () {
      if (!_this.filter()) {
        return _this.config();
      }

      var lowerCaseFilter = _this.filter().toLowerCase();

      var foundConfigs = [];
      var selectedFound = false;

      _this.config().forEach(function (config) {
        var filtered = filterConfig(config, lowerCaseFilter);

        if (filtered) {
          foundConfigs.push(filtered);

          if (_this.selectedKey() && _this.selectedKey() === filtered.key) {
            selectedFound = true;
          }
        }
      });

      if (!selectedFound) {
        if (foundConfigs.length) {
          _this.selectedKey(foundConfigs[0].key);
        } else {
          _this.selectedKey(undefined);
        }
      }

      return foundConfigs;
    });
    _this.selectedConfig = knockout__WEBPACK_IMPORTED_MODULE_0__.pureComputed(function () {
      return _this.filteredSections().find(function (section) {
        return section.key === _this.selectedKey();
      });
    });

    _this.load();

    return _this;
  }

  _createClass(HueConfigTree, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.loading(true);
                this.errorMessage(undefined);
                _context.prev = 2;
                _context.next = 5;
                return _api_apiHelper__WEBPACK_IMPORTED_MODULE_1__.default.fetchHueConfigAsync();

              case 5:
                response = _context.sent;
                this.config(response.config);
                this.configDir(response.conf_dir);
                this.apps(response.apps);
                this.selectedKey(this.config().length ? this.config()[0].key : undefined);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.errorMessage(_context.t0);

              case 15:
                this.loading(false);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      function load() {
        return _load.apply(this, arguments);
      }

      return load;
    }()
  }]);

  return HueConfigTree;
}(_ko_components_DisposableComponent__WEBPACK_IMPORTED_MODULE_4__.default);

_ko_components_componentUtils__WEBPACK_IMPORTED_MODULE_2__.default.registerComponent(NAME, HueConfigTree, TEMPLATE);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-f8e792d3-bundle-3c690b33b5f47cc0d68b.js.map