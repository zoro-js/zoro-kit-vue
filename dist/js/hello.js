webpackJsonp([0],[
/* 0 */
/*!*******************************!*\
  !*** ./src/js/entry/hello.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	__webpack_require__(/*! module/common */ 2);
	
	var _foo = __webpack_require__(/*! module/hello/foo */ 3);
	
	var _foo2 = _interopRequireDefault(_foo);
	
	var _hello = __webpack_require__(/*! module/hello/hello */ 10);
	
	var _hello2 = _interopRequireDefault(_hello);
	
	var _classStyle = __webpack_require__(/*! module/hello/class-style */ 13);
	
	var _classStyle2 = _interopRequireDefault(_classStyle);
	
	var _ifShowElse = __webpack_require__(/*! module/hello/if-show-else */ 16);
	
	var _ifShowElse2 = _interopRequireDefault(_ifShowElse);
	
	var _event = __webpack_require__(/*! module/hello/event */ 19);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _form = __webpack_require__(/*! module/hello/form */ 22);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _myComponent = __webpack_require__(/*! component/my-component */ 25);
	
	var _myComponent2 = _interopRequireDefault(_myComponent);
	
	var _counter = __webpack_require__(/*! component/counter */ 28);
	
	var _counter2 = _interopRequireDefault(_counter);
	
	var _anchoredHeading = __webpack_require__(/*! component/anchored-heading */ 31);
	
	var _anchoredHeading2 = _interopRequireDefault(_anchoredHeading);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	window.vm = new Vue({
	  render: function render(h) {
	    return h(
	      'div',
	      null,
	      [h(
	        _foo2['default'],
	        null,
	        []
	      ), h(
	        _hello2['default'],
	        null,
	        []
	      ), h(
	        _classStyle2['default'],
	        null,
	        []
	      ), h(
	        _ifShowElse2['default'],
	        null,
	        []
	      ), h(
	        _event2['default'],
	        null,
	        []
	      ), h(
	        _form2['default'],
	        null,
	        []
	      ), h(
	        _myComponent2['default'],
	        null,
	        []
	      ), h(
	        _counter2['default'],
	        null,
	        []
	      ), h(
	        _counter2['default'],
	        null,
	        []
	      ), h(
	        _counter2['default'],
	        null,
	        []
	      ), h(
	        'hr',
	        null,
	        []
	      ), h(
	        _anchoredHeading2['default'],
	        {
	          attrs: { level: 3 }
	        },
	        ['Hello world!']
	      )]
	    );
	  }
	}).$mount('#app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! vue */ 1)))

/***/ },
/* 1 */,
/* 2 */
/*!*********************************!*\
  !*** ./src/js/module/common.js ***!
  \*********************************/
/***/ function(module, exports) {

	"use strict";

/***/ },
/* 3 */
/*!*************************************!*\
  !*** ./src/js/module/hello/foo.vue ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* styles */
	__webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!vue-loader/lib/style-rewriter?id=data-v-3d9c874b!vue-loader/lib/selector?type=styles&index=0!./foo.vue */ 4)
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./foo.vue */ 8)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-3d9c874b!vue-loader/lib/selector?type=template&index=0!./foo.vue */ 9)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/hello/foo.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-3d9c874b", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-3d9c874b", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] foo.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 4 */
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./~/vue-style-loader!./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-3d9c874b!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/js/module/hello/foo.vue ***!
  \**********************************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../../../~/css-loader?sourceMap!./../../../../~/vue-loader/lib/style-rewriter.js?id=data-v-3d9c874b!./../../../../~/vue-loader/lib/selector.js?type=styles&index=0!./foo.vue */ 5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../../../~/vue-style-loader/addStyles.js */ 7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3d9c874b!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./foo.vue", function() {
				var newContent = require("!!./../../../../node_modules/css-loader/index.js?sourceMap!./../../../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-3d9c874b!./../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./foo.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/*!*************************************************************************************************************************************************************************!*\
  !*** ./~/css-loader?sourceMap!./~/vue-loader/lib/style-rewriter.js?id=data-v-3d9c874b!./~/vue-loader/lib/selector.js?type=styles&index=0!./src/js/module/hello/foo.vue ***!
  \*************************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(/*! ./../../../../~/css-loader/lib/css-base.js */ 6)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.foo p {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -moz-box;\n    display: -ms-flexbox;\n    display: flex;\n    color: silver;\n}\n", "", {"version":3,"sources":["/./src/js/module/hello/foo.vue?84a53b20"],"names":[],"mappings":";AAoBA;IACA,qBAAA;IAAA,sBAAA;IAAA,kBAAA;IAAA,qBAAA;IAAA,cAAA;IACA,cAAA;CACA","file":"foo.vue","sourcesContent":["<template lang=\"html\">\n  <div class=\"container-fluid m-a-1 foo\">\n    <h1>foo</h1>\n    <p>{{greeting}} world!</p>\n    <hr>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      greeting: 'hello'\n    }\n  }\n}\n</script>\n\n<style lang='css'>\n  .foo {\n    p {\n      display: flex;\n      color: silver;\n    }\n  }\n</style>\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/*!*****************************************!*\
  !*** ./~/vue-style-loader/addStyles.js ***!
  \*****************************************/
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if (media) {
			styleElement.setAttribute("media", media);
		}
	
		if (sourceMap) {
			// https://developer.chrome.com/devtools/docs/javascript-debugging
			// this makes source maps inside style tags work properly in Chrome
			css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 8 */
/*!*********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/hello/foo.vue ***!
  \*********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports['default'] = {
	  data: function data() {
	    return {
	      greeting: 'hello'
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/*!*****************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-3d9c874b!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/hello/foo.vue ***!
  \*****************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1 foo"
	  }, [_m(0), " ", _h('p', [_s(greeting) + " world!"]), " ", _m(1)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["foo"])
	}},function (){with(this) {
	  return _h('hr')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-3d9c874b", module.exports)
	  }
	}

/***/ },
/* 10 */
/*!***************************************!*\
  !*** ./src/js/module/hello/hello.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./hello.vue */ 11)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-2cec2617!vue-loader/lib/selector?type=template&index=0!./hello.vue */ 12)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/hello/hello.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2cec2617", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-2cec2617", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] hello.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 11 */
/*!***********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/hello/hello.vue ***!
  \***********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports['default'] = {
	  data: function data() {
	    return {
	      message: 'Hello Vue',
	      firstname: 'Yingya',
	      lastname: 'Zhang',
	      newTodo: '',
	      todos: [{ text: 'Learn JavaScript' }, { text: 'Learn Vue' }, { text: 'Build something awesome' }]
	    };
	  },
	
	  computed: {
	    reversedMessage: function reversedMessage() {
	      return this.message.split('').reverse().join('');
	    },
	
	    fullname: {
	      get: function get() {
	        return this.firstname + ' ' + this.lastname;
	      },
	      set: function set(name) {
	        var names = name.split(' ');
	        this.firstname = names[0];
	        this.lastname = names[1];
	      }
	    }
	  },
	  methods: {
	    reverseMessage: function reverseMessage() {
	      this.message = this.message.split('').reverse().join('');
	    },
	    addTodo: function addTodo() {
	      var todo = this.newTodo.trim();
	      if (todo) {
	        this.todos.push({ text: todo });
	        this.newTodo = '';
	      }
	    },
	    removeTodo: function removeTodo(index) {
	      this.todos.splice(index, 1);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 12 */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-2cec2617!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/hello/hello.vue ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1"
	  }, [_m(0), " ", _h('div', [_h('p', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (message),
	      expression: "message"
	    }],
	    domProps: {
	      "value": _s(message)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        message = $event.target.value
	      }
	    }
	  })]), " ", _h('p', ["Original message: " + _s(message)]), " ", _h('p', ["Computed Reversed Message: " + _s(reversedMessage)]), " ", _h('p', [_h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": reverseMessage
	    }
	  }, ["Reverse Message"])])]), " ", _h('div', {
	    staticClass: "m-t-1"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (firstname),
	      expression: "firstname"
	    }],
	    domProps: {
	      "value": _s(firstname)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        firstname = $event.target.value
	      }
	    }
	  }), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (lastname),
	      expression: "lastname"
	    }],
	    domProps: {
	      "value": _s(lastname)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        lastname = $event.target.value
	      }
	    }
	  }), " ", _h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (fullname),
	      expression: "fullname"
	    }],
	    domProps: {
	      "value": _s(fullname)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        fullname = $event.target.value
	      }
	    }
	  })]), " ", _h('div', {
	    staticClass: "m-t-1"
	  }, [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (newTodo),
	      expression: "newTodo"
	    }],
	    attrs: {
	      "placeholder": "newTodo"
	    },
	    domProps: {
	      "value": _s(newTodo)
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 13) return;
	        addTodo($event)
	      },
	      "input": function($event) {
	        if ($event.target.composing) return;
	        newTodo = $event.target.value
	      }
	    }
	  }), " ", _h('ul', [_l((todos), function(todo, index) {
	    return _h('li', [_h('span', [_s(todo.text)]), " ", _h('button', {
	      staticClass: "btn btn-outline-primary",
	      attrs: {
	        "type": "button"
	      },
	      on: {
	        "click": function($event) {
	          removeTodo(index)
	        }
	      }
	    }, ["X"])])
	  })])]), " ", _m(1)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["hello"])
	}},function (){with(this) {
	  return _h('hr')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2cec2617", module.exports)
	  }
	}

/***/ },
/* 13 */
/*!*********************************************!*\
  !*** ./src/js/module/hello/class-style.vue ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./class-style.vue */ 14)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-35f183a1!vue-loader/lib/selector?type=template&index=0!./class-style.vue */ 15)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/hello/class-style.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-35f183a1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-35f183a1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] class-style.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 14 */
