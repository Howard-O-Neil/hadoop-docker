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
(self["webpackChunkgethue"] = self["webpackChunkgethue"] || []).push([["hue-0320b821"],{

/***/ "./desktop/core/src/desktop/js/ext/fileuploader.custom.js":
/*!****************************************************************!*\
  !*** ./desktop/core/src/desktop/js/ext/fileuploader.custom.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 Multiple file upload component with progress-bar, drag-and-drop.
 http://github.com/valums/file-uploader

 Copyright (C) 2011 by Andris Valums

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
 //
// Helper functions
//

var qq = {};
/**
 * Adds all missing properties from second obj to first obj
 */

qq.extend = function (first, second) {
  for (var prop in second) {
    first[prop] = second[prop];
  }
};
/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */


qq.indexOf = function (arr, elt, from) {
  if (arr.indexOf) return arr.indexOf(elt, from);
  from = from || 0;
  var len = arr.length;
  if (from < 0) from += len;

  for (; from < len; from++) {
    if (from in arr && arr[from] === elt) {
      return from;
    }
  }

  return -1;
};

qq.getUniqueId = function () {
  var id = 0;
  return function () {
    return id++;
  };
}(); //
// Events


qq.attach = function (element, type, fn) {
  if (element.addEventListener) {
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, fn);
  }
};

qq.detach = function (element, type, fn) {
  if (element.removeEventListener) {
    element.removeEventListener(type, fn, false);
  } else if (element.attachEvent) {
    element.detachEvent('on' + type, fn);
  }
};

qq.preventDefault = function (e) {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}; //
// Node manipulations

/**
 * Insert node a before node b.
 */


qq.insertBefore = function (a, b) {
  b.parentNode.insertBefore(a, b);
};

qq.remove = function (element) {
  element.parentNode.removeChild(element);
};

qq.contains = function (parent, descendant) {
  // compareposition returns false in this case
  if (parent == descendant) return true;

  if (parent.contains) {
    return parent.contains(descendant);
  } else {
    return !!(descendant.compareDocumentPosition(parent) & 8);
  }
};
/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */


qq.toElement = function () {
  var div = document.createElement('div');
  return function (html) {
    div.innerHTML = html;
    var element = div.firstChild;
    div.removeChild(element);
    return element;
  };
}(); //
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */


qq.css = function (element, styles) {
  if (styles.opacity != null) {
    if (typeof element.style.opacity != 'string' && typeof element.filters != 'undefined') {
      styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
    }
  }

  qq.extend(element.style, styles);
};

qq.hasClass = function (element, name) {
  var re = new RegExp('(^| )' + name + '( |$)');
  return re.test(element.className);
};

qq.addClass = function (element, name) {
  if (!qq.hasClass(element, name)) {
    element.className += ' ' + name;
  }
};

qq.removeClass = function (element, name) {
  var re = new RegExp('(^| )' + name + '( |$)');
  element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};

qq.setText = function (element, text) {
  element.innerText = text;
  element.textContent = text;
}; //
// Selecting elements


qq.children = function (element) {
  var children = [],
      child = element.firstChild;

  while (child) {
    if (child.nodeType == 1) {
      children.push(child);
    }

    child = child.nextSibling;
  }

  return children;
};

qq.getByClass = function (element, className) {
  if (element.querySelectorAll) {
    return element.querySelectorAll('.' + className);
  }

  var result = [];
  var candidates = element.getElementsByTagName("*");
  var len = candidates.length;

  for (var i = 0; i < len; i++) {
    if (qq.hasClass(candidates[i], className)) {
      result.push(candidates[i]);
    }
  }

  return result;
};
/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 *
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */


qq.obj2url = function (obj, temp, prefixDone) {
  var uristrings = [],
      prefix = '&',
      add = function add(nextObj, i) {
    var nextTemp = temp ? /\[\]$/.test(temp) ? // prevent double-encoding
    temp : temp + '[' + i + ']' : i;

    if (nextTemp != 'undefined' && i != 'undefined') {
      uristrings.push(_typeof(nextObj) === 'object' ? qq.obj2url(nextObj, nextTemp, true) : Object.prototype.toString.call(nextObj) === '[object Function]' ? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj()) : encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj));
    }
  };

  if (!prefixDone && temp) {
    prefix = /\?/.test(temp) ? /\?$/.test(temp) ? '' : '&' : '?';
    uristrings.push(temp);
    uristrings.push(qq.obj2url(obj));
  } else if (Object.prototype.toString.call(obj) === '[object Array]' && typeof obj != 'undefined') {
    // we wont use a for-in-loop on an array (performance)
    for (var i = 0, len = obj.length; i < len; ++i) {
      add(obj[i], i);
    }
  } else if (typeof obj != 'undefined' && obj !== null && _typeof(obj) === "object") {
    // for anything else but a scalar, we will use for-in-loop
    for (var i in obj) {
      add(obj[i], i);
    }
  } else {
    uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
  }

  return uristrings.join(prefix).replace(/^&/, '').replace(/%20/g, '+');
}; //
//
// Uploader Classes
//
//

