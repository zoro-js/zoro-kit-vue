webpackJsonp([2],{

/***/ 0:
/*!**************************************!*\
  !*** ./src/js/entry/vuex/counter.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue) {'use strict';
	
	var _Counter = __webpack_require__(/*! module/vuex/counter/Counter */ 42);
	
	var _Counter2 = _interopRequireDefault(_Counter);
	
	var _store = __webpack_require__(/*! module/vuex/counter/store */ 46);
	
	var _store2 = _interopRequireDefault(_store);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	new Vue({
	  store: _store2['default'],
	  render: function render(h) {
	    return h(_Counter2['default']);
	  }
	}).$mount('#app');
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! vue */ 1)))

/***/ },

/***/ 42:
/*!************************************************!*\
  !*** ./src/js/module/vuex/counter/Counter.vue ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	
	/* script */
	__vue_exports__ = __webpack_require__(/*! !babel-loader!vue-loader/lib/selector?type=script&index=0!./Counter.vue */ 43)
	
	/* template */
	var __vue_template__ = __webpack_require__(/*! !vue-loader/lib/template-compiler?id=data-v-dae228cc!vue-loader/lib/selector?type=template&index=0!./Counter.vue */ 45)
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
	__vue_options__.__file = "/Users/zyy/zyy/web-lib/zoro-kit-vue/src/js/module/vuex/counter/Counter.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	
	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dae228cc", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-dae228cc", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] Counter.vue: functional components are not supported and should be defined in plain js files using render functions.")}
	
	module.exports = __vue_exports__


/***/ },

