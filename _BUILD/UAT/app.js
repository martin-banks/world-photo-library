/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./_BUILD/UAT/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 94);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return epsilon2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return quarterPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return degrees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return radians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return atan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return ceil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return exp; });
/* unused harmony export floor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return sign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return tan; });
/* harmony export (immutable) */ __webpack_exports__["s"] = acos;
/* harmony export (immutable) */ __webpack_exports__["f"] = asin;
/* harmony export (immutable) */ __webpack_exports__["t"] = haversin;
var epsilon = 1e-6;
var epsilon2 = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var quarterPi = pi / 4;
var tau = pi * 2;

var degrees = 180 / pi;
var radians = pi / 180;

var abs = Math.abs;
var atan = Math.atan;
var atan2 = Math.atan2;
var cos = Math.cos;
var ceil = Math.ceil;
var exp = Math.exp;
var floor = Math.floor;
var log = Math.log;
var pow = Math.pow;
var sin = Math.sin;
var sign = Math.sign || function(x) { return x > 0 ? 1 : x < 0 ? -1 : 0; };
var sqrt = Math.sqrt;
var tan = Math.tan;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x > 1 ? halfPi : x < -1 ? -halfPi : Math.asin(x);
}

function haversin(x) {
  return (x = sin(x / 2)) * x;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_creator__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_0__src_creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_local__ = __webpack_require__(171);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_1__src_local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_matcher__ = __webpack_require__(79);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_2__src_matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mouse__ = __webpack_require__(172);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_3__src_mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_namespace__ = __webpack_require__(33);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_4__src_namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespaces__ = __webpack_require__(34);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_select__ = __webpack_require__(173);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_6__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_selectAll__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_7__src_selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_selection_index__ = __webpack_require__(2);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_8__src_selection_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selector__ = __webpack_require__(37);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__ = __webpack_require__(83);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selection_style__ = __webpack_require__(82);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_11__src_selection_style__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_touch__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_12__src_touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_touches__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_13__src_touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_window__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_14__src_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_selection_on__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_15__src_selection_on__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_15__src_selection_on__["b"]; });


















/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["b"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__datum__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__on__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dispatch__ = __webpack_require__(181);






























var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["a" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["b" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_26__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_27__on__["c" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_28__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (selection);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony export (immutable) */ __webpack_exports__["e"] = set;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(84);



var emptyOn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["h"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > CREATED) throw new Error("too late");
  return schedule;
}

function set(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id]) || schedule.state > STARTING) throw new Error("too late");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("too late");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["a" /* timer */])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = projection;
/* harmony export (immutable) */ __webpack_exports__["b"] = projectionMutator;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__clip_circle__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clip_rectangle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rotation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fit__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__resample__ = __webpack_require__(157);











var transformRadians = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* transformer */])({
  point: function(x, y) {
    this.stream.point(x * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], y * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */]);
  }
});

function transformRotate(rotate) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__transform__["b" /* transformer */])({
    point: function(x, y) {
      var r = rotate(x, y);
      return this.stream.point(r[0], r[1]);
    }
  });
}

function projection(project) {
  return projectionMutator(function() { return project; })();
}

function projectionMutator(projectAt) {
  var project,
      k = 150, // scale
      x = 480, y = 250, // translate
      dx, dy, lambda = 0, phi = 0, // center
      deltaLambda = 0, deltaPhi = 0, deltaGamma = 0, rotate, projectRotate, // rotate
      theta = null, preclip = __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */], // clip angle
      x0 = null, y0, x1, y1, postclip = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */], // clip extent
      delta2 = 0.5, projectResample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2), // precision
      cache,
      cacheStream;

  function projection(point) {
    point = projectRotate(point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */]);
    return [point[0] * k + dx, dy - point[1] * k];
  }

  function invert(point) {
    point = projectRotate.invert((point[0] - dx) / k, (dy - point[1]) / k);
    return point && [point[0] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], point[1] * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  }

  function projectTransform(x, y) {
    return x = project(x, y), [x[0] * k + dx, dy - x[1] * k];
  }

  projection.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = transformRadians(transformRotate(rotate)(preclip(projectResample(postclip(cacheStream = stream)))));
  };

  projection.preclip = function(_) {
    return arguments.length ? (preclip = _, theta = undefined, reset()) : preclip;
  };

  projection.postclip = function(_) {
    return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
  };

  projection.clipAngle = function(_) {
    return arguments.length ? (preclip = +_ ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__clip_circle__["a" /* default */])(theta = _ * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */]) : (theta = null, __WEBPACK_IMPORTED_MODULE_0__clip_antimeridian__["a" /* default */]), reset()) : theta * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */];
  };

  projection.clipExtent = function(_) {
    return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  projection.scale = function(_) {
    return arguments.length ? (k = +_, recenter()) : k;
  };

  projection.translate = function(_) {
    return arguments.length ? (x = +_[0], y = +_[1], recenter()) : [x, y];
  };

  projection.center = function(_) {
    return arguments.length ? (lambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], phi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], recenter()) : [lambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], phi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.rotate = function(_) {
    return arguments.length ? (deltaLambda = _[0] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], deltaPhi = _[1] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */], deltaGamma = _.length > 2 ? _[2] % 360 * __WEBPACK_IMPORTED_MODULE_5__math__["g" /* radians */] : 0, recenter()) : [deltaLambda * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaPhi * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */], deltaGamma * __WEBPACK_IMPORTED_MODULE_5__math__["h" /* degrees */]];
  };

  projection.precision = function(_) {
    return arguments.length ? (projectResample = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__resample__["a" /* default */])(projectTransform, delta2 = _ * _), reset()) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__math__["n" /* sqrt */])(delta2);
  };

  projection.fitExtent = function(extent, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit__["a" /* fitExtent */])(projection, extent, object);
  };

  projection.fitSize = function(size, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__fit__["b" /* fitSize */])(projection, size, object);
  };

  function recenter() {
    projectRotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__compose__["a" /* default */])(rotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__rotation__["b" /* rotateRadians */])(deltaLambda, deltaPhi, deltaGamma), project);
    var center = project(lambda, phi);
    dx = x - center[0] * k;
    dy = y + center[1] * k;
    return reset();
  }

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return function() {
    project = projectAt.apply(this, arguments);
    projection.invert = project.invert && invert;
    return recenter();
  };
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = noop;
function noop() {}


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = Transition;
/* harmony export (immutable) */ __webpack_exports__["a"] = transition;
/* harmony export (immutable) */ __webpack_exports__["c"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectAll__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleTween__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transition__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tween__ = __webpack_require__(20);



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_10__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_11__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_6__filter__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["a" /* default */],
  selection: __WEBPACK_IMPORTED_MODULE_12__selection__["a" /* default */],
  transition: __WEBPACK_IMPORTED_MODULE_16__transition__["a" /* default */],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_8__on__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* default */],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* default */],
  styleTween: __WEBPACK_IMPORTED_MODULE_14__styleTween__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_15__text__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_9__remove__["a" /* default */],
  tween: __WEBPACK_IMPORTED_MODULE_17__tween__["a" /* default */],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay__["a" /* default */],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration__["a" /* default */],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease__["a" /* default */]
};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(23);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(115);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(114);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function streamGeometry(geometry, stream) {
  if (geometry && streamGeometryType.hasOwnProperty(geometry.type)) {
    streamGeometryType[geometry.type](geometry, stream);
  }
}

var streamObjectType = {
  Feature: function(object, stream) {
    streamGeometry(object.geometry, stream);
  },
  FeatureCollection: function(object, stream) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) streamGeometry(features[i].geometry, stream);
  }
};

var streamGeometryType = {
  Sphere: function(object, stream) {
    stream.sphere();
  },
  Point: function(object, stream) {
    object = object.coordinates;
    stream.point(object[0], object[1], object[2]);
  },
  MultiPoint: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) object = coordinates[i], stream.point(object[0], object[1], object[2]);
  },
  LineString: function(object, stream) {
    streamLine(object.coordinates, stream, 0);
  },
  MultiLineString: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamLine(coordinates[i], stream, 0);
  },
  Polygon: function(object, stream) {
    streamPolygon(object.coordinates, stream);
  },
  MultiPolygon: function(object, stream) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) streamPolygon(coordinates[i], stream);
  },
  GeometryCollection: function(object, stream) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) streamGeometry(geometries[i], stream);
  }
};

function streamLine(coordinates, stream, closed) {
  var i = -1, n = coordinates.length - closed, coordinate;
  stream.lineStart();
  while (++i < n) coordinate = coordinates[i], stream.point(coordinate[0], coordinate[1], coordinate[2]);
  stream.lineEnd();
}

function streamPolygon(coordinates, stream) {
  var i = -1, n = coordinates.length;
  stream.polygonStart();
  while (++i < n) streamLine(coordinates[i], stream, 1);
  stream.polygonEnd();
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, stream) {
  if (object && streamObjectType.hasOwnProperty(object.type)) {
    streamObjectType[object.type](object, stream);
  } else {
    streamGeometry(object, stream);
  }
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Adds floating point numbers with twice the normal precision.
// Reference: J. R. Shewchuk, Adaptive Precision Floating-Point Arithmetic and
// Fast Robust Geometric Predicates, Discrete & Computational Geometry 18(3)
// 305–363 (1997).
// Code adapted from GeographicLib by Charles F. F. Karney,
// http://geographiclib.sourceforge.net/

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Adder;
});

function Adder() {
  this.reset();
}

Adder.prototype = {
  constructor: Adder,
  reset: function() {
    this.s = // rounded value
    this.t = 0; // exact error
  },
  add: function(y) {
    add(temp, y, this.t);
    add(this, temp.s, this.s);
    if (this.s) this.t += temp.t;
    else this.s = temp.t;
  },
  valueOf: function() {
    return this.s;
  }
};

var temp = new Adder;

function add(adder, a, b) {
  var x = adder.s = a + b,
      bv = x - a,
      av = x - bv;
  adder.t = (a - av) + (b - bv);
}


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["g"] = spherical;
/* harmony export (immutable) */ __webpack_exports__["a"] = cartesian;
/* harmony export (immutable) */ __webpack_exports__["d"] = cartesianDot;
/* harmony export (immutable) */ __webpack_exports__["b"] = cartesianCross;
/* harmony export (immutable) */ __webpack_exports__["f"] = cartesianAddInPlace;
/* harmony export (immutable) */ __webpack_exports__["e"] = cartesianScale;
/* harmony export (immutable) */ __webpack_exports__["c"] = cartesianNormalizeInPlace;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function spherical(cartesian) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(cartesian[1], cartesian[0]), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(cartesian[2])];
}

function cartesian(spherical) {
  var lambda = spherical[0], phi = spherical[1], cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  return [cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda), cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi)];
}

function cartesianDot(a, b) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function cartesianCross(a, b) {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

// TODO return a
function cartesianAddInPlace(a, b) {
  a[0] += b[0], a[1] += b[1], a[2] += b[2];
}

function cartesianScale(vector, k) {
  return [vector[0] * k, vector[1] * k, vector[2] * k];
}

// TODO return d
function cartesianNormalizeInPlace(d) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(d[0] * d[0] + d[1] * d[1] + d[2] * d[2]);
  d[0] /= l, d[1] /= l, d[2] /= l;
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = azimuthalRaw;
/* harmony export (immutable) */ __webpack_exports__["a"] = azimuthalInvert;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function azimuthalRaw(scale) {
  return function(x, y) {
    var cx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x),
        cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y),
        k = scale(cx * cy);
    return [
      k * cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x),
      k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y)
    ];
  }
}

function azimuthalInvert(angle) {
  return function(x, y) {
    var z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + y * y),
        c = angle(z),
        sc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(c),
        cc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(c);
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x * sc, z * cc),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(z && y * sc / z)
    ];
  }
}


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = hue;
/* harmony export (immutable) */ __webpack_exports__["c"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(74);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = clipRectangle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buffer__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rejoin__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(21);






var clipMax = 1e9, clipMin = -clipMax;

// TODO Use d3-polygon’s polygonContains here for the ring check?
// TODO Eliminate duplicate buffering in clipBuffer and polygon.push?

function clipRectangle(x0, y0, x1, y1) {

  function visible(x, y) {
    return x0 <= x && x <= x1 && y0 <= y && y <= y1;
  }

  function interpolate(from, to, direction, stream) {
    var a = 0, a1 = 0;
    if (from == null
        || (a = corner(from, direction)) !== (a1 = corner(to, direction))
        || comparePoint(from, to) < 0 ^ direction > 0) {
      do stream.point(a === 0 || a === 3 ? x0 : x1, a > 1 ? y1 : y0);
      while ((a = (a + direction + 4) % 4) !== a1);
    } else {
      stream.point(to[0], to[1]);
    }
  }

  function corner(p, direction) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(p[0] - x0) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] ? direction > 0 ? 0 : 3
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(p[0] - x1) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] ? direction > 0 ? 2 : 1
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(p[1] - y0) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] ? direction > 0 ? 1 : 0
        : direction > 0 ? 3 : 2; // abs(p[1] - y1) < epsilon
  }

  function compareIntersection(a, b) {
    return comparePoint(a.x, b.x);
  }

  function comparePoint(a, b) {
    var ca = corner(a, 1),
        cb = corner(b, 1);
    return ca !== cb ? ca - cb
        : ca === 0 ? b[1] - a[1]
        : ca === 1 ? a[0] - b[0]
        : ca === 2 ? a[1] - b[1]
        : b[0] - a[0];
  }

  return function(stream) {
    var activeStream = stream,
        bufferStream = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__buffer__["a" /* default */])(),
        segments,
        polygon,
        ring,
        x__, y__, v__, // first point
        x_, y_, v_, // previous point
        first,
        clean;

    var clipStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: polygonStart,
      polygonEnd: polygonEnd
    };

    function point(x, y) {
      if (visible(x, y)) activeStream.point(x, y);
    }

    function polygonInside() {
      var winding = 0;

      for (var i = 0, n = polygon.length; i < n; ++i) {
        for (var ring = polygon[i], j = 1, m = ring.length, point = ring[0], a0, a1, b0 = point[0], b1 = point[1]; j < m; ++j) {
          a0 = b0, a1 = b1, point = ring[j], b0 = point[0], b1 = point[1];
          if (a1 <= y1) { if (b1 > y1 && (b0 - a0) * (y1 - a1) > (b1 - a1) * (x0 - a0)) ++winding; }
          else { if (b1 <= y1 && (b0 - a0) * (y1 - a1) < (b1 - a1) * (x0 - a0)) --winding; }
        }
      }

      return winding;
    }

    // Buffer geometry within a polygon and then clip it en masse.
    function polygonStart() {
      activeStream = bufferStream, segments = [], polygon = [], clean = true;
    }

    function polygonEnd() {
      var startInside = polygonInside(),
          cleanInside = clean && startInside,
          visible = (segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["b" /* merge */])(segments)).length;
      if (cleanInside || visible) {
        stream.polygonStart();
        if (cleanInside) {
          stream.lineStart();
          interpolate(null, null, 1, stream);
          stream.lineEnd();
        }
        if (visible) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, stream);
        }
        stream.polygonEnd();
      }
      activeStream = stream, segments = polygon = ring = null;
    }

    function lineStart() {
      clipStream.point = linePoint;
      if (polygon) polygon.push(ring = []);
      first = true;
      v_ = false;
      x_ = y_ = NaN;
    }

    // TODO rather than special-case polygons, simply handle them separately.
    // Ideally, coincident intersection points should be jittered to avoid
    // clipping issues.
    function lineEnd() {
      if (segments) {
        linePoint(x__, y__);
        if (v__ && v_) bufferStream.rejoin();
        segments.push(bufferStream.result());
      }
      clipStream.point = point;
      if (v_) activeStream.lineEnd();
    }

    function linePoint(x, y) {
      var v = visible(x, y);
      if (polygon) ring.push([x, y]);
      if (first) {
        x__ = x, y__ = y, v__ = v;
        first = false;
        if (v) {
          activeStream.lineStart();
          activeStream.point(x, y);
        }
      } else {
        if (v && v_) activeStream.point(x, y);
        else {
          var a = [x_ = Math.max(clipMin, Math.min(clipMax, x_)), y_ = Math.max(clipMin, Math.min(clipMax, y_))],
              b = [x = Math.max(clipMin, Math.min(clipMax, x)), y = Math.max(clipMin, Math.min(clipMax, y))];
          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__line__["a" /* default */])(a, b, x0, y0, x1, y1)) {
            if (!v_) {
              activeStream.lineStart();
              activeStream.point(a[0], a[1]);
            }
            activeStream.point(b[0], b[1]);
            if (!v) activeStream.lineEnd();
            clean = false;
          } else if (v) {
            activeStream.lineStart();
            activeStream.point(x, y);
            clean = false;
          }
        }
      }
      x_ = x, y_ = y, v_ = v;
    }

    return clipStream;
  };
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = rotateRadians;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function rotationIdentity(lambda, phi) {
  return [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda, phi];
}

rotationIdentity.invert = rotationIdentity;

function rotateRadians(deltaLambda, deltaPhi, deltaGamma) {
  return (deltaLambda %= __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */]) ? (deltaPhi || deltaGamma ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */])(rotationLambda(deltaLambda), rotationPhiGamma(deltaPhi, deltaGamma))
    : rotationLambda(deltaLambda))
    : (deltaPhi || deltaGamma ? rotationPhiGamma(deltaPhi, deltaGamma)
    : rotationIdentity);
}

function forwardRotationLambda(deltaLambda) {
  return function(lambda, phi) {
    return lambda += deltaLambda, [lambda > __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda - __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda < -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] ? lambda + __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] : lambda, phi];
  };
}

function rotationLambda(deltaLambda) {
  var rotation = forwardRotationLambda(deltaLambda);
  rotation.invert = forwardRotationLambda(-deltaLambda);
  return rotation;
}

function rotationPhiGamma(deltaPhi, deltaGamma) {
  var cosDeltaPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(deltaPhi),
      sinDeltaPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(deltaPhi),
      cosDeltaGamma = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(deltaGamma),
      sinDeltaGamma = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(deltaGamma);

  function rotation(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
        k = z * cosDeltaPhi + x * sinDeltaPhi;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma - k * sinDeltaGamma, x * cosDeltaPhi - z * sinDeltaPhi),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* asin */])(k * cosDeltaGamma + y * sinDeltaGamma)
    ];
  }

  rotation.invert = function(lambda, phi) {
    var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
        x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(lambda) * cosPhi,
        y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda) * cosPhi,
        z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
        k = z * cosDeltaGamma - y * sinDeltaGamma;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(y * cosDeltaGamma + z * sinDeltaGamma, x * cosDeltaPhi + k * sinDeltaPhi),
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* asin */])(k * cosDeltaPhi - x * sinDeltaPhi)
    ];
  };

  return rotation;
}

/* harmony default export */ __webpack_exports__["a"] = (function(rotate) {
  rotate = rotateRadians(rotate[0] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], rotate[1] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], rotate.length > 2 ? rotate[2] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */] : 0);

  function forward(coordinates) {
    coordinates = rotate(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  }

  forward.invert = function(coordinates) {
    coordinates = rotate.invert(coordinates[0] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], coordinates[1] * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */]);
    return coordinates[0] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates[1] *= __WEBPACK_IMPORTED_MODULE_1__math__["h" /* degrees */], coordinates;
  };

  return forward;
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transformer;
/* harmony default export */ __webpack_exports__["a"] = (function(methods) {
  return {
    stream: transformer(methods)
  };
});

function transformer(methods) {
  return function(stream) {
    var s = new TransformStream;
    for (var key in methods) s[key] = methods[key];
    s.stream = stream;
    return s;
  };
}

function TransformStream() {}

TransformStream.prototype = {
  constructor: TransformStream,
  point: function(x, y) { this.stream.point(x, y); },
  sphere: function() { this.stream.sphere(); },
  lineStart: function() { this.stream.lineStart(); },
  lineEnd: function() { this.stream.lineEnd(); },
  polygonStart: function() { this.stream.polygonStart(); },
  polygonEnd: function() { this.stream.polygonEnd(); }
};


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(31);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(72);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return __WEBPACK_IMPORTED_MODULE_1__src_array__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(30);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return __WEBPACK_IMPORTED_MODULE_2__src_basis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(75);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return __WEBPACK_IMPORTED_MODULE_4__src_date__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(76);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return __WEBPACK_IMPORTED_MODULE_6__src_object__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(78);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(167);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(169);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return __WEBPACK_IMPORTED_MODULE_10__src_zoom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(77);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(162);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(163);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return __WEBPACK_IMPORTED_MODULE_13__src_lab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return __WEBPACK_IMPORTED_MODULE_16__src_quantize__["a"]; });



















/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(3);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(node, id).value[name];
  };
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(42);
/* unused harmony reexport bisect */
/* unused harmony reexport bisectRight */
/* unused harmony reexport bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(9);
/* unused harmony reexport ascending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(43);
/* unused harmony reexport bisector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(99);
/* unused harmony reexport cross */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(100);
/* unused harmony reexport descending */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(44);
/* unused harmony reexport deviation */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(45);
/* unused harmony reexport extent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(101);
/* unused harmony reexport histogram */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(111);
/* unused harmony reexport thresholdFreedmanDiaconis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(112);
/* unused harmony reexport thresholdScott */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(49);
/* unused harmony reexport thresholdSturges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(103);
/* unused harmony reexport max */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(104);
/* unused harmony reexport mean */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(105);
/* unused harmony reexport median */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(106);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(46);
/* unused harmony reexport min */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(47);
/* unused harmony reexport pairs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(107);
/* unused harmony reexport permute */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(22);
/* unused harmony reexport quantile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(108);
/* unused harmony reexport scan */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(109);
/* unused harmony reexport shuffle */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(110);
/* unused harmony reexport sum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(50);
/* unused harmony reexport ticks */
/* unused harmony reexport tickIncrement */
/* unused harmony reexport tickStep */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(51);
/* unused harmony reexport transpose */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(52);
/* unused harmony reexport variance */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(113);
/* unused harmony reexport zip */





























/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["h"] = color;
/* harmony export (immutable) */ __webpack_exports__["b"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["a"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(24);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = conicProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(4);



function conicProjection(projectAt) {
  var phi0 = 0,
      phi1 = __WEBPACK_IMPORTED_MODULE_0__math__["a" /* pi */] / 3,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["b" /* projectionMutator */])(projectAt),
      p = m(phi0, phi1);

  p.parallels = function(_) {
    return arguments.length ? m(phi0 = _[0] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi1 = _[1] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */]) : [phi0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], phi1 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  return p;
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__ = __webpack_require__(152);




function conicEqualAreaRaw(y0, y1) {
  var sy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0), n = (sy0 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y1)) / 2;

  // Are the parallels symmetrical around the Equator?
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cylindricalEqualArea__["a" /* cylindricalEqualAreaRaw */])(y0);

  var c = 1 + sy0 * (2 * n - sy0), r0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(c) / n;

  function project(x, y) {
    var r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(c - 2 * n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y)) / n;
    return [r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x *= n), r0 - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x)];
  }

  project.invert = function(x, y) {
    var r0y = r0 - y;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(r0y)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["q" /* sign */])(r0y), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])((c - (x * x + r0y * r0y) * n * n) / (2 * n))];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEqualAreaRaw)
      .scale(155.424)
      .center([0, 33.6442]);
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fitExtent;
/* harmony export (immutable) */ __webpack_exports__["b"] = fitSize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__stream__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__path_bounds__ = __webpack_require__(67);



function fitExtent(projection, extent, object) {
  var w = extent[1][0] - extent[0][0],
      h = extent[1][1] - extent[0][1],
      clip = projection.clipExtent && projection.clipExtent();

  projection
      .scale(150)
      .translate([0, 0]);

  if (clip != null) projection.clipExtent(null);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__stream__["a" /* default */])(object, projection.stream(__WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */]));

  var b = __WEBPACK_IMPORTED_MODULE_1__path_bounds__["a" /* default */].result(),
      k = Math.min(w / (b[1][0] - b[0][0]), h / (b[1][1] - b[0][1])),
      x = +extent[0][0] + (w - k * (b[1][0] + b[0][0])) / 2,
      y = +extent[0][1] + (h - k * (b[1][1] + b[0][1])) / 2;

  if (clip != null) projection.clipExtent(clip);

  return projection
      .scale(k * 150)
      .translate([x, y]);
}

function fitSize(projection, size, object) {
  return fitExtent(projection, [[0, 0], size], object);
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = mercatorRaw;
/* harmony export (immutable) */ __webpack_exports__["c"] = mercatorProjection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rotation__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(4);




function mercatorRaw(lambda, phi) {
  return [lambda, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + phi) / 2))];
}

mercatorRaw.invert = function(x, y) {
  return [x, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* exp */])(y)) - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return mercatorProjection(mercatorRaw)
      .scale(961 / __WEBPACK_IMPORTED_MODULE_0__math__["b" /* tau */]);
});

function mercatorProjection(project) {
  var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(project),
      center = m.center,
      scale = m.scale,
      translate = m.translate,
      clipExtent = m.clipExtent,
      x0 = null, y0, x1, y1; // clip extent

  m.scale = function(_) {
    return arguments.length ? (scale(_), reclip()) : scale();
  };

  m.translate = function(_) {
    return arguments.length ? (translate(_), reclip()) : translate();
  };

  m.center = function(_) {
    return arguments.length ? (center(_), reclip()) : center();
  };

  m.clipExtent = function(_) {
    return arguments.length ? ((_ == null ? x0 = y0 = x1 = y1 = null : (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1])), reclip()) : x0 == null ? null : [[x0, y0], [x1, y1]];
  };

  function reclip() {
    var k = __WEBPACK_IMPORTED_MODULE_0__math__["a" /* pi */] * scale(),
        t = m(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rotation__["a" /* default */])(m.rotate()).invert([0, 0]));
    return clipExtent(x0 == null
        ? [[t[0] - k, t[1] - k], [t[0] + k, t[1] + k]] : project === mercatorRaw
        ? [[Math.max(t[0] - k, x0), y0], [Math.min(t[0] + k, x1), y1]]
        : [[x0, Math.max(t[1] - k, y0)], [x1, Math.min(t[1] + k, y1)]]);
  }

  return reclip();
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(74);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(34);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(34);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["b"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["c"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["a" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = now;
/* harmony export (immutable) */ __webpack_exports__["b"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["a"] = timer;
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bisectRight */
/* unused harmony export bisectLeft */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(43);



var ascendingBisect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["a"] = (bisectRight);


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(52);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pair;
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export tickIncrement */
/* harmony export (immutable) */ __webpack_exports__["a"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* unused harmony default export */ var _unused_webpack_default_export = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(46);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch__["a"]; });



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = yesdrag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noevent__ = __webpack_require__(56);



/* harmony default export */ __webpack_exports__["a"] = (function(view) {
  var root = view.document.documentElement,
      selection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["select"])(view).on("dragstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["select"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return areaRingSum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return areaStream; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(8);





var areaRingSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

var areaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda00,
    phi00,
    lambda0,
    cosPhi0,
    sinPhi0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaRingSum.reset();
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    var areaRing = +areaRingSum;
    areaSum.add(areaRing < 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */] + areaRing : areaRing);
    this.lineStart = this.lineEnd = this.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  sphere: function() {
    areaSum.add(__WEBPACK_IMPORTED_MODULE_1__math__["b" /* tau */]);
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaRingEnd() {
  areaPoint(lambda00, phi00);
}

function areaPointFirst(lambda, phi) {
  areaStream.point = areaPoint;
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  lambda0 = lambda, cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["v" /* quarterPi */]), sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi);
}

function areaPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  phi = phi / 2 + __WEBPACK_IMPORTED_MODULE_1__math__["v" /* quarterPi */]; // half the angular distance from south pole

  // Spherical excess E for a spherical triangle with vertices: south pole,
  // previous point, current point.  Uses a formula derived from Cagnoli’s
  // theorem.  See Todhunter, Spherical Trig. (1871), Sec. 103, Eq. (2).
  var dLambda = lambda - lambda0,
      sdLambda = dLambda >= 0 ? 1 : -1,
      adLambda = sdLambda * dLambda,
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
      sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
      k = sinPhi0 * sinPhi,
      u = cosPhi0 * cosPhi + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(adLambda),
      v = k * sdLambda * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(adLambda);
  areaRingSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(v, u));

  // Advance the previous points.
  lambda0 = lambda, cosPhi0 = cosPhi, sinPhi0 = sinPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  areaSum.reset();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, areaStream);
  return areaSum * 2;
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = circleStream;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rotation__ = __webpack_require__(16);





// Generates a circle centered at [0°, 0°], with a given radius and precision.
function circleStream(stream, radius, delta, direction, t0, t1) {
  if (!delta) return;
  var cosRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(radius),
      sinRadius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(radius),
      step = direction * delta;
  if (t0 == null) {
    t0 = radius + direction * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */];
    t1 = radius - step / 2;
  } else {
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */];
  }
  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])([cosRadius, -sinRadius * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(t), -sinRadius * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  point = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(point), point[0] -= cosRadius;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["c" /* cartesianNormalizeInPlace */])(point);
  var radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["s" /* acos */])(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */]) % __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var center = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([0, 0]),
      radius = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(90),
      precision = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(6),
      ring,
      rotate,
      stream = {point: point};

  function point(x, y) {
    ring.push(x = rotate(x, y));
    x[0] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */], x[1] *= __WEBPACK_IMPORTED_MODULE_2__math__["h" /* degrees */];
  }

  function circle() {
    var c = center.apply(this, arguments),
        r = radius.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */],
        p = precision.apply(this, arguments) * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */];
    ring = [];
    rotate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__rotation__["b" /* rotateRadians */])(-c[0] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */], -c[1] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */], 0).invert;
    circleStream(stream, r, p, 1);
    c = {type: "Polygon", coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  circle.center = function(_) {
    return arguments.length ? (center = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([+_[0], +_[1]]), circle) : center;
  };

  circle.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : radius;
  };

  circle.precision = function(_) {
    return arguments.length ? (precision = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), circle) : precision;
  };

  return circle;
});


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(
  function() { return true; },
  clipAntimeridianLine,
  clipAntimeridianInterpolate,
  [-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */]]
));

// Takes a line and cuts into visible segments. Return values: 0 - there were
// intersections or the line was empty; 1 - no intersections; 2 - there were
// intersections, and the first and last segments should be rejoined.
function clipAntimeridianLine(stream) {
  var lambda0 = NaN,
      phi0 = NaN,
      sign0 = NaN,
      clean; // no intersections

  return {
    lineStart: function() {
      stream.lineStart();
      clean = 1;
    },
    point: function(lambda1, phi1) {
      var sign1 = lambda1 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */],
          delta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda1 - lambda0);
      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */]) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) { // line crosses a pole
        stream.point(lambda0, phi0 = (phi0 + phi1) / 2 > 0 ? __WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */]);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        stream.point(lambda1, phi0);
        clean = 0;
      } else if (sign0 !== sign1 && delta >= __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */]) { // line crosses antimeridian
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda0 - sign0) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) lambda0 -= sign0 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]; // handle degeneracies
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda1 - sign1) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) lambda1 -= sign1 * __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */];
        phi0 = clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1);
        stream.point(sign0, phi0);
        stream.lineEnd();
        stream.lineStart();
        stream.point(sign1, phi0);
        clean = 0;
      }
      stream.point(lambda0 = lambda1, phi0 = phi1);
      sign0 = sign1;
    },
    lineEnd: function() {
      stream.lineEnd();
      lambda0 = phi0 = NaN;
    },
    clean: function() {
      return 2 - clean; // if intersections, rejoin first and last segments
    }
  };
}

function clipAntimeridianIntersect(lambda0, phi0, lambda1, phi1) {
  var cosPhi0,
      cosPhi1,
      sinLambda0Lambda1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda0 - lambda1);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(sinLambda0Lambda1) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]
      ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["l" /* atan */])((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi0) * (cosPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi1)) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda1)
          - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi1) * (cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi0)) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(lambda0))
          / (cosPhi0 * cosPhi1 * sinLambda0Lambda1))
      : (phi0 + phi1) / 2;
}

function clipAntimeridianInterpolate(from, to, direction, stream) {
  var phi;
  if (from == null) {
    phi = direction * __WEBPACK_IMPORTED_MODULE_1__math__["k" /* halfPi */];
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], phi);
    stream.point(0, phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], phi);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], 0);
    stream.point(__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], -phi);
    stream.point(0, -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], -phi);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], 0);
    stream.point(-__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */], phi);
  } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(from[0] - to[0]) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]) {
    var lambda = from[0] < to[0] ? __WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */] : -__WEBPACK_IMPORTED_MODULE_1__math__["a" /* pi */];
    phi = direction * lambda / 2;
    stream.point(-lambda, phi);
    stream.point(0, phi);
    stream.point(lambda, phi);
  } else {
    stream.point(to[0], to[1]);
  }
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(5);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var lines = [],
      line;
  return {
    point: function(x, y) {
      line.push([x, y]);
    },
    lineStart: function() {
      lines.push(line = []);
    },
    lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
    rejoin: function() {
      if (lines.length > 1) lines.push(lines.pop().concat(lines.shift()));
    },
    result: function() {
      var result = lines;
      lines = [];
      line = null;
      return result;
    }
  };
});


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__circle__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pointEqual__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__(62);






/* harmony default export */ __webpack_exports__["a"] = (function(radius) {
  var cr = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(radius),
      delta = 6 * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */],
      smallRadius = cr > 0,
      notHemisphere = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* abs */])(cr) > __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */]; // TODO optimise for this common case

  function interpolate(from, to, direction, stream) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__circle__["b" /* circleStream */])(stream, radius, delta, direction, from, to);
  }

  function visible(lambda, phi) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(lambda) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(phi) > cr;
  }

  // Takes a line and cuts into visible segments. Return values used for polygon
  // clipping: 0 - there were intersections or the line was empty; 1 - no
  // intersections 2 - there were intersections, and the first and last segments
  // should be rejoined.
  function clipLine(stream) {
    var point0, // previous point
        c0, // code for previous point
        v0, // visibility of previous point
        v00, // visibility of first point
        clean; // no intersections
    return {
      lineStart: function() {
        v00 = v0 = false;
        clean = 1;
      },
      point: function(lambda, phi) {
        var point1 = [lambda, phi],
            point2,
            v = visible(lambda, phi),
            c = smallRadius
              ? v ? 0 : code(lambda, phi)
              : v ? code(lambda + (lambda < 0 ? __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */] : -__WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */]), phi) : 0;
        if (!point0 && (v00 = v0 = v)) stream.lineStart();
        // Handle degeneracies.
        // TODO ignore if not clipping polygons.
        if (v !== v0) {
          point2 = intersect(point0, point1);
          if (!point2 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point2) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point1, point2)) {
            point1[0] += __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];
            point1[1] += __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];
            v = visible(point1[0], point1[1]);
          }
        }
        if (v !== v0) {
          clean = 0;
          if (v) {
            // outside going in
            stream.lineStart();
            point2 = intersect(point1, point0);
            stream.point(point2[0], point2[1]);
          } else {
            // inside going out
            point2 = intersect(point0, point1);
            stream.point(point2[0], point2[1]);
            stream.lineEnd();
          }
          point0 = point2;
        } else if (notHemisphere && point0 && smallRadius ^ v) {
          var t;
          // If the codes for two points are different, or are both zero,
          // and there this segment intersects with the small circle.
          if (!(c & c0) && (t = intersect(point1, point0, true))) {
            clean = 0;
            if (smallRadius) {
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
            } else {
              stream.point(t[1][0], t[1][1]);
              stream.lineEnd();
              stream.lineStart();
              stream.point(t[0][0], t[0][1]);
            }
          }
        }
        if (v && (!point0 || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__pointEqual__["a" /* default */])(point0, point1))) {
          stream.point(point1[0], point1[1]);
        }
        point0 = point1, v0 = v, c0 = c;
      },
      lineEnd: function() {
        if (v0) stream.lineEnd();
        point0 = null;
      },
      // Rejoin first and last segments if there were intersections and the first
      // and last points were visible.
      clean: function() {
        return clean | ((v00 && v0) << 1);
      }
    };
  }

  // Intersects the great circle between a and b with the clip circle.
  function intersect(a, b, two) {
    var pa = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(a),
        pb = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])(b);

    // We have two planes, n1.p = d1 and n2.p = d2.
    // Find intersection line p(t) = c1 n1 + c2 n2 + t (n1 ⨯ n2).
    var n1 = [1, 0, 0], // normal
        n2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianCross */])(pa, pb),
        n2n2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(n2, n2),
        n1n2 = n2[0], // cartesianDot(n1, n2),
        determinant = n2n2 - n1n2 * n1n2;

    // Two polar points.
    if (!determinant) return !two && a;

    var c1 =  cr * n2n2 / determinant,
        c2 = -cr * n1n2 / determinant,
        n1xn2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["b" /* cartesianCross */])(n1, n2),
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianScale */])(n1, c1),
        B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianScale */])(n2, c2);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianAddInPlace */])(A, B);

    // Solve |p(t)|^2 = 1.
    var u = n1xn2,
        w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, u),
        uu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(u, u),
        t2 = w * w - uu * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["d" /* cartesianDot */])(A, A) - 1);

    if (t2 < 0) return;

    var t = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["n" /* sqrt */])(t2),
        q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianScale */])(u, (-w - t) / uu);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianAddInPlace */])(q, A);
    q = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q);

    if (!two) return q;

    // Two intersection points.
    var lambda0 = a[0],
        lambda1 = b[0],
        phi0 = a[1],
        phi1 = b[1],
        z;

    if (lambda1 < lambda0) z = lambda0, lambda0 = lambda1, lambda1 = z;

    var delta = lambda1 - lambda0,
        polar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* abs */])(delta - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */]) < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */],
        meridian = polar || delta < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];

    if (!polar && phi1 < phi0) z = phi0, phi0 = phi1, phi1 = z;

    // Check that the first point is between a and b.
    if (meridian
        ? polar
          ? phi0 + phi1 > 0 ^ q[1] < (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["p" /* abs */])(q[0] - lambda0) < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] ? phi0 : phi1)
          : phi0 <= q[1] && q[1] <= phi1
        : delta > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */] ^ (lambda0 <= q[0] && q[0] <= lambda1)) {
      var q1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["e" /* cartesianScale */])(u, (-w + t) / uu);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["f" /* cartesianAddInPlace */])(q1, A);
      return [q, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["g" /* spherical */])(q1)];
    }
  }

  // Generates a 4-bit vector representing the location of a point relative to
  // the small circle's bounding box.
  function code(lambda, phi) {
    var r = smallRadius ? radius : __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */] - radius,
        code = 0;
    if (lambda < -r) code |= 1; // left
    else if (lambda > r) code |= 2; // right
    if (phi < -r) code |= 4; // below
    else if (phi > r) code |= 8; // above
    return code;
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__index__["a" /* default */])(visible, clipLine, interpolate, smallRadius ? [0, -radius] : [-__WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */], radius - __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */]]);
});


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buffer__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rejoin__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__polygonContains__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_array__ = __webpack_require__(21);






/* harmony default export */ __webpack_exports__["a"] = (function(pointVisible, clipLine, interpolate, start) {
  return function(sink) {
    var line = clipLine(sink),
        ringBuffer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__buffer__["a" /* default */])(),
        ringSink = clipLine(ringBuffer),
        polygonStarted = false,
        polygon,
        segments,
        ring;

    var clip = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() {
        clip.point = pointRing;
        clip.lineStart = ringStart;
        clip.lineEnd = ringEnd;
        segments = [];
        polygon = [];
      },
      polygonEnd: function() {
        clip.point = point;
        clip.lineStart = lineStart;
        clip.lineEnd = lineEnd;
        segments = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_d3_array__["b" /* merge */])(segments);
        var startInside = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__polygonContains__["a" /* default */])(polygon, start);
        if (segments.length) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__rejoin__["a" /* default */])(segments, compareIntersection, startInside, interpolate, sink);
        } else if (startInside) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          interpolate(null, null, 1, sink);
          sink.lineEnd();
        }
        if (polygonStarted) sink.polygonEnd(), polygonStarted = false;
        segments = polygon = null;
      },
      sphere: function() {
        sink.polygonStart();
        sink.lineStart();
        interpolate(null, null, 1, sink);
        sink.lineEnd();
        sink.polygonEnd();
      }
    };

    function point(lambda, phi) {
      if (pointVisible(lambda, phi)) sink.point(lambda, phi);
    }

    function pointLine(lambda, phi) {
      line.point(lambda, phi);
    }

    function lineStart() {
      clip.point = pointLine;
      line.lineStart();
    }

    function lineEnd() {
      clip.point = point;
      line.lineEnd();
    }

    function pointRing(lambda, phi) {
      ring.push([lambda, phi]);
      ringSink.point(lambda, phi);
    }

    function ringStart() {
      ringSink.lineStart();
      ring = [];
    }

    function ringEnd() {
      pointRing(ring[0][0], ring[0][1]);
      ringSink.lineEnd();

      var clean = ringSink.clean(),
          ringSegments = ringBuffer.result(),
          i, n = ringSegments.length, m,
          segment,
          point;

      ring.pop();
      polygon.push(ring);
      ring = null;

      if (!n) return;

      // No intersections.
      if (clean & 1) {
        segment = ringSegments[0];
        if ((m = segment.length - 1) > 0) {
          if (!polygonStarted) sink.polygonStart(), polygonStarted = true;
          sink.lineStart();
          for (i = 0; i < m; ++i) sink.point((point = segment[i])[0], point[1]);
          sink.lineEnd();
        }
        return;
      }

      // Rejoin connected segments.
      // TODO reuse ringBuffer.rejoin()?
      if (n > 1 && clean & 2) ringSegments.push(ringSegments.pop().concat(ringSegments.shift()));

      segments.push(ringSegments.filter(validSegment));
    }

    return clip;
  };
});

function validSegment(segment) {
  return segment.length > 1;
}

// Intersections are sorted along the clip edge. For both antimeridian cutting
// and circle clipping, the same comparison is used.
function compareIntersection(a, b) {
  return ((a = a.x)[0] < 0 ? a[1] - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - a[1])
       - ((b = b.x)[0] < 0 ? b[1] - __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] : __WEBPACK_IMPORTED_MODULE_2__math__["k" /* halfPi */] - b[1]);
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pointEqual__ = __webpack_require__(68);


function Intersection(point, points, other, entry) {
  this.x = point;
  this.z = points;
  this.o = other; // another intersection
  this.e = entry; // is an entry?
  this.v = false; // visited
  this.n = this.p = null; // next & previous
}

// A generalized polygon clipping algorithm: given a polygon that has been cut
// into its visible line segments, and rejoins the segments by interpolating
// along the clip edge.
/* harmony default export */ __webpack_exports__["a"] = (function(segments, compareIntersection, startInside, interpolate, stream) {
  var subject = [],
      clip = [],
      i,
      n;

  segments.forEach(function(segment) {
    if ((n = segment.length - 1) <= 0) return;
    var n, p0 = segment[0], p1 = segment[n], x;

    // If the first and last points of a segment are coincident, then treat as a
    // closed ring. TODO if all rings are closed, then the winding order of the
    // exterior ring should be checked.
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__pointEqual__["a" /* default */])(p0, p1)) {
      stream.lineStart();
      for (i = 0; i < n; ++i) stream.point((p0 = segment[i])[0], p0[1]);
      stream.lineEnd();
      return;
    }

    subject.push(x = new Intersection(p0, segment, null, true));
    clip.push(x.o = new Intersection(p0, null, x, false));
    subject.push(x = new Intersection(p1, segment, null, false));
    clip.push(x.o = new Intersection(p1, null, x, true));
  });

  if (!subject.length) return;

  clip.sort(compareIntersection);
  link(subject);
  link(clip);

  for (i = 0, n = clip.length; i < n; ++i) {
    clip[i].e = startInside = !startInside;
  }

  var start = subject[0],
      points,
      point;

  while (1) {
    // Find first unvisited intersection.
    var current = start,
        isSubject = true;
    while (current.v) if ((current = current.n) === start) return;
    points = current.z;
    stream.lineStart();
    do {
      current.v = current.o.v = true;
      if (current.e) {
        if (isSubject) {
          for (i = 0, n = points.length; i < n; ++i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.n.x, 1, stream);
        }
        current = current.n;
      } else {
        if (isSubject) {
          points = current.p.z;
          for (i = points.length - 1; i >= 0; --i) stream.point((point = points[i])[0], point[1]);
        } else {
          interpolate(current.x, current.p.x, -1, stream);
        }
        current = current.p;
      }
      current = current.o;
      points = current.z;
      isSubject = !isSubject;
    } while (!current.v);
    stream.lineEnd();
  }
});

function link(array) {
  if (!(n = array.length)) return;
  var n,
      i = 0,
      a = array[0],
      b;
  while (++i < n) {
    a.n = b = array[i];
    b.p = a;
    a = b;
  }
  a.n = b = array[0];
  b.p = a;
}


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {

  function compose(x, y) {
    return x = a(x, y), b(x[0], x[1]);
  }

  if (a.invert && b.invert) compose.invert = function(x, y) {
    return x = b.invert(x, y), x && a.invert(x[0], x[1]);
  };

  return compose;
});


/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__length__ = __webpack_require__(66);


var coordinates = [null, null],
    object = {type: "LineString", coordinates: coordinates};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  coordinates[0] = a;
  coordinates[1] = b;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__length__["a" /* default */])(object);
});


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stream__ = __webpack_require__(8);





var lengthSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lambda0,
    sinPhi0,
    cosPhi0;

var lengthStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: lengthLineStart,
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */]
};

function lengthLineStart() {
  lengthStream.point = lengthPointFirst;
  lengthStream.lineEnd = lengthLineEnd;
}

function lengthLineEnd() {
  lengthStream.point = lengthStream.lineEnd = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
}

function lengthPointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  lambda0 = lambda, sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi), cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi);
  lengthStream.point = lengthPoint;
}

function lengthPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */];
  var sinPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(phi),
      cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(phi),
      delta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda - lambda0),
      cosDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(delta),
      sinDelta = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["d" /* sin */])(delta),
      x = cosPhi * sinDelta,
      y = cosPhi0 * sinPhi - sinPhi0 * cosPhi * cosDelta,
      z = sinPhi0 * sinPhi + cosPhi0 * cosPhi * cosDelta;
  lengthSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* sqrt */])(x * x + y * y), z));
  lambda0 = lambda, sinPhi0 = sinPhi, cosPhi0 = cosPhi;
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  lengthSum.reset();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__stream__["a" /* default */])(object, lengthStream);
  return +lengthSum;
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(5);


var x0 = Infinity,
    y0 = x0,
    x1 = -x0,
    y1 = x1;

var boundsStream = {
  point: boundsPoint,
  lineStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  polygonEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  result: function() {
    var bounds = [[x0, y0], [x1, y1]];
    x1 = y1 = -(y0 = x0 = Infinity);
    return bounds;
  }
};

function boundsPoint(x, y) {
  if (x < x0) x0 = x;
  if (x > x1) x1 = x;
  if (y < y0) y0 = y;
  if (y > y1) y1 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (boundsStream);


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(a[0] - b[0]) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(a[1] - b[1]) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */];
});


/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cartesian__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);




var sum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])();

/* harmony default export */ __webpack_exports__["a"] = (function(polygon, point) {
  var lambda = point[0],
      phi = point[1],
      normal = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(lambda), -__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(lambda), 0],
      angle = 0,
      winding = 0;

  sum.reset();

  for (var i = 0, n = polygon.length; i < n; ++i) {
    if (!(m = (ring = polygon[i]).length)) continue;
    var ring,
        m,
        point0 = ring[m - 1],
        lambda0 = point0[0],
        phi0 = point0[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["v" /* quarterPi */],
        sinPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(phi0),
        cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(phi0);

    for (var j = 0; j < m; ++j, lambda0 = lambda1, sinPhi0 = sinPhi1, cosPhi0 = cosPhi1, point0 = point1) {
      var point1 = ring[j],
          lambda1 = point1[0],
          phi1 = point1[1] / 2 + __WEBPACK_IMPORTED_MODULE_2__math__["v" /* quarterPi */],
          sinPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(phi1),
          cosPhi1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(phi1),
          delta = lambda1 - lambda0,
          sign = delta >= 0 ? 1 : -1,
          absDelta = sign * delta,
          antimeridian = absDelta > __WEBPACK_IMPORTED_MODULE_2__math__["a" /* pi */],
          k = sinPhi0 * sinPhi1;

      sum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* atan2 */])(k * sign * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(absDelta), cosPhi0 * cosPhi1 + k * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* cos */])(absDelta)));
      angle += antimeridian ? delta + sign * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* tau */] : delta;

      // Are the longitudes either side of the point’s meridian (lambda),
      // and are the latitudes smaller than the parallel (phi)?
      if (antimeridian ^ lambda0 >= lambda ^ lambda1 >= lambda) {
        var arc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["b" /* cartesianCross */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point0), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["a" /* cartesian */])(point1));
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianNormalizeInPlace */])(arc);
        var intersection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["b" /* cartesianCross */])(normal, arc);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__cartesian__["c" /* cartesianNormalizeInPlace */])(intersection);
        var phiArc = (antimeridian ^ delta >= 0 ? -1 : 1) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__math__["f" /* asin */])(intersection[2]);
        if (phi > phiArc || phi === phiArc && (arc[0] || arc[1])) {
          winding += antimeridian ^ delta >= 0 ? 1 : -1;
        }
      }
    }
  }

  // First, determine whether the South pole is inside or outside:
  //
  // It is inside if:
  // * the polygon winds around it in a clockwise direction.
  // * the polygon does not (cumulatively) wind around it, but has a negative
  //   (counter-clockwise) area.
  //
  // Second, count the (signed) number of times a segment crosses a lambda
  // from the point to the South pole.  If it is zero, then the point is the
  // same side as the South pole.

  return (angle < -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] || angle < __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */] && sum < -__WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */]) ^ (winding & 1);
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__conicEqualArea__ = __webpack_require__(27);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__conicEqualArea__["a" /* default */])()
      .parallels([29.5, 45.5])
      .scale(1070)
      .translate([480, 250])
      .rotate([96, 0])
      .center([-0.6, 38.7]);
});


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = equirectangularRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);


function equirectangularRaw(lambda, phi) {
  return [lambda, phi];
}

equirectangularRaw.invert = equirectangularRaw;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(equirectangularRaw)
      .scale(152.63);
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(31);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(nb),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__basis__["b" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(31);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return rgbBasisClosed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(14);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["c" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(start)).r, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["a" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(19);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(39);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(40);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["a"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(204);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_timeout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(203);
/* unused harmony reexport interval */







/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule__ = __webpack_require__(3);


/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["a" /* STARTING */] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["b" /* ENDING */];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["c" /* ENDED */];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(18);



/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateNumber"]
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateRgb"]
      : (c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateRgb"])
      : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["interpolateString"])(a, b);
});


/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* global topojson */
/* eslint-disable */
// event needs a bound import to function correctly


var d3 = Object.assign({}, __webpack_require__(132), __webpack_require__(1), __webpack_require__(117), __webpack_require__(205), __webpack_require__(18));
d3.event = __WEBPACK_IMPORTED_MODULE_0_d3_selection__;
/* eslint-enable */

function renderGlobe() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    world = _ref.world,
	    names = _ref.names,
	    mapTopo = _ref.mapTopo,
	    mapGeo = _ref.mapGeo;

	// set globe size
	var width = window.innerWidth;
	var height = window.innerHeight;
	var sens = 0.25;
	var focused = null; // used in drag events, currently disabled

	// Setting projection
	var projection = d3.geoOrthographic().scale(Math.min(width, height) * 0.5).rotate([0, 0]).translate([width / 2, height / 2]).clipAngle(90);

	var path = d3.geoPath().projection(projection);

	// SVG container
	var svg = d3.select('#globeContainer').append('svg').attr('width', width).attr('height', height).attr('class', 'globe');

	// Adding water background
	svg.append('path').datum({ type: 'Sphere' }).attr('class', 'water').attr('d', path);

	// adding globe grid lines
	svg.append('path').datum(d3.geoGraticule()).attr('class', 'graticule').attr('d', path);

	var countryTooltip = d3.select('#container').append('div').attr('class', 'countryTooltip');

	var countries = topojson.feature(world, world.objects.countries).features
	// country names are missing from world data, find them by matching id to name and filter anything missing
	.map(function (country) {
		var foundName = names.find(function (n) {
			return parseInt(n.id, 10) === parseInt(country.id, 10);
		});
		var output = country;
		var nameToUse = foundName ? foundName.name : '';
		output.name = nameToUse;
		return output;
	}).filter(function (country) {
		return country.name;
	});

	var countryById = countries.reduce(function (output, country) {
		var update = output;
		update[country.id] = country.name;
		return update;
	}, {});

	console.info({ countries: countries });
	var getRotationPosition = function getRotationPosition() {
		var r = projection.rotate();
		return { x: r[0] / sens, y: -r[1] / sens };
	};

	var dragRotate = function dragRotate() {}
	// if (/iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream) return
	// const rotate = projection.rotate();

	// // TODO - rewrite to support v4
	// // https://stackoverflow.com/questions/43772975/drag-rotate-projection-in-d3-v4
	// // https://jsfiddle.net/usze5ej2/
	// projection.rotate([d3.event.x * sens, -d3.event.y * sens, rotate[2]]);
	// svg.selectAll("path.land").attr("d", path);
	// svg.selectAll("path.circle").attr("d", path);
	// svg.selectAll("path.graticule").attr("d", path);
	// svg.selectAll(".focused").classed("focused", focused = false);


	// TODO - move to globals
	;var locationIndex = 0;
	// TODO - refactor into main content obj and refactor refernces
	var locations = [{
		country: countries.filter(function (c) {
			return c.name.toLowerCase().includes('korea');
		})[0],
		scale: 1.5,
		circle: 0,
		origin: [100, 100]
	}, {
		country: countries.filter(function (c) {
			return c.name.toLowerCase().includes('australia');
		})[0],
		scale: 0.9,
		circle: 1.1,
		origin: [100, 100]
	}, {
		country: countries.filter(function (c) {
			return c.name.toLowerCase().includes('united kingdom');
		})[0],
		scale: 0.5,
		circle: 1.8,
		origin: [0, 0]
	}, {
		country: countries.filter(function (c) {
			return c.name.toLowerCase().includes('arctic');
		})[0],
		scale: 0.3,
		circle: 1.5,
		origin: [100, 100]
	}, {
		country: countries.filter(function (c) {
			return c.name.toLowerCase().includes('united states');
		})[0],
		scale: 0.6,
		circle: 2,
		origin: [100, 100]
	}, {
		country: countries.filter(function (c) {
			return c.name.toLowerCase().includes('brazil');
		})[0],
		scale: 0.6,
		circle: 2.3,
		origin: [100, 100]
	}];

	// >>>>>>> DEPRICATED FROM CANVAS VERSION >>>>>>>>
	// const isOnStage = ({ section, thisIndex } = {}) => {
	// 	const { top, height } = section.getBoundingClientRect()
	// 	if (top < window.innerHeight && top > 0) {
	// 		locationIndex = thisIndex
	// 	}
	// }
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


	var sections = document.querySelectorAll('[data-type="editorialsection"]');

	window.addEventListener('scroll', function () {
		sections.forEach(function (section) {
			var thisIndex = parseInt(section.getAttribute('data-index'), 10);
			if (thisIndex === locationIndex) return;

			var _section$getBoundingC = section.getBoundingClientRect(),
			    top = _section$getBoundingC.top;

			if (top < window.innerHeight && top > 0) {
				locationIndex = thisIndex;
				transition();
			}
		});
	});

	// render globe background 'water' lement
	var svgWater = svg.selectAll('path.water') // eslint-disable-line
	.call(d3.drag().subject(getRotationPosition).on('drag', dragRotate));

	// Drawing countries on the globe
	var svgWorld = svg.selectAll('path.land') // eslint-disable-line
	.data(countries).enter().append('path').attr('class', 'land').attr('d', path).call(d3 // add drag behaviour
	.drag().subject(getRotationPosition).on('drag', dragRotate)).on('mouseover', function (d) {
		// console.log('mouseOver', d3.mouse())
		countryTooltip.text(countryById[d.id]).style('left', d3.event.pageX + 7 + 'px').style('top', d3.event.pageY - 15 + 'px').style('display', 'block').style('opacity', 1);
	}).on('mouseout', function (d) {
		countryTooltip.style('opacity', 0).style('display', 'none');
	}).on('mousemove', function (d) {
		countryTooltip.style('left', d3.event.pageX + 7 + 'px').style('top', d3.event.pageY - 15 + 'px');
	});

	// add circle mapped to projection - tester
	// TODO - refactor from main content
	var circleStart = {
		angle: 50 * locations[locationIndex].circle,
		origin: locations[0].country.geometry.coordinates[0][0]
	};

	console.log(locations[0].country.geometry.coordinates[0][0]);

	// TODO - create factories for SVG templates
	var svgCircle = svg.append('path').datum(d3.geoCircle().center([-90, 0]).radius([circleStart.angle])()).attr('class', 'circle').attr('d', path).call(d3.drag().subject(getRotationPosition).on('drag', dragRotate));

	// Country focus on option select
	function transition() {
		// const rotate = projection.rotate() // unused
		// console.log('focussed', locations, locationIndex)
		var focusedCountry = locations[locationIndex].country;
		var p = d3.geoCentroid(focusedCountry); // TODO - remove single latter naming
		var circleTweenFromAngle = circleStart.angle;
		var newAngle = 50 * locations[locationIndex].circle;
		circleStart.angle = newAngle;
		d3.transition().duration(2500).tween('scale', function () {
			var r = d3.interpolate(projection.rotate(), [-p[0], -p[1]]);
			var circleTweenAngle = d3.interpolate(circleTweenFromAngle, newAngle);
			// console.log(locations[locationIndex])
			var scaleTweenFrom = projection.scale();
			var scaleTweenTo = Math.min(width, height) * locations[locationIndex].scale;
			var scaleTween = d3.interpolate(scaleTweenFrom, scaleTweenTo);

			return function (t) {
				svgCircle.datum(d3.geoCircle().center(circleStart.origin).radius(circleTweenAngle(t))).attr('d', path);

				projection.rotate(r(t)).scale(scaleTween(t));

				svg.selectAll('path').attr('d', path)
				// TODO - what is this?
				.classed('focused', function (d) {
					return d.id === focusedCountry.id ? focused = d : false;
				});
			};
		});
	}
	transition();

	// >>> DEPRICATED ?? >>>>>>>>>>>>>>>
	// function country(cnt, sel) {
	// 	for(let i = 0, l = cnt.length; i < l; i++) {
	// 		if(cnt[i].id == sel.value) {return cnt[i];}
	// 	}
	// };
	// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
}

/* harmony default export */ __webpack_exports__["a"] = (renderGlobe);

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sass__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_sass___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__app_sass__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_index__ = __webpack_require__(95);



// Template content
function sections(_ref) {
	var title = _ref.title,
	    text = _ref.text,
	    i = _ref.i;

	return '<section data-index="' + i + '" data-type="editorialsection">\n\t\t<h1>' + title + '</h1>\n\t\t<p>' + text + '</p>\n\t</section>';
}

function layout() {
	var template = '\n\t<div id="globeContainer"></div>\n\t<section class="' + __WEBPACK_IMPORTED_MODULE_0__app_sass___default.a.wrapper + '">\n\t\t<h1>' + __WEBPACK_IMPORTED_MODULE_1__content_index__["a" /* default */].header.title + '</h1>\n\t\t<h3>' + __WEBPACK_IMPORTED_MODULE_1__content_index__["a" /* default */].header.intro + '</h3>\n\t</section>\n\t' + __WEBPACK_IMPORTED_MODULE_1__content_index__["a" /* default */].parts.map(function (p, i) {
		return sections({ title: p.title, text: p.text, i: i });
	}) + '\n\t\n\t';

	return template;
}

/* harmony default export */ __webpack_exports__["a"] = (layout);

/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_json__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__config_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__state__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__functions_isMobileDevice__ = __webpack_require__(96);
/* eslint no-console: ['warn', {allow: ['error', 'warn', 'info']}] */





// This factory function runs basic set up functionswhen instantiated
// It also returns an object with a render method to add templated content to DOM

function start() {
	var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
	    _ref$inner = _ref.inner,
	    inner = _ref$inner === undefined ? '' : _ref$inner;

	var longform = document.querySelector('.longform-group');
	var standardMetro = document.querySelector('.content .story');
	var standardNews = document.querySelector('#page #story');
	// we store the project name in the config json file so it can be
	// referenced by other functions in particular the webpack config scripts
	// here we store the selector for the main app container

	var isTestEnv = function isTestEnv() {
		return ['localhost', '127.0.0.1'].indexOf(window.location.hostname) !== -1;
	};

	// Store key variables in single STATE oject for later use
	// This element is part of the embed code used in Methodé publishing
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer = document.querySelector('#' + __WEBPACK_IMPORTED_MODULE_0__config_json___default.a.projectName);
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].window = {
		width: window.innerWidth,
		height: window.innerHeight
	};
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isMobile = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__functions_isMobileDevice__["a" /* default */])();
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].rowWidths = [0];
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isLongform = !!longform;
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isStandard = !!standardMetro || !!standardNews;
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isTest = isTestEnv();

	// if a mobile device is detected a boolean is stored on
	// the main container as a flag for device specific styling
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer.setAttribute('data-mobile', __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isMobile);
	var pageTemplate = function pageTemplate() {
		if (__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isLongform) return 'longform';
		if (__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].isStandard) return 'standard';
		return 'test';
	};
	__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer.setAttribute('data-pagetemplate', pageTemplate());

	// the STATE object is logged to the console for reference / debugging throuhgh development
	console.info({ STATE: __WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */] });

	var render = function render() {
		// Render content into the main container
		__WEBPACK_IMPORTED_MODULE_1__state__["a" /* default */].appContainer.innerHTML = inner;
	};

	return { render: render };
}

/* harmony default export */ __webpack_exports__["a"] = (start);

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Polygon","coordinates":[[[-66.4453125,-51.17934297928927],[-59.0625,-6.315298538330033],[-100.546875,31.952162238024975],[-118.47656249999999,53.9560855309879],[-143.4375,66.79190947341796],[-187.03125,66.65297740055279],[-223.2421875,61.938950426660604],[-226.05468749999997,43.32517767999296],[-230.62499999999997,36.87962060502676],[-250.31250000000003,25.799891182088334],[-262.6171875,7.013667927566642],[-262.6171875,-10.833305983642491],[-236.6015625,-8.407168163601076],[-211.9921875,-12.554563528593656],[-203.203125,-25.48295117535531],[-196.171875,-39.90973623453718],[-198.28125,-50.736455137010644],[-185.625,-48.69096039092549],[-178.59375,-35.17380831799957],[-190.8984375,-19.642587534013032],[-202.5,1.7575368113083254],[-224.6484375,13.923403897723347],[-229.57031249999997,21.616579336740603],[-216.5625,35.746512259918504],[-209.8828125,46.558860303117164],[-195.1171875,53.54030739150022],[-181.05468749999997,61.10078883158897],[-165.58593749999997,61.438767493682825],[-150.82031249999997,60.75915950226991],[-136.0546875,47.517200697839414],[-126.5625,31.653381399664],[-100.8984375,10.487811882056695],[-85.4296875,3.8642546157214084],[-78.046875,-18.646245142670598],[-78.046875,-56.170022982932046],[-71.3671875,-59.5343180010956],[-66.4453125,-51.17934297928927]]]}}]}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {"type":"Topology","objects":{"collection":{"type":"GeometryCollection","geometries":[{"type":"Point","coordinates":[1480,9999]},{"type":"Point","coordinates":[0,4434]},{"type":"Polygon","arcs":[[0]]},{"type":"Polygon","arcs":[[1]]},{"type":"Polygon","arcs":[[2]]},{"type":"Polygon","arcs":[[3]]},{"type":"Polygon","arcs":[[4]]}]}},"arcs":[[[1992,6608],[-812,-64],[0,-1648],[851,-592],[-39,2304]],[[3588,7457],[6411,0],[0,1655],[-6411,0],[0,-1655]],[[9421,103],[-82,276],[-34,553],[-109,-208],[44,-534],[111,-190],[70,103]],[[9312,802],[158,2026],[33,887],[-195,-8],[-126,-3032],[130,127]],[[9460,3668],[-290,1692],[-167,-456],[322,-1728],[135,492]]],"transform":{"scale":[0.03635519801980198,0.01059206099858843],"translate":[-50.625,-56.072035471800866]},"bbox":[-50.625,-56.072035471800866,312.890625,49.83798245308484]}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {"type":"Topology","objects":{"countries":{"type":"GeometryCollection","bbox":[-179.99999999999997,-90.00000000000003,180.00000000000014,83.64513000000001],"geometries":[{"type":"Polygon","id":4,"arcs":[[0,1,2,3,4,5]]},{"type":"MultiPolygon","id":24,"arcs":[[[6,7,8,9]],[[10,11,12]]]},{"type":"Polygon","id":8,"arcs":[[13,14,15,16,17]]},{"type":"Polygon","id":784,"arcs":[[18,19,20,21,22]]},{"type":"MultiPolygon","id":32,"arcs":[[[23,24]],[[25,26,27,28,29,30]]]},{"type":"Polygon","id":51,"arcs":[[31,32,33,34,35]]},{"type":"MultiPolygon","id":10,"arcs":[[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]]]},{"type":"Polygon","id":260,"arcs":[[44]]},{"type":"MultiPolygon","id":36,"arcs":[[[45]],[[46]]]},{"type":"Polygon","id":40,"arcs":[[47,48,49,50,51,52,53]]},{"type":"MultiPolygon","id":31,"arcs":[[[54,-35]],[[55,56,-33,57,58]]]},{"type":"Polygon","id":108,"arcs":[[59,60,61]]},{"type":"Polygon","id":56,"arcs":[[62,63,64,65,66]]},{"type":"Polygon","id":204,"arcs":[[67,68,69,70,71]]},{"type":"Polygon","id":854,"arcs":[[72,73,74,-70,75,76]]},{"type":"Polygon","id":50,"arcs":[[77,78,79]]},{"type":"Polygon","id":100,"arcs":[[80,81,82,83,84,85]]},{"type":"MultiPolygon","id":44,"arcs":[[[86]],[[87]],[[88]]]},{"type":"Polygon","id":70,"arcs":[[89,90,91]]},{"type":"Polygon","id":112,"arcs":[[92,93,94,95,96]]},{"type":"Polygon","id":84,"arcs":[[97,98,99]]},{"type":"Polygon","id":68,"arcs":[[100,101,102,103,-31]]},{"type":"Polygon","id":76,"arcs":[[-27,104,-103,105,106,107,108,109,110,111,112]]},{"type":"Polygon","id":96,"arcs":[[113,114]]},{"type":"Polygon","id":64,"arcs":[[115,116]]},{"type":"Polygon","id":72,"arcs":[[117,118,119,120]]},{"type":"Polygon","id":140,"arcs":[[121,122,123,124,125,126,127]]},{"type":"MultiPolygon","id":124,"arcs":[[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[138,139,140,141]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]]]},{"type":"Polygon","id":756,"arcs":[[-51,161,162,163]]},{"type":"MultiPolygon","id":152,"arcs":[[[-24,164]],[[-30,165,166,-101]]]},{"type":"MultiPolygon","id":156,"arcs":[[[167]],[[168,169,170,171,172,173,-117,174,175,176,177,-4,178,179,180,181,182,183]]]},{"type":"Polygon","id":384,"arcs":[[184,185,186,187,-73,188]]},{"type":"Polygon","id":120,"arcs":[[189,190,191,192,193,194,-128,195]]},{"type":"Polygon","id":180,"arcs":[[196,197,-60,198,199,-10,200,-13,201,-126,202]]},{"type":"Polygon","id":178,"arcs":[[-12,203,204,-196,-127,-202]]},{"type":"Polygon","id":170,"arcs":[[205,206,207,208,209,-107,210]]},{"type":"Polygon","id":188,"arcs":[[211,212,213,214]]},{"type":"Polygon","id":192,"arcs":[[215]]},{"type":"Polygon","id":-99,"arcs":[[216,217]]},{"type":"Polygon","id":196,"arcs":[[218,-218]]},{"type":"Polygon","id":203,"arcs":[[-53,219,220,221]]},{"type":"Polygon","id":276,"arcs":[[222,223,-220,-52,-164,224,225,-64,226,227,228]]},{"type":"Polygon","id":262,"arcs":[[229,230,231,232]]},{"type":"MultiPolygon","id":208,"arcs":[[[233]],[[-229,234]]]},{"type":"Polygon","id":214,"arcs":[[235,236]]},{"type":"Polygon","id":12,"arcs":[[237,238,239,240,241,242,243,244]]},{"type":"Polygon","id":218,"arcs":[[245,-206,246]]},{"type":"Polygon","id":818,"arcs":[[247,248,249,250,251]]},{"type":"Polygon","id":232,"arcs":[[252,253,254,-233]]},{"type":"Polygon","id":724,"arcs":[[255,256,257,258]]},{"type":"Polygon","id":233,"arcs":[[259,260,261]]},{"type":"Polygon","id":231,"arcs":[[-232,262,263,264,265,266,267,-253]]},{"type":"Polygon","id":246,"arcs":[[268,269,270,271]]},{"type":"MultiPolygon","id":242,"arcs":[[[272]],[[273]]]},{"type":"Polygon","id":238,"arcs":[[274]]},{"type":"MultiPolygon","id":250,"arcs":[[[275,276,277,-111]],[[278]],[[279,-225,-163,280,281,-257,282,-66]]]},{"type":"Polygon","id":266,"arcs":[[283,284,-190,-205]]},{"type":"MultiPolygon","id":826,"arcs":[[[285,286]],[[287]]]},{"type":"Polygon","id":268,"arcs":[[288,289,-58,-32,290]]},{"type":"Polygon","id":288,"arcs":[[291,-189,-77,292]]},{"type":"Polygon","id":324,"arcs":[[293,294,295,296,297,298,-187]]},{"type":"Polygon","id":270,"arcs":[[299,300]]},{"type":"Polygon","id":624,"arcs":[[301,302,-297]]},{"type":"Polygon","id":226,"arcs":[[303,-191,-285]]},{"type":"MultiPolygon","id":300,"arcs":[[[304]],[[305,-15,306,-84,307]]]},{"type":"Polygon","id":304,"arcs":[[308]]},{"type":"Polygon","id":320,"arcs":[[309,310,-100,311,312,313]]},{"type":"Polygon","id":328,"arcs":[[314,315,-109,316]]},{"type":"Polygon","id":340,"arcs":[[317,318,-313,319,320]]},{"type":"Polygon","id":191,"arcs":[[321,-92,322,323,324,325]]},{"type":"Polygon","id":332,"arcs":[[-237,326]]},{"type":"Polygon","id":348,"arcs":[[-48,327,328,329,330,-326,331]]},{"type":"MultiPolygon","id":360,"arcs":[[[332]],[[333,334]],[[335]],[[336]],[[337]],[[338]],[[339]],[[340]],[[341,342]],[[343]],[[344]],[[345,346]],[[347]]]},{"type":"Polygon","id":356,"arcs":[[-177,348,-175,-116,-174,349,-80,350,351]]},{"type":"Polygon","id":372,"arcs":[[352,-286]]},{"type":"Polygon","id":364,"arcs":[[353,-6,354,355,356,357,-55,-34,-57,358]]},{"type":"Polygon","id":368,"arcs":[[359,360,361,362,363,364,-357]]},{"type":"Polygon","id":352,"arcs":[[365]]},{"type":"Polygon","id":376,"arcs":[[366,367,368,-252,369,370,371]]},{"type":"MultiPolygon","id":380,"arcs":[[[372]],[[373]],[[374,375,-281,-162,-50]]]},{"type":"Polygon","id":388,"arcs":[[376]]},{"type":"Polygon","id":400,"arcs":[[-367,377,-363,378,379,-369,380]]},{"type":"MultiPolygon","id":392,"arcs":[[[381]],[[382]],[[383]]]},{"type":"Polygon","id":398,"arcs":[[384,385,386,387,-181,388]]},{"type":"Polygon","id":404,"arcs":[[389,390,391,392,-265,393]]},{"type":"Polygon","id":417,"arcs":[[-389,-180,394,395]]},{"type":"Polygon","id":116,"arcs":[[396,397,398,399]]},{"type":"Polygon","id":410,"arcs":[[400,401]]},{"type":"Polygon","id":-99,"arcs":[[-18,402,403,404]]},{"type":"Polygon","id":414,"arcs":[[405,406,-361]]},{"type":"Polygon","id":418,"arcs":[[407,408,-172,409,-398]]},{"type":"Polygon","id":422,"arcs":[[-371,410,411]]},{"type":"Polygon","id":430,"arcs":[[412,413,-294,-186]]},{"type":"Polygon","id":434,"arcs":[[414,-245,415,416,-250,417,418]]},{"type":"Polygon","id":144,"arcs":[[419]]},{"type":"Polygon","id":426,"arcs":[[420]]},{"type":"Polygon","id":440,"arcs":[[421,422,423,-93,424]]},{"type":"Polygon","id":442,"arcs":[[-226,-280,-65]]},{"type":"Polygon","id":428,"arcs":[[425,-262,426,-94,-424]]},{"type":"Polygon","id":504,"arcs":[[-242,427,428]]},{"type":"Polygon","id":498,"arcs":[[429,430]]},{"type":"Polygon","id":450,"arcs":[[431]]},{"type":"Polygon","id":484,"arcs":[[432,-98,-311,433,434]]},{"type":"Polygon","id":807,"arcs":[[-405,435,-85,-307,-14]]},{"type":"Polygon","id":466,"arcs":[[436,-239,437,-74,-188,-299,438]]},{"type":"Polygon","id":104,"arcs":[[439,-78,-350,-173,-409,440]]},{"type":"Polygon","id":499,"arcs":[[441,-323,-91,442,-403,-17]]},{"type":"Polygon","id":496,"arcs":[[443,-183]]},{"type":"Polygon","id":508,"arcs":[[444,445,446,447,448,449,450,451]]},{"type":"Polygon","id":478,"arcs":[[452,453,454,-240,-437]]},{"type":"Polygon","id":454,"arcs":[[-452,455,456]]},{"type":"MultiPolygon","id":458,"arcs":[[[457,458]],[[-346,459,-115,460]]]},{"type":"Polygon","id":516,"arcs":[[461,-8,462,-119,463]]},{"type":"Polygon","id":540,"arcs":[[464]]},{"type":"Polygon","id":562,"arcs":[[-75,-438,-238,-415,465,-194,466,-71]]},{"type":"Polygon","id":566,"arcs":[[467,-72,-467,-193]]},{"type":"Polygon","id":558,"arcs":[[468,-321,469,-213]]},{"type":"Polygon","id":528,"arcs":[[-227,-63,470]]},{"type":"MultiPolygon","id":578,"arcs":[[[471,-272,472,473]],[[474]],[[475]],[[476]]]},{"type":"Polygon","id":524,"arcs":[[-349,-176]]},{"type":"MultiPolygon","id":554,"arcs":[[[477]],[[478]]]},{"type":"MultiPolygon","id":512,"arcs":[[[479,480,-22,481]],[[-20,482]]]},{"type":"Polygon","id":586,"arcs":[[-178,-352,483,-355,-5]]},{"type":"Polygon","id":591,"arcs":[[484,-215,485,-208]]},{"type":"Polygon","id":604,"arcs":[[-167,486,-247,-211,-106,-102]]},{"type":"MultiPolygon","id":608,"arcs":[[[487]],[[488]],[[489]],[[490]],[[491]],[[492]],[[493]]]},{"type":"MultiPolygon","id":598,"arcs":[[[494]],[[495]],[[-342,496]],[[497]]]},{"type":"Polygon","id":616,"arcs":[[-224,498,499,-425,-97,500,501,-221]]},{"type":"Polygon","id":630,"arcs":[[502]]},{"type":"Polygon","id":408,"arcs":[[503,504,-402,505,-169]]},{"type":"Polygon","id":620,"arcs":[[-259,506]]},{"type":"Polygon","id":600,"arcs":[[-104,-105,-26]]},{"type":"Polygon","id":275,"arcs":[[-381,-368]]},{"type":"Polygon","id":634,"arcs":[[507,508]]},{"type":"Polygon","id":642,"arcs":[[509,-431,510,511,-81,512,-330]]},{"type":"MultiPolygon","id":643,"arcs":[[[513]],[[-500,514,-422]],[[515]],[[516]],[[517]],[[518]],[[519]],[[-504,-184,-444,-182,-388,520,-59,-290,521,522,-95,-427,-261,523,-269,-472,524]],[[525]],[[526]],[[527]]]},{"type":"Polygon","id":646,"arcs":[[528,-61,-198,529]]},{"type":"Polygon","id":732,"arcs":[[-241,-455,530,-428]]},{"type":"Polygon","id":682,"arcs":[[531,-379,-362,-407,532,-509,533,-23,-481,534]]},{"type":"Polygon","id":729,"arcs":[[535,536,-123,537,-418,-249,538,-254,-268,539]]},{"type":"Polygon","id":728,"arcs":[[540,-266,-393,541,-203,-125,542,-536]]},{"type":"Polygon","id":686,"arcs":[[543,-453,-439,-298,-303,544,-301]]},{"type":"MultiPolygon","id":90,"arcs":[[[545]],[[546]],[[547]],[[548]],[[549]]]},{"type":"Polygon","id":694,"arcs":[[550,-295,-414]]},{"type":"Polygon","id":222,"arcs":[[551,-314,-319]]},{"type":"Polygon","id":-99,"arcs":[[-263,-231,552,553]]},{"type":"Polygon","id":706,"arcs":[[-394,-264,-554,554]]},{"type":"Polygon","id":688,"arcs":[[-86,-436,-404,-443,-90,-322,-331,-513]]},{"type":"Polygon","id":740,"arcs":[[555,-277,556,-110,-316]]},{"type":"Polygon","id":703,"arcs":[[-502,557,-328,-54,-222]]},{"type":"Polygon","id":705,"arcs":[[-49,-332,-325,558,-375]]},{"type":"Polygon","id":752,"arcs":[[-473,-271,559]]},{"type":"Polygon","id":748,"arcs":[[560,-448]]},{"type":"Polygon","id":760,"arcs":[[-378,-372,-412,561,562,-364]]},{"type":"Polygon","id":148,"arcs":[[-466,-419,-538,-122,-195]]},{"type":"Polygon","id":768,"arcs":[[563,-293,-76,-69]]},{"type":"Polygon","id":764,"arcs":[[564,-459,565,-441,-408,-397]]},{"type":"Polygon","id":762,"arcs":[[-395,-179,-3,566]]},{"type":"Polygon","id":795,"arcs":[[-354,567,-386,568,-1]]},{"type":"Polygon","id":626,"arcs":[[569,-334]]},{"type":"Polygon","id":780,"arcs":[[570]]},{"type":"Polygon","id":788,"arcs":[[-244,571,-416]]},{"type":"MultiPolygon","id":792,"arcs":[[[-291,-36,-358,-365,-563,572]],[[-308,-83,573]]]},{"type":"Polygon","id":158,"arcs":[[574]]},{"type":"Polygon","id":834,"arcs":[[-391,575,-445,-457,576,-199,-62,-529,577]]},{"type":"Polygon","id":800,"arcs":[[-530,-197,-542,-392,-578]]},{"type":"Polygon","id":804,"arcs":[[-523,578,-511,-430,-510,-329,-558,-501,-96]]},{"type":"Polygon","id":858,"arcs":[[-113,579,-28]]},{"type":"MultiPolygon","id":840,"arcs":[[[580]],[[581]],[[582]],[[583]],[[584]],[[585,-435,586,-139]],[[587]],[[588]],[[589]],[[-141,590]]]},{"type":"Polygon","id":860,"arcs":[[-569,-385,-396,-567,-2]]},{"type":"Polygon","id":862,"arcs":[[591,-317,-108,-210]]},{"type":"Polygon","id":704,"arcs":[[592,-399,-410,-171]]},{"type":"MultiPolygon","id":548,"arcs":[[[593]],[[594]]]},{"type":"Polygon","id":887,"arcs":[[595,-535,-480]]},{"type":"Polygon","id":710,"arcs":[[-464,-118,596,-449,-561,-447,597],[-421]]},{"type":"Polygon","id":894,"arcs":[[-456,-451,598,-120,-463,-7,-200,-577]]},{"type":"Polygon","id":716,"arcs":[[-597,-121,-599,-450]]}]},"land":{"type":"MultiPolygon","arcs":[[[592,399,564,457,565,439,78,350,483,355,359,405,532,507,533,18,482,20,481,595,531,379,247,538,254,229,552,554,389,575,445,597,461,8,200,10,203,283,303,191,467,67,563,291,184,412,550,295,301,544,299,543,453,530,428,242,571,416,250,369,410,561,572,288,521,578,511,81,573,305,15,441,323,558,375,281,257,506,255,282,66,470,227,234,222,498,514,422,425,259,523,269,559,473,524,504,400,505,169],[123,542,536],[540,266,539],[386,520,55,358,567]],[[24,164]],[[579,28,165,486,245,206,484,211,468,317,551,309,433,586,139,590,141,585,432,98,311,319,469,213,485,208,591,314,555,277,111],[556,275]],[[36]],[[37]],[[38]],[[39]],[[40]],[[41]],[[42]],[[43]],[[44]],[[45]],[[46]],[[86]],[[87]],[[88]],[[459,113,460,346]],[[128]],[[129]],[[130]],[[131]],[[132]],[[133]],[[134]],[[135]],[[136]],[[137]],[[142]],[[143]],[[144]],[[145]],[[146]],[[147]],[[148]],[[149]],[[150]],[[151]],[[152]],[[153]],[[154]],[[155]],[[156]],[[157]],[[158]],[[159]],[[160]],[[167]],[[215]],[[216,218]],[[233]],[[235,326]],[[272]],[[273]],[[274]],[[278]],[[286,352]],[[287]],[[304]],[[308]],[[332]],[[334,569]],[[335]],[[336]],[[337]],[[338]],[[339]],[[340]],[[342,496]],[[343]],[[344]],[[347]],[[365]],[[372]],[[373]],[[376]],[[381]],[[382]],[[383]],[[419]],[[431]],[[464]],[[474]],[[475]],[[476]],[[477]],[[478]],[[487]],[[488]],[[489]],[[490]],[[491]],[[492]],[[493]],[[494]],[[495]],[[497]],[[502]],[[513]],[[515]],[[516]],[[517]],[[518]],[[519]],[[525]],[[526]],[[527]],[[545]],[[546]],[[547]],[[548]],[[549]],[[570]],[[574]],[[580]],[[581]],[[582]],[[583]],[[584]],[[587]],[[588]],[[589]],[[593]],[[594]]]}},"arcs":[[[67002,72360],[284,-219],[209,77],[58,261],[219,87],[157,175],[55,460],[234,112],[44,205],[131,-154],[84,-18]],[[68477,73346],[154,-4],[210,-122]],[[68841,73220],[85,-70],[201,185],[93,-111],[90,264],[166,-12],[43,84],[29,233],[120,200],[150,-131],[-30,-176],[84,-27],[-26,-484],[110,-189],[97,121],[123,57],[173,258],[192,-42],[286,-1]],[[70827,73379],[50,-165]],[[70877,73214],[-162,-65],[-141,-106],[-319,-67],[-298,-121],[-163,-251],[66,-244],[32,-287],[-139,-242],[12,-221],[-76,-207],[-265,18],[110,-381],[-177,-146],[-118,-347],[15,-346],[-108,-162],[-103,53],[-212,-75],[-31,-161],[-207,1],[-154,-326],[-10,-490],[-361,-239],[-194,50],[-56,-126],[-166,74],[-278,-87],[-465,294]],[[66909,69007],[252,523],[-23,370],[-210,97],[-22,366],[-91,460],[119,315],[-121,85],[76,419],[113,718]],[[56642,45537],[29,-179],[-32,-279],[49,-270],[-41,-216],[24,-199],[-579,7],[-13,-1832],[188,-471],[181,-360]],[[56448,41738],[-510,-235],[-673,82],[-192,276],[-1126,-25],[-42,-40],[-166,260],[-180,17],[-166,-98],[-134,-110]],[[53259,41865],[-26,363],[38,506],[96,527],[15,247],[90,519],[66,236],[159,377],[90,256],[29,427],[-15,326],[-83,206],[-74,350],[-68,345],[15,120],[85,228],[-84,557],[-57,385],[-139,364],[26,112]],[[53422,48316],[115,78],[80,-11],[98,69],[820,-7],[68,-430],[80,-345],[64,-186],[106,-301],[184,46],[91,81],[154,-81],[42,144],[69,336],[172,22],[15,100],[142,2],[-24,-207],[337,5],[5,-363],[56,-222],[-41,-347],[21,-354],[93,-214],[-15,-685],[68,53],[121,-15],[172,87],[127,-34]],[[53383,48495],[-74,433]],[[53309,48928],[112,249],[84,97],[104,-198]],[[53609,49076],[-101,-121],[-45,-148],[-9,-251],[-71,-61]],[[55719,75933],[-35,-196],[39,-247],[115,-140]],[[55838,75350],[-5,-151],[-91,-84],[-16,-187],[-129,-279]],[[55597,74649],[-48,40],[-5,127],[-154,193],[-24,274],[23,393],[38,179],[-47,91]],[[55380,75946],[-18,183],[120,284],[18,-109],[75,51]],[[55575,76355],[59,-154],[66,-59],[19,-209]],[[64327,65792],[49,28],[11,-158],[217,91],[230,-15],[168,-17],[190,389],[207,369],[176,355]],[[65575,66834],[52,-196]],[[65627,66638],[38,-455]],[[65665,66183],[-142,-2],[-23,-375],[50,-80],[-126,-114],[-1,-235],[-81,-238],[-7,-232]],[[65335,64907],[-56,-122],[-835,290],[-106,584],[-11,133]],[[31400,20215],[-168,16],[-297,0],[0,1286]],[[30935,21517],[106,-267],[139,-432],[361,-345],[389,-144],[-125,-288],[-264,-29],[-141,203]],[[32587,39017],[511,-940],[227,-88],[339,-425],[286,-225],[40,-254],[-273,-876],[280,-156],[312,-88],[220,92],[252,441],[45,509]],[[34826,37007],[138,110],[139,-332],[-6,-460],[-234,-318],[-186,-234],[-314,-559],[-370,-786]],[[33993,34428],[-70,-461],[-74,-592],[3,-573],[-61,-128],[-21,-372]],[[33770,32302],[-19,-301],[353,-493],[-38,-397],[173,-251],[-14,-282],[-267,-738],[-412,-309],[-557,-120],[-305,58],[59,-343],[-57,-431],[51,-291],[-167,-202],[-284,-80],[-267,210],[-108,-151],[39,-572],[188,-173],[152,181],[82,-299],[-255,-179],[-223,-358],[-41,-579],[-66,-309],[-262,-1],[-218,-295],[-80,-432],[273,-422],[266,-116],[-96,-517],[-328,-325],[-180,-675],[-254,-227],[-113,-270],[89,-598],[185,-333],[-117,29]],[[30952,21711],[-257,90],[-672,77],[-115,336],[6,431],[-185,-37],[-98,209],[-24,611],[213,253],[88,365],[-33,292],[148,491],[101,763],[-30,338],[122,109],[-30,217],[-129,115],[92,242],[-126,218],[-65,665],[112,117],[-47,702],[65,590],[75,513],[166,209],[-84,563],[-1,529],[210,376],[-7,481],[159,562],[1,530],[-72,105],[-128,994],[171,592],[-27,558],[100,523],[182,540],[196,358],[-83,226],[58,186],[-9,960],[302,284],[96,598],[-34,144]],[[31359,38736],[231,521],[364,-141],[163,-416],[109,464],[316,-24],[45,-123]],[[62106,75494],[386,89]],[[62492,75583],[57,-151],[106,-100],[-56,-144],[148,-198],[-78,-183],[118,-157],[124,-94],[7,-399]],[[62918,74157],[-101,-17]],[[62817,74140],[-113,333],[1,89],[-123,-2],[-82,155],[-58,-16]],[[62442,74699],[-109,168],[-207,144],[27,280],[-47,203]],[[33452,5736],[-82,-294],[-81,-259],[-582,79],[-621,-34],[-348,192],[0,22],[-152,170],[625,-23],[599,-56],[207,237],[147,203],[288,-237]],[[5775,6048],[-533,-79],[-364,204],[-163,203],[-11,34],[-180,158],[169,214],[517,-90],[277,-181],[212,-203],[76,-260]],[[37457,6883],[342,-248],[120,-350],[33,-248],[11,-293],[-430,-181],[-452,-146],[-522,-136],[-582,-113],[-658,34],[-365,192],[49,237],[593,158],[239,192],[174,248],[126,214],[168,203],[180,238],[0,-1],[141,0],[414,125],[419,-125]],[[16330,9501],[359,-90],[332,102],[-158,-203],[-261,-147],[-386,45],[-278,203],[60,192],[332,-102]],[[15122,9513],[425,-226],[-164,23],[-359,56],[-381,158],[202,124],[277,-135]],[[22505,10404],[305,-79],[304,68],[163,-327],[-217,45],[-337,-23],[-343,23],[-376,-34],[-283,113],[-146,237],[174,101],[353,-79],[403,-45]],[[30985,10967],[33,-259],[-49,-226],[-76,-214],[-326,-79],[-311,-113],[-364,11],[136,226],[-327,-79],[-310,-79],[-212,169],[-16,237],[305,226],[190,67],[321,-22],[82,293],[16,215],[-6,462],[158,271],[256,90],[147,-214],[65,-214],[120,-260],[92,-248],[76,-260]],[[0,3044],[16,-4],[245,335],[501,-181],[32,21],[294,183],[38,-6],[32,-5],[402,-239],[352,239],[63,33],[816,102],[265,-135],[130,-68],[419,-192],[789,-147],[625,-180],[1072,-136],[800,158],[1181,-113],[669,-180],[734,169],[773,158],[60,271],[-1094,22],[-898,136],[-234,225],[-745,125],[49,259],[103,237],[104,214],[-55,237],[-462,158],[-212,204],[-430,180],[675,-34],[642,91],[402,-192],[495,169],[457,214],[223,192],[-98,237],[-359,158],[-408,169],[-571,34],[-500,79],[-539,57],[-180,214],[-359,181],[-217,203],[-87,654],[136,-56],[250,-181],[457,57],[441,79],[228,-249],[441,57],[370,124],[348,158],[315,192],[419,56],[-11,215],[-97,214],[81,203],[359,102],[163,-192],[425,113],[321,146],[397,12],[375,56],[376,136],[299,124],[337,124],[218,-34],[190,-45],[414,79],[370,-102],[381,12],[364,79],[375,-57],[414,-56],[386,22],[403,-11],[413,-11],[381,22],[283,170],[337,90],[349,-124],[331,101],[300,203],[179,-180],[98,-203],[180,-192],[288,169],[332,-214],[375,-68],[321,-158],[392,34],[354,101],[418,-22],[376,-79],[381,-102],[147,249],[-180,191],[-136,204],[-359,45],[-158,214],[-60,214],[-98,429],[213,-79],[364,-34],[359,34],[327,-90],[283,-169],[119,-203],[376,-34],[359,79],[381,113],[342,67],[283,-135],[370,45],[239,440],[224,-259],[321,-102],[348,56],[228,-225],[365,-23],[337,-68],[332,-124],[218,215],[108,203],[278,-226],[381,57],[283,-125],[190,-191],[370,56],[288,124],[283,147],[337,79],[392,68],[354,79],[272,124],[163,180],[65,249],[-32,236],[-87,226],[-98,226],[-87,226],[-71,203],[-16,225],[27,226],[130,214],[109,237],[44,226],[-55,248],[-32,226],[136,260],[152,169],[180,214],[190,181],[223,169],[109,248],[152,158],[174,147],[267,34],[174,180],[196,113],[228,68],[202,147],[157,180],[218,68],[163,-147],[-103,-192],[-283,-169],[-120,-124],[-206,90],[-229,-56],[-190,-136],[-202,-146],[-136,-170],[-38,-225],[17,-215],[130,-191],[-190,-136],[-261,-45],[-153,-192],[-163,-180],[-174,-249],[-44,-214],[98,-237],[147,-181],[229,-135],[212,-181],[114,-225],[60,-215],[82,-225],[130,-192],[82,-215],[38,-530],[81,-214],[22,-226],[87,-226],[-38,-304],[-152,-237],[-163,-192],[-370,-79],[-125,-203],[-169,-192],[-419,-215],[-370,-90],[-348,-124],[-376,-124],[-223,-237],[-446,-23],[-489,23],[-441,-45],[-468,0],[87,-226],[424,-101],[311,-158],[174,-204],[-310,-180],[-479,56],[-397,-146],[-17,-237],[-11,-226],[327,-192],[60,-214],[353,-215],[588,-90],[500,-158],[398,-180],[506,-181],[690,-90],[681,-158],[473,-170],[517,-191],[272,-271],[136,-215],[337,204],[457,169],[484,180],[577,147],[495,158],[691,11],[680,-79],[560,-135],[180,248],[386,169],[702,12],[550,124],[522,124],[577,79],[614,102],[430,146],[-196,203],[-119,203],[0,215],[-539,-23],[-571,-90],[-544,0],[-77,214],[39,429],[125,124],[397,136],[468,135],[337,169],[337,170],[251,225],[380,102],[376,79],[190,45],[430,23],[408,79],[343,112],[337,136],[305,135],[386,181],[245,192],[261,169],[82,226],[-294,135],[98,237],[185,181],[288,112],[305,136],[283,180],[217,226],[136,271],[202,158],[331,-34],[136,-192],[332,-22],[11,214],[142,226],[299,-57],[71,-214],[331,-34],[360,102],[348,67],[315,-34],[120,-237],[305,192],[283,102],[315,79],[310,79],[283,135],[310,91],[240,124],[168,203],[207,-147],[288,79],[202,-271],[157,-203],[316,113],[125,226],[283,158],[365,-34],[108,-215],[229,215],[299,68],[326,22],[294,-11],[310,-68],[300,-34],[130,-192],[180,-169],[304,102],[327,22],[315,0],[310,12],[278,79],[294,67],[245,158],[261,102],[283,56],[212,158],[152,316],[158,192],[288,-90],[109,-203],[239,-136],[289,45],[196,-203],[206,-146],[283,135],[98,248],[250,102],[289,192],[272,79],[326,112],[218,125],[228,135],[218,124],[261,-68],[250,203],[180,158],[261,-11],[229,136],[54,203],[234,158],[228,113],[278,90],[256,45],[244,-34],[262,-56],[223,-158],[27,-249],[245,-191],[168,-158],[332,-68],[185,-158],[229,-158],[266,-34],[223,113],[240,237],[261,-124],[272,-68],[261,-68],[272,-45],[277,0],[229,-598],[-11,-147],[-33,-259],[-266,-147],[-218,-214],[38,-226],[310,11],[-38,-225],[-141,-215],[-131,-237],[212,-180],[321,-57],[321,102],[153,226],[92,214],[153,181],[174,169],[70,203],[147,282],[174,57],[316,22],[277,68],[283,90],[136,226],[82,214],[190,215],[272,146],[234,113],[153,192],[157,101],[202,91],[277,-57],[250,57],[272,67],[305,-33],[201,158],[142,383],[103,-158],[131,-271],[234,-112],[266,-46],[267,68],[283,-45],[261,-11],[174,56],[234,-34],[212,-124],[250,79],[300,0],[255,79],[289,-79],[185,192],[141,192],[191,158],[348,429],[179,-79],[212,-158],[185,-203],[354,-350],[272,-12],[256,0],[299,68],[299,79],[229,158],[190,169],[310,23],[207,124],[218,-113],[141,-180],[196,-181],[305,23],[190,-147],[332,-147],[348,-56],[288,45],[218,181],[185,180],[250,45],[251,-79],[288,-56],[261,90],[250,0],[245,-56],[256,-57],[250,102],[299,90],[283,23],[316,0],[255,56],[251,45],[76,282],[11,237],[174,-158],[49,-259],[92,-237],[115,-192],[234,-102],[315,34],[365,12],[250,33],[364,0],[262,12],[364,-23],[310,-45],[196,-181],[-54,-214],[179,-169],[299,-136],[310,-146],[360,-102],[375,-90],[283,-90],[315,-12],[180,192],[245,-158],[212,-180],[245,-136],[337,-56],[321,-68],[136,-226],[316,-135],[212,-203],[310,-90],[321,11],[299,-34],[332,11],[332,-45],[310,-79],[288,-135],[289,-113],[195,-169],[-32,-226],[-147,-203],[-125,-260],[-98,-203],[-131,-237],[-364,-90],[-163,-203],[-360,-124],[-125,-226],[-190,-214],[-201,-181],[-115,-237],[-70,-214],[-28,-260],[6,-214],[158,-226],[60,-214],[130,-204],[517,-78],[109,-249],[-501,-90],[-424,-124],[-528,-23],[-234,-327],[-49,-271],[-119,-214],[-147,-215],[370,-191],[141,-237],[239,-215],[338,-192],[386,-180],[419,-181],[636,-180],[142,-282],[800,-125],[53,-44],[208,-170],[767,147],[636,-181],[-99520,-139]],[[69148,23827],[179,-181],[263,-72],[9,-110],[-77,-262],[-427,-37],[-7,306],[41,238],[19,118]],[[90387,28338],[269,-199],[151,79],[217,111],[166,-39],[20,-684],[-95,-198],[-29,-463],[-97,157],[-193,-401],[-57,31],[-171,18],[-171,493],[-38,380],[-160,502],[7,264],[181,-51]],[[89877,43903],[100,-452],[179,217],[92,-243],[133,-225],[-29,-255],[60,-494],[42,-288],[70,-70],[75,-492],[-27,-299],[90,-390],[301,-301],[197,-274],[186,-251],[-37,-139],[159,-361],[108,-623],[111,126],[113,-249],[68,88],[48,-610],[197,-354],[129,-220],[217,-466],[78,-463],[7,-328],[-19,-356],[132,-490],[-16,-509],[-48,-267],[-75,-514],[6,-330],[-55,-413],[-123,-524],[-205,-283],[-102,-446],[-93,-284],[-82,-497],[-107,-287],[-70,-431],[-36,-397],[14,-182],[-159,-200],[-311,-21],[-257,-236],[-127,-223],[-168,-248],[-230,255],[-170,101],[43,301],[-152,-109],[-243,-417],[-240,156],[-158,91],[-159,41],[-269,167],[-179,355],[-52,437],[-64,291],[-137,233],[-267,70],[91,279],[-67,428],[-136,-399],[-247,-106],[146,319],[42,332],[107,282],[-22,427],[-226,-491],[-174,-197],[-106,-458],[-217,237],[9,305],[-174,418],[-147,216],[52,133],[-356,349],[-195,16],[-267,280],[-498,-54],[-359,-206],[-317,-192],[-265,38],[-294,-296],[-241,-132],[-53,-302],[-103,-234],[-236,-14],[-174,-52],[-246,105],[-199,-62],[-191,-27],[-165,-307],[-81,26],[-140,-163],[-133,-183],[-203,23],[-186,0],[-295,368],[-149,109],[6,330],[138,79],[47,131],[-10,207],[34,400],[-31,341],[-147,582],[-45,329],[12,328],[-111,375],[-7,169],[-123,230],[-35,451],[-158,456],[-39,245],[122,-249],[-93,535],[137,-167],[83,-223],[-5,294],[-138,454],[-26,181],[-65,173],[31,333],[56,141],[38,289],[-29,336],[114,415],[21,-439],[118,396],[225,193],[136,245],[212,212],[126,45],[77,-71],[219,214],[168,64],[42,126],[74,53],[153,-14],[292,169],[151,256],[71,307],[163,293],[13,229],[7,314],[194,489],[117,-497],[119,115],[-99,272],[87,279],[122,-125],[34,439],[152,283],[67,227],[140,98],[4,161],[122,-67],[5,145],[122,82],[134,78],[205,-264],[155,-342],[173,-3],[177,-54],[-59,316],[133,462],[126,150],[-44,144],[121,329],[168,203],[142,-68],[234,108],[-5,294],[-204,190],[148,84],[184,-143],[148,-236],[234,-148],[79,59],[172,-177],[162,164],[105,-50],[65,111],[127,-285],[-74,-308],[-105,-233],[-96,-19],[32,-230],[-81,-288],[-99,-283],[20,-163],[221,-318],[214,-184],[143,-199],[201,-341],[78,1],[145,-148],[43,-178],[265,-195],[183,197],[55,309],[56,255],[34,316],[85,458],[-39,279],[20,167],[-32,330],[37,434],[53,117],[-43,192],[67,305],[52,317],[7,164],[104,216],[78,-282],[19,-361],[70,-70],[11,-242],[101,-293],[21,-326],[-10,-209]],[[54716,79543],[-21,-236],[-156,-1],[53,-125],[-92,-370]],[[54500,78811],[-53,-97],[-243,-15],[-140,-130],[-229,44]],[[53835,78613],[-398,149],[-62,200],[-274,-100],[-32,-109],[-169,81]],[[52900,78834],[-142,16],[-125,105],[42,141],[-10,102]],[[52665,79198],[83,32],[141,-160],[39,152],[245,-25],[199,104],[133,-18],[87,-118],[26,98],[-40,375],[100,73],[98,266]],[[53776,79977],[206,-186],[157,236],[98,43],[215,-176],[131,30],[128,-109]],[[54711,79815],[-23,-73],[28,-199]],[[62817,74140],[-190,76],[-141,266],[-44,217]],[[63495,75906],[146,-303],[141,-408],[130,-27],[85,-156],[-228,-46],[-49,-447],[-48,-202],[-101,-135],[7,-285]],[[63578,73897],[-69,-28],[-173,301],[95,285],[-82,169],[-104,-43],[-327,-424]],[[62492,75583],[68,94],[207,-165],[149,-34],[38,67],[-136,312],[72,79]],[[62890,75936],[78,-19],[191,-350],[122,-39],[48,146],[166,232]],[[58149,49238],[-17,694],[-70,262]],[[58062,50194],[169,-45],[85,328],[147,-38]],[[58463,50439],[16,-227],[60,-130],[3,-187],[-69,-121],[-108,-300],[-101,-209],[-115,-27]],[[50920,81398],[204,-45],[257,120],[176,-252],[153,-135]],[[51710,81086],[-32,-389]],[[51678,80697],[-72,-22],[-30,-323]],[[51576,80352],[-243,263],[-143,-45],[-194,272],[-129,231],[-129,9],[-40,203]],[[50698,81285],[222,113]],[[50747,55434],[-229,-68]],[[50518,55366],[-69,398],[13,1322],[-56,119],[-11,283],[-96,201],[-85,170],[35,303]],[[50249,58162],[96,66],[56,251],[136,54],[61,172]],[[50598,58705],[93,169],[100,2],[212,-332]],[[51003,58544],[-11,-191],[62,-342],[-54,-232],[29,-154],[-135,-357],[-86,-176],[-52,-364],[7,-366],[-16,-928]],[[49214,57382],[-190,149],[-130,-22],[-97,-145],[-125,122],[-49,190],[-125,126]],[[48498,57802],[-18,334],[76,244],[-7,195],[221,477],[41,395],[76,141],[134,-78],[116,117],[38,148],[216,259],[53,180],[259,238],[153,82],[70,-110],[178,3]],[[50104,60427],[-22,-280],[37,-262],[156,-376],[9,-279],[320,-130],[-6,-395]],[[50249,58162],[-243,13]],[[50006,58175],[-128,46],[-90,-93],[-123,42],[-482,-27],[-7,-327],[38,-434]],[[75742,64522],[-6,-413],[-97,88],[18,-464]],[[75657,63733],[-79,301],[-16,293],[-53,277],[-116,335],[-256,23],[25,-237],[-87,-321],[-118,117],[-41,-105],[-78,63],[-108,52]],[[74730,64531],[-43,474],[-96,433],[47,347],[-171,154],[62,210],[173,215],[-200,305],[98,390],[220,-248],[133,-29],[24,-400],[265,-79],[257,8],[160,-98],[-128,-487],[-124,-34],[-86,-327],[152,-299],[46,368],[76,2],[147,-914]],[[56293,77303],[80,-236],[108,42],[213,-90],[408,-30],[138,147],[327,133],[202,-209],[163,-60]],[[57932,77000],[-144,-239],[-101,-412],[89,-328]],[[57776,76021],[-239,77],[-283,-181]],[[57254,75917],[-3,-287],[-252,-55],[-196,202],[-222,-159],[-206,17]],[[56375,75635],[-20,381],[-139,185]],[[56216,76201],[46,81],[-30,69],[47,183],[105,180],[-135,248],[-24,211],[68,130]],[[28462,65512],[-68,-29],[-70,332],[-104,167],[60,365],[84,-23],[97,-478],[1,-334]],[[28383,67136],[-303,-92],[-19,213],[130,46],[184,-17],[8,-150]],[[28611,67142],[-48,-409],[-51,73],[4,301],[-124,228],[-1,66],[220,-259]],[[55279,77663],[100,2],[-69,-253],[134,-222],[-41,-271],[-65,-25]],[[55338,76894],[-52,-53],[-90,-134],[-41,-316]],[[55155,76391],[-246,218],[-105,240],[-106,128],[-127,215],[-61,178],[-136,270],[59,239],[99,-133],[60,120],[130,13],[239,-96],[192,8],[126,-128]],[[56523,82877],[268,-4],[302,217],[64,325],[228,184],[-26,258]],[[57359,83857],[169,97],[298,222]],[[57826,84176],[293,-144],[39,-143],[146,68],[272,-137],[27,-270],[-60,-156],[174,-377],[113,-105],[-16,-104],[187,-101],[80,-154],[-108,-126],[-224,20],[-54,-53],[66,-192],[68,-368]],[[58829,81834],[-239,-34],[-85,-127],[-18,-290],[-111,56],[-250,-28],[-73,135],[-104,-100],[-105,83],[-218,11],[-310,139],[-281,45],[-215,-13],[-152,-156],[-133,-23]],[[56535,81532],[-6,257],[-85,267],[166,117],[2,230],[-77,219],[-12,255]],[[25238,62085],[-2,85],[33,26],[51,-68],[99,348],[53,7]],[[25472,62483],[1,-84],[53,-3],[-5,-157],[-45,-249],[24,-89],[-29,-206],[18,-55],[-32,-291],[-55,-153],[-50,-18],[-55,-199]],[[25297,60979],[-83,-1],[22,650],[2,457]],[[31359,38736],[-200,-79],[-109,794],[-150,646],[88,557],[-146,244],[-37,416],[-136,391]],[[30669,41705],[175,622],[-119,484],[63,194],[-49,213],[108,288],[6,490],[13,405],[60,195],[-240,926]],[[30686,45522],[206,-48],[143,12],[62,174],[243,234],[147,216],[363,98],[-29,-432],[34,-221],[-23,-386],[302,-516],[311,-95],[109,-216],[188,-114],[115,-167],[175,6],[161,-171],[12,-333],[55,-168],[3,-248],[-81,-10],[107,-671],[533,-23],[-41,-333],[30,-227],[151,-162],[66,-358],[-49,-453],[-77,-253],[27,-328],[-87,-119]],[[33842,40210],[-4,177],[-259,295],[-258,8],[-484,-167],[-133,-507],[-7,-310],[-110,-689]],[[34826,37007],[54,332],[38,340],[0,317],[-100,105],[-104,-94],[-103,26],[-33,222],[-26,527],[-52,172],[-187,156],[-114,-113],[-293,111],[18,782],[-82,320]],[[30686,45522],[-157,-99],[-126,66],[18,875],[-228,-339],[-245,15],[-105,307],[-184,33],[59,247],[-155,351],[-115,518],[73,106],[0,243],[168,166],[-28,312],[71,200],[20,269],[318,392],[227,111],[37,86],[251,-27]],[[30585,49354],[125,1579],[6,250],[-43,330],[-123,210],[1,418],[156,95],[56,-60],[9,221],[-162,60],[-4,360],[541,-13],[92,198],[77,-182],[55,-340],[52,71]],[[31423,52551],[153,-304],[216,37],[54,176],[206,135],[115,94],[32,244],[198,164],[-15,121],[-235,49],[-39,363],[12,386],[-125,149],[52,53],[206,-73],[221,-144],[80,136],[200,89],[310,216],[102,220],[-37,162]],[[33129,54824],[145,26],[64,-133],[-36,-253],[96,-87],[63,-268],[-77,-203],[-44,-490],[71,-291],[20,-267],[171,-270],[137,-28],[30,112],[88,25],[126,101],[90,153],[154,-48],[67,20]],[[34294,52923],[151,-47],[25,118],[-46,114],[28,167],[112,-51],[131,59],[159,-122]],[[34854,53161],[121,-119],[86,156],[62,-24],[38,-162],[133,41],[107,219],[85,424],[164,527]],[[35650,54223],[95,27],[69,-318],[155,-1008],[149,-95],[7,-397],[-208,-474],[86,-174],[491,-90],[10,-578],[211,378],[349,-207],[462,-351],[135,-338],[-45,-319],[323,178],[540,-305],[415,23],[411,-477],[355,-645],[214,-166],[237,-23],[101,-182],[94,-733],[46,-348],[-110,-953],[-142,-376],[-391,-801],[-177,-651],[-206,-499],[-69,-11],[-78,-424],[20,-1079],[-77,-888],[-30,-379],[-88,-228],[-49,-769],[-282,-752],[-47,-595],[-225,-250],[-65,-345],[-302,2],[-437,-222],[-195,-256],[-311,-168],[-327,-459],[-235,-571],[-41,-430],[46,-318],[-51,-582],[-63,-281],[-195,-317],[-308,-1013],[-244,-457],[-189,-269],[-127,-548],[-183,-329]],[[35174,32383],[-77,326],[122,273],[-160,392],[-218,318],[-286,369],[-103,-17],[-279,446],[-180,-62]],[[81723,54436],[110,215],[236,316]],[[82069,54967],[-13,-284],[-16,-368],[-133,18],[-58,-196],[-126,299]],[[75471,67823],[113,-184],[-20,-354],[-227,-17],[-234,39],[-175,-90],[-252,218],[-6,115]],[[74670,67550],[184,429],[150,146],[198,-134],[147,-14],[122,-154]],[[58175,39107],[-393,-424],[-249,-430],[-93,-383],[-83,-217],[-152,-46],[-48,-275],[-28,-180],[-178,-134],[-226,28],[-133,162],[-117,70],[-135,-134],[-68,-276],[-132,-173],[-139,-257],[-199,-59],[-62,202],[26,351],[-165,548],[-75,86]],[[55526,37566],[0,1681],[274,20],[8,2051],[207,19],[428,202],[106,-238],[177,226],[85,1],[156,130]],[[56967,41658],[50,-43]],[[57017,41615],[107,-460],[56,-103],[87,-333],[315,-633],[119,-62],[0,-203],[82,-365],[215,-88],[177,-261]],[[54244,56103],[229,44],[52,148],[46,-11],[69,-131],[350,221],[118,224],[145,202],[-28,202],[78,53],[269,-35],[261,266],[201,629],[141,233],[176,98]],[[56351,58246],[31,-246],[160,-360],[1,-235],[-45,-240],[18,-179],[96,-166]],[[56612,56820],[212,-252]],[[56824,56568],[152,-232],[2,-188],[187,-299],[116,-250],[70,-345],[208,-228],[44,-183]],[[57603,54843],[-91,-61],[-178,14],[-209,60],[-104,-49],[-41,-140],[-90,-17],[-110,121],[-309,-287],[-127,58],[-38,-45],[-83,-347],[-207,112],[-203,57],[-177,212],[-229,196],[-149,-186],[-108,-292],[-25,-402]],[[55125,53847],[-178,33],[-188,96],[-166,-305],[-146,-536]],[[54447,53135],[-29,167],[-12,263],[-127,185],[-103,297],[-23,207],[-132,301],[23,171],[-28,243],[21,446],[67,105],[140,583]],[[32315,78637],[202,-78],[257,16],[-137,-236],[-102,-37],[-353,244],[-69,193],[105,177],[97,-279]],[[32831,80108],[-135,-10],[-360,180],[-258,272],[96,49],[365,-145],[284,-240],[8,-106]],[[15692,79765],[-140,-80],[-456,262],[-84,204],[-248,202],[-50,164],[-286,103],[-107,314],[24,133],[291,-125],[171,-88],[261,-61],[94,-198],[138,-274],[277,-238],[115,-318]],[[34407,81019],[-184,-504],[181,195],[187,-124],[-98,-200],[247,-158],[128,140],[277,-177],[-86,-422],[194,99],[36,-306],[86,-358],[-117,-507],[-125,-21],[-183,109],[60,471],[-77,73],[-322,-499],[-166,20],[196,270],[-267,140],[-298,-34],[-539,17],[-43,171],[173,202],[-121,157],[234,347],[287,917],[172,328],[241,198],[129,-25],[-54,-156],[-148,-363]],[[13005,83025],[131,-75],[267,46],[-84,-654],[242,-463],[-111,1],[-167,264],[-103,265],[-140,179],[-51,253],[16,184]],[[27981,87625],[-108,-302],[-123,49],[-73,171],[13,40],[107,173],[114,-13],[70,-118]],[[27250,87943],[-325,-317],[-196,13],[-61,156],[207,265],[381,-5],[-6,-112]],[[26344,89640],[51,-253],[143,89],[161,-151],[304,-198],[318,-179],[25,-274],[204,45],[199,-191],[-247,-181],[-432,138],[-156,259],[-275,-306],[-396,-298],[-95,337],[-377,-55],[242,284],[35,454],[95,527],[201,-47]],[[28926,90499],[-312,-29],[-69,282],[118,323],[255,80],[217,-160],[3,-246],[-32,-80],[-180,-170]],[[23431,91627],[-173,-202],[-374,175],[-226,-63],[-380,259],[245,178],[194,250],[295,-164],[166,-103],[84,-110],[169,-220]],[[31350,77823],[-181,326],[0,785],[-123,166],[-187,-98],[-92,152],[-212,-435],[-84,-448],[-99,-262],[-118,-89],[-89,-29],[-28,-142],[-512,-1],[-422,-4],[-125,-106],[-294,-414],[-34,-45],[-89,-225],[-255,0],[-273,-2],[-125,-91],[44,-113],[25,-176],[-5,-58],[-363,-287],[-286,-90],[-323,-308],[-70,0],[-94,91],[-31,82],[6,60],[61,202],[131,317],[81,340],[-56,500],[-59,523],[-290,270],[35,103],[-41,70],[-76,0],[-56,91],[-14,137],[-54,-60],[-75,18],[17,57],[-65,57],[-27,151],[-216,185],[-224,191],[-272,223],[-261,209],[-248,-163],[-91,-6],[-342,150],[-225,-75],[-269,179],[-284,91],[-194,36],[-86,97],[-49,317],[-94,-3],[-1,-221],[-575,0],[-951,0],[-944,-1],[-833,1],[-834,0],[-819,0],[-847,0],[-273,0],[-825,0],[-788,0]],[[15878,80048],[-38,1],[-537,566],[-199,248],[-503,239],[-155,510],[40,353],[-356,245],[-48,464],[-336,419],[-6,296]],[[13740,83389],[154,278],[-7,363],[-473,367],[-284,657],[-173,413],[-255,259],[-187,236],[-147,298],[-279,-187],[-270,-321],[-247,378],[-194,252],[-271,160],[-273,17],[1,3279],[2,2137]],[[10837,91975],[518,-139],[438,-277],[289,-53],[244,241],[336,179],[413,-70],[416,253],[455,144],[191,-239],[207,134],[62,272],[192,-62],[470,-516],[369,390],[38,-437],[341,95],[105,168],[337,-33],[424,-242],[650,-211],[383,-98],[272,37],[374,-292],[-390,-286],[502,-123],[750,68],[236,100],[296,-345],[302,291],[-283,245],[179,197],[338,26],[223,58],[224,-138],[279,-312],[310,46],[491,-260],[431,91],[405,-13],[-32,358],[247,100],[431,-195],[-2,-545],[177,459],[223,-15],[126,579],[-298,355],[-324,233],[22,636],[329,418],[366,-92],[281,-255],[378,-649],[-247,-283],[517,-116],[-1,-589],[371,451],[332,-371],[-83,-427],[269,-388],[290,416],[202,497],[16,632],[394,-44],[411,-85],[373,-286],[17,-285],[-207,-307],[196,-309],[-36,-280],[-544,-403],[-386,-88],[-287,173],[-83,-289],[-268,-486],[-81,-252],[-322,-389],[-397,-38],[-220,-244],[-18,-374],[-323,-72],[-340,-467],[-301,-648],[-108,-454],[-16,-669],[409,-96],[125,-539],[130,-437],[388,114],[517,-250],[277,-219],[199,-272],[348,-158],[294,-243],[459,-33],[302,-56],[-45,-499],[86,-578],[201,-645],[414,-547],[214,188],[150,592],[-145,909],[-196,303],[445,270],[314,404],[154,401],[-23,385],[-188,489],[-338,434],[328,603],[-121,522],[-93,899],[194,133],[476,-157],[286,-56],[230,152],[258,-196],[342,-333],[85,-224],[495,-44],[-8,-483],[92,-728],[254,-90],[201,-339],[402,319],[266,636],[184,267],[216,-514],[362,-734],[307,-691],[-112,-362],[370,-325],[250,-329],[442,-149],[179,-183],[110,-488],[216,-76],[112,-217],[20,-647],[-202,-217],[-199,-202],[-458,-205],[-349,-473],[-470,-93],[-594,121],[-417,4],[-287,-40],[-233,-413],[-354,-255],[-401,-762],[-320,-532],[236,95],[446,756],[583,480],[415,58],[246,-283],[-262,-387],[88,-620],[91,-435],[361,-287],[459,83],[278,647],[19,-417],[180,-209],[-344,-377],[-615,-343],[-276,-233],[-310,-415],[-211,43],[-11,487],[483,476],[-445,-19],[-309,-70]],[[18287,93939],[-139,-270],[618,174],[386,-291],[314,294],[254,-188],[227,-566],[140,238],[-197,590],[244,85],[276,-93],[311,-232],[175,-561],[86,-406],[466,-285],[502,-273],[-31,-253],[-456,-47],[178,-221],[-94,-211],[-503,90],[-478,156],[-322,-35],[-522,-196],[-704,-86],[-494,-54],[-151,271],[-379,157],[-246,-64],[-343,456],[185,61],[429,99],[392,-26],[362,100],[-537,135],[-594,-46],[-394,11],[-146,213],[644,230],[-428,-8],[-485,152],[233,431],[193,229],[744,351],[284,-111]],[[20972,94111],[-244,-381],[-434,404],[95,80],[372,23],[211,-126]],[[28794,93928],[25,-159],[-296,16],[-299,13],[-304,-78],[-80,35],[-306,306],[12,207],[133,38],[636,-62],[479,-316]],[[25955,93959],[219,-359],[256,465],[704,236],[477,-596],[-42,-377],[550,168],[263,228],[616,-291],[383,-274],[36,-252],[515,131],[290,-367],[670,-228],[242,-232],[263,-539],[-510,-268],[654,-376],[441,-127],[400,-529],[437,-38],[-87,-404],[-487,-669],[-342,246],[-437,554],[-359,-72],[-35,-330],[292,-335],[377,-265],[114,-153],[181,-570],[-96,-414],[-350,156],[-697,461],[393,-496],[289,-348],[45,-201],[-753,230],[-596,334],[-337,281],[97,162],[-414,296],[-405,280],[5,-167],[-803,-92],[-235,198],[183,424],[522,10],[571,74],[-92,205],[96,287],[360,561],[-77,255],[-107,197],[-425,280],[-563,196],[178,145],[-294,358],[-245,33],[-219,196],[-149,-170],[-503,-74],[-1011,129],[-588,169],[-450,87],[-231,202],[290,263],[-394,2],[-88,583],[213,515],[286,235],[717,154],[-204,-373]],[[22123,94355],[331,-122],[496,73],[72,-167],[-259,-276],[420,-248],[-50,-518],[-455,-223],[-268,48],[-192,220],[-690,444],[5,185],[567,-72],[-306,377],[329,279]],[[24112,93737],[-298,-430],[-317,21],[-173,506],[4,287],[145,244],[276,157],[579,-20],[530,-140],[-415,-513],[-331,-112]],[[16539,92938],[-731,-278],[-147,253],[-641,304],[119,244],[192,421],[241,378],[-272,353],[939,90],[397,-119],[709,-32],[270,-167],[298,-243],[-349,-145],[-681,-405],[-344,-403],[0,-251]],[[23996,95009],[-151,-223],[-403,43],[-337,150],[148,259],[399,155],[243,-202],[101,-182]],[[22639,96011],[212,-267],[9,-295],[-127,-429],[-458,-59],[-298,92],[5,336],[-455,-44],[-18,445],[299,-18],[419,197],[390,-34],[22,76]],[[19941,95712],[109,-205],[247,97],[291,-25],[49,-282],[-169,-274],[-940,-89],[-701,-249],[-423,-13],[-35,187],[577,255],[-1255,-69],[-389,103],[379,563],[262,161],[782,-194],[493,-341],[485,-44],[-397,551],[255,210],[286,-67],[94,-275]],[[23699,96229],[308,-186],[547,2],[240,-190],[-64,-216],[319,-130],[177,-137],[374,-26],[406,-48],[441,125],[566,49],[451,-40],[298,-218],[62,-238],[-174,-153],[-414,-124],[-355,70],[-797,-88],[-570,-11],[-449,71],[-738,186],[-96,316],[-34,286],[-279,251],[-574,70],[-322,179],[104,236],[573,-36]],[[17722,96544],[-38,-443],[-214,-199],[-259,-29],[-517,-246],[-444,-88],[-377,124],[472,431],[570,373],[426,-8],[381,85]],[[23933,96472],[-126,-17],[-521,37],[-74,161],[559,-9],[195,-107],[-33,-65]],[[19392,96574],[-518,-166],[-411,186],[224,183],[406,59],[392,-90],[-93,-172]],[[19538,97095],[-339,-113],[-461,1],[5,82],[285,173],[149,-27],[361,-116]],[[23380,96781],[-411,-119],[-226,134],[-119,216],[-22,238],[360,-23],[162,-38],[332,-200],[-76,-208]],[[22205,96935],[108,-240],[-453,64],[-457,187],[-619,21],[268,171],[-335,139],[-21,221],[546,-79],[751,-210],[212,-274]],[[25828,97704],[334,-186],[-381,-171],[-513,-434],[-492,-41],[-575,74],[-299,235],[4,208],[220,154],[-508,-5],[-306,192],[-176,261],[193,256],[192,175],[285,41],[-122,132],[646,29],[355,-308],[468,-123],[455,-109],[220,-380]],[[30972,99689],[742,-45],[597,-74],[508,-156],[-12,-154],[-678,-250],[-672,-117],[-251,-129],[605,3],[-656,-349],[-452,-163],[-476,-470],[-573,-96],[-177,-117],[-841,-62],[383,-72],[-192,-103],[230,-284],[-264,-198],[-429,-163],[-132,-225],[-388,-172],[39,-130],[475,22],[6,-141],[-742,-345],[-726,159],[-816,-89],[-414,69],[-525,30],[-35,277],[514,130],[-137,415],[170,41],[742,-249],[-379,370],[-450,110],[225,223],[492,137],[79,201],[-392,225],[-118,297],[759,-25],[220,-63],[433,210],[-625,67],[-972,-37],[-491,196],[-232,232],[-324,169],[-61,197],[413,110],[324,18],[545,94],[409,214],[344,-30],[300,-161],[211,311],[367,92],[498,64],[849,24],[148,-63],[802,98],[601,-37],[602,-36]],[[52900,78834],[-22,-236],[-122,-97],[-206,72],[-60,-232],[-132,-18],[-48,91],[-156,-195],[-134,-28],[-120,124]],[[51900,78315],[-95,252],[-133,-90],[5,261],[203,323],[-9,147],[126,-53],[77,98]],[[52074,79253],[236,-4],[57,125],[298,-176]],[[31400,20215],[-92,-233],[-238,-178],[-137,18],[-164,46],[-202,174],[-291,83],[-350,322],[-283,309],[-383,645],[229,-121],[390,-384],[369,-207],[143,264],[90,394],[256,238],[198,-68]],[[30952,21711],[-247,4],[-134,-141],[-250,-208],[-45,-538],[-118,-14],[-313,188],[-318,401],[-346,329],[-87,365],[79,337],[-140,383],[-36,982],[119,554],[293,445],[-422,168],[265,509],[94,956],[309,-202],[145,1193],[-186,153],[-87,-719],[-175,81],[87,823],[95,1067],[127,394],[-80,562],[-22,649],[117,18],[170,930],[192,922],[118,858],[-64,863],[83,475],[-34,711],[163,703],[50,1114],[89,1196],[87,1287],[-20,943],[-58,811]],[[30452,41263],[143,147],[74,295]],[[80649,62586],[-240,-277],[-228,179],[-8,495],[137,261],[304,161],[159,-13],[62,-220],[-122,-254],[-64,-332]],[[86288,76244],[-179,340],[-111,-323],[-429,-248],[44,-304],[-241,21],[-131,181],[-191,-409],[-306,-309],[-227,-370]],[[84517,74823],[-388,-167],[-204,-269],[-300,-157],[148,267],[-58,224],[220,387],[-147,302],[-242,-204],[-314,-400],[-171,-372],[-272,-28],[-142,-268],[147,-390],[227,-94],[9,-259],[220,-168],[311,411],[247,-224],[179,-15],[45,-302],[-393,-161],[-130,-311],[-270,-289],[-142,-403],[299,-316],[109,-567],[169,-527],[189,-443],[-5,-428],[-174,-157],[66,-307],[164,-179],[-43,-469],[-71,-456],[-155,-52],[-203,-623],[-225,-756],[-258,-687],[-382,-532],[-386,-484],[-313,-67],[-170,-255],[-96,186],[-157,-286],[-388,-288],[-294,-88],[-95,-609],[-154,-33],[-73,418],[66,222],[-373,185],[-131,-94]],[[80013,64241],[-280,149],[-132,234],[44,332],[-254,105],[-134,216],[-236,-307],[-271,-66],[-221,3],[-149,-141]],[[78380,64766],[-144,-84],[42,-659],[-148,16],[-25,135]],[[78105,64174],[-9,238],[-203,-167],[-121,106],[-206,216],[81,478],[-176,112],[-66,530],[-293,-96],[33,684],[263,480],[11,475],[-8,441],[-121,137],[-93,339],[-162,-42]],[[77035,68105],[-300,86],[94,242],[-130,358],[-198,-243],[-233,142],[-321,-367],[-252,-428],[-224,-72]],[[74670,67550],[-23,454],[-170,-121]],[[74477,67883],[-324,56],[-314,132],[-225,253],[-216,114],[-93,276],[-157,83],[-280,375],[-223,177],[-115,-138]],[[72530,69211],[-386,403],[-273,365],[-78,635],[200,-78],[9,294],[-111,295],[28,470],[-298,675]],[[71621,72270],[-457,233],[-82,442],[-205,269]],[[70827,73379],[-42,328],[10,224],[-169,131],[-91,-58],[-70,533]],[[70465,74537],[79,132],[-39,135],[266,272],[192,112],[294,-77],[105,368],[356,68],[99,229],[438,312],[39,130]],[[72294,76218],[-22,328],[190,150],[-250,1000],[550,231],[143,128],[200,1031],[551,-190],[155,261],[13,577],[230,54],[212,383]],[[74266,80171],[109,48]],[[74375,80219],[73,-402],[233,-306],[396,-216],[192,-464],[-107,-673],[100,-249],[330,-99],[374,-80],[336,-359],[171,-64],[127,-531],[163,-342],[306,14],[574,-129],[369,80],[274,-86],[411,-350],[336,1],[123,-179],[324,309],[448,200],[417,21],[324,203],[200,309],[194,193],[-45,190],[-89,222],[146,371],[156,-52],[286,-117],[277,306],[423,223],[204,380],[195,164],[404,77],[219,-65],[30,204],[-251,403],[-223,184],[-214,-212],[-274,89],[-157,-73],[-72,236],[197,575],[135,434]],[[82410,80559],[333,-217],[392,364],[-3,253],[251,611],[155,184],[-4,318],[-152,137],[229,287],[345,104],[369,15],[415,-171],[244,-212],[172,-581],[104,-248],[97,-354],[103,-564],[483,-184],[329,-409],[112,-541],[423,-1],[240,227],[459,170],[-146,-518],[-107,-211],[-96,-631],[-186,-560],[-338,102],[-238,-203],[73,-494],[-40,-680],[-142,-16],[2,-292]],[[49206,54706],[-126,-6],[-194,112],[-178,-6],[-329,-101],[-193,-166],[-275,-211],[-54,15]],[[47857,54343],[22,474],[26,72],[-8,227],[-118,241],[-88,39],[-81,158],[60,256],[-28,278],[13,168]],[[47655,56256],[44,0],[17,251],[-22,112],[27,80],[103,69],[-69,461],[-64,238],[23,195],[55,45]],[[47769,57707],[36,52],[77,-86],[215,-5],[51,168],[48,-11],[80,65],[43,-246],[65,72],[114,86]],[[49214,57382],[74,-819],[-117,-484],[-73,-650],[121,-496],[-13,-227]],[[53632,53135],[-35,31],[-164,-74],[-169,77],[-132,-38]],[[53132,53131],[-452,14]],[[52680,53145],[40,454],[-108,381],[-127,98],[-56,258],[-72,82],[4,159]],[[52361,54577],[71,408],[132,556],[81,5],[165,337],[105,9],[156,-236],[191,194],[26,239],[63,232],[43,291],[148,238],[56,403],[59,128],[39,299],[74,368],[234,446],[14,191],[31,104],[-110,229]],[[53939,59018],[9,184],[78,33]],[[54026,59235],[111,-369],[18,-382],[-10,-383],[151,-523],[-155,6],[-78,-41],[-127,57],[-60,-271],[164,-336],[121,-98],[39,-239],[87,-397],[-43,-156]],[[54447,53135],[-20,-311],[-220,136],[-225,152],[-350,23]],[[58564,53850],[-16,-673],[111,-78],[-89,-205],[-107,-153],[-106,-300],[-59,-268],[-15,-462],[-65,-220],[-2,-434]],[[58216,51057],[-80,-161],[-10,-342],[-38,-45],[-26,-315]],[[58149,49238],[50,-530],[-27,-299],[55,-334],[161,-323],[150,-726]],[[58538,47026],[-109,59],[-373,-97],[-75,-69],[-79,-368],[62,-254],[-49,-681],[-34,-578],[75,-103],[194,-224],[76,105],[23,-621],[-212,4],[-114,317],[-103,246],[-213,80],[-62,302],[-170,-182],[-222,81],[-93,261],[-176,53],[-131,-14],[-15,179],[-96,15]],[[53422,48316],[-39,179]],[[53609,49076],[73,-59],[95,221],[152,-6],[17,-163],[104,-102],[164,361],[161,281],[71,185],[-10,473],[121,560],[127,296],[183,278],[32,184],[7,211],[45,200],[-14,326],[34,510],[55,360],[83,308],[16,347]],[[57603,54843],[169,-475],[124,-70],[75,97],[128,-38],[155,122],[66,-246],[244,-383]],[[53309,48928],[-228,610]],[[53081,49538],[212,318],[-105,381],[95,144],[187,71],[23,255],[148,-276],[245,-25],[85,273],[36,382],[-31,450],[-131,341],[120,667],[-69,114],[-207,-47],[-78,298],[21,251]],[[29063,51742],[-119,136],[-137,191],[-79,-92],[-235,80],[-68,248],[-52,-9],[-278,329]],[[28095,52625],[-37,178],[103,44],[-12,288],[65,209],[138,38],[117,362],[106,302],[-102,137],[52,335],[-62,526],[59,152],[-44,487],[-112,306]],[[28366,55989],[36,280],[89,-41],[52,171],[-64,339],[34,85]],[[28513,56823],[143,-19],[209,402],[114,62],[3,190],[51,487],[159,267],[175,11],[22,120],[218,-48],[218,291],[109,128],[134,278],[98,-36],[73,-151],[-54,-194]],[[30185,58611],[-178,-96],[-71,-288],[-107,-165],[-81,-215],[-34,-410],[-77,-337],[144,-39],[35,-265],[62,-126],[21,-232],[-33,-213],[10,-120],[69,-48],[66,-201],[357,55],[161,-73],[196,-496],[112,62],[200,-31],[158,66],[99,-99],[-50,-311],[-62,-193],[-22,-413],[56,-383],[79,-171],[9,-129],[-140,-286],[100,-127],[74,-202],[85,-574]],[[30585,49354],[-139,306],[-83,14],[179,586],[-213,270],[-166,-50],[-101,100],[-153,-152],[-207,72],[-163,603],[-129,149],[-89,272],[-184,272],[-74,-54]],[[26954,56566],[-151,128],[-56,121],[32,100],[-11,127],[-77,138],[-109,113],[-95,74],[-19,168],[-73,103],[18,-167],[-55,-138],[-64,160],[-89,57],[-38,116],[2,175],[36,182],[-78,81],[64,111]],[[26191,58215],[42,74],[183,-152],[63,75],[89,-48],[46,-119],[82,-38],[66,122]],[[26762,58129],[70,-313],[108,-232],[130,-246]],[[27070,57338],[-107,-51],[1,-232],[58,-86],[-41,-68],[10,-104],[-23,-117],[-14,-114]],[[27147,65183],[240,-41],[219,-6],[261,-197],[110,-210],[260,65],[98,-136],[235,-356],[173,-260],[92,8],[165,-118],[-20,-162],[205,-23],[210,-236],[-33,-135],[-185,-73],[-187,-29],[-191,46],[-398,-56],[186,321],[-113,150],[-179,38],[-96,166],[-66,328],[-157,-22],[-259,154],[-83,121],[-362,89],[-97,113],[104,144],[-273,29],[-199,-299],[-115,-8],[-40,-141],[-138,-63],[-118,55],[146,178],[60,208],[126,128],[142,112],[210,55],[67,63]],[[59092,72066],[19,3],[40,139],[200,-8],[253,172],[-188,-245],[21,-108]],[[59437,72019],[-30,20],[-53,-44],[-42,12],[-14,-22],[-5,59],[-20,35],[-54,6],[-75,-49],[-52,30]],[[59437,72019],[8,-46],[-285,-234],[-136,74],[-64,232],[132,21]],[[53776,79977],[-157,247],[-141,139],[-30,243],[-49,171],[202,125],[103,144],[200,111],[70,110],[73,-66],[124,60]],[[54171,81261],[132,-186],[207,-50],[-17,-158],[151,-119],[41,148],[191,-64],[26,-180],[207,-35],[127,-284]],[[55236,80333],[-82,0],[-43,-104],[-64,-25],[-18,-131],[-54,-28],[-7,-53],[-95,-60],[-123,10],[-39,-127]],[[52756,83493],[4,-222],[281,-135],[-3,-204],[283,108],[156,158],[313,-228],[132,-183]],[[53922,82787],[64,-293],[-77,-154],[101,-205],[69,-308],[-22,-199],[114,-367]],[[52074,79253],[35,410],[140,395],[-400,106],[-131,151]],[[51718,80315],[16,252],[-56,130]],[[51710,81086],[-47,604],[167,0],[70,217],[69,527],[-51,195]],[[51918,82629],[54,122],[232,31],[52,-127],[188,284],[-63,216],[-13,326]],[[52368,83481],[210,-76],[178,88]],[[61966,59143],[66,-178],[-9,-240],[-158,-137],[119,-158]],[[61984,58430],[-102,-308]],[[61882,58122],[-62,103],[-67,-41],[-155,9],[-4,176],[-22,159],[94,269],[98,255]],[[61764,59052],[119,-50],[83,141]],[[53524,83854],[-166,-466],[-291,325],[-39,239],[408,191],[88,-289]],[[52368,83481],[-113,320],[-8,589],[46,155],[80,173],[244,36],[98,159],[223,162],[-9,-296],[-82,-188],[33,-161],[151,-87],[-68,-217],[-83,62],[-200,-415],[76,-280]],[[30080,63183],[34,98],[217,-3],[165,-148],[73,14],[50,-204],[152,11],[-9,-171],[124,-21],[136,-211],[-103,-235],[-132,126],[-127,-25],[-92,28],[-50,-105],[-106,-36],[-43,140],[-92,-83],[-111,-394],[-71,92],[-14,165]],[[30081,62221],[5,157],[-71,172],[68,97],[21,222],[-24,314]],[[53333,65346],[-952,-1097],[-804,-1132],[-392,-257]],[[51185,62860],[-308,-56],[-3,366],[-129,94],[-173,165],[-66,270],[-937,1256],[-937,1257]],[[48632,66212],[-1045,1394]],[[47587,67606],[6,112],[-1,38]],[[47592,67756],[-2,682],[449,425],[277,88],[227,155],[107,288],[324,228],[12,427],[161,50],[126,213],[363,97],[51,224],[-73,122],[-96,608],[-17,350],[-104,369]],[[49397,72082],[267,315],[300,100],[175,238],[268,175],[471,102],[459,47],[140,-85],[262,227],[297,4],[113,-134],[190,35]],[[52339,73106],[-57,-295],[44,-549],[-65,-475],[-171,-322],[24,-433],[227,-344],[3,-139],[171,-232],[118,-1034]],[[52633,69283],[90,-509],[15,-267],[-49,-470],[21,-263],[-36,-315],[24,-362],[-110,-240],[164,-420],[11,-247],[99,-321],[130,105],[219,-267],[122,-361]],[[27693,49869],[148,430],[-60,251],[-106,-267],[-166,252],[56,163],[-47,522],[97,87],[52,359],[105,371],[-20,235],[153,123],[190,230]],[[29063,51742],[38,-438],[-86,-374],[-303,-603],[-334,-227],[-170,-501],[-53,-389],[-157,-237],[-116,291],[-113,62],[-114,-45],[-8,211],[79,137],[-33,240]],[[59700,68819],[-78,-232],[-60,-435],[-75,-300],[-65,-100],[-93,186],[-125,257],[-198,825],[-29,-52],[115,-608],[171,-579],[210,-897],[102,-313],[90,-325],[249,-638],[-55,-100],[9,-374],[323,-517],[49,-118]],[[60240,64499],[-1102,0],[-1077,0],[-1117,0]],[[56944,64499],[0,2120],[0,2048],[-83,464],[71,356],[-43,246],[101,276]],[[56990,70009],[369,10],[268,-152],[275,-171],[129,-89],[214,182],[114,165],[245,48],[198,-73],[75,-286],[65,189],[222,-136],[217,-33],[137,145]],[[59518,69808],[182,-989]],[[61764,59052],[-95,187],[-114,337],[-124,185],[-71,199],[-242,231],[-191,7],[-67,120],[-163,-135],[-168,261],[-87,-430],[-323,121]],[[60119,60135],[-30,230],[120,847],[27,382],[88,177],[204,95],[141,328]],[[60669,62194],[161,-666],[77,-529],[152,-281],[379,-544],[154,-328],[151,-332],[87,-198],[136,-173]],[[47490,75948],[14,410],[-114,250],[393,415],[340,-104],[373,4],[296,-98],[230,30],[449,-19]],[[49471,76836],[111,-224],[511,-262],[101,125],[313,-261],[322,75]],[[50829,76289],[15,-335],[-263,-383],[-356,-122],[-25,-194],[-171,-319],[-107,-469],[108,-329],[-160,-257],[-60,-374],[-210,-115],[-197,-443],[-352,-8],[-265,10],[-174,-203],[-106,-218],[-136,48],[-103,195],[-79,331],[-259,89]],[[47929,73193],[-23,191],[103,216],[38,156],[-96,172],[77,378],[-111,345],[120,48],[11,272],[45,84],[3,449],[129,156],[-78,289],[-162,20],[-47,-72],[-164,-1],[-70,282],[-113,-84],[-101,-146]],[[56753,85111],[32,340],[-102,-72],[-176,204],[-24,331],[351,161],[350,83],[301,-95],[287,17]],[[57772,86080],[42,-100],[-198,-332],[83,-537],[-120,-183]],[[57579,84928],[-229,1],[-239,214],[-121,70],[-237,-102]],[[61882,58122],[-61,-204],[103,-317],[102,-277],[106,-206],[909,-683],[233,3]],[[63274,56438],[-785,-1728],[-362,-26],[-247,-406],[-178,-10],[-76,-182]],[[61626,54086],[-190,0],[-112,195],[-254,-241],[-82,-240],[-185,45],[-62,67],[-65,-16],[-87,6],[-352,489],[-193,0],[-95,189],[0,324],[-145,96]],[[59804,55000],[-164,627],[-127,133],[-48,231],[-141,280],[-171,42],[95,328],[147,14],[42,176]],[[59437,56831],[-4,517]],[[59433,57348],[82,603],[132,161],[28,236],[119,440],[168,285],[112,567],[45,495]],[[57942,91602],[-41,-403],[425,-383],[-256,-435],[323,-655],[-187,-494],[250,-429],[-113,-375],[411,-394],[-105,-294],[-258,-333],[-594,-735]],[[57797,86672],[-504,-46],[-489,-211],[-452,-121],[-161,314],[-269,189],[62,567],[-135,520],[133,335],[252,362],[635,624],[185,121],[-28,243],[-387,272]],[[56639,89841],[-93,225],[-8,886],[-433,392],[-371,282]],[[55734,91626],[167,152],[309,-304],[362,29],[298,-140],[265,255],[137,422],[431,196],[356,-229],[-117,-405]],[[99547,41844],[96,-167],[-46,-300],[-172,-79],[-153,71],[-27,253],[107,198],[126,-71],[69,95]],[[0,42577],[57,26],[-34,-277],[-23,-31],[99822,-141],[-177,-122],[-36,215],[139,118],[88,32],[-99836,180]],[[33000,21970],[333,345],[236,-144],[167,231],[222,-259],[-83,-202],[-375,-173],[-125,202],[-236,-259],[-139,259]],[[34854,53161],[70,246],[24,262],[48,246],[-107,340]],[[34889,54255],[-22,394],[144,495]],[[35011,55144],[95,-63],[204,-136],[294,-486],[46,-236]],[[52655,76104],[-92,-445],[-126,118],[-64,387],[56,214],[179,220],[47,-494]],[[51576,80352],[62,-50],[80,13]],[[51900,78315],[-11,-163],[82,-216],[-97,-176],[72,-445],[151,-73],[-32,-250]],[[52065,76992],[-252,-326],[-548,156],[-404,-186],[-32,-347]],[[49471,76836],[144,345],[53,1147],[-287,605],[-205,291],[-424,222],[-28,420],[360,125],[466,-148],[-88,652],[263,-247],[646,449],[84,472],[243,116]],[[53081,49538],[-285,581],[-184,475],[-169,595],[9,192],[61,184],[67,419],[56,427]],[[52636,52411],[94,33],[404,-6],[-2,693]],[[48278,82851],[-210,118],[-172,-8],[57,309],[-57,309]],[[47896,83579],[233,23],[298,-356],[-149,-395]],[[49165,85596],[-297,-623],[283,79],[304,-3],[-72,-469],[-250,-516],[287,-37],[22,-61],[248,-679],[190,-93],[171,-656],[79,-227],[337,-110],[-34,-368],[-142,-169],[111,-298],[-250,-302],[-371,6],[-473,-159],[-130,114],[-183,-270],[-257,65],[-195,-220],[-148,115],[407,605],[249,125],[-2,0],[-434,96],[-79,229],[291,179],[-152,310],[52,377],[413,-52],[1,0],[40,334],[-186,355],[-4,8],[-337,101],[-66,156],[101,258],[-92,158],[-149,-272],[-17,555],[-140,294],[101,595],[216,467],[222,-45],[335,48]],[[61542,75749],[42,246],[-70,393],[-160,212],[-154,66],[-102,177]],[[61098,76843],[34,68],[235,-99],[409,-93],[378,-276],[48,-107],[169,90],[259,-120],[85,-236],[175,-134]],[[62106,75494],[-268,282],[-296,-27]],[[50294,55244],[-436,-337],[-154,-198],[-250,-167],[-248,164]],[[50006,58175],[-20,-180],[116,-297],[-1,-418],[27,-454],[69,-210],[-61,-518],[22,-287],[74,-365],[62,-202]],[[47655,56256],[-78,14],[-57,-232],[-78,3],[-55,123],[19,231],[-116,353],[-73,-65],[-59,-13]],[[47158,56670],[-77,-33],[3,211],[-44,151],[9,168],[-60,242],[-78,206],[-222,0],[-65,-108],[-76,-13],[-48,-125],[-32,-159],[-148,-254]],[[46320,56956],[-122,341],[-108,226],[-71,74],[-69,115],[-32,254],[-41,127],[-80,94]],[[45797,58187],[123,281],[84,-11],[73,97],[61,1],[44,76],[-24,191],[31,60],[5,195]],[[46194,59077],[134,-5],[200,-141],[61,13],[21,64],[151,-45],[40,32]],[[46801,58995],[16,-211],[44,1],[73,77],[46,-20],[77,-146],[119,-46],[76,125],[90,77],[67,80],[55,-15],[62,-126],[33,-159],[114,-241],[-57,-149],[-11,-187],[59,57],[35,-67],[-15,-172],[85,-166]],[[45321,59403],[36,255]],[[45357,59658],[302,17],[63,136],[88,10],[110,-142],[86,-3],[92,97],[56,-166],[-120,-130],[-121,11],[-119,121],[-103,-133],[-50,-5],[-67,-80],[-253,12]],[[45797,58187],[-149,241],[-117,38],[-63,162],[1,88],[-84,122],[-18,124]],[[45367,58962],[147,93],[92,-18],[75,65],[513,-25]],[[52636,52411],[-52,87],[96,647]],[[56583,72391],[152,-194],[216,33],[207,-41],[-7,-100],[151,69],[-35,-170],[-400,-49],[3,95],[-339,112],[52,245]],[[57237,75339],[-169,17],[-145,54],[-336,-150],[192,-323],[-141,-94],[-154,-1],[-147,297],[-52,-127],[62,-344],[139,-270],[-105,-126],[155,-265],[137,-167],[4,-326],[-257,153],[82,-294],[-176,-60],[105,-509],[-184,-7],[-228,251],[-104,460],[-49,384],[-108,264],[-143,329],[-18,164]],[[55838,75350],[182,51],[106,126],[150,-11],[46,100],[53,19]],[[57254,75917],[135,-153],[-86,-360],[-66,-65]],[[37010,99413],[932,344],[975,-26],[354,213],[982,55],[2219,-72],[1737,-457],[-513,-222],[-1062,-25],[-1496,-56],[140,-103],[984,63],[836,-198],[540,176],[231,-206],[-305,-335],[707,214],[1348,223],[833,-111],[156,-246],[-1132,-410],[-157,-133],[-888,-99],[643,-28],[-324,-420],[-224,-373],[9,-641],[333,-376],[-434,-24],[-457,-182],[513,-305],[65,-490],[-297,-53],[360,-495],[-617,-42],[322,-234],[-91,-203],[-391,-89],[-388,-2],[348,-390],[4,-256],[-549,238],[-143,-154],[375,-144],[364,-352],[105,-464],[-495,-111],[-214,222],[-344,331],[95,-391],[-322,-303],[732,-24],[383,-31],[-745,-502],[-755,-454],[-813,-199],[-306,-2],[-288,-222],[-386,-608],[-597,-404],[-192,-23],[-370,-142],[-399,-134],[-238,-357],[-4,-403],[-141,-378],[-453,-461],[112,-450],[-125,-476],[-142,-563],[-391,-35],[-410,471],[-556,3],[-269,315],[-186,563],[-481,716],[-141,375],[-38,517],[-384,532],[100,424],[-186,203],[275,673],[418,214],[110,241],[58,450],[-318,-204],[-151,-85],[-249,-83],[-341,188],[-19,392],[109,306],[258,8],[567,-153],[-478,366],[-249,197],[-276,-81],[-232,143],[310,536],[-169,215],[-220,398],[-335,611],[-353,223],[3,241],[-745,337],[-590,42],[-743,-23],[-677,-42],[-323,183],[-482,362],[729,181],[559,31],[-1188,149],[-627,236],[39,223],[1051,277],[1018,277],[107,210],[-750,206],[243,230],[961,402],[404,62],[-115,258],[658,152],[854,90],[853,6],[303,-180],[737,317],[663,-215],[390,-45],[577,-188],[-660,311],[38,246]],[[24973,59739],[-142,101],[-174,10],[-127,114],[-149,238]],[[24381,60202],[7,168],[32,135],[-39,107],[133,470],[357,1],[7,197],[-45,35],[-31,124],[-103,133],[-103,193],[125,1],[1,324],[259,1],[257,-6]],[[25297,60979],[90,-105],[24,86],[82,-73]],[[25493,60887],[-127,-220],[-131,-161],[-20,-111],[22,-113],[-58,-146]],[[25179,60136],[-65,-36],[15,-67],[-52,-64],[-95,-145],[-9,-85]],[[33400,56648],[183,-212],[171,-375],[8,-297],[105,-13],[149,-281],[109,-201]],[[34125,55269],[-44,-518],[-169,-150],[15,-136],[-51,-297],[123,-418],[89,-1],[37,-325],[169,-501]],[[33129,54824],[-188,437],[75,159],[-5,265],[171,93],[69,108],[-95,213],[24,210],[220,339]],[[25745,59307],[-48,180],[-84,50]],[[25613,59537],[19,231],[-38,62],[-57,41],[-122,-68],[-10,77],[-84,93],[-60,114],[-82,49]],[[25493,60887],[29,-23],[61,101],[79,9],[26,-47],[43,28],[129,-52],[128,15],[90,64],[32,65],[89,-30],[66,-39],[73,13],[55,50],[127,-80],[44,-13],[85,-107],[80,-129],[101,-88],[73,-159]],[[26903,60465],[-95,12],[-38,-79],[-97,-75],[-70,0],[-61,-73],[-56,26],[-47,88],[-29,-17],[-36,-138],[-27,5],[-4,-118],[-97,-159],[-51,-68],[-29,-72],[-82,117],[-60,-154],[-58,4],[-65,-14],[6,-283],[-41,-5],[-35,-131],[-86,-24]],[[55230,78267],[67,-223],[89,-164],[-107,-217]],[[55155,76391],[-31,-98]],[[55124,76293],[-261,213],[-161,207],[-254,171],[-233,424],[56,43],[-127,242],[-5,195],[-179,91],[-85,-249],[-82,193],[6,200],[10,9]],[[53809,78032],[194,-20],[51,98],[94,-94],[109,-12],[-1,161],[97,59],[27,233],[221,153]],[[54601,78610],[88,-71],[208,-247],[229,-111],[104,86]],[[30081,62221],[-185,98],[-131,-40],[-169,42],[-130,-108],[-149,179],[24,186],[256,-80],[210,-46],[100,128],[-127,250],[2,220],[-175,89],[62,159],[170,-25],[241,-90]],[[54716,79543],[141,-148],[103,-62],[233,70],[22,116],[111,17],[135,89],[30,-37],[130,72],[66,136],[91,35],[297,-175],[59,59]],[[56134,79715],[155,-157],[19,-154]],[[56308,79404],[-170,-121],[-131,-391],[-168,-390],[-223,-109]],[[55616,78393],[-173,26],[-213,-152]],[[54601,78610],[-54,194],[-47,7]],[[83531,45933],[-117,-11],[-368,403],[259,113],[146,-175],[97,-175],[-17,-155]],[[84713,46708],[28,-113],[5,-175]],[[84746,46420],[-181,-430],[-238,-127],[-33,69],[25,196],[119,351],[275,229]],[[82749,47167],[100,-153],[172,47],[69,-245],[-321,-116],[-193,-77],[-149,4],[95,332],[153,5],[74,203]],[[84139,47168],[-41,-320],[-417,-163],[-370,71],[0,210],[220,120],[174,-173],[185,44],[249,211]],[[80172,47926],[533,-57],[61,237],[515,-277],[101,-373],[417,-105],[341,-342],[-317,-220],[-306,232],[-251,-15],[-288,42],[-260,104],[-322,220],[-204,57],[-116,-72],[-506,237],[-48,247],[-255,43],[191,550],[337,-34],[224,-225],[115,-44],[38,-205]],[[87423,48251],[-143,-393],[-27,434],[49,207],[58,195],[63,-169],[0,-274]],[[85346,49837],[-104,-191],[-192,106],[-54,248],[281,27],[69,-190]],[[86241,50048],[101,-441],[-234,238],[-232,48],[-157,-38],[-192,20],[65,317],[344,24],[305,-168]],[[89166,50332],[5,-1877],[4,-1876]],[[89175,46579],[-247,472],[-282,116],[-69,-164],[-352,-18],[118,469],[175,160],[-72,626],[-134,483],[-538,488],[-229,48],[-417,532],[-82,-279],[-107,-51],[-63,211],[-1,250],[-212,283],[299,207],[198,-11],[-23,153],[-407,1],[-110,343],[-248,106],[-117,285],[374,140],[142,188],[446,-237],[44,-214],[78,-931],[287,-345],[232,611],[319,347],[247,1],[238,-201],[206,-206],[298,-110]],[[84788,52647],[-223,-571],[-209,-111],[-267,113],[-463,-29],[-243,-83],[-39,-436],[248,-512],[150,261],[518,196],[-22,-265],[-121,83],[-121,-337],[-245,-223],[263,-738],[-50,-198],[249,-665],[-2,-378],[-148,-170],[-109,203],[134,471],[-273,-222],[-69,159],[36,222],[-200,338],[21,561],[-186,-175],[24,-671],[11,-824],[-176,-84],[-119,169],[79,530],[-43,556],[-117,4],[-86,395],[115,377],[40,457],[139,868],[58,238],[237,427],[217,-170],[350,-80],[319,24],[275,419],[48,-129]],[[85746,52481],[-15,-503],[-143,57],[-42,-351],[114,-304],[-78,-69],[-112,365],[-82,736],[56,460],[92,210],[20,-315],[164,-50],[26,-236]],[[80461,52985],[47,-385],[190,-325],[179,117],[177,-42],[162,291],[133,51],[263,-162],[226,123],[143,801],[107,200],[96,655],[319,0],[241,-97]],[[82744,54212],[-158,-520],[204,-545],[-48,-265],[312,-533],[-329,-68],[-93,-393],[12,-522],[-267,-393],[-7,-574],[-107,-881],[-41,205],[-316,-259],[-110,352],[-198,33],[-139,184],[-330,-207],[-101,279],[-182,-32],[-229,67],[-43,772],[-138,160],[-134,493],[-38,504],[32,533],[165,383]],[[79393,48459],[-308,-12],[-234,481],[-356,471],[-119,349],[-210,469],[-138,432],[-212,806],[-244,480],[-81,495],[-103,449],[-250,363],[-145,493],[-209,322],[-290,635],[-24,293],[178,-23],[430,-111],[246,-564],[215,-390],[153,-240],[263,-619],[283,-9],[233,-394],[161,-482],[211,-263],[-111,-471],[159,-200],[100,-14],[47,-402],[97,-321],[204,-51],[135,-365],[-70,-716],[-11,-891]],[[72530,69211],[-176,-261],[-108,-538],[269,-218],[262,-283],[362,-323],[381,-75],[160,-293],[215,-54],[334,-135],[231,10],[32,228],[-36,366],[21,248]],[[77035,68105],[20,-219],[-97,-105],[23,-355],[-199,104],[-359,-397],[8,-330],[-153,-483],[-14,-281],[-124,-474],[-217,131],[-11,-596],[-63,-196],[30,-245],[-137,-137]],[[74730,64531],[-39,-210],[-189,7],[-343,-120],[16,-433],[-148,-341],[-400,-387],[-311,-678],[-209,-363],[-276,-377],[-1,-265],[-138,-142],[-251,-206],[-129,-31],[-84,-439],[58,-749],[15,-478],[-118,-547],[-1,-978],[-144,-28],[-126,-439],[84,-190],[-253,-163],[-93,-392],[-112,-165],[-263,537],[-128,807],[-107,581],[-97,272],[-148,553],[-69,720],[-48,360],[-253,791],[-115,1116],[-83,737],[1,698],[-54,539],[-404,-345],[-196,69],[-362,698],[133,208],[-82,226],[-326,489]],[[68937,65473],[185,384],[612,-1],[-56,494],[-156,292],[-31,444],[-182,258],[306,604],[323,-44],[290,604],[174,584],[270,578],[-4,411],[236,333],[-224,284],[-96,390],[-99,504],[137,249],[421,-141],[310,86],[268,484]],[[48278,82851],[46,-412],[-210,-514],[-493,-340],[-393,87],[225,601],[-145,586],[378,451],[210,269]],[[64978,73251],[244,112],[197,329],[186,-17],[122,108],[197,-53],[308,-292],[221,-63],[318,-510],[207,-21],[24,-484]],[[66909,69007],[137,-302],[112,-348],[266,-253],[7,-508],[133,-93],[23,-265],[-400,-298],[-105,-669]],[[67082,66271],[-523,174],[-303,133],[-313,74],[-118,707],[-133,102],[-214,-103],[-280,-279],[-339,191],[-281,443],[-267,164],[-186,546],[-205,768],[-149,-93],[-177,190],[-104,-224]],[[63490,69064],[-153,302],[-3,307],[-89,0],[46,417],[-143,438],[-340,315],[-193,548],[65,449],[139,199],[-21,336],[-182,173],[-180,687]],[[62436,73235],[-152,461],[55,179],[-87,660],[190,164]],[[63578,73897],[88,-424],[263,-120],[193,-289],[395,-100],[434,153],[27,134]],[[63490,69064],[-164,28]],[[63326,69092],[-187,48],[-204,-553]],[[62935,68587],[-516,46],[-784,1158],[-413,403],[-335,156]],[[60887,70350],[-112,701]],[[60775,71051],[615,600],[105,696],[-26,421],[152,142],[142,359]],[[61763,73269],[119,90],[324,-75],[97,-146],[133,97]],[[45969,90100],[-64,-373],[314,-392],[-361,-440],[-801,-394],[-240,-105],[-365,85],[-775,182],[273,254],[-605,282],[492,112],[-12,169],[-583,134],[188,375],[421,85],[433,-391],[422,314],[349,-163],[453,307],[461,-41]],[[59922,70666],[-49,-182]],[[59873,70484],[-100,80],[-58,-383],[69,-65],[-71,-79],[-12,-152],[131,78]],[[59832,69963],[7,-224],[-139,-920]],[[59518,69808],[80,190],[-19,32],[74,270],[56,434],[40,146],[8,6]],[[59757,70886],[93,-1],[25,101],[75,7]],[[59950,70993],[4,-236],[-38,-87],[6,-4]],[[54311,73846],[-100,-453],[41,-179],[-58,-296],[-213,217],[-141,62],[-387,293],[38,296],[325,-53],[284,63],[211,50]],[[52558,75561],[166,-408],[-39,-762],[-126,36],[-113,-192],[-105,153],[-11,694],[-64,330],[153,-29],[139,178]],[[53835,78613],[-31,-283],[67,-246]],[[53871,78084],[-221,84],[-226,-204],[15,-286],[-34,-164],[91,-293],[261,-290],[140,-476],[309,-464],[217,3],[68,-127],[-78,-115],[249,-208],[204,-174],[238,-301],[29,-107],[-52,-206],[-154,268],[-242,95],[-116,-372],[200,-214],[-33,-300],[-116,-34],[-148,-494],[-116,-45],[1,176],[57,309],[60,123],[-108,334],[-85,290],[-115,72],[-82,249],[-179,104],[-120,232],[-206,37],[-217,260],[-254,375],[-189,332],[-86,569],[-138,67],[-226,190],[-128,-78],[-161,-267],[-115,-42]],[[28453,62478],[187,-52],[147,-138],[46,-158],[-195,-11],[-84,-96],[-156,92],[-159,210],[34,132],[116,40],[64,-19]],[[59922,70666],[309,-228],[544,613]],[[60887,70350],[-53,-87],[-556,-289],[277,-575],[-92,-98],[-46,-193],[-212,-80],[-66,-207],[-120,-177],[-310,91]],[[59709,68735],[-9,84]],[[59832,69963],[41,169],[0,352]],[[87399,71495],[35,-197],[-156,-349],[-114,185],[-143,-134],[-73,-337],[-181,164],[2,273],[154,344],[158,-67],[114,242],[204,-124]],[[89159,73219],[-104,-460],[48,-288],[-145,-406],[-355,-271],[-488,-36],[-396,-657],[-186,221],[-12,431],[-483,-127],[-329,-271],[-325,-11],[282,-424],[-186,-979],[-179,-242],[-135,224],[69,519],[-176,167],[-113,395],[263,177],[145,362],[280,298],[203,394],[553,171],[297,-117],[291,1024],[185,-275],[408,575],[158,224],[174,704],[-47,648],[117,364],[295,105],[152,-798],[-9,-467],[-256,-580],[4,-594]],[[89974,77268],[195,-122],[197,244],[62,-647],[-412,-157],[-244,-572],[-436,393],[-152,-630],[-308,-9],[-39,573],[138,443],[296,32],[81,797],[83,449],[326,-600],[213,-194]],[[69711,76170],[-159,-107],[-367,-401],[-121,-412],[-104,-4],[-76,273],[-353,18],[-57,472],[-135,4],[21,578],[-333,421],[-476,-45],[-326,-84],[-265,519],[-227,218],[-431,412],[-52,50],[-715,-340],[11,-2124]],[[65546,75618],[-142,-28],[-195,452],[-188,161],[-315,-120],[-123,-191]],[[64583,75892],[-15,140],[68,240],[-53,201],[-322,196],[-125,517],[-154,146],[-9,187],[270,-54],[11,421],[236,93],[243,-86],[50,562],[-50,356],[-278,-28],[-236,141],[-321,-253],[-259,-121]],[[63639,78550],[-142,93],[29,296],[-177,385],[-207,-16],[-235,391],[160,436],[-81,118],[222,632],[285,-334],[35,421],[573,626],[434,15],[612,-399],[329,-233],[295,243],[440,12],[356,-298],[80,170],[391,-24],[69,272],[-450,396],[267,281],[-52,157],[266,150],[-200,394],[127,197],[1039,200],[136,142],[695,213],[250,239],[499,-124],[88,-597],[290,140],[356,-197],[-23,-314],[267,33],[696,543],[-102,-180],[355,-445],[620,-1463],[148,302],[383,-332],[399,148],[154,-104],[133,-332],[194,-112],[119,-244],[358,77],[147,-353]],[[72294,76218],[-171,84],[-140,207],[-412,61],[-461,15],[-100,-63],[-396,242],[-158,-119],[-43,-340],[-457,198],[-183,-81],[-62,-252]],[[61551,50860],[-195,-230],[-68,-240],[-104,-42],[-40,-406],[-89,-233],[-54,-383],[-112,-190]],[[60889,49136],[-399,576],[-19,334],[-1007,1173],[-47,63]],[[59417,51282],[-3,611],[80,233],[137,381],[101,420],[-123,661],[-32,289],[-132,400]],[[59445,54277],[171,344],[188,379]],[[61626,54086],[-243,-653],[3,-2098],[165,-475]],[[70465,74537],[-526,-87],[-343,187],[-301,-45],[26,332],[303,-96],[101,177]],[[69725,75005],[212,-56],[355,414],[-329,304],[-198,-144],[-205,217],[234,373],[-83,57]],[[78495,58847],[-66,696],[178,479],[359,110],[261,-83]],[[79227,60049],[229,-226],[126,397],[246,-212]],[[79828,60008],[64,-384],[-34,-690],[-467,-443],[122,-349],[-292,-42],[-240,-232]],[[78981,57868],[-233,84],[-112,301],[-141,594]],[[85652,74065],[240,-679],[68,-373],[3,-664],[-105,-316],[-252,-111],[-222,-239],[-250,-49],[-31,313],[51,432],[-122,600],[206,97],[-190,493]],[[85048,73569],[17,52],[124,-21],[108,260],[197,28],[118,38],[40,139]],[[55575,76355],[52,129]],[[55627,76484],[66,42],[38,191],[50,32],[40,-81],[52,-36],[36,-92],[46,-27],[54,-107],[39,3],[-31,-140],[-33,-68],[9,-43]],[[55993,76158],[-62,-23],[-164,-89],[-13,-118],[-35,5]],[[63326,69092],[58,-254],[-25,-132],[89,-434]],[[63448,68272],[-196,-15],[-69,274],[-248,56]],[[79227,60049],[90,260],[12,487],[-224,502],[-18,568],[-211,468],[-210,40],[-56,-201],[-163,-17],[-83,102],[-293,-344],[-6,517],[68,606],[-188,27],[-16,346],[-120,178]],[[77809,63588],[59,212],[237,374]],[[78380,64766],[162,-454],[125,-524],[342,-4],[108,-502],[-178,-151],[-80,-207],[333,-345],[231,-680],[175,-508],[210,-400],[70,-407],[-50,-576]],[[59757,70886],[99,469],[138,406],[5,20]],[[59999,71781],[125,-30],[45,-226],[-151,-217],[-68,-315]],[[47857,54343],[-73,-5],[-286,274],[-252,439],[-237,315],[-187,371]],[[46822,55737],[66,184],[15,168],[126,313],[129,268]],[[54125,64996],[-197,-214],[-156,316],[-439,248]],[[52633,69283],[136,133],[24,244],[-30,238],[191,222],[86,185],[135,165],[16,442]],[[53191,70912],[326,-198],[117,50],[232,-96],[368,-258],[130,-512],[250,-111],[391,-242],[296,-286],[136,150],[133,264],[-65,442],[87,280],[200,270],[192,78],[375,-118],[95,-257],[104,-3],[88,-98],[276,-67],[68,-191]],[[56944,64499],[0,-1150],[-320,-2],[-3,-242]],[[56621,63105],[-1108,1103],[-1108,1103],[-280,-315]],[[72718,56162],[-42,-600],[-116,-164],[-242,-132],[-132,458],[-49,828],[126,935],[192,-320],[129,-406],[134,-599]],[[58049,35154],[96,-173],[-85,-281],[-47,-187],[-155,-90],[-51,-184],[-99,-58],[-209,443],[148,365],[151,225],[130,118],[121,-178]],[[56314,83116],[-23,147],[30,157],[-123,92],[-291,100]],[[55907,83612],[-59,485]],[[55848,84097],[318,176],[466,-37],[273,57],[39,-120],[148,-37],[267,-279]],[[56523,82877],[-67,177],[-142,62]],[[55848,84097],[10,433],[136,362],[262,196],[221,-430],[223,11],[53,442]],[[57579,84928],[134,-133],[24,-279],[89,-340]],[[47592,67756],[-42,0],[7,-308],[-172,-19],[-90,-131],[-126,0],[-100,75],[-234,-62],[-91,-449],[-86,-42],[-131,-726],[-386,-621],[-92,-796],[-114,-258],[-33,-208],[-625,-46],[-5,1]],[[45272,64166],[13,267],[106,157],[91,300],[-18,195],[96,406],[155,366],[93,93],[74,336],[6,307],[100,356],[185,210],[177,588],[5,8],[139,221],[259,64],[218,393],[140,154],[232,481],[-70,716],[106,495],[37,304],[179,389],[278,263],[206,238],[186,596],[87,354],[205,-3],[167,-244],[264,39],[288,-127],[121,-6]],[[57394,79599],[66,85],[185,57],[204,-180],[115,-21],[125,-155],[-20,-195],[101,-95],[40,-240],[97,-147],[-19,-86],[52,-58],[-74,-43],[-164,17],[-27,80],[-58,-46],[20,-103],[-76,-184],[-49,-197],[-70,-63]],[[57842,78025],[-50,263],[30,246],[-9,253],[-160,342],[-89,243],[-86,171],[-84,56]],[[63761,44648],[74,-245],[69,-380],[45,-693],[72,-269],[-28,-277],[-49,-169],[-94,338],[-53,-171],[53,-427],[-24,-244],[-77,-133],[-18,-488],[-109,-671],[-137,-793],[-172,-1092],[-106,-800],[-125,-668],[-226,-136],[-243,-244],[-160,147],[-220,206],[-77,304],[-18,510],[-98,460],[-26,414],[50,415],[128,100],[1,191],[133,437],[25,367],[-65,272],[-52,364],[-23,530],[97,322],[38,366],[138,21],[155,118],[103,104],[122,8],[158,328],[229,355],[83,289],[-38,247],[118,-70],[153,401],[6,346],[92,257],[96,-247]],[[23016,66727],[-107,-505],[-49,-415],[-20,-771],[-27,-281],[48,-315],[86,-280],[56,-447],[184,-429],[65,-328],[109,-284],[295,-153],[114,-241],[244,161],[212,58],[208,104],[175,99],[176,235],[67,336],[22,483],[48,169],[188,151],[294,133],[246,-20],[169,49],[66,-122],[-9,-278],[-149,-342],[-66,-351],[51,-100],[-42,-249],[-69,-449],[-71,148],[-58,-10]],[[24381,60202],[-314,620],[-144,187],[-226,150],[-156,-42],[-223,-216],[-140,-57],[-196,152],[-208,109],[-260,264],[-208,81],[-314,268],[-233,275],[-70,154],[-155,34],[-284,183],[-116,262],[-299,327],[-139,363],[-66,281],[93,56],[-29,164],[64,150],[1,199],[-93,259],[-25,229],[-94,290],[-244,573],[-280,450],[-135,359],[-238,235],[-51,140],[42,356],[-142,135],[-164,279],[-69,402],[-149,47],[-162,303],[-130,281],[-12,180],[-149,434],[-99,441],[5,221],[-201,229],[-93,-26],[-159,159],[-44,-234],[46,-276],[27,-433],[95,-237],[206,-397],[46,-135],[42,-41],[37,-198],[49,8],[56,-372],[85,-146],[59,-204],[174,-293],[92,-536],[83,-252],[77,-270],[15,-304],[134,-19],[112,-261],[100,-257],[-6,-104],[-117,-211],[-49,3],[-74,350],[-181,328],[-201,278],[-142,147],[9,421],[-42,312],[-132,179],[-191,257],[-37,-75],[-70,151],[-171,139],[-164,334],[20,44],[115,-33],[103,215],[10,260],[-214,411],[-163,159],[-102,360],[-103,377],[-129,461],[-113,518]],[[17464,70566],[316,44],[353,63],[-26,-113],[419,-280],[634,-406],[552,5],[221,0],[0,237],[481,0],[102,-204],[142,-182],[165,-253],[92,-301],[69,-317],[144,-174],[230,-172],[175,455],[227,11],[196,-230],[139,-394],[96,-338],[164,-328],[61,-403],[78,-271],[217,-178],[197,-127],[108,17]],[[55993,76158],[95,33],[128,10]],[[46619,60247],[93,105],[47,339],[88,13],[194,-160],[157,114],[107,-38],[42,128],[1114,8],[62,404],[-48,71],[-134,2485],[-134,2485],[425,11]],[[51185,62860],[1,-1326],[-152,-384],[-24,-355],[-247,-92],[-379,-49],[-102,-205],[-178,-22]],[[46801,58995],[13,179],[-24,223],[-104,162],[-54,330],[-13,358]],[[77375,57550],[-27,427],[86,441],[-94,341],[23,627],[-113,299],[-90,689],[-50,727],[-121,477],[-183,-289],[-315,-410],[-156,51],[-172,135],[96,714],[-58,539],[-218,664],[34,208],[-163,74],[-197,469]],[[77809,63588],[-159,-134],[-162,-249],[-196,-26],[-127,-623],[-117,-104],[134,-506],[177,-420],[113,-380],[-101,-501],[-96,-106],[66,-289],[185,-458],[32,-321],[-4,-268],[108,-525],[-152,-537],[-135,-591]],[[55380,75946],[-58,44],[-78,188],[-120,115]],[[55338,76894],[74,-99],[40,-80],[91,-62],[106,-119],[-22,-50]],[[74375,80219],[292,99],[530,496],[423,271],[242,-176],[289,-9],[186,-269],[277,-21],[402,-144],[270,401],[-113,339],[288,596],[311,-238],[252,-67],[327,-148],[53,-432],[394,-242],[263,107],[351,75],[279,-76],[272,-276],[168,-295],[258,6],[350,-94],[255,143],[366,96],[407,405],[166,-62],[146,-193],[331,48]],[[59599,45195],[209,47],[334,-163],[73,73],[193,15],[99,173],[167,-10],[303,224],[221,334]],[[61198,45888],[45,-258],[-11,-574],[34,-505],[11,-900],[49,-282],[-83,-412],[-108,-400],[-177,-357],[-254,-219],[-313,-279],[-313,-618],[-107,-106],[-194,-409],[-115,-133],[-23,-411],[132,-436],[54,-337],[4,-173],[49,29],[-8,-565],[-45,-267],[65,-99],[-41,-239],[-116,-205],[-229,-195],[-334,-312],[-122,-213],[24,-242],[71,-39],[-24,-303]],[[59119,36429],[-211,5]],[[58908,36434],[-24,254],[-41,259]],[[58843,36947],[-23,206],[49,642],[-72,410],[-133,810]],[[58664,39015],[292,654],[74,415],[42,52],[31,339],[-45,171],[12,430],[54,400],[0,728],[-145,185],[-132,42],[-60,143],[-128,121],[-232,-11],[-18,215]],[[58409,42899],[-26,410],[843,474]],[[59226,43783],[159,-276],[77,53],[110,-146],[16,-231],[-59,-268],[21,-405],[181,-356],[85,399],[120,122],[-24,740],[-116,417],[-100,185],[-97,-8],[-77,748],[77,438]],[[46619,60247],[-184,395],[-168,424],[-184,153],[-133,169],[-155,-6],[-135,-126],[-138,50],[-96,-185]],[[45426,61121],[-24,311],[78,283],[34,543],[-30,569],[-34,286],[28,287],[-72,274],[-146,249]],[[45260,63923],[60,192],[1088,-4],[-53,832],[68,296],[261,51],[-9,1474],[911,-30],[1,872]],[[59226,43783],[-147,149],[85,535],[87,201],[-53,477],[56,467],[47,156],[-71,489],[-131,257]],[[59099,46514],[273,-108],[55,-159],[95,-269],[77,-783]],[[78372,55412],[64,-54],[164,-347],[116,-386],[16,-388],[-29,-262],[27,-198],[20,-340],[98,-159],[109,-509],[-5,-195],[-197,-38],[-263,426],[-329,457],[-32,294],[-161,385],[-38,477],[-100,314],[30,419],[-61,244]],[[77801,55552],[48,103],[227,-252],[22,-296],[183,69],[91,236]],[[80461,52985],[204,-198],[214,108],[56,488],[119,108],[333,125],[199,456],[137,364]],[[82069,54967],[214,400],[140,450],[112,2],[143,-291],[13,-251],[183,-160],[231,-173],[-20,-226],[-186,-29],[50,-281],[-205,-196]],[[54540,35373],[-207,435],[-108,420],[-62,561],[-68,417],[-93,887],[-7,689],[-35,314],[-108,237],[-144,476],[-146,691],[-60,361],[-226,563],[-17,441]],[[56448,41738],[228,131],[180,-33],[109,-130],[2,-48]],[[55526,37566],[0,-2127],[-248,-294],[-149,-42],[-175,108],[-125,42],[-47,247],[-109,157],[-133,-284]],[[96049,39690],[228,-357],[144,-265],[-105,-138],[-153,155],[-199,259],[-179,306],[-184,406],[-38,195],[119,-8],[156,-196],[122,-196],[89,-161]],[[54125,64996],[68,-895],[104,-150],[4,-183],[116,-198],[-60,-248],[-107,-1168],[-15,-749],[-354,-543],[-120,-759],[115,-213],[0,-371],[178,-13],[-28,-271]],[[53939,59018],[-52,-12],[-188,630],[-65,23],[-217,-322],[-215,168],[-150,34],[-80,-81],[-163,17],[-164,-245],[-141,-14],[-337,298],[-131,-142],[-142,10],[-104,218],[-279,214],[-298,-68],[-72,-124],[-39,-331],[-80,-233],[-19,-514]],[[52361,54577],[-289,-207],[-105,30],[-107,-129],[-222,13],[-149,360],[-91,417],[-197,379],[-209,-7],[-245,1]],[[26191,58215],[-96,181],[-130,233],[-61,194],[-117,181],[-140,260],[31,89],[46,-87],[21,41]],[[26903,60465],[-24,-55],[-14,-129],[29,-210],[-64,-197],[-30,-231],[-9,-254],[15,-148],[7,-260],[-43,-56],[-26,-247],[19,-152],[-56,-147],[12,-156],[43,-94]],[[50920,81398],[143,159],[244,847],[380,241],[231,-16]],[[58639,91887],[-473,-231],[-224,-54]],[[55734,91626],[-172,-23],[-41,-379],[-523,92],[-74,-321],[-267,2],[-183,-409],[-278,-639],[-431,-810],[101,-197],[-97,-228],[-275,10],[-180,-540],[17,-765],[177,-292],[-92,-677],[-231,-395],[-122,-332]],[[53063,85723],[-187,354],[-548,-666],[-371,-135],[-384,293],[-99,619],[-88,1329],[256,371],[733,483],[549,595],[508,802],[668,1112],[465,434],[763,722],[610,252],[457,-31],[423,477],[506,-25],[499,115],[869,-422],[-358,-154],[305,-361]],[[56867,96664],[-620,-236],[-490,134],[191,149],[-167,184],[575,115],[110,-216],[401,-130]],[[55069,97728],[915,-429],[-699,-227],[-155,-424],[-243,-108],[-132,-478],[-335,-22],[-598,351],[252,205],[-416,166],[-541,487],[-216,451],[757,206],[152,-202],[396,8],[105,197],[408,20],[350,-201]],[[57068,98134],[545,-202],[-412,-310],[-806,-68],[-819,96],[-50,159],[-398,10],[-304,264],[858,161],[403,-138],[281,172],[702,-144]],[[98060,28265],[63,-238],[198,233],[80,-243],[0,-242],[-103,-267],[-182,-424],[-142,-232],[103,-277],[-214,-7],[-238,-217],[-75,-377],[-157,-583],[-219,-257],[-138,-164],[-256,12],[-180,190],[-302,40],[-46,212],[149,427],[349,568],[179,109],[200,219],[238,301],[167,299],[123,429],[106,146],[41,321],[195,267],[61,-245]],[[98502,31008],[202,-607],[5,394],[126,-158],[41,-435],[224,-188],[188,-46],[158,220],[141,-67],[-67,-511],[-85,-336],[-212,12],[-74,-175],[26,-248],[-41,-107],[-105,-310],[-138,-395],[-214,-229],[-48,151],[-116,83],[160,474],[-91,317],[-299,230],[8,209],[201,200],[47,444],[-13,372],[-113,386],[8,102],[-133,237],[-218,510],[-117,408],[104,45],[151,-320],[216,-149],[78,-513]],[[64752,61418],[-91,403],[-217,950]],[[64444,62771],[833,576],[185,1152],[-127,408]],[[65665,66183],[125,-393],[155,-209],[203,-76],[165,-105],[125,-330],[75,-191],[100,-73],[-1,-128],[-101,-344],[-44,-161],[-117,-184],[-104,-395],[-126,30],[-58,-137],[-44,-292],[34,-385],[-26,-71],[-128,2],[-174,-215],[-27,-281],[-63,-121],[-173,4],[-109,-145],[1,-232],[-134,-160],[-153,54],[-186,-194],[-128,-33]],[[65575,66834],[80,196],[35,-50],[-26,-238],[-37,-104]],[[68937,65473],[-203,146],[-83,414],[-215,438],[-512,-108],[-451,-11],[-391,-81]],[[28366,55989],[-93,166],[-59,311],[68,154],[-70,40],[-52,190],[-138,160],[-122,-37],[-56,-200],[-112,-145],[-61,-20],[-27,-120],[132,-312],[-75,-74],[-40,-85],[-130,-29],[-48,344],[-36,-98],[-92,33],[-56,232],[-114,38],[-72,68],[-119,-1],[-8,-125],[-32,87]],[[27070,57338],[100,-206],[-6,-122],[111,-26],[26,47],[77,-142],[136,42],[119,145],[168,116],[95,172],[153,-33],[-10,-57],[155,-20],[124,-99],[90,-173],[105,-159]],[[30452,41263],[-279,331],[-24,236],[-551,578],[-498,630],[-214,355],[-115,476],[46,166],[-236,755],[-274,1063],[-262,1147],[-114,262],[-87,424],[-216,376],[-198,233],[90,257],[-134,550],[86,403],[221,364]],[[85104,56675],[28,-382],[16,-323],[-94,-527],[-102,587],[-130,-292],[89,-425],[-79,-270],[-327,335],[-78,416],[84,274],[-176,273],[-87,-239],[-131,22],[-205,-321],[-46,168],[109,486],[175,161],[151,217],[98,-260],[212,157],[45,257],[196,16],[-16,445],[225,-273],[23,-290],[20,-212]],[[84439,57749],[-100,-190],[-87,-363],[-87,-171],[-171,398],[57,154],[70,162],[30,357],[153,34],[-44,-388],[205,556],[-26,-549]],[[82917,57194],[-369,-546],[136,403],[200,355],[167,399],[146,572],[49,-470],[-183,-317],[-146,-396]],[[83856,58678],[166,-179],[177,1],[-5,-240],[-129,-245],[-176,-173],[-10,268],[20,293],[-43,275]],[[84861,58834],[78,-643],[-214,152],[5,-193],[68,-355],[-132,-129],[-11,405],[-84,30],[-43,348],[163,-46],[-4,218],[-169,440],[266,-13],[77,-214]],[[83757,59356],[-74,-498],[-119,288],[-142,438],[238,-21],[97,-207]],[[83700,62485],[171,-164],[85,150],[26,-146],[-46,-239],[95,-413],[-73,-478],[-164,-191],[-43,-465],[62,-458],[147,-64],[123,68],[347,-319],[-27,-313],[91,-139],[-29,-265],[-216,283],[-103,302],[-71,-211],[-177,345],[-253,-86],[-138,128],[14,238],[87,146],[-83,133],[-36,-207],[-137,331],[-41,251],[-11,551],[112,-190],[29,901],[90,522],[169,-1]],[[93299,47902],[-78,-58],[-120,221],[-122,366],[-59,439],[38,55],[30,-171],[84,-130],[135,-366],[131,-195],[-39,-161]],[[92217,48675],[-146,-48],[-44,-161],[-152,-140],[-142,-135],[-148,1],[-228,167],[-158,161],[23,178],[249,-84],[152,45],[42,276],[40,14],[27,-306],[158,44],[78,197],[155,206],[-30,339],[166,11],[56,-94],[-5,-320],[-93,-351]],[[89166,50332],[482,-397],[513,-329],[192,-295],[154,-290],[43,-339],[462,-356],[68,-306],[-256,-62],[62,-383],[248,-378],[180,-611],[159,19],[-11,-255],[215,-98],[-84,-108],[295,-243],[-30,-166],[-184,-40],[-69,149],[-238,65],[-281,86],[-216,368],[-158,316],[-144,504],[-362,252],[-235,-164],[-170,-190],[35,-425],[-218,-198],[-155,96],[-288,25]],[[92538,49238],[-87,-154],[-52,340],[-65,223],[-126,189],[-158,245],[-200,170],[77,139],[150,-162],[94,-126],[117,-139],[111,-241],[106,-185],[33,-299]],[[53922,82787],[189,169],[434,266],[350,195],[277,-97],[21,-140],[268,-8]],[[55461,83172],[342,-65],[511,9]],[[56535,81532],[139,-502],[-29,-162],[-138,-67],[-252,-479],[71,-259],[-60,34]],[[56266,80097],[-264,221],[-200,-81],[-131,59],[-165,-123],[-140,204],[-114,-78],[-16,34]],[[31588,62492],[142,-51],[50,-114],[-71,-146],[-209,4],[-163,-21],[-16,247],[40,84],[227,-3]],[[86288,76244],[39,-101]],[[86327,76143],[-106,35],[-120,-195],[-83,-196],[10,-414],[-143,-127],[-50,-102],[-104,-170],[-185,-95],[-121,-154],[-9,-250],[-32,-63],[111,-94],[157,-253]],[[85048,73569],[-135,109],[-34,-108],[-81,-48],[-10,109],[-72,52],[-75,92],[76,254],[66,67],[-25,105],[71,311],[-18,94],[-163,63],[-131,154]],[[47929,73193],[-112,-149],[-146,81],[-143,-64],[42,451],[-26,354],[-124,53],[-67,218],[22,377],[111,210],[20,232],[58,347],[-6,244],[-56,206],[-12,195]],[[64113,66085],[-18,419],[75,302],[76,62],[84,-180],[5,-337],[-61,-339]],[[64274,66012],[-77,-41],[-84,114]],[[56308,79404],[120,123],[172,-64],[178,-2],[129,-141],[95,89],[205,55],[69,135],[118,0]],[[57842,78025],[124,-106],[131,93],[126,-99]],[[58223,77913],[6,-149],[-135,-124],[-84,54],[-78,-694]],[[56293,77303],[-51,101],[65,97],[-69,72],[-87,-129],[-162,167],[-22,237],[-169,136],[-31,183],[-151,226]],[[89901,81054],[280,-1020],[-411,190],[-171,-832],[271,-590],[-8,-403],[-211,347],[-182,-445],[-51,483],[31,561],[-32,621],[64,436],[13,770],[-163,566],[24,787],[257,265],[-110,267],[123,81],[73,-381],[96,-555],[-7,-567],[114,-581]],[[55461,83172],[63,254],[383,186]],[[99999,92620],[-305,-29],[-49,183],[-99645,240],[36,24],[235,-1],[402,-165],[-24,-79],[-286,-138],[-363,-35],[99999,0]],[[89889,93991],[-421,-4],[-569,64],[-49,31],[263,227],[348,54],[394,-221],[34,-151]],[[91869,95069],[-321,-228],[-444,52],[-516,227],[66,187],[518,-87],[697,-151]],[[90301,95344],[-219,-427],[-1023,16],[-461,-136],[-550,374],[149,396],[366,108],[734,-25],[1004,-306]],[[65981,92556],[-164,-51],[-907,75],[-74,256],[-503,154],[-40,311],[284,124],[-10,314],[551,491],[-255,70],[665,506],[-75,261],[621,304],[917,370],[925,108],[475,214],[541,74],[193,-227],[-187,-179],[-984,-286],[-848,-274],[-863,-548],[-414,-563],[-435,-553],[56,-479],[531,-472]],[[63639,78550],[-127,-342],[-269,-95],[-276,-594],[252,-547],[-27,-388],[303,-678]],[[61098,76843],[-354,486],[-317,218],[-240,338],[202,92],[231,482],[-156,227],[410,236],[-8,125],[-249,-92]],[[60617,78955],[9,255],[143,161],[269,42],[44,192],[-62,318],[113,302],[-3,169],[-410,187],[-162,-6],[-172,270],[-213,-92],[-352,203],[6,113],[-99,250],[-222,28],[-23,178],[70,117],[-178,326],[-288,-56],[-84,29],[-70,-131],[-104,24]],[[57772,86080],[316,318],[-291,274]],[[58639,91887],[286,200],[456,-348],[761,-137],[1050,-652],[213,-273],[18,-384],[-308,-302],[-454,-154],[-1240,438],[-204,-73],[453,-422],[18,-267],[18,-589],[358,-175],[217,-150],[36,279],[-168,248],[177,218],[672,-358],[233,140],[-186,422],[647,564],[256,-33],[260,-202],[161,396],[-231,343],[136,345],[-204,357],[777,-185],[158,-322],[-351,-71],[1,-321],[219,-197],[429,125],[68,367],[580,274],[970,495],[209,-28],[-273,-350],[344,-60],[199,197],[521,16],[412,239],[317,-347],[315,381],[-291,334],[145,190],[820,-175],[385,-180],[1006,-658],[186,302],[-282,304],[-8,122],[-335,57],[92,273],[-149,449],[-8,185],[512,521],[183,523],[206,114],[736,-152],[57,-320],[-263,-468],[173,-183],[89,-403],[-63,-789],[307,-353],[-120,-384],[-544,-818],[318,-85],[110,207],[306,148],[74,285],[240,274],[-162,328],[130,380],[-304,47],[-67,321],[222,578],[-361,469],[497,389],[-64,409],[139,13],[145,-319],[-109,-556],[297,-105],[-127,415],[465,227],[577,30],[513,-328],[-247,479],[-28,614],[483,116],[669,-25],[602,75],[-226,301],[321,378],[319,16],[540,286],[734,77],[93,157],[729,54],[227,-129],[624,306],[510,-10],[77,249],[265,245],[656,236],[476,-186],[-378,-142],[629,-89],[75,-284],[254,140],[812,-8],[626,-281],[223,-215],[-69,-300],[-307,-170],[-730,-320],[-209,-171],[345,-80],[410,-146],[251,109],[141,-369],[122,149],[444,91],[892,-95],[67,-269],[1162,-86],[15,440],[590,-101],[443,3],[449,-303],[128,-369],[-165,-241],[349,-453],[437,-234],[268,605],[446,-260],[473,155],[538,-177],[204,162],[455,-81],[-201,534],[367,250],[2509,-374],[236,-342],[727,-440],[1122,109],[553,-95],[231,-238],[-33,-421],[342,-164],[372,118],[492,15],[525,-113],[526,64],[484,-512],[344,184],[-224,368],[123,256],[886,-161],[578,34],[799,-275],[-99610,-251],[681,-440],[728,-572],[-24,-358],[187,-143],[-64,418],[754,-86],[544,-539],[-276,-251],[-455,-59],[-7,-563],[-111,-120],[-260,17],[-212,201],[-369,168],[-62,250],[-283,94],[-315,-74],[-151,201],[60,214],[-333,-137],[126,-271],[-158,-244],[0,-3],[99640,-253],[-360,42],[250,-307],[166,-474],[128,-155],[32,-238],[-71,-153],[-518,126],[-777,-434],[-247,-67],[-425,-405],[-403,-353],[-102,-262],[-397,399],[-724,-453],[-126,214],[-268,-246],[-371,79],[-90,-379],[-333,-557],[10,-233],[316,-129],[-37,-839],[-258,-21],[-119,-482],[116,-248],[-486,-294],[-96,-657],[-415,-141],[-83,-585],[-400,-536],[-103,396],[-119,841],[-155,1279],[134,799],[234,344],[14,269],[432,129],[496,725],[479,592],[499,459],[223,812],[-337,-49],[-167,-474],[-705,-632],[-227,708],[-717,-196],[-696,-965],[230,-353],[-620,-151],[-430,-59],[20,417],[-431,87],[-344,-283],[-850,99],[-914,-171],[-899,-1124],[-1065,-1358],[438,-73],[136,-360],[270,-128],[178,288],[305,-38],[401,-633],[9,-490],[-217,-576],[-23,-687],[-126,-921],[-418,-833],[-94,-399],[-377,-670],[-374,-665],[-179,-340],[-370,-338],[-175,-8],[-175,280],[-373,-421],[-43,-192]],[[79187,96925],[-1566,-222],[507,756],[229,64],[208,-37],[704,-327],[-82,-234]],[[64204,98215],[-373,-76],[-250,-44],[-39,-94],[-324,-95],[-301,136],[158,180],[-618,17],[542,105],[422,7],[57,-155],[159,138],[262,95],[412,-126],[-107,-88]],[[77760,97255],[-606,-71],[-773,166],[-462,220],[-213,413],[-379,113],[722,394],[600,130],[540,-290],[640,-557],[-69,-518]],[[58449,51176],[110,-325],[-16,-339],[-80,-73]],[[58216,51057],[67,-59],[166,178]],[[45260,63923],[12,243]],[[61883,61244],[-37,246],[-83,173],[-22,230],[-143,206],[-148,483],[-79,469],[-192,397],[-124,94],[-184,549],[-32,400],[12,342],[-159,638],[-130,225],[-150,119],[-92,330],[15,130],[-77,299],[-81,128],[-108,429],[-170,464],[-141,395],[-139,-2],[44,316],[12,201],[34,230]],[[63448,68272],[109,-497],[137,-131],[47,-203],[190,-242],[16,-237],[-27,-192],[35,-193],[80,-162],[37,-189],[41,-141]],[[64274,66012],[53,-220]],[[64444,62771],[-801,-221],[-259,-259],[-199,-604],[-130,-96],[-70,191],[-106,-28],[-269,57],[-50,58],[-321,-13],[-75,-52],[-114,149],[-74,-283],[28,-243],[-121,-183]],[[59434,57280],[-39,11],[5,287],[-33,197],[-143,228],[-34,415],[34,425],[-129,40],[-19,-129],[-167,-29],[67,-169],[23,-346],[-152,-316],[-138,-415],[-144,-59],[-233,336],[-105,-119],[-29,-168],[-143,-109],[-9,-118],[-277,0],[-38,118],[-200,20],[-100,-99],[-77,50],[-143,336],[-48,158],[-200,-79],[-76,-267],[-72,-514],[-95,-109],[-85,-63]],[[56635,56793],[-23,27]],[[56351,58246],[3,140],[-102,169],[-3,335],[-58,222],[-98,-33],[28,211],[72,240],[-32,239],[92,176],[-58,135],[73,355],[127,425],[240,-41],[-14,2286]],[[60240,64499],[90,-565],[-61,-105],[40,-593],[102,-687],[106,-142],[152,-213]],[[59433,57348],[1,-68]],[[59434,57280],[3,-449]],[[59445,54277],[-171,-265],[-195,1],[-224,-135],[-176,129],[-115,-157]],[[56824,56568],[-189,225]],[[45357,59658],[-115,449],[-138,205],[122,109],[134,404],[66,296]],[[45367,58962],[-46,441]],[[95032,45793],[78,-198],[-194,3],[-106,355],[166,-140],[56,-20]],[[94680,46144],[-108,-13],[-170,58],[-58,89],[17,228],[183,-90],[91,-121],[45,-151]],[[94910,46301],[-42,-106],[-206,499],[-57,344],[94,0],[100,-461],[111,-276]],[[94409,47028],[12,-116],[-218,245],[-152,206],[-104,192],[41,59],[128,-138],[228,-265],[65,-183]],[[93760,47598],[-56,-33],[-121,131],[-114,237],[14,96],[166,-243],[111,-188]],[[46822,55737],[-75,43],[-200,232],[-144,308],[-49,211],[-34,425]],[[25613,59537],[-31,-135],[-161,8],[-100,55],[-115,115],[-154,36],[-79,123]],[[61984,58430],[91,-106],[54,-238],[125,-241],[138,-2],[262,147],[302,68],[245,179],[138,38],[99,105],[158,20]],[[63596,58400],[-2,-9],[-1,-237],[0,-581],[0,-301],[-125,-353],[-194,-481]],[[63596,58400],[89,12],[128,85],[147,58],[132,198],[105,1],[6,-159],[-25,-335],[1,-303],[-59,-208],[-78,-622],[-134,-644],[-172,-735],[-238,-844],[-237,-645],[-327,-785],[-278,-467],[-415,-571],[-259,-438],[-304,-698],[-64,-304],[-63,-136]],[[34125,55269],[333,-115],[30,104],[225,41],[298,-155]],[[34889,54255],[109,-341],[-49,-248],[-24,-263],[-71,-242]],[[56266,80097],[-77,-150],[-55,-232]],[[53809,78032],[62,52]],[[56639,89841],[-478,-163],[-269,-401],[43,-353],[-441,-463],[-537,-495],[-202,-811],[198,-406],[265,-320],[-255,-649],[-289,-135],[-106,-967],[-157,-539],[-337,55],[-158,-456],[-321,-27],[-89,545],[-232,653],[-211,814]],[[58908,36434],[-56,-256],[-163,-62],[-166,312],[-2,199],[76,216],[26,168],[80,41],[140,-105]],[[59999,71781],[-26,440],[68,237]],[[60041,72458],[74,126],[75,127],[15,321],[91,-112],[306,160],[147,-108],[229,1],[320,217],[149,-10],[316,89]],[[50518,55366],[-224,-122]],[[78495,58847],[-249,265],[-238,-11],[41,452],[-245,-3],[-22,-633],[-150,-841],[-90,-509],[19,-417],[181,-18],[113,-526],[50,-498],[155,-330],[168,-67],[144,-299]],[[77801,55552],[-110,221],[-47,285],[-148,325],[-135,274],[-45,-339],[-53,320],[30,359],[82,553]],[[68841,73220],[156,583],[-60,429],[-204,137],[72,254],[232,-27],[132,318],[89,370],[371,134],[-58,-267],[40,-161],[114,15]],[[64978,73251],[-52,408],[40,602],[-216,195],[71,394],[-184,34],[61,485],[262,-141],[244,184],[-202,346],[-80,329],[-224,-147],[-28,-422],[-87,374]],[[65546,75618],[313,8],[-45,290],[237,199],[234,334],[374,-304],[30,-460],[106,-118],[301,27],[93,-105],[137,-593],[317,-398],[181,-271],[291,-282],[369,-247],[-7,-352]],[[84713,46708],[32,136],[239,129],[194,20],[87,72],[105,-72],[-102,-156],[-289,-252],[-233,-165]],[[32866,58026],[160,75],[58,-20],[-11,-430],[-232,-63],[-50,52],[81,158],[-6,228]],[[52339,73106],[302,232],[195,-69],[-9,-291],[236,212],[20,-111],[-139,-282],[-2,-266],[96,-143],[-36,-499],[-183,-289],[53,-314],[143,-10],[70,-274],[106,-90]],[[60041,72458],[-102,261],[105,217],[-169,-49],[-233,132],[-191,-331],[-421,-65],[-225,309],[-300,19],[-64,-238],[-192,-69],[-268,307],[-303,-11],[-165,573],[-203,320],[135,447],[-176,276],[308,550],[428,23],[117,438],[529,-76],[334,373],[324,163],[459,13],[485,-406],[399,-223],[323,89],[239,-52],[328,301]],[[57776,76021],[33,-222],[243,-186],[-51,-141],[-330,-32],[-118,-178],[-232,-310],[-87,268],[3,119]],[[83826,65878],[-167,-924],[-119,-472],[-146,486],[-32,427],[163,566],[223,436],[127,-172],[-49,-347]],[[60889,49136],[-128,-710],[16,-326],[178,-210],[8,-149],[-76,-348],[16,-175],[-18,-275],[97,-361],[115,-568],[101,-126]],[[59099,46514],[-157,172],[-177,97],[-111,97],[-116,146]],[[58449,51176],[98,69],[304,-7],[566,44]],[[60617,78955],[-222,-46],[-185,-187],[-260,-30],[-239,-215],[16,-358],[136,-139],[284,35],[-55,-206],[-304,-100],[-377,-333],[-154,117],[61,271],[-304,169],[50,110],[265,191],[-80,132],[-432,146],[-19,215],[-257,-71],[-103,-317],[-215,-426]],[[35174,32383],[-121,-362],[-313,-320],[-205,115],[-151,-62],[-256,247],[-189,-18],[-169,319]],[[6794,62819],[-41,-96],[-69,82],[8,161],[-46,210],[14,64],[48,94],[-19,113],[16,54],[21,-11],[107,-97],[49,-50],[45,-77],[71,-202],[-7,-32],[-108,-123],[-89,-90]],[[6645,63718],[-94,-41],[-47,121],[-32,47],[-3,36],[27,49],[99,-55],[73,-88],[-23,-69]],[[6456,64025],[-9,-63],[-149,17],[21,70],[137,-24]],[[6207,64108],[-15,-33],[-19,8],[-97,20],[-35,130],[-11,23],[74,80],[23,-37],[80,-191]],[[5737,64488],[-33,-57],[-93,105],[14,42],[43,57],[64,-13],[5,-134]],[[31350,77823],[48,-189],[-296,-279],[-286,-198],[-293,-171],[-147,-342],[-47,-129],[-3,-306],[92,-305],[115,-14],[-29,210],[83,-128],[-22,-165],[-188,-93],[-133,11],[-205,-100],[-121,-29],[-162,-28],[-231,-167],[408,108],[82,-109],[-389,-173],[-177,-1],[8,71],[-84,-160],[82,-26],[-60,-414],[-203,-443],[-20,148],[-61,30],[-91,144],[57,-310],[69,-103],[5,-217],[-89,-224],[-157,-460],[-25,23],[86,392],[-142,220],[-33,478],[-53,-249],[59,-365],[-183,90],[191,-185],[12,-548],[79,-40],[29,-199],[39,-577],[-176,-427],[-288,-171],[-182,-338],[-139,-37],[-141,-211],[-39,-193],[-305,-374],[-157,-274],[-131,-342],[-43,-409],[50,-400],[92,-492],[124,-408],[1,-249],[132,-668],[-9,-388],[-12,-224],[-69,-352],[-83,-73],[-137,70],[-44,253],[-105,132],[-148,496],[-129,440],[-42,225],[57,383],[-77,316],[-217,482],[-108,89],[-281,-262],[-49,29],[-135,269],[-174,142],[-314,-72],[-247,63],[-212,-39],[-114,-90],[50,-153],[-5,-234],[59,-113],[-53,-76],[-103,85],[-104,-109],[-202,17],[-207,305],[-242,-72],[-202,133],[-173,-40],[-234,-135],[-253,-427],[-276,-248],[-152,-275],[-63,-259],[-3,-397],[14,-277],[52,-196]],[[17464,70566],[-46,294],[-180,331],[-130,69],[-30,165],[-156,29],[-100,156],[-258,57],[-71,93],[-33,316],[-270,578],[-231,801],[10,133],[-123,190],[-215,483],[-38,469],[-148,315],[61,477],[-10,494],[-89,441],[109,543],[34,523],[33,522],[-50,773],[-88,492],[-80,268],[33,112],[402,-195],[148,-544],[69,152],[-45,472],[-94,473]],[[7498,84721],[-277,-219],[-142,148],[-43,270],[252,205],[148,88],[185,-39],[117,-179],[-240,-274]],[[4006,86330],[-171,-89],[-182,107],[-168,157],[274,98],[220,-52],[27,-221]],[[2297,88560],[171,-109],[173,59],[225,-152],[276,-77],[-23,-63],[-211,-121],[-211,125],[-106,104],[-245,-33],[-66,51],[17,216]],[[13740,83389],[-153,217],[-245,183],[-78,503],[-358,466],[-150,543],[-267,38],[-441,14],[-326,165],[-574,598],[-266,109],[-486,206],[-385,-49],[-546,264],[-330,246],[-309,-122],[58,-400],[-154,-37],[-321,-120],[-245,-195],[-308,-122],[-39,339],[125,565],[295,177],[-76,145],[-354,-321],[-190,-383],[-400,-410],[203,-280],[-262,-413],[-299,-241],[-278,-176],[-69,-255],[-434,-297],[-87,-271],[-325,-246],[-191,44],[-259,-160],[-282,-196],[-231,-193],[-477,-164],[-43,96],[304,270],[271,177],[296,315],[345,65],[137,236],[385,345],[62,115],[205,204],[48,437],[141,340],[-320,-175],[-90,99],[-150,-209],[-181,292],[-75,-207],[-104,287],[-278,-230],[-170,0],[-24,343],[50,211],[-179,205],[-361,-110],[-235,270],[-190,138],[-1,327],[-214,245],[108,331],[226,322],[99,295],[225,42],[191,-92],[224,278],[201,-50],[212,179],[-52,263],[-155,104],[205,222],[-170,-7],[-295,-125],[-85,-127],[-219,127],[-392,-65],[-407,138],[-117,232],[-351,334],[390,241],[620,282],[228,0],[-38,-288],[586,22],[-225,357],[-342,219],[-197,288],[-267,246],[-381,182],[155,302],[493,19],[350,262],[66,280],[284,274],[271,66],[526,256],[256,-39],[427,307],[421,-121],[201,-260],[123,112],[469,-35],[-16,-132],[425,-98],[283,57],[585,-182],[534,-54],[214,-75],[370,94],[421,-173],[302,-81]],[[30185,58611],[-8,-136],[-163,-67],[91,-262],[-3,-301],[-123,-334],[105,-457],[120,37],[62,417],[-86,202],[-14,436],[346,234],[-38,272],[97,181],[100,-404],[195,-10],[180,-321],[11,-190],[249,-6],[297,60],[159,-258],[213,-71],[155,180],[4,145],[344,34],[333,8],[-236,-170],[95,-272],[222,-43],[210,-283],[45,-462],[144,13],[109,-135]],[[80013,64241],[-371,-493],[-231,-544],[-61,-399],[212,-607],[260,-753],[252,-356],[169,-462],[127,-1066],[-37,-1013],[-232,-379],[-318,-371],[-227,-480],[-346,-536],[-101,369],[78,390],[-206,327]],[[96623,42347],[-92,-76],[-93,252],[10,155],[175,-331]],[[96418,43229],[45,-464],[-75,72],[-58,-31],[-39,159],[-6,441],[133,-177]],[[64752,61418],[-201,-154],[-54,-256],[-6,-196],[-277,-244],[-444,-268],[-249,-406],[-122,-32],[-83,34],[-163,-239],[-177,-111],[-233,-30],[-70,-33],[-61,-152],[-73,-42],[-43,-146],[-137,12],[-89,-78],[-192,30],[-72,336],[8,315],[-46,170],[-54,426],[-80,236],[56,28],[-29,264],[34,111],[-12,251]],[[58175,39107],[113,-6],[134,-97],[94,69],[148,-58]],[[59119,36429],[-70,-419],[-32,-479],[-72,-260],[-190,-290],[-54,-84],[-118,-292],[-77,-296],[-158,-413],[-314,-594],[-196,-345],[-210,-262],[-290,-224],[-141,-30],[-36,-160],[-169,85],[-138,-109],[-301,111],[-168,-71],[-115,31],[-286,-228],[-238,-91],[-171,-218],[-127,-13],[-117,205],[-94,10],[-120,258],[-13,-80],[-37,155],[2,337],[-90,386],[89,105],[-7,442],[-182,539],[-139,488],[-1,1],[-199,749]],[[58409,42899],[-210,-79],[-159,-230],[-33,-199],[-100,-46],[-241,-473],[-154,-373],[-94,-13],[-90,66],[-311,63]]],"transform":{"scale":[0.0036000360003600037,0.0017364686646866468],"translate":[-180,-90]}}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = [{"id":"-1","name":"Northern Cyprus"},{"id":"-2","name":"Kosovo"},{"id":"-3","name":"Somaliland"},{"id":"4","name":"Afghanistan"},{"id":"8","name":"Albania"},{"id":"10","name":"Antarctica"},{"id":"12","name":"Algeria"},{"id":"16","name":"American Samoa"},{"id":"20","name":"Andorra"},{"id":"24","name":"Angola"},{"id":"28","name":"Antigua and Barbuda"},{"id":"31","name":"Azerbaijan"},{"id":"32","name":"Argentina"},{"id":"36","name":"Australia"},{"id":"40","name":"Austria"},{"id":"44","name":"Bahamas"},{"id":"48","name":"Bahrain"},{"id":"50","name":"Bangladesh"},{"id":"51","name":"Armenia"},{"id":"52","name":"Barbados"},{"id":"56","name":"Belgium"},{"id":"60","name":"Bermuda"},{"id":"64","name":"Bhutan"},{"id":"68","name":"Bolivia, Plurinational State of"},{"id":"70","name":"Bosnia and Herzegovina"},{"id":"72","name":"Botswana"},{"id":"74","name":"Bouvet Island"},{"id":"76","name":"Brazil"},{"id":"84","name":"Belize"},{"id":"86","name":"British Indian Ocean Territory"},{"id":"90","name":"Solomon Islands"},{"id":"92","name":"Virgin Islands, British"},{"id":"96","name":"Brunei Darussalam"},{"id":"100","name":"Bulgaria"},{"id":"104","name":"Myanmar"},{"id":"108","name":"Burundi"},{"id":"112","name":"Belarus"},{"id":"116","name":"Cambodia"},{"id":"120","name":"Cameroon"},{"id":"124","name":"Canada"},{"id":"132","name":"Cape Verde"},{"id":"136","name":"Cayman Islands"},{"id":"140","name":"Central African Republic"},{"id":"144","name":"Sri Lanka"},{"id":"148","name":"Chad"},{"id":"152","name":"Chile"},{"id":"156","name":"China"},{"id":"158","name":"Taiwan, Province of China"},{"id":"162","name":"Christmas Island"},{"id":"166","name":"Cocos (Keeling) Islands"},{"id":"170","name":"Colombia"},{"id":"174","name":"Comoros"},{"id":"175","name":"Mayotte"},{"id":"178","name":"Congo"},{"id":"180","name":"Congo, the Democratic Republic of the"},{"id":"184","name":"Cook Islands"},{"id":"188","name":"Costa Rica"},{"id":"191","name":"Croatia"},{"id":"192","name":"Cuba"},{"id":"196","name":"Cyprus"},{"id":"203","name":"Czech Republic"},{"id":"204","name":"Benin"},{"id":"208","name":"Denmark"},{"id":"212","name":"Dominica"},{"id":"214","name":"Dominican Republic"},{"id":"218","name":"Ecuador"},{"id":"222","name":"El Salvador"},{"id":"226","name":"Equatorial Guinea"},{"id":"231","name":"Ethiopia"},{"id":"232","name":"Eritrea"},{"id":"233","name":"Estonia"},{"id":"234","name":"Faroe Islands"},{"id":"238","name":"Falkland Islands (Malvinas)"},{"id":"239","name":"South Georgia and the South Sandwich Islands"},{"id":"242","name":"Fiji"},{"id":"246","name":"Finland"},{"id":"248","name":"Åland Islands"},{"id":"250","name":"France"},{"id":"254","name":"French Guiana"},{"id":"258","name":"French Polynesia"},{"id":"260","name":"French Southern Territories"},{"id":"262","name":"Djibouti"},{"id":"266","name":"Gabon"},{"id":"268","name":"Georgia"},{"id":"270","name":"Gambia"},{"id":"275","name":"Palestinian Territory, Occupied"},{"id":"276","name":"Germany"},{"id":"288","name":"Ghana"},{"id":"292","name":"Gibraltar"},{"id":"296","name":"Kiribati"},{"id":"300","name":"Greece"},{"id":"304","name":"Greenland"},{"id":"308","name":"Grenada"},{"id":"312","name":"Guadeloupe"},{"id":"316","name":"Guam"},{"id":"320","name":"Guatemala"},{"id":"324","name":"Guinea"},{"id":"328","name":"Guyana"},{"id":"332","name":"Haiti"},{"id":"334","name":"Heard Island and McDonald Islands"},{"id":"336","name":"Holy See (Vatican City State)"},{"id":"340","name":"Honduras"},{"id":"344","name":"Hong Kong"},{"id":"348","name":"Hungary"},{"id":"352","name":"Iceland"},{"id":"356","name":"India"},{"id":"360","name":"Indonesia"},{"id":"364","name":"Iran, Islamic Republic of"},{"id":"368","name":"Iraq"},{"id":"372","name":"Ireland"},{"id":"376","name":"Israel"},{"id":"380","name":"Italy"},{"id":"384","name":"Côte d'Ivoire"},{"id":"388","name":"Jamaica"},{"id":"392","name":"Japan"},{"id":"398","name":"Kazakhstan"},{"id":"400","name":"Jordan"},{"id":"404","name":"Kenya"},{"id":"408","name":"Korea, Democratic People's Republic of"},{"id":"410","name":"Korea, Republic of"},{"id":"414","name":"Kuwait"},{"id":"417","name":"Kyrgyzstan"},{"id":"418","name":"Lao People's Democratic Republic"},{"id":"422","name":"Lebanon"},{"id":"426","name":"Lesotho"},{"id":"428","name":"Latvia"},{"id":"430","name":"Liberia"},{"id":"434","name":"Libya"},{"id":"438","name":"Liechtenstein"},{"id":"440","name":"Lithuania"},{"id":"442","name":"Luxembourg"},{"id":"446","name":"Macao"},{"id":"450","name":"Madagascar"},{"id":"454","name":"Malawi"},{"id":"458","name":"Malaysia"},{"id":"462","name":"Maldives"},{"id":"466","name":"Mali"},{"id":"470","name":"Malta"},{"id":"474","name":"Martinique"},{"id":"478","name":"Mauritania"},{"id":"480","name":"Mauritius"},{"id":"484","name":"Mexico"},{"id":"492","name":"Monaco"},{"id":"496","name":"Mongolia"},{"id":"498","name":"Moldova, Republic of"},{"id":"499","name":"Montenegro"},{"id":"500","name":"Montserrat"},{"id":"504","name":"Morocco"},{"id":"508","name":"Mozambique"},{"id":"512","name":"Oman"},{"id":"516","name":"Namibia"},{"id":"520","name":"Nauru"},{"id":"524","name":"Nepal"},{"id":"528","name":"Netherlands"},{"id":"531","name":"Curaçao"},{"id":"533","name":"Aruba"},{"id":"534","name":"Sint Maarten (Dutch part)"},{"id":"535","name":"Bonaire, Sint Eustatius and Saba"},{"id":"540","name":"New Caledonia"},{"id":"548","name":"Vanuatu"},{"id":"554","name":"New Zealand"},{"id":"558","name":"Nicaragua"},{"id":"562","name":"Niger"},{"id":"566","name":"Nigeria"},{"id":"570","name":"Niue"},{"id":"574","name":"Norfolk Island"},{"id":"578","name":"Norway"},{"id":"580","name":"Northern Mariana Islands"},{"id":"581","name":"United States Minor Outlying Islands"},{"id":"583","name":"Micronesia, Federated States of"},{"id":"584","name":"Marshall Islands"},{"id":"585","name":"Palau"},{"id":"586","name":"Pakistan"},{"id":"591","name":"Panama"},{"id":"598","name":"Papua New Guinea"},{"id":"600","name":"Paraguay"},{"id":"604","name":"Peru"},{"id":"608","name":"Philippines"},{"id":"612","name":"Pitcairn"},{"id":"616","name":"Poland"},{"id":"620","name":"Portugal"},{"id":"624","name":"Guinea-Bissau"},{"id":"626","name":"Timor-Leste"},{"id":"630","name":"Puerto Rico"},{"id":"634","name":"Qatar"},{"id":"638","name":"Réunion"},{"id":"642","name":"Romania"},{"id":"643","name":"Russian Federation"},{"id":"646","name":"Rwanda"},{"id":"652","name":"Saint Barthélemy"},{"id":"654","name":"Saint Helena, Ascension and Tristan da Cunha"},{"id":"659","name":"Saint Kitts and Nevis"},{"id":"660","name":"Anguilla"},{"id":"662","name":"Saint Lucia"},{"id":"663","name":"Saint Martin (French part)"},{"id":"666","name":"Saint Pierre and Miquelon"},{"id":"670","name":"Saint Vincent and the Grenadines"},{"id":"674","name":"San Marino"},{"id":"678","name":"Sao Tome and Principe"},{"id":"682","name":"Saudi Arabia"},{"id":"686","name":"Senegal"},{"id":"688","name":"Serbia"},{"id":"690","name":"Seychelles"},{"id":"694","name":"Sierra Leone"},{"id":"702","name":"Singapore"},{"id":"703","name":"Slovakia"},{"id":"704","name":"Viet Nam"},{"id":"705","name":"Slovenia"},{"id":"706","name":"Somalia"},{"id":"710","name":"South Africa"},{"id":"716","name":"Zimbabwe"},{"id":"724","name":"Spain"},{"id":"728","name":"South Sudan"},{"id":"729","name":"Sudan"},{"id":"732","name":"Western Sahara"},{"id":"740","name":"Suriname"},{"id":"744","name":"Svalbard and Jan Mayen"},{"id":"748","name":"Swaziland"},{"id":"752","name":"Sweden"},{"id":"756","name":"Switzerland"},{"id":"760","name":"Syrian Arab Republic"},{"id":"762","name":"Tajikistan"},{"id":"764","name":"Thailand"},{"id":"768","name":"Togo"},{"id":"772","name":"Tokelau"},{"id":"776","name":"Tonga"},{"id":"780","name":"Trinidad and Tobago"},{"id":"784","name":"United Arab Emirates"},{"id":"788","name":"Tunisia"},{"id":"792","name":"Turkey"},{"id":"795","name":"Turkmenistan"},{"id":"796","name":"Turks and Caicos Islands"},{"id":"798","name":"Tuvalu"},{"id":"800","name":"Uganda"},{"id":"804","name":"Ukraine"},{"id":"807","name":"Macedonia, the former Yugoslav Republic of"},{"id":"818","name":"Egypt"},{"id":"826","name":"United Kingdom"},{"id":"831","name":"Guernsey"},{"id":"832","name":"Jersey"},{"id":"833","name":"Isle of Man"},{"id":"834","name":"Tanzania, United Republic of"},{"id":"840","name":"United States"},{"id":"850","name":"Virgin Islands, U.S."},{"id":"854","name":"Burkina Faso"},{"id":"858","name":"Uruguay"},{"id":"860","name":"Uzbekistan"},{"id":"862","name":"Venezuela, Bolivarian Republic of"},{"id":"876","name":"Wallis and Futuna"},{"id":"882","name":"Samoa"},{"id":"887","name":"Yemen"},{"id":"894","name":"Zambia"},{"id":""}]

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__startApp__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layout__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_world_110m_json__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_world_110m_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__content_world_110m_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_world_country_names_json__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__content_world_country_names_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__content_world_country_names_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_mapTopo_json__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_mapTopo_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__content_mapTopo_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_mapGeo_json__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__content_mapGeo_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__content_mapGeo_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__d3_globe__ = __webpack_require__(87);
// import Config from './config.json'
// import Styles from './app.sass'
// import Content from './content/index'










// Start and Render app
var APP = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__startApp__["a" /* default */])({ inner: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__layout__["a" /* default */])() });
APP.render();

setTimeout(function () {
	__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__d3_globe__["a" /* default */])({ world: __WEBPACK_IMPORTED_MODULE_2__content_world_110m_json___default.a, names: __WEBPACK_IMPORTED_MODULE_3__content_world_country_names_json___default.a, mapTopo: __WEBPACK_IMPORTED_MODULE_4__content_mapTopo_json___default.a, mapGeo: __WEBPACK_IMPORTED_MODULE_5__content_mapGeo_json___default.a });
}, 1000);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// All content is stored and used from this file
// Recomend multiple parts are created as separate files
// and imported to keep this file streamlined

var Content = {
	header: {
		title: '3d globe Tech test',
		intro: 'Experimental recreation of abc\'s animated globe'
	},

	parts: [{
		title: 'First section title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
		map: {
			// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		}
	}, {
		title: 'Second section title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
		map: {
			// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		}
	}, {
		title: 'Third section title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
		map: {
			// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		}
	}, {
		title: 'Fourth section title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
		map: {
			// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		}
	}, {
		title: 'Fifth section title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
		map: {
			// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		}
	}, {
		title: 'Sixth section title',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum explicabo quidem eius commodi in assumenda reprehenderit, dolor saepe corrupti exercitationem doloremque, ullam dolorum magnam harum vel molestiae est! Aut, at?',
		map: {
			// country: countries.filter(country => country.name.toLowerCase().includes('australia'))[0],
			scale: 0.9,
			circle: 2.5,
			origin: [100, 100]
		}
	}]
};

/* harmony default export */ __webpack_exports__["a"] = (Content);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function isMobileDevice() {
	var isMobile = /iPad|Android|webOS|iPhone|iPod|Blackberry/.test(navigator.userAgent) && !window.MSStream;
	// console.info({ isMobile })
	return isMobile;
}

/* harmony default export */ __webpack_exports__["a"] = (isMobileDevice);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var STATE = {};

/* harmony default export */ __webpack_exports__["a"] = (STATE);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(47);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["a" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(49);









/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ticks__["a" /* tickStep */])(x0, x1, tz);
      tz = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__bisect__["a" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(11);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(22);




/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(9);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(22);





/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(44);


/* unused harmony default export */ var _unused_webpack_default_export = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(51);


/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(53);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["e" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["a"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(53);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */])) o = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["a" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_drag__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "drag", function() { return __WEBPACK_IMPORTED_MODULE_0__src_drag__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_nodrag__ = __webpack_require__(55);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dragDisable", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dragEnable", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["b"]; });




/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodrag__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noevent__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(120);







// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].x, y: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].y} : d;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["a" /* dispatch */])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), __WEBPACK_IMPORTED_MODULE_1_d3_selection__["mouse"], this, arguments);
    if (!gesture) return;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nodrag__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
    mousemoving = false;
    mousedownx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientX;
    mousedowny = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientY;
    gesture("start");
  }

  function mousemoved() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
    if (!mousemoving) {
      var dx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientX - mousedownx, dy = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view).on("mousemove.drag mouseup.drag", null);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__nodrag__["b" /* yesdrag */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view, mousemoving);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, __WEBPACK_IMPORTED_MODULE_1_d3_selection__["touch"], this, arguments)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* default */](drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* default */](drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DragEvent;
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(128);
/* unused harmony reexport easeLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(130);
/* unused harmony reexport easeQuad */
/* unused harmony reexport easeQuadIn */
/* unused harmony reexport easeQuadOut */
/* unused harmony reexport easeQuadInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(125);
/* unused harmony reexport easeCubic */
/* unused harmony reexport easeCubicIn */
/* unused harmony reexport easeCubicOut */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(129);
/* unused harmony reexport easePoly */
/* unused harmony reexport easePolyIn */
/* unused harmony reexport easePolyOut */
/* unused harmony reexport easePolyInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(131);
/* unused harmony reexport easeSin */
/* unused harmony reexport easeSinIn */
/* unused harmony reexport easeSinOut */
/* unused harmony reexport easeSinInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(127);
/* unused harmony reexport easeExp */
/* unused harmony reexport easeExpIn */
/* unused harmony reexport easeExpOut */
/* unused harmony reexport easeExpInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(124);
/* unused harmony reexport easeCircle */
/* unused harmony reexport easeCircleIn */
/* unused harmony reexport easeCircleOut */
/* unused harmony reexport easeCircleInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(123);
/* unused harmony reexport easeBounce */
/* unused harmony reexport easeBounceIn */
/* unused harmony reexport easeBounceOut */
/* unused harmony reexport easeBounceInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(122);
/* unused harmony reexport easeBack */
/* unused harmony reexport easeBackIn */
/* unused harmony reexport easeBackOut */
/* unused harmony reexport easeBackInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(126);
/* unused harmony reexport easeElastic */
/* unused harmony reexport easeElasticIn */
/* unused harmony reexport easeElasticOut */
/* unused harmony reexport easeElasticInOut */





















/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export backIn */
/* unused harmony export backOut */
/* unused harmony export backInOut */
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bounceIn */
/* unused harmony export bounceOut */
/* unused harmony export bounceInOut */
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export circleIn */
/* unused harmony export circleOut */
/* unused harmony export circleInOut */
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubicIn */
/* unused harmony export cubicOut */
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elasticIn */
/* unused harmony export elasticOut */
/* unused harmony export elasticInOut */
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expIn */
/* unused harmony export expOut */
/* unused harmony export expInOut */
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linear */
function linear(t) {
  return +t;
}


/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export polyIn */
/* unused harmony export polyOut */
/* unused harmony export polyInOut */
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export quadIn */
/* unused harmony export quadOut */
/* unused harmony export quadInOut */
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sinIn */
/* unused harmony export sinOut */
/* unused harmony export sinInOut */
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_area__ = __webpack_require__(57);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoArea", function() { return __WEBPACK_IMPORTED_MODULE_0__src_area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bounds__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoBounds", function() { return __WEBPACK_IMPORTED_MODULE_1__src_bounds__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_centroid__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCentroid", function() { return __WEBPACK_IMPORTED_MODULE_2__src_centroid__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_circle__ = __webpack_require__(58);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoCircle", function() { return __WEBPACK_IMPORTED_MODULE_3__src_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_clip_antimeridian__ = __webpack_require__(59);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipAntimeridian", function() { return __WEBPACK_IMPORTED_MODULE_4__src_clip_antimeridian__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_clip_circle__ = __webpack_require__(61);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipCircle", function() { return __WEBPACK_IMPORTED_MODULE_5__src_clip_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_clip_extent__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipExtent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_clip_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_clip_rectangle__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoClipRectangle", function() { return __WEBPACK_IMPORTED_MODULE_7__src_clip_rectangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_contains__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoContains", function() { return __WEBPACK_IMPORTED_MODULE_8__src_contains__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_distance__ = __webpack_require__(65);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoDistance", function() { return __WEBPACK_IMPORTED_MODULE_9__src_distance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_graticule__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule", function() { return __WEBPACK_IMPORTED_MODULE_10__src_graticule__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGraticule10", function() { return __WEBPACK_IMPORTED_MODULE_10__src_graticule__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_interpolate__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoInterpolate", function() { return __WEBPACK_IMPORTED_MODULE_11__src_interpolate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_length__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoLength", function() { return __WEBPACK_IMPORTED_MODULE_12__src_length__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_path_index__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoPath", function() { return __WEBPACK_IMPORTED_MODULE_13__src_path_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_projection_albers__ = __webpack_require__(70);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbers", function() { return __WEBPACK_IMPORTED_MODULE_14__src_projection_albers__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_projection_albersUsa__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAlbersUsa", function() { return __WEBPACK_IMPORTED_MODULE_15__src_projection_albersUsa__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_16__src_projection_azimuthalEqualArea__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoAzimuthalEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_17__src_projection_azimuthalEquidistant__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformal", function() { return __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicConformalRaw", function() { return __WEBPACK_IMPORTED_MODULE_18__src_projection_conicConformal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__ = __webpack_require__(27);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualArea", function() { return __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEqualAreaRaw", function() { return __WEBPACK_IMPORTED_MODULE_19__src_projection_conicEqualArea__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistant", function() { return __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoConicEquidistantRaw", function() { return __WEBPACK_IMPORTED_MODULE_20__src_projection_conicEquidistant__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangular", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoEquirectangularRaw", function() { return __WEBPACK_IMPORTED_MODULE_21__src_projection_equirectangular__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonic", function() { return __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoGnomonicRaw", function() { return __WEBPACK_IMPORTED_MODULE_22__src_projection_gnomonic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_projection_identity__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoIdentity", function() { return __WEBPACK_IMPORTED_MODULE_23__src_projection_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_projection_index__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjection", function() { return __WEBPACK_IMPORTED_MODULE_24__src_projection_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoProjectionMutator", function() { return __WEBPACK_IMPORTED_MODULE_24__src_projection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__ = __webpack_require__(29);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercator", function() { return __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_25__src_projection_mercator__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1", function() { return __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoNaturalEarth1Raw", function() { return __WEBPACK_IMPORTED_MODULE_26__src_projection_naturalEarth1__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__ = __webpack_require__(156);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographic", function() { return __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoOrthographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_27__src_projection_orthographic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographic", function() { return __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStereographicRaw", function() { return __WEBPACK_IMPORTED_MODULE_28__src_projection_stereographic__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercator", function() { return __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransverseMercatorRaw", function() { return __WEBPACK_IMPORTED_MODULE_29__src_projection_transverseMercator__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_rotation__ = __webpack_require__(16);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoRotation", function() { return __WEBPACK_IMPORTED_MODULE_30__src_rotation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stream__ = __webpack_require__(8);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoStream", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stream__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_transform__ = __webpack_require__(17);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "geoTransform", function() { return __WEBPACK_IMPORTED_MODULE_32__src_transform__["a"]; });






 // DEPRECATED! Use d3.geoIdentity().clipExtent(…).




























/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cartesian__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stream__ = __webpack_require__(8);






var lambda0, phi0, lambda1, phi1, // bounds
    lambda2, // previous lambda-coordinate
    lambda00, phi00, // first point
    p0, // previous 3D point
    deltaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    ranges,
    range;

var boundsStream = {
  point: boundsPoint,
  lineStart: boundsLineStart,
  lineEnd: boundsLineEnd,
  polygonStart: function() {
    boundsStream.point = boundsRingPoint;
    boundsStream.lineStart = boundsRingStart;
    boundsStream.lineEnd = boundsRingEnd;
    deltaSum.reset();
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonStart();
  },
  polygonEnd: function() {
    __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].polygonEnd();
    boundsStream.point = boundsPoint;
    boundsStream.lineStart = boundsLineStart;
    boundsStream.lineEnd = boundsLineEnd;
    if (__WEBPACK_IMPORTED_MODULE_1__area__["c" /* areaRingSum */] < 0) lambda0 = -(lambda1 = 180), phi0 = -(phi1 = 90);
    else if (deltaSum > __WEBPACK_IMPORTED_MODULE_3__math__["o" /* epsilon */]) phi1 = 90;
    else if (deltaSum < -__WEBPACK_IMPORTED_MODULE_3__math__["o" /* epsilon */]) phi0 = -90;
    range[0] = lambda0, range[1] = lambda1;
  }
};

function boundsPoint(lambda, phi) {
  ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
}

function linePoint(lambda, phi) {
  var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["a" /* cartesian */])([lambda * __WEBPACK_IMPORTED_MODULE_3__math__["g" /* radians */], phi * __WEBPACK_IMPORTED_MODULE_3__math__["g" /* radians */]]);
  if (p0) {
    var normal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["b" /* cartesianCross */])(p0, p),
        equatorial = [normal[1], -normal[0], 0],
        inflection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["b" /* cartesianCross */])(equatorial, normal);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["c" /* cartesianNormalizeInPlace */])(inflection);
    inflection = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__cartesian__["g" /* spherical */])(inflection);
    var delta = lambda - lambda2,
        sign = delta > 0 ? 1 : -1,
        lambdai = inflection[0] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */] * sign,
        phii,
        antimeridian = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["p" /* abs */])(delta) > 180;
    if (antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii > phi1) phi1 = phii;
    } else if (lambdai = (lambdai + 360) % 360 - 180, antimeridian ^ (sign * lambda2 < lambdai && lambdai < sign * lambda)) {
      phii = -inflection[1] * __WEBPACK_IMPORTED_MODULE_3__math__["h" /* degrees */];
      if (phii < phi0) phi0 = phii;
    } else {
      if (phi < phi0) phi0 = phi;
      if (phi > phi1) phi1 = phi;
    }
    if (antimeridian) {
      if (lambda < lambda2) {
        if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
      } else {
        if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
      }
    } else {
      if (lambda1 >= lambda0) {
        if (lambda < lambda0) lambda0 = lambda;
        if (lambda > lambda1) lambda1 = lambda;
      } else {
        if (lambda > lambda2) {
          if (angle(lambda0, lambda) > angle(lambda0, lambda1)) lambda1 = lambda;
        } else {
          if (angle(lambda, lambda1) > angle(lambda0, lambda1)) lambda0 = lambda;
        }
      }
    }
  } else {
    ranges.push(range = [lambda0 = lambda, lambda1 = lambda]);
  }
  if (phi < phi0) phi0 = phi;
  if (phi > phi1) phi1 = phi;
  p0 = p, lambda2 = lambda;
}

function boundsLineStart() {
  boundsStream.point = linePoint;
}

function boundsLineEnd() {
  range[0] = lambda0, range[1] = lambda1;
  boundsStream.point = boundsPoint;
  p0 = null;
}

function boundsRingPoint(lambda, phi) {
  if (p0) {
    var delta = lambda - lambda2;
    deltaSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["p" /* abs */])(delta) > 180 ? delta + (delta > 0 ? 360 : -360) : delta);
  } else {
    lambda00 = lambda, phi00 = phi;
  }
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].point(lambda, phi);
  linePoint(lambda, phi);
}

function boundsRingStart() {
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineStart();
}

function boundsRingEnd() {
  boundsRingPoint(lambda00, phi00);
  __WEBPACK_IMPORTED_MODULE_1__area__["b" /* areaStream */].lineEnd();
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__math__["p" /* abs */])(deltaSum) > __WEBPACK_IMPORTED_MODULE_3__math__["o" /* epsilon */]) lambda0 = -(lambda1 = 180);
  range[0] = lambda0, range[1] = lambda1;
  p0 = null;
}

// Finds the left-right distance between two longitudes.
// This is almost the same as (lambda1 - lambda0 + 360°) % 360°, except that we want
// the distance between ±180° to be 360°.
function angle(lambda0, lambda1) {
  return (lambda1 -= lambda0) < 0 ? lambda1 + 360 : lambda1;
}

function rangeCompare(a, b) {
  return a[0] - b[0];
}

function rangeContains(range, x) {
  return range[0] <= range[1] ? range[0] <= x && x <= range[1] : x < range[0] || range[1] < x;
}

/* harmony default export */ __webpack_exports__["a"] = (function(feature) {
  var i, n, a, b, merged, deltaMax, delta;

  phi1 = lambda1 = -(lambda0 = phi0 = Infinity);
  ranges = [];
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__stream__["a" /* default */])(feature, boundsStream);

  // First, sort ranges by their minimum longitudes.
  if (n = ranges.length) {
    ranges.sort(rangeCompare);

    // Then, merge any ranges that overlap.
    for (i = 1, a = ranges[0], merged = [a]; i < n; ++i) {
      b = ranges[i];
      if (rangeContains(a, b[0]) || rangeContains(a, b[1])) {
        if (angle(a[0], b[1]) > angle(a[0], a[1])) a[1] = b[1];
        if (angle(b[0], a[1]) > angle(a[0], a[1])) a[0] = b[0];
      } else {
        merged.push(a = b);
      }
    }

    // Finally, find the largest gap between the merged ranges.
    // The final bounding box will be the inverse of this gap.
    for (deltaMax = -Infinity, n = merged.length - 1, i = 0, a = merged[n]; i <= n; a = b, ++i) {
      b = merged[i];
      if ((delta = angle(a[1], b[0])) > deltaMax) deltaMax = delta, lambda0 = b[0], lambda1 = a[1];
    }
  }

  ranges = range = null;

  return lambda0 === Infinity || phi0 === Infinity
      ? [[NaN, NaN], [NaN, NaN]]
      : [[lambda0, phi0], [lambda1, phi1]];
});


/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stream__ = __webpack_require__(8);




var W0, W1,
    X0, Y0, Z0,
    X1, Y1, Z1,
    X2, Y2, Z2,
    lambda00, phi00, // first point
    x0, y0, z0; // previous point

var centroidStream = {
  sphere: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  }
};

// Arithmetic mean of Cartesian vectors.
function centroidPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  centroidPointCartesian(cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda), cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi));
}

function centroidPointCartesian(x, y, z) {
  ++W0;
  X0 += (x - X0) / W0;
  Y0 += (y - Y0) / W0;
  Z0 += (z - Z0) / W0;
}

function centroidLineStart() {
  centroidStream.point = centroidLinePointFirst;
}

function centroidLinePointFirst(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  x0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda);
  y0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda);
  z0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi);
  centroidStream.point = centroidLinePoint;
  centroidPointCartesian(x0, y0, z0);
}

function centroidLinePoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi),
      x = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda),
      y = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda),
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi),
      w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])((w = y0 * z - z0 * y) * w + (w = z0 * x - x0 * z) * w + (w = x0 * y - y0 * x) * w), x0 * x + y0 * y + z0 * z);
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

// See J. E. Brock, The Inertia Tensor for a Spherical Triangle,
// J. Applied Mechanics 42, 239 (1975).
function centroidRingStart() {
  centroidStream.point = centroidRingPointFirst;
}

function centroidRingEnd() {
  centroidRingPoint(lambda00, phi00);
  centroidStream.point = centroidPoint;
}

function centroidRingPointFirst(lambda, phi) {
  lambda00 = lambda, phi00 = phi;
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  centroidStream.point = centroidRingPoint;
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi);
  x0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda);
  y0 = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda);
  z0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi);
  centroidPointCartesian(x0, y0, z0);
}

function centroidRingPoint(lambda, phi) {
  lambda *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */], phi *= __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */];
  var cosPhi = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi),
      x = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(lambda),
      y = cosPhi * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(lambda),
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi),
      cx = y0 * z - z0 * y,
      cy = z0 * x - x0 * z,
      cz = x0 * y - y0 * x,
      m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(cx * cx + cy * cy + cz * cz),
      w = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(m), // line weight = angle
      v = m && -w / m; // area weight multiplier
  X2 += v * cx;
  Y2 += v * cy;
  Z2 += v * cz;
  W1 += w;
  X1 += w * (x0 + (x0 = x));
  Y1 += w * (y0 + (y0 = y));
  Z1 += w * (z0 + (z0 = z));
  centroidPointCartesian(x0, y0, z0);
}

/* harmony default export */ __webpack_exports__["a"] = (function(object) {
  W0 = W1 =
  X0 = Y0 = Z0 =
  X1 = Y1 = Z1 =
  X2 = Y2 = Z2 = 0;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__stream__["a" /* default */])(object, centroidStream);

  var x = X2,
      y = Y2,
      z = Z2,
      m = x * x + y * y + z * z;

  // If the area-weighted ccentroid is undefined, fall back to length-weighted ccentroid.
  if (m < __WEBPACK_IMPORTED_MODULE_0__math__["w" /* epsilon2 */]) {
    x = X1, y = Y1, z = Z1;
    // If the feature has zero length, fall back to arithmetic mean of point vectors.
    if (W1 < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) x = X0, y = Y0, z = Z0;
    m = x * x + y * y + z * z;
    // If the feature still has an undefined ccentroid, then return.
    if (m < __WEBPACK_IMPORTED_MODULE_0__math__["w" /* epsilon2 */]) return [NaN, NaN];
  }

  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(z / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(m)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
});


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__rectangle__ = __webpack_require__(15);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = 0,
      y0 = 0,
      x1 = 960,
      y1 = 500,
      cache,
      cacheStream,
      clip;

  return clip = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__rectangle__["a" /* default */])(x0, y0, x1, y1)(cacheStream = stream);
    },
    extent: function(_) {
      return arguments.length ? (x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1], cache = cacheStream = null, clip) : [[x0, y0], [x1, y1]];
    }
  };
});


/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b, x0, y0, x1, y1) {
  var ax = a[0],
      ay = a[1],
      bx = b[0],
      by = b[1],
      t0 = 0,
      t1 = 1,
      dx = bx - ax,
      dy = by - ay,
      r;

  r = x0 - ax;
  if (!dx && r > 0) return;
  r /= dx;
  if (dx < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dx > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = x1 - ax;
  if (!dx && r < 0) return;
  r /= dx;
  if (dx < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dx > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  r = y0 - ay;
  if (!dy && r > 0) return;
  r /= dy;
  if (dy < 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  } else if (dy > 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  }

  r = y1 - ay;
  if (!dy && r < 0) return;
  r /= dy;
  if (dy < 0) {
    if (r > t1) return;
    if (r > t0) t0 = r;
  } else if (dy > 0) {
    if (r < t0) return;
    if (r < t1) t1 = r;
  }

  if (t0 > 0) a[0] = ax + t0 * dx, a[1] = ay + t0 * dy;
  if (t1 < 1) b[0] = ax + t1 * dx, b[1] = ay + t1 * dy;
  return true;
});


/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polygonContains__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__distance__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(0);




var containsObjectType = {
  Feature: function(object, point) {
    return containsGeometry(object.geometry, point);
  },
  FeatureCollection: function(object, point) {
    var features = object.features, i = -1, n = features.length;
    while (++i < n) if (containsGeometry(features[i].geometry, point)) return true;
    return false;
  }
};

var containsGeometryType = {
  Sphere: function() {
    return true;
  },
  Point: function(object, point) {
    return containsPoint(object.coordinates, point);
  },
  MultiPoint: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPoint(coordinates[i], point)) return true;
    return false;
  },
  LineString: function(object, point) {
    return containsLine(object.coordinates, point);
  },
  MultiLineString: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsLine(coordinates[i], point)) return true;
    return false;
  },
  Polygon: function(object, point) {
    return containsPolygon(object.coordinates, point);
  },
  MultiPolygon: function(object, point) {
    var coordinates = object.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if (containsPolygon(coordinates[i], point)) return true;
    return false;
  },
  GeometryCollection: function(object, point) {
    var geometries = object.geometries, i = -1, n = geometries.length;
    while (++i < n) if (containsGeometry(geometries[i], point)) return true;
    return false;
  }
};