/**
 * Creates upload button, validates upload, but doesn't create file list or dd.
 */


qq.FileUploaderBasic = function (o) {
  this._options = {
    // set to true to see the server response
    debug: false,
    action: '/server/upload',
    dest: '/',
    fileFieldLabel: 'hdfs_file',
    params: {},
    button: null,
    multiple: true,
    maxConnections: 3,
    // validation
    allowedExtensions: [],
    sizeLimit: 0,
    minSizeLimit: 0,
    // events
    // return false to cancel submit
    onSubmit: function onSubmit(id, fileName) {},
    onProgress: function onProgress(id, fileName, loaded, total) {},
    onComplete: function onComplete(id, fileName, responseJSON) {},
    onCancel: function onCancel(id, fileName) {},
    // messages
    messages: {
      typeError: "{file} has invalid extension. Only {extensions} are allowed.",
      sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
      minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
      emptyError: "{file} is empty, please select files again without it.",
      onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
    },
    showMessage: function showMessage(message) {
      alert(message);
    }
  };
  qq.extend(this._options, o); // number of files being uploaded

  this._filesInProgress = 0;
  this._handler = this._createUploadHandler();

  if (this._options.button) {
    this._button = this._createUploadButton(this._options.button);
  }

  this._preventLeaveInProgress();
};

