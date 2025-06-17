import {
  __export
} from "./chunk-XWLXMCJQ.js";

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Type.js
var Type_exports = {};
__export(Type_exports, {
  PLACEHOLDER: () => PLACEHOLDER,
  PLACEHOLDER2: () => PLACEHOLDER2,
  assert: () => assert,
  getType: () => getType,
  isArray: () => isArray,
  isDate: () => isDate,
  isNaN: () => isNaN,
  isNumber: () => isNumber,
  isObject: () => isObject,
  isString: () => isString,
  numberToString: () => numberToString,
  repeat: () => repeat,
  toDate: () => toDate,
  toNumber: () => toNumber
});
function isNaN(value) {
  return Number(value) !== value;
}
function getType(value) {
  return {}.toString.call(value);
}
function assert(condition, message = "Assertion failed") {
  if (!condition) {
    throw new Error(message);
  }
}
function toNumber(value) {
  if (value != null && !isNumber(value)) {
    let converted = Number(value);
    if (isNaN(converted) && isString(value) && value != "" && value.match(/[0-9]+/)) {
      return toNumber(value.replace(/[^0-9.\-]+/g, ""));
    }
    return converted;
  }
  return value;
}
function toDate(value) {
  if (isDate(value)) {
    return new Date(value);
  } else if (isNumber(value)) {
    return new Date(value);
  } else {
    let num = Number(value);
    if (!isNumber(num)) {
      return new Date(value);
    } else {
      return new Date(num);
    }
  }
}
function numberToString(value) {
  if (isNaN(value)) {
    return "NaN";
  }
  if (value === Infinity) {
    return "Infinity";
  }
  if (value === -Infinity) {
    return "-Infinity";
  }
  if (value === 0 && 1 / value === -Infinity) {
    return "-0";
  }
  let negative = value < 0;
  value = Math.abs(value);
  let parsed = /^([0-9]+)(?:\.([0-9]+))?(?:e[\+\-]([0-9]+))?$/.exec("" + value);
  let digits = parsed[1];
  let decimals = parsed[2] || "";
  let res;
  if (parsed[3] === void 0) {
    res = decimals === "" ? digits : digits + "." + decimals;
  } else {
    let exponent = +parsed[3];
    if (value < 1) {
      let zeros = exponent - 1;
      res = "0." + repeat("0", zeros) + digits + decimals;
    } else {
      let zeros = exponent - decimals.length;
      if (zeros === 0) {
        res = digits + decimals;
      } else if (zeros < 0) {
        res = digits + decimals.slice(0, zeros) + "." + decimals.slice(zeros);
      } else {
        res = digits + decimals + repeat("0", zeros);
      }
    }
  }
  return negative ? "-" + res : res;
}
function repeat(string, amount) {
  return new Array(amount + 1).join(string);
}
function isDate(value) {
  return getType(value) === "[object Date]";
}
function isString(value) {
  return typeof value === "string";
}
function isNumber(value) {
  return typeof value === "number" && Number(value) == value;
}
function isObject(value) {
  return typeof value === "object" && value !== null;
}
function isArray(value) {
  return Array.isArray(value);
}
var PLACEHOLDER = "__§§§__";
var PLACEHOLDER2 = "__§§§§__";

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Array.js
var Array_exports = {};
__export(Array_exports, {
  add: () => add,
  any: () => any,
  copy: () => copy,
  each: () => each,
  eachContinue: () => eachContinue,
  eachReverse: () => eachReverse,
  find: () => find,
  findIndex: () => findIndex,
  findIndexReverse: () => findIndexReverse,
  findMap: () => findMap,
  findReverse: () => findReverse,
  first: () => first,
  getFirstSortedIndex: () => getFirstSortedIndex,
  getSortedIndex: () => getSortedIndex,
  has: () => has,
  indexOf: () => indexOf,
  insert: () => insert,
  insertIndex: () => insertIndex,
  keepIf: () => keepIf,
  last: () => last,
  map: () => map,
  move: () => move,
  pushAll: () => pushAll,
  pushOne: () => pushOne,
  remove: () => remove,
  removeFirst: () => removeFirst,
  removeIndex: () => removeIndex,
  replace: () => replace,
  setIndex: () => setIndex,
  shiftLeft: () => shiftLeft,
  shuffle: () => shuffle,
  slice: () => slice,
  toArray: () => toArray
});
function indexOf(array, value) {
  const length = array.length;
  for (let i = 0; i < length; ++i) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
function any(array, test) {
  const length = array.length;
  for (let i = 0; i < length; ++i) {
    if (test(array[i])) {
      return true;
    }
  }
  return false;
}
function map(array, fn) {
  const length = array.length;
  const output = new Array(length);
  for (let i = 0; i < length; ++i) {
    output[i] = fn(array[i], i);
  }
  return output;
}
function each(array, fn) {
  const length = array.length;
  for (let i = 0; i < length; ++i) {
    fn(array[i], i);
  }
}
function eachReverse(array, fn) {
  let i = array.length;
  while (i > 0) {
    --i;
    fn(array[i], i);
  }
}
function eachContinue(array, fn) {
  const length = array.length;
  for (let i = 0; i < length; ++i) {
    if (!fn(array[i], i)) {
      break;
    }
  }
}
function shiftLeft(array, index) {
  const length = array.length;
  for (let i = index; i < length; ++i) {
    array[i - index] = array[i];
  }
  array.length = length - index;
}
function last(array) {
  const length = array.length;
  return length ? array[length - 1] : void 0;
}
function first(array) {
  return array[0];
}
function insert(array, element, index) {
  index = Math.max(0, Math.min(index, array.length));
  array.splice(index, 0, element);
}
function setIndex(array, element, index) {
  remove(array, element);
  insert(array, element, index);
}
function pushAll(array, input) {
  const length = input.length;
  for (let i = 0; i < length; ++i) {
    array.push(input[i]);
  }
}
function remove(array, element) {
  let found = false;
  let index = 0;
  for (; ; ) {
    index = array.indexOf(element, index);
    if (index === -1) {
      return found;
    } else {
      found = true;
      array.splice(index, 1);
    }
  }
}
function removeFirst(array, element) {
  let index = array.indexOf(element);
  if (index !== -1) {
    array.splice(index, 1);
    return true;
  } else {
    return false;
  }
}
function move(array, element, toIndex) {
  let index = indexOf(array, element);
  if (index !== -1) {
    removeIndex(array, index);
  }
  if (toIndex == null) {
    array.push(element);
  } else {
    insertIndex(array, toIndex, element);
  }
}
function add(array, element, index) {
  if (!isNumber(index)) {
    array.push(element);
  } else if (index === 0) {
    array.unshift(element);
  } else {
    array.splice(index, 0, element);
  }
}
function pushOne(array, element) {
  if (array.indexOf(element) === -1) {
    array.push(element);
  }
}
function replace(array, element, index) {
  let ind = array.indexOf(element);
  if (ind !== -1) {
    array.splice(ind, 1);
  }
  if (!isNumber(index)) {
    array.push(element);
  } else {
    array.splice(index, 0, element);
  }
}
function toArray(input) {
  if (Array.isArray(input)) {
    return input;
  } else {
    return [input];
  }
}
function has(array, element) {
  return indexOf(array, element) !== -1;
}
function copy(array) {
  const length = array.length;
  const output = new Array(length);
  for (let i = 0; i < length; ++i) {
    output[i] = array[i];
  }
  return output;
}
function slice(array, start, end = array.length) {
  const output = new Array(end - start);
  for (let i = start; i < end; ++i) {
    output[i - start] = array[i];
  }
  return output;
}
function insertIndex(array, index, value) {
  array.splice(index, 0, value);
}
function removeIndex(array, index) {
  array.splice(index, 1);
}
function findIndex(array, matches) {
  const length = array.length;
  for (let i = 0; i < length; ++i) {
    if (matches(array[i], i)) {
      return i;
    }
  }
  return -1;
}
function findIndexReverse(array, matches) {
  let i = array.length;
  while (i > 0) {
    --i;
    if (matches(array[i], i)) {
      return i;
    }
  }
  return -1;
}
function find(array, matches) {
  const index = findIndex(array, matches);
  if (index !== -1) {
    return array[index];
  }
}
function findReverse(array, matches) {
  const index = findIndexReverse(array, matches);
  if (index !== -1) {
    return array[index];
  }
}
function findMap(array, matches) {
  const length = array.length;
  for (let i = 0; i < length; ++i) {
    const value = matches(array[i], i);
    if (value !== void 0) {
      return value;
    }
  }
}
function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}
function getSortedIndex(array, ordering) {
  let start = 0;
  let end = array.length;
  let found = false;
  while (start < end) {
    const pivot = start + end >> 1;
    const order = ordering(array[pivot]);
    if (order < 0) {
      start = pivot + 1;
    } else if (order === 0) {
      found = true;
      start = pivot + 1;
    } else {
      end = pivot;
    }
  }
  return {
    found,
    index: found ? start - 1 : start
  };
}
function getFirstSortedIndex(array, ordering) {
  let start = 0;
  let end = array.length;
  let found = false;
  while (start < end) {
    const pivot = start + end >> 1;
    const order = ordering(array[pivot]);
    if (order < 0) {
      start = pivot + 1;
    } else if (order === 0) {
      found = true;
      end = pivot;
    } else {
      end = pivot;
    }
  }
  return {
    found,
    index: start
  };
}
function keepIf(array, keep) {
  let i = array.length;
  while (i > 0) {
    --i;
    if (!keep(array[i])) {
      array.splice(i, 1);
    }
  }
}

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Disposer.js
var DisposerClass = class {
  /**
   * Constructor.
   */
  constructor() {
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._disposed = false;
  }
  /**
   * Checks if object is disposed.
   *
   * @return Disposed?
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Disposes the object.
   */
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
};
var Disposer = class {
  /**
   * Constructor.
   *
   * @param dispose  Function that disposes object
   */
  constructor(dispose) {
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_dispose", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._disposed = false;
    this._dispose = dispose;
  }
  /**
   * Checks if object is disposed.
   *
   * @return Disposed?
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Disposes the object.
   */
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
};
var ArrayDisposer = class extends DisposerClass {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_disposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
  }
  _dispose() {
    each(this._disposers, (x) => {
      x.dispose();
    });
  }
};
var MultiDisposer = class extends DisposerClass {
  constructor(disposers) {
    super();
    Object.defineProperty(this, "_disposers", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._disposers = disposers;
  }
  _dispose() {
    each(this._disposers, (x) => {
      x.dispose();
    });
  }
  get disposers() {
    return this._disposers;
  }
};
var MutableValueDisposer = class extends DisposerClass {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_disposer", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_value", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
  }
  _dispose() {
    if (this._disposer != null) {
      this._disposer.dispose();
      this._disposer = void 0;
    }
  }
  /**
   * Returns current value.
   *
   * @return Value
   */
  get() {
    return this._value;
  }
  /**
   * Sets value and disposes previous disposer if it was set.
   *
   * @param value     New value
   * @param disposer  Disposer
   */
  set(value, disposer) {
    if (this._disposer != null) {
      this._disposer.dispose();
    }
    this._disposer = disposer;
    this._value = value;
  }
  /**
   * Resets the disposer value.
   */
  reset() {
    this.set(void 0, void 0);
  }
};
var CounterDisposer = class extends Disposer {
  constructor() {
    super(...arguments);
    Object.defineProperty(this, "_counter", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: 0
    });
  }
  /**
   * [increment description]
   *
   * @todo Description
   */
  increment() {
    ++this._counter;
    return new Disposer(() => {
      --this._counter;
      if (this._counter === 0) {
        this.dispose();
      }
    });
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Object.js
var Object_exports = {};
__export(Object_exports, {
  copy: () => copy2,
  each: () => each2,
  eachContinue: () => eachContinue2,
  eachOrdered: () => eachOrdered,
  hasKey: () => hasKey,
  keys: () => keys,
  keysOrdered: () => keysOrdered,
  softCopyProperties: () => softCopyProperties
});
function keys(object) {
  return Object.keys(object);
}
function keysOrdered(object, order) {
  return keys(object).sort(order);
}
function copy2(object) {
  return Object.assign({}, object);
}
function each2(object, f) {
  keys(object).forEach((key) => {
    f(key, object[key]);
  });
}
function eachContinue2(object, fn) {
  for (let key in object) {
    if (hasKey(object, key)) {
      if (!fn(key, object[key])) {
        break;
      }
    }
  }
}
function eachOrdered(object, fn, ord) {
  each(keysOrdered(object, ord), (key) => {
    fn(key, object[key]);
  });
}
function hasKey(object, key) {
  return {}.hasOwnProperty.call(object, key);
}
function softCopyProperties(source, target) {
  each2(source, (key, value) => {
    if (value != null && target[key] == null) {
      target[key] = value;
    }
  });
  return target;
}

// ../node_modules/@amcharts/amcharts5/.internal/core/util/EventDispatcher.js
var EventDispatcher = class {
  /**
   * Constructor
   */
  constructor() {
    Object.defineProperty(this, "_listeners", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_killed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_disabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_iterating", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_enabled", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._listeners = [];
    this._killed = [];
    this._disabled = {};
    this._iterating = 0;
    this._enabled = true;
    this._disposed = false;
  }
  /**
   * Returns if this object has been already disposed.
   *
   * @return Disposed?
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Dispose (destroy) this object.
   */
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      const a = this._listeners;
      this._iterating = 1;
      this._listeners = null;
      this._disabled = null;
      try {
        each(a, (x) => {
          x.disposer.dispose();
        });
      } finally {
        this._killed = null;
        this._iterating = null;
      }
    }
  }
  /**
   * Checks if this particular event dispatcher has any listeners set.
   *
   * @return Has listeners?
   */
  hasListeners() {
    return this._listeners.length !== 0;
  }
  /**
   * Checks if this particular event dispatcher has any particular listeners set.
   *
   * @return Has particular event listeners?
   */
  hasListenersByType(type) {
    return any(this._listeners, (x) => (x.type === null || x.type === type) && !x.killed);
  }
  /**
   * Enable dispatching of events if they were previously disabled by
   * `disable()`.
   */
  enable() {
    this._enabled = true;
  }
  /**
   * Disable dispatching of events until re-enabled by `enable()`.
   */
  disable() {
    this._enabled = false;
  }
  /**
   * Enable dispatching particular event, if it was disabled before by
   * `disableType()`.
   *
   * @param type Event type
   */
  enableType(type) {
    delete this._disabled[type];
  }
  /**
   * Disable dispatching of events for a certain event type.
   *
   * Optionally, can set how many dispatches to skip before automatically
   * re-enabling the dispatching.
   *
   * @param type    Event type
   * @param amount  Number of event dispatches to skip
   */
  disableType(type, amount = Infinity) {
    this._disabled[type] = amount;
  }
  /**
   * Removes listener from dispatcher.
   *
   * Will throw an exception if such listener does not exists.
   *
   * @param listener Listener to remove
   */
  _removeListener(listener) {
    if (this._iterating === 0) {
      const index = this._listeners.indexOf(listener);
      if (index === -1) {
        throw new Error("Invalid state: could not remove listener");
      }
      this._listeners.splice(index, 1);
    } else {
      this._killed.push(listener);
    }
  }
  /**
   * Removes existing listener by certain parameters.
   *
   * @param once         Listener's once setting
   * @param type         Listener's type
   * @param callback     Callback function
   * @param context      Callback context
   */
  _removeExistingListener(once, type, callback, context) {
    if (this._disposed) {
      throw new Error("EventDispatcher is disposed");
    }
    this._eachListener((info) => {
      if (info.once === once && // TODO is this correct ?
      info.type === type && (callback === void 0 || info.callback === callback) && info.context === context) {
        info.disposer.dispose();
      }
    });
  }
  /**
   * Checks if dispatching for particular event type is enabled.
   *
   * @param type  Event type
   * @return Enabled?
   */
  isEnabled(type) {
    if (this._disposed) {
      throw new Error("EventDispatcher is disposed");
    }
    return this._enabled && this._listeners.length > 0 && this.hasListenersByType(type) && this._disabled[type] === void 0;
  }
  /**
   * Removes all listeners of a particular event type
   *
   * @param type  Listener's type
   */
  removeType(type) {
    if (this._disposed) {
      throw new Error("EventDispatcher is disposed");
    }
    this._eachListener((info) => {
      if (info.type === type) {
        info.disposer.dispose();
      }
    });
  }
  /**
   * Checks if there's already a listener with specific parameters.
   *
   * @param type      Listener's type
   * @param callback  Callback function
   * @param context   Callback context
   * @return Has listener?
   */
  has(type, callback, context) {
    const index = findIndex(this._listeners, (info) => {
      return info.once !== true && // Ignoring "once" listeners
      info.type === type && (callback === void 0 || info.callback === callback) && info.context === context;
    });
    return index !== -1;
  }
  /**
   * Checks whether event of the particular type should be dispatched.
   *
   * @param type  Event type
   * @return Dispatch?
   */
  _shouldDispatch(type) {
    if (this._disposed) {
      throw new Error("EventDispatcher is disposed");
    }
    const count = this._disabled[type];
    if (!isNumber(count)) {
      return this._enabled;
    } else {
      if (count <= 1) {
        delete this._disabled[type];
      } else {
        --this._disabled[type];
      }
      return false;
    }
  }
  /**
   * [_eachListener description]
   *
   * All of this extra code is needed when a listener is removed while iterating
   *
   * @todo Description
   * @param fn [description]
   */
  _eachListener(fn) {
    ++this._iterating;
    try {
      each(this._listeners, fn);
    } finally {
      --this._iterating;
      if (this._iterating === 0 && this._killed.length !== 0) {
        each(this._killed, (killed) => {
          this._removeListener(killed);
        });
        this._killed.length = 0;
      }
    }
  }
  /**
   * Dispatches an event immediately without waiting for next cycle.
   *
   * @param type   Event type
   * @param event  Event object
   * @todo automatically add in type and target properties if they are missing
   */
  dispatch(type, event) {
    if (this._shouldDispatch(type)) {
      this._eachListener((listener) => {
        if (!listener.killed && (listener.type === null || listener.type === type)) {
          listener.dispatch(type, event);
        }
      });
    }
  }
  /**
   * Shelves the event to be dispatched within next update cycle.
   *
   * @param type   Event type
   * @param event  Event object
   * @todo automatically add in type and target properties if they are missing
   */
  /*public dispatchLater<Key extends keyof T>(type: Key, event: T[Key]): void {
      if (this._shouldDispatch(type)) {
          this._eachListener((listener) => {
              // TODO check if it's faster to use an object of listeners rather than a single big array
              if (!listener.killed && (listener.type === null || listener.type === type)) {
                  // TODO if the function throws, maybe it should keep going ?
                  // TODO dispatch during the update cycle, rather than using whenIdle
                  $async.whenIdle(() => {
                      if (!listener.killed) {
                          listener.dispatch(type, event);
                      }
                  });
              }
          });
      }
  }*/
  /**
   * Creates, catalogs and returns an [[EventListener]].
   *
   * Event listener can be disposed.
   *
   * @param once         Listener's once setting
   * @param type         Listener's type
   * @param callback     Callback function
   * @param context      Callback context
   * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
   * @param dispatch
   * @returns An event listener
   */
  _on(once, type, callback, context, shouldClone, dispatch) {
    if (this._disposed) {
      throw new Error("EventDispatcher is disposed");
    }
    this._removeExistingListener(once, type, callback, context);
    const info = {
      type,
      callback,
      context,
      shouldClone,
      dispatch,
      killed: false,
      once,
      disposer: new Disposer(() => {
        info.killed = true;
        this._removeListener(info);
      })
    };
    this._listeners.push(info);
    return info;
  }
  /**
   * Creates an event listener to be invoked on **any** event.
   *
   * @param callback     Callback function
   * @param context      Callback context
   * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
   * @returns A disposable event listener
   */
  onAll(callback, context, shouldClone = true) {
    return this._on(false, null, callback, context, shouldClone, (_type, event) => callback.call(context, event)).disposer;
  }
  /**
   * Creates an event listener to be invoked on a specific event type.
   *
   * ```TypeScript
   * button.events.once("click", (ev) => {
   *   console.log("Button clicked");
   * }, this);
   * ```
   * ```JavaScript
   * button.events.once("click", (ev) => {
   *   console.log("Button clicked");
   * }, this);
   * ```
   *
   * The above will invoke our custom event handler whenever series we put
   * event on is hidden.
   *
   * @param type         Listener's type
   * @param callback     Callback function
   * @param context      Callback context
   * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
   * @returns A disposable event listener
   */
  on(type, callback, context, shouldClone = true) {
    return this._on(false, type, callback, context, shouldClone, (_type, event) => callback.call(context, event)).disposer;
  }
  /**
   * Creates an event listener to be invoked on a specific event type once.
   *
   * Once the event listener is invoked, it is automatically disposed.
   *
   * ```TypeScript
   * button.events.once("click", (ev) => {
   *   console.log("Button clicked");
   * }, this);
   * ```
   * ```JavaScript
   * button.events.once("click", (ev) => {
   *   console.log("Button clicked");
   * }, this);
   * ```
   *
   * The above will invoke our custom event handler the first time series we
   * put event on is hidden.
   *
   * @param type         Listener's type
   * @param callback     Callback function
   * @param context      Callback context
   * @param shouldClone  Whether the listener should be copied when the EventDispatcher is copied
   * @returns A disposable event listener
   */
  once(type, callback, context, shouldClone = true) {
    const x = this._on(true, type, callback, context, shouldClone, (_type, event) => {
      x.disposer.dispose();
      callback.call(context, event);
    });
    return x.disposer;
  }
  /**
   * Removes the event listener with specific parameters.
   *
   * @param type         Listener's type
   * @param callback     Callback function
   * @param context      Callback context
   */
  off(type, callback, context) {
    this._removeExistingListener(false, type, callback, context);
  }
  /**
   * Copies all dispatcher parameters, including listeners, from another event
   * dispatcher.
   *
   * @param source Source event dispatcher
   * @ignore
   */
  copyFrom(source) {
    if (this._disposed) {
      throw new Error("EventDispatcher is disposed");
    }
    if (source === this) {
      throw new Error("Cannot copyFrom the same TargetedEventDispatcher");
    }
    const disposers = [];
    each(source._listeners, (x) => {
      if (!x.killed && x.shouldClone) {
        if (x.type === null) {
          disposers.push(this.onAll(x.callback, x.context));
        } else if (x.once) {
          disposers.push(this.once(x.type, x.callback, x.context));
        } else {
          disposers.push(this.on(x.type, x.callback, x.context));
        }
      }
    });
    return new MultiDisposer(disposers);
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Template.js
function disposeSettings(settings) {
  each2(settings, (_key, value) => {
    if (isObject(value) && typeof value.dispose === "function") {
      value.enableDispose = true;
      value.dispose();
    }
  });
}
var TemplateState = class {
  constructor(name, template, settings) {
    Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_name", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    this._name = name;
    this._template = template;
    this._settings = settings;
  }
  _dispose() {
    disposeSettings(this._settings);
  }
  get(key, fallback) {
    const value = this._settings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  set(key, value) {
    this._settings[key] = value;
    this._template._stateChanged(this._name);
  }
  remove(key) {
    delete this._settings[key];
    this._template._stateChanged(this._name);
  }
  setAll(settings) {
    keys(settings).forEach((key) => {
      this._settings[key] = settings[key];
    });
    this._template._stateChanged(this._name);
  }
  _apply(other, seen) {
    each2(this._settings, (key, value) => {
      if (!seen[key] && !other._userSettings[key]) {
        seen[key] = true;
        other.setRaw(key, value);
      }
    });
  }
};
var TemplateStates = class {
  constructor(template) {
    Object.defineProperty(this, "_template", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_states", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    this._template = template;
  }
  _dispose() {
    each2(this._states, (_key, state) => {
      state._dispose();
    });
  }
  lookup(name) {
    return this._states[name];
  }
  create(name, settings) {
    const state = this._states[name];
    if (state) {
      state.setAll(settings);
      return state;
    } else {
      const state2 = new TemplateState(name, this._template, settings);
      this._states[name] = state2;
      this._template._stateChanged(name);
      return state2;
    }
  }
  remove(name) {
    delete this._states[name];
    this._template._stateChanged(name);
  }
  _apply(entity, state) {
    each2(this._states, (key, value) => {
      let seen = state.states[key];
      if (seen == null) {
        seen = state.states[key] = {};
      }
      const other = entity.states.create(key, {});
      value._apply(other, seen);
    });
  }
};
var TemplateAdapters = class {
  constructor() {
    Object.defineProperty(this, "_callbacks", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
  }
  add(key, callback) {
    let callbacks = this._callbacks[key];
    if (callbacks === void 0) {
      callbacks = this._callbacks[key] = [];
    }
    callbacks.push(callback);
    return new Disposer(() => {
      removeFirst(callbacks, callback);
      if (callbacks.length === 0) {
        delete this._callbacks[key];
      }
    });
  }
  remove(key) {
    const callbacks = this._callbacks[key];
    if (callbacks !== void 0) {
      delete this._callbacks[key];
    }
  }
  _apply(entity) {
    const disposers = [];
    each2(this._callbacks, (key, callbacks) => {
      each(callbacks, (callback) => {
        disposers.push(entity.adapters.add(key, callback));
      });
    });
    return new MultiDisposer(disposers);
  }
};
var Template = class _Template {
  constructor(settings, isReal) {
    Object.defineProperty(this, "_disposed", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: false
    });
    Object.defineProperty(this, "_settings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_privateSettings", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_settingEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_privateSettingEvents", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    Object.defineProperty(this, "_entities", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: []
    });
    Object.defineProperty(this, "states", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new TemplateStates(this)
    });
    Object.defineProperty(this, "adapters", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new TemplateAdapters()
    });
    Object.defineProperty(this, "events", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new EventDispatcher()
    });
    Object.defineProperty(this, "setup", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
    this._settings = settings;
  }
  /**
   * Use this method to create an instance of this class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @param   root      Root element
   * @param   settings  Settings
   * @param   template  Template
   * @return            Instantiated object
   */
  static new(settings) {
    return new _Template(settings, true);
  }
  _dispose() {
    disposeSettings(this._settings);
    disposeSettings(this._privateSettings);
  }
  /**
   * Returns `true` if this element is disposed.
   *
   * @return Disposed
   */
  isDisposed() {
    return this._disposed;
  }
  /**
   * Disposes this object.
   */
  dispose() {
    if (!this._disposed) {
      this._disposed = true;
      this._dispose();
    }
  }
  _checkDisposed() {
    if (this._disposed) {
      throw new Error("Template is disposed");
    }
  }
  /**
   * Array of all entities using this template.
   */
  get entities() {
    return this._entities;
  }
  get(key, fallback) {
    this._checkDisposed();
    const value = this._settings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  setRaw(key, value) {
    this._checkDisposed();
    this._settings[key] = value;
  }
  set(key, value) {
    this._checkDisposed();
    if (this._settings[key] !== value) {
      this.setRaw(key, value);
      this._entities.forEach((entity) => {
        entity._setTemplateProperty(this, key, value);
      });
    }
  }
  remove(key) {
    this._checkDisposed();
    if (key in this._settings) {
      delete this._settings[key];
      this._entities.forEach((entity) => {
        entity._removeTemplateProperty(key);
      });
    }
  }
  removeAll() {
    this._checkDisposed();
    each2(this._settings, (key, _value) => {
      this.remove(key);
    });
  }
  getPrivate(key, fallback) {
    this._checkDisposed();
    const value = this._privateSettings[key];
    if (value !== void 0) {
      return value;
    } else {
      return fallback;
    }
  }
  setPrivateRaw(key, value) {
    this._checkDisposed();
    this._privateSettings[key] = value;
    return value;
  }
  setPrivate(key, value) {
    this._checkDisposed();
    if (this._privateSettings[key] !== value) {
      this.setPrivateRaw(key, value);
      this._entities.forEach((entity) => {
        entity._setTemplatePrivateProperty(this, key, value);
      });
    }
    return value;
  }
  removePrivate(key) {
    this._checkDisposed();
    if (key in this._privateSettings) {
      delete this._privateSettings[key];
      this._entities.forEach((entity) => {
        entity._removeTemplatePrivateProperty(key);
      });
    }
  }
  setAll(value) {
    this._checkDisposed();
    each2(value, (key, value2) => {
      this.set(key, value2);
    });
  }
  // TODO code duplication with Properties
  on(key, callback) {
    this._checkDisposed();
    let events = this._settingEvents[key];
    if (events === void 0) {
      events = this._settingEvents[key] = [];
    }
    events.push(callback);
    return new Disposer(() => {
      removeFirst(events, callback);
      if (events.length === 0) {
        delete this._settingEvents[key];
      }
    });
  }
  // TODO code duplication with Properties
  onPrivate(key, callback) {
    this._checkDisposed();
    let events = this._privateSettingEvents[key];
    if (events === void 0) {
      events = this._privateSettingEvents[key] = [];
    }
    events.push(callback);
    return new Disposer(() => {
      removeFirst(events, callback);
      if (events.length === 0) {
        delete this._privateSettingEvents[key];
      }
    });
  }
  _apply(entity, state) {
    this._checkDisposed();
    const disposers = [];
    each2(this._settingEvents, (key, events) => {
      each(events, (event) => {
        disposers.push(entity.on(key, event));
      });
    });
    each2(this._privateSettingEvents, (key, events) => {
      each(events, (event) => {
        disposers.push(entity.onPrivate(key, event));
      });
    });
    this.states._apply(entity, state);
    disposers.push(this.adapters._apply(entity));
    disposers.push(entity.events.copyFrom(this.events));
    return new MultiDisposer(disposers);
  }
  _setObjectTemplate(entity) {
    this._checkDisposed();
    this._entities.push(entity);
  }
  _removeObjectTemplate(entity) {
    remove(this._entities, entity);
  }
  _stateChanged(name) {
    this._checkDisposed();
    this._entities.forEach((entity) => {
      entity._applyStateByKey(name);
    });
  }
};

// ../node_modules/@amcharts/amcharts5/.internal/core/util/Order.js
function compare(left, right) {
  if (left === right) {
    return 0;
  } else if (left < right) {
    return -1;
  } else {
    return 1;
  }
}
function compareArray(left, right, f) {
  const leftLength = left.length;
  const rightLength = right.length;
  const length = Math.min(leftLength, rightLength);
  for (let i = 0; i < length; ++i) {
    const order = f(left[i], right[i]);
    if (order !== 0) {
      return order;
    }
  }
  return compare(leftLength, rightLength);
}
function compareNumber(a, b) {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}

// ../node_modules/@amcharts/amcharts5/.internal/core/Theme.js
var Theme = class {
  constructor(root, isReal) {
    Object.defineProperty(this, "_root", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: void 0
    });
    Object.defineProperty(this, "_rules", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    this._root = root;
    if (!isReal) {
      throw new Error("You cannot use `new Class()`, instead use `Class.new()`");
    }
  }
  /**
   * Use this method to create an instance of this class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/getting-started/#New_element_syntax} for more info
   * @param   root      Root element
   * @param   settings  Settings
   * @param   template  Template
   * @return            Instantiated object
   */
  static new(root) {
    const x = new this(root, true);
    x.setupDefaultRules();
    return x;
  }
  setupDefaultRules() {
  }
  /**
   * Looks up the rules for a specific theme class.
   *
   * @see {@link https://www.amcharts.com/docs/v5/themes/} for more info
   * @param   themeClass Theme class
   * @return             Array<IRule<A>>
   */
  _lookupRules(themeClass) {
    return this._rules[themeClass];
  }
  /**
   * Creates a [[Template]] for specific theme class and tags.
   *
   * NOTE: the difference from `rule()` is that `ruleRaw()` does not do any
   * type checks.
   *
   * @see {@link https://www.amcharts.com/docs/v5/themes/} for more info
   * @param   themeClass Theme class
   * @param   themeTags  Theme tags
   * @return             Template
   */
  ruleRaw(themeClass, themeTags = []) {
    let rules = this._rules[themeClass];
    if (!rules) {
      rules = this._rules[themeClass] = [];
    }
    themeTags.sort(compare);
    const {
      index,
      found
    } = getSortedIndex(rules, (x) => {
      const order = compare(x.tags.length, themeTags.length);
      if (order === 0) {
        return compareArray(x.tags, themeTags, compare);
      } else {
        return order;
      }
    });
    if (found) {
      return rules[index].template;
    } else {
      const template = Template.new({});
      rules.splice(index, 0, {
        tags: themeTags,
        template
      });
      return template;
    }
  }
  /**
   * Creates a [[Template]] for specific theme class and tags.
   *
   * @see {@link https://www.amcharts.com/docs/v5/themes/} for more info
   * @param   themeClass Theme class
   * @param   themeTags  Theme tags
   * @return             Template
   */
  rule(themeClass, themeTags = []) {
    return this.ruleRaw(themeClass, themeTags);
  }
};

export {
  isNaN,
  toNumber,
  toDate,
  numberToString,
  isDate,
  isString,
  isNumber,
  isObject,
  isArray,
  PLACEHOLDER,
  PLACEHOLDER2,
  Type_exports,
  indexOf,
  map,
  each,
  eachReverse,
  eachContinue,
  remove,
  removeFirst,
  move,
  pushOne,
  copy,
  insertIndex,
  removeIndex,
  find,
  findReverse,
  getSortedIndex,
  getFirstSortedIndex,
  keepIf,
  Array_exports,
  DisposerClass,
  Disposer,
  ArrayDisposer,
  MultiDisposer,
  MutableValueDisposer,
  CounterDisposer,
  EventDispatcher,
  keys,
  keysOrdered,
  copy2,
  each2,
  eachContinue2,
  Object_exports,
  Template,
  compare,
  compareArray,
  compareNumber,
  Theme
};
//# sourceMappingURL=chunk-QF7X2JEG.js.map