/***/ 43:
/*!********************************************************************************************************************!*\
  !*** ./~/babel-loader!./~/vue-loader/lib/selector.js?type=script&index=0!./src/js/module/vuex/counter/Counter.vue ***!
  \********************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _vuex = __webpack_require__(/*! vuex */ 44);
	
	exports['default'] = {
	  name: 'Counter',
	  computed: (0, _vuex.mapGetters)(['evenOrOdd']),
	  methods: (0, _vuex.mapActions)(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = exports['default'];

/***/ },

/***/ 44:
/*!*****************************!*\
  !*** ./~/vuex/dist/vuex.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/**
	 * vuex v2.0.0
	 * (c) 2016 Evan You
	 * @license MIT
	 */
	(function (global, factory) {
	   true ? module.exports = factory() :
	  typeof define === 'function' && define.amd ? define(factory) :
	  (global.Vuex = factory());
	}(this, (function () { 'use strict';
	
	var devtoolHook =
	  typeof window !== 'undefined' &&
	  window.__VUE_DEVTOOLS_GLOBAL_HOOK__
	
	function devtoolPlugin (store) {
	  if (!devtoolHook) { return }
	
	  store._devtoolHook = devtoolHook
	
	  devtoolHook.emit('vuex:init', store)
	
	  devtoolHook.on('vuex:travel-to-state', function (targetState) {
	    store.replaceState(targetState)
	  })
	
	  store.subscribe(function (mutation, state) {
	    devtoolHook.emit('vuex:mutation', mutation, state)
	  })
	}
	
	function applyMixin (Vue) {
	  var version = Number(Vue.version.split('.')[0])
	
	  if (version >= 2) {
	    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1
	    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit })
	  } else {
	    // override init and inject vuex init procedure
	    // for 1.x backwards compatibility.
	    var _init = Vue.prototype._init
	    Vue.prototype._init = function (options) {
	      if ( options === void 0 ) options = {};
	
	      options.init = options.init
	        ? [vuexInit].concat(options.init)
	        : vuexInit
	      _init.call(this, options)
	    }
	  }
	
	  /**
	   * Vuex init hook, injected into each instances init hooks list.
	   */
	
	  function vuexInit () {
	    var options = this.$options
	    // store injection
	    if (options.store) {
	      this.$store = options.store
	    } else if (options.parent && options.parent.$store) {
	      this.$store = options.parent.$store
	    }
	  }
	}
	
	function mapState (states) {
	  var res = {}
	  normalizeMap(states).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    res[key] = function mappedState () {
	      return typeof val === 'function'
	        ? val.call(this, this.$store.state, this.$store.getters)
	        : this.$store.state[val]
	    }
	  })
	  return res
	}
	
	function mapMutations (mutations) {
	  var res = {}
	  normalizeMap(mutations).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    res[key] = function mappedMutation () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	      return this.$store.commit.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	}
	
	function mapGetters (getters) {
	  var res = {}
	  normalizeMap(getters).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    res[key] = function mappedGetter () {
	      if (!(val in this.$store.getters)) {
	        console.error(("[vuex] unknown getter: " + val))
	      }
	      return this.$store.getters[val]
	    }
	  })
	  return res
	}
	
	function mapActions (actions) {
	  var res = {}
	  normalizeMap(actions).forEach(function (ref) {
	    var key = ref.key;
	    var val = ref.val;
	
	    res[key] = function mappedAction () {
	      var args = [], len = arguments.length;
	      while ( len-- ) args[ len ] = arguments[ len ];
	
	      return this.$store.dispatch.apply(this.$store, [val].concat(args))
	    }
	  })
	  return res
	}
	
	function normalizeMap (map) {
	  return Array.isArray(map)
	    ? map.map(function (key) { return ({ key: key, val: key }); })
	    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
	}
	
	function isObject (obj) {
	  return obj !== null && typeof obj === 'object'
	}
	
	function isPromise (val) {
	  return val && typeof val.then === 'function'
	}
	
	function assert (condition, msg) {
	  if (!condition) { throw new Error(("[vuex] " + msg)) }
	}
	
	var Vue // bind on install
	
	var Store = function Store (options) {
	  var this$1 = this;
	  if ( options === void 0 ) options = {};
	
	  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.")
	  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.")
	
	  var state = options.state; if ( state === void 0 ) state = {};
	  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
	  var strict = options.strict; if ( strict === void 0 ) strict = false;
	
	  // store internal state
	  this._options = options
	  this._committing = false
	  this._actions = Object.create(null)
	  this._mutations = Object.create(null)
	  this._wrappedGetters = Object.create(null)
	  this._runtimeModules = Object.create(null)
	  this._subscribers = []
	  this._watcherVM = new Vue()
	
	    // bind commit and dispatch to self
	  var store = this
	  var ref = this;
	  var dispatch = ref.dispatch;
	  var commit = ref.commit;
	  this.dispatch = function boundDispatch (type, payload) {
	    return dispatch.call(store, type, payload)
	    }
	    this.commit = function boundCommit (type, payload, options) {
	    return commit.call(store, type, payload, options)
	  }
	
	  // strict mode
	  this.strict = strict
	
	  // init root module.
	  // this also recursively registers all sub-modules
	  // and collects all module getters inside this._wrappedGetters
	  installModule(this, state, [], options)
	
	  // initialize the store vm, which is responsible for the reactivity
	  // (also registers _wrappedGetters as computed properties)
	  resetStoreVM(this, state)
	
	  // apply plugins
	  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); })
	};
	
	var prototypeAccessors = { state: {} };
	
	prototypeAccessors.state.get = function () {
	  return this._vm.state
	};
	
	prototypeAccessors.state.set = function (v) {
	  assert(false, "Use store.replaceState() to explicit replace store state.")
	};
	
	Store.prototype.commit = function commit (type, payload, options) {
	    var this$1 = this;
	
	  // check object-style commit
	  if (isObject(type) && type.type) {
	    options = payload
	    payload = type
	    type = type.type
	  }
	  var mutation = { type: type, payload: payload }
	  var entry = this._mutations[type]
	  if (!entry) {
	    console.error(("[vuex] unknown mutation type: " + type))
	    return
	  }
	  this._withCommit(function () {
	    entry.forEach(function commitIterator (handler) {
	      handler(payload)
	    })
	  })
	  if (!options || !options.silent) {
	    this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); })
	  }
	};
	
	Store.prototype.dispatch = function dispatch (type, payload) {
	  // check object-style dispatch
	  if (isObject(type) && type.type) {
	    payload = type
	    type = type.type
	  }
	  var entry = this._actions[type]
	  if (!entry) {
	    console.error(("[vuex] unknown action type: " + type))
	    return
	  }
	  return entry.length > 1
	    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
	    : entry[0](payload)
	};
	
	Store.prototype.subscribe = function subscribe (fn) {
	  var subs = this._subscribers
	  if (subs.indexOf(fn) < 0) {
	    subs.push(fn)
	  }
	  return function () {
	    var i = subs.indexOf(fn)
	    if (i > -1) {
	      subs.splice(i, 1)
	    }
	  }
	};
	
	Store.prototype.watch = function watch (getter, cb, options) {
	    var this$1 = this;
	
	  assert(typeof getter === 'function', "store.watch only accepts a function.")
	  return this._watcherVM.$watch(function () { return getter(this$1.state); }, cb, options)
	};
	
	Store.prototype.replaceState = function replaceState (state) {
	    var this$1 = this;
	
	  this._withCommit(function () {
	    this$1._vm.state = state
	  })
	};
	
	Store.prototype.registerModule = function registerModule (path, module) {
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	  this._runtimeModules[path.join('.')] = module
	  installModule(this, this.state, path, module)
	  // reset store to update getters...
	  resetStoreVM(this, this.state)
	};
	
	Store.prototype.unregisterModule = function unregisterModule (path) {
	    var this$1 = this;
	
	  if (typeof path === 'string') { path = [path] }
	  assert(Array.isArray(path), "module path must be a string or an Array.")
	    delete this._runtimeModules[path.join('.')]
	  this._withCommit(function () {
	    var parentState = getNestedState(this$1.state, path.slice(0, -1))
	    Vue.delete(parentState, path[path.length - 1])
	  })
	  resetStore(this)
	};
	
	Store.prototype.hotUpdate = function hotUpdate (newOptions) {
	  updateModule(this._options, newOptions)
	  resetStore(this)
	};
	
	Store.prototype._withCommit = function _withCommit (fn) {
	  var committing = this._committing
	  this._committing = true
	  fn()
	  this._committing = committing
	};
	
	Object.defineProperties( Store.prototype, prototypeAccessors );
	
	function updateModule (targetModule, newModule) {
	  if (newModule.actions) {
	    targetModule.actions = newModule.actions
	  }
	  if (newModule.mutations) {
	    targetModule.mutations = newModule.mutations
	  }
	  if (newModule.getters) {
	    targetModule.getters = newModule.getters
	  }
	  if (newModule.modules) {
	    for (var key in newModule.modules) {
	      if (!(targetModule.modules && targetModule.modules[key])) {
	        console.warn(
	          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
	          'manual reload is needed'
	        )
	        return
	      }
	      updateModule(targetModule.modules[key], newModule.modules[key])
	    }
	  }
	}
	
	function resetStore (store) {
	  store._actions = Object.create(null)
	  store._mutations = Object.create(null)
	  store._wrappedGetters = Object.create(null)
	  var state = store.state
	  // init root module
	  installModule(store, state, [], store._options, true)
	  // init all runtime modules
	  Object.keys(store._runtimeModules).forEach(function (key) {
	    installModule(store, state, key.split('.'), store._runtimeModules[key], true)
	  })
	  // reset vm
	  resetStoreVM(store, state)
	}
	
	function resetStoreVM (store, state) {
	  var oldVm = store._vm
	
	  // bind store public getters
	  store.getters = {}
	  var wrappedGetters = store._wrappedGetters
	  var computed = {}
	  Object.keys(wrappedGetters).forEach(function (key) {
	    var fn = wrappedGetters[key]
	    // use computed to leverage its lazy-caching mechanism
	    computed[key] = function () { return fn(store); }
	    Object.defineProperty(store.getters, key, {
	      get: function () { return store._vm[key]; }
	    })
	  })
	
	  // use a Vue instance to store the state tree
	  // suppress warnings just in case the user has added
	  // some funky global mixins
	  var silent = Vue.config.silent
	  Vue.config.silent = true
	  store._vm = new Vue({
	    data: { state: state },
	    computed: computed
	  })
	  Vue.config.silent = silent
	
	  // enable strict mode for new vm
	  if (store.strict) {
	    enableStrictMode(store)
	  }
	
	  if (oldVm) {
	    // dispatch changes in all subscribed watchers
	    // to force getter re-evaluation.
	    store._withCommit(function () {
	      oldVm.state = null
	    })
	    Vue.nextTick(function () { return oldVm.$destroy(); })
	  }
	}
	
	function installModule (store, rootState, path, module, hot) {
	  var isRoot = !path.length
	  var state = module.state;
	  var actions = module.actions;
	  var mutations = module.mutations;
	  var getters = module.getters;
	  var modules = module.modules;
	
	  // set state
	  if (!isRoot && !hot) {
	    var parentState = getNestedState(rootState, path.slice(0, -1))
	    var moduleName = path[path.length - 1]
	    store._withCommit(function () {
	      Vue.set(parentState, moduleName, state || {})
	    })
	  }
	
	  if (mutations) {
	    Object.keys(mutations).forEach(function (key) {
	      registerMutation(store, key, mutations[key], path)
	    })
	  }
	
	  if (actions) {
	    Object.keys(actions).forEach(function (key) {
	      registerAction(store, key, actions[key], path)
	    })
	  }
	
	  if (getters) {
	    wrapGetters(store, getters, path)
	  }
	
	  if (modules) {
	    Object.keys(modules).forEach(function (key) {
	      installModule(store, rootState, path.concat(key), modules[key], hot)
	    })
	  }
	}
	
	function registerMutation (store, type, handler, path) {
	  if ( path === void 0 ) path = [];
	
	  var entry = store._mutations[type] || (store._mutations[type] = [])
	  entry.push(function wrappedMutationHandler (payload) {
	    handler(getNestedState(store.state, path), payload)
	  })
	}
	
	function registerAction (store, type, handler, path) {
	  if ( path === void 0 ) path = [];
	
	  var entry = store._actions[type] || (store._actions[type] = [])
	  var dispatch = store.dispatch;
	  var commit = store.commit;
	  entry.push(function wrappedActionHandler (payload, cb) {
	    var res = handler({
	      dispatch: dispatch,
	      commit: commit,
	      getters: store.getters,
	      state: getNestedState(store.state, path),
	      rootState: store.state
	    }, payload, cb)
	    if (!isPromise(res)) {
	      res = Promise.resolve(res)
	    }
	    if (store._devtoolHook) {
	      return res.catch(function (err) {
	        store._devtoolHook.emit('vuex:error', err)
	        throw err
	      })
	    } else {
	      return res
	    }
	  })
	}
	
	function wrapGetters (store, moduleGetters, modulePath) {
	  Object.keys(moduleGetters).forEach(function (getterKey) {
	    var rawGetter = moduleGetters[getterKey]
	    if (store._wrappedGetters[getterKey]) {
	      console.error(("[vuex] duplicate getter key: " + getterKey))
	      return
	    }
	    store._wrappedGetters[getterKey] = function wrappedGetter (store) {
	      return rawGetter(
	        getNestedState(store.state, modulePath), // local state
	        store.getters, // getters
	        store.state // root state
	      )
	    }
	  })
	}
	
	function enableStrictMode (store) {
	  store._vm.$watch('state', function () {
	    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.")
	  }, { deep: true, sync: true })
	}
	
	function getNestedState (state, path) {
	  return path.length
	    ? path.reduce(function (state, key) { return state[key]; }, state)
	    : state
	}
	
	function install (_Vue) {
	  if (Vue) {
	    console.error(
	      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
	    )
	    return
	  }
	  Vue = _Vue
	  applyMixin(Vue)
	}
	
	// auto install in dist mode
	if (typeof window !== 'undefined' && window.Vue) {
	  install(window.Vue)
	}
	
	var index = {
	  Store: Store,
	  install: install,
	  mapState: mapState,
	  mapMutations: mapMutations,
	  mapGetters: mapGetters,
	  mapActions: mapActions
	}
	
	return index;
	
	})));