qq.FileUploaderBasic.prototype = {
  setParams: function setParams(params) {
    this._options.params = params;
  },
  getInProgress: function getInProgress() {
    return this._filesInProgress;
  },
  _createUploadButton: function _createUploadButton(element) {
    var self = this;
    return new qq.UploadButton({
      element: element,
      multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
      onChange: function onChange(input) {
        self._onInputChange(input);
      }
    });
  },
  _createUploadHandler: function _createUploadHandler() {
    var self = this,
        handlerClass;

    if (qq.UploadHandlerXhr.isSupported()) {
      handlerClass = 'UploadHandlerXhr';
    } else {
      handlerClass = 'UploadHandlerForm';
    }

    var handler = new qq[handlerClass]({
      debug: this._options.debug,
      action: this._options.action,
      dest: '/',
      fileFieldLabel: 'hdfs_file',
      maxConnections: this._options.maxConnections,
      onProgress: function onProgress(id, fileName, loaded, total) {
        self._onProgress(id, fileName, loaded, total);

        self._options.onProgress(id, fileName, loaded, total);
      },
      onComplete: function onComplete(id, fileName, result) {
        self._onComplete(id, fileName, result);

        self._options.onComplete(id, fileName, result);
      },
      onCancel: function onCancel(id, fileName) {
        self._onCancel(id, fileName);

        self._options.onCancel(id, fileName);
      }
    });
    return handler;
  },
  _preventLeaveInProgress: function _preventLeaveInProgress() {
    var self = this;
    qq.attach(window, 'beforeunload', function (e) {
      if (!self._filesInProgress) {
        return;
      }

      var e = e || window.event; // for ie, ff

      e.returnValue = self._options.messages.onLeave; // for webkit

      return self._options.messages.onLeave;
    });
  },
  _onSubmit: function _onSubmit(id, fileName) {
    this._filesInProgress++;
  },
  _onProgress: function _onProgress(id, fileName, loaded, total) {},
  _onComplete: function _onComplete(id, fileName, result) {
    this._filesInProgress--;

    if (result.error) {
      this._options.showMessage(result.error);
    }
  },
  _onCancel: function _onCancel(id, fileName) {
    this._filesInProgress--;
  },
  _onInputChange: function _onInputChange(input) {
    if (this._handler instanceof qq.UploadHandlerXhr) {
      this._uploadFileList(input.files);
    } else {
      if (this._validateFile(input)) {
        this._uploadFile(input);
      }
    }

    this._button.reset();
  },
  _uploadFileList: function _uploadFileList(files) {
    for (var i = 0; i < files.length; i++) {
      if (!this._validateFile(files[i])) {
        return;
      }
    }

    for (var i = 0; i < files.length; i++) {
      this._uploadFile(files[i]);
    }
  },
  _uploadFile: function _uploadFile(fileContainer) {
    var id = this._handler.add(fileContainer);

    var fileName = this._handler.getName(id);

    if (this._options.onSubmit(id, fileName) !== false) {
      this._onSubmit(id, fileName);

      this._handler.upload(id, this._options.params);
    }
  },
  _validateFile: function _validateFile(file) {
    var name, size;

    if (file.value) {
      // it is a file input
      // get input value and remove path to normalize
      name = file.value.replace(/.*(\/|\\)/, "");
    } else {
      // fix missing properties in Safari
      name = file.fileName != null ? file.fileName : file.name;
      size = file.fileSize != null ? file.fileSize : file.size;
    }

    if (!this._isAllowedExtension(name)) {
      this._error('typeError', name);

      return false;
    } else if (size === 0) {
      this._error('emptyError', name);

      return false;
    } else if (size && this._options.sizeLimit && size > this._options.sizeLimit) {
      this._error('sizeError', name);

      return false;
    } else if (size && size < this._options.minSizeLimit) {
      this._error('minSizeError', name);

      return false;
    }

    return true;
  },
  _error: function _error(code, fileName) {
    var message = this._options.messages[code];

    function r(name, replacement) {
      message = message.replace(name, replacement);
    }

    r('{file}', this._formatFileName(fileName));
    r('{extensions}', this._options.allowedExtensions.join(', '));
    r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
    r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));

    this._options.showMessage(message);
  },
  _formatFileName: function _formatFileName(name) {
    if (name.length > 33) {
      name = name.slice(0, 19) + '...' + name.slice(-13);
    }

    return name;
  },
  _isAllowedExtension: function _isAllowedExtension(fileName) {
    var ext = -1 !== fileName.indexOf('.') ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
    var allowed = this._options.allowedExtensions;

    if (!allowed.length) {
      return true;
    }

    for (var i = 0; i < allowed.length; i++) {
      if (allowed[i].toLowerCase() == ext) {
        return true;
      }
    }

    return false;
  },
  _formatSize: function _formatSize(bytes) {
    var i = -1;

    do {
      bytes = bytes / 1024;
      i++;
    } while (bytes > 99);

    return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
  }
};
/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */

qq.FileUploader = function (o) {
  // call parent constructor
  qq.FileUploaderBasic.apply(this, arguments); // additional options

  qq.extend(this._options, {
    element: null,
    // if set, will be used instead of qq-upload-list in template
    listElement: null,
    template: '<div class="qq-uploader">' + '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' + '<div class="qq-upload-button">Upload a file</div>' + '<ul class="qq-upload-list"></ul>' + '</div>',
    // template for one item in file list
    fileTemplate: '<li>' + '<span class="qq-upload-file"></span>' + '<span class="qq-upload-spinner"></span>' + '<span class="qq-upload-size"></span>' + '<a class="qq-upload-cancel" href="#">Cancel</a>' + '<span class="qq-upload-failed-text">Failed</span>' + '</li>',
    classes: {
      // used to get elements from templates
      button: 'qq-upload-button',
      drop: 'qq-upload-drop-area',
      dropActive: 'qq-upload-drop-area-active',
      list: 'qq-upload-list',
      file: 'qq-upload-file',
      extendedFileName: 'qq-upload-file-extended',
      spinner: 'qq-upload-spinner',
      size: 'qq-upload-size',
      cancel: 'qq-upload-cancel',
      // added to list item when upload completes
      // used in css to hide progress spinner
      success: 'qq-upload-success',
      fail: 'qq-upload-fail'
    }
  }); // overwrite options with user supplied

  this._options.dest = "";
  this._options.fileFieldLabel = "";
  qq.extend(this._options, o);
  this._element = this._options.element;
  this._element.innerHTML = this._options.template;
  this._listElement = this._options.listElement || this._find(this._element, 'list');
  this._classes = this._options.classes;
  this._button = this._createUploadButton(this._find(this._element, 'button'));

  this._bindCancelEvent();

  this._bindCancelAllEvent();

  this._setupDragDrop();
}; // inherit from Basic Uploader


qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);
qq.extend(qq.FileUploader.prototype, {
  /**
   * Gets one of the elements listed in this._options.classes
   **/
  _find: function _find(parent, type, skipIfNotFound) {
    var element = qq.getByClass(parent, this._options.classes[type])[0];

    if (!element && typeof skipIfNotFound === 'undefined') {
      throw new Error('element not found ' + type);
    }

    return element;
  },
  _setupDragDrop: function _setupDragDrop() {
    var self = this,
        dropArea = this._find(this._element, 'drop');

    var dz = new qq.UploadDropZone({
      element: dropArea,
      onEnter: function onEnter(e) {
        qq.addClass(dropArea, self._classes.dropActive);
        e.stopPropagation();
      },
      onLeave: function onLeave(e) {
        e.stopPropagation();
      },
      onLeaveNotDescendants: function onLeaveNotDescendants(e) {
        qq.removeClass(dropArea, self._classes.dropActive);
      },
      onDrop: function onDrop(e) {
        dropArea.style.display = 'none';
        qq.removeClass(dropArea, self._classes.dropActive);

        self._uploadFileList(e.dataTransfer.files);
      }
    });
    dropArea.style.display = 'none';
    qq.attach(document, 'dragenter', function (e) {
      if (!dz._isValidFileDrag(e)) return;
      dropArea.style.display = 'block';
    });
    qq.attach(document, 'dragleave', function (e) {
      if (!dz._isValidFileDrag(e)) return;
      var relatedTarget = document.elementFromPoint(e.clientX, e.clientY); // only fire when leaving document out

      if (!relatedTarget || relatedTarget.nodeName == "HTML") {
        dropArea.style.display = 'none';
      }
    });
  },
  _onSubmit: function _onSubmit(id, fileName) {
    qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);

    this._addToList(id, fileName);
  },
  _onProgress: function _onProgress(id, fileName, loaded, total) {
    qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

    var item = this._getItemByFileId(id);

    var size = this._find(item, 'size');

    size.style.display = 'inline';
    var text;

    if (loaded != total) {
      text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
    } else {
      text = this._formatSize(total);
    }

    qq.setText(size, text);
  },
  _onComplete: function _onComplete(id, fileName, result) {
    qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments); // mark completed


    var item = this._getItemByFileId(id);

    qq.remove(this._find(item, 'cancel'));
    qq.remove(this._find(item, 'spinner'));

    if (result.status && result.status == -1) {
      qq.addClass(item, this._classes.fail);
    } else {
      qq.addClass(item, this._classes.success);
    }
  },
  _addToList: function _addToList(id, fileName) {
    var item = qq.toElement(this._options.fileTemplate);
    item.qqFileId = id;

    var fileElement = this._find(item, 'file');

    qq.setText(fileElement, this._formatFileName(fileName));

    var extendedFileElement = this._find(item, 'extendedFileName', true);

    if (extendedFileElement) {
      qq.setText(extendedFileElement, fileName);
    }

    this._find(item, 'size').style.display = 'none';

    this._listElement.appendChild(item);
  },
  _getItemByFileId: function _getItemByFileId(id) {
    var item = this._listElement.firstChild; // there can't be txt nodes in dynamically created list
    // and we can  use nextSibling

    while (item) {
      if (item.qqFileId == id) return item;
      item = item.nextSibling;
    }
  },

  /**
   * delegate click event for cancel link
   **/
  _bindCancelEvent: function _bindCancelEvent() {
    var self = this,
        list = this._listElement;
    qq.attach(list, 'click', function (e) {
      e = e || window.event;
      var target = e.target || e.srcElement;

      if (qq.hasClass(target, self._classes.cancel)) {
        qq.preventDefault(e);
        var item = target.parentNode;

        if (qq.hasClass(item, 'complex-layout')) {
          item = item.parentNode.parentNode.parentNode;
        }

        self._handler.cancel(item.qqFileId);

        qq.remove(item);
      }
    });
  },
  _bindCancelAllEvent: function _bindCancelAllEvent() {
    var self = this,
        list = this._listElement;
    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#uploadFileModal').on('hidden', function () {
      for (var i = 0, l = list && list.childNodes.length; i < l; i++) {
        self._handler.cancel(list.childNodes[i].qqFileId);
      }
    });
  }
});

