var mt = Object.defineProperty;
var pt = (l, t, r) => t in l ? mt(l, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : l[t] = r;
var g = (l, t, r) => (pt(l, typeof t != "symbol" ? t + "" : t, r), r);
import De, { useRef as G, useEffect as Me } from "react";
var he = { exports: {} }, D = {};
var Ye;
function _t() {
  if (Ye)
    return D;
  Ye = 1;
  var l = De, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, o = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(y, E, c) {
    var p, T = {}, S = null, $ = null;
    c !== void 0 && (S = "" + c), E.key !== void 0 && (S = "" + E.key), E.ref !== void 0 && ($ = E.ref);
    for (p in E)
      s.call(E, p) && !u.hasOwnProperty(p) && (T[p] = E[p]);
    if (y && y.defaultProps)
      for (p in E = y.defaultProps, E)
        T[p] === void 0 && (T[p] = E[p]);
    return { $$typeof: t, type: y, key: S, ref: $, props: T, _owner: o.current };
  }
  return D.Fragment = r, D.jsx = f, D.jsxs = f, D;
}
var H = {};
var Fe;
function yt() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var l = De, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), y = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), W = Symbol.iterator, N = "@@iterator";
    function q(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = W && e[W] || e[N];
      return typeof n == "function" ? n : null;
    }
    var O = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          i[a - 1] = arguments[a];
        x("error", e, i);
      }
    }
    function x(e, n, i) {
      {
        var a = O.ReactDebugCurrentFrame, d = a.getStackAddendum();
        d !== "" && (n += "%s", i = i.concat([d]));
        var m = i.map(function(v) {
          return String(v);
        });
        m.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, m);
      }
    }
    var P = !1, Q = !1, He = !1, We = !1, Ne = !1, fe;
    fe = Symbol.for("react.module.reference");
    function qe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === u || Ne || e === o || e === c || e === p || We || e === $ || P || Q || He || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === T || e.$$typeof === f || e.$$typeof === y || e.$$typeof === E || e.$$typeof === fe || e.getModuleId !== void 0));
    }
    function Ue(e, n, i) {
      var a = e.displayName;
      if (a)
        return a;
      var d = n.displayName || n.name || "";
      return d !== "" ? i + "(" + d + ")" : i;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var n = e;
            return ve(n) + ".Consumer";
          case f:
            var i = e;
            return ve(i._context) + ".Provider";
          case E:
            return Ue(e, e.render, "ForwardRef");
          case T:
            var a = e.displayName || null;
            return a !== null ? a : A(e.type) || "Memo";
          case S: {
            var d = e, m = d._payload, v = d._init;
            try {
              return A(v(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, Y = 0, de, ge, me, pe, _e, ye, Ee;
    function be() {
    }
    be.__reactDisabledLog = !0;
    function Ve() {
      {
        if (Y === 0) {
          de = console.log, ge = console.info, me = console.warn, pe = console.error, _e = console.group, ye = console.groupCollapsed, Ee = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: be,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Be() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: de
            }),
            info: I({}, e, {
              value: ge
            }),
            warn: I({}, e, {
              value: me
            }),
            error: I({}, e, {
              value: pe
            }),
            group: I({}, e, {
              value: _e
            }),
            groupCollapsed: I({}, e, {
              value: ye
            }),
            groupEnd: I({}, e, {
              value: Ee
            })
          });
        }
        Y < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Z = O.ReactCurrentDispatcher, ee;
    function U(e, n, i) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (d) {
            var a = d.stack.trim().match(/\n( *(at )?)/);
            ee = a && a[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var te = !1, V;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      V = new Xe();
    }
    function we(e, n) {
      if (!e || te)
        return "";
      {
        var i = V.get(e);
        if (i !== void 0)
          return i;
      }
      var a;
      te = !0;
      var d = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = Z.current, Z.current = null, Ve();
      try {
        if (n) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (L) {
              a = L;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (L) {
              a = L;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            a = L;
          }
          e();
        }
      } catch (L) {
        if (L && a && typeof L.stack == "string") {
          for (var h = L.stack.split(`
`), R = a.stack.split(`
`), _ = h.length - 1, w = R.length - 1; _ >= 1 && w >= 0 && h[_] !== R[w]; )
            w--;
          for (; _ >= 1 && w >= 0; _--, w--)
            if (h[_] !== R[w]) {
              if (_ !== 1 || w !== 1)
                do
                  if (_--, w--, w < 0 || h[_] !== R[w]) {
                    var C = `
` + h[_].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && V.set(e, C), C;
                  }
                while (_ >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        te = !1, Z.current = m, Be(), Error.prepareStackTrace = d;
      }
      var M = e ? e.displayName || e.name : "", je = M ? U(M) : "";
      return typeof e == "function" && V.set(e, je), je;
    }
    function ze(e, n, i) {
      return we(e, !1);
    }
    function Ge(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function B(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Ge(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case c:
          return U("Suspense");
        case p:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case E:
            return ze(e.render);
          case T:
            return B(e.type, n, i);
          case S: {
            var a = e, d = a._payload, m = a._init;
            try {
              return B(m(d), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var X = Object.prototype.hasOwnProperty, Te = {}, Re = O.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var n = e._owner, i = B(e.type, e._source, n ? n.type : null);
        Re.setExtraStackFrame(i);
      } else
        Re.setExtraStackFrame(null);
    }
    function Je(e, n, i, a, d) {
      {
        var m = Function.call.bind(X);
        for (var v in e)
          if (m(e, v)) {
            var h = void 0;
            try {
              if (typeof e[v] != "function") {
                var R = Error((a || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              h = e[v](n, v, a, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              h = _;
            }
            h && !(h instanceof Error) && (z(d), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, v, typeof h), z(null)), h instanceof Error && !(h.message in Te) && (Te[h.message] = !0, z(d), b("Failed %s type: %s", i, h.message), z(null));
          }
      }
    }
    var Ke = Array.isArray;
    function re(e) {
      return Ke(e);
    }
    function Qe(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Ze(e) {
      try {
        return Se(e), !1;
      } catch {
        return !0;
      }
    }
    function Se(e) {
      return "" + e;
    }
    function xe(e) {
      if (Ze(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(e)), Se(e);
    }
    var F = O.ReactCurrentOwner, et = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Oe, ne;
    ne = {};
    function tt(e) {
      if (X.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rt(e) {
      if (X.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function nt(e, n) {
      if (typeof e.ref == "string" && F.current && n && F.current.stateNode !== n) {
        var i = A(F.current.type);
        ne[i] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(F.current.type), e.ref), ne[i] = !0);
      }
    }
    function it(e, n) {
      {
        var i = function() {
          Ce || (Ce = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function st(e, n) {
      {
        var i = function() {
          Oe || (Oe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ot = function(e, n, i, a, d, m, v) {
      var h = {
        $$typeof: t,
        type: e,
        key: n,
        ref: i,
        props: v,
        _owner: m
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function at(e, n, i, a, d) {
      {
        var m, v = {}, h = null, R = null;
        i !== void 0 && (xe(i), h = "" + i), rt(n) && (xe(n.key), h = "" + n.key), tt(n) && (R = n.ref, nt(n, d));
        for (m in n)
          X.call(n, m) && !et.hasOwnProperty(m) && (v[m] = n[m]);
        if (e && e.defaultProps) {
          var _ = e.defaultProps;
          for (m in _)
            v[m] === void 0 && (v[m] = _[m]);
        }
        if (h || R) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && it(v, w), R && st(v, w);
        }
        return ot(e, h, R, d, a, F.current, v);
      }
    }
    var ie = O.ReactCurrentOwner, Pe = O.ReactDebugCurrentFrame;
    function j(e) {
      if (e) {
        var n = e._owner, i = B(e.type, e._source, n ? n.type : null);
        Pe.setExtraStackFrame(i);
      } else
        Pe.setExtraStackFrame(null);
    }
    var se;
    se = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Ae() {
      {
        if (ie.current) {
          var e = A(ie.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ut(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var Le = {};
    function ct(e) {
      {
        var n = Ae();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function ke(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = ct(n);
        if (Le[i])
          return;
        Le[i] = !0;
        var a = "";
        e && e._owner && e._owner !== ie.current && (a = " It was passed a child from " + A(e._owner.type) + "."), j(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, a), j(null);
      }
    }
    function $e(e, n) {
      {
        if (typeof e != "object")
          return;
        if (re(e))
          for (var i = 0; i < e.length; i++) {
            var a = e[i];
            oe(a) && ke(a, n);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var d = q(e);
          if (typeof d == "function" && d !== e.entries)
            for (var m = d.call(e), v; !(v = m.next()).done; )
              oe(v.value) && ke(v.value, n);
        }
      }
    }
    function lt(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === E || n.$$typeof === T))
          i = n.propTypes;
        else
          return;
        if (i) {
          var a = A(n);
          Je(i, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !se) {
          se = !0;
          var d = A(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", d || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var a = n[i];
          if (a !== "children" && a !== "key") {
            j(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), j(null);
            break;
          }
        }
        e.ref !== null && (j(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), j(null));
      }
    }
    function Ie(e, n, i, a, d, m) {
      {
        var v = qe(e);
        if (!v) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = ut(d);
          R ? h += R : h += Ae();
          var _;
          e === null ? _ = "null" : re(e) ? _ = "array" : e !== void 0 && e.$$typeof === t ? (_ = "<" + (A(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, h);
        }
        var w = at(e, n, i, d, m);
        if (w == null)
          return w;
        if (v) {
          var C = n.children;
          if (C !== void 0)
            if (a)
              if (re(C)) {
                for (var M = 0; M < C.length; M++)
                  $e(C[M], e);
                Object.freeze && Object.freeze(C);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $e(C, e);
        }
        return e === s ? ht(w) : lt(w), w;
      }
    }
    function ft(e, n, i) {
      return Ie(e, n, i, !0);
    }
    function vt(e, n, i) {
      return Ie(e, n, i, !1);
    }
    var dt = vt, gt = ft;
    H.Fragment = s, H.jsx = dt, H.jsxs = gt;
  }()), H;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = _t() : l.exports = yt();
})(he);
const ae = he.exports.jsx, Et = he.exports.jsxs, bt = {
  easeOutCubic: function(l) {
    return Math.pow(l - 1, 3) + 1;
  },
  easeOutQuart: function(l) {
    return -(Math.pow(l - 1, 4) - 1);
  }
};
function J(l, t) {
  let r = l;
  for (; r < 0; )
    r += t;
  return r % t;
}
function K(l, t) {
  return [...new Array(t - l)].map((r, s) => l + s);
}
const k = {
  wrapper: "ios-style-picker",
  optionList: "ios-style-picker__option-list",
  optionItem: "ios-style-picker__option-item",
  highlight: "ios-style-picker__highlight",
  highlightList: "ios-style-picker__highlight-list",
  highlightItem: "ios-style-picker__highlight-item"
};
class wt {
  constructor({
    container: t,
    source: r,
    isInfinite: s,
    wheelCount: o,
    itemAngle: u,
    itemHeight: f,
    radius: y
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
    this._container = t, this._source = r, this._isInfinite = s, this.wheelCount = o, this.itemAngle = u, this.itemHeight = f, this.radius = y;
    const E = this._getOptionItems(), c = this._getHighlightItems();
    this._container.innerHTML = `
<div class="${k.wrapper}">
  <ul
    class="${k.optionList}"
    style="transform: translate3d(0, 0, ${-this.radius}px) rotateX(0deg);"
  >
    ${E}
  </ul>
  <div
    class="${k.highlight}"
    style="height: ${this.itemHeight}px; line-height: ${this.itemHeight}px;"
  >
    <ul class="${k.highlightList}">
      ${c}
    </ul>
  </div>
</div>`;
    const p = this._container.querySelector(`.${k.optionList}`);
    if (!p)
      throw new Error("optionList does not exists");
    this._optionList = p;
    const T = this._container.querySelectorAll(
      `.${k.optionItem}`
    );
    if (!T)
      throw new Error("optionList does not exists");
    this._optionItems = T;
    const S = this._container.querySelector(
      `.${k.highlightList}`
    );
    if (!S)
      throw new Error("highlightList does not exists.");
    s && (S.style.top = `${-this.itemHeight}px`), this._highlightList = S;
  }
  _getOptionItems() {
    return (this._isInfinite ? K(-this.wheelCount / 4, this._source.length + this.wheelCount / 4) : K(0, this._source.length)).map((s) => ({
      rotateX: -this.itemAngle * s,
      index: s,
      text: this._source[(s + this._source.length) % this._source.length].text
    })).reduce(
      (s, o) => `${s}
<li
  class="${k.optionItem}"
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
    return (this._isInfinite ? K(-1, this._source.length + 1) : K(0, this._source.length)).map((s) => ({
      text: this._source[(s + this._source.length) % this._source.length].text
    })).reduce(
      (s, o) => `${s}
<li
  class="${k.highlightItem}"
  style="height: ${this.itemHeight}px;"
>
  ${o.text}
</li>`,
      ""
    );
  }
  scroll(t) {
    const r = -this.radius, s = this.itemAngle * t;
    this._optionList.style.transform = `translate3d(0, 0, ${r}px) rotateX(${s}deg)`;
    const o = -t * this.itemHeight;
    this._highlightList.style.transform = `translate3d(0, ${o}px, 0)`, [...this._optionItems].forEach((u) => {
      if (u.dataset.index === void 0)
        throw new Error("itemElem.dataset.index does not exists");
      u.style.visibility = Math.abs(+u.dataset.index - t) > this.wheelCount / 4 ? "hidden" : "visible";
    });
  }
  addEventListener(t, r) {
    this._container.addEventListener(t, r);
  }
  removeEventListener(t, r) {
    this._container.removeEventListener(t, r);
  }
  equalOrContains(t) {
    var r;
    return ((r = this._container) == null ? void 0 : r.contains(t)) || this._container === t;
  }
  clear() {
    this._container.innerHTML = "";
  }
  get container() {
    return this._container;
  }
}
class ue {
  constructor(t, r) {
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
    var o, u;
    this.variant = r.variant ?? "infinite", this.source = r.source, this.selected = this.source[0], this.onChange = r.onChange;
    const s = r.count ?? 20;
    if (this.wheelCount = s - s % 4, this.sensitivity = r.sensitivity ?? 8, this.exceedA = 10, this.moveT = 0, this.moving = !1, this.targetElement = t, !this.targetElement)
      throw new Error("targetElement does not exists.");
    this.itemHeight = this.targetElement.offsetHeight * 3 / s, this.itemAngle = 360 / s, this.radius = this.itemHeight / Math.tan(this.itemAngle * Math.PI / 180), this.scroll = 0, this._create(this.source), this.events = {
      touchstart: this._createEventListener("touchstart"),
      touchmove: this._createEventListener("touchmove"),
      touchend: this._createEventListener("touchend")
    }, (o = this.html) == null || o.addEventListener("touchstart", this.events.touchstart), document.addEventListener("mousedown", this.events.touchstart), (u = this.html) == null || u.addEventListener("touchend", this.events.touchend), document.addEventListener("mouseup", this.events.touchend), this.source.length && this.select(this.selected.value);
  }
  _createEventListener(t) {
    return (r) => {
      var s;
      !((s = this.html) != null && s.equalOrContains(r.target)) || this.source.length !== 0 && (r.preventDefault(), this[`_${t}`](r));
    };
  }
  _touchstart(t) {
    if (!this.html)
      throw new Error("this.html does not exists");
    this.html.addEventListener("touchmove", this.events.touchmove), document.addEventListener("mousemove", this.events.touchmove);
    const r = t.clientY ?? t.touches[0].clientY;
    this.touchData.startY = r, this.touchData.yArr = [[r, new Date().getTime()]], this.touchData.touchScroll = this.scroll, this._stop();
  }
  _touchmove(t) {
    const r = t.clientY ?? t.touches[0].clientY;
    this.touchData.yArr.push([r, new Date().getTime()]), this.touchData.yArr.length > 5 && this.touchData.yArr.unshift();
    const o = (this.touchData.startY - r) / this.itemHeight + this.scroll, u = this.variant === "infinite" ? J(o, this.source.length) : o < 0 ? o * 0.3 : o > this.source.length ? this.source.length + (o - this.source.length) * 0.3 : o;
    this.touchData.touchScroll = this._moveTo(u);
  }
  _getInitV() {
    if (this.touchData.yArr.length === 1)
      return 0;
    const t = this.touchData.yArr[this.touchData.yArr.length - 2][1], r = this.touchData.yArr[this.touchData.yArr.length - 1][1], s = this.touchData.yArr[this.touchData.yArr.length - 2][0], o = this.touchData.yArr[this.touchData.yArr.length - 1][0], u = (s - o) / this.itemHeight * 1e3 / (r - t), f = u > 0 ? 1 : -1;
    return Math.abs(u) > 30 ? 30 * f : u;
  }
  _touchend(t) {
    if (!this.html)
      throw new Error("this.html does not exists.");
    this.html.removeEventListener("touchmove", this.events.touchmove), document.removeEventListener("mousemove", this.events.touchmove);
    const r = this._getInitV();
    this.scroll = this.touchData.touchScroll, this._animateMoveByInitV(r);
  }
  _create(t) {
    if (!t.length)
      throw new Error("source does not exists.");
    if (this.variant === "infinite") {
      let r = [...t];
      for (; r.length < this.wheelCount / 2; )
        r = r.concat(t);
      t = r;
    }
    this.source = t, this.html = new wt({
      container: this.targetElement,
      source: this.source,
      isInfinite: this.variant === "infinite",
      wheelCount: this.wheelCount,
      itemAngle: this.itemAngle,
      itemHeight: this.itemHeight,
      radius: this.radius
    });
  }
  _moveTo(t) {
    if (!this.html)
      throw new Error("html does not exists");
    return this.variant === "infinite" && (t = J(t, this.source.length)), this.html.scroll(t), t;
  }
  async _animateMoveByInitV(t) {
    if (this.variant === "infinite") {
      const r = t > 0 ? -this.sensitivity : this.sensitivity, s = Math.abs(t / r), o = t * s + r * s * s / 2, u = Math.round(this.scroll + o);
      await this._animateToScroll(this.scroll, u, s, "easeOutQuart");
    } else if (this.scroll < 0 || this.scroll > this.source.length - 1) {
      const r = this.scroll < 0 ? 0 : this.source.length - 1;
      await this._animateToScroll(
        this.scroll,
        r,
        Math.sqrt(Math.abs((this.scroll - r) / this.exceedA))
      );
    } else {
      const r = t > 0 ? -this.sensitivity : this.sensitivity;
      let s = Math.abs(t / r), o = t * s + r * s * s / 2, u = Math.round(this.scroll + o);
      u = u < 0 ? 0 : u > this.source.length - 1 ? this.source.length - 1 : u, o = u - this.scroll, s = Math.sqrt(Math.abs(o / r)), await this._animateToScroll(this.scroll, u, s, "easeOutQuart");
    }
    this._selectByScroll(this.scroll);
  }
  _animateToScroll(t, r, s, o = "easeOutQuart") {
    if (t === r || s === 0) {
      this._moveTo(t);
      return;
    }
    const u = new Date().getTime() / 1e3, f = r - t;
    return new Promise((y, E) => {
      this.moving = !0;
      const c = () => {
        const p = new Date().getTime() / 1e3 - u;
        p < s ? (this.scroll = this._moveTo(
          t + bt[o](p / s) * f
        ), this.moveT = requestAnimationFrame(c)) : (y(), this._stop(), this.scroll = this._moveTo(t + f));
      };
      c();
    });
  }
  _stop() {
    this.moving = !1, cancelAnimationFrame(this.moveT);
  }
  _selectByScroll(t) {
    t = J(t, this.source.length) | 0, t > this.source.length - 1 && (t = this.source.length - 1, this._moveTo(t)), this._moveTo(t), this.scroll = t, this.selected = this.source[t], this.onChange && this.onChange(this.selected);
  }
  updateSource(t) {
    this._create(t), this.moving || this._selectByScroll(this.scroll);
  }
  async select(t) {
    for (let r = 0; r < this.source.length; r++)
      if (this.source[r].value === t) {
        window.cancelAnimationFrame(this.moveT);
        const s = J(this.scroll, this.source.length), o = r, u = Math.sqrt(Math.abs((o - s) / this.sensitivity));
        await this._animateToScroll(s, o, u), this._selectByScroll(r);
        return;
      }
    throw new Error(`can't find value: ${t}`);
  }
  destroy() {
    var t, r, s, o;
    this._stop(), (t = this.html) == null || t.removeEventListener("touchstart", this.events.touchstart), (r = this.html) == null || r.removeEventListener("touchmove", this.events.touchmove), (s = this.html) == null || s.removeEventListener("touchend", this.events.touchend), document.removeEventListener("mousedown", this.events.touchstart), document.removeEventListener("mousemove", this.events.touchmove), document.removeEventListener("mouseup", this.events.touchend), (o = this.html) == null || o.clear();
  }
}
function Tt(l, t) {
  const r = (l == null ? void 0 : l.getFullYear()) ?? new Date().getFullYear(), s = (t == null ? void 0 : t.getFullYear()) ?? r + 40, o = [];
  for (let u = r; u <= s; u++)
    o.push({
      value: u,
      text: u + "년"
    });
  return o;
}
function ce(l, t, r) {
  const s = l === (t == null ? void 0 : t.getFullYear()) ? t.getMonth() + 1 : 1, o = l === (r == null ? void 0 : r.getFullYear()) ? r.getMonth() + 1 : 12, u = [];
  for (let f = s; f <= o; f++)
    u.push({
      value: f,
      text: f + "월"
    });
  return u;
}
function le(l, t, r, s) {
  const o = (r == null ? void 0 : r.getFullYear()) === l && ((r == null ? void 0 : r.getMonth()) ?? 0) + 1 === t ? r.getDate() : 1, u = (s == null ? void 0 : s.getFullYear()) === l && ((s == null ? void 0 : s.getMonth()) ?? 0) + 1 === t ? s.getDate() : new Date(l, t, 0).getDate(), f = [];
  for (let y = o; y <= u; y++)
    f.push({
      value: y,
      text: y + "일"
    });
  return f;
}
const Rt = 100;
function Ct({
  onChange: l,
  fromDate: t,
  toDate: r,
  initDate: s,
  infinite: o,
  className: u
}) {
  const f = t ?? new Date(), y = s ?? f, E = "ios-style-date-picker" + (u ? ` ${u}` : ""), c = G({
    currentYear: f.getFullYear(),
    currentMonth: f.getMonth() + 1,
    currentDay: f.getDate(),
    yearSource: Tt(f, r),
    monthSource: ce(f.getFullYear(), f, r),
    daySource: le(f.getFullYear(), f.getMonth() + 1, f, r),
    onChange: l,
    onChangeTimeout: null
  }), p = G(null), T = G(null), S = G(null);
  return Me(() => {
    c.current.onChange = l;
  }, [l]), Me(() => {
    const $ = () => {
      c.current.onChangeTimeout && clearTimeout(c.current.onChangeTimeout), c.current.onChangeTimeout = setTimeout(() => {
        c.current.onChange(
          c.current.currentYear,
          c.current.currentMonth,
          c.current.currentDay
        ), c.current.onChangeTimeout = null;
      }, Rt);
    }, W = () => {
      c.current.monthSource = ce(c.current.currentYear, f, r), O.updateSource(c.current.monthSource);
    }, N = () => {
      c.current.daySource = le(
        c.current.currentYear,
        c.current.currentMonth,
        f,
        r
      ), b.updateSource(c.current.daySource);
    }, q = new ue(p.current, {
      variant: o ? "infinite" : "normal",
      source: c.current.yearSource,
      onChange: (x) => {
        const P = c.current.currentYear !== x.value;
        c.current.currentYear = x.value, P && (W(), N(), $());
      }
    }), O = new ue(T.current, {
      variant: o ? "infinite" : "normal",
      source: c.current.monthSource,
      onChange: (x) => {
        const P = c.current.currentMonth !== x.value;
        c.current.currentMonth = x.value, P && (N(), $());
      }
    }), b = new ue(S.current, {
      variant: o ? "infinite" : "normal",
      source: c.current.daySource,
      onChange: (x) => {
        const P = c.current.currentDay !== x.value;
        c.current.currentDay = x.value, P && $();
      }
    });
    return setTimeout(() => {
      const x = y.getFullYear(), P = y.getMonth() + 1, Q = y.getDate();
      c.current.monthSource = ce(x, f), O.updateSource(c.current.monthSource), c.current.daySource = le(x, P, f), b.updateSource(c.current.daySource), q.select(x), O.select(P), b.select(Q);
    }, 0), () => {
      q.destroy(), O.destroy(), b.destroy();
    };
  }, [o]), /* @__PURE__ */ Et("div", { className: E, children: [
    /* @__PURE__ */ ae("div", { ref: p }),
    /* @__PURE__ */ ae("div", { ref: T }),
    /* @__PURE__ */ ae("div", { ref: S })
  ] });
}
export {
  Ct as DatePicker
};
//# sourceMappingURL=ios-style-picker.es.js.map
