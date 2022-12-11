var gt = Object.defineProperty;
var mt = (l, t, n) => t in l ? gt(l, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : l[t] = n;
var b = (l, t, n) => (mt(l, typeof t != "symbol" ? t + "" : t, n), n);
import Me, { useRef as pt, useEffect as Ae } from "react";
var se = { exports: {} }, D = {};
var je;
function yt() {
  if (je)
    return D;
  je = 1;
  var l = Me, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, s = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(y, _, R) {
    var p, S = {}, x = null, E = null;
    R !== void 0 && (x = "" + R), _.key !== void 0 && (x = "" + _.key), _.ref !== void 0 && (E = _.ref);
    for (p in _)
      a.call(_, p) && !c.hasOwnProperty(p) && (S[p] = _[p]);
    if (y && y.defaultProps)
      for (p in _ = y.defaultProps, _)
        S[p] === void 0 && (S[p] = _[p]);
    return { $$typeof: t, type: y, key: x, ref: E, props: S, _owner: s.current };
  }
  return D.Fragment = n, D.jsx = o, D.jsxs = o, D;
}
var H = {};
var Ie;
function _t() {
  return Ie || (Ie = 1, process.env.NODE_ENV !== "production" && function() {
    var l = Me, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), y = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), O = Symbol.iterator, X = "@@iterator";
    function Ye(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = O && e[O] || e[X];
      return typeof r == "function" ? r : null;
    }
    var M = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          i[u - 1] = arguments[u];
        $e("error", e, i);
      }
    }
    function $e(e, r, i) {
      {
        var u = M.ReactDebugCurrentFrame, v = u.getStackAddendum();
        v !== "" && (r += "%s", i = i.concat([v]));
        var d = i.map(function(f) {
          return String(f);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Fe = !1, ke = !1, De = !1, He = !1, Ne = !1, ae;
    ae = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === c || Ne || e === s || e === R || e === p || He || e === E || Fe || ke || De || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === S || e.$$typeof === o || e.$$typeof === y || e.$$typeof === _ || e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Be(e, r, i) {
      var u = e.displayName;
      if (u)
        return u;
      var v = r.displayName || r.name || "";
      return v !== "" ? i + "(" + v + ")" : i;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function P(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case s:
          return "StrictMode";
        case R:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return ue(r) + ".Consumer";
          case o:
            var i = e;
            return ue(i._context) + ".Provider";
          case _:
            return Be(e, e.render, "ForwardRef");
          case S:
            var u = e.displayName || null;
            return u !== null ? u : P(e.type) || "Memo";
          case x: {
            var v = e, d = v._payload, f = v._init;
            try {
              return P(f(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var j = Object.assign, F = 0, ce, le, he, fe, ve, de, ge;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function Ue() {
      {
        if (F === 0) {
          ce = console.log, le = console.info, he = console.warn, fe = console.error, ve = console.group, de = console.groupCollapsed, ge = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        F++;
      }
    }
    function qe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: j({}, e, {
              value: ce
            }),
            info: j({}, e, {
              value: le
            }),
            warn: j({}, e, {
              value: he
            }),
            error: j({}, e, {
              value: fe
            }),
            group: j({}, e, {
              value: ve
            }),
            groupCollapsed: j({}, e, {
              value: de
            }),
            groupEnd: j({}, e, {
              value: ge
            })
          });
        }
        F < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var G = M.ReactCurrentDispatcher, J;
    function N(e, r, i) {
      {
        if (J === void 0)
          try {
            throw Error();
          } catch (v) {
            var u = v.stack.trim().match(/\n( *(at )?)/);
            J = u && u[1] || "";
          }
        return `
` + J + e;
      }
    }
    var z = !1, W;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      W = new Ve();
    }
    function pe(e, r) {
      if (!e || z)
        return "";
      {
        var i = W.get(e);
        if (i !== void 0)
          return i;
      }
      var u;
      z = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = G.current, G.current = null, Ue();
      try {
        if (r) {
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
            } catch (A) {
              u = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              u = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            u = A;
          }
          e();
        }
      } catch (A) {
        if (A && u && typeof A.stack == "string") {
          for (var h = A.stack.split(`
`), T = u.stack.split(`
`), g = h.length - 1, m = T.length - 1; g >= 1 && m >= 0 && h[g] !== T[m]; )
            m--;
          for (; g >= 1 && m >= 0; g--, m--)
            if (h[g] !== T[m]) {
              if (g !== 1 || m !== 1)
                do
                  if (g--, m--, m < 0 || h[g] !== T[m]) {
                    var C = `
` + h[g].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, C), C;
                  }
                while (g >= 1 && m >= 0);
              break;
            }
        }
      } finally {
        z = !1, G.current = d, qe(), Error.prepareStackTrace = v;
      }
      var $ = e ? e.displayName || e.name : "", Pe = $ ? N($) : "";
      return typeof e == "function" && W.set(e, Pe), Pe;
    }
    function Xe(e, r, i) {
      return pe(e, !1);
    }
    function Ge(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, Ge(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case R:
          return N("Suspense");
        case p:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            return Xe(e.render);
          case S:
            return B(e.type, r, i);
          case x: {
            var u = e, v = u._payload, d = u._init;
            try {
              return B(d(v), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, ye = {}, _e = M.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, i = B(e.type, e._source, r ? r.type : null);
        _e.setExtraStackFrame(i);
      } else
        _e.setExtraStackFrame(null);
    }
    function Je(e, r, i, u, v) {
      {
        var d = Function.call.bind(U);
        for (var f in e)
          if (d(e, f)) {
            var h = void 0;
            try {
              if (typeof e[f] != "function") {
                var T = Error((u || "React class") + ": " + i + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw T.name = "Invariant Violation", T;
              }
              h = e[f](r, f, u, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              h = g;
            }
            h && !(h instanceof Error) && (q(v), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", i, f, typeof h), q(null)), h instanceof Error && !(h.message in ye) && (ye[h.message] = !0, q(v), w("Failed %s type: %s", i, h.message), q(null));
          }
      }
    }
    var ze = Array.isArray;
    function K(e) {
      return ze(e);
    }
    function Ke(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function Qe(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function be(e) {
      if (Qe(e))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), Ee(e);
    }
    var k = M.ReactCurrentOwner, Ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, Te, Q;
    Q = {};
    function et(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function tt(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function rt(e, r) {
      if (typeof e.ref == "string" && k.current && r && k.current.stateNode !== r) {
        var i = P(k.current.type);
        Q[i] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(k.current.type), e.ref), Q[i] = !0);
      }
    }
    function nt(e, r) {
      {
        var i = function() {
          we || (we = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function it(e, r) {
      {
        var i = function() {
          Te || (Te = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ot = function(e, r, i, u, v, d, f) {
      var h = {
        $$typeof: t,
        type: e,
        key: r,
        ref: i,
        props: f,
        _owner: d
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
        value: u
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function st(e, r, i, u, v) {
      {
        var d, f = {}, h = null, T = null;
        i !== void 0 && (be(i), h = "" + i), tt(r) && (be(r.key), h = "" + r.key), et(r) && (T = r.ref, rt(r, v));
        for (d in r)
          U.call(r, d) && !Ze.hasOwnProperty(d) && (f[d] = r[d]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (d in g)
            f[d] === void 0 && (f[d] = g[d]);
        }
        if (h || T) {
          var m = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && nt(f, m), T && it(f, m);
        }
        return ot(e, h, T, v, u, k.current, f);
      }
    }
    var Z = M.ReactCurrentOwner, Se = M.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, i = B(e.type, e._source, r ? r.type : null);
        Se.setExtraStackFrame(i);
      } else
        Se.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Re() {
      {
        if (Z.current) {
          var e = P(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function at(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var xe = {};
    function ut(e) {
      {
        var r = Re();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = ut(r);
        if (xe[i])
          return;
        xe[i] = !0;
        var u = "";
        e && e._owner && e._owner !== Z.current && (u = " It was passed a child from " + P(e._owner.type) + "."), Y(e), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, u), Y(null);
      }
    }
    function Oe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var i = 0; i < e.length; i++) {
            var u = e[i];
            te(u) && Ce(u, r);
          }
        else if (te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var v = Ye(e);
          if (typeof v == "function" && v !== e.entries)
            for (var d = v.call(e), f; !(f = d.next()).done; )
              te(f.value) && Ce(f.value, r);
        }
      }
    }
    function ct(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === _ || r.$$typeof === S))
          i = r.propTypes;
        else
          return;
        if (i) {
          var u = P(r);
          Je(i, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !ee) {
          ee = !0;
          var v = P(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var u = r[i];
          if (u !== "children" && u !== "key") {
            Y(e), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), w("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Le(e, r, i, u, v, d) {
      {
        var f = We(e);
        if (!f) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var T = at(v);
          T ? h += T : h += Re();
          var g;
          e === null ? g = "null" : K(e) ? g = "array" : e !== void 0 && e.$$typeof === t ? (g = "<" + (P(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, h);
        }
        var m = st(e, r, i, v, d);
        if (m == null)
          return m;
        if (f) {
          var C = r.children;
          if (C !== void 0)
            if (u)
              if (K(C)) {
                for (var $ = 0; $ < C.length; $++)
                  Oe(C[$], e);
                Object.freeze && Object.freeze(C);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Oe(C, e);
        }
        return e === a ? lt(m) : ct(m), m;
      }
    }
    function ht(e, r, i) {
      return Le(e, r, i, !0);
    }
    function ft(e, r, i) {
      return Le(e, r, i, !1);
    }
    var vt = ft, dt = ht;
    H.Fragment = a, H.jsx = vt, H.jsxs = dt;
  }()), H;
}
(function(l) {
  process.env.NODE_ENV === "production" ? l.exports = yt() : l.exports = _t();
})(se);
const re = se.exports.jsx, Et = se.exports.jsxs, bt = {
  easeOutCubic: function(l) {
    return Math.pow(l - 1, 3) + 1;
  },
  easeOutQuart: function(l) {
    return -(Math.pow(l - 1, 4) - 1);
  }
};
function V(l, t) {
  let n = l;
  for (; n < 0; )
    n += t;
  return n % t;
}
const I = {
  wrapper: "select-wrap",
  optionList: "select-options",
  optionItem: "select-option",
  highlight: "highlight",
  highlightList: "highlight-list",
  highlightItem: "highlight-item"
}, L = {
  cn: { ...I },
  getBase: (l, t) => `
<div class="${I.wrapper}">
  <ul
    class="${I.optionList}"
    style="transform: translate3d(0, 0, ${l}px) rotateX(0deg);"
  >
    {{optionListHtml}}
  </ul>
  <div
    class="${I.highlight}"
    style="height: ${t}px; line-height: ${t}px;"
  >
    <ul class="${I.highlightList}">
      {{highListHtml}}
    </ul>
  </div>
</div>`,
  getOptionItem: ({ top: l, height: t, rotateX: n, radius: a, index: s, text: c }) => `
<li
  class="${I.optionItem}"
  style="
    top: ${l}px;
    height: ${t}px;
    line-height: ${t}px;
    transform: rotateX(${n}deg) translate3d(0, 0, ${a}px);
  "
  data-index="${s}"
>
  ${c}
</li>`,
  getHighlightItem: ({ height: l, text: t }) => `
<li
  class="${I.highlightItem}"
  style="height: ${l}px;"
>
  ${t}
</li>`
};
class ne {
  constructor(t, n) {
    b(this, "variant");
    b(this, "source");
    b(this, "selected");
    b(this, "onChange");
    b(this, "sensitivity");
    b(this, "wheelCount");
    b(this, "exceedA");
    b(this, "moveT");
    b(this, "moving");
    b(this, "el");
    b(this, "events");
    b(this, "itemHeight");
    b(this, "itemAngle");
    b(this, "radius");
    b(this, "scroll");
    b(this, "touchData", {
      startY: 0,
      yArr: [],
      touchScroll: 0
    });
    this.variant = n.variant ?? "infinite", this.source = n.source, this.selected = this.source[0], this.onChange = n.onChange;
    const a = n.count ?? 20;
    this.wheelCount = a - a % 4, this.sensitivity = n.sensitivity ?? 8, this.exceedA = 10, this.moveT = 0, this.moving = !1;
    const s = document.querySelector(t);
    if (!s)
      throw new Error(`element ${t} not exists`);
    this.el = {
      container: s,
      optionList: null,
      optionItems: null,
      highlightList: null,
      highlightItems: null
    }, this.itemHeight = s.offsetHeight * 3 / a, this.itemAngle = 360 / a, this.radius = this.itemHeight / Math.tan(this.itemAngle * Math.PI / 180), this.scroll = 0, this._create(this.source), this.events = {
      touchstart: this._createEventListener("touchstart"),
      touchmove: this._createEventListener("touchmove"),
      touchend: this._createEventListener("touchend")
    }, s.addEventListener("touchstart", this.events.touchstart), document.addEventListener("mousedown", this.events.touchstart), s.addEventListener("touchend", this.events.touchend), document.addEventListener("mouseup", this.events.touchend), this.source.length && this.select(this.selected.value);
  }
  _createEventListener(t) {
    return (n) => {
      var a;
      !((a = this.el.container) != null && a.contains(n.target)) && n.target !== this.el.container || this.source.length !== 0 && (n.preventDefault(), this[`_${t}`](n));
    };
  }
  _touchstart(t) {
    if (!this.el.container)
      throw new Error("container not exists");
    this.el.container.addEventListener("touchmove", this.events.touchmove), document.addEventListener("mousemove", this.events.touchmove);
    const n = t.clientY ?? t.touches[0].clientY;
    this.touchData.startY = n, this.touchData.yArr = [[n, new Date().getTime()]], this.touchData.touchScroll = this.scroll, this._stop();
  }
  _touchmove(t) {
    const n = t.clientY ?? t.touches[0].clientY;
    this.touchData.yArr.push([n, new Date().getTime()]), this.touchData.yArr.length > 5 && this.touchData.yArr.unshift();
    const s = (this.touchData.startY - n) / this.itemHeight + this.scroll, c = this.variant === "infinite" ? V(s, this.source.length) : s < 0 ? s * 0.3 : s > this.source.length ? this.source.length + (s - this.source.length) * 0.3 : s;
    this.touchData.touchScroll = this._moveTo(c);
  }
  _getInitV() {
    if (this.touchData.yArr.length === 1)
      return 0;
    const t = this.touchData.yArr[this.touchData.yArr.length - 2][1], n = this.touchData.yArr[this.touchData.yArr.length - 1][1], a = this.touchData.yArr[this.touchData.yArr.length - 2][0], s = this.touchData.yArr[this.touchData.yArr.length - 1][0], c = (a - s) / this.itemHeight * 1e3 / (n - t), o = c > 0 ? 1 : -1;
    return Math.abs(c) > 30 ? 30 * o : c;
  }
  _touchend(t) {
    if (!this.el.container)
      throw new Error("container not exists");
    this.el.container.removeEventListener("touchmove", this.events.touchmove), document.removeEventListener("mousemove", this.events.touchmove);
    const n = this._getInitV();
    this.scroll = this.touchData.touchScroll, this._animateMoveByInitV(n);
  }
  _create(t) {
    if (!t.length)
      throw new Error("source not exists");
    if (!this.el.container)
      throw new Error("container not exists");
    if (this.variant === "infinite") {
      let o = [...t];
      for (; o.length < this.wheelCount / 2; )
        o = o.concat(t);
      t = o;
    }
    this.source = t;
    const n = t.length;
    let a = "";
    for (let o = 0; o < t.length; o++)
      a += L.getOptionItem({
        top: this.itemHeight * -0.5,
        height: this.itemHeight,
        rotateX: -this.itemAngle * o,
        radius: this.radius,
        index: o,
        text: t[o].text
      });
    let s = "";
    for (let o = 0; o < t.length; o++)
      s += L.getHighlightItem({
        height: this.itemHeight,
        text: t[o].text
      });
    if (this.variant === "infinite") {
      for (let o = 0; o < this.wheelCount / 4; o++)
        a = L.getOptionItem({
          top: this.itemHeight * -0.5,
          height: this.itemHeight,
          rotateX: this.itemAngle * (o + 1),
          radius: this.radius,
          index: -o - 1,
          text: t[n - o - 1].text
        }) + a, a += L.getOptionItem({
          top: this.itemHeight * -0.5,
          height: this.itemHeight,
          rotateX: -this.itemAngle * (o + n),
          radius: this.radius,
          index: o + n,
          text: t[o].text
        });
      s = L.getHighlightItem({
        height: this.itemHeight,
        text: t[n - 1].text
      }) + s, s += L.getHighlightItem({
        height: this.itemHeight,
        text: t[0].text
      });
    }
    this.el.container.innerHTML = L.getBase(-this.radius, this.itemHeight).replace("{{optionListHtml}}", a).replace("{{highListHtml}}", s), this.el.optionList = this.el.container.querySelector(`.${L.cn.optionList}`), this.el.optionItems = this.el.container.querySelectorAll(`.${L.cn.optionItem}`);
    const c = this.el.container.querySelector(
      `.${L.cn.highlightList}`
    );
    if (!c)
      throw new Error(`.${L.cn.highlightList} not exists`);
    this.variant === "infinite" && (c.style.top = -this.itemHeight + "px"), this.el.highlightList = c;
  }
  _moveTo(t) {
    if (!this.el.optionList)
      throw new Error("optionList not exists");
    if (!this.el.highlightList)
      throw new Error("highlightList not exists");
    if (!this.el.optionItems)
      throw new Error("optionItems not exists");
    return this.variant === "infinite" && (t = V(t, this.source.length)), this.el.optionList.style.transform = `translate3d(0, 0, ${-this.radius}px) rotateX(${this.itemAngle * t}deg)`, this.el.highlightList.style.transform = `translate3d(0, ${-t * this.itemHeight}px, 0)`, [...this.el.optionItems].forEach((n) => {
      if (n.dataset.index === void 0)
        throw new Error("itemElem.dataset.index not exists");
      Math.abs(+n.dataset.index - t) > this.wheelCount / 4 ? n.style.visibility = "hidden" : n.style.visibility = "visible";
    }), t;
  }
  async _animateMoveByInitV(t) {
    if (this.variant === "infinite") {
      const n = t > 0 ? -this.sensitivity : this.sensitivity, a = Math.abs(t / n), s = t * a + n * a * a / 2, c = Math.round(this.scroll + s);
      await this._animateToScroll(this.scroll, c, a, "easeOutQuart");
    } else if (this.scroll < 0 || this.scroll > this.source.length - 1) {
      const n = this.scroll < 0 ? 0 : this.source.length - 1;
      await this._animateToScroll(
        this.scroll,
        n,
        Math.sqrt(Math.abs((this.scroll - n) / this.exceedA))
      );
    } else {
      const n = t > 0 ? -this.sensitivity : this.sensitivity;
      let a = Math.abs(t / n), s = t * a + n * a * a / 2, c = Math.round(this.scroll + s);
      c = c < 0 ? 0 : c > this.source.length - 1 ? this.source.length - 1 : c, s = c - this.scroll, a = Math.sqrt(Math.abs(s / n)), await this._animateToScroll(this.scroll, c, a, "easeOutQuart");
    }
    this._selectByScroll(this.scroll);
  }
  _animateToScroll(t, n, a, s = "easeOutQuart") {
    if (t === n || a === 0) {
      this._moveTo(t);
      return;
    }
    const c = new Date().getTime() / 1e3, o = n - t;
    return new Promise((y, _) => {
      this.moving = !0;
      const R = () => {
        const p = new Date().getTime() / 1e3 - c;
        p < a ? (this.scroll = this._moveTo(
          t + bt[s](p / a) * o
        ), this.moveT = requestAnimationFrame(R)) : (y(), this._stop(), this.scroll = this._moveTo(t + o));
      };
      R();
    });
  }
  _stop() {
    this.moving = !1, cancelAnimationFrame(this.moveT);
  }
  _selectByScroll(t) {
    t = V(t, this.source.length) | 0, t > this.source.length - 1 && (t = this.source.length - 1, this._moveTo(t)), this._moveTo(t), this.scroll = t, this.selected = this.source[t], this.onChange && this.onChange(this.selected);
  }
  updateSource(t) {
    this._create(t), this.moving || this._selectByScroll(this.scroll);
  }
  async select(t) {
    for (let n = 0; n < this.source.length; n++)
      if (this.source[n].value === t) {
        window.cancelAnimationFrame(this.moveT);
        const a = V(this.scroll, this.source.length), s = n, c = Math.sqrt(Math.abs((s - a) / this.sensitivity));
        await this._animateToScroll(a, s, c), this._selectByScroll(n);
        return;
      }
    throw new Error(`can't find value: ${t}`);
  }
  destroy() {
    var n, a, s;
    this._stop(), (n = this.el.container) == null || n.removeEventListener("touchstart", this.events.touchstart), (a = this.el.container) == null || a.removeEventListener("touchmove", this.events.touchmove), (s = this.el.container) == null || s.removeEventListener("touchend", this.events.touchend), document.removeEventListener("mousedown", this.events.touchstart), document.removeEventListener("mousemove", this.events.touchmove), document.removeEventListener("mouseup", this.events.touchend);
    const { container: t } = this.el;
    t && (t.innerHTML = ""), this.el = {
      container: null,
      optionList: null,
      optionItems: null,
      highlightList: null,
      highlightItems: null
    };
  }
}
function wt(l, t) {
  const n = (l == null ? void 0 : l.getFullYear()) ?? new Date().getFullYear(), a = (t == null ? void 0 : t.getFullYear()) ?? n + 40, s = [];
  for (let c = n; c <= a; c++)
    s.push({
      value: c,
      text: c + "년"
    });
  return s;
}
function ie(l, t, n) {
  const a = l === (t == null ? void 0 : t.getFullYear()) ? t.getMonth() + 1 : 1, s = l === (n == null ? void 0 : n.getFullYear()) ? n.getMonth() + 1 : 12, c = [];
  for (let o = a; o <= s; o++)
    c.push({
      value: o,
      text: o + "월"
    });
  return c;
}
function oe(l, t, n, a) {
  const s = (n == null ? void 0 : n.getFullYear()) === l && ((n == null ? void 0 : n.getMonth()) ?? 0) + 1 === t ? n.getDate() : 1, c = (a == null ? void 0 : a.getFullYear()) === l && ((a == null ? void 0 : a.getMonth()) ?? 0) + 1 === t ? a.getDate() : new Date(l, t, 0).getDate(), o = [];
  for (let y = s; y <= c; y++)
    o.push({
      value: y,
      text: y + "일"
    });
  return o;
}
const Tt = 100;
function xt({
  onChange: l,
  fromDate: t,
  toDate: n,
  initDate: a
}) {
  const s = t ?? new Date(), c = a ?? s, o = pt({
    currentYear: s.getFullYear(),
    currentMonth: s.getMonth() + 1,
    currentDay: s.getDate(),
    yearSource: wt(s, n),
    monthSource: ie(s.getFullYear(), s, n),
    daySource: oe(s.getFullYear(), s.getMonth() + 1, s, n),
    onChange: l,
    onChangeTimeout: null
  });
  return Ae(() => {
    o.current.onChange = l;
  }, [l]), Ae(() => {
    const y = () => {
      o.current.onChangeTimeout && clearTimeout(o.current.onChangeTimeout), o.current.onChangeTimeout = setTimeout(() => {
        o.current.onChange(
          o.current.currentYear,
          o.current.currentMonth,
          o.current.currentDay
        ), o.current.onChangeTimeout = null;
      }, Tt);
    }, _ = () => {
      o.current.monthSource = ie(o.current.currentYear, s, n), S.updateSource(o.current.monthSource);
    }, R = () => {
      o.current.daySource = oe(
        o.current.currentYear,
        o.current.currentMonth,
        s,
        n
      ), x.updateSource(o.current.daySource);
    }, p = new ne("#year1", {
      variant: "normal",
      source: o.current.yearSource,
      onChange: (E) => {
        const O = o.current.currentYear !== E.value;
        o.current.currentYear = E.value, O && (_(), R(), y());
      }
    }), S = new ne("#month1", {
      variant: "normal",
      source: o.current.monthSource,
      onChange: (E) => {
        const O = o.current.currentMonth !== E.value;
        o.current.currentMonth = E.value, O && (R(), y());
      }
    }), x = new ne("#day1", {
      variant: "normal",
      source: o.current.daySource,
      onChange: (E) => {
        const O = o.current.currentDay !== E.value;
        o.current.currentDay = E.value, O && y();
      }
    });
    return setTimeout(() => {
      const E = c.getFullYear(), O = c.getMonth() + 1, X = c.getDate();
      o.current.monthSource = ie(E, s), S.updateSource(o.current.monthSource), o.current.daySource = oe(E, O, s), x.updateSource(o.current.daySource), p.select(E), S.select(O), x.select(X);
    }, 0), () => {
      p.destroy(), S.destroy(), x.destroy();
    };
  }, []), /* @__PURE__ */ Et("div", { className: "DatePicker", children: [
    /* @__PURE__ */ re(
      "div",
      {
        className: "year",
        id: "year1"
      }
    ),
    /* @__PURE__ */ re(
      "div",
      {
        className: "month",
        id: "month1"
      }
    ),
    /* @__PURE__ */ re(
      "div",
      {
        className: "day",
        id: "day1"
      }
    )
  ] });
}
export {
  xt as DatePicker
};
//# sourceMappingURL=ios-style-picker.es.js.map