qq.UploadDropZone = function (o) {
  this._options = {
    element: null,
    onEnter: function onEnter(e) {},
    onLeave: function onLeave(e) {},
    // is not fired when leaving element by hovering descendants
    onLeaveNotDescendants: function onLeaveNotDescendants(e) {},
    onDrop: function onDrop(e) {}
  };
  qq.extend(this._options, o);
  this._element = this._options.element;

  this._disableDropOutside();

  this._attachEvents();
};

qq.UploadDropZone.prototype = {
  _disableDropOutside: function _disableDropOutside(e) {
    // run only once for all instances
    if (!qq.UploadDropZone.dropOutsideDisabled) {
      qq.attach(document, 'dragover', function (e) {
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = 'none';
          e.preventDefault();
        }
      });
      qq.UploadDropZone.dropOutsideDisabled = true;
    }
  },
  _attachEvents: function _attachEvents() {
    var self = this;
    qq.attach(self._element, 'dragover', function (e) {
      if (!self._isValidFileDrag(e)) return;
      var effect = e.dataTransfer.effectAllowed;

      if (effect == 'move' || effect == 'linkMove') {
        e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)
      } else {
        e.dataTransfer.dropEffect = 'copy'; // for Chrome
      }

      e.stopPropagation();
      e.preventDefault();
    });
    qq.attach(self._element, 'dragenter', function (e) {
      if (!self._isValidFileDrag(e)) return;

      self._options.onEnter(e);
    });
    qq.attach(self._element, 'dragleave', function (e) {
      if (!self._isValidFileDrag(e)) return;

      self._options.onLeave(e);

      var relatedTarget = document.elementFromPoint(e.clientX, e.clientY); // do not fire when moving a mouse over a descendant

      if (qq.contains(this, relatedTarget)) return;

      self._options.onLeaveNotDescendants(e);
    });
    qq.attach(self._element, 'drop', function (e) {
      if (!self._isValidFileDrag(e)) return;
      e.preventDefault();

      self._options.onDrop(e);
    });
  },
  _isValidFileDrag: function _isValidFileDrag(e) {
    var dt = e.dataTransfer; // do not check dt.types.contains in webkit, because it crashes safari 4

    var isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;
    var isIE9 = navigator.appVersion.indexOf("MSIE 9") > -1;
    if (isIE9) return false; // dt.effectAllowed is none in Safari 5
    // dt.types.contains check is for firefox

    return dt && dt.effectAllowed != 'none' && (dt.files || !isWebkit && dt.types && dt.types.contains && dt.types.contains('Files'));
  }
};

qq.UploadButton = function (o) {
  this._options = {
    element: null,
    // if set to true adds multiple attribute to file input
    multiple: false,
    // name attribute of file input
    name: 'file',
    onChange: function onChange(input) {},
    hoverClass: 'qq-upload-button-hover',
    focusClass: 'qq-upload-button-focus'
  };
  qq.extend(this._options, o);
  this._element = this._options.element; // make button suitable container for input

  qq.css(this._element, {
    position: 'relative',
    overflow: 'hidden',
    // Make sure browse button is in the right side
    // in Internet Explorer
    direction: 'ltr'
  });
  this._input = this._createInput();
};