/***/ },

/***/ 45:
/*!****************************************************************************************************************************************************************!*\
  !*** ./~/vue-loader/lib/template-compiler.js?id=data-v-dae228cc!./~/vue-loader/lib/selector.js?type=template&index=0!./src/js/module/vuex/counter/Counter.vue ***!
  \****************************************************************************************************************************************************************/
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, ["\n  Clicked: " + _s($store.state.count) + " times, count is " + _s(evenOrOdd) + "\n  ", _h('button', {
	    staticClass: "btn",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": increment
	    }
	  }, ["+"]), " ", _h('button', {
	    staticClass: "btn",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": decrement
	    }
	  }, ["-"]), " ", _h('button', {
	    staticClass: "btn",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": incrementIfOdd
	    }
	  }, ["increment if odd"]), " ", _h('button', {
	    staticClass: "btn",
	    attrs: {
	      "type": "button"
	    },
	    on: {
	      "click": incrementAsync
	    }
	  }, [" increment async"])])
	}},staticRenderFns: []}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-dae228cc", module.exports)
	  }
	}

/***/ },

/***/ 46:
/*!*********************************************!*\
  !*** ./src/js/module/vuex/counter/store.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Vue, Vuex) {'use strict';
	
	exports.__esModule = true;
	Vue.use(Vuex);
	
	var state = {
	  count: 0
	};
	
	var mutations = {
	  increment: function increment(state) {
	    state.count++;
	  },
	  decrement: function decrement(state) {
	    state.count--;
	  }
	};
	
	var actions = {
	  increment: function increment(_ref) {
	    var commit = _ref.commit;
	    return commit('increment');
	  },
	  decrement: function decrement(_ref2) {
	    var commit = _ref2.commit;
	    return commit('decrement');
	  },
	  incrementIfOdd: function incrementIfOdd(_ref3) {
	    var commit = _ref3.commit,
	        state = _ref3.state;
	
	    if ((state.count + 1) % 2 === 0) {
	      commit('increment');
	    }
	  },
	  incrementAsync: function incrementAsync(_ref4) {
	    var commit = _ref4.commit;
	
	    return new Promise(function (resolve, reject) {
	      setTimeout(function () {
	        commit('increment');
	        resolve();
	      }, 1000);
	    });
	  }
	};
	
	var getters = {
	  evenOrOdd: function evenOrOdd(state) {
	    return state % 2 === 0 ? 'even' : 'odd';
	  }
	};
	
	exports['default'] = new Vuex.Store({
	  state: state,
	  mutations: mutations,
	  actions: actions,
	  getters: getters
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! vue */ 1), __webpack_require__(/*! vuex */ 44)))

