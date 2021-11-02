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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-38c7c0b7"],{

/***/ "./desktop/core/src/desktop/js/ext/topojson.v1.min.js":
/*!************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/topojson.v1.min.js ***!
  \************************************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function () {
  function t(n, t) {
    function r(t) {
      var r,
          e = n.arcs[0 > t ? ~t : t],
          o = e[0];
      return n.transform ? (r = [0, 0], e.forEach(function (n) {
        r[0] += n[0], r[1] += n[1];
      })) : r = e[e.length - 1], 0 > t ? [r, o] : [o, r];
    }

    function e(n, t) {
      for (var r in n) {
        var e = n[r];
        delete t[e.start], delete e.start, delete e.end, e.forEach(function (n) {
          o[0 > n ? ~n : n] = 1;
        }), f.push(e);
      }
    }

    var o = {},
        i = {},
        u = {},
        f = [],
        c = -1;
    return t.forEach(function (r, e) {
      var o,
          i = n.arcs[0 > r ? ~r : r];
      i.length < 3 && !i[1][0] && !i[1][1] && (o = t[++c], t[c] = r, t[e] = o);
    }), t.forEach(function (n) {
      var t,
          e,
          o = r(n),
          f = o[0],
          c = o[1];
      if (t = u[f]) {
        if (delete u[t.end], t.push(n), t.end = c, e = i[c]) {
          delete i[e.start];
          var a = e === t ? t : t.concat(e);
          i[a.start = t.start] = u[a.end = e.end] = a;
        } else i[t.start] = u[t.end] = t;
      } else if (t = i[c]) {
        if (delete i[t.start], t.unshift(n), t.start = f, e = u[f]) {
          delete u[e.end];
          var s = e === t ? t : e.concat(t);
          i[s.start = e.start] = u[s.end = t.end] = s;
        } else i[t.start] = u[t.end] = t;
      } else t = [n], i[t.start = f] = u[t.end = c] = t;
    }), e(u, i), e(i, u), t.forEach(function (n) {
      o[0 > n ? ~n : n] || f.push([n]);
    }), f;
  }

  function r(n, r, e) {
    function o(n) {
      var t = 0 > n ? ~n : n;
      (s[t] || (s[t] = [])).push({
        i: n,
        g: a
      });
    }

    function i(n) {
      n.forEach(o);
    }

    function u(n) {
      n.forEach(i);
    }

    function f(n) {
      "GeometryCollection" === n.type ? n.geometries.forEach(f) : n.type in l && (a = n, l[n.type](n.arcs));
    }

    var c = [];

    if (arguments.length > 1) {
      var a,
          s = [],
          l = {
        LineString: i,
        MultiLineString: u,
        Polygon: u,
        MultiPolygon: function MultiPolygon(n) {
          n.forEach(u);
        }
      };
      f(r), s.forEach(arguments.length < 3 ? function (n) {
        c.push(n[0].i);
      } : function (n) {
        e(n[0].g, n[n.length - 1].g) && c.push(n[0].i);
      });
    } else for (var h = 0, p = n.arcs.length; p > h; ++h) {
      c.push(h);
    }

    return {
      type: "MultiLineString",
      arcs: t(n, c)
    };
  }

  function e(r, e) {
    function o(n) {
      n.forEach(function (t) {
        t.forEach(function (t) {
          (f[t = 0 > t ? ~t : t] || (f[t] = [])).push(n);
        });
      }), c.push(n);
    }

    function i(n) {
      return l(u(r, {
        type: "Polygon",
        arcs: [n]
      }).coordinates[0]) > 0;
    }

    var f = {},
        c = [],
        a = [];
    return e.forEach(function (n) {
      "Polygon" === n.type ? o(n.arcs) : "MultiPolygon" === n.type && n.arcs.forEach(o);
    }), c.forEach(function (n) {
      if (!n._) {
        var t = [],
            r = [n];

        for (n._ = 1, a.push(t); n = r.pop();) {
          t.push(n), n.forEach(function (n) {
            n.forEach(function (n) {
              f[0 > n ? ~n : n].forEach(function (n) {
                n._ || (n._ = 1, r.push(n));
              });
            });
          });
        }
      }
    }), c.forEach(function (n) {
      delete n._;
    }), {
      type: "MultiPolygon",
      arcs: a.map(function (e) {
        var o = [];
        if (e.forEach(function (n) {
          n.forEach(function (n) {
            n.forEach(function (n) {
              f[0 > n ? ~n : n].length < 2 && o.push(n);
            });
          });
        }), o = t(r, o), (n = o.length) > 1) for (var u, c = i(e[0][0]), a = 0; n > a; ++a) {
          if (c === i(o[a])) {
            u = o[0], o[0] = o[a], o[a] = u;
            break;
          }
        }
        return o;
      })
    };
  }

  function o(n, t) {
    return "GeometryCollection" === t.type ? {
      type: "FeatureCollection",
      features: t.geometries.map(function (t) {
        return i(n, t);
      })
    } : i(n, t);
  }

  function i(n, t) {
    var r = {
      type: "Feature",
      id: t.id,
      properties: t.properties || {},
      geometry: u(n, t)
    };
    return null == t.id && delete r.id, r;
  }

  function u(n, t) {
    function r(n, t) {
      t.length && t.pop();

      for (var r, e = s[0 > n ? ~n : n], o = 0, i = e.length; i > o; ++o) {
        t.push(r = e[o].slice()), a(r, o);
      }

      0 > n && f(t, i);
    }

    function e(n) {
      return n = n.slice(), a(n, 0), n;
    }

    function o(n) {
      for (var t = [], e = 0, o = n.length; o > e; ++e) {
        r(n[e], t);
      }

      return t.length < 2 && t.push(t[0].slice()), t;
    }

    function i(n) {
      for (var t = o(n); t.length < 4;) {
        t.push(t[0].slice());
      }

      return t;
    }

    function u(n) {
      return n.map(i);
    }

    function c(n) {
      var t = n.type;
      return "GeometryCollection" === t ? {
        type: t,
        geometries: n.geometries.map(c)
      } : t in l ? {
        type: t,
        coordinates: l[t](n)
      } : null;
    }

    var a = g(n.transform),
        s = n.arcs,
        l = {
      Point: function Point(n) {
        return e(n.coordinates);
      },
      MultiPoint: function MultiPoint(n) {
        return n.coordinates.map(e);
      },
      LineString: function LineString(n) {
        return o(n.arcs);
      },
      MultiLineString: function MultiLineString(n) {
        return n.arcs.map(o);
      },
      Polygon: function Polygon(n) {
        return u(n.arcs);
      },
      MultiPolygon: function MultiPolygon(n) {
        return n.arcs.map(u);
      }
    };
    return c(t);
  }

  function f(n, t) {
    for (var r, e = n.length, o = e - t; o < --e;) {
      r = n[o], n[o++] = n[e], n[e] = r;
    }
  }

  function c(n, t) {
    for (var r = 0, e = n.length; e > r;) {
      var o = r + e >>> 1;
      n[o] < t ? r = o + 1 : e = o;
    }

    return r;
  }

  function a(n) {
    function t(n, t) {
      n.forEach(function (n) {
        0 > n && (n = ~n);
        var r = o[n];
        r ? r.push(t) : o[n] = [t];
      });
    }

    function r(n, r) {
      n.forEach(function (n) {
        t(n, r);
      });
    }

    function e(n, t) {
      "GeometryCollection" === n.type ? n.geometries.forEach(function (n) {
        e(n, t);
      }) : n.type in u && u[n.type](n.arcs, t);
    }

    var o = {},
        i = n.map(function () {
      return [];
    }),
        u = {
      LineString: t,
      MultiLineString: r,
      Polygon: r,
      MultiPolygon: function MultiPolygon(n, t) {
        n.forEach(function (n) {
          r(n, t);
        });
      }
    };
    n.forEach(e);

    for (var f in o) {
      for (var a = o[f], s = a.length, l = 0; s > l; ++l) {
        for (var h = l + 1; s > h; ++h) {
          var p,
              v = a[l],
              g = a[h];
          (p = i[v])[f = c(p, g)] !== g && p.splice(f, 0, g), (p = i[g])[f = c(p, v)] !== v && p.splice(f, 0, v);
        }
      }
    }

    return i;
  }

  function s(n, t) {
    function r(n) {
      u.remove(n), n[1][2] = t(n), u.push(n);
    }

    var e,
        o = g(n.transform),
        i = m(n.transform),
        u = v(),
        f = 0;

    for (t || (t = h), n.arcs.forEach(function (n) {
      var r = [];
      n.forEach(o);

      for (var i = 1, f = n.length - 1; f > i; ++i) {
        e = n.slice(i - 1, i + 2), e[1][2] = t(e), r.push(e), u.push(e);
      }

      n[0][2] = n[f][2] = 1 / 0;

      for (var i = 0, f = r.length; f > i; ++i) {
        e = r[i], e.previous = r[i - 1], e.next = r[i + 1];
      }
    }); e = u.pop();) {
      var c = e.previous,
          a = e.next;
      e[1][2] < f ? e[1][2] = f : f = e[1][2], c && (c.next = a, c[2] = e[2], r(c)), a && (a.previous = c, a[0] = e[0], r(a));
    }

    return n.arcs.forEach(function (n) {
      n.forEach(i);
    }), n;
  }

  function l(n) {
    for (var t, r = -1, e = n.length, o = n[e - 1], i = 0; ++r < e;) {
      t = o, o = n[r], i += t[0] * o[1] - t[1] * o[0];
    }

    return .5 * i;
  }

  function h(n) {
    var t = n[0],
        r = n[1],
        e = n[2];
    return Math.abs((t[0] - e[0]) * (r[1] - t[1]) - (t[0] - r[0]) * (e[1] - t[1]));
  }

  function p(n, t) {
    return n[1][2] - t[1][2];
  }

  function v() {
    function n(n, t) {
      for (; t > 0;) {
        var r = (t + 1 >> 1) - 1,
            o = e[r];
        if (p(n, o) >= 0) break;
        e[o._ = t] = o, e[n._ = t = r] = n;
      }
    }

    function t(n, t) {
      for (;;) {
        var r = t + 1 << 1,
            i = r - 1,
            u = t,
            f = e[u];
        if (o > i && p(e[i], f) < 0 && (f = e[u = i]), o > r && p(e[r], f) < 0 && (f = e[u = r]), u === t) break;
        e[f._ = t] = f, e[n._ = t = u] = n;
      }
    }

    var r = {},
        e = [],
        o = 0;
    return r.push = function (t) {
      return n(e[t._ = o] = t, o++), o;
    }, r.pop = function () {
      if (!(0 >= o)) {
        var n,
            r = e[0];
        return --o > 0 && (n = e[o], t(e[n._ = 0] = n, 0)), r;
      }
    }, r.remove = function (r) {
      var i,
          u = r._;
      if (e[u] === r) return u !== --o && (i = e[o], (p(i, r) < 0 ? n : t)(e[i._ = u] = i, u)), u;
    }, r;
  }

  function g(n) {
    if (!n) return y;
    var t,
        r,
        e = n.scale[0],
        o = n.scale[1],
        i = n.translate[0],
        u = n.translate[1];
    return function (n, f) {
      f || (t = r = 0), n[0] = (t += n[0]) * e + i, n[1] = (r += n[1]) * o + u;
    };
  }

  function m(n) {
    if (!n) return y;
    var t,
        r,
        e = n.scale[0],
        o = n.scale[1],
        i = n.translate[0],
        u = n.translate[1];
    return function (n, f) {
      f || (t = r = 0);
      var c = 0 | (n[0] - i) / e,
          a = 0 | (n[1] - u) / o;
      n[0] = c - t, n[1] = a - r, t = c, r = a;
    };
  }

  function y() {}

  var d = {
    version: "1.6.8",
    mesh: function mesh(n) {
      return u(n, r.apply(this, arguments));
    },
    meshArcs: r,
    merge: function merge(n) {
      return u(n, e.apply(this, arguments));
    },
    mergeArcs: e,
    feature: o,
    neighbors: a,
    presimplify: s
  };
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (d),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}();

/***/ }),