qq.UploadButton.prototype = {
  /* returns file input element */
  getInput: function getInput() {
    return this._input;
  },

  /* cleans/recreates the file input */
  reset: function reset() {
    if (this._input.parentNode) {
      qq.remove(this._input);
    }

    qq.removeClass(this._element, this._options.focusClass);
    this._input = this._createInput();
  },
  _createInput: function _createInput() {
    var input = document.createElement("input");

    if (this._options.multiple) {
      input.setAttribute("multiple", "multiple");
    }

    input.setAttribute("type", "file");
    input.setAttribute("name", this._options.name);
    qq.css(input, {
      position: 'absolute',
      // in Opera only 'browse' button
      // is clickable and it is located at
      // the right side of the input
      right: 0,
      top: 0,
      fontFamily: 'Arial',
      // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
      fontSize: '118px',
      margin: 0,
      padding: 0,
      cursor: 'pointer',
      opacity: 0
    });

    this._element.appendChild(input);

    var self = this;
    qq.attach(input, 'change', function () {
      self._options.onChange(input);
    });
    qq.attach(input, 'mouseover', function () {
      qq.addClass(self._element, self._options.hoverClass);
    });
    qq.attach(input, 'mouseout', function () {
      qq.removeClass(self._element, self._options.hoverClass);
    });
    qq.attach(input, 'focus', function () {
      qq.addClass(self._element, self._options.focusClass);
    });
    qq.attach(input, 'blur', function () {
      qq.removeClass(self._element, self._options.focusClass);
    }); // IE and Opera, unfortunately have 2 tab stops on file input
    // which is unacceptable in our case, disable keyboard access

    if (window.attachEvent) {
      // it is IE or Opera
      input.setAttribute('tabIndex', "-1");
    }

    return input;
  }
};
/**
 * Class for uploading files, uploading itself is handled by child classes
 */

qq.UploadHandlerAbstract = function (o) {
  this._options = {
    debug: false,
    action: '/upload.php',
    // maximum number of concurrent uploads
    maxConnections: 999,
    onProgress: function onProgress(id, fileName, loaded, total) {},
    onComplete: function onComplete(id, fileName, response) {},
    onCancel: function onCancel(id, fileName) {}
  };
  qq.extend(this._options, o);
  this._queue = []; // params for files in queue

  this._params = [];
};

qq.UploadHandlerAbstract.prototype = {
  log: function log(str) {
    if (this._options.debug && window.console) console.log('[uploader] ' + str);
  },

  /**
   * Adds file or file input to the queue
   * @returns id
   **/
  add: function add(file) {},

  /**
   * Sends the file identified by id and additional query params to the server
   */
  upload: function upload(id, params) {
    var len = this._queue.push(id);

    var copy = {};
    qq.extend(copy, params);
    this._params[id] = copy; // if too many active uploads, wait...

    if (len <= this._options.maxConnections) {
      this._upload(id, this._params[id]);
    }
  },

  /**
   * Cancels file upload by id
   */
  cancel: function cancel(id) {
    this._cancel(id);

    this._dequeue(id);
  },

  /**
   * Cancells all uploads
   */
  cancelAll: function cancelAll() {
    for (var i = 0; i < this._queue.length; i++) {
      this._cancel(this._queue[i]);
    }

    this._queue = [];
  },

  /**
   * Returns name of the file identified by id
   */
  getName: function getName(id) {},

  /**
   * Returns size of the file identified by id
   */
  getSize: function getSize(id) {},

  /**
   * Returns id of files being uploaded or
   * waiting for their turn
   */
  getQueue: function getQueue() {
    return this._queue;
  },

  /**
   * Actual upload method
   */
  _upload: function _upload(id) {},

  /**
   * Actual cancel method
   */
  _cancel: function _cancel(id) {},

  /**
   * Removes element from queue, starts upload of next
   */
  _dequeue: function _dequeue(id) {
    var i = qq.indexOf(this._queue, id);

    this._queue.splice(i, 1);

    var max = this._options.maxConnections;

    if (this._queue.length >= max && i < max) {
      var nextId = this._queue[max - 1];

      this._upload(nextId, this._params[nextId]);
    }
  }
};
/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */

qq.UploadHandlerForm = function (o) {
  qq.UploadHandlerAbstract.apply(this, arguments);
  this._inputs = {};
}; // @inherits qq.UploadHandlerAbstract


qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerForm.prototype, {
  add: function add(fileInput) {
    fileInput.setAttribute('name', 'qqfile');
    var id = 'qq-upload-handler-iframe' + qq.getUniqueId();
    this._inputs[id] = fileInput; // remove file input from DOM

    if (fileInput.parentNode) {
      qq.remove(fileInput);
    }

    return id;
  },
  getName: function getName(id) {
    // get input value and remove path to normalize
    return this._inputs[id].value.replace(/.*(\/|\\)/, "");
  },
  _cancel: function _cancel(id) {
    if (this._inputs[id]) {
      this._options.onCancel(id, this.getName(id));
    }

    delete this._inputs[id];
    var iframe = document.getElementById(id);

    if (iframe) {
      // to cancel request set src to something else
      // we use src="javascript:false;" because it doesn't
      // trigger ie6 prompt on https
      iframe.setAttribute('src', 'javascript:false;');
      qq.remove(iframe);
    }
  },
  _upload: function _upload(id, params) {
    var input = this._inputs[id];

    if (!input) {
      throw new Error('file with passed id was not added, or already uploaded or cancelled');
    }

    var fileName = this.getName(id);

    var iframe = this._createIframe(id);

    var form = this._createForm(iframe, params);

    input.name = params.fileFieldLabel;
    form.appendChild(input);
    var dest = document.createElement('input');
    dest.type = 'text';
    dest.name = 'dest';
    dest.value = params.dest;
    form.appendChild(dest);
    var csrfmiddlewaretoken = document.createElement('input');
    csrfmiddlewaretoken.type = 'hidden';
    csrfmiddlewaretoken.name = 'csrfmiddlewaretoken';
    csrfmiddlewaretoken.value = "${request and request.COOKIES.get('csrftoken', '')}";
    form.appendChild(csrfmiddlewaretoken);
    var self = this;

    this._attachLoadEvent(iframe, function () {
      self.log('iframe loaded');

      var response = self._getIframeContentJSON(iframe);

      self._options.onComplete(id, fileName, response);

      self._dequeue(id);

      delete self._inputs[id]; // timeout added to fix busy state in FF3.6

      setTimeout(function () {
        qq.remove(iframe);
      }, 1);
    });

    form.submit();
    qq.remove(form);
    return id;
  },
  _attachLoadEvent: function _attachLoadEvent(iframe, callback) {
    qq.attach(iframe, 'load', function () {
      // when we remove iframe from dom
      // the request stops, but in IE load
      // event fires
      if (!iframe.parentNode) {
        return;
      } // fixing Opera 10.53


      if (iframe.contentDocument && iframe.contentDocument.body && iframe.contentDocument.body.innerHTML == "false") {
        // In Opera event is fired second time
        // when body.innerHTML changed from false
        // to server response approx. after 1 sec
        // when we upload file with iframe
        return;
      }

      callback();
    });
  },

  /**
   * Returns json object received by iframe from server.
   */
  _getIframeContentJSON: function _getIframeContentJSON(iframe) {
    // iframe.contentWindow.document - for IE<7
    var doc = iframe.contentDocument ? iframe.contentDocument : iframe.contentWindow.document,
        response;
    this.log("converting iframe's innerHTML to JSON");
    this.log("innerHTML = " + jquery__WEBPACK_IMPORTED_MODULE_0___default()(doc.body.innerHTML).text());

    try {
      response = eval("(" + jquery__WEBPACK_IMPORTED_MODULE_0___default()(doc.body.innerHTML).text() + ")");
    } catch (err) {
      response = {};
    }

    return response;
  },

  /**
   * Creates iframe with unique name
   */
  _createIframe: function _createIframe(id) {
    // We can't use following code as the name attribute
    // won't be properly registered in IE6, and new window
    // on form submit will open
    // var iframe = document.createElement('iframe');
    // iframe.setAttribute('name', id);
    var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '"></iframe>'); // src="javascript:false;" removes ie6 prompt on https

    iframe.setAttribute('id', id);
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    return iframe;
  },

  /**
   * Creates form, that will be submitted to iframe
   */
  _createForm: function _createForm(iframe, params) {
    // We can't use the following code in IE6
    // var form = document.createElement('form');
    // form.setAttribute('method', 'post');
    // form.setAttribute('enctype', 'multipart/form-data');
    // Because in this case file won't be attached to request
    var form = qq.toElement('<form method="post" enctype="multipart/form-data"></form>');
    form.setAttribute('action', this._options.action);
    form.setAttribute('target', iframe.name);
    form.style.display = 'none';
    document.body.appendChild(form);
    return form;
  }
});
/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */

qq.UploadHandlerXhr = function (o) {
  qq.UploadHandlerAbstract.apply(this, arguments);
  this._files = [];
  this._xhrs = []; // current loaded size in bytes for each file

  this._loaded = [];
}; // static method


qq.UploadHandlerXhr.isSupported = function () {
  var input = document.createElement('input');
  input.type = 'file';
  return 'multiple' in input && typeof File != "undefined" && typeof new XMLHttpRequest().upload != "undefined";
}; // @inherits qq.UploadHandlerAbstract


qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype);
qq.extend(qq.UploadHandlerXhr.prototype, {
  /**
   * Adds file to the queue
   * Returns id to use with upload, cancel
   **/
  add: function add(file) {
    // HUE-815: [fb] Upload button does not work in Firefox 3.6
    // see https://github.com/valums/ajax-upload/issues/91
    //if (!(file instanceof File)){
    if (!(file instanceof File || file.__proto__ && file.__proto__.constructor.name == 'File' || file instanceof Object)) {
      throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
    }

    return this._files.push(file) - 1;
  },
  getName: function getName(id) {
    var file = this._files[id]; // fix missing name in Safari 4

    return file && (file.fileName || file.name);
  },
  getSize: function getSize(id) {
    var file = this._files[id];
    return file && (file.fileSize || file.size);
  },

  /**
   * Returns uploaded bytes for file identified by id
   */
  getLoaded: function getLoaded(id) {
    return this._loaded[id] || 0;
  },

  /**
   * Sends the file identified by id and additional query params to the server
   * @param {Object} params name-value string pairs
   */
  _upload: function _upload(id, params) {
    var file = this._files[id],
        name = this.getName(id),
        size = this.getSize(id);
    this._loaded[id] = 0;
    var xhr = this._xhrs[id] = new XMLHttpRequest();
    var self = this;

    xhr.upload.onprogress = function (e) {
      if (e.lengthComputable) {
        self._loaded[id] = e.loaded;

        self._options.onProgress(id, name, e.loaded, e.total);
      }
    };

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4) {
        self._onComplete(id, xhr);
      }
    };

    var formData = new FormData();
    formData.append(params.fileFieldLabel, file);
    formData.append('dest', params.dest);
    var action = this._options.action + "?dest=" + params.dest;
    xhr.open("POST", action, true);
    xhr.send(formData);
  },
  _onComplete: function _onComplete(id, xhr) {
    // the request was aborted/cancelled
    if (!this._files[id]) return;
    var name = this.getName(id);
    var size = this.getSize(id);

    this._options.onProgress(id, name, size, size);

    if (xhr.status == 200) {
      this.log("xhr - server response received");
      this.log("responseText = " + xhr.responseText);
      var response;

      try {
        response = eval("(" + xhr.responseText + ")");
      } catch (err) {
        response = {};
      }

      this._options.onComplete(id, name, response);
    } else {
      this._options.onComplete(id, name, xhr);
    }

    this._files[id] = null;
    this._xhrs[id] = null;

    this._dequeue(id);
  },
  _cancel: function _cancel(id) {
    if (this._files[id]) {
      this._options.onCancel(id, this.getName(id));
    }

    this._files[id] = null;

    if (this._xhrs[id]) {
      this._xhrs[id].abort();

      this._xhrs[id] = null;
    }
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (qq);

/***/ })

}]);
//# sourceMappingURL=/static/desktop/js/bundles/hue/hue-0320b821-bundle-3c690b33b5f47cc0d68b.js.map