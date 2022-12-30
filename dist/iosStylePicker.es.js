var He = Object.defineProperty;
var We = (c, e, r) => e in c ? He(c, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : c[e] = r;
var g = (c, e, r) => (We(c, typeof e != "symbol" ? e + "" : e, r), r), Ot = (c, e, r) => {
  if (!e.has(c))
    throw TypeError("Cannot " + r);
};
var v = (c, e, r) => (Ot(c, e, "read from private field"), r ? r.call(c) : e.get(c)), R = (c, e, r) => {
  if (e.has(c))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(c) : e.set(c, r);
}, _ = (c, e, r, s) => (Ot(c, e, "write to private field"), s ? s.call(c, r) : e.set(c, r), r);
var A = (c, e, r) => (Ot(c, e, "access private method"), r);
import ue, { useRef as dt, useEffect as Pt } from "react";
import At from "./formatters/ko.es.js";
var Yt = { exports: {} }, Z = {};
var oe;
function Ne() {
  if (oe)
    return Z;
  oe = 1;
  var c = ue, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(S, E, h) {
    var p, C = {}, D = null, W = null;
    h !== void 0 && (D = "" + h), E.key !== void 0 && (D = "" + E.key), E.ref !== void 0 && (W = E.ref);
    for (p in E)
      s.call(E, p) && !a.hasOwnProperty(p) && (C[p] = E[p]);
    if (S && S.defaultProps)
      for (p in E = S.defaultProps, E)
        C[p] === void 0 && (C[p] = E[p]);
    return { $$typeof: e, type: S, key: D, ref: W, props: C, _owner: o.current };
  }
  return Z.Fragment = r, Z.jsx = T, Z.jsxs = T, Z;
}
var tt = {};
var ae;
function qe() {
  return ae || (ae = 1, process.env.NODE_ENV !== "production" && function() {
    var c = ue, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), S = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), st = Symbol.iterator, ot = "@@iterator";
    function at(t) {
      if (t === null || typeof t != "object")
        return null;
      var n = st && t[st] || t[ot];
      return typeof n == "function" ? n : null;
    }
    var k = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          i[u - 1] = arguments[u];
        P("error", t, i);
      }
    }
    function P(t, n, i) {
      {
        var u = k.ReactDebugCurrentFrame, d = u.getStackAddendum();
        d !== "" && (n += "%s", i = i.concat([d]));
        var m = i.map(function(f) {
          return String(f);
        });
        m.unshift("Warning: " + n), Function.prototype.apply.call(console[t], console, m);
      }
    }
    var $ = !1, Et = !1, he = !1, le = !1, fe = !1, $t;
    $t = Symbol.for("react.module.reference");
    function de(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === a || fe || t === o || t === h || t === p || le || t === W || $ || Et || he || typeof t == "object" && t !== null && (t.$$typeof === D || t.$$typeof === C || t.$$typeof === T || t.$$typeof === S || t.$$typeof === E || t.$$typeof === $t || t.getModuleId !== void 0));
    }
    function ve(t, n, i) {
      var u = t.displayName;
      if (u)
        return u;
      var d = n.displayName || n.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function It(t) {
      return t.displayName || "Context";
    }
    function I(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case S:
            var n = t;
            return It(n) + ".Consumer";
          case T:
            var i = t;
            return It(i._context) + ".Provider";
          case E:
            return ve(t, t.render, "ForwardRef");
          case C:
            var u = t.displayName || null;
            return u !== null ? u : I(t.type) || "Memo";
          case D: {
            var d = t, m = d._payload, f = d._init;
            try {
              return I(f(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, K = 0, jt, Ft, Ht, Wt, Nt, qt, Ut;
    function Vt() {
    }
    Vt.__reactDisabledLog = !0;
    function ge() {
      {
        if (K === 0) {
          jt = console.log, Ft = console.info, Ht = console.warn, Wt = console.error, Nt = console.group, qt = console.groupCollapsed, Ut = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Vt,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        K++;
      }
    }
    function me() {
      {
        if (K--, K === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, t, {
              value: jt
            }),
            info: N({}, t, {
              value: Ft
            }),
            warn: N({}, t, {
              value: Ht
            }),
            error: N({}, t, {
              value: Wt
            }),
            group: N({}, t, {
              value: Nt
            }),
            groupCollapsed: N({}, t, {
              value: qt
            }),
            groupEnd: N({}, t, {
              value: Ut
            })
          });
        }
        K < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wt = k.ReactCurrentDispatcher, bt;
    function ut(t, n, i) {
      {
        if (bt === void 0)
          try {
            throw Error();
          } catch (d) {
            var u = d.stack.trim().match(/\n( *(at )?)/);
            bt = u && u[1] || "";
          }
        return `
` + bt + t;
      }
    }
    var Tt = !1, ct;
    {
      var pe = typeof WeakMap == "function" ? WeakMap : Map;
      ct = new pe();
    }
    function Bt(t, n) {
      if (!t || Tt)
        return "";
      {
        var i = ct.get(t);
        if (i !== void 0)
          return i;
      }
      var u;
      Tt = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = wt.current, wt.current = null, ge();
      try {
        if (n) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              u = j;
            }
            Reflect.construct(t, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              u = j;
            }
            t.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            u = j;
          }
          t();
        }
      } catch (j) {
        if (j && u && typeof j.stack == "string") {
          for (var l = j.stack.split(`
`), x = u.stack.split(`
`), y = l.length - 1, b = x.length - 1; y >= 1 && b >= 0 && l[y] !== x[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (l[y] !== x[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || l[y] !== x[b]) {
                    var L = `
` + l[y].replace(" at new ", " at ");
                    return t.displayName && L.includes("<anonymous>") && (L = L.replace("<anonymous>", t.displayName)), typeof t == "function" && ct.set(t, L), L;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        Tt = !1, wt.current = m, me(), Error.prepareStackTrace = d;
      }
      var B = t ? t.displayName || t.name : "", se = B ? ut(B) : "";
      return typeof t == "function" && ct.set(t, se), se;
    }
    function _e(t, n, i) {
      return Bt(t, !1);
    }
    function ye(t) {
      var n = t.prototype;
      return !!(n && n.isReactComponent);
    }
    function ht(t, n, i) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Bt(t, ye(t));
      if (typeof t == "string")
        return ut(t);
      switch (t) {
        case h:
          return ut("Suspense");
        case p:
          return ut("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case E:
            return _e(t.render);
          case C:
            return ht(t.type, n, i);
          case D: {
            var u = t, d = u._payload, m = u._init;
            try {
              return ht(m(d), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var lt = Object.prototype.hasOwnProperty, Xt = {}, zt = k.ReactDebugCurrentFrame;
    function ft(t) {
      if (t) {
        var n = t._owner, i = ht(t.type, t._source, n ? n.type : null);
        zt.setExtraStackFrame(i);
      } else
        zt.setExtraStackFrame(null);
    }
    function Ee(t, n, i, u, d) {
      {
        var m = Function.call.bind(lt);
        for (var f in t)
          if (m(t, f)) {
            var l = void 0;
            try {
              if (typeof t[f] != "function") {
                var x = Error((u || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              l = t[f](n, f, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              l = y;
            }
            l && !(l instanceof Error) && (ft(d), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, f, typeof l), ft(null)), l instanceof Error && !(l.message in Xt) && (Xt[l.message] = !0, ft(d), w("Failed %s type: %s", i, l.message), ft(null));
          }
      }
    }
    var we = Array.isArray;
    function Rt(t) {
      return we(t);
    }
    function be(t) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return i;
      }
    }
    function Te(t) {
      try {
        return Gt(t), !1;
      } catch {
        return !0;
      }
    }
    function Gt(t) {
      return "" + t;
    }
    function Jt(t) {
      if (Te(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", be(t)), Gt(t);
    }
    var Q = k.ReactCurrentOwner, Re = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Kt, Qt, St;
    St = {};
    function Se(t) {
      if (lt.call(t, "ref")) {
        var n = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ce(t) {
      if (lt.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function xe(t, n) {
      if (typeof t.ref == "string" && Q.current && n && Q.current.stateNode !== n) {
        var i = I(Q.current.type);
        St[i] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Q.current.type), t.ref), St[i] = !0);
      }
    }
    function De(t, n) {
      {
        var i = function() {
          Kt || (Kt = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Oe(t, n) {
      {
        var i = function() {
          Qt || (Qt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Pe = function(t, n, i, u, d, m, f) {
      var l = {
        $$typeof: e,
        type: t,
        key: n,
        ref: i,
        props: f,
        _owner: m
      };
      return l._store = {}, Object.defineProperty(l._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(l, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(l, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
    };
    function Ae(t, n, i, u, d) {
      {
        var m, f = {}, l = null, x = null;
        i !== void 0 && (Jt(i), l = "" + i), Ce(n) && (Jt(n.key), l = "" + n.key), Se(n) && (x = n.ref, xe(n, d));
        for (m in n)
          lt.call(n, m) && !Re.hasOwnProperty(m) && (f[m] = n[m]);
        if (t && t.defaultProps) {
          var y = t.defaultProps;
          for (m in y)
            f[m] === void 0 && (f[m] = y[m]);
        }
        if (l || x) {
          var b = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          l && De(f, b), x && Oe(f, b);
        }
        return Pe(t, l, x, d, u, Q.current, f);
      }
    }
    var Ct = k.ReactCurrentOwner, Zt = k.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var n = t._owner, i = ht(t.type, t._source, n ? n.type : null);
        Zt.setExtraStackFrame(i);
      } else
        Zt.setExtraStackFrame(null);
    }
    var xt;
    xt = !1;
    function Dt(t) {
      return typeof t == "object" && t !== null && t.$$typeof === e;
    }
    function te() {
      {
        if (Ct.current) {
          var t = I(Ct.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Le(t) {
      {
        if (t !== void 0) {
          var n = t.fileName.replace(/^.*[\\\/]/, ""), i = t.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var ee = {};
    function ke(t) {
      {
        var n = te();
        if (!n) {
          var i = typeof t == "string" ? t : t.displayName || t.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function re(t, n) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var i = ke(n);
        if (ee[i])
          return;
        ee[i] = !0;
        var u = "";
        t && t._owner && t._owner !== Ct.current && (u = " It was passed a child from " + I(t._owner.type) + "."), V(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), V(null);
      }
    }
    function ne(t, n) {
      {
        if (typeof t != "object")
          return;
        if (Rt(t))
          for (var i = 0; i < t.length; i++) {
            var u = t[i];
            Dt(u) && re(u, n);
          }
        else if (Dt(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var d = at(t);
          if (typeof d == "function" && d !== t.entries)
            for (var m = d.call(t), f; !(f = m.next()).done; )
              Dt(f.value) && re(f.value, n);
        }
      }
    }
    function Me(t) {
      {
        var n = t.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === E || n.$$typeof === C))
          i = n.propTypes;
        else
          return;
        if (i) {
          var u = I(n);
          Ee(i, t.props, "prop", u, t);
        } else if (n.PropTypes !== void 0 && !xt) {
          xt = !0;
          var d = I(n);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ye(t) {
      {
        for (var n = Object.keys(t.props), i = 0; i < n.length; i++) {
          var u = n[i];
          if (u !== "children" && u !== "key") {
            V(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function ie(t, n, i, u, d, m) {
      {
        var f = de(t);
        if (!f) {
          var l = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (l += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = Le(d);
          x ? l += x : l += te();
          var y;
          t === null ? y = "null" : Rt(t) ? y = "array" : t !== void 0 && t.$$typeof === e ? (y = "<" + (I(t.type) || "Unknown") + " />", l = " Did you accidentally export a JSX literal instead of a component?") : y = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, l);
        }
        var b = Ae(t, n, i, d, m);
        if (b == null)
          return b;
        if (f) {
          var L = n.children;
          if (L !== void 0)
            if (u)
              if (Rt(L)) {
                for (var B = 0; B < L.length; B++)
                  ne(L[B], t);
                Object.freeze && Object.freeze(L);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ne(L, t);
        }
        return t === s ? Ye(b) : Me(b), b;
      }
    }
    function $e(t, n, i) {
      return ie(t, n, i, !0);
    }
    function Ie(t, n, i) {
      return ie(t, n, i, !1);
    }
    var je = Ie, Fe = $e;
    tt.Fragment = s, tt.jsx = je, tt.jsxs = Fe;
  }()), tt;
}
(function(c) {
  process.env.NODE_ENV === "production" ? c.exports = Ne() : c.exports = qe();
})(Yt);
const Lt = Yt.exports.jsx, Ue = Yt.exports.jsxs, Ve = {
  easeOutCubic: function(c) {
    return Math.pow(c - 1, 3) + 1;
  },
  easeOutQuart: function(c) {
    return -(Math.pow(c - 1, 4) - 1);
  }
};
function vt(c, e) {
  let r = c;
  for (; r < 0; )
    r += e;
  return r % e;
}
function gt(c, e) {
  return [...new Array(e - c)].map((r, s) => c + s);
}
const F = {
  wrapper: "ios-style-picker",
  optionList: "ios-style-picker__option-list",
  optionItem: "ios-style-picker__option-item",
  highlight: "ios-style-picker__highlight",
  highlightList: "ios-style-picker__highlight-list",
  highlightItem: "ios-style-picker__highlight-item"
};
class Be {
  constructor({
    container: e,
    source: r,
    isInfinite: s,
    wheelCount: o,
    itemAngle: a,
    itemHeight: T,
    radius: S
  }) {
    g(this, "_container");
    g(this, "_optionList");
    g(this, "_optionItems");
    g(this, "_highlightList");
    g(this, "_source");
    g(this, "_isInfinite");
    g(this, "wheelCount");
    g(this, "itemAngle");
    g(this, "itemHeight");
    g(this, "radius");
    this._container = e, this._source = r, this._isInfinite = s, this.wheelCount = o, this.itemAngle = a, this.itemHeight = T, this.radius = S;
    const E = this._getOptionItems(), h = this._getHighlightItems();
    this._container.innerHTML = `
<div class="${F.wrapper}">
  <ul
    class="${F.optionList}"
    style="transform: translate3d(0, 0, ${-this.radius}px) rotateX(0deg);"
  >
    ${E}
  </ul>
  <div
    class="${F.highlight}"
    style="height: ${this.itemHeight}px; line-height: ${this.itemHeight}px;"
  >
    <ul class="${F.highlightList}">
      ${h}
    </ul>
  </div>
</div>`;
    const p = this._container.querySelector(`.${F.optionList}`);
    if (!p)
      throw new Error("optionList does not exists");
    this._optionList = p;
    const C = this._container.querySelectorAll(
      `.${F.optionItem}`
    );
    if (!C)
      throw new Error("optionList does not exists");
    this._optionItems = C;
    const D = this._container.querySelector(
      `.${F.highlightList}`
    );
    if (!D)
      throw new Error("highlightList does not exists.");
    s && (D.style.top = `${-this.itemHeight}px`), this._highlightList = D;
  }
  _getOptionItems() {
    return (this._isInfinite ? gt(-this.wheelCount / 4, this._source.length + this.wheelCount / 4) : gt(0, this._source.length)).map((s) => ({
      rotateX: -this.itemAngle * s,
      index: s,
      text: this._source[(s + this._source.length) % this._source.length].text
    })).reduce(
      (s, o) => `${s}
<li
  class="${F.optionItem}"
  style="
    top: ${this.itemHeight * -0.5}px;
    height: ${this.itemHeight}px;
    line-height: ${this.itemHeight}px;
    transform: rotateX(${o.rotateX}deg) translate3d(0, 0, ${this.radius}px);
  "
  data-index="${o.index}"
>
  ${o.text}
</li>`,
      ""
    );
  }
  _getHighlightItems() {
    return (this._isInfinite ? gt(-1, this._source.length + 1) : gt(0, this._source.length)).map((s) => ({
      text: this._source[(s + this._source.length) % this._source.length].text
    })).reduce(
      (s, o) => `${s}
<li
  class="${F.highlightItem}"
  style="height: ${this.itemHeight}px;"
>
  ${o.text}
</li>`,
      ""
    );
  }
  scroll(e) {
    const r = -this.radius, s = this.itemAngle * e;
    this._optionList.style.transform = `translate3d(0, 0, ${r}px) rotateX(${s}deg)`;
    const o = -e * this.itemHeight;
    this._highlightList.style.transform = `translate3d(0, ${o}px, 0)`, [...this._optionItems].forEach((a) => {
      if (a.dataset.index === void 0)
        throw new Error("itemElem.dataset.index does not exists");
      a.style.visibility = Math.abs(+a.dataset.index - e) > this.wheelCount / 4 ? "hidden" : "visible";
    });
  }
  addEventListener(e, r) {
    this._container.addEventListener(e, r);
  }
  removeEventListener(e, r) {
    this._container.removeEventListener(e, r);
  }
  equalOrContains(e) {
    var r;
    return ((r = this._container) == null ? void 0 : r.contains(e)) || this._container === e;
  }
  clear() {
    this._container.innerHTML = "";
  }
  get container() {
    return this._container;
  }
}
class kt {
  constructor(e, r) {
    g(this, "variant");
    g(this, "source");
    g(this, "selected");
    g(this, "onChange");
    g(this, "sensitivity");
    g(this, "wheelCount");
    g(this, "exceedA");
    g(this, "moveT");
    g(this, "moving");
    g(this, "targetElement");
    g(this, "html");
    g(this, "events");
    g(this, "itemHeight");
    g(this, "itemAngle");
    g(this, "radius");
    g(this, "scroll");
    g(this, "touchData", {
      startY: 0,
      yArr: [],
      touchScroll: 0
    });
    var o, a;
    this.variant = r.variant ?? "infinite", this.source = r.source, this.selected = this.source[0], this.onChange = r.onChange;
    const s = r.count ?? 20;
    if (this.wheelCount = s - s % 4, this.sensitivity = r.sensitivity ?? 8, this.exceedA = 10, this.moveT = 0, this.moving = !1, this.targetElement = e, !this.targetElement)
      throw new Error("targetElement does not exists.");
    this.itemHeight = this.targetElement.offsetHeight * 3 / s, this.itemAngle = 360 / s, this.radius = this.itemHeight / Math.tan(this.itemAngle * Math.PI / 180), this.scroll = 0, this._create(this.source), this.events = {
      touchstart: this._createEventListener("touchstart"),
      touchmove: this._createEventListener("touchmove"),
      touchend: this._createEventListener("touchend")
    }, (o = this.html) == null || o.addEventListener("touchstart", this.events.touchstart), document.addEventListener("mousedown", this.events.touchstart), (a = this.html) == null || a.addEventListener("touchend", this.events.touchend), document.addEventListener("mouseup", this.events.touchend), this.source.length && this.select(this.selected.value);
  }
  _createEventListener(e) {
    return (r) => {
      var s;
      !((s = this.html) != null && s.equalOrContains(r.target)) || this.source.length !== 0 && (r.preventDefault(), this[`_${e}`](r));
    };
  }
  _touchstart(e) {
    if (!this.html)
      throw new Error("this.html does not exists");
    this.html.addEventListener("touchmove", this.events.touchmove), document.addEventListener("mousemove", this.events.touchmove);
    const r = e.clientY ?? e.touches[0].clientY;
    this.touchData.startY = r, this.touchData.yArr = [[r, new Date().getTime()]], this.touchData.touchScroll = this.scroll, this._stop();
  }
  _touchmove(e) {
    const r = e.clientY ?? e.touches[0].clientY;
    this.touchData.yArr.push([r, new Date().getTime()]), this.touchData.yArr.length > 5 && this.touchData.yArr.unshift();
    const o = (this.touchData.startY - r) / this.itemHeight + this.scroll, a = this.variant === "infinite" ? vt(o, this.source.length) : o < 0 ? o * 0.3 : o > this.source.length ? this.source.length + (o - this.source.length) * 0.3 : o;
    this.touchData.touchScroll = this._moveTo(a);
  }
  _getInitV() {
    if (this.touchData.yArr.length === 1)
      return 0;
    const e = this.touchData.yArr[this.touchData.yArr.length - 2][1], r = this.touchData.yArr[this.touchData.yArr.length - 1][1], s = this.touchData.yArr[this.touchData.yArr.length - 2][0], o = this.touchData.yArr[this.touchData.yArr.length - 1][0], a = (s - o) / this.itemHeight * 1e3 / (r - e), T = a > 0 ? 1 : -1;
    return Math.abs(a) > 30 ? 30 * T : a;
  }
  _touchend(e) {
    if (!this.html)
      throw new Error("this.html does not exists.");
    this.html.removeEventListener("touchmove", this.events.touchmove), document.removeEventListener("mousemove", this.events.touchmove);
    const r = this._getInitV();
    this.scroll = this.touchData.touchScroll, this._animateMoveByInitV(r);
  }
  _create(e) {
    if (!e.length)
      throw new Error("source does not exists.");
    if (this.variant === "infinite") {
      let r = [...e];
      for (; r.length < this.wheelCount / 2; )
        r = r.concat(e);
      e = r;
    }
    this.source = e, this.html = new Be({
      container: this.targetElement,
      source: this.source,
      isInfinite: this.variant === "infinite",
      wheelCount: this.wheelCount,
      itemAngle: this.itemAngle,
      itemHeight: this.itemHeight,
      radius: this.radius
    });
  }
  _moveTo(e) {
    if (!this.html)
      throw new Error("html does not exists");
    return this.variant === "infinite" && (e = vt(e, this.source.length)), this.html.scroll(e), e;
  }
  async _animateMoveByInitV(e) {
    if (this.variant === "infinite") {
      const r = e > 0 ? -this.sensitivity : this.sensitivity, s = Math.abs(e / r), o = e * s + r * s * s / 2, a = Math.round(this.scroll + o);
      await this._animateToScroll(this.scroll, a, s, "easeOutQuart");
    } else if (this.scroll < 0 || this.scroll > this.source.length - 1) {
      const r = this.scroll < 0 ? 0 : this.source.length - 1;
      await this._animateToScroll(
        this.scroll,
        r,
        Math.sqrt(Math.abs((this.scroll - r) / this.exceedA))
      );
    } else {
      const r = e > 0 ? -this.sensitivity : this.sensitivity;
      let s = Math.abs(e / r), o = e * s + r * s * s / 2, a = Math.round(this.scroll + o);
      a = a < 0 ? 0 : a > this.source.length - 1 ? this.source.length - 1 : a, o = a - this.scroll, s = Math.sqrt(Math.abs(o / r)), await this._animateToScroll(this.scroll, a, s, "easeOutQuart");
    }
    this._selectByScroll(this.scroll);
  }
  _animateToScroll(e, r, s, o = "easeOutQuart") {
    if (e === r || s === 0) {
      this._moveTo(e);
      return;
    }
    const a = new Date().getTime() / 1e3, T = r - e;
    return new Promise((S, E) => {
      this.moving = !0;
      const h = () => {
        const p = new Date().getTime() / 1e3 - a;
        p < s ? (this.scroll = this._moveTo(
          e + Ve[o](p / s) * T
        ), this.moveT = requestAnimationFrame(h)) : (S(), this._stop(), this.scroll = this._moveTo(e + T));
      };
      h();
    });
  }
  _stop() {
    this.moving = !1, cancelAnimationFrame(this.moveT);
  }
  _selectByScroll(e) {
    e = vt(e, this.source.length) | 0, e > this.source.length - 1 && (e = this.source.length - 1, this._moveTo(e)), this._moveTo(e), this.scroll = e, this.selected = this.source[e], this.onChange && this.onChange(this.selected);
  }
  updateSource(e) {
    this._create(e), this.moving || this._selectByScroll(this.scroll);
  }
  async select(e) {
    for (let r = 0; r < this.source.length; r++)
      if (this.source[r].value === e) {
        window.cancelAnimationFrame(this.moveT);
        const s = vt(this.scroll, this.source.length), o = r, a = Math.sqrt(Math.abs((o - s) / this.sensitivity));
        await this._animateToScroll(s, o, a), this._selectByScroll(r);
        return;
      }
    throw new Error(`can't find value: ${e}`);
  }
  destroy() {
    var e, r, s, o;
    this._stop(), (e = this.html) == null || e.removeEventListener("touchstart", this.events.touchstart), (r = this.html) == null || r.removeEventListener("touchmove", this.events.touchmove), (s = this.html) == null || s.removeEventListener("touchend", this.events.touchend), document.removeEventListener("mousedown", this.events.touchstart), document.removeEventListener("mousemove", this.events.touchmove), document.removeEventListener("mouseup", this.events.touchend), (o = this.html) == null || o.clear();
  }
}
var O, M, Y, H, et, rt, nt, X, q, U, yt, ce, z, mt, it, Mt, G, pt, J, _t;
class Xe {
  constructor({
    fromDate: e,
    toDate: r,
    currentYear: s,
    currentMonth: o,
    formatters: a
  } = {}) {
    R(this, yt);
    R(this, z);
    R(this, it);
    R(this, G);
    R(this, J);
    R(this, O, void 0);
    R(this, M, void 0);
    R(this, Y, void 0);
    R(this, H, void 0);
    R(this, et, void 0);
    R(this, rt, void 0);
    R(this, nt, void 0);
    R(this, X, void 0);
    R(this, q, void 0);
    R(this, U, void 0);
    var T;
    _(this, O, e ?? new Date()), _(this, M, r ?? A(this, yt, ce).call(this)), _(this, Y, s ?? v(this, O).getFullYear()), _(this, H, o ?? v(this, O).getMonth() + 1), _(this, et, (a == null ? void 0 : a.year) ?? At.year), _(this, rt, (a == null ? void 0 : a.month) ?? At.month), _(this, nt, (a == null ? void 0 : a.day) ?? ((T = At) == null ? void 0 : T.day)), _(this, X, A(this, it, Mt).call(this)), _(this, q, A(this, G, pt).call(this)), _(this, U, A(this, J, _t).call(this));
  }
  init({ fromDate: e, toDate: r, currentYear: s, currentMonth: o }) {
    e && _(this, O, e), r && _(this, M, r), s && _(this, Y, s), o && _(this, H, o), _(this, X, A(this, it, Mt).call(this)), _(this, q, A(this, G, pt).call(this)), _(this, U, A(this, J, _t).call(this));
  }
  setCurrent(e, r) {
    _(this, Y, e), _(this, q, A(this, G, pt).call(this)), r && (_(this, H, r), _(this, U, A(this, J, _t).call(this)));
  }
  get years() {
    return v(this, X);
  }
  get months() {
    return v(this, q);
  }
  get days() {
    return v(this, U);
  }
}
O = new WeakMap(), M = new WeakMap(), Y = new WeakMap(), H = new WeakMap(), et = new WeakMap(), rt = new WeakMap(), nt = new WeakMap(), X = new WeakMap(), q = new WeakMap(), U = new WeakMap(), yt = new WeakSet(), ce = function() {
  const e = new Date(v(this, O));
  return e.setFullYear(e.getFullYear() + 40), e.setMonth(11), e.setDate(31), e;
}, z = new WeakSet(), mt = function(e, r, s) {
  return [...new Array(r - e + 1)].map((o, a) => ({
    value: a + e,
    text: s(a + e)
  }));
}, it = new WeakSet(), Mt = function() {
  return A(this, z, mt).call(this, v(this, O).getFullYear(), v(this, M).getFullYear(), v(this, et));
}, G = new WeakSet(), pt = function() {
  const e = v(this, Y) === v(this, O).getFullYear() ? v(this, O).getMonth() + 1 : 1, r = v(this, Y) === v(this, M).getFullYear() ? v(this, M).getMonth() + 1 : 12;
  return A(this, z, mt).call(this, e, r, v(this, rt));
}, J = new WeakSet(), _t = function() {
  const e = v(this, Y) === v(this, O).getFullYear() && v(this, H) === v(this, O).getMonth() + 1 ? v(this, O).getDate() : 1, r = v(this, Y) === v(this, M).getFullYear() && v(this, H) === v(this, M).getMonth() + 1 ? v(this, M).getDate() : new Date(v(this, Y), v(this, H), 0).getDate();
  return A(this, z, mt).call(this, e, r, v(this, nt));
};
const ze = 100;
function Qe({
  onChange: c,
  fromDate: e = new Date(),
  toDate: r,
  initDate: s,
  infinite: o,
  formatters: a,
  className: T
}) {
  const S = s ?? e, E = "ios-style-date-picker" + (T ? ` ${T}` : ""), h = dt({
    currentYear: e.getFullYear(),
    currentMonth: e.getMonth() + 1,
    currentDay: e.getDate(),
    source: new Xe({
      fromDate: e,
      toDate: r,
      currentYear: e.getFullYear(),
      currentMonth: e.getMonth() + 1,
      formatters: a
    }),
    onChange: c,
    onChangeTimeout: null
  }).current, p = dt(null), C = dt(null), D = dt(null);
  return Pt(() => {
    h.source.init({
      fromDate: e,
      toDate: r,
      currentYear: h.currentYear,
      currentMonth: h.currentMonth
    });
  }, [e, r]), Pt(() => {
    h.onChange = c;
  }, [c]), Pt(() => {
    const W = () => {
      h.onChangeTimeout && clearTimeout(h.onChangeTimeout), h.onChangeTimeout = setTimeout(() => {
        h.onChange(h.currentYear, h.currentMonth, h.currentDay), h.onChangeTimeout = null;
      }, ze);
    }, st = () => {
      h.source.setCurrent(h.currentYear), k.updateSource(h.source.months);
    }, ot = () => {
      h.source.setCurrent(h.currentYear, h.currentMonth), w.updateSource(h.source.days);
    }, at = new kt(p.current, {
      variant: o ? "infinite" : "normal",
      source: h.source.years,
      onChange: (P) => {
        const $ = h.currentYear !== P.value;
        h.currentYear = P.value, $ && (st(), ot(), W());
      }
    }), k = new kt(C.current, {
      variant: o ? "infinite" : "normal",
      source: h.source.months,
      onChange: (P) => {
        const $ = h.currentMonth !== P.value;
        h.currentMonth = P.value, $ && (ot(), W());
      }
    }), w = new kt(D.current, {
      variant: o ? "infinite" : "normal",
      source: h.source.days,
      onChange: (P) => {
        const $ = h.currentDay !== P.value;
        h.currentDay = P.value, $ && W();
      }
    });
    return setTimeout(() => {
      const P = S.getFullYear(), $ = S.getMonth() + 1, Et = S.getDate();
      h.source.setCurrent(P, $), k.updateSource(h.source.months), w.updateSource(h.source.days), at.select(P), k.select($), w.select(Et);
    }, 0), () => {
      at.destroy(), k.destroy(), w.destroy();
    };
  }, [o]), /* @__PURE__ */ Ue("div", { className: E, children: [
    /* @__PURE__ */ Lt("div", { ref: p }),
    /* @__PURE__ */ Lt("div", { ref: C }),
    /* @__PURE__ */ Lt("div", { ref: D })
  ] });
}
export {
  Qe as DatePicker
};
//# sourceMappingURL=iosStylePicker.es.js.map