/***/ "./desktop/core/src/desktop/js/hue.js":
/*!********************************************!*\
  !*** ./desktop/core/src/desktop/js/hue.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_publicPath__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/publicPath */ "./desktop/core/src/desktop/js/utils/publicPath.js");
/* harmony import */ var _utils_publicPath__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils_publicPath__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/stable */ "./node_modules/core-js/stable/index.js");
/* harmony import */ var core_js_stable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_stable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jquery/jquery.common */ "./desktop/core/src/desktop/js/jquery/jquery.common.js");
/* harmony import */ var _ext_bootstrap_2_3_2_min__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ext/bootstrap.2.3.2.min */ "./desktop/core/src/desktop/js/ext/bootstrap.2.3.2.min.js");
/* harmony import */ var _ext_bootstrap_editable_1_5_1_min__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ext/bootstrap-editable.1.5.1.min */ "./desktop/core/src/desktop/js/ext/bootstrap-editable.1.5.1.min.js");
/* harmony import */ var _utils_d3Extensions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/d3Extensions */ "./desktop/core/src/desktop/js/utils/d3Extensions.js");
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! d3v3 */ "./node_modules/d3v3/index.js");
/* harmony import */ var d3v3__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(d3v3__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dropzone */ "./node_modules/dropzone/dist/dropzone.js");
/* harmony import */ var dropzone__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dropzone__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! filesize */ "./node_modules/filesize/lib/filesize.js");
/* harmony import */ var filesize__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(filesize__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! localforage */ "./node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _nvd3_nv_all__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nvd3/nv.all */ "./desktop/core/src/desktop/js/nvd3/nv.all.js");
/* harmony import */ var page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! page */ "./node_modules/page/page.js");
/* harmony import */ var page__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(page__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ext_fileuploader_custom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ext/fileuploader.custom */ "./desktop/core/src/desktop/js/ext/fileuploader.custom.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! sprintf-js */ "./node_modules/sprintf-js/src/sprintf.js");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ko/ko.all */ "./desktop/core/src/desktop/js/ko/ko.all.js");
/* harmony import */ var _parse_parserTypeDefs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./parse/parserTypeDefs */ "./desktop/core/src/desktop/js/parse/parserTypeDefs.js");
/* harmony import */ var _parse_parserTypeDefs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_parse_parserTypeDefs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _utils_customIntervals__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/customIntervals */ "./desktop/core/src/desktop/js/utils/customIntervals.js");
/* harmony import */ var _utils_customIntervals__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_utils_customIntervals__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./utils/json.bigDataParse */ "./desktop/core/src/desktop/js/utils/json.bigDataParse.js");
/* harmony import */ var _utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_utils_json_bigDataParse__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _api_apiHelper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./api/apiHelper */ "./desktop/core/src/desktop/js/api/apiHelper.js");
/* harmony import */ var api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! api/cancellableJqPromise */ "./desktop/core/src/desktop/js/api/cancellableJqPromise.ts");
/* harmony import */ var _doc_docSupport__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./doc/docSupport */ "./desktop/core/src/desktop/js/doc/docSupport.js");
/* harmony import */ var catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! catalog/contextCatalog */ "./desktop/core/src/desktop/js/catalog/contextCatalog.ts");
/* harmony import */ var catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! catalog/dataCatalog */ "./desktop/core/src/desktop/js/catalog/dataCatalog.ts");
/* harmony import */ var utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! utils/hueAnalytics */ "./desktop/core/src/desktop/js/utils/hueAnalytics.ts");
/* harmony import */ var _utils_hueColors__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./utils/hueColors */ "./desktop/core/src/desktop/js/utils/hueColors.js");
/* harmony import */ var utils_hueDebug__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! utils/hueDebug */ "./desktop/core/src/desktop/js/utils/hueDebug.ts");
/* harmony import */ var _utils_hueDrop__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./utils/hueDrop */ "./desktop/core/src/desktop/js/utils/hueDrop.js");
/* harmony import */ var _utils_hueGeo__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./utils/hueGeo */ "./desktop/core/src/desktop/js/utils/hueGeo.js");
/* harmony import */ var utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! utils/huePubSub */ "./desktop/core/src/desktop/js/utils/huePubSub.ts");
/* harmony import */ var utils_hueUtils__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! utils/hueUtils */ "./desktop/core/src/desktop/js/utils/hueUtils.ts");
/* harmony import */ var _utils_i18n__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./utils/i18n */ "./desktop/core/src/desktop/js/utils/i18n.js");
/* harmony import */ var _utils_multiLineEllipsisHandler__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./utils/multiLineEllipsisHandler */ "./desktop/core/src/desktop/js/utils/multiLineEllipsisHandler.js");
/* harmony import */ var sql_sqlUtils__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! sql/sqlUtils */ "./desktop/core/src/desktop/js/sql/sqlUtils.ts");
/* harmony import */ var webComponents_HueIcons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! webComponents/HueIcons */ "./desktop/core/src/desktop/js/webComponents/HueIcons.ts");
/* harmony import */ var components_sidebar_HueSidebarWebComponent__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! components/sidebar/HueSidebarWebComponent */ "./desktop/core/src/desktop/js/components/sidebar/HueSidebarWebComponent.ts");
/* harmony import */ var components_assist_AssistPanelWebComponent__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! components/assist/AssistPanelWebComponent */ "./desktop/core/src/desktop/js/components/assist/AssistPanelWebComponent.ts");
/* harmony import */ var _ko_components_assist_assistViewModel__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ko/components/assist/assistViewModel */ "./desktop/core/src/desktop/js/ko/components/assist/assistViewModel.js");
/* harmony import */ var _onePageViewModel__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./onePageViewModel */ "./desktop/core/src/desktop/js/onePageViewModel.js");
/* harmony import */ var _sidePanelViewModel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./sidePanelViewModel */ "./desktop/core/src/desktop/js/sidePanelViewModel.js");
/* harmony import */ var _topNavViewModel__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./topNavViewModel */ "./desktop/core/src/desktop/js/topNavViewModel.js");
/* harmony import */ var _apps_notebook_NotebookViewModel__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./apps/notebook/NotebookViewModel */ "./desktop/core/src/desktop/js/apps/notebook/NotebookViewModel.js");
/* harmony import */ var _utils_hdfsAutocompleter__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./utils/hdfsAutocompleter */ "./desktop/core/src/desktop/js/utils/hdfsAutocompleter.js");
/* harmony import */ var _sql_sqlAutocompleter__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./sql/sqlAutocompleter */ "./desktop/core/src/desktop/js/sql/sqlAutocompleter.js");
/* harmony import */ var _parse_sqlStatementsParser__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./parse/sqlStatementsParser */ "./desktop/core/src/desktop/js/parse/sqlStatementsParser.js");
/* harmony import */ var _parse_hplsqlStatementsParser__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./parse/hplsqlStatementsParser */ "./desktop/core/src/desktop/js/parse/hplsqlStatementsParser.js");
/* harmony import */ var _doc_hueFileEntry__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./doc/hueFileEntry */ "./desktop/core/src/desktop/js/doc/hueFileEntry.js");
/* harmony import */ var _doc_hueDocument__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./doc/hueDocument */ "./desktop/core/src/desktop/js/doc/hueDocument.js");
/* harmony import */ var config_hueConfig__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! config/hueConfig */ "./desktop/core/src/desktop/js/config/hueConfig.ts");
/* harmony import */ var _api_apiUtils__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./api/apiUtils */ "./desktop/core/src/desktop/js/api/apiUtils.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_52__);
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










































 // TODO: Remove from global scope

 // In history, indexer, importer, editor etc.



 // In search.ko and notebook.ko





 // In analytics.mako, metrics.mako, threads.mako

 // In hbase/templates/app.mako, jobsub.templates.js, search.ko.js, search.util.js