/*!*****************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/hello/class-style.vue ***!
  \*****************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports['default'] = {
	  data: function data() {
	    return {
	      isActive: true,
	      hasError: false,
	      classObject: {
	        active: true,
	        'text-danger': false
	      },
	      activeClass: 'active',
	      errorClass: 'text-danger',
	      activeColor: 'teal',
	      fontSize: 30,
	      styleObject: {
	        color: 'teal',
	        fontSize: '30px'
	      },
	      baseStyles: {
	        color: 'teal',
	        fontSize: '12px'
	      },
	      overridingStyles: {
	        fontSize: '30px',
	        fontWeight: 'bold'
	      }
	    };
	  },
	
	  computed: {
	    computedClassObject: function computedClassObject() {
	      return {
	        active: this.isActive && !this.error,
	        'text-danger': this.error && this.error.type === 'fatal'
	      };
	    },
	    computedStyleObject: function computedStyleObject() {
	      return {
	        color: 'teal',
	        fontSize: '30px'
	      };
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 15 */
/*!*************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-35f183a1!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/hello/class-style.vue ***!
  \*************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1"
	  }, [_m(0), " ", _h('div', {
	    staticClass: "static",
	    class: {
	      active: isActive, 'text-danger': hasError
	    }
	  }, ["class object"]), " ", _h('div', {
	    class: classObject
	  }, ["class - data object"]), " ", _h('div', {
	    class: computedClassObject
	  }, ["class - computed object"]), " ", _h('div', {
	    class: [activeClass, errorClass]
	  }, ["class array"]), " ", _h('div', {
	    class: [isActive ? activeClass : '', errorClass]
	  }, ["class array with ternary"]), " ", _h('div', {
	    class: [{
	      active: isActive
	    }, errorClass]
	  }, ["class array with object"]), " ", _h('div', {
	    style: ({
	      color: activeColor,
	      fontSize: fontSize + 'px'
	    })
	  }, ["style object"]), " ", _h('div', {
	    style: (styleObject)
	  }, ["style - data object"]), " ", _h('div', {
	    style: (computedStyleObject)
	  }, ["style - computed object"]), " ", _h('div', {
	    style: ([baseStyles, overridingStyles])
	  }, ["style array"]), " ", _m(1)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["class style"])
	}},function (){with(this) {
	  return _h('hr')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-35f183a1", module.exports)
	  }
	}

/***/ },
/* 16 */
/*!**********************************************!*\
  !*** ./src/js/module/hello/if-show-else.vue ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./if-show-else.vue */ 17)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-d9ab51b8!vue-loader/lib/selector?type=template&index=0!./if-show-else.vue */ 18)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/hello/if-show-else.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-d9ab51b8", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-d9ab51b8", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] if-show-else.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 17 */
/*!******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/hello/if-show-else.vue ***!
  \******************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports["default"] = {
	  data: function data() {
	    return {
	      ok: true,
	      even: false
	    };
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 18 */
/*!**************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-d9ab51b8!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/hello/if-show-else.vue ***!
  \**************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1"
	  }, [_m(0), " ", (ok) ? _h('p', ["ok"]) : _e(), " ", (even) ? _h('p', ["even"]) : _h('p', ["odd"]), " ", " ", (ok) ? [_m(1), " ", _m(2), " ", _m(3)] : _e(), " ", _h('p', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (ok),
	      expression: "ok"
	    }]
	  }, ["ok"]), " ", _h('p', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (even),
	      expression: "even"
	    }]
	  }, ["even"]), " ", _h('p', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (!even),
	      expression: "!even"
	    }]
	  }, ["odd"]), " ", _m(4)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["if show else"])
	}},function (){with(this) {
	  return _h('p', ["Title"])
	}},function (){with(this) {
	  return _h('p', ["Paragraph 1"])
	}},function (){with(this) {
	  return _h('p', ["Paragraph 2"])
	}},function (){with(this) {
	  return _h('hr')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-d9ab51b8", module.exports)
	  }
	}

/***/ },
/* 19 */
/*!***************************************!*\
  !*** ./src/js/module/hello/event.vue ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./event.vue */ 20)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-31114842!vue-loader/lib/selector?type=template&index=0!./event.vue */ 21)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/hello/event.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-31114842", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-31114842", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] event.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 20 */
/*!***********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/hello/event.vue ***!
  \***********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports['default'] = {
	  data: function data() {
	    return {
	      counter: 0,
	      name: 'zyy'
	    };
	  },
	
	  methods: {
	    greet: function greet() {
	      alert('Hello ' + this.name);
	    },
	    say: function say(msg) {
	      alert(msg);
	    },
	    warn: function warn(msg, event) {
	      if (event) {
	        event.preventDefault();
	      }
	      alert(msg);
	    }
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 21 */
/*!*******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-31114842!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/hello/event.vue ***!
  \*******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1"
	  }, [_m(0), " ", _h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        counter++
	      }
	    }
	  }, ["+1"]), " ", _h('p', ["The button above has been clicked " + _s(counter) + " times"]), " ", _h('p', [_h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": greet
	    }
	  }, ["Greet"]), " ", _h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        say('hi')
	      }
	    }
	  }, ["Say hi"]), " ", _h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        say('what')
	      }
	    }
	  }, ["Say what"]), " ", _h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        warn('Form cannot be submitted yet.', $event)
	      }
	    }
	  }, ["Submit"])]), " ", _h('p', [_h('a', {
	    attrs: {
	      "href": "https://www.baidu.com"
	    },
	    on: {
	      "click": function($event) {
	        $event.preventDefault();
	      }
	    }
	  }, ["baidu"])]), _h('form', {
	    on: {
	      "submit": function($event) {
	        $event.preventDefault();
	        $event.stopPropagation();
	      }
	    }
	  }), " ", _h('div', {
	    on: {
	      "click": function($event) {
	        if ($event.target !== $event.currentTarget) return;
	      }
	    }
	  }), " ", _h('input', {
	    staticClass: "ipt",
	    attrs: {
	      "type": "text"
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== 13) return;
	        say('enter')
	      }
	    }
	  }), " ", _h('input', {
	    staticClass: "ipt",
	    attrs: {
	      "type": "text"
	    },
	    on: {
	      "keyup": function($event) {
	        if ($event.keyCode !== _k("v")) return;
	        say('That is the first letter in Vue')
	      }
	    }
	  }), " ", _m(1), " ", _m(2)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["event"])
	}},function (){with(this) {
	  return _h('p')
	}},function (){with(this) {
	  return _h('hr')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-31114842", module.exports)
	  }
	}

/***/ },
/* 22 */
/*!**************************************!*\
  !*** ./src/js/module/hello/form.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./form.vue */ 23)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-7e6a000f!vue-loader/lib/selector?type=template&index=0!./form.vue */ 24)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/hello/form.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7e6a000f", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-7e6a000f", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] form.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 23 */
/*!**********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/hello/form.vue ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports['default'] = {
	  data: function data() {
	    return {
	      msg: '',
	      text: '',
	      checked: false,
	      checkeds: [],
	      picked: '',
	      selected: '',
	      options: [{ text: 'one', value: 1 }, { text: 'two', value: 2 }, { text: 'three', value: 3 }],
	      selecteds: []
	    };
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 24 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-7e6a000f!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/hello/form.vue ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1"
	  }, [_m(0), " ", _h('p', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (msg),
	      expression: "msg"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "text",
	      "placeholder": "enter message"
	    },
	    domProps: {
	      "value": _s(msg)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        msg = $event.target.value
	      }
	    }
	  }), "\n    Message is: " + _s(msg) + "\n  "]), " ", _h('p', [_h('textarea', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (text),
	      expression: "text"
	    }],
	    attrs: {
	      "placeholder": "enter text"
	    },
	    domProps: {
	      "value": _s(text)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) return;
	        text = $event.target.value
	      }
	    }
	  })]), _m(1), " ", _h('p', {
	    style: ({
	      whiteSpace: 'pre'
	    })
	  }, [_s(text)]), " ", _m(2), " ", _h('p', [_h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checked),
	      expression: "checked"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "checkbox"
	    },
	    domProps: {
	      "checked": Array.isArray(checked) ? _i(checked, null) > -1 : _q(checked, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = checked,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = null,
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checked = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checked = $$c
	        }
	      }
	    }
	  }), " " + _s(checked)]), " ", _h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checkeds),
	      expression: "checkeds"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "checkbox",
	      "value": "Apple"
	    },
	    domProps: {
	      "checked": Array.isArray(checkeds) ? _i(checkeds, "Apple") > -1 : _q(checkeds, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = checkeds,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = "Apple",
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checkeds = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checkeds = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checkeds = $$c
	        }
	      }
	    }
	  }), " Apple"]), " ", _h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checkeds),
	      expression: "checkeds"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "checkbox",
	      "value": "Boy"
	    },
	    domProps: {
	      "checked": Array.isArray(checkeds) ? _i(checkeds, "Boy") > -1 : _q(checkeds, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = checkeds,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = "Boy",
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checkeds = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checkeds = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checkeds = $$c
	        }
	      }
	    }
	  }), " Boy"]), " ", _h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checkeds),
	      expression: "checkeds"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "checkbox",
	      "value": "Cat"
	    },
	    domProps: {
	      "checked": Array.isArray(checkeds) ? _i(checkeds, "Cat") > -1 : _q(checkeds, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = checkeds,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = "Cat",
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checkeds = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checkeds = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checkeds = $$c
	        }
	      }
	    }
	  }), " Cat"]), " ", _h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (checkeds),
	      expression: "checkeds"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "checkbox",
	      "value": "Dog"
	    },
	    domProps: {
	      "checked": Array.isArray(checkeds) ? _i(checkeds, "Dog") > -1 : _q(checkeds, true)
	    },
	    on: {
	      "change": function($event) {
	        var $$a = checkeds,
	          $$el = $event.target,
	          $$c = $$el.checked ? (true) : (false);
	        if (Array.isArray($$a)) {
	          var $$v = "Dog",
	            $$i = _i($$a, $$v);
	          if ($$c) {
	            $$i < 0 && (checkeds = $$a.concat($$v))
	          } else {
	            $$i > -1 && (checkeds = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
	          }
	        } else {
	          checkeds = $$c
	        }
	      }
	    }
	  }), " Dog"]), "\n    checkeds is: " + _s(checkeds) + "\n  "]), " ", _h('p', [_h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (picked),
	      expression: "picked"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "radio",
	      "value": "one"
	    },
	    domProps: {
	      "checked": _q(picked, "one")
	    },
	    on: {
	      "change": function($event) {
	        picked = "one"
	      }
	    }
	  }), " one"]), " ", _h('label', [_h('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (picked),
	      expression: "picked"
	    }],
	    staticClass: "ipt",
	    attrs: {
	      "type": "radio",
	      "value": "two"
	    },
	    domProps: {
	      "checked": _q(picked, "two")
	    },
	    on: {
	      "change": function($event) {
	        picked = "two"
	      }
	    }
	  }), " two"]), "\n    picked is: " + _s(picked) + "\n  "]), " ", _h('p', [_h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (selected),
	      expression: "selected"
	    }],
	    on: {
	      "change": function($event) {
	        selected = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          return "_value" in o ? o._value : o.value
	        })[0]
	      }
	    }
	  }, [_m(3), " ", _m(4), " ", _m(5), " ", _l((options), function(option) {
	    return _h('option', {
	      domProps: {
	        "value": option.value
	      }
	    }, [_s(option.text)])
	  })]), "\n    selected is: " + _s(selected) + "\n    ", _h('select', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (selecteds),
	      expression: "selecteds"
	    }],
	    attrs: {
	      "multiple": ""
	    },
	    on: {
	      "change": function($event) {
	        selecteds = Array.prototype.filter.call($event.target.options, function(o) {
	          return o.selected
	        }).map(function(o) {
	          return "_value" in o ? o._value : o.value
	        })
	      }
	    }
	  }, [_m(6), " ", _m(7), " ", _m(8)]), "\n    selecteds is: " + _s(selecteds) + "\n  "]), " ", _m(9)])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["form"])
	}},function (){with(this) {
	  return _h('p', ["Text is:"])
	}},function (){with(this) {
	  return _h('p')
	}},function (){with(this) {
	  return _h('option', {
	    attrs: {
	      "value": "a"
	    }
	  }, ["a"])
	}},function (){with(this) {
	  return _h('option', {
	    attrs: {
	      "value": "b"
	    }
	  }, ["b"])
	}},function (){with(this) {
	  return _h('option', {
	    attrs: {
	      "value": "b"
	    }
	  }, ["c"])
	}},function (){with(this) {
	  return _h('option', {
	    attrs: {
	      "value": "a"
	    }
	  }, ["a"])
	}},function (){with(this) {
	  return _h('option', {
	    attrs: {
	      "value": "b"
	    }
	  }, ["b"])
	}},function (){with(this) {
	  return _h('option', {
	    attrs: {
	      "value": "c"
	    }
	  }, ["c"])
	}},function (){with(this) {
	  return _h('hr')
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7e6a000f", module.exports)
	  }
	}

/***/ },
/* 25 */
/*!*******************************************!*\
  !*** ./src/js/component/my-component.vue ***!
  \*******************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./my-component.vue */ 26)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-5a396553!vue-loader/lib/selector?type=template&index=0!./my-component.vue */ 27)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/component/my-component.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5a396553", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-5a396553", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] my-component.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 26 */