/***/ }

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZW50cnkvdnVleC9jb3VudGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvdnVleC9jb3VudGVyL0NvdW50ZXIudnVlIiwid2VicGFjazovLy9Db3VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZXgvZGlzdC92dWV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tb2R1bGUvdnVleC9jb3VudGVyL0NvdW50ZXIudnVlP2ZkZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21vZHVsZS92dWV4L2NvdW50ZXIvc3RvcmUuanMiXSwibmFtZXMiOlsiVnVlIiwic3RvcmUiLCJyZW5kZXIiLCJoIiwiJG1vdW50IiwidXNlIiwiVnVleCIsInN0YXRlIiwiY291bnQiLCJtdXRhdGlvbnMiLCJpbmNyZW1lbnQiLCJkZWNyZW1lbnQiLCJhY3Rpb25zIiwiY29tbWl0IiwiaW5jcmVtZW50SWZPZGQiLCJpbmNyZW1lbnRBc3luYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsImdldHRlcnMiLCJldmVuT3JPZGQiLCJTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7OztBQUVBLEtBQUlBLEdBQUosQ0FBUTtBQUNOQyw0QkFETTtBQUVOQyxXQUFRO0FBQUEsWUFBS0MsdUJBQUw7QUFBQTtBQUZGLEVBQVIsRUFHR0MsTUFISCxDQUdVLE1BSFYsRTs7Ozs7Ozs7Ozs7QUNIQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXNELG1EQUFtRCxJQUFJO0FBQzdHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7QUFDRCxrQ0FBaUM7O0FBRWpDOzs7Ozs7Ozs7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LElBRkc7QUFHZEMsaUJBSGMsaUNBR21CO0FBQUEsU0FBaEJELE1BQWdCLFNBQWhCQSxNQUFnQjtBQUFBLFNBQVJOLEtBQVEsU0FBUkEsS0FBUTs7QUFDL0IsU0FBSSxDQUFDQSxNQUFNQyxLQUFOLEdBQWMsQ0FBZixJQUFvQixDQUFwQixLQUEwQixDQUE5QixFQUFpQztBQUMvQkssY0FBTyxXQUFQO0FBQ0Q7QUFDRixJQVBhO0FBUWRFLGlCQVJjLGlDQVFZO0FBQUEsU0FBVEYsTUFBUyxTQUFUQSxNQUFTOztBQUN4QixZQUFPLElBQUlHLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdENDLGtCQUFXLFlBQU07QUFDZk4sZ0JBQU8sV0FBUDtBQUNBSTtBQUNELFFBSEQsRUFHRyxJQUhIO0FBSUQsTUFMTSxDQUFQO0FBTUQ7QUFmYSxFQUFoQjs7QUFrQkEsS0FBTUcsVUFBVTtBQUNkQyxjQUFXO0FBQUEsWUFBU2QsUUFBUSxDQUFSLEtBQWMsQ0FBZCxHQUFrQixNQUFsQixHQUEyQixLQUFwQztBQUFBO0FBREcsRUFBaEI7O3NCQUllLElBQUlELEtBQUtnQixLQUFULENBQWU7QUFDNUJmLGVBRDRCO0FBRTVCRSx1QkFGNEI7QUFHNUJHLG1CQUg0QjtBQUk1QlE7QUFKNEIsRUFBZixDIiwiZmlsZSI6InZ1ZXgvY291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb3VudGVyIGZyb20gJ21vZHVsZS92dWV4L2NvdW50ZXIvQ291bnRlcidcbmltcG9ydCBzdG9yZSBmcm9tICdtb2R1bGUvdnVleC9jb3VudGVyL3N0b3JlJ1xuXG5uZXcgVnVlKHtcbiAgc3RvcmUsXG4gIHJlbmRlcjogaCA9PiBoKENvdW50ZXIpXG59KS4kbW91bnQoJyNhcHAnKVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvanMvZW50cnkvdnVleC9jb3VudGVyLmpzXG4gKiovIiwidmFyIF9fdnVlX2V4cG9ydHNfXywgX192dWVfb3B0aW9uc19fXG5cbi8qIHNjcmlwdCAqL1xuX192dWVfZXhwb3J0c19fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIXZ1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db3VudGVyLnZ1ZVwiKVxuXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISF2dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtZGFlMjI4Y2MhdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ291bnRlci52dWVcIilcbl9fdnVlX29wdGlvbnNfXyA9IF9fdnVlX2V4cG9ydHNfXyA9IF9fdnVlX2V4cG9ydHNfXyB8fCB7fVxuaWYgKFxuICB0eXBlb2YgX192dWVfZXhwb3J0c19fLmRlZmF1bHQgPT09IFwib2JqZWN0XCIgfHxcbiAgdHlwZW9mIF9fdnVlX2V4cG9ydHNfXy5kZWZhdWx0ID09PSBcImZ1bmN0aW9uXCJcbikge1xuaWYgKE9iamVjdC5rZXlzKF9fdnVlX2V4cG9ydHNfXykuc29tZShmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCIgfSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5fX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9leHBvcnRzX18gPSBfX3Z1ZV9leHBvcnRzX18uZGVmYXVsdFxufVxuaWYgKHR5cGVvZiBfX3Z1ZV9vcHRpb25zX18gPT09IFwiZnVuY3Rpb25cIikge1xuICBfX3Z1ZV9vcHRpb25zX18gPSBfX3Z1ZV9vcHRpb25zX18ub3B0aW9uc1xufVxuX192dWVfb3B0aW9uc19fLl9fZmlsZSA9IFwiL1VzZXJzL3p5eS96eXkvd2ViLWxpYi96b3JvLWtpdC12dWUvc3JjL2pzL21vZHVsZS92dWV4L2NvdW50ZXIvQ291bnRlci52dWVcIlxuX192dWVfb3B0aW9uc19fLnJlbmRlciA9IF9fdnVlX3RlbXBsYXRlX18ucmVuZGVyXG5fX3Z1ZV9vcHRpb25zX18uc3RhdGljUmVuZGVyRm5zID0gX192dWVfdGVtcGxhdGVfXy5zdGF0aWNSZW5kZXJGbnNcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWRhZTIyOGNjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWRhZTIyOGNjXCIsIF9fdnVlX29wdGlvbnNfXylcbiAgfVxufSkoKX1cbmlmIChfX3Z1ZV9vcHRpb25zX18uZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gQ291bnRlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCBhbmQgc2hvdWxkIGJlIGRlZmluZWQgaW4gcGxhaW4ganMgZmlsZXMgdXNpbmcgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gX192dWVfZXhwb3J0c19fXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjL2pzL21vZHVsZS92dWV4L2NvdW50ZXIvQ291bnRlci52dWVcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiPHRlbXBsYXRlIGxhbmc9J2h0bWwnPlxuICA8ZGl2IGlkPSdhcHAnPlxuICAgIENsaWNrZWQ6IHt7JHN0b3JlLnN0YXRlLmNvdW50fX0gdGltZXMsIGNvdW50IGlzIHt7ZXZlbk9yT2RkfX1cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0bicgQGNsaWNrPSdpbmNyZW1lbnQnPis8L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0bicgQGNsaWNrPSdkZWNyZW1lbnQnPi08L2J1dHRvbj5cbiAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3M9J2J0bicgQGNsaWNrPSdpbmNyZW1lbnRJZk9kZCc+aW5jcmVtZW50IGlmIG9kZDwvYnV0dG9uPlxuICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzcz0nYnRuJyBAY2xpY2s9J2luY3JlbWVudEFzeW5jJz4gaW5jcmVtZW50IGFzeW5jPC9idXR0b24+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7bWFwR2V0dGVycywgbWFwQWN0aW9uc30gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQ291bnRlcicsXG4gIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKFtcbiAgICAnZXZlbk9yT2RkJ1xuICBdKSxcbiAgbWV0aG9kczogbWFwQWN0aW9ucyhbXG4gICAgJ2luY3JlbWVudCcsXG4gICAgJ2RlY3JlbWVudCcsXG4gICAgJ2luY3JlbWVudElmT2RkJyxcbiAgICAnaW5jcmVtZW50QXN5bmMnXG4gIF0pXG59XG48L3NjcmlwdD5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIENvdW50ZXIudnVlPzZhZTE3YTExXG4gKiovIiwiLyoqXG4gKiB2dWV4IHYyLjAuMFxuICogKGMpIDIwMTYgRXZhbiBZb3VcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gIChnbG9iYWwuVnVleCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxudmFyIGRldnRvb2xIb29rID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgd2luZG93Ll9fVlVFX0RFVlRPT0xTX0dMT0JBTF9IT09LX19cblxuZnVuY3Rpb24gZGV2dG9vbFBsdWdpbiAoc3RvcmUpIHtcbiAgaWYgKCFkZXZ0b29sSG9vaykgeyByZXR1cm4gfVxuXG4gIHN0b3JlLl9kZXZ0b29sSG9vayA9IGRldnRvb2xIb29rXG5cbiAgZGV2dG9vbEhvb2suZW1pdCgndnVleDppbml0Jywgc3RvcmUpXG5cbiAgZGV2dG9vbEhvb2sub24oJ3Z1ZXg6dHJhdmVsLXRvLXN0YXRlJywgZnVuY3Rpb24gKHRhcmdldFN0YXRlKSB7XG4gICAgc3RvcmUucmVwbGFjZVN0YXRlKHRhcmdldFN0YXRlKVxuICB9KVxuXG4gIHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAobXV0YXRpb24sIHN0YXRlKSB7XG4gICAgZGV2dG9vbEhvb2suZW1pdCgndnVleDptdXRhdGlvbicsIG11dGF0aW9uLCBzdGF0ZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gYXBwbHlNaXhpbiAoVnVlKSB7XG4gIHZhciB2ZXJzaW9uID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pXG5cbiAgaWYgKHZlcnNpb24gPj0gMikge1xuICAgIHZhciB1c2VzSW5pdCA9IFZ1ZS5jb25maWcuX2xpZmVjeWNsZUhvb2tzLmluZGV4T2YoJ2luaXQnKSA+IC0xXG4gICAgVnVlLm1peGluKHVzZXNJbml0ID8geyBpbml0OiB2dWV4SW5pdCB9IDogeyBiZWZvcmVDcmVhdGU6IHZ1ZXhJbml0IH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gb3ZlcnJpZGUgaW5pdCBhbmQgaW5qZWN0IHZ1ZXggaW5pdCBwcm9jZWR1cmVcbiAgICAvLyBmb3IgMS54IGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAgIHZhciBfaW5pdCA9IFZ1ZS5wcm90b3R5cGUuX2luaXRcbiAgICBWdWUucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gICAgICBvcHRpb25zLmluaXQgPSBvcHRpb25zLmluaXRcbiAgICAgICAgPyBbdnVleEluaXRdLmNvbmNhdChvcHRpb25zLmluaXQpXG4gICAgICAgIDogdnVleEluaXRcbiAgICAgIF9pbml0LmNhbGwodGhpcywgb3B0aW9ucylcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVnVleCBpbml0IGhvb2ssIGluamVjdGVkIGludG8gZWFjaCBpbnN0YW5jZXMgaW5pdCBob29rcyBsaXN0LlxuICAgKi9cblxuICBmdW5jdGlvbiB2dWV4SW5pdCAoKSB7XG4gICAgdmFyIG9wdGlvbnMgPSB0aGlzLiRvcHRpb25zXG4gICAgLy8gc3RvcmUgaW5qZWN0aW9uXG4gICAgaWYgKG9wdGlvbnMuc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gb3B0aW9ucy5zdG9yZVxuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQuJHN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IG9wdGlvbnMucGFyZW50LiRzdG9yZVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBTdGF0ZSAoc3RhdGVzKSB7XG4gIHZhciByZXMgPSB7fVxuICBub3JtYWxpemVNYXAoc3RhdGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkU3RhdGUgKCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuY2FsbCh0aGlzLCB0aGlzLiRzdG9yZS5zdGF0ZSwgdGhpcy4kc3RvcmUuZ2V0dGVycylcbiAgICAgICAgOiB0aGlzLiRzdG9yZS5zdGF0ZVt2YWxdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIG1hcE11dGF0aW9ucyAobXV0YXRpb25zKSB7XG4gIHZhciByZXMgPSB7fVxuICBub3JtYWxpemVNYXAobXV0YXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkTXV0YXRpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5jb21taXQuYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gbWFwR2V0dGVycyAoZ2V0dGVycykge1xuICB2YXIgcmVzID0ge31cbiAgbm9ybWFsaXplTWFwKGdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRHZXR0ZXIgKCkge1xuICAgICAgaWYgKCEodmFsIGluIHRoaXMuJHN0b3JlLmdldHRlcnMpKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gZ2V0dGVyOiBcIiArIHZhbCkpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVyc1t2YWxdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzXG59XG5cbmZ1bmN0aW9uIG1hcEFjdGlvbnMgKGFjdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9XG4gIG5vcm1hbGl6ZU1hcChhY3Rpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkQWN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZGlzcGF0Y2guYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXNcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFwKVxuICAgID8gbWFwLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBrZXkgfSk7IH0pXG4gICAgOiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBtYXBba2V5XSB9KTsgfSlcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QgKG9iaikge1xuICByZXR1cm4gb2JqICE9PSBudWxsICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnXG59XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZSAodmFsKSB7XG4gIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbC50aGVuID09PSAnZnVuY3Rpb24nXG59XG5cbmZ1bmN0aW9uIGFzc2VydCAoY29uZGl0aW9uLCBtc2cpIHtcbiAgaWYgKCFjb25kaXRpb24pIHsgdGhyb3cgbmV3IEVycm9yKChcIlt2dWV4XSBcIiArIG1zZykpIH1cbn1cblxudmFyIFZ1ZSAvLyBiaW5kIG9uIGluc3RhbGxcblxudmFyIFN0b3JlID0gZnVuY3Rpb24gU3RvcmUgKG9wdGlvbnMpIHtcbiAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gIGlmICggb3B0aW9ucyA9PT0gdm9pZCAwICkgb3B0aW9ucyA9IHt9O1xuXG4gIGFzc2VydChWdWUsIFwibXVzdCBjYWxsIFZ1ZS51c2UoVnVleCkgYmVmb3JlIGNyZWF0aW5nIGEgc3RvcmUgaW5zdGFuY2UuXCIpXG4gIGFzc2VydCh0eXBlb2YgUHJvbWlzZSAhPT0gJ3VuZGVmaW5lZCcsIFwidnVleCByZXF1aXJlcyBhIFByb21pc2UgcG9seWZpbGwgaW4gdGhpcyBicm93c2VyLlwiKVxuXG4gIHZhciBzdGF0ZSA9IG9wdGlvbnMuc3RhdGU7IGlmICggc3RhdGUgPT09IHZvaWQgMCApIHN0YXRlID0ge307XG4gIHZhciBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zOyBpZiAoIHBsdWdpbnMgPT09IHZvaWQgMCApIHBsdWdpbnMgPSBbXTtcbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0OyBpZiAoIHN0cmljdCA9PT0gdm9pZCAwICkgc3RyaWN0ID0gZmFsc2U7XG5cbiAgLy8gc3RvcmUgaW50ZXJuYWwgc3RhdGVcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnNcbiAgdGhpcy5fY29tbWl0dGluZyA9IGZhbHNlXG4gIHRoaXMuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdGhpcy5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHRoaXMuX3J1bnRpbWVNb2R1bGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdXG4gIHRoaXMuX3dhdGNoZXJWTSA9IG5ldyBWdWUoKVxuXG4gICAgLy8gYmluZCBjb21taXQgYW5kIGRpc3BhdGNoIHRvIHNlbGZcbiAgdmFyIHN0b3JlID0gdGhpc1xuICB2YXIgcmVmID0gdGhpcztcbiAgdmFyIGRpc3BhdGNoID0gcmVmLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gcmVmLmNvbW1pdDtcbiAgdGhpcy5kaXNwYXRjaCA9IGZ1bmN0aW9uIGJvdW5kRGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gZGlzcGF0Y2guY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZClcbiAgICB9XG4gICAgdGhpcy5jb21taXQgPSBmdW5jdGlvbiBib3VuZENvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHJldHVybiBjb21taXQuY2FsbChzdG9yZSwgdHlwZSwgcGF5bG9hZCwgb3B0aW9ucylcbiAgfVxuXG4gIC8vIHN0cmljdCBtb2RlXG4gIHRoaXMuc3RyaWN0ID0gc3RyaWN0XG5cbiAgLy8gaW5pdCByb290IG1vZHVsZS5cbiAgLy8gdGhpcyBhbHNvIHJlY3Vyc2l2ZWx5IHJlZ2lzdGVycyBhbGwgc3ViLW1vZHVsZXNcbiAgLy8gYW5kIGNvbGxlY3RzIGFsbCBtb2R1bGUgZ2V0dGVycyBpbnNpZGUgdGhpcy5fd3JhcHBlZEdldHRlcnNcbiAgaW5zdGFsbE1vZHVsZSh0aGlzLCBzdGF0ZSwgW10sIG9wdGlvbnMpXG5cbiAgLy8gaW5pdGlhbGl6ZSB0aGUgc3RvcmUgdm0sIHdoaWNoIGlzIHJlc3BvbnNpYmxlIGZvciB0aGUgcmVhY3Rpdml0eVxuICAvLyAoYWxzbyByZWdpc3RlcnMgX3dyYXBwZWRHZXR0ZXJzIGFzIGNvbXB1dGVkIHByb3BlcnRpZXMpXG4gIHJlc2V0U3RvcmVWTSh0aGlzLCBzdGF0ZSlcblxuICAvLyBhcHBseSBwbHVnaW5zXG4gIHBsdWdpbnMuY29uY2F0KGRldnRvb2xQbHVnaW4pLmZvckVhY2goZnVuY3Rpb24gKHBsdWdpbikgeyByZXR1cm4gcGx1Z2luKHRoaXMkMSk7IH0pXG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzID0geyBzdGF0ZToge30gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzLnN0YXRlLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHRoaXMuX3ZtLnN0YXRlXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgYXNzZXJ0KGZhbHNlLCBcIlVzZSBzdG9yZS5yZXBsYWNlU3RhdGUoKSB0byBleHBsaWNpdCByZXBsYWNlIHN0b3JlIHN0YXRlLlwiKVxufTtcblxuU3RvcmUucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uIGNvbW1pdCAodHlwZSwgcGF5bG9hZCwgb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBjb21taXRcbiAgaWYgKGlzT2JqZWN0KHR5cGUpICYmIHR5cGUudHlwZSkge1xuICAgIG9wdGlvbnMgPSBwYXlsb2FkXG4gICAgcGF5bG9hZCA9IHR5cGVcbiAgICB0eXBlID0gdHlwZS50eXBlXG4gIH1cbiAgdmFyIG11dGF0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH1cbiAgdmFyIGVudHJ5ID0gdGhpcy5fbXV0YXRpb25zW3R5cGVdXG4gIGlmICghZW50cnkpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSkpXG4gICAgcmV0dXJuXG4gIH1cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgZW50cnkuZm9yRWFjaChmdW5jdGlvbiBjb21taXRJdGVyYXRvciAoaGFuZGxlcikge1xuICAgICAgaGFuZGxlcihwYXlsb2FkKVxuICAgIH0pXG4gIH0pXG4gIGlmICghb3B0aW9ucyB8fCAhb3B0aW9ucy5zaWxlbnQpIHtcbiAgICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1YihtdXRhdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSlcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKHR5cGUsIHBheWxvYWQpIHtcbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGRpc3BhdGNoXG4gIGlmIChpc09iamVjdCh0eXBlKSAmJiB0eXBlLnR5cGUpIHtcbiAgICBwYXlsb2FkID0gdHlwZVxuICAgIHR5cGUgPSB0eXBlLnR5cGVcbiAgfVxuICB2YXIgZW50cnkgPSB0aGlzLl9hY3Rpb25zW3R5cGVdXG4gIGlmICghZW50cnkpIHtcbiAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSB1bmtub3duIGFjdGlvbiB0eXBlOiBcIiArIHR5cGUpKVxuICAgIHJldHVyblxuICB9XG4gIHJldHVybiBlbnRyeS5sZW5ndGggPiAxXG4gICAgPyBQcm9taXNlLmFsbChlbnRyeS5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIGhhbmRsZXIocGF5bG9hZCk7IH0pKVxuICAgIDogZW50cnlbMF0ocGF5bG9hZClcbn07XG5cblN0b3JlLnByb3RvdHlwZS5zdWJzY3JpYmUgPSBmdW5jdGlvbiBzdWJzY3JpYmUgKGZuKSB7XG4gIHZhciBzdWJzID0gdGhpcy5fc3Vic2NyaWJlcnNcbiAgaWYgKHN1YnMuaW5kZXhPZihmbikgPCAwKSB7XG4gICAgc3Vicy5wdXNoKGZuKVxuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGkgPSBzdWJzLmluZGV4T2YoZm4pXG4gICAgaWYgKGkgPiAtMSkge1xuICAgICAgc3Vicy5zcGxpY2UoaSwgMSlcbiAgICB9XG4gIH1cbn07XG5cblN0b3JlLnByb3RvdHlwZS53YXRjaCA9IGZ1bmN0aW9uIHdhdGNoIChnZXR0ZXIsIGNiLCBvcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgYXNzZXJ0KHR5cGVvZiBnZXR0ZXIgPT09ICdmdW5jdGlvbicsIFwic3RvcmUud2F0Y2ggb25seSBhY2NlcHRzIGEgZnVuY3Rpb24uXCIpXG4gIHJldHVybiB0aGlzLl93YXRjaGVyVk0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldHRlcih0aGlzJDEuc3RhdGUpOyB9LCBjYiwgb3B0aW9ucylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZXBsYWNlU3RhdGUgPSBmdW5jdGlvbiByZXBsYWNlU3RhdGUgKHN0YXRlKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdGhpcyQxLl92bS5zdGF0ZSA9IHN0YXRlXG4gIH0pXG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVnaXN0ZXJNb2R1bGUgPSBmdW5jdGlvbiByZWdpc3Rlck1vZHVsZSAocGF0aCwgbW9kdWxlKSB7XG4gIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHsgcGF0aCA9IFtwYXRoXSB9XG4gIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpXG4gIHRoaXMuX3J1bnRpbWVNb2R1bGVzW3BhdGguam9pbignLicpXSA9IG1vZHVsZVxuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHRoaXMuc3RhdGUsIHBhdGgsIG1vZHVsZSlcbiAgLy8gcmVzZXQgc3RvcmUgdG8gdXBkYXRlIGdldHRlcnMuLi5cbiAgcmVzZXRTdG9yZVZNKHRoaXMsIHRoaXMuc3RhdGUpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUudW5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJNb2R1bGUgKHBhdGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF0gfVxuICBhc3NlcnQoQXJyYXkuaXNBcnJheShwYXRoKSwgXCJtb2R1bGUgcGF0aCBtdXN0IGJlIGEgc3RyaW5nIG9yIGFuIEFycmF5LlwiKVxuICAgIGRlbGV0ZSB0aGlzLl9ydW50aW1lTW9kdWxlc1twYXRoLmpvaW4oJy4nKV1cbiAgdGhpcy5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudFN0YXRlID0gZ2V0TmVzdGVkU3RhdGUodGhpcyQxLnN0YXRlLCBwYXRoLnNsaWNlKDAsIC0xKSlcbiAgICBWdWUuZGVsZXRlKHBhcmVudFN0YXRlLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0pXG4gIH0pXG4gIHJlc2V0U3RvcmUodGhpcylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5ob3RVcGRhdGUgPSBmdW5jdGlvbiBob3RVcGRhdGUgKG5ld09wdGlvbnMpIHtcbiAgdXBkYXRlTW9kdWxlKHRoaXMuX29wdGlvbnMsIG5ld09wdGlvbnMpXG4gIHJlc2V0U3RvcmUodGhpcylcbn07XG5cblN0b3JlLnByb3RvdHlwZS5fd2l0aENvbW1pdCA9IGZ1bmN0aW9uIF93aXRoQ29tbWl0IChmbikge1xuICB2YXIgY29tbWl0dGluZyA9IHRoaXMuX2NvbW1pdHRpbmdcbiAgdGhpcy5fY29tbWl0dGluZyA9IHRydWVcbiAgZm4oKVxuICB0aGlzLl9jb21taXR0aW5nID0gY29tbWl0dGluZ1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIFN0b3JlLnByb3RvdHlwZSwgcHJvdG90eXBlQWNjZXNzb3JzICk7XG5cbmZ1bmN0aW9uIHVwZGF0ZU1vZHVsZSAodGFyZ2V0TW9kdWxlLCBuZXdNb2R1bGUpIHtcbiAgaWYgKG5ld01vZHVsZS5hY3Rpb25zKSB7XG4gICAgdGFyZ2V0TW9kdWxlLmFjdGlvbnMgPSBuZXdNb2R1bGUuYWN0aW9uc1xuICB9XG4gIGlmIChuZXdNb2R1bGUubXV0YXRpb25zKSB7XG4gICAgdGFyZ2V0TW9kdWxlLm11dGF0aW9ucyA9IG5ld01vZHVsZS5tdXRhdGlvbnNcbiAgfVxuICBpZiAobmV3TW9kdWxlLmdldHRlcnMpIHtcbiAgICB0YXJnZXRNb2R1bGUuZ2V0dGVycyA9IG5ld01vZHVsZS5nZXR0ZXJzXG4gIH1cbiAgaWYgKG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgZm9yICh2YXIga2V5IGluIG5ld01vZHVsZS5tb2R1bGVzKSB7XG4gICAgICBpZiAoISh0YXJnZXRNb2R1bGUubW9kdWxlcyAmJiB0YXJnZXRNb2R1bGUubW9kdWxlc1trZXldKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJbdnVleF0gdHJ5aW5nIHRvIGFkZCBhIG5ldyBtb2R1bGUgJ1wiICsga2V5ICsgXCInIG9uIGhvdCByZWxvYWRpbmcsIFwiICtcbiAgICAgICAgICAnbWFudWFsIHJlbG9hZCBpcyBuZWVkZWQnXG4gICAgICAgIClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGVNb2R1bGUodGFyZ2V0TW9kdWxlLm1vZHVsZXNba2V5XSwgbmV3TW9kdWxlLm1vZHVsZXNba2V5XSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZSAoc3RvcmUpIHtcbiAgc3RvcmUuX2FjdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHN0b3JlLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpXG4gIHN0b3JlLl93cmFwcGVkR2V0dGVycyA9IE9iamVjdC5jcmVhdGUobnVsbClcbiAgdmFyIHN0YXRlID0gc3RvcmUuc3RhdGVcbiAgLy8gaW5pdCByb290IG1vZHVsZVxuICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwgW10sIHN0b3JlLl9vcHRpb25zLCB0cnVlKVxuICAvLyBpbml0IGFsbCBydW50aW1lIG1vZHVsZXNcbiAgT2JqZWN0LmtleXMoc3RvcmUuX3J1bnRpbWVNb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpbnN0YWxsTW9kdWxlKHN0b3JlLCBzdGF0ZSwga2V5LnNwbGl0KCcuJyksIHN0b3JlLl9ydW50aW1lTW9kdWxlc1trZXldLCB0cnVlKVxuICB9KVxuICAvLyByZXNldCB2bVxuICByZXNldFN0b3JlVk0oc3RvcmUsIHN0YXRlKVxufVxuXG5mdW5jdGlvbiByZXNldFN0b3JlVk0gKHN0b3JlLCBzdGF0ZSkge1xuICB2YXIgb2xkVm0gPSBzdG9yZS5fdm1cblxuICAvLyBiaW5kIHN0b3JlIHB1YmxpYyBnZXR0ZXJzXG4gIHN0b3JlLmdldHRlcnMgPSB7fVxuICB2YXIgd3JhcHBlZEdldHRlcnMgPSBzdG9yZS5fd3JhcHBlZEdldHRlcnNcbiAgdmFyIGNvbXB1dGVkID0ge31cbiAgT2JqZWN0LmtleXMod3JhcHBlZEdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciBmbiA9IHdyYXBwZWRHZXR0ZXJzW2tleV1cbiAgICAvLyB1c2UgY29tcHV0ZWQgdG8gbGV2ZXJhZ2UgaXRzIGxhenktY2FjaGluZyBtZWNoYW5pc21cbiAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZm4oc3RvcmUpOyB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHN0b3JlLmdldHRlcnMsIGtleSwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdG9yZS5fdm1ba2V5XTsgfVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gdXNlIGEgVnVlIGluc3RhbmNlIHRvIHN0b3JlIHRoZSBzdGF0ZSB0cmVlXG4gIC8vIHN1cHByZXNzIHdhcm5pbmdzIGp1c3QgaW4gY2FzZSB0aGUgdXNlciBoYXMgYWRkZWRcbiAgLy8gc29tZSBmdW5reSBnbG9iYWwgbWl4aW5zXG4gIHZhciBzaWxlbnQgPSBWdWUuY29uZmlnLnNpbGVudFxuICBWdWUuY29uZmlnLnNpbGVudCA9IHRydWVcbiAgc3RvcmUuX3ZtID0gbmV3IFZ1ZSh7XG4gICAgZGF0YTogeyBzdGF0ZTogc3RhdGUgfSxcbiAgICBjb21wdXRlZDogY29tcHV0ZWRcbiAgfSlcbiAgVnVlLmNvbmZpZy5zaWxlbnQgPSBzaWxlbnRcblxuICAvLyBlbmFibGUgc3RyaWN0IG1vZGUgZm9yIG5ldyB2bVxuICBpZiAoc3RvcmUuc3RyaWN0KSB7XG4gICAgZW5hYmxlU3RyaWN0TW9kZShzdG9yZSlcbiAgfVxuXG4gIGlmIChvbGRWbSkge1xuICAgIC8vIGRpc3BhdGNoIGNoYW5nZXMgaW4gYWxsIHN1YnNjcmliZWQgd2F0Y2hlcnNcbiAgICAvLyB0byBmb3JjZSBnZXR0ZXIgcmUtZXZhbHVhdGlvbi5cbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBvbGRWbS5zdGF0ZSA9IG51bGxcbiAgICB9KVxuICAgIFZ1ZS5uZXh0VGljayhmdW5jdGlvbiAoKSB7IHJldHVybiBvbGRWbS4kZGVzdHJveSgpOyB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGluc3RhbGxNb2R1bGUgKHN0b3JlLCByb290U3RhdGUsIHBhdGgsIG1vZHVsZSwgaG90KSB7XG4gIHZhciBpc1Jvb3QgPSAhcGF0aC5sZW5ndGhcbiAgdmFyIHN0YXRlID0gbW9kdWxlLnN0YXRlO1xuICB2YXIgYWN0aW9ucyA9IG1vZHVsZS5hY3Rpb25zO1xuICB2YXIgbXV0YXRpb25zID0gbW9kdWxlLm11dGF0aW9ucztcbiAgdmFyIGdldHRlcnMgPSBtb2R1bGUuZ2V0dGVycztcbiAgdmFyIG1vZHVsZXMgPSBtb2R1bGUubW9kdWxlcztcblxuICAvLyBzZXQgc3RhdGVcbiAgaWYgKCFpc1Jvb3QgJiYgIWhvdCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHJvb3RTdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpXG4gICAgdmFyIG1vZHVsZU5hbWUgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV1cbiAgICBzdG9yZS5fd2l0aENvbW1pdChmdW5jdGlvbiAoKSB7XG4gICAgICBWdWUuc2V0KHBhcmVudFN0YXRlLCBtb2R1bGVOYW1lLCBzdGF0ZSB8fCB7fSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKG11dGF0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKG11dGF0aW9ucykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZWdpc3Rlck11dGF0aW9uKHN0b3JlLCBrZXksIG11dGF0aW9uc1trZXldLCBwYXRoKVxuICAgIH0pXG4gIH1cblxuICBpZiAoYWN0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVnaXN0ZXJBY3Rpb24oc3RvcmUsIGtleSwgYWN0aW9uc1trZXldLCBwYXRoKVxuICAgIH0pXG4gIH1cblxuICBpZiAoZ2V0dGVycykge1xuICAgIHdyYXBHZXR0ZXJzKHN0b3JlLCBnZXR0ZXJzLCBwYXRoKVxuICB9XG5cbiAgaWYgKG1vZHVsZXMpIHtcbiAgICBPYmplY3Qua2V5cyhtb2R1bGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGluc3RhbGxNb2R1bGUoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aC5jb25jYXQoa2V5KSwgbW9kdWxlc1trZXldLCBob3QpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiByZWdpc3Rlck11dGF0aW9uIChzdG9yZSwgdHlwZSwgaGFuZGxlciwgcGF0aCkge1xuICBpZiAoIHBhdGggPT09IHZvaWQgMCApIHBhdGggPSBbXTtcblxuICB2YXIgZW50cnkgPSBzdG9yZS5fbXV0YXRpb25zW3R5cGVdIHx8IChzdG9yZS5fbXV0YXRpb25zW3R5cGVdID0gW10pXG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZE11dGF0aW9uSGFuZGxlciAocGF5bG9hZCkge1xuICAgIGhhbmRsZXIoZ2V0TmVzdGVkU3RhdGUoc3RvcmUuc3RhdGUsIHBhdGgpLCBwYXlsb2FkKVxuICB9KVxufVxuXG5mdW5jdGlvbiByZWdpc3RlckFjdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIHBhdGgpIHtcbiAgaWYgKCBwYXRoID09PSB2b2lkIDAgKSBwYXRoID0gW107XG5cbiAgdmFyIGVudHJ5ID0gc3RvcmUuX2FjdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9hY3Rpb25zW3R5cGVdID0gW10pXG4gIHZhciBkaXNwYXRjaCA9IHN0b3JlLmRpc3BhdGNoO1xuICB2YXIgY29tbWl0ID0gc3RvcmUuY29tbWl0O1xuICBlbnRyeS5wdXNoKGZ1bmN0aW9uIHdyYXBwZWRBY3Rpb25IYW5kbGVyIChwYXlsb2FkLCBjYikge1xuICAgIHZhciByZXMgPSBoYW5kbGVyKHtcbiAgICAgIGRpc3BhdGNoOiBkaXNwYXRjaCxcbiAgICAgIGNvbW1pdDogY29tbWl0LFxuICAgICAgZ2V0dGVyczogc3RvcmUuZ2V0dGVycyxcbiAgICAgIHN0YXRlOiBnZXROZXN0ZWRTdGF0ZShzdG9yZS5zdGF0ZSwgcGF0aCksXG4gICAgICByb290U3RhdGU6IHN0b3JlLnN0YXRlXG4gICAgfSwgcGF5bG9hZCwgY2IpXG4gICAgaWYgKCFpc1Byb21pc2UocmVzKSkge1xuICAgICAgcmVzID0gUHJvbWlzZS5yZXNvbHZlKHJlcylcbiAgICB9XG4gICAgaWYgKHN0b3JlLl9kZXZ0b29sSG9vaykge1xuICAgICAgcmV0dXJuIHJlcy5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHN0b3JlLl9kZXZ0b29sSG9vay5lbWl0KCd2dWV4OmVycm9yJywgZXJyKVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHdyYXBHZXR0ZXJzIChzdG9yZSwgbW9kdWxlR2V0dGVycywgbW9kdWxlUGF0aCkge1xuICBPYmplY3Qua2V5cyhtb2R1bGVHZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChnZXR0ZXJLZXkpIHtcbiAgICB2YXIgcmF3R2V0dGVyID0gbW9kdWxlR2V0dGVyc1tnZXR0ZXJLZXldXG4gICAgaWYgKHN0b3JlLl93cmFwcGVkR2V0dGVyc1tnZXR0ZXJLZXldKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBkdXBsaWNhdGUgZ2V0dGVyIGtleTogXCIgKyBnZXR0ZXJLZXkpKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHN0b3JlLl93cmFwcGVkR2V0dGVyc1tnZXR0ZXJLZXldID0gZnVuY3Rpb24gd3JhcHBlZEdldHRlciAoc3RvcmUpIHtcbiAgICAgIHJldHVybiByYXdHZXR0ZXIoXG4gICAgICAgIGdldE5lc3RlZFN0YXRlKHN0b3JlLnN0YXRlLCBtb2R1bGVQYXRoKSwgLy8gbG9jYWwgc3RhdGVcbiAgICAgICAgc3RvcmUuZ2V0dGVycywgLy8gZ2V0dGVyc1xuICAgICAgICBzdG9yZS5zdGF0ZSAvLyByb290IHN0YXRlXG4gICAgICApXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBlbmFibGVTdHJpY3RNb2RlIChzdG9yZSkge1xuICBzdG9yZS5fdm0uJHdhdGNoKCdzdGF0ZScsIGZ1bmN0aW9uICgpIHtcbiAgICBhc3NlcnQoc3RvcmUuX2NvbW1pdHRpbmcsIFwiRG8gbm90IG11dGF0ZSB2dWV4IHN0b3JlIHN0YXRlIG91dHNpZGUgbXV0YXRpb24gaGFuZGxlcnMuXCIpXG4gIH0sIHsgZGVlcDogdHJ1ZSwgc3luYzogdHJ1ZSB9KVxufVxuXG5mdW5jdGlvbiBnZXROZXN0ZWRTdGF0ZSAoc3RhdGUsIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGgubGVuZ3RoXG4gICAgPyBwYXRoLnJlZHVjZShmdW5jdGlvbiAoc3RhdGUsIGtleSkgeyByZXR1cm4gc3RhdGVba2V5XTsgfSwgc3RhdGUpXG4gICAgOiBzdGF0ZVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsIChfVnVlKSB7XG4gIGlmIChWdWUpIHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgJ1t2dWV4XSBhbHJlYWR5IGluc3RhbGxlZC4gVnVlLnVzZShWdWV4KSBzaG91bGQgYmUgY2FsbGVkIG9ubHkgb25jZS4nXG4gICAgKVxuICAgIHJldHVyblxuICB9XG4gIFZ1ZSA9IF9WdWVcbiAgYXBwbHlNaXhpbihWdWUpXG59XG5cbi8vIGF1dG8gaW5zdGFsbCBpbiBkaXN0IG1vZGVcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gIGluc3RhbGwod2luZG93LlZ1ZSlcbn1cblxudmFyIGluZGV4ID0ge1xuICBTdG9yZTogU3RvcmUsXG4gIGluc3RhbGw6IGluc3RhbGwsXG4gIG1hcFN0YXRlOiBtYXBTdGF0ZSxcbiAgbWFwTXV0YXRpb25zOiBtYXBNdXRhdGlvbnMsXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMsXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnNcbn1cblxucmV0dXJuIGluZGV4O1xuXG59KSkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZXgvZGlzdC92dWV4LmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMlxuICoqLyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7d2l0aCh0aGlzKSB7XG4gIHJldHVybiBfaCgnZGl2Jywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYXBwXCJcbiAgICB9XG4gIH0sIFtcIlxcbiAgQ2xpY2tlZDogXCIgKyBfcygkc3RvcmUuc3RhdGUuY291bnQpICsgXCIgdGltZXMsIGNvdW50IGlzIFwiICsgX3MoZXZlbk9yT2RkKSArIFwiXFxuICBcIiwgX2goJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJidG5cIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwiYnV0dG9uXCJcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGluY3JlbWVudFxuICAgIH1cbiAgfSwgW1wiK1wiXSksIFwiIFwiLCBfaCgnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZGVjcmVtZW50XG4gICAgfVxuICB9LCBbXCItXCJdKSwgXCIgXCIsIF9oKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYnRuXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcImJ1dHRvblwiXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBpbmNyZW1lbnRJZk9kZFxuICAgIH1cbiAgfSwgW1wiaW5jcmVtZW50IGlmIG9kZFwiXSksIFwiIFwiLCBfaCgnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImJ0blwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInR5cGVcIjogXCJidXR0b25cIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogaW5jcmVtZW50QXN5bmNcbiAgICB9XG4gIH0sIFtcIiBpbmNyZW1lbnQgYXN5bmNcIl0pXSlcbn19LHN0YXRpY1JlbmRlckZuczogW119XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKS5yZXJlbmRlcihcImRhdGEtdi1kYWUyMjhjY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi1kYWUyMjhjYyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3JjL2pzL21vZHVsZS92dWV4L2NvdW50ZXIvQ291bnRlci52dWVcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAyXG4gKiovIiwiVnVlLnVzZShWdWV4KVxuXG5jb25zdCBzdGF0ZSA9IHtcbiAgY291bnQ6IDBcbn1cblxuY29uc3QgbXV0YXRpb25zID0ge1xuICBpbmNyZW1lbnQgKHN0YXRlKSB7XG4gICAgc3RhdGUuY291bnQrK1xuICB9LFxuICBkZWNyZW1lbnQgKHN0YXRlKSB7XG4gICAgc3RhdGUuY291bnQtLVxuICB9XG59XG5cbmNvbnN0IGFjdGlvbnMgPSB7XG4gIGluY3JlbWVudDogKHtjb21taXR9KSA9PiBjb21taXQoJ2luY3JlbWVudCcpLFxuICBkZWNyZW1lbnQ6ICh7Y29tbWl0fSkgPT4gY29tbWl0KCdkZWNyZW1lbnQnKSxcbiAgaW5jcmVtZW50SWZPZGQgKHtjb21taXQsIHN0YXRlfSkge1xuICAgIGlmICgoc3RhdGUuY291bnQgKyAxKSAlIDIgPT09IDApIHtcbiAgICAgIGNvbW1pdCgnaW5jcmVtZW50JylcbiAgICB9XG4gIH0sXG4gIGluY3JlbWVudEFzeW5jICh7Y29tbWl0fSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29tbWl0KCdpbmNyZW1lbnQnKVxuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0sIDEwMDApXG4gICAgfSlcbiAgfVxufVxuXG5jb25zdCBnZXR0ZXJzID0ge1xuICBldmVuT3JPZGQ6IHN0YXRlID0+IHN0YXRlICUgMiA9PT0gMCA/ICdldmVuJyA6ICdvZGQnXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBWdWV4LlN0b3JlKHtcbiAgc3RhdGUsXG4gIG11dGF0aW9ucyxcbiAgYWN0aW9ucyxcbiAgZ2V0dGVyc1xufSlcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2pzL21vZHVsZS92dWV4L2NvdW50ZXIvc3RvcmUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9