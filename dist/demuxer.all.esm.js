function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @file= events.js, created at Monday, 23rd December 2019 3=47=23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */
var Events;

(function (Events) {
  Events["ERROR"] = "ERROR";
  Events["INFO"] = "INFO";
  Events["DATA"] = "DATA";
  Events["DEMUX_DATA"] = "DEMUX_DATA";
  Events["DONE"] = "DONE";
})(Events || (Events = {}));
/**
 * @copyright https://github.com/nodejs/node/blob/master/lib/events.js
 */

/* eslint-disable */
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


var objectCreate = Object.create || objectCreatePolyfill;
var objectKeys = Object.keys || objectKeysPolyfill;
var bind = Function.prototype.bind || functionBindPolyfill; // By default Dispatchers will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.

var defaultMaxListeners = 10;

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    if (!this._events || !Object.prototype.hasOwnProperty.call(this, '_events')) {
      this._events = objectCreate(null);
      this._eventsCount = 0;
    }

    this._maxListeners = this._maxListeners || undefined;
  }

  _createClass(EventEmitter, [{
    key: "emit",
    // // Obviously not all Emitters should be limited to 10. This function allows
    // // that to be increased. Set to zero for unlimited.
    // setMaxListeners(n) {
    //     if (typeof n !== 'number' || n < 0 || isNaN(n))
    //         throw new TypeError('"n" argument must be a positive number');
    //     this._maxListeners = n;
    //     return this;
    // }
    //
    // getMaxListeners() {
    //     return $getMaxListeners(this);
    // }
    value: function emit(type) {
      for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        rest[_key - 1] = arguments[_key];
      }

      var er, handler, len, args, i, events;
      var doError = type === 'error';
      events = this._events;
      if (events) doError = doError && events.error == null;else if (!doError) return false; // If there is no 'error' event listener then throw.

      if (doError) {
        if (arguments.length > 1) er = arguments[1];

        if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          // At least give some kind of context to the user
          var err = new Error('Unhandled "error" event. (' + er + ')');
          err['context'] = er;
          throw err;
        }
      }

      handler = events[type];
      if (!handler) return false;
      var isFn = typeof handler === 'function';
      len = arguments.length;

      switch (len) {
        // fast cases
        case 1:
          emitNone(handler, isFn, this);
          break;

        case 2:
          emitOne(handler, isFn, this, arguments[1]);
          break;

        case 3:
          emitTwo(handler, isFn, this, arguments[1], arguments[2]);
          break;

        case 4:
          emitThree(handler, isFn, this, arguments[1], arguments[2], arguments[3]);
          break;
        // slower

        default:
          args = new Array(len - 1);

          for (i = 1; i < len; i++) {
            args[i - 1] = arguments[i];
          }

          emitMany(handler, isFn, this, args);
      }

      return true;
    }
  }, {
    key: "on",
    value: function on(type, listener) {
      return _addListener(this, type, listener);
    }
  }, {
    key: "once",
    value: function once(type, listener) {
      if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
      this.on(type, _onceWrap(this, type, listener));
      return this;
    }
  }, {
    key: "off",
    value: function off(type, listener) {
      return _removeListener.call(this, type, listener);
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (!events) return this; // not listening for off, no need to emit

      if (!events.off) {
        if (arguments.length === 0) {
          this._events = objectCreate(null);
          this._eventsCount = 0;
        } else if (events[type]) {
          if (--this._eventsCount === 0) this._events = objectCreate(null);else delete events[type];
        }

        return this;
      } // emit off for all listeners on all events


      if (arguments.length === 0) {
        var keys = objectKeys(events);
        var key;

        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'off') continue;
          this.removeAllListeners(key);
        }

        this.removeAllListeners('off');
        this._events = objectCreate(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.off(type, listeners);
      } else if (listeners) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.off(type, listeners[i]);
        }
      }

      return this;
    }
  }, {
    key: "listeners",
    value: function listeners(type) {
      return _listeners(this, type, true);
    }
  }, {
    key: "rawListeners",
    value: function rawListeners(type) {
      return _listeners(this, type, false);
    }
  }, {
    key: "listenerCount",
    value: function listenerCount() {
      return EventEmitter.listenerCount.apply(this, arguments);
    }
  }], [{
    key: "listenerCount",
    value: function listenerCount(emitter, type) {
      if (typeof emitter.listenerCount === 'function') {
        return emitter.listenerCount(type);
      } else {
        return _listenerCount.call(emitter, type);
      }
    }
  }]);

  return EventEmitter;
}();

var hasDefineProperty;

try {
  var o = {};
  if (Object.defineProperty) Object.defineProperty(o, 'x', {
    value: 0
  });
  hasDefineProperty = o['x'] === 0;
} catch (err) {
  hasDefineProperty = false;
}

if (hasDefineProperty) {
  Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
    enumerable: true,
    get: function get() {
      return defaultMaxListeners;
    },
    set: function set(arg) {
      // check whether the input is a positive number (whose value is zero or
      // greater and not a NaN).
      if (typeof arg !== 'number' || arg < 0 || arg !== arg) throw new TypeError('"defaultMaxListeners" must be a positive number');
      defaultMaxListeners = arg;
    }
  });
} else {
  EventEmitter.defaultMaxListeners = defaultMaxListeners;
}

function $getMaxListeners(that) {
  if (that._maxListeners === undefined) return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
} // These standalone emit* functions are used to optimize calling of event
// handlers for fast cases because emit() itself often has a variable number of
// arguments and can be deoptimized because of that. These functions always have
// the same number of arguments and thus do not get deoptimized, so the code
// inside them can execute faster.


function emitNone(handler, isFn, self) {
  if (isFn) handler.call(self);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      try {
        listeners[i].call(self);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

function emitOne(handler, isFn, self, arg1) {
  if (isFn) handler.call(self, arg1);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      try {
        listeners[i].call(self, arg1);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

function emitTwo(handler, isFn, self, arg1, arg2) {
  if (isFn) handler.call(self, arg1, arg2);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      try {
        listeners[i].call(self, arg1, arg2);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

function emitThree(handler, isFn, self, arg1, arg2, arg3) {
  if (isFn) handler.call(self, arg1, arg2, arg3);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      try {
        listeners[i].call(self, arg1, arg2, arg3);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

function emitMany(handler, isFn, self, args) {
  if (isFn) handler.apply(self, args);else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);

    for (var i = 0; i < len; ++i) {
      try {
        listeners[i].apply(self, args);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

function _addListener(target, type, listener) {
  var m;
  var events;
  var existing;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = target._events;

  if (!events) {
    events = target._events = objectCreate(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener) {
      target.emit('newListener', type, listener['listener'] ? listener['listener'] : listener); // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object

      events = target._events;
    }

    existing = events[type];
  }

  if (!existing) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] = [existing, listener];
    } else {
      existing.push(listener);
    } // Check for listener leak


    if (!existing.warned) {
      m = $getMaxListeners(target);

      if (m && m > 0 && existing.length > m) {
        existing.warned = true;

        var CustomError = /*#__PURE__*/function (_Error) {
          _inherits(CustomError, _Error);

          var _super = _createSuper(CustomError);

          function CustomError() {
            _classCallCheck(this, CustomError);

            return _super.apply(this, arguments);
          }

          return CustomError;
        }( /*#__PURE__*/_wrapNativeSuper(Error));

        var w = new CustomError('Possible Dispatcher memory leak detected. ' + existing.length + ' "' + String(type) + '" listeners ' + 'added. Use emitter.setMaxListeners() to ' + 'increase limit.');
        w.name = 'MaxListenersExceededWarning';
        w.emitter = target;
        w.type = type;
        w.count = existing.length;

        if ((typeof console === "undefined" ? "undefined" : _typeof(console)) === 'object' && console.warn) {
          console.warn('%s: %s', w.name, w.message);
        }
      }
    }
  }

  return target;
}

function _removeListener(type, listener) {
  var list, events, position, i, originalListener;
  if (typeof listener !== 'function') throw new TypeError('"listener" argument must be a function');
  events = this._events;
  if (!events) return this;
  list = events[type];
  if (!list) return this;

  if (list === listener || list.listener === listener) {
    if (--this._eventsCount === 0) this._events = objectCreate(null);else {
      delete events[type];
      if (events.off) this.emit('off', type, list.listener || listener);
    }
  } else if (typeof list !== 'function') {
    position = -1;

    for (i = list.length - 1; i >= 0; i--) {
      if (list[i] === listener || list[i].listener === listener) {
        originalListener = list[i].listener;
        position = i;
        break;
      }
    }

    if (position < 0) return this;
    if (position === 0) list.shift();else spliceOne(list, position);
    if (list.length === 1) events[type] = list[0];
    if (events.off) this.emit('off', type, originalListener || listener);
  }

  return this;
}

function onceWrapper() {
  if (!this.fired) {
    this.target.off(this.type, this.wrapFn);
    this.fired = true;

    switch (arguments.length) {
      case 0:
        return this.listener.call(this.target);

      case 1:
        return this.listener.call(this.target, arguments[0]);

      case 2:
        return this.listener.call(this.target, arguments[0], arguments[1]);

      case 3:
        return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);

      default:
        var args = new Array(arguments.length);

        for (var i = 0; i < args.length; ++i) {
          args[i] = arguments[i];
        }

        this.listener.apply(this.target, args);
    }
  }
}

function _onceWrap(target, type, listener) {
  var state = {
    fired: false,
    wrapFn: undefined,
    target: target,
    type: type,
    listener: listener
  };
  var wrapped = bind.call(onceWrapper, state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

function _listeners(target, type, unwrap) {
  var events = target._events;
  if (!events) return [];
  var evlistener = events[type];
  if (!evlistener) return [];
  if (typeof evlistener === 'function') return unwrap ? [evlistener.listener || evlistener] : [evlistener];
  return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

function _listenerCount(type) {
  var events = this._events;

  if (events) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener) {
      return evlistener.length;
    }
  }

  return 0;
} // About 1.5x faster than the two-arg version of Array#splice().


function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

function arrayClone(arr, n) {
  var copy = new Array(n);

  for (var i = 0; i < n; ++i) {
    copy[i] = arr[i];
  }

  return copy;
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);

  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }

  return ret;
}

function objectCreatePolyfill(proto) {
  var F = function F() {};

  F.prototype = proto;
  return new F();
}

function objectKeysPolyfill(obj) {
  for (var k in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) ;
  }

  return k;
}

function functionBindPolyfill(context) {
  var fn = this;
  return function () {
    return fn.apply(context, arguments);
  };
}

var Context = /*#__PURE__*/function (_EventEmitter) {
  _inherits(Context, _EventEmitter);

  var _super2 = _createSuper(Context);

  function Context() {
    _classCallCheck(this, Context);

    return _super2.apply(this, arguments);
  }

  return Context;
}(EventEmitter);
/**
 * @file: is.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */


var objectToString = Object.prototype.toString;
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike(value) {
  return !!value && _typeof(value) == 'object';
}
/**
 * @param num
 */


function isNumber(num) {
  return typeof num === 'number' && !isNaN(num);
}
/**
 * @param value
 */


function isArrayBuffer(value) {
  return isObjectLike(value) && objectToString.call(value).toLowerCase() === '[object arraybuffer]';
}
/**
 * @param value
 */


function isUint8Array(value) {
  return isObjectLike(value) && objectToString.call(value).toLowerCase() === '[object uint8array]';
}
/**
 * @file: cache-buffer.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * Cache Buffer util.
 * It's applicable for streaming data cutting and retaining the data,
 * the algorithm minimizes memory application as much as possible.
 */


var CacheBuffer = /*#__PURE__*/function () {
  function CacheBuffer() {
    _classCallCheck(this, CacheBuffer);

    this.list_ = [];
  }

  _createClass(CacheBuffer, [{
    key: "clear",
    value: function clear() {
      var len = this.list_.length;

      if (len > 0) {
        this.list_.splice(0, len);
      }

      this.byteLength_ = null;
    }
  }, {
    key: "toNewBytes",
    value: function toNewBytes() {
      var bytes = null;
      var tryCount = 0;
      var maxTryCount = 50; // The following retry strategies are provided for failed memory applications
      // In terms of a better strategy, a failed memory application retry should be
      // an asynchronous process, which does not return until the application succeeds.
      // But the original design of the library is synchronous.

      while (bytes === null) {
        try {
          tryCount++;
          bytes = new Uint8Array(this.byteLength);
        } catch (e) {
          if (tryCount > maxTryCount) {
            throw e;
          }
        }
      }

      for (var i = 0, offset = 0; i < this.list_.length; i++) {
        var payload = this.list_[i];
        bytes.set(payload, offset);
        offset += payload.byteLength;
      }

      return bytes;
    }
  }, {
    key: "append",
    value: function append(newBuffer) {
      if (newBuffer instanceof CacheBuffer) {
        this.list_ = this.list_.concat(newBuffer.bufferList);
      } else {
        this.list_.push(newBuffer);
      }

      this.byteLength_ = null;
    }
    /**
     * This function cuts a complete TypedArray from CacheBuffer and retains the remainder of CacheBuffer.
     * The following points should be noted when using this function:
     * 1. If the cut needs to return the cut-out part, the cut length should be as small as possible to reduce the errors in memory application.
     * 2. If the cutting is only to preserve the remaining parts, the cutting size is within the total number of bytes, without considering memory applications.
     * @param {number} fixedLength
     * @param {boolean} [needCutResult] - If not, just retain the remaining parts after cutting.
     */

  }, {
    key: "cut",
    value: function cut(fixedLength) {
      var needCutResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var chunk = null;

      if (fixedLength > 0 && !this.empty) {
        var list = this.list_;
        var offset = 0;
        var loopIndex = 0;

        while (list.length > 0) {
          var cur = list.shift();

          if (loopIndex === 0) {
            if (cur.byteLength >= fixedLength) {
              if (needCutResult) {
                // Here is the key point for optimize memory alloc
                chunk = cur.subarray(0, fixedLength);
              }

              if (cur.byteLength > fixedLength) {
                cur = cur.subarray(fixedLength);
                list.unshift(cur);
              }

              break;
            } else {
              if (needCutResult) {
                try {
                  chunk = new Uint8Array(fixedLength);
                } catch (e) {
                  throw "alloc_memory_error@ cache buffer: ".concat(fixedLength, " ").concat(e.message);
                }

                chunk.set(cur, 0);
              }

              offset += cur.byteLength;
            }
          } else {
            var subLen = fixedLength - offset;

            if (cur.byteLength >= subLen) {
              if (needCutResult) {
                chunk.set(cur.subarray(0, subLen), offset);
              }

              cur = cur.subarray(subLen);

              if (cur.byteLength > 0) {
                list.unshift(cur);
              }

              break;
            } else {
              if (needCutResult) {
                chunk.set(cur, offset);
              }

              offset += cur.byteLength;
              break;
            }
          }

          loopIndex++;
        }

        this.byteLength_ = null;
      }

      return chunk;
    }
  }, {
    key: "byteLength",
    get: function get() {
      if (!isNumber(this.byteLength_)) {
        var len = 0;

        for (var i = 0, item; i < this.list_.length; i++) {
          item = this.list_[i];
          len += item.byteLength;
        }

        this.byteLength_ = len;
      }

      return this.byteLength_;
    }
    /**
     * maybe return new allocated memory or original memory
     */

  }, {
    key: "bytes",
    get: function get() {
      var bufferList = this.bufferList;
      var bytes = null;

      if (bufferList.length > 0) {
        if (bufferList.length === 0) {
          bytes = bufferList[0];
        } else {
          bytes = this.toNewBytes();
        }
      }

      return bytes;
    }
  }, {
    key: "empty",
    get: function get() {
      return this.list_.length === 0;
    }
  }, {
    key: "bufferList",
    get: function get() {
      return this.list_;
    }
  }]);

  return CacheBuffer;
}();
/**
 * @fileOverview A simple multimap template.
 */


var MultiMap = /*#__PURE__*/function () {
  function MultiMap() {
    _classCallCheck(this, MultiMap);

    this.map_ = {};
  }
  /**
   * Add a key, value pair to the map.
   * @param key
   * @param value
   */


  _createClass(MultiMap, [{
    key: "push",
    value: function push(key, value) {
      if (Object.prototype.hasOwnProperty.call(this.map_, key)) {
        this.map_[key].push(value);
      } else {
        this.map_[key] = [value];
      }
    }
    /**
     * Get a list of values by key.
     * @param key
     */

  }, {
    key: "get",
    value: function get(key) {
      var list = this.map_[key]; // slice() clones the list so that it and the map can each be modified
      // without affecting the other.

      return list ? list.slice() : null;
    }
    /**
     * Get a list of all values.
     */

  }, {
    key: "getAll",
    value: function getAll() {
      var list = [];

      for (var key in this.map_) {
        list.push.apply(list, this.map_[key]);
      }

      return list;
    }
    /**
     * Remove a specific value, if it exists.
     * @param key
     * @param value
     */

  }, {
    key: "remove",
    value: function remove(key, value) {
      var list = this.map_[key];

      if (list) {
        for (var i = 0; i < list.length; ++i) {
          if (list[i] == value) {
            list.splice(i, 1);
            --i;
          }
        }
      }
    }
    /**
     * Clear all keys and values from the multimap.
     */

  }, {
    key: "clear",
    value: function clear() {
      this.map_ = {};
    }
    /**
     * @param callback
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      for (var key in this.map_) {
        callback(key, this.map_[key]);
      }
    }
  }]);

  return MultiMap;
}();
/**
 * Creates a new Binding_ and attaches the event listener to the event target.
 */


var Binding_ = /*#__PURE__*/function () {
  /**
   * @param target - The event target.
   * @param type - The event type.
   * @param listener - The event listener.
   */
  function Binding_(target, type, listener) {
    _classCallCheck(this, Binding_);

    this.target = target;
    this.type = type;
    this.listener = listener;

    if (this.target.addEventListener) {
      this.target.addEventListener(type, listener, false);
    } else if (this.target.on) {
      this.target.on(type, listener, false);
    }
  }
  /**
   * Detaches the event listener from the event target.
   * This does nothing if the event listener is already detached.
   */


  _createClass(Binding_, [{
    key: "off",
    value: function off() {
      if (this.target.removeEventListener) {
        this.target.removeEventListener(this.type, this.listener, false);
      } else if (this.target.off) {
        this.target.off(this.type, this.listener, false);
      }

      this.target = null;
      this.listener = null;
    }
  }]);

  return Binding_;
}();
/**
 * Creates a new EventManager.
 * An EventManager maintains a collection of "event bindings" between event targets and event listeners.
 */


var EventManager = /*#__PURE__*/function () {
  // static Binding_: Binding;
  function EventManager() {
    _classCallCheck(this, EventManager);

    /**
     * Maps an event type to an array of event bindings.
     */
    this.bindingMap_ = new MultiMap();
  }
  /**
   * Detaches all event listeners.
   * @override
   */


  _createClass(EventManager, [{
    key: "destroy",
    value: function destroy() {
      this.removeAll();
      this.bindingMap_ = null;
    }
    /**
     * Attaches an event listener to an event target.
     * @param target - The event target.
     * @param type  - The event type.
     * @param listener  - The event listener.
     */

  }, {
    key: "on",
    value: function on(target, type, listener) {
      if (!this.bindingMap_) return;
      var binding = new Binding_(target, type, listener);
      this.bindingMap_.push(type, binding);
      return this;
    }
    /**
     * Attaches an event listener to an event target.
     * The listener will be removed when the first instance of the event is fired.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     * @param {function} listener The event listener.
     */

  }, {
    key: "once",
    value: function once(target, type, listener) {
      // Install a shim listener that will stop listening after the first event.
      this.on(target, type, function (event) {
        // Stop listening to this event.
        this.off(target, type); // Call the original listener.

        listener(event);
      }.bind(this));
    }
    /**
     * Detaches an event listener from an event target.
     * @param {EventTarget} target The event target.
     * @param {string} type The event type.
     */

  }, {
    key: "off",
    value: function off(target, type) {
      if (!this.bindingMap_) return;
      var list = this.bindingMap_.get(type) || [];

      for (var i = 0; i < list.length; ++i) {
        var binding = list[i];

        if (binding.target == target) {
          binding.off();
          this.bindingMap_.remove(type, binding);
        }
      }
    }
    /**
     * Detaches all event listeners from all targets.
     */

  }, {
    key: "removeAll",
    value: function removeAll() {
      if (!this.bindingMap_) return;
      var list = this.bindingMap_.getAll();

      for (var i = 0; i < list.length; ++i) {
        list[i].off();
      }

      this.bindingMap_.clear();
    }
  }]);

  return EventManager;
}(); // EventManager.Binding_ = Binding;

/**
 * @file: global.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @description provide global scope.
 */


var global; // see https://stackoverflow.com/a/11237259/589493

if (typeof window === 'undefined') {
  /* eslint-disable-next-line no-undef */
  global = self;
} else {
  global = window;
}

var global$1 = global;
/**
 * @file: logger.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

var console$1 = global$1.console;
var isWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope && typeof importScripts != 'undefined';
var prefix = '>>>';

var Logger = /*#__PURE__*/function (_EventEmitter2) {
  _inherits(Logger, _EventEmitter2);

  var _super3 = _createSuper(Logger);

  function Logger() {
    var _this;

    _classCallCheck(this, Logger);

    _this = _super3.call(this);
    _this._enable = false;
    return _this;
  }

  _createClass(Logger, [{
    key: "log",
    value: function log() {
      for (var _len2 = arguments.length, restArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        restArgs[_key2] = arguments[_key2];
      }

      if (isWorker) {
        logger.emit(this.MSG_NAME, 'log', [].concat(restArgs).join(''));
      } else {
        if (this._enable) {
          var _console$1$log;

          (_console$1$log = console$1.log).call.apply(_console$1$log, [console$1, prefix].concat(restArgs));
        }
      }
    }
  }, {
    key: "debug",
    value: function debug() {
      for (var _len3 = arguments.length, restArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        restArgs[_key3] = arguments[_key3];
      }

      if (isWorker) {
        logger.emit(this.MSG_NAME, 'debug', [].concat(restArgs).join(''));
      } else {
        if (this._enable && console$1.debug) {
          var _console$1$debug;

          (_console$1$debug = console$1.debug).call.apply(_console$1$debug, [console$1, prefix].concat(restArgs));
        }
      }
    }
  }, {
    key: "assert",
    value: function assert() {
      if (this._enable && console$1.assert) {
        var _console$1$assert;

        for (var _len4 = arguments.length, restArgs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          restArgs[_key4] = arguments[_key4];
        }

        var condition = restArgs[0];
        var sliceArgs = Array.prototype.slice.call(restArgs, 1);
        sliceArgs.unshift(prefix);

        (_console$1$assert = console$1.assert).call.apply(_console$1$assert, [console$1, condition].concat(_toConsumableArray(sliceArgs)));
      }
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len5 = arguments.length, restArgs = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        restArgs[_key5] = arguments[_key5];
      }

      if (isWorker) {
        logger.emit(this.MSG_NAME, 'warn', [].concat(restArgs).join(''));
      } else {
        if (this._enable) {
          var _console$1$warn;

          (_console$1$warn = console$1.warn).call.apply(_console$1$warn, [console$1, prefix].concat(restArgs));
        }
      }
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len6 = arguments.length, restArgs = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        restArgs[_key6] = arguments[_key6];
      }

      if (isWorker) {
        logger.emit(this.MSG_NAME, 'error', [].concat(restArgs).join(''));
      } else {
        if (this._enable) {
          var _console$1$error;

          (_console$1$error = console$1.error).call.apply(_console$1$error, [console$1, prefix].concat(restArgs));
        }
      }
    }
  }, {
    key: "enable",
    get: function get() {
      return this._enable;
    },
    set: function set(value) {
      this._enable = value;
      this.MSG_NAME = '__log__';
    }
  }]);

  return Logger;
}(EventEmitter);

var logger = new Logger();
/**
 * @file: stream.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

var Stream = /*#__PURE__*/function (_EventEmitter3) {
  _inherits(Stream, _EventEmitter3);

  var _super4 = _createSuper(Stream);

  function Stream() {
    _classCallCheck(this, Stream);

    return _super4.call(this);
  }
  /**
   * connect to the next pipeline stream.
   * @param destination
   */


  _createClass(Stream, [{
    key: "pipe",
    value: function pipe(destination) {
      this.on('reset', function () {
        destination.reset();
      });
      this.on('data', function (data) {
        destination.push(data);
      });
      this.on('done', function (flushSource) {
        destination.flush(flushSource);
      });
      return destination;
    }
    /**
     * detaches the next pipeline stream previously attached.
     */

  }, {
    key: "unpipe",
    value: function unpipe() {
      this.removeAllListeners('reset');
      this.removeAllListeners('data');
      this.removeAllListeners('done');
      return this;
    }
    /**
     * push data to current pipeline.
     * @param data
     */

  }, {
    key: "push",
    value: function push(data, conf) {
      this.emit('data', data);
    }
    /**
     * flush current pipeline.
     * @param flushSource
     */

  }, {
    key: "flush",
    value: function flush(flushSource) {
      this.emit('done', flushSource);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.emit('reset');
    }
  }]);

  return Stream;
}(EventEmitter);
/**
 * @file: demuxer.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var DemuxFacade = /*#__PURE__*/function (_Stream) {
  _inherits(DemuxFacade, _Stream);

  var _super5 = _createSuper(DemuxFacade);

  function DemuxFacade() {
    var _this2;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, DemuxFacade);

    _this2 = _super5.call(this);

    if (options.debug) {
      logger.enable = true;
    }

    _this2.ctx_ = new Context();
    _this2.options_ = options;
    _this2.cache_buffer_ = new CacheBuffer();
    return _this2;
  }

  _createClass(DemuxFacade, [{
    key: "listenEndStream_",
    value: function listenEndStream_() {
      var _this3 = this;

      this.eventManager_ = new EventManager();
      this.eventManager_.on(this.endStream, 'data', function (data) {
        _this3.emit(Events.DEMUX_DATA, data);
      }).on(this.endStream, 'done', function (data) {
        _this3.emit(Events.DONE, data);
      }).on(this.ctx_, 'error', function (data) {
        _this3.emit(Events.ERROR, data);
      });
    }
    /**
     * transfer data to Uint8Array
     * @param buf
     */

  }, {
    key: "constraintPushData_",
    value: function constraintPushData_(buf) {
      var newBuf = null;

      if (!isArrayBuffer(buf) && !isUint8Array(buf)) {
        logger.error("Data pushed is not an ArrayBuffer or Uint8Array: ".concat(buf));
        return newBuf;
      }

      if (isArrayBuffer(buf)) {
        newBuf = new Uint8Array(buf);
      } else {
        newBuf = buf;
      }

      return newBuf;
    }
  }, {
    key: "reset",
    value: function reset() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.unpipe();
      this.endStream.unpipe();
      this.eventManager_.removeAll();
    }
  }]);

  return DemuxFacade;
}(Stream);
/**
 * @file: mux-error-code.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @readonly
 * @enum {Number}
 */


var codes;

(function (codes) {
  codes[codes["WORKER_EXCEPTION"] = 0] = "WORKER_EXCEPTION";
  codes[codes["WORKER_MSG_EXCEPTION"] = 1] = "WORKER_MSG_EXCEPTION";
  codes[codes["TS_SYNC_BYTE"] = 2] = "TS_SYNC_BYTE";
  codes[codes["FLV_HEAD_SIGNATURE"] = 3] = "FLV_HEAD_SIGNATURE";
  codes[codes["FLV_NOT_EXPECTED_ADJACENT_DATA"] = 4] = "FLV_NOT_EXPECTED_ADJACENT_DATA";
})(codes || (codes = {}));

var muxErrorCode = codes;
/**
 * @file: dv.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * Bit buffer reader like DataView.
 */

function read(buf) {
  var byteOffset = 0;

  if (ArrayBuffer.isView(buf)) {
    byteOffset = buf.byteOffset;
    buf = buf.buffer;
  }

  return new DataView(buf, byteOffset);
}

var DataViewReader = /*#__PURE__*/function () {
  function DataViewReader() {
    _classCallCheck(this, DataViewReader);
  }
  /**
   * Gets an unsigned 8-bit integer (unsigned byte).
   * @param buffer
   * @param byteOffset    The offset, in byte, from the start of the view where to read the data.
   * @returns {number}    An unsigned 8-bit integer number.
   */


  _createClass(DataViewReader, [{
    key: "readUint8",
    value: function readUint8(buffer, byteOffset) {
      return read(buffer).getUint8(byteOffset);
    }
    /**
     * Gets an unsigned 16-bit integer (unsigned long).
     * @param buffer
     * @param byteOffset     The offset, in byte, from the start of the view where to read the data.
     * @param littleEndian   Indicates whether the 16-bit int is stored in little- or big-endian format.
     * @returns {number}     An unsigned 16-bit integer number.
     */

  }, {
    key: "readUint16",
    value: function readUint16(buffer, byteOffset) {
      var littleEndian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return read(buffer).getUint16(byteOffset, littleEndian);
    }
    /**
     * Gets an unsigned 32-bit integer (unsigned long).
     * @param buffer
     * @param byteOffset        The offset, in byte, from the start of the view where to read the data.
     * @param littleEndian      Indicates whether the 32-bit int is stored in little- or big-endian format.
     * @returns {number}        An unsigned 32-bit integer number.
     */

  }, {
    key: "readUint32",
    value: function readUint32(buffer, byteOffset) {
      var littleEndian = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return read(buffer).getUint32(byteOffset, littleEndian);
    }
  }]);

  return DataViewReader;
}();
/**
 * @file: patSection.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @extends DataViewReader
 */


var PATSection = /*#__PURE__*/function (_DataViewReader) {
  _inherits(PATSection, _DataViewReader);

  var _super6 = _createSuper(PATSection);

  function PATSection(buffer) {
    var _this4;

    _classCallCheck(this, PATSection);

    _this4 = _super6.call(this); // program_association_section 0x00

    _this4.table_id = buffer[0];
    _this4.section_syntax_indicator = buffer[1] >> 7; // this.zero = (buffer[1] >> 6) & 0x1;
    // this.reserved_0 = (buffer[1] >> 4) & 0x3;
    // the number of bytes of the section
    // starting immediately following the section_length field, and including the CRC.

    _this4.section_length = (buffer[1] & 0x0f) << 8 | buffer[2];
    _this4.transport_stream_id = _this4.readUint16(buffer, 3); // this.reserved_1 = buffer[5] >> 6;

    _this4.version_number = buffer[5] >> 1 & 0x1f;
    _this4.current_next_indicator = buffer[5] && 0x01; // The section_number of the first section in the Program Association Table shall be 0x00.
    // It shall be incremented by 1 with each additional section in the PAT.

    _this4.section_number = buffer[6]; // The number of the last section (that is, the section with the highest section_number) of the complete PAT.

    _this4.last_section_number = buffer[7];
    _this4.network_PID = 0x00;
    var n = 0,
        program_num; // reserved_3;

    var len = _this4.section_length - 4 - 5; // 4: crc32, 5: bytes followed by section_length

    _this4.pmtTable = [];
    /* loop by 4 bytes, during  */

    for (; n < len; n += 4) {
      program_num = _this4.readUint16(buffer, 8 + n); // reserved_3 = buffer[10 + n] >> 5;

      if (program_num == 0x00) {
        _this4.network_PID = (buffer[10 + n] & 0x1f) << 8 | buffer[11 + n]; // 记录该TS流的网络PID
        // TS_network_Pid = this.network_PID;

        logger.log('packet->network_PID %0x /n/n', _this4.network_PID);
      } else {
        _this4.pmtTable.push({
          programNum: program_num,
          program_map_PID: (buffer[10 + n] & 0x1f) << 8 | buffer[11 + n]
        }); // TS_PAT_Program
        // PAT_program;
        // PAT_program.program_map_PID = (buffer[10 + n] & 0x1F) << 8 | buffer[11 + n];
        // PAT_program.program_number = program_num;
        // this.program.push_back(PAT_program);
        // TS_program.push_back(PAT_program);//向全局PAT节目数组中添加PAT节目信息

      }
    }

    var crcLength = _this4.section_length + 3;
    _this4.CRC_32 = (buffer[crcLength - 4] & 0x000000ff) << 24 | (buffer[crcLength - 3] & 0x000000ff) << 16 | (buffer[crcLength - 2] & 0x000000ff) << 8 | buffer[crcLength - 1] & 0x000000ff;
    return _this4;
  }

  return PATSection;
}(DataViewReader);
/**
 * @file: pmtSection.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @extends DataViewReader
 */


var PMTSection = /*#__PURE__*/function (_DataViewReader2) {
  _inherits(PMTSection, _DataViewReader2);

  var _super7 = _createSuper(PMTSection);

  function PMTSection(buffer) {
    var _this5;

    _classCallCheck(this, PMTSection);

    _this5 = _super7.call(this); // program_map_section  0x02

    _this5.table_id = buffer[0];
    _this5.section_syntax_indicator = buffer[1] >> 7; // this.zero = (buffer[1] >> 6) & 0x1;
    // this.reserved_0 = (buffer[1] >> 4) & 0x3;
    // the number of bytes of the section
    // starting immediately following the section_length field, and including the CRC.

    _this5.section_length = (buffer[1] & 0x0f) << 8 | buffer[2]; // It specifies the program to which the program_map_PID is applicable.

    _this5.program_number = _this5.readUint16(buffer, 3); // this.reserved_1 = buffer[5] >> 6;

    _this5.version_number = buffer[5] >> 1 & 0x1f;
    _this5.current_next_indicator = buffer[5] && 0x01; // The section_number of the first section in the Program Association Table shall be 0x00.
    // It shall be incremented by 1 with each additional section in the PAT.

    _this5.section_number = buffer[6]; // The number of the last section (that is, the section with the highest section_number) of the complete PAT.

    _this5.last_section_number = buffer[7]; // contain the PCR fields valid for the program specified by program_number.

    _this5.PCR_PID = (buffer[8] & 0x1f) << 8 | buffer[9]; // this.reserved_2 = buffer[10] >> 4;
    // The number of bytes of the descriptors immediately following the program_info_length field.

    _this5.program_info_length = (buffer[10] & 0x0f) << 8 | buffer[11];

    if (_this5.program_info_length < 0) {
      return _possibleConstructorReturn(_this5);
    } else if (_this5.program_info_length > 2) {
      var i = 0;

      while (i < _this5.program_info_length) {
        // let descriptor_tag = buffer[12 + i];
        var descriptor_length = buffer[13 + i]; // 	logger.log('descriptor_tag', descriptor_tag, descriptor_length);

        i += descriptor_length;
      }
    }

    var es_section_pos = 12 + _this5.program_info_length;
    var es_section_len = _this5.section_length - _this5.program_info_length - 9 - 4; // 9: bytes followed by section_length, 4: crc32

    var es_section_end = es_section_pos + es_section_len;

    if (es_section_pos >= es_section_end) {
      logger.warn("es_section_pos < es_section_end ".concat(es_section_pos, ", ").concat(es_section_end));
      return _possibleConstructorReturn(_this5);
    }

    _this5.pes_table = [];
    var j = 0;

    while (j < es_section_len) {
      var stream_type = buffer[es_section_pos + j];
      var elementary_PID = _this5.readUint16(buffer, es_section_pos + j + 1) & 0x1fff;
      var ES_info_length = _this5.readUint16(buffer, es_section_pos + j + 3) & 0x0fff;

      _this5.pes_table.push({
        streamType: stream_type,
        PID: elementary_PID
      });

      if (ES_info_length > 2) {
        var k = 0;
        var es_pos = es_section_pos + j + 5;

        while (k < ES_info_length) {
          // let descriptor_tag = buffer[es_pos + k];
          var _descriptor_length = buffer[es_pos + k]; // if (descriptor_tag === )

          k += _descriptor_length;
        }
      }

      j += ES_info_length + 5;
    }

    var crcLength = _this5.section_length + 3;
    _this5.CRC_32 = (buffer[crcLength - 4] & 0x000000ff) << 24 | (buffer[crcLength - 3] & 0x000000ff) << 16 | (buffer[crcLength - 2] & 0x000000ff) << 8 | buffer[crcLength - 1] & 0x000000ff;
    return _this5;
  }

  _createClass(PMTSection, [{
    key: "parse",
    value: function parse() {// let data = this.uint8;
    }
  }]);

  return PMTSection;
}(DataViewReader);
/**
 * @file: sdtSection.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var SDTSection = /*#__PURE__*/function (_DataViewReader3) {
  _inherits(SDTSection, _DataViewReader3);

  var _super8 = _createSuper(SDTSection);

  function SDTSection(buffer) {
    var _this6;

    _classCallCheck(this, SDTSection);

    _this6 = _super8.call(this); // program_map_section  0x02

    _this6.table_id = buffer[0];
    _this6.section_syntax_indicator = buffer[1] >> 7; // this.reserved_0 = (buffer[1] >> 4) & 0x3;
    // the number of bytes of the section
    // starting immediately following the section_length field, and including the CRC.

    _this6.section_length = (buffer[1] & 0x0f) << 8 | buffer[2]; // This is a 16-bit field which serves as a label for identification of the TS,
    // about which the SDT informs, from any other multiplex within the delivery system

    _this6.transport_stream_id = _this6.readUint16(buffer, 3); // this.reserved_1 = buffer[5] >> 6;

    _this6.version_number = buffer[5] >> 1 & 0x1f;
    _this6.current_next_indicator = buffer[5] & 0x01; // The section_number of the first section in the sub_table shall be "0x00".
    // The section_number shall be incremented by 1 with each additional section
    // with the same table_id, transport_stream_id, and original_network_id.

    _this6.section_number = buffer[6]; // This 8-bit field specifies the number of the last section
    // (that is, the section with the highest section_number) of the sub_table of which this section is part

    _this6.last_section_number = buffer[7]; // This field gives the label identifying the network_id of the originating delivery system.

    _this6.original_network_id = _this6.readUint16(buffer, 8); // this.reserved_2 = buffer[10];
    // section_length - (following the section_length field length) - crc32Length

    var sv_len = _this6.section_length - 8 - 4; // 8: bytes followed by section_length, 4: crc32

    _this6.service_table = [];
    var i = 0;

    while (i < sv_len) {
      var _j = 0;
      var service = {
        service_id: _this6.readUint16(buffer, 11),
        EIT_schedule_flag: buffer[13] & 0x02,
        EIT_present_following_flag: buffer[13] & 0x01,
        running_status: buffer[14] >> 5,
        free_CA_mode: buffer[14] >> 4 & 0x01,
        descriptors_loop_length: (buffer[14] & 0x0f) << 8 | buffer[15],
        provider_name: '',
        name: ''
      };

      while (_j < service.descriptors_loop_length) {
        var start = 16 + _j;
        var descriptor_tag = buffer[start];
        var descriptor_length = buffer[start + 1];

        switch (descriptor_tag) {
          case 0x48:
            // service_descriptor
            {
              // let service_type = buffer[start + 2];
              var service_provider_name = [];
              var service_provider_name_length = buffer[start + 3];
              var k = 0,
                  l = 0,
                  nextPos = start + 4;

              for (k = 0; k < service_provider_name_length; k++) {
                service_provider_name.push(String.fromCharCode(buffer[nextPos]));
                nextPos += 1;
              }

              service.provider_name = service_provider_name.join('');
              var service_name = [];
              var service_name_length = buffer[nextPos];
              nextPos += 1;

              for (l = 0; l < service_name_length; l++) {
                service_name.push(String.fromCharCode(buffer[nextPos]));
                nextPos += 1;
              }

              service.name = service_name.join('');
            }
            break;

          default:
            logger.warn("sdt section unhandled descriptor_tag ".concat(descriptor_tag));
        }

        _j += 2 + descriptor_length;
      }

      _this6.service_table.push(service);

      i += 5 + service.descriptors_loop_length;
    }

    return _this6;
  }

  return SDTSection;
}(DataViewReader);
/**
 * @file: m2t-pid.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @overview Program and program element descriptors.
 * @see ISO/IEC 13818-1: Table 2-3 – PID table
 * @see DVB SI: 5.1.3 Coding of PID and table_id fields
 */

/**
 * @readonly
 * @enum {number}
 * @export
 */


var PAT_PID = 0x0000;
var CAT_PID = 0x0001;
var TSDT_PID = 0x0002;
/* reserved 0x0003 to 0x000F */

var SDT_PID = 0x0011;
/**
 * @file: psi.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

var Metadata = function Metadata() {
  _classCallCheck(this, Metadata);
};

var PSI = /*#__PURE__*/function () {
  function PSI(ctx) {
    _classCallCheck(this, PSI);

    this.context = ctx;
    this.metadata = new Metadata();
    this.pat_table = [];
    this.pes_streams = [];
  }
  /**
   * program PID
   */


  _createClass(PSI, [{
    key: "reset",

    /**
     * 目前对于PSI的信息，持久化保留在内存中
     * 对于同一个片子，HLS规范会规定只能有一个 PMT/PAT 表
     * 所以一部片子的PSI信息应该是保持不变的，换片子后PSI信息的销毁通过 mux 重新实例化产生新的信息，不需要调用reset
     * 有些 TS 文件在HLS切片器切割的时候，没有带上PAT/PMT等表，需要相邻 TS 给定的表信息
     */
    value: function reset() {
      this.metadata = new Metadata();
      this.pat_table.splice(0, this.pat_table.length);
      this.pes_streams.splice(0, this.pes_streams.length);
    }
    /**
     * @param packet
     */

  }, {
    key: "parse",
    value: function parse(packet) {
      var self = this; // ISO13818-1: Table 2-3 – PID table

      if (PAT_PID === packet.PID) {
        /* PAT PID */
        this._parsePat(packet);
      } else if (CAT_PID === packet.PID) ;else if (TSDT_PID === packet.PID) ;else if (0x0003 <= packet.PID && packet.PID <= 0x000f) ;else if (SDT_PID === packet.PID) {
        /* Service Description Table */
        this._parseSdt(packet);
      } else if (packet.PID === self.currentProgramPID) {
        /* PMT PID */
        this._parsePmt(packet);
      } // else if (this.findTrack(packet.PID)) {
      // 	/* Reserved */
      // } else {
      // 	logger.warn(`psi unknown packet PID ${packet.PID}`);
      // }

    } // findPmtProgram(PID) {
    // 	let program = null;
    //
    // 	for (let i = 0; i < this.pat_table.length; i++) {
    // 		if (this.pat_table[i].pid === PID) {
    // 			program = this.pat_table[i].id;
    // 			break;
    // 		}
    // 	}
    //
    // 	return program;
    // }

    /**
     * @param PID
     */

  }, {
    key: "findTrack",
    value: function findTrack(PID) {
      var program = null;
      var streams = this.pes_streams;

      for (var _i = 0; _i < streams.length; _i++) {
        if (streams[_i].id === PID) {
          program = streams[_i];
          break;
        }
      }

      return program;
    }
    /**
     * Parse PAT Packet
     * @param pack
     * @private
     */

  }, {
    key: "_parsePat",
    value: function _parsePat(pack) {
      var data;

      if (pack.payload_unit_start_indicator) {
        // psi has pointer_field
        var pointer = pack.payload[0];
        data = pack.payload.subarray(pointer + 1);
      } else {
        data = pack.payload;
      }

      var pat = new PATSection(data); // https://tools.ietf.org/html/rfc8216#section-3.2
      // Transport Stream Segments MUST contain a single MPEG-2 Program;

      for (var i = 0; i < pat.pmtTable.length; i++) {
        this._add_pid_to_pmt(pat.pmtTable[i].programNum, pat.pmtTable[i].program_map_PID);
      }

      return pat;
    }
    /**
     * Associates Program Number and Program Map Table(PMT) PID
     * @param programId
     * @param pid
     */

  }, {
    key: "_add_pid_to_pmt",
    value: function _add_pid_to_pmt(programId, pid) {
      var table = this.pat_table;

      function get_pmt(id) {
        for (var _i2 = 0, item; _i2 < table.length; _i2++) {
          item = table[_i2];

          if (item.id === id) {
            return {
              idx: _i2,
              item: item
            };
          }
        }

        return null;
      }

      var p = get_pmt(programId);

      if (!p) {
        table.push({
          id: programId,
          pid: pid
        });
      }
    }
    /**
     * Parse PMT Packet
     * @param pack
     */

  }, {
    key: "_parsePmt",
    value: function _parsePmt(pack) {
      var data;

      if (pack.payload_unit_start_indicator) {
        // psi has pointer_field
        var pointer = pack.payload[0];
        data = pack.payload.subarray(pointer + 1);
      } else {
        data = pack.payload;
      }

      var pmt = new PMTSection(data);

      for (var i = 0; i < pmt.pes_table.length; i++) {
        this._add_pes_stream(pmt.pes_table[i], pmt);
      }

      return pmt;
    }
    /**
     * @param stream
     * @param pmt
     */

  }, {
    key: "_add_pes_stream",
    value: function _add_pes_stream(stream, pmt) {
      var streams = this.pes_streams;

      function get_program(id) {
        for (var _i3 = 0, item; _i3 < streams.length; _i3++) {
          item = streams[_i3];

          if (item.id === id) {
            return {
              idx: _i3,
              item: item
            };
          }
        }

        return null;
      }

      var p = get_program(stream.PID);

      if (!p) {
        streams.push({
          id: stream.PID,
          stream_type: stream.streamType,
          pcr_pid: pmt.PCR_PID,
          duration: 0,
          sps: [],
          pps: [],
          pixelRatio: [1, 1],
          timescale: 90000,
          width: 0,
          height: 0
        });
      }
    }
    /**
     * Parse SDT Packet
     * @param pack
     */

  }, {
    key: "_parseSdt",
    value: function _parseSdt(pack) {
      var data;

      if (pack.payload_unit_start_indicator) {
        // psi has pointer_field
        var pointer = pack.payload[0];
        data = pack.payload.subarray(pointer + 1);
      } else {
        data = pack.payload;
      }

      var sdt = new SDTSection(data);

      if (sdt.service_table.length > 0) {
        this.metadata.service_name = sdt.service_table[0].name;
        this.metadata.service_provider = sdt.service_table[0].provider_name;
      }

      return sdt;
    }
  }, {
    key: "currentProgramPID",
    get: function get() {
      var _pmtIds = [];

      for (var _i4 = 0; _i4 < this.pat_table.length; _i4++) {
        _pmtIds.push(this.pat_table[_i4].pid);
      }

      return _pmtIds.length > 0 ? _pmtIds[0] : -1;
    }
  }]);

  return PSI;
}();
/**
 * @file: complex.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var M2TSComplexStream = /*#__PURE__*/function (_Stream2) {
  _inherits(M2TSComplexStream, _Stream2);

  var _super9 = _createSuper(M2TSComplexStream);

  function M2TSComplexStream(ctx, psi) {
    var _this7;

    _classCallCheck(this, M2TSComplexStream);

    _this7 = _super9.call(this);
    /** @private */

    _this7.context = ctx;
    /** @private {PSI} */

    _this7.PSI = psi;
    /** @private {Object} */

    _this7.videoTrack = null;
    /** @private {Object} */

    _this7.audioTrack = null;
    /** @private {Object} */

    _this7.captionTrack = null; // pipe specified by outside.

    return _this7;
  }

  _createClass(M2TSComplexStream, [{
    key: "push",
    value: function push(data) {
      var tracks = data;

      for (var _i5 = 0, track; _i5 < tracks.length; _i5++) {
        track = tracks[_i5];

        switch (track.type) {
          case 'video':
            // data -> GOPs
            this._complexVideo(track);

            break;

          case 'audio':
            this._complexAudio(track);

            break;

          case 'caption':
            this._complexCaption(track);

            break;
        }
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      this.emit('done');

      this._clearStream();
    }
  }, {
    key: "reset",
    value: function reset() {
      this._clearStream(); // This is demux end stream, so don't emit reset.
      // this.emit('reset');

    }
  }, {
    key: "_clearStream",
    value: function _clearStream() {
      this.videoTrack = null;
      this.audioTrack = null;
      this.captionTrack = null;
    }
  }, {
    key: "_complexVideo",
    value: function _complexVideo(gops) {
      var track = this.PSI.findTrack(gops.trackId);

      if (track) {
        track.type = 'video';
        track.gops = gops;
        track.firstDTS = gops[0][0].dts;
        track.firstPTS = gops[0][0].pts; // set duration to Infinity(POSITIVE_INFINITY) can be useful for live.
        // If Infinity it will loose the ability to seek.

        track.duration = Number.POSITIVE_INFINITY;
        this.videoTrack = track;
        this.emit('data', {
          videoTrack: this.videoTrack
        });
      }
    }
  }, {
    key: "_complexAudio",
    value: function _complexAudio(frames) {
      var track = this.PSI.findTrack(frames.trackId);

      if (track) {
        track.type = 'audio';
        track.frames = frames;
        track.firstPTS = track.firstDTS = frames[0].dts; // set duration to Infinity(POSITIVE_INFINITY) can be useful for live.
        // If Infinity it will loose the ability to seek.

        track.duration = Number.POSITIVE_INFINITY;
        this.audioTrack = track;
        this.emit('data', {
          audioTrack: this.audioTrack
        });
      }
    }
  }, {
    key: "_complexCaption",
    value: function _complexCaption() {}
  }]);

  return M2TSComplexStream;
}(Stream);
/**
 * @file: platform.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @description device
 */


var os = {
  mac: false,
  iphone: false,
  android: false
};
var browser = {
  version: false,
  CHROME: false,
  SAFARI: false,
  FIREFOX: false,
  IE11: false,
  IE: false,
  EDGE: false,
  WECHAT: false
};
var nav = navigator; // let platform = nav.platform;

var ua = nav.userAgent.toLowerCase();
var match = /(edge)\/([\w.]+)/.exec(ua) || /(opr)[/]([\w.]+)/.exec(ua) || /(chrome)[ /]([\w.]+)/.exec(ua) || /(firefox)[ /]([\w.]+)/.exec(ua) || /(iemobile)[/]([\w.]+)/.exec(ua) || /(version)(applewebkit)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+).*(version)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(ua) || /(webkit)[ /]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ /]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf('trident') >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) || ua.indexOf('compatible') < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) || /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) || /(kindle)/.exec(ua) || /(silk)/.exec(ua) || /(android)/.exec(ua) || /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua) || /(cros)/.exec(ua) || /(playbook)/.exec(ua) || /(bb)/.exec(ua) || /(blackberry)/.exec(ua) || [];
var result = {
  version: undefined
};
var matched = {
  browser: match[5] || match[3] || match[1] || '',
  version: match[2] || match[4] || '0',
  versionNumber: match[4] || match[2] || '0',
  platform: platform_match[0] || ''
};

if (matched.browser) {
  result[matched.browser] = true; // result.version = matched.version;
  // result.versionNumber = parseInt(matched.versionNumber, 10);

  var versionArray = matched.versionNumber.split('.');
  result.version = {
    major: parseInt(matched.versionNumber, 10),
    string: matched.version
  };

  if (versionArray.length > 1) {
    result.version.minor = parseInt(versionArray[1], 10);
  }

  if (versionArray.length > 2) {
    result.version.build = parseInt(versionArray[2], 10);
  }
} // -------------------------------------- browser --------------------------------------


browser.version = result.version;
browser.CHROME = !!result['chrome'];
browser.SAFARI = !!result['safari'] && !browser.CHROME;
browser.FIREFOX = !!result['firefox'];
browser.IE11 = /rv:11/.test(ua);
browser.IE = !!result['msie'] || browser.IE11;
browser.EDGE = !!result['edge'];
browser.WECHAT = /(wechat)|(micromessenger)/.test(ua); // -------------------------------------- os --------------------------------------

os.mac = !!matched.platform['mac'];
os.iphone = !!matched.platform['iphone'];
os.android = !!matched.platform['android'];
var platform = {
  browser: browser,
  os: os
};
/**
 * @file: aac-config.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/*
    sampling freq,
    0: 96000 Hz
    1: 88200 Hz
    2: 64000 Hz
    3: 48000 Hz
    4: 44100 Hz
    5: 32000 Hz
    6: 24000 Hz
    7: 22050 Hz
    8: 16000 Hz
    9: 12000 Hz
    10: 11025 Hz
    11: 8000 Hz
    12: 7350 Hz
    13: Reserved
    14: Reserved
    15: frequency is written explictly
 */

var samplingRates = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];

var getAudioConfig = function getAudioConfig(audioObjectType, samplingFrequencyIndex, channelCount) {
  var adtsExtensionSamplingIndex;
  var realAudioObjectType = audioObjectType;
  var config;

  if (samplingFrequencyIndex > samplingRates.length - 1) {
    logger.error("invalid sampling index:".concat(samplingFrequencyIndex));
    return;
  } // firefox: freq less than 24kHz = AAC SBR (HE-AAC)


  if (platform.browser.FIREFOX) {
    if (samplingFrequencyIndex >= 6) {
      audioObjectType = 5;
      config = new Array(4); // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
      // there is a factor 2 between frame sample rate and output sample rate
      // multiply frequency by 2 (see table below, equivalent to substract 3)

      adtsExtensionSamplingIndex = samplingFrequencyIndex - 3;
    } else {
      audioObjectType = 2;
      config = new Array(2);
      adtsExtensionSamplingIndex = samplingFrequencyIndex;
    } // Android : always use AAC

  } else if (platform.os.android) {
    audioObjectType = 2;
    config = new Array(2);
    adtsExtensionSamplingIndex = samplingFrequencyIndex;
  } else {
    /*  for other browsers (Chrome/Vivaldi/Opera ...)
            always force audio type to be HE-AAC SBR, as some browsers do not support audio codec switch properly (like Chrome ...)
        */
    audioObjectType = 5;
    config = new Array(4); // if (manifest codec is HE-AAC or HE-AACv2) OR (manifest codec not specified AND frequency less than 24kHz)

    if (samplingFrequencyIndex >= 6) {
      // HE-AAC uses SBR (Spectral Band Replication) , high frequencies are constructed from low frequencies
      // there is a factor 2 between frame sample rate and output sample rate
      // multiply frequency by 2 (see table below, equivalent to substract 3)
      adtsExtensionSamplingIndex = samplingFrequencyIndex - 3;
    } else {
      // if (manifest codec is AAC) AND (frequency less than 24kHz AND nb channel is 1) OR (manifest codec not specified and mono audio)
      // Chrome fails to play back with low frequency AAC LC mono when initialized with HE-AAC.  This is not a problem with stereo.
      if (channelCount === 1) {
        audioObjectType = 2;
        config = new Array(2);
      }

      adtsExtensionSamplingIndex = samplingFrequencyIndex;
    }
  }
  /*
      refer to http://wiki.multimedia.cx/index.php?title=MPEG-4_Audio#Audio_Specific_Config ISO 14496-3 (AAC).pdf
          - Table 1.13 — Syntax of AudioSpecificConfig()
        Audio Profile / Audio Object Type
        0: Null
        1: AAC Main
        2: AAC LC (Low Complexity)
        3: AAC SSR (Scalable Sample Rate)
        4: AAC LTP (Long Term Prediction)
        5: SBR (Spectral Band Replication)
        6: AAC Scalable
         Channel Configurations
        These are the channel configurations:
        0: Defined in AOT Specifc Config
        1: 1 channel: front-center
        2: 2 channels: front-left, front-right
      */
  // audioObjectType = profile => profile, the MPEG-4 Audio Object Type minus 1


  config[0] = audioObjectType << 3; // samplingFrequencyIndex

  config[0] |= (samplingFrequencyIndex & 0x0e) >> 1;
  config[1] |= (samplingFrequencyIndex & 0x01) << 7; // channelConfiguration

  config[1] |= channelCount << 3;

  if (audioObjectType === 5) {
    // adtsExtensionSamplingIndex
    config[1] |= (adtsExtensionSamplingIndex & 0x0e) >> 1;
    config[2] = (adtsExtensionSamplingIndex & 0x01) << 7; // audioObjectType (force to 2, chrome is checking that object type is less than 5 ???
    //    https://chromium.googlesource.com/chromium/src.git/+/master/media/formats/mp4/aac.cc

    config[2] |= 2 << 2;
    config[3] = 0;
  }

  return {
    config: config,
    sampleRate: samplingRates[samplingFrequencyIndex],
    channelCount: channelCount,
    codec: 'mp4a.40.' + audioObjectType,
    realCodec: 'mp4a.40.' + realAudioObjectType
  };
};
/**
 * @file: created at Saturday, 9th May 2020 11:13:19 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var AAC_SAMPLING_FREQUENCIES = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
/**
 * @file: adts.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @extends EventEmitter
 */

var ADTSCodec = /*#__PURE__*/function (_EventEmitter4) {
  _inherits(ADTSCodec, _EventEmitter4);

  var _super10 = _createSuper(ADTSCodec);

  function ADTSCodec() {
    _classCallCheck(this, ADTSCodec);

    return _super10.call(this);
  }

  _createClass(ADTSCodec, [{
    key: "push",
    value: function push(data) {
      var pts = data.pts,
          dts = data.dts,
          payload = data.payload;
      var data_byte = payload;
      var i = 0,
          frameNum = 0,
          frameLength,
          protectionSkipBytes,
          frameEnd,
          sampleCount,
          adtsFrameDuration;

      while (i + 5 < data_byte.length) {
        // Look for the start of an ADTS header..
        if (data_byte[i] !== 0xff || (data_byte[i + 1] & 0xf6) !== 0xf0) {
          // If a valid header was not found,  jump one forward and attempt to
          // find a valid ADTS header starting at the next byte
          i++;
          continue;
        } // The protection skip bit tells us if we have 2 bytes of CRC data at the
        // end of the ADTS header


        protectionSkipBytes = (~data_byte[i + 1] & 0x01) * 2; // Frame length is a 13 bit integer starting 16 bits from the
        // end of the sync sequence

        frameLength = (data_byte[i + 3] & 0x03) << 11 | data_byte[i + 4] << 3 | (data_byte[i + 5] & 0xe0) >> 5;
        sampleCount = ((data_byte[i + 6] & 0x03) + 1) * 1024;
        adtsFrameDuration = sampleCount * 90000 / AAC_SAMPLING_FREQUENCIES[(data_byte[i + 2] & 0x3c) >>> 2];
        frameEnd = i + frameLength; // If we don't have enough data to actually finish this ADTS frame, return
        // and wait for more data

        if (data_byte.byteLength < frameEnd) {
          return;
        }

        var aacFrame = {
          pts: pts + frameNum * adtsFrameDuration,
          dts: dts + frameNum * adtsFrameDuration,
          sampleCount: sampleCount,
          audioObjectType: (data_byte[i + 2] >>> 6 & 0x03) + 1,
          channelCount: (data_byte[i + 2] & 1) << 2 | (data_byte[i + 3] & 0xc0) >>> 6,
          sampleRate: AAC_SAMPLING_FREQUENCIES[(data_byte[i + 2] & 0x3c) >>> 2],
          samplingFrequencyIndex: (data_byte[i + 2] & 0x3c) >>> 2,
          // assume ISO/IEC 14496-12 AudioSampleEntry default of 16
          sampleSize: 16,
          data: data_byte.subarray(i + 7 + protectionSkipBytes, frameEnd)
        }; // Otherwise, deliver the complete AAC frame

        this.emit('frame', aacFrame); // If the data_byte is empty, clear it and return

        if (data_byte.byteLength === frameEnd) {
          data_byte = undefined;
          this.emit('done');
          return;
        }

        frameNum++; // Remove the finished frame from the data_byte and start the process again

        data_byte = data_byte.subarray(frameEnd);
      }
    }
  }]);

  return ADTSCodec;
}(EventEmitter);
/**
 * @file: adts.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var ADTSStream = /*#__PURE__*/function (_Stream3) {
  _inherits(ADTSStream, _Stream3);

  var _super11 = _createSuper(ADTSStream);

  function ADTSStream(psi) {
    var _this8;

    _classCallCheck(this, ADTSStream);

    _this8 = _super11.call(this);
    _this8.PSI = psi;
    _this8.trackId = null;
    /** @private {ADTSCodec} */

    _this8.codec = new ADTSCodec();

    _this8.codec.on('frame', function (frame) {
      _this8.frames.push(frame);

      _this8.frames.byteLength += frame.data.byteLength;
      _this8.frames.trackId = _this8.trackId;
    });

    _this8._newFrames();

    return _this8;
  }

  _createClass(ADTSStream, [{
    key: "push",
    value: function push(data) {
      if (data.stream_type === 15
      /* ADTS */
      ) {
          this.trackId = data.pid;
          this.codec.push({
            dts: data.pes.DTS,
            pts: data.pes.PTS,
            payload: data.pes.data_byte
          });
        }
    }
  }, {
    key: "flush",
    value: function flush() {
      if (this.frames.length > 0) {
        var count = this.frames.length;
        var firstFrame = this.frames[0];
        var lastFrame = this.frames[count - 1];
        var lastDuration = lastFrame.sampleRate * lastFrame.sampleCount / 90000;
        this.frames.firstDTS = firstFrame.dts;
        this.frames.firstPTS = firstFrame.pts;

        if (count === 1) {
          this.frames.duration = lastDuration;
        } else {
          this.frames.duration = lastDuration + (lastFrame.pts - firstFrame.pts);
        } // To prevent information mismatch leading to next pipeline decoding errors
        // Every audio frame list assembly needs to update track meta.


        this._updateTrackMeta(firstFrame);

        this.emit('data', this.frames);
        this.reset();
        this.emit('done');
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.trackId = null;

      this._newFrames();
    }
  }, {
    key: "_newFrames",
    value: function _newFrames() {
      this.frames = []; // aac frames

      this.frames.type = 'audio';
      this.frames.byteLength = 0;
      this.frames.duration = 0;
      this.frames.firstDTS = 0;
      this.frames.firstPTS = 0;
    }
    /**
     * @param {Object} frame
     */

  }, {
    key: "_updateTrackMeta",
    value: function _updateTrackMeta(frame) {
      var track = this.PSI.findTrack(this.trackId);
      var config = getAudioConfig(frame.audioObjectType, frame.samplingFrequencyIndex, frame.channelCount);
      track.config = config.config;
      track.sampleRate = config.sampleRate;
      track.inputTimeScale = track.inputTimeScale || track.timescale;
      track.timescale = config.sampleRate;
      track.channelCount = config.channelCount;
      track.codec = config.codec;
      track.realCodec = config.realCodec;
      track.isAAC = true;
    }
  }]);

  return ADTSStream;
}(Stream);
/**
 * @file: ep3b.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * discard the emulation_prevention_three_byte
 * @param data
 */


function discardEP3B(data) {
  var length = data.byteLength,
      emulationPreventionBytesPositions = [],
      i = 1,
      newLength,
      newData = new Uint8Array(0); // Find all `Emulation Prevention Bytes`

  while (i < length - 2) {
    if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 0x03) {
      emulationPreventionBytesPositions.push(i + 2);
      i += 2;
    } else {
      i++;
    }
  } // If no Emulation Prevention Bytes were found just return the original
  // array


  if (emulationPreventionBytesPositions.length === 0) {
    return data;
  } // Create a new array to hold the NAL unit data


  newLength = length - emulationPreventionBytesPositions.length;

  try {
    newData = new Uint8Array(newLength);
  } catch (e) {
    throw "epsb alloc mem error ".concat(newLength);
  }

  var sourceIndex = 0;

  for (i = 0; i < newLength; sourceIndex++, i++) {
    if (sourceIndex === emulationPreventionBytesPositions[0]) {
      // Skip this byte
      sourceIndex++; // Remove this position index

      emulationPreventionBytesPositions.shift();
    }

    newData[i] = data[sourceIndex];
  }

  return newData;
}
/**
 * @file: exp-golumb.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * exp golumb algorithm.
 * codeNum = 2leadingZeroBits – 1 + read_bits( leadingZeroBits )
 * @see https://en.wikipedia.org/wiki/Exponential-Golomb_coding
 */

/**
 * read n bit.
 * @param buffer
 * @param bitOffset
 * @param length
 * @private
 */


function readBit(buffer) {
  var bitOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var startByte = 0;
  var startByteBitPos = 0;
  var val = 0;
  var bitStr = '',
      bitVal = 0;

  for (var _j2 = bitOffset; _j2 < bitOffset + length; _j2++) {
    startByte = Math.floor(_j2 / 8);
    startByteBitPos = 7 - _j2 % 8;
    bitVal = buffer[startByte] >> startByteBitPos & 0x01;
    bitStr += bitVal;
  }

  val = parseInt(bitStr, 2);
  return val;
}
/**
 * read 1 byte.
 * @param buffer
 * @param bitOffset
 */


function readByte(buffer) {
  var bitOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return readBit(buffer, bitOffset, 8);
}
/**
 * Unsigned Integer Exp-Golomb Coded.
 * @param buffer
 * @param bitOffset
 */


function readUEV(buffer) {
  var bitOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var leadingZeros = [];
  var bitLength = buffer.byteLength * 8;
  var readBit1 = false;
  var startByte = 0;
  var startByteBitPos = 0;
  var bitVal = 0;
  var value = ''; // 1. 计算 leadingZeros

  for (var _i6 = bitOffset; _i6 < bitLength; _i6++) {
    startByte = Math.floor(_i6 / 8);
    startByteBitPos = 7 - _i6 % 8;
    bitVal = buffer[startByte] >> startByteBitPos & 0x01;

    if (!readBit1) {
      if (bitVal === 0) {
        leadingZeros.push(0);
      } else {
        readBit1 = true;
        bitOffset = _i6;
        break;
      }
    }
  }

  var codeNumLength = leadingZeros.length + 1; // 2. 计算有效位数值

  for (var _j3 = bitOffset; _j3 < bitOffset + codeNumLength; _j3++) {
    startByte = Math.floor(_j3 / 8);
    startByteBitPos = 7 - _j3 % 8;
    bitVal = buffer[startByte] >> startByteBitPos & 0x01;
    value += bitVal;
  }

  return {
    bitLength: leadingZeros.length + codeNumLength,
    value: parseInt(value, 2) - 1
  };
}
/**
 * Signed Integer Exp-Golomb Coded.
 * @param buffer
 * @param bitOffset
 */


function readSEV(buffer) {
  var bitOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var uev = readUEV(buffer, bitOffset);
  var codeNum = uev.value;
  var signedValue = Math.pow(-1, codeNum + 1) * Math.ceil(codeNum / 2);
  return {
    bitLength: uev.bitLength,
    value: signedValue
  };
}

var ExpGolomb = {
  readUEV: readUEV,
  readSEV: readSEV,
  readBit: readBit,
  readByte: readByte
};
/**
 * @file: sps.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

var bitOffset = 0;
/**
 * 7.3.2.1.1.1 Scaling list syntax
 * @param scalingList
 * @param size
 */

function scaling_list(scalingList, size) {
  var lastScale = 8;
  var nextScale = 8;
  var delta_scale;

  for (var j = 0; j < size; j++) {
    if (nextScale != 0) {
      delta_scale = ExpGolomb.readUEV(scalingList, bitOffset);
      bitOffset += delta_scale.bitLength;
      nextScale = (lastScale + delta_scale.value + 256) % 256;
    }

    lastScale = scalingList[j];
  }
}
/**
 * decode (SPS)Sequence parameter set
 * @param payload
 */


function decodeSPS(payload) {
  bitOffset = 0;
  var profile_idc = payload[0];
  var profile_compatibility = payload[1];
  var level_idc = payload[2];
  var golombBuffer = payload.subarray(3);
  var //separate_colour_plane_flag = 0,
  // qpprime_y_zero_transform_bypass_flag = 0,
  seq_scaling_matrix_present_flag = 0;
  var lmpoclmUEV;
  var //delta_pic_order_always_zero_flag = 0,
  ofnrpSEV, ofttbfSEV, nrfipoccUEV;
  var pixelRatio = [1, 1],
      pixelScale = 1;
  var video_format;
  var fps = 0,
      num_units_in_tick,
      time_scale,
      fixed_frame_rate_flag = true; // seq_parameter_set_id

  var spsUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += spsUEV.bitLength;

  if (profile_idc == 100 || profile_idc == 110 || profile_idc == 122 || profile_idc == 244 || profile_idc == 44 || profile_idc == 83 || profile_idc == 86 || profile_idc == 118 || profile_idc == 128) {
    // chroma_format_idc
    var chromaFIUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += chromaFIUEV.bitLength;

    if (chromaFIUEV.value == 3) {
      // separate_colour_plane_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
      bitOffset += 1;
    } // bit_depth_luma_minus8


    var bitdlmUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += bitdlmUEV.bitLength; // bit_depth_chroma_minus8

    var bitdcmUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += bitdcmUEV.bitLength; // qpprime_y_zero_transform_bypass_flag
    // qpprime_y_zero_transform_bypass_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

    bitOffset += 1; // seq_scaling_matrix_present_flag

    seq_scaling_matrix_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;

    if (seq_scaling_matrix_present_flag) {
      for (var _i7 = 0; _i7 < (chromaFIUEV.value != 3 ? 8 : 12); _i7++) {
        var seq_scaling_list_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
        bitOffset += 1;

        if (seq_scaling_list_present_flag) {
          if (_i7 < 6) {
            scaling_list(golombBuffer, 16);
          } else {
            scaling_list(golombBuffer, 64);
          }
        }
      }
    }
  } // log2_max_frame_num_minus4


  var lmfnmUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += lmfnmUEV.bitLength; // pic_order_cnt_type

  var poctUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  var pic_order_cnt_type = poctUEV.value;
  bitOffset += poctUEV.bitLength;

  if (pic_order_cnt_type === 0) {
    // log2_max_pic_order_cnt_lsb_minus4
    lmpoclmUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += lmpoclmUEV.bitLength;
  } else if (pic_order_cnt_type === 1) {
    // delta_pic_order_always_zero_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1; // offset_for_non_ref_pic

    ofnrpSEV = ExpGolomb.readSEV(golombBuffer, bitOffset);
    bitOffset += ofnrpSEV.bitLength; // offset_for_top_to_bottom_field

    ofttbfSEV = ExpGolomb.readSEV(golombBuffer, bitOffset);
    bitOffset += ofttbfSEV.bitLength; // num_ref_frames_in_pic_order_cnt_cycle

    nrfipoccUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += nrfipoccUEV.bitLength; // let offset_for_ref_frames = [];

    for (var _i8 = 0, item; _i8 < nrfipoccUEV.value; _i8++) {
      item = ExpGolomb.readSEV(golombBuffer, bitOffset);
      bitOffset += item.bitLength; // offset_for_ref_frames.push(item);
    }
  } // max_num_ref_frames
  // 指定参考帧队列可能达到的最大长度，解码器依照这个句法元素的值开辟存储区，这个存储区用于存放已解码的参考帧，
  // H.264 规定最多可用 16 个参考帧，本句法元素的值最大为 16。值得注意的是这个长度以帧为单位，如果在场模式下，应该相应地扩展一倍


  var mnrfUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += mnrfUEV.bitLength; // gaps_in_frame_num_value_allowed_flag
  // let gaps_in_frame_num_value_allowed_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // pic_width_in_mbs_minus1

  var picWidthUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += picWidthUEV.bitLength; // pic_height_in_map_units_minus1

  var picHeightUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += picHeightUEV.bitLength; // frame_mbs_only_flag
  // 本句法元素等于 1 时, 表示本序列中所有图像的编码模式都是帧编码；
  // 本句法元素等于 0 时, 表示本序列中图像的编码模式可能是帧，也可能是场或帧场自适应，某个图像具体是哪一种要由其他句法元素决定。

  var frame_mbs_only_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
  bitOffset += 1;

  if (!frame_mbs_only_flag) {
    // mb_adaptive_frame_field_flag (Unused, Unnecessary to read it.)
    // ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;
  } // direct_8x8_inference_flag,  用于指明 B 片的直接 和 skip 模式下运动矢量的预测方法
  // let direct_8x8_inference_flag = ExpGolomb.readBit(golombBuffer, bitOffset);


  bitOffset += 1; // frame_cropping_flag, 用于指明解码器是否要将图像裁剪后输出，如果是的话，后面紧跟着的四个句法元素分别指出左右、上下裁剪的宽度

  var frame_cropping_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
  bitOffset += 1;
  var cropLeft = 0,
      cropRight = 0,
      cropTop = 0,
      cropBottom = 0;

  if (frame_cropping_flag) {
    var fcloUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += fcloUEV.bitLength;
    cropLeft = fcloUEV.value;
    var fcroUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += fcroUEV.bitLength;
    cropRight = fcroUEV.value;
    var fctoUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += fctoUEV.bitLength;
    cropTop = fctoUEV.value;
    var fcboUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += fcboUEV.bitLength;
    cropBottom = fcboUEV.value;
  } // vui_parameters_present_flag


  var vui_parameters_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
  bitOffset += 1;

  if (vui_parameters_present_flag) {
    // Annex E, E.1.1 VUI parameters syntax
    // VUI 用以表征视频格式等额外信息
    // aspect_ratio, video_format
    var aspect_ratio_info_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;

    if (aspect_ratio_info_present_flag) {
      var aspectRatioIdc = ExpGolomb.readByte(golombBuffer, bitOffset);
      bitOffset += 8;

      switch (aspectRatioIdc) {
        case 1:
          pixelRatio = [1, 1];
          break;

        case 2:
          pixelRatio = [12, 11];
          break;

        case 3:
          pixelRatio = [10, 11];
          break;

        case 4:
          pixelRatio = [16, 11];
          break;

        case 5:
          pixelRatio = [40, 33];
          break;

        case 6:
          pixelRatio = [24, 11];
          break;

        case 7:
          pixelRatio = [20, 11];
          break;

        case 8:
          pixelRatio = [32, 11];
          break;

        case 9:
          pixelRatio = [80, 33];
          break;

        case 10:
          pixelRatio = [18, 11];
          break;

        case 11:
          pixelRatio = [15, 11];
          break;

        case 12:
          pixelRatio = [64, 33];
          break;

        case 13:
          pixelRatio = [160, 99];
          break;

        case 14:
          pixelRatio = [4, 3];
          break;

        case 15:
          pixelRatio = [3, 2];
          break;

        case 16:
          pixelRatio = [2, 1];
          break;

        case 255:
          {
            var width0 = ExpGolomb.readByte(golombBuffer, bitOffset);
            bitOffset += 8;
            var width1 = ExpGolomb.readByte(golombBuffer, bitOffset);
            bitOffset += 8;
            var height0 = ExpGolomb.readByte(golombBuffer, bitOffset);
            bitOffset += 8;
            var height1 = ExpGolomb.readByte(golombBuffer, bitOffset);
            bitOffset += 8;
            pixelRatio = [width0 << 8 | width1, height0 << 8 | height1];
            break;
          }
      }

      if (pixelRatio) {
        pixelScale = pixelRatio[0] / pixelRatio[1];
      }

      if (aspectRatioIdc === 255) {
        // sar_width
        bitOffset += 16; // sar_height

        bitOffset += 16;
      }
    }

    var overscan_info_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;

    if (overscan_info_present_flag) {
      bitOffset += 1; // overscan_appropriate_flag;
    }

    var video_signal_type_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;

    if (video_signal_type_present_flag) {
      /*
          Table E-2 – Meaning of video_format
          video_format    Meaning
          0               Component
          1               PAL
          2               NTSC
          3               SECAM
          4               MAC
          5               Unspecified video format
          6               Reserved
          7               Reserved
       */
      video_format = ExpGolomb.readBit(golombBuffer, bitOffset, 3);
      bitOffset += 3; // switch (video_format) {
      // }
      // let video_full_range_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

      bitOffset += 1;
      var colour_description_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
      bitOffset += 1;

      if (colour_description_present_flag) {
        // colour_primaries            u(8)
        // transfer_characteristics    u(8)
        // matrix_coefficients         u(8)
        bitOffset += 24;
      }
    }

    var chroma_loc_info_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;

    if (chroma_loc_info_present_flag) {
      var chroma_sample_loc_type_top_field = ExpGolomb.readUEV(golombBuffer, bitOffset);
      bitOffset += chroma_sample_loc_type_top_field.bitLength;
      var chroma_sample_loc_type_bottom_field = ExpGolomb.readUEV(golombBuffer, bitOffset);
      bitOffset += chroma_sample_loc_type_bottom_field.bitLength;
    }

    var timing_info_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
    bitOffset += 1;

    if (timing_info_present_flag) {
      num_units_in_tick = ExpGolomb.readBit(golombBuffer, bitOffset, 32);
      bitOffset += 32;
      time_scale = ExpGolomb.readBit(golombBuffer, bitOffset, 32);
      bitOffset += 32;
      fixed_frame_rate_flag = !!ExpGolomb.readBit(golombBuffer, bitOffset);
      bitOffset += 1;
      fps = time_scale / (num_units_in_tick * 2);
    } // There is left VUI other's parameters to be decoded ...
    // For now, it is useless, so don't pass them.

  } // let FrameHeightInMbs = (2 - frame_mbs_only_flag) * (picHeightUEV.value + 1);
  // PicSizeInMapUnits = PicWidthInMbs * PicHeightInMapUnits


  return {
    payload: golombBuffer,
    profile_idc: profile_idc,
    profile_compatibility: profile_compatibility,
    level_idc: level_idc,
    sps_id: spsUEV.value,
    log2_max_frame_num_minus4: poctUEV.value,
    pic_order_cnt_type: pic_order_cnt_type,
    log2_max_pic_order_cnt_lsb_minus4: lmpoclmUEV ? lmpoclmUEV.value : 0,
    width: Math.ceil(((picWidthUEV.value + 1) * 16 - cropLeft * 2 - cropRight * 2) * pixelScale),
    height: (2 - frame_mbs_only_flag) * (picHeightUEV.value + 1) * 16 - cropTop * 2 - cropBottom * 2,
    pixelRatio: pixelRatio,
    video_format: video_format,
    fps: fps,
    fixedFPS: fixed_frame_rate_flag
  };
}
/**
 * @file: pps.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * decode (PPS)Picture parameter set
 * @param payload
 */


function decodePPS(payload) {
  var bitOffset = 0;
  var golombBuffer = payload;
  var //slice_group_change_direction_flag = 0,
  sliceGroupIds = [];
  var sgcdfUEV, picSizeUEV;
  var i = 0; // pic_parameter_set_id

  var ppsUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += ppsUEV.bitLength; // seq_parameter_set_id

  var spsUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += spsUEV.bitLength; // entropy_coding_mode_flag
  // 0: Exp-Golomb coded, see subclause 9.1 or CAVLC, see subclause 9.2
  // 1: CABAC, see subclause 9.3
  // let entropy_coding_mode_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // bottom_field_pic_order_in_frame_present_flag
  // let bottom_field_pic_order_in_frame_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // num_slice_groups_minus1,

  var sliceGroupUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += sliceGroupUEV.bitLength;

  if (sliceGroupUEV.value > 0) {
    // slice_group_map_type
    var sgmtUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
    bitOffset += sgmtUEV.bitLength;
    var iGroup = 0,
        itemUev;

    switch (sgmtUEV.value) {
      case 0:
        for (iGroup = 0; iGroup <= sgmtUEV.value; iGroup++) {
          // run_length_minus1
          itemUev = ExpGolomb.readUEV(golombBuffer, bitOffset);
          bitOffset += itemUev.bitLength;
        }

        break;

      case 2:
        for (iGroup = 0; iGroup <= sgmtUEV.value; iGroup++) {
          // top_left
          itemUev = ExpGolomb.readUEV(golombBuffer, bitOffset);
          bitOffset += itemUev.bitLength; // bottom_right

          itemUev = ExpGolomb.readUEV(golombBuffer, bitOffset);
          bitOffset += itemUev.bitLength;
        }

        break;

      case 3:
      case 4:
      case 5:
        // slice_group_change_direction_flag
        // slice_group_change_direction_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
        bitOffset += 1; // slice_group_change_rate_minus1

        sgcdfUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
        bitOffset += sgcdfUEV.bitLength;
        break;

      case 6:
        {
          // pic_size_in_map_units_minus1
          picSizeUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
          bitOffset += picSizeUEV.bitLength;
          var length = Math.ceil(Math.log2(sliceGroupUEV.value + 1));

          for (i = 0; i <= picSizeUEV.value; i++) {
            // pic_size_in_map_units_minus1
            sliceGroupIds.push(ExpGolomb.readBit(golombBuffer, bitOffset, length));
            bitOffset += length;
          }
        }
        break;
    }
  } // num_ref_idx_l0_default_active_minus1


  var nril0dcmUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += nril0dcmUEV.bitLength; // num_ref_idx_l1_default_active_minus1

  var nril1dcmUEV = ExpGolomb.readUEV(golombBuffer, bitOffset);
  bitOffset += nril1dcmUEV.bitLength; // weighted_pred_flag
  // let weighted_pred_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // weighted_bipred_idc
  // let weighted_bipred_idc = ExpGolomb.readBit(golombBuffer, bitOffset, 2);

  bitOffset += 1; // pic_init_qp_minus26

  var piqpSEV = ExpGolomb.readSEV(golombBuffer, bitOffset);
  bitOffset += piqpSEV.bitLength; // pic_init_qs_minus26

  var piqsSEV = ExpGolomb.readSEV(golombBuffer, bitOffset);
  bitOffset += piqsSEV.bitLength; // chroma_qp_index_offset

  var cqioSEV = ExpGolomb.readSEV(golombBuffer, bitOffset);
  bitOffset += cqioSEV.bitLength; // let deblocking_filter_control_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // let constrained_intra_pred_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // let redundant_pic_cnt_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);

  bitOffset += 1; // if( more_rbsp_data( ) ) {
  //     // Unused data...
  // }

  return {
    sliceGroupNum: sliceGroupUEV.value + 1
  };
}
/**
 * @file: pps.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * decode (SEI)Supplemental enhancement information
 * @param payload
 */


function decodeSEI(payload) {
  return {};
}
/**
 * @file: nalu.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * decode (AUD)Access unit delimiter
 * @param payload
 * @private
 */


function _decodeAUD(payload) {
  // var primary_pic_type_table = {
  //     0x084, // 2, 7
  //     0x0a5, // 0, 2, 5, 7
  //     0x0e7, // 0, 1, 2, 5, 6, 7
  //     0x210, // 4, 9
  //     0x318, // 3, 4, 8, 9
  //     0x294, // 2, 4, 7, 9
  //     0x3bd, // 0, 2, 3, 4, 5, 7, 8, 9
  //     0x3ff, // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  // }
  return payload[0] >> 5;
}

var NALU = /*#__PURE__*/function (_DataViewReader4) {
  _inherits(NALU, _DataViewReader4);

  var _super12 = _createSuper(NALU);

  function NALU(buffer) {
    var _this9;

    _classCallCheck(this, NALU);

    _this9 = _super12.call(this);
    _this9.forbidden_zero_bit = buffer[0] >> 7; // nalu priority.

    _this9.ref_idc = buffer[0] >> 5 & 0x03; // specifies the type of RBSP data structure. see in mux-nalu-types.js

    _this9.unit_type = buffer[0] & 0x1f;
    _this9.data = discardEP3B(buffer.subarray(1));
    _this9.rawData = buffer;

    switch (_this9.unit_type) {
      case 1
      /* NON_IDR_SLICE */
      :
        break;

      case 2
      /* DPA_SLICE */
      :
      case 3
      /* DPB_SLICE */
      :
      case 4
      /* DPC_SLICE */
      :
        // TODO decode A/B/C Partition Slice.
        break;

      case 5
      /* IDR_SLICE */
      :
        // this.data = decodeSlice(this.data).data;
        break;

      case 7
      /* SPS */
      :
        _this9.sps = decodeSPS(_this9.data);
        break;

      case 8
      /* PPS */
      :
        _this9.pps = decodePPS(_this9.data);
        break;

      case 6
      /* SEI */
      :
        _this9.sei = decodeSEI(_this9.data);
        break;

      case 9
      /* AUD */
      :
        _this9.primary_pic_type = _decodeAUD(_this9.data);
        break;
    }

    return _this9;
  }

  return NALU;
}(DataViewReader);
/**
 * @file: avc.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var AVCCodec = /*#__PURE__*/function (_EventEmitter5) {
  _inherits(AVCCodec, _EventEmitter5);

  var _super13 = _createSuper(AVCCodec);

  function AVCCodec() {
    var _this10;

    _classCallCheck(this, AVCCodec);

    _this10 = _super13.call(this);
    _this10.cachedBytes = null;
    return _this10;
  }

  _createClass(AVCCodec, [{
    key: "push",
    value: function push(data) {
      var self = this;
      var i = 0,
          naluOffset = 0,
          lastStartCodeLength = 0;
      var pts = data.pts,
          dts = data.dts,
          payload = data.payload,
          naluSizeLength = data.naluSizeLength;
      var data_byte;

      if (this.cachedBytes) {
        try {
          data_byte = new Uint8Array(this.cachedBytes.byteLength + payload.byteLength);
        } catch (e) {
          throw "h264 alloc mem error ".concat(this.cachedBytes.byteLength, "/").concat(payload.byteLength);
        }

        data_byte.set(this.cachedBytes);
        data_byte.set(payload, this.cachedBytes.byteLength);
      } else {
        data_byte = payload;
      }

      if (!naluSizeLength) {
        var _j4 = data_byte.byteLength - 1;

        var dropZerosLength = 0; // Collect tailing zeros.
        // end with 0x000000 and more...

        do {
          if (data_byte[_j4] === 0x00) {
            dropZerosLength++;
          } else {
            break;
          }

          _j4--;
        } while (_j4 > 0);

        if (dropZerosLength >= 3) {
          // drop tailing zeros.
          data_byte = data_byte.subarray(0, _j4 + 1);
        }

        do {
          var uint32 = data_byte[i] << 24 | data_byte[i + 1] << 16 | data_byte[i + 2] << 8 | data_byte[i + 3];
          var start_code = data_byte.length - i >= 4 ? uint32 : -1;
          var start_code_length = 0;
          var isLastByte = i === data_byte.length - 1;

          if (start_code >> 8 === 1) {
            /*commence with 3 bytes*/
            start_code_length = 3;
          } else if (start_code === 1) {
            /*commence with 4 bytes*/
            start_code_length = 4;
          }

          if (start_code_length === 3 || start_code_length === 4 || isLastByte) {
            var startPos = naluOffset + lastStartCodeLength;
            var isNaluEndByte = isLastByte && dropZerosLength >= 3;

            if (i > naluOffset && (!isLastByte || isNaluEndByte)) {
              var bytes = data_byte.subarray(startPos, isNaluEndByte ? i + 1 : i);
              var nalu = new NALU(bytes); // PES

              nalu.pts = pts;
              nalu.dts = dts;
              self.emit('nalu', nalu);
              naluOffset = i;
            }

            if (isLastByte) {
              if (dropZerosLength < 3) {
                this.cachedBytes = data_byte.subarray(naluOffset);
                this.cachedBytes.pts = pts;
                this.cachedBytes.dts = dts;
                this.cachedBytes.startCodeLength = lastStartCodeLength;
              } else {
                this.cachedBytes = null;
              }
            }

            if (i === naluOffset) {
              // record last start code length.
              lastStartCodeLength = start_code_length;
            }

            i += start_code_length || 1;
          } else {
            i++;
          }
        } while (i < data_byte.length);
      } else {
        var _startPos = 0,
            size = 0,
            endPos = 0;

        do {
          size = 0;

          for (var k = 0; k < naluSizeLength; k++) {
            size = size | data_byte[_startPos + k] << (naluSizeLength - k - 1) * 8;
          } // size = (data_byte[i] << 24) | (data_byte[i + 1] << 16) | (data_byte[i + 2] << 8) | data_byte[i + 3];


          _startPos += naluSizeLength;
          endPos = _startPos + size;

          if (endPos > data_byte.length) {
            endPos = data_byte.length;
          }

          var _bytes = data_byte.subarray(_startPos, endPos);

          var _nalu = new NALU(_bytes); // PES


          _nalu.pts = pts;
          _nalu.dts = dts;
          self.emit('nalu', _nalu);
          _startPos = endPos;
        } while (_startPos < data_byte.length);
      }

      if (this.cachedBytes) {
        var _nalu2 = new NALU(this.cachedBytes.subarray(this.cachedBytes.startCodeLength));

        _nalu2.pts = this.cachedBytes.pts;
        _nalu2.dts = this.cachedBytes.dts;
        this.emit('nalu', _nalu2);
        this.cachedBytes = null;
      }

      this.emit('done');
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cachedBytes = null;
    }
  }]);

  return AVCCodec;
}(EventEmitter);
/**
 * @file: avc-config.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */
// import { PPSProps } from './pps';

/**
 * AVC Config Helper
 * Accord sps/pps, generate mimeType info.
 */


var getAVCConfig = function getAVCConfig(sps
/*, pps?: PPSProps*/
) {
  var profile_idc = sps.profile_idc;
  var profile_compatibility = sps.profile_compatibility;
  var level_idc = sps.level_idc;
  var codecString = 'avc1.';
  var arr = [profile_idc, profile_compatibility, level_idc];

  for (var _j5 = 0; _j5 < arr.length; _j5++) {
    var h = arr[_j5].toString(16);

    if (h.length < 2) {
      h = '0' + h;
    }

    codecString += h;
  }

  return {
    codec: codecString
  };
};
/**
 * @file: avc.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var H264Stream = /*#__PURE__*/function (_Stream4) {
  _inherits(H264Stream, _Stream4);

  var _super14 = _createSuper(H264Stream);

  function H264Stream(psi) {
    var _this11;

    _classCallCheck(this, H264Stream);

    _this11 = _super14.call(this);
    _this11.PSI = psi;
    _this11.trackId = null;
    /** @private {Array} */

    _this11.currentFrame = []; // a group of nalu

    /** @private {AVCCodec} */

    _this11.codec = new AVCCodec();

    _this11._newGop();

    _this11._newGops();

    _this11.codec.on('nalu', function (nalu) {
      if (nalu.unit_type === 7
      /* SPS */
      ) {
          var track = _this11.PSI.findTrack(_this11.trackId);

          var config = getAVCConfig(nalu.sps); // write sps info to video track.

          track.codec = config.codec;
          track.width = nalu.sps.width;
          track.height = nalu.sps.height;
          track.profileIdc = nalu.sps.profile_idc;
          track.profileCompatibility = nalu.sps.profile_compatibility;
          track.levelIdc = nalu.sps.level_idc;
          track.pixelRatio = nalu.sps.pixelRatio;
          track.sps = [nalu.rawData];
        } else if (nalu.unit_type === 8
      /* PPS */
      ) {
          var _track = _this11.PSI.findTrack(_this11.trackId);

          _track.pps = [nalu.rawData];
        }

      _this11._grouping(nalu);
    });

    return _this11;
  }
  /**
   * Push a complete pes
   * @param data
   */


  _createClass(H264Stream, [{
    key: "push",
    value: function push(data) {
      var stream_type = data.stream_type,
          pes = data.pes,
          pid = data.pid;

      if (stream_type === 27
      /* H264 */
      || stream_type === 36
      /* HEVC */
      ) {
          this.trackId = pid;
          var rawData = {
            pts: pes.PTS,
            dts: pes.DTS,
            payload: pes.data_byte
          };
          this.codec.push(rawData);
        }
    }
  }, {
    key: "flush",
    value: function flush() {
      // Push last frame into gop.
      if (this.currentFrame.length > 0) {
        // If the last frame has valid duration, use the duration of the previous frame
        if (!this.currentFrame.duration || this.currentFrame.duration <= 0) {
          this.currentFrame.duration = this.prevFrame.duration || 0;
        }

        this._pushFrameIntoGop();

        this.currentFrame = [];
      } // Push last gop.


      if (this.gop.length > 0) {
        this._pushGopIntoGroup();
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.codec.reset();
      this.currentFrame = [];

      this._newGop();

      this._newGops();
    }
    /**
     * Group nalu into frame & gop.
     * @param currentNal
     * @private
     */

  }, {
    key: "_grouping",
    value: function _grouping(currentNal) {
      if (currentNal.unit_type === 9
      /* AUD */
      ) {
          if (this.currentFrame.length > 0) {
            this.currentFrame.duration = currentNal.dts - this.currentFrame.dts;

            if (this.gop.length > 0 && this.currentFrame.keyframe) {
              this.gop.trackId = this.trackId;

              this._pushGopIntoGroup();
            } // the gop should commence with a key frame,
            // or the frame will be dropped until finding one that contains a key frame.


            if (this.currentFrame.keyframe || this.gop.length > 0) {
              this._pushFrameIntoGop();
            } else {
              logger.warn("h264 codec drop frame");
            }
          }

          this.prevFrame = this.currentFrame; // end a frame.

          this.currentFrame = [];
          this.currentFrame.keyframe = false;
          this.currentFrame.byteLength = 0;
          this.currentFrame.naluCount = 0;
          this.currentFrame.pts = currentNal.pts;
          this.currentFrame.dts = currentNal.dts;
        } else {
        if (currentNal.unit_type === 5
        /* IDR_SLICE */
        ) {
            this.currentFrame.keyframe = true;
          }

        this.currentFrame.byteLength += currentNal.rawData.byteLength;
        this.currentFrame.naluCount++;
        this.currentFrame.push(currentNal);
      }

      this.currentFrame.duration = currentNal.dts - this.currentFrame.dts;
    }
  }, {
    key: "_newGop",
    value: function _newGop() {
      this.gop = []; // a group of idr-start-frame sequence

      this.gop.duration = 0;
      this.gop.naluCount = 0;
      this.gop.byteLength = 0;
    }
  }, {
    key: "_pushFrameIntoGop",
    value: function _pushFrameIntoGop() {
      // Gop
      this.gop.push(this.currentFrame);
      this.gop.duration += this.currentFrame.duration;
      this.gop.byteLength += this.currentFrame.byteLength;
      this.gop.naluCount += this.currentFrame.naluCount;
    }
  }, {
    key: "_newGops",
    value: function _newGops() {
      this.gops = []; // a group of gop

      this.gops.type = 'video';
      this.gops.duration = 0;
      this.gops.naluCount = 0;
      this.gops.byteLength = 0;
      this.gops.frameLength = 0;
      this.gops.firstDTS = 0;
    }
  }, {
    key: "_pushGopIntoGroup",
    value: function _pushGopIntoGroup() {
      var firstFrame = this.gop[0]; // GOPs

      this.gops.trackId = this.trackId;
      this.gops.duration += this.gop.duration;
      this.gops.byteLength += this.gop.byteLength;
      this.gops.naluCount += this.gop.naluCount;
      this.gops.frameLength += this.gop.length;
      this.gops.firstDTS = firstFrame.dts;
      this.gops.firstPTS = firstFrame.pts;
      this.gops.push(this.gop);
      this.emit('data', this.gops);

      this._newGop();

      this._newGops();

      this.emit('done');
    }
  }]);

  return H264Stream;
}(Stream);
/**
 * @file: elementary.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var ElementaryStream = /*#__PURE__*/function (_Stream5) {
  _inherits(ElementaryStream, _Stream5);

  var _super15 = _createSuper(ElementaryStream);

  function ElementaryStream(ctx, psi) {
    var _this12;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, ElementaryStream);

    _this12 = _super15.call(this);
    _this12.context = ctx;
    _this12.PSI = psi;
    _this12.options = options;
    _this12.tracks = [];
    _this12.adtsStream = new ADTSStream(psi);
    _this12.avcStream = new H264Stream(psi);
    _this12.streams = [_this12.adtsStream, _this12.avcStream];

    if (options.decodeCodec) {
      _this12.avcStream.on('data', function (data) {
        var stubTime = options.config.stubTime;

        if (isNumber(stubTime)) {
          var end = (data.firstPTS + data.duration) / 90000;

          if (end < stubTime) {
            logger.warn("drop avc gop, start/end/stubTime(".concat(data.firstPTS, "/").concat(end, "/").concat(stubTime, ")"));
            return;
          }
        }

        _this12.tracks.push(data);

        _this12.emit('data', _this12.tracks);

        _this12.tracks = [];

        _this12.adtsStream.flush();
      });

      _this12.adtsStream.on('data', function (data) {
        var stubTime = options.config.stubTime;

        if (isNumber(stubTime)) {
          var end = (data.firstPTS + data.duration) / 90000;

          if (end < stubTime) {
            logger.warn("drop adts, start/end/stubTime(".concat(data.firstPTS, "/").concat(end, "/").concat(stubTime, ")"));
            return;
          }
        }

        _this12.tracks.push(data);

        _this12.emit('data', _this12.tracks);

        _this12.tracks = [];
      });
    }

    return _this12;
  }
  /**
   * Push a complete pes
   * @param data
   */


  _createClass(ElementaryStream, [{
    key: "push",
    value: function push(data) {
      var options = this.options,
          adtsStream = this.adtsStream,
          avcStream = this.avcStream;
      var stream_type = data.stream_type;

      if (options.decodeCodec) {
        switch (stream_type) {
          case 27
          /* H264 */
          :
          case 36
          /* HEVC */
          :
            avcStream.push(data);
            break;

          case 15
          /* ADTS */
          :
            adtsStream.push(data);
            break;

          default:
            logger.warn("ts elementary encounter unknown stream type ".concat(stream_type));
        }
      } else {
        this.emit('data', data);
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      var streams = this.streams,
          tracks = this.tracks;

      for (var _i9 = 0; _i9 < this.streams.length; _i9++) {
        var stream = streams[_i9];
        stream.flush();
      }

      if (tracks.length > 0) {
        this.emit('data', tracks);
      }

      this.emit('done');
      tracks.splice(0, tracks.length);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.tracks = [];

      for (var _i10 = 0; _i10 < this.streams.length; _i10++) {
        var stream = this.streams[_i10];
        stream.reset();
      }

      this.emit('reset');
    }
  }]);

  return ElementaryStream;
}(Stream);
/**
 * @file: pes.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @extends DataViewReader
 */


var Pes = /*#__PURE__*/function (_DataViewReader5) {
  _inherits(Pes, _DataViewReader5);

  var _super16 = _createSuper(Pes);

  function Pes(buffer) {
    var _this13;

    _classCallCheck(this, Pes);

    _this13 = _super16.call(this); // The packet_start_code_prefix is a 24-bit code.

    _this13.start_code_prefix = _this13.readUint16(buffer, 0) << 8 | buffer[2]; // In Transport Streams,
    // the stream_id may be set to any valid value which correctly describes the elementary stream type.
    // the elementary stream type is specified in the PSI(Program Specific Information).

    _this13.stream_id = buffer[3]; // A 16-bit field specifying the number of bytes in the PES packet.

    _this13.packet_length = _this13.readUint16(buffer, 4);
    _this13.data_alignment_indicator = buffer[6] & 0x04;
    _this13.copyright = buffer[6] & 0x02; // PTS (presentation time stamp)
    // DTS (decoding time stamp)

    _this13.PTS_DTS_flags = buffer[7] >> 6; // ESCR (Elementary Stream Clock Reference system):
    // A time stamp in the PES Stream from which decoders of PES streams may derive timing.

    _this13.ESCR_flag = buffer[7] & 0x20;
    _this13.ES_rate_flag = buffer[7] & 0x10;
    _this13.trick_mode_flag = buffer[7] & 0x08;
    _this13.additional_copy_info_flag = buffer[7] & 0x04;
    _this13.CRC_flag = buffer[7] & 0x02;
    _this13.extension_flag = buffer[7] & 0x01;
    _this13.header_data_length = buffer[8];
    _this13.PTS = 0;

    if ((_this13.PTS_DTS_flags & 0x02) == 0x02) {
      _this13.PTS = _this13.calcTimestamp_(buffer, 9);
    } // if there is no dts, let DTS=PTS
    // See Annex D - D.0.2 Audio and Video Presentation Synchronization


    _this13.DTS = _this13.PTS;

    if ((_this13.PTS_DTS_flags & 0x01) == 0x01) {
      _this13.DTS = _this13.calcTimestamp_(buffer, 14);
    } // if (this.ESCR_flag === 1) {
    // }
    //
    // if (this.ES_rate_flag === 1) {
    // }
    //
    //
    // if (this.trick_mode_flag === 1) {
    //
    // }
    //
    // if (this.ESCR_flag === 1) {
    // }


    _this13.data_byte = buffer.subarray(9 + _this13.header_data_length); // this.isStartPes = (buffer[0] << 16 | buffer[1] << 8 | buffer[2]) & 0xffffff === 0x000001;

    return _this13;
  }
  /**
   * @param buffer
   * @param start
   */


  _createClass(Pes, [{
    key: "calcTimestamp_",
    value: function calcTimestamp_(buffer, start) {
      // PTS / DTS is 33 bit
      return (// JS Bitwise operators treat their operands as a sequence of 32 bits,
        // We cannot use bitwise operator in JS beyond 32bits
        (buffer[start] & 0x0e) * 536870912 + ( // Math.pow(2, 29) === 536870912
        buffer[start + 1] << 22) + (buffer[start + 2] >> 1 << 15) + (buffer[start + 3] << 7) + (buffer[start + 4] >> 1)
      );
    }
  }, {
    key: "valid",
    value: function valid() {
      var start_code_prefix = this.start_code_prefix;
      return start_code_prefix[0] === 0x00 && start_code_prefix[1] === 0x00 && start_code_prefix[2] === 0x01;
    }
  }]);

  return Pes;
}(DataViewReader);
/**
 * @file: pes.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var PesStream = /*#__PURE__*/function (_Stream6) {
  _inherits(PesStream, _Stream6);

  var _super17 = _createSuper(PesStream);

  function PesStream(ctx, psi) {
    var _this14;

    _classCallCheck(this, PesStream);

    _this14 = _super17.call(this);
    _this14.context = ctx;
    _this14.PSI = psi;
    _this14.PID = null;
    _this14.cache_buffer = new CacheBuffer();
    return _this14;
  }
  /**
   * @param packet
   */


  _createClass(PesStream, [{
    key: "push",
    value: function push(packet) {
      var self = this; // PES PID

      if (packet.PID > 0x00ff && packet.PID < 0x1fff) {
        if (this.PSI.currentProgramPID == -1) {
          self._pushPacket(packet);
        } else if (this.PSI.currentProgramPID !== packet.PID) {
          if (packet.payload_unit_start_indicator === 1) {
            self._assembleOnePES();
          }

          self._pushPacket(packet);
        }
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      var self = this; // 组装最后一个PES

      self._assembleOnePES();

      self.emit('done');
    }
  }, {
    key: "reset",
    value: function reset() {
      this._clearCached();

      this.emit('reset');
    }
  }, {
    key: "_clearCached",
    value: function _clearCached() {
      this.PID = null;
      this.cache_buffer.clear();
    }
  }, {
    key: "_pushPacket",
    value: function _pushPacket(p) {
      var empty = this.cache_buffer.empty; // Make first packet in cache is start unit.

      if (empty && p.payload_unit_start_indicator === 0) {
        return;
      }

      if (empty) {
        this.PID = p.PID;
      }

      this.cache_buffer.append(p.payload);
    }
  }, {
    key: "_assembleOnePES",
    value: function _assembleOnePES() {
      var self = this;

      if (!this.cache_buffer.empty) {
        var bytes;

        try {
          bytes = this.cache_buffer.toNewBytes();
        } catch (e) {
          throw "pes alloc mem err ".concat(this.cache_buffer.byteLength);
        }

        var pesData = new Pes(bytes);
        var track = this.PSI.findTrack(this.PID); // console.log(`stream_id: ${pesData.stream_id}, PTS: ${pesData.PTS}, DTS: ${pesData.DTS}`);

        if (track) {
          var data = {
            pid: track.id,
            stream_type: track.stream_type,
            pcr_pid: track.pcr_pid,
            pes: pesData
          }; // Assemble one pes packet, emit it to next stream.

          self.emit('data', data);
        }

        self._clearCached();
      }
    }
  }]);

  return PesStream;
}(Stream);
/**
 * @file: packet.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var SYNC_BYTE = 0x47; // The sync_byte is a fixed 8-bit field whose value is '0100 0111' (0x47).

/**
 * @extends DataViewReader
 */

var Packet = /*#__PURE__*/function (_DataViewReader6) {
  _inherits(Packet, _DataViewReader6);

  var _super18 = _createSuper(Packet);

  /**
   * @param buffer
   */
  function Packet(buffer) {
    var _this15;

    _classCallCheck(this, Packet);

    _this15 = _super18.call(this);
    _this15.sync_byte = buffer[0];
    _this15.transport_error_indicator = buffer[1] >> 7; // Indicating transport stream packets carry PES packets or PSI data
    // PES: 1 -> commence with the first byte of a PES packet,  0 -> no PES packet shall start in this packet.
    // PSI: 1 -> carries the first byte of a PSI section, 0 -> no pointer_field in the payload.

    _this15.payload_unit_start_indicator = buffer[1] >> 6 & 1;
    _this15.transport_priority = buffer[1] >>> 5 & 1; // The PID(Packet ID) is a 13-bit field, indicating the type of the data stored in the packet payload.
    // NOTE – The transport packets with PID values 0x0000, 0x0001, and 0x0010-0x1FFE are allowed to carry a PCR.
    // ISO/IEC 13818-1 : 2000 (E)
    // Value                  Description
    // 0x0000                 Program Association Table
    // 0x0001                 Conditional Access Table
    // 0x0002                 Transport Stream Description Table
    // 0x0003-0x000F          Reserved
    // 0x0010 ... 0x1FFE      May be assigned as network_PID, Program_map_PID, elementary_PID, or for other purposes
    // https://www.dvb.org/resources/public/standards/a38_dvb-si_specification.pdf
    // 0x0040                 Network_information_section-actual_network
    // 0x0041                 Network_information_section-other_network
    // 0x0042                 Service_description_section-actual_transport_stream
    // 0x0043                 TO 0x45 Reserved for future use
    // 0x0046                 Service_description_section-other_transport_stream
    // 0x0047                 TO 0x49 Reserved for future use
    // 0x004A                 Bouquet_association_section
    // 0x004B                 TO 0x4D Reserved for future use
    // 0x004E                 Event_information_section-actual_transport_stream,P/F
    // 0x004F                 Event_information_section-other_transport_stream,P/F
    // 0x0050                 TO 0x5F Event_information_section-actual_transport_stream,schedule
    // 0x0060                 TO 0x6F Event_information_section-other_transport_stream,schedule
    // 0x0070                 Time_data_section
    // 0x0071                 Running_status_section
    // 0x0072                 Stuffing_section
    // 0x0073                 Time_offset_section
    // 0x0074                 TO 0x007D Reserved for future use
    // 0x007E                 Discontinuity_information_section
    // 0x007F                 Selection_information_section
    // 0x0080                 TO 0x00FE User defined
    // 0x00FF                 Reserved
    // 0x1FFF                 Null packet

    _this15.PID = _this15.readUint16(buffer, 1) & 0x1fff; // transport_scrambling_control

    _this15.tsc = buffer[3] >> 6; // adaptation_field_control
    // Value  Description
    // 00     Reserved for future use by ISO/IEC
    // 01     No adaptation_field, payload only
    // 10     Adaptation_field only, no payload
    // 11     Adaptation_field followed by payload

    _this15.afc = buffer[3] >> 4 & 3; // '1' indicates that the discontinuity state is true for the current Transport Stream packet.
    // continuity_counter

    _this15.continuity_counter = buffer[3] & 0xf; // self defines.

    _this15.has_payload = _this15.afc & 1;
    _this15.has_adaptation = _this15.afc & 2; // this.is_discontinuity = this.has_adaptation && buffer[4] != 0 /* with length > 0 */ && buffer[5] & 0x80;

    /* and discontinuity indicated */

    if (_this15.has_payload) {
      if (_this15.has_adaptation) {
        var adaptation_field_length = buffer[4];
        _this15.payload = buffer.subarray(5 + adaptation_field_length);
      } else {
        _this15.payload = buffer.subarray(4);
      }
    }

    return _this15;
  }

  _createClass(Packet, [{
    key: "valid",
    value: function valid() {
      var val = this.sync_byte === SYNC_BYTE && this.has_payload === 1;
      return val;
    }
  }]);

  return Packet;
}(DataViewReader);
/**
 * @file: demux.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var CHUNK_BYTE_LENGTH = 188; // Transport Stream chunks shall be 188 bytes long.

var TSDemux = /*#__PURE__*/function (_DemuxFacade) {
  _inherits(TSDemux, _DemuxFacade);

  var _super19 = _createSuper(TSDemux);

  function TSDemux() {
    var _thisSuper, _this16;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, TSDemux);

    _this16 = _super19.call(this, options);
    _this16.psi_ = new PSI(_this16.ctx_);
    _this16.pesStream_ = new PesStream(_this16.ctx_, _this16.psi_);
    _this16.elementaryStream_ = new ElementaryStream(_this16.ctx_, _this16.psi_, options);
    _this16.complexStream_ = new M2TSComplexStream(_this16.ctx_, _this16.psi_); // Compose pipeline

    _this16.pipe(_this16.pesStream_);

    _this16.pesStream_.pipe(_this16.elementaryStream_);

    _this16.elementaryStream_.pipe(_this16.complexStream_);

    _get((_thisSuper = _assertThisInitialized(_this16), _getPrototypeOf(TSDemux.prototype)), "listenEndStream_", _thisSuper).call(_thisSuper);

    return _this16;
  }
  /**
   * This is end pipeline stream
   */


  _createClass(TSDemux, [{
    key: "push",

    /**
     * TS push support streaming incomplete data push.
     * @param buffer
     * @param conf
     * @param conf.done - If you need the done event, this boolean needs to be set
     */
    value: function push(buffer, conf) {
      var done = conf.done;
      var options_ = this.options_,
          ctx_ = this.ctx_,
          cache_buffer_ = this.cache_buffer_,
          psi_ = this.psi_;

      var newBuf = _get(_getPrototypeOf(TSDemux.prototype), "constraintPushData_", this).call(this, buffer);

      var cacheByteLength = cache_buffer_.byteLength;
      var byteOffset = null;
      options_.config = conf;
      logger.log("hls demux received ".concat(newBuf.byteLength, " bytes, cache ").concat(cacheByteLength, " bytes. ").concat(done ? 'chunk done' : ''));
      cache_buffer_.append(newBuf);

      while (cache_buffer_.byteLength >= CHUNK_BYTE_LENGTH) {
        var chunk = cache_buffer_.cut(CHUNK_BYTE_LENGTH); // The pushed buffer may be so small that can't cut a ts chunk.

        if (chunk) {
          var packet = new Packet(chunk);

          if (packet.valid()) {
            psi_.parse(packet);
            this.emit('data', packet);
          } else {
            var errMsg = "Encounter invalid ts packet, packet_length(".concat(chunk.length, "), cache_length(").concat(this.cache_buffer_.byteLength, "), has_payload(").concat(packet.has_payload, "), data(").concat(chunk, ")");
            logger.error(errMsg);
            this.reset();
            ctx_.emit('error', muxErrorCode.TS_SYNC_BYTE, errMsg, {
              startByte: byteOffset,
              endByte: byteOffset + chunk.byteLength
            });
            break;
          }

          byteOffset += chunk.byteLength;
        }
      }

      if (cache_buffer_.empty && done) {
        // logger.log('mux packet done!');
        this.emit('done');
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.cache_buffer_.clear();
      this.emit('reset');
    }
  }, {
    key: "endStream",
    get: function get() {
      var stream = this.elementaryStream_;

      if (this.options_.decodeCodec) {
        stream = this.complexStream_;
      }

      return stream;
    }
  }]);

  return TSDemux;
}(DemuxFacade);
/**
 * @file: mp4-inspector.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/* eslint-disable */


var
/**
 * Returns the string representation of an ASCII encoded four byte buffer.
 * @param buffer - a four-byte buffer to translate
 * @return the corresponding string
 */
parseType = function parseType(buffer) {
  var result = '';
  result += String.fromCharCode(buffer[0]);
  result += String.fromCharCode(buffer[1]);
  result += String.fromCharCode(buffer[2]);
  result += String.fromCharCode(buffer[3]);
  return result;
},
    parseMp4Date = function parseMp4Date(seconds) {
  return new Date(seconds * 1000 - 2082844800000);
},
    parseSampleFlags = function parseSampleFlags(flags) {
  return {
    isLeading: (flags[0] & 0x0c) >>> 2,
    dependsOn: flags[0] & 0x03,
    isDependedOn: (flags[1] & 0xc0) >>> 6,
    hasRedundancy: (flags[1] & 0x30) >>> 4,
    paddingValue: (flags[1] & 0x0e) >>> 1,
    isNonSyncSample: flags[1] & 0x01,
    degradationPriority: flags[2] << 8 | flags[3]
  };
},
    // registry of handlers for individual mp4 box types
parse = {
  // codingname, not a first-class box type. stsd entries share the
  // same format as real boxes so the parsing infrastructure can be
  // shared
  avc1: function avc1(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    return {
      dataReferenceIndex: view.getUint16(6),
      width: view.getUint16(24),
      height: view.getUint16(26),
      horizresolution: view.getUint16(28) + view.getUint16(30) / 16,
      vertresolution: view.getUint16(32) + view.getUint16(34) / 16,
      frameCount: view.getUint16(40),
      depth: view.getUint16(74),
      config: mp4toJSON(data.subarray(78, data.byteLength))
    };
  },
  avcC: function avcC(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      configurationVersion: data[0],
      avcProfileIndication: data[1],
      profileCompatibility: data[2],
      avcLevelIndication: data[3],
      lengthSizeMinusOne: data[4] & 0x03,
      sps: [],
      pps: []
    },
        numOfSequenceParameterSets = data[5] & 0x1f,
        numOfPictureParameterSets,
        nalSize,
        offset,
        i; // iterate past any SPSs

    offset = 6;

    for (i = 0; i < numOfSequenceParameterSets; i++) {
      nalSize = view.getUint16(offset);
      offset += 2;
      result.sps.push(new Uint8Array(data.subarray(offset, offset + nalSize)));
      offset += nalSize;
    } // iterate past any PPSs


    numOfPictureParameterSets = data[offset];
    offset++;

    for (i = 0; i < numOfPictureParameterSets; i++) {
      nalSize = view.getUint16(offset);
      offset += 2;
      result.pps.push(new Uint8Array(data.subarray(offset, offset + nalSize)));
      offset += nalSize;
    }

    return result;
  },
  btrt: function btrt(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    return {
      bufferSizeDB: view.getUint32(0),
      maxBitrate: view.getUint32(4),
      avgBitrate: view.getUint32(8)
    };
  },
  esds: function esds(data) {
    new DataView(data.buffer, data.byteOffset, data.byteLength);
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      esId: data[6] << 8 | data[7],
      streamPriority: data[8] & 0x1f,
      decoderConfig: {
        objectProfileIndication: data[11],
        streamType: data[12] >>> 2 & 0x3f,
        bufferSize: data[13] << 16 | data[14] << 8 | data[15],
        maxBitrate: data[16] << 24 | data[17] << 16 | data[18] << 8 | data[19],
        avgBitrate: data[20] << 24 | data[21] << 16 | data[22] << 8 | data[23],
        decoderConfigDescriptor: {
          tag: data[24],
          length: data[25],
          // audioObjectType: (data[26] >>> 3) & 0x1f,
          // samplingFrequencyIndex: ((data[26] & 0x07) << 1) |
          //   ((data[27] >>> 7) & 0x01),
          // channelConfiguration: (data[27] >>> 3) & 0x0f,
          // FIXME
          audioObjectType: data[35] >>> 3 & 0x1f,
          samplingFrequencyIndex: (data[35] & 0x07) << 8 + (data[36] & 0x80) >> 7,
          channelConfiguration: (data[36] & 0x78) >> 3
        }
      }
    };
  },
  ftyp: function ftyp(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      majorBrand: parseType(data.subarray(0, 4)),
      minorVersion: view.getUint32(4),
      compatibleBrands: []
    },
        i = 8;

    while (i < data.byteLength) {
      result.compatibleBrands.push(parseType(data.subarray(i, i + 4)));
      i += 4;
    }

    return result;
  },
  dinf: function dinf(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  dref: function dref(data) {
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      dataReferences: mp4toJSON(data.subarray(8))
    };
  },
  hdlr: function hdlr(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      version: view.getUint8(0),
      flags: new Uint8Array(data.subarray(1, 4)),
      handlerType: parseType(data.subarray(8, 12)),
      name: ''
    },
        i = 8; // parse out the name field

    for (i = 24; i < data.byteLength; i++) {
      if (data[i] === 0x00) {
        // the name field is null-terminated
        i++;
        break;
      }

      result.name += String.fromCharCode(data[i]);
    } // decode UTF-8 to javascript's internal representation
    // see http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html


    result.name = decodeURIComponent(decodeURIComponent(result.name));
    return result;
  },
  // mdat: function(data) {
  // 	return {
  // 		byteLength: data.byteLength,
  // 		nals: nalParse(data),
  // 		realData: data
  // 	};
  // },
  mdhd: function mdhd(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        i = 4,
        language,
        result = {
      version: view.getUint8(0),
      flags: new Uint8Array(data.subarray(1, 4)),
      language: '',
      creationTime: new Date(),
      modificationTime: new Date(),
      timescale: 0,
      duration: 0
    };

    if (result.version === 1) {
      i += 4;
      result.creationTime = parseMp4Date(view.getUint32(i)); // truncating top 4 bytes

      i += 8;
      result.modificationTime = parseMp4Date(view.getUint32(i)); // truncating top 4 bytes

      i += 4;
      result.timescale = view.getUint32(i);
      i += 8;
      result.duration = view.getUint32(i); // truncating top 4 bytes
    } else {
      result.creationTime = parseMp4Date(view.getUint32(i));
      i += 4;
      result.modificationTime = parseMp4Date(view.getUint32(i));
      i += 4;
      result.timescale = view.getUint32(i);
      i += 4;
      result.duration = view.getUint32(i);
    }

    i += 4; // language is stored as an ISO-639-2/T code in an array of three 5-bit fields
    // each field is the packed difference between its ASCII value and 0x60

    language = view.getUint16(i);
    result.language += String.fromCharCode((language >> 10) + 0x60);
    result.language += String.fromCharCode(((language & 0x03c0) >> 5) + 0x60);
    result.language += String.fromCharCode((language & 0x1f) + 0x60);
    return result;
  },
  mdia: function mdia(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  mfhd: function mfhd(data) {
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      sequenceNumber: data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7]
    };
  },
  minf: function minf(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  // codingname, not a first-class box type. stsd entries share the
  // same format as real boxes so the parsing infrastructure can be
  // shared
  mp4a: function mp4a(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      // 6 bytes reserved
      dataReferenceIndex: view.getUint16(6),
      // 4 + 4 bytes reserved
      channelcount: view.getUint16(16),
      samplesize: view.getUint16(18),
      // 2 bytes pre_defined
      // 2 bytes reserved
      samplerate: view.getUint16(24) + view.getUint16(26) / 65536,
      streamDescriptor: undefined
    }; // if there are more bytes to process, assume this is an ISO/IEC
    // 14496-14 MP4AudioSampleEntry and parse the ESDBox

    if (data.byteLength > 28) {
      result.streamDescriptor = mp4toJSON(data.subarray(28))[0];
    }

    return result;
  },
  moof: function moof(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  moov: function moov(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  mvex: function mvex(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  mvhd: function mvhd(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        i = 4,
        result = {
      version: view.getUint8(0),
      flags: new Uint8Array(data.subarray(1, 4)),
      creationTime: new Date(),
      modificationTime: new Date(),
      timescale: 0,
      duration: 0,
      rate: 0,
      volume: 0,
      matrix: new Uint32Array(0),
      nextTrackId: 0
    };

    if (result.version === 1) {
      i += 4;
      result.creationTime = parseMp4Date(view.getUint32(i)); // truncating top 4 bytes

      i += 8;
      result.modificationTime = parseMp4Date(view.getUint32(i)); // truncating top 4 bytes

      i += 4;
      result.timescale = view.getUint32(i);
      i += 8;
      result.duration = view.getUint32(i); // truncating top 4 bytes
    } else {
      result.creationTime = parseMp4Date(view.getUint32(i));
      i += 4;
      result.modificationTime = parseMp4Date(view.getUint32(i));
      i += 4;
      result.timescale = view.getUint32(i);
      i += 4;
      result.duration = view.getUint32(i);
    }

    i += 4; // convert fixed-point, base 16 back to a number

    result.rate = view.getUint16(i) + view.getUint16(i + 2) / 16;
    i += 4;
    result.volume = view.getUint8(i) + view.getUint8(i + 1) / 8;
    i += 2;
    i += 2;
    i += 2 * 4;
    result.matrix = new Uint32Array(data.subarray(i, i + 9 * 4));
    i += 9 * 4;
    i += 6 * 4;
    result.nextTrackId = view.getUint32(i);
    return result;
  },
  pdin: function pdin(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    return {
      version: view.getUint8(0),
      flags: new Uint8Array(data.subarray(1, 4)),
      rate: view.getUint32(4),
      initialDelay: view.getUint32(8)
    };
  },
  sdtp: function sdtp(data) {
    var result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      samples: []
    },
        i;

    for (i = 4; i < data.byteLength; i++) {
      result.samples.push({
        dependsOn: (data[i] & 0x30) >> 4,
        isDependedOn: (data[i] & 0x0c) >> 2,
        hasRedundancy: data[i] & 0x03
      });
    }

    return result;
  },
  sidx: function sidx(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      references: [],
      referenceId: view.getUint32(4),
      timescale: view.getUint32(8),
      earliestPresentationTime: view.getUint32(12),
      firstOffset: view.getUint32(16)
    },
        referenceCount = view.getUint16(22),
        i;

    for (i = 24; referenceCount; i += 12, referenceCount--) {
      result.references.push({
        referenceType: (data[i] & 0x80) >>> 7,
        referencedSize: view.getUint32(i) & 0x7fffffff,
        subsegmentDuration: view.getUint32(i + 4),
        startsWithSap: !!(data[i + 8] & 0x80),
        sapType: (data[i + 8] & 0x70) >>> 4,
        sapDeltaTime: view.getUint32(i + 8) & 0x0fffffff
      });
    }

    return result;
  },
  stbl: function stbl(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  stco: function stco(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    var entryCount = view.getUint32(4);
    var result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      entryCount: entryCount,
      chunkOffsets: []
    };

    for (var _i11 = 8; entryCount; _i11 += 4, entryCount--) {
      result.chunkOffsets.push(view.getUint32(_i11));
    }

    return result;
  },
  stsc: function stsc(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        entryCount = view.getUint32(4),
        result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      sampleToChunks: []
    },
        i;

    for (i = 8; entryCount; i += 12, entryCount--) {
      result.sampleToChunks.push({
        firstChunk: view.getUint32(i),
        samplesPerChunk: view.getUint32(i + 4),
        sampleDescriptionIndex: view.getUint32(i + 8)
      });
    }

    return result;
  },
  stsd: function stsd(data) {
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      boxes: mp4toJSON(data.subarray(8))
    };
  },
  stsz: function stsz(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      sampleSize: view.getUint32(4),
      entries: []
    },
        i;

    for (i = 12; i < data.byteLength; i += 4) {
      result.entries.push(view.getUint32(i));
    }

    return result;
  },
  stts: function stts(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      timeToSamples: []
    },
        entryCount = view.getUint32(4),
        i;

    for (i = 8; entryCount; i += 8, entryCount--) {
      result.timeToSamples.push({
        sampleCount: view.getUint32(i),
        sampleDelta: view.getUint32(i + 4)
      });
    }

    return result;
  },
  styp: function styp(data) {
    return parse.ftyp(data);
  },
  tfdt: function tfdt(data) {
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      baseMediaDecodeTime: data[4] << 24 | data[5] << 16 | data[6] << 8 | data[7]
    };
  },
  tfhd: function tfhd(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      trackId: view.getUint32(4)
    },
        baseDataOffsetPresent = result.flags[2] & 0x01,
        sampleDescriptionIndexPresent = result.flags[2] & 0x02,
        defaultSampleDurationPresent = result.flags[2] & 0x08,
        defaultSampleSizePresent = result.flags[2] & 0x10,
        defaultSampleFlagsPresent = result.flags[2] & 0x20,
        i;
    i = 8;

    if (baseDataOffsetPresent) {
      i += 4; // truncate top 4 bytes

      result.baseDataOffset = view.getUint32(12);
      i += 4;
    }

    if (sampleDescriptionIndexPresent) {
      result.sampleDescriptionIndex = view.getUint32(i);
      i += 4;
    }

    if (defaultSampleDurationPresent) {
      result.defaultSampleDuration = view.getUint32(i);
      i += 4;
    }

    if (defaultSampleSizePresent) {
      result.defaultSampleSize = view.getUint32(i);
      i += 4;
    }

    if (defaultSampleFlagsPresent) {
      result.defaultSampleFlags = view.getUint32(i);
    }

    return result;
  },
  tkhd: function tkhd(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        i = 4,
        result = {
      version: view.getUint8(0),
      flags: new Uint8Array(data.subarray(1, 4)),
      creationTime: new Date(),
      modificationTime: new Date(),
      trackId: 0,
      duration: 0,
      layer: 0,
      alternateGroup: 0,
      volume: 0,
      width: 0,
      height: 0,
      matrix: new Uint32Array(0)
    };

    if (result.version === 1) {
      i += 4;
      result.creationTime = parseMp4Date(view.getUint32(i)); // truncating top 4 bytes

      i += 8;
      result.modificationTime = parseMp4Date(view.getUint32(i)); // truncating top 4 bytes

      i += 4;
      result.trackId = view.getUint32(i);
      i += 4;
      i += 8;
      result.duration = view.getUint32(i); // truncating top 4 bytes
    } else {
      result.creationTime = parseMp4Date(view.getUint32(i));
      i += 4;
      result.modificationTime = parseMp4Date(view.getUint32(i));
      i += 4;
      result.trackId = view.getUint32(i);
      i += 4;
      i += 4;
      result.duration = view.getUint32(i);
    }

    i += 4;
    i += 2 * 4;
    result.layer = view.getUint16(i);
    i += 2;
    result.alternateGroup = view.getUint16(i);
    i += 2; // convert fixed-point, base 16 back to a number

    result.volume = view.getUint8(i) + view.getUint8(i + 1) / 8;
    i += 2;
    i += 2;
    result.matrix = new Uint32Array(data.subarray(i, i + 9 * 4));
    i += 9 * 4;
    result.width = view.getUint16(i) + view.getUint16(i + 2) / 16;
    i += 4;
    result.height = view.getUint16(i) + view.getUint16(i + 2) / 16;
    return result;
  },
  traf: function traf(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  trak: function trak(data) {
    return {
      boxes: mp4toJSON(data)
    };
  },
  trex: function trex(data) {
    var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      trackId: view.getUint32(4),
      defaultSampleDescriptionIndex: view.getUint32(8),
      defaultSampleDuration: view.getUint32(12),
      defaultSampleSize: view.getUint32(16),
      sampleDependsOn: data[20] & 0x03,
      sampleIsDependedOn: (data[21] & 0xc0) >> 6,
      sampleHasRedundancy: (data[21] & 0x30) >> 4,
      samplePaddingValue: (data[21] & 0x0e) >> 1,
      sampleIsDifferenceSample: !!(data[21] & 0x01),
      sampleDegradationPriority: view.getUint16(22)
    };
  },
  trun: function trun(data) {
    var result = {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)),
      samples: []
    },
        view = new DataView(data.buffer, data.byteOffset, data.byteLength),
        dataOffsetPresent = result.flags[2] & 0x01,
        firstSampleFlagsPresent = result.flags[2] & 0x04,
        sampleDurationPresent = result.flags[1] & 0x01,
        sampleSizePresent = result.flags[1] & 0x02,
        sampleFlagsPresent = result.flags[1] & 0x04,
        sampleCompositionTimeOffsetPresent = result.flags[1] & 0x08,
        sampleCount = view.getUint32(4),
        offset = 8,
        sample;

    if (dataOffsetPresent) {
      result.dataOffset = view.getUint32(offset);
      offset += 4;
    }

    if (firstSampleFlagsPresent && sampleCount) {
      sample = {
        flags: parseSampleFlags(data.subarray(offset, offset + 4))
      };
      offset += 4;

      if (sampleDurationPresent) {
        sample.duration = view.getUint32(offset);
        offset += 4;
      }

      if (sampleSizePresent) {
        sample.size = view.getUint32(offset);
        offset += 4;
      }

      if (sampleCompositionTimeOffsetPresent) {
        sample.compositionTimeOffset = view.getUint32(offset);
        offset += 4;
      }

      result.samples.push(sample);
      sampleCount--;
    }

    while (sampleCount--) {
      sample = {};

      if (sampleDurationPresent) {
        sample.duration = view.getUint32(offset);
        offset += 4;
      }

      if (sampleSizePresent) {
        sample.size = view.getUint32(offset);
        offset += 4;
      }

      if (sampleFlagsPresent) {
        sample.flags = parseSampleFlags(data.subarray(offset, offset + 4));
        offset += 4;
      }

      if (sampleCompositionTimeOffsetPresent) {
        sample.compositionTimeOffset = view.getUint32(offset);
        offset += 4;
      }

      result.samples.push(sample);
    }

    return result;
  },
  'url ': function url(data) {
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4))
    };
  },
  vmhd: function vmhd(data) {
    //let view = new DataView(data.buffer, data.byteOffset, data.byteLength);
    return {
      version: data[0],
      flags: new Uint8Array(data.subarray(1, 4)) //graphicsmode: view.getUint16(4),
      //opcolor: new Uint16Array([view.getUint16(6),
      //                          view.getUint16(8),
      //                          view.getUint16(10)])

    };
  }
};
/**
 * Return a javascript array of box objects parsed from an ISO base media file.
 * @param data - the binary data of the media to be inspected
 * @return a javascript array of potentially nested box objects
 */


var mp4toJSON = function mp4toJSON(data) {
  var i = 0,
      result = [],
      view = new DataView(data.buffer, data.byteOffset, data.byteLength),
      size,
      type,
      end,
      box;

  while (i < data.byteLength) {
    // parse box data
    size = view.getUint32(i), type = parseType(data.subarray(i + 4, i + 8));
    end = size > 1 ? i + size : data.byteLength; // parse type-specific data

    box = (parse[type] || function (data) {
      return {
        data: data
      };
    })(data.subarray(i + 8, end));

    box.size = size;
    box.type = type; // store this box and move to the next

    result.push(box);
    i = end;
  }

  return result;
};

var MP4Inspect = {
  mp4toJSON: mp4toJSON
};
/**
 * @file: demux.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * mp4.
 */

var MP4Demux = /*#__PURE__*/function (_DemuxFacade2) {
  _inherits(MP4Demux, _DemuxFacade2);

  var _super20 = _createSuper(MP4Demux);

  function MP4Demux() {
    var _thisSuper2, _this17;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, MP4Demux);

    _this17 = _super20.call(this, options);

    _get((_thisSuper2 = _assertThisInitialized(_this17), _getPrototypeOf(MP4Demux.prototype)), "listenEndStream_", _thisSuper2).call(_thisSuper2);

    return _this17;
  }
  /**
   * This is end pipeline stream
   */


  _createClass(MP4Demux, [{
    key: "push",

    /**
     * The MP4 data pushed into stream should be complete data.
     * @param buffer
     */
    value: function push(buffer) {
      var newBuf = _get(_getPrototypeOf(MP4Demux.prototype), "constraintPushData_", this).call(this, buffer);

      logger.log("mp4 demux received ".concat(newBuf.byteLength, " bytes"));
      var result = MP4Inspect.mp4toJSON(newBuf);
      this.emit('data', result);
    }
  }, {
    key: "endStream",
    get: function get() {
      return this;
    }
  }]);

  return MP4Demux;
}(DemuxFacade);
/**
 * @file: created at Wednesday, 13th May 2020 4:15:40 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var HEAD_LEN = 9;
var MIN_BODY_LEN = 4;
var PREVIOUS_TAG_SIZE = 4;
var MIN_TAG_LEN = PREVIOUS_TAG_SIZE;
var FLVParseStage;

(function (FLVParseStage) {
  FLVParseStage[FLVParseStage["HEAD"] = 0] = "HEAD";
  FLVParseStage[FLVParseStage["BODY"] = 1] = "BODY";
})(FLVParseStage || (FLVParseStage = {}));
/**
 * @file: created at Saturday, 23rd May 2020 11:46:18 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var FlvTagTypes;

(function (FlvTagTypes) {
  FlvTagTypes[FlvTagTypes["SCRIPT_DATA"] = 18] = "SCRIPT_DATA";
  FlvTagTypes[FlvTagTypes["VIDEO"] = 9] = "VIDEO";
  FlvTagTypes[FlvTagTypes["AUDIO"] = 8] = "AUDIO";
})(FlvTagTypes || (FlvTagTypes = {}));

var FlvTagTypes$1 = FlvTagTypes;
/**
 * @file: tag.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @extends DataViewReader
 */

var FlvTag = /*#__PURE__*/function (_DataViewReader7) {
  _inherits(FlvTag, _DataViewReader7);

  var _super21 = _createSuper(FlvTag);

  /**
   * @param buffer
   */
  function FlvTag(buffer) {
    var _this18;

    _classCallCheck(this, FlvTag);

    _this18 = _super21.call(this);
    _this18.tagType = buffer[0];
    _this18.dataSize = _this18.readUint32(buffer, 0) & 0x00ffffff;
    var timestamp = _this18.readUint32(buffer, 3) & 0x00ffffff; // the lower 24 bits of the timestamp

    var timestampExtended = buffer[7]; // This field represents the upper 8 bits of timestamp

    _this18.timestamp = (timestampExtended << 24) + timestamp;
    _this18.streamId = _this18.readUint32(buffer, 8) & 0x00ffffff; // Always 0

    _this18.payload = buffer.subarray(11, 11 + _this18.dataSize);
    _this18.previousTagSize = _this18.readUint32(buffer, 11 + _this18.dataSize);
    _this18.totalSize = _this18.previousTagSize + 4;
    return _this18;
  }

  _createClass(FlvTag, [{
    key: "valid",
    value: function valid() {
      var tagType = this.tagType,
          dataSize = this.dataSize,
          previousTagSize = this.previousTagSize;
      return previousTagSize === 11 + dataSize && (tagType === FlvTagTypes$1.SCRIPT_DATA || tagType === FlvTagTypes$1.VIDEO || tagType === FlvTagTypes$1.AUDIO);
    }
  }]);

  return FlvTag;
}(DataViewReader);
/**
 * @file: elementary.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var BodyStream = /*#__PURE__*/function (_Stream7) {
  _inherits(BodyStream, _Stream7);

  var _super22 = _createSuper(BodyStream);

  function BodyStream(ctx, flvCtx) {
    var _this19;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, BodyStream);

    _this19 = _super22.call(this);
    _this19.ctx_ = ctx;
    _this19.flv_ = flvCtx;
    _this19.options_ = options;
    _this19.cache_buffer_ = new CacheBuffer();
    return _this19;
  }
  /**
   * Push a body buffer
   */


  _createClass(BodyStream, [{
    key: "push",
    value: function push(bodyBuffer) {
      var ctx_ = this.ctx_,
          flv_ = this.flv_,
          cache_buffer_ = this.cache_buffer_;
      var buffer;
      cache_buffer_.append(bodyBuffer);

      if (flv_.pos === HEAD_LEN) {
        if (cache_buffer_.byteLength > PREVIOUS_TAG_SIZE + MIN_TAG_LEN) {
          // drop PreviousTagSize0
          cache_buffer_.cut(PREVIOUS_TAG_SIZE);
          flv_.pos += PREVIOUS_TAG_SIZE;
        }
      }

      while (cache_buffer_.byteLength > 0) {
        // buffer start with tag
        buffer = cache_buffer_.bytes;

        if (buffer.length >= MIN_TAG_LEN) {
          var tagHeadSize = 11; // 10 is tag header

          var tagPayloadSize = (buffer[1] << 16) + (buffer[2] << 8) + buffer[3];
          var previousTagSize = 4;
          var tagSize = tagHeadSize + tagPayloadSize + previousTagSize;

          if (buffer.length >= tagSize) {
            var tagBuffer = cache_buffer_.cut(tagSize);
            var tag = new FlvTag(tagBuffer);

            if (tag.valid()) {
              this.emit('data', tag);
              flv_.pos += tag.totalSize;
            } else {
              var errMsg = "Encounter invalid flv tag, tag_length(".concat(tag.previousTagSize, "), cache_length(").concat(cache_buffer_.byteLength, "), data(").concat(tagBuffer, ")");
              logger.error(errMsg);
              this.reset();
              ctx_.emit('error', muxErrorCode.TS_SYNC_BYTE, errMsg);
            }
          } else {
            break;
          }
        } else {
          break;
        }
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      var cache_buffer_ = this.cache_buffer_;
      cache_buffer_.clear();
      this.emit('reset');
    }
  }]);

  return BodyStream;
}(Stream);
/**
 * @file: created at Sunday, 24th May 2020 2:21:46 am
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


function AMFdeSerialize(data) {
  var result = {};
  var item = parseData_(data);
  result[item.key] = item.value;
  return result;
}

function parseData_(source) {
  var isString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var key = null,
      value = null,
      data = null;

  if (isString) {
    try {
      data = new Uint8Array(source.length + 1);
    } catch (e) {
      logger.error("flv parseData failed: ".concat(e.message));
    }

    data[0] = 2;
    data.set(source, 1, source.length);
  } else {
    data = source;
  }

  key = deSerialize_(data);

  if (isString) {
    key.valueLength -= 1;
  }

  var temp = source.subarray(key.valueLength, source.byteLength);
  value = deSerialize_(temp);
  return {
    key: key.value,
    value: value.value,
    valueLength: key.valueLength + value.valueLength
  };
}

function deSerialize_(data) {
  var result = {};
  var valueLength = 0;
  var a = new DataViewReader();

  switch (data[0]) {
    case 0:
      valueLength = 8;
      result.value = uint8ToDouble_(data.subarray(1, 9));
      result.valueLength = 1 + valueLength;
      break;

    case 1:
      valueLength = 1;
      result.value = data[1] !== 0;
      result.valueLength = 1 + valueLength;
      break;

    case 2:
      valueLength = data[1] << 8 | data[2];
      result.value = uint8ToStr_(data.subarray(3, 3 + valueLength));
      result.valueLength = 1 + 2 + valueLength;
      break;

    case 3:
      valueLength = 1;
      result.value = {};

      while (data[valueLength] != 0x00 || data[valueLength + 1] != 0x00 || data[valueLength + 2] != 0x09) {
        var objData = data.subarray(valueLength, data.byteLength);
        var item = parseData_(objData, true);
        result.value[item.key] = item.value;
        valueLength += item.valueLength;
        objData = null;
      }

      valueLength += 3;
      result.valueLength = valueLength;
      break;

    case 4:
      valueLength = data[1] << 8 | data[2];
      result.value = uint8ToStr_(data.subarray(3, 3 + valueLength));
      result.valueLength = 1 + 2 + valueLength;
      break;

    case 5:
      result.value = null;
      valueLength = 1;
      result.valueLength = valueLength;
      break;

    case 6:
      result.value = undefined;
      valueLength = 1;
      result.valueLength = valueLength;
      break;

    case 7:
      result.value = a.readUint16(data, 1);
      valueLength = 2 + 1;
      result.valueLength = valueLength;
      break;

    case 8:
      {
        var arrLength = data[1] << 24 | data[2] << 16 | data[3] << 8 | data[4];
        valueLength = 1 + 4;
        result.value = {};

        for (var count = 0; count < arrLength; count++) {
          var itemData = data.subarray(valueLength, data.byteLength);
          var item2 = parseData_(itemData, true);
          result.value[item2.key] = item2.value;
          valueLength += item2.valueLength;
        }

        valueLength += 3;
        result.valueLength = valueLength;
      }
      break;

    case 9:
      break;

    case 10:
      {
        var arr = [];
        var arrLength2 = a.readUint32(data, 1);

        for (var _i12 = 0; _i12 < arrLength2; _i12++) {
          var objData2 = data.subarray(_i12 * 9 + 4 + 1, data.byteLength);
          arr.push(deSerialize_(objData2).value);
        }

        result.value = arr;
        valueLength = arr.length * 9 + 4 + 1;
        result.valueLength = valueLength;
      }
      break;

    case 11:
      result.value = uint8ToDouble_(data.subarray(0, 8));
      valueLength = 8 + 1 + 2;
      result.valueLength = valueLength;
      break;

    case 12:
      valueLength = data[1] << 24 | data[2] << 16 | data[3] << 8 | data[4];
      result.value = uint8ToStr_(data.subarray(5, 5 + valueLength));
      result.valueLength = 1 + 4 + valueLength;
      break;

    default:
      return null;
  }

  a = null;
  return result;
}

function uint8ToStr_(data) {
  return String.fromCharCode.apply(null, data);
}

function uint8ToDouble_(data) {
  var temp = new Uint8Array(data);
  var dv = new DataView(temp.buffer);
  var str = dv.getFloat64(0);
  dv = null;
  temp = null;
  return str;
}
/**
 * @file: created at Saturday, 9th May 2020 4:38:35 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var AudioSoundFormat;

(function (AudioSoundFormat) {
  AudioSoundFormat[AudioSoundFormat["AAC"] = 10] = "AAC";
})(AudioSoundFormat || (AudioSoundFormat = {}));

var AudioSoundType;

(function (AudioSoundType) {
  AudioSoundType[AudioSoundType["MONO"] = 0] = "MONO";
  AudioSoundType[AudioSoundType["STEREO"] = 1] = "STEREO"; // For AAC: always 1
})(AudioSoundType || (AudioSoundType = {}));

var AVContext = /*#__PURE__*/function (_Stream8) {
  _inherits(AVContext, _Stream8);

  var _super23 = _createSuper(AVContext);

  function AVContext() {
    var _this20;

    _classCallCheck(this, AVContext);

    _this20 = _super23.apply(this, arguments);
    _this20.pos = 0; // parse byte position relative to flv first byte;

    return _this20;
  }

  return AVContext;
}(Stream);
/**
 * @file: created at Monday, 25th May 2020 12:36:52 am
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */
// 0: AAC sequence header
// 1: AAC raw


var AACPacketType;

(function (AACPacketType) {
  AACPacketType[AACPacketType["SEQUENCE_HEAD"] = 0] = "SEQUENCE_HEAD";
  AACPacketType[AACPacketType["AAC_RAW"] = 1] = "AAC_RAW"; // 1 : One or more NALUs (Full frames are required)
})(AACPacketType || (AACPacketType = {}));
/**
 * ISO/IEC 14496-3 1.6.2.1 AudioSpecificConfig
 * @param buffer
 */


function parseAudioSpecificConfig(buffer) {
  var LOG = 'AudioSpecificConfig'; // ISO/IEC 14496-3 Table 1.16 – Syntax of GetAudioObjectType()

  var audioObjectType = buffer[0] >> 3;

  if (audioObjectType == 31) {
    logger.error("".concat(LOG, " unsupported audioObjectType")); // audioObjectType = 32 + audioObjectTypeExt;
  }

  var samplingFrequencyIndex = (buffer[0] & 0x7) << 1 | buffer[1] >> 7;

  if (samplingFrequencyIndex === 0xf) {
    logger.error("".concat(LOG, " unsupported samplingFrequencyIndex"));
  }

  var channelConfiguration = buffer[1] >> 3 & 0x0f;

  if (channelConfiguration < 0 || channelConfiguration >= 8) {
    logger.error('${LOG} unsupported channel configuration');
  }

  var sampleCount = (buffer[1] >> 2 & 0x01) == 0 ? 1024 : 1024;
  var sampleRate = AAC_SAMPLING_FREQUENCIES[samplingFrequencyIndex];
  return {
    audioObjectType: audioObjectType,
    samplingFrequencyIndex: samplingFrequencyIndex,
    channelConfiguration: channelConfiguration,
    sampleCount: sampleCount,
    sampleRate: sampleRate
  };
}
/**
 * @extends DataViewReader
 */


var AACAudioData = /*#__PURE__*/function (_DataViewReader8) {
  _inherits(AACAudioData, _DataViewReader8);

  var _super24 = _createSuper(AACAudioData);

  /**
   * @param buffer
   */
  function AACAudioData(buffer, timestamp) {
    var _this21;

    _classCallCheck(this, AACAudioData);

    _this21 = _super24.call(this);
    _this21.dts = timestamp;
    _this21.pts = timestamp;
    _this21.aacPacketType = buffer[0];
    _this21.payload = buffer.subarray(1);

    if (_this21.aacPacketType === 0) {
      _this21.audioSpecificConfig = parseAudioSpecificConfig(_this21.payload);
    }

    return _this21;
  }

  return AACAudioData;
}(DataViewReader);
/**
 * @file: created at Monday, 25th May 2020 2:51:52 am
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */
// 0 = Linear PCM, platform endian
// 1 = ADPCM
// 2 = MP3
// 3 = Linear PCM, little endian
// 4 = Nellymoser 16-kHz mono
// 5 = Nellymoser 8-kHz mono
// 6 = Nellymoser
// 7 = G.711 A-law logarithmic PCM 8 = G.711 mu-law logarithmic PCM 9 = reserved
// 10 = AAC
// 11 = Speex
// 14 = MP3 8-Khz
// 15 = Device-specific sound

/**
 * @extends DataViewReader
 */


var FlvTagAudioData = /*#__PURE__*/function (_DataViewReader9) {
  _inherits(FlvTagAudioData, _DataViewReader9);

  var _super25 = _createSuper(FlvTagAudioData);

  /**
   * @param buffer
   */
  function FlvTagAudioData(buffer, timestamp) {
    var _this22;

    _classCallCheck(this, FlvTagAudioData);

    _this22 = _super25.call(this);
    _this22.soundFormat = (buffer[0] & 0xf0) >> 4;
    _this22.soundRate = (buffer[0] & 0x0c) >> 2;
    var soundSize = (buffer[0] & 0x02) >> 1;

    switch (soundSize) {
      case 0:
        _this22.sampleSize = 8; // bit

        break;

      case 1:
        _this22.sampleSize = 16; // bit

        break;
    }

    _this22.soundType = buffer[0] & 1;

    switch (_this22.soundFormat) {
      case AudioSoundFormat.AAC:
        _this22.soundData = new AACAudioData(buffer.subarray(1), timestamp);
        break;

      default:
        logger.error("flv tag audioData encounter unknown soundFormat ".concat(_this22.soundFormat));
    }

    return _this22;
  }

  return FlvTagAudioData;
}(DataViewReader);
/**
 * @file: created at Monday, 25th May 2020 12:36:52 am
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */
// 0 : AVCDecoderConfigurationRecord（AVC sequence header）
// 1 : One or more NALUs (Full frames are required)
// 2 : AVC end of sequence


var AVCPacketTypes;

(function (AVCPacketTypes) {
  AVCPacketTypes[AVCPacketTypes["SEQUENCE_HEAD"] = 0] = "SEQUENCE_HEAD";
  AVCPacketTypes[AVCPacketTypes["NALU"] = 1] = "NALU";
  AVCPacketTypes[AVCPacketTypes["SEQUENCE_END"] = 2] = "SEQUENCE_END"; // 2 : AVC end of sequence
})(AVCPacketTypes || (AVCPacketTypes = {}));
/**
 * ISO/IEC 14496-15  5.2.4.1.1 Syntax
 * @param data
 */


function parseAVCDecoderConfigurationRecord(data) {
  var version = data[0];
  var profile = data[1];
  var profileCompatibility = data[2];
  var level = data[3];
  var naluSizeLength = 1 + (data[4] & 0x03);
  var ppsNalus = [],
      spsNalus = [];
  var pos = 5;
  var numOfSPS = data[pos] & 0x1f;

  if (numOfSPS === 0) {
    logger.error("Flv: Invalid AVCDecoderConfigurationRecord: No SPS");
  } else if (numOfSPS > 0) {
    if (numOfSPS > 1) {
      logger.warn("Flv: Strange AVCDecoderConfigurationRecord: SPS Count = ".concat(numOfSPS));
    }

    pos++;

    for (var _i13 = 0; _i13 < numOfSPS; _i13++) {
      var spsDataLength = data[pos] << 8 | data[pos + 1];
      pos += 2;
      spsNalus.push(data.subarray(pos, pos + spsDataLength));
      pos += spsDataLength;
    }
  }

  var numOfPPS = data[pos];

  if (numOfPPS === 0) {
    logger.error("Flv: Invalid AVCDecoderConfigurationRecord: No PPS");
  } else if (numOfPPS > 0) {
    if (numOfPPS > 1) {
      logger.warn("Flv: Strange AVCDecoderConfigurationRecord: PPS Count = ".concat(numOfPPS));
    }

    pos++;

    for (var _i14 = 0; _i14 < numOfPPS; _i14++) {
      var ppsDataLength = data[pos] << 8 | data[pos + 1];
      pos += 2;
      ppsNalus.push(data.subarray(pos, pos + ppsDataLength));
      pos += ppsDataLength;
    }
  }

  return {
    version: version,
    profile: profile,
    profileCompatibility: profileCompatibility,
    level: level,
    naluSizeLength: naluSizeLength,
    spsNalus: spsNalus,
    ppsNalus: ppsNalus
  };
}

var avcCodec = new AVCCodec();
var naluList_ = [];
avcCodec.on('nalu', function (nalu) {
  naluList_.push(nalu);
});
/**
 * @extends DataViewReader
 */

var AVCVideoPacket = /*#__PURE__*/function (_DataViewReader10) {
  _inherits(AVCVideoPacket, _DataViewReader10);

  var _super26 = _createSuper(AVCVideoPacket);

  /**
   * @param buffer
   */
  function AVCVideoPacket(pipeCtx, buffer, timestamp) {
    var _this23;

    _classCallCheck(this, AVCVideoPacket);

    _this23 = _super26.call(this);
    var flv = pipeCtx.flv,
        options = pipeCtx.options;
    _this23.avcPacketType = buffer[0];

    if (_this23.avcPacketType === 1) {
      var cts_uint32 = _this23.readUint32(buffer, 0) & 0x00ffffff;
      _this23.cts = cts_uint32 << 8 >> 8; // convert to 24-bit signed int
    } else {
      _this23.cts = 0;
    }

    _this23.dts = timestamp;
    _this23.pts = _this23.dts + _this23.cts;
    _this23.payload = buffer.subarray(4);

    if (_this23.avcPacketType === 0) {
      _this23.decoderConfigurationRecord = parseAVCDecoderConfigurationRecord(_this23.payload);
      flv.decoderConfigurationRecord = _this23.decoderConfigurationRecord;
    } else {
      if (options.decodeCodec) {
        _this23.naluList = [];
        var raw = {
          pts: _this23.pts,
          dts: _this23.dts,
          payload: _this23.payload
        };

        if (!_this23.decoderConfigurationRecord) {
          if (flv.decoderConfigurationRecord) {
            raw.naluSizeLength = flv.decoderConfigurationRecord.naluSizeLength;
          }

          avcCodec.push(raw); // Clone nalu to videoData

          for (var _i15 = 0; _i15 < naluList_.length; _i15++) {
            _this23.naluList.push(naluList_[_i15]);
          } // empty cache


          naluList_.splice(0, naluList_.length);
        }
      }
    }

    return _this23;
  }

  return AVCVideoPacket;
}(DataViewReader);
/**
 * @file: tag.js, created at Monday, 23rd December 2019 3:47:23 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */
// If CodecID == 2 H263VIDEOPACKET
// If CodecID == 3 SCREENVIDEOPACKET
// If CodecID == 4 VP6FLVVIDEOPACKET
// If CodecID == 5 VP6FLVALPHAVIDEOPACKET
// If CodecID == 6 SCREENV2VIDEOPACKET
// if CodecID == 7 AVCVIDEOPACKET
// Video frame payload or UI8 (see note following table)


var VideoCodecIDs;

(function (VideoCodecIDs) {
  VideoCodecIDs[VideoCodecIDs["AVC"] = 7] = "AVC"; // AVC_VIDEO_PACKET
})(VideoCodecIDs || (VideoCodecIDs = {}));
/**
 * @extends DataViewReader
 */


var FlvTagVideoData = /*#__PURE__*/function (_DataViewReader11) {
  _inherits(FlvTagVideoData, _DataViewReader11);

  var _super27 = _createSuper(FlvTagVideoData);

  /**
   * @param buffer
   */
  function FlvTagVideoData(pipeCtx, buffer, timestamp) {
    var _this24;

    _classCallCheck(this, FlvTagVideoData);

    _this24 = _super27.call(this);
    _this24.frameType = buffer[0] >> 4 & 0x0f;
    _this24.isKeyframe = _this24.frameType === 1;
    _this24.codecId = buffer[0] & 0x0f;

    switch (_this24.codecId) {
      case VideoCodecIDs.AVC:
        _this24.videoData = new AVCVideoPacket(pipeCtx, buffer.subarray(1), timestamp);
        break;

      default:
        logger.error("flv tag videoData encounter unknown codecId ".concat(_this24.codecId));
    }

    return _this24;
  }

  return FlvTagVideoData;
}(DataViewReader);
/**
 * @file: created at Saturday, 9th May 2020 3:49:22 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var TagsStream = /*#__PURE__*/function (_Stream9) {
  _inherits(TagsStream, _Stream9);

  var _super28 = _createSuper(TagsStream);

  function TagsStream(ctx, flv) {
    var _this25;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, TagsStream);

    _this25 = _super28.call(this);
    _this25.flv_ = flv;
    _this25.options_ = options;
    _this25.pipeCtx = {
      ctx: ctx,
      flv: flv,
      options: options
    };
    return _this25;
  }

  _createClass(TagsStream, [{
    key: "push",
    value: function push(tag) {
      switch (tag.tagType) {
        case FlvTagTypes$1.SCRIPT_DATA:
          this.parseScriptData_(tag.payload);
          break;

        case FlvTagTypes$1.VIDEO:
          this.parseVideoData_(tag);
          break;

        case FlvTagTypes$1.AUDIO:
          this.parseAudioData_(tag);
          break;

        default:
          logger.error("still not supported flv tag type ".concat(tag.tagType));
      }
    }
  }, {
    key: "flush",
    value: function flush() {
      var self = this;
      self.emit('done');
    }
  }, {
    key: "reset",
    value: function reset() {
      this.emit('reset');
    }
  }, {
    key: "parseScriptData_",
    value: function parseScriptData_(buffer) {
      var flv_ = this.flv_;
      var result = AMFdeSerialize(buffer);
      flv_.emit('data', _objectSpread({
        type: 'tag',
        tagType: FlvTagTypes$1.SCRIPT_DATA
      }, result));
    }
  }, {
    key: "parseVideoData_",
    value: function parseVideoData_(tag) {
      var flv_ = this.flv_;
      var data = new FlvTagVideoData(this.pipeCtx, tag.payload, tag.timestamp);

      var ret = _objectSpread({
        type: 'tag',
        tagType: FlvTagTypes$1.VIDEO,
        timestamp: tag.timestamp
      }, data);

      flv_.emit('data', ret);
    }
  }, {
    key: "parseAudioData_",
    value: function parseAudioData_(tag) {
      var flv_ = this.flv_;
      var data = new FlvTagAudioData(tag.payload, tag.timestamp);
      var soundData = data.soundData;

      if (soundData.audioSpecificConfig) {
        flv_.audioSpecificConfig = soundData.audioSpecificConfig;
      }

      var ret = _objectSpread({
        type: 'tag',
        tagType: FlvTagTypes$1.AUDIO,
        timestamp: tag.timestamp
      }, data);

      flv_.emit('data', ret);
    }
  }]);

  return TagsStream;
}(Stream);
/**
 * @file: created at Thursday, 14th May 2020 10:18:11 am
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */

/**
 * @extends DataViewReader
 */


var FlvHead = /*#__PURE__*/function (_DataViewReader12) {
  _inherits(FlvHead, _DataViewReader12);

  var _super29 = _createSuper(FlvHead);

  /**
   * @param buffer
   */
  function FlvHead(buffer) {
    var _this26;

    _classCallCheck(this, FlvHead);

    _this26 = _super29.call(this);
    _this26.signature = String.fromCharCode(buffer[0]) + // F
    String.fromCharCode(buffer[1]) + // L
    String.fromCharCode(buffer[2]); //V

    _this26.version = buffer[3];
    _this26.hasAudio = (buffer[4] & 4) >>> 2 == 1;
    _this26.hasVideo = (buffer[4] & 1) == 1;
    _this26.offset = _this26.readUint32(buffer, 5);
    return _this26;
  }

  _createClass(FlvHead, [{
    key: "valid",
    value: function valid() {
      return this.signature === 'FLV';
    }
  }]);

  return FlvHead;
}(DataViewReader);
/**
 * flv demuxer.
 */

/**
 * flv
 */


var FLVDemux = /*#__PURE__*/function (_DemuxFacade3) {
  _inherits(FLVDemux, _DemuxFacade3);

  var _super30 = _createSuper(FLVDemux);

  function FLVDemux() {
    var _thisSuper3, _this27;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FLVDemux);

    _this27 = _super30.call(this, options);
    _this27.flv_ = new AVContext();
    _this27.flv_.stage = FLVParseStage.HEAD; // this. = 0;

    _this27.body_ = new BodyStream(_this27.ctx_, _this27.flv_, options);
    _this27.tags_ = new TagsStream(_this27.ctx_, _this27.flv_, options); // Compose pipeline

    _this27.pipe(_this27.body_);

    _this27.body_.pipe(_this27.tags_);

    _get((_thisSuper3 = _assertThisInitialized(_this27), _getPrototypeOf(FLVDemux.prototype)), "listenEndStream_", _thisSuper3).call(_thisSuper3);

    return _this27;
  }

  _createClass(FLVDemux, [{
    key: "push",

    /**
     * @param buffer
     * @param conf
     * @param conf.offsetByte
     */
    value: function push(buffer) {
      var conf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options_ = this.options_,
          ctx_ = this.ctx_,
          flv_ = this.flv_,
          cache_buffer_ = this.cache_buffer_;

      var data = _get(_getPrototypeOf(FLVDemux.prototype), "constraintPushData_", this).call(this, buffer);

      var cacheByteLength = this.cache_buffer_.byteLength;
      logger.log("flv demux received ".concat(data.byteLength, " bytes, cache ").concat(cacheByteLength, " bytes."));
      options_.config = conf;

      if (isNumber(conf.offsetPos)) {
        if (cacheByteLength === 0) {
          if (flv_.pos !== conf.offsetPos) {
            ctx_.emit('error', muxErrorCode.FLV_NOT_EXPECTED_ADJACENT_DATA);
          }

          flv_.pos = conf.offsetPos;
        }
      }

      cache_buffer_.append(data); // if file byteOffset is provided, then specify the stage of parser.

      if (flv_.pos < HEAD_LEN) {
        flv_.stage === FLVParseStage.HEAD;
      } else {
        flv_.stage === FLVParseStage.BODY;
      }

      while (true) {
        if (flv_.stage === FLVParseStage.HEAD) {
          if (cache_buffer_.byteLength >= HEAD_LEN) {
            // has enough header
            var chunk = cache_buffer_.cut(HEAD_LEN);
            var head = new FlvHead(chunk);

            if (head.valid()) {
              flv_.emit('data', {
                type: 'head',
                signature: head.signature,
                version: head.version,
                hasAudio: head.hasAudio,
                hasVideo: head.hasVideo,
                offset: head.offset
              }); // Change parse state -> body

              flv_.stage = FLVParseStage.BODY;
              flv_.pos = HEAD_LEN;
            } else {
              ctx_.emit('error', muxErrorCode.FLV_HEAD_SIGNATURE);
              break;
            }
          } else {
            break;
          }
        } else if (flv_.stage === FLVParseStage.BODY) {
          // At least has 4 body byte to parse
          if (cache_buffer_.byteLength >= MIN_BODY_LEN) {
            var cbLen = cache_buffer_.byteLength;
            var nextBytes = cache_buffer_.bytes;
            cache_buffer_.clear();

            if (nextBytes) {
              this.emit('data', nextBytes);
            }

            flv_.pos += cbLen;
          }

          break;
        }
      }
    }
  }, {
    key: "endStream",
    get: function get() {
      return this.flv_;
    }
  }]);

  return FLVDemux;
}(DemuxFacade);

export { Events, FLVDemux, MP4Demux, TSDemux };