/*!***************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/component/my-component.vue ***!
  \***************************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	//
	//
	//
	//
	//
	//
	//
	//
	
	exports["default"] = {
	  data: function data() {
	    return {};
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 27 */
/*!***********************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-5a396553!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/component/my-component.vue ***!
  \***********************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _m(0)
	}},staticRenderFns: [function (){with(this) {
	  return _h('div', {
	    staticClass: "container-fluid m-a-1"
	  }, [_h('h1', ["Component"]), "\n  A custom component!\n  ", _h('hr')])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5a396553", module.exports)
	  }
	}

/***/ },
/* 28 */
/*!**************************************!*\
  !*** ./src/js/component/counter.vue ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./counter.vue */ 29)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-28d30895!vue-loader/lib/selector?type=template&index=0!./counter.vue */ 30)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/component/counter.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-28d30895", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-28d30895", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] counter.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 29 */
/*!**********************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/component/counter.vue ***!
  \**********************************************************************************************************/
/***/ function(module, exports) {

	"use strict";
	
	exports.__esModule = true;
	//
	//
	//
	//
	
	exports["default"] = {
	  data: function data() {
	    return {
	      counter: 0
	    };
	  }
	};
	module.exports = exports["default"];

/***/ },
/* 30 */
/*!******************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-28d30895!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/component/counter.vue ***!
  \******************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('button', {
	    staticClass: "btn btn-outline-primary",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": function($event) {
	        counter++
	      }
	    }
	  }, [_s(counter)])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-28d30895", module.exports)
	  }
	}

/***/ },
/* 31 */
/*!***********************************************!*\
  !*** ./src/js/component/anchored-heading.vue ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./anchored-heading.vue */ 32)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/component/anchored-heading.vue"
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-a04e8700", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-a04e8700", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] anchored-heading.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },
/* 32 */
/*!*******************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/component/anchored-heading.vue ***!
  \*******************************************************************************************************************/
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var getChildrenTextContent = function getChildrenTextContent(children) {
	  return children.map(function (node) {
	    return node.children ? getChildrenTextContent(node.children) : node.text;
	  }).join('');
	};
	
	exports['default'] = {
	  render: function render(h) {
	    var tagName = 'h' + this.level;
	    var headingId = getChildrenTextContent(this.$slots['default']).toLowerCase().replace(/\W/g, '-').replace(/(^-|-$)/g, '');
	    return h(tagName, {
	      attrs: {
	        id: headingId
	      },
	      'class': ['container-fluid', 'm-a-1']
	    }, [h(
	      'a',
	      {
	        attrs: {
	          name: headingId,
	          href: '#' + headingId }
	      },
	      [this.$slots['default']]
	    )]);
	  },
	
	  props: {
	    level: {
	      type: Number,
	      required: true
	    }
	  },
	  data: function data() {
	    return {};
	  }
	};
	module.exports = exports['default'];

/***/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZW50cnkvaGVsbG8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZS9oZWxsby9mb28udnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvaGVsbG8vZm9vLnZ1ZT84N2E1Iiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvaGVsbG8vZm9vLnZ1ZT82ZjA1Iiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vZm9vLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL2hlbGxvL2Zvby52dWU/Yzc2ZiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL2hlbGxvL2hlbGxvLnZ1ZSIsIndlYnBhY2s6Ly8vaGVsbG8udnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvaGVsbG8vaGVsbG8udnVlPzM3N2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZS9oZWxsby9jbGFzcy1zdHlsZS52dWUiLCJ3ZWJwYWNrOi8vL2NsYXNzLXN0eWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL2hlbGxvL2NsYXNzLXN0eWxlLnZ1ZT84YTBhIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvaGVsbG8vaWYtc2hvdy1lbHNlLnZ1ZSIsIndlYnBhY2s6Ly8vaWYtc2hvdy1lbHNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL2hlbGxvL2lmLXNob3ctZWxzZS52dWU/Mzg2ZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbW9kdWxlL2hlbGxvL2V2ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vZXZlbnQudnVlIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvaGVsbG8vZXZlbnQudnVlPzczZjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZS9oZWxsby9mb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vZm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZS9oZWxsby9mb3JtLnZ1ZT9iODY0Iiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnQvbXktY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vbXktY29tcG9uZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L215LWNvbXBvbmVudC52dWU/NTYyYiIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L2NvdW50ZXIudnVlIiwid2VicGFjazovLy9jb3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvY29tcG9uZW50L2NvdW50ZXIudnVlP2IzNWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudC9hbmNob3JlZC1oZWFkaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vYW5jaG9yZWQtaGVhZGluZy52dWUiXSwibmFtZXMiOlsid2luZG93Iiwidm0iLCJWdWUiLCJyZW5kZXIiLCJoIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBQSxRQUFPQyxFQUFQLEdBQVksSUFBSUMsR0FBSixDQUFRO0FBQ2xCQyxTQURrQixrQkFDVkMsQ0FEVSxFQUNQO0FBQ1QsWUFDRTtBQUFBO0FBQUE7QUFBQSxRQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIRixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFKRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFQRixFQVFFO0FBQUE7QUFBQTtBQUFB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QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7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QztBQUNELGtDQUFpQzs7QUFFakM7Ozs7Ozs7Ozs7Ozs7O0FDOUJBLHdFQUNBO3VDQUNBO2lCQUNBLHVDQUNBLGlCQUNBO1dBQ0E7QUFFQTs7OzhCQUVBOzhCQUNBO2lEQUNBLG1CQUNBLDZCQUNBLHlCQUNBO2NBRUE7O2FBSUE7QUFGQTtvQ0FJQTtBQUxBLE1BRkE7QUFVQTs7O2lCQUNBO3VCQUNBOzthQUtBO01BUkE7QUFTQTs7OzthQUdBO2lCQUdBO0FBSkE7QUFEQTt5QkFNQTtZQUVBO0FBQ0E7QUFuQ0EiLCJmaWxlIjoiaGVsbG8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ21vZHVsZS9jb21tb24nXG5pbXBvcnQgRm9vIGZyb20gJ21vZHVsZS9oZWxsby9mb28nXG5pbXBvcnQgSGVsbG8gZnJvbSAnbW9kdWxlL2hlbGxvL2hlbGxvJ1xuaW1wb3J0IENsYXNzU3R5bGUgZnJvbSAnbW9kdWxlL2hlbGxvL2NsYXNzLXN0eWxlJ1xuaW1wb3J0IElmU2hvd0Vsc2UgZnJvbSAnbW9kdWxlL2hlbGxvL2lmLXNob3ctZWxzZSdcbmltcG9ydCBFdmVudCBmcm9tICdtb2R1bGUvaGVsbG8vZXZlbnQnXG5pbXBvcnQgRm9ybSBmcm9tICdtb2R1bGUvaGVsbG8vZm9ybSdcblxuaW1wb3J0IE15Q29tcG9uZW50IGZyb20gJ2NvbXBvbmVudC9teS1jb21wb25lbnQnXG5pbXBvcnQgQ291bnRlciBmcm9tICdjb21wb25lbnQvY291bnRlcidcbmltcG9ydCBBbmNob3JlZEhlYWRpbmcgZnJvbSAnY29tcG9uZW50L2FuY2hvcmVkLWhlYWRpbmcnXG5cbndpbmRvdy52bSA9IG5ldyBWdWUoe1xuICByZW5kZXIgKGgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEZvbyAvPlxuICAgICAgICA8SGVsbG8gLz5cbiAgICAgICAgPENsYXNzU3R5bGUgLz5cbiAgICAgICAgPElmU2hvd0Vsc2UgLz5cbiAgICAgICAgPEV2ZW50IC8+XG4gICAgICAgIDxGb3JtIC8+XG4gICAgICAgIDxNeUNvbXBvbmVudCAvPlxuICAgICAgICA8Q291bnRlciAvPlxuICAgICAgICA8Q291bnRlciAvPlxuICAgICAgICA8Q291bnRlciAvPlxuICAgICAgICA8aHIgLz5cbiAgICAgICAgPEFuY2hvcmVkSGVhZGluZyBsZXZlbD17M30+XG4gICAgICAgICAgSGVsbG8gd29ybGQhXG4gICAgICAgIDwvQW5jaG9yZWRIZWFkaW5nPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KS4kbW91bnQoJyNhcHAnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZW50cnkvaGVsbG8uanNcbiAqKi8iLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cblxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIXZ1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0zZDljODc0YiF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vZm9vLnZ1ZVwiKVxuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9vLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtM2Q5Yzg3NGIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZm9vLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvenl5L3p5eS93ZWItbGliL3pvcm8ta2l0LXZ1ZS9zcmMvanMvbW9kdWxlL2hlbGxvL2Zvby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNkOWM4NzRiXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTNkOWM4NzRiXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9vLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kdWxlL2hlbGxvL2Zvby52dWVcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkOWM4NzRiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9mb28udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0zZDljODc0YiEuLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vZm9vLnZ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkOWM4NzRiIS4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9mb28udnVlXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkOWM4NzRiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2pzL21vZHVsZS9oZWxsby9mb28udnVlXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZm9vIHAge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcXG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGNvbG9yOiBzaWx2ZXI7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9zcmMvanMvbW9kdWxlL2hlbGxvL2Zvby52dWU/ODRhNTNiMjBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW9CQTtJQUNBLHFCQUFBO0lBQUEsc0JBQUE7SUFBQSxrQkFBQTtJQUFBLHFCQUFBO0lBQUEsY0FBQTtJQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZm9vLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGUgbGFuZz1cXFwiaHRtbFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXItZmx1aWQgbS1hLTEgZm9vXFxcIj5cXG4gICAgPGgxPmZvbzwvaDE+XFxuICAgIDxwPnt7Z3JlZXRpbmd9fSB3b3JsZCE8L3A+XFxuICAgIDxocj5cXG4gIDwvZGl2PlxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICBkYXRhICgpIHtcXG4gICAgcmV0dXJuIHtcXG4gICAgICBncmVldGluZzogJ2hlbGxvJ1xcbiAgICB9XFxuICB9XFxufVxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBsYW5nPSdjc3MnPlxcbiAgLmZvbyB7XFxuICAgIHAge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgY29sb3I6IHNpbHZlcjtcXG4gICAgfVxcbiAgfVxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTNkOWM4NzRiIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3JjL2pzL21vZHVsZS9oZWxsby9mb28udnVlXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcclxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxyXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcclxuKi9cclxuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHR2YXIgbGlzdCA9IFtdO1xyXG5cclxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXHJcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSB0aGlzW2ldO1xyXG5cdFx0XHRpZihpdGVtWzJdKSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBpdGVtWzFdICsgXCJ9XCIpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJlc3VsdC5wdXNoKGl0ZW1bMV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oXCJcIik7XHJcblx0fTtcclxuXHJcblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcclxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XHJcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcclxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xyXG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcclxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XHJcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcclxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcclxuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxyXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xyXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxyXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxyXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xyXG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xyXG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XHJcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH07XHJcblx0cmV0dXJuIGxpc3Q7XHJcbn07XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbnZhciBzdHlsZXNJbkRvbSA9IHt9LFxuXHRtZW1vaXplID0gZnVuY3Rpb24oZm4pIHtcblx0XHR2YXIgbWVtbztcblx0XHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRcdHJldHVybiBtZW1vO1xuXHRcdH07XG5cdH0sXG5cdGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAvbXNpZSBbNi05XVxcYi8udGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcblx0XHRpZihuZXdPYmopIHtcblx0XHRcdGlmKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcClcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZUVsZW1lbnQsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzO1xuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGVFbGVtZW50LCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0aWYgKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcblx0XHQvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG5cdFx0Y3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nO1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0aWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIjx0ZW1wbGF0ZSBsYW5nPVwiaHRtbFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIG0tYS0xIGZvb1wiPlxuICAgIDxoMT5mb288L2gxPlxuICAgIDxwPnt7Z3JlZXRpbmd9fSB3b3JsZCE8L3A+XG4gICAgPGhyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBncmVldGluZzogJ2hlbGxvJ1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPSdjc3MnPlxuICAuZm9vIHtcbiAgICBwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBjb2xvcjogc2lsdmVyO1xuICAgIH1cbiAgfVxuPC9zdHlsZT5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGZvby52dWU/ODRhNTNiMjBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgbS1hLTEgZm9vXCJcbiAgfSwgW19tKDApLCBcIiBcIiwgX2goJ3AnLCBbX3MoZ3JlZXRpbmcpICsgXCIgd29ybGQhXCJdKSwgXCIgXCIsIF9tKDEpXSlcbn19LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2gxJywgW1wiZm9vXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnaHInKVxufX1dfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtM2Q5Yzg3NGJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtM2Q5Yzg3NGIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9tb2R1bGUvaGVsbG8vZm9vLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaGVsbG8udnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yY2VjMjYxNyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9oZWxsby52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL3p5eS96eXkvd2ViLWxpYi96b3JvLWtpdC12dWUvc3JjL2pzL21vZHVsZS9oZWxsby9oZWxsby52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJjZWMyNjE3XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJjZWMyNjE3XCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaGVsbG8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9tb2R1bGUvaGVsbG8vaGVsbG8udnVlXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIjx0ZW1wbGF0ZSBsYW5nPVwiaHRtbFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWZsdWlkIG0tYS0xXCI+XG4gICAgPGgxPmhlbGxvPC9oMT5cbiAgICA8ZGl2PlxuICAgICAgPHA+PGlucHV0IHYtbW9kZWw9XCJtZXNzYWdlXCI+PC9wPlxuICAgICAgPHA+T3JpZ2luYWwgbWVzc2FnZToge3ttZXNzYWdlfX08L3A+XG4gICAgICA8cD5Db21wdXRlZCBSZXZlcnNlZCBNZXNzYWdlOiB7e3JldmVyc2VkTWVzc2FnZX19PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBAY2xpY2s9XCJyZXZlcnNlTWVzc2FnZVwiPlJldmVyc2UgTWVzc2FnZTwvYnV0dG9uPlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtLXQtMVwiPlxuICAgICAgPGlucHV0IHYtbW9kZWw9XCJmaXJzdG5hbWVcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwibGFzdG5hbWVcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwiZnVsbG5hbWVcIj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwibS10LTFcIj5cbiAgICAgIDxpbnB1dCB2LW1vZGVsPVwibmV3VG9kb1wiIEBrZXl1cC5lbnRlcj1cImFkZFRvZG9cIiBwbGFjZWhvbGRlcj1cIm5ld1RvZG9cIj5cbiAgICAgIDx1bD5cbiAgICAgICAgPGxpIHYtZm9yPVwiKHRvZG8sIGluZGV4KSBpbiB0b2Rvc1wiPlxuICAgICAgICAgIDxzcGFuPnt7dG9kby50ZXh0fX08L3NwYW4+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIEBjbGljaz1cInJlbW92ZVRvZG8oaW5kZXgpXCI+WDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgICA8aHI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1lc3NhZ2U6ICdIZWxsbyBWdWUnLFxuICAgICAgZmlyc3RuYW1lOiAnWWluZ3lhJyxcbiAgICAgIGxhc3RuYW1lOiAnWmhhbmcnLFxuICAgICAgbmV3VG9kbzogJycsXG4gICAgICB0b2RvczogW1xuICAgICAgICB7dGV4dDogJ0xlYXJuIEphdmFTY3JpcHQnfSxcbiAgICAgICAge3RleHQ6ICdMZWFybiBWdWUnfSxcbiAgICAgICAge3RleHQ6ICdCdWlsZCBzb21ldGhpbmcgYXdlc29tZSd9XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHJldmVyc2VkTWVzc2FnZSAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5tZXNzYWdlLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICB9LFxuICAgIGZ1bGxuYW1lOiB7XG4gICAgICBnZXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maXJzdG5hbWUgKyAnICcgKyB0aGlzLmxhc3RuYW1lXG4gICAgICB9LFxuICAgICAgc2V0IChuYW1lKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gbmFtZS5zcGxpdCgnICcpXG4gICAgICAgIHRoaXMuZmlyc3RuYW1lID0gbmFtZXNbMF1cbiAgICAgICAgdGhpcy5sYXN0bmFtZSA9IG5hbWVzWzFdXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcmV2ZXJzZU1lc3NhZ2UgKCkge1xuICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJylcbiAgICB9LFxuICAgIGFkZFRvZG8gKCkge1xuICAgICAgY29uc3QgdG9kbyA9IHRoaXMubmV3VG9kby50cmltKClcbiAgICAgIGlmICh0b2RvKSB7XG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh7dGV4dDogdG9kb30pXG4gICAgICAgIHRoaXMubmV3VG9kbyA9ICcnXG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmVUb2RvIChpbmRleCkge1xuICAgICAgdGhpcy50b2Rvcy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGhlbGxvLnZ1ZT80NGMyNzAwMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiXG4gIH0sIFtfbSgwKSwgXCIgXCIsIF9oKCdkaXYnLCBbX2goJ3AnLCBbX2goJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAobWVzc2FnZSksXG4gICAgICBleHByZXNzaW9uOiBcIm1lc3NhZ2VcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF9zKG1lc3NhZ2UpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm47XG4gICAgICAgIG1lc3NhZ2UgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KV0pLCBcIiBcIiwgX2goJ3AnLCBbXCJPcmlnaW5hbCBtZXNzYWdlOiBcIiArIF9zKG1lc3NhZ2UpXSksIFwiIFwiLCBfaCgncCcsIFtcIkNvbXB1dGVkIFJldmVyc2VkIE1lc3NhZ2U6IFwiICsgX3MocmV2ZXJzZWRNZXNzYWdlKV0pLCBcIiBcIiwgX2goJ3AnLCBbX2goJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogcmV2ZXJzZU1lc3NhZ2VcbiAgICB9XG4gIH0sIFtcIlJldmVyc2UgTWVzc2FnZVwiXSldKV0pLCBcIiBcIiwgX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtLXQtMVwiXG4gIH0sIFtfaCgnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChmaXJzdG5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJmaXJzdG5hbWVcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF9zKGZpcnN0bmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVybjtcbiAgICAgICAgZmlyc3RuYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIFwiIFwiLCBfaCgnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChsYXN0bmFtZSksXG4gICAgICBleHByZXNzaW9uOiBcImxhc3RuYW1lXCJcbiAgICB9XSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfcyhsYXN0bmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVybjtcbiAgICAgICAgbGFzdG5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgXCIgXCIsIF9oKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKGZ1bGxuYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiZnVsbG5hbWVcIlxuICAgIH1dLFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IF9zKGZ1bGxuYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICBmdWxsbmFtZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIFwiIFwiLCBfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm0tdC0xXCJcbiAgfSwgW19oKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKG5ld1RvZG8pLFxuICAgICAgZXhwcmVzc2lvbjogXCJuZXdUb2RvXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIm5ld1RvZG9cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3MobmV3VG9kbylcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LmtleUNvZGUgIT09IDEzKSByZXR1cm47XG4gICAgICAgIGFkZFRvZG8oJGV2ZW50KVxuICAgICAgfSxcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgcmV0dXJuO1xuICAgICAgICBuZXdUb2RvID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIFwiIFwiLCBfaCgndWwnLCBbX2woKHRvZG9zKSwgZnVuY3Rpb24odG9kbywgaW5kZXgpIHtcbiAgICByZXR1cm4gX2goJ2xpJywgW19oKCdzcGFuJywgW19zKHRvZG8udGV4dCldKSwgXCIgXCIsIF9oKCdidXR0b24nLCB7XG4gICAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIHJlbW92ZVRvZG8oaW5kZXgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbXCJYXCJdKV0pXG4gIH0pXSldKSwgXCIgXCIsIF9tKDEpXSlcbn19LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2gxJywgW1wiaGVsbG9cIl0pXG59fSxmdW5jdGlvbiAoKXt3aXRoKHRoaXMpIHtcbiAgcmV0dXJuIF9oKCdocicpXG59fV19XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0yY2VjMjYxN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yY2VjMjYxNyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL21vZHVsZS9oZWxsby9oZWxsby52dWVcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jbGFzcy1zdHlsZS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTM1ZjE4M2ExIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NsYXNzLXN0eWxlLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvenl5L3p5eS93ZWItbGliL3pvcm8ta2l0LXZ1ZS9zcmMvanMvbW9kdWxlL2hlbGxvL2NsYXNzLXN0eWxlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzVmMTgzYTFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzVmMTgzYTFcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjbGFzcy1zdHlsZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL21vZHVsZS9oZWxsby9jbGFzcy1zdHlsZS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiPHRlbXBsYXRlIGxhbmc9XCJodG1sXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmx1aWQgbS1hLTFcIj5cbiAgICA8aDE+Y2xhc3Mgc3R5bGU8L2gxPlxuICAgIDxkaXYgY2xhc3M9XCJzdGF0aWNcIiA6Y2xhc3M9XCJ7YWN0aXZlOiBpc0FjdGl2ZSwgJ3RleHQtZGFuZ2VyJzogaGFzRXJyb3J9XCI+Y2xhc3Mgb2JqZWN0PC9kaXY+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc09iamVjdFwiPmNsYXNzIC0gZGF0YSBvYmplY3Q8L2Rpdj5cbiAgICA8ZGl2IDpjbGFzcz1cImNvbXB1dGVkQ2xhc3NPYmplY3RcIj5jbGFzcyAtIGNvbXB1dGVkIG9iamVjdDwvZGl2PlxuICAgIDxkaXYgOmNsYXNzPVwiW2FjdGl2ZUNsYXNzLCBlcnJvckNsYXNzXVwiPmNsYXNzIGFycmF5PC9kaXY+XG4gICAgPGRpdiA6Y2xhc3M9XCJbaXNBY3RpdmUgPyBhY3RpdmVDbGFzcyA6ICcnLCBlcnJvckNsYXNzXVwiPmNsYXNzIGFycmF5IHdpdGggdGVybmFyeTwvZGl2PlxuICAgIDxkaXYgOmNsYXNzPVwiW3thY3RpdmU6IGlzQWN0aXZlfSwgZXJyb3JDbGFzc11cIj5jbGFzcyBhcnJheSB3aXRoIG9iamVjdDwvZGl2PlxuICAgIDxkaXYgOnN0eWxlPVwie2NvbG9yOiBhY3RpdmVDb2xvciwgZm9udFNpemU6IGZvbnRTaXplICsgJ3B4J31cIj5zdHlsZSBvYmplY3Q8L2Rpdj5cbiAgICA8ZGl2IDpzdHlsZT1cInN0eWxlT2JqZWN0XCI+c3R5bGUgLSBkYXRhIG9iamVjdDwvZGl2PlxuICAgIDxkaXYgOnN0eWxlPVwiY29tcHV0ZWRTdHlsZU9iamVjdFwiPnN0eWxlIC0gY29tcHV0ZWQgb2JqZWN0PC9kaXY+XG4gICAgPGRpdiA6c3R5bGU9XCJbYmFzZVN0eWxlcywgb3ZlcnJpZGluZ1N0eWxlc11cIj5zdHlsZSBhcnJheTwvZGl2PlxuICAgIDxocj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhICgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXNBY3RpdmU6IHRydWUsXG4gICAgICBoYXNFcnJvcjogZmFsc2UsXG4gICAgICBjbGFzc09iamVjdDoge1xuICAgICAgICBhY3RpdmU6IHRydWUsXG4gICAgICAgICd0ZXh0LWRhbmdlcic6IGZhbHNlXG4gICAgICB9LFxuICAgICAgYWN0aXZlQ2xhc3M6ICdhY3RpdmUnLFxuICAgICAgZXJyb3JDbGFzczogJ3RleHQtZGFuZ2VyJyxcbiAgICAgIGFjdGl2ZUNvbG9yOiAndGVhbCcsXG4gICAgICBmb250U2l6ZTogMzAsXG4gICAgICBzdHlsZU9iamVjdDoge1xuICAgICAgICBjb2xvcjogJ3RlYWwnLFxuICAgICAgICBmb250U2l6ZTogJzMwcHgnXG4gICAgICB9LFxuICAgICAgYmFzZVN0eWxlczoge1xuICAgICAgICBjb2xvcjogJ3RlYWwnLFxuICAgICAgICBmb250U2l6ZTogJzEycHgnXG4gICAgICB9LFxuICAgICAgb3ZlcnJpZGluZ1N0eWxlczoge1xuICAgICAgICBmb250U2l6ZTogJzMwcHgnLFxuICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgY29tcHV0ZWRDbGFzc09iamVjdCAoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhY3RpdmU6IHRoaXMuaXNBY3RpdmUgJiYgIXRoaXMuZXJyb3IsXG4gICAgICAgICd0ZXh0LWRhbmdlcic6IHRoaXMuZXJyb3IgJiYgdGhpcy5lcnJvci50eXBlID09PSAnZmF0YWwnXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21wdXRlZFN0eWxlT2JqZWN0ICgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGNvbG9yOiAndGVhbCcsXG4gICAgICAgIGZvbnRTaXplOiAnMzBweCdcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogY2xhc3Mtc3R5bGUudnVlPzY5MGZkZTc0XG4gKiovIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt3aXRoKHRoaXMpIHtcbiAgcmV0dXJuIF9oKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyLWZsdWlkIG0tYS0xXCJcbiAgfSwgW19tKDApLCBcIiBcIiwgX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGF0aWNcIixcbiAgICBjbGFzczoge1xuICAgICAgYWN0aXZlOiBpc0FjdGl2ZSwgJ3RleHQtZGFuZ2VyJzogaGFzRXJyb3JcbiAgICB9XG4gIH0sIFtcImNsYXNzIG9iamVjdFwiXSksIFwiIFwiLCBfaCgnZGl2Jywge1xuICAgIGNsYXNzOiBjbGFzc09iamVjdFxuICB9LCBbXCJjbGFzcyAtIGRhdGEgb2JqZWN0XCJdKSwgXCIgXCIsIF9oKCdkaXYnLCB7XG4gICAgY2xhc3M6IGNvbXB1dGVkQ2xhc3NPYmplY3RcbiAgfSwgW1wiY2xhc3MgLSBjb21wdXRlZCBvYmplY3RcIl0pLCBcIiBcIiwgX2goJ2RpdicsIHtcbiAgICBjbGFzczogW2FjdGl2ZUNsYXNzLCBlcnJvckNsYXNzXVxuICB9LCBbXCJjbGFzcyBhcnJheVwiXSksIFwiIFwiLCBfaCgnZGl2Jywge1xuICAgIGNsYXNzOiBbaXNBY3RpdmUgPyBhY3RpdmVDbGFzcyA6ICcnLCBlcnJvckNsYXNzXVxuICB9LCBbXCJjbGFzcyBhcnJheSB3aXRoIHRlcm5hcnlcIl0pLCBcIiBcIiwgX2goJ2RpdicsIHtcbiAgICBjbGFzczogW3tcbiAgICAgIGFjdGl2ZTogaXNBY3RpdmVcbiAgICB9LCBlcnJvckNsYXNzXVxuICB9LCBbXCJjbGFzcyBhcnJheSB3aXRoIG9iamVjdFwiXSksIFwiIFwiLCBfaCgnZGl2Jywge1xuICAgIHN0eWxlOiAoe1xuICAgICAgY29sb3I6IGFjdGl2ZUNvbG9yLFxuICAgICAgZm9udFNpemU6IGZvbnRTaXplICsgJ3B4J1xuICAgIH0pXG4gIH0sIFtcInN0eWxlIG9iamVjdFwiXSksIFwiIFwiLCBfaCgnZGl2Jywge1xuICAgIHN0eWxlOiAoc3R5bGVPYmplY3QpXG4gIH0sIFtcInN0eWxlIC0gZGF0YSBvYmplY3RcIl0pLCBcIiBcIiwgX2goJ2RpdicsIHtcbiAgICBzdHlsZTogKGNvbXB1dGVkU3R5bGVPYmplY3QpXG4gIH0sIFtcInN0eWxlIC0gY29tcHV0ZWQgb2JqZWN0XCJdKSwgXCIgXCIsIF9oKCdkaXYnLCB7XG4gICAgc3R5bGU6IChbYmFzZVN0eWxlcywgb3ZlcnJpZGluZ1N0eWxlc10pXG4gIH0sIFtcInN0eWxlIGFycmF5XCJdKSwgXCIgXCIsIF9tKDEpXSlcbn19LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2gxJywgW1wiY2xhc3Mgc3R5bGVcIl0pXG59fSxmdW5jdGlvbiAoKXt3aXRoKHRoaXMpIHtcbiAgcmV0dXJuIF9oKCdocicpXG59fV19XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi0zNWYxODNhMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0zNWYxODNhMSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL21vZHVsZS9oZWxsby9jbGFzcy1zdHlsZS52dWVcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9pZi1zaG93LWVsc2UudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1kOWFiNTFiOCF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9pZi1zaG93LWVsc2UudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy96eXkvenl5L3dlYi1saWIvem9yby1raXQtdnVlL3NyYy9qcy9tb2R1bGUvaGVsbG8vaWYtc2hvdy1lbHNlLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZDlhYjUxYjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZDlhYjUxYjhcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBpZi1zaG93LWVsc2UudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9tb2R1bGUvaGVsbG8vaWYtc2hvdy1lbHNlLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiPlxuICAgIDxoMT5pZiBzaG93IGVsc2U8L2gxPlxuICAgIDxwIHYtaWY9XCJva1wiPm9rPC9wPlxuICAgIDxwIHYtaWY9XCJldmVuXCI+ZXZlbjwvcD5cbiAgICA8cCB2LWVsc2U+b2RkPC9wPlxuICAgIDx0ZW1wbGF0ZSB2LWlmPVwib2tcIj5cbiAgICAgIDxwPlRpdGxlPC9wPlxuICAgICAgPHA+UGFyYWdyYXBoIDE8L3A+XG4gICAgICA8cD5QYXJhZ3JhcGggMjwvcD5cbiAgICA8L3RlbXBsYXRlPlxuICAgIDxwIHYtc2hvdz1cIm9rXCI+b2s8L3A+XG4gICAgPHAgdi1zaG93PVwiZXZlblwiPmV2ZW48L3A+XG4gICAgPHAgdi1zaG93PVwiIWV2ZW5cIj5vZGQ8L3A+XG4gICAgPGhyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvazogdHJ1ZSxcbiAgICAgIGV2ZW46IGZhbHNlXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGlmLXNob3ctZWxzZS52dWU/M2RmNDRkZjdcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgbS1hLTFcIlxuICB9LCBbX20oMCksIFwiIFwiLCAob2spID8gX2goJ3AnLCBbXCJva1wiXSkgOiBfZSgpLCBcIiBcIiwgKGV2ZW4pID8gX2goJ3AnLCBbXCJldmVuXCJdKSA6IF9oKCdwJywgW1wib2RkXCJdKSwgXCIgXCIsIFwiIFwiLCAob2spID8gW19tKDEpLCBcIiBcIiwgX20oMiksIFwiIFwiLCBfbSgzKV0gOiBfZSgpLCBcIiBcIiwgX2goJ3AnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAob2spLFxuICAgICAgZXhwcmVzc2lvbjogXCJva1wiXG4gICAgfV1cbiAgfSwgW1wib2tcIl0pLCBcIiBcIiwgX2goJ3AnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoZXZlbiksXG4gICAgICBleHByZXNzaW9uOiBcImV2ZW5cIlxuICAgIH1dXG4gIH0sIFtcImV2ZW5cIl0pLCBcIiBcIiwgX2goJ3AnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgIHZhbHVlOiAoIWV2ZW4pLFxuICAgICAgZXhwcmVzc2lvbjogXCIhZXZlblwiXG4gICAgfV1cbiAgfSwgW1wib2RkXCJdKSwgXCIgXCIsIF9tKDQpXSlcbn19LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2gxJywgW1wiaWYgc2hvdyBlbHNlXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgncCcsIFtcIlRpdGxlXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgncCcsIFtcIlBhcmFncmFwaCAxXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgncCcsIFtcIlBhcmFncmFwaCAyXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnaHInKVxufX1dfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtZDlhYjUxYjhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtZDlhYjUxYjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9tb2R1bGUvaGVsbG8vaWYtc2hvdy1lbHNlLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgX192dWVfZXhwb3J0c19fLCBfX3Z1ZV9vcHRpb25zX19cblxuLyogc2NyaXB0ICovXG5fX3Z1ZV9leHBvcnRzX18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2V2ZW50LnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMzExMTQ4NDIhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZXZlbnQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy96eXkvenl5L3dlYi1saWIvem9yby1raXQtdnVlL3NyYy9qcy9tb2R1bGUvaGVsbG8vZXZlbnQudnVlXCJcbl9fdnVlX29wdGlvbnNfXy5yZW5kZXIgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnJlbmRlclxuX192dWVfb3B0aW9uc19fLnN0YXRpY1JlbmRlckZucyA9IF9fdnVlX3RlbXBsYXRlX18uc3RhdGljUmVuZGVyRm5zXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0zMTExNDg0MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMTExNDg0MlwiLCBfX3Z1ZV9vcHRpb25zX18pXG4gIH1cbn0pKCl9XG5pZiAoX192dWVfb3B0aW9uc19fLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGV2ZW50LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvbW9kdWxlL2hlbGxvL2V2ZW50LnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiPlxuICAgIDxoMT5ldmVudDwvaDE+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIEBjbGljaz1cImNvdW50ZXIrK1wiPisxPC9idXR0b24+XG4gICAgPHA+VGhlIGJ1dHRvbiBhYm92ZSBoYXMgYmVlbiBjbGlja2VkIHt7Y291bnRlcn19IHRpbWVzPC9wPlxuICAgIDxwPlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIEBjbGljaz1cImdyZWV0XCI+R3JlZXQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBAY2xpY2s9XCJzYXkoJ2hpJylcIj5TYXkgaGk8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiBAY2xpY2s9XCJzYXkoJ3doYXQnKVwiPlNheSB3aGF0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgQGNsaWNrPVwid2FybignRm9ybSBjYW5ub3QgYmUgc3VibWl0dGVkIHlldC4nLCAkZXZlbnQpXCI+U3VibWl0PC9idXR0b24+XG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmJhaWR1LmNvbVwiIEBjbGljay5wcmV2ZW50PmJhaWR1PC9hPlxuICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50LnN0b3A+PC9mb3JtPlxuICAgICAgPGRpdiBAY2xpY2suc2VsZj1cIlwiPjwvZGl2PlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJpcHRcIiBAa2V5dXAuZW50ZXI9XCJzYXkoJ2VudGVyJylcIj5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaXB0XCIgQGtleXVwLnY9XCJzYXkoJ1RoYXQgaXMgdGhlIGZpcnN0IGxldHRlciBpbiBWdWUnKVwiPlxuICAgIDwvcD5cbiAgICA8aHI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICBuYW1lOiAnenl5J1xuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGdyZWV0ICgpIHtcbiAgICAgIGFsZXJ0KGBIZWxsbyAke3RoaXMubmFtZX1gKVxuICAgIH0sXG4gICAgc2F5IChtc2cpIHtcbiAgICAgIGFsZXJ0KG1zZylcbiAgICB9LFxuICAgIHdhcm4gKG1zZywgZXZlbnQpIHtcbiAgICAgIGlmIChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICB9XG4gICAgICBhbGVydChtc2cpXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGV2ZW50LnZ1ZT81ODY3MzFiY1xuICoqLyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiXG4gIH0sIFtfbSgwKSwgXCIgXCIsIF9oKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtcIisxXCJdKSwgXCIgXCIsIF9oKCdwJywgW1wiVGhlIGJ1dHRvbiBhYm92ZSBoYXMgYmVlbiBjbGlja2VkIFwiICsgX3MoY291bnRlcikgKyBcIiB0aW1lc1wiXSksIFwiIFwiLCBfaCgncCcsIFtfaCgnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBncmVldFxuICAgIH1cbiAgfSwgW1wiR3JlZXRcIl0pLCBcIiBcIiwgX2goJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHNheSgnaGknKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW1wiU2F5IGhpXCJdKSwgXCIgXCIsIF9oKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBzYXkoJ3doYXQnKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW1wiU2F5IHdoYXRcIl0pLCBcIiBcIiwgX2goJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHdhcm4oJ0Zvcm0gY2Fubm90IGJlIHN1Ym1pdHRlZCB5ZXQuJywgJGV2ZW50KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW1wiU3VibWl0XCJdKV0pLCBcIiBcIiwgX2goJ3AnLCBbX2goJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vd3d3LmJhaWR1LmNvbVwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXCJiYWlkdVwiXSldKSwgX2goJ2Zvcm0nLCB7XG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuICAgIH1cbiAgfSksIFwiIFwiLCBfaCgnZGl2Jywge1xuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldCAhPT0gJGV2ZW50LmN1cnJlbnRUYXJnZXQpIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBcIiBcIiwgX2goJ2lucHV0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImtleXVwXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LmtleUNvZGUgIT09IDEzKSByZXR1cm47XG4gICAgICAgIHNheSgnZW50ZXInKVxuICAgICAgfVxuICAgIH1cbiAgfSksIFwiIFwiLCBfaCgnaW5wdXQnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXB0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwia2V5dXBcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQua2V5Q29kZSAhPT0gX2soXCJ2XCIpKSByZXR1cm47XG4gICAgICAgIHNheSgnVGhhdCBpcyB0aGUgZmlyc3QgbGV0dGVyIGluIFZ1ZScpXG4gICAgICB9XG4gICAgfVxuICB9KSwgXCIgXCIsIF9tKDEpLCBcIiBcIiwgX20oMildKVxufX0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnaDEnLCBbXCJldmVudFwiXSlcbn19LGZ1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ3AnKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnaHInKVxufX1dfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMzExMTQ4NDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMzExMTQ4NDIhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9tb2R1bGUvaGVsbG8vZXZlbnQudnVlXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBfX3Z1ZV9leHBvcnRzX18sIF9fdnVlX29wdGlvbnNfX1xuXG4vKiBzY3JpcHQgKi9cbl9fdnVlX2V4cG9ydHNfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vZm9ybS52dWVcIilcblxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdlNmEwMDBmIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2Zvcm0udnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy96eXkvenl5L3dlYi1saWIvem9yby1raXQtdnVlL3NyYy9qcy9tb2R1bGUvaGVsbG8vZm9ybS52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdlNmEwMDBmXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdlNmEwMDBmXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZm9ybS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL21vZHVsZS9oZWxsby9mb3JtLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiPlxuICAgIDxoMT5mb3JtPC9oMT5cbiAgICA8cD5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiaXB0XCIgdi1tb2RlbD1cIm1zZ1wiIHBsYWNlaG9sZGVyPVwiZW50ZXIgbWVzc2FnZVwiPlxuICAgICAgTWVzc2FnZSBpczoge3ttc2d9fVxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDx0ZXh0YXJlYSB2LW1vZGVsPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiZW50ZXIgdGV4dFwiPjwvdGV4dGFyZWE+XG4gICAgICA8cD5UZXh0IGlzOjwvcD5cbiAgICAgIDxwIDpzdHlsZT1cInt3aGl0ZVNwYWNlOidwcmUnfVwiPnt7dGV4dH19PC9wPlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpcHRcIiB2LW1vZGVsPVwiY2hlY2tlZFwiPiB7e2NoZWNrZWR9fTwvbGFiZWw+XG4gICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXB0XCIgdi1tb2RlbD1cImNoZWNrZWRzXCIgdmFsdWU9XCJBcHBsZVwiPiBBcHBsZTwvbGFiZWw+XG4gICAgICA8bGFiZWw+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiaXB0XCIgdi1tb2RlbD1cImNoZWNrZWRzXCIgdmFsdWU9XCJCb3lcIj4gQm95PC9sYWJlbD5cbiAgICAgIDxsYWJlbD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJpcHRcIiB2LW1vZGVsPVwiY2hlY2tlZHNcIiB2YWx1ZT1cIkNhdFwiPiBDYXQ8L2xhYmVsPlxuICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImlwdFwiIHYtbW9kZWw9XCJjaGVja2Vkc1wiIHZhbHVlPVwiRG9nXCI+IERvZzwvbGFiZWw+XG4gICAgICBjaGVja2VkcyBpczoge3tjaGVja2Vkc319XG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImlwdFwiIHYtbW9kZWw9XCJwaWNrZWRcIiB2YWx1ZT1cIm9uZVwiPiBvbmU8L2xhYmVsPlxuICAgICAgPGxhYmVsPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImlwdFwiIHYtbW9kZWw9XCJwaWNrZWRcIiB2YWx1ZT1cInR3b1wiPiB0d288L2xhYmVsPlxuICAgICAgcGlja2VkIGlzOiB7e3BpY2tlZH19XG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgPHNlbGVjdCB2LW1vZGVsPVwic2VsZWN0ZWRcIj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImFcIj5hPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJiXCI+Yjwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYlwiPmM8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2LWZvcj1cIm9wdGlvbiBpbiBvcHRpb25zXCIgOnZhbHVlPVwib3B0aW9uLnZhbHVlXCI+e3tvcHRpb24udGV4dH19PC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICAgIHNlbGVjdGVkIGlzOiB7e3NlbGVjdGVkfX1cbiAgICAgIDxzZWxlY3Qgdi1tb2RlbD1cInNlbGVjdGVkc1wiIG11bHRpcGxlPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiYVwiPmE8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImJcIj5iPC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJjXCI+Yzwvb3B0aW9uPlxuICAgICAgPC9zZWxlY3Q+XG4gICAgICBzZWxlY3RlZHMgaXM6IHt7c2VsZWN0ZWRzfX1cbiAgICA8L3A+XG4gICAgPGhyPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBtc2c6ICcnLFxuICAgICAgdGV4dDogJycsXG4gICAgICBjaGVja2VkOiBmYWxzZSxcbiAgICAgIGNoZWNrZWRzOiBbXSxcbiAgICAgIHBpY2tlZDogJycsXG4gICAgICBzZWxlY3RlZDogJycsXG4gICAgICBvcHRpb25zOiBbXG4gICAgICAgIHt0ZXh0OiAnb25lJywgdmFsdWU6IDF9LFxuICAgICAgICB7dGV4dDogJ3R3bycsIHZhbHVlOiAyfSxcbiAgICAgICAge3RleHQ6ICd0aHJlZScsIHZhbHVlOiAzfVxuICAgICAgXSxcbiAgICAgIHNlbGVjdGVkczogW11cbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZm9ybS52dWU/NzcwOTVhN2VcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXItZmx1aWQgbS1hLTFcIlxuICB9LCBbX20oMCksIFwiIFwiLCBfaCgncCcsIFtfaCgnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChtc2cpLFxuICAgICAgZXhwcmVzc2lvbjogXCJtc2dcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiZW50ZXIgbWVzc2FnZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiBfcyhtc2cpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSByZXR1cm47XG4gICAgICAgIG1zZyA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBcIlxcbiAgICBNZXNzYWdlIGlzOiBcIiArIF9zKG1zZykgKyBcIlxcbiAgXCJdKSwgXCIgXCIsIF9oKCdwJywgW19oKCd0ZXh0YXJlYScsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKHRleHQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJ0ZXh0XCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcImVudGVyIHRleHRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogX3ModGV4dClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHJldHVybjtcbiAgICAgICAgdGV4dCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pXSksIF9tKDEpLCBcIiBcIiwgX2goJ3AnLCB7XG4gICAgc3R5bGU6ICh7XG4gICAgICB3aGl0ZVNwYWNlOiAncHJlJ1xuICAgIH0pXG4gIH0sIFtfcyh0ZXh0KV0pLCBcIiBcIiwgX20oMiksIFwiIFwiLCBfaCgncCcsIFtfaCgnbGFiZWwnLCBbX2goJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoY2hlY2tlZCksXG4gICAgICBleHByZXNzaW9uOiBcImNoZWNrZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoY2hlY2tlZCkgPyBfaShjaGVja2VkLCBudWxsKSA+IC0xIDogX3EoY2hlY2tlZCwgdHJ1ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IGNoZWNrZWQsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgJCRpID0gX2koJCRhLCAkJHYpO1xuICAgICAgICAgIGlmICgkJGMpIHtcbiAgICAgICAgICAgICQkaSA8IDAgJiYgKGNoZWNrZWQgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChjaGVja2VkID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrZWQgPSAkJGNcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSksIFwiIFwiICsgX3MoY2hlY2tlZCldKSwgXCIgXCIsIF9oKCdsYWJlbCcsIFtfaCgnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChjaGVja2VkcyksXG4gICAgICBleHByZXNzaW9uOiBcImNoZWNrZWRzXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJpcHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiY2hlY2tib3hcIixcbiAgICAgIFwidmFsdWVcIjogXCJBcHBsZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoY2hlY2tlZHMpID8gX2koY2hlY2tlZHMsIFwiQXBwbGVcIikgPiAtMSA6IF9xKGNoZWNrZWRzLCB0cnVlKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICB2YXIgJCRhID0gY2hlY2tlZHMsXG4gICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgJCRjID0gJCRlbC5jaGVja2VkID8gKHRydWUpIDogKGZhbHNlKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgIHZhciAkJHYgPSBcIkFwcGxlXCIsXG4gICAgICAgICAgICAkJGkgPSBfaSgkJGEsICQkdik7XG4gICAgICAgICAgaWYgKCQkYykge1xuICAgICAgICAgICAgJCRpIDwgMCAmJiAoY2hlY2tlZHMgPSAkJGEuY29uY2F0KCQkdikpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQkaSA+IC0xICYmIChjaGVja2VkcyA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVja2VkcyA9ICQkY1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KSwgXCIgQXBwbGVcIl0pLCBcIiBcIiwgX2goJ2xhYmVsJywgW19oKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKGNoZWNrZWRzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZHNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIkJveVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoY2hlY2tlZHMpID8gX2koY2hlY2tlZHMsIFwiQm95XCIpID4gLTEgOiBfcShjaGVja2VkcywgdHJ1ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IGNoZWNrZWRzLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gXCJCb3lcIixcbiAgICAgICAgICAgICQkaSA9IF9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChjaGVja2VkcyA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKGNoZWNrZWRzID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrZWRzID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBcIiBCb3lcIl0pLCBcIiBcIiwgX2goJ2xhYmVsJywgW19oKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKGNoZWNrZWRzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZHNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIkNhdFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoY2hlY2tlZHMpID8gX2koY2hlY2tlZHMsIFwiQ2F0XCIpID4gLTEgOiBfcShjaGVja2VkcywgdHJ1ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IGNoZWNrZWRzLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gXCJDYXRcIixcbiAgICAgICAgICAgICQkaSA9IF9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChjaGVja2VkcyA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKGNoZWNrZWRzID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrZWRzID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBcIiBDYXRcIl0pLCBcIiBcIiwgX2goJ2xhYmVsJywgW19oKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKGNoZWNrZWRzKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZHNcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJjaGVja2JveFwiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIkRvZ1wiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IEFycmF5LmlzQXJyYXkoY2hlY2tlZHMpID8gX2koY2hlY2tlZHMsIFwiRG9nXCIpID4gLTEgOiBfcShjaGVja2VkcywgdHJ1ZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgdmFyICQkYSA9IGNoZWNrZWRzLFxuICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/ICh0cnVlKSA6IChmYWxzZSk7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICB2YXIgJCR2ID0gXCJEb2dcIixcbiAgICAgICAgICAgICQkaSA9IF9pKCQkYSwgJCR2KTtcbiAgICAgICAgICBpZiAoJCRjKSB7XG4gICAgICAgICAgICAkJGkgPCAwICYmIChjaGVja2VkcyA9ICQkYS5jb25jYXQoJCR2KSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCRpID4gLTEgJiYgKGNoZWNrZWRzID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrZWRzID0gJCRjXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pLCBcIiBEb2dcIl0pLCBcIlxcbiAgICBjaGVja2VkcyBpczogXCIgKyBfcyhjaGVja2VkcykgKyBcIlxcbiAgXCJdKSwgXCIgXCIsIF9oKCdwJywgW19oKCdsYWJlbCcsIFtfaCgnaW5wdXQnLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgdmFsdWU6IChwaWNrZWQpLFxuICAgICAgZXhwcmVzc2lvbjogXCJwaWNrZWRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImlwdFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJyYWRpb1wiLFxuICAgICAgXCJ2YWx1ZVwiOiBcIm9uZVwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJjaGVja2VkXCI6IF9xKHBpY2tlZCwgXCJvbmVcIilcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgcGlja2VkID0gXCJvbmVcIlxuICAgICAgfVxuICAgIH1cbiAgfSksIFwiIG9uZVwiXSksIFwiIFwiLCBfaCgnbGFiZWwnLCBbX2goJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAocGlja2VkKSxcbiAgICAgIGV4cHJlc3Npb246IFwicGlja2VkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJpcHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicmFkaW9cIixcbiAgICAgIFwidmFsdWVcIjogXCJ0d29cIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwiY2hlY2tlZFwiOiBfcShwaWNrZWQsIFwidHdvXCIpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHBpY2tlZCA9IFwidHdvXCJcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBcIiB0d29cIl0pLCBcIlxcbiAgICBwaWNrZWQgaXM6IFwiICsgX3MocGlja2VkKSArIFwiXFxuICBcIl0pLCBcIiBcIiwgX2goJ3AnLCBbX2goJ3NlbGVjdCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKHNlbGVjdGVkKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgIH1dLFxuICAgIG9uOiB7XG4gICAgICBcImNoYW5nZVwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgc2VsZWN0ZWQgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoJGV2ZW50LnRhcmdldC5vcHRpb25zLCBmdW5jdGlvbihvKSB7XG4gICAgICAgICAgcmV0dXJuIG8uc2VsZWN0ZWRcbiAgICAgICAgfSkubWFwKGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gXCJfdmFsdWVcIiBpbiBvID8gby5fdmFsdWUgOiBvLnZhbHVlXG4gICAgICAgIH0pWzBdXG4gICAgICB9XG4gICAgfVxuICB9LCBbX20oMyksIFwiIFwiLCBfbSg0KSwgXCIgXCIsIF9tKDUpLCBcIiBcIiwgX2woKG9wdGlvbnMpLCBmdW5jdGlvbihvcHRpb24pIHtcbiAgICByZXR1cm4gX2goJ29wdGlvbicsIHtcbiAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgIFwidmFsdWVcIjogb3B0aW9uLnZhbHVlXG4gICAgICB9XG4gICAgfSwgW19zKG9wdGlvbi50ZXh0KV0pXG4gIH0pXSksIFwiXFxuICAgIHNlbGVjdGVkIGlzOiBcIiArIF9zKHNlbGVjdGVkKSArIFwiXFxuICAgIFwiLCBfaCgnc2VsZWN0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoc2VsZWN0ZWRzKSxcbiAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRzXCJcbiAgICB9XSxcbiAgICBhdHRyczoge1xuICAgICAgXCJtdWx0aXBsZVwiOiBcIlwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIHNlbGVjdGVkcyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCgkZXZlbnQudGFyZ2V0Lm9wdGlvbnMsIGZ1bmN0aW9uKG8pIHtcbiAgICAgICAgICByZXR1cm4gby5zZWxlY3RlZFxuICAgICAgICB9KS5tYXAoZnVuY3Rpb24obykge1xuICAgICAgICAgIHJldHVybiBcIl92YWx1ZVwiIGluIG8gPyBvLl92YWx1ZSA6IG8udmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfbSg2KSwgXCIgXCIsIF9tKDcpLCBcIiBcIiwgX20oOCldKSwgXCJcXG4gICAgc2VsZWN0ZWRzIGlzOiBcIiArIF9zKHNlbGVjdGVkcykgKyBcIlxcbiAgXCJdKSwgXCIgXCIsIF9tKDkpXSlcbn19LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ2gxJywgW1wiZm9ybVwiXSlcbn19LGZ1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ3AnLCBbXCJUZXh0IGlzOlwiXSlcbn19LGZ1bmN0aW9uICgpe3dpdGgodGhpcykge1xuICByZXR1cm4gX2goJ3AnKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYVwiXG4gICAgfVxuICB9LCBbXCJhXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYlwiXG4gICAgfVxuICB9LCBbXCJiXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYlwiXG4gICAgfVxuICB9LCBbXCJjXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYVwiXG4gICAgfVxuICB9LCBbXCJhXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiYlwiXG4gICAgfVxuICB9LCBbXCJiXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnb3B0aW9uJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInZhbHVlXCI6IFwiY1wiXG4gICAgfVxuICB9LCBbXCJjXCJdKVxufX0sZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnaHInKVxufX1dfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtN2U2YTAwMGZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2U2YTAwMGYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9tb2R1bGUvaGVsbG8vZm9ybS52dWVcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9teS1jb21wb25lbnQudnVlXCIpXG5cbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi01YTM5NjU1MyF2dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9teS1jb21wb25lbnQudnVlXCIpXG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18gfHwge31cbmlmIChcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcIm9iamVjdFwiIHx8XG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJmdW5jdGlvblwiXG4pIHtcbmlmIChPYmplY3Qua2V5cyhfX3Z1ZV9leHBvcnRzX18pLnNvbWUoZnVuY3Rpb24gKGtleSkgeyByZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwiIH0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fLmRlZmF1bHRcbn1cbmlmICh0eXBlb2YgX192dWVfb3B0aW9uc19fID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgX192dWVfb3B0aW9uc19fID0gX192dWVfb3B0aW9uc19fLm9wdGlvbnNcbn1cbl9fdnVlX29wdGlvbnNfXy5fX2ZpbGUgPSBcIi9Vc2Vycy96eXkvenl5L3dlYi1saWIvem9yby1raXQtdnVlL3NyYy9qcy9jb21wb25lbnQvbXktY29tcG9uZW50LnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWEzOTY1NTNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNWEzOTY1NTNcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBteS1jb21wb25lbnQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgYW5kIHNob3VsZCBiZSBkZWZpbmVkIGluIHBsYWluIGpzIGZpbGVzIHVzaW5nIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9fdnVlX2V4cG9ydHNfX1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYy9qcy9jb21wb25lbnQvbXktY29tcG9uZW50LnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8dGVtcGxhdGUgbGFuZz1cImh0bWxcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiPlxuICAgIDxoMT5Db21wb25lbnQ8L2gxPlxuICAgIEEgY3VzdG9tIGNvbXBvbmVudCFcbiAgICA8aHI+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogbXktY29tcG9uZW50LnZ1ZT80MzQ1NjRmZVxuICoqLyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfbSgwKVxufX0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lci1mbHVpZCBtLWEtMVwiXG4gIH0sIFtfaCgnaDEnLCBbXCJDb21wb25lbnRcIl0pLCBcIlxcbiAgQSBjdXN0b20gY29tcG9uZW50IVxcbiAgXCIsIF9oKCdocicpXSlcbn19XX1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpLnJlcmVuZGVyKFwiZGF0YS12LTVhMzk2NTUzXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTVhMzk2NTUzIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zcmMvanMvY29tcG9uZW50L215LWNvbXBvbmVudC52dWVcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jb3VudGVyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjhkMzA4OTUhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY291bnRlci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL3p5eS96eXkvd2ViLWxpYi96b3JvLWtpdC12dWUvc3JjL2pzL2NvbXBvbmVudC9jb3VudGVyLnZ1ZVwiXG5fX3Z1ZV9vcHRpb25zX18ucmVuZGVyID0gX192dWVfdGVtcGxhdGVfXy5yZW5kZXJcbl9fdnVlX29wdGlvbnNfXy5zdGF0aWNSZW5kZXJGbnMgPSBfX3Z1ZV90ZW1wbGF0ZV9fLnN0YXRpY1JlbmRlckZuc1xuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjhkMzA4OTVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjhkMzA4OTVcIiwgX192dWVfb3B0aW9uc19fKVxuICB9XG59KSgpfVxuaWYgKF9fdnVlX29wdGlvbnNfXy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjb3VudGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIGFuZCBzaG91bGQgYmUgZGVmaW5lZCBpbiBwbGFpbiBqcyBmaWxlcyB1c2luZyByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBfX3Z1ZV9leHBvcnRzX19cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvY29tcG9uZW50L2NvdW50ZXIudnVlXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIjx0ZW1wbGF0ZSBsYW5nPVwiaHRtbFwiPlxuICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5XCIgQGNsaWNrPVwiY291bnRlcisrXCI+e3tjb3VudGVyfX08L2J1dHRvbj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGEgKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjb3VudGVyOiAwXG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGNvdW50ZXIudnVlP2YwNmY4YmUwXG4gKiovIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt3aXRoKHRoaXMpIHtcbiAgcmV0dXJuIF9oKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBjb3VudGVyKytcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfcyhjb3VudGVyKV0pXG59fSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikucmVyZW5kZXIoXCJkYXRhLXYtMjhkMzA4OTVcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjhkMzA4OTUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3NyYy9qcy9jb21wb25lbnQvY291bnRlci52dWVcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9hbmNob3JlZC1oZWFkaW5nLnZ1ZVwiKVxuX192dWVfb3B0aW9uc19fID0gX192dWVfZXhwb3J0c19fID0gX192dWVfZXhwb3J0c19fIHx8IHt9XG5pZiAoXG4gIHR5cGVvZiBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdCA9PT0gXCJvYmplY3RcIiB8fFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwiZnVuY3Rpb25cIlxuKSB7XG5pZiAoT2JqZWN0LmtleXMoX192dWVfZXhwb3J0c19fKS5zb21lKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIiB9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0XG59XG5pZiAodHlwZW9mIF9fdnVlX29wdGlvbnNfXyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gIF9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX29wdGlvbnNfXy5vcHRpb25zXG59XG5fX3Z1ZV9vcHRpb25zX18uX19maWxlID0gXCIvVXNlcnMvenl5L3p5eS93ZWItbGliL3pvcm8ta2l0LXZ1ZS9zcmMvanMvY29tcG9uZW50L2FuY2hvcmVkLWhlYWRpbmcudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWEwNGU4NzAwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWEwNGU4NzAwXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gYW5jaG9yZWQtaGVhZGluZy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL2NvbXBvbmVudC9hbmNob3JlZC1oZWFkaW5nLnZ1ZVxuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCI8c2NyaXB0PlxuY29uc3QgZ2V0Q2hpbGRyZW5UZXh0Q29udGVudCA9IGZ1bmN0aW9uIChjaGlsZHJlbikge1xuICByZXR1cm4gY2hpbGRyZW4ubWFwKG5vZGUgPT4ge1xuICAgIHJldHVybiBub2RlLmNoaWxkcmVuXG4gICAgICA/IGdldENoaWxkcmVuVGV4dENvbnRlbnQobm9kZS5jaGlsZHJlbilcbiAgICAgIDogbm9kZS50ZXh0XG4gIH0pLmpvaW4oJycpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcmVuZGVyIChoKSB7XG4gICAgY29uc3QgdGFnTmFtZSA9ICdoJyArIHRoaXMubGV2ZWxcbiAgICBjb25zdCBoZWFkaW5nSWQgPSBnZXRDaGlsZHJlblRleHRDb250ZW50KHRoaXMuJHNsb3RzLmRlZmF1bHQpXG4gICAgICAudG9Mb3dlckNhc2UoKVxuICAgICAgLnJlcGxhY2UoL1xcVy9nLCAnLScpXG4gICAgICAucmVwbGFjZSgvKF4tfC0kKS9nLCAnJylcbiAgICByZXR1cm4gaChcbiAgICAgIHRhZ05hbWUsXG4gICAgICB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IGhlYWRpbmdJZFxuICAgICAgICB9LFxuICAgICAgICBjbGFzczogWydjb250YWluZXItZmx1aWQnLCAnbS1hLTEnXVxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgKFxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBuYW1lPXtoZWFkaW5nSWR9XG4gICAgICAgICAgICBocmVmPXsnIycgKyBoZWFkaW5nSWR9PlxuICAgICAgICAgICAge3RoaXMuJHNsb3RzLmRlZmF1bHR9XG4gICAgICAgICAgPC9hPlxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICB9LFxuICBwcm9wczoge1xuICAgIGxldmVsOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICByZXF1aXJlZDogdHJ1ZVxuICAgIH1cbiAgfSxcbiAgZGF0YSAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYW5jaG9yZWQtaGVhZGluZy52dWU/NjIyZTRmZTBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9