// TODO: Migrate away

window._ = (lodash__WEBPACK_IMPORTED_MODULE_3___default());
window.apiHelper = _api_apiHelper__WEBPACK_IMPORTED_MODULE_21__.default;
window.simpleGet = _api_apiUtils__WEBPACK_IMPORTED_MODULE_51__.simpleGet;
window.CancellableJqPromise = api_cancellableJqPromise__WEBPACK_IMPORTED_MODULE_22__.default;
window.contextCatalog = catalog_contextCatalog__WEBPACK_IMPORTED_MODULE_24__.default;
window.d3 = d3__WEBPACK_IMPORTED_MODULE_8__;
window.d3v3 = (d3v3__WEBPACK_IMPORTED_MODULE_9___default());
window.dataCatalog = catalog_dataCatalog__WEBPACK_IMPORTED_MODULE_25__.default;
window.DOCUMENT_TYPE_I18n = _doc_docSupport__WEBPACK_IMPORTED_MODULE_23__.DOCUMENT_TYPE_I18n;
window.DOCUMENT_TYPES = _doc_docSupport__WEBPACK_IMPORTED_MODULE_23__.DOCUMENT_TYPES;
window.Dropzone = (dropzone__WEBPACK_IMPORTED_MODULE_10___default());
window.NotebookViewModel = _apps_notebook_NotebookViewModel__WEBPACK_IMPORTED_MODULE_43__.default;
window.filesize = (filesize__WEBPACK_IMPORTED_MODULE_11___default());
window.getLastKnownConfig = config_hueConfig__WEBPACK_IMPORTED_MODULE_50__.getLastKnownConfig;
window.HdfsAutocompleter = _utils_hdfsAutocompleter__WEBPACK_IMPORTED_MODULE_44__.default;
window.hueAnalytics = utils_hueAnalytics__WEBPACK_IMPORTED_MODULE_26__.default;
window.HueColors = _utils_hueColors__WEBPACK_IMPORTED_MODULE_27__.default;
window.hueDebug = utils_hueDebug__WEBPACK_IMPORTED_MODULE_28__.default;
window.HueDocument = _doc_hueDocument__WEBPACK_IMPORTED_MODULE_49__.default;
window.hueDrop = _utils_hueDrop__WEBPACK_IMPORTED_MODULE_29__.default;
window.HueFileEntry = _doc_hueFileEntry__WEBPACK_IMPORTED_MODULE_48__.default;
window.HueGeo = _utils_hueGeo__WEBPACK_IMPORTED_MODULE_30__.default;
window.huePubSub = utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__.default;
window.hueUtils = utils_hueUtils__WEBPACK_IMPORTED_MODULE_32__.default;
window.I18n = _utils_i18n__WEBPACK_IMPORTED_MODULE_33__.default;
window.localforage = (localforage__WEBPACK_IMPORTED_MODULE_12___default());
window.MultiLineEllipsisHandler = _utils_multiLineEllipsisHandler__WEBPACK_IMPORTED_MODULE_34__.default;
window.Mustache = (mustache__WEBPACK_IMPORTED_MODULE_52___default());
window.nv = _nvd3_nv_all__WEBPACK_IMPORTED_MODULE_13__.default;
window.page = (page__WEBPACK_IMPORTED_MODULE_14___default());
window.qq = _ext_fileuploader_custom__WEBPACK_IMPORTED_MODULE_15__.default;
window.sprintf = (sprintf_js__WEBPACK_IMPORTED_MODULE_16___default());
window.SqlAutocompleter = _sql_sqlAutocompleter__WEBPACK_IMPORTED_MODULE_45__.default;
window.sqlStatementsParser = _parse_sqlStatementsParser__WEBPACK_IMPORTED_MODULE_46__.default;
window.hplsqlStatementsParser = _parse_hplsqlStatementsParser__WEBPACK_IMPORTED_MODULE_47__.default;
window.sqlUtils = sql_sqlUtils__WEBPACK_IMPORTED_MODULE_35__.default;
(0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(document).ready( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var onePageViewModel, sidePanelViewModel, topNavViewModel, clickThrottle;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return (0,config_hueConfig__WEBPACK_IMPORTED_MODULE_50__.refreshConfig)();

        case 2:
          // Make sure we have config up front
          onePageViewModel = new _onePageViewModel__WEBPACK_IMPORTED_MODULE_40__.default();
          _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__.default.applyBindings(onePageViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.page-content')[0]);
          sidePanelViewModel = new _sidePanelViewModel__WEBPACK_IMPORTED_MODULE_41__.default();
          _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__.default.applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.left-panel')[0]);
          _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__.default.applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('#leftResizer')[0]);
          _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__.default.applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.right-panel')[0]);

          if (!window.ENABLE_NOTEBOOK_2) {
            _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__.default.applyBindings(sidePanelViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.context-panel')[0]);
          }

          topNavViewModel = new _topNavViewModel__WEBPACK_IMPORTED_MODULE_42__.default(onePageViewModel);
          _ko_ko_all__WEBPACK_IMPORTED_MODULE_17__.default.applyBindings(topNavViewModel, (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.top-nav')[0]);
          (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(document).on('hideHistoryModal', function (e) {
            (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('#clearNotificationHistoryModal').modal('hide');
          });
          utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__.default.subscribe('query.and.watch', function (query) {
            _jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default.post(query['url'], {
              format: 'json',
              sourceType: query['sourceType']
            }, function (resp) {
              if (resp.history_uuid) {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__.default.publish('open.editor.query', resp);
              } else if (resp.message) {
                (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(document).trigger('error', resp.message);
              }
            }).fail(function (xhr) {
              (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(document).trigger('error', xhr.responseText);
            });
          });
          clickThrottle = -1;
          (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(window).click(function (e) {
            window.clearTimeout(clickThrottle);
            clickThrottle = window.setTimeout(function () {
              if ((0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(e.target).parents('.navbar-default').length > 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(e.target).closest('.history-panel').length === 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(e.target).closest('.btn-toggle-jobs-panel').length === 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)(e.target).closest('.hamburger-hue').length === 0 && (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.jobs-panel').is(':visible')) {
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__.default.publish('hide.jobs.panel');
                utils_huePubSub__WEBPACK_IMPORTED_MODULE_31__.default.publish('hide.history.panel');
              }
            }, 10);
          });
          (0,_jquery_jquery_common__WEBPACK_IMPORTED_MODULE_4__.default)('.page-content').jHueScrollUp();

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-38c7c0b7-bundle-3c690b33b5f47cc0d68b.js.map