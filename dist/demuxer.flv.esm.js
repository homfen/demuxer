function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var FlvTag = /*#__PURE__*/function (_DataViewReader) {
  _inherits(FlvTag, _DataViewReader);

  var _super6 = _createSuper(FlvTag);

  /**
   * @param buffer
   */
  function FlvTag(buffer) {
    var _this4;

    _classCallCheck(this, FlvTag);

    _this4 = _super6.call(this);
    _this4.tagType = buffer[0];
    _this4.dataSize = _this4.readUint32(buffer, 0) & 0x00ffffff;
    var timestamp = _this4.readUint32(buffer, 3) & 0x00ffffff; // the lower 24 bits of the timestamp

    var timestampExtended = buffer[7]; // This field represents the upper 8 bits of timestamp

    _this4.timestamp = (timestampExtended << 24) + timestamp;
    _this4.streamId = _this4.readUint32(buffer, 8) & 0x00ffffff; // Always 0

    _this4.payload = buffer.subarray(11, 11 + _this4.dataSize);
    _this4.previousTagSize = _this4.readUint32(buffer, 11 + _this4.dataSize);
    _this4.totalSize = _this4.previousTagSize + 4;
    return _this4;
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


var BodyStream = /*#__PURE__*/function (_Stream2) {
  _inherits(BodyStream, _Stream2);

  var _super7 = _createSuper(BodyStream);

  function BodyStream(ctx, flvCtx) {
    var _this5;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, BodyStream);

    _this5 = _super7.call(this);
    _this5.ctx_ = ctx;
    _this5.flv_ = flvCtx;
    _this5.options_ = options;
    _this5.cache_buffer_ = new CacheBuffer();
    return _this5;
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

        for (var i = 0; i < arrLength2; i++) {
          var objData2 = data.subarray(i * 9 + 4 + 1, data.byteLength);
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

var AVContext = /*#__PURE__*/function (_Stream3) {
  _inherits(AVContext, _Stream3);

  var _super8 = _createSuper(AVContext);

  function AVContext() {
    var _this6;

    _classCallCheck(this, AVContext);

    _this6 = _super8.apply(this, arguments);
    _this6.pos = 0; // parse byte position relative to flv first byte;

    return _this6;
  }

  return AVContext;
}(Stream);
/**
 * @file: created at Saturday, 9th May 2020 11:13:19 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var AAC_SAMPLING_FREQUENCIES = [96000, 88200, 64000, 48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000, 7350];
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


var AACAudioData = /*#__PURE__*/function (_DataViewReader2) {
  _inherits(AACAudioData, _DataViewReader2);

  var _super9 = _createSuper(AACAudioData);

  /**
   * @param buffer
   */
  function AACAudioData(buffer, timestamp) {
    var _this7;

    _classCallCheck(this, AACAudioData);

    _this7 = _super9.call(this);
    _this7.dts = timestamp;
    _this7.pts = timestamp;
    _this7.aacPacketType = buffer[0];
    _this7.payload = buffer.subarray(1);

    if (_this7.aacPacketType === 0) {
      _this7.audioSpecificConfig = parseAudioSpecificConfig(_this7.payload);
    }

    return _this7;
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


var FlvTagAudioData = /*#__PURE__*/function (_DataViewReader3) {
  _inherits(FlvTagAudioData, _DataViewReader3);

  var _super10 = _createSuper(FlvTagAudioData);

  /**
   * @param buffer
   */
  function FlvTagAudioData(buffer, timestamp) {
    var _this8;

    _classCallCheck(this, FlvTagAudioData);

    _this8 = _super10.call(this);
    _this8.soundFormat = (buffer[0] & 0xf0) >> 4;
    _this8.soundRate = (buffer[0] & 0x0c) >> 2;
    var soundSize = (buffer[0] & 0x02) >> 1;

    switch (soundSize) {
      case 0:
        _this8.sampleSize = 8; // bit

        break;

      case 1:
        _this8.sampleSize = 16; // bit

        break;
    }

    _this8.soundType = buffer[0] & 1;

    switch (_this8.soundFormat) {
      case AudioSoundFormat.AAC:
        _this8.soundData = new AACAudioData(buffer.subarray(1), timestamp);
        break;

      default:
        logger.error("flv tag audioData encounter unknown soundFormat ".concat(_this8.soundFormat));
    }

    return _this8;
  }

  return FlvTagAudioData;
}(DataViewReader);
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

  for (var j = bitOffset; j < bitOffset + length; j++) {
    startByte = Math.floor(j / 8);
    startByteBitPos = 7 - j % 8;
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

  for (var i = bitOffset; i < bitLength; i++) {
    startByte = Math.floor(i / 8);
    startByteBitPos = 7 - i % 8;
    bitVal = buffer[startByte] >> startByteBitPos & 0x01;

    if (!readBit1) {
      if (bitVal === 0) {
        leadingZeros.push(0);
      } else {
        readBit1 = true;
        bitOffset = i;
        break;
      }
    }
  }

  var codeNumLength = leadingZeros.length + 1; // 2. 计算有效位数值

  for (var j = bitOffset; j < bitOffset + codeNumLength; j++) {
    startByte = Math.floor(j / 8);
    startByteBitPos = 7 - j % 8;
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
      for (var i = 0; i < (chromaFIUEV.value != 3 ? 8 : 12); i++) {
        var seq_scaling_list_present_flag = ExpGolomb.readBit(golombBuffer, bitOffset);
        bitOffset += 1;

        if (seq_scaling_list_present_flag) {
          if (i < 6) {
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

    for (var _i = 0, item; _i < nrfipoccUEV.value; _i++) {
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

  var _super11 = _createSuper(NALU);

  function NALU(buffer) {
    var _this9;

    _classCallCheck(this, NALU);

    _this9 = _super11.call(this);
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


var AVCCodec = /*#__PURE__*/function (_EventEmitter4) {
  _inherits(AVCCodec, _EventEmitter4);

  var _super12 = _createSuper(AVCCodec);

  function AVCCodec() {
    var _this10;

    _classCallCheck(this, AVCCodec);

    _this10 = _super12.call(this);
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
        var j = data_byte.byteLength - 1;
        var dropZerosLength = 0; // Collect tailing zeros.
        // end with 0x000000 and more...

        do {
          if (data_byte[j] === 0x00) {
            dropZerosLength++;
          } else {
            break;
          }

          j--;
        } while (j > 0);

        if (dropZerosLength >= 3) {
          // drop tailing zeros.
          data_byte = data_byte.subarray(0, j + 1);
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

    for (var i = 0; i < numOfSPS; i++) {
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

    for (var _i2 = 0; _i2 < numOfPPS; _i2++) {
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

var AVCVideoPacket = /*#__PURE__*/function (_DataViewReader5) {
  _inherits(AVCVideoPacket, _DataViewReader5);

  var _super13 = _createSuper(AVCVideoPacket);

  /**
   * @param buffer
   */
  function AVCVideoPacket(pipeCtx, buffer, timestamp) {
    var _this11;

    _classCallCheck(this, AVCVideoPacket);

    _this11 = _super13.call(this);
    var flv = pipeCtx.flv,
        options = pipeCtx.options;
    _this11.avcPacketType = buffer[0];

    if (_this11.avcPacketType === 1) {
      var cts_uint32 = _this11.readUint32(buffer, 0) & 0x00ffffff;
      _this11.cts = cts_uint32 << 8 >> 8; // convert to 24-bit signed int
    } else {
      _this11.cts = 0;
    }

    _this11.dts = timestamp;
    _this11.pts = _this11.dts + _this11.cts;
    _this11.payload = buffer.subarray(4);

    if (_this11.avcPacketType === 0) {
      _this11.decoderConfigurationRecord = parseAVCDecoderConfigurationRecord(_this11.payload);
      flv.decoderConfigurationRecord = _this11.decoderConfigurationRecord;
    } else {
      if (options.decodeCodec) {
        _this11.naluList = [];
        var raw = {
          pts: _this11.pts,
          dts: _this11.dts,
          payload: _this11.payload
        };

        if (!_this11.decoderConfigurationRecord) {
          if (flv.decoderConfigurationRecord) {
            raw.naluSizeLength = flv.decoderConfigurationRecord.naluSizeLength;
          }

          avcCodec.push(raw); // Clone nalu to videoData

          for (var i = 0; i < naluList_.length; i++) {
            _this11.naluList.push(naluList_[i]);
          } // empty cache


          naluList_.splice(0, naluList_.length);
        }
      }
    }

    return _this11;
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


var FlvTagVideoData = /*#__PURE__*/function (_DataViewReader6) {
  _inherits(FlvTagVideoData, _DataViewReader6);

  var _super14 = _createSuper(FlvTagVideoData);

  /**
   * @param buffer
   */
  function FlvTagVideoData(pipeCtx, buffer, timestamp) {
    var _this12;

    _classCallCheck(this, FlvTagVideoData);

    _this12 = _super14.call(this);
    _this12.frameType = buffer[0] >> 4 & 0x0f;
    _this12.isKeyframe = _this12.frameType === 1;
    _this12.codecId = buffer[0] & 0x0f;

    switch (_this12.codecId) {
      case VideoCodecIDs.AVC:
        _this12.videoData = new AVCVideoPacket(pipeCtx, buffer.subarray(1), timestamp);
        break;

      default:
        logger.error("flv tag videoData encounter unknown codecId ".concat(_this12.codecId));
    }

    return _this12;
  }

  return FlvTagVideoData;
}(DataViewReader);
/**
 * @file: created at Saturday, 9th May 2020 3:49:22 pm
 * @copyright Copyright (c) 2020
 * @author gem <gems.xu@gmail.com>
 */


var TagsStream = /*#__PURE__*/function (_Stream4) {
  _inherits(TagsStream, _Stream4);

  var _super15 = _createSuper(TagsStream);

  function TagsStream(ctx, flv) {
    var _this13;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, TagsStream);

    _this13 = _super15.call(this);
    _this13.flv_ = flv;
    _this13.options_ = options;
    _this13.pipeCtx = {
      ctx: ctx,
      flv: flv,
      options: options
    };
    return _this13;
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


var FlvHead = /*#__PURE__*/function (_DataViewReader7) {
  _inherits(FlvHead, _DataViewReader7);

  var _super16 = _createSuper(FlvHead);

  /**
   * @param buffer
   */
  function FlvHead(buffer) {
    var _this14;

    _classCallCheck(this, FlvHead);

    _this14 = _super16.call(this);
    _this14.signature = String.fromCharCode(buffer[0]) + // F
    String.fromCharCode(buffer[1]) + // L
    String.fromCharCode(buffer[2]); //V

    _this14.version = buffer[3];
    _this14.hasAudio = (buffer[4] & 4) >>> 2 == 1;
    _this14.hasVideo = (buffer[4] & 1) == 1;
    _this14.offset = _this14.readUint32(buffer, 5);
    return _this14;
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


var FLVDemux = /*#__PURE__*/function (_DemuxFacade) {
  _inherits(FLVDemux, _DemuxFacade);

  var _super17 = _createSuper(FLVDemux);

  function FLVDemux() {
    var _thisSuper, _this15;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, FLVDemux);

    _this15 = _super17.call(this, options);
    _this15.flv_ = new AVContext();
    _this15.flv_.stage = FLVParseStage.HEAD; // this. = 0;

    _this15.body_ = new BodyStream(_this15.ctx_, _this15.flv_, options);
    _this15.tags_ = new TagsStream(_this15.ctx_, _this15.flv_, options); // Compose pipeline

    _this15.pipe(_this15.body_);

    _this15.body_.pipe(_this15.tags_);

    _get((_thisSuper = _assertThisInitialized(_this15), _getPrototypeOf(FLVDemux.prototype)), "listenEndStream_", _thisSuper).call(_thisSuper);

    return _this15;
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

export { Events, FLVDemux };