function containsGeometry(geometry, point) {
  return geometry && containsGeometryType.hasOwnProperty(geometry.type)
      ? containsGeometryType[geometry.type](geometry, point)
      : false;
}

function containsPoint(coordinates, point) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates, point) === 0;
}

function containsLine(coordinates, point) {
  var ab = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], coordinates[1]),
      ao = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(coordinates[0], point),
      ob = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__distance__["a" /* default */])(point, coordinates[1]);
  return ao + ob <= ab + __WEBPACK_IMPORTED_MODULE_2__math__["o" /* epsilon */];
}

function containsPolygon(coordinates, point) {
  return !!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__polygonContains__["a" /* default */])(coordinates.map(ringRadians), pointRadians(point));
}

function ringRadians(ring) {
  return ring = ring.map(pointRadians), ring.pop(), ring;
}

function pointRadians(point) {
  return [point[0] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */], point[1] * __WEBPACK_IMPORTED_MODULE_2__math__["g" /* radians */]];
}

/* harmony default export */ __webpack_exports__["a"] = (function(object, point) {
  return (object && containsObjectType.hasOwnProperty(object.type)
      ? containsObjectType[object.type]
      : containsGeometry)(object, point);
});


/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = graticule;
/* harmony export (immutable) */ __webpack_exports__["b"] = graticule10;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function graticuleX(y0, y1, dy) {
  var y = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(y0, y1 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */], dy).concat(y1);
  return function(x) { return y.map(function(y) { return [x, y]; }); };
}

function graticuleY(x0, x1, dx) {
  var x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(x0, x1 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */], dx).concat(x1);
  return function(y) { return x.map(function(x) { return [x, y]; }); };
}

function graticule() {
  var x1, x0, X1, X0,
      y1, y0, Y1, Y0,
      dx = 10, dy = dx, DX = 90, DY = 360,
      x, y, X, Y,
      precision = 2.5;

  function graticule() {
    return {type: "MultiLineString", coordinates: lines()};
  }

  function lines() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* ceil */])(X0 / DX) * DX, X1, DX).map(X)
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* ceil */])(Y0 / DY) * DY, Y1, DY).map(Y))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* ceil */])(x0 / dx) * dx, x1, dx).filter(function(x) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(x % DX) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]; }).map(x))
        .concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_array__["a" /* range */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["u" /* ceil */])(y0 / dy) * dy, y1, dy).filter(function(y) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(y % DY) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]; }).map(y));
  }

  graticule.lines = function() {
    return lines().map(function(coordinates) { return {type: "LineString", coordinates: coordinates}; });
  };

  graticule.outline = function() {
    return {
      type: "Polygon",
      coordinates: [
        X(X0).concat(
        Y(Y1).slice(1),
        X(X1).reverse().slice(1),
        Y(Y0).reverse().slice(1))
      ]
    };
  };

  graticule.extent = function(_) {
    if (!arguments.length) return graticule.extentMinor();
    return graticule.extentMajor(_).extentMinor(_);
  };

  graticule.extentMajor = function(_) {
    if (!arguments.length) return [[X0, Y0], [X1, Y1]];
    X0 = +_[0][0], X1 = +_[1][0];
    Y0 = +_[0][1], Y1 = +_[1][1];
    if (X0 > X1) _ = X0, X0 = X1, X1 = _;
    if (Y0 > Y1) _ = Y0, Y0 = Y1, Y1 = _;
    return graticule.precision(precision);
  };

  graticule.extentMinor = function(_) {
    if (!arguments.length) return [[x0, y0], [x1, y1]];
    x0 = +_[0][0], x1 = +_[1][0];
    y0 = +_[0][1], y1 = +_[1][1];
    if (x0 > x1) _ = x0, x0 = x1, x1 = _;
    if (y0 > y1) _ = y0, y0 = y1, y1 = _;
    return graticule.precision(precision);
  };

  graticule.step = function(_) {
    if (!arguments.length) return graticule.stepMinor();
    return graticule.stepMajor(_).stepMinor(_);
  };

  graticule.stepMajor = function(_) {
    if (!arguments.length) return [DX, DY];
    DX = +_[0], DY = +_[1];
    return graticule;
  };

  graticule.stepMinor = function(_) {
    if (!arguments.length) return [dx, dy];
    dx = +_[0], dy = +_[1];
    return graticule;
  };

  graticule.precision = function(_) {
    if (!arguments.length) return precision;
    precision = +_;
    x = graticuleX(y0, y1, 90);
    y = graticuleY(x0, x1, precision);
    X = graticuleX(Y0, Y1, 90);
    Y = graticuleY(X0, X1, precision);
    return graticule;
  };

  return graticule
      .extentMajor([[-180, -90 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]], [180, 90 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]]])
      .extentMinor([[-180, -80 - __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]], [180, 80 + __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */]]]);
}

function graticule10() {
  return graticule()();
}


/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var x0 = a[0] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      y0 = a[1] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      x1 = b[0] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      y1 = b[1] * __WEBPACK_IMPORTED_MODULE_0__math__["g" /* radians */],
      cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y0),
      sy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0),
      cy1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y1),
      sy1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y1),
      kx0 = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x0),
      ky0 = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x0),
      kx1 = cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x1),
      ky1 = cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x1),
      d = 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* haversin */])(y1 - y0) + cy0 * cy1 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["t" /* haversin */])(x1 - x0))),
      k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(d);

  var interpolate = d ? function(t) {
    var B = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(t *= d) / k,
        A = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(d - t) / k,
        x = A * kx0 + B * kx1,
        y = A * ky0 + B * ky1,
        z = A * sy0 + B * sy1;
    return [
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(y, x) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */],
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(z, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + y * y)) * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]
    ];
  } : function() {
    return [x0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */], y0 * __WEBPACK_IMPORTED_MODULE_0__math__["h" /* degrees */]];
  };

  interpolate.distance = d;

  return interpolate;
});


/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);




var areaSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    areaRingSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    x00,
    y00,
    x0,
    y0;

var areaStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineEnd: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  polygonStart: function() {
    areaStream.lineStart = areaRingStart;
    areaStream.lineEnd = areaRingEnd;
  },
  polygonEnd: function() {
    areaStream.lineStart = areaStream.lineEnd = areaStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
    areaSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(areaRingSum));
    areaRingSum.reset();
  },
  result: function() {
    var area = areaSum / 2;
    areaSum.reset();
    return area;
  }
};

function areaRingStart() {
  areaStream.point = areaPointFirst;
}

function areaPointFirst(x, y) {
  areaStream.point = areaPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function areaPoint(x, y) {
  areaRingSum.add(y0 * x - x0 * y);
  x0 = x, y0 = y;
}

function areaRingEnd() {
  areaPoint(x00, y00);
}

/* harmony default export */ __webpack_exports__["a"] = (areaStream);


/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


// TODO Enforce positive area for exterior, negative area for interior?

var X0 = 0,
    Y0 = 0,
    Z0 = 0,
    X1 = 0,
    Y1 = 0,
    Z1 = 0,
    X2 = 0,
    Y2 = 0,
    Z2 = 0,
    x00,
    y00,
    x0,
    y0;

var centroidStream = {
  point: centroidPoint,
  lineStart: centroidLineStart,
  lineEnd: centroidLineEnd,
  polygonStart: function() {
    centroidStream.lineStart = centroidRingStart;
    centroidStream.lineEnd = centroidRingEnd;
  },
  polygonEnd: function() {
    centroidStream.point = centroidPoint;
    centroidStream.lineStart = centroidLineStart;
    centroidStream.lineEnd = centroidLineEnd;
  },
  result: function() {
    var centroid = Z2 ? [X2 / Z2, Y2 / Z2]
        : Z1 ? [X1 / Z1, Y1 / Z1]
        : Z0 ? [X0 / Z0, Y0 / Z0]
        : [NaN, NaN];
    X0 = Y0 = Z0 =
    X1 = Y1 = Z1 =
    X2 = Y2 = Z2 = 0;
    return centroid;
  }
};

function centroidPoint(x, y) {
  X0 += x;
  Y0 += y;
  ++Z0;
}

function centroidLineStart() {
  centroidStream.point = centroidPointFirstLine;
}

function centroidPointFirstLine(x, y) {
  centroidStream.point = centroidPointLine;
  centroidPoint(x0 = x, y0 = y);
}

function centroidPointLine(x, y) {
  var dx = x - x0, dy = y - y0, z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(dx * dx + dy * dy);
  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;
  centroidPoint(x0 = x, y0 = y);
}

function centroidLineEnd() {
  centroidStream.point = centroidPoint;
}

function centroidRingStart() {
  centroidStream.point = centroidPointFirstRing;
}

function centroidRingEnd() {
  centroidPointRing(x00, y00);
}

function centroidPointFirstRing(x, y) {
  centroidStream.point = centroidPointRing;
  centroidPoint(x00 = x0 = x, y00 = y0 = y);
}

function centroidPointRing(x, y) {
  var dx = x - x0,
      dy = y - y0,
      z = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(dx * dx + dy * dy);

  X1 += z * (x0 + x) / 2;
  Y1 += z * (y0 + y) / 2;
  Z1 += z;

  z = y0 * x - x0 * y;
  X2 += z * (x0 + x);
  Y2 += z * (y0 + y);
  Z2 += z * 3;
  centroidPoint(x0 = x, y0 = y);
}

/* harmony default export */ __webpack_exports__["a"] = (centroidStream);


/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(5);



function PathContext(context) {
  this._context = context;
}

PathContext.prototype = {
  _radius: 4.5,
  pointRadius: function(_) {
    return this._radius = _, this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._context.closePath();
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._context.moveTo(x, y);
        this._point = 1;
        break;
      }
      case 1: {
        this._context.lineTo(x, y);
        break;
      }
      default: {
        this._context.moveTo(x + this._radius, y);
        this._context.arc(x, y, this._radius, 0, __WEBPACK_IMPORTED_MODULE_0__math__["b" /* tau */]);
        break;
      }
    }
  },
  result: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */]
};


/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__identity__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stream__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__area__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bounds__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__centroid__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__context__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__measure__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__string__ = __webpack_require__(146);









/* harmony default export */ __webpack_exports__["a"] = (function(projection, context) {
  var pointRadius = 4.5,
      projectionStream,
      contextStream;

  function path(object) {
    if (object) {
      if (typeof pointRadius === "function") contextStream.pointRadius(+pointRadius.apply(this, arguments));
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(contextStream));
    }
    return contextStream.result();
  }

  path.area = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_2__area__["a" /* default */].result();
  };

  path.measure = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_6__measure__["a" /* default */].result();
  };

  path.bounds = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_3__bounds__["a" /* default */].result();
  };

  path.centroid = function(object) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__stream__["a" /* default */])(object, projectionStream(__WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */]));
    return __WEBPACK_IMPORTED_MODULE_4__centroid__["a" /* default */].result();
  };

  path.projection = function(_) {
    return arguments.length ? (projectionStream = _ == null ? (projection = null, __WEBPACK_IMPORTED_MODULE_0__identity__["a" /* default */]) : (projection = _).stream, path) : projection;
  };

  path.context = function(_) {
    if (!arguments.length) return context;
    contextStream = _ == null ? (context = null, new __WEBPACK_IMPORTED_MODULE_7__string__["a" /* default */]) : new __WEBPACK_IMPORTED_MODULE_5__context__["a" /* default */](context = _);
    if (typeof pointRadius !== "function") contextStream.pointRadius(pointRadius);
    return path;
  };

  path.pointRadius = function(_) {
    if (!arguments.length) return pointRadius;
    pointRadius = typeof _ === "function" ? _ : (contextStream.pointRadius(+_), +_);
    return path;
  };

  return path.projection(projection).context(context);
});


/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__adder__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noop__ = __webpack_require__(5);




var lengthSum = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__adder__["a" /* default */])(),
    lengthRing,
    x00,
    y00,
    x0,
    y0;

var lengthStream = {
  point: __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */],
  lineStart: function() {
    lengthStream.point = lengthPointFirst;
  },
  lineEnd: function() {
    if (lengthRing) lengthPoint(x00, y00);
    lengthStream.point = __WEBPACK_IMPORTED_MODULE_2__noop__["a" /* default */];
  },
  polygonStart: function() {
    lengthRing = true;
  },
  polygonEnd: function() {
    lengthRing = null;
  },
  result: function() {
    var length = +lengthSum;
    lengthSum.reset();
    return length;
  }
};

function lengthPointFirst(x, y) {
  lengthStream.point = lengthPoint;
  x00 = x0 = x, y00 = y0 = y;
}

function lengthPoint(x, y) {
  x0 -= x, y0 -= y;
  lengthSum.add(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* sqrt */])(x0 * x0 + y0 * y0));
  x0 = x, y0 = y;
}

/* harmony default export */ __webpack_exports__["a"] = (lengthStream);


/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = PathString;
function PathString() {
  this._string = [];
}

PathString.prototype = {
  _radius: 4.5,
  _circle: circle(4.5),
  pointRadius: function(_) {
    if ((_ = +_) !== this._radius) this._radius = _, this._circle = null;
    return this;
  },
  polygonStart: function() {
    this._line = 0;
  },
  polygonEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line === 0) this._string.push("Z");
    this._point = NaN;
  },
  point: function(x, y) {
    switch (this._point) {
      case 0: {
        this._string.push("M", x, ",", y);
        this._point = 1;
        break;
      }
      case 1: {
        this._string.push("L", x, ",", y);
        break;
      }
      default: {
        if (this._circle == null) this._circle = circle(this._radius);
        this._string.push("M", x, ",", y, this._circle);
        break;
      }
    }
  },
  result: function() {
    if (this._string.length) {
      var result = this._string.join("");
      this._string = [];
      return result;
    } else {
      return null;
    }
  }
};

function circle(radius) {
  return "m0," + radius
      + "a" + radius + "," + radius + " 0 1,1 0," + -2 * radius
      + "a" + radius + "," + radius + " 0 1,1 0," + 2 * radius
      + "z";
}


/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__albers__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conicEqualArea__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(28);





// The projections must have mutually exclusive clip regions on the sphere,
// as this will avoid emitting interleaving lines and polygons.
function multiplex(streams) {
  var n = streams.length;
  return {
    point: function(x, y) { var i = -1; while (++i < n) streams[i].point(x, y); },
    sphere: function() { var i = -1; while (++i < n) streams[i].sphere(); },
    lineStart: function() { var i = -1; while (++i < n) streams[i].lineStart(); },
    lineEnd: function() { var i = -1; while (++i < n) streams[i].lineEnd(); },
    polygonStart: function() { var i = -1; while (++i < n) streams[i].polygonStart(); },
    polygonEnd: function() { var i = -1; while (++i < n) streams[i].polygonEnd(); }
  };
}

// A composite projection for the United States, configured by default for
// 960×500. The projection also works quite well at 960×600 if you change the
// scale to 1285 and adjust the translate accordingly. The set of standard
// parallels for each region comes from USGS, which is published here:
// http://egsc.usgs.gov/isb/pubs/MapProjections/projections.html#albers
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var cache,
      cacheStream,
      lower48 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__albers__["a" /* default */])(), lower48Point,
      alaska = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]), alaskaPoint, // EPSG:3338
      hawaii = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__conicEqualArea__["a" /* default */])().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]), hawaiiPoint, // ESRI:102007
      point, pointStream = {point: function(x, y) { point = [x, y]; }};

  function albersUsa(coordinates) {
    var x = coordinates[0], y = coordinates[1];
    return point = null,
        (lower48Point.point(x, y), point)
        || (alaskaPoint.point(x, y), point)
        || (hawaiiPoint.point(x, y), point);
  }

  albersUsa.invert = function(coordinates) {
    var k = lower48.scale(),
        t = lower48.translate(),
        x = (coordinates[0] - t[0]) / k,
        y = (coordinates[1] - t[1]) / k;
    return (y >= 0.120 && y < 0.234 && x >= -0.425 && x < -0.214 ? alaska
        : y >= 0.166 && y < 0.234 && x >= -0.214 && x < -0.115 ? hawaii
        : lower48).invert(coordinates);
  };

  albersUsa.stream = function(stream) {
    return cache && cacheStream === stream ? cache : cache = multiplex([lower48.stream(cacheStream = stream), alaska.stream(stream), hawaii.stream(stream)]);
  };

  albersUsa.precision = function(_) {
    if (!arguments.length) return lower48.precision();
    lower48.precision(_), alaska.precision(_), hawaii.precision(_);
    return reset();
  };

  albersUsa.scale = function(_) {
    if (!arguments.length) return lower48.scale();
    lower48.scale(_), alaska.scale(_ * 0.35), hawaii.scale(_);
    return albersUsa.translate(lower48.translate());
  };

  albersUsa.translate = function(_) {
    if (!arguments.length) return lower48.translate();
    var k = lower48.scale(), x = +_[0], y = +_[1];

    lower48Point = lower48
        .translate(_)
        .clipExtent([[x - 0.455 * k, y - 0.238 * k], [x + 0.455 * k, y + 0.238 * k]])
        .stream(pointStream);

    alaskaPoint = alaska
        .translate([x - 0.307 * k, y + 0.201 * k])
        .clipExtent([[x - 0.425 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.120 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]], [x - 0.214 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]]])
        .stream(pointStream);

    hawaiiPoint = hawaii
        .translate([x - 0.205 * k, y + 0.212 * k])
        .clipExtent([[x - 0.214 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.166 * k + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]], [x - 0.115 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */], y + 0.234 * k - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]]])
        .stream(pointStream);

    return reset();
  };

  albersUsa.fitExtent = function(extent, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(albersUsa, extent, object);
  };

  albersUsa.fitSize = function(size, object) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitSize */])(albersUsa, size, object);
  };

  function reset() {
    cache = cacheStream = null;
    return albersUsa;
  }

  return albersUsa.scale(1070);
});


/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return azimuthalEqualAreaRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(4);




var azimuthalEqualAreaRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(cxcy) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(2 / (1 + cxcy));
});

azimuthalEqualAreaRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(z / 2);
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEqualAreaRaw)
      .scale(124.75)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return azimuthalEquidistantRaw; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(4);




var azimuthalEquidistantRaw = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["b" /* azimuthalRaw */])(function(c) {
  return (c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["s" /* acos */])(c)) && c / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(c);
});

azimuthalEquidistantRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return z;
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(azimuthalEquidistantRaw)
      .scale(79.4188)
      .clipAngle(180 - 1e-3);
});


/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicConformalRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mercator__ = __webpack_require__(29);




function tany(y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + y) / 2);
}

function conicConformalRaw(y0, y1) {
  var cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y0),
      n = y0 === y1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(cy0 / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y1)) / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(tany(y1) / tany(y0)),
      f = cy0 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["r" /* pow */])(tany(y0), n) / n;

  if (!n) return __WEBPACK_IMPORTED_MODULE_2__mercator__["b" /* mercatorRaw */];

  function project(x, y) {
    if (f > 0) { if (y < -__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) y = -__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]; }
    else { if (y > __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) y = __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] - __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]; }
    var r = f / __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["r" /* pow */])(tany(y), n);
    return [r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(n * x), f - r * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(n * x)];
  }

  project.invert = function(x, y) {
    var fy = f - y, r = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["q" /* sign */])(n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + fy * fy);
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(fy)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["q" /* sign */])(fy), 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["r" /* pow */])(f / r, 1 / n)) - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */]];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicConformalRaw)
      .scale(109.5)
      .parallels([30, 30]);
});


/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = conicEquidistantRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__conic__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__equirectangular__ = __webpack_require__(71);




function conicEquidistantRaw(y0, y1) {
  var cy0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y0),
      n = y0 === y1 ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y0) : (cy0 - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y1)) / (y1 - y0),
      g = cy0 / n + y0;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(n) < __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]) return __WEBPACK_IMPORTED_MODULE_2__equirectangular__["b" /* equirectangularRaw */];

  function project(x, y) {
    var gy = g - y, nx = n * x;
    return [gy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(nx), g - gy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(nx)];
  }

  project.invert = function(x, y) {
    var gy = g - y;
    return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["e" /* atan2 */])(x, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["p" /* abs */])(gy)) / n * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["q" /* sign */])(gy), g - __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["q" /* sign */])(n) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["n" /* sqrt */])(x * x + gy * gy)];
  };

  return project;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__conic__["a" /* conicProjection */])(conicEquidistantRaw)
      .scale(131.154)
      .center([0, 13.9389]);
});


/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cylindricalEqualAreaRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);


function cylindricalEqualAreaRaw(phi0) {
  var cosPhi0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(phi0);

  function forward(lambda, phi) {
    return [lambda * cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(phi) / cosPhi0];
  }

  forward.invert = function(x, y) {
    return [x / cosPhi0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */])(y * cosPhi0)];
  };

  return forward;
}


/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = gnomonicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(4);




function gnomonicRaw(x, y) {
  var cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y), k = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x) * cy;
  return [cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x) / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y) / k];
}

gnomonicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(gnomonicRaw)
      .scale(144.049)
      .clipAngle(60);
});


/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__clip_rectangle__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__identity__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fit__ = __webpack_require__(28);





function scaleTranslate(kx, ky, tx, ty) {
  return kx === 1 && ky === 1 && tx === 0 && ty === 0 ? __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform__["b" /* transformer */])({
    point: function(x, y) {
      this.stream.point(x * kx + tx, y * ky + ty);
    }
  });
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var k = 1, tx = 0, ty = 0, sx = 1, sy = 1, transform = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */], // scale, translate and reflect
      x0 = null, y0, x1, y1, // clip extent
      postclip = __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */],
      cache,
      cacheStream,
      projection;

  function reset() {
    cache = cacheStream = null;
    return projection;
  }

  return projection = {
    stream: function(stream) {
      return cache && cacheStream === stream ? cache : cache = transform(postclip(cacheStream = stream));
    },
    postclip: function(_) {
      return arguments.length ? (postclip = _, x0 = y0 = x1 = y1 = null, reset()) : postclip;
    },
    clipExtent: function(_) {
      return arguments.length ? (postclip = _ == null ? (x0 = y0 = x1 = y1 = null, __WEBPACK_IMPORTED_MODULE_1__identity__["a" /* default */]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__clip_rectangle__["a" /* default */])(x0 = +_[0][0], y0 = +_[0][1], x1 = +_[1][0], y1 = +_[1][1]), reset()) : x0 == null ? null : [[x0, y0], [x1, y1]];
    },
    scale: function(_) {
      return arguments.length ? (transform = scaleTranslate((k = +_) * sx, k * sy, tx, ty), reset()) : k;
    },
    translate: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * sy, tx = +_[0], ty = +_[1]), reset()) : [tx, ty];
    },
    reflectX: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * (sx = _ ? -1 : 1), k * sy, tx, ty), reset()) : sx < 0;
    },
    reflectY: function(_) {
      return arguments.length ? (transform = scaleTranslate(k * sx, k * (sy = _ ? -1 : 1), tx, ty), reset()) : sy < 0;
    },
    fitExtent: function(extent, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["a" /* fitExtent */])(projection, extent, object);
    },
    fitSize: function(size, object) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__fit__["b" /* fitSize */])(projection, size, object);
    }
  };
});


/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = naturalEarth1Raw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);



function naturalEarth1Raw(lambda, phi) {
  var phi2 = phi * phi, phi4 = phi2 * phi2;
  return [
    lambda * (0.8707 - 0.131979 * phi2 + phi4 * (-0.013791 + phi4 * (0.003971 * phi2 - 0.001529 * phi4))),
    phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4)))
  ];
}

naturalEarth1Raw.invert = function(x, y) {
  var phi = y, i = 25, delta;
  do {
    var phi2 = phi * phi, phi4 = phi2 * phi2;
    phi -= delta = (phi * (1.007226 + phi2 * (0.015085 + phi4 * (-0.044475 + 0.028874 * phi2 - 0.005916 * phi4))) - y) /
        (1.007226 + phi2 * (0.015085 * 3 + phi4 * (-0.044475 * 7 + 0.028874 * 9 * phi2 - 0.005916 * 11 * phi4)));
  } while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(delta) > __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */] && --i > 0);
  return [
    x / (0.8707 + (phi2 = phi * phi) * (-0.131979 + phi2 * (-0.013791 + phi2 * phi2 * phi2 * (0.003971 - 0.001529 * phi2)))),
    phi
  ];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["a" /* default */])(naturalEarth1Raw)
      .scale(175.295);
});


/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = orthographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(4);




function orthographicRaw(x, y) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y) * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y)];
}

orthographicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(__WEBPACK_IMPORTED_MODULE_0__math__["f" /* asin */]);

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(orthographicRaw)
      .scale(249.5)
      .clipAngle(90 + __WEBPACK_IMPORTED_MODULE_0__math__["o" /* epsilon */]);
});


/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cartesian__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transform__ = __webpack_require__(17);




var maxDepth = 16, // maximum depth of subdivision
    cosMinDistance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* cos */])(30 * __WEBPACK_IMPORTED_MODULE_1__math__["g" /* radians */]); // cos(minimum angular distance)

/* harmony default export */ __webpack_exports__["a"] = (function(project, delta2) {
  return +delta2 ? resample(project, delta2) : resampleNone(project);
});

function resampleNone(project) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__transform__["b" /* transformer */])({
    point: function(x, y) {
      x = project(x, y);
      this.stream.point(x[0], x[1]);
    }
  });
}

function resample(project, delta2) {

  function resampleLineTo(x0, y0, lambda0, a0, b0, c0, x1, y1, lambda1, a1, b1, c1, depth, stream) {
    var dx = x1 - x0,
        dy = y1 - y0,
        d2 = dx * dx + dy * dy;
    if (d2 > 4 * delta2 && depth--) {
      var a = a0 + a1,
          b = b0 + b1,
          c = c0 + c1,
          m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["n" /* sqrt */])(a * a + b * b + c * c),
          phi2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["f" /* asin */])(c /= m),
          lambda2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(c) - 1) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */] || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])(lambda0 - lambda1) < __WEBPACK_IMPORTED_MODULE_1__math__["o" /* epsilon */] ? (lambda0 + lambda1) / 2 : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["e" /* atan2 */])(b, a),
          p = project(lambda2, phi2),
          x2 = p[0],
          y2 = p[1],
          dx2 = x2 - x0,
          dy2 = y2 - y0,
          dz = dy * dx2 - dx * dy2;
      if (dz * dz / d2 > delta2 // perpendicular projected distance
          || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__math__["p" /* abs */])((dx * dx2 + dy * dy2) / d2 - 0.5) > 0.3 // midpoint close to an end
          || a0 * a1 + b0 * b1 + c0 * c1 < cosMinDistance) { // angular distance
        resampleLineTo(x0, y0, lambda0, a0, b0, c0, x2, y2, lambda2, a /= m, b /= m, c, depth, stream);
        stream.point(x2, y2);
        resampleLineTo(x2, y2, lambda2, a, b, c, x1, y1, lambda1, a1, b1, c1, depth, stream);
      }
    }
  }
  return function(stream) {
    var lambda00, x00, y00, a00, b00, c00, // first point
        lambda0, x0, y0, a0, b0, c0; // previous point

    var resampleStream = {
      point: point,
      lineStart: lineStart,
      lineEnd: lineEnd,
      polygonStart: function() { stream.polygonStart(); resampleStream.lineStart = ringStart; },
      polygonEnd: function() { stream.polygonEnd(); resampleStream.lineStart = lineStart; }
    };

    function point(x, y) {
      x = project(x, y);
      stream.point(x[0], x[1]);
    }

    function lineStart() {
      x0 = NaN;
      resampleStream.point = linePoint;
      stream.lineStart();
    }

    function linePoint(lambda, phi) {
      var c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__cartesian__["a" /* cartesian */])([lambda, phi]), p = project(lambda, phi);
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x0 = p[0], y0 = p[1], lambda0 = lambda, a0 = c[0], b0 = c[1], c0 = c[2], maxDepth, stream);
      stream.point(x0, y0);
    }

    function lineEnd() {
      resampleStream.point = point;
      stream.lineEnd();
    }

    function ringStart() {
      lineStart();
      resampleStream.point = ringPoint;
      resampleStream.lineEnd = ringEnd;
    }

    function ringPoint(lambda, phi) {
      linePoint(lambda00 = lambda, phi), x00 = x0, y00 = y0, a00 = a0, b00 = b0, c00 = c0;
      resampleStream.point = linePoint;
    }

    function ringEnd() {
      resampleLineTo(x0, y0, lambda0, a0, b0, c0, x00, y00, lambda00, a00, b00, c00, maxDepth, stream);
      resampleStream.lineEnd = lineEnd;
      lineEnd();
    }

    return resampleStream;
  };
}


/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = stereographicRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__azimuthal__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__(4);




function stereographicRaw(x, y) {
  var cy = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(y), k = 1 + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["c" /* cos */])(x) * cy;
  return [cy * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(x) / k, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["d" /* sin */])(y) / k];
}

stereographicRaw.invert = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__azimuthal__["a" /* azimuthalInvert */])(function(z) {
  return 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(z);
});

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__index__["a" /* default */])(stereographicRaw)
      .scale(250)
      .clipAngle(142);
});


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = transverseMercatorRaw;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mercator__ = __webpack_require__(29);



function transverseMercatorRaw(lambda, phi) {
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["i" /* log */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* tan */])((__WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */] + phi) / 2)), -lambda];
}

transverseMercatorRaw.invert = function(x, y) {
  return [-y, 2 * __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["l" /* atan */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* exp */])(x)) - __WEBPACK_IMPORTED_MODULE_0__math__["k" /* halfPi */]];
};

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var m = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mercator__["c" /* mercatorProjection */])(transverseMercatorRaw),
      center = m.center,
      rotate = m.rotate;

  m.center = function(_) {
    return arguments.length ? center([-_[1], _[0]]) : (_ = center(), [_[1], -_[0]]);
  };

  m.rotate = function(_) {
    return arguments.length ? rotate([_[0], _[1], _.length > 2 ? _[2] + 90 : 90]) : (_ = rotate(), [_[0], _[1], _[2] - 90]);
  };

  return rotate([0, 0, 90])
      .scale(159.155);
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(14);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* cubehelix */])(end)).h),
          s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["a"] = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hclLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(14);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* hcl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* hcl */])(end)).h),
        c = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hslLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(14);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["b" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(14);



function lab(start, end) {
  var l = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* lab */])(start)).l, (end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* lab */])(end)).l),
      a = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["b"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(168);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(166);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* identity */];
  value = value.matrix;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["a"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(35);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(32);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(33);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(170);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["b" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(39);


function dispatchEvent(node, type, params) {
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(79);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(37);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](merges, this._parents);
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(37);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(83);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](subgroups, parents);
});


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(2);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(35);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(35);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(40);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["b" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__timer__["c" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(40);


/* harmony default export */ __webpack_exports__["a"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["b" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transition_index__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active__ = __webpack_require__(206);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_2__src_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt__ = __webpack_require__(85);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_3__src_interrupt__["a"]; });






/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(3);



var root = [null];

/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule__["d" /* SCHEDULED */] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["b" /* Transition */]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(209);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */];


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt__ = __webpack_require__(85);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return this.each(function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__interrupt__["a" /* default */])(this, name);
  });
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(84);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["a" /* easeCubicInOut */]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["c" /* now */])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var id,
      timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index__["b" /* Transition */]) {
    id = name._id, name = name._name;
  } else {
    id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__transition_index__["c" /* newId */])(), (timing = defaultTiming).time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["c" /* now */])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__transition_schedule__["h" /* default */])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["b" /* Transition */](groups, this._parents, name, id);
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(86);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["namespace"])(name), i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["interpolateTransformSvg"] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(3);


function delayFunction(id, value) {
  return function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).delay;
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(3);


function durationFunction(id, value) {
  return function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).duration;
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(3);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).ease;
});


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Transition */](subgroups, this._parents, this._name, this._id);
});


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["a"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Transition */](merges, this._parents, this._name, this._id);
});


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(3);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */] : __WEBPACK_IMPORTED_MODULE_0__schedule__["e" /* set */];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__schedule__["h" /* default */])(subgroup[i], name, id, i, subgroup, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Transition */](subgroups, this._parents, name, id);
});


/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(3);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__schedule__["h" /* default */])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["b" /* Transition */](subgroups, parents, name, id);
});


/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(1);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(86);





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = (this.style.removeProperty(name), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["interpolateTransformCss"] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(20);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__tween__["b" /* tweenValue */])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(3);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* newId */])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__schedule__["f" /* get */])(node, id0);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__schedule__["h" /* default */])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["b" /* Transition */](groups, this._parents, name, id1);
});


/***/ }),
/* 226 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 227 */
/***/ (function(module, exports) {

module.exports = {"projectName":"animated_globe","section":"network","path":{"UAT":".","PROD":""},"localstyle":false,"images":{"children":false,"jsPrefix":"Img","sizes":{"thumb":50,"min":200,"max":1000,"inc":200},"quality":{"image":40,"thumb":80},"thumbBlurLarge":2,"thumbBlurSmall":1,"location":"./src/content/images"}}

/***/ })
/******/ ]);