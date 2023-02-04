(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) s(r);
  new MutationObserver((r) => {
    for (const i of r)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const i = {};
    return (
      r.integrity && (i.integrity = r.integrity),
      r.referrerpolicy && (i.referrerPolicy = r.referrerpolicy),
      r.crossorigin === "use-credentials"
        ? (i.credentials = "include")
        : r.crossorigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function s(r) {
    if (r.ep) return;
    r.ep = !0;
    const i = n(r);
    fetch(r.href, i);
  }
})();
function hc(t, e) {
  const n = Object.create(null),
    s = t.split(",");
  for (let r = 0; r < s.length; r++) n[s[r]] = !0;
  return e ? (r) => !!n[r.toLowerCase()] : (r) => !!n[r];
}
function Gi(t) {
  if (Y(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const s = t[n],
        r = Me(s) ? Vm(s) : Gi(s);
      if (r) for (const i in r) e[i] = r[i];
    }
    return e;
  } else {
    if (Me(t)) return t;
    if (Te(t)) return t;
  }
}
const Fm = /;(?![^(]*\))/g,
  $m = /:([^]+)/,
  Um = /\/\*.*?\*\//gs;
function Vm(t) {
  const e = {};
  return (
    t
      .replace(Um, "")
      .split(Fm)
      .forEach((n) => {
        if (n) {
          const s = n.split($m);
          s.length > 1 && (e[s[0].trim()] = s[1].trim());
        }
      }),
    e
  );
}
function ln(t) {
  let e = "";
  if (Me(t)) e = t;
  else if (Y(t))
    for (let n = 0; n < t.length; n++) {
      const s = ln(t[n]);
      s && (e += s + " ");
    }
  else if (Te(t)) for (const n in t) t[n] && (e += n + " ");
  return e.trim();
}
const Bm =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  jm = hc(Bm);
function Hh(t) {
  return !!t || t === "";
}
const pt = (t) =>
    Me(t)
      ? t
      : t == null
      ? ""
      : Y(t) || (Te(t) && (t.toString === Wh || !te(t.toString)))
      ? JSON.stringify(t, Kh, 2)
      : String(t),
  Kh = (t, e) =>
    e && e.__v_isRef
      ? Kh(t, e.value)
      : hs(e)
      ? {
          [`Map(${e.size})`]: [...e.entries()].reduce(
            (n, [s, r]) => ((n[`${s} =>`] = r), n),
            {}
          ),
        }
      : zh(e)
      ? { [`Set(${e.size})`]: [...e.values()] }
      : Te(e) && !Y(e) && !Qh(e)
      ? String(e)
      : e,
  be = {},
  us = [],
  Ct = () => {},
  qm = () => !1,
  Hm = /^on[^a-z]/,
  Wi = (t) => Hm.test(t),
  fc = (t) => t.startsWith("onUpdate:"),
  rt = Object.assign,
  dc = (t, e) => {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  },
  Km = Object.prototype.hasOwnProperty,
  ce = (t, e) => Km.call(t, e),
  Y = Array.isArray,
  hs = (t) => Qi(t) === "[object Map]",
  zh = (t) => Qi(t) === "[object Set]",
  te = (t) => typeof t == "function",
  Me = (t) => typeof t == "string",
  pc = (t) => typeof t == "symbol",
  Te = (t) => t !== null && typeof t == "object",
  Gh = (t) => Te(t) && te(t.then) && te(t.catch),
  Wh = Object.prototype.toString,
  Qi = (t) => Wh.call(t),
  zm = (t) => Qi(t).slice(8, -1),
  Qh = (t) => Qi(t) === "[object Object]",
  mc = (t) =>
    Me(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t,
  li = hc(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Yi = (t) => {
    const e = Object.create(null);
    return (n) => e[n] || (e[n] = t(n));
  },
  Gm = /-(\w)/g,
  Vt = Yi((t) => t.replace(Gm, (e, n) => (n ? n.toUpperCase() : ""))),
  Wm = /\B([A-Z])/g,
  Ds = Yi((t) => t.replace(Wm, "-$1").toLowerCase()),
  Xi = Yi((t) => t.charAt(0).toUpperCase() + t.slice(1)),
  jo = Yi((t) => (t ? `on${Xi(t)}` : "")),
  lr = (t, e) => !Object.is(t, e),
  ui = (t, e) => {
    for (let n = 0; n < t.length; n++) t[n](e);
  },
  bi = (t, e, n) => {
    Object.defineProperty(t, e, { configurable: !0, enumerable: !1, value: n });
  },
  Ei = (t) => {
    const e = parseFloat(t);
    return isNaN(e) ? t : e;
  };
let Bl;
const Qm = () =>
  Bl ||
  (Bl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let ut;
class Yh {
  constructor(e = !1) {
    (this.detached = e),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = ut),
      !e && ut && (this.index = (ut.scopes || (ut.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const n = ut;
      try {
        return (ut = this), e();
      } finally {
        ut = n;
      }
    }
  }
  on() {
    ut = this;
  }
  off() {
    ut = this.parent;
  }
  stop(e) {
    if (this.active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !e) {
        const r = this.parent.scopes.pop();
        r &&
          r !== this &&
          ((this.parent.scopes[this.index] = r), (r.index = this.index));
      }
      (this.parent = void 0), (this.active = !1);
    }
  }
}
function Xh(t) {
  return new Yh(t);
}
function Ym(t, e = ut) {
  e && e.active && e.effects.push(t);
}
function Xm() {
  return ut;
}
function Jm(t) {
  ut && ut.cleanups.push(t);
}
const gc = (t) => {
    const e = new Set(t);
    return (e.w = 0), (e.n = 0), e;
  },
  Jh = (t) => (t.w & yn) > 0,
  Zh = (t) => (t.n & yn) > 0,
  Zm = ({ deps: t }) => {
    if (t.length) for (let e = 0; e < t.length; e++) t[e].w |= yn;
  },
  eg = (t) => {
    const { deps: e } = t;
    if (e.length) {
      let n = 0;
      for (let s = 0; s < e.length; s++) {
        const r = e[s];
        Jh(r) && !Zh(r) ? r.delete(t) : (e[n++] = r),
          (r.w &= ~yn),
          (r.n &= ~yn);
      }
      e.length = n;
    }
  },
  pa = new WeakMap();
let zs = 0,
  yn = 1;
const ma = 30;
let Et;
const jn = Symbol(""),
  ga = Symbol("");
class yc {
  constructor(e, n = null, s) {
    (this.fn = e),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Ym(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let e = Et,
      n = un;
    for (; e; ) {
      if (e === this) return;
      e = e.parent;
    }
    try {
      return (
        (this.parent = Et),
        (Et = this),
        (un = !0),
        (yn = 1 << ++zs),
        zs <= ma ? Zm(this) : jl(this),
        this.fn()
      );
    } finally {
      zs <= ma && eg(this),
        (yn = 1 << --zs),
        (Et = this.parent),
        (un = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    Et === this
      ? (this.deferStop = !0)
      : this.active &&
        (jl(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function jl(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++) e[n].delete(t);
    e.length = 0;
  }
}
let un = !0;
const ef = [];
function Ns() {
  ef.push(un), (un = !1);
}
function Os() {
  const t = ef.pop();
  un = t === void 0 ? !0 : t;
}
function mt(t, e, n) {
  if (un && Et) {
    let s = pa.get(t);
    s || pa.set(t, (s = new Map()));
    let r = s.get(n);
    r || s.set(n, (r = gc())), tf(r);
  }
}
function tf(t, e) {
  let n = !1;
  zs <= ma ? Zh(t) || ((t.n |= yn), (n = !Jh(t))) : (n = !t.has(Et)),
    n && (t.add(Et), Et.deps.push(t));
}
function Yt(t, e, n, s, r, i) {
  const o = pa.get(t);
  if (!o) return;
  let a = [];
  if (e === "clear") a = [...o.values()];
  else if (n === "length" && Y(t)) {
    const c = Ei(s);
    o.forEach((l, u) => {
      (u === "length" || u >= c) && a.push(l);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), e)) {
      case "add":
        Y(t)
          ? mc(n) && a.push(o.get("length"))
          : (a.push(o.get(jn)), hs(t) && a.push(o.get(ga)));
        break;
      case "delete":
        Y(t) || (a.push(o.get(jn)), hs(t) && a.push(o.get(ga)));
        break;
      case "set":
        hs(t) && a.push(o.get(jn));
        break;
    }
  if (a.length === 1) a[0] && ya(a[0]);
  else {
    const c = [];
    for (const l of a) l && c.push(...l);
    ya(gc(c));
  }
}
function ya(t, e) {
  const n = Y(t) ? t : [...t];
  for (const s of n) s.computed && ql(s);
  for (const s of n) s.computed || ql(s);
}
function ql(t, e) {
  (t !== Et || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run());
}
const tg = hc("__proto__,__v_isRef,__isVue"),
  nf = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((t) => t !== "arguments" && t !== "caller")
      .map((t) => Symbol[t])
      .filter(pc)
  ),
  ng = vc(),
  sg = vc(!1, !0),
  rg = vc(!0),
  Hl = ig();
function ig() {
  const t = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
      t[e] = function (...n) {
        const s = ue(this);
        for (let i = 0, o = this.length; i < o; i++) mt(s, "get", i + "");
        const r = s[e](...n);
        return r === -1 || r === !1 ? s[e](...n.map(ue)) : r;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
      t[e] = function (...n) {
        Ns();
        const s = ue(this)[e].apply(this, n);
        return Os(), s;
      };
    }),
    t
  );
}
function vc(t = !1, e = !1) {
  return function (s, r, i) {
    if (r === "__v_isReactive") return !t;
    if (r === "__v_isReadonly") return t;
    if (r === "__v_isShallow") return e;
    if (r === "__v_raw" && i === (t ? (e ? bg : cf) : e ? af : of).get(s))
      return s;
    const o = Y(s);
    if (!t && o && ce(Hl, r)) return Reflect.get(Hl, r, i);
    const a = Reflect.get(s, r, i);
    return (pc(r) ? nf.has(r) : tg(r)) || (t || mt(s, "get", r), e)
      ? a
      : Ae(a)
      ? o && mc(r)
        ? a
        : a.value
      : Te(a)
      ? t
        ? lf(a)
        : Ps(a)
      : a;
  };
}
const og = sf(),
  ag = sf(!0);
function sf(t = !1) {
  return function (n, s, r, i) {
    let o = n[s];
    if (gs(o) && Ae(o) && !Ae(r)) return !1;
    if (
      !t &&
      (!xi(r) && !gs(r) && ((o = ue(o)), (r = ue(r))), !Y(n) && Ae(o) && !Ae(r))
    )
      return (o.value = r), !0;
    const a = Y(n) && mc(s) ? Number(s) < n.length : ce(n, s),
      c = Reflect.set(n, s, r, i);
    return (
      n === ue(i) && (a ? lr(r, o) && Yt(n, "set", s, r) : Yt(n, "add", s, r)),
      c
    );
  };
}
function cg(t, e) {
  const n = ce(t, e);
  t[e];
  const s = Reflect.deleteProperty(t, e);
  return s && n && Yt(t, "delete", e, void 0), s;
}
function lg(t, e) {
  const n = Reflect.has(t, e);
  return (!pc(e) || !nf.has(e)) && mt(t, "has", e), n;
}
function ug(t) {
  return mt(t, "iterate", Y(t) ? "length" : jn), Reflect.ownKeys(t);
}
const rf = { get: ng, set: og, deleteProperty: cg, has: lg, ownKeys: ug },
  hg = {
    get: rg,
    set(t, e) {
      return !0;
    },
    deleteProperty(t, e) {
      return !0;
    },
  },
  fg = rt({}, rf, { get: sg, set: ag }),
  wc = (t) => t,
  Ji = (t) => Reflect.getPrototypeOf(t);
function Wr(t, e, n = !1, s = !1) {
  t = t.__v_raw;
  const r = ue(t),
    i = ue(e);
  n || (e !== i && mt(r, "get", e), mt(r, "get", i));
  const { has: o } = Ji(r),
    a = s ? wc : n ? Ec : ur;
  if (o.call(r, e)) return a(t.get(e));
  if (o.call(r, i)) return a(t.get(i));
  t !== r && t.get(e);
}
function Qr(t, e = !1) {
  const n = this.__v_raw,
    s = ue(n),
    r = ue(t);
  return (
    e || (t !== r && mt(s, "has", t), mt(s, "has", r)),
    t === r ? n.has(t) : n.has(t) || n.has(r)
  );
}
function Yr(t, e = !1) {
  return (
    (t = t.__v_raw), !e && mt(ue(t), "iterate", jn), Reflect.get(t, "size", t)
  );
}
function Kl(t) {
  t = ue(t);
  const e = ue(this);
  return Ji(e).has.call(e, t) || (e.add(t), Yt(e, "add", t, t)), this;
}
function zl(t, e) {
  e = ue(e);
  const n = ue(this),
    { has: s, get: r } = Ji(n);
  let i = s.call(n, t);
  i || ((t = ue(t)), (i = s.call(n, t)));
  const o = r.call(n, t);
  return (
    n.set(t, e), i ? lr(e, o) && Yt(n, "set", t, e) : Yt(n, "add", t, e), this
  );
}
function Gl(t) {
  const e = ue(this),
    { has: n, get: s } = Ji(e);
  let r = n.call(e, t);
  r || ((t = ue(t)), (r = n.call(e, t))), s && s.call(e, t);
  const i = e.delete(t);
  return r && Yt(e, "delete", t, void 0), i;
}
function Wl() {
  const t = ue(this),
    e = t.size !== 0,
    n = t.clear();
  return e && Yt(t, "clear", void 0, void 0), n;
}
function Xr(t, e) {
  return function (s, r) {
    const i = this,
      o = i.__v_raw,
      a = ue(o),
      c = e ? wc : t ? Ec : ur;
    return (
      !t && mt(a, "iterate", jn), o.forEach((l, u) => s.call(r, c(l), c(u), i))
    );
  };
}
function Jr(t, e, n) {
  return function (...s) {
    const r = this.__v_raw,
      i = ue(r),
      o = hs(i),
      a = t === "entries" || (t === Symbol.iterator && o),
      c = t === "keys" && o,
      l = r[t](...s),
      u = n ? wc : e ? Ec : ur;
    return (
      !e && mt(i, "iterate", c ? ga : jn),
      {
        next() {
          const { value: h, done: f } = l.next();
          return f
            ? { value: h, done: f }
            : { value: a ? [u(h[0]), u(h[1])] : u(h), done: f };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function sn(t) {
  return function (...e) {
    return t === "delete" ? !1 : this;
  };
}
function dg() {
  const t = {
      get(i) {
        return Wr(this, i);
      },
      get size() {
        return Yr(this);
      },
      has: Qr,
      add: Kl,
      set: zl,
      delete: Gl,
      clear: Wl,
      forEach: Xr(!1, !1),
    },
    e = {
      get(i) {
        return Wr(this, i, !1, !0);
      },
      get size() {
        return Yr(this);
      },
      has: Qr,
      add: Kl,
      set: zl,
      delete: Gl,
      clear: Wl,
      forEach: Xr(!1, !0),
    },
    n = {
      get(i) {
        return Wr(this, i, !0);
      },
      get size() {
        return Yr(this, !0);
      },
      has(i) {
        return Qr.call(this, i, !0);
      },
      add: sn("add"),
      set: sn("set"),
      delete: sn("delete"),
      clear: sn("clear"),
      forEach: Xr(!0, !1),
    },
    s = {
      get(i) {
        return Wr(this, i, !0, !0);
      },
      get size() {
        return Yr(this, !0);
      },
      has(i) {
        return Qr.call(this, i, !0);
      },
      add: sn("add"),
      set: sn("set"),
      delete: sn("delete"),
      clear: sn("clear"),
      forEach: Xr(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      (t[i] = Jr(i, !1, !1)),
        (n[i] = Jr(i, !0, !1)),
        (e[i] = Jr(i, !1, !0)),
        (s[i] = Jr(i, !0, !0));
    }),
    [t, n, e, s]
  );
}
const [pg, mg, gg, yg] = dg();
function _c(t, e) {
  const n = e ? (t ? yg : gg) : t ? mg : pg;
  return (s, r, i) =>
    r === "__v_isReactive"
      ? !t
      : r === "__v_isReadonly"
      ? t
      : r === "__v_raw"
      ? s
      : Reflect.get(ce(n, r) && r in s ? n : s, r, i);
}
const vg = { get: _c(!1, !1) },
  wg = { get: _c(!1, !0) },
  _g = { get: _c(!0, !1) },
  of = new WeakMap(),
  af = new WeakMap(),
  cf = new WeakMap(),
  bg = new WeakMap();
function Eg(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function xg(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Eg(zm(t));
}
function Ps(t) {
  return gs(t) ? t : bc(t, !1, rf, vg, of);
}
function Tg(t) {
  return bc(t, !1, fg, wg, af);
}
function lf(t) {
  return bc(t, !0, hg, _g, cf);
}
function bc(t, e, n, s, r) {
  if (!Te(t) || (t.__v_raw && !(e && t.__v_isReactive))) return t;
  const i = r.get(t);
  if (i) return i;
  const o = xg(t);
  if (o === 0) return t;
  const a = new Proxy(t, o === 2 ? s : n);
  return r.set(t, a), a;
}
function hn(t) {
  return gs(t) ? hn(t.__v_raw) : !!(t && t.__v_isReactive);
}
function gs(t) {
  return !!(t && t.__v_isReadonly);
}
function xi(t) {
  return !!(t && t.__v_isShallow);
}
function uf(t) {
  return hn(t) || gs(t);
}
function ue(t) {
  const e = t && t.__v_raw;
  return e ? ue(e) : t;
}
function ys(t) {
  return bi(t, "__v_skip", !0), t;
}
const ur = (t) => (Te(t) ? Ps(t) : t),
  Ec = (t) => (Te(t) ? lf(t) : t);
function hf(t) {
  un && Et && ((t = ue(t)), tf(t.dep || (t.dep = gc())));
}
function ff(t, e) {
  (t = ue(t)), t.dep && ya(t.dep);
}
function Ae(t) {
  return !!(t && t.__v_isRef === !0);
}
function _e(t) {
  return df(t, !1);
}
function Ig(t) {
  return df(t, !0);
}
function df(t, e) {
  return Ae(t) ? t : new Cg(t, e);
}
class Cg {
  constructor(e, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? e : ue(e)),
      (this._value = n ? e : ur(e));
  }
  get value() {
    return hf(this), this._value;
  }
  set value(e) {
    const n = this.__v_isShallow || xi(e) || gs(e);
    (e = n ? e : ue(e)),
      lr(e, this._rawValue) &&
        ((this._rawValue = e), (this._value = n ? e : ur(e)), ff(this));
  }
}
function Gt(t) {
  return Ae(t) ? t.value : t;
}
const Sg = {
  get: (t, e, n) => Gt(Reflect.get(t, e, n)),
  set: (t, e, n, s) => {
    const r = t[e];
    return Ae(r) && !Ae(n) ? ((r.value = n), !0) : Reflect.set(t, e, n, s);
  },
};
function pf(t) {
  return hn(t) ? t : new Proxy(t, Sg);
}
function Ag(t) {
  const e = Y(t) ? new Array(t.length) : {};
  for (const n in t) e[n] = Rg(t, n);
  return e;
}
class kg {
  constructor(e, n, s) {
    (this._object = e),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
}
function Rg(t, e, n) {
  const s = t[e];
  return Ae(s) ? s : new kg(t, e, n);
}
var mf;
class Dg {
  constructor(e, n, s, r) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[mf] = !1),
      (this._dirty = !0),
      (this.effect = new yc(e, () => {
        this._dirty || ((this._dirty = !0), ff(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !r),
      (this.__v_isReadonly = s);
  }
  get value() {
    const e = ue(this);
    return (
      hf(e),
      (e._dirty || !e._cacheable) &&
        ((e._dirty = !1), (e._value = e.effect.run())),
      e._value
    );
  }
  set value(e) {
    this._setter(e);
  }
}
mf = "__v_isReadonly";
function Ng(t, e, n = !1) {
  let s, r;
  const i = te(t);
  return (
    i ? ((s = t), (r = Ct)) : ((s = t.get), (r = t.set)),
    new Dg(s, r, i || !r, n)
  );
}
function fn(t, e, n, s) {
  let r;
  try {
    r = s ? t(...s) : t();
  } catch (i) {
    Zi(i, e, n);
  }
  return r;
}
function St(t, e, n, s) {
  if (te(t)) {
    const i = fn(t, e, n, s);
    return (
      i &&
        Gh(i) &&
        i.catch((o) => {
          Zi(o, e, n);
        }),
      i
    );
  }
  const r = [];
  for (let i = 0; i < t.length; i++) r.push(St(t[i], e, n, s));
  return r;
}
function Zi(t, e, n, s = !0) {
  const r = e ? e.vnode : null;
  if (e) {
    let i = e.parent;
    const o = e.proxy,
      a = n;
    for (; i; ) {
      const l = i.ec;
      if (l) {
        for (let u = 0; u < l.length; u++) if (l[u](t, o, a) === !1) return;
      }
      i = i.parent;
    }
    const c = e.appContext.config.errorHandler;
    if (c) {
      fn(c, null, 10, [t, o, a]);
      return;
    }
  }
  Og(t, n, r, s);
}
function Og(t, e, n, s = !0) {
  console.error(t);
}
let hr = !1,
  va = !1;
const Qe = [];
let Ft = 0;
const fs = [];
let Kt = null,
  Pn = 0;
const gf = Promise.resolve();
let xc = null;
function Tc(t) {
  const e = xc || gf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Pg(t) {
  let e = Ft + 1,
    n = Qe.length;
  for (; e < n; ) {
    const s = (e + n) >>> 1;
    fr(Qe[s]) < t ? (e = s + 1) : (n = s);
  }
  return e;
}
function Ic(t) {
  (!Qe.length || !Qe.includes(t, hr && t.allowRecurse ? Ft + 1 : Ft)) &&
    (t.id == null ? Qe.push(t) : Qe.splice(Pg(t.id), 0, t), yf());
}
function yf() {
  !hr && !va && ((va = !0), (xc = gf.then(wf)));
}
function Mg(t) {
  const e = Qe.indexOf(t);
  e > Ft && Qe.splice(e, 1);
}
function Lg(t) {
  Y(t)
    ? fs.push(...t)
    : (!Kt || !Kt.includes(t, t.allowRecurse ? Pn + 1 : Pn)) && fs.push(t),
    yf();
}
function Ql(t, e = hr ? Ft + 1 : 0) {
  for (; e < Qe.length; e++) {
    const n = Qe[e];
    n && n.pre && (Qe.splice(e, 1), e--, n());
  }
}
function vf(t) {
  if (fs.length) {
    const e = [...new Set(fs)];
    if (((fs.length = 0), Kt)) {
      Kt.push(...e);
      return;
    }
    for (Kt = e, Kt.sort((n, s) => fr(n) - fr(s)), Pn = 0; Pn < Kt.length; Pn++)
      Kt[Pn]();
    (Kt = null), (Pn = 0);
  }
}
const fr = (t) => (t.id == null ? 1 / 0 : t.id),
  Fg = (t, e) => {
    const n = fr(t) - fr(e);
    if (n === 0) {
      if (t.pre && !e.pre) return -1;
      if (e.pre && !t.pre) return 1;
    }
    return n;
  };
function wf(t) {
  (va = !1), (hr = !0), Qe.sort(Fg);
  const e = Ct;
  try {
    for (Ft = 0; Ft < Qe.length; Ft++) {
      const n = Qe[Ft];
      n && n.active !== !1 && fn(n, null, 14);
    }
  } finally {
    (Ft = 0),
      (Qe.length = 0),
      vf(),
      (hr = !1),
      (xc = null),
      (Qe.length || fs.length) && wf();
  }
}
function $g(t, e, ...n) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || be;
  let r = n;
  const i = e.startsWith("update:"),
    o = i && e.slice(7);
  if (o && o in s) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: h, trim: f } = s[u] || be;
    f && (r = n.map((m) => (Me(m) ? m.trim() : m))), h && (r = n.map(Ei));
  }
  let a,
    c = s[(a = jo(e))] || s[(a = jo(Vt(e)))];
  !c && i && (c = s[(a = jo(Ds(e)))]), c && St(c, t, 6, r);
  const l = s[a + "Once"];
  if (l) {
    if (!t.emitted) t.emitted = {};
    else if (t.emitted[a]) return;
    (t.emitted[a] = !0), St(l, t, 6, r);
  }
}
function _f(t, e, n = !1) {
  const s = e.emitsCache,
    r = s.get(t);
  if (r !== void 0) return r;
  const i = t.emits;
  let o = {},
    a = !1;
  if (!te(t)) {
    const c = (l) => {
      const u = _f(l, e, !0);
      u && ((a = !0), rt(o, u));
    };
    !n && e.mixins.length && e.mixins.forEach(c),
      t.extends && c(t.extends),
      t.mixins && t.mixins.forEach(c);
  }
  return !i && !a
    ? (Te(t) && s.set(t, null), null)
    : (Y(i) ? i.forEach((c) => (o[c] = null)) : rt(o, i),
      Te(t) && s.set(t, o),
      o);
}
function eo(t, e) {
  return !t || !Wi(e)
    ? !1
    : ((e = e.slice(2).replace(/Once$/, "")),
      ce(t, e[0].toLowerCase() + e.slice(1)) || ce(t, Ds(e)) || ce(t, e));
}
let ft = null,
  bf = null;
function Ti(t) {
  const e = ft;
  return (ft = t), (bf = (t && t.type.__scopeId) || null), e;
}
function Wt(t, e = ft, n) {
  if (!e || t._n) return t;
  const s = (...r) => {
    s._d && iu(-1);
    const i = Ti(e);
    let o;
    try {
      o = t(...r);
    } finally {
      Ti(i), s._d && iu(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function qo(t) {
  const {
    type: e,
    vnode: n,
    proxy: s,
    withProxy: r,
    props: i,
    propsOptions: [o],
    slots: a,
    attrs: c,
    emit: l,
    render: u,
    renderCache: h,
    data: f,
    setupState: m,
    ctx: g,
    inheritAttrs: v,
  } = t;
  let b, S;
  const R = Ti(t);
  try {
    if (n.shapeFlag & 4) {
      const U = r || s;
      (b = Mt(u.call(U, U, h, i, m, f, g))), (S = c);
    } else {
      const U = e;
      (b = Mt(
        U.length > 1 ? U(i, { attrs: c, slots: a, emit: l }) : U(i, null)
      )),
        (S = e.props ? c : Ug(c));
    }
  } catch (U) {
    (er.length = 0), Zi(U, t, 1), (b = Z(zn));
  }
  let O = b;
  if (S && v !== !1) {
    const U = Object.keys(S),
      { shapeFlag: J } = O;
    U.length && J & 7 && (o && U.some(fc) && (S = Vg(S, o)), (O = vs(O, S)));
  }
  return (
    n.dirs && ((O = vs(O)), (O.dirs = O.dirs ? O.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (O.transition = n.transition),
    (b = O),
    Ti(R),
    b
  );
}
const Ug = (t) => {
    let e;
    for (const n in t)
      (n === "class" || n === "style" || Wi(n)) && ((e || (e = {}))[n] = t[n]);
    return e;
  },
  Vg = (t, e) => {
    const n = {};
    for (const s in t) (!fc(s) || !(s.slice(9) in e)) && (n[s] = t[s]);
    return n;
  };
function Bg(t, e, n) {
  const { props: s, children: r, component: i } = t,
    { props: o, children: a, patchFlag: c } = e,
    l = i.emitsOptions;
  if (e.dirs || e.transition) return !0;
  if (n && c >= 0) {
    if (c & 1024) return !0;
    if (c & 16) return s ? Yl(s, o, l) : !!o;
    if (c & 8) {
      const u = e.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const f = u[h];
        if (o[f] !== s[f] && !eo(l, f)) return !0;
      }
    }
  } else
    return (r || a) && (!a || !a.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Yl(s, o, l)
        : !0
      : !!o;
  return !1;
}
function Yl(t, e, n) {
  const s = Object.keys(e);
  if (s.length !== Object.keys(t).length) return !0;
  for (let r = 0; r < s.length; r++) {
    const i = s[r];
    if (e[i] !== t[i] && !eo(n, i)) return !0;
  }
  return !1;
}
function jg({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; ) ((t = e.vnode).el = n), (e = e.parent);
}
const qg = (t) => t.__isSuspense;
function Hg(t, e) {
  e && e.pendingBranch
    ? Y(t)
      ? e.effects.push(...t)
      : e.effects.push(t)
    : Lg(t);
}
function hi(t, e) {
  if (je) {
    let n = je.provides;
    const s = je.parent && je.parent.provides;
    s === n && (n = je.provides = Object.create(s)), (n[t] = e);
  }
}
function At(t, e, n = !1) {
  const s = je || ft;
  if (s) {
    const r =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (r && t in r) return r[t];
    if (arguments.length > 1) return n && te(e) ? e.call(s.proxy) : e;
  }
}
const Zr = {};
function Xs(t, e, n) {
  return Ef(t, e, n);
}
function Ef(
  t,
  e,
  { immediate: n, deep: s, flush: r, onTrack: i, onTrigger: o } = be
) {
  const a = je;
  let c,
    l = !1,
    u = !1;
  if (
    (Ae(t)
      ? ((c = () => t.value), (l = xi(t)))
      : hn(t)
      ? ((c = () => t), (s = !0))
      : Y(t)
      ? ((u = !0),
        (l = t.some((O) => hn(O) || xi(O))),
        (c = () =>
          t.map((O) => {
            if (Ae(O)) return O.value;
            if (hn(O)) return $n(O);
            if (te(O)) return fn(O, a, 2);
          })))
      : te(t)
      ? e
        ? (c = () => fn(t, a, 2))
        : (c = () => {
            if (!(a && a.isUnmounted)) return h && h(), St(t, a, 3, [f]);
          })
      : (c = Ct),
    e && s)
  ) {
    const O = c;
    c = () => $n(O());
  }
  let h,
    f = (O) => {
      h = S.onStop = () => {
        fn(O, a, 4);
      };
    },
    m;
  if (pr)
    if (
      ((f = Ct),
      e ? n && St(e, a, 3, [c(), u ? [] : void 0, f]) : c(),
      r === "sync")
    ) {
      const O = Vy();
      m = O.__watcherHandles || (O.__watcherHandles = []);
    } else return Ct;
  let g = u ? new Array(t.length).fill(Zr) : Zr;
  const v = () => {
    if (S.active)
      if (e) {
        const O = S.run();
        (s || l || (u ? O.some((U, J) => lr(U, g[J])) : lr(O, g))) &&
          (h && h(),
          St(e, a, 3, [O, g === Zr ? void 0 : u && g[0] === Zr ? [] : g, f]),
          (g = O));
      } else S.run();
  };
  v.allowRecurse = !!e;
  let b;
  r === "sync"
    ? (b = v)
    : r === "post"
    ? (b = () => ot(v, a && a.suspense))
    : ((v.pre = !0), a && (v.id = a.uid), (b = () => Ic(v)));
  const S = new yc(c, b);
  e
    ? n
      ? v()
      : (g = S.run())
    : r === "post"
    ? ot(S.run.bind(S), a && a.suspense)
    : S.run();
  const R = () => {
    S.stop(), a && a.scope && dc(a.scope.effects, S);
  };
  return m && m.push(R), R;
}
function Kg(t, e, n) {
  const s = this.proxy,
    r = Me(t) ? (t.includes(".") ? xf(s, t) : () => s[t]) : t.bind(s, s);
  let i;
  te(e) ? (i = e) : ((i = e.handler), (n = e));
  const o = je;
  ws(this);
  const a = Ef(r, i.bind(s), n);
  return o ? ws(o) : qn(), a;
}
function xf(t, e) {
  const n = e.split(".");
  return () => {
    let s = t;
    for (let r = 0; r < n.length && s; r++) s = s[n[r]];
    return s;
  };
}
function $n(t, e) {
  if (!Te(t) || t.__v_skip || ((e = e || new Set()), e.has(t))) return t;
  if ((e.add(t), Ae(t))) $n(t.value, e);
  else if (Y(t)) for (let n = 0; n < t.length; n++) $n(t[n], e);
  else if (zh(t) || hs(t))
    t.forEach((n) => {
      $n(n, e);
    });
  else if (Qh(t)) for (const n in t) $n(t[n], e);
  return t;
}
function Tf(t) {
  return te(t) ? { setup: t, name: t.name } : t;
}
const fi = (t) => !!t.type.__asyncLoader,
  If = (t) => t.type.__isKeepAlive;
function zg(t, e) {
  Cf(t, "a", e);
}
function Gg(t, e) {
  Cf(t, "da", e);
}
function Cf(t, e, n = je) {
  const s =
    t.__wdc ||
    (t.__wdc = () => {
      let r = n;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
  if ((to(e, s, n), n)) {
    let r = n.parent;
    for (; r && r.parent; )
      If(r.parent.vnode) && Wg(s, e, n, r), (r = r.parent);
  }
}
function Wg(t, e, n, s) {
  const r = to(e, t, s, !0);
  Sf(() => {
    dc(s[e], r);
  }, n);
}
function to(t, e, n = je, s = !1) {
  if (n) {
    const r = n[t] || (n[t] = []),
      i =
        e.__weh ||
        (e.__weh = (...o) => {
          if (n.isUnmounted) return;
          Ns(), ws(n);
          const a = St(e, n, t, o);
          return qn(), Os(), a;
        });
    return s ? r.unshift(i) : r.push(i), i;
  }
}
const tn =
    (t) =>
    (e, n = je) =>
      (!pr || t === "sp") && to(t, (...s) => e(...s), n),
  Qg = tn("bm"),
  kr = tn("m"),
  Yg = tn("bu"),
  Xg = tn("u"),
  Jg = tn("bum"),
  Sf = tn("um"),
  Zg = tn("sp"),
  ey = tn("rtg"),
  ty = tn("rtc");
function ny(t, e = je) {
  to("ec", t, e);
}
function Mn(t, e) {
  const n = ft;
  if (n === null) return t;
  const s = ro(n) || n.proxy,
    r = t.dirs || (t.dirs = []);
  for (let i = 0; i < e.length; i++) {
    let [o, a, c, l = be] = e[i];
    o &&
      (te(o) && (o = { mounted: o, updated: o }),
      o.deep && $n(a),
      r.push({
        dir: o,
        instance: s,
        value: a,
        oldValue: void 0,
        arg: c,
        modifiers: l,
      }));
  }
  return t;
}
function Rn(t, e, n, s) {
  const r = t.dirs,
    i = e && e.dirs;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    i && (a.oldValue = i[o].value);
    let c = a.dir[s];
    c && (Ns(), St(c, n, 8, [t.el, a, t, e]), Os());
  }
}
const Af = "components";
function En(t, e) {
  return ry(Af, t, !0, e) || t;
}
const sy = Symbol();
function ry(t, e, n = !0, s = !1) {
  const r = ft || je;
  if (r) {
    const i = r.type;
    if (t === Af) {
      const a = Fy(i, !1);
      if (a && (a === e || a === Vt(e) || a === Xi(Vt(e)))) return i;
    }
    const o = Xl(r[t] || i[t], e) || Xl(r.appContext[t], e);
    return !o && s ? i : o;
  }
}
function Xl(t, e) {
  return t && (t[e] || t[Vt(e)] || t[Xi(Vt(e))]);
}
function wa(t, e, n, s) {
  let r;
  const i = n && n[s];
  if (Y(t) || Me(t)) {
    r = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      r[o] = e(t[o], o, void 0, i && i[o]);
  } else if (typeof t == "number") {
    r = new Array(t);
    for (let o = 0; o < t; o++) r[o] = e(o + 1, o, void 0, i && i[o]);
  } else if (Te(t))
    if (t[Symbol.iterator])
      r = Array.from(t, (o, a) => e(o, a, void 0, i && i[a]));
    else {
      const o = Object.keys(t);
      r = new Array(o.length);
      for (let a = 0, c = o.length; a < c; a++) {
        const l = o[a];
        r[a] = e(t[l], l, a, i && i[a]);
      }
    }
  else r = [];
  return n && (n[s] = r), r;
}
const _a = (t) => (t ? (Uf(t) ? ro(t) || t.proxy : _a(t.parent)) : null),
  Js = rt(Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => _a(t.parent),
    $root: (t) => _a(t.root),
    $emit: (t) => t.emit,
    $options: (t) => Cc(t),
    $forceUpdate: (t) => t.f || (t.f = () => Ic(t.update)),
    $nextTick: (t) => t.n || (t.n = Tc.bind(t.proxy)),
    $watch: (t) => Kg.bind(t),
  }),
  Ho = (t, e) => t !== be && !t.__isScriptSetup && ce(t, e),
  iy = {
    get({ _: t }, e) {
      const {
        ctx: n,
        setupState: s,
        data: r,
        props: i,
        accessCache: o,
        type: a,
        appContext: c,
      } = t;
      let l;
      if (e[0] !== "$") {
        const m = o[e];
        if (m !== void 0)
          switch (m) {
            case 1:
              return s[e];
            case 2:
              return r[e];
            case 4:
              return n[e];
            case 3:
              return i[e];
          }
        else {
          if (Ho(s, e)) return (o[e] = 1), s[e];
          if (r !== be && ce(r, e)) return (o[e] = 2), r[e];
          if ((l = t.propsOptions[0]) && ce(l, e)) return (o[e] = 3), i[e];
          if (n !== be && ce(n, e)) return (o[e] = 4), n[e];
          ba && (o[e] = 0);
        }
      }
      const u = Js[e];
      let h, f;
      if (u) return e === "$attrs" && mt(t, "get", e), u(t);
      if ((h = a.__cssModules) && (h = h[e])) return h;
      if (n !== be && ce(n, e)) return (o[e] = 4), n[e];
      if (((f = c.config.globalProperties), ce(f, e))) return f[e];
    },
    set({ _: t }, e, n) {
      const { data: s, setupState: r, ctx: i } = t;
      return Ho(r, e)
        ? ((r[e] = n), !0)
        : s !== be && ce(s, e)
        ? ((s[e] = n), !0)
        : ce(t.props, e) || (e[0] === "$" && e.slice(1) in t)
        ? !1
        : ((i[e] = n), !0);
    },
    has(
      {
        _: {
          data: t,
          setupState: e,
          accessCache: n,
          ctx: s,
          appContext: r,
          propsOptions: i,
        },
      },
      o
    ) {
      let a;
      return (
        !!n[o] ||
        (t !== be && ce(t, o)) ||
        Ho(e, o) ||
        ((a = i[0]) && ce(a, o)) ||
        ce(s, o) ||
        ce(Js, o) ||
        ce(r.config.globalProperties, o)
      );
    },
    defineProperty(t, e, n) {
      return (
        n.get != null
          ? (t._.accessCache[e] = 0)
          : ce(n, "value") && this.set(t, e, n.value, null),
        Reflect.defineProperty(t, e, n)
      );
    },
  };
let ba = !0;
function oy(t) {
  const e = Cc(t),
    n = t.proxy,
    s = t.ctx;
  (ba = !1), e.beforeCreate && Jl(e.beforeCreate, t, "bc");
  const {
    data: r,
    computed: i,
    methods: o,
    watch: a,
    provide: c,
    inject: l,
    created: u,
    beforeMount: h,
    mounted: f,
    beforeUpdate: m,
    updated: g,
    activated: v,
    deactivated: b,
    beforeDestroy: S,
    beforeUnmount: R,
    destroyed: O,
    unmounted: U,
    render: J,
    renderTracked: le,
    renderTriggered: K,
    errorCaptured: G,
    serverPrefetch: Se,
    expose: ke,
    inheritAttrs: Le,
    components: yt,
    directives: nn,
    filters: ct,
  } = e;
  if ((l && ay(l, s, null, t.appContext.config.unwrapInjectedRef), o))
    for (const ye in o) {
      const pe = o[ye];
      te(pe) && (s[ye] = pe.bind(n));
    }
  if (r) {
    const ye = r.call(n, n);
    Te(ye) && (t.data = Ps(ye));
  }
  if (((ba = !0), i))
    for (const ye in i) {
      const pe = i[ye],
        wt = te(pe) ? pe.bind(n, n) : te(pe.get) ? pe.get.bind(n, n) : Ct,
        kn = !te(pe) && te(pe.set) ? pe.set.bind(n) : Ct,
        _t = ht({ get: wt, set: kn });
      Object.defineProperty(s, ye, {
        enumerable: !0,
        configurable: !0,
        get: () => _t.value,
        set: (it) => (_t.value = it),
      });
    }
  if (a) for (const ye in a) kf(a[ye], s, n, ye);
  if (c) {
    const ye = te(c) ? c.call(n) : c;
    Reflect.ownKeys(ye).forEach((pe) => {
      hi(pe, ye[pe]);
    });
  }
  u && Jl(u, t, "c");
  function Re(ye, pe) {
    Y(pe) ? pe.forEach((wt) => ye(wt.bind(n))) : pe && ye(pe.bind(n));
  }
  if (
    (Re(Qg, h),
    Re(kr, f),
    Re(Yg, m),
    Re(Xg, g),
    Re(zg, v),
    Re(Gg, b),
    Re(ny, G),
    Re(ty, le),
    Re(ey, K),
    Re(Jg, R),
    Re(Sf, U),
    Re(Zg, Se),
    Y(ke))
  )
    if (ke.length) {
      const ye = t.exposed || (t.exposed = {});
      ke.forEach((pe) => {
        Object.defineProperty(ye, pe, {
          get: () => n[pe],
          set: (wt) => (n[pe] = wt),
        });
      });
    } else t.exposed || (t.exposed = {});
  J && t.render === Ct && (t.render = J),
    Le != null && (t.inheritAttrs = Le),
    yt && (t.components = yt),
    nn && (t.directives = nn);
}
function ay(t, e, n = Ct, s = !1) {
  Y(t) && (t = Ea(t));
  for (const r in t) {
    const i = t[r];
    let o;
    Te(i)
      ? "default" in i
        ? (o = At(i.from || r, i.default, !0))
        : (o = At(i.from || r))
      : (o = At(i)),
      Ae(o) && s
        ? Object.defineProperty(e, r, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (a) => (o.value = a),
          })
        : (e[r] = o);
  }
}
function Jl(t, e, n) {
  St(Y(t) ? t.map((s) => s.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function kf(t, e, n, s) {
  const r = s.includes(".") ? xf(n, s) : () => n[s];
  if (Me(t)) {
    const i = e[t];
    te(i) && Xs(r, i);
  } else if (te(t)) Xs(r, t.bind(n));
  else if (Te(t))
    if (Y(t)) t.forEach((i) => kf(i, e, n, s));
    else {
      const i = te(t.handler) ? t.handler.bind(n) : e[t.handler];
      te(i) && Xs(r, i, t);
    }
}
function Cc(t) {
  const e = t.type,
    { mixins: n, extends: s } = e,
    {
      mixins: r,
      optionsCache: i,
      config: { optionMergeStrategies: o },
    } = t.appContext,
    a = i.get(e);
  let c;
  return (
    a
      ? (c = a)
      : !r.length && !n && !s
      ? (c = e)
      : ((c = {}), r.length && r.forEach((l) => Ii(c, l, o, !0)), Ii(c, e, o)),
    Te(e) && i.set(e, c),
    c
  );
}
function Ii(t, e, n, s = !1) {
  const { mixins: r, extends: i } = e;
  i && Ii(t, i, n, !0), r && r.forEach((o) => Ii(t, o, n, !0));
  for (const o in e)
    if (!(s && o === "expose")) {
      const a = cy[o] || (n && n[o]);
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const cy = {
  data: Zl,
  props: Nn,
  emits: Nn,
  methods: Nn,
  computed: Nn,
  beforeCreate: et,
  created: et,
  beforeMount: et,
  mounted: et,
  beforeUpdate: et,
  updated: et,
  beforeDestroy: et,
  beforeUnmount: et,
  destroyed: et,
  unmounted: et,
  activated: et,
  deactivated: et,
  errorCaptured: et,
  serverPrefetch: et,
  components: Nn,
  directives: Nn,
  watch: uy,
  provide: Zl,
  inject: ly,
};
function Zl(t, e) {
  return e
    ? t
      ? function () {
          return rt(
            te(t) ? t.call(this, this) : t,
            te(e) ? e.call(this, this) : e
          );
        }
      : e
    : t;
}
function ly(t, e) {
  return Nn(Ea(t), Ea(e));
}
function Ea(t) {
  if (Y(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) e[t[n]] = t[n];
    return e;
  }
  return t;
}
function et(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function Nn(t, e) {
  return t ? rt(rt(Object.create(null), t), e) : e;
}
function uy(t, e) {
  if (!t) return e;
  if (!e) return t;
  const n = rt(Object.create(null), t);
  for (const s in e) n[s] = et(t[s], e[s]);
  return n;
}
function hy(t, e, n, s = !1) {
  const r = {},
    i = {};
  bi(i, so, 1), (t.propsDefaults = Object.create(null)), Rf(t, e, r, i);
  for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
  n ? (t.props = s ? r : Tg(r)) : t.type.props ? (t.props = r) : (t.props = i),
    (t.attrs = i);
}
function fy(t, e, n, s) {
  const {
      props: r,
      attrs: i,
      vnode: { patchFlag: o },
    } = t,
    a = ue(r),
    [c] = t.propsOptions;
  let l = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = t.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let f = u[h];
        if (eo(t.emitsOptions, f)) continue;
        const m = e[f];
        if (c)
          if (ce(i, f)) m !== i[f] && ((i[f] = m), (l = !0));
          else {
            const g = Vt(f);
            r[g] = xa(c, a, g, m, t, !1);
          }
        else m !== i[f] && ((i[f] = m), (l = !0));
      }
    }
  } else {
    Rf(t, e, r, i) && (l = !0);
    let u;
    for (const h in a)
      (!e || (!ce(e, h) && ((u = Ds(h)) === h || !ce(e, u)))) &&
        (c
          ? n &&
            (n[h] !== void 0 || n[u] !== void 0) &&
            (r[h] = xa(c, a, h, void 0, t, !0))
          : delete r[h]);
    if (i !== a)
      for (const h in i) (!e || !ce(e, h)) && (delete i[h], (l = !0));
  }
  l && Yt(t, "set", "$attrs");
}
function Rf(t, e, n, s) {
  const [r, i] = t.propsOptions;
  let o = !1,
    a;
  if (e)
    for (let c in e) {
      if (li(c)) continue;
      const l = e[c];
      let u;
      r && ce(r, (u = Vt(c)))
        ? !i || !i.includes(u)
          ? (n[u] = l)
          : ((a || (a = {}))[u] = l)
        : eo(t.emitsOptions, c) ||
          ((!(c in s) || l !== s[c]) && ((s[c] = l), (o = !0)));
    }
  if (i) {
    const c = ue(n),
      l = a || be;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = xa(r, c, h, l[h], t, !ce(l, h));
    }
  }
  return o;
}
function xa(t, e, n, s, r, i) {
  const o = t[n];
  if (o != null) {
    const a = ce(o, "default");
    if (a && s === void 0) {
      const c = o.default;
      if (o.type !== Function && te(c)) {
        const { propsDefaults: l } = r;
        n in l ? (s = l[n]) : (ws(r), (s = l[n] = c.call(null, e)), qn());
      } else s = c;
    }
    o[0] &&
      (i && !a ? (s = !1) : o[1] && (s === "" || s === Ds(n)) && (s = !0));
  }
  return s;
}
function Df(t, e, n = !1) {
  const s = e.propsCache,
    r = s.get(t);
  if (r) return r;
  const i = t.props,
    o = {},
    a = [];
  let c = !1;
  if (!te(t)) {
    const u = (h) => {
      c = !0;
      const [f, m] = Df(h, e, !0);
      rt(o, f), m && a.push(...m);
    };
    !n && e.mixins.length && e.mixins.forEach(u),
      t.extends && u(t.extends),
      t.mixins && t.mixins.forEach(u);
  }
  if (!i && !c) return Te(t) && s.set(t, us), us;
  if (Y(i))
    for (let u = 0; u < i.length; u++) {
      const h = Vt(i[u]);
      eu(h) && (o[h] = be);
    }
  else if (i)
    for (const u in i) {
      const h = Vt(u);
      if (eu(h)) {
        const f = i[u],
          m = (o[h] = Y(f) || te(f) ? { type: f } : Object.assign({}, f));
        if (m) {
          const g = su(Boolean, m.type),
            v = su(String, m.type);
          (m[0] = g > -1),
            (m[1] = v < 0 || g < v),
            (g > -1 || ce(m, "default")) && a.push(h);
        }
      }
    }
  const l = [o, a];
  return Te(t) && s.set(t, l), l;
}
function eu(t) {
  return t[0] !== "$";
}
function tu(t) {
  const e = t && t.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : t === null ? "null" : "";
}
function nu(t, e) {
  return tu(t) === tu(e);
}
function su(t, e) {
  return Y(e) ? e.findIndex((n) => nu(n, t)) : te(e) && nu(e, t) ? 0 : -1;
}
const Nf = (t) => t[0] === "_" || t === "$stable",
  Sc = (t) => (Y(t) ? t.map(Mt) : [Mt(t)]),
  dy = (t, e, n) => {
    if (e._n) return e;
    const s = Wt((...r) => Sc(e(...r)), n);
    return (s._c = !1), s;
  },
  Of = (t, e, n) => {
    const s = t._ctx;
    for (const r in t) {
      if (Nf(r)) continue;
      const i = t[r];
      if (te(i)) e[r] = dy(r, i, s);
      else if (i != null) {
        const o = Sc(i);
        e[r] = () => o;
      }
    }
  },
  Pf = (t, e) => {
    const n = Sc(e);
    t.slots.default = () => n;
  },
  py = (t, e) => {
    if (t.vnode.shapeFlag & 32) {
      const n = e._;
      n ? ((t.slots = ue(e)), bi(e, "_", n)) : Of(e, (t.slots = {}));
    } else (t.slots = {}), e && Pf(t, e);
    bi(t.slots, so, 1);
  },
  my = (t, e, n) => {
    const { vnode: s, slots: r } = t;
    let i = !0,
      o = be;
    if (s.shapeFlag & 32) {
      const a = e._;
      a
        ? n && a === 1
          ? (i = !1)
          : (rt(r, e), !n && a === 1 && delete r._)
        : ((i = !e.$stable), Of(e, r)),
        (o = e);
    } else e && (Pf(t, e), (o = { default: 1 }));
    if (i) for (const a in r) !Nf(a) && !(a in o) && delete r[a];
  };
function Mf() {
  return {
    app: null,
    config: {
      isNativeTag: qm,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let gy = 0;
function yy(t, e) {
  return function (s, r = null) {
    te(s) || (s = Object.assign({}, s)), r != null && !Te(r) && (r = null);
    const i = Mf(),
      o = new Set();
    let a = !1;
    const c = (i.app = {
      _uid: gy++,
      _component: s,
      _props: r,
      _container: null,
      _context: i,
      _instance: null,
      version: By,
      get config() {
        return i.config;
      },
      set config(l) {},
      use(l, ...u) {
        return (
          o.has(l) ||
            (l && te(l.install)
              ? (o.add(l), l.install(c, ...u))
              : te(l) && (o.add(l), l(c, ...u))),
          c
        );
      },
      mixin(l) {
        return i.mixins.includes(l) || i.mixins.push(l), c;
      },
      component(l, u) {
        return u ? ((i.components[l] = u), c) : i.components[l];
      },
      directive(l, u) {
        return u ? ((i.directives[l] = u), c) : i.directives[l];
      },
      mount(l, u, h) {
        if (!a) {
          const f = Z(s, r);
          return (
            (f.appContext = i),
            u && e ? e(f, l) : t(f, l, h),
            (a = !0),
            (c._container = l),
            (l.__vue_app__ = c),
            ro(f.component) || f.component.proxy
          );
        }
      },
      unmount() {
        a && (t(null, c._container), delete c._container.__vue_app__);
      },
      provide(l, u) {
        return (i.provides[l] = u), c;
      },
    });
    return c;
  };
}
function Ta(t, e, n, s, r = !1) {
  if (Y(t)) {
    t.forEach((f, m) => Ta(f, e && (Y(e) ? e[m] : e), n, s, r));
    return;
  }
  if (fi(s) && !r) return;
  const i = s.shapeFlag & 4 ? ro(s.component) || s.component.proxy : s.el,
    o = r ? null : i,
    { i: a, r: c } = t,
    l = e && e.r,
    u = a.refs === be ? (a.refs = {}) : a.refs,
    h = a.setupState;
  if (
    (l != null &&
      l !== c &&
      (Me(l)
        ? ((u[l] = null), ce(h, l) && (h[l] = null))
        : Ae(l) && (l.value = null)),
    te(c))
  )
    fn(c, a, 12, [o, u]);
  else {
    const f = Me(c),
      m = Ae(c);
    if (f || m) {
      const g = () => {
        if (t.f) {
          const v = f ? (ce(h, c) ? h[c] : u[c]) : c.value;
          r
            ? Y(v) && dc(v, i)
            : Y(v)
            ? v.includes(i) || v.push(i)
            : f
            ? ((u[c] = [i]), ce(h, c) && (h[c] = u[c]))
            : ((c.value = [i]), t.k && (u[t.k] = c.value));
        } else
          f
            ? ((u[c] = o), ce(h, c) && (h[c] = o))
            : m && ((c.value = o), t.k && (u[t.k] = o));
      };
      o ? ((g.id = -1), ot(g, n)) : g();
    }
  }
}
const ot = Hg;
function vy(t) {
  return wy(t);
}
function wy(t, e) {
  const n = Qm();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: r,
      patchProp: i,
      createElement: o,
      createText: a,
      createComment: c,
      setText: l,
      setElementText: u,
      parentNode: h,
      nextSibling: f,
      setScopeId: m = Ct,
      insertStaticContent: g,
    } = t,
    v = (
      d,
      p,
      y,
      w = null,
      T = null,
      k = null,
      P = !1,
      A = null,
      D = !!p.dynamicChildren
    ) => {
      if (d === p) return;
      d && !qs(d, p) && ((w = N(d)), it(d, T, k, !0), (d = null)),
        p.patchFlag === -2 && ((D = !1), (p.dynamicChildren = null));
      const { type: I, ref: q, shapeFlag: F } = p;
      switch (I) {
        case no:
          b(d, p, y, w);
          break;
        case zn:
          S(d, p, y, w);
          break;
        case di:
          d == null && R(p, y, w, P);
          break;
        case tt:
          yt(d, p, y, w, T, k, P, A, D);
          break;
        default:
          F & 1
            ? J(d, p, y, w, T, k, P, A, D)
            : F & 6
            ? nn(d, p, y, w, T, k, P, A, D)
            : (F & 64 || F & 128) && I.process(d, p, y, w, T, k, P, A, D, ae);
      }
      q != null && T && Ta(q, d && d.ref, k, p || d, !p);
    },
    b = (d, p, y, w) => {
      if (d == null) s((p.el = a(p.children)), y, w);
      else {
        const T = (p.el = d.el);
        p.children !== d.children && l(T, p.children);
      }
    },
    S = (d, p, y, w) => {
      d == null ? s((p.el = c(p.children || "")), y, w) : (p.el = d.el);
    },
    R = (d, p, y, w) => {
      [d.el, d.anchor] = g(d.children, p, y, w, d.el, d.anchor);
    },
    O = ({ el: d, anchor: p }, y, w) => {
      let T;
      for (; d && d !== p; ) (T = f(d)), s(d, y, w), (d = T);
      s(p, y, w);
    },
    U = ({ el: d, anchor: p }) => {
      let y;
      for (; d && d !== p; ) (y = f(d)), r(d), (d = y);
      r(p);
    },
    J = (d, p, y, w, T, k, P, A, D) => {
      (P = P || p.type === "svg"),
        d == null ? le(p, y, w, T, k, P, A, D) : Se(d, p, T, k, P, A, D);
    },
    le = (d, p, y, w, T, k, P, A) => {
      let D, I;
      const { type: q, props: F, shapeFlag: H, transition: Q, dirs: se } = d;
      if (
        ((D = d.el = o(d.type, k, F && F.is, F)),
        H & 8
          ? u(D, d.children)
          : H & 16 &&
            G(d.children, D, null, w, T, k && q !== "foreignObject", P, A),
        se && Rn(d, null, w, "created"),
        F)
      ) {
        for (const me in F)
          me !== "value" &&
            !li(me) &&
            i(D, me, null, F[me], k, d.children, w, T, M);
        "value" in F && i(D, "value", null, F.value),
          (I = F.onVnodeBeforeMount) && Pt(I, w, d);
      }
      K(D, d, d.scopeId, P, w), se && Rn(d, null, w, "beforeMount");
      const ve = (!T || (T && !T.pendingBranch)) && Q && !Q.persisted;
      ve && Q.beforeEnter(D),
        s(D, p, y),
        ((I = F && F.onVnodeMounted) || ve || se) &&
          ot(() => {
            I && Pt(I, w, d), ve && Q.enter(D), se && Rn(d, null, w, "mounted");
          }, T);
    },
    K = (d, p, y, w, T) => {
      if ((y && m(d, y), w)) for (let k = 0; k < w.length; k++) m(d, w[k]);
      if (T) {
        let k = T.subTree;
        if (p === k) {
          const P = T.vnode;
          K(d, P, P.scopeId, P.slotScopeIds, T.parent);
        }
      }
    },
    G = (d, p, y, w, T, k, P, A, D = 0) => {
      for (let I = D; I < d.length; I++) {
        const q = (d[I] = A ? on(d[I]) : Mt(d[I]));
        v(null, q, p, y, w, T, k, P, A);
      }
    },
    Se = (d, p, y, w, T, k, P) => {
      const A = (p.el = d.el);
      let { patchFlag: D, dynamicChildren: I, dirs: q } = p;
      D |= d.patchFlag & 16;
      const F = d.props || be,
        H = p.props || be;
      let Q;
      y && Dn(y, !1),
        (Q = H.onVnodeBeforeUpdate) && Pt(Q, y, p, d),
        q && Rn(p, d, y, "beforeUpdate"),
        y && Dn(y, !0);
      const se = T && p.type !== "foreignObject";
      if (
        (I
          ? ke(d.dynamicChildren, I, A, y, w, se, k)
          : P || pe(d, p, A, null, y, w, se, k, !1),
        D > 0)
      ) {
        if (D & 16) Le(A, p, F, H, y, w, T);
        else if (
          (D & 2 && F.class !== H.class && i(A, "class", null, H.class, T),
          D & 4 && i(A, "style", F.style, H.style, T),
          D & 8)
        ) {
          const ve = p.dynamicProps;
          for (let me = 0; me < ve.length; me++) {
            const De = ve[me],
              bt = F[De],
              ns = H[De];
            (ns !== bt || De === "value") &&
              i(A, De, bt, ns, T, d.children, y, w, M);
          }
        }
        D & 1 && d.children !== p.children && u(A, p.children);
      } else !P && I == null && Le(A, p, F, H, y, w, T);
      ((Q = H.onVnodeUpdated) || q) &&
        ot(() => {
          Q && Pt(Q, y, p, d), q && Rn(p, d, y, "updated");
        }, w);
    },
    ke = (d, p, y, w, T, k, P) => {
      for (let A = 0; A < p.length; A++) {
        const D = d[A],
          I = p[A],
          q =
            D.el && (D.type === tt || !qs(D, I) || D.shapeFlag & 70)
              ? h(D.el)
              : y;
        v(D, I, q, null, w, T, k, P, !0);
      }
    },
    Le = (d, p, y, w, T, k, P) => {
      if (y !== w) {
        if (y !== be)
          for (const A in y)
            !li(A) && !(A in w) && i(d, A, y[A], null, P, p.children, T, k, M);
        for (const A in w) {
          if (li(A)) continue;
          const D = w[A],
            I = y[A];
          D !== I && A !== "value" && i(d, A, I, D, P, p.children, T, k, M);
        }
        "value" in w && i(d, "value", y.value, w.value);
      }
    },
    yt = (d, p, y, w, T, k, P, A, D) => {
      const I = (p.el = d ? d.el : a("")),
        q = (p.anchor = d ? d.anchor : a(""));
      let { patchFlag: F, dynamicChildren: H, slotScopeIds: Q } = p;
      Q && (A = A ? A.concat(Q) : Q),
        d == null
          ? (s(I, y, w), s(q, y, w), G(p.children, y, q, T, k, P, A, D))
          : F > 0 && F & 64 && H && d.dynamicChildren
          ? (ke(d.dynamicChildren, H, y, T, k, P, A),
            (p.key != null || (T && p === T.subTree)) && Ac(d, p, !0))
          : pe(d, p, y, q, T, k, P, A, D);
    },
    nn = (d, p, y, w, T, k, P, A, D) => {
      (p.slotScopeIds = A),
        d == null
          ? p.shapeFlag & 512
            ? T.ctx.activate(p, y, w, P, D)
            : ct(p, y, w, T, k, P, D)
          : Ve(d, p, D);
    },
    ct = (d, p, y, w, T, k, P) => {
      const A = (d.component = Dy(d, w, T));
      if ((If(d) && (A.ctx.renderer = ae), Oy(A), A.asyncDep)) {
        if ((T && T.registerDep(A, Re), !d.el)) {
          const D = (A.subTree = Z(zn));
          S(null, D, p, y);
        }
        return;
      }
      Re(A, d, p, y, T, k, P);
    },
    Ve = (d, p, y) => {
      const w = (p.component = d.component);
      if (Bg(d, p, y))
        if (w.asyncDep && !w.asyncResolved) {
          ye(w, p, y);
          return;
        } else (w.next = p), Mg(w.update), w.update();
      else (p.el = d.el), (w.vnode = p);
    },
    Re = (d, p, y, w, T, k, P) => {
      const A = () => {
          if (d.isMounted) {
            let { next: q, bu: F, u: H, parent: Q, vnode: se } = d,
              ve = q,
              me;
            Dn(d, !1),
              q ? ((q.el = se.el), ye(d, q, P)) : (q = se),
              F && ui(F),
              (me = q.props && q.props.onVnodeBeforeUpdate) && Pt(me, Q, q, se),
              Dn(d, !0);
            const De = qo(d),
              bt = d.subTree;
            (d.subTree = De),
              v(bt, De, h(bt.el), N(bt), d, T, k),
              (q.el = De.el),
              ve === null && jg(d, De.el),
              H && ot(H, T),
              (me = q.props && q.props.onVnodeUpdated) &&
                ot(() => Pt(me, Q, q, se), T);
          } else {
            let q;
            const { el: F, props: H } = p,
              { bm: Q, m: se, parent: ve } = d,
              me = fi(p);
            if (
              (Dn(d, !1),
              Q && ui(Q),
              !me && (q = H && H.onVnodeBeforeMount) && Pt(q, ve, p),
              Dn(d, !0),
              F && ne)
            ) {
              const De = () => {
                (d.subTree = qo(d)), ne(F, d.subTree, d, T, null);
              };
              me
                ? p.type.__asyncLoader().then(() => !d.isUnmounted && De())
                : De();
            } else {
              const De = (d.subTree = qo(d));
              v(null, De, y, w, d, T, k), (p.el = De.el);
            }
            if ((se && ot(se, T), !me && (q = H && H.onVnodeMounted))) {
              const De = p;
              ot(() => Pt(q, ve, De), T);
            }
            (p.shapeFlag & 256 ||
              (ve && fi(ve.vnode) && ve.vnode.shapeFlag & 256)) &&
              d.a &&
              ot(d.a, T),
              (d.isMounted = !0),
              (p = y = w = null);
          }
        },
        D = (d.effect = new yc(A, () => Ic(I), d.scope)),
        I = (d.update = () => D.run());
      (I.id = d.uid), Dn(d, !0), I();
    },
    ye = (d, p, y) => {
      p.component = d;
      const w = d.vnode.props;
      (d.vnode = p),
        (d.next = null),
        fy(d, p.props, w, y),
        my(d, p.children, y),
        Ns(),
        Ql(),
        Os();
    },
    pe = (d, p, y, w, T, k, P, A, D = !1) => {
      const I = d && d.children,
        q = d ? d.shapeFlag : 0,
        F = p.children,
        { patchFlag: H, shapeFlag: Q } = p;
      if (H > 0) {
        if (H & 128) {
          kn(I, F, y, w, T, k, P, A, D);
          return;
        } else if (H & 256) {
          wt(I, F, y, w, T, k, P, A, D);
          return;
        }
      }
      Q & 8
        ? (q & 16 && M(I, T, k), F !== I && u(y, F))
        : q & 16
        ? Q & 16
          ? kn(I, F, y, w, T, k, P, A, D)
          : M(I, T, k, !0)
        : (q & 8 && u(y, ""), Q & 16 && G(F, y, w, T, k, P, A, D));
    },
    wt = (d, p, y, w, T, k, P, A, D) => {
      (d = d || us), (p = p || us);
      const I = d.length,
        q = p.length,
        F = Math.min(I, q);
      let H;
      for (H = 0; H < F; H++) {
        const Q = (p[H] = D ? on(p[H]) : Mt(p[H]));
        v(d[H], Q, y, null, T, k, P, A, D);
      }
      I > q ? M(d, T, k, !0, !1, F) : G(p, y, w, T, k, P, A, D, F);
    },
    kn = (d, p, y, w, T, k, P, A, D) => {
      let I = 0;
      const q = p.length;
      let F = d.length - 1,
        H = q - 1;
      for (; I <= F && I <= H; ) {
        const Q = d[I],
          se = (p[I] = D ? on(p[I]) : Mt(p[I]));
        if (qs(Q, se)) v(Q, se, y, null, T, k, P, A, D);
        else break;
        I++;
      }
      for (; I <= F && I <= H; ) {
        const Q = d[F],
          se = (p[H] = D ? on(p[H]) : Mt(p[H]));
        if (qs(Q, se)) v(Q, se, y, null, T, k, P, A, D);
        else break;
        F--, H--;
      }
      if (I > F) {
        if (I <= H) {
          const Q = H + 1,
            se = Q < q ? p[Q].el : w;
          for (; I <= H; )
            v(null, (p[I] = D ? on(p[I]) : Mt(p[I])), y, se, T, k, P, A, D),
              I++;
        }
      } else if (I > H) for (; I <= F; ) it(d[I], T, k, !0), I++;
      else {
        const Q = I,
          se = I,
          ve = new Map();
        for (I = se; I <= H; I++) {
          const lt = (p[I] = D ? on(p[I]) : Mt(p[I]));
          lt.key != null && ve.set(lt.key, I);
        }
        let me,
          De = 0;
        const bt = H - se + 1;
        let ns = !1,
          $l = 0;
        const js = new Array(bt);
        for (I = 0; I < bt; I++) js[I] = 0;
        for (I = Q; I <= F; I++) {
          const lt = d[I];
          if (De >= bt) {
            it(lt, T, k, !0);
            continue;
          }
          let Ot;
          if (lt.key != null) Ot = ve.get(lt.key);
          else
            for (me = se; me <= H; me++)
              if (js[me - se] === 0 && qs(lt, p[me])) {
                Ot = me;
                break;
              }
          Ot === void 0
            ? it(lt, T, k, !0)
            : ((js[Ot - se] = I + 1),
              Ot >= $l ? ($l = Ot) : (ns = !0),
              v(lt, p[Ot], y, null, T, k, P, A, D),
              De++);
        }
        const Ul = ns ? _y(js) : us;
        for (me = Ul.length - 1, I = bt - 1; I >= 0; I--) {
          const lt = se + I,
            Ot = p[lt],
            Vl = lt + 1 < q ? p[lt + 1].el : w;
          js[I] === 0
            ? v(null, Ot, y, Vl, T, k, P, A, D)
            : ns && (me < 0 || I !== Ul[me] ? _t(Ot, y, Vl, 2) : me--);
        }
      }
    },
    _t = (d, p, y, w, T = null) => {
      const { el: k, type: P, transition: A, children: D, shapeFlag: I } = d;
      if (I & 6) {
        _t(d.component.subTree, p, y, w);
        return;
      }
      if (I & 128) {
        d.suspense.move(p, y, w);
        return;
      }
      if (I & 64) {
        P.move(d, p, y, ae);
        return;
      }
      if (P === tt) {
        s(k, p, y);
        for (let F = 0; F < D.length; F++) _t(D[F], p, y, w);
        s(d.anchor, p, y);
        return;
      }
      if (P === di) {
        O(d, p, y);
        return;
      }
      if (w !== 2 && I & 1 && A)
        if (w === 0) A.beforeEnter(k), s(k, p, y), ot(() => A.enter(k), T);
        else {
          const { leave: F, delayLeave: H, afterLeave: Q } = A,
            se = () => s(k, p, y),
            ve = () => {
              F(k, () => {
                se(), Q && Q();
              });
            };
          H ? H(k, se, ve) : ve();
        }
      else s(k, p, y);
    },
    it = (d, p, y, w = !1, T = !1) => {
      const {
        type: k,
        props: P,
        ref: A,
        children: D,
        dynamicChildren: I,
        shapeFlag: q,
        patchFlag: F,
        dirs: H,
      } = d;
      if ((A != null && Ta(A, null, y, d, !0), q & 256)) {
        p.ctx.deactivate(d);
        return;
      }
      const Q = q & 1 && H,
        se = !fi(d);
      let ve;
      if ((se && (ve = P && P.onVnodeBeforeUnmount) && Pt(ve, p, d), q & 6))
        x(d.component, y, w);
      else {
        if (q & 128) {
          d.suspense.unmount(y, w);
          return;
        }
        Q && Rn(d, null, p, "beforeUnmount"),
          q & 64
            ? d.type.remove(d, p, y, T, ae, w)
            : I && (k !== tt || (F > 0 && F & 64))
            ? M(I, p, y, !1, !0)
            : ((k === tt && F & 384) || (!T && q & 16)) && M(D, p, y),
          w && ts(d);
      }
      ((se && (ve = P && P.onVnodeUnmounted)) || Q) &&
        ot(() => {
          ve && Pt(ve, p, d), Q && Rn(d, null, p, "unmounted");
        }, y);
    },
    ts = (d) => {
      const { type: p, el: y, anchor: w, transition: T } = d;
      if (p === tt) {
        Gr(y, w);
        return;
      }
      if (p === di) {
        U(d);
        return;
      }
      const k = () => {
        r(y), T && !T.persisted && T.afterLeave && T.afterLeave();
      };
      if (d.shapeFlag & 1 && T && !T.persisted) {
        const { leave: P, delayLeave: A } = T,
          D = () => P(y, k);
        A ? A(d.el, k, D) : D();
      } else k();
    },
    Gr = (d, p) => {
      let y;
      for (; d !== p; ) (y = f(d)), r(d), (d = y);
      r(p);
    },
    x = (d, p, y) => {
      const { bum: w, scope: T, update: k, subTree: P, um: A } = d;
      w && ui(w),
        T.stop(),
        k && ((k.active = !1), it(P, d, p, y)),
        A && ot(A, p),
        ot(() => {
          d.isUnmounted = !0;
        }, p),
        p &&
          p.pendingBranch &&
          !p.isUnmounted &&
          d.asyncDep &&
          !d.asyncResolved &&
          d.suspenseId === p.pendingId &&
          (p.deps--, p.deps === 0 && p.resolve());
    },
    M = (d, p, y, w = !1, T = !1, k = 0) => {
      for (let P = k; P < d.length; P++) it(d[P], p, y, w, T);
    },
    N = (d) =>
      d.shapeFlag & 6
        ? N(d.component.subTree)
        : d.shapeFlag & 128
        ? d.suspense.next()
        : f(d.anchor || d.el),
    B = (d, p, y) => {
      d == null
        ? p._vnode && it(p._vnode, null, null, !0)
        : v(p._vnode || null, d, p, null, null, null, y),
        Ql(),
        vf(),
        (p._vnode = d);
    },
    ae = {
      p: v,
      um: it,
      m: _t,
      r: ts,
      mt: ct,
      mc: G,
      pc: pe,
      pbc: ke,
      n: N,
      o: t,
    };
  let Ie, ne;
  return (
    e && ([Ie, ne] = e(ae)), { render: B, hydrate: Ie, createApp: yy(B, Ie) }
  );
}
function Dn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Ac(t, e, n = !1) {
  const s = t.children,
    r = e.children;
  if (Y(s) && Y(r))
    for (let i = 0; i < s.length; i++) {
      const o = s[i];
      let a = r[i];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = r[i] = on(r[i])), (a.el = o.el)),
        n || Ac(o, a)),
        a.type === no && (a.el = o.el);
    }
}
function _y(t) {
  const e = t.slice(),
    n = [0];
  let s, r, i, o, a;
  const c = t.length;
  for (s = 0; s < c; s++) {
    const l = t[s];
    if (l !== 0) {
      if (((r = n[n.length - 1]), t[r] < l)) {
        (e[s] = r), n.push(s);
        continue;
      }
      for (i = 0, o = n.length - 1; i < o; )
        (a = (i + o) >> 1), t[n[a]] < l ? (i = a + 1) : (o = a);
      l < t[n[i]] && (i > 0 && (e[s] = n[i - 1]), (n[i] = s));
    }
  }
  for (i = n.length, o = n[i - 1]; i-- > 0; ) (n[i] = o), (o = e[o]);
  return n;
}
const by = (t) => t.__isTeleport,
  Zs = (t) => t && (t.disabled || t.disabled === ""),
  ru = (t) => typeof SVGElement < "u" && t instanceof SVGElement,
  Ia = (t, e) => {
    const n = t && t.to;
    return Me(n) ? (e ? e(n) : null) : n;
  },
  Ey = {
    __isTeleport: !0,
    process(t, e, n, s, r, i, o, a, c, l) {
      const {
          mc: u,
          pc: h,
          pbc: f,
          o: { insert: m, querySelector: g, createText: v, createComment: b },
        } = l,
        S = Zs(e.props);
      let { shapeFlag: R, children: O, dynamicChildren: U } = e;
      if (t == null) {
        const J = (e.el = v("")),
          le = (e.anchor = v(""));
        m(J, n, s), m(le, n, s);
        const K = (e.target = Ia(e.props, g)),
          G = (e.targetAnchor = v(""));
        K && (m(G, K), (o = o || ru(K)));
        const Se = (ke, Le) => {
          R & 16 && u(O, ke, Le, r, i, o, a, c);
        };
        S ? Se(n, le) : K && Se(K, G);
      } else {
        e.el = t.el;
        const J = (e.anchor = t.anchor),
          le = (e.target = t.target),
          K = (e.targetAnchor = t.targetAnchor),
          G = Zs(t.props),
          Se = G ? n : le,
          ke = G ? J : K;
        if (
          ((o = o || ru(le)),
          U
            ? (f(t.dynamicChildren, U, Se, r, i, o, a), Ac(t, e, !0))
            : c || h(t, e, Se, ke, r, i, o, a, !1),
          S)
        )
          G || ei(e, n, J, l, 1);
        else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
          const Le = (e.target = Ia(e.props, g));
          Le && ei(e, Le, null, l, 0);
        } else G && ei(e, le, K, l, 1);
      }
      Lf(e);
    },
    remove(t, e, n, s, { um: r, o: { remove: i } }, o) {
      const {
        shapeFlag: a,
        children: c,
        anchor: l,
        targetAnchor: u,
        target: h,
        props: f,
      } = t;
      if ((h && i(u), (o || !Zs(f)) && (i(l), a & 16)))
        for (let m = 0; m < c.length; m++) {
          const g = c[m];
          r(g, e, n, !0, !!g.dynamicChildren);
        }
    },
    move: ei,
    hydrate: xy,
  };
function ei(t, e, n, { o: { insert: s }, m: r }, i = 2) {
  i === 0 && s(t.targetAnchor, e, n);
  const { el: o, anchor: a, shapeFlag: c, children: l, props: u } = t,
    h = i === 2;
  if ((h && s(o, e, n), (!h || Zs(u)) && c & 16))
    for (let f = 0; f < l.length; f++) r(l[f], e, n, 2);
  h && s(a, e, n);
}
function xy(
  t,
  e,
  n,
  s,
  r,
  i,
  { o: { nextSibling: o, parentNode: a, querySelector: c } },
  l
) {
  const u = (e.target = Ia(e.props, c));
  if (u) {
    const h = u._lpa || u.firstChild;
    if (e.shapeFlag & 16)
      if (Zs(e.props))
        (e.anchor = l(o(t), e, a(t), n, s, r, i)), (e.targetAnchor = h);
      else {
        e.anchor = o(t);
        let f = h;
        for (; f; )
          if (
            ((f = o(f)), f && f.nodeType === 8 && f.data === "teleport anchor")
          ) {
            (e.targetAnchor = f),
              (u._lpa = e.targetAnchor && o(e.targetAnchor));
            break;
          }
        l(h, e, u, n, s, r, i);
      }
    Lf(e);
  }
  return e.anchor && o(e.anchor);
}
const Ty = Ey;
function Lf(t) {
  const e = t.ctx;
  if (e && e.ut) {
    let n = t.children[0].el;
    for (; n !== t.targetAnchor; )
      n.nodeType === 1 && n.setAttribute("data-v-owner", e.uid),
        (n = n.nextSibling);
    e.ut();
  }
}
const tt = Symbol(void 0),
  no = Symbol(void 0),
  zn = Symbol(void 0),
  di = Symbol(void 0),
  er = [];
let xt = null;
function ie(t = !1) {
  er.push((xt = t ? null : []));
}
function Iy() {
  er.pop(), (xt = er[er.length - 1] || null);
}
let dr = 1;
function iu(t) {
  dr += t;
}
function Ff(t) {
  return (
    (t.dynamicChildren = dr > 0 ? xt || us : null),
    Iy(),
    dr > 0 && xt && xt.push(t),
    t
  );
}
function ge(t, e, n, s, r, i) {
  return Ff(_(t, e, n, s, r, i, !0));
}
function xn(t, e, n, s, r) {
  return Ff(Z(t, e, n, s, r, !0));
}
function Ca(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function qs(t, e) {
  return t.type === e.type && t.key === e.key;
}
const so = "__vInternal",
  $f = ({ key: t }) => t ?? null,
  pi = ({ ref: t, ref_key: e, ref_for: n }) =>
    t != null
      ? Me(t) || Ae(t) || te(t)
        ? { i: ft, r: t, k: e, f: !!n }
        : t
      : null;
function _(
  t,
  e = null,
  n = null,
  s = 0,
  r = null,
  i = t === tt ? 0 : 1,
  o = !1,
  a = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && $f(e),
    ref: e && pi(e),
    scopeId: bf,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: ft,
  };
  return (
    a
      ? (kc(c, n), i & 128 && t.normalize(c))
      : n && (c.shapeFlag |= Me(n) ? 8 : 16),
    dr > 0 &&
      !o &&
      xt &&
      (c.patchFlag > 0 || i & 6) &&
      c.patchFlag !== 32 &&
      xt.push(c),
    c
  );
}
const Z = Cy;
function Cy(t, e = null, n = null, s = 0, r = null, i = !1) {
  if (((!t || t === sy) && (t = zn), Ca(t))) {
    const a = vs(t, e, !0);
    return (
      n && kc(a, n),
      dr > 0 &&
        !i &&
        xt &&
        (a.shapeFlag & 6 ? (xt[xt.indexOf(t)] = a) : xt.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if (($y(t) && (t = t.__vccOpts), e)) {
    e = Sy(e);
    let { class: a, style: c } = e;
    a && !Me(a) && (e.class = ln(a)),
      Te(c) && (uf(c) && !Y(c) && (c = rt({}, c)), (e.style = Gi(c)));
  }
  const o = Me(t) ? 1 : qg(t) ? 128 : by(t) ? 64 : Te(t) ? 4 : te(t) ? 2 : 0;
  return _(t, e, n, s, r, o, i, !0);
}
function Sy(t) {
  return t ? (uf(t) || so in t ? rt({}, t) : t) : null;
}
function vs(t, e, n = !1) {
  const { props: s, ref: r, patchFlag: i, children: o } = t,
    a = e ? Ay(s || {}, e) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && $f(a),
    ref:
      e && e.ref ? (n && r ? (Y(r) ? r.concat(pi(e)) : [r, pi(e)]) : pi(e)) : r,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== tt ? (i === -1 ? 16 : i | 16) : i,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && vs(t.ssContent),
    ssFallback: t.ssFallback && vs(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
  };
}
function kt(t = " ", e = 0) {
  return Z(no, null, t, e);
}
function Ms(t, e) {
  const n = Z(di, null, t);
  return (n.staticCount = e), n;
}
function Tt(t = "", e = !1) {
  return e ? (ie(), xn(zn, null, t)) : Z(zn, null, t);
}
function Mt(t) {
  return t == null || typeof t == "boolean"
    ? Z(zn)
    : Y(t)
    ? Z(tt, null, t.slice())
    : typeof t == "object"
    ? on(t)
    : Z(no, null, String(t));
}
function on(t) {
  return (t.el === null && t.patchFlag !== -1) || t.memo ? t : vs(t);
}
function kc(t, e) {
  let n = 0;
  const { shapeFlag: s } = t;
  if (e == null) e = null;
  else if (Y(e)) n = 16;
  else if (typeof e == "object")
    if (s & 65) {
      const r = e.default;
      r && (r._c && (r._d = !1), kc(t, r()), r._c && (r._d = !0));
      return;
    } else {
      n = 32;
      const r = e._;
      !r && !(so in e)
        ? (e._ctx = ft)
        : r === 3 &&
          ft &&
          (ft.slots._ === 1 ? (e._ = 1) : ((e._ = 2), (t.patchFlag |= 1024)));
    }
  else
    te(e)
      ? ((e = { default: e, _ctx: ft }), (n = 32))
      : ((e = String(e)), s & 64 ? ((n = 16), (e = [kt(e)])) : (n = 8));
  (t.children = e), (t.shapeFlag |= n);
}
function Ay(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const s = t[n];
    for (const r in s)
      if (r === "class")
        e.class !== s.class && (e.class = ln([e.class, s.class]));
      else if (r === "style") e.style = Gi([e.style, s.style]);
      else if (Wi(r)) {
        const i = e[r],
          o = s[r];
        o &&
          i !== o &&
          !(Y(i) && i.includes(o)) &&
          (e[r] = i ? [].concat(i, o) : o);
      } else r !== "" && (e[r] = s[r]);
  }
  return e;
}
function Pt(t, e, n, s = null) {
  St(t, e, 7, [n, s]);
}
const ky = Mf();
let Ry = 0;
function Dy(t, e, n) {
  const s = t.type,
    r = (e ? e.appContext : t.appContext) || ky,
    i = {
      uid: Ry++,
      vnode: t,
      type: s,
      parent: e,
      appContext: r,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Yh(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: e ? e.provides : Object.create(r.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Df(s, r),
      emitsOptions: _f(s, r),
      emit: null,
      emitted: null,
      propsDefaults: be,
      inheritAttrs: s.inheritAttrs,
      ctx: be,
      data: be,
      props: be,
      attrs: be,
      slots: be,
      refs: be,
      setupState: be,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    };
  return (
    (i.ctx = { _: i }),
    (i.root = e ? e.root : i),
    (i.emit = $g.bind(null, i)),
    t.ce && t.ce(i),
    i
  );
}
let je = null;
const Ny = () => je || ft,
  ws = (t) => {
    (je = t), t.scope.on();
  },
  qn = () => {
    je && je.scope.off(), (je = null);
  };
function Uf(t) {
  return t.vnode.shapeFlag & 4;
}
let pr = !1;
function Oy(t, e = !1) {
  pr = e;
  const { props: n, children: s } = t.vnode,
    r = Uf(t);
  hy(t, n, r, e), py(t, s);
  const i = r ? Py(t, e) : void 0;
  return (pr = !1), i;
}
function Py(t, e) {
  const n = t.type;
  (t.accessCache = Object.create(null)), (t.proxy = ys(new Proxy(t.ctx, iy)));
  const { setup: s } = n;
  if (s) {
    const r = (t.setupContext = s.length > 1 ? Ly(t) : null);
    ws(t), Ns();
    const i = fn(s, t, 0, [t.props, r]);
    if ((Os(), qn(), Gh(i))) {
      if ((i.then(qn, qn), e))
        return i
          .then((o) => {
            ou(t, o, e);
          })
          .catch((o) => {
            Zi(o, t, 0);
          });
      t.asyncDep = i;
    } else ou(t, i, e);
  } else Vf(t, e);
}
function ou(t, e, n) {
  te(e)
    ? t.type.__ssrInlineRender
      ? (t.ssrRender = e)
      : (t.render = e)
    : Te(e) && (t.setupState = pf(e)),
    Vf(t, n);
}
let au;
function Vf(t, e, n) {
  const s = t.type;
  if (!t.render) {
    if (!e && au && !s.render) {
      const r = s.template || Cc(t).template;
      if (r) {
        const { isCustomElement: i, compilerOptions: o } = t.appContext.config,
          { delimiters: a, compilerOptions: c } = s,
          l = rt(rt({ isCustomElement: i, delimiters: a }, o), c);
        s.render = au(r, l);
      }
    }
    t.render = s.render || Ct;
  }
  ws(t), Ns(), oy(t), Os(), qn();
}
function My(t) {
  return new Proxy(t.attrs, {
    get(e, n) {
      return mt(t, "get", "$attrs"), e[n];
    },
  });
}
function Ly(t) {
  const e = (s) => {
    t.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = My(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e,
  };
}
function ro(t) {
  if (t.exposed)
    return (
      t.exposeProxy ||
      (t.exposeProxy = new Proxy(pf(ys(t.exposed)), {
        get(e, n) {
          if (n in e) return e[n];
          if (n in Js) return Js[n](t);
        },
        has(e, n) {
          return n in e || n in Js;
        },
      }))
    );
}
function Fy(t, e = !0) {
  return te(t) ? t.displayName || t.name : t.name || (e && t.__name);
}
function $y(t) {
  return te(t) && "__vccOpts" in t;
}
const ht = (t, e) => Ng(t, e, pr);
function Bf(t, e, n) {
  const s = arguments.length;
  return s === 2
    ? Te(e) && !Y(e)
      ? Ca(e)
        ? Z(t, null, [e])
        : Z(t, e)
      : Z(t, null, e)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Ca(n) && (n = [n]),
      Z(t, e, n));
}
const Uy = Symbol(""),
  Vy = () => At(Uy),
  By = "3.2.45",
  jy = "http://www.w3.org/2000/svg",
  Ln = typeof document < "u" ? document : null,
  cu = Ln && Ln.createElement("template"),
  qy = {
    insert: (t, e, n) => {
      e.insertBefore(t, n || null);
    },
    remove: (t) => {
      const e = t.parentNode;
      e && e.removeChild(t);
    },
    createElement: (t, e, n, s) => {
      const r = e
        ? Ln.createElementNS(jy, t)
        : Ln.createElement(t, n ? { is: n } : void 0);
      return (
        t === "select" &&
          s &&
          s.multiple != null &&
          r.setAttribute("multiple", s.multiple),
        r
      );
    },
    createText: (t) => Ln.createTextNode(t),
    createComment: (t) => Ln.createComment(t),
    setText: (t, e) => {
      t.nodeValue = e;
    },
    setElementText: (t, e) => {
      t.textContent = e;
    },
    parentNode: (t) => t.parentNode,
    nextSibling: (t) => t.nextSibling,
    querySelector: (t) => Ln.querySelector(t),
    setScopeId(t, e) {
      t.setAttribute(e, "");
    },
    insertStaticContent(t, e, n, s, r, i) {
      const o = n ? n.previousSibling : e.lastChild;
      if (r && (r === i || r.nextSibling))
        for (
          ;
          e.insertBefore(r.cloneNode(!0), n),
            !(r === i || !(r = r.nextSibling));

        );
      else {
        cu.innerHTML = s ? `<svg>${t}</svg>` : t;
        const a = cu.content;
        if (s) {
          const c = a.firstChild;
          for (; c.firstChild; ) a.appendChild(c.firstChild);
          a.removeChild(c);
        }
        e.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : e.firstChild,
        n ? n.previousSibling : e.lastChild,
      ];
    },
  };
function Hy(t, e, n) {
  const s = t._vtc;
  s && (e = (e ? [e, ...s] : [...s]).join(" ")),
    e == null
      ? t.removeAttribute("class")
      : n
      ? t.setAttribute("class", e)
      : (t.className = e);
}
function Ky(t, e, n) {
  const s = t.style,
    r = Me(n);
  if (n && !r) {
    for (const i in n) Sa(s, i, n[i]);
    if (e && !Me(e)) for (const i in e) n[i] == null && Sa(s, i, "");
  } else {
    const i = s.display;
    r ? e !== n && (s.cssText = n) : e && t.removeAttribute("style"),
      "_vod" in t && (s.display = i);
  }
}
const lu = /\s*!important$/;
function Sa(t, e, n) {
  if (Y(n)) n.forEach((s) => Sa(t, e, s));
  else if ((n == null && (n = ""), e.startsWith("--"))) t.setProperty(e, n);
  else {
    const s = zy(t, e);
    lu.test(n)
      ? t.setProperty(Ds(s), n.replace(lu, ""), "important")
      : (t[s] = n);
  }
}
const uu = ["Webkit", "Moz", "ms"],
  Ko = {};
function zy(t, e) {
  const n = Ko[e];
  if (n) return n;
  let s = Vt(e);
  if (s !== "filter" && s in t) return (Ko[e] = s);
  s = Xi(s);
  for (let r = 0; r < uu.length; r++) {
    const i = uu[r] + s;
    if (i in t) return (Ko[e] = i);
  }
  return e;
}
const hu = "http://www.w3.org/1999/xlink";
function Gy(t, e, n, s, r) {
  if (s && e.startsWith("xlink:"))
    n == null
      ? t.removeAttributeNS(hu, e.slice(6, e.length))
      : t.setAttributeNS(hu, e, n);
  else {
    const i = jm(e);
    n == null || (i && !Hh(n))
      ? t.removeAttribute(e)
      : t.setAttribute(e, i ? "" : n);
  }
}
function Wy(t, e, n, s, r, i, o) {
  if (e === "innerHTML" || e === "textContent") {
    s && o(s, r, i), (t[e] = n ?? "");
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = n;
    const c = n ?? "";
    (t.value !== c || t.tagName === "OPTION") && (t.value = c),
      n == null && t.removeAttribute(e);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const c = typeof t[e];
    c === "boolean"
      ? (n = Hh(n))
      : n == null && c === "string"
      ? ((n = ""), (a = !0))
      : c === "number" && ((n = 0), (a = !0));
  }
  try {
    t[e] = n;
  } catch {}
  a && t.removeAttribute(e);
}
function is(t, e, n, s) {
  t.addEventListener(e, n, s);
}
function Qy(t, e, n, s) {
  t.removeEventListener(e, n, s);
}
function Yy(t, e, n, s, r = null) {
  const i = t._vei || (t._vei = {}),
    o = i[e];
  if (s && o) o.value = s;
  else {
    const [a, c] = Xy(e);
    if (s) {
      const l = (i[e] = ev(s, r));
      is(t, a, l, c);
    } else o && (Qy(t, a, o, c), (i[e] = void 0));
  }
}
const fu = /(?:Once|Passive|Capture)$/;
function Xy(t) {
  let e;
  if (fu.test(t)) {
    e = {};
    let s;
    for (; (s = t.match(fu)); )
      (t = t.slice(0, t.length - s[0].length)), (e[s[0].toLowerCase()] = !0);
  }
  return [t[2] === ":" ? t.slice(3) : Ds(t.slice(2)), e];
}
let zo = 0;
const Jy = Promise.resolve(),
  Zy = () => zo || (Jy.then(() => (zo = 0)), (zo = Date.now()));
function ev(t, e) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    St(tv(s, n.value), e, 5, [s]);
  };
  return (n.value = t), (n.attached = Zy()), n;
}
function tv(t, e) {
  if (Y(e)) {
    const n = t.stopImmediatePropagation;
    return (
      (t.stopImmediatePropagation = () => {
        n.call(t), (t._stopped = !0);
      }),
      e.map((s) => (r) => !r._stopped && s && s(r))
    );
  } else return e;
}
const du = /^on[a-z]/,
  nv = (t, e, n, s, r = !1, i, o, a, c) => {
    e === "class"
      ? Hy(t, s, r)
      : e === "style"
      ? Ky(t, n, s)
      : Wi(e)
      ? fc(e) || Yy(t, e, n, s, o)
      : (
          e[0] === "."
            ? ((e = e.slice(1)), !0)
            : e[0] === "^"
            ? ((e = e.slice(1)), !1)
            : sv(t, e, s, r)
        )
      ? Wy(t, e, s, i, o, a, c)
      : (e === "true-value"
          ? (t._trueValue = s)
          : e === "false-value" && (t._falseValue = s),
        Gy(t, e, s, r));
  };
function sv(t, e, n, s) {
  return s
    ? !!(
        e === "innerHTML" ||
        e === "textContent" ||
        (e in t && du.test(e) && te(n))
      )
    : e === "spellcheck" ||
      e === "draggable" ||
      e === "translate" ||
      e === "form" ||
      (e === "list" && t.tagName === "INPUT") ||
      (e === "type" && t.tagName === "TEXTAREA") ||
      (du.test(e) && Me(n))
    ? !1
    : e in t;
}
const pu = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return Y(e) ? (n) => ui(e, n) : e;
};
function rv(t) {
  t.target.composing = !0;
}
function mu(t) {
  const e = t.target;
  e.composing && ((e.composing = !1), e.dispatchEvent(new Event("input")));
}
const Fn = {
    created(t, { modifiers: { lazy: e, trim: n, number: s } }, r) {
      t._assign = pu(r);
      const i = s || (r.props && r.props.type === "number");
      is(t, e ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = t.value;
        n && (a = a.trim()), i && (a = Ei(a)), t._assign(a);
      }),
        n &&
          is(t, "change", () => {
            t.value = t.value.trim();
          }),
        e ||
          (is(t, "compositionstart", rv),
          is(t, "compositionend", mu),
          is(t, "change", mu));
    },
    mounted(t, { value: e }) {
      t.value = e ?? "";
    },
    beforeUpdate(
      t,
      { value: e, modifiers: { lazy: n, trim: s, number: r } },
      i
    ) {
      if (
        ((t._assign = pu(i)),
        t.composing ||
          (document.activeElement === t &&
            t.type !== "range" &&
            (n ||
              (s && t.value.trim() === e) ||
              ((r || t.type === "number") && Ei(t.value) === e))))
      )
        return;
      const o = e ?? "";
      t.value !== o && (t.value = o);
    },
  },
  iv = ["ctrl", "shift", "alt", "meta"],
  ov = {
    stop: (t) => t.stopPropagation(),
    prevent: (t) => t.preventDefault(),
    self: (t) => t.target !== t.currentTarget,
    ctrl: (t) => !t.ctrlKey,
    shift: (t) => !t.shiftKey,
    alt: (t) => !t.altKey,
    meta: (t) => !t.metaKey,
    left: (t) => "button" in t && t.button !== 0,
    middle: (t) => "button" in t && t.button !== 1,
    right: (t) => "button" in t && t.button !== 2,
    exact: (t, e) => iv.some((n) => t[`${n}Key`] && !e.includes(n)),
  },
  Rc =
    (t, e) =>
    (n, ...s) => {
      for (let r = 0; r < e.length; r++) {
        const i = ov[e[r]];
        if (i && i(n, e)) return;
      }
      return t(n, ...s);
    },
  av = rt({ patchProp: nv }, qy);
let gu;
function cv() {
  return gu || (gu = vy(av));
}
const lv = (...t) => {
  const e = cv().createApp(...t),
    { mount: n } = e;
  return (
    (e.mount = (s) => {
      const r = uv(s);
      if (!r) return;
      const i = e._component;
      !te(i) && !i.render && !i.template && (i.template = r.innerHTML),
        (r.innerHTML = "");
      const o = n(r, !1, r instanceof SVGElement);
      return (
        r instanceof Element &&
          (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")),
        o
      );
    }),
    e
  );
};
function uv(t) {
  return Me(t) ? document.querySelector(t) : t;
}
var hv = !1;
/*!
 * pinia v2.0.29
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let jf;
const io = (t) => (jf = t),
  qf = Symbol();
function Aa(t) {
  return (
    t &&
    typeof t == "object" &&
    Object.prototype.toString.call(t) === "[object Object]" &&
    typeof t.toJSON != "function"
  );
}
var tr;
(function (t) {
  (t.direct = "direct"),
    (t.patchObject = "patch object"),
    (t.patchFunction = "patch function");
})(tr || (tr = {}));
function fv() {
  const t = Xh(!0),
    e = t.run(() => _e({}));
  let n = [],
    s = [];
  const r = ys({
    install(i) {
      io(r),
        (r._a = i),
        i.provide(qf, r),
        (i.config.globalProperties.$pinia = r),
        s.forEach((o) => n.push(o)),
        (s = []);
    },
    use(i) {
      return !this._a && !hv ? s.push(i) : n.push(i), this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: new Map(),
    state: e,
  });
  return r;
}
const Hf = () => {};
function yu(t, e, n, s = Hf) {
  t.push(e);
  const r = () => {
    const i = t.indexOf(e);
    i > -1 && (t.splice(i, 1), s());
  };
  return !n && Xm() && Jm(r), r;
}
function ss(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
function ka(t, e) {
  t instanceof Map && e instanceof Map && e.forEach((n, s) => t.set(s, n)),
    t instanceof Set && e instanceof Set && e.forEach(t.add, t);
  for (const n in e) {
    if (!e.hasOwnProperty(n)) continue;
    const s = e[n],
      r = t[n];
    Aa(r) && Aa(s) && t.hasOwnProperty(n) && !Ae(s) && !hn(s)
      ? (t[n] = ka(r, s))
      : (t[n] = s);
  }
  return t;
}
const dv = Symbol();
function pv(t) {
  return !Aa(t) || !t.hasOwnProperty(dv);
}
const { assign: an } = Object;
function mv(t) {
  return !!(Ae(t) && t.effect);
}
function gv(t, e, n, s) {
  const { state: r, actions: i, getters: o } = e,
    a = n.state.value[t];
  let c;
  function l() {
    a || (n.state.value[t] = r ? r() : {});
    const u = Ag(n.state.value[t]);
    return an(
      u,
      i,
      Object.keys(o || {}).reduce(
        (h, f) => (
          (h[f] = ys(
            ht(() => {
              io(n);
              const m = n._s.get(t);
              return o[f].call(m, m);
            })
          )),
          h
        ),
        {}
      )
    );
  }
  return (
    (c = Kf(t, l, e, n, s, !0)),
    (c.$reset = function () {
      const h = r ? r() : {};
      this.$patch((f) => {
        an(f, h);
      });
    }),
    c
  );
}
function Kf(t, e, n = {}, s, r, i) {
  let o;
  const a = an({ actions: {} }, n),
    c = { deep: !0 };
  let l,
    u,
    h = ys([]),
    f = ys([]),
    m;
  const g = s.state.value[t];
  !i && !g && (s.state.value[t] = {}), _e({});
  let v;
  function b(K) {
    let G;
    (l = u = !1),
      typeof K == "function"
        ? (K(s.state.value[t]),
          (G = { type: tr.patchFunction, storeId: t, events: m }))
        : (ka(s.state.value[t], K),
          (G = { type: tr.patchObject, payload: K, storeId: t, events: m }));
    const Se = (v = Symbol());
    Tc().then(() => {
      v === Se && (l = !0);
    }),
      (u = !0),
      ss(h, G, s.state.value[t]);
  }
  const S = Hf;
  function R() {
    o.stop(), (h = []), (f = []), s._s.delete(t);
  }
  function O(K, G) {
    return function () {
      io(s);
      const Se = Array.from(arguments),
        ke = [],
        Le = [];
      function yt(Ve) {
        ke.push(Ve);
      }
      function nn(Ve) {
        Le.push(Ve);
      }
      ss(f, { args: Se, name: K, store: J, after: yt, onError: nn });
      let ct;
      try {
        ct = G.apply(this && this.$id === t ? this : J, Se);
      } catch (Ve) {
        throw (ss(Le, Ve), Ve);
      }
      return ct instanceof Promise
        ? ct
            .then((Ve) => (ss(ke, Ve), Ve))
            .catch((Ve) => (ss(Le, Ve), Promise.reject(Ve)))
        : (ss(ke, ct), ct);
    };
  }
  const U = {
      _p: s,
      $id: t,
      $onAction: yu.bind(null, f),
      $patch: b,
      $reset: S,
      $subscribe(K, G = {}) {
        const Se = yu(h, K, G.detached, () => ke()),
          ke = o.run(() =>
            Xs(
              () => s.state.value[t],
              (Le) => {
                (G.flush === "sync" ? u : l) &&
                  K({ storeId: t, type: tr.direct, events: m }, Le);
              },
              an({}, c, G)
            )
          );
        return Se;
      },
      $dispose: R,
    },
    J = Ps(U);
  s._s.set(t, J);
  const le = s._e.run(() => ((o = Xh()), o.run(() => e())));
  for (const K in le) {
    const G = le[K];
    if ((Ae(G) && !mv(G)) || hn(G))
      i ||
        (g && pv(G) && (Ae(G) ? (G.value = g[K]) : ka(G, g[K])),
        (s.state.value[t][K] = G));
    else if (typeof G == "function") {
      const Se = O(K, G);
      (le[K] = Se), (a.actions[K] = G);
    }
  }
  return (
    an(J, le),
    an(ue(J), le),
    Object.defineProperty(J, "$state", {
      get: () => s.state.value[t],
      set: (K) => {
        b((G) => {
          an(G, K);
        });
      },
    }),
    s._p.forEach((K) => {
      an(
        J,
        o.run(() => K({ store: J, app: s._a, pinia: s, options: a }))
      );
    }),
    g && i && n.hydrate && n.hydrate(J.$state, g),
    (l = !0),
    (u = !0),
    J
  );
}
function zf(t, e, n) {
  let s, r;
  const i = typeof e == "function";
  typeof t == "string" ? ((s = t), (r = i ? n : e)) : ((r = t), (s = t.id));
  function o(a, c) {
    const l = Ny();
    return (
      (a = a || (l && At(qf, null))),
      a && io(a),
      (a = jf),
      a._s.has(s) || (i ? Kf(s, e, r, a) : gv(s, r, a)),
      a._s.get(s)
    );
  }
  return (o.$id = s), o;
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const os = typeof window < "u";
function yv(t) {
  return t.__esModule || t[Symbol.toStringTag] === "Module";
}
const de = Object.assign;
function Go(t, e) {
  const n = {};
  for (const s in e) {
    const r = e[s];
    n[s] = Dt(r) ? r.map(t) : t(r);
  }
  return n;
}
const nr = () => {},
  Dt = Array.isArray,
  vv = /\/$/,
  wv = (t) => t.replace(vv, "");
function Wo(t, e, n = "/") {
  let s,
    r = {},
    i = "",
    o = "";
  const a = e.indexOf("#");
  let c = e.indexOf("?");
  return (
    a < c && a >= 0 && (c = -1),
    c > -1 &&
      ((s = e.slice(0, c)),
      (i = e.slice(c + 1, a > -1 ? a : e.length)),
      (r = t(i))),
    a > -1 && ((s = s || e.slice(0, a)), (o = e.slice(a, e.length))),
    (s = xv(s ?? e, n)),
    { fullPath: s + (i && "?") + i + o, path: s, query: r, hash: o }
  );
}
function _v(t, e) {
  const n = e.query ? t(e.query) : "";
  return e.path + (n && "?") + n + (e.hash || "");
}
function vu(t, e) {
  return !e || !t.toLowerCase().startsWith(e.toLowerCase())
    ? t
    : t.slice(e.length) || "/";
}
function bv(t, e, n) {
  const s = e.matched.length - 1,
    r = n.matched.length - 1;
  return (
    s > -1 &&
    s === r &&
    _s(e.matched[s], n.matched[r]) &&
    Gf(e.params, n.params) &&
    t(e.query) === t(n.query) &&
    e.hash === n.hash
  );
}
function _s(t, e) {
  return (t.aliasOf || t) === (e.aliasOf || e);
}
function Gf(t, e) {
  if (Object.keys(t).length !== Object.keys(e).length) return !1;
  for (const n in t) if (!Ev(t[n], e[n])) return !1;
  return !0;
}
function Ev(t, e) {
  return Dt(t) ? wu(t, e) : Dt(e) ? wu(e, t) : t === e;
}
function wu(t, e) {
  return Dt(e)
    ? t.length === e.length && t.every((n, s) => n === e[s])
    : t.length === 1 && t[0] === e;
}
function xv(t, e) {
  if (t.startsWith("/")) return t;
  if (!t) return e;
  const n = e.split("/"),
    s = t.split("/");
  let r = n.length - 1,
    i,
    o;
  for (i = 0; i < s.length; i++)
    if (((o = s[i]), o !== "."))
      if (o === "..") r > 1 && r--;
      else break;
  return (
    n.slice(0, r).join("/") +
    "/" +
    s.slice(i - (i === s.length ? 1 : 0)).join("/")
  );
}
var mr;
(function (t) {
  (t.pop = "pop"), (t.push = "push");
})(mr || (mr = {}));
var sr;
(function (t) {
  (t.back = "back"), (t.forward = "forward"), (t.unknown = "");
})(sr || (sr = {}));
function Tv(t) {
  if (!t)
    if (os) {
      const e = document.querySelector("base");
      (t = (e && e.getAttribute("href")) || "/"),
        (t = t.replace(/^\w+:\/\/[^\/]+/, ""));
    } else t = "/";
  return t[0] !== "/" && t[0] !== "#" && (t = "/" + t), wv(t);
}
const Iv = /^[^#]+#/;
function Cv(t, e) {
  return t.replace(Iv, "#") + e;
}
function Sv(t, e) {
  const n = document.documentElement.getBoundingClientRect(),
    s = t.getBoundingClientRect();
  return {
    behavior: e.behavior,
    left: s.left - n.left - (e.left || 0),
    top: s.top - n.top - (e.top || 0),
  };
}
const oo = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function Av(t) {
  let e;
  if ("el" in t) {
    const n = t.el,
      s = typeof n == "string" && n.startsWith("#"),
      r =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!r) return;
    e = Sv(r, t);
  } else e = t;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(e)
    : window.scrollTo(
        e.left != null ? e.left : window.pageXOffset,
        e.top != null ? e.top : window.pageYOffset
      );
}
function _u(t, e) {
  return (history.state ? history.state.position - e : -1) + t;
}
const Ra = new Map();
function kv(t, e) {
  Ra.set(t, e);
}
function Rv(t) {
  const e = Ra.get(t);
  return Ra.delete(t), e;
}
let Dv = () => location.protocol + "//" + location.host;
function Wf(t, e) {
  const { pathname: n, search: s, hash: r } = e,
    i = t.indexOf("#");
  if (i > -1) {
    let a = r.includes(t.slice(i)) ? t.slice(i).length : 1,
      c = r.slice(a);
    return c[0] !== "/" && (c = "/" + c), vu(c, "");
  }
  return vu(n, t) + s + r;
}
function Nv(t, e, n, s) {
  let r = [],
    i = [],
    o = null;
  const a = ({ state: f }) => {
    const m = Wf(t, location),
      g = n.value,
      v = e.value;
    let b = 0;
    if (f) {
      if (((n.value = m), (e.value = f), o && o === g)) {
        o = null;
        return;
      }
      b = v ? f.position - v.position : 0;
    } else s(m);
    r.forEach((S) => {
      S(n.value, g, {
        delta: b,
        type: mr.pop,
        direction: b ? (b > 0 ? sr.forward : sr.back) : sr.unknown,
      });
    });
  };
  function c() {
    o = n.value;
  }
  function l(f) {
    r.push(f);
    const m = () => {
      const g = r.indexOf(f);
      g > -1 && r.splice(g, 1);
    };
    return i.push(m), m;
  }
  function u() {
    const { history: f } = window;
    f.state && f.replaceState(de({}, f.state, { scroll: oo() }), "");
  }
  function h() {
    for (const f of i) f();
    (i = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u),
    { pauseListeners: c, listen: l, destroy: h }
  );
}
function bu(t, e, n, s = !1, r = !1) {
  return {
    back: t,
    current: e,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: r ? oo() : null,
  };
}
function Ov(t) {
  const { history: e, location: n } = window,
    s = { value: Wf(t, n) },
    r = { value: e.state };
  r.value ||
    i(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: e.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function i(c, l, u) {
    const h = t.indexOf("#"),
      f =
        h > -1
          ? (n.host && document.querySelector("base") ? t : t.slice(h)) + c
          : Dv() + t + c;
    try {
      e[u ? "replaceState" : "pushState"](l, "", f), (r.value = l);
    } catch (m) {
      console.error(m), n[u ? "replace" : "assign"](f);
    }
  }
  function o(c, l) {
    const u = de({}, e.state, bu(r.value.back, c, r.value.forward, !0), l, {
      position: r.value.position,
    });
    i(c, u, !0), (s.value = c);
  }
  function a(c, l) {
    const u = de({}, r.value, e.state, { forward: c, scroll: oo() });
    i(u.current, u, !0);
    const h = de({}, bu(s.value, c, null), { position: u.position + 1 }, l);
    i(c, h, !1), (s.value = c);
  }
  return { location: s, state: r, push: a, replace: o };
}
function Pv(t) {
  t = Tv(t);
  const e = Ov(t),
    n = Nv(t, e.state, e.location, e.replace);
  function s(i, o = !0) {
    o || n.pauseListeners(), history.go(i);
  }
  const r = de(
    { location: "", base: t, go: s, createHref: Cv.bind(null, t) },
    e,
    n
  );
  return (
    Object.defineProperty(r, "location", {
      enumerable: !0,
      get: () => e.location.value,
    }),
    Object.defineProperty(r, "state", {
      enumerable: !0,
      get: () => e.state.value,
    }),
    r
  );
}
function Mv(t) {
  return typeof t == "string" || (t && typeof t == "object");
}
function Qf(t) {
  return typeof t == "string" || typeof t == "symbol";
}
const rn = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Yf = Symbol("");
var Eu;
(function (t) {
  (t[(t.aborted = 4)] = "aborted"),
    (t[(t.cancelled = 8)] = "cancelled"),
    (t[(t.duplicated = 16)] = "duplicated");
})(Eu || (Eu = {}));
function bs(t, e) {
  return de(new Error(), { type: t, [Yf]: !0 }, e);
}
function Ht(t, e) {
  return t instanceof Error && Yf in t && (e == null || !!(t.type & e));
}
const xu = "[^/]+?",
  Lv = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Fv = /[.+*?^${}()[\]/\\]/g;
function $v(t, e) {
  const n = de({}, Lv, e),
    s = [];
  let r = n.start ? "^" : "";
  const i = [];
  for (const l of t) {
    const u = l.length ? [] : [90];
    n.strict && !l.length && (r += "/");
    for (let h = 0; h < l.length; h++) {
      const f = l[h];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (f.type === 0)
        h || (r += "/"), (r += f.value.replace(Fv, "\\$&")), (m += 40);
      else if (f.type === 1) {
        const { value: g, repeatable: v, optional: b, regexp: S } = f;
        i.push({ name: g, repeatable: v, optional: b });
        const R = S || xu;
        if (R !== xu) {
          m += 10;
          try {
            new RegExp(`(${R})`);
          } catch (U) {
            throw new Error(
              `Invalid custom RegExp for param "${g}" (${R}): ` + U.message
            );
          }
        }
        let O = v ? `((?:${R})(?:/(?:${R}))*)` : `(${R})`;
        h || (O = b && l.length < 2 ? `(?:/${O})` : "/" + O),
          b && (O += "?"),
          (r += O),
          (m += 20),
          b && (m += -8),
          v && (m += -20),
          R === ".*" && (m += -50);
      }
      u.push(m);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const l = s.length - 1;
    s[l][s[l].length - 1] += 0.7000000000000001;
  }
  n.strict || (r += "/?"), n.end ? (r += "$") : n.strict && (r += "(?:/|$)");
  const o = new RegExp(r, n.sensitive ? "" : "i");
  function a(l) {
    const u = l.match(o),
      h = {};
    if (!u) return null;
    for (let f = 1; f < u.length; f++) {
      const m = u[f] || "",
        g = i[f - 1];
      h[g.name] = m && g.repeatable ? m.split("/") : m;
    }
    return h;
  }
  function c(l) {
    let u = "",
      h = !1;
    for (const f of t) {
      (!h || !u.endsWith("/")) && (u += "/"), (h = !1);
      for (const m of f)
        if (m.type === 0) u += m.value;
        else if (m.type === 1) {
          const { value: g, repeatable: v, optional: b } = m,
            S = g in l ? l[g] : "";
          if (Dt(S) && !v)
            throw new Error(
              `Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`
            );
          const R = Dt(S) ? S.join("/") : S;
          if (!R)
            if (b)
              f.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (h = !0));
            else throw new Error(`Missing required param "${g}"`);
          u += R;
        }
    }
    return u || "/";
  }
  return { re: o, score: s, keys: i, parse: a, stringify: c };
}
function Uv(t, e) {
  let n = 0;
  for (; n < t.length && n < e.length; ) {
    const s = e[n] - t[n];
    if (s) return s;
    n++;
  }
  return t.length < e.length
    ? t.length === 1 && t[0] === 40 + 40
      ? -1
      : 1
    : t.length > e.length
    ? e.length === 1 && e[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Vv(t, e) {
  let n = 0;
  const s = t.score,
    r = e.score;
  for (; n < s.length && n < r.length; ) {
    const i = Uv(s[n], r[n]);
    if (i) return i;
    n++;
  }
  if (Math.abs(r.length - s.length) === 1) {
    if (Tu(s)) return 1;
    if (Tu(r)) return -1;
  }
  return r.length - s.length;
}
function Tu(t) {
  const e = t[t.length - 1];
  return t.length > 0 && e[e.length - 1] < 0;
}
const Bv = { type: 0, value: "" },
  jv = /[a-zA-Z0-9_]/;
function qv(t) {
  if (!t) return [[]];
  if (t === "/") return [[Bv]];
  if (!t.startsWith("/")) throw new Error(`Invalid path "${t}"`);
  function e(m) {
    throw new Error(`ERR (${n})/"${l}": ${m}`);
  }
  let n = 0,
    s = n;
  const r = [];
  let i;
  function o() {
    i && r.push(i), (i = []);
  }
  let a = 0,
    c,
    l = "",
    u = "";
  function h() {
    l &&
      (n === 0
        ? i.push({ type: 0, value: l })
        : n === 1 || n === 2 || n === 3
        ? (i.length > 1 &&
            (c === "*" || c === "+") &&
            e(
              `A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`
            ),
          i.push({
            type: 1,
            value: l,
            regexp: u,
            repeatable: c === "*" || c === "+",
            optional: c === "*" || c === "?",
          }))
        : e("Invalid state to consume buffer"),
      (l = ""));
  }
  function f() {
    l += c;
  }
  for (; a < t.length; ) {
    if (((c = t[a++]), c === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (l && h(), o()) : c === ":" ? (h(), (n = 1)) : f();
        break;
      case 4:
        f(), (n = s);
        break;
      case 1:
        c === "("
          ? (n = 2)
          : jv.test(c)
          ? f()
          : (h(), (n = 0), c !== "*" && c !== "?" && c !== "+" && a--);
        break;
      case 2:
        c === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + c)
            : (n = 3)
          : (u += c);
        break;
      case 3:
        h(), (n = 0), c !== "*" && c !== "?" && c !== "+" && a--, (u = "");
        break;
      default:
        e("Unknown state");
        break;
    }
  }
  return n === 2 && e(`Unfinished custom RegExp for param "${l}"`), h(), o(), r;
}
function Hv(t, e, n) {
  const s = $v(qv(t.path), n),
    r = de(s, { record: t, parent: e, children: [], alias: [] });
  return e && !r.record.aliasOf == !e.record.aliasOf && e.children.push(r), r;
}
function Kv(t, e) {
  const n = [],
    s = new Map();
  e = Su({ strict: !1, end: !0, sensitive: !1 }, e);
  function r(u) {
    return s.get(u);
  }
  function i(u, h, f) {
    const m = !f,
      g = zv(u);
    g.aliasOf = f && f.record;
    const v = Su(e, u),
      b = [g];
    if ("alias" in u) {
      const O = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const U of O)
        b.push(
          de({}, g, {
            components: f ? f.record.components : g.components,
            path: U,
            aliasOf: f ? f.record : g,
          })
        );
    }
    let S, R;
    for (const O of b) {
      const { path: U } = O;
      if (h && U[0] !== "/") {
        const J = h.record.path,
          le = J[J.length - 1] === "/" ? "" : "/";
        O.path = h.record.path + (U && le + U);
      }
      if (
        ((S = Hv(O, h, v)),
        f
          ? f.alias.push(S)
          : ((R = R || S),
            R !== S && R.alias.push(S),
            m && u.name && !Cu(S) && o(u.name)),
        g.children)
      ) {
        const J = g.children;
        for (let le = 0; le < J.length; le++) i(J[le], S, f && f.children[le]);
      }
      (f = f || S),
        ((S.record.components && Object.keys(S.record.components).length) ||
          S.record.name ||
          S.record.redirect) &&
          c(S);
    }
    return R
      ? () => {
          o(R);
        }
      : nr;
  }
  function o(u) {
    if (Qf(u)) {
      const h = s.get(u);
      h &&
        (s.delete(u),
        n.splice(n.indexOf(h), 1),
        h.children.forEach(o),
        h.alias.forEach(o));
    } else {
      const h = n.indexOf(u);
      h > -1 &&
        (n.splice(h, 1),
        u.record.name && s.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function c(u) {
    let h = 0;
    for (
      ;
      h < n.length &&
      Vv(u, n[h]) >= 0 &&
      (u.record.path !== n[h].record.path || !Xf(u, n[h]));

    )
      h++;
    n.splice(h, 0, u), u.record.name && !Cu(u) && s.set(u.record.name, u);
  }
  function l(u, h) {
    let f,
      m = {},
      g,
      v;
    if ("name" in u && u.name) {
      if (((f = s.get(u.name)), !f)) throw bs(1, { location: u });
      (v = f.record.name),
        (m = de(
          Iu(
            h.params,
            f.keys.filter((R) => !R.optional).map((R) => R.name)
          ),
          u.params &&
            Iu(
              u.params,
              f.keys.map((R) => R.name)
            )
        )),
        (g = f.stringify(m));
    } else if ("path" in u)
      (g = u.path),
        (f = n.find((R) => R.re.test(g))),
        f && ((m = f.parse(g)), (v = f.record.name));
    else {
      if (((f = h.name ? s.get(h.name) : n.find((R) => R.re.test(h.path))), !f))
        throw bs(1, { location: u, currentLocation: h });
      (v = f.record.name),
        (m = de({}, h.params, u.params)),
        (g = f.stringify(m));
    }
    const b = [];
    let S = f;
    for (; S; ) b.unshift(S.record), (S = S.parent);
    return { name: v, path: g, params: m, matched: b, meta: Wv(b) };
  }
  return (
    t.forEach((u) => i(u)),
    {
      addRoute: i,
      resolve: l,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: r,
    }
  );
}
function Iu(t, e) {
  const n = {};
  for (const s of e) s in t && (n[s] = t[s]);
  return n;
}
function zv(t) {
  return {
    path: t.path,
    redirect: t.redirect,
    name: t.name,
    meta: t.meta || {},
    aliasOf: void 0,
    beforeEnter: t.beforeEnter,
    props: Gv(t),
    children: t.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in t
        ? t.components || null
        : t.component && { default: t.component },
  };
}
function Gv(t) {
  const e = {},
    n = t.props || !1;
  if ("component" in t) e.default = n;
  else for (const s in t.components) e[s] = typeof n == "boolean" ? n : n[s];
  return e;
}
function Cu(t) {
  for (; t; ) {
    if (t.record.aliasOf) return !0;
    t = t.parent;
  }
  return !1;
}
function Wv(t) {
  return t.reduce((e, n) => de(e, n.meta), {});
}
function Su(t, e) {
  const n = {};
  for (const s in t) n[s] = s in e ? e[s] : t[s];
  return n;
}
function Xf(t, e) {
  return e.children.some((n) => n === t || Xf(t, n));
}
const Jf = /#/g,
  Qv = /&/g,
  Yv = /\//g,
  Xv = /=/g,
  Jv = /\?/g,
  Zf = /\+/g,
  Zv = /%5B/g,
  e0 = /%5D/g,
  ed = /%5E/g,
  t0 = /%60/g,
  td = /%7B/g,
  n0 = /%7C/g,
  nd = /%7D/g,
  s0 = /%20/g;
function Dc(t) {
  return encodeURI("" + t)
    .replace(n0, "|")
    .replace(Zv, "[")
    .replace(e0, "]");
}
function r0(t) {
  return Dc(t).replace(td, "{").replace(nd, "}").replace(ed, "^");
}
function Da(t) {
  return Dc(t)
    .replace(Zf, "%2B")
    .replace(s0, "+")
    .replace(Jf, "%23")
    .replace(Qv, "%26")
    .replace(t0, "`")
    .replace(td, "{")
    .replace(nd, "}")
    .replace(ed, "^");
}
function i0(t) {
  return Da(t).replace(Xv, "%3D");
}
function o0(t) {
  return Dc(t).replace(Jf, "%23").replace(Jv, "%3F");
}
function a0(t) {
  return t == null ? "" : o0(t).replace(Yv, "%2F");
}
function Ci(t) {
  try {
    return decodeURIComponent("" + t);
  } catch {}
  return "" + t;
}
function c0(t) {
  const e = {};
  if (t === "" || t === "?") return e;
  const s = (t[0] === "?" ? t.slice(1) : t).split("&");
  for (let r = 0; r < s.length; ++r) {
    const i = s[r].replace(Zf, " "),
      o = i.indexOf("="),
      a = Ci(o < 0 ? i : i.slice(0, o)),
      c = o < 0 ? null : Ci(i.slice(o + 1));
    if (a in e) {
      let l = e[a];
      Dt(l) || (l = e[a] = [l]), l.push(c);
    } else e[a] = c;
  }
  return e;
}
function Au(t) {
  let e = "";
  for (let n in t) {
    const s = t[n];
    if (((n = i0(n)), s == null)) {
      s !== void 0 && (e += (e.length ? "&" : "") + n);
      continue;
    }
    (Dt(s) ? s.map((i) => i && Da(i)) : [s && Da(s)]).forEach((i) => {
      i !== void 0 &&
        ((e += (e.length ? "&" : "") + n), i != null && (e += "=" + i));
    });
  }
  return e;
}
function l0(t) {
  const e = {};
  for (const n in t) {
    const s = t[n];
    s !== void 0 &&
      (e[n] = Dt(s)
        ? s.map((r) => (r == null ? null : "" + r))
        : s == null
        ? s
        : "" + s);
  }
  return e;
}
const u0 = Symbol(""),
  ku = Symbol(""),
  ao = Symbol(""),
  sd = Symbol(""),
  Na = Symbol("");
function Hs() {
  let t = [];
  function e(s) {
    return (
      t.push(s),
      () => {
        const r = t.indexOf(s);
        r > -1 && t.splice(r, 1);
      }
    );
  }
  function n() {
    t = [];
  }
  return { add: e, list: () => t, reset: n };
}
function cn(t, e, n, s, r) {
  const i = s && (s.enterCallbacks[r] = s.enterCallbacks[r] || []);
  return () =>
    new Promise((o, a) => {
      const c = (h) => {
          h === !1
            ? a(bs(4, { from: n, to: e }))
            : h instanceof Error
            ? a(h)
            : Mv(h)
            ? a(bs(2, { from: e, to: h }))
            : (i &&
                s.enterCallbacks[r] === i &&
                typeof h == "function" &&
                i.push(h),
              o());
        },
        l = t.call(s && s.instances[r], e, n, c);
      let u = Promise.resolve(l);
      t.length < 3 && (u = u.then(c)), u.catch((h) => a(h));
    });
}
function Qo(t, e, n, s) {
  const r = [];
  for (const i of t)
    for (const o in i.components) {
      let a = i.components[o];
      if (!(e !== "beforeRouteEnter" && !i.instances[o]))
        if (h0(a)) {
          const l = (a.__vccOpts || a)[e];
          l && r.push(cn(l, n, s, i, o));
        } else {
          let c = a();
          r.push(() =>
            c.then((l) => {
              if (!l)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${i.path}"`)
                );
              const u = yv(l) ? l.default : l;
              i.components[o] = u;
              const f = (u.__vccOpts || u)[e];
              return f && cn(f, n, s, i, o)();
            })
          );
        }
    }
  return r;
}
function h0(t) {
  return (
    typeof t == "object" ||
    "displayName" in t ||
    "props" in t ||
    "__vccOpts" in t
  );
}
function Ru(t) {
  const e = At(ao),
    n = At(sd),
    s = ht(() => e.resolve(Gt(t.to))),
    r = ht(() => {
      const { matched: c } = s.value,
        { length: l } = c,
        u = c[l - 1],
        h = n.matched;
      if (!u || !h.length) return -1;
      const f = h.findIndex(_s.bind(null, u));
      if (f > -1) return f;
      const m = Du(c[l - 2]);
      return l > 1 && Du(u) === m && h[h.length - 1].path !== m
        ? h.findIndex(_s.bind(null, c[l - 2]))
        : f;
    }),
    i = ht(() => r.value > -1 && m0(n.params, s.value.params)),
    o = ht(
      () =>
        r.value > -1 &&
        r.value === n.matched.length - 1 &&
        Gf(n.params, s.value.params)
    );
  function a(c = {}) {
    return p0(c)
      ? e[Gt(t.replace) ? "replace" : "push"](Gt(t.to)).catch(nr)
      : Promise.resolve();
  }
  return {
    route: s,
    href: ht(() => s.value.href),
    isActive: i,
    isExactActive: o,
    navigate: a,
  };
}
const f0 = Tf({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Ru,
    setup(t, { slots: e }) {
      const n = Ps(Ru(t)),
        { options: s } = At(ao),
        r = ht(() => ({
          [Nu(t.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Nu(
            t.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const i = e.default && e.default(n);
        return t.custom
          ? i
          : Bf(
              "a",
              {
                "aria-current": n.isExactActive ? t.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: r.value,
              },
              i
            );
      };
    },
  }),
  d0 = f0;
function p0(t) {
  if (
    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
    !t.defaultPrevented &&
    !(t.button !== void 0 && t.button !== 0)
  ) {
    if (t.currentTarget && t.currentTarget.getAttribute) {
      const e = t.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(e)) return;
    }
    return t.preventDefault && t.preventDefault(), !0;
  }
}
function m0(t, e) {
  for (const n in e) {
    const s = e[n],
      r = t[n];
    if (typeof s == "string") {
      if (s !== r) return !1;
    } else if (!Dt(r) || r.length !== s.length || s.some((i, o) => i !== r[o]))
      return !1;
  }
  return !0;
}
function Du(t) {
  return t ? (t.aliasOf ? t.aliasOf.path : t.path) : "";
}
const Nu = (t, e, n) => t ?? e ?? n,
  g0 = Tf({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(t, { attrs: e, slots: n }) {
      const s = At(Na),
        r = ht(() => t.route || s.value),
        i = At(ku, 0),
        o = ht(() => {
          let l = Gt(i);
          const { matched: u } = r.value;
          let h;
          for (; (h = u[l]) && !h.components; ) l++;
          return l;
        }),
        a = ht(() => r.value.matched[o.value]);
      hi(
        ku,
        ht(() => o.value + 1)
      ),
        hi(u0, a),
        hi(Na, r);
      const c = _e();
      return (
        Xs(
          () => [c.value, a.value, t.name],
          ([l, u, h], [f, m, g]) => {
            u &&
              ((u.instances[h] = l),
              m &&
                m !== u &&
                l &&
                l === f &&
                (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards),
                u.updateGuards.size || (u.updateGuards = m.updateGuards))),
              l &&
                u &&
                (!m || !_s(u, m) || !f) &&
                (u.enterCallbacks[h] || []).forEach((v) => v(l));
          },
          { flush: "post" }
        ),
        () => {
          const l = r.value,
            u = t.name,
            h = a.value,
            f = h && h.components[u];
          if (!f) return Ou(n.default, { Component: f, route: l });
          const m = h.props[u],
            g = m
              ? m === !0
                ? l.params
                : typeof m == "function"
                ? m(l)
                : m
              : null,
            b = Bf(
              f,
              de({}, g, e, {
                onVnodeUnmounted: (S) => {
                  S.component.isUnmounted && (h.instances[u] = null);
                },
                ref: c,
              })
            );
          return Ou(n.default, { Component: b, route: l }) || b;
        }
      );
    },
  });
function Ou(t, e) {
  if (!t) return null;
  const n = t(e);
  return n.length === 1 ? n[0] : n;
}
const rd = g0;
function y0(t) {
  const e = Kv(t.routes, t),
    n = t.parseQuery || c0,
    s = t.stringifyQuery || Au,
    r = t.history,
    i = Hs(),
    o = Hs(),
    a = Hs(),
    c = Ig(rn);
  let l = rn;
  os &&
    t.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = Go.bind(null, (x) => "" + x),
    h = Go.bind(null, a0),
    f = Go.bind(null, Ci);
  function m(x, M) {
    let N, B;
    return (
      Qf(x) ? ((N = e.getRecordMatcher(x)), (B = M)) : (B = x), e.addRoute(B, N)
    );
  }
  function g(x) {
    const M = e.getRecordMatcher(x);
    M && e.removeRoute(M);
  }
  function v() {
    return e.getRoutes().map((x) => x.record);
  }
  function b(x) {
    return !!e.getRecordMatcher(x);
  }
  function S(x, M) {
    if (((M = de({}, M || c.value)), typeof x == "string")) {
      const d = Wo(n, x, M.path),
        p = e.resolve({ path: d.path }, M),
        y = r.createHref(d.fullPath);
      return de(d, p, {
        params: f(p.params),
        hash: Ci(d.hash),
        redirectedFrom: void 0,
        href: y,
      });
    }
    let N;
    if ("path" in x) N = de({}, x, { path: Wo(n, x.path, M.path).path });
    else {
      const d = de({}, x.params);
      for (const p in d) d[p] == null && delete d[p];
      (N = de({}, x, { params: h(x.params) })), (M.params = h(M.params));
    }
    const B = e.resolve(N, M),
      ae = x.hash || "";
    B.params = u(f(B.params));
    const Ie = _v(s, de({}, x, { hash: r0(ae), path: B.path })),
      ne = r.createHref(Ie);
    return de(
      { fullPath: Ie, hash: ae, query: s === Au ? l0(x.query) : x.query || {} },
      B,
      { redirectedFrom: void 0, href: ne }
    );
  }
  function R(x) {
    return typeof x == "string" ? Wo(n, x, c.value.path) : de({}, x);
  }
  function O(x, M) {
    if (l !== x) return bs(8, { from: M, to: x });
  }
  function U(x) {
    return K(x);
  }
  function J(x) {
    return U(de(R(x), { replace: !0 }));
  }
  function le(x) {
    const M = x.matched[x.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: N } = M;
      let B = typeof N == "function" ? N(x) : N;
      return (
        typeof B == "string" &&
          ((B = B.includes("?") || B.includes("#") ? (B = R(B)) : { path: B }),
          (B.params = {})),
        de(
          { query: x.query, hash: x.hash, params: "path" in B ? {} : x.params },
          B
        )
      );
    }
  }
  function K(x, M) {
    const N = (l = S(x)),
      B = c.value,
      ae = x.state,
      Ie = x.force,
      ne = x.replace === !0,
      d = le(N);
    if (d)
      return K(
        de(R(d), {
          state: typeof d == "object" ? de({}, ae, d.state) : ae,
          force: Ie,
          replace: ne,
        }),
        M || N
      );
    const p = N;
    p.redirectedFrom = M;
    let y;
    return (
      !Ie &&
        bv(s, B, N) &&
        ((y = bs(16, { to: p, from: B })), kn(B, B, !0, !1)),
      (y ? Promise.resolve(y) : Se(p, B))
        .catch((w) => (Ht(w) ? (Ht(w, 2) ? w : wt(w)) : ye(w, p, B)))
        .then((w) => {
          if (w) {
            if (Ht(w, 2))
              return K(
                de({ replace: ne }, R(w.to), {
                  state: typeof w.to == "object" ? de({}, ae, w.to.state) : ae,
                  force: Ie,
                }),
                M || p
              );
          } else w = Le(p, B, !0, ne, ae);
          return ke(p, B, w), w;
        })
    );
  }
  function G(x, M) {
    const N = O(x, M);
    return N ? Promise.reject(N) : Promise.resolve();
  }
  function Se(x, M) {
    let N;
    const [B, ae, Ie] = v0(x, M);
    N = Qo(B.reverse(), "beforeRouteLeave", x, M);
    for (const d of B)
      d.leaveGuards.forEach((p) => {
        N.push(cn(p, x, M));
      });
    const ne = G.bind(null, x, M);
    return (
      N.push(ne),
      rs(N)
        .then(() => {
          N = [];
          for (const d of i.list()) N.push(cn(d, x, M));
          return N.push(ne), rs(N);
        })
        .then(() => {
          N = Qo(ae, "beforeRouteUpdate", x, M);
          for (const d of ae)
            d.updateGuards.forEach((p) => {
              N.push(cn(p, x, M));
            });
          return N.push(ne), rs(N);
        })
        .then(() => {
          N = [];
          for (const d of x.matched)
            if (d.beforeEnter && !M.matched.includes(d))
              if (Dt(d.beforeEnter))
                for (const p of d.beforeEnter) N.push(cn(p, x, M));
              else N.push(cn(d.beforeEnter, x, M));
          return N.push(ne), rs(N);
        })
        .then(
          () => (
            x.matched.forEach((d) => (d.enterCallbacks = {})),
            (N = Qo(Ie, "beforeRouteEnter", x, M)),
            N.push(ne),
            rs(N)
          )
        )
        .then(() => {
          N = [];
          for (const d of o.list()) N.push(cn(d, x, M));
          return N.push(ne), rs(N);
        })
        .catch((d) => (Ht(d, 8) ? d : Promise.reject(d)))
    );
  }
  function ke(x, M, N) {
    for (const B of a.list()) B(x, M, N);
  }
  function Le(x, M, N, B, ae) {
    const Ie = O(x, M);
    if (Ie) return Ie;
    const ne = M === rn,
      d = os ? history.state : {};
    N &&
      (B || ne
        ? r.replace(x.fullPath, de({ scroll: ne && d && d.scroll }, ae))
        : r.push(x.fullPath, ae)),
      (c.value = x),
      kn(x, M, N, ne),
      wt();
  }
  let yt;
  function nn() {
    yt ||
      (yt = r.listen((x, M, N) => {
        if (!Gr.listening) return;
        const B = S(x),
          ae = le(B);
        if (ae) {
          K(de(ae, { replace: !0 }), B).catch(nr);
          return;
        }
        l = B;
        const Ie = c.value;
        os && kv(_u(Ie.fullPath, N.delta), oo()),
          Se(B, Ie)
            .catch((ne) =>
              Ht(ne, 12)
                ? ne
                : Ht(ne, 2)
                ? (K(ne.to, B)
                    .then((d) => {
                      Ht(d, 20) &&
                        !N.delta &&
                        N.type === mr.pop &&
                        r.go(-1, !1);
                    })
                    .catch(nr),
                  Promise.reject())
                : (N.delta && r.go(-N.delta, !1), ye(ne, B, Ie))
            )
            .then((ne) => {
              (ne = ne || Le(B, Ie, !1)),
                ne &&
                  (N.delta && !Ht(ne, 8)
                    ? r.go(-N.delta, !1)
                    : N.type === mr.pop && Ht(ne, 20) && r.go(-1, !1)),
                ke(B, Ie, ne);
            })
            .catch(nr);
      }));
  }
  let ct = Hs(),
    Ve = Hs(),
    Re;
  function ye(x, M, N) {
    wt(x);
    const B = Ve.list();
    return (
      B.length ? B.forEach((ae) => ae(x, M, N)) : console.error(x),
      Promise.reject(x)
    );
  }
  function pe() {
    return Re && c.value !== rn
      ? Promise.resolve()
      : new Promise((x, M) => {
          ct.add([x, M]);
        });
  }
  function wt(x) {
    return (
      Re ||
        ((Re = !x),
        nn(),
        ct.list().forEach(([M, N]) => (x ? N(x) : M())),
        ct.reset()),
      x
    );
  }
  function kn(x, M, N, B) {
    const { scrollBehavior: ae } = t;
    if (!os || !ae) return Promise.resolve();
    const Ie =
      (!N && Rv(_u(x.fullPath, 0))) ||
      ((B || !N) && history.state && history.state.scroll) ||
      null;
    return Tc()
      .then(() => ae(x, M, Ie))
      .then((ne) => ne && Av(ne))
      .catch((ne) => ye(ne, x, M));
  }
  const _t = (x) => r.go(x);
  let it;
  const ts = new Set(),
    Gr = {
      currentRoute: c,
      listening: !0,
      addRoute: m,
      removeRoute: g,
      hasRoute: b,
      getRoutes: v,
      resolve: S,
      options: t,
      push: U,
      replace: J,
      go: _t,
      back: () => _t(-1),
      forward: () => _t(1),
      beforeEach: i.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: Ve.add,
      isReady: pe,
      install(x) {
        const M = this;
        x.component("RouterLink", d0),
          x.component("RouterView", rd),
          (x.config.globalProperties.$router = M),
          Object.defineProperty(x.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Gt(c),
          }),
          os &&
            !it &&
            c.value === rn &&
            ((it = !0), U(r.location).catch((ae) => {}));
        const N = {};
        for (const ae in rn) N[ae] = ht(() => c.value[ae]);
        x.provide(ao, M), x.provide(sd, Ps(N)), x.provide(Na, c);
        const B = x.unmount;
        ts.add(x),
          (x.unmount = function () {
            ts.delete(x),
              ts.size < 1 &&
                ((l = rn),
                yt && yt(),
                (yt = null),
                (c.value = rn),
                (it = !1),
                (Re = !1)),
              B();
          });
      },
    };
  return Gr;
}
function rs(t) {
  return t.reduce((e, n) => e.then(() => n()), Promise.resolve());
}
function v0(t, e) {
  const n = [],
    s = [],
    r = [],
    i = Math.max(e.matched.length, t.matched.length);
  for (let o = 0; o < i; o++) {
    const a = e.matched[o];
    a && (t.matched.find((l) => _s(l, a)) ? s.push(a) : n.push(a));
    const c = t.matched[o];
    c && (e.matched.find((l) => _s(l, c)) || r.push(c));
  }
  return [n, s, r];
}
function co() {
  return At(ao);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const id = function (t) {
    const e = [];
    let n = 0;
    for (let s = 0; s < t.length; s++) {
      let r = t.charCodeAt(s);
      r < 128
        ? (e[n++] = r)
        : r < 2048
        ? ((e[n++] = (r >> 6) | 192), (e[n++] = (r & 63) | 128))
        : (r & 64512) === 55296 &&
          s + 1 < t.length &&
          (t.charCodeAt(s + 1) & 64512) === 56320
        ? ((r = 65536 + ((r & 1023) << 10) + (t.charCodeAt(++s) & 1023)),
          (e[n++] = (r >> 18) | 240),
          (e[n++] = ((r >> 12) & 63) | 128),
          (e[n++] = ((r >> 6) & 63) | 128),
          (e[n++] = (r & 63) | 128))
        : ((e[n++] = (r >> 12) | 224),
          (e[n++] = ((r >> 6) & 63) | 128),
          (e[n++] = (r & 63) | 128));
    }
    return e;
  },
  w0 = function (t) {
    const e = [];
    let n = 0,
      s = 0;
    for (; n < t.length; ) {
      const r = t[n++];
      if (r < 128) e[s++] = String.fromCharCode(r);
      else if (r > 191 && r < 224) {
        const i = t[n++];
        e[s++] = String.fromCharCode(((r & 31) << 6) | (i & 63));
      } else if (r > 239 && r < 365) {
        const i = t[n++],
          o = t[n++],
          a = t[n++],
          c =
            (((r & 7) << 18) | ((i & 63) << 12) | ((o & 63) << 6) | (a & 63)) -
            65536;
        (e[s++] = String.fromCharCode(55296 + (c >> 10))),
          (e[s++] = String.fromCharCode(56320 + (c & 1023)));
      } else {
        const i = t[n++],
          o = t[n++];
        e[s++] = String.fromCharCode(
          ((r & 15) << 12) | ((i & 63) << 6) | (o & 63)
        );
      }
    }
    return e.join("");
  },
  od = {
    byteToCharMap_: null,
    charToByteMap_: null,
    byteToCharMapWebSafe_: null,
    charToByteMapWebSafe_: null,
    ENCODED_VALS_BASE:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    get ENCODED_VALS() {
      return this.ENCODED_VALS_BASE + "+/=";
    },
    get ENCODED_VALS_WEBSAFE() {
      return this.ENCODED_VALS_BASE + "-_.";
    },
    HAS_NATIVE_SUPPORT: typeof atob == "function",
    encodeByteArray(t, e) {
      if (!Array.isArray(t))
        throw Error("encodeByteArray takes an array as a parameter");
      this.init_();
      const n = e ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
        s = [];
      for (let r = 0; r < t.length; r += 3) {
        const i = t[r],
          o = r + 1 < t.length,
          a = o ? t[r + 1] : 0,
          c = r + 2 < t.length,
          l = c ? t[r + 2] : 0,
          u = i >> 2,
          h = ((i & 3) << 4) | (a >> 4);
        let f = ((a & 15) << 2) | (l >> 6),
          m = l & 63;
        c || ((m = 64), o || (f = 64)), s.push(n[u], n[h], n[f], n[m]);
      }
      return s.join("");
    },
    encodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? btoa(t)
        : this.encodeByteArray(id(t), e);
    },
    decodeString(t, e) {
      return this.HAS_NATIVE_SUPPORT && !e
        ? atob(t)
        : w0(this.decodeStringToByteArray(t, e));
    },
    decodeStringToByteArray(t, e) {
      this.init_();
      const n = e ? this.charToByteMapWebSafe_ : this.charToByteMap_,
        s = [];
      for (let r = 0; r < t.length; ) {
        const i = n[t.charAt(r++)],
          a = r < t.length ? n[t.charAt(r)] : 0;
        ++r;
        const l = r < t.length ? n[t.charAt(r)] : 64;
        ++r;
        const h = r < t.length ? n[t.charAt(r)] : 64;
        if ((++r, i == null || a == null || l == null || h == null))
          throw Error();
        const f = (i << 2) | (a >> 4);
        if ((s.push(f), l !== 64)) {
          const m = ((a << 4) & 240) | (l >> 2);
          if ((s.push(m), h !== 64)) {
            const g = ((l << 6) & 192) | h;
            s.push(g);
          }
        }
      }
      return s;
    },
    init_() {
      if (!this.byteToCharMap_) {
        (this.byteToCharMap_ = {}),
          (this.charToByteMap_ = {}),
          (this.byteToCharMapWebSafe_ = {}),
          (this.charToByteMapWebSafe_ = {});
        for (let t = 0; t < this.ENCODED_VALS.length; t++)
          (this.byteToCharMap_[t] = this.ENCODED_VALS.charAt(t)),
            (this.charToByteMap_[this.byteToCharMap_[t]] = t),
            (this.byteToCharMapWebSafe_[t] =
              this.ENCODED_VALS_WEBSAFE.charAt(t)),
            (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]] = t),
            t >= this.ENCODED_VALS_BASE.length &&
              ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)] = t),
              (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)] = t));
      }
    },
  },
  _0 = function (t) {
    const e = id(t);
    return od.encodeByteArray(e, !0);
  },
  Si = function (t) {
    return _0(t).replace(/\./g, "");
  },
  b0 = function (t) {
    try {
      return od.decodeString(t, !0);
    } catch (e) {
      console.error("base64Decode failed: ", e);
    }
    return null;
  };
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function E0() {
  if (typeof self < "u") return self;
  if (typeof window < "u") return window;
  if (typeof global < "u") return global;
  throw new Error("Unable to locate global object.");
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const x0 = () => E0().__FIREBASE_DEFAULTS__,
  T0 = () => {
    if (typeof process > "u" || typeof process.env > "u") return;
    const t = {}.__FIREBASE_DEFAULTS__;
    if (t) return JSON.parse(t);
  },
  I0 = () => {
    if (typeof document > "u") return;
    let t;
    try {
      t = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
    } catch {
      return;
    }
    const e = t && b0(t[1]);
    return e && JSON.parse(e);
  },
  ad = () => {
    try {
      return x0() || T0() || I0();
    } catch (t) {
      console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);
      return;
    }
  },
  C0 = (t) => {
    var e, n;
    return (n =
      (e = ad()) === null || e === void 0 ? void 0 : e.emulatorHosts) ===
      null || n === void 0
      ? void 0
      : n[t];
  },
  S0 = (t) => {
    const e = C0(t);
    if (!e) return;
    const n = e.lastIndexOf(":");
    if (n <= 0 || n + 1 === e.length)
      throw new Error(`Invalid host ${e} with no separate hostname and port!`);
    const s = parseInt(e.substring(n + 1), 10);
    return e[0] === "[" ? [e.substring(1, n - 1), s] : [e.substring(0, n), s];
  },
  A0 = () => {
    var t;
    return (t = ad()) === null || t === void 0 ? void 0 : t.config;
  };
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class k0 {
  constructor() {
    (this.reject = () => {}),
      (this.resolve = () => {}),
      (this.promise = new Promise((e, n) => {
        (this.resolve = e), (this.reject = n);
      }));
  }
  wrapCallback(e) {
    return (n, s) => {
      n ? this.reject(n) : this.resolve(s),
        typeof e == "function" &&
          (this.promise.catch(() => {}), e.length === 1 ? e(n) : e(n, s));
    };
  }
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function R0(t, e) {
  if (t.uid)
    throw new Error(
      'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
    );
  const n = { alg: "none", type: "JWT" },
    s = e || "demo-project",
    r = t.iat || 0,
    i = t.sub || t.user_id;
  if (!i)
    throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
  const o = Object.assign(
      {
        iss: `https://securetoken.google.com/${s}`,
        aud: s,
        iat: r,
        exp: r + 3600,
        auth_time: r,
        sub: i,
        user_id: i,
        firebase: { sign_in_provider: "custom", identities: {} },
      },
      t
    ),
    a = "";
  return [Si(JSON.stringify(n)), Si(JSON.stringify(o)), a].join(".");
}
function D0() {
  try {
    return typeof indexedDB == "object";
  } catch {
    return !1;
  }
}
function N0() {
  return new Promise((t, e) => {
    try {
      let n = !0;
      const s = "validate-browser-context-for-indexeddb-analytics-module",
        r = self.indexedDB.open(s);
      (r.onsuccess = () => {
        r.result.close(), n || self.indexedDB.deleteDatabase(s), t(!0);
      }),
        (r.onupgradeneeded = () => {
          n = !1;
        }),
        (r.onerror = () => {
          var i;
          e(
            ((i = r.error) === null || i === void 0 ? void 0 : i.message) || ""
          );
        });
    } catch (n) {
      e(n);
    }
  });
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const O0 = "FirebaseError";
class Yn extends Error {
  constructor(e, n, s) {
    super(n),
      (this.code = e),
      (this.customData = s),
      (this.name = O0),
      Object.setPrototypeOf(this, Yn.prototype),
      Error.captureStackTrace &&
        Error.captureStackTrace(this, cd.prototype.create);
  }
}
class cd {
  constructor(e, n, s) {
    (this.service = e), (this.serviceName = n), (this.errors = s);
  }
  create(e, ...n) {
    const s = n[0] || {},
      r = `${this.service}/${e}`,
      i = this.errors[e],
      o = i ? P0(i, s) : "Error",
      a = `${this.serviceName}: ${o} (${r}).`;
    return new Yn(r, a, s);
  }
}
function P0(t, e) {
  return t.replace(M0, (n, s) => {
    const r = e[s];
    return r != null ? String(r) : `<${s}?>`;
  });
}
const M0 = /\{\$([^}]+)}/g;
function Oa(t, e) {
  if (t === e) return !0;
  const n = Object.keys(t),
    s = Object.keys(e);
  for (const r of n) {
    if (!s.includes(r)) return !1;
    const i = t[r],
      o = e[r];
    if (Pu(i) && Pu(o)) {
      if (!Oa(i, o)) return !1;
    } else if (i !== o) return !1;
  }
  for (const r of s) if (!n.includes(r)) return !1;
  return !0;
}
function Pu(t) {
  return t !== null && typeof t == "object";
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bt(t) {
  return t && t._delegate ? t._delegate : t;
}
class Es {
  constructor(e, n, s) {
    (this.name = e),
      (this.instanceFactory = n),
      (this.type = s),
      (this.multipleInstances = !1),
      (this.serviceProps = {}),
      (this.instantiationMode = "LAZY"),
      (this.onInstanceCreated = null);
  }
  setInstantiationMode(e) {
    return (this.instantiationMode = e), this;
  }
  setMultipleInstances(e) {
    return (this.multipleInstances = e), this;
  }
  setServiceProps(e) {
    return (this.serviceProps = e), this;
  }
  setInstanceCreatedCallback(e) {
    return (this.onInstanceCreated = e), this;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const On = "[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class L0 {
  constructor(e, n) {
    (this.name = e),
      (this.container = n),
      (this.component = null),
      (this.instances = new Map()),
      (this.instancesDeferred = new Map()),
      (this.instancesOptions = new Map()),
      (this.onInitCallbacks = new Map());
  }
  get(e) {
    const n = this.normalizeInstanceIdentifier(e);
    if (!this.instancesDeferred.has(n)) {
      const s = new k0();
      if (
        (this.instancesDeferred.set(n, s),
        this.isInitialized(n) || this.shouldAutoInitialize())
      )
        try {
          const r = this.getOrInitializeService({ instanceIdentifier: n });
          r && s.resolve(r);
        } catch {}
    }
    return this.instancesDeferred.get(n).promise;
  }
  getImmediate(e) {
    var n;
    const s = this.normalizeInstanceIdentifier(
        e == null ? void 0 : e.identifier
      ),
      r =
        (n = e == null ? void 0 : e.optional) !== null && n !== void 0 ? n : !1;
    if (this.isInitialized(s) || this.shouldAutoInitialize())
      try {
        return this.getOrInitializeService({ instanceIdentifier: s });
      } catch (i) {
        if (r) return null;
        throw i;
      }
    else {
      if (r) return null;
      throw Error(`Service ${this.name} is not available`);
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(e) {
    if (e.name !== this.name)
      throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
    if (this.component)
      throw Error(`Component for ${this.name} has already been provided`);
    if (((this.component = e), !!this.shouldAutoInitialize())) {
      if ($0(e))
        try {
          this.getOrInitializeService({ instanceIdentifier: On });
        } catch {}
      for (const [n, s] of this.instancesDeferred.entries()) {
        const r = this.normalizeInstanceIdentifier(n);
        try {
          const i = this.getOrInitializeService({ instanceIdentifier: r });
          s.resolve(i);
        } catch {}
      }
    }
  }
  clearInstance(e = On) {
    this.instancesDeferred.delete(e),
      this.instancesOptions.delete(e),
      this.instances.delete(e);
  }
  async delete() {
    const e = Array.from(this.instances.values());
    await Promise.all([
      ...e.filter((n) => "INTERNAL" in n).map((n) => n.INTERNAL.delete()),
      ...e.filter((n) => "_delete" in n).map((n) => n._delete()),
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(e = On) {
    return this.instances.has(e);
  }
  getOptions(e = On) {
    return this.instancesOptions.get(e) || {};
  }
  initialize(e = {}) {
    const { options: n = {} } = e,
      s = this.normalizeInstanceIdentifier(e.instanceIdentifier);
    if (this.isInitialized(s))
      throw Error(`${this.name}(${s}) has already been initialized`);
    if (!this.isComponentSet())
      throw Error(`Component ${this.name} has not been registered yet`);
    const r = this.getOrInitializeService({
      instanceIdentifier: s,
      options: n,
    });
    for (const [i, o] of this.instancesDeferred.entries()) {
      const a = this.normalizeInstanceIdentifier(i);
      s === a && o.resolve(r);
    }
    return r;
  }
  onInit(e, n) {
    var s;
    const r = this.normalizeInstanceIdentifier(n),
      i =
        (s = this.onInitCallbacks.get(r)) !== null && s !== void 0
          ? s
          : new Set();
    i.add(e), this.onInitCallbacks.set(r, i);
    const o = this.instances.get(r);
    return (
      o && e(o, r),
      () => {
        i.delete(e);
      }
    );
  }
  invokeOnInitCallbacks(e, n) {
    const s = this.onInitCallbacks.get(n);
    if (s)
      for (const r of s)
        try {
          r(e, n);
        } catch {}
  }
  getOrInitializeService({ instanceIdentifier: e, options: n = {} }) {
    let s = this.instances.get(e);
    if (
      !s &&
      this.component &&
      ((s = this.component.instanceFactory(this.container, {
        instanceIdentifier: F0(e),
        options: n,
      })),
      this.instances.set(e, s),
      this.instancesOptions.set(e, n),
      this.invokeOnInitCallbacks(s, e),
      this.component.onInstanceCreated)
    )
      try {
        this.component.onInstanceCreated(this.container, e, s);
      } catch {}
    return s || null;
  }
  normalizeInstanceIdentifier(e = On) {
    return this.component ? (this.component.multipleInstances ? e : On) : e;
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
}
function F0(t) {
  return t === On ? void 0 : t;
}
function $0(t) {
  return t.instantiationMode === "EAGER";
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class U0 {
  constructor(e) {
    (this.name = e), (this.providers = new Map());
  }
  addComponent(e) {
    const n = this.getProvider(e.name);
    if (n.isComponentSet())
      throw new Error(
        `Component ${e.name} has already been registered with ${this.name}`
      );
    n.setComponent(e);
  }
  addOrOverwriteComponent(e) {
    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name),
      this.addComponent(e);
  }
  getProvider(e) {
    if (this.providers.has(e)) return this.providers.get(e);
    const n = new L0(e, this);
    return this.providers.set(e, n), n;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var he;
(function (t) {
  (t[(t.DEBUG = 0)] = "DEBUG"),
    (t[(t.VERBOSE = 1)] = "VERBOSE"),
    (t[(t.INFO = 2)] = "INFO"),
    (t[(t.WARN = 3)] = "WARN"),
    (t[(t.ERROR = 4)] = "ERROR"),
    (t[(t.SILENT = 5)] = "SILENT");
})(he || (he = {}));
const V0 = {
    debug: he.DEBUG,
    verbose: he.VERBOSE,
    info: he.INFO,
    warn: he.WARN,
    error: he.ERROR,
    silent: he.SILENT,
  },
  B0 = he.INFO,
  j0 = {
    [he.DEBUG]: "log",
    [he.VERBOSE]: "log",
    [he.INFO]: "info",
    [he.WARN]: "warn",
    [he.ERROR]: "error",
  },
  q0 = (t, e, ...n) => {
    if (e < t.logLevel) return;
    const s = new Date().toISOString(),
      r = j0[e];
    if (r) console[r](`[${s}]  ${t.name}:`, ...n);
    else
      throw new Error(
        `Attempted to log a message with an invalid logType (value: ${e})`
      );
  };
class ld {
  constructor(e) {
    (this.name = e),
      (this._logLevel = B0),
      (this._logHandler = q0),
      (this._userLogHandler = null);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(e) {
    if (!(e in he))
      throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
    this._logLevel = e;
  }
  setLogLevel(e) {
    this._logLevel = typeof e == "string" ? V0[e] : e;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(e) {
    if (typeof e != "function")
      throw new TypeError("Value assigned to `logHandler` must be a function");
    this._logHandler = e;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(e) {
    this._userLogHandler = e;
  }
  debug(...e) {
    this._userLogHandler && this._userLogHandler(this, he.DEBUG, ...e),
      this._logHandler(this, he.DEBUG, ...e);
  }
  log(...e) {
    this._userLogHandler && this._userLogHandler(this, he.VERBOSE, ...e),
      this._logHandler(this, he.VERBOSE, ...e);
  }
  info(...e) {
    this._userLogHandler && this._userLogHandler(this, he.INFO, ...e),
      this._logHandler(this, he.INFO, ...e);
  }
  warn(...e) {
    this._userLogHandler && this._userLogHandler(this, he.WARN, ...e),
      this._logHandler(this, he.WARN, ...e);
  }
  error(...e) {
    this._userLogHandler && this._userLogHandler(this, he.ERROR, ...e),
      this._logHandler(this, he.ERROR, ...e);
  }
}
const H0 = (t, e) => e.some((n) => t instanceof n);
let Mu, Lu;
function K0() {
  return (
    Mu ||
    (Mu = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])
  );
}
function z0() {
  return (
    Lu ||
    (Lu = [
      IDBCursor.prototype.advance,
      IDBCursor.prototype.continue,
      IDBCursor.prototype.continuePrimaryKey,
    ])
  );
}
const ud = new WeakMap(),
  Pa = new WeakMap(),
  hd = new WeakMap(),
  Yo = new WeakMap(),
  Nc = new WeakMap();
function G0(t) {
  const e = new Promise((n, s) => {
    const r = () => {
        t.removeEventListener("success", i), t.removeEventListener("error", o);
      },
      i = () => {
        n(dn(t.result)), r();
      },
      o = () => {
        s(t.error), r();
      };
    t.addEventListener("success", i), t.addEventListener("error", o);
  });
  return (
    e
      .then((n) => {
        n instanceof IDBCursor && ud.set(n, t);
      })
      .catch(() => {}),
    Nc.set(e, t),
    e
  );
}
function W0(t) {
  if (Pa.has(t)) return;
  const e = new Promise((n, s) => {
    const r = () => {
        t.removeEventListener("complete", i),
          t.removeEventListener("error", o),
          t.removeEventListener("abort", o);
      },
      i = () => {
        n(), r();
      },
      o = () => {
        s(t.error || new DOMException("AbortError", "AbortError")), r();
      };
    t.addEventListener("complete", i),
      t.addEventListener("error", o),
      t.addEventListener("abort", o);
  });
  Pa.set(t, e);
}
let Ma = {
  get(t, e, n) {
    if (t instanceof IDBTransaction) {
      if (e === "done") return Pa.get(t);
      if (e === "objectStoreNames") return t.objectStoreNames || hd.get(t);
      if (e === "store")
        return n.objectStoreNames[1]
          ? void 0
          : n.objectStore(n.objectStoreNames[0]);
    }
    return dn(t[e]);
  },
  set(t, e, n) {
    return (t[e] = n), !0;
  },
  has(t, e) {
    return t instanceof IDBTransaction && (e === "done" || e === "store")
      ? !0
      : e in t;
  },
};
function Q0(t) {
  Ma = t(Ma);
}
function Y0(t) {
  return t === IDBDatabase.prototype.transaction &&
    !("objectStoreNames" in IDBTransaction.prototype)
    ? function (e, ...n) {
        const s = t.call(Xo(this), e, ...n);
        return hd.set(s, e.sort ? e.sort() : [e]), dn(s);
      }
    : z0().includes(t)
    ? function (...e) {
        return t.apply(Xo(this), e), dn(ud.get(this));
      }
    : function (...e) {
        return dn(t.apply(Xo(this), e));
      };
}
function X0(t) {
  return typeof t == "function"
    ? Y0(t)
    : (t instanceof IDBTransaction && W0(t),
      H0(t, K0()) ? new Proxy(t, Ma) : t);
}
function dn(t) {
  if (t instanceof IDBRequest) return G0(t);
  if (Yo.has(t)) return Yo.get(t);
  const e = X0(t);
  return e !== t && (Yo.set(t, e), Nc.set(e, t)), e;
}
const Xo = (t) => Nc.get(t);
function J0(t, e, { blocked: n, upgrade: s, blocking: r, terminated: i } = {}) {
  const o = indexedDB.open(t, e),
    a = dn(o);
  return (
    s &&
      o.addEventListener("upgradeneeded", (c) => {
        s(dn(o.result), c.oldVersion, c.newVersion, dn(o.transaction));
      }),
    n && o.addEventListener("blocked", () => n()),
    a
      .then((c) => {
        i && c.addEventListener("close", () => i()),
          r && c.addEventListener("versionchange", () => r());
      })
      .catch(() => {}),
    a
  );
}
const Z0 = ["get", "getKey", "getAll", "getAllKeys", "count"],
  ew = ["put", "add", "delete", "clear"],
  Jo = new Map();
function Fu(t, e) {
  if (!(t instanceof IDBDatabase && !(e in t) && typeof e == "string")) return;
  if (Jo.get(e)) return Jo.get(e);
  const n = e.replace(/FromIndex$/, ""),
    s = e !== n,
    r = ew.includes(n);
  if (
    !(n in (s ? IDBIndex : IDBObjectStore).prototype) ||
    !(r || Z0.includes(n))
  )
    return;
  const i = async function (o, ...a) {
    const c = this.transaction(o, r ? "readwrite" : "readonly");
    let l = c.store;
    return (
      s && (l = l.index(a.shift())),
      (await Promise.all([l[n](...a), r && c.done]))[0]
    );
  };
  return Jo.set(e, i), i;
}
Q0((t) => ({
  ...t,
  get: (e, n, s) => Fu(e, n) || t.get(e, n, s),
  has: (e, n) => !!Fu(e, n) || t.has(e, n),
}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tw {
  constructor(e) {
    this.container = e;
  }
  getPlatformInfoString() {
    return this.container
      .getProviders()
      .map((n) => {
        if (nw(n)) {
          const s = n.getImmediate();
          return `${s.library}/${s.version}`;
        } else return null;
      })
      .filter((n) => n)
      .join(" ");
  }
}
function nw(t) {
  const e = t.getComponent();
  return (e == null ? void 0 : e.type) === "VERSION";
}
const La = "@firebase/app",
  $u = "0.9.1";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Gn = new ld("@firebase/app"),
  sw = "@firebase/app-compat",
  rw = "@firebase/analytics-compat",
  iw = "@firebase/analytics",
  ow = "@firebase/app-check-compat",
  aw = "@firebase/app-check",
  cw = "@firebase/auth",
  lw = "@firebase/auth-compat",
  uw = "@firebase/database",
  hw = "@firebase/database-compat",
  fw = "@firebase/functions",
  dw = "@firebase/functions-compat",
  pw = "@firebase/installations",
  mw = "@firebase/installations-compat",
  gw = "@firebase/messaging",
  yw = "@firebase/messaging-compat",
  vw = "@firebase/performance",
  ww = "@firebase/performance-compat",
  _w = "@firebase/remote-config",
  bw = "@firebase/remote-config-compat",
  Ew = "@firebase/storage",
  xw = "@firebase/storage-compat",
  Tw = "@firebase/firestore",
  Iw = "@firebase/firestore-compat",
  Cw = "firebase",
  Sw = "9.16.0";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fa = "[DEFAULT]",
  Aw = {
    [La]: "fire-core",
    [sw]: "fire-core-compat",
    [iw]: "fire-analytics",
    [rw]: "fire-analytics-compat",
    [aw]: "fire-app-check",
    [ow]: "fire-app-check-compat",
    [cw]: "fire-auth",
    [lw]: "fire-auth-compat",
    [uw]: "fire-rtdb",
    [hw]: "fire-rtdb-compat",
    [fw]: "fire-fn",
    [dw]: "fire-fn-compat",
    [pw]: "fire-iid",
    [mw]: "fire-iid-compat",
    [gw]: "fire-fcm",
    [yw]: "fire-fcm-compat",
    [vw]: "fire-perf",
    [ww]: "fire-perf-compat",
    [_w]: "fire-rc",
    [bw]: "fire-rc-compat",
    [Ew]: "fire-gcs",
    [xw]: "fire-gcs-compat",
    [Tw]: "fire-fst",
    [Iw]: "fire-fst-compat",
    "fire-js": "fire-js",
    [Cw]: "fire-js-all",
  };
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ai = new Map(),
  $a = new Map();
function kw(t, e) {
  try {
    t.container.addComponent(e);
  } catch (n) {
    Gn.debug(
      `Component ${e.name} failed to register with FirebaseApp ${t.name}`,
      n
    );
  }
}
function gr(t) {
  const e = t.name;
  if ($a.has(e))
    return (
      Gn.debug(`There were multiple attempts to register component ${e}.`), !1
    );
  $a.set(e, t);
  for (const n of Ai.values()) kw(n, t);
  return !0;
}
function Rw(t, e) {
  const n = t.container.getProvider("heartbeat").getImmediate({ optional: !0 });
  return n && n.triggerHeartbeat(), t.container.getProvider(e);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Dw = {
    ["no-app"]:
      "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",
    ["bad-app-name"]: "Illegal App name: '{$appName}",
    ["duplicate-app"]:
      "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted"]: "Firebase App named '{$appName}' already deleted",
    ["no-options"]:
      "Need to provide options, when not being deployed to hosting via source.",
    ["invalid-app-argument"]:
      "firebase.{$appName}() takes either no argument or a Firebase App instance.",
    ["invalid-log-argument"]:
      "First argument to `onLog` must be null or a function.",
    ["idb-open"]:
      "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-get"]:
      "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-set"]:
      "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
    ["idb-delete"]:
      "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  },
  pn = new cd("app", "Firebase", Dw);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nw {
  constructor(e, n, s) {
    (this._isDeleted = !1),
      (this._options = Object.assign({}, e)),
      (this._config = Object.assign({}, n)),
      (this._name = n.name),
      (this._automaticDataCollectionEnabled = n.automaticDataCollectionEnabled),
      (this._container = s),
      this.container.addComponent(new Es("app", () => this, "PUBLIC"));
  }
  get automaticDataCollectionEnabled() {
    return this.checkDestroyed(), this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(e) {
    this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
  }
  get name() {
    return this.checkDestroyed(), this._name;
  }
  get options() {
    return this.checkDestroyed(), this._options;
  }
  get config() {
    return this.checkDestroyed(), this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(e) {
    this._isDeleted = e;
  }
  checkDestroyed() {
    if (this.isDeleted) throw pn.create("app-deleted", { appName: this._name });
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const fd = Sw;
function dd(t, e = {}) {
  let n = t;
  typeof e != "object" && (e = { name: e });
  const s = Object.assign({ name: Fa, automaticDataCollectionEnabled: !1 }, e),
    r = s.name;
  if (typeof r != "string" || !r)
    throw pn.create("bad-app-name", { appName: String(r) });
  if ((n || (n = A0()), !n)) throw pn.create("no-options");
  const i = Ai.get(r);
  if (i) {
    if (Oa(n, i.options) && Oa(s, i.config)) return i;
    throw pn.create("duplicate-app", { appName: r });
  }
  const o = new U0(r);
  for (const c of $a.values()) o.addComponent(c);
  const a = new Nw(n, s, o);
  return Ai.set(r, a), a;
}
function Ow(t = Fa) {
  const e = Ai.get(t);
  if (!e && t === Fa) return dd();
  if (!e) throw pn.create("no-app", { appName: t });
  return e;
}
function mn(t, e, n) {
  var s;
  let r = (s = Aw[t]) !== null && s !== void 0 ? s : t;
  n && (r += `-${n}`);
  const i = r.match(/\s|\//),
    o = e.match(/\s|\//);
  if (i || o) {
    const a = [`Unable to register library "${r}" with version "${e}":`];
    i &&
      a.push(
        `library name "${r}" contains illegal characters (whitespace or "/")`
      ),
      i && o && a.push("and"),
      o &&
        a.push(
          `version name "${e}" contains illegal characters (whitespace or "/")`
        ),
      Gn.warn(a.join(" "));
    return;
  }
  gr(new Es(`${r}-version`, () => ({ library: r, version: e }), "VERSION"));
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pw = "firebase-heartbeat-database",
  Mw = 1,
  yr = "firebase-heartbeat-store";
let Zo = null;
function pd() {
  return (
    Zo ||
      (Zo = J0(Pw, Mw, {
        upgrade: (t, e) => {
          switch (e) {
            case 0:
              t.createObjectStore(yr);
          }
        },
      }).catch((t) => {
        throw pn.create("idb-open", { originalErrorMessage: t.message });
      })),
    Zo
  );
}
async function Lw(t) {
  try {
    return (await pd()).transaction(yr).objectStore(yr).get(md(t));
  } catch (e) {
    if (e instanceof Yn) Gn.warn(e.message);
    else {
      const n = pn.create("idb-get", {
        originalErrorMessage: e == null ? void 0 : e.message,
      });
      Gn.warn(n.message);
    }
  }
}
async function Uu(t, e) {
  try {
    const s = (await pd()).transaction(yr, "readwrite");
    return await s.objectStore(yr).put(e, md(t)), s.done;
  } catch (n) {
    if (n instanceof Yn) Gn.warn(n.message);
    else {
      const s = pn.create("idb-set", {
        originalErrorMessage: n == null ? void 0 : n.message,
      });
      Gn.warn(s.message);
    }
  }
}
function md(t) {
  return `${t.name}!${t.options.appId}`;
}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Fw = 1024,
  $w = 30 * 24 * 60 * 60 * 1e3;
class Uw {
  constructor(e) {
    (this.container = e), (this._heartbeatsCache = null);
    const n = this.container.getProvider("app").getImmediate();
    (this._storage = new Bw(n)),
      (this._heartbeatsCachePromise = this._storage
        .read()
        .then((s) => ((this._heartbeatsCache = s), s)));
  }
  async triggerHeartbeat() {
    const n = this.container
        .getProvider("platform-logger")
        .getImmediate()
        .getPlatformInfoString(),
      s = Vu();
    if (
      (this._heartbeatsCache === null &&
        (this._heartbeatsCache = await this._heartbeatsCachePromise),
      !(
        this._heartbeatsCache.lastSentHeartbeatDate === s ||
        this._heartbeatsCache.heartbeats.some((r) => r.date === s)
      ))
    )
      return (
        this._heartbeatsCache.heartbeats.push({ date: s, agent: n }),
        (this._heartbeatsCache.heartbeats =
          this._heartbeatsCache.heartbeats.filter((r) => {
            const i = new Date(r.date).valueOf();
            return Date.now() - i <= $w;
          })),
        this._storage.overwrite(this._heartbeatsCache)
      );
  }
  async getHeartbeatsHeader() {
    if (
      (this._heartbeatsCache === null && (await this._heartbeatsCachePromise),
      this._heartbeatsCache === null ||
        this._heartbeatsCache.heartbeats.length === 0)
    )
      return "";
    const e = Vu(),
      { heartbeatsToSend: n, unsentEntries: s } = Vw(
        this._heartbeatsCache.heartbeats
      ),
      r = Si(JSON.stringify({ version: 2, heartbeats: n }));
    return (
      (this._heartbeatsCache.lastSentHeartbeatDate = e),
      s.length > 0
        ? ((this._heartbeatsCache.heartbeats = s),
          await this._storage.overwrite(this._heartbeatsCache))
        : ((this._heartbeatsCache.heartbeats = []),
          this._storage.overwrite(this._heartbeatsCache)),
      r
    );
  }
}
function Vu() {
  return new Date().toISOString().substring(0, 10);
}
function Vw(t, e = Fw) {
  const n = [];
  let s = t.slice();
  for (const r of t) {
    const i = n.find((o) => o.agent === r.agent);
    if (i) {
      if ((i.dates.push(r.date), Bu(n) > e)) {
        i.dates.pop();
        break;
      }
    } else if ((n.push({ agent: r.agent, dates: [r.date] }), Bu(n) > e)) {
      n.pop();
      break;
    }
    s = s.slice(1);
  }
  return { heartbeatsToSend: n, unsentEntries: s };
}
class Bw {
  constructor(e) {
    (this.app = e),
      (this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck());
  }
  async runIndexedDBEnvironmentCheck() {
    return D0()
      ? N0()
          .then(() => !0)
          .catch(() => !1)
      : !1;
  }
  async read() {
    return (await this._canUseIndexedDBPromise)
      ? (await Lw(this.app)) || { heartbeats: [] }
      : { heartbeats: [] };
  }
  async overwrite(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return Uu(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : r.lastSentHeartbeatDate,
        heartbeats: e.heartbeats,
      });
    } else return;
  }
  async add(e) {
    var n;
    if (await this._canUseIndexedDBPromise) {
      const r = await this.read();
      return Uu(this.app, {
        lastSentHeartbeatDate:
          (n = e.lastSentHeartbeatDate) !== null && n !== void 0
            ? n
            : r.lastSentHeartbeatDate,
        heartbeats: [...r.heartbeats, ...e.heartbeats],
      });
    } else return;
  }
}
function Bu(t) {
  return Si(JSON.stringify({ version: 2, heartbeats: t })).length;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function jw(t) {
  gr(new Es("platform-logger", (e) => new tw(e), "PRIVATE")),
    gr(new Es("heartbeat", (e) => new Uw(e), "PRIVATE")),
    mn(La, $u, t),
    mn(La, $u, "esm2017"),
    mn("fire-js", "");
}
jw("");
var qw = "firebase",
  Hw = "9.16.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ mn(qw, Hw, "app");
var Kw =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  $,
  Oc = Oc || {},
  W = Kw || self;
function ki() {}
function lo(t) {
  var e = typeof t;
  return (
    (e = e != "object" ? e : t ? (Array.isArray(t) ? "array" : e) : "null"),
    e == "array" || (e == "object" && typeof t.length == "number")
  );
}
function Rr(t) {
  var e = typeof t;
  return (e == "object" && t != null) || e == "function";
}
function zw(t) {
  return (
    (Object.prototype.hasOwnProperty.call(t, ea) && t[ea]) || (t[ea] = ++Gw)
  );
}
var ea = "closure_uid_" + ((1e9 * Math.random()) >>> 0),
  Gw = 0;
function Ww(t, e, n) {
  return t.call.apply(t.bind, arguments);
}
function Qw(t, e, n) {
  if (!t) throw Error();
  if (2 < arguments.length) {
    var s = Array.prototype.slice.call(arguments, 2);
    return function () {
      var r = Array.prototype.slice.call(arguments);
      return Array.prototype.unshift.apply(r, s), t.apply(e, r);
    };
  }
  return function () {
    return t.apply(e, arguments);
  };
}
function Xe(t, e, n) {
  return (
    Function.prototype.bind &&
    Function.prototype.bind.toString().indexOf("native code") != -1
      ? (Xe = Ww)
      : (Xe = Qw),
    Xe.apply(null, arguments)
  );
}
function ti(t, e) {
  var n = Array.prototype.slice.call(arguments, 1);
  return function () {
    var s = n.slice();
    return s.push.apply(s, arguments), t.apply(this, s);
  };
}
function ze(t, e) {
  function n() {}
  (n.prototype = e.prototype),
    (t.X = e.prototype),
    (t.prototype = new n()),
    (t.prototype.constructor = t),
    (t.Wb = function (s, r, i) {
      for (
        var o = Array(arguments.length - 2), a = 2;
        a < arguments.length;
        a++
      )
        o[a - 2] = arguments[a];
      return e.prototype[r].apply(s, o);
    });
}
function Tn() {
  (this.s = this.s), (this.o = this.o);
}
var Yw = 0;
Tn.prototype.s = !1;
Tn.prototype.na = function () {
  !this.s && ((this.s = !0), this.M(), Yw != 0) && zw(this);
};
Tn.prototype.M = function () {
  if (this.o) for (; this.o.length; ) this.o.shift()();
};
const gd = Array.prototype.indexOf
  ? function (t, e) {
      return Array.prototype.indexOf.call(t, e, void 0);
    }
  : function (t, e) {
      if (typeof t == "string")
        return typeof e != "string" || e.length != 1 ? -1 : t.indexOf(e, 0);
      for (let n = 0; n < t.length; n++) if (n in t && t[n] === e) return n;
      return -1;
    };
function Pc(t) {
  const e = t.length;
  if (0 < e) {
    const n = Array(e);
    for (let s = 0; s < e; s++) n[s] = t[s];
    return n;
  }
  return [];
}
function ju(t, e) {
  for (let n = 1; n < arguments.length; n++) {
    const s = arguments[n];
    if (lo(s)) {
      const r = t.length || 0,
        i = s.length || 0;
      t.length = r + i;
      for (let o = 0; o < i; o++) t[r + o] = s[o];
    } else t.push(s);
  }
}
function Je(t, e) {
  (this.type = t), (this.g = this.target = e), (this.defaultPrevented = !1);
}
Je.prototype.h = function () {
  this.defaultPrevented = !0;
};
var Xw = (function () {
  if (!W.addEventListener || !Object.defineProperty) return !1;
  var t = !1,
    e = Object.defineProperty({}, "passive", {
      get: function () {
        t = !0;
      },
    });
  try {
    W.addEventListener("test", ki, e), W.removeEventListener("test", ki, e);
  } catch {}
  return t;
})();
function Ri(t) {
  return /^[\s\xa0]*$/.test(t);
}
var qu = String.prototype.trim
  ? function (t) {
      return t.trim();
    }
  : function (t) {
      return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1];
    };
function ta(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function uo() {
  var t = W.navigator;
  return t && (t = t.userAgent) ? t : "";
}
function $t(t) {
  return uo().indexOf(t) != -1;
}
function Mc(t) {
  return Mc[" "](t), t;
}
Mc[" "] = ki;
function Jw(t) {
  var e = t_;
  return Object.prototype.hasOwnProperty.call(e, 9) ? e[9] : (e[9] = t(9));
}
var Zw = $t("Opera"),
  xs = $t("Trident") || $t("MSIE"),
  yd = $t("Edge"),
  Ua = yd || xs,
  vd =
    $t("Gecko") &&
    !(uo().toLowerCase().indexOf("webkit") != -1 && !$t("Edge")) &&
    !($t("Trident") || $t("MSIE")) &&
    !$t("Edge"),
  e_ = uo().toLowerCase().indexOf("webkit") != -1 && !$t("Edge");
function wd() {
  var t = W.document;
  return t ? t.documentMode : void 0;
}
var Di;
e: {
  var na = "",
    sa = (function () {
      var t = uo();
      if (vd) return /rv:([^\);]+)(\)|;)/.exec(t);
      if (yd) return /Edge\/([\d\.]+)/.exec(t);
      if (xs) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);
      if (e_) return /WebKit\/(\S+)/.exec(t);
      if (Zw) return /(?:Version)[ \/]?(\S+)/.exec(t);
    })();
  if ((sa && (na = sa ? sa[1] : ""), xs)) {
    var ra = wd();
    if (ra != null && ra > parseFloat(na)) {
      Di = String(ra);
      break e;
    }
  }
  Di = na;
}
var t_ = {};
function n_() {
  return Jw(function () {
    let t = 0;
    const e = qu(String(Di)).split("."),
      n = qu("9").split("."),
      s = Math.max(e.length, n.length);
    for (let o = 0; t == 0 && o < s; o++) {
      var r = e[o] || "",
        i = n[o] || "";
      do {
        if (
          ((r = /(\d*)(\D*)(.*)/.exec(r) || ["", "", "", ""]),
          (i = /(\d*)(\D*)(.*)/.exec(i) || ["", "", "", ""]),
          r[0].length == 0 && i[0].length == 0)
        )
          break;
        (t =
          ta(
            r[1].length == 0 ? 0 : parseInt(r[1], 10),
            i[1].length == 0 ? 0 : parseInt(i[1], 10)
          ) ||
          ta(r[2].length == 0, i[2].length == 0) ||
          ta(r[2], i[2])),
          (r = r[3]),
          (i = i[3]);
      } while (t == 0);
    }
    return 0 <= t;
  });
}
var Va;
if (W.document && xs) {
  var Hu = wd();
  Va = Hu || parseInt(Di, 10) || void 0;
} else Va = void 0;
var s_ = Va;
function vr(t, e) {
  if (
    (Je.call(this, t ? t.type : ""),
    (this.relatedTarget = this.g = this.target = null),
    (this.button =
      this.screenY =
      this.screenX =
      this.clientY =
      this.clientX =
        0),
    (this.key = ""),
    (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
    (this.state = null),
    (this.pointerId = 0),
    (this.pointerType = ""),
    (this.i = null),
    t)
  ) {
    var n = (this.type = t.type),
      s =
        t.changedTouches && t.changedTouches.length
          ? t.changedTouches[0]
          : null;
    if (
      ((this.target = t.target || t.srcElement),
      (this.g = e),
      (e = t.relatedTarget))
    ) {
      if (vd) {
        e: {
          try {
            Mc(e.nodeName);
            var r = !0;
            break e;
          } catch {}
          r = !1;
        }
        r || (e = null);
      }
    } else
      n == "mouseover"
        ? (e = t.fromElement)
        : n == "mouseout" && (e = t.toElement);
    (this.relatedTarget = e),
      s
        ? ((this.clientX = s.clientX !== void 0 ? s.clientX : s.pageX),
          (this.clientY = s.clientY !== void 0 ? s.clientY : s.pageY),
          (this.screenX = s.screenX || 0),
          (this.screenY = s.screenY || 0))
        : ((this.clientX = t.clientX !== void 0 ? t.clientX : t.pageX),
          (this.clientY = t.clientY !== void 0 ? t.clientY : t.pageY),
          (this.screenX = t.screenX || 0),
          (this.screenY = t.screenY || 0)),
      (this.button = t.button),
      (this.key = t.key || ""),
      (this.ctrlKey = t.ctrlKey),
      (this.altKey = t.altKey),
      (this.shiftKey = t.shiftKey),
      (this.metaKey = t.metaKey),
      (this.pointerId = t.pointerId || 0),
      (this.pointerType =
        typeof t.pointerType == "string"
          ? t.pointerType
          : r_[t.pointerType] || ""),
      (this.state = t.state),
      (this.i = t),
      t.defaultPrevented && vr.X.h.call(this);
  }
}
ze(vr, Je);
var r_ = { 2: "touch", 3: "pen", 4: "mouse" };
vr.prototype.h = function () {
  vr.X.h.call(this);
  var t = this.i;
  t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
};
var Dr = "closure_listenable_" + ((1e6 * Math.random()) | 0),
  i_ = 0;
function o_(t, e, n, s, r) {
  (this.listener = t),
    (this.proxy = null),
    (this.src = e),
    (this.type = n),
    (this.capture = !!s),
    (this.ha = r),
    (this.key = ++i_),
    (this.ba = this.ea = !1);
}
function ho(t) {
  (t.ba = !0),
    (t.listener = null),
    (t.proxy = null),
    (t.src = null),
    (t.ha = null);
}
function Lc(t, e, n) {
  for (const s in t) e.call(n, t[s], s, t);
}
function _d(t) {
  const e = {};
  for (const n in t) e[n] = t[n];
  return e;
}
const Ku =
  "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
    " "
  );
function bd(t, e) {
  let n, s;
  for (let r = 1; r < arguments.length; r++) {
    s = arguments[r];
    for (n in s) t[n] = s[n];
    for (let i = 0; i < Ku.length; i++)
      (n = Ku[i]), Object.prototype.hasOwnProperty.call(s, n) && (t[n] = s[n]);
  }
}
function fo(t) {
  (this.src = t), (this.g = {}), (this.h = 0);
}
fo.prototype.add = function (t, e, n, s, r) {
  var i = t.toString();
  (t = this.g[i]), t || ((t = this.g[i] = []), this.h++);
  var o = ja(t, e, s, r);
  return (
    -1 < o
      ? ((e = t[o]), n || (e.ea = !1))
      : ((e = new o_(e, this.src, i, !!s, r)), (e.ea = n), t.push(e)),
    e
  );
};
function Ba(t, e) {
  var n = e.type;
  if (n in t.g) {
    var s = t.g[n],
      r = gd(s, e),
      i;
    (i = 0 <= r) && Array.prototype.splice.call(s, r, 1),
      i && (ho(e), t.g[n].length == 0 && (delete t.g[n], t.h--));
  }
}
function ja(t, e, n, s) {
  for (var r = 0; r < t.length; ++r) {
    var i = t[r];
    if (!i.ba && i.listener == e && i.capture == !!n && i.ha == s) return r;
  }
  return -1;
}
var Fc = "closure_lm_" + ((1e6 * Math.random()) | 0),
  ia = {};
function Ed(t, e, n, s, r) {
  if (s && s.once) return Td(t, e, n, s, r);
  if (Array.isArray(e)) {
    for (var i = 0; i < e.length; i++) Ed(t, e[i], n, s, r);
    return null;
  }
  return (
    (n = Vc(n)),
    t && t[Dr] ? t.N(e, n, Rr(s) ? !!s.capture : !!s, r) : xd(t, e, n, !1, s, r)
  );
}
function xd(t, e, n, s, r, i) {
  if (!e) throw Error("Invalid event type");
  var o = Rr(r) ? !!r.capture : !!r,
    a = Uc(t);
  if ((a || (t[Fc] = a = new fo(t)), (n = a.add(e, n, s, o, i)), n.proxy))
    return n;
  if (
    ((s = a_()),
    (n.proxy = s),
    (s.src = t),
    (s.listener = n),
    t.addEventListener)
  )
    Xw || (r = o),
      r === void 0 && (r = !1),
      t.addEventListener(e.toString(), s, r);
  else if (t.attachEvent) t.attachEvent(Cd(e.toString()), s);
  else if (t.addListener && t.removeListener) t.addListener(s);
  else throw Error("addEventListener and attachEvent are unavailable.");
  return n;
}
function a_() {
  function t(n) {
    return e.call(t.src, t.listener, n);
  }
  const e = c_;
  return t;
}
function Td(t, e, n, s, r) {
  if (Array.isArray(e)) {
    for (var i = 0; i < e.length; i++) Td(t, e[i], n, s, r);
    return null;
  }
  return (
    (n = Vc(n)),
    t && t[Dr] ? t.O(e, n, Rr(s) ? !!s.capture : !!s, r) : xd(t, e, n, !0, s, r)
  );
}
function Id(t, e, n, s, r) {
  if (Array.isArray(e)) for (var i = 0; i < e.length; i++) Id(t, e[i], n, s, r);
  else
    (s = Rr(s) ? !!s.capture : !!s),
      (n = Vc(n)),
      t && t[Dr]
        ? ((t = t.i),
          (e = String(e).toString()),
          e in t.g &&
            ((i = t.g[e]),
            (n = ja(i, n, s, r)),
            -1 < n &&
              (ho(i[n]),
              Array.prototype.splice.call(i, n, 1),
              i.length == 0 && (delete t.g[e], t.h--))))
        : t &&
          (t = Uc(t)) &&
          ((e = t.g[e.toString()]),
          (t = -1),
          e && (t = ja(e, n, s, r)),
          (n = -1 < t ? e[t] : null) && $c(n));
}
function $c(t) {
  if (typeof t != "number" && t && !t.ba) {
    var e = t.src;
    if (e && e[Dr]) Ba(e.i, t);
    else {
      var n = t.type,
        s = t.proxy;
      e.removeEventListener
        ? e.removeEventListener(n, s, t.capture)
        : e.detachEvent
        ? e.detachEvent(Cd(n), s)
        : e.addListener && e.removeListener && e.removeListener(s),
        (n = Uc(e))
          ? (Ba(n, t), n.h == 0 && ((n.src = null), (e[Fc] = null)))
          : ho(t);
    }
  }
}
function Cd(t) {
  return t in ia ? ia[t] : (ia[t] = "on" + t);
}
function c_(t, e) {
  if (t.ba) t = !0;
  else {
    e = new vr(e, this);
    var n = t.listener,
      s = t.ha || t.src;
    t.ea && $c(t), (t = n.call(s, e));
  }
  return t;
}
function Uc(t) {
  return (t = t[Fc]), t instanceof fo ? t : null;
}
var oa = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
function Vc(t) {
  return typeof t == "function"
    ? t
    : (t[oa] ||
        (t[oa] = function (e) {
          return t.handleEvent(e);
        }),
      t[oa]);
}
function qe() {
  Tn.call(this), (this.i = new fo(this)), (this.P = this), (this.I = null);
}
ze(qe, Tn);
qe.prototype[Dr] = !0;
qe.prototype.removeEventListener = function (t, e, n, s) {
  Id(this, t, e, n, s);
};
function Ke(t, e) {
  var n,
    s = t.I;
  if (s) for (n = []; s; s = s.I) n.push(s);
  if (((t = t.P), (s = e.type || e), typeof e == "string")) e = new Je(e, t);
  else if (e instanceof Je) e.target = e.target || t;
  else {
    var r = e;
    (e = new Je(s, t)), bd(e, r);
  }
  if (((r = !0), n))
    for (var i = n.length - 1; 0 <= i; i--) {
      var o = (e.g = n[i]);
      r = ni(o, s, !0, e) && r;
    }
  if (
    ((o = e.g = t), (r = ni(o, s, !0, e) && r), (r = ni(o, s, !1, e) && r), n)
  )
    for (i = 0; i < n.length; i++) (o = e.g = n[i]), (r = ni(o, s, !1, e) && r);
}
qe.prototype.M = function () {
  if ((qe.X.M.call(this), this.i)) {
    var t = this.i,
      e;
    for (e in t.g) {
      for (var n = t.g[e], s = 0; s < n.length; s++) ho(n[s]);
      delete t.g[e], t.h--;
    }
  }
  this.I = null;
};
qe.prototype.N = function (t, e, n, s) {
  return this.i.add(String(t), e, !1, n, s);
};
qe.prototype.O = function (t, e, n, s) {
  return this.i.add(String(t), e, !0, n, s);
};
function ni(t, e, n, s) {
  if (((e = t.i.g[String(e)]), !e)) return !0;
  e = e.concat();
  for (var r = !0, i = 0; i < e.length; ++i) {
    var o = e[i];
    if (o && !o.ba && o.capture == n) {
      var a = o.listener,
        c = o.ha || o.src;
      o.ea && Ba(t.i, o), (r = a.call(c, s) !== !1 && r);
    }
  }
  return r && !s.defaultPrevented;
}
var Bc = W.JSON.stringify;
function l_() {
  var t = kd;
  let e = null;
  return (
    t.g && ((e = t.g), (t.g = t.g.next), t.g || (t.h = null), (e.next = null)),
    e
  );
}
class u_ {
  constructor() {
    this.h = this.g = null;
  }
  add(e, n) {
    const s = Sd.get();
    s.set(e, n), this.h ? (this.h.next = s) : (this.g = s), (this.h = s);
  }
}
var Sd = new (class {
  constructor(t, e) {
    (this.i = t), (this.j = e), (this.h = 0), (this.g = null);
  }
  get() {
    let t;
    return (
      0 < this.h
        ? (this.h--, (t = this.g), (this.g = t.next), (t.next = null))
        : (t = this.i()),
      t
    );
  }
})(
  () => new h_(),
  (t) => t.reset()
);
class h_ {
  constructor() {
    this.next = this.g = this.h = null;
  }
  set(e, n) {
    (this.h = e), (this.g = n), (this.next = null);
  }
  reset() {
    this.next = this.g = this.h = null;
  }
}
function f_(t) {
  W.setTimeout(() => {
    throw t;
  }, 0);
}
function Ad(t, e) {
  qa || d_(), Ha || (qa(), (Ha = !0)), kd.add(t, e);
}
var qa;
function d_() {
  var t = W.Promise.resolve(void 0);
  qa = function () {
    t.then(p_);
  };
}
var Ha = !1,
  kd = new u_();
function p_() {
  for (var t; (t = l_()); ) {
    try {
      t.h.call(t.g);
    } catch (n) {
      f_(n);
    }
    var e = Sd;
    e.j(t), 100 > e.h && (e.h++, (t.next = e.g), (e.g = t));
  }
  Ha = !1;
}
function po(t, e) {
  qe.call(this),
    (this.h = t || 1),
    (this.g = e || W),
    (this.j = Xe(this.lb, this)),
    (this.l = Date.now());
}
ze(po, qe);
$ = po.prototype;
$.ca = !1;
$.R = null;
$.lb = function () {
  if (this.ca) {
    var t = Date.now() - this.l;
    0 < t && t < 0.8 * this.h
      ? (this.R = this.g.setTimeout(this.j, this.h - t))
      : (this.R && (this.g.clearTimeout(this.R), (this.R = null)),
        Ke(this, "tick"),
        this.ca && (jc(this), this.start()));
  }
};
$.start = function () {
  (this.ca = !0),
    this.R ||
      ((this.R = this.g.setTimeout(this.j, this.h)), (this.l = Date.now()));
};
function jc(t) {
  (t.ca = !1), t.R && (t.g.clearTimeout(t.R), (t.R = null));
}
$.M = function () {
  po.X.M.call(this), jc(this), delete this.g;
};
function qc(t, e, n) {
  if (typeof t == "function") n && (t = Xe(t, n));
  else if (t && typeof t.handleEvent == "function") t = Xe(t.handleEvent, t);
  else throw Error("Invalid listener argument");
  return 2147483647 < Number(e) ? -1 : W.setTimeout(t, e || 0);
}
function Rd(t) {
  t.g = qc(() => {
    (t.g = null), t.i && ((t.i = !1), Rd(t));
  }, t.j);
  const e = t.h;
  (t.h = null), t.m.apply(null, e);
}
class m_ extends Tn {
  constructor(e, n) {
    super(),
      (this.m = e),
      (this.j = n),
      (this.h = null),
      (this.i = !1),
      (this.g = null);
  }
  l(e) {
    (this.h = arguments), this.g ? (this.i = !0) : Rd(this);
  }
  M() {
    super.M(),
      this.g &&
        (W.clearTimeout(this.g),
        (this.g = null),
        (this.i = !1),
        (this.h = null));
  }
}
function wr(t) {
  Tn.call(this), (this.h = t), (this.g = {});
}
ze(wr, Tn);
var zu = [];
function Dd(t, e, n, s) {
  Array.isArray(n) || (n && (zu[0] = n.toString()), (n = zu));
  for (var r = 0; r < n.length; r++) {
    var i = Ed(e, n[r], s || t.handleEvent, !1, t.h || t);
    if (!i) break;
    t.g[i.key] = i;
  }
}
function Nd(t) {
  Lc(
    t.g,
    function (e, n) {
      this.g.hasOwnProperty(n) && $c(e);
    },
    t
  ),
    (t.g = {});
}
wr.prototype.M = function () {
  wr.X.M.call(this), Nd(this);
};
wr.prototype.handleEvent = function () {
  throw Error("EventHandler.handleEvent not implemented");
};
function mo() {
  this.g = !0;
}
mo.prototype.Aa = function () {
  this.g = !1;
};
function g_(t, e, n, s, r, i) {
  t.info(function () {
    if (t.g)
      if (i)
        for (var o = "", a = i.split("&"), c = 0; c < a.length; c++) {
          var l = a[c].split("=");
          if (1 < l.length) {
            var u = l[0];
            l = l[1];
            var h = u.split("_");
            o =
              2 <= h.length && h[1] == "type"
                ? o + (u + "=" + l + "&")
                : o + (u + "=redacted&");
          }
        }
      else o = null;
    else o = i;
    return (
      "XMLHTTP REQ (" +
      s +
      ") [attempt " +
      r +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      o
    );
  });
}
function y_(t, e, n, s, r, i, o) {
  t.info(function () {
    return (
      "XMLHTTP RESP (" +
      s +
      ") [ attempt " +
      r +
      "]: " +
      e +
      `
` +
      n +
      `
` +
      i +
      " " +
      o
    );
  });
}
function ls(t, e, n, s) {
  t.info(function () {
    return "XMLHTTP TEXT (" + e + "): " + w_(t, n) + (s ? " " + s : "");
  });
}
function v_(t, e) {
  t.info(function () {
    return "TIMEOUT: " + e;
  });
}
mo.prototype.info = function () {};
function w_(t, e) {
  if (!t.g) return e;
  if (!e) return null;
  try {
    var n = JSON.parse(e);
    if (n) {
      for (t = 0; t < n.length; t++)
        if (Array.isArray(n[t])) {
          var s = n[t];
          if (!(2 > s.length)) {
            var r = s[1];
            if (Array.isArray(r) && !(1 > r.length)) {
              var i = r[0];
              if (i != "noop" && i != "stop" && i != "close")
                for (var o = 1; o < r.length; o++) r[o] = "";
            }
          }
        }
    }
    return Bc(n);
  } catch {
    return e;
  }
}
var Xn = {},
  Gu = null;
function go() {
  return (Gu = Gu || new qe());
}
Xn.Pa = "serverreachability";
function Od(t) {
  Je.call(this, Xn.Pa, t);
}
ze(Od, Je);
function _r(t) {
  const e = go();
  Ke(e, new Od(e));
}
Xn.STAT_EVENT = "statevent";
function Pd(t, e) {
  Je.call(this, Xn.STAT_EVENT, t), (this.stat = e);
}
ze(Pd, Je);
function nt(t) {
  const e = go();
  Ke(e, new Pd(e, t));
}
Xn.Qa = "timingevent";
function Md(t, e) {
  Je.call(this, Xn.Qa, t), (this.size = e);
}
ze(Md, Je);
function Nr(t, e) {
  if (typeof t != "function")
    throw Error("Fn must not be null and must be a function");
  return W.setTimeout(function () {
    t();
  }, e);
}
var yo = {
    NO_ERROR: 0,
    mb: 1,
    zb: 2,
    yb: 3,
    tb: 4,
    xb: 5,
    Ab: 6,
    Ma: 7,
    TIMEOUT: 8,
    Db: 9,
  },
  Ld = {
    rb: "complete",
    Nb: "success",
    Na: "error",
    Ma: "abort",
    Fb: "ready",
    Gb: "readystatechange",
    TIMEOUT: "timeout",
    Bb: "incrementaldata",
    Eb: "progress",
    ub: "downloadprogress",
    Vb: "uploadprogress",
  };
function Hc() {}
Hc.prototype.h = null;
function Wu(t) {
  return t.h || (t.h = t.i());
}
function Fd() {}
var Or = { OPEN: "a", qb: "b", Na: "c", Cb: "d" };
function Kc() {
  Je.call(this, "d");
}
ze(Kc, Je);
function zc() {
  Je.call(this, "c");
}
ze(zc, Je);
var Ka;
function vo() {}
ze(vo, Hc);
vo.prototype.g = function () {
  return new XMLHttpRequest();
};
vo.prototype.i = function () {
  return {};
};
Ka = new vo();
function Pr(t, e, n, s) {
  (this.l = t),
    (this.j = e),
    (this.m = n),
    (this.U = s || 1),
    (this.S = new wr(this)),
    (this.O = __),
    (t = Ua ? 125 : void 0),
    (this.T = new po(t)),
    (this.H = null),
    (this.i = !1),
    (this.s = this.A = this.v = this.K = this.F = this.V = this.B = null),
    (this.D = []),
    (this.g = null),
    (this.C = 0),
    (this.o = this.u = null),
    (this.Y = -1),
    (this.I = !1),
    (this.N = 0),
    (this.L = null),
    (this.$ = this.J = this.Z = this.P = !1),
    (this.h = new $d());
}
function $d() {
  (this.i = null), (this.g = ""), (this.h = !1);
}
var __ = 45e3,
  za = {},
  Ni = {};
$ = Pr.prototype;
$.setTimeout = function (t) {
  this.O = t;
};
function Ga(t, e, n) {
  (t.K = 1), (t.v = _o(Xt(e))), (t.s = n), (t.P = !0), Ud(t, null);
}
function Ud(t, e) {
  (t.F = Date.now()), Mr(t), (t.A = Xt(t.v));
  var n = t.A,
    s = t.U;
  Array.isArray(s) || (s = [String(s)]),
    Gd(n.i, "t", s),
    (t.C = 0),
    (n = t.l.H),
    (t.h = new $d()),
    (t.g = pp(t.l, n ? e : null, !t.s)),
    0 < t.N && (t.L = new m_(Xe(t.La, t, t.g), t.N)),
    Dd(t.S, t.g, "readystatechange", t.ib),
    (e = t.H ? _d(t.H) : {}),
    t.s
      ? (t.u || (t.u = "POST"),
        (e["Content-Type"] = "application/x-www-form-urlencoded"),
        t.g.da(t.A, t.u, t.s, e))
      : ((t.u = "GET"), t.g.da(t.A, t.u, null, e)),
    _r(),
    g_(t.j, t.u, t.A, t.m, t.U, t.s);
}
$.ib = function (t) {
  t = t.target;
  const e = this.L;
  e && zt(t) == 3 ? e.l() : this.La(t);
};
$.La = function (t) {
  try {
    if (t == this.g)
      e: {
        const u = zt(this.g);
        var e = this.g.Ea();
        const h = this.g.aa();
        if (
          !(3 > u) &&
          (u != 3 || Ua || (this.g && (this.h.h || this.g.fa() || Ju(this.g))))
        ) {
          this.I || u != 4 || e == 7 || (e == 8 || 0 >= h ? _r(3) : _r(2)),
            wo(this);
          var n = this.g.aa();
          this.Y = n;
          t: if (Vd(this)) {
            var s = Ju(this.g);
            t = "";
            var r = s.length,
              i = zt(this.g) == 4;
            if (!this.h.i) {
              if (typeof TextDecoder > "u") {
                Un(this), rr(this);
                var o = "";
                break t;
              }
              this.h.i = new W.TextDecoder();
            }
            for (e = 0; e < r; e++)
              (this.h.h = !0),
                (t += this.h.i.decode(s[e], { stream: i && e == r - 1 }));
            s.splice(0, r), (this.h.g += t), (this.C = 0), (o = this.h.g);
          } else o = this.g.fa();
          if (
            ((this.i = n == 200),
            y_(this.j, this.u, this.A, this.m, this.U, u, n),
            this.i)
          ) {
            if (this.Z && !this.J) {
              t: {
                if (this.g) {
                  var a,
                    c = this.g;
                  if (
                    (a = c.g
                      ? c.g.getResponseHeader("X-HTTP-Initial-Response")
                      : null) &&
                    !Ri(a)
                  ) {
                    var l = a;
                    break t;
                  }
                }
                l = null;
              }
              if ((n = l))
                ls(
                  this.j,
                  this.m,
                  n,
                  "Initial handshake response via X-HTTP-Initial-Response"
                ),
                  (this.J = !0),
                  Wa(this, n);
              else {
                (this.i = !1), (this.o = 3), nt(12), Un(this), rr(this);
                break e;
              }
            }
            this.P
              ? (Bd(this, u, o),
                Ua &&
                  this.i &&
                  u == 3 &&
                  (Dd(this.S, this.T, "tick", this.hb), this.T.start()))
              : (ls(this.j, this.m, o, null), Wa(this, o)),
              u == 4 && Un(this),
              this.i &&
                !this.I &&
                (u == 4 ? up(this.l, this) : ((this.i = !1), Mr(this)));
          } else
            n == 400 && 0 < o.indexOf("Unknown SID")
              ? ((this.o = 3), nt(12))
              : ((this.o = 0), nt(13)),
              Un(this),
              rr(this);
        }
      }
  } catch {
  } finally {
  }
};
function Vd(t) {
  return t.g ? t.u == "GET" && t.K != 2 && t.l.Da : !1;
}
function Bd(t, e, n) {
  let s = !0,
    r;
  for (; !t.I && t.C < n.length; )
    if (((r = b_(t, n)), r == Ni)) {
      e == 4 && ((t.o = 4), nt(14), (s = !1)),
        ls(t.j, t.m, null, "[Incomplete Response]");
      break;
    } else if (r == za) {
      (t.o = 4), nt(15), ls(t.j, t.m, n, "[Invalid Chunk]"), (s = !1);
      break;
    } else ls(t.j, t.m, r, null), Wa(t, r);
  Vd(t) && r != Ni && r != za && ((t.h.g = ""), (t.C = 0)),
    e != 4 || n.length != 0 || t.h.h || ((t.o = 1), nt(16), (s = !1)),
    (t.i = t.i && s),
    s
      ? 0 < n.length &&
        !t.$ &&
        ((t.$ = !0),
        (e = t.l),
        e.g == t &&
          e.$ &&
          !e.K &&
          (e.j.info(
            "Great, no buffering proxy detected. Bytes received: " + n.length
          ),
          Zc(e),
          (e.K = !0),
          nt(11)))
      : (ls(t.j, t.m, n, "[Invalid Chunked Response]"), Un(t), rr(t));
}
$.hb = function () {
  if (this.g) {
    var t = zt(this.g),
      e = this.g.fa();
    this.C < e.length &&
      (wo(this), Bd(this, t, e), this.i && t != 4 && Mr(this));
  }
};
function b_(t, e) {
  var n = t.C,
    s = e.indexOf(
      `
`,
      n
    );
  return s == -1
    ? Ni
    : ((n = Number(e.substring(n, s))),
      isNaN(n)
        ? za
        : ((s += 1),
          s + n > e.length ? Ni : ((e = e.substr(s, n)), (t.C = s + n), e)));
}
$.cancel = function () {
  (this.I = !0), Un(this);
};
function Mr(t) {
  (t.V = Date.now() + t.O), jd(t, t.O);
}
function jd(t, e) {
  if (t.B != null) throw Error("WatchDog timer not null");
  t.B = Nr(Xe(t.gb, t), e);
}
function wo(t) {
  t.B && (W.clearTimeout(t.B), (t.B = null));
}
$.gb = function () {
  this.B = null;
  const t = Date.now();
  0 <= t - this.V
    ? (v_(this.j, this.A),
      this.K != 2 && (_r(), nt(17)),
      Un(this),
      (this.o = 2),
      rr(this))
    : jd(this, this.V - t);
};
function rr(t) {
  t.l.G == 0 || t.I || up(t.l, t);
}
function Un(t) {
  wo(t);
  var e = t.L;
  e && typeof e.na == "function" && e.na(),
    (t.L = null),
    jc(t.T),
    Nd(t.S),
    t.g && ((e = t.g), (t.g = null), e.abort(), e.na());
}
function Wa(t, e) {
  try {
    var n = t.l;
    if (n.G != 0 && (n.g == t || Qa(n.h, t))) {
      if (!t.J && Qa(n.h, t) && n.G == 3) {
        try {
          var s = n.Fa.g.parse(e);
        } catch {
          s = null;
        }
        if (Array.isArray(s) && s.length == 3) {
          var r = s;
          if (r[0] == 0) {
            e: if (!n.u) {
              if (n.g)
                if (n.g.F + 3e3 < t.F) Mi(n), xo(n);
                else break e;
              Jc(n), nt(18);
            }
          } else
            (n.Ba = r[1]),
              0 < n.Ba - n.T &&
                37500 > r[2] &&
                n.L &&
                n.A == 0 &&
                !n.v &&
                (n.v = Nr(Xe(n.cb, n), 6e3));
          if (1 >= Yd(n.h) && n.ja) {
            try {
              n.ja();
            } catch {}
            n.ja = void 0;
          }
        } else Vn(n, 11);
      } else if (((t.J || n.g == t) && Mi(n), !Ri(e)))
        for (r = n.Fa.g.parse(e), e = 0; e < r.length; e++) {
          let l = r[e];
          if (((n.T = l[0]), (l = l[1]), n.G == 2))
            if (l[0] == "c") {
              (n.I = l[1]), (n.ka = l[2]);
              const u = l[3];
              u != null && ((n.ma = u), n.j.info("VER=" + n.ma));
              const h = l[4];
              h != null && ((n.Ca = h), n.j.info("SVER=" + n.Ca));
              const f = l[5];
              f != null &&
                typeof f == "number" &&
                0 < f &&
                ((s = 1.5 * f),
                (n.J = s),
                n.j.info("backChannelRequestTimeoutMs_=" + s)),
                (s = n);
              const m = t.g;
              if (m) {
                const g = m.g
                  ? m.g.getResponseHeader("X-Client-Wire-Protocol")
                  : null;
                if (g) {
                  var i = s.h;
                  i.g ||
                    (g.indexOf("spdy") == -1 &&
                      g.indexOf("quic") == -1 &&
                      g.indexOf("h2") == -1) ||
                    ((i.j = i.l),
                    (i.g = new Set()),
                    i.h && (Gc(i, i.h), (i.h = null)));
                }
                if (s.D) {
                  const v = m.g
                    ? m.g.getResponseHeader("X-HTTP-Session-Id")
                    : null;
                  v && ((s.za = v), xe(s.F, s.D, v));
                }
              }
              (n.G = 3),
                n.l && n.l.xa(),
                n.$ &&
                  ((n.P = Date.now() - t.F),
                  n.j.info("Handshake RTT: " + n.P + "ms")),
                (s = n);
              var o = t;
              if (((s.sa = dp(s, s.H ? s.ka : null, s.V)), o.J)) {
                Xd(s.h, o);
                var a = o,
                  c = s.J;
                c && a.setTimeout(c), a.B && (wo(a), Mr(a)), (s.g = o);
              } else cp(s);
              0 < n.i.length && To(n);
            } else (l[0] != "stop" && l[0] != "close") || Vn(n, 7);
          else
            n.G == 3 &&
              (l[0] == "stop" || l[0] == "close"
                ? l[0] == "stop"
                  ? Vn(n, 7)
                  : Xc(n)
                : l[0] != "noop" && n.l && n.l.wa(l),
              (n.A = 0));
        }
    }
    _r(4);
  } catch {}
}
function E_(t) {
  if (t.W && typeof t.W == "function") return t.W();
  if (
    (typeof Map < "u" && t instanceof Map) ||
    (typeof Set < "u" && t instanceof Set)
  )
    return Array.from(t.values());
  if (typeof t == "string") return t.split("");
  if (lo(t)) {
    for (var e = [], n = t.length, s = 0; s < n; s++) e.push(t[s]);
    return e;
  }
  (e = []), (n = 0);
  for (s in t) e[n++] = t[s];
  return e;
}
function x_(t) {
  if (t.oa && typeof t.oa == "function") return t.oa();
  if (!t.W || typeof t.W != "function") {
    if (typeof Map < "u" && t instanceof Map) return Array.from(t.keys());
    if (!(typeof Set < "u" && t instanceof Set)) {
      if (lo(t) || typeof t == "string") {
        var e = [];
        t = t.length;
        for (var n = 0; n < t; n++) e.push(n);
        return e;
      }
      (e = []), (n = 0);
      for (const s in t) e[n++] = s;
      return e;
    }
  }
}
function qd(t, e) {
  if (t.forEach && typeof t.forEach == "function") t.forEach(e, void 0);
  else if (lo(t) || typeof t == "string")
    Array.prototype.forEach.call(t, e, void 0);
  else
    for (var n = x_(t), s = E_(t), r = s.length, i = 0; i < r; i++)
      e.call(void 0, s[i], n && n[i], t);
}
var Hd = RegExp(
  "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
);
function T_(t, e) {
  if (t) {
    t = t.split("&");
    for (var n = 0; n < t.length; n++) {
      var s = t[n].indexOf("="),
        r = null;
      if (0 <= s) {
        var i = t[n].substring(0, s);
        r = t[n].substring(s + 1);
      } else i = t[n];
      e(i, r ? decodeURIComponent(r.replace(/\+/g, " ")) : "");
    }
  }
}
function Hn(t, e) {
  if (
    ((this.g = this.s = this.j = ""),
    (this.m = null),
    (this.o = this.l = ""),
    (this.h = !1),
    t instanceof Hn)
  ) {
    (this.h = e !== void 0 ? e : t.h),
      Oi(this, t.j),
      (this.s = t.s),
      (this.g = t.g),
      Pi(this, t.m),
      (this.l = t.l),
      (e = t.i);
    var n = new br();
    (n.i = e.i),
      e.g && ((n.g = new Map(e.g)), (n.h = e.h)),
      Qu(this, n),
      (this.o = t.o);
  } else
    t && (n = String(t).match(Hd))
      ? ((this.h = !!e),
        Oi(this, n[1] || "", !0),
        (this.s = Gs(n[2] || "")),
        (this.g = Gs(n[3] || "", !0)),
        Pi(this, n[4]),
        (this.l = Gs(n[5] || "", !0)),
        Qu(this, n[6] || "", !0),
        (this.o = Gs(n[7] || "")))
      : ((this.h = !!e), (this.i = new br(null, this.h)));
}
Hn.prototype.toString = function () {
  var t = [],
    e = this.j;
  e && t.push(Ws(e, Yu, !0), ":");
  var n = this.g;
  return (
    (n || e == "file") &&
      (t.push("//"),
      (e = this.s) && t.push(Ws(e, Yu, !0), "@"),
      t.push(
        encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")
      ),
      (n = this.m),
      n != null && t.push(":", String(n))),
    (n = this.l) &&
      (this.g && n.charAt(0) != "/" && t.push("/"),
      t.push(Ws(n, n.charAt(0) == "/" ? S_ : C_, !0))),
    (n = this.i.toString()) && t.push("?", n),
    (n = this.o) && t.push("#", Ws(n, k_)),
    t.join("")
  );
};
function Xt(t) {
  return new Hn(t);
}
function Oi(t, e, n) {
  (t.j = n ? Gs(e, !0) : e), t.j && (t.j = t.j.replace(/:$/, ""));
}
function Pi(t, e) {
  if (e) {
    if (((e = Number(e)), isNaN(e) || 0 > e))
      throw Error("Bad port number " + e);
    t.m = e;
  } else t.m = null;
}
function Qu(t, e, n) {
  e instanceof br
    ? ((t.i = e), R_(t.i, t.h))
    : (n || (e = Ws(e, A_)), (t.i = new br(e, t.h)));
}
function xe(t, e, n) {
  t.i.set(e, n);
}
function _o(t) {
  return (
    xe(
      t,
      "zx",
      Math.floor(2147483648 * Math.random()).toString(36) +
        Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(
          36
        )
    ),
    t
  );
}
function Gs(t, e) {
  return t
    ? e
      ? decodeURI(t.replace(/%25/g, "%2525"))
      : decodeURIComponent(t)
    : "";
}
function Ws(t, e, n) {
  return typeof t == "string"
    ? ((t = encodeURI(t).replace(e, I_)),
      n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
      t)
    : null;
}
function I_(t) {
  return (
    (t = t.charCodeAt(0)),
    "%" + ((t >> 4) & 15).toString(16) + (t & 15).toString(16)
  );
}
var Yu = /[#\/\?@]/g,
  C_ = /[#\?:]/g,
  S_ = /[#\?]/g,
  A_ = /[#\?@]/g,
  k_ = /#/g;
function br(t, e) {
  (this.h = this.g = null), (this.i = t || null), (this.j = !!e);
}
function In(t) {
  t.g ||
    ((t.g = new Map()),
    (t.h = 0),
    t.i &&
      T_(t.i, function (e, n) {
        t.add(decodeURIComponent(e.replace(/\+/g, " ")), n);
      }));
}
$ = br.prototype;
$.add = function (t, e) {
  In(this), (this.i = null), (t = Ls(this, t));
  var n = this.g.get(t);
  return n || this.g.set(t, (n = [])), n.push(e), (this.h += 1), this;
};
function Kd(t, e) {
  In(t),
    (e = Ls(t, e)),
    t.g.has(e) && ((t.i = null), (t.h -= t.g.get(e).length), t.g.delete(e));
}
function zd(t, e) {
  return In(t), (e = Ls(t, e)), t.g.has(e);
}
$.forEach = function (t, e) {
  In(this),
    this.g.forEach(function (n, s) {
      n.forEach(function (r) {
        t.call(e, r, s, this);
      }, this);
    }, this);
};
$.oa = function () {
  In(this);
  const t = Array.from(this.g.values()),
    e = Array.from(this.g.keys()),
    n = [];
  for (let s = 0; s < e.length; s++) {
    const r = t[s];
    for (let i = 0; i < r.length; i++) n.push(e[s]);
  }
  return n;
};
$.W = function (t) {
  In(this);
  let e = [];
  if (typeof t == "string")
    zd(this, t) && (e = e.concat(this.g.get(Ls(this, t))));
  else {
    t = Array.from(this.g.values());
    for (let n = 0; n < t.length; n++) e = e.concat(t[n]);
  }
  return e;
};
$.set = function (t, e) {
  return (
    In(this),
    (this.i = null),
    (t = Ls(this, t)),
    zd(this, t) && (this.h -= this.g.get(t).length),
    this.g.set(t, [e]),
    (this.h += 1),
    this
  );
};
$.get = function (t, e) {
  return t ? ((t = this.W(t)), 0 < t.length ? String(t[0]) : e) : e;
};
function Gd(t, e, n) {
  Kd(t, e),
    0 < n.length && ((t.i = null), t.g.set(Ls(t, e), Pc(n)), (t.h += n.length));
}
$.toString = function () {
  if (this.i) return this.i;
  if (!this.g) return "";
  const t = [],
    e = Array.from(this.g.keys());
  for (var n = 0; n < e.length; n++) {
    var s = e[n];
    const i = encodeURIComponent(String(s)),
      o = this.W(s);
    for (s = 0; s < o.length; s++) {
      var r = i;
      o[s] !== "" && (r += "=" + encodeURIComponent(String(o[s]))), t.push(r);
    }
  }
  return (this.i = t.join("&"));
};
function Ls(t, e) {
  return (e = String(e)), t.j && (e = e.toLowerCase()), e;
}
function R_(t, e) {
  e &&
    !t.j &&
    (In(t),
    (t.i = null),
    t.g.forEach(function (n, s) {
      var r = s.toLowerCase();
      s != r && (Kd(this, s), Gd(this, r, n));
    }, t)),
    (t.j = e);
}
var D_ = class {
  constructor(e, n) {
    (this.h = e), (this.g = n);
  }
};
function Wd(t) {
  (this.l = t || N_),
    W.PerformanceNavigationTiming
      ? ((t = W.performance.getEntriesByType("navigation")),
        (t =
          0 < t.length &&
          (t[0].nextHopProtocol == "hq" || t[0].nextHopProtocol == "h2")))
      : (t = !!(W.g && W.g.Ga && W.g.Ga() && W.g.Ga().$b)),
    (this.j = t ? this.l : 1),
    (this.g = null),
    1 < this.j && (this.g = new Set()),
    (this.h = null),
    (this.i = []);
}
var N_ = 10;
function Qd(t) {
  return t.h ? !0 : t.g ? t.g.size >= t.j : !1;
}
function Yd(t) {
  return t.h ? 1 : t.g ? t.g.size : 0;
}
function Qa(t, e) {
  return t.h ? t.h == e : t.g ? t.g.has(e) : !1;
}
function Gc(t, e) {
  t.g ? t.g.add(e) : (t.h = e);
}
function Xd(t, e) {
  t.h && t.h == e ? (t.h = null) : t.g && t.g.has(e) && t.g.delete(e);
}
Wd.prototype.cancel = function () {
  if (((this.i = Jd(this)), this.h)) this.h.cancel(), (this.h = null);
  else if (this.g && this.g.size !== 0) {
    for (const t of this.g.values()) t.cancel();
    this.g.clear();
  }
};
function Jd(t) {
  if (t.h != null) return t.i.concat(t.h.D);
  if (t.g != null && t.g.size !== 0) {
    let e = t.i;
    for (const n of t.g.values()) e = e.concat(n.D);
    return e;
  }
  return Pc(t.i);
}
function Wc() {}
Wc.prototype.stringify = function (t) {
  return W.JSON.stringify(t, void 0);
};
Wc.prototype.parse = function (t) {
  return W.JSON.parse(t, void 0);
};
function O_() {
  this.g = new Wc();
}
function P_(t, e, n) {
  const s = n || "";
  try {
    qd(t, function (r, i) {
      let o = r;
      Rr(r) && (o = Bc(r)), e.push(s + i + "=" + encodeURIComponent(o));
    });
  } catch (r) {
    throw (e.push(s + "type=" + encodeURIComponent("_badmap")), r);
  }
}
function M_(t, e) {
  const n = new mo();
  if (W.Image) {
    const s = new Image();
    (s.onload = ti(si, n, s, "TestLoadImage: loaded", !0, e)),
      (s.onerror = ti(si, n, s, "TestLoadImage: error", !1, e)),
      (s.onabort = ti(si, n, s, "TestLoadImage: abort", !1, e)),
      (s.ontimeout = ti(si, n, s, "TestLoadImage: timeout", !1, e)),
      W.setTimeout(function () {
        s.ontimeout && s.ontimeout();
      }, 1e4),
      (s.src = t);
  } else e(!1);
}
function si(t, e, n, s, r) {
  try {
    (e.onload = null),
      (e.onerror = null),
      (e.onabort = null),
      (e.ontimeout = null),
      r(s);
  } catch {}
}
function Lr(t) {
  (this.l = t.ac || null), (this.j = t.jb || !1);
}
ze(Lr, Hc);
Lr.prototype.g = function () {
  return new bo(this.l, this.j);
};
Lr.prototype.i = (function (t) {
  return function () {
    return t;
  };
})({});
function bo(t, e) {
  qe.call(this),
    (this.D = t),
    (this.u = e),
    (this.m = void 0),
    (this.readyState = Qc),
    (this.status = 0),
    (this.responseType =
      this.responseText =
      this.response =
      this.statusText =
        ""),
    (this.onreadystatechange = null),
    (this.v = new Headers()),
    (this.h = null),
    (this.C = "GET"),
    (this.B = ""),
    (this.g = !1),
    (this.A = this.j = this.l = null);
}
ze(bo, qe);
var Qc = 0;
$ = bo.prototype;
$.open = function (t, e) {
  if (this.readyState != Qc)
    throw (this.abort(), Error("Error reopening a connection"));
  (this.C = t), (this.B = e), (this.readyState = 1), Er(this);
};
$.send = function (t) {
  if (this.readyState != 1)
    throw (this.abort(), Error("need to call open() first. "));
  this.g = !0;
  const e = {
    headers: this.v,
    method: this.C,
    credentials: this.m,
    cache: void 0,
  };
  t && (e.body = t),
    (this.D || W)
      .fetch(new Request(this.B, e))
      .then(this.Wa.bind(this), this.ga.bind(this));
};
$.abort = function () {
  (this.response = this.responseText = ""),
    (this.v = new Headers()),
    (this.status = 0),
    this.j && this.j.cancel("Request was aborted.").catch(() => {}),
    1 <= this.readyState &&
      this.g &&
      this.readyState != 4 &&
      ((this.g = !1), Fr(this)),
    (this.readyState = Qc);
};
$.Wa = function (t) {
  if (
    this.g &&
    ((this.l = t),
    this.h ||
      ((this.status = this.l.status),
      (this.statusText = this.l.statusText),
      (this.h = t.headers),
      (this.readyState = 2),
      Er(this)),
    this.g && ((this.readyState = 3), Er(this), this.g))
  )
    if (this.responseType === "arraybuffer")
      t.arrayBuffer().then(this.Ua.bind(this), this.ga.bind(this));
    else if (typeof W.ReadableStream < "u" && "body" in t) {
      if (((this.j = t.body.getReader()), this.u)) {
        if (this.responseType)
          throw Error(
            'responseType must be empty for "streamBinaryChunks" mode responses.'
          );
        this.response = [];
      } else
        (this.response = this.responseText = ""), (this.A = new TextDecoder());
      Zd(this);
    } else t.text().then(this.Va.bind(this), this.ga.bind(this));
};
function Zd(t) {
  t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t));
}
$.Ta = function (t) {
  if (this.g) {
    if (this.u && t.value) this.response.push(t.value);
    else if (!this.u) {
      var e = t.value ? t.value : new Uint8Array(0);
      (e = this.A.decode(e, { stream: !t.done })) &&
        (this.response = this.responseText += e);
    }
    t.done ? Fr(this) : Er(this), this.readyState == 3 && Zd(this);
  }
};
$.Va = function (t) {
  this.g && ((this.response = this.responseText = t), Fr(this));
};
$.Ua = function (t) {
  this.g && ((this.response = t), Fr(this));
};
$.ga = function () {
  this.g && Fr(this);
};
function Fr(t) {
  (t.readyState = 4), (t.l = null), (t.j = null), (t.A = null), Er(t);
}
$.setRequestHeader = function (t, e) {
  this.v.append(t, e);
};
$.getResponseHeader = function (t) {
  return (this.h && this.h.get(t.toLowerCase())) || "";
};
$.getAllResponseHeaders = function () {
  if (!this.h) return "";
  const t = [],
    e = this.h.entries();
  for (var n = e.next(); !n.done; )
    (n = n.value), t.push(n[0] + ": " + n[1]), (n = e.next());
  return t.join(`\r
`);
};
function Er(t) {
  t.onreadystatechange && t.onreadystatechange.call(t);
}
Object.defineProperty(bo.prototype, "withCredentials", {
  get: function () {
    return this.m === "include";
  },
  set: function (t) {
    this.m = t ? "include" : "same-origin";
  },
});
var L_ = W.JSON.parse;
function Ce(t) {
  qe.call(this),
    (this.headers = new Map()),
    (this.u = t || null),
    (this.h = !1),
    (this.C = this.g = null),
    (this.H = ""),
    (this.m = 0),
    (this.j = ""),
    (this.l = this.F = this.v = this.D = !1),
    (this.B = 0),
    (this.A = null),
    (this.J = ep),
    (this.K = this.L = !1);
}
ze(Ce, qe);
var ep = "",
  F_ = /^https?$/i,
  $_ = ["POST", "PUT"];
$ = Ce.prototype;
$.Ka = function (t) {
  this.L = t;
};
$.da = function (t, e, n, s) {
  if (this.g)
    throw Error(
      "[goog.net.XhrIo] Object is active with another request=" +
        this.H +
        "; newUri=" +
        t
    );
  (e = e ? e.toUpperCase() : "GET"),
    (this.H = t),
    (this.j = ""),
    (this.m = 0),
    (this.D = !1),
    (this.h = !0),
    (this.g = this.u ? this.u.g() : Ka.g()),
    (this.C = this.u ? Wu(this.u) : Wu(Ka)),
    (this.g.onreadystatechange = Xe(this.Ha, this));
  try {
    (this.F = !0), this.g.open(e, String(t), !0), (this.F = !1);
  } catch (i) {
    Xu(this, i);
    return;
  }
  if (((t = n || ""), (n = new Map(this.headers)), s))
    if (Object.getPrototypeOf(s) === Object.prototype)
      for (var r in s) n.set(r, s[r]);
    else if (typeof s.keys == "function" && typeof s.get == "function")
      for (const i of s.keys()) n.set(i, s.get(i));
    else throw Error("Unknown input type for opt_headers: " + String(s));
  (s = Array.from(n.keys()).find((i) => i.toLowerCase() == "content-type")),
    (r = W.FormData && t instanceof W.FormData),
    !(0 <= gd($_, e)) ||
      s ||
      r ||
      n.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  for (const [i, o] of n) this.g.setRequestHeader(i, o);
  this.J && (this.g.responseType = this.J),
    "withCredentials" in this.g &&
      this.g.withCredentials !== this.L &&
      (this.g.withCredentials = this.L);
  try {
    sp(this),
      0 < this.B &&
        ((this.K = U_(this.g))
          ? ((this.g.timeout = this.B), (this.g.ontimeout = Xe(this.qa, this)))
          : (this.A = qc(this.qa, this.B, this))),
      (this.v = !0),
      this.g.send(t),
      (this.v = !1);
  } catch (i) {
    Xu(this, i);
  }
};
function U_(t) {
  return xs && n_() && typeof t.timeout == "number" && t.ontimeout !== void 0;
}
$.qa = function () {
  typeof Oc < "u" &&
    this.g &&
    ((this.j = "Timed out after " + this.B + "ms, aborting"),
    (this.m = 8),
    Ke(this, "timeout"),
    this.abort(8));
};
function Xu(t, e) {
  (t.h = !1),
    t.g && ((t.l = !0), t.g.abort(), (t.l = !1)),
    (t.j = e),
    (t.m = 5),
    tp(t),
    Eo(t);
}
function tp(t) {
  t.D || ((t.D = !0), Ke(t, "complete"), Ke(t, "error"));
}
$.abort = function (t) {
  this.g &&
    this.h &&
    ((this.h = !1),
    (this.l = !0),
    this.g.abort(),
    (this.l = !1),
    (this.m = t || 7),
    Ke(this, "complete"),
    Ke(this, "abort"),
    Eo(this));
};
$.M = function () {
  this.g &&
    (this.h && ((this.h = !1), (this.l = !0), this.g.abort(), (this.l = !1)),
    Eo(this, !0)),
    Ce.X.M.call(this);
};
$.Ha = function () {
  this.s || (this.F || this.v || this.l ? np(this) : this.fb());
};
$.fb = function () {
  np(this);
};
function np(t) {
  if (t.h && typeof Oc < "u" && (!t.C[1] || zt(t) != 4 || t.aa() != 2)) {
    if (t.v && zt(t) == 4) qc(t.Ha, 0, t);
    else if ((Ke(t, "readystatechange"), zt(t) == 4)) {
      t.h = !1;
      try {
        const a = t.aa();
        e: switch (a) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var e = !0;
            break e;
          default:
            e = !1;
        }
        var n;
        if (!(n = e)) {
          var s;
          if ((s = a === 0)) {
            var r = String(t.H).match(Hd)[1] || null;
            if (!r && W.self && W.self.location) {
              var i = W.self.location.protocol;
              r = i.substr(0, i.length - 1);
            }
            s = !F_.test(r ? r.toLowerCase() : "");
          }
          n = s;
        }
        if (n) Ke(t, "complete"), Ke(t, "success");
        else {
          t.m = 6;
          try {
            var o = 2 < zt(t) ? t.g.statusText : "";
          } catch {
            o = "";
          }
          (t.j = o + " [" + t.aa() + "]"), tp(t);
        }
      } finally {
        Eo(t);
      }
    }
  }
}
function Eo(t, e) {
  if (t.g) {
    sp(t);
    const n = t.g,
      s = t.C[0] ? ki : null;
    (t.g = null), (t.C = null), e || Ke(t, "ready");
    try {
      n.onreadystatechange = s;
    } catch {}
  }
}
function sp(t) {
  t.g && t.K && (t.g.ontimeout = null),
    t.A && (W.clearTimeout(t.A), (t.A = null));
}
function zt(t) {
  return t.g ? t.g.readyState : 0;
}
$.aa = function () {
  try {
    return 2 < zt(this) ? this.g.status : -1;
  } catch {
    return -1;
  }
};
$.fa = function () {
  try {
    return this.g ? this.g.responseText : "";
  } catch {
    return "";
  }
};
$.Sa = function (t) {
  if (this.g) {
    var e = this.g.responseText;
    return t && e.indexOf(t) == 0 && (e = e.substring(t.length)), L_(e);
  }
};
function Ju(t) {
  try {
    if (!t.g) return null;
    if ("response" in t.g) return t.g.response;
    switch (t.J) {
      case ep:
      case "text":
        return t.g.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in t.g) return t.g.mozResponseArrayBuffer;
    }
    return null;
  } catch {
    return null;
  }
}
$.Ea = function () {
  return this.m;
};
$.Oa = function () {
  return typeof this.j == "string" ? this.j : String(this.j);
};
function rp(t) {
  let e = "";
  return (
    Lc(t, function (n, s) {
      (e += s),
        (e += ":"),
        (e += n),
        (e += `\r
`);
    }),
    e
  );
}
function Yc(t, e, n) {
  e: {
    for (s in n) {
      var s = !1;
      break e;
    }
    s = !0;
  }
  s ||
    ((n = rp(n)),
    typeof t == "string"
      ? n != null && encodeURIComponent(String(n))
      : xe(t, e, n));
}
function Ks(t, e, n) {
  return (n && n.internalChannelParams && n.internalChannelParams[t]) || e;
}
function ip(t) {
  (this.Ca = 0),
    (this.i = []),
    (this.j = new mo()),
    (this.ka =
      this.sa =
      this.F =
      this.V =
      this.g =
      this.za =
      this.D =
      this.ia =
      this.o =
      this.S =
      this.s =
        null),
    (this.ab = this.U = 0),
    (this.Za = Ks("failFast", !1, t)),
    (this.L = this.v = this.u = this.m = this.l = null),
    (this.Y = !0),
    (this.pa = this.Ba = this.T = -1),
    (this.Z = this.A = this.C = 0),
    (this.Xa = Ks("baseRetryDelayMs", 5e3, t)),
    (this.bb = Ks("retryDelaySeedMs", 1e4, t)),
    (this.$a = Ks("forwardChannelMaxRetries", 2, t)),
    (this.ta = Ks("forwardChannelRequestTimeoutMs", 2e4, t)),
    (this.ra = (t && t.xmlHttpFactory) || void 0),
    (this.Da = (t && t.Zb) || !1),
    (this.J = void 0),
    (this.H = (t && t.supportsCrossDomainXhr) || !1),
    (this.I = ""),
    (this.h = new Wd(t && t.concurrentRequestLimit)),
    (this.Fa = new O_()),
    (this.O = (t && t.fastHandshake) || !1),
    (this.N = (t && t.encodeInitMessageHeaders) || !1),
    this.O && this.N && (this.N = !1),
    (this.Ya = (t && t.Xb) || !1),
    t && t.Aa && this.j.Aa(),
    t && t.forceLongPolling && (this.Y = !1),
    (this.$ = (!this.O && this.Y && t && t.detectBufferingProxy) || !1),
    (this.ja = void 0),
    (this.P = 0),
    (this.K = !1),
    (this.la = this.B = null);
}
$ = ip.prototype;
$.ma = 8;
$.G = 1;
function Xc(t) {
  if ((op(t), t.G == 3)) {
    var e = t.U++,
      n = Xt(t.F);
    xe(n, "SID", t.I),
      xe(n, "RID", e),
      xe(n, "TYPE", "terminate"),
      $r(t, n),
      (e = new Pr(t, t.j, e, void 0)),
      (e.K = 2),
      (e.v = _o(Xt(n))),
      (n = !1),
      W.navigator &&
        W.navigator.sendBeacon &&
        (n = W.navigator.sendBeacon(e.v.toString(), "")),
      !n && W.Image && ((new Image().src = e.v), (n = !0)),
      n || ((e.g = pp(e.l, null)), e.g.da(e.v)),
      (e.F = Date.now()),
      Mr(e);
  }
  fp(t);
}
function xo(t) {
  t.g && (Zc(t), t.g.cancel(), (t.g = null));
}
function op(t) {
  xo(t),
    t.u && (W.clearTimeout(t.u), (t.u = null)),
    Mi(t),
    t.h.cancel(),
    t.m && (typeof t.m == "number" && W.clearTimeout(t.m), (t.m = null));
}
function To(t) {
  Qd(t.h) || t.m || ((t.m = !0), Ad(t.Ja, t), (t.C = 0));
}
function V_(t, e) {
  return Yd(t.h) >= t.h.j - (t.m ? 1 : 0)
    ? !1
    : t.m
    ? ((t.i = e.D.concat(t.i)), !0)
    : t.G == 1 || t.G == 2 || t.C >= (t.Za ? 0 : t.$a)
    ? !1
    : ((t.m = Nr(Xe(t.Ja, t, e), hp(t, t.C))), t.C++, !0);
}
$.Ja = function (t) {
  if (this.m)
    if (((this.m = null), this.G == 1)) {
      if (!t) {
        (this.U = Math.floor(1e5 * Math.random())), (t = this.U++);
        const r = new Pr(this, this.j, t, void 0);
        let i = this.s;
        if (
          (this.S && (i ? ((i = _d(i)), bd(i, this.S)) : (i = this.S)),
          this.o !== null || this.N || ((r.H = i), (i = null)),
          this.O)
        )
          e: {
            for (var e = 0, n = 0; n < this.i.length; n++) {
              t: {
                var s = this.i[n];
                if (
                  "__data__" in s.g &&
                  ((s = s.g.__data__), typeof s == "string")
                ) {
                  s = s.length;
                  break t;
                }
                s = void 0;
              }
              if (s === void 0) break;
              if (((e += s), 4096 < e)) {
                e = n;
                break e;
              }
              if (e === 4096 || n === this.i.length - 1) {
                e = n + 1;
                break e;
              }
            }
            e = 1e3;
          }
        else e = 1e3;
        (e = ap(this, r, e)),
          (n = Xt(this.F)),
          xe(n, "RID", t),
          xe(n, "CVER", 22),
          this.D && xe(n, "X-HTTP-Session-Id", this.D),
          $r(this, n),
          i &&
            (this.N
              ? (e = "headers=" + encodeURIComponent(String(rp(i))) + "&" + e)
              : this.o && Yc(n, this.o, i)),
          Gc(this.h, r),
          this.Ya && xe(n, "TYPE", "init"),
          this.O
            ? (xe(n, "$req", e),
              xe(n, "SID", "null"),
              (r.Z = !0),
              Ga(r, n, null))
            : Ga(r, n, e),
          (this.G = 2);
      }
    } else
      this.G == 3 &&
        (t ? Zu(this, t) : this.i.length == 0 || Qd(this.h) || Zu(this));
};
function Zu(t, e) {
  var n;
  e ? (n = e.m) : (n = t.U++);
  const s = Xt(t.F);
  xe(s, "SID", t.I),
    xe(s, "RID", n),
    xe(s, "AID", t.T),
    $r(t, s),
    t.o && t.s && Yc(s, t.o, t.s),
    (n = new Pr(t, t.j, n, t.C + 1)),
    t.o === null && (n.H = t.s),
    e && (t.i = e.D.concat(t.i)),
    (e = ap(t, n, 1e3)),
    n.setTimeout(
      Math.round(0.5 * t.ta) + Math.round(0.5 * t.ta * Math.random())
    ),
    Gc(t.h, n),
    Ga(n, s, e);
}
function $r(t, e) {
  t.ia &&
    Lc(t.ia, function (n, s) {
      xe(e, s, n);
    }),
    t.l &&
      qd({}, function (n, s) {
        xe(e, s, n);
      });
}
function ap(t, e, n) {
  n = Math.min(t.i.length, n);
  var s = t.l ? Xe(t.l.Ra, t.l, t) : null;
  e: {
    var r = t.i;
    let i = -1;
    for (;;) {
      const o = ["count=" + n];
      i == -1
        ? 0 < n
          ? ((i = r[0].h), o.push("ofs=" + i))
          : (i = 0)
        : o.push("ofs=" + i);
      let a = !0;
      for (let c = 0; c < n; c++) {
        let l = r[c].h;
        const u = r[c].g;
        if (((l -= i), 0 > l)) (i = Math.max(0, r[c].h - 100)), (a = !1);
        else
          try {
            P_(u, o, "req" + l + "_");
          } catch {
            s && s(u);
          }
      }
      if (a) {
        s = o.join("&");
        break e;
      }
    }
  }
  return (t = t.i.splice(0, n)), (e.D = t), s;
}
function cp(t) {
  t.g || t.u || ((t.Z = 1), Ad(t.Ia, t), (t.A = 0));
}
function Jc(t) {
  return t.g || t.u || 3 <= t.A
    ? !1
    : (t.Z++, (t.u = Nr(Xe(t.Ia, t), hp(t, t.A))), t.A++, !0);
}
$.Ia = function () {
  if (
    ((this.u = null),
    lp(this),
    this.$ && !(this.K || this.g == null || 0 >= this.P))
  ) {
    var t = 2 * this.P;
    this.j.info("BP detection timer enabled: " + t),
      (this.B = Nr(Xe(this.eb, this), t));
  }
};
$.eb = function () {
  this.B &&
    ((this.B = null),
    this.j.info("BP detection timeout reached."),
    this.j.info("Buffering proxy detected and switch to long-polling!"),
    (this.L = !1),
    (this.K = !0),
    nt(10),
    xo(this),
    lp(this));
};
function Zc(t) {
  t.B != null && (W.clearTimeout(t.B), (t.B = null));
}
function lp(t) {
  (t.g = new Pr(t, t.j, "rpc", t.Z)),
    t.o === null && (t.g.H = t.s),
    (t.g.N = 0);
  var e = Xt(t.sa);
  xe(e, "RID", "rpc"),
    xe(e, "SID", t.I),
    xe(e, "CI", t.L ? "0" : "1"),
    xe(e, "AID", t.T),
    xe(e, "TYPE", "xmlhttp"),
    $r(t, e),
    t.o && t.s && Yc(e, t.o, t.s),
    t.J && t.g.setTimeout(t.J);
  var n = t.g;
  (t = t.ka), (n.K = 1), (n.v = _o(Xt(e))), (n.s = null), (n.P = !0), Ud(n, t);
}
$.cb = function () {
  this.v != null && ((this.v = null), xo(this), Jc(this), nt(19));
};
function Mi(t) {
  t.v != null && (W.clearTimeout(t.v), (t.v = null));
}
function up(t, e) {
  var n = null;
  if (t.g == e) {
    Mi(t), Zc(t), (t.g = null);
    var s = 2;
  } else if (Qa(t.h, e)) (n = e.D), Xd(t.h, e), (s = 1);
  else return;
  if (t.G != 0) {
    if (((t.pa = e.Y), e.i))
      if (s == 1) {
        (n = e.s ? e.s.length : 0), (e = Date.now() - e.F);
        var r = t.C;
        (s = go()), Ke(s, new Md(s, n)), To(t);
      } else cp(t);
    else if (
      ((r = e.o),
      r == 3 ||
        (r == 0 && 0 < t.pa) ||
        !((s == 1 && V_(t, e)) || (s == 2 && Jc(t))))
    )
      switch ((n && 0 < n.length && ((e = t.h), (e.i = e.i.concat(n))), r)) {
        case 1:
          Vn(t, 5);
          break;
        case 4:
          Vn(t, 10);
          break;
        case 3:
          Vn(t, 6);
          break;
        default:
          Vn(t, 2);
      }
  }
}
function hp(t, e) {
  let n = t.Xa + Math.floor(Math.random() * t.bb);
  return t.l || (n *= 2), n * e;
}
function Vn(t, e) {
  if ((t.j.info("Error code " + e), e == 2)) {
    var n = null;
    t.l && (n = null);
    var s = Xe(t.kb, t);
    n ||
      ((n = new Hn("//www.google.com/images/cleardot.gif")),
      (W.location && W.location.protocol == "http") || Oi(n, "https"),
      _o(n)),
      M_(n.toString(), s);
  } else nt(2);
  (t.G = 0), t.l && t.l.va(e), fp(t), op(t);
}
$.kb = function (t) {
  t
    ? (this.j.info("Successfully pinged google.com"), nt(2))
    : (this.j.info("Failed to ping google.com"), nt(1));
};
function fp(t) {
  if (((t.G = 0), (t.la = []), t.l)) {
    const e = Jd(t.h);
    (e.length != 0 || t.i.length != 0) &&
      (ju(t.la, e),
      ju(t.la, t.i),
      (t.h.i.length = 0),
      Pc(t.i),
      (t.i.length = 0)),
      t.l.ua();
  }
}
function dp(t, e, n) {
  var s = n instanceof Hn ? Xt(n) : new Hn(n, void 0);
  if (s.g != "") e && (s.g = e + "." + s.g), Pi(s, s.m);
  else {
    var r = W.location;
    (s = r.protocol),
      (e = e ? e + "." + r.hostname : r.hostname),
      (r = +r.port);
    var i = new Hn(null, void 0);
    s && Oi(i, s), e && (i.g = e), r && Pi(i, r), n && (i.l = n), (s = i);
  }
  return (
    (n = t.D),
    (e = t.za),
    n && e && xe(s, n, e),
    xe(s, "VER", t.ma),
    $r(t, s),
    s
  );
}
function pp(t, e, n) {
  if (e && !t.H)
    throw Error("Can't create secondary domain capable XhrIo object.");
  return (
    (e = n && t.Da && !t.ra ? new Ce(new Lr({ jb: !0 })) : new Ce(t.ra)),
    e.Ka(t.H),
    e
  );
}
function mp() {}
$ = mp.prototype;
$.xa = function () {};
$.wa = function () {};
$.va = function () {};
$.ua = function () {};
$.Ra = function () {};
function Li() {
  if (xs && !(10 <= Number(s_)))
    throw Error("Environmental error: no available transport.");
}
Li.prototype.g = function (t, e) {
  return new gt(t, e);
};
function gt(t, e) {
  qe.call(this),
    (this.g = new ip(e)),
    (this.l = t),
    (this.h = (e && e.messageUrlParams) || null),
    (t = (e && e.messageHeaders) || null),
    e &&
      e.clientProtocolHeaderRequired &&
      (t
        ? (t["X-Client-Protocol"] = "webchannel")
        : (t = { "X-Client-Protocol": "webchannel" })),
    (this.g.s = t),
    (t = (e && e.initMessageHeaders) || null),
    e &&
      e.messageContentType &&
      (t
        ? (t["X-WebChannel-Content-Type"] = e.messageContentType)
        : (t = { "X-WebChannel-Content-Type": e.messageContentType })),
    e &&
      e.ya &&
      (t
        ? (t["X-WebChannel-Client-Profile"] = e.ya)
        : (t = { "X-WebChannel-Client-Profile": e.ya })),
    (this.g.S = t),
    (t = e && e.Yb) && !Ri(t) && (this.g.o = t),
    (this.A = (e && e.supportsCrossDomainXhr) || !1),
    (this.v = (e && e.sendRawJson) || !1),
    (e = e && e.httpSessionIdParam) &&
      !Ri(e) &&
      ((this.g.D = e),
      (t = this.h),
      t !== null && e in t && ((t = this.h), e in t && delete t[e])),
    (this.j = new Fs(this));
}
ze(gt, qe);
gt.prototype.m = function () {
  (this.g.l = this.j), this.A && (this.g.H = !0);
  var t = this.g,
    e = this.l,
    n = this.h || void 0;
  nt(0),
    (t.V = e),
    (t.ia = n || {}),
    (t.L = t.Y),
    (t.F = dp(t, null, t.V)),
    To(t);
};
gt.prototype.close = function () {
  Xc(this.g);
};
gt.prototype.u = function (t) {
  var e = this.g;
  if (typeof t == "string") {
    var n = {};
    (n.__data__ = t), (t = n);
  } else this.v && ((n = {}), (n.__data__ = Bc(t)), (t = n));
  e.i.push(new D_(e.ab++, t)), e.G == 3 && To(e);
};
gt.prototype.M = function () {
  (this.g.l = null),
    delete this.j,
    Xc(this.g),
    delete this.g,
    gt.X.M.call(this);
};
function gp(t) {
  Kc.call(this);
  var e = t.__sm__;
  if (e) {
    e: {
      for (const n in e) {
        t = n;
        break e;
      }
      t = void 0;
    }
    (this.i = t) && ((t = this.i), (e = e !== null && t in e ? e[t] : void 0)),
      (this.data = e);
  } else this.data = t;
}
ze(gp, Kc);
function yp() {
  zc.call(this), (this.status = 1);
}
ze(yp, zc);
function Fs(t) {
  this.g = t;
}
ze(Fs, mp);
Fs.prototype.xa = function () {
  Ke(this.g, "a");
};
Fs.prototype.wa = function (t) {
  Ke(this.g, new gp(t));
};
Fs.prototype.va = function (t) {
  Ke(this.g, new yp());
};
Fs.prototype.ua = function () {
  Ke(this.g, "b");
};
Li.prototype.createWebChannel = Li.prototype.g;
gt.prototype.send = gt.prototype.u;
gt.prototype.open = gt.prototype.m;
gt.prototype.close = gt.prototype.close;
yo.NO_ERROR = 0;
yo.TIMEOUT = 8;
yo.HTTP_ERROR = 6;
Ld.COMPLETE = "complete";
Fd.EventType = Or;
Or.OPEN = "a";
Or.CLOSE = "b";
Or.ERROR = "c";
Or.MESSAGE = "d";
qe.prototype.listen = qe.prototype.N;
Ce.prototype.listenOnce = Ce.prototype.O;
Ce.prototype.getLastError = Ce.prototype.Oa;
Ce.prototype.getLastErrorCode = Ce.prototype.Ea;
Ce.prototype.getStatus = Ce.prototype.aa;
Ce.prototype.getResponseJson = Ce.prototype.Sa;
Ce.prototype.getResponseText = Ce.prototype.fa;
Ce.prototype.send = Ce.prototype.da;
Ce.prototype.setWithCredentials = Ce.prototype.Ka;
var B_ = function () {
    return new Li();
  },
  j_ = function () {
    return go();
  },
  aa = yo,
  q_ = Ld,
  H_ = Xn,
  eh = {
    sb: 0,
    vb: 1,
    wb: 2,
    Pb: 3,
    Ub: 4,
    Rb: 5,
    Sb: 6,
    Qb: 7,
    Ob: 8,
    Tb: 9,
    PROXY: 10,
    NOPROXY: 11,
    Mb: 12,
    Ib: 13,
    Jb: 14,
    Hb: 15,
    Kb: 16,
    Lb: 17,
    ob: 18,
    nb: 19,
    pb: 20,
  },
  K_ = Lr,
  ri = Fd,
  z_ = Ce;
const th = "@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ge {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return this.uid != null;
  }
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
}
(Ge.UNAUTHENTICATED = new Ge(null)),
  (Ge.GOOGLE_CREDENTIALS = new Ge("google-credentials-uid")),
  (Ge.FIRST_PARTY = new Ge("first-party-uid")),
  (Ge.MOCK_USER = new Ge("mock-user"));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ let $s = "9.16.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Wn = new ld("@firebase/firestore");
function nh() {
  return Wn.logLevel;
}
function V(t, ...e) {
  if (Wn.logLevel <= he.DEBUG) {
    const n = e.map(el);
    Wn.debug(`Firestore (${$s}): ${t}`, ...n);
  }
}
function Jt(t, ...e) {
  if (Wn.logLevel <= he.ERROR) {
    const n = e.map(el);
    Wn.error(`Firestore (${$s}): ${t}`, ...n);
  }
}
function Ya(t, ...e) {
  if (Wn.logLevel <= he.WARN) {
    const n = e.map(el);
    Wn.warn(`Firestore (${$s}): ${t}`, ...n);
  }
}
function el(t) {
  if (typeof t == "string") return t;
  try {
    return (e = t), JSON.stringify(e);
  } catch {
    return t;
  }
  /**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */ var e;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function z(t = "Unexpected state") {
  const e = `FIRESTORE (${$s}) INTERNAL ASSERTION FAILED: ` + t;
  throw (Jt(e), new Error(e));
}
function we(t, e) {
  t || z();
}
function ee(t, e) {
  return t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const E = {
  OK: "ok",
  CANCELLED: "cancelled",
  UNKNOWN: "unknown",
  INVALID_ARGUMENT: "invalid-argument",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  NOT_FOUND: "not-found",
  ALREADY_EXISTS: "already-exists",
  PERMISSION_DENIED: "permission-denied",
  UNAUTHENTICATED: "unauthenticated",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  FAILED_PRECONDITION: "failed-precondition",
  ABORTED: "aborted",
  OUT_OF_RANGE: "out-of-range",
  UNIMPLEMENTED: "unimplemented",
  INTERNAL: "internal",
  UNAVAILABLE: "unavailable",
  DATA_LOSS: "data-loss",
};
class L extends Yn {
  constructor(e, n) {
    super(e, n),
      (this.code = e),
      (this.message = n),
      (this.toString = () =>
        `${this.name}: [code=${this.code}]: ${this.message}`);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Qt {
  constructor() {
    this.promise = new Promise((e, n) => {
      (this.resolve = e), (this.reject = n);
    });
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class vp {
  constructor(e, n) {
    (this.user = n),
      (this.type = "OAuth"),
      (this.headers = new Map()),
      this.headers.set("Authorization", `Bearer ${e}`);
  }
}
class G_ {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {}
  start(e, n) {
    e.enqueueRetryable(() => n(Ge.UNAUTHENTICATED));
  }
  shutdown() {}
}
class W_ {
  constructor(e) {
    (this.token = e), (this.changeListener = null);
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  invalidateToken() {}
  start(e, n) {
    (this.changeListener = n), e.enqueueRetryable(() => n(this.token.user));
  }
  shutdown() {
    this.changeListener = null;
  }
}
class Q_ {
  constructor(e) {
    (this.t = e),
      (this.currentUser = Ge.UNAUTHENTICATED),
      (this.i = 0),
      (this.forceRefresh = !1),
      (this.auth = null);
  }
  start(e, n) {
    let s = this.i;
    const r = (c) => (this.i !== s ? ((s = this.i), n(c)) : Promise.resolve());
    let i = new Qt();
    this.o = () => {
      this.i++,
        (this.currentUser = this.u()),
        i.resolve(),
        (i = new Qt()),
        e.enqueueRetryable(() => r(this.currentUser));
    };
    const o = () => {
        const c = i;
        e.enqueueRetryable(async () => {
          await c.promise, await r(this.currentUser);
        });
      },
      a = (c) => {
        V("FirebaseAuthCredentialsProvider", "Auth detected"),
          (this.auth = c),
          this.auth.addAuthTokenListener(this.o),
          o();
      };
    this.t.onInit((c) => a(c)),
      setTimeout(() => {
        if (!this.auth) {
          const c = this.t.getImmediate({ optional: !0 });
          c
            ? a(c)
            : (V("FirebaseAuthCredentialsProvider", "Auth not yet detected"),
              i.resolve(),
              (i = new Qt()));
        }
      }, 0),
      o();
  }
  getToken() {
    const e = this.i,
      n = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.auth
        ? this.auth
            .getToken(n)
            .then((s) =>
              this.i !== e
                ? (V(
                    "FirebaseAuthCredentialsProvider",
                    "getToken aborted due to token change."
                  ),
                  this.getToken())
                : s
                ? (we(typeof s.accessToken == "string"),
                  new vp(s.accessToken, this.currentUser))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.auth && this.auth.removeAuthTokenListener(this.o);
  }
  u() {
    const e = this.auth && this.auth.getUid();
    return we(e === null || typeof e == "string"), new Ge(e);
  }
}
class Y_ {
  constructor(e, n, s, r) {
    (this.h = e),
      (this.l = n),
      (this.m = s),
      (this.g = r),
      (this.type = "FirstParty"),
      (this.user = Ge.FIRST_PARTY),
      (this.p = new Map());
  }
  I() {
    return this.g
      ? this.g()
      : (we(
          !(
            typeof this.h != "object" ||
            this.h === null ||
            !this.h.auth ||
            !this.h.auth.getAuthHeaderValueForFirstParty
          )
        ),
        this.h.auth.getAuthHeaderValueForFirstParty([]));
  }
  get headers() {
    this.p.set("X-Goog-AuthUser", this.l);
    const e = this.I();
    return (
      e && this.p.set("Authorization", e),
      this.m && this.p.set("X-Goog-Iam-Authorization-Token", this.m),
      this.p
    );
  }
}
class X_ {
  constructor(e, n, s, r) {
    (this.h = e), (this.l = n), (this.m = s), (this.g = r);
  }
  getToken() {
    return Promise.resolve(new Y_(this.h, this.l, this.m, this.g));
  }
  start(e, n) {
    e.enqueueRetryable(() => n(Ge.FIRST_PARTY));
  }
  shutdown() {}
  invalidateToken() {}
}
class J_ {
  constructor(e) {
    (this.value = e),
      (this.type = "AppCheck"),
      (this.headers = new Map()),
      e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
}
class Z_ {
  constructor(e) {
    (this.T = e),
      (this.forceRefresh = !1),
      (this.appCheck = null),
      (this.A = null);
  }
  start(e, n) {
    const s = (i) => {
      i.error != null &&
        V(
          "FirebaseAppCheckTokenProvider",
          `Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`
        );
      const o = i.token !== this.A;
      return (
        (this.A = i.token),
        V(
          "FirebaseAppCheckTokenProvider",
          `Received ${o ? "new" : "existing"} token.`
        ),
        o ? n(i.token) : Promise.resolve()
      );
    };
    this.o = (i) => {
      e.enqueueRetryable(() => s(i));
    };
    const r = (i) => {
      V("FirebaseAppCheckTokenProvider", "AppCheck detected"),
        (this.appCheck = i),
        this.appCheck.addTokenListener(this.o);
    };
    this.T.onInit((i) => r(i)),
      setTimeout(() => {
        if (!this.appCheck) {
          const i = this.T.getImmediate({ optional: !0 });
          i
            ? r(i)
            : V("FirebaseAppCheckTokenProvider", "AppCheck not yet detected");
        }
      }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return (
      (this.forceRefresh = !1),
      this.appCheck
        ? this.appCheck
            .getToken(e)
            .then((n) =>
              n
                ? (we(typeof n.token == "string"),
                  (this.A = n.token),
                  new J_(n.token))
                : null
            )
        : Promise.resolve(null)
    );
  }
  invalidateToken() {
    this.forceRefresh = !0;
  }
  shutdown() {
    this.appCheck && this.appCheck.removeTokenListener(this.o);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function eb(t) {
  const e = typeof self < "u" && (self.crypto || self.msCrypto),
    n = new Uint8Array(t);
  if (e && typeof e.getRandomValues == "function") e.getRandomValues(n);
  else for (let s = 0; s < t; s++) n[s] = Math.floor(256 * Math.random());
  return n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wp {
  static R() {
    const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      n = Math.floor(256 / e.length) * e.length;
    let s = "";
    for (; s.length < 20; ) {
      const r = eb(40);
      for (let i = 0; i < r.length; ++i)
        s.length < 20 && r[i] < n && (s += e.charAt(r[i] % e.length));
    }
    return s;
  }
}
function fe(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ts(t, e, n) {
  return t.length === e.length && t.every((s, r) => n(s, e[r]));
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Fe {
  constructor(e, n) {
    if (((this.seconds = e), (this.nanoseconds = n), n < 0))
      throw new L(
        E.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (n >= 1e9)
      throw new L(
        E.INVALID_ARGUMENT,
        "Timestamp nanoseconds out of range: " + n
      );
    if (e < -62135596800)
      throw new L(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new L(E.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  static now() {
    return Fe.fromMillis(Date.now());
  }
  static fromDate(e) {
    return Fe.fromMillis(e.getTime());
  }
  static fromMillis(e) {
    const n = Math.floor(e / 1e3),
      s = Math.floor(1e6 * (e - 1e3 * n));
    return new Fe(n, s);
  }
  toDate() {
    return new Date(this.toMillis());
  }
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds
      ? fe(this.nanoseconds, e.nanoseconds)
      : fe(this.seconds, e.seconds);
  }
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  toString() {
    return (
      "Timestamp(seconds=" +
      this.seconds +
      ", nanoseconds=" +
      this.nanoseconds +
      ")"
    );
  }
  toJSON() {
    return { seconds: this.seconds, nanoseconds: this.nanoseconds };
  }
  valueOf() {
    const e = this.seconds - -62135596800;
    return (
      String(e).padStart(12, "0") +
      "." +
      String(this.nanoseconds).padStart(9, "0")
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class X {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new X(e);
  }
  static min() {
    return new X(new Fe(0, 0));
  }
  static max() {
    return new X(new Fe(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xr {
  constructor(e, n, s) {
    n === void 0 ? (n = 0) : n > e.length && z(),
      s === void 0 ? (s = e.length - n) : s > e.length - n && z(),
      (this.segments = e),
      (this.offset = n),
      (this.len = s);
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return xr.comparator(this, e) === 0;
  }
  child(e) {
    const n = this.segments.slice(this.offset, this.limit());
    return (
      e instanceof xr
        ? e.forEach((s) => {
            n.push(s);
          })
        : n.push(e),
      this.construct(n)
    );
  }
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return (
      (e = e === void 0 ? 1 : e),
      this.construct(this.segments, this.offset + e, this.length - e)
    );
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return this.length === 0;
  }
  isPrefixOf(e) {
    if (e.length < this.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length) return !1;
    for (let n = 0; n < this.length; n++)
      if (this.get(n) !== e.get(n)) return !1;
    return !0;
  }
  forEach(e) {
    for (let n = this.offset, s = this.limit(); n < s; n++) e(this.segments[n]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, n) {
    const s = Math.min(e.length, n.length);
    for (let r = 0; r < s; r++) {
      const i = e.get(r),
        o = n.get(r);
      if (i < o) return -1;
      if (i > o) return 1;
    }
    return e.length < n.length ? -1 : e.length > n.length ? 1 : 0;
  }
}
class Ee extends xr {
  construct(e, n, s) {
    return new Ee(e, n, s);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  static fromString(...e) {
    const n = [];
    for (const s of e) {
      if (s.indexOf("//") >= 0)
        throw new L(
          E.INVALID_ARGUMENT,
          `Invalid segment (${s}). Paths must not contain // in them.`
        );
      n.push(...s.split("/").filter((r) => r.length > 0));
    }
    return new Ee(n);
  }
  static emptyPath() {
    return new Ee([]);
  }
}
const tb = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
class Ye extends xr {
  construct(e, n, s) {
    return new Ye(e, n, s);
  }
  static isValidIdentifier(e) {
    return tb.test(e);
  }
  canonicalString() {
    return this.toArray()
      .map(
        (e) => (
          (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
          Ye.isValidIdentifier(e) || (e = "`" + e + "`"),
          e
        )
      )
      .join(".");
  }
  toString() {
    return this.canonicalString();
  }
  isKeyField() {
    return this.length === 1 && this.get(0) === "__name__";
  }
  static keyField() {
    return new Ye(["__name__"]);
  }
  static fromServerFormat(e) {
    const n = [];
    let s = "",
      r = 0;
    const i = () => {
      if (s.length === 0)
        throw new L(
          E.INVALID_ARGUMENT,
          `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
        );
      n.push(s), (s = "");
    };
    let o = !1;
    for (; r < e.length; ) {
      const a = e[r];
      if (a === "\\") {
        if (r + 1 === e.length)
          throw new L(
            E.INVALID_ARGUMENT,
            "Path has trailing escape character: " + e
          );
        const c = e[r + 1];
        if (c !== "\\" && c !== "." && c !== "`")
          throw new L(
            E.INVALID_ARGUMENT,
            "Path has invalid escape sequence: " + e
          );
        (s += c), (r += 2);
      } else
        a === "`"
          ? ((o = !o), r++)
          : a !== "." || o
          ? ((s += a), r++)
          : (i(), r++);
    }
    if ((i(), o))
      throw new L(E.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new Ye(n);
  }
  static emptyPath() {
    return new Ye([]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class j {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new j(Ee.fromString(e));
  }
  static fromName(e) {
    return new j(Ee.fromString(e).popFirst(5));
  }
  static empty() {
    return new j(Ee.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return e !== null && Ee.comparator(this.path, e.path) === 0;
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, n) {
    return Ee.comparator(e.path, n.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  static fromSegments(e) {
    return new j(new Ee(e.slice()));
  }
}
function nb(t, e) {
  const n = t.toTimestamp().seconds,
    s = t.toTimestamp().nanoseconds + 1,
    r = X.fromTimestamp(s === 1e9 ? new Fe(n + 1, 0) : new Fe(n, s));
  return new vn(r, j.empty(), e);
}
function sb(t) {
  return new vn(t.readTime, t.key, -1);
}
class vn {
  constructor(e, n, s) {
    (this.readTime = e), (this.documentKey = n), (this.largestBatchId = s);
  }
  static min() {
    return new vn(X.min(), j.empty(), -1);
  }
  static max() {
    return new vn(X.max(), j.empty(), -1);
  }
}
function rb(t, e) {
  let n = t.readTime.compareTo(e.readTime);
  return n !== 0
    ? n
    : ((n = j.comparator(t.documentKey, e.documentKey)),
      n !== 0 ? n : fe(t.largestBatchId, e.largestBatchId));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ib =
  "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";
class ob {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ async function Ur(t) {
  if (t.code !== E.FAILED_PRECONDITION || t.message !== ib) throw t;
  V("LocalStore", "Unexpectedly lost primary lease");
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class C {
  constructor(e) {
    (this.nextCallback = null),
      (this.catchCallback = null),
      (this.result = void 0),
      (this.error = void 0),
      (this.isDone = !1),
      (this.callbackAttached = !1),
      e(
        (n) => {
          (this.isDone = !0),
            (this.result = n),
            this.nextCallback && this.nextCallback(n);
        },
        (n) => {
          (this.isDone = !0),
            (this.error = n),
            this.catchCallback && this.catchCallback(n);
        }
      );
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, n) {
    return (
      this.callbackAttached && z(),
      (this.callbackAttached = !0),
      this.isDone
        ? this.error
          ? this.wrapFailure(n, this.error)
          : this.wrapSuccess(e, this.result)
        : new C((s, r) => {
            (this.nextCallback = (i) => {
              this.wrapSuccess(e, i).next(s, r);
            }),
              (this.catchCallback = (i) => {
                this.wrapFailure(n, i).next(s, r);
              });
          })
    );
  }
  toPromise() {
    return new Promise((e, n) => {
      this.next(e, n);
    });
  }
  wrapUserFunction(e) {
    try {
      const n = e();
      return n instanceof C ? n : C.resolve(n);
    } catch (n) {
      return C.reject(n);
    }
  }
  wrapSuccess(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : C.resolve(n);
  }
  wrapFailure(e, n) {
    return e ? this.wrapUserFunction(() => e(n)) : C.reject(n);
  }
  static resolve(e) {
    return new C((n, s) => {
      n(e);
    });
  }
  static reject(e) {
    return new C((n, s) => {
      s(e);
    });
  }
  static waitFor(e) {
    return new C((n, s) => {
      let r = 0,
        i = 0,
        o = !1;
      e.forEach((a) => {
        ++r,
          a.next(
            () => {
              ++i, o && i === r && n();
            },
            (c) => s(c)
          );
      }),
        (o = !0),
        i === r && n();
    });
  }
  static or(e) {
    let n = C.resolve(!1);
    for (const s of e) n = n.next((r) => (r ? C.resolve(r) : s()));
    return n;
  }
  static forEach(e, n) {
    const s = [];
    return (
      e.forEach((r, i) => {
        s.push(n.call(this, r, i));
      }),
      this.waitFor(s)
    );
  }
  static mapArray(e, n) {
    return new C((s, r) => {
      const i = e.length,
        o = new Array(i);
      let a = 0;
      for (let c = 0; c < i; c++) {
        const l = c;
        n(e[l]).next(
          (u) => {
            (o[l] = u), ++a, a === i && s(o);
          },
          (u) => r(u)
        );
      }
    });
  }
  static doWhile(e, n) {
    return new C((s, r) => {
      const i = () => {
        e() === !0
          ? n().next(() => {
              i();
            }, r)
          : s();
      };
      i();
    });
  }
}
function Vr(t) {
  return t.name === "IndexedDbTransactionError";
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class tl {
  constructor(e, n) {
    (this.previousValue = e),
      n &&
        ((n.sequenceNumberHandler = (s) => this.ut(s)),
        (this.ct = (s) => n.writeSequenceNumber(s)));
  }
  ut(e) {
    return (
      (this.previousValue = Math.max(e, this.previousValue)), this.previousValue
    );
  }
  next() {
    const e = ++this.previousValue;
    return this.ct && this.ct(e), e;
  }
}
tl.at = -1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ab {
  constructor(e, n, s, r, i, o, a, c) {
    (this.databaseId = e),
      (this.appId = n),
      (this.persistenceKey = s),
      (this.host = r),
      (this.ssl = i),
      (this.forceLongPolling = o),
      (this.autoDetectLongPolling = a),
      (this.useFetchStreams = c);
  }
}
class Tr {
  constructor(e, n) {
    (this.projectId = e), (this.database = n || "(default)");
  }
  static empty() {
    return new Tr("", "");
  }
  get isDefaultDatabase() {
    return this.database === "(default)";
  }
  isEqual(e) {
    return (
      e instanceof Tr &&
      e.projectId === this.projectId &&
      e.database === this.database
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sh(t) {
  let e = 0;
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
  return e;
}
function Jn(t, e) {
  for (const n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}
function _p(t) {
  for (const e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Io(t) {
  return t == null;
}
function Fi(t) {
  return t === 0 && 1 / t == -1 / 0;
}
function cb(t) {
  return (
    typeof t == "number" &&
    Number.isInteger(t) &&
    !Fi(t) &&
    t <= Number.MAX_SAFE_INTEGER &&
    t >= Number.MIN_SAFE_INTEGER
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ze {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const n = atob(e);
    return new Ze(n);
  }
  static fromUint8Array(e) {
    const n = (function (s) {
      let r = "";
      for (let i = 0; i < s.length; ++i) r += String.fromCharCode(s[i]);
      return r;
    })(e);
    return new Ze(n);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () =>
        e < this.binaryString.length
          ? { value: this.binaryString.charCodeAt(e++), done: !1 }
          : { value: void 0, done: !0 },
    };
  }
  toBase64() {
    return (e = this.binaryString), btoa(e);
    var e;
  }
  toUint8Array() {
    return (function (e) {
      const n = new Uint8Array(e.length);
      for (let s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
      return n;
    })(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return fe(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
}
Ze.EMPTY_BYTE_STRING = new Ze("");
const lb = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function wn(t) {
  if ((we(!!t), typeof t == "string")) {
    let e = 0;
    const n = lb.exec(t);
    if ((we(!!n), n[1])) {
      let r = n[1];
      (r = (r + "000000000").substr(0, 9)), (e = Number(r));
    }
    const s = new Date(t);
    return { seconds: Math.floor(s.getTime() / 1e3), nanos: e };
  }
  return { seconds: Oe(t.seconds), nanos: Oe(t.nanos) };
}
function Oe(t) {
  return typeof t == "number" ? t : typeof t == "string" ? Number(t) : 0;
}
function Is(t) {
  return typeof t == "string" ? Ze.fromBase64String(t) : Ze.fromUint8Array(t);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function bp(t) {
  var e, n;
  return (
    ((n = (
      ((e = t == null ? void 0 : t.mapValue) === null || e === void 0
        ? void 0
        : e.fields) || {}
    ).__type__) === null || n === void 0
      ? void 0
      : n.stringValue) === "server_timestamp"
  );
}
function Ep(t) {
  const e = t.mapValue.fields.__previous_value__;
  return bp(e) ? Ep(e) : e;
}
function Ir(t) {
  const e = wn(t.mapValue.fields.__local_write_time__.timestampValue);
  return new Fe(e.seconds, e.nanos);
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const ii = {
  mapValue: { fields: { __type__: { stringValue: "__max__" } } },
};
function Qn(t) {
  return "nullValue" in t
    ? 0
    : "booleanValue" in t
    ? 1
    : "integerValue" in t || "doubleValue" in t
    ? 2
    : "timestampValue" in t
    ? 3
    : "stringValue" in t
    ? 5
    : "bytesValue" in t
    ? 6
    : "referenceValue" in t
    ? 7
    : "geoPointValue" in t
    ? 8
    : "arrayValue" in t
    ? 9
    : "mapValue" in t
    ? bp(t)
      ? 4
      : ub(t)
      ? 9007199254740991
      : 10
    : z();
}
function jt(t, e) {
  if (t === e) return !0;
  const n = Qn(t);
  if (n !== Qn(e)) return !1;
  switch (n) {
    case 0:
    case 9007199254740991:
      return !0;
    case 1:
      return t.booleanValue === e.booleanValue;
    case 4:
      return Ir(t).isEqual(Ir(e));
    case 3:
      return (function (s, r) {
        if (
          typeof s.timestampValue == "string" &&
          typeof r.timestampValue == "string" &&
          s.timestampValue.length === r.timestampValue.length
        )
          return s.timestampValue === r.timestampValue;
        const i = wn(s.timestampValue),
          o = wn(r.timestampValue);
        return i.seconds === o.seconds && i.nanos === o.nanos;
      })(t, e);
    case 5:
      return t.stringValue === e.stringValue;
    case 6:
      return (function (s, r) {
        return Is(s.bytesValue).isEqual(Is(r.bytesValue));
      })(t, e);
    case 7:
      return t.referenceValue === e.referenceValue;
    case 8:
      return (function (s, r) {
        return (
          Oe(s.geoPointValue.latitude) === Oe(r.geoPointValue.latitude) &&
          Oe(s.geoPointValue.longitude) === Oe(r.geoPointValue.longitude)
        );
      })(t, e);
    case 2:
      return (function (s, r) {
        if ("integerValue" in s && "integerValue" in r)
          return Oe(s.integerValue) === Oe(r.integerValue);
        if ("doubleValue" in s && "doubleValue" in r) {
          const i = Oe(s.doubleValue),
            o = Oe(r.doubleValue);
          return i === o ? Fi(i) === Fi(o) : isNaN(i) && isNaN(o);
        }
        return !1;
      })(t, e);
    case 9:
      return Ts(t.arrayValue.values || [], e.arrayValue.values || [], jt);
    case 10:
      return (function (s, r) {
        const i = s.mapValue.fields || {},
          o = r.mapValue.fields || {};
        if (sh(i) !== sh(o)) return !1;
        for (const a in i)
          if (i.hasOwnProperty(a) && (o[a] === void 0 || !jt(i[a], o[a])))
            return !1;
        return !0;
      })(t, e);
    default:
      return z();
  }
}
function Cr(t, e) {
  return (t.values || []).find((n) => jt(n, e)) !== void 0;
}
function Cs(t, e) {
  if (t === e) return 0;
  const n = Qn(t),
    s = Qn(e);
  if (n !== s) return fe(n, s);
  switch (n) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return fe(t.booleanValue, e.booleanValue);
    case 2:
      return (function (r, i) {
        const o = Oe(r.integerValue || r.doubleValue),
          a = Oe(i.integerValue || i.doubleValue);
        return o < a
          ? -1
          : o > a
          ? 1
          : o === a
          ? 0
          : isNaN(o)
          ? isNaN(a)
            ? 0
            : -1
          : 1;
      })(t, e);
    case 3:
      return rh(t.timestampValue, e.timestampValue);
    case 4:
      return rh(Ir(t), Ir(e));
    case 5:
      return fe(t.stringValue, e.stringValue);
    case 6:
      return (function (r, i) {
        const o = Is(r),
          a = Is(i);
        return o.compareTo(a);
      })(t.bytesValue, e.bytesValue);
    case 7:
      return (function (r, i) {
        const o = r.split("/"),
          a = i.split("/");
        for (let c = 0; c < o.length && c < a.length; c++) {
          const l = fe(o[c], a[c]);
          if (l !== 0) return l;
        }
        return fe(o.length, a.length);
      })(t.referenceValue, e.referenceValue);
    case 8:
      return (function (r, i) {
        const o = fe(Oe(r.latitude), Oe(i.latitude));
        return o !== 0 ? o : fe(Oe(r.longitude), Oe(i.longitude));
      })(t.geoPointValue, e.geoPointValue);
    case 9:
      return (function (r, i) {
        const o = r.values || [],
          a = i.values || [];
        for (let c = 0; c < o.length && c < a.length; ++c) {
          const l = Cs(o[c], a[c]);
          if (l) return l;
        }
        return fe(o.length, a.length);
      })(t.arrayValue, e.arrayValue);
    case 10:
      return (function (r, i) {
        if (r === ii.mapValue && i === ii.mapValue) return 0;
        if (r === ii.mapValue) return 1;
        if (i === ii.mapValue) return -1;
        const o = r.fields || {},
          a = Object.keys(o),
          c = i.fields || {},
          l = Object.keys(c);
        a.sort(), l.sort();
        for (let u = 0; u < a.length && u < l.length; ++u) {
          const h = fe(a[u], l[u]);
          if (h !== 0) return h;
          const f = Cs(o[a[u]], c[l[u]]);
          if (f !== 0) return f;
        }
        return fe(a.length, l.length);
      })(t.mapValue, e.mapValue);
    default:
      throw z();
  }
}
function rh(t, e) {
  if (typeof t == "string" && typeof e == "string" && t.length === e.length)
    return fe(t, e);
  const n = wn(t),
    s = wn(e),
    r = fe(n.seconds, s.seconds);
  return r !== 0 ? r : fe(n.nanos, s.nanos);
}
function Ss(t) {
  return Xa(t);
}
function Xa(t) {
  return "nullValue" in t
    ? "null"
    : "booleanValue" in t
    ? "" + t.booleanValue
    : "integerValue" in t
    ? "" + t.integerValue
    : "doubleValue" in t
    ? "" + t.doubleValue
    : "timestampValue" in t
    ? (function (s) {
        const r = wn(s);
        return `time(${r.seconds},${r.nanos})`;
      })(t.timestampValue)
    : "stringValue" in t
    ? t.stringValue
    : "bytesValue" in t
    ? Is(t.bytesValue).toBase64()
    : "referenceValue" in t
    ? ((n = t.referenceValue), j.fromName(n).toString())
    : "geoPointValue" in t
    ? `geo(${(e = t.geoPointValue).latitude},${e.longitude})`
    : "arrayValue" in t
    ? (function (s) {
        let r = "[",
          i = !0;
        for (const o of s.values || []) i ? (i = !1) : (r += ","), (r += Xa(o));
        return r + "]";
      })(t.arrayValue)
    : "mapValue" in t
    ? (function (s) {
        const r = Object.keys(s.fields || {}).sort();
        let i = "{",
          o = !0;
        for (const a of r)
          o ? (o = !1) : (i += ","), (i += `${a}:${Xa(s.fields[a])}`);
        return i + "}";
      })(t.mapValue)
    : z();
  var e, n;
}
function ih(t, e) {
  return {
    referenceValue: `projects/${t.projectId}/databases/${
      t.database
    }/documents/${e.path.canonicalString()}`,
  };
}
function Ja(t) {
  return !!t && "integerValue" in t;
}
function nl(t) {
  return !!t && "arrayValue" in t;
}
function oh(t) {
  return !!t && "nullValue" in t;
}
function ah(t) {
  return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}
function mi(t) {
  return !!t && "mapValue" in t;
}
function ir(t) {
  if (t.geoPointValue)
    return { geoPointValue: Object.assign({}, t.geoPointValue) };
  if (t.timestampValue && typeof t.timestampValue == "object")
    return { timestampValue: Object.assign({}, t.timestampValue) };
  if (t.mapValue) {
    const e = { mapValue: { fields: {} } };
    return Jn(t.mapValue.fields, (n, s) => (e.mapValue.fields[n] = ir(s))), e;
  }
  if (t.arrayValue) {
    const e = { arrayValue: { values: [] } };
    for (let n = 0; n < (t.arrayValue.values || []).length; ++n)
      e.arrayValue.values[n] = ir(t.arrayValue.values[n]);
    return e;
  }
  return Object.assign({}, t);
}
function ub(t) {
  return (
    (((t.mapValue || {}).fields || {}).__type__ || {}).stringValue === "__max__"
  );
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $i {
  constructor(e, n) {
    (this.position = e), (this.inclusive = n);
  }
}
function ch(t, e, n) {
  let s = 0;
  for (let r = 0; r < t.position.length; r++) {
    const i = e[r],
      o = t.position[r];
    if (
      (i.field.isKeyField()
        ? (s = j.comparator(j.fromName(o.referenceValue), n.key))
        : (s = Cs(o, n.data.field(i.field))),
      i.dir === "desc" && (s *= -1),
      s !== 0)
    )
      break;
  }
  return s;
}
function lh(t, e) {
  if (t === null) return e === null;
  if (
    e === null ||
    t.inclusive !== e.inclusive ||
    t.position.length !== e.position.length
  )
    return !1;
  for (let n = 0; n < t.position.length; n++)
    if (!jt(t.position[n], e.position[n])) return !1;
  return !0;
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xp {}
class Pe extends xp {
  constructor(e, n, s) {
    super(), (this.field = e), (this.op = n), (this.value = s);
  }
  static create(e, n, s) {
    return e.isKeyField()
      ? n === "in" || n === "not-in"
        ? this.createKeyFieldInFilter(e, n, s)
        : new fb(e, n, s)
      : n === "array-contains"
      ? new mb(e, s)
      : n === "in"
      ? new gb(e, s)
      : n === "not-in"
      ? new yb(e, s)
      : n === "array-contains-any"
      ? new vb(e, s)
      : new Pe(e, n, s);
  }
  static createKeyFieldInFilter(e, n, s) {
    return n === "in" ? new db(e, s) : new pb(e, s);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return this.op === "!="
      ? n !== null && this.matchesComparison(Cs(n, this.value))
      : n !== null &&
          Qn(this.value) === Qn(n) &&
          this.matchesComparison(Cs(n, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return e === 0;
      case "!=":
        return e !== 0;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return z();
    }
  }
  isInequality() {
    return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
  getFirstInequalityField() {
    return this.isInequality() ? this.field : null;
  }
}
class Nt extends xp {
  constructor(e, n) {
    super(), (this.filters = e), (this.op = n), (this.ht = null);
  }
  static create(e, n) {
    return new Nt(e, n);
  }
  matches(e) {
    return Tp(this)
      ? this.filters.find((n) => !n.matches(e)) === void 0
      : this.filters.find((n) => n.matches(e)) !== void 0;
  }
  getFlattenedFilters() {
    return (
      this.ht !== null ||
        (this.ht = this.filters.reduce(
          (e, n) => e.concat(n.getFlattenedFilters()),
          []
        )),
      this.ht
    );
  }
  getFilters() {
    return Object.assign([], this.filters);
  }
  getFirstInequalityField() {
    const e = this.lt((n) => n.isInequality());
    return e !== null ? e.field : null;
  }
  lt(e) {
    for (const n of this.getFlattenedFilters()) if (e(n)) return n;
    return null;
  }
}
function Tp(t) {
  return t.op === "and";
}
function Ip(t) {
  return hb(t) && Tp(t);
}
function hb(t) {
  for (const e of t.filters) if (e instanceof Nt) return !1;
  return !0;
}
function Za(t) {
  if (t instanceof Pe)
    return t.field.canonicalString() + t.op.toString() + Ss(t.value);
  if (Ip(t)) return t.filters.map((e) => Za(e)).join(",");
  {
    const e = t.filters.map((n) => Za(n)).join(",");
    return `${t.op}(${e})`;
  }
}
function Cp(t, e) {
  return t instanceof Pe
    ? (function (n, s) {
        return (
          s instanceof Pe &&
          n.op === s.op &&
          n.field.isEqual(s.field) &&
          jt(n.value, s.value)
        );
      })(t, e)
    : t instanceof Nt
    ? (function (n, s) {
        return s instanceof Nt &&
          n.op === s.op &&
          n.filters.length === s.filters.length
          ? n.filters.reduce((r, i, o) => r && Cp(i, s.filters[o]), !0)
          : !1;
      })(t, e)
    : void z();
}
function Sp(t) {
  return t instanceof Pe
    ? (function (e) {
        return `${e.field.canonicalString()} ${e.op} ${Ss(e.value)}`;
      })(t)
    : t instanceof Nt
    ? (function (e) {
        return e.op.toString() + " {" + e.getFilters().map(Sp).join(" ,") + "}";
      })(t)
    : "Filter";
}
class fb extends Pe {
  constructor(e, n, s) {
    super(e, n, s), (this.key = j.fromName(s.referenceValue));
  }
  matches(e) {
    const n = j.comparator(e.key, this.key);
    return this.matchesComparison(n);
  }
}
class db extends Pe {
  constructor(e, n) {
    super(e, "in", n), (this.keys = Ap("in", n));
  }
  matches(e) {
    return this.keys.some((n) => n.isEqual(e.key));
  }
}
class pb extends Pe {
  constructor(e, n) {
    super(e, "not-in", n), (this.keys = Ap("not-in", n));
  }
  matches(e) {
    return !this.keys.some((n) => n.isEqual(e.key));
  }
}
function Ap(t, e) {
  var n;
  return (
    ((n = e.arrayValue) === null || n === void 0 ? void 0 : n.values) || []
  ).map((s) => j.fromName(s.referenceValue));
}
class mb extends Pe {
  constructor(e, n) {
    super(e, "array-contains", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return nl(n) && Cr(n.arrayValue, this.value);
  }
}
class gb extends Pe {
  constructor(e, n) {
    super(e, "in", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return n !== null && Cr(this.value.arrayValue, n);
  }
}
class yb extends Pe {
  constructor(e, n) {
    super(e, "not-in", n);
  }
  matches(e) {
    if (Cr(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
    const n = e.data.field(this.field);
    return n !== null && !Cr(this.value.arrayValue, n);
  }
}
class vb extends Pe {
  constructor(e, n) {
    super(e, "array-contains-any", n);
  }
  matches(e) {
    const n = e.data.field(this.field);
    return (
      !(!nl(n) || !n.arrayValue.values) &&
      n.arrayValue.values.some((s) => Cr(this.value.arrayValue, s))
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ds {
  constructor(e, n = "asc") {
    (this.field = e), (this.dir = n);
  }
}
function wb(t, e) {
  return t.dir === e.dir && t.field.isEqual(e.field);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ue {
  constructor(e, n) {
    (this.comparator = e), (this.root = n || He.EMPTY);
  }
  insert(e, n) {
    return new Ue(
      this.comparator,
      this.root
        .insert(e, n, this.comparator)
        .copy(null, null, He.BLACK, null, null)
    );
  }
  remove(e) {
    return new Ue(
      this.comparator,
      this.root
        .remove(e, this.comparator)
        .copy(null, null, He.BLACK, null, null)
    );
  }
  get(e) {
    let n = this.root;
    for (; !n.isEmpty(); ) {
      const s = this.comparator(e, n.key);
      if (s === 0) return n.value;
      s < 0 ? (n = n.left) : s > 0 && (n = n.right);
    }
    return null;
  }
  indexOf(e) {
    let n = 0,
      s = this.root;
    for (; !s.isEmpty(); ) {
      const r = this.comparator(e, s.key);
      if (r === 0) return n + s.left.size;
      r < 0 ? (s = s.left) : ((n += s.left.size + 1), (s = s.right));
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  get size() {
    return this.root.size;
  }
  minKey() {
    return this.root.minKey();
  }
  maxKey() {
    return this.root.maxKey();
  }
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((n, s) => (e(n, s), !1));
  }
  toString() {
    const e = [];
    return (
      this.inorderTraversal((n, s) => (e.push(`${n}:${s}`), !1)),
      `{${e.join(", ")}}`
    );
  }
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  getIterator() {
    return new oi(this.root, null, this.comparator, !1);
  }
  getIteratorFrom(e) {
    return new oi(this.root, e, this.comparator, !1);
  }
  getReverseIterator() {
    return new oi(this.root, null, this.comparator, !0);
  }
  getReverseIteratorFrom(e) {
    return new oi(this.root, e, this.comparator, !0);
  }
}
class oi {
  constructor(e, n, s, r) {
    (this.isReverse = r), (this.nodeStack = []);
    let i = 1;
    for (; !e.isEmpty(); )
      if (((i = n ? s(e.key, n) : 1), n && r && (i *= -1), i < 0))
        e = this.isReverse ? e.left : e.right;
      else {
        if (i === 0) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const n = { key: e.key, value: e.value };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.right);
    else for (e = e.right; !e.isEmpty(); ) this.nodeStack.push(e), (e = e.left);
    return n;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (this.nodeStack.length === 0) return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return { key: e.key, value: e.value };
  }
}
class He {
  constructor(e, n, s, r, i) {
    (this.key = e),
      (this.value = n),
      (this.color = s ?? He.RED),
      (this.left = r ?? He.EMPTY),
      (this.right = i ?? He.EMPTY),
      (this.size = this.left.size + 1 + this.right.size);
  }
  copy(e, n, s, r, i) {
    return new He(
      e ?? this.key,
      n ?? this.value,
      s ?? this.color,
      r ?? this.left,
      i ?? this.right
    );
  }
  isEmpty() {
    return !1;
  }
  inorderTraversal(e) {
    return (
      this.left.inorderTraversal(e) ||
      e(this.key, this.value) ||
      this.right.inorderTraversal(e)
    );
  }
  reverseTraversal(e) {
    return (
      this.right.reverseTraversal(e) ||
      e(this.key, this.value) ||
      this.left.reverseTraversal(e)
    );
  }
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  minKey() {
    return this.min().key;
  }
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  insert(e, n, s) {
    let r = this;
    const i = s(e, r.key);
    return (
      (r =
        i < 0
          ? r.copy(null, null, null, r.left.insert(e, n, s), null)
          : i === 0
          ? r.copy(null, n, null, null, null)
          : r.copy(null, null, null, null, r.right.insert(e, n, s))),
      r.fixUp()
    );
  }
  removeMin() {
    if (this.left.isEmpty()) return He.EMPTY;
    let e = this;
    return (
      e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
      (e = e.copy(null, null, null, e.left.removeMin(), null)),
      e.fixUp()
    );
  }
  remove(e, n) {
    let s,
      r = this;
    if (n(e, r.key) < 0)
      r.left.isEmpty() ||
        r.left.isRed() ||
        r.left.left.isRed() ||
        (r = r.moveRedLeft()),
        (r = r.copy(null, null, null, r.left.remove(e, n), null));
    else {
      if (
        (r.left.isRed() && (r = r.rotateRight()),
        r.right.isEmpty() ||
          r.right.isRed() ||
          r.right.left.isRed() ||
          (r = r.moveRedRight()),
        n(e, r.key) === 0)
      ) {
        if (r.right.isEmpty()) return He.EMPTY;
        (s = r.right.min()),
          (r = r.copy(s.key, s.value, null, null, r.right.removeMin()));
      }
      r = r.copy(null, null, null, null, r.right.remove(e, n));
    }
    return r.fixUp();
  }
  isRed() {
    return this.color;
  }
  fixUp() {
    let e = this;
    return (
      e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
      e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
      e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
      e
    );
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return (
      e.right.left.isRed() &&
        ((e = e.copy(null, null, null, null, e.right.rotateRight())),
        (e = e.rotateLeft()),
        (e = e.colorFlip())),
      e
    );
  }
  moveRedRight() {
    let e = this.colorFlip();
    return (
      e.left.left.isRed() && ((e = e.rotateRight()), (e = e.colorFlip())), e
    );
  }
  rotateLeft() {
    const e = this.copy(null, null, He.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, He.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null),
      n = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, n);
  }
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  check() {
    if ((this.isRed() && this.left.isRed()) || this.right.isRed()) throw z();
    const e = this.left.check();
    if (e !== this.right.check()) throw z();
    return e + (this.isRed() ? 0 : 1);
  }
}
(He.EMPTY = null), (He.RED = !0), (He.BLACK = !1);
He.EMPTY = new (class {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw z();
  }
  get value() {
    throw z();
  }
  get color() {
    throw z();
  }
  get left() {
    throw z();
  }
  get right() {
    throw z();
  }
  copy(t, e, n, s, r) {
    return this;
  }
  insert(t, e, n) {
    return new He(t, e);
  }
  remove(t, e) {
    return this;
  }
  isEmpty() {
    return !0;
  }
  inorderTraversal(t) {
    return !1;
  }
  reverseTraversal(t) {
    return !1;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return !1;
  }
  checkMaxDepth() {
    return !0;
  }
  check() {
    return 0;
  }
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $e {
  constructor(e) {
    (this.comparator = e), (this.data = new Ue(this.comparator));
  }
  has(e) {
    return this.data.get(e) !== null;
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  forEach(e) {
    this.data.inorderTraversal((n, s) => (e(n), !1));
  }
  forEachInRange(e, n) {
    const s = this.data.getIteratorFrom(e[0]);
    for (; s.hasNext(); ) {
      const r = s.getNext();
      if (this.comparator(r.key, e[1]) >= 0) return;
      n(r.key);
    }
  }
  forEachWhile(e, n) {
    let s;
    for (
      s = n !== void 0 ? this.data.getIteratorFrom(n) : this.data.getIterator();
      s.hasNext();

    )
      if (!e(s.getNext().key)) return;
  }
  firstAfterOrEqual(e) {
    const n = this.data.getIteratorFrom(e);
    return n.hasNext() ? n.getNext().key : null;
  }
  getIterator() {
    return new uh(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new uh(this.data.getIteratorFrom(e));
  }
  add(e) {
    return this.copy(this.data.remove(e).insert(e, !0));
  }
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let n = this;
    return (
      n.size < e.size && ((n = e), (e = this)),
      e.forEach((s) => {
        n = n.add(s);
      }),
      n
    );
  }
  isEqual(e) {
    if (!(e instanceof $e) || this.size !== e.size) return !1;
    const n = this.data.getIterator(),
      s = e.data.getIterator();
    for (; n.hasNext(); ) {
      const r = n.getNext().key,
        i = s.getNext().key;
      if (this.comparator(r, i) !== 0) return !1;
    }
    return !0;
  }
  toArray() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n);
      }),
      e
    );
  }
  toString() {
    const e = [];
    return this.forEach((n) => e.push(n)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const n = new $e(this.comparator);
    return (n.data = e), n;
  }
}
class uh {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dt {
  constructor(e) {
    (this.fields = e), e.sort(Ye.comparator);
  }
  static empty() {
    return new dt([]);
  }
  unionWith(e) {
    let n = new $e(Ye.comparator);
    for (const s of this.fields) n = n.add(s);
    for (const s of e) n = n.add(s);
    return new dt(n.toArray());
  }
  covers(e) {
    for (const n of this.fields) if (n.isPrefixOf(e)) return !0;
    return !1;
  }
  isEqual(e) {
    return Ts(this.fields, e.fields, (n, s) => n.isEqual(s));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class at {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new at({ mapValue: {} });
  }
  field(e) {
    if (e.isEmpty()) return this.value;
    {
      let n = this.value;
      for (let s = 0; s < e.length - 1; ++s)
        if (((n = (n.mapValue.fields || {})[e.get(s)]), !mi(n))) return null;
      return (n = (n.mapValue.fields || {})[e.lastSegment()]), n || null;
    }
  }
  set(e, n) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = ir(n);
  }
  setAll(e) {
    let n = Ye.emptyPath(),
      s = {},
      r = [];
    e.forEach((o, a) => {
      if (!n.isImmediateParentOf(a)) {
        const c = this.getFieldsMap(n);
        this.applyChanges(c, s, r), (s = {}), (r = []), (n = a.popLast());
      }
      o ? (s[a.lastSegment()] = ir(o)) : r.push(a.lastSegment());
    });
    const i = this.getFieldsMap(n);
    this.applyChanges(i, s, r);
  }
  delete(e) {
    const n = this.field(e.popLast());
    mi(n) && n.mapValue.fields && delete n.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return jt(this.value, e.value);
  }
  getFieldsMap(e) {
    let n = this.value;
    n.mapValue.fields || (n.mapValue = { fields: {} });
    for (let s = 0; s < e.length; ++s) {
      let r = n.mapValue.fields[e.get(s)];
      (mi(r) && r.mapValue.fields) ||
        ((r = { mapValue: { fields: {} } }), (n.mapValue.fields[e.get(s)] = r)),
        (n = r);
    }
    return n.mapValue.fields;
  }
  applyChanges(e, n, s) {
    Jn(n, (r, i) => (e[r] = i));
    for (const r of s) delete e[r];
  }
  clone() {
    return new at(ir(this.value));
  }
}
function kp(t) {
  const e = [];
  return (
    Jn(t.fields, (n, s) => {
      const r = new Ye([n]);
      if (mi(s)) {
        const i = kp(s.mapValue).fields;
        if (i.length === 0) e.push(r);
        else for (const o of i) e.push(r.child(o));
      } else e.push(r);
    }),
    new dt(e)
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class We {
  constructor(e, n, s, r, i, o, a) {
    (this.key = e),
      (this.documentType = n),
      (this.version = s),
      (this.readTime = r),
      (this.createTime = i),
      (this.data = o),
      (this.documentState = a);
  }
  static newInvalidDocument(e) {
    return new We(e, 0, X.min(), X.min(), X.min(), at.empty(), 0);
  }
  static newFoundDocument(e, n, s, r) {
    return new We(e, 1, n, X.min(), s, r, 0);
  }
  static newNoDocument(e, n) {
    return new We(e, 2, n, X.min(), X.min(), at.empty(), 0);
  }
  static newUnknownDocument(e, n) {
    return new We(e, 3, n, X.min(), X.min(), at.empty(), 2);
  }
  convertToFoundDocument(e, n) {
    return (
      !this.createTime.isEqual(X.min()) ||
        (this.documentType !== 2 && this.documentType !== 0) ||
        (this.createTime = e),
      (this.version = e),
      (this.documentType = 1),
      (this.data = n),
      (this.documentState = 0),
      this
    );
  }
  convertToNoDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 2),
      (this.data = at.empty()),
      (this.documentState = 0),
      this
    );
  }
  convertToUnknownDocument(e) {
    return (
      (this.version = e),
      (this.documentType = 3),
      (this.data = at.empty()),
      (this.documentState = 2),
      this
    );
  }
  setHasCommittedMutations() {
    return (this.documentState = 2), this;
  }
  setHasLocalMutations() {
    return (this.documentState = 1), (this.version = X.min()), this;
  }
  setReadTime(e) {
    return (this.readTime = e), this;
  }
  get hasLocalMutations() {
    return this.documentState === 1;
  }
  get hasCommittedMutations() {
    return this.documentState === 2;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return this.documentType !== 0;
  }
  isFoundDocument() {
    return this.documentType === 1;
  }
  isNoDocument() {
    return this.documentType === 2;
  }
  isUnknownDocument() {
    return this.documentType === 3;
  }
  isEqual(e) {
    return (
      e instanceof We &&
      this.key.isEqual(e.key) &&
      this.version.isEqual(e.version) &&
      this.documentType === e.documentType &&
      this.documentState === e.documentState &&
      this.data.isEqual(e.data)
    );
  }
  mutableCopy() {
    return new We(
      this.key,
      this.documentType,
      this.version,
      this.readTime,
      this.createTime,
      this.data.clone(),
      this.documentState
    );
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(
      this.data.value
    )}, {createTime: ${this.createTime}}), {documentType: ${
      this.documentType
    }}), {documentState: ${this.documentState}})`;
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _b {
  constructor(e, n = null, s = [], r = [], i = null, o = null, a = null) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.orderBy = s),
      (this.filters = r),
      (this.limit = i),
      (this.startAt = o),
      (this.endAt = a),
      (this.ft = null);
  }
}
function hh(t, e = null, n = [], s = [], r = null, i = null, o = null) {
  return new _b(t, e, n, s, r, i, o);
}
function sl(t) {
  const e = ee(t);
  if (e.ft === null) {
    let n = e.path.canonicalString();
    e.collectionGroup !== null && (n += "|cg:" + e.collectionGroup),
      (n += "|f:"),
      (n += e.filters.map((s) => Za(s)).join(",")),
      (n += "|ob:"),
      (n += e.orderBy
        .map((s) =>
          (function (r) {
            return r.field.canonicalString() + r.dir;
          })(s)
        )
        .join(",")),
      Io(e.limit) || ((n += "|l:"), (n += e.limit)),
      e.startAt &&
        ((n += "|lb:"),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((s) => Ss(s)).join(","))),
      e.endAt &&
        ((n += "|ub:"),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((s) => Ss(s)).join(","))),
      (e.ft = n);
  }
  return e.ft;
}
function rl(t, e) {
  if (t.limit !== e.limit || t.orderBy.length !== e.orderBy.length) return !1;
  for (let n = 0; n < t.orderBy.length; n++)
    if (!wb(t.orderBy[n], e.orderBy[n])) return !1;
  if (t.filters.length !== e.filters.length) return !1;
  for (let n = 0; n < t.filters.length; n++)
    if (!Cp(t.filters[n], e.filters[n])) return !1;
  return (
    t.collectionGroup === e.collectionGroup &&
    !!t.path.isEqual(e.path) &&
    !!lh(t.startAt, e.startAt) &&
    lh(t.endAt, e.endAt)
  );
}
function ec(t) {
  return (
    j.isDocumentKey(t.path) &&
    t.collectionGroup === null &&
    t.filters.length === 0
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Us {
  constructor(
    e,
    n = null,
    s = [],
    r = [],
    i = null,
    o = "F",
    a = null,
    c = null
  ) {
    (this.path = e),
      (this.collectionGroup = n),
      (this.explicitOrderBy = s),
      (this.filters = r),
      (this.limit = i),
      (this.limitType = o),
      (this.startAt = a),
      (this.endAt = c),
      (this.dt = null),
      (this._t = null),
      this.startAt,
      this.endAt;
  }
}
function bb(t, e, n, s, r, i, o, a) {
  return new Us(t, e, n, s, r, i, o, a);
}
function Co(t) {
  return new Us(t);
}
function fh(t) {
  return (
    t.filters.length === 0 &&
    t.limit === null &&
    t.startAt == null &&
    t.endAt == null &&
    (t.explicitOrderBy.length === 0 ||
      (t.explicitOrderBy.length === 1 &&
        t.explicitOrderBy[0].field.isKeyField()))
  );
}
function il(t) {
  return t.explicitOrderBy.length > 0 ? t.explicitOrderBy[0].field : null;
}
function So(t) {
  for (const e of t.filters) {
    const n = e.getFirstInequalityField();
    if (n !== null) return n;
  }
  return null;
}
function Rp(t) {
  return t.collectionGroup !== null;
}
function ps(t) {
  const e = ee(t);
  if (e.dt === null) {
    e.dt = [];
    const n = So(e),
      s = il(e);
    if (n !== null && s === null)
      n.isKeyField() || e.dt.push(new ds(n)),
        e.dt.push(new ds(Ye.keyField(), "asc"));
    else {
      let r = !1;
      for (const i of e.explicitOrderBy)
        e.dt.push(i), i.field.isKeyField() && (r = !0);
      if (!r) {
        const i =
          e.explicitOrderBy.length > 0
            ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
            : "asc";
        e.dt.push(new ds(Ye.keyField(), i));
      }
    }
  }
  return e.dt;
}
function Zt(t) {
  const e = ee(t);
  if (!e._t)
    if (e.limitType === "F")
      e._t = hh(
        e.path,
        e.collectionGroup,
        ps(e),
        e.filters,
        e.limit,
        e.startAt,
        e.endAt
      );
    else {
      const n = [];
      for (const i of ps(e)) {
        const o = i.dir === "desc" ? "asc" : "desc";
        n.push(new ds(i.field, o));
      }
      const s = e.endAt ? new $i(e.endAt.position, e.endAt.inclusive) : null,
        r = e.startAt ? new $i(e.startAt.position, e.startAt.inclusive) : null;
      e._t = hh(e.path, e.collectionGroup, n, e.filters, e.limit, s, r);
    }
  return e._t;
}
function tc(t, e) {
  e.getFirstInequalityField(), So(t);
  const n = t.filters.concat([e]);
  return new Us(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    n,
    t.limit,
    t.limitType,
    t.startAt,
    t.endAt
  );
}
function nc(t, e, n) {
  return new Us(
    t.path,
    t.collectionGroup,
    t.explicitOrderBy.slice(),
    t.filters.slice(),
    e,
    n,
    t.startAt,
    t.endAt
  );
}
function Ao(t, e) {
  return rl(Zt(t), Zt(e)) && t.limitType === e.limitType;
}
function Dp(t) {
  return `${sl(Zt(t))}|lt:${t.limitType}`;
}
function sc(t) {
  return `Query(target=${(function (e) {
    let n = e.path.canonicalString();
    return (
      e.collectionGroup !== null &&
        (n += " collectionGroup=" + e.collectionGroup),
      e.filters.length > 0 &&
        (n += `, filters: [${e.filters.map((s) => Sp(s)).join(", ")}]`),
      Io(e.limit) || (n += ", limit: " + e.limit),
      e.orderBy.length > 0 &&
        (n += `, orderBy: [${e.orderBy
          .map((s) =>
            (function (r) {
              return `${r.field.canonicalString()} (${r.dir})`;
            })(s)
          )
          .join(", ")}]`),
      e.startAt &&
        ((n += ", startAt: "),
        (n += e.startAt.inclusive ? "b:" : "a:"),
        (n += e.startAt.position.map((s) => Ss(s)).join(","))),
      e.endAt &&
        ((n += ", endAt: "),
        (n += e.endAt.inclusive ? "a:" : "b:"),
        (n += e.endAt.position.map((s) => Ss(s)).join(","))),
      `Target(${n})`
    );
  })(Zt(t))}; limitType=${t.limitType})`;
}
function ol(t, e) {
  return (
    e.isFoundDocument() &&
    (function (n, s) {
      const r = s.key.path;
      return n.collectionGroup !== null
        ? s.key.hasCollectionId(n.collectionGroup) && n.path.isPrefixOf(r)
        : j.isDocumentKey(n.path)
        ? n.path.isEqual(r)
        : n.path.isImmediateParentOf(r);
    })(t, e) &&
    (function (n, s) {
      for (const r of ps(n))
        if (!r.field.isKeyField() && s.data.field(r.field) === null) return !1;
      return !0;
    })(t, e) &&
    (function (n, s) {
      for (const r of n.filters) if (!r.matches(s)) return !1;
      return !0;
    })(t, e) &&
    (function (n, s) {
      return !(
        (n.startAt &&
          !(function (r, i, o) {
            const a = ch(r, i, o);
            return r.inclusive ? a <= 0 : a < 0;
          })(n.startAt, ps(n), s)) ||
        (n.endAt &&
          !(function (r, i, o) {
            const a = ch(r, i, o);
            return r.inclusive ? a >= 0 : a > 0;
          })(n.endAt, ps(n), s))
      );
    })(t, e)
  );
}
function Eb(t) {
  return (
    t.collectionGroup ||
    (t.path.length % 2 == 1
      ? t.path.lastSegment()
      : t.path.get(t.path.length - 2))
  );
}
function Np(t) {
  return (e, n) => {
    let s = !1;
    for (const r of ps(t)) {
      const i = xb(r, e, n);
      if (i !== 0) return i;
      s = s || r.field.isKeyField();
    }
    return 0;
  };
}
function xb(t, e, n) {
  const s = t.field.isKeyField()
    ? j.comparator(e.key, n.key)
    : (function (r, i, o) {
        const a = i.data.field(r),
          c = o.data.field(r);
        return a !== null && c !== null ? Cs(a, c) : z();
      })(t.field, e, n);
  switch (t.dir) {
    case "asc":
      return s;
    case "desc":
      return -1 * s;
    default:
      return z();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Op(t, e) {
  if (t.wt) {
    if (isNaN(e)) return { doubleValue: "NaN" };
    if (e === 1 / 0) return { doubleValue: "Infinity" };
    if (e === -1 / 0) return { doubleValue: "-Infinity" };
  }
  return { doubleValue: Fi(e) ? "-0" : e };
}
function Pp(t) {
  return { integerValue: "" + t };
}
function Tb(t, e) {
  return cb(e) ? Pp(e) : Op(t, e);
}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ko {
  constructor() {
    this._ = void 0;
  }
}
function Ib(t, e, n) {
  return t instanceof Ui
    ? (function (s, r) {
        const i = {
          fields: {
            __type__: { stringValue: "server_timestamp" },
            __local_write_time__: {
              timestampValue: { seconds: s.seconds, nanos: s.nanoseconds },
            },
          },
        };
        return r && (i.fields.__previous_value__ = r), { mapValue: i };
      })(n, e)
    : t instanceof Sr
    ? Lp(t, e)
    : t instanceof Ar
    ? Fp(t, e)
    : (function (s, r) {
        const i = Mp(s, r),
          o = dh(i) + dh(s.gt);
        return Ja(i) && Ja(s.gt) ? Pp(o) : Op(s.yt, o);
      })(t, e);
}
function Cb(t, e, n) {
  return t instanceof Sr ? Lp(t, e) : t instanceof Ar ? Fp(t, e) : n;
}
function Mp(t, e) {
  return t instanceof Vi
    ? Ja((n = e)) ||
      (function (s) {
        return !!s && "doubleValue" in s;
      })(n)
      ? e
      : { integerValue: 0 }
    : null;
  var n;
}
class Ui extends ko {}
class Sr extends ko {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function Lp(t, e) {
  const n = $p(e);
  for (const s of t.elements) n.some((r) => jt(r, s)) || n.push(s);
  return { arrayValue: { values: n } };
}
class Ar extends ko {
  constructor(e) {
    super(), (this.elements = e);
  }
}
function Fp(t, e) {
  let n = $p(e);
  for (const s of t.elements) n = n.filter((r) => !jt(r, s));
  return { arrayValue: { values: n } };
}
class Vi extends ko {
  constructor(e, n) {
    super(), (this.yt = e), (this.gt = n);
  }
}
function dh(t) {
  return Oe(t.integerValue || t.doubleValue);
}
function $p(t) {
  return nl(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}
function Sb(t, e) {
  return (
    t.field.isEqual(e.field) &&
    (function (n, s) {
      return (n instanceof Sr && s instanceof Sr) ||
        (n instanceof Ar && s instanceof Ar)
        ? Ts(n.elements, s.elements, jt)
        : n instanceof Vi && s instanceof Vi
        ? jt(n.gt, s.gt)
        : n instanceof Ui && s instanceof Ui;
    })(t.transform, e.transform)
  );
}
class Ab {
  constructor(e, n) {
    (this.version = e), (this.transformResults = n);
  }
}
class Rt {
  constructor(e, n) {
    (this.updateTime = e), (this.exists = n);
  }
  static none() {
    return new Rt();
  }
  static exists(e) {
    return new Rt(void 0, e);
  }
  static updateTime(e) {
    return new Rt(e);
  }
  get isNone() {
    return this.updateTime === void 0 && this.exists === void 0;
  }
  isEqual(e) {
    return (
      this.exists === e.exists &&
      (this.updateTime
        ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
        : !e.updateTime)
    );
  }
}
function gi(t, e) {
  return t.updateTime !== void 0
    ? e.isFoundDocument() && e.version.isEqual(t.updateTime)
    : t.exists === void 0 || t.exists === e.isFoundDocument();
}
class Ro {}
function Up(t, e) {
  if (!t.hasLocalMutations || (e && e.fields.length === 0)) return null;
  if (e === null)
    return t.isNoDocument()
      ? new al(t.key, Rt.none())
      : new Br(t.key, t.data, Rt.none());
  {
    const n = t.data,
      s = at.empty();
    let r = new $e(Ye.comparator);
    for (let i of e.fields)
      if (!r.has(i)) {
        let o = n.field(i);
        o === null && i.length > 1 && ((i = i.popLast()), (o = n.field(i))),
          o === null ? s.delete(i) : s.set(i, o),
          (r = r.add(i));
      }
    return new Cn(t.key, s, new dt(r.toArray()), Rt.none());
  }
}
function kb(t, e, n) {
  t instanceof Br
    ? (function (s, r, i) {
        const o = s.value.clone(),
          a = mh(s.fieldTransforms, r, i.transformResults);
        o.setAll(a),
          r.convertToFoundDocument(i.version, o).setHasCommittedMutations();
      })(t, e, n)
    : t instanceof Cn
    ? (function (s, r, i) {
        if (!gi(s.precondition, r))
          return void r.convertToUnknownDocument(i.version);
        const o = mh(s.fieldTransforms, r, i.transformResults),
          a = r.data;
        a.setAll(Vp(s)),
          a.setAll(o),
          r.convertToFoundDocument(i.version, a).setHasCommittedMutations();
      })(t, e, n)
    : (function (s, r, i) {
        r.convertToNoDocument(i.version).setHasCommittedMutations();
      })(0, e, n);
}
function or(t, e, n, s) {
  return t instanceof Br
    ? (function (r, i, o, a) {
        if (!gi(r.precondition, i)) return o;
        const c = r.value.clone(),
          l = gh(r.fieldTransforms, a, i);
        return (
          c.setAll(l),
          i.convertToFoundDocument(i.version, c).setHasLocalMutations(),
          null
        );
      })(t, e, n, s)
    : t instanceof Cn
    ? (function (r, i, o, a) {
        if (!gi(r.precondition, i)) return o;
        const c = gh(r.fieldTransforms, a, i),
          l = i.data;
        return (
          l.setAll(Vp(r)),
          l.setAll(c),
          i.convertToFoundDocument(i.version, l).setHasLocalMutations(),
          o === null
            ? null
            : o
                .unionWith(r.fieldMask.fields)
                .unionWith(r.fieldTransforms.map((u) => u.field))
        );
      })(t, e, n, s)
    : (function (r, i, o) {
        return gi(r.precondition, i)
          ? (i.convertToNoDocument(i.version).setHasLocalMutations(), null)
          : o;
      })(t, e, n);
}
function Rb(t, e) {
  let n = null;
  for (const s of t.fieldTransforms) {
    const r = e.data.field(s.field),
      i = Mp(s.transform, r || null);
    i != null && (n === null && (n = at.empty()), n.set(s.field, i));
  }
  return n || null;
}
function ph(t, e) {
  return (
    t.type === e.type &&
    !!t.key.isEqual(e.key) &&
    !!t.precondition.isEqual(e.precondition) &&
    !!(function (n, s) {
      return (
        (n === void 0 && s === void 0) ||
        (!(!n || !s) && Ts(n, s, (r, i) => Sb(r, i)))
      );
    })(t.fieldTransforms, e.fieldTransforms) &&
    (t.type === 0
      ? t.value.isEqual(e.value)
      : t.type !== 1 ||
        (t.data.isEqual(e.data) && t.fieldMask.isEqual(e.fieldMask)))
  );
}
class Br extends Ro {
  constructor(e, n, s, r = []) {
    super(),
      (this.key = e),
      (this.value = n),
      (this.precondition = s),
      (this.fieldTransforms = r),
      (this.type = 0);
  }
  getFieldMask() {
    return null;
  }
}
class Cn extends Ro {
  constructor(e, n, s, r, i = []) {
    super(),
      (this.key = e),
      (this.data = n),
      (this.fieldMask = s),
      (this.precondition = r),
      (this.fieldTransforms = i),
      (this.type = 1);
  }
  getFieldMask() {
    return this.fieldMask;
  }
}
function Vp(t) {
  const e = new Map();
  return (
    t.fieldMask.fields.forEach((n) => {
      if (!n.isEmpty()) {
        const s = t.data.field(n);
        e.set(n, s);
      }
    }),
    e
  );
}
function mh(t, e, n) {
  const s = new Map();
  we(t.length === n.length);
  for (let r = 0; r < n.length; r++) {
    const i = t[r],
      o = i.transform,
      a = e.data.field(i.field);
    s.set(i.field, Cb(o, a, n[r]));
  }
  return s;
}
function gh(t, e, n) {
  const s = new Map();
  for (const r of t) {
    const i = r.transform,
      o = n.data.field(r.field);
    s.set(r.field, Ib(i, o, e));
  }
  return s;
}
class al extends Ro {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 2),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
class Db extends Ro {
  constructor(e, n) {
    super(),
      (this.key = e),
      (this.precondition = n),
      (this.type = 3),
      (this.fieldTransforms = []);
  }
  getFieldMask() {
    return null;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Nb {
  constructor(e) {
    this.count = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ne, oe;
function Ob(t) {
  switch (t) {
    default:
      return z();
    case E.CANCELLED:
    case E.UNKNOWN:
    case E.DEADLINE_EXCEEDED:
    case E.RESOURCE_EXHAUSTED:
    case E.INTERNAL:
    case E.UNAVAILABLE:
    case E.UNAUTHENTICATED:
      return !1;
    case E.INVALID_ARGUMENT:
    case E.NOT_FOUND:
    case E.ALREADY_EXISTS:
    case E.PERMISSION_DENIED:
    case E.FAILED_PRECONDITION:
    case E.ABORTED:
    case E.OUT_OF_RANGE:
    case E.UNIMPLEMENTED:
    case E.DATA_LOSS:
      return !0;
  }
}
function Bp(t) {
  if (t === void 0) return Jt("GRPC error has no .code"), E.UNKNOWN;
  switch (t) {
    case Ne.OK:
      return E.OK;
    case Ne.CANCELLED:
      return E.CANCELLED;
    case Ne.UNKNOWN:
      return E.UNKNOWN;
    case Ne.DEADLINE_EXCEEDED:
      return E.DEADLINE_EXCEEDED;
    case Ne.RESOURCE_EXHAUSTED:
      return E.RESOURCE_EXHAUSTED;
    case Ne.INTERNAL:
      return E.INTERNAL;
    case Ne.UNAVAILABLE:
      return E.UNAVAILABLE;
    case Ne.UNAUTHENTICATED:
      return E.UNAUTHENTICATED;
    case Ne.INVALID_ARGUMENT:
      return E.INVALID_ARGUMENT;
    case Ne.NOT_FOUND:
      return E.NOT_FOUND;
    case Ne.ALREADY_EXISTS:
      return E.ALREADY_EXISTS;
    case Ne.PERMISSION_DENIED:
      return E.PERMISSION_DENIED;
    case Ne.FAILED_PRECONDITION:
      return E.FAILED_PRECONDITION;
    case Ne.ABORTED:
      return E.ABORTED;
    case Ne.OUT_OF_RANGE:
      return E.OUT_OF_RANGE;
    case Ne.UNIMPLEMENTED:
      return E.UNIMPLEMENTED;
    case Ne.DATA_LOSS:
      return E.DATA_LOSS;
    default:
      return z();
  }
}
((oe = Ne || (Ne = {}))[(oe.OK = 0)] = "OK"),
  (oe[(oe.CANCELLED = 1)] = "CANCELLED"),
  (oe[(oe.UNKNOWN = 2)] = "UNKNOWN"),
  (oe[(oe.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
  (oe[(oe.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
  (oe[(oe.NOT_FOUND = 5)] = "NOT_FOUND"),
  (oe[(oe.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
  (oe[(oe.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
  (oe[(oe.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
  (oe[(oe.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
  (oe[(oe.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
  (oe[(oe.ABORTED = 10)] = "ABORTED"),
  (oe[(oe.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
  (oe[(oe.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
  (oe[(oe.INTERNAL = 13)] = "INTERNAL"),
  (oe[(oe.UNAVAILABLE = 14)] = "UNAVAILABLE"),
  (oe[(oe.DATA_LOSS = 15)] = "DATA_LOSS");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Vs {
  constructor(e, n) {
    (this.mapKeyFn = e),
      (this.equalsFn = n),
      (this.inner = {}),
      (this.innerSize = 0);
  }
  get(e) {
    const n = this.mapKeyFn(e),
      s = this.inner[n];
    if (s !== void 0) {
      for (const [r, i] of s) if (this.equalsFn(r, e)) return i;
    }
  }
  has(e) {
    return this.get(e) !== void 0;
  }
  set(e, n) {
    const s = this.mapKeyFn(e),
      r = this.inner[s];
    if (r === void 0) return (this.inner[s] = [[e, n]]), void this.innerSize++;
    for (let i = 0; i < r.length; i++)
      if (this.equalsFn(r[i][0], e)) return void (r[i] = [e, n]);
    r.push([e, n]), this.innerSize++;
  }
  delete(e) {
    const n = this.mapKeyFn(e),
      s = this.inner[n];
    if (s === void 0) return !1;
    for (let r = 0; r < s.length; r++)
      if (this.equalsFn(s[r][0], e))
        return (
          s.length === 1 ? delete this.inner[n] : s.splice(r, 1),
          this.innerSize--,
          !0
        );
    return !1;
  }
  forEach(e) {
    Jn(this.inner, (n, s) => {
      for (const [r, i] of s) e(r, i);
    });
  }
  isEmpty() {
    return _p(this.inner);
  }
  size() {
    return this.innerSize;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pb = new Ue(j.comparator);
function en() {
  return Pb;
}
const jp = new Ue(j.comparator);
function Qs(...t) {
  let e = jp;
  for (const n of t) e = e.insert(n.key, n);
  return e;
}
function qp(t) {
  let e = jp;
  return t.forEach((n, s) => (e = e.insert(n, s.overlayedDocument))), e;
}
function Bn() {
  return ar();
}
function Hp() {
  return ar();
}
function ar() {
  return new Vs(
    (t) => t.toString(),
    (t, e) => t.isEqual(e)
  );
}
const Mb = new Ue(j.comparator),
  Lb = new $e(j.comparator);
function re(...t) {
  let e = Lb;
  for (const n of t) e = e.add(n);
  return e;
}
const Fb = new $e(fe);
function Kp() {
  return Fb;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Do {
  constructor(e, n, s, r, i) {
    (this.snapshotVersion = e),
      (this.targetChanges = n),
      (this.targetMismatches = s),
      (this.documentUpdates = r),
      (this.resolvedLimboDocuments = i);
  }
  static createSynthesizedRemoteEventForCurrentChange(e, n, s) {
    const r = new Map();
    return (
      r.set(e, jr.createSynthesizedTargetChangeForCurrentChange(e, n, s)),
      new Do(X.min(), r, Kp(), en(), re())
    );
  }
}
class jr {
  constructor(e, n, s, r, i) {
    (this.resumeToken = e),
      (this.current = n),
      (this.addedDocuments = s),
      (this.modifiedDocuments = r),
      (this.removedDocuments = i);
  }
  static createSynthesizedTargetChangeForCurrentChange(e, n, s) {
    return new jr(s, n, re(), re(), re());
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yi {
  constructor(e, n, s, r) {
    (this.It = e), (this.removedTargetIds = n), (this.key = s), (this.Tt = r);
  }
}
class zp {
  constructor(e, n) {
    (this.targetId = e), (this.Et = n);
  }
}
class Gp {
  constructor(e, n, s = Ze.EMPTY_BYTE_STRING, r = null) {
    (this.state = e),
      (this.targetIds = n),
      (this.resumeToken = s),
      (this.cause = r);
  }
}
class yh {
  constructor() {
    (this.At = 0),
      (this.Rt = wh()),
      (this.bt = Ze.EMPTY_BYTE_STRING),
      (this.Pt = !1),
      (this.vt = !0);
  }
  get current() {
    return this.Pt;
  }
  get resumeToken() {
    return this.bt;
  }
  get Vt() {
    return this.At !== 0;
  }
  get St() {
    return this.vt;
  }
  Dt(e) {
    e.approximateByteSize() > 0 && ((this.vt = !0), (this.bt = e));
  }
  Ct() {
    let e = re(),
      n = re(),
      s = re();
    return (
      this.Rt.forEach((r, i) => {
        switch (i) {
          case 0:
            e = e.add(r);
            break;
          case 2:
            n = n.add(r);
            break;
          case 1:
            s = s.add(r);
            break;
          default:
            z();
        }
      }),
      new jr(this.bt, this.Pt, e, n, s)
    );
  }
  xt() {
    (this.vt = !1), (this.Rt = wh());
  }
  Nt(e, n) {
    (this.vt = !0), (this.Rt = this.Rt.insert(e, n));
  }
  kt(e) {
    (this.vt = !0), (this.Rt = this.Rt.remove(e));
  }
  Ot() {
    this.At += 1;
  }
  Mt() {
    this.At -= 1;
  }
  Ft() {
    (this.vt = !0), (this.Pt = !0);
  }
}
class $b {
  constructor(e) {
    (this.$t = e),
      (this.Bt = new Map()),
      (this.Lt = en()),
      (this.qt = vh()),
      (this.Ut = new $e(fe));
  }
  Kt(e) {
    for (const n of e.It)
      e.Tt && e.Tt.isFoundDocument()
        ? this.Gt(n, e.Tt)
        : this.Qt(n, e.key, e.Tt);
    for (const n of e.removedTargetIds) this.Qt(n, e.key, e.Tt);
  }
  jt(e) {
    this.forEachTarget(e, (n) => {
      const s = this.Wt(n);
      switch (e.state) {
        case 0:
          this.zt(n) && s.Dt(e.resumeToken);
          break;
        case 1:
          s.Mt(), s.Vt || s.xt(), s.Dt(e.resumeToken);
          break;
        case 2:
          s.Mt(), s.Vt || this.removeTarget(n);
          break;
        case 3:
          this.zt(n) && (s.Ft(), s.Dt(e.resumeToken));
          break;
        case 4:
          this.zt(n) && (this.Ht(n), s.Dt(e.resumeToken));
          break;
        default:
          z();
      }
    });
  }
  forEachTarget(e, n) {
    e.targetIds.length > 0
      ? e.targetIds.forEach(n)
      : this.Bt.forEach((s, r) => {
          this.zt(r) && n(r);
        });
  }
  Jt(e) {
    const n = e.targetId,
      s = e.Et.count,
      r = this.Yt(n);
    if (r) {
      const i = r.target;
      if (ec(i))
        if (s === 0) {
          const o = new j(i.path);
          this.Qt(n, o, We.newNoDocument(o, X.min()));
        } else we(s === 1);
      else this.Xt(n) !== s && (this.Ht(n), (this.Ut = this.Ut.add(n)));
    }
  }
  Zt(e) {
    const n = new Map();
    this.Bt.forEach((i, o) => {
      const a = this.Yt(o);
      if (a) {
        if (i.current && ec(a.target)) {
          const c = new j(a.target.path);
          this.Lt.get(c) !== null ||
            this.te(o, c) ||
            this.Qt(o, c, We.newNoDocument(c, e));
        }
        i.St && (n.set(o, i.Ct()), i.xt());
      }
    });
    let s = re();
    this.qt.forEach((i, o) => {
      let a = !0;
      o.forEachWhile((c) => {
        const l = this.Yt(c);
        return !l || l.purpose === 2 || ((a = !1), !1);
      }),
        a && (s = s.add(i));
    }),
      this.Lt.forEach((i, o) => o.setReadTime(e));
    const r = new Do(e, n, this.Ut, this.Lt, s);
    return (this.Lt = en()), (this.qt = vh()), (this.Ut = new $e(fe)), r;
  }
  Gt(e, n) {
    if (!this.zt(e)) return;
    const s = this.te(e, n.key) ? 2 : 0;
    this.Wt(e).Nt(n.key, s),
      (this.Lt = this.Lt.insert(n.key, n)),
      (this.qt = this.qt.insert(n.key, this.ee(n.key).add(e)));
  }
  Qt(e, n, s) {
    if (!this.zt(e)) return;
    const r = this.Wt(e);
    this.te(e, n) ? r.Nt(n, 1) : r.kt(n),
      (this.qt = this.qt.insert(n, this.ee(n).delete(e))),
      s && (this.Lt = this.Lt.insert(n, s));
  }
  removeTarget(e) {
    this.Bt.delete(e);
  }
  Xt(e) {
    const n = this.Wt(e).Ct();
    return (
      this.$t.getRemoteKeysForTarget(e).size +
      n.addedDocuments.size -
      n.removedDocuments.size
    );
  }
  Ot(e) {
    this.Wt(e).Ot();
  }
  Wt(e) {
    let n = this.Bt.get(e);
    return n || ((n = new yh()), this.Bt.set(e, n)), n;
  }
  ee(e) {
    let n = this.qt.get(e);
    return n || ((n = new $e(fe)), (this.qt = this.qt.insert(e, n))), n;
  }
  zt(e) {
    const n = this.Yt(e) !== null;
    return n || V("WatchChangeAggregator", "Detected inactive target", e), n;
  }
  Yt(e) {
    const n = this.Bt.get(e);
    return n && n.Vt ? null : this.$t.ne(e);
  }
  Ht(e) {
    this.Bt.set(e, new yh()),
      this.$t.getRemoteKeysForTarget(e).forEach((n) => {
        this.Qt(e, n, null);
      });
  }
  te(e, n) {
    return this.$t.getRemoteKeysForTarget(e).has(n);
  }
}
function vh() {
  return new Ue(j.comparator);
}
function wh() {
  return new Ue(j.comparator);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Ub = (() => ({ asc: "ASCENDING", desc: "DESCENDING" }))(),
  Vb = (() => ({
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY",
  }))(),
  Bb = (() => ({ and: "AND", or: "OR" }))();
class jb {
  constructor(e, n) {
    (this.databaseId = e), (this.wt = n);
  }
}
function Bi(t, e) {
  return t.wt
    ? `${new Date(1e3 * e.seconds)
        .toISOString()
        .replace(/\.\d*/, "")
        .replace("Z", "")}.${("000000000" + e.nanoseconds).slice(-9)}Z`
    : { seconds: "" + e.seconds, nanos: e.nanoseconds };
}
function Wp(t, e) {
  return t.wt ? e.toBase64() : e.toUint8Array();
}
function qb(t, e) {
  return Bi(t, e.toTimestamp());
}
function Ut(t) {
  return (
    we(!!t),
    X.fromTimestamp(
      (function (e) {
        const n = wn(e);
        return new Fe(n.seconds, n.nanos);
      })(t)
    )
  );
}
function cl(t, e) {
  return (function (n) {
    return new Ee(["projects", n.projectId, "databases", n.database]);
  })(t)
    .child("documents")
    .child(e)
    .canonicalString();
}
function Qp(t) {
  const e = Ee.fromString(t);
  return we(Zp(e)), e;
}
function rc(t, e) {
  return cl(t.databaseId, e.path);
}
function ca(t, e) {
  const n = Qp(e);
  if (n.get(1) !== t.databaseId.projectId)
    throw new L(
      E.INVALID_ARGUMENT,
      "Tried to deserialize key from different project: " +
        n.get(1) +
        " vs " +
        t.databaseId.projectId
    );
  if (n.get(3) !== t.databaseId.database)
    throw new L(
      E.INVALID_ARGUMENT,
      "Tried to deserialize key from different database: " +
        n.get(3) +
        " vs " +
        t.databaseId.database
    );
  return new j(Yp(n));
}
function ic(t, e) {
  return cl(t.databaseId, e);
}
function Hb(t) {
  const e = Qp(t);
  return e.length === 4 ? Ee.emptyPath() : Yp(e);
}
function oc(t) {
  return new Ee([
    "projects",
    t.databaseId.projectId,
    "databases",
    t.databaseId.database,
  ]).canonicalString();
}
function Yp(t) {
  return we(t.length > 4 && t.get(4) === "documents"), t.popFirst(5);
}
function _h(t, e, n) {
  return { name: rc(t, e), fields: n.value.mapValue.fields };
}
function Kb(t, e) {
  let n;
  if ("targetChange" in e) {
    e.targetChange;
    const s = (function (c) {
        return c === "NO_CHANGE"
          ? 0
          : c === "ADD"
          ? 1
          : c === "REMOVE"
          ? 2
          : c === "CURRENT"
          ? 3
          : c === "RESET"
          ? 4
          : z();
      })(e.targetChange.targetChangeType || "NO_CHANGE"),
      r = e.targetChange.targetIds || [],
      i = (function (c, l) {
        return c.wt
          ? (we(l === void 0 || typeof l == "string"),
            Ze.fromBase64String(l || ""))
          : (we(l === void 0 || l instanceof Uint8Array),
            Ze.fromUint8Array(l || new Uint8Array()));
      })(t, e.targetChange.resumeToken),
      o = e.targetChange.cause,
      a =
        o &&
        (function (c) {
          const l = c.code === void 0 ? E.UNKNOWN : Bp(c.code);
          return new L(l, c.message || "");
        })(o);
    n = new Gp(s, r, i, a || null);
  } else if ("documentChange" in e) {
    e.documentChange;
    const s = e.documentChange;
    s.document, s.document.name, s.document.updateTime;
    const r = ca(t, s.document.name),
      i = Ut(s.document.updateTime),
      o = s.document.createTime ? Ut(s.document.createTime) : X.min(),
      a = new at({ mapValue: { fields: s.document.fields } }),
      c = We.newFoundDocument(r, i, o, a),
      l = s.targetIds || [],
      u = s.removedTargetIds || [];
    n = new yi(l, u, c.key, c);
  } else if ("documentDelete" in e) {
    e.documentDelete;
    const s = e.documentDelete;
    s.document;
    const r = ca(t, s.document),
      i = s.readTime ? Ut(s.readTime) : X.min(),
      o = We.newNoDocument(r, i),
      a = s.removedTargetIds || [];
    n = new yi([], a, o.key, o);
  } else if ("documentRemove" in e) {
    e.documentRemove;
    const s = e.documentRemove;
    s.document;
    const r = ca(t, s.document),
      i = s.removedTargetIds || [];
    n = new yi([], i, r, null);
  } else {
    if (!("filter" in e)) return z();
    {
      e.filter;
      const s = e.filter;
      s.targetId;
      const r = s.count || 0,
        i = new Nb(r),
        o = s.targetId;
      n = new zp(o, i);
    }
  }
  return n;
}
function zb(t, e) {
  let n;
  if (e instanceof Br) n = { update: _h(t, e.key, e.value) };
  else if (e instanceof al) n = { delete: rc(t, e.key) };
  else if (e instanceof Cn)
    n = { update: _h(t, e.key, e.data), updateMask: tE(e.fieldMask) };
  else {
    if (!(e instanceof Db)) return z();
    n = { verify: rc(t, e.key) };
  }
  return (
    e.fieldTransforms.length > 0 &&
      (n.updateTransforms = e.fieldTransforms.map((s) =>
        (function (r, i) {
          const o = i.transform;
          if (o instanceof Ui)
            return {
              fieldPath: i.field.canonicalString(),
              setToServerValue: "REQUEST_TIME",
            };
          if (o instanceof Sr)
            return {
              fieldPath: i.field.canonicalString(),
              appendMissingElements: { values: o.elements },
            };
          if (o instanceof Ar)
            return {
              fieldPath: i.field.canonicalString(),
              removeAllFromArray: { values: o.elements },
            };
          if (o instanceof Vi)
            return { fieldPath: i.field.canonicalString(), increment: o.gt };
          throw z();
        })(0, s)
      )),
    e.precondition.isNone ||
      (n.currentDocument = (function (s, r) {
        return r.updateTime !== void 0
          ? { updateTime: qb(s, r.updateTime) }
          : r.exists !== void 0
          ? { exists: r.exists }
          : z();
      })(t, e.precondition)),
    n
  );
}
function Gb(t, e) {
  return t && t.length > 0
    ? (we(e !== void 0),
      t.map((n) =>
        (function (s, r) {
          let i = s.updateTime ? Ut(s.updateTime) : Ut(r);
          return (
            i.isEqual(X.min()) && (i = Ut(r)),
            new Ab(i, s.transformResults || [])
          );
        })(n, e)
      ))
    : [];
}
function Wb(t, e) {
  return { documents: [ic(t, e.path)] };
}
function Qb(t, e) {
  const n = { structuredQuery: {} },
    s = e.path;
  e.collectionGroup !== null
    ? ((n.parent = ic(t, s)),
      (n.structuredQuery.from = [
        { collectionId: e.collectionGroup, allDescendants: !0 },
      ]))
    : ((n.parent = ic(t, s.popLast())),
      (n.structuredQuery.from = [{ collectionId: s.lastSegment() }]));
  const r = (function (c) {
    if (c.length !== 0) return Jp(Nt.create(c, "and"));
  })(e.filters);
  r && (n.structuredQuery.where = r);
  const i = (function (c) {
    if (c.length !== 0)
      return c.map((l) =>
        (function (u) {
          return { field: as(u.field), direction: Jb(u.dir) };
        })(l)
      );
  })(e.orderBy);
  i && (n.structuredQuery.orderBy = i);
  const o = (function (c, l) {
    return c.wt || Io(l) ? l : { value: l };
  })(t, e.limit);
  var a;
  return (
    o !== null && (n.structuredQuery.limit = o),
    e.startAt &&
      (n.structuredQuery.startAt = {
        before: (a = e.startAt).inclusive,
        values: a.position,
      }),
    e.endAt &&
      (n.structuredQuery.endAt = (function (c) {
        return { before: !c.inclusive, values: c.position };
      })(e.endAt)),
    n
  );
}
function Yb(t) {
  let e = Hb(t.parent);
  const n = t.structuredQuery,
    s = n.from ? n.from.length : 0;
  let r = null;
  if (s > 0) {
    we(s === 1);
    const u = n.from[0];
    u.allDescendants ? (r = u.collectionId) : (e = e.child(u.collectionId));
  }
  let i = [];
  n.where &&
    (i = (function (u) {
      const h = Xp(u);
      return h instanceof Nt && Ip(h) ? h.getFilters() : [h];
    })(n.where));
  let o = [];
  n.orderBy &&
    (o = n.orderBy.map((u) =>
      (function (h) {
        return new ds(
          cs(h.field),
          (function (f) {
            switch (f) {
              case "ASCENDING":
                return "asc";
              case "DESCENDING":
                return "desc";
              default:
                return;
            }
          })(h.direction)
        );
      })(u)
    ));
  let a = null;
  n.limit &&
    (a = (function (u) {
      let h;
      return (h = typeof u == "object" ? u.value : u), Io(h) ? null : h;
    })(n.limit));
  let c = null;
  n.startAt &&
    (c = (function (u) {
      const h = !!u.before,
        f = u.values || [];
      return new $i(f, h);
    })(n.startAt));
  let l = null;
  return (
    n.endAt &&
      (l = (function (u) {
        const h = !u.before,
          f = u.values || [];
        return new $i(f, h);
      })(n.endAt)),
    bb(e, r, o, i, a, "F", c, l)
  );
}
function Xb(t, e) {
  const n = (function (s, r) {
    switch (r) {
      case 0:
        return null;
      case 1:
        return "existence-filter-mismatch";
      case 2:
        return "limbo-document";
      default:
        return z();
    }
  })(0, e.purpose);
  return n == null ? null : { "goog-listen-tags": n };
}
function Xp(t) {
  return t.unaryFilter !== void 0
    ? (function (e) {
        switch (e.unaryFilter.op) {
          case "IS_NAN":
            const n = cs(e.unaryFilter.field);
            return Pe.create(n, "==", { doubleValue: NaN });
          case "IS_NULL":
            const s = cs(e.unaryFilter.field);
            return Pe.create(s, "==", { nullValue: "NULL_VALUE" });
          case "IS_NOT_NAN":
            const r = cs(e.unaryFilter.field);
            return Pe.create(r, "!=", { doubleValue: NaN });
          case "IS_NOT_NULL":
            const i = cs(e.unaryFilter.field);
            return Pe.create(i, "!=", { nullValue: "NULL_VALUE" });
          default:
            return z();
        }
      })(t)
    : t.fieldFilter !== void 0
    ? (function (e) {
        return Pe.create(
          cs(e.fieldFilter.field),
          (function (n) {
            switch (n) {
              case "EQUAL":
                return "==";
              case "NOT_EQUAL":
                return "!=";
              case "GREATER_THAN":
                return ">";
              case "GREATER_THAN_OR_EQUAL":
                return ">=";
              case "LESS_THAN":
                return "<";
              case "LESS_THAN_OR_EQUAL":
                return "<=";
              case "ARRAY_CONTAINS":
                return "array-contains";
              case "IN":
                return "in";
              case "NOT_IN":
                return "not-in";
              case "ARRAY_CONTAINS_ANY":
                return "array-contains-any";
              default:
                return z();
            }
          })(e.fieldFilter.op),
          e.fieldFilter.value
        );
      })(t)
    : t.compositeFilter !== void 0
    ? (function (e) {
        return Nt.create(
          e.compositeFilter.filters.map((n) => Xp(n)),
          (function (n) {
            switch (n) {
              case "AND":
                return "and";
              case "OR":
                return "or";
              default:
                return z();
            }
          })(e.compositeFilter.op)
        );
      })(t)
    : z();
}
function Jb(t) {
  return Ub[t];
}
function Zb(t) {
  return Vb[t];
}
function eE(t) {
  return Bb[t];
}
function as(t) {
  return { fieldPath: t.canonicalString() };
}
function cs(t) {
  return Ye.fromServerFormat(t.fieldPath);
}
function Jp(t) {
  return t instanceof Pe
    ? (function (e) {
        if (e.op === "==") {
          if (ah(e.value))
            return { unaryFilter: { field: as(e.field), op: "IS_NAN" } };
          if (oh(e.value))
            return { unaryFilter: { field: as(e.field), op: "IS_NULL" } };
        } else if (e.op === "!=") {
          if (ah(e.value))
            return { unaryFilter: { field: as(e.field), op: "IS_NOT_NAN" } };
          if (oh(e.value))
            return { unaryFilter: { field: as(e.field), op: "IS_NOT_NULL" } };
        }
        return {
          fieldFilter: { field: as(e.field), op: Zb(e.op), value: e.value },
        };
      })(t)
    : t instanceof Nt
    ? (function (e) {
        const n = e.getFilters().map((s) => Jp(s));
        return n.length === 1
          ? n[0]
          : { compositeFilter: { op: eE(e.op), filters: n } };
      })(t)
    : z();
}
function tE(t) {
  const e = [];
  return (
    t.fields.forEach((n) => e.push(n.canonicalString())), { fieldPaths: e }
  );
}
function Zp(t) {
  return t.length >= 4 && t.get(0) === "projects" && t.get(2) === "databases";
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class nE {
  constructor(e, n, s, r) {
    (this.batchId = e),
      (this.localWriteTime = n),
      (this.baseMutations = s),
      (this.mutations = r);
  }
  applyToRemoteDocument(e, n) {
    const s = n.mutationResults;
    for (let r = 0; r < this.mutations.length; r++) {
      const i = this.mutations[r];
      i.key.isEqual(e.key) && kb(i, e, s[r]);
    }
  }
  applyToLocalView(e, n) {
    for (const s of this.baseMutations)
      s.key.isEqual(e.key) && (n = or(s, e, n, this.localWriteTime));
    for (const s of this.mutations)
      s.key.isEqual(e.key) && (n = or(s, e, n, this.localWriteTime));
    return n;
  }
  applyToLocalDocumentSet(e, n) {
    const s = Hp();
    return (
      this.mutations.forEach((r) => {
        const i = e.get(r.key),
          o = i.overlayedDocument;
        let a = this.applyToLocalView(o, i.mutatedFields);
        a = n.has(r.key) ? null : a;
        const c = Up(o, a);
        c !== null && s.set(r.key, c),
          o.isValidDocument() || o.convertToNoDocument(X.min());
      }),
      s
    );
  }
  keys() {
    return this.mutations.reduce((e, n) => e.add(n.key), re());
  }
  isEqual(e) {
    return (
      this.batchId === e.batchId &&
      Ts(this.mutations, e.mutations, (n, s) => ph(n, s)) &&
      Ts(this.baseMutations, e.baseMutations, (n, s) => ph(n, s))
    );
  }
}
class ll {
  constructor(e, n, s, r) {
    (this.batch = e),
      (this.commitVersion = n),
      (this.mutationResults = s),
      (this.docVersions = r);
  }
  static from(e, n, s) {
    we(e.mutations.length === s.length);
    let r = Mb;
    const i = e.mutations;
    for (let o = 0; o < i.length; o++) r = r.insert(i[o].key, s[o].version);
    return new ll(e, n, s, r);
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sE {
  constructor(e, n) {
    (this.largestBatchId = e), (this.mutation = n);
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return e !== null && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Kn {
  constructor(e, n, s, r, i = X.min(), o = X.min(), a = Ze.EMPTY_BYTE_STRING) {
    (this.target = e),
      (this.targetId = n),
      (this.purpose = s),
      (this.sequenceNumber = r),
      (this.snapshotVersion = i),
      (this.lastLimboFreeSnapshotVersion = o),
      (this.resumeToken = a);
  }
  withSequenceNumber(e) {
    return new Kn(
      this.target,
      this.targetId,
      this.purpose,
      e,
      this.snapshotVersion,
      this.lastLimboFreeSnapshotVersion,
      this.resumeToken
    );
  }
  withResumeToken(e, n) {
    return new Kn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      n,
      this.lastLimboFreeSnapshotVersion,
      e
    );
  }
  withLastLimboFreeSnapshotVersion(e) {
    return new Kn(
      this.target,
      this.targetId,
      this.purpose,
      this.sequenceNumber,
      this.snapshotVersion,
      e,
      this.resumeToken
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rE {
  constructor(e) {
    this.ie = e;
  }
}
function iE(t) {
  const e = Yb({ parent: t.parent, structuredQuery: t.structuredQuery });
  return t.limitType === "LAST" ? nc(e, e.limit, "L") : e;
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class oE {
  constructor() {
    this.Je = new aE();
  }
  addToCollectionParentIndex(e, n) {
    return this.Je.add(n), C.resolve();
  }
  getCollectionParents(e, n) {
    return C.resolve(this.Je.getEntries(n));
  }
  addFieldIndex(e, n) {
    return C.resolve();
  }
  deleteFieldIndex(e, n) {
    return C.resolve();
  }
  getDocumentsMatchingTarget(e, n) {
    return C.resolve(null);
  }
  getIndexType(e, n) {
    return C.resolve(0);
  }
  getFieldIndexes(e, n) {
    return C.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return C.resolve(null);
  }
  getMinOffset(e, n) {
    return C.resolve(vn.min());
  }
  getMinOffsetFromCollectionGroup(e, n) {
    return C.resolve(vn.min());
  }
  updateCollectionGroup(e, n, s) {
    return C.resolve();
  }
  updateIndexEntries(e, n) {
    return C.resolve();
  }
}
class aE {
  constructor() {
    this.index = {};
  }
  add(e) {
    const n = e.lastSegment(),
      s = e.popLast(),
      r = this.index[n] || new $e(Ee.comparator),
      i = !r.has(s);
    return (this.index[n] = r.add(s)), i;
  }
  has(e) {
    const n = e.lastSegment(),
      s = e.popLast(),
      r = this.index[n];
    return r && r.has(s);
  }
  getEntries(e) {
    return (this.index[e] || new $e(Ee.comparator)).toArray();
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class As {
  constructor(e) {
    this.bn = e;
  }
  next() {
    return (this.bn += 2), this.bn;
  }
  static Pn() {
    return new As(0);
  }
  static vn() {
    return new As(-1);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class cE {
  constructor() {
    (this.changes = new Vs(
      (e) => e.toString(),
      (e, n) => e.isEqual(n)
    )),
      (this.changesApplied = !1);
  }
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  removeEntry(e, n) {
    this.assertNotApplied(),
      this.changes.set(e, We.newInvalidDocument(e).setReadTime(n));
  }
  getEntry(e, n) {
    this.assertNotApplied();
    const s = this.changes.get(n);
    return s !== void 0 ? C.resolve(s) : this.getFromCache(e, n);
  }
  getEntries(e, n) {
    return this.getAllFromCache(e, n);
  }
  apply(e) {
    return (
      this.assertNotApplied(), (this.changesApplied = !0), this.applyChanges(e)
    );
  }
  assertNotApplied() {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class lE {
  constructor(e, n) {
    (this.overlayedDocument = e), (this.mutatedFields = n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class uE {
  constructor(e, n, s, r) {
    (this.remoteDocumentCache = e),
      (this.mutationQueue = n),
      (this.documentOverlayCache = s),
      (this.indexManager = r);
  }
  getDocument(e, n) {
    let s = null;
    return this.documentOverlayCache
      .getOverlay(e, n)
      .next((r) => ((s = r), this.remoteDocumentCache.getEntry(e, n)))
      .next((r) => (s !== null && or(s.mutation, r, dt.empty(), Fe.now()), r));
  }
  getDocuments(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((s) => this.getLocalViewOfDocuments(e, s, re()).next(() => s));
  }
  getLocalViewOfDocuments(e, n, s = re()) {
    const r = Bn();
    return this.populateOverlays(e, r, n).next(() =>
      this.computeViews(e, n, r, s).next((i) => {
        let o = Qs();
        return (
          i.forEach((a, c) => {
            o = o.insert(a, c.overlayedDocument);
          }),
          o
        );
      })
    );
  }
  getOverlayedDocuments(e, n) {
    const s = Bn();
    return this.populateOverlays(e, s, n).next(() =>
      this.computeViews(e, n, s, re())
    );
  }
  populateOverlays(e, n, s) {
    const r = [];
    return (
      s.forEach((i) => {
        n.has(i) || r.push(i);
      }),
      this.documentOverlayCache.getOverlays(e, r).next((i) => {
        i.forEach((o, a) => {
          n.set(o, a);
        });
      })
    );
  }
  computeViews(e, n, s, r) {
    let i = en();
    const o = ar(),
      a = ar();
    return (
      n.forEach((c, l) => {
        const u = s.get(l.key);
        r.has(l.key) && (u === void 0 || u.mutation instanceof Cn)
          ? (i = i.insert(l.key, l))
          : u !== void 0
          ? (o.set(l.key, u.mutation.getFieldMask()),
            or(u.mutation, l, u.mutation.getFieldMask(), Fe.now()))
          : o.set(l.key, dt.empty());
      }),
      this.recalculateAndSaveOverlays(e, i).next(
        (c) => (
          c.forEach((l, u) => o.set(l, u)),
          n.forEach((l, u) => {
            var h;
            return a.set(
              l,
              new lE(u, (h = o.get(l)) !== null && h !== void 0 ? h : null)
            );
          }),
          a
        )
      )
    );
  }
  recalculateAndSaveOverlays(e, n) {
    const s = ar();
    let r = new Ue((o, a) => o - a),
      i = re();
    return this.mutationQueue
      .getAllMutationBatchesAffectingDocumentKeys(e, n)
      .next((o) => {
        for (const a of o)
          a.keys().forEach((c) => {
            const l = n.get(c);
            if (l === null) return;
            let u = s.get(c) || dt.empty();
            (u = a.applyToLocalView(l, u)), s.set(c, u);
            const h = (r.get(a.batchId) || re()).add(c);
            r = r.insert(a.batchId, h);
          });
      })
      .next(() => {
        const o = [],
          a = r.getReverseIterator();
        for (; a.hasNext(); ) {
          const c = a.getNext(),
            l = c.key,
            u = c.value,
            h = Hp();
          u.forEach((f) => {
            if (!i.has(f)) {
              const m = Up(n.get(f), s.get(f));
              m !== null && h.set(f, m), (i = i.add(f));
            }
          }),
            o.push(this.documentOverlayCache.saveOverlays(e, l, h));
        }
        return C.waitFor(o);
      })
      .next(() => s);
  }
  recalculateAndSaveOverlaysForDocumentKeys(e, n) {
    return this.remoteDocumentCache
      .getEntries(e, n)
      .next((s) => this.recalculateAndSaveOverlays(e, s));
  }
  getDocumentsMatchingQuery(e, n, s) {
    return (function (r) {
      return (
        j.isDocumentKey(r.path) &&
        r.collectionGroup === null &&
        r.filters.length === 0
      );
    })(n)
      ? this.getDocumentsMatchingDocumentQuery(e, n.path)
      : Rp(n)
      ? this.getDocumentsMatchingCollectionGroupQuery(e, n, s)
      : this.getDocumentsMatchingCollectionQuery(e, n, s);
  }
  getNextDocuments(e, n, s, r) {
    return this.remoteDocumentCache
      .getAllFromCollectionGroup(e, n, s, r)
      .next((i) => {
        const o =
          r - i.size > 0
            ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                e,
                n,
                s.largestBatchId,
                r - i.size
              )
            : C.resolve(Bn());
        let a = -1,
          c = i;
        return o.next((l) =>
          C.forEach(
            l,
            (u, h) => (
              a < h.largestBatchId && (a = h.largestBatchId),
              i.get(u)
                ? C.resolve()
                : this.remoteDocumentCache.getEntry(e, u).next((f) => {
                    c = c.insert(u, f);
                  })
            )
          )
            .next(() => this.populateOverlays(e, l, i))
            .next(() => this.computeViews(e, c, l, re()))
            .next((u) => ({ batchId: a, changes: qp(u) }))
        );
      });
  }
  getDocumentsMatchingDocumentQuery(e, n) {
    return this.getDocument(e, new j(n)).next((s) => {
      let r = Qs();
      return s.isFoundDocument() && (r = r.insert(s.key, s)), r;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, n, s) {
    const r = n.collectionGroup;
    let i = Qs();
    return this.indexManager.getCollectionParents(e, r).next((o) =>
      C.forEach(o, (a) => {
        const c = (function (l, u) {
          return new Us(
            u,
            null,
            l.explicitOrderBy.slice(),
            l.filters.slice(),
            l.limit,
            l.limitType,
            l.startAt,
            l.endAt
          );
        })(n, a.child(r));
        return this.getDocumentsMatchingCollectionQuery(e, c, s).next((l) => {
          l.forEach((u, h) => {
            i = i.insert(u, h);
          });
        });
      }).next(() => i)
    );
  }
  getDocumentsMatchingCollectionQuery(e, n, s) {
    let r;
    return this.remoteDocumentCache
      .getAllFromCollection(e, n.path, s)
      .next(
        (i) => (
          (r = i),
          this.documentOverlayCache.getOverlaysForCollection(
            e,
            n.path,
            s.largestBatchId
          )
        )
      )
      .next((i) => {
        i.forEach((a, c) => {
          const l = c.getKey();
          r.get(l) === null && (r = r.insert(l, We.newInvalidDocument(l)));
        });
        let o = Qs();
        return (
          r.forEach((a, c) => {
            const l = i.get(a);
            l !== void 0 && or(l.mutation, c, dt.empty(), Fe.now()),
              ol(n, c) && (o = o.insert(a, c));
          }),
          o
        );
      });
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hE {
  constructor(e) {
    (this.yt = e), (this.Zn = new Map()), (this.ts = new Map());
  }
  getBundleMetadata(e, n) {
    return C.resolve(this.Zn.get(n));
  }
  saveBundleMetadata(e, n) {
    var s;
    return (
      this.Zn.set(n.id, {
        id: (s = n).id,
        version: s.version,
        createTime: Ut(s.createTime),
      }),
      C.resolve()
    );
  }
  getNamedQuery(e, n) {
    return C.resolve(this.ts.get(n));
  }
  saveNamedQuery(e, n) {
    return (
      this.ts.set(
        n.name,
        (function (s) {
          return {
            name: s.name,
            query: iE(s.bundledQuery),
            readTime: Ut(s.readTime),
          };
        })(n)
      ),
      C.resolve()
    );
  }
}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fE {
  constructor() {
    (this.overlays = new Ue(j.comparator)), (this.es = new Map());
  }
  getOverlay(e, n) {
    return C.resolve(this.overlays.get(n));
  }
  getOverlays(e, n) {
    const s = Bn();
    return C.forEach(n, (r) =>
      this.getOverlay(e, r).next((i) => {
        i !== null && s.set(r, i);
      })
    ).next(() => s);
  }
  saveOverlays(e, n, s) {
    return (
      s.forEach((r, i) => {
        this.oe(e, n, i);
      }),
      C.resolve()
    );
  }
  removeOverlaysForBatchId(e, n, s) {
    const r = this.es.get(s);
    return (
      r !== void 0 &&
        (r.forEach((i) => (this.overlays = this.overlays.remove(i))),
        this.es.delete(s)),
      C.resolve()
    );
  }
  getOverlaysForCollection(e, n, s) {
    const r = Bn(),
      i = n.length + 1,
      o = new j(n.child("")),
      a = this.overlays.getIteratorFrom(o);
    for (; a.hasNext(); ) {
      const c = a.getNext().value,
        l = c.getKey();
      if (!n.isPrefixOf(l.path)) break;
      l.path.length === i && c.largestBatchId > s && r.set(c.getKey(), c);
    }
    return C.resolve(r);
  }
  getOverlaysForCollectionGroup(e, n, s, r) {
    let i = new Ue((l, u) => l - u);
    const o = this.overlays.getIterator();
    for (; o.hasNext(); ) {
      const l = o.getNext().value;
      if (l.getKey().getCollectionGroup() === n && l.largestBatchId > s) {
        let u = i.get(l.largestBatchId);
        u === null && ((u = Bn()), (i = i.insert(l.largestBatchId, u))),
          u.set(l.getKey(), l);
      }
    }
    const a = Bn(),
      c = i.getIterator();
    for (
      ;
      c.hasNext() &&
      (c.getNext().value.forEach((l, u) => a.set(l, u)), !(a.size() >= r));

    );
    return C.resolve(a);
  }
  oe(e, n, s) {
    const r = this.overlays.get(s.key);
    if (r !== null) {
      const o = this.es.get(r.largestBatchId).delete(s.key);
      this.es.set(r.largestBatchId, o);
    }
    this.overlays = this.overlays.insert(s.key, new sE(n, s));
    let i = this.es.get(n);
    i === void 0 && ((i = re()), this.es.set(n, i)),
      this.es.set(n, i.add(s.key));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ul {
  constructor() {
    (this.ns = new $e(Be.ss)), (this.rs = new $e(Be.os));
  }
  isEmpty() {
    return this.ns.isEmpty();
  }
  addReference(e, n) {
    const s = new Be(e, n);
    (this.ns = this.ns.add(s)), (this.rs = this.rs.add(s));
  }
  us(e, n) {
    e.forEach((s) => this.addReference(s, n));
  }
  removeReference(e, n) {
    this.cs(new Be(e, n));
  }
  hs(e, n) {
    e.forEach((s) => this.removeReference(s, n));
  }
  ls(e) {
    const n = new j(new Ee([])),
      s = new Be(n, e),
      r = new Be(n, e + 1),
      i = [];
    return (
      this.rs.forEachInRange([s, r], (o) => {
        this.cs(o), i.push(o.key);
      }),
      i
    );
  }
  fs() {
    this.ns.forEach((e) => this.cs(e));
  }
  cs(e) {
    (this.ns = this.ns.delete(e)), (this.rs = this.rs.delete(e));
  }
  ds(e) {
    const n = new j(new Ee([])),
      s = new Be(n, e),
      r = new Be(n, e + 1);
    let i = re();
    return (
      this.rs.forEachInRange([s, r], (o) => {
        i = i.add(o.key);
      }),
      i
    );
  }
  containsKey(e) {
    const n = new Be(e, 0),
      s = this.ns.firstAfterOrEqual(n);
    return s !== null && e.isEqual(s.key);
  }
}
class Be {
  constructor(e, n) {
    (this.key = e), (this._s = n);
  }
  static ss(e, n) {
    return j.comparator(e.key, n.key) || fe(e._s, n._s);
  }
  static os(e, n) {
    return fe(e._s, n._s) || j.comparator(e.key, n.key);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class dE {
  constructor(e, n) {
    (this.indexManager = e),
      (this.referenceDelegate = n),
      (this.mutationQueue = []),
      (this.ws = 1),
      (this.gs = new $e(Be.ss));
  }
  checkEmpty(e) {
    return C.resolve(this.mutationQueue.length === 0);
  }
  addMutationBatch(e, n, s, r) {
    const i = this.ws;
    this.ws++,
      this.mutationQueue.length > 0 &&
        this.mutationQueue[this.mutationQueue.length - 1];
    const o = new nE(i, n, s, r);
    this.mutationQueue.push(o);
    for (const a of r)
      (this.gs = this.gs.add(new Be(a.key, i))),
        this.indexManager.addToCollectionParentIndex(e, a.key.path.popLast());
    return C.resolve(o);
  }
  lookupMutationBatch(e, n) {
    return C.resolve(this.ys(n));
  }
  getNextMutationBatchAfterBatchId(e, n) {
    const s = n + 1,
      r = this.ps(s),
      i = r < 0 ? 0 : r;
    return C.resolve(
      this.mutationQueue.length > i ? this.mutationQueue[i] : null
    );
  }
  getHighestUnacknowledgedBatchId() {
    return C.resolve(this.mutationQueue.length === 0 ? -1 : this.ws - 1);
  }
  getAllMutationBatches(e) {
    return C.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, n) {
    const s = new Be(n, 0),
      r = new Be(n, Number.POSITIVE_INFINITY),
      i = [];
    return (
      this.gs.forEachInRange([s, r], (o) => {
        const a = this.ys(o._s);
        i.push(a);
      }),
      C.resolve(i)
    );
  }
  getAllMutationBatchesAffectingDocumentKeys(e, n) {
    let s = new $e(fe);
    return (
      n.forEach((r) => {
        const i = new Be(r, 0),
          o = new Be(r, Number.POSITIVE_INFINITY);
        this.gs.forEachInRange([i, o], (a) => {
          s = s.add(a._s);
        });
      }),
      C.resolve(this.Is(s))
    );
  }
  getAllMutationBatchesAffectingQuery(e, n) {
    const s = n.path,
      r = s.length + 1;
    let i = s;
    j.isDocumentKey(i) || (i = i.child(""));
    const o = new Be(new j(i), 0);
    let a = new $e(fe);
    return (
      this.gs.forEachWhile((c) => {
        const l = c.key.path;
        return !!s.isPrefixOf(l) && (l.length === r && (a = a.add(c._s)), !0);
      }, o),
      C.resolve(this.Is(a))
    );
  }
  Is(e) {
    const n = [];
    return (
      e.forEach((s) => {
        const r = this.ys(s);
        r !== null && n.push(r);
      }),
      n
    );
  }
  removeMutationBatch(e, n) {
    we(this.Ts(n.batchId, "removed") === 0), this.mutationQueue.shift();
    let s = this.gs;
    return C.forEach(n.mutations, (r) => {
      const i = new Be(r.key, n.batchId);
      return (
        (s = s.delete(i)),
        this.referenceDelegate.markPotentiallyOrphaned(e, r.key)
      );
    }).next(() => {
      this.gs = s;
    });
  }
  An(e) {}
  containsKey(e, n) {
    const s = new Be(n, 0),
      r = this.gs.firstAfterOrEqual(s);
    return C.resolve(n.isEqual(r && r.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, C.resolve();
  }
  Ts(e, n) {
    return this.ps(e);
  }
  ps(e) {
    return this.mutationQueue.length === 0
      ? 0
      : e - this.mutationQueue[0].batchId;
  }
  ys(e) {
    const n = this.ps(e);
    return n < 0 || n >= this.mutationQueue.length
      ? null
      : this.mutationQueue[n];
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class pE {
  constructor(e) {
    (this.Es = e), (this.docs = new Ue(j.comparator)), (this.size = 0);
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  addEntry(e, n) {
    const s = n.key,
      r = this.docs.get(s),
      i = r ? r.size : 0,
      o = this.Es(n);
    return (
      (this.docs = this.docs.insert(s, { document: n.mutableCopy(), size: o })),
      (this.size += o - i),
      this.indexManager.addToCollectionParentIndex(e, s.path.popLast())
    );
  }
  removeEntry(e) {
    const n = this.docs.get(e);
    n && ((this.docs = this.docs.remove(e)), (this.size -= n.size));
  }
  getEntry(e, n) {
    const s = this.docs.get(n);
    return C.resolve(s ? s.document.mutableCopy() : We.newInvalidDocument(n));
  }
  getEntries(e, n) {
    let s = en();
    return (
      n.forEach((r) => {
        const i = this.docs.get(r);
        s = s.insert(
          r,
          i ? i.document.mutableCopy() : We.newInvalidDocument(r)
        );
      }),
      C.resolve(s)
    );
  }
  getAllFromCollection(e, n, s) {
    let r = en();
    const i = new j(n.child("")),
      o = this.docs.getIteratorFrom(i);
    for (; o.hasNext(); ) {
      const {
        key: a,
        value: { document: c },
      } = o.getNext();
      if (!n.isPrefixOf(a.path)) break;
      a.path.length > n.length + 1 ||
        rb(sb(c), s) <= 0 ||
        (r = r.insert(c.key, c.mutableCopy()));
    }
    return C.resolve(r);
  }
  getAllFromCollectionGroup(e, n, s, r) {
    z();
  }
  As(e, n) {
    return C.forEach(this.docs, (s) => n(s));
  }
  newChangeBuffer(e) {
    return new mE(this);
  }
  getSize(e) {
    return C.resolve(this.size);
  }
}
class mE extends cE {
  constructor(e) {
    super(), (this.Yn = e);
  }
  applyChanges(e) {
    const n = [];
    return (
      this.changes.forEach((s, r) => {
        r.isValidDocument()
          ? n.push(this.Yn.addEntry(e, r))
          : this.Yn.removeEntry(s);
      }),
      C.waitFor(n)
    );
  }
  getFromCache(e, n) {
    return this.Yn.getEntry(e, n);
  }
  getAllFromCache(e, n) {
    return this.Yn.getEntries(e, n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gE {
  constructor(e) {
    (this.persistence = e),
      (this.Rs = new Vs((n) => sl(n), rl)),
      (this.lastRemoteSnapshotVersion = X.min()),
      (this.highestTargetId = 0),
      (this.bs = 0),
      (this.Ps = new ul()),
      (this.targetCount = 0),
      (this.vs = As.Pn());
  }
  forEachTarget(e, n) {
    return this.Rs.forEach((s, r) => n(r)), C.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return C.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return C.resolve(this.bs);
  }
  allocateTargetId(e) {
    return (
      (this.highestTargetId = this.vs.next()), C.resolve(this.highestTargetId)
    );
  }
  setTargetsMetadata(e, n, s) {
    return (
      s && (this.lastRemoteSnapshotVersion = s),
      n > this.bs && (this.bs = n),
      C.resolve()
    );
  }
  Dn(e) {
    this.Rs.set(e.target, e);
    const n = e.targetId;
    n > this.highestTargetId &&
      ((this.vs = new As(n)), (this.highestTargetId = n)),
      e.sequenceNumber > this.bs && (this.bs = e.sequenceNumber);
  }
  addTargetData(e, n) {
    return this.Dn(n), (this.targetCount += 1), C.resolve();
  }
  updateTargetData(e, n) {
    return this.Dn(n), C.resolve();
  }
  removeTargetData(e, n) {
    return (
      this.Rs.delete(n.target),
      this.Ps.ls(n.targetId),
      (this.targetCount -= 1),
      C.resolve()
    );
  }
  removeTargets(e, n, s) {
    let r = 0;
    const i = [];
    return (
      this.Rs.forEach((o, a) => {
        a.sequenceNumber <= n &&
          s.get(a.targetId) === null &&
          (this.Rs.delete(o),
          i.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
          r++);
      }),
      C.waitFor(i).next(() => r)
    );
  }
  getTargetCount(e) {
    return C.resolve(this.targetCount);
  }
  getTargetData(e, n) {
    const s = this.Rs.get(n) || null;
    return C.resolve(s);
  }
  addMatchingKeys(e, n, s) {
    return this.Ps.us(n, s), C.resolve();
  }
  removeMatchingKeys(e, n, s) {
    this.Ps.hs(n, s);
    const r = this.persistence.referenceDelegate,
      i = [];
    return (
      r &&
        n.forEach((o) => {
          i.push(r.markPotentiallyOrphaned(e, o));
        }),
      C.waitFor(i)
    );
  }
  removeMatchingKeysForTargetId(e, n) {
    return this.Ps.ls(n), C.resolve();
  }
  getMatchingKeysForTargetId(e, n) {
    const s = this.Ps.ds(n);
    return C.resolve(s);
  }
  containsKey(e, n) {
    return C.resolve(this.Ps.containsKey(n));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class yE {
  constructor(e, n) {
    (this.Vs = {}),
      (this.overlays = {}),
      (this.Ss = new tl(0)),
      (this.Ds = !1),
      (this.Ds = !0),
      (this.referenceDelegate = e(this)),
      (this.Cs = new gE(this)),
      (this.indexManager = new oE()),
      (this.remoteDocumentCache = (function (s) {
        return new pE(s);
      })((s) => this.referenceDelegate.xs(s))),
      (this.yt = new rE(n)),
      (this.Ns = new hE(this.yt));
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return (this.Ds = !1), Promise.resolve();
  }
  get started() {
    return this.Ds;
  }
  setDatabaseDeletedListener() {}
  setNetworkEnabled() {}
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let n = this.overlays[e.toKey()];
    return n || ((n = new fE()), (this.overlays[e.toKey()] = n)), n;
  }
  getMutationQueue(e, n) {
    let s = this.Vs[e.toKey()];
    return (
      s || ((s = new dE(n, this.referenceDelegate)), (this.Vs[e.toKey()] = s)),
      s
    );
  }
  getTargetCache() {
    return this.Cs;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Ns;
  }
  runTransaction(e, n, s) {
    V("MemoryPersistence", "Starting transaction:", e);
    const r = new vE(this.Ss.next());
    return (
      this.referenceDelegate.ks(),
      s(r)
        .next((i) => this.referenceDelegate.Os(r).next(() => i))
        .toPromise()
        .then((i) => (r.raiseOnCommittedEvent(), i))
    );
  }
  Ms(e, n) {
    return C.or(Object.values(this.Vs).map((s) => () => s.containsKey(e, n)));
  }
}
class vE extends ob {
  constructor(e) {
    super(), (this.currentSequenceNumber = e);
  }
}
class hl {
  constructor(e) {
    (this.persistence = e), (this.Fs = new ul()), (this.$s = null);
  }
  static Bs(e) {
    return new hl(e);
  }
  get Ls() {
    if (this.$s) return this.$s;
    throw z();
  }
  addReference(e, n, s) {
    return (
      this.Fs.addReference(s, n), this.Ls.delete(s.toString()), C.resolve()
    );
  }
  removeReference(e, n, s) {
    return (
      this.Fs.removeReference(s, n), this.Ls.add(s.toString()), C.resolve()
    );
  }
  markPotentiallyOrphaned(e, n) {
    return this.Ls.add(n.toString()), C.resolve();
  }
  removeTarget(e, n) {
    this.Fs.ls(n.targetId).forEach((r) => this.Ls.add(r.toString()));
    const s = this.persistence.getTargetCache();
    return s
      .getMatchingKeysForTargetId(e, n.targetId)
      .next((r) => {
        r.forEach((i) => this.Ls.add(i.toString()));
      })
      .next(() => s.removeTargetData(e, n));
  }
  ks() {
    this.$s = new Set();
  }
  Os(e) {
    const n = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return C.forEach(this.Ls, (s) => {
      const r = j.fromPath(s);
      return this.qs(e, r).next((i) => {
        i || n.removeEntry(r, X.min());
      });
    }).next(() => ((this.$s = null), n.apply(e)));
  }
  updateLimboDocument(e, n) {
    return this.qs(e, n).next((s) => {
      s ? this.Ls.delete(n.toString()) : this.Ls.add(n.toString());
    });
  }
  xs(e) {
    return 0;
  }
  qs(e, n) {
    return C.or([
      () => C.resolve(this.Fs.containsKey(n)),
      () => this.persistence.getTargetCache().containsKey(e, n),
      () => this.persistence.Ms(e, n),
    ]);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class fl {
  constructor(e, n, s, r) {
    (this.targetId = e), (this.fromCache = n), (this.Si = s), (this.Di = r);
  }
  static Ci(e, n) {
    let s = re(),
      r = re();
    for (const i of n.docChanges)
      switch (i.type) {
        case 0:
          s = s.add(i.doc.key);
          break;
        case 1:
          r = r.add(i.doc.key);
      }
    return new fl(e, n.fromCache, s, r);
  }
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class wE {
  constructor() {
    this.xi = !1;
  }
  initialize(e, n) {
    (this.Ni = e), (this.indexManager = n), (this.xi = !0);
  }
  getDocumentsMatchingQuery(e, n, s, r) {
    return this.ki(e, n)
      .next((i) => i || this.Oi(e, n, r, s))
      .next((i) => i || this.Mi(e, n));
  }
  ki(e, n) {
    if (fh(n)) return C.resolve(null);
    let s = Zt(n);
    return this.indexManager.getIndexType(e, s).next((r) =>
      r === 0
        ? null
        : (n.limit !== null && r === 1 && ((n = nc(n, null, "F")), (s = Zt(n))),
          this.indexManager.getDocumentsMatchingTarget(e, s).next((i) => {
            const o = re(...i);
            return this.Ni.getDocuments(e, o).next((a) =>
              this.indexManager.getMinOffset(e, s).next((c) => {
                const l = this.Fi(n, a);
                return this.$i(n, l, o, c.readTime)
                  ? this.ki(e, nc(n, null, "F"))
                  : this.Bi(e, l, n, c);
              })
            );
          }))
    );
  }
  Oi(e, n, s, r) {
    return fh(n) || r.isEqual(X.min())
      ? this.Mi(e, n)
      : this.Ni.getDocuments(e, s).next((i) => {
          const o = this.Fi(n, i);
          return this.$i(n, o, s, r)
            ? this.Mi(e, n)
            : (nh() <= he.DEBUG &&
                V(
                  "QueryEngine",
                  "Re-using previous result from %s to execute query: %s",
                  r.toString(),
                  sc(n)
                ),
              this.Bi(e, o, n, nb(r, -1)));
        });
  }
  Fi(e, n) {
    let s = new $e(Np(e));
    return (
      n.forEach((r, i) => {
        ol(e, i) && (s = s.add(i));
      }),
      s
    );
  }
  $i(e, n, s, r) {
    if (e.limit === null) return !1;
    if (s.size !== n.size) return !0;
    const i = e.limitType === "F" ? n.last() : n.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(r) > 0);
  }
  Mi(e, n) {
    return (
      nh() <= he.DEBUG &&
        V("QueryEngine", "Using full collection scan to execute query:", sc(n)),
      this.Ni.getDocumentsMatchingQuery(e, n, vn.min())
    );
  }
  Bi(e, n, s, r) {
    return this.Ni.getDocumentsMatchingQuery(e, s, r).next(
      (i) => (
        n.forEach((o) => {
          i = i.insert(o.key, o);
        }),
        i
      )
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class _E {
  constructor(e, n, s, r) {
    (this.persistence = e),
      (this.Li = n),
      (this.yt = r),
      (this.qi = new Ue(fe)),
      (this.Ui = new Vs((i) => sl(i), rl)),
      (this.Ki = new Map()),
      (this.Gi = e.getRemoteDocumentCache()),
      (this.Cs = e.getTargetCache()),
      (this.Ns = e.getBundleCache()),
      this.Qi(s);
  }
  Qi(e) {
    (this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e)),
      (this.indexManager = this.persistence.getIndexManager(e)),
      (this.mutationQueue = this.persistence.getMutationQueue(
        e,
        this.indexManager
      )),
      (this.localDocuments = new uE(
        this.Gi,
        this.mutationQueue,
        this.documentOverlayCache,
        this.indexManager
      )),
      this.Gi.setIndexManager(this.indexManager),
      this.Li.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction(
      "Collect garbage",
      "readwrite-primary",
      (n) => e.collect(n, this.qi)
    );
  }
}
function bE(t, e, n, s) {
  return new _E(t, e, n, s);
}
async function em(t, e) {
  const n = ee(t);
  return await n.persistence.runTransaction(
    "Handle user change",
    "readonly",
    (s) => {
      let r;
      return n.mutationQueue
        .getAllMutationBatches(s)
        .next(
          (i) => ((r = i), n.Qi(e), n.mutationQueue.getAllMutationBatches(s))
        )
        .next((i) => {
          const o = [],
            a = [];
          let c = re();
          for (const l of r) {
            o.push(l.batchId);
            for (const u of l.mutations) c = c.add(u.key);
          }
          for (const l of i) {
            a.push(l.batchId);
            for (const u of l.mutations) c = c.add(u.key);
          }
          return n.localDocuments
            .getDocuments(s, c)
            .next((l) => ({ ji: l, removedBatchIds: o, addedBatchIds: a }));
        });
    }
  );
}
function EE(t, e) {
  const n = ee(t);
  return n.persistence.runTransaction(
    "Acknowledge batch",
    "readwrite-primary",
    (s) => {
      const r = e.batch.keys(),
        i = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      return (function (o, a, c, l) {
        const u = c.batch,
          h = u.keys();
        let f = C.resolve();
        return (
          h.forEach((m) => {
            f = f
              .next(() => l.getEntry(a, m))
              .next((g) => {
                const v = c.docVersions.get(m);
                we(v !== null),
                  g.version.compareTo(v) < 0 &&
                    (u.applyToRemoteDocument(g, c),
                    g.isValidDocument() &&
                      (g.setReadTime(c.commitVersion), l.addEntry(g)));
              });
          }),
          f.next(() => o.mutationQueue.removeMutationBatch(a, u))
        );
      })(n, s, e, i)
        .next(() => i.apply(s))
        .next(() => n.mutationQueue.performConsistencyCheck(s))
        .next(() =>
          n.documentOverlayCache.removeOverlaysForBatchId(s, r, e.batch.batchId)
        )
        .next(() =>
          n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
            s,
            (function (o) {
              let a = re();
              for (let c = 0; c < o.mutationResults.length; ++c)
                o.mutationResults[c].transformResults.length > 0 &&
                  (a = a.add(o.batch.mutations[c].key));
              return a;
            })(e)
          )
        )
        .next(() => n.localDocuments.getDocuments(s, r));
    }
  );
}
function tm(t) {
  const e = ee(t);
  return e.persistence.runTransaction(
    "Get last remote snapshot version",
    "readonly",
    (n) => e.Cs.getLastRemoteSnapshotVersion(n)
  );
}
function xE(t, e) {
  const n = ee(t),
    s = e.snapshotVersion;
  let r = n.qi;
  return n.persistence
    .runTransaction("Apply remote event", "readwrite-primary", (i) => {
      const o = n.Gi.newChangeBuffer({ trackRemovals: !0 });
      r = n.qi;
      const a = [];
      e.targetChanges.forEach((u, h) => {
        const f = r.get(h);
        if (!f) return;
        a.push(
          n.Cs.removeMatchingKeys(i, u.removedDocuments, h).next(() =>
            n.Cs.addMatchingKeys(i, u.addedDocuments, h)
          )
        );
        let m = f.withSequenceNumber(i.currentSequenceNumber);
        e.targetMismatches.has(h)
          ? (m = m
              .withResumeToken(Ze.EMPTY_BYTE_STRING, X.min())
              .withLastLimboFreeSnapshotVersion(X.min()))
          : u.resumeToken.approximateByteSize() > 0 &&
            (m = m.withResumeToken(u.resumeToken, s)),
          (r = r.insert(h, m)),
          (function (g, v, b) {
            return g.resumeToken.approximateByteSize() === 0 ||
              v.snapshotVersion.toMicroseconds() -
                g.snapshotVersion.toMicroseconds() >=
                3e8
              ? !0
              : b.addedDocuments.size +
                  b.modifiedDocuments.size +
                  b.removedDocuments.size >
                  0;
          })(f, m, u) && a.push(n.Cs.updateTargetData(i, m));
      });
      let c = en(),
        l = re();
      if (
        (e.documentUpdates.forEach((u) => {
          e.resolvedLimboDocuments.has(u) &&
            a.push(n.persistence.referenceDelegate.updateLimboDocument(i, u));
        }),
        a.push(
          TE(i, o, e.documentUpdates).next((u) => {
            (c = u.Wi), (l = u.zi);
          })
        ),
        !s.isEqual(X.min()))
      ) {
        const u = n.Cs.getLastRemoteSnapshotVersion(i).next((h) =>
          n.Cs.setTargetsMetadata(i, i.currentSequenceNumber, s)
        );
        a.push(u);
      }
      return C.waitFor(a)
        .next(() => o.apply(i))
        .next(() => n.localDocuments.getLocalViewOfDocuments(i, c, l))
        .next(() => c);
    })
    .then((i) => ((n.qi = r), i));
}
function TE(t, e, n) {
  let s = re(),
    r = re();
  return (
    n.forEach((i) => (s = s.add(i))),
    e.getEntries(t, s).next((i) => {
      let o = en();
      return (
        n.forEach((a, c) => {
          const l = i.get(a);
          c.isFoundDocument() !== l.isFoundDocument() && (r = r.add(a)),
            c.isNoDocument() && c.version.isEqual(X.min())
              ? (e.removeEntry(a, c.readTime), (o = o.insert(a, c)))
              : !l.isValidDocument() ||
                c.version.compareTo(l.version) > 0 ||
                (c.version.compareTo(l.version) === 0 && l.hasPendingWrites)
              ? (e.addEntry(c), (o = o.insert(a, c)))
              : V(
                  "LocalStore",
                  "Ignoring outdated watch update for ",
                  a,
                  ". Current version:",
                  l.version,
                  " Watch version:",
                  c.version
                );
        }),
        { Wi: o, zi: r }
      );
    })
  );
}
function IE(t, e) {
  const n = ee(t);
  return n.persistence.runTransaction(
    "Get next mutation batch",
    "readonly",
    (s) => (
      e === void 0 && (e = -1),
      n.mutationQueue.getNextMutationBatchAfterBatchId(s, e)
    )
  );
}
function CE(t, e) {
  const n = ee(t);
  return n.persistence
    .runTransaction("Allocate target", "readwrite", (s) => {
      let r;
      return n.Cs.getTargetData(s, e).next((i) =>
        i
          ? ((r = i), C.resolve(r))
          : n.Cs.allocateTargetId(s).next(
              (o) => (
                (r = new Kn(e, o, 0, s.currentSequenceNumber)),
                n.Cs.addTargetData(s, r).next(() => r)
              )
            )
      );
    })
    .then((s) => {
      const r = n.qi.get(s.targetId);
      return (
        (r === null || s.snapshotVersion.compareTo(r.snapshotVersion) > 0) &&
          ((n.qi = n.qi.insert(s.targetId, s)), n.Ui.set(e, s.targetId)),
        s
      );
    });
}
async function ac(t, e, n) {
  const s = ee(t),
    r = s.qi.get(e),
    i = n ? "readwrite" : "readwrite-primary";
  try {
    n ||
      (await s.persistence.runTransaction("Release target", i, (o) =>
        s.persistence.referenceDelegate.removeTarget(o, r)
      ));
  } catch (o) {
    if (!Vr(o)) throw o;
    V("LocalStore", `Failed to update sequence numbers for target ${e}: ${o}`);
  }
  (s.qi = s.qi.remove(e)), s.Ui.delete(r.target);
}
function bh(t, e, n) {
  const s = ee(t);
  let r = X.min(),
    i = re();
  return s.persistence.runTransaction("Execute query", "readonly", (o) =>
    (function (a, c, l) {
      const u = ee(a),
        h = u.Ui.get(l);
      return h !== void 0 ? C.resolve(u.qi.get(h)) : u.Cs.getTargetData(c, l);
    })(s, o, Zt(e))
      .next((a) => {
        if (a)
          return (
            (r = a.lastLimboFreeSnapshotVersion),
            s.Cs.getMatchingKeysForTargetId(o, a.targetId).next((c) => {
              i = c;
            })
          );
      })
      .next(() =>
        s.Li.getDocumentsMatchingQuery(o, e, n ? r : X.min(), n ? i : re())
      )
      .next((a) => (SE(s, Eb(e), a), { documents: a, Hi: i }))
  );
}
function SE(t, e, n) {
  let s = t.Ki.get(e) || X.min();
  n.forEach((r, i) => {
    i.readTime.compareTo(s) > 0 && (s = i.readTime);
  }),
    t.Ki.set(e, s);
}
class Eh {
  constructor() {
    this.activeTargetIds = Kp();
  }
  er(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  nr(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  tr() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now(),
    };
    return JSON.stringify(e);
  }
}
class AE {
  constructor() {
    (this.Lr = new Eh()),
      (this.qr = {}),
      (this.onlineStateHandler = null),
      (this.sequenceNumberHandler = null);
  }
  addPendingMutation(e) {}
  updateMutationState(e, n, s) {}
  addLocalQueryTarget(e) {
    return this.Lr.er(e), this.qr[e] || "not-current";
  }
  updateQueryState(e, n, s) {
    this.qr[e] = n;
  }
  removeLocalQueryTarget(e) {
    this.Lr.nr(e);
  }
  isLocalQueryTarget(e) {
    return this.Lr.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.qr[e];
  }
  getAllActiveQueryTargets() {
    return this.Lr.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.Lr.activeTargetIds.has(e);
  }
  start() {
    return (this.Lr = new Eh()), Promise.resolve();
  }
  handleUserChange(e, n, s) {}
  setOnlineState(e) {}
  shutdown() {}
  writeSequenceNumber(e) {}
  notifyBundleLoaded(e) {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class kE {
  Ur(e) {}
  shutdown() {}
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xh {
  constructor() {
    (this.Kr = () => this.Gr()),
      (this.Qr = () => this.jr()),
      (this.Wr = []),
      this.zr();
  }
  Ur(e) {
    this.Wr.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.Kr),
      window.removeEventListener("offline", this.Qr);
  }
  zr() {
    window.addEventListener("online", this.Kr),
      window.addEventListener("offline", this.Qr);
  }
  Gr() {
    V("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.Wr) e(0);
  }
  jr() {
    V("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.Wr) e(1);
  }
  static C() {
    return (
      typeof window < "u" &&
      window.addEventListener !== void 0 &&
      window.removeEventListener !== void 0
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const RE = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery",
};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class DE {
  constructor(e) {
    (this.Hr = e.Hr), (this.Jr = e.Jr);
  }
  Yr(e) {
    this.Xr = e;
  }
  Zr(e) {
    this.eo = e;
  }
  onMessage(e) {
    this.no = e;
  }
  close() {
    this.Jr();
  }
  send(e) {
    this.Hr(e);
  }
  so() {
    this.Xr();
  }
  io(e) {
    this.eo(e);
  }
  ro(e) {
    this.no(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class NE extends class {
  constructor(e) {
    (this.databaseInfo = e), (this.databaseId = e.databaseId);
    const n = e.ssl ? "https" : "http";
    (this.oo = n + "://" + e.host),
      (this.uo =
        "projects/" +
        this.databaseId.projectId +
        "/databases/" +
        this.databaseId.database +
        "/documents");
  }
  get co() {
    return !1;
  }
  ao(e, n, s, r, i) {
    const o = this.ho(e, n);
    V("RestConnection", "Sending: ", o, s);
    const a = {};
    return (
      this.lo(a, r, i),
      this.fo(e, o, a, s).then(
        (c) => (V("RestConnection", "Received: ", c), c),
        (c) => {
          throw (
            (Ya(
              "RestConnection",
              `${e} failed with error: `,
              c,
              "url: ",
              o,
              "request:",
              s
            ),
            c)
          );
        }
      )
    );
  }
  _o(e, n, s, r, i, o) {
    return this.ao(e, n, s, r, i);
  }
  lo(e, n, s) {
    (e["X-Goog-Api-Client"] = "gl-js/ fire/" + $s),
      (e["Content-Type"] = "text/plain"),
      this.databaseInfo.appId &&
        (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
      n && n.headers.forEach((r, i) => (e[i] = r)),
      s && s.headers.forEach((r, i) => (e[i] = r));
  }
  ho(e, n) {
    const s = RE[e];
    return `${this.oo}/v1/${n}:${s}`;
  }
} {
  constructor(e) {
    super(e),
      (this.forceLongPolling = e.forceLongPolling),
      (this.autoDetectLongPolling = e.autoDetectLongPolling),
      (this.useFetchStreams = e.useFetchStreams);
  }
  fo(e, n, s, r) {
    return new Promise((i, o) => {
      const a = new z_();
      a.setWithCredentials(!0),
        a.listenOnce(q_.COMPLETE, () => {
          try {
            switch (a.getLastErrorCode()) {
              case aa.NO_ERROR:
                const l = a.getResponseJson();
                V("Connection", "XHR received:", JSON.stringify(l)), i(l);
                break;
              case aa.TIMEOUT:
                V("Connection", 'RPC "' + e + '" timed out'),
                  o(new L(E.DEADLINE_EXCEEDED, "Request time out"));
                break;
              case aa.HTTP_ERROR:
                const u = a.getStatus();
                if (
                  (V(
                    "Connection",
                    'RPC "' + e + '" failed with status:',
                    u,
                    "response text:",
                    a.getResponseText()
                  ),
                  u > 0)
                ) {
                  let h = a.getResponseJson();
                  Array.isArray(h) && (h = h[0]);
                  const f = h == null ? void 0 : h.error;
                  if (f && f.status && f.message) {
                    const m = (function (g) {
                      const v = g.toLowerCase().replace(/_/g, "-");
                      return Object.values(E).indexOf(v) >= 0 ? v : E.UNKNOWN;
                    })(f.status);
                    o(new L(m, f.message));
                  } else
                    o(
                      new L(
                        E.UNKNOWN,
                        "Server responded with status " + a.getStatus()
                      )
                    );
                } else o(new L(E.UNAVAILABLE, "Connection failed."));
                break;
              default:
                z();
            }
          } finally {
            V("Connection", 'RPC "' + e + '" completed.');
          }
        });
      const c = JSON.stringify(r);
      a.send(n, "POST", c, s, 15);
    });
  }
  wo(e, n, s) {
    const r = [
        this.oo,
        "/",
        "google.firestore.v1.Firestore",
        "/",
        e,
        "/channel",
      ],
      i = B_(),
      o = j_(),
      a = {
        httpSessionIdParam: "gsessionid",
        initMessageHeaders: {},
        messageUrlParams: {
          database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
        },
        sendRawJson: !0,
        supportsCrossDomainXhr: !0,
        internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
        forceLongPolling: this.forceLongPolling,
        detectBufferingProxy: this.autoDetectLongPolling,
      };
    this.useFetchStreams && (a.xmlHttpFactory = new K_({})),
      this.lo(a.initMessageHeaders, n, s),
      (a.encodeInitMessageHeaders = !0);
    const c = r.join("");
    V("Connection", "Creating WebChannel: " + c, a);
    const l = i.createWebChannel(c, a);
    let u = !1,
      h = !1;
    const f = new DE({
        Hr: (g) => {
          h
            ? V("Connection", "Not sending because WebChannel is closed:", g)
            : (u ||
                (V("Connection", "Opening WebChannel transport."),
                l.open(),
                (u = !0)),
              V("Connection", "WebChannel sending:", g),
              l.send(g));
        },
        Jr: () => l.close(),
      }),
      m = (g, v, b) => {
        g.listen(v, (S) => {
          try {
            b(S);
          } catch (R) {
            setTimeout(() => {
              throw R;
            }, 0);
          }
        });
      };
    return (
      m(l, ri.EventType.OPEN, () => {
        h || V("Connection", "WebChannel transport opened.");
      }),
      m(l, ri.EventType.CLOSE, () => {
        h || ((h = !0), V("Connection", "WebChannel transport closed"), f.io());
      }),
      m(l, ri.EventType.ERROR, (g) => {
        h ||
          ((h = !0),
          Ya("Connection", "WebChannel transport errored:", g),
          f.io(new L(E.UNAVAILABLE, "The operation could not be completed")));
      }),
      m(l, ri.EventType.MESSAGE, (g) => {
        var v;
        if (!h) {
          const b = g.data[0];
          we(!!b);
          const S = b,
            R =
              S.error ||
              ((v = S[0]) === null || v === void 0 ? void 0 : v.error);
          if (R) {
            V("Connection", "WebChannel received error:", R);
            const O = R.status;
            let U = (function (le) {
                const K = Ne[le];
                if (K !== void 0) return Bp(K);
              })(O),
              J = R.message;
            U === void 0 &&
              ((U = E.INTERNAL),
              (J =
                "Unknown error status: " + O + " with message " + R.message)),
              (h = !0),
              f.io(new L(U, J)),
              l.close();
          } else V("Connection", "WebChannel received:", b), f.ro(b);
        }
      }),
      m(o, H_.STAT_EVENT, (g) => {
        g.stat === eh.PROXY
          ? V("Connection", "Detected buffering proxy")
          : g.stat === eh.NOPROXY &&
            V("Connection", "Detected no buffering proxy");
      }),
      setTimeout(() => {
        f.so();
      }, 0),
      f
    );
  }
}
function la() {
  return typeof document < "u" ? document : null;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function No(t) {
  return new jb(t, !0);
}
class nm {
  constructor(e, n, s = 1e3, r = 1.5, i = 6e4) {
    (this.Hs = e),
      (this.timerId = n),
      (this.mo = s),
      (this.yo = r),
      (this.po = i),
      (this.Io = 0),
      (this.To = null),
      (this.Eo = Date.now()),
      this.reset();
  }
  reset() {
    this.Io = 0;
  }
  Ao() {
    this.Io = this.po;
  }
  Ro(e) {
    this.cancel();
    const n = Math.floor(this.Io + this.bo()),
      s = Math.max(0, Date.now() - this.Eo),
      r = Math.max(0, n - s);
    r > 0 &&
      V(
        "ExponentialBackoff",
        `Backing off for ${r} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`
      ),
      (this.To = this.Hs.enqueueAfterDelay(
        this.timerId,
        r,
        () => ((this.Eo = Date.now()), e())
      )),
      (this.Io *= this.yo),
      this.Io < this.mo && (this.Io = this.mo),
      this.Io > this.po && (this.Io = this.po);
  }
  Po() {
    this.To !== null && (this.To.skipDelay(), (this.To = null));
  }
  cancel() {
    this.To !== null && (this.To.cancel(), (this.To = null));
  }
  bo() {
    return (Math.random() - 0.5) * this.Io;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class sm {
  constructor(e, n, s, r, i, o, a, c) {
    (this.Hs = e),
      (this.vo = s),
      (this.Vo = r),
      (this.connection = i),
      (this.authCredentialsProvider = o),
      (this.appCheckCredentialsProvider = a),
      (this.listener = c),
      (this.state = 0),
      (this.So = 0),
      (this.Do = null),
      (this.Co = null),
      (this.stream = null),
      (this.xo = new nm(e, n));
  }
  No() {
    return this.state === 1 || this.state === 5 || this.ko();
  }
  ko() {
    return this.state === 2 || this.state === 3;
  }
  start() {
    this.state !== 4 ? this.auth() : this.Oo();
  }
  async stop() {
    this.No() && (await this.close(0));
  }
  Mo() {
    (this.state = 0), this.xo.reset();
  }
  Fo() {
    this.ko() &&
      this.Do === null &&
      (this.Do = this.Hs.enqueueAfterDelay(this.vo, 6e4, () => this.$o()));
  }
  Bo(e) {
    this.Lo(), this.stream.send(e);
  }
  async $o() {
    if (this.ko()) return this.close(0);
  }
  Lo() {
    this.Do && (this.Do.cancel(), (this.Do = null));
  }
  qo() {
    this.Co && (this.Co.cancel(), (this.Co = null));
  }
  async close(e, n) {
    this.Lo(),
      this.qo(),
      this.xo.cancel(),
      this.So++,
      e !== 4
        ? this.xo.reset()
        : n && n.code === E.RESOURCE_EXHAUSTED
        ? (Jt(n.toString()),
          Jt("Using maximum backoff delay to prevent overloading the backend."),
          this.xo.Ao())
        : n &&
          n.code === E.UNAUTHENTICATED &&
          this.state !== 3 &&
          (this.authCredentialsProvider.invalidateToken(),
          this.appCheckCredentialsProvider.invalidateToken()),
      this.stream !== null &&
        (this.Uo(), this.stream.close(), (this.stream = null)),
      (this.state = e),
      await this.listener.Zr(n);
  }
  Uo() {}
  auth() {
    this.state = 1;
    const e = this.Ko(this.So),
      n = this.So;
    Promise.all([
      this.authCredentialsProvider.getToken(),
      this.appCheckCredentialsProvider.getToken(),
    ]).then(
      ([s, r]) => {
        this.So === n && this.Go(s, r);
      },
      (s) => {
        e(() => {
          const r = new L(
            E.UNKNOWN,
            "Fetching auth token failed: " + s.message
          );
          return this.Qo(r);
        });
      }
    );
  }
  Go(e, n) {
    const s = this.Ko(this.So);
    (this.stream = this.jo(e, n)),
      this.stream.Yr(() => {
        s(
          () => (
            (this.state = 2),
            (this.Co = this.Hs.enqueueAfterDelay(
              this.Vo,
              1e4,
              () => (this.ko() && (this.state = 3), Promise.resolve())
            )),
            this.listener.Yr()
          )
        );
      }),
      this.stream.Zr((r) => {
        s(() => this.Qo(r));
      }),
      this.stream.onMessage((r) => {
        s(() => this.onMessage(r));
      });
  }
  Oo() {
    (this.state = 5),
      this.xo.Ro(async () => {
        (this.state = 0), this.start();
      });
  }
  Qo(e) {
    return (
      V("PersistentStream", `close with error: ${e}`),
      (this.stream = null),
      this.close(4, e)
    );
  }
  Ko(e) {
    return (n) => {
      this.Hs.enqueueAndForget(() =>
        this.So === e
          ? n()
          : (V(
              "PersistentStream",
              "stream callback skipped by getCloseGuardedDispatcher."
            ),
            Promise.resolve())
      );
    };
  }
}
class OE extends sm {
  constructor(e, n, s, r, i, o) {
    super(
      e,
      "listen_stream_connection_backoff",
      "listen_stream_idle",
      "health_check_timeout",
      n,
      s,
      r,
      o
    ),
      (this.yt = i);
  }
  jo(e, n) {
    return this.connection.wo("Listen", e, n);
  }
  onMessage(e) {
    this.xo.reset();
    const n = Kb(this.yt, e),
      s = (function (r) {
        if (!("targetChange" in r)) return X.min();
        const i = r.targetChange;
        return i.targetIds && i.targetIds.length
          ? X.min()
          : i.readTime
          ? Ut(i.readTime)
          : X.min();
      })(e);
    return this.listener.Wo(n, s);
  }
  zo(e) {
    const n = {};
    (n.database = oc(this.yt)),
      (n.addTarget = (function (r, i) {
        let o;
        const a = i.target;
        return (
          (o = ec(a) ? { documents: Wb(r, a) } : { query: Qb(r, a) }),
          (o.targetId = i.targetId),
          i.resumeToken.approximateByteSize() > 0
            ? (o.resumeToken = Wp(r, i.resumeToken))
            : i.snapshotVersion.compareTo(X.min()) > 0 &&
              (o.readTime = Bi(r, i.snapshotVersion.toTimestamp())),
          o
        );
      })(this.yt, e));
    const s = Xb(this.yt, e);
    s && (n.labels = s), this.Bo(n);
  }
  Ho(e) {
    const n = {};
    (n.database = oc(this.yt)), (n.removeTarget = e), this.Bo(n);
  }
}
class PE extends sm {
  constructor(e, n, s, r, i, o) {
    super(
      e,
      "write_stream_connection_backoff",
      "write_stream_idle",
      "health_check_timeout",
      n,
      s,
      r,
      o
    ),
      (this.yt = i),
      (this.Jo = !1);
  }
  get Yo() {
    return this.Jo;
  }
  start() {
    (this.Jo = !1), (this.lastStreamToken = void 0), super.start();
  }
  Uo() {
    this.Jo && this.Xo([]);
  }
  jo(e, n) {
    return this.connection.wo("Write", e, n);
  }
  onMessage(e) {
    if (
      (we(!!e.streamToken), (this.lastStreamToken = e.streamToken), this.Jo)
    ) {
      this.xo.reset();
      const n = Gb(e.writeResults, e.commitTime),
        s = Ut(e.commitTime);
      return this.listener.Zo(s, n);
    }
    return (
      we(!e.writeResults || e.writeResults.length === 0),
      (this.Jo = !0),
      this.listener.tu()
    );
  }
  eu() {
    const e = {};
    (e.database = oc(this.yt)), this.Bo(e);
  }
  Xo(e) {
    const n = {
      streamToken: this.lastStreamToken,
      writes: e.map((s) => zb(this.yt, s)),
    };
    this.Bo(n);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ME extends class {} {
  constructor(e, n, s, r) {
    super(),
      (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.connection = s),
      (this.yt = r),
      (this.nu = !1);
  }
  su() {
    if (this.nu)
      throw new L(
        E.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  ao(e, n, s) {
    return (
      this.su(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([r, i]) => this.connection.ao(e, n, s, r, i))
        .catch((r) => {
          throw r.name === "FirebaseError"
            ? (r.code === E.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              r)
            : new L(E.UNKNOWN, r.toString());
        })
    );
  }
  _o(e, n, s, r) {
    return (
      this.su(),
      Promise.all([
        this.authCredentials.getToken(),
        this.appCheckCredentials.getToken(),
      ])
        .then(([i, o]) => this.connection._o(e, n, s, i, o, r))
        .catch((i) => {
          throw i.name === "FirebaseError"
            ? (i.code === E.UNAUTHENTICATED &&
                (this.authCredentials.invalidateToken(),
                this.appCheckCredentials.invalidateToken()),
              i)
            : new L(E.UNKNOWN, i.toString());
        })
    );
  }
  terminate() {
    this.nu = !0;
  }
}
class LE {
  constructor(e, n) {
    (this.asyncQueue = e),
      (this.onlineStateHandler = n),
      (this.state = "Unknown"),
      (this.iu = 0),
      (this.ru = null),
      (this.ou = !0);
  }
  uu() {
    this.iu === 0 &&
      (this.cu("Unknown"),
      (this.ru = this.asyncQueue.enqueueAfterDelay(
        "online_state_timeout",
        1e4,
        () => (
          (this.ru = null),
          this.au("Backend didn't respond within 10 seconds."),
          this.cu("Offline"),
          Promise.resolve()
        )
      )));
  }
  hu(e) {
    this.state === "Online"
      ? this.cu("Unknown")
      : (this.iu++,
        this.iu >= 1 &&
          (this.lu(),
          this.au(
            `Connection failed 1 times. Most recent error: ${e.toString()}`
          ),
          this.cu("Offline")));
  }
  set(e) {
    this.lu(), (this.iu = 0), e === "Online" && (this.ou = !1), this.cu(e);
  }
  cu(e) {
    e !== this.state && ((this.state = e), this.onlineStateHandler(e));
  }
  au(e) {
    const n = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.ou ? (Jt(n), (this.ou = !1)) : V("OnlineStateTracker", n);
  }
  lu() {
    this.ru !== null && (this.ru.cancel(), (this.ru = null));
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class FE {
  constructor(e, n, s, r, i) {
    (this.localStore = e),
      (this.datastore = n),
      (this.asyncQueue = s),
      (this.remoteSyncer = {}),
      (this.fu = []),
      (this.du = new Map()),
      (this._u = new Set()),
      (this.wu = []),
      (this.mu = i),
      this.mu.Ur((o) => {
        s.enqueueAndForget(async () => {
          Zn(this) &&
            (V(
              "RemoteStore",
              "Restarting streams for network reachability change."
            ),
            await (async function (a) {
              const c = ee(a);
              c._u.add(4),
                await qr(c),
                c.gu.set("Unknown"),
                c._u.delete(4),
                await Oo(c);
            })(this));
        });
      }),
      (this.gu = new LE(s, r));
  }
}
async function Oo(t) {
  if (Zn(t)) for (const e of t.wu) await e(!0);
}
async function qr(t) {
  for (const e of t.wu) await e(!1);
}
function rm(t, e) {
  const n = ee(t);
  n.du.has(e.targetId) ||
    (n.du.set(e.targetId, e), ml(n) ? pl(n) : Bs(n).ko() && dl(n, e));
}
function im(t, e) {
  const n = ee(t),
    s = Bs(n);
  n.du.delete(e),
    s.ko() && om(n, e),
    n.du.size === 0 && (s.ko() ? s.Fo() : Zn(n) && n.gu.set("Unknown"));
}
function dl(t, e) {
  t.yu.Ot(e.targetId), Bs(t).zo(e);
}
function om(t, e) {
  t.yu.Ot(e), Bs(t).Ho(e);
}
function pl(t) {
  (t.yu = new $b({
    getRemoteKeysForTarget: (e) => t.remoteSyncer.getRemoteKeysForTarget(e),
    ne: (e) => t.du.get(e) || null,
  })),
    Bs(t).start(),
    t.gu.uu();
}
function ml(t) {
  return Zn(t) && !Bs(t).No() && t.du.size > 0;
}
function Zn(t) {
  return ee(t)._u.size === 0;
}
function am(t) {
  t.yu = void 0;
}
async function $E(t) {
  t.du.forEach((e, n) => {
    dl(t, e);
  });
}
async function UE(t, e) {
  am(t), ml(t) ? (t.gu.hu(e), pl(t)) : t.gu.set("Unknown");
}
async function VE(t, e, n) {
  if ((t.gu.set("Online"), e instanceof Gp && e.state === 2 && e.cause))
    try {
      await (async function (s, r) {
        const i = r.cause;
        for (const o of r.targetIds)
          s.du.has(o) &&
            (await s.remoteSyncer.rejectListen(o, i),
            s.du.delete(o),
            s.yu.removeTarget(o));
      })(t, e);
    } catch (s) {
      V(
        "RemoteStore",
        "Failed to remove targets %s: %s ",
        e.targetIds.join(","),
        s
      ),
        await ji(t, s);
    }
  else if (
    (e instanceof yi ? t.yu.Kt(e) : e instanceof zp ? t.yu.Jt(e) : t.yu.jt(e),
    !n.isEqual(X.min()))
  )
    try {
      const s = await tm(t.localStore);
      n.compareTo(s) >= 0 &&
        (await (function (r, i) {
          const o = r.yu.Zt(i);
          return (
            o.targetChanges.forEach((a, c) => {
              if (a.resumeToken.approximateByteSize() > 0) {
                const l = r.du.get(c);
                l && r.du.set(c, l.withResumeToken(a.resumeToken, i));
              }
            }),
            o.targetMismatches.forEach((a) => {
              const c = r.du.get(a);
              if (!c) return;
              r.du.set(
                a,
                c.withResumeToken(Ze.EMPTY_BYTE_STRING, c.snapshotVersion)
              ),
                om(r, a);
              const l = new Kn(c.target, a, 1, c.sequenceNumber);
              dl(r, l);
            }),
            r.remoteSyncer.applyRemoteEvent(o)
          );
        })(t, n));
    } catch (s) {
      V("RemoteStore", "Failed to raise snapshot:", s), await ji(t, s);
    }
}
async function ji(t, e, n) {
  if (!Vr(e)) throw e;
  t._u.add(1),
    await qr(t),
    t.gu.set("Offline"),
    n || (n = () => tm(t.localStore)),
    t.asyncQueue.enqueueRetryable(async () => {
      V("RemoteStore", "Retrying IndexedDB access"),
        await n(),
        t._u.delete(1),
        await Oo(t);
    });
}
function cm(t, e) {
  return e().catch((n) => ji(t, n, e));
}
async function Po(t) {
  const e = ee(t),
    n = _n(e);
  let s = e.fu.length > 0 ? e.fu[e.fu.length - 1].batchId : -1;
  for (; BE(e); )
    try {
      const r = await IE(e.localStore, s);
      if (r === null) {
        e.fu.length === 0 && n.Fo();
        break;
      }
      (s = r.batchId), jE(e, r);
    } catch (r) {
      await ji(e, r);
    }
  lm(e) && um(e);
}
function BE(t) {
  return Zn(t) && t.fu.length < 10;
}
function jE(t, e) {
  t.fu.push(e);
  const n = _n(t);
  n.ko() && n.Yo && n.Xo(e.mutations);
}
function lm(t) {
  return Zn(t) && !_n(t).No() && t.fu.length > 0;
}
function um(t) {
  _n(t).start();
}
async function qE(t) {
  _n(t).eu();
}
async function HE(t) {
  const e = _n(t);
  for (const n of t.fu) e.Xo(n.mutations);
}
async function KE(t, e, n) {
  const s = t.fu.shift(),
    r = ll.from(s, e, n);
  await cm(t, () => t.remoteSyncer.applySuccessfulWrite(r)), await Po(t);
}
async function zE(t, e) {
  e &&
    _n(t).Yo &&
    (await (async function (n, s) {
      if (((r = s.code), Ob(r) && r !== E.ABORTED)) {
        const i = n.fu.shift();
        _n(n).Mo(),
          await cm(n, () => n.remoteSyncer.rejectFailedWrite(i.batchId, s)),
          await Po(n);
      }
      var r;
    })(t, e)),
    lm(t) && um(t);
}
async function Th(t, e) {
  const n = ee(t);
  n.asyncQueue.verifyOperationInProgress(),
    V("RemoteStore", "RemoteStore received new credentials");
  const s = Zn(n);
  n._u.add(3),
    await qr(n),
    s && n.gu.set("Unknown"),
    await n.remoteSyncer.handleCredentialChange(e),
    n._u.delete(3),
    await Oo(n);
}
async function GE(t, e) {
  const n = ee(t);
  e
    ? (n._u.delete(2), await Oo(n))
    : e || (n._u.add(2), await qr(n), n.gu.set("Unknown"));
}
function Bs(t) {
  return (
    t.pu ||
      ((t.pu = (function (e, n, s) {
        const r = ee(e);
        return (
          r.su(),
          new OE(
            n,
            r.connection,
            r.authCredentials,
            r.appCheckCredentials,
            r.yt,
            s
          )
        );
      })(t.datastore, t.asyncQueue, {
        Yr: $E.bind(null, t),
        Zr: UE.bind(null, t),
        Wo: VE.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.pu.Mo(), ml(t) ? pl(t) : t.gu.set("Unknown"))
          : (await t.pu.stop(), am(t));
      })),
    t.pu
  );
}
function _n(t) {
  return (
    t.Iu ||
      ((t.Iu = (function (e, n, s) {
        const r = ee(e);
        return (
          r.su(),
          new PE(
            n,
            r.connection,
            r.authCredentials,
            r.appCheckCredentials,
            r.yt,
            s
          )
        );
      })(t.datastore, t.asyncQueue, {
        Yr: qE.bind(null, t),
        Zr: zE.bind(null, t),
        tu: HE.bind(null, t),
        Zo: KE.bind(null, t),
      })),
      t.wu.push(async (e) => {
        e
          ? (t.Iu.Mo(), await Po(t))
          : (await t.Iu.stop(),
            t.fu.length > 0 &&
              (V(
                "RemoteStore",
                `Stopping write stream with ${t.fu.length} pending writes`
              ),
              (t.fu = [])));
      })),
    t.Iu
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class gl {
  constructor(e, n, s, r, i) {
    (this.asyncQueue = e),
      (this.timerId = n),
      (this.targetTimeMs = s),
      (this.op = r),
      (this.removalCallback = i),
      (this.deferred = new Qt()),
      (this.then = this.deferred.promise.then.bind(this.deferred.promise)),
      this.deferred.promise.catch((o) => {});
  }
  static createAndSchedule(e, n, s, r, i) {
    const o = Date.now() + s,
      a = new gl(e, n, o, r, i);
    return a.start(s), a;
  }
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  skipDelay() {
    return this.handleDelayElapsed();
  }
  cancel(e) {
    this.timerHandle !== null &&
      (this.clearTimeout(),
      this.deferred.reject(
        new L(E.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
      ));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() =>
      this.timerHandle !== null
        ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e)))
        : Promise.resolve()
    );
  }
  clearTimeout() {
    this.timerHandle !== null &&
      (this.removalCallback(this),
      clearTimeout(this.timerHandle),
      (this.timerHandle = null));
  }
}
function yl(t, e) {
  if ((Jt("AsyncQueue", `${e}: ${t}`), Vr(t)))
    return new L(E.UNAVAILABLE, `${e}: ${t}`);
  throw t;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class ms {
  constructor(e) {
    (this.comparator = e
      ? (n, s) => e(n, s) || j.comparator(n.key, s.key)
      : (n, s) => j.comparator(n.key, s.key)),
      (this.keyedMap = Qs()),
      (this.sortedSet = new Ue(this.comparator));
  }
  static emptySet(e) {
    return new ms(e.comparator);
  }
  has(e) {
    return this.keyedMap.get(e) != null;
  }
  get(e) {
    return this.keyedMap.get(e);
  }
  first() {
    return this.sortedSet.minKey();
  }
  last() {
    return this.sortedSet.maxKey();
  }
  isEmpty() {
    return this.sortedSet.isEmpty();
  }
  indexOf(e) {
    const n = this.keyedMap.get(e);
    return n ? this.sortedSet.indexOf(n) : -1;
  }
  get size() {
    return this.sortedSet.size;
  }
  forEach(e) {
    this.sortedSet.inorderTraversal((n, s) => (e(n), !1));
  }
  add(e) {
    const n = this.delete(e.key);
    return n.copy(n.keyedMap.insert(e.key, e), n.sortedSet.insert(e, null));
  }
  delete(e) {
    const n = this.get(e);
    return n
      ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(n))
      : this;
  }
  isEqual(e) {
    if (!(e instanceof ms) || this.size !== e.size) return !1;
    const n = this.sortedSet.getIterator(),
      s = e.sortedSet.getIterator();
    for (; n.hasNext(); ) {
      const r = n.getNext().key,
        i = s.getNext().key;
      if (!r.isEqual(i)) return !1;
    }
    return !0;
  }
  toString() {
    const e = [];
    return (
      this.forEach((n) => {
        e.push(n.toString());
      }),
      e.length === 0
        ? "DocumentSet ()"
        : `DocumentSet (
  ` +
          e.join(`  
`) +
          `
)`
    );
  }
  copy(e, n) {
    const s = new ms();
    return (
      (s.comparator = this.comparator), (s.keyedMap = e), (s.sortedSet = n), s
    );
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ih {
  constructor() {
    this.Tu = new Ue(j.comparator);
  }
  track(e) {
    const n = e.doc.key,
      s = this.Tu.get(n);
    s
      ? e.type !== 0 && s.type === 3
        ? (this.Tu = this.Tu.insert(n, e))
        : e.type === 3 && s.type !== 1
        ? (this.Tu = this.Tu.insert(n, { type: s.type, doc: e.doc }))
        : e.type === 2 && s.type === 2
        ? (this.Tu = this.Tu.insert(n, { type: 2, doc: e.doc }))
        : e.type === 2 && s.type === 0
        ? (this.Tu = this.Tu.insert(n, { type: 0, doc: e.doc }))
        : e.type === 1 && s.type === 0
        ? (this.Tu = this.Tu.remove(n))
        : e.type === 1 && s.type === 2
        ? (this.Tu = this.Tu.insert(n, { type: 1, doc: s.doc }))
        : e.type === 0 && s.type === 1
        ? (this.Tu = this.Tu.insert(n, { type: 2, doc: e.doc }))
        : z()
      : (this.Tu = this.Tu.insert(n, e));
  }
  Eu() {
    const e = [];
    return (
      this.Tu.inorderTraversal((n, s) => {
        e.push(s);
      }),
      e
    );
  }
}
class ks {
  constructor(e, n, s, r, i, o, a, c, l) {
    (this.query = e),
      (this.docs = n),
      (this.oldDocs = s),
      (this.docChanges = r),
      (this.mutatedKeys = i),
      (this.fromCache = o),
      (this.syncStateChanged = a),
      (this.excludesMetadataChanges = c),
      (this.hasCachedResults = l);
  }
  static fromInitialDocuments(e, n, s, r, i) {
    const o = [];
    return (
      n.forEach((a) => {
        o.push({ type: 0, doc: a });
      }),
      new ks(e, n, ms.emptySet(n), o, s, r, !0, !1, i)
    );
  }
  get hasPendingWrites() {
    return !this.mutatedKeys.isEmpty();
  }
  isEqual(e) {
    if (
      !(
        this.fromCache === e.fromCache &&
        this.hasCachedResults === e.hasCachedResults &&
        this.syncStateChanged === e.syncStateChanged &&
        this.mutatedKeys.isEqual(e.mutatedKeys) &&
        Ao(this.query, e.query) &&
        this.docs.isEqual(e.docs) &&
        this.oldDocs.isEqual(e.oldDocs)
      )
    )
      return !1;
    const n = this.docChanges,
      s = e.docChanges;
    if (n.length !== s.length) return !1;
    for (let r = 0; r < n.length; r++)
      if (n[r].type !== s[r].type || !n[r].doc.isEqual(s[r].doc)) return !1;
    return !0;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class WE {
  constructor() {
    (this.Au = void 0), (this.listeners = []);
  }
}
class QE {
  constructor() {
    (this.queries = new Vs((e) => Dp(e), Ao)),
      (this.onlineState = "Unknown"),
      (this.Ru = new Set());
  }
}
async function vl(t, e) {
  const n = ee(t),
    s = e.query;
  let r = !1,
    i = n.queries.get(s);
  if ((i || ((r = !0), (i = new WE())), r))
    try {
      i.Au = await n.onListen(s);
    } catch (o) {
      const a = yl(o, `Initialization of query '${sc(e.query)}' failed`);
      return void e.onError(a);
    }
  n.queries.set(s, i),
    i.listeners.push(e),
    e.bu(n.onlineState),
    i.Au && e.Pu(i.Au) && _l(n);
}
async function wl(t, e) {
  const n = ee(t),
    s = e.query;
  let r = !1;
  const i = n.queries.get(s);
  if (i) {
    const o = i.listeners.indexOf(e);
    o >= 0 && (i.listeners.splice(o, 1), (r = i.listeners.length === 0));
  }
  if (r) return n.queries.delete(s), n.onUnlisten(s);
}
function YE(t, e) {
  const n = ee(t);
  let s = !1;
  for (const r of e) {
    const i = r.query,
      o = n.queries.get(i);
    if (o) {
      for (const a of o.listeners) a.Pu(r) && (s = !0);
      o.Au = r;
    }
  }
  s && _l(n);
}
function XE(t, e, n) {
  const s = ee(t),
    r = s.queries.get(e);
  if (r) for (const i of r.listeners) i.onError(n);
  s.queries.delete(e);
}
function _l(t) {
  t.Ru.forEach((e) => {
    e.next();
  });
}
class bl {
  constructor(e, n, s) {
    (this.query = e),
      (this.vu = n),
      (this.Vu = !1),
      (this.Su = null),
      (this.onlineState = "Unknown"),
      (this.options = s || {});
  }
  Pu(e) {
    if (!this.options.includeMetadataChanges) {
      const s = [];
      for (const r of e.docChanges) r.type !== 3 && s.push(r);
      e = new ks(
        e.query,
        e.docs,
        e.oldDocs,
        s,
        e.mutatedKeys,
        e.fromCache,
        e.syncStateChanged,
        !0,
        e.hasCachedResults
      );
    }
    let n = !1;
    return (
      this.Vu
        ? this.Du(e) && (this.vu.next(e), (n = !0))
        : this.Cu(e, this.onlineState) && (this.xu(e), (n = !0)),
      (this.Su = e),
      n
    );
  }
  onError(e) {
    this.vu.error(e);
  }
  bu(e) {
    this.onlineState = e;
    let n = !1;
    return (
      this.Su &&
        !this.Vu &&
        this.Cu(this.Su, e) &&
        (this.xu(this.Su), (n = !0)),
      n
    );
  }
  Cu(e, n) {
    if (!e.fromCache) return !0;
    const s = n !== "Offline";
    return (
      (!this.options.Nu || !s) &&
      (!e.docs.isEmpty() || e.hasCachedResults || n === "Offline")
    );
  }
  Du(e) {
    if (e.docChanges.length > 0) return !0;
    const n = this.Su && this.Su.hasPendingWrites !== e.hasPendingWrites;
    return (
      !(!e.syncStateChanged && !n) && this.options.includeMetadataChanges === !0
    );
  }
  xu(e) {
    (e = ks.fromInitialDocuments(
      e.query,
      e.docs,
      e.mutatedKeys,
      e.fromCache,
      e.hasCachedResults
    )),
      (this.Vu = !0),
      this.vu.next(e);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class hm {
  constructor(e) {
    this.key = e;
  }
}
class fm {
  constructor(e) {
    this.key = e;
  }
}
class JE {
  constructor(e, n) {
    (this.query = e),
      (this.qu = n),
      (this.Uu = null),
      (this.hasCachedResults = !1),
      (this.current = !1),
      (this.Ku = re()),
      (this.mutatedKeys = re()),
      (this.Gu = Np(e)),
      (this.Qu = new ms(this.Gu));
  }
  get ju() {
    return this.qu;
  }
  Wu(e, n) {
    const s = n ? n.zu : new Ih(),
      r = n ? n.Qu : this.Qu;
    let i = n ? n.mutatedKeys : this.mutatedKeys,
      o = r,
      a = !1;
    const c =
        this.query.limitType === "F" && r.size === this.query.limit
          ? r.last()
          : null,
      l =
        this.query.limitType === "L" && r.size === this.query.limit
          ? r.first()
          : null;
    if (
      (e.inorderTraversal((u, h) => {
        const f = r.get(u),
          m = ol(this.query, h) ? h : null,
          g = !!f && this.mutatedKeys.has(f.key),
          v =
            !!m &&
            (m.hasLocalMutations ||
              (this.mutatedKeys.has(m.key) && m.hasCommittedMutations));
        let b = !1;
        f && m
          ? f.data.isEqual(m.data)
            ? g !== v && (s.track({ type: 3, doc: m }), (b = !0))
            : this.Hu(f, m) ||
              (s.track({ type: 2, doc: m }),
              (b = !0),
              ((c && this.Gu(m, c) > 0) || (l && this.Gu(m, l) < 0)) &&
                (a = !0))
          : !f && m
          ? (s.track({ type: 0, doc: m }), (b = !0))
          : f &&
            !m &&
            (s.track({ type: 1, doc: f }), (b = !0), (c || l) && (a = !0)),
          b &&
            (m
              ? ((o = o.add(m)), (i = v ? i.add(u) : i.delete(u)))
              : ((o = o.delete(u)), (i = i.delete(u))));
      }),
      this.query.limit !== null)
    )
      for (; o.size > this.query.limit; ) {
        const u = this.query.limitType === "F" ? o.last() : o.first();
        (o = o.delete(u.key)),
          (i = i.delete(u.key)),
          s.track({ type: 1, doc: u });
      }
    return { Qu: o, zu: s, $i: a, mutatedKeys: i };
  }
  Hu(e, n) {
    return (
      e.hasLocalMutations && n.hasCommittedMutations && !n.hasLocalMutations
    );
  }
  applyChanges(e, n, s) {
    const r = this.Qu;
    (this.Qu = e.Qu), (this.mutatedKeys = e.mutatedKeys);
    const i = e.zu.Eu();
    i.sort(
      (l, u) =>
        (function (h, f) {
          const m = (g) => {
            switch (g) {
              case 0:
                return 1;
              case 2:
              case 3:
                return 2;
              case 1:
                return 0;
              default:
                return z();
            }
          };
          return m(h) - m(f);
        })(l.type, u.type) || this.Gu(l.doc, u.doc)
    ),
      this.Ju(s);
    const o = n ? this.Yu() : [],
      a = this.Ku.size === 0 && this.current ? 1 : 0,
      c = a !== this.Uu;
    return (
      (this.Uu = a),
      i.length !== 0 || c
        ? {
            snapshot: new ks(
              this.query,
              e.Qu,
              r,
              i,
              e.mutatedKeys,
              a === 0,
              c,
              !1,
              !!s && s.resumeToken.approximateByteSize() > 0
            ),
            Xu: o,
          }
        : { Xu: o }
    );
  }
  bu(e) {
    return this.current && e === "Offline"
      ? ((this.current = !1),
        this.applyChanges(
          { Qu: this.Qu, zu: new Ih(), mutatedKeys: this.mutatedKeys, $i: !1 },
          !1
        ))
      : { Xu: [] };
  }
  Zu(e) {
    return (
      !this.qu.has(e) && !!this.Qu.has(e) && !this.Qu.get(e).hasLocalMutations
    );
  }
  Ju(e) {
    e &&
      (e.addedDocuments.forEach((n) => (this.qu = this.qu.add(n))),
      e.modifiedDocuments.forEach((n) => {}),
      e.removedDocuments.forEach((n) => (this.qu = this.qu.delete(n))),
      (this.current = e.current));
  }
  Yu() {
    if (!this.current) return [];
    const e = this.Ku;
    (this.Ku = re()),
      this.Qu.forEach((s) => {
        this.Zu(s.key) && (this.Ku = this.Ku.add(s.key));
      });
    const n = [];
    return (
      e.forEach((s) => {
        this.Ku.has(s) || n.push(new fm(s));
      }),
      this.Ku.forEach((s) => {
        e.has(s) || n.push(new hm(s));
      }),
      n
    );
  }
  tc(e) {
    (this.qu = e.Hi), (this.Ku = re());
    const n = this.Wu(e.documents);
    return this.applyChanges(n, !0);
  }
  ec() {
    return ks.fromInitialDocuments(
      this.query,
      this.Qu,
      this.mutatedKeys,
      this.Uu === 0,
      this.hasCachedResults
    );
  }
}
class ZE {
  constructor(e, n, s) {
    (this.query = e), (this.targetId = n), (this.view = s);
  }
}
class e1 {
  constructor(e) {
    (this.key = e), (this.nc = !1);
  }
}
class t1 {
  constructor(e, n, s, r, i, o) {
    (this.localStore = e),
      (this.remoteStore = n),
      (this.eventManager = s),
      (this.sharedClientState = r),
      (this.currentUser = i),
      (this.maxConcurrentLimboResolutions = o),
      (this.sc = {}),
      (this.ic = new Vs((a) => Dp(a), Ao)),
      (this.rc = new Map()),
      (this.oc = new Set()),
      (this.uc = new Ue(j.comparator)),
      (this.cc = new Map()),
      (this.ac = new ul()),
      (this.hc = {}),
      (this.lc = new Map()),
      (this.fc = As.vn()),
      (this.onlineState = "Unknown"),
      (this.dc = void 0);
  }
  get isPrimaryClient() {
    return this.dc === !0;
  }
}
async function n1(t, e) {
  const n = f1(t);
  let s, r;
  const i = n.ic.get(e);
  if (i)
    (s = i.targetId),
      n.sharedClientState.addLocalQueryTarget(s),
      (r = i.view.ec());
  else {
    const o = await CE(n.localStore, Zt(e));
    n.isPrimaryClient && rm(n.remoteStore, o);
    const a = n.sharedClientState.addLocalQueryTarget(o.targetId);
    (s = o.targetId), (r = await s1(n, e, s, a === "current", o.resumeToken));
  }
  return r;
}
async function s1(t, e, n, s, r) {
  t._c = (h, f, m) =>
    (async function (g, v, b, S) {
      let R = v.view.Wu(b);
      R.$i &&
        (R = await bh(g.localStore, v.query, !1).then(({ documents: J }) =>
          v.view.Wu(J, R)
        ));
      const O = S && S.targetChanges.get(v.targetId),
        U = v.view.applyChanges(R, g.isPrimaryClient, O);
      return Sh(g, v.targetId, U.Xu), U.snapshot;
    })(t, h, f, m);
  const i = await bh(t.localStore, e, !0),
    o = new JE(e, i.Hi),
    a = o.Wu(i.documents),
    c = jr.createSynthesizedTargetChangeForCurrentChange(
      n,
      s && t.onlineState !== "Offline",
      r
    ),
    l = o.applyChanges(a, t.isPrimaryClient, c);
  Sh(t, n, l.Xu);
  const u = new ZE(e, n, o);
  return (
    t.ic.set(e, u),
    t.rc.has(n) ? t.rc.get(n).push(e) : t.rc.set(n, [e]),
    l.snapshot
  );
}
async function r1(t, e) {
  const n = ee(t),
    s = n.ic.get(e),
    r = n.rc.get(s.targetId);
  if (r.length > 1)
    return (
      n.rc.set(
        s.targetId,
        r.filter((i) => !Ao(i, e))
      ),
      void n.ic.delete(e)
    );
  n.isPrimaryClient
    ? (n.sharedClientState.removeLocalQueryTarget(s.targetId),
      n.sharedClientState.isActiveQueryTarget(s.targetId) ||
        (await ac(n.localStore, s.targetId, !1)
          .then(() => {
            n.sharedClientState.clearQueryState(s.targetId),
              im(n.remoteStore, s.targetId),
              cc(n, s.targetId);
          })
          .catch(Ur)))
    : (cc(n, s.targetId), await ac(n.localStore, s.targetId, !0));
}
async function i1(t, e, n) {
  const s = d1(t);
  try {
    const r = await (function (i, o) {
      const a = ee(i),
        c = Fe.now(),
        l = o.reduce((f, m) => f.add(m.key), re());
      let u, h;
      return a.persistence
        .runTransaction("Locally write mutations", "readwrite", (f) => {
          let m = en(),
            g = re();
          return a.Gi.getEntries(f, l)
            .next((v) => {
              (m = v),
                m.forEach((b, S) => {
                  S.isValidDocument() || (g = g.add(b));
                });
            })
            .next(() => a.localDocuments.getOverlayedDocuments(f, m))
            .next((v) => {
              u = v;
              const b = [];
              for (const S of o) {
                const R = Rb(S, u.get(S.key).overlayedDocument);
                R != null &&
                  b.push(new Cn(S.key, R, kp(R.value.mapValue), Rt.exists(!0)));
              }
              return a.mutationQueue.addMutationBatch(f, c, b, o);
            })
            .next((v) => {
              h = v;
              const b = v.applyToLocalDocumentSet(u, g);
              return a.documentOverlayCache.saveOverlays(f, v.batchId, b);
            });
        })
        .then(() => ({ batchId: h.batchId, changes: qp(u) }));
    })(s.localStore, e);
    s.sharedClientState.addPendingMutation(r.batchId),
      (function (i, o, a) {
        let c = i.hc[i.currentUser.toKey()];
        c || (c = new Ue(fe)),
          (c = c.insert(o, a)),
          (i.hc[i.currentUser.toKey()] = c);
      })(s, r.batchId, n),
      await Hr(s, r.changes),
      await Po(s.remoteStore);
  } catch (r) {
    const i = yl(r, "Failed to persist write");
    n.reject(i);
  }
}
async function dm(t, e) {
  const n = ee(t);
  try {
    const s = await xE(n.localStore, e);
    e.targetChanges.forEach((r, i) => {
      const o = n.cc.get(i);
      o &&
        (we(
          r.addedDocuments.size +
            r.modifiedDocuments.size +
            r.removedDocuments.size <=
            1
        ),
        r.addedDocuments.size > 0
          ? (o.nc = !0)
          : r.modifiedDocuments.size > 0
          ? we(o.nc)
          : r.removedDocuments.size > 0 && (we(o.nc), (o.nc = !1)));
    }),
      await Hr(n, s, e);
  } catch (s) {
    await Ur(s);
  }
}
function Ch(t, e, n) {
  const s = ee(t);
  if ((s.isPrimaryClient && n === 0) || (!s.isPrimaryClient && n === 1)) {
    const r = [];
    s.ic.forEach((i, o) => {
      const a = o.view.bu(e);
      a.snapshot && r.push(a.snapshot);
    }),
      (function (i, o) {
        const a = ee(i);
        a.onlineState = o;
        let c = !1;
        a.queries.forEach((l, u) => {
          for (const h of u.listeners) h.bu(o) && (c = !0);
        }),
          c && _l(a);
      })(s.eventManager, e),
      r.length && s.sc.Wo(r),
      (s.onlineState = e),
      s.isPrimaryClient && s.sharedClientState.setOnlineState(e);
  }
}
async function o1(t, e, n) {
  const s = ee(t);
  s.sharedClientState.updateQueryState(e, "rejected", n);
  const r = s.cc.get(e),
    i = r && r.key;
  if (i) {
    let o = new Ue(j.comparator);
    o = o.insert(i, We.newNoDocument(i, X.min()));
    const a = re().add(i),
      c = new Do(X.min(), new Map(), new $e(fe), o, a);
    await dm(s, c), (s.uc = s.uc.remove(i)), s.cc.delete(e), El(s);
  } else
    await ac(s.localStore, e, !1)
      .then(() => cc(s, e, n))
      .catch(Ur);
}
async function a1(t, e) {
  const n = ee(t),
    s = e.batch.batchId;
  try {
    const r = await EE(n.localStore, e);
    mm(n, s, null),
      pm(n, s),
      n.sharedClientState.updateMutationState(s, "acknowledged"),
      await Hr(n, r);
  } catch (r) {
    await Ur(r);
  }
}
async function c1(t, e, n) {
  const s = ee(t);
  try {
    const r = await (function (i, o) {
      const a = ee(i);
      return a.persistence.runTransaction(
        "Reject batch",
        "readwrite-primary",
        (c) => {
          let l;
          return a.mutationQueue
            .lookupMutationBatch(c, o)
            .next(
              (u) => (
                we(u !== null),
                (l = u.keys()),
                a.mutationQueue.removeMutationBatch(c, u)
              )
            )
            .next(() => a.mutationQueue.performConsistencyCheck(c))
            .next(() =>
              a.documentOverlayCache.removeOverlaysForBatchId(c, l, o)
            )
            .next(() =>
              a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c, l)
            )
            .next(() => a.localDocuments.getDocuments(c, l));
        }
      );
    })(s.localStore, e);
    mm(s, e, n),
      pm(s, e),
      s.sharedClientState.updateMutationState(e, "rejected", n),
      await Hr(s, r);
  } catch (r) {
    await Ur(r);
  }
}
function pm(t, e) {
  (t.lc.get(e) || []).forEach((n) => {
    n.resolve();
  }),
    t.lc.delete(e);
}
function mm(t, e, n) {
  const s = ee(t);
  let r = s.hc[s.currentUser.toKey()];
  if (r) {
    const i = r.get(e);
    i && (n ? i.reject(n) : i.resolve(), (r = r.remove(e))),
      (s.hc[s.currentUser.toKey()] = r);
  }
}
function cc(t, e, n = null) {
  t.sharedClientState.removeLocalQueryTarget(e);
  for (const s of t.rc.get(e)) t.ic.delete(s), n && t.sc.wc(s, n);
  t.rc.delete(e),
    t.isPrimaryClient &&
      t.ac.ls(e).forEach((s) => {
        t.ac.containsKey(s) || gm(t, s);
      });
}
function gm(t, e) {
  t.oc.delete(e.path.canonicalString());
  const n = t.uc.get(e);
  n !== null &&
    (im(t.remoteStore, n), (t.uc = t.uc.remove(e)), t.cc.delete(n), El(t));
}
function Sh(t, e, n) {
  for (const s of n)
    s instanceof hm
      ? (t.ac.addReference(s.key, e), l1(t, s))
      : s instanceof fm
      ? (V("SyncEngine", "Document no longer in limbo: " + s.key),
        t.ac.removeReference(s.key, e),
        t.ac.containsKey(s.key) || gm(t, s.key))
      : z();
}
function l1(t, e) {
  const n = e.key,
    s = n.path.canonicalString();
  t.uc.get(n) ||
    t.oc.has(s) ||
    (V("SyncEngine", "New document in limbo: " + n), t.oc.add(s), El(t));
}
function El(t) {
  for (; t.oc.size > 0 && t.uc.size < t.maxConcurrentLimboResolutions; ) {
    const e = t.oc.values().next().value;
    t.oc.delete(e);
    const n = new j(Ee.fromString(e)),
      s = t.fc.next();
    t.cc.set(s, new e1(n)),
      (t.uc = t.uc.insert(n, s)),
      rm(t.remoteStore, new Kn(Zt(Co(n.path)), s, 2, tl.at));
  }
}
async function Hr(t, e, n) {
  const s = ee(t),
    r = [],
    i = [],
    o = [];
  s.ic.isEmpty() ||
    (s.ic.forEach((a, c) => {
      o.push(
        s._c(c, e, n).then((l) => {
          if (
            ((l || n) &&
              s.isPrimaryClient &&
              s.sharedClientState.updateQueryState(
                c.targetId,
                l != null && l.fromCache ? "not-current" : "current"
              ),
            l)
          ) {
            r.push(l);
            const u = fl.Ci(c.targetId, l);
            i.push(u);
          }
        })
      );
    }),
    await Promise.all(o),
    s.sc.Wo(r),
    await (async function (a, c) {
      const l = ee(a);
      try {
        await l.persistence.runTransaction(
          "notifyLocalViewChanges",
          "readwrite",
          (u) =>
            C.forEach(c, (h) =>
              C.forEach(h.Si, (f) =>
                l.persistence.referenceDelegate.addReference(u, h.targetId, f)
              ).next(() =>
                C.forEach(h.Di, (f) =>
                  l.persistence.referenceDelegate.removeReference(
                    u,
                    h.targetId,
                    f
                  )
                )
              )
            )
        );
      } catch (u) {
        if (!Vr(u)) throw u;
        V("LocalStore", "Failed to update sequence numbers: " + u);
      }
      for (const u of c) {
        const h = u.targetId;
        if (!u.fromCache) {
          const f = l.qi.get(h),
            m = f.snapshotVersion,
            g = f.withLastLimboFreeSnapshotVersion(m);
          l.qi = l.qi.insert(h, g);
        }
      }
    })(s.localStore, i));
}
async function u1(t, e) {
  const n = ee(t);
  if (!n.currentUser.isEqual(e)) {
    V("SyncEngine", "User change. New user:", e.toKey());
    const s = await em(n.localStore, e);
    (n.currentUser = e),
      (function (r, i) {
        r.lc.forEach((o) => {
          o.forEach((a) => {
            a.reject(new L(E.CANCELLED, i));
          });
        }),
          r.lc.clear();
      })(n, "'waitForPendingWrites' promise is rejected due to a user change."),
      n.sharedClientState.handleUserChange(
        e,
        s.removedBatchIds,
        s.addedBatchIds
      ),
      await Hr(n, s.ji);
  }
}
function h1(t, e) {
  const n = ee(t),
    s = n.cc.get(e);
  if (s && s.nc) return re().add(s.key);
  {
    let r = re();
    const i = n.rc.get(e);
    if (!i) return r;
    for (const o of i) {
      const a = n.ic.get(o);
      r = r.unionWith(a.view.ju);
    }
    return r;
  }
}
function f1(t) {
  const e = ee(t);
  return (
    (e.remoteStore.remoteSyncer.applyRemoteEvent = dm.bind(null, e)),
    (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = h1.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectListen = o1.bind(null, e)),
    (e.sc.Wo = YE.bind(null, e.eventManager)),
    (e.sc.wc = XE.bind(null, e.eventManager)),
    e
  );
}
function d1(t) {
  const e = ee(t);
  return (
    (e.remoteStore.remoteSyncer.applySuccessfulWrite = a1.bind(null, e)),
    (e.remoteStore.remoteSyncer.rejectFailedWrite = c1.bind(null, e)),
    e
  );
}
class p1 {
  constructor() {
    this.synchronizeTabs = !1;
  }
  async initialize(e) {
    (this.yt = No(e.databaseInfo.databaseId)),
      (this.sharedClientState = this.gc(e)),
      (this.persistence = this.yc(e)),
      await this.persistence.start(),
      (this.localStore = this.Ic(e)),
      (this.gcScheduler = this.Tc(e, this.localStore)),
      (this.indexBackfillerScheduler = this.Ec(e, this.localStore));
  }
  Tc(e, n) {
    return null;
  }
  Ec(e, n) {
    return null;
  }
  Ic(e) {
    return bE(this.persistence, new wE(), e.initialUser, this.yt);
  }
  yc(e) {
    return new yE(hl.Bs, this.yt);
  }
  gc(e) {
    return new AE();
  }
  async terminate() {
    this.gcScheduler && this.gcScheduler.stop(),
      await this.sharedClientState.shutdown(),
      await this.persistence.shutdown();
  }
}
class m1 {
  async initialize(e, n) {
    this.localStore ||
      ((this.localStore = e.localStore),
      (this.sharedClientState = e.sharedClientState),
      (this.datastore = this.createDatastore(n)),
      (this.remoteStore = this.createRemoteStore(n)),
      (this.eventManager = this.createEventManager(n)),
      (this.syncEngine = this.createSyncEngine(n, !e.synchronizeTabs)),
      (this.sharedClientState.onlineStateHandler = (s) =>
        Ch(this.syncEngine, s, 1)),
      (this.remoteStore.remoteSyncer.handleCredentialChange = u1.bind(
        null,
        this.syncEngine
      )),
      await GE(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return new QE();
  }
  createDatastore(e) {
    const n = No(e.databaseInfo.databaseId),
      s = ((r = e.databaseInfo), new NE(r));
    var r;
    return (function (i, o, a, c) {
      return new ME(i, o, a, c);
    })(e.authCredentials, e.appCheckCredentials, s, n);
  }
  createRemoteStore(e) {
    return (
      (n = this.localStore),
      (s = this.datastore),
      (r = e.asyncQueue),
      (i = (a) => Ch(this.syncEngine, a, 0)),
      (o = xh.C() ? new xh() : new kE()),
      new FE(n, s, r, i, o)
    );
    var n, s, r, i, o;
  }
  createSyncEngine(e, n) {
    return (function (s, r, i, o, a, c, l) {
      const u = new t1(s, r, i, o, a, c);
      return l && (u.dc = !0), u;
    })(
      this.localStore,
      this.remoteStore,
      this.eventManager,
      this.sharedClientState,
      e.initialUser,
      e.maxConcurrentLimboResolutions,
      n
    );
  }
  terminate() {
    return (async function (e) {
      const n = ee(e);
      V("RemoteStore", "RemoteStore shutting down."),
        n._u.add(5),
        await qr(n),
        n.mu.shutdown(),
        n.gu.set("Unknown");
    })(this.remoteStore);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ym(t, e, n) {
  if (!n)
    throw new L(
      E.INVALID_ARGUMENT,
      `Function ${t}() cannot be called with an empty ${e}.`
    );
}
function g1(t, e, n, s) {
  if (e === !0 && s === !0)
    throw new L(E.INVALID_ARGUMENT, `${t} and ${n} cannot be used together.`);
}
function Ah(t) {
  if (!j.isDocumentKey(t))
    throw new L(
      E.INVALID_ARGUMENT,
      `Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`
    );
}
function kh(t) {
  if (j.isDocumentKey(t))
    throw new L(
      E.INVALID_ARGUMENT,
      `Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`
    );
}
function Mo(t) {
  if (t === void 0) return "undefined";
  if (t === null) return "null";
  if (typeof t == "string")
    return t.length > 20 && (t = `${t.substring(0, 20)}...`), JSON.stringify(t);
  if (typeof t == "number" || typeof t == "boolean") return "" + t;
  if (typeof t == "object") {
    if (t instanceof Array) return "an array";
    {
      const e = (function (n) {
        return n.constructor ? n.constructor.name : null;
      })(t);
      return e ? `a custom ${e} object` : "an object";
    }
  }
  return typeof t == "function" ? "a function" : z();
}
function vt(t, e) {
  if (("_delegate" in t && (t = t._delegate), !(t instanceof e))) {
    if (e.name === t.constructor.name)
      throw new L(
        E.INVALID_ARGUMENT,
        "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
      );
    {
      const n = Mo(t);
      throw new L(
        E.INVALID_ARGUMENT,
        `Expected type '${e.name}', but it was: ${n}`
      );
    }
  }
  return t;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Rh = new Map();
class Dh {
  constructor(e) {
    var n;
    if (e.host === void 0) {
      if (e.ssl !== void 0)
        throw new L(
          E.INVALID_ARGUMENT,
          "Can't provide ssl option if host option is not set"
        );
      (this.host = "firestore.googleapis.com"), (this.ssl = !0);
    } else
      (this.host = e.host),
        (this.ssl = (n = e.ssl) === null || n === void 0 || n);
    if (
      ((this.credentials = e.credentials),
      (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
      e.cacheSizeBytes === void 0)
    )
      this.cacheSizeBytes = 41943040;
    else {
      if (e.cacheSizeBytes !== -1 && e.cacheSizeBytes < 1048576)
        throw new L(
          E.INVALID_ARGUMENT,
          "cacheSizeBytes must be at least 1048576"
        );
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    (this.experimentalForceLongPolling = !!e.experimentalForceLongPolling),
      (this.experimentalAutoDetectLongPolling =
        !!e.experimentalAutoDetectLongPolling),
      (this.useFetchStreams = !!e.useFetchStreams),
      g1(
        "experimentalForceLongPolling",
        e.experimentalForceLongPolling,
        "experimentalAutoDetectLongPolling",
        e.experimentalAutoDetectLongPolling
      );
  }
  isEqual(e) {
    return (
      this.host === e.host &&
      this.ssl === e.ssl &&
      this.credentials === e.credentials &&
      this.cacheSizeBytes === e.cacheSizeBytes &&
      this.experimentalForceLongPolling === e.experimentalForceLongPolling &&
      this.experimentalAutoDetectLongPolling ===
        e.experimentalAutoDetectLongPolling &&
      this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
      this.useFetchStreams === e.useFetchStreams
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Lo {
  constructor(e, n, s, r) {
    (this._authCredentials = e),
      (this._appCheckCredentials = n),
      (this._databaseId = s),
      (this._app = r),
      (this.type = "firestore-lite"),
      (this._persistenceKey = "(lite)"),
      (this._settings = new Dh({})),
      (this._settingsFrozen = !1);
  }
  get app() {
    if (!this._app)
      throw new L(
        E.FAILED_PRECONDITION,
        "Firestore was not initialized using the Firebase SDK. 'app' is not available"
      );
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return this._terminateTask !== void 0;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new L(
        E.FAILED_PRECONDITION,
        "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
      );
    (this._settings = new Dh(e)),
      e.credentials !== void 0 &&
        (this._authCredentials = (function (n) {
          if (!n) return new G_();
          switch (n.type) {
            case "gapi":
              const s = n.client;
              return new X_(
                s,
                n.sessionIndex || "0",
                n.iamToken || null,
                n.authTokenFactory || null
              );
            case "provider":
              return n.client;
            default:
              throw new L(
                E.INVALID_ARGUMENT,
                "makeAuthCredentialsProvider failed due to invalid credential type"
              );
          }
        })(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return (this._settingsFrozen = !0), this._settings;
  }
  _delete() {
    return (
      this._terminateTask || (this._terminateTask = this._terminate()),
      this._terminateTask
    );
  }
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings,
    };
  }
  _terminate() {
    return (
      (function (e) {
        const n = Rh.get(e);
        n &&
          (V("ComponentProvider", "Removing Datastore"),
          Rh.delete(e),
          n.terminate());
      })(this),
      Promise.resolve()
    );
  }
}
function y1(t, e, n, s = {}) {
  var r;
  const i = (t = vt(t, Lo))._getSettings();
  if (
    (i.host !== "firestore.googleapis.com" &&
      i.host !== e &&
      Ya(
        "Host has been set in both settings() and useEmulator(), emulator host will be used"
      ),
    t._setSettings(
      Object.assign(Object.assign({}, i), { host: `${e}:${n}`, ssl: !1 })
    ),
    s.mockUserToken)
  ) {
    let o, a;
    if (typeof s.mockUserToken == "string")
      (o = s.mockUserToken), (a = Ge.MOCK_USER);
    else {
      o = R0(
        s.mockUserToken,
        (r = t._app) === null || r === void 0 ? void 0 : r.options.projectId
      );
      const c = s.mockUserToken.sub || s.mockUserToken.user_id;
      if (!c)
        throw new L(
          E.INVALID_ARGUMENT,
          "mockUserToken must contain 'sub' or 'user_id' field!"
        );
      a = new Ge(c);
    }
    t._authCredentials = new W_(new vp(o, a));
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class st {
  constructor(e, n, s) {
    (this.converter = n),
      (this._key = s),
      (this.type = "document"),
      (this.firestore = e);
  }
  get _path() {
    return this._key.path;
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get path() {
    return this._key.path.canonicalString();
  }
  get parent() {
    return new gn(this.firestore, this.converter, this._key.path.popLast());
  }
  withConverter(e) {
    return new st(this.firestore, e, this._key);
  }
}
class Sn {
  constructor(e, n, s) {
    (this.converter = n),
      (this._query = s),
      (this.type = "query"),
      (this.firestore = e);
  }
  withConverter(e) {
    return new Sn(this.firestore, e, this._query);
  }
}
class gn extends Sn {
  constructor(e, n, s) {
    super(e, n, Co(s)), (this._path = s), (this.type = "collection");
  }
  get id() {
    return this._query.path.lastSegment();
  }
  get path() {
    return this._query.path.canonicalString();
  }
  get parent() {
    const e = this._path.popLast();
    return e.isEmpty() ? null : new st(this.firestore, null, new j(e));
  }
  withConverter(e) {
    return new gn(this.firestore, e, this._path);
  }
}
function Kr(t, e, ...n) {
  if (((t = Bt(t)), ym("collection", "path", e), t instanceof Lo)) {
    const s = Ee.fromString(e, ...n);
    return kh(s), new gn(t, null, s);
  }
  {
    if (!(t instanceof st || t instanceof gn))
      throw new L(
        E.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const s = t._path.child(Ee.fromString(e, ...n));
    return kh(s), new gn(t.firestore, null, s);
  }
}
function cr(t, e, ...n) {
  if (
    ((t = Bt(t)),
    arguments.length === 1 && (e = wp.R()),
    ym("doc", "path", e),
    t instanceof Lo)
  ) {
    const s = Ee.fromString(e, ...n);
    return Ah(s), new st(t, null, new j(s));
  }
  {
    if (!(t instanceof st || t instanceof gn))
      throw new L(
        E.INVALID_ARGUMENT,
        "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
      );
    const s = t._path.child(Ee.fromString(e, ...n));
    return (
      Ah(s), new st(t.firestore, t instanceof gn ? t.converter : null, new j(s))
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class xl {
  constructor(e) {
    (this.observer = e), (this.muted = !1);
  }
  next(e) {
    this.observer.next && this.Rc(this.observer.next, e);
  }
  error(e) {
    this.observer.error
      ? this.Rc(this.observer.error, e)
      : Jt("Uncaught Error in snapshot listener:", e.toString());
  }
  bc() {
    this.muted = !0;
  }
  Rc(e, n) {
    this.muted ||
      setTimeout(() => {
        this.muted || e(n);
      }, 0);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class v1 {
  constructor(e, n, s, r) {
    (this.authCredentials = e),
      (this.appCheckCredentials = n),
      (this.asyncQueue = s),
      (this.databaseInfo = r),
      (this.user = Ge.UNAUTHENTICATED),
      (this.clientId = wp.R()),
      (this.authCredentialListener = () => Promise.resolve()),
      (this.appCheckCredentialListener = () => Promise.resolve()),
      this.authCredentials.start(s, async (i) => {
        V("FirestoreClient", "Received user=", i.uid),
          await this.authCredentialListener(i),
          (this.user = i);
      }),
      this.appCheckCredentials.start(
        s,
        (i) => (
          V("FirestoreClient", "Received new app check token=", i),
          this.appCheckCredentialListener(i, this.user)
        )
      );
  }
  async getConfiguration() {
    return {
      asyncQueue: this.asyncQueue,
      databaseInfo: this.databaseInfo,
      clientId: this.clientId,
      authCredentials: this.authCredentials,
      appCheckCredentials: this.appCheckCredentials,
      initialUser: this.user,
      maxConcurrentLimboResolutions: 100,
    };
  }
  setCredentialChangeListener(e) {
    this.authCredentialListener = e;
  }
  setAppCheckTokenChangeListener(e) {
    this.appCheckCredentialListener = e;
  }
  verifyNotTerminated() {
    if (this.asyncQueue.isShuttingDown)
      throw new L(
        E.FAILED_PRECONDITION,
        "The client has already been terminated."
      );
  }
  terminate() {
    this.asyncQueue.enterRestrictedMode();
    const e = new Qt();
    return (
      this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
        try {
          this.onlineComponents && (await this.onlineComponents.terminate()),
            this.offlineComponents &&
              (await this.offlineComponents.terminate()),
            this.authCredentials.shutdown(),
            this.appCheckCredentials.shutdown(),
            e.resolve();
        } catch (n) {
          const s = yl(n, "Failed to shutdown persistence");
          e.reject(s);
        }
      }),
      e.promise
    );
  }
}
async function w1(t, e) {
  t.asyncQueue.verifyOperationInProgress(),
    V("FirestoreClient", "Initializing OfflineComponentProvider");
  const n = await t.getConfiguration();
  await e.initialize(n);
  let s = n.initialUser;
  t.setCredentialChangeListener(async (r) => {
    s.isEqual(r) || (await em(e.localStore, r), (s = r));
  }),
    e.persistence.setDatabaseDeletedListener(() => t.terminate()),
    (t.offlineComponents = e);
}
async function _1(t, e) {
  t.asyncQueue.verifyOperationInProgress();
  const n = await b1(t);
  V("FirestoreClient", "Initializing OnlineComponentProvider");
  const s = await t.getConfiguration();
  await e.initialize(n, s),
    t.setCredentialChangeListener((r) => Th(e.remoteStore, r)),
    t.setAppCheckTokenChangeListener((r, i) => Th(e.remoteStore, i)),
    (t.onlineComponents = e);
}
async function b1(t) {
  return (
    t.offlineComponents ||
      (V("FirestoreClient", "Using default OfflineComponentProvider"),
      await w1(t, new p1())),
    t.offlineComponents
  );
}
async function vm(t) {
  return (
    t.onlineComponents ||
      (V("FirestoreClient", "Using default OnlineComponentProvider"),
      await _1(t, new m1())),
    t.onlineComponents
  );
}
function E1(t) {
  return vm(t).then((e) => e.syncEngine);
}
async function qi(t) {
  const e = await vm(t),
    n = e.eventManager;
  return (
    (n.onListen = n1.bind(null, e.syncEngine)),
    (n.onUnlisten = r1.bind(null, e.syncEngine)),
    n
  );
}
function x1(t, e, n = {}) {
  const s = new Qt();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (r, i, o, a, c) {
        const l = new xl({
            next: (h) => {
              i.enqueueAndForget(() => wl(r, u));
              const f = h.docs.has(o);
              !f && h.fromCache
                ? c.reject(
                    new L(
                      E.UNAVAILABLE,
                      "Failed to get document because the client is offline."
                    )
                  )
                : f && h.fromCache && a && a.source === "server"
                ? c.reject(
                    new L(
                      E.UNAVAILABLE,
                      'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                    )
                  )
                : c.resolve(h);
            },
            error: (h) => c.reject(h),
          }),
          u = new bl(Co(o.path), l, { includeMetadataChanges: !0, Nu: !0 });
        return vl(r, u);
      })(await qi(t), t.asyncQueue, e, n, s)
    ),
    s.promise
  );
}
function T1(t, e, n = {}) {
  const s = new Qt();
  return (
    t.asyncQueue.enqueueAndForget(async () =>
      (function (r, i, o, a, c) {
        const l = new xl({
            next: (h) => {
              i.enqueueAndForget(() => wl(r, u)),
                h.fromCache && a.source === "server"
                  ? c.reject(
                      new L(
                        E.UNAVAILABLE,
                        'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)'
                      )
                    )
                  : c.resolve(h);
            },
            error: (h) => c.reject(h),
          }),
          u = new bl(o, l, { includeMetadataChanges: !0, Nu: !0 });
        return vl(r, u);
      })(await qi(t), t.asyncQueue, e, n, s)
    ),
    s.promise
  );
}
class I1 {
  constructor() {
    (this.Bc = Promise.resolve()),
      (this.Lc = []),
      (this.qc = !1),
      (this.Uc = []),
      (this.Kc = null),
      (this.Gc = !1),
      (this.Qc = !1),
      (this.jc = []),
      (this.xo = new nm(this, "async_queue_retry")),
      (this.Wc = () => {
        const n = la();
        n &&
          V("AsyncQueue", "Visibility state changed to " + n.visibilityState),
          this.xo.Po();
      });
    const e = la();
    e &&
      typeof e.addEventListener == "function" &&
      e.addEventListener("visibilitychange", this.Wc);
  }
  get isShuttingDown() {
    return this.qc;
  }
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.zc(), this.Hc(e);
  }
  enterRestrictedMode(e) {
    if (!this.qc) {
      (this.qc = !0), (this.Qc = e || !1);
      const n = la();
      n &&
        typeof n.removeEventListener == "function" &&
        n.removeEventListener("visibilitychange", this.Wc);
    }
  }
  enqueue(e) {
    if ((this.zc(), this.qc)) return new Promise(() => {});
    const n = new Qt();
    return this.Hc(() =>
      this.qc && this.Qc
        ? Promise.resolve()
        : (e().then(n.resolve, n.reject), n.promise)
    ).then(() => n.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Lc.push(e), this.Jc()));
  }
  async Jc() {
    if (this.Lc.length !== 0) {
      try {
        await this.Lc[0](), this.Lc.shift(), this.xo.reset();
      } catch (e) {
        if (!Vr(e)) throw e;
        V("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.Lc.length > 0 && this.xo.Ro(() => this.Jc());
    }
  }
  Hc(e) {
    const n = this.Bc.then(
      () => (
        (this.Gc = !0),
        e()
          .catch((s) => {
            (this.Kc = s), (this.Gc = !1);
            const r = (function (i) {
              let o = i.message || "";
              return (
                i.stack &&
                  (o = i.stack.includes(i.message)
                    ? i.stack
                    : i.message +
                      `
` +
                      i.stack),
                o
              );
            })(s);
            throw (Jt("INTERNAL UNHANDLED ERROR: ", r), s);
          })
          .then((s) => ((this.Gc = !1), s))
      )
    );
    return (this.Bc = n), n;
  }
  enqueueAfterDelay(e, n, s) {
    this.zc(), this.jc.indexOf(e) > -1 && (n = 0);
    const r = gl.createAndSchedule(this, e, n, s, (i) => this.Yc(i));
    return this.Uc.push(r), r;
  }
  zc() {
    this.Kc && z();
  }
  verifyOperationInProgress() {}
  async Xc() {
    let e;
    do (e = this.Bc), await e;
    while (e !== this.Bc);
  }
  Zc(e) {
    for (const n of this.Uc) if (n.timerId === e) return !0;
    return !1;
  }
  ta(e) {
    return this.Xc().then(() => {
      this.Uc.sort((n, s) => n.targetTimeMs - s.targetTimeMs);
      for (const n of this.Uc)
        if ((n.skipDelay(), e !== "all" && n.timerId === e)) break;
      return this.Xc();
    });
  }
  ea(e) {
    this.jc.push(e);
  }
  Yc(e) {
    const n = this.Uc.indexOf(e);
    this.Uc.splice(n, 1);
  }
}
function Nh(t) {
  return (function (e, n) {
    if (typeof e != "object" || e === null) return !1;
    const s = e;
    for (const r of n) if (r in s && typeof s[r] == "function") return !0;
    return !1;
  })(t, ["next", "error", "complete"]);
}
class bn extends Lo {
  constructor(e, n, s, r) {
    super(e, n, s, r),
      (this.type = "firestore"),
      (this._queue = new I1()),
      (this._persistenceKey = (r == null ? void 0 : r.name) || "[DEFAULT]");
  }
  _terminate() {
    return this._firestoreClient || wm(this), this._firestoreClient.terminate();
  }
}
function C1(t, e) {
  const n = typeof t == "object" ? t : Ow(),
    s = typeof t == "string" ? t : e || "(default)",
    r = Rw(n, "firestore").getImmediate({ identifier: s });
  if (!r._initialized) {
    const i = S0("firestore");
    i && y1(r, ...i);
  }
  return r;
}
function Fo(t) {
  return (
    t._firestoreClient || wm(t),
    t._firestoreClient.verifyNotTerminated(),
    t._firestoreClient
  );
}
function wm(t) {
  var e;
  const n = t._freezeSettings(),
    s = (function (r, i, o, a) {
      return new ab(
        r,
        i,
        o,
        a.host,
        a.ssl,
        a.experimentalForceLongPolling,
        a.experimentalAutoDetectLongPolling,
        a.useFetchStreams
      );
    })(
      t._databaseId,
      ((e = t._app) === null || e === void 0 ? void 0 : e.options.appId) || "",
      t._persistenceKey,
      n
    );
  t._firestoreClient = new v1(
    t._authCredentials,
    t._appCheckCredentials,
    t._queue,
    s
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Rs {
  constructor(e) {
    this._byteString = e;
  }
  static fromBase64String(e) {
    try {
      return new Rs(Ze.fromBase64String(e));
    } catch (n) {
      throw new L(
        E.INVALID_ARGUMENT,
        "Failed to construct data from Base64 string: " + n
      );
    }
  }
  static fromUint8Array(e) {
    return new Rs(Ze.fromUint8Array(e));
  }
  toBase64() {
    return this._byteString.toBase64();
  }
  toUint8Array() {
    return this._byteString.toUint8Array();
  }
  toString() {
    return "Bytes(base64: " + this.toBase64() + ")";
  }
  isEqual(e) {
    return this._byteString.isEqual(e._byteString);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class $o {
  constructor(...e) {
    for (let n = 0; n < e.length; ++n)
      if (e[n].length === 0)
        throw new L(
          E.INVALID_ARGUMENT,
          "Invalid field name at argument $(i + 1). Field names must not be empty."
        );
    this._internalPath = new Ye(e);
  }
  isEqual(e) {
    return this._internalPath.isEqual(e._internalPath);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Tl {
  constructor(e) {
    this._methodName = e;
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Il {
  constructor(e, n) {
    if (!isFinite(e) || e < -90 || e > 90)
      throw new L(
        E.INVALID_ARGUMENT,
        "Latitude must be a number between -90 and 90, but was: " + e
      );
    if (!isFinite(n) || n < -180 || n > 180)
      throw new L(
        E.INVALID_ARGUMENT,
        "Longitude must be a number between -180 and 180, but was: " + n
      );
    (this._lat = e), (this._long = n);
  }
  get latitude() {
    return this._lat;
  }
  get longitude() {
    return this._long;
  }
  isEqual(e) {
    return this._lat === e._lat && this._long === e._long;
  }
  toJSON() {
    return { latitude: this._lat, longitude: this._long };
  }
  _compareTo(e) {
    return fe(this._lat, e._lat) || fe(this._long, e._long);
  }
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const S1 = /^__.*__$/;
class A1 {
  constructor(e, n, s) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = s);
  }
  toMutation(e, n) {
    return this.fieldMask !== null
      ? new Cn(e, this.data, this.fieldMask, n, this.fieldTransforms)
      : new Br(e, this.data, n, this.fieldTransforms);
  }
}
class _m {
  constructor(e, n, s) {
    (this.data = e), (this.fieldMask = n), (this.fieldTransforms = s);
  }
  toMutation(e, n) {
    return new Cn(e, this.data, this.fieldMask, n, this.fieldTransforms);
  }
}
function bm(t) {
  switch (t) {
    case 0:
    case 2:
    case 1:
      return !0;
    case 3:
    case 4:
      return !1;
    default:
      throw z();
  }
}
class Cl {
  constructor(e, n, s, r, i, o) {
    (this.settings = e),
      (this.databaseId = n),
      (this.yt = s),
      (this.ignoreUndefinedProperties = r),
      i === void 0 && this.na(),
      (this.fieldTransforms = i || []),
      (this.fieldMask = o || []);
  }
  get path() {
    return this.settings.path;
  }
  get sa() {
    return this.settings.sa;
  }
  ia(e) {
    return new Cl(
      Object.assign(Object.assign({}, this.settings), e),
      this.databaseId,
      this.yt,
      this.ignoreUndefinedProperties,
      this.fieldTransforms,
      this.fieldMask
    );
  }
  ra(e) {
    var n;
    const s = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      r = this.ia({ path: s, oa: !1 });
    return r.ua(e), r;
  }
  ca(e) {
    var n;
    const s = (n = this.path) === null || n === void 0 ? void 0 : n.child(e),
      r = this.ia({ path: s, oa: !1 });
    return r.na(), r;
  }
  aa(e) {
    return this.ia({ path: void 0, oa: !0 });
  }
  ha(e) {
    return Hi(
      e,
      this.settings.methodName,
      this.settings.la || !1,
      this.path,
      this.settings.fa
    );
  }
  contains(e) {
    return (
      this.fieldMask.find((n) => e.isPrefixOf(n)) !== void 0 ||
      this.fieldTransforms.find((n) => e.isPrefixOf(n.field)) !== void 0
    );
  }
  na() {
    if (this.path)
      for (let e = 0; e < this.path.length; e++) this.ua(this.path.get(e));
  }
  ua(e) {
    if (e.length === 0) throw this.ha("Document fields must not be empty");
    if (bm(this.sa) && S1.test(e))
      throw this.ha('Document fields cannot begin and end with "__"');
  }
}
class k1 {
  constructor(e, n, s) {
    (this.databaseId = e),
      (this.ignoreUndefinedProperties = n),
      (this.yt = s || No(e));
  }
  da(e, n, s, r = !1) {
    return new Cl(
      { sa: e, methodName: n, fa: s, path: Ye.emptyPath(), oa: !1, la: r },
      this.databaseId,
      this.yt,
      this.ignoreUndefinedProperties
    );
  }
}
function Sl(t) {
  const e = t._freezeSettings(),
    n = No(t._databaseId);
  return new k1(t._databaseId, !!e.ignoreUndefinedProperties, n);
}
function R1(t, e, n, s, r, i = {}) {
  const o = t.da(i.merge || i.mergeFields ? 2 : 0, e, n, r);
  Al("Data must be an object, but it was:", o, s);
  const a = Em(s, o);
  let c, l;
  if (i.merge) (c = new dt(o.fieldMask)), (l = o.fieldTransforms);
  else if (i.mergeFields) {
    const u = [];
    for (const h of i.mergeFields) {
      const f = lc(e, h, n);
      if (!o.contains(f))
        throw new L(
          E.INVALID_ARGUMENT,
          `Field '${f}' is specified in your field mask but missing from your input data.`
        );
      Tm(u, f) || u.push(f);
    }
    (c = new dt(u)), (l = o.fieldTransforms.filter((h) => c.covers(h.field)));
  } else (c = null), (l = o.fieldTransforms);
  return new A1(new at(a), c, l);
}
class Uo extends Tl {
  _toFieldTransform(e) {
    if (e.sa !== 2)
      throw e.sa === 1
        ? e.ha(
            `${this._methodName}() can only appear at the top level of your update data`
          )
        : e.ha(
            `${this._methodName}() cannot be used with set() unless you pass {merge:true}`
          );
    return e.fieldMask.push(e.path), null;
  }
  isEqual(e) {
    return e instanceof Uo;
  }
}
function D1(t, e, n, s) {
  const r = t.da(1, e, n);
  Al("Data must be an object, but it was:", r, s);
  const i = [],
    o = at.empty();
  Jn(s, (c, l) => {
    const u = kl(e, c, n);
    l = Bt(l);
    const h = r.ca(u);
    if (l instanceof Uo) i.push(u);
    else {
      const f = zr(l, h);
      f != null && (i.push(u), o.set(u, f));
    }
  });
  const a = new dt(i);
  return new _m(o, a, r.fieldTransforms);
}
function N1(t, e, n, s, r, i) {
  const o = t.da(1, e, n),
    a = [lc(e, s, n)],
    c = [r];
  if (i.length % 2 != 0)
    throw new L(
      E.INVALID_ARGUMENT,
      `Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`
    );
  for (let f = 0; f < i.length; f += 2) a.push(lc(e, i[f])), c.push(i[f + 1]);
  const l = [],
    u = at.empty();
  for (let f = a.length - 1; f >= 0; --f)
    if (!Tm(l, a[f])) {
      const m = a[f];
      let g = c[f];
      g = Bt(g);
      const v = o.ca(m);
      if (g instanceof Uo) l.push(m);
      else {
        const b = zr(g, v);
        b != null && (l.push(m), u.set(m, b));
      }
    }
  const h = new dt(l);
  return new _m(u, h, o.fieldTransforms);
}
function O1(t, e, n, s = !1) {
  return zr(n, t.da(s ? 4 : 3, e));
}
function zr(t, e) {
  if (xm((t = Bt(t)))) return Al("Unsupported field value:", e, t), Em(t, e);
  if (t instanceof Tl)
    return (
      (function (n, s) {
        if (!bm(s.sa))
          throw s.ha(
            `${n._methodName}() can only be used with update() and set()`
          );
        if (!s.path)
          throw s.ha(
            `${n._methodName}() is not currently supported inside arrays`
          );
        const r = n._toFieldTransform(s);
        r && s.fieldTransforms.push(r);
      })(t, e),
      null
    );
  if (t === void 0 && e.ignoreUndefinedProperties) return null;
  if ((e.path && e.fieldMask.push(e.path), t instanceof Array)) {
    if (e.settings.oa && e.sa !== 4)
      throw e.ha("Nested arrays are not supported");
    return (function (n, s) {
      const r = [];
      let i = 0;
      for (const o of n) {
        let a = zr(o, s.aa(i));
        a == null && (a = { nullValue: "NULL_VALUE" }), r.push(a), i++;
      }
      return { arrayValue: { values: r } };
    })(t, e);
  }
  return (function (n, s) {
    if ((n = Bt(n)) === null) return { nullValue: "NULL_VALUE" };
    if (typeof n == "number") return Tb(s.yt, n);
    if (typeof n == "boolean") return { booleanValue: n };
    if (typeof n == "string") return { stringValue: n };
    if (n instanceof Date) {
      const r = Fe.fromDate(n);
      return { timestampValue: Bi(s.yt, r) };
    }
    if (n instanceof Fe) {
      const r = new Fe(n.seconds, 1e3 * Math.floor(n.nanoseconds / 1e3));
      return { timestampValue: Bi(s.yt, r) };
    }
    if (n instanceof Il)
      return {
        geoPointValue: { latitude: n.latitude, longitude: n.longitude },
      };
    if (n instanceof Rs) return { bytesValue: Wp(s.yt, n._byteString) };
    if (n instanceof st) {
      const r = s.databaseId,
        i = n.firestore._databaseId;
      if (!i.isEqual(r))
        throw s.ha(
          `Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`
        );
      return {
        referenceValue: cl(
          n.firestore._databaseId || s.databaseId,
          n._key.path
        ),
      };
    }
    throw s.ha(`Unsupported field value: ${Mo(n)}`);
  })(t, e);
}
function Em(t, e) {
  const n = {};
  return (
    _p(t)
      ? e.path && e.path.length > 0 && e.fieldMask.push(e.path)
      : Jn(t, (s, r) => {
          const i = zr(r, e.ra(s));
          i != null && (n[s] = i);
        }),
    { mapValue: { fields: n } }
  );
}
function xm(t) {
  return !(
    typeof t != "object" ||
    t === null ||
    t instanceof Array ||
    t instanceof Date ||
    t instanceof Fe ||
    t instanceof Il ||
    t instanceof Rs ||
    t instanceof st ||
    t instanceof Tl
  );
}
function Al(t, e, n) {
  if (
    !xm(n) ||
    !(function (s) {
      return (
        typeof s == "object" &&
        s !== null &&
        (Object.getPrototypeOf(s) === Object.prototype ||
          Object.getPrototypeOf(s) === null)
      );
    })(n)
  ) {
    const s = Mo(n);
    throw s === "an object" ? e.ha(t + " a custom object") : e.ha(t + " " + s);
  }
}
function lc(t, e, n) {
  if ((e = Bt(e)) instanceof $o) return e._internalPath;
  if (typeof e == "string") return kl(t, e);
  throw Hi("Field path arguments must be of type string or ", t, !1, void 0, n);
}
const P1 = new RegExp("[~\\*/\\[\\]]");
function kl(t, e, n) {
  if (e.search(P1) >= 0)
    throw Hi(
      `Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,
      t,
      !1,
      void 0,
      n
    );
  try {
    return new $o(...e.split("."))._internalPath;
  } catch {
    throw Hi(
      `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
      t,
      !1,
      void 0,
      n
    );
  }
}
function Hi(t, e, n, s, r) {
  const i = s && !s.isEmpty(),
    o = r !== void 0;
  let a = `Function ${e}() called with invalid data`;
  n && (a += " (via `toFirestore()`)"), (a += ". ");
  let c = "";
  return (
    (i || o) &&
      ((c += " (found"),
      i && (c += ` in field ${s}`),
      o && (c += ` in document ${r}`),
      (c += ")")),
    new L(E.INVALID_ARGUMENT, a + t + c)
  );
}
function Tm(t, e) {
  return t.some((n) => n.isEqual(e));
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Im {
  constructor(e, n, s, r, i) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._key = s),
      (this._document = r),
      (this._converter = i);
  }
  get id() {
    return this._key.path.lastSegment();
  }
  get ref() {
    return new st(this._firestore, this._converter, this._key);
  }
  exists() {
    return this._document !== null;
  }
  data() {
    if (this._document) {
      if (this._converter) {
        const e = new M1(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          null
        );
        return this._converter.fromFirestore(e);
      }
      return this._userDataWriter.convertValue(this._document.data.value);
    }
  }
  get(e) {
    if (this._document) {
      const n = this._document.data.field(Vo("DocumentSnapshot.get", e));
      if (n !== null) return this._userDataWriter.convertValue(n);
    }
  }
}
class M1 extends Im {
  data() {
    return super.data();
  }
}
function Vo(t, e) {
  return typeof e == "string"
    ? kl(t, e)
    : e instanceof $o
    ? e._internalPath
    : e._delegate._internalPath;
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Cm(t) {
  if (t.limitType === "L" && t.explicitOrderBy.length === 0)
    throw new L(
      E.UNIMPLEMENTED,
      "limitToLast() queries require specifying at least one orderBy() clause"
    );
}
class Rl {}
class Sm extends Rl {}
function vi(t, e, ...n) {
  let s = [];
  e instanceof Rl && s.push(e),
    (s = s.concat(n)),
    (function (r) {
      const i = r.filter((a) => a instanceof Dl).length,
        o = r.filter((a) => a instanceof Bo).length;
      if (i > 1 || (i > 0 && o > 0))
        throw new L(
          E.INVALID_ARGUMENT,
          "InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`."
        );
    })(s);
  for (const r of s) t = r._apply(t);
  return t;
}
class Bo extends Sm {
  constructor(e, n, s) {
    super(),
      (this._field = e),
      (this._op = n),
      (this._value = s),
      (this.type = "where");
  }
  static _create(e, n, s) {
    return new Bo(e, n, s);
  }
  _apply(e) {
    const n = this._parse(e);
    return Am(e._query, n), new Sn(e.firestore, e.converter, tc(e._query, n));
  }
  _parse(e) {
    const n = Sl(e.firestore);
    return (function (r, i, o, a, c, l, u) {
      let h;
      if (c.isKeyField()) {
        if (l === "array-contains" || l === "array-contains-any")
          throw new L(
            E.INVALID_ARGUMENT,
            `Invalid Query. You can't perform '${l}' queries on documentId().`
          );
        if (l === "in" || l === "not-in") {
          Ph(u, l);
          const f = [];
          for (const m of u) f.push(Oh(a, r, m));
          h = { arrayValue: { values: f } };
        } else h = Oh(a, r, u);
      } else
        (l !== "in" && l !== "not-in" && l !== "array-contains-any") ||
          Ph(u, l),
          (h = O1(o, i, u, l === "in" || l === "not-in"));
      return Pe.create(c, l, h);
    })(
      e._query,
      "where",
      n,
      e.firestore._databaseId,
      this._field,
      this._op,
      this._value
    );
  }
}
function ai(t, e, n) {
  const s = e,
    r = Vo("where", t);
  return Bo._create(r, s, n);
}
class Dl extends Rl {
  constructor(e, n) {
    super(), (this.type = e), (this._queryConstraints = n);
  }
  static _create(e, n) {
    return new Dl(e, n);
  }
  _parse(e) {
    const n = this._queryConstraints
      .map((s) => s._parse(e))
      .filter((s) => s.getFilters().length > 0);
    return n.length === 1 ? n[0] : Nt.create(n, this._getOperator());
  }
  _apply(e) {
    const n = this._parse(e);
    return n.getFilters().length === 0
      ? e
      : ((function (s, r) {
          let i = s;
          const o = r.getFlattenedFilters();
          for (const a of o) Am(i, a), (i = tc(i, a));
        })(e._query, n),
        new Sn(e.firestore, e.converter, tc(e._query, n)));
  }
  _getQueryConstraints() {
    return this._queryConstraints;
  }
  _getOperator() {
    return this.type === "and" ? "and" : "or";
  }
}
class Nl extends Sm {
  constructor(e, n) {
    super(), (this._field = e), (this._direction = n), (this.type = "orderBy");
  }
  static _create(e, n) {
    return new Nl(e, n);
  }
  _apply(e) {
    const n = (function (s, r, i) {
      if (s.startAt !== null)
        throw new L(
          E.INVALID_ARGUMENT,
          "Invalid query. You must not call startAt() or startAfter() before calling orderBy()."
        );
      if (s.endAt !== null)
        throw new L(
          E.INVALID_ARGUMENT,
          "Invalid query. You must not call endAt() or endBefore() before calling orderBy()."
        );
      const o = new ds(r, i);
      return (
        (function (a, c) {
          if (il(a) === null) {
            const l = So(a);
            l !== null && km(a, l, c.field);
          }
        })(s, o),
        o
      );
    })(e._query, this._field, this._direction);
    return new Sn(
      e.firestore,
      e.converter,
      (function (s, r) {
        const i = s.explicitOrderBy.concat([r]);
        return new Us(
          s.path,
          s.collectionGroup,
          i,
          s.filters.slice(),
          s.limit,
          s.limitType,
          s.startAt,
          s.endAt
        );
      })(e._query, n)
    );
  }
}
function L1(t, e = "asc") {
  const n = e,
    s = Vo("orderBy", t);
  return Nl._create(s, n);
}
function Oh(t, e, n) {
  if (typeof (n = Bt(n)) == "string") {
    if (n === "")
      throw new L(
        E.INVALID_ARGUMENT,
        "Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string."
      );
    if (!Rp(e) && n.indexOf("/") !== -1)
      throw new L(
        E.INVALID_ARGUMENT,
        `Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`
      );
    const s = e.path.child(Ee.fromString(n));
    if (!j.isDocumentKey(s))
      throw new L(
        E.INVALID_ARGUMENT,
        `Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`
      );
    return ih(t, new j(s));
  }
  if (n instanceof st) return ih(t, n._key);
  throw new L(
    E.INVALID_ARGUMENT,
    `Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mo(
      n
    )}.`
  );
}
function Ph(t, e) {
  if (!Array.isArray(t) || t.length === 0)
    throw new L(
      E.INVALID_ARGUMENT,
      `Invalid Query. A non-empty array is required for '${e.toString()}' filters.`
    );
  if (t.length > 10)
    throw new L(
      E.INVALID_ARGUMENT,
      `Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`
    );
}
function Am(t, e) {
  if (e.isInequality()) {
    const s = So(t),
      r = e.field;
    if (s !== null && !s.isEqual(r))
      throw new L(
        E.INVALID_ARGUMENT,
        `Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`
      );
    const i = il(t);
    i !== null && km(t, r, i);
  }
  const n = (function (s, r) {
    for (const i of s)
      for (const o of i.getFlattenedFilters())
        if (r.indexOf(o.op) >= 0) return o.op;
    return null;
  })(
    t.filters,
    (function (s) {
      switch (s) {
        case "!=":
          return ["!=", "not-in"];
        case "array-contains":
          return ["array-contains", "array-contains-any", "not-in"];
        case "in":
          return ["array-contains-any", "in", "not-in"];
        case "array-contains-any":
          return ["array-contains", "array-contains-any", "in", "not-in"];
        case "not-in":
          return ["array-contains", "array-contains-any", "in", "not-in", "!="];
        default:
          return [];
      }
    })(e.op)
  );
  if (n !== null)
    throw n === e.op
      ? new L(
          E.INVALID_ARGUMENT,
          `Invalid query. You cannot use more than one '${e.op.toString()}' filter.`
        )
      : new L(
          E.INVALID_ARGUMENT,
          `Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`
        );
}
function km(t, e, n) {
  if (!n.isEqual(e))
    throw new L(
      E.INVALID_ARGUMENT,
      `Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`
    );
}
class F1 {
  convertValue(e, n = "none") {
    switch (Qn(e)) {
      case 0:
        return null;
      case 1:
        return e.booleanValue;
      case 2:
        return Oe(e.integerValue || e.doubleValue);
      case 3:
        return this.convertTimestamp(e.timestampValue);
      case 4:
        return this.convertServerTimestamp(e, n);
      case 5:
        return e.stringValue;
      case 6:
        return this.convertBytes(Is(e.bytesValue));
      case 7:
        return this.convertReference(e.referenceValue);
      case 8:
        return this.convertGeoPoint(e.geoPointValue);
      case 9:
        return this.convertArray(e.arrayValue, n);
      case 10:
        return this.convertObject(e.mapValue, n);
      default:
        throw z();
    }
  }
  convertObject(e, n) {
    const s = {};
    return (
      Jn(e.fields, (r, i) => {
        s[r] = this.convertValue(i, n);
      }),
      s
    );
  }
  convertGeoPoint(e) {
    return new Il(Oe(e.latitude), Oe(e.longitude));
  }
  convertArray(e, n) {
    return (e.values || []).map((s) => this.convertValue(s, n));
  }
  convertServerTimestamp(e, n) {
    switch (n) {
      case "previous":
        const s = Ep(e);
        return s == null ? null : this.convertValue(s, n);
      case "estimate":
        return this.convertTimestamp(Ir(e));
      default:
        return null;
    }
  }
  convertTimestamp(e) {
    const n = wn(e);
    return new Fe(n.seconds, n.nanos);
  }
  convertDocumentKey(e, n) {
    const s = Ee.fromString(e);
    we(Zp(s));
    const r = new Tr(s.get(1), s.get(3)),
      i = new j(s.popFirst(5));
    return (
      r.isEqual(n) ||
        Jt(
          `Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`
        ),
      i
    );
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function $1(t, e, n) {
  let s;
  return (
    (s = t
      ? n && (n.merge || n.mergeFields)
        ? t.toFirestore(e, n)
        : t.toFirestore(e)
      : e),
    s
  );
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class Ys {
  constructor(e, n) {
    (this.hasPendingWrites = e), (this.fromCache = n);
  }
  isEqual(e) {
    return (
      this.hasPendingWrites === e.hasPendingWrites &&
      this.fromCache === e.fromCache
    );
  }
}
class Rm extends Im {
  constructor(e, n, s, r, i, o) {
    super(e, n, s, r, o),
      (this._firestore = e),
      (this._firestoreImpl = e),
      (this.metadata = i);
  }
  exists() {
    return super.exists();
  }
  data(e = {}) {
    if (this._document) {
      if (this._converter) {
        const n = new wi(
          this._firestore,
          this._userDataWriter,
          this._key,
          this._document,
          this.metadata,
          null
        );
        return this._converter.fromFirestore(n, e);
      }
      return this._userDataWriter.convertValue(
        this._document.data.value,
        e.serverTimestamps
      );
    }
  }
  get(e, n = {}) {
    if (this._document) {
      const s = this._document.data.field(Vo("DocumentSnapshot.get", e));
      if (s !== null)
        return this._userDataWriter.convertValue(s, n.serverTimestamps);
    }
  }
}
class wi extends Rm {
  data(e = {}) {
    return super.data(e);
  }
}
class Dm {
  constructor(e, n, s, r) {
    (this._firestore = e),
      (this._userDataWriter = n),
      (this._snapshot = r),
      (this.metadata = new Ys(r.hasPendingWrites, r.fromCache)),
      (this.query = s);
  }
  get docs() {
    const e = [];
    return this.forEach((n) => e.push(n)), e;
  }
  get size() {
    return this._snapshot.docs.size;
  }
  get empty() {
    return this.size === 0;
  }
  forEach(e, n) {
    this._snapshot.docs.forEach((s) => {
      e.call(
        n,
        new wi(
          this._firestore,
          this._userDataWriter,
          s.key,
          s,
          new Ys(
            this._snapshot.mutatedKeys.has(s.key),
            this._snapshot.fromCache
          ),
          this.query.converter
        )
      );
    });
  }
  docChanges(e = {}) {
    const n = !!e.includeMetadataChanges;
    if (n && this._snapshot.excludesMetadataChanges)
      throw new L(
        E.INVALID_ARGUMENT,
        "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot()."
      );
    return (
      (this._cachedChanges &&
        this._cachedChangesIncludeMetadataChanges === n) ||
        ((this._cachedChanges = (function (s, r) {
          if (s._snapshot.oldDocs.isEmpty()) {
            let i = 0;
            return s._snapshot.docChanges.map((o) => {
              const a = new wi(
                s._firestore,
                s._userDataWriter,
                o.doc.key,
                o.doc,
                new Ys(
                  s._snapshot.mutatedKeys.has(o.doc.key),
                  s._snapshot.fromCache
                ),
                s.query.converter
              );
              return (
                o.doc, { type: "added", doc: a, oldIndex: -1, newIndex: i++ }
              );
            });
          }
          {
            let i = s._snapshot.oldDocs;
            return s._snapshot.docChanges
              .filter((o) => r || o.type !== 3)
              .map((o) => {
                const a = new wi(
                  s._firestore,
                  s._userDataWriter,
                  o.doc.key,
                  o.doc,
                  new Ys(
                    s._snapshot.mutatedKeys.has(o.doc.key),
                    s._snapshot.fromCache
                  ),
                  s.query.converter
                );
                let c = -1,
                  l = -1;
                return (
                  o.type !== 0 &&
                    ((c = i.indexOf(o.doc.key)), (i = i.delete(o.doc.key))),
                  o.type !== 1 &&
                    ((i = i.add(o.doc)), (l = i.indexOf(o.doc.key))),
                  { type: U1(o.type), doc: a, oldIndex: c, newIndex: l }
                );
              });
          }
        })(this, n)),
        (this._cachedChangesIncludeMetadataChanges = n)),
      this._cachedChanges
    );
  }
}
function U1(t) {
  switch (t) {
    case 0:
      return "added";
    case 2:
    case 3:
      return "modified";
    case 1:
      return "removed";
    default:
      return z();
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Nm(t) {
  t = vt(t, st);
  const e = vt(t.firestore, bn);
  return x1(Fo(e), t._key).then((n) => Om(e, t, n));
}
class Ol extends F1 {
  constructor(e) {
    super(), (this.firestore = e);
  }
  convertBytes(e) {
    return new Rs(e);
  }
  convertReference(e) {
    const n = this.convertDocumentKey(e, this.firestore._databaseId);
    return new st(this.firestore, null, n);
  }
}
function ua(t) {
  t = vt(t, Sn);
  const e = vt(t.firestore, bn),
    n = Fo(e),
    s = new Ol(e);
  return Cm(t._query), T1(n, t._query).then((r) => new Dm(e, s, t, r));
}
function V1(t, e, n, ...s) {
  t = vt(t, st);
  const r = vt(t.firestore, bn),
    i = Sl(r);
  let o;
  return (
    (o =
      typeof (e = Bt(e)) == "string" || e instanceof $o
        ? N1(i, "updateDoc", t._key, e, n, s)
        : D1(i, "updateDoc", t._key, e)),
    Pl(r, [o.toMutation(t._key, Rt.exists(!0))])
  );
}
function B1(t) {
  return Pl(vt(t.firestore, bn), [new al(t._key, Rt.none())]);
}
function Mh(t, e) {
  const n = vt(t.firestore, bn),
    s = cr(t),
    r = $1(t.converter, e);
  return Pl(n, [
    R1(
      Sl(t.firestore),
      "addDoc",
      s._key,
      r,
      t.converter !== null,
      {}
    ).toMutation(s._key, Rt.exists(!1)),
  ]).then(() => s);
}
function j1(t, ...e) {
  var n, s, r;
  t = Bt(t);
  let i = { includeMetadataChanges: !1 },
    o = 0;
  typeof e[o] != "object" || Nh(e[o]) || ((i = e[o]), o++);
  const a = { includeMetadataChanges: i.includeMetadataChanges };
  if (Nh(e[o])) {
    const h = e[o];
    (e[o] = (n = h.next) === null || n === void 0 ? void 0 : n.bind(h)),
      (e[o + 1] = (s = h.error) === null || s === void 0 ? void 0 : s.bind(h)),
      (e[o + 2] =
        (r = h.complete) === null || r === void 0 ? void 0 : r.bind(h));
  }
  let c, l, u;
  if (t instanceof st)
    (l = vt(t.firestore, bn)),
      (u = Co(t._key.path)),
      (c = {
        next: (h) => {
          e[o] && e[o](Om(l, t, h));
        },
        error: e[o + 1],
        complete: e[o + 2],
      });
  else {
    const h = vt(t, Sn);
    (l = vt(h.firestore, bn)), (u = h._query);
    const f = new Ol(l);
    (c = {
      next: (m) => {
        e[o] && e[o](new Dm(l, f, h, m));
      },
      error: e[o + 1],
      complete: e[o + 2],
    }),
      Cm(t._query);
  }
  return (function (h, f, m, g) {
    const v = new xl(g),
      b = new bl(f, v, m);
    return (
      h.asyncQueue.enqueueAndForget(async () => vl(await qi(h), b)),
      () => {
        v.bc(), h.asyncQueue.enqueueAndForget(async () => wl(await qi(h), b));
      }
    );
  })(Fo(l), u, a, c);
}
function Pl(t, e) {
  return (function (n, s) {
    const r = new Qt();
    return (
      n.asyncQueue.enqueueAndForget(async () => i1(await E1(n), s, r)),
      r.promise
    );
  })(Fo(t), e);
}
function Om(t, e, n) {
  const s = n.docs.get(e._key),
    r = new Ol(t);
  return new Rm(
    t,
    r,
    e._key,
    s,
    new Ys(n.hasPendingWrites, n.fromCache),
    e.converter
  );
}
(function (t, e = !0) {
  (function (n) {
    $s = n;
  })(fd),
    gr(
      new Es(
        "firestore",
        (n, { instanceIdentifier: s, options: r }) => {
          const i = n.getProvider("app").getImmediate(),
            o = new bn(
              new Q_(n.getProvider("auth-internal")),
              new Z_(n.getProvider("app-check-internal")),
              (function (a, c) {
                if (
                  !Object.prototype.hasOwnProperty.apply(a.options, [
                    "projectId",
                  ])
                )
                  throw new L(
                    E.INVALID_ARGUMENT,
                    '"projectId" not provided in firebase.initializeApp.'
                  );
                return new Tr(a.options.projectId, c);
              })(i, s),
              i
            );
          return (
            (r = Object.assign({ useFetchStreams: e }, r)), o._setSettings(r), o
          );
        },
        "PUBLIC"
      ).setMultipleInstances(!0)
    ),
    mn(th, "3.8.1", t),
    mn(th, "3.8.1", "esm2017");
})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const Pm = "firebasestorage.googleapis.com",
  q1 = "storageBucket",
  H1 = 2 * 60 * 1e3,
  K1 = 10 * 60 * 1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class qt extends Yn {
  constructor(e, n, s = 0) {
    super(ha(e), `Firebase Storage: ${n} (${ha(e)})`),
      (this.status_ = s),
      (this.customData = { serverResponse: null }),
      (this._baseMessage = this.message),
      Object.setPrototypeOf(this, qt.prototype);
  }
  get status() {
    return this.status_;
  }
  set status(e) {
    this.status_ = e;
  }
  _codeEquals(e) {
    return ha(e) === this.code;
  }
  get serverResponse() {
    return this.customData.serverResponse;
  }
  set serverResponse(e) {
    (this.customData.serverResponse = e),
      this.customData.serverResponse
        ? (this.message = `${this._baseMessage}
${this.customData.serverResponse}`)
        : (this.message = this._baseMessage);
  }
}
function ha(t) {
  return "storage/" + t;
}
function z1() {
  const t =
    "An unknown error occurred, please check the error payload for server response.";
  return new qt("unknown", t);
}
function G1() {
  return new qt(
    "retry-limit-exceeded",
    "Max retry time for operation exceeded, please try again."
  );
}
function W1() {
  return new qt("canceled", "User canceled the upload/download.");
}
function Q1(t) {
  return new qt("invalid-url", "Invalid URL '" + t + "'.");
}
function Y1(t) {
  return new qt(
    "invalid-default-bucket",
    "Invalid default bucket '" + t + "'."
  );
}
function Lh(t) {
  return new qt("invalid-argument", t);
}
function Mm() {
  return new qt("app-deleted", "The Firebase app was deleted.");
}
function X1(t) {
  return new qt(
    "invalid-root-operation",
    "The operation '" +
      t +
      "' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png')."
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class It {
  constructor(e, n) {
    (this.bucket = e), (this.path_ = n);
  }
  get path() {
    return this.path_;
  }
  get isRoot() {
    return this.path.length === 0;
  }
  fullServerUrl() {
    const e = encodeURIComponent;
    return "/b/" + e(this.bucket) + "/o/" + e(this.path);
  }
  bucketOnlyServerUrl() {
    return "/b/" + encodeURIComponent(this.bucket) + "/o";
  }
  static makeFromBucketSpec(e, n) {
    let s;
    try {
      s = It.makeFromUrl(e, n);
    } catch {
      return new It(e, "");
    }
    if (s.path === "") return s;
    throw Y1(e);
  }
  static makeFromUrl(e, n) {
    let s = null;
    const r = "([A-Za-z0-9.\\-_]+)";
    function i(U) {
      U.path.charAt(U.path.length - 1) === "/" &&
        (U.path_ = U.path_.slice(0, -1));
    }
    const o = "(/(.*))?$",
      a = new RegExp("^gs://" + r + o, "i"),
      c = { bucket: 1, path: 3 };
    function l(U) {
      U.path_ = decodeURIComponent(U.path);
    }
    const u = "v[A-Za-z0-9_]+",
      h = n.replace(/[.]/g, "\\."),
      f = "(/([^?#]*).*)?$",
      m = new RegExp(`^https?://${h}/${u}/b/${r}/o${f}`, "i"),
      g = { bucket: 1, path: 3 },
      v = n === Pm ? "(?:storage.googleapis.com|storage.cloud.google.com)" : n,
      b = "([^?#]*)",
      S = new RegExp(`^https?://${v}/${r}/${b}`, "i"),
      O = [
        { regex: a, indices: c, postModify: i },
        { regex: m, indices: g, postModify: l },
        { regex: S, indices: { bucket: 1, path: 2 }, postModify: l },
      ];
    for (let U = 0; U < O.length; U++) {
      const J = O[U],
        le = J.regex.exec(e);
      if (le) {
        const K = le[J.indices.bucket];
        let G = le[J.indices.path];
        G || (G = ""), (s = new It(K, G)), J.postModify(s);
        break;
      }
    }
    if (s == null) throw Q1(e);
    return s;
  }
}
class J1 {
  constructor(e) {
    this.promise_ = Promise.reject(e);
  }
  getPromise() {
    return this.promise_;
  }
  cancel(e = !1) {}
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Z1(t, e, n) {
  let s = 1,
    r = null,
    i = null,
    o = !1,
    a = 0;
  function c() {
    return a === 2;
  }
  let l = !1;
  function u(...b) {
    l || ((l = !0), e.apply(null, b));
  }
  function h(b) {
    r = setTimeout(() => {
      (r = null), t(m, c());
    }, b);
  }
  function f() {
    i && clearTimeout(i);
  }
  function m(b, ...S) {
    if (l) {
      f();
      return;
    }
    if (b) {
      f(), u.call(null, b, ...S);
      return;
    }
    if (c() || o) {
      f(), u.call(null, b, ...S);
      return;
    }
    s < 64 && (s *= 2);
    let O;
    a === 1 ? ((a = 2), (O = 0)) : (O = (s + Math.random()) * 1e3), h(O);
  }
  let g = !1;
  function v(b) {
    g ||
      ((g = !0),
      f(),
      !l &&
        (r !== null ? (b || (a = 2), clearTimeout(r), h(0)) : b || (a = 1)));
  }
  return (
    h(0),
    (i = setTimeout(() => {
      (o = !0), v(!0);
    }, n)),
    v
  );
}
function ex(t) {
  t(!1);
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function tx(t) {
  return t !== void 0;
}
function Fh(t, e, n, s) {
  if (s < e) throw Lh(`Invalid value for '${t}'. Expected ${e} or greater.`);
  if (s > n) throw Lh(`Invalid value for '${t}'. Expected ${n} or less.`);
}
function nx(t) {
  const e = encodeURIComponent;
  let n = "?";
  for (const s in t)
    if (t.hasOwnProperty(s)) {
      const r = e(s) + "=" + e(t[s]);
      n = n + r + "&";
    }
  return (n = n.slice(0, -1)), n;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Ki;
(function (t) {
  (t[(t.NO_ERROR = 0)] = "NO_ERROR"),
    (t[(t.NETWORK_ERROR = 1)] = "NETWORK_ERROR"),
    (t[(t.ABORT = 2)] = "ABORT");
})(Ki || (Ki = {}));
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function sx(t, e) {
  const n = t >= 500 && t < 600,
    r = [408, 429].indexOf(t) !== -1,
    i = e.indexOf(t) !== -1;
  return n || r || i;
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class rx {
  constructor(e, n, s, r, i, o, a, c, l, u, h, f = !0) {
    (this.url_ = e),
      (this.method_ = n),
      (this.headers_ = s),
      (this.body_ = r),
      (this.successCodes_ = i),
      (this.additionalRetryCodes_ = o),
      (this.callback_ = a),
      (this.errorCallback_ = c),
      (this.timeout_ = l),
      (this.progressCallback_ = u),
      (this.connectionFactory_ = h),
      (this.retry = f),
      (this.pendingConnection_ = null),
      (this.backoffId_ = null),
      (this.canceled_ = !1),
      (this.appDelete_ = !1),
      (this.promise_ = new Promise((m, g) => {
        (this.resolve_ = m), (this.reject_ = g), this.start_();
      }));
  }
  start_() {
    const e = (s, r) => {
        if (r) {
          s(!1, new ci(!1, null, !0));
          return;
        }
        const i = this.connectionFactory_();
        this.pendingConnection_ = i;
        const o = (a) => {
          const c = a.loaded,
            l = a.lengthComputable ? a.total : -1;
          this.progressCallback_ !== null && this.progressCallback_(c, l);
        };
        this.progressCallback_ !== null && i.addUploadProgressListener(o),
          i
            .send(this.url_, this.method_, this.body_, this.headers_)
            .then(() => {
              this.progressCallback_ !== null &&
                i.removeUploadProgressListener(o),
                (this.pendingConnection_ = null);
              const a = i.getErrorCode() === Ki.NO_ERROR,
                c = i.getStatus();
              if (!a || (sx(c, this.additionalRetryCodes_) && this.retry)) {
                const u = i.getErrorCode() === Ki.ABORT;
                s(!1, new ci(!1, null, u));
                return;
              }
              const l = this.successCodes_.indexOf(c) !== -1;
              s(!0, new ci(l, i));
            });
      },
      n = (s, r) => {
        const i = this.resolve_,
          o = this.reject_,
          a = r.connection;
        if (r.wasSuccessCode)
          try {
            const c = this.callback_(a, a.getResponse());
            tx(c) ? i(c) : i();
          } catch (c) {
            o(c);
          }
        else if (a !== null) {
          const c = z1();
          (c.serverResponse = a.getErrorText()),
            this.errorCallback_ ? o(this.errorCallback_(a, c)) : o(c);
        } else if (r.canceled) {
          const c = this.appDelete_ ? Mm() : W1();
          o(c);
        } else {
          const c = G1();
          o(c);
        }
      };
    this.canceled_
      ? n(!1, new ci(!1, null, !0))
      : (this.backoffId_ = Z1(e, n, this.timeout_));
  }
  getPromise() {
    return this.promise_;
  }
  cancel(e) {
    (this.canceled_ = !0),
      (this.appDelete_ = e || !1),
      this.backoffId_ !== null && ex(this.backoffId_),
      this.pendingConnection_ !== null && this.pendingConnection_.abort();
  }
}
class ci {
  constructor(e, n, s) {
    (this.wasSuccessCode = e), (this.connection = n), (this.canceled = !!s);
  }
}
function ix(t, e) {
  e !== null && e.length > 0 && (t.Authorization = "Firebase " + e);
}
function ox(t, e) {
  t["X-Firebase-Storage-Version"] = "webjs/" + (e ?? "AppManager");
}
function ax(t, e) {
  e && (t["X-Firebase-GMPID"] = e);
}
function cx(t, e) {
  e !== null && (t["X-Firebase-AppCheck"] = e);
}
function lx(t, e, n, s, r, i, o = !0) {
  const a = nx(t.urlParams),
    c = t.url + a,
    l = Object.assign({}, t.headers);
  return (
    ax(l, e),
    ix(l, n),
    ox(l, i),
    cx(l, s),
    new rx(
      c,
      t.method,
      l,
      t.body,
      t.successCodes,
      t.additionalRetryCodes,
      t.handler,
      t.errorHandler,
      t.timeout,
      t.progressCallback,
      r,
      o
    )
  );
}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function ux(t) {
  if (t.length === 0) return null;
  const e = t.lastIndexOf("/");
  return e === -1 ? "" : t.slice(0, e);
}
function hx(t) {
  const e = t.lastIndexOf("/", t.length - 2);
  return e === -1 ? t : t.slice(e + 1);
}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ class zi {
  constructor(e, n) {
    (this._service = e),
      n instanceof It
        ? (this._location = n)
        : (this._location = It.makeFromUrl(n, e.host));
  }
  toString() {
    return "gs://" + this._location.bucket + "/" + this._location.path;
  }
  _newRef(e, n) {
    return new zi(e, n);
  }
  get root() {
    const e = new It(this._location.bucket, "");
    return this._newRef(this._service, e);
  }
  get bucket() {
    return this._location.bucket;
  }
  get fullPath() {
    return this._location.path;
  }
  get name() {
    return hx(this._location.path);
  }
  get storage() {
    return this._service;
  }
  get parent() {
    const e = ux(this._location.path);
    if (e === null) return null;
    const n = new It(this._location.bucket, e);
    return new zi(this._service, n);
  }
  _throwIfRoot(e) {
    if (this._location.path === "") throw X1(e);
  }
}
function $h(t, e) {
  const n = e == null ? void 0 : e[q1];
  return n == null ? null : It.makeFromBucketSpec(n, t);
}
class fx {
  constructor(e, n, s, r, i) {
    (this.app = e),
      (this._authProvider = n),
      (this._appCheckProvider = s),
      (this._url = r),
      (this._firebaseVersion = i),
      (this._bucket = null),
      (this._host = Pm),
      (this._protocol = "https"),
      (this._appId = null),
      (this._deleted = !1),
      (this._maxOperationRetryTime = H1),
      (this._maxUploadRetryTime = K1),
      (this._requests = new Set()),
      r != null
        ? (this._bucket = It.makeFromBucketSpec(r, this._host))
        : (this._bucket = $h(this._host, this.app.options));
  }
  get host() {
    return this._host;
  }
  set host(e) {
    (this._host = e),
      this._url != null
        ? (this._bucket = It.makeFromBucketSpec(this._url, e))
        : (this._bucket = $h(e, this.app.options));
  }
  get maxUploadRetryTime() {
    return this._maxUploadRetryTime;
  }
  set maxUploadRetryTime(e) {
    Fh("time", 0, Number.POSITIVE_INFINITY, e), (this._maxUploadRetryTime = e);
  }
  get maxOperationRetryTime() {
    return this._maxOperationRetryTime;
  }
  set maxOperationRetryTime(e) {
    Fh("time", 0, Number.POSITIVE_INFINITY, e),
      (this._maxOperationRetryTime = e);
  }
  async _getAuthToken() {
    if (this._overrideAuthToken) return this._overrideAuthToken;
    const e = this._authProvider.getImmediate({ optional: !0 });
    if (e) {
      const n = await e.getToken();
      if (n !== null) return n.accessToken;
    }
    return null;
  }
  async _getAppCheckToken() {
    const e = this._appCheckProvider.getImmediate({ optional: !0 });
    return e ? (await e.getToken()).token : null;
  }
  _delete() {
    return (
      this._deleted ||
        ((this._deleted = !0),
        this._requests.forEach((e) => e.cancel()),
        this._requests.clear()),
      Promise.resolve()
    );
  }
  _makeStorageReference(e) {
    return new zi(this, e);
  }
  _makeRequest(e, n, s, r, i = !0) {
    if (this._deleted) return new J1(Mm());
    {
      const o = lx(e, this._appId, s, r, n, this._firebaseVersion, i);
      return (
        this._requests.add(o),
        o.getPromise().then(
          () => this._requests.delete(o),
          () => this._requests.delete(o)
        ),
        o
      );
    }
  }
  async makeRequestWithTokens(e, n) {
    const [s, r] = await Promise.all([
      this._getAuthToken(),
      this._getAppCheckToken(),
    ]);
    return this._makeRequest(e, n, s, r).getPromise();
  }
}
const Uh = "@firebase/storage",
  Vh = "0.10.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ const dx = "storage";
function px(t, { instanceIdentifier: e }) {
  const n = t.getProvider("app").getImmediate(),
    s = t.getProvider("auth-internal"),
    r = t.getProvider("app-check-internal");
  return new fx(n, s, r, e, fd);
}
function mx() {
  gr(new Es(dx, px, "PUBLIC").setMultipleInstances(!0)),
    mn(Uh, Vh, ""),
    mn(Uh, Vh, "esm2017");
}
mx();
const gx = {
    apiKey: "AIzaSyA17uiXtWVf-QWeVa3I8vGFlQrF5OiNBpk",
    authDomain: "appointmate-8a6ae.firebaseapp.com",
    projectId: "appointmate-8a6ae",
    storageBucket: "appointmate-8a6ae.appspot.com",
    messagingSenderId: "783839979090",
    appId: "1:783839979090:web:80422f51acefde5673218b",
  },
  yx = dd(gx),
  es = C1(yx),
  vx = Kr(es, "users"),
  Bh = Kr(es, "profiles"),
  fa = {
    id: "not_logged_in",
    avatar: "/img/avatar_tree.png",
    username: "not_logged_in",
  },
  An = zf("user", {
    state: () => ({
      userId: localStorage.getItem("login-token")
        ? localStorage.getItem("login-token")
        : "",
      myUserProfile: localStorage.getItem("login-token")
        ? JSON.parse(localStorage.getItem("user-profile"))
        : fa,
      tempUserProfile: fa,
    }),
    getters: {
      isLoggedIn() {
        return this.userId.length > 0;
      },
    },
    actions: {
      async login(t, e) {
        const n = vi(vx, ai("email", "==", t), ai("password", "==", e));
        try {
          const s = await ua(n);
          if (s.size == 0) return console.log("unable to find user"), !1;
          s.forEach((r) => {
            this.userId = r.id;
          }),
            localStorage.setItem("login-token", this.userId),
            (this.myUserProfile = await this.loadProfileFromUserId(
              this.userId
            )),
            localStorage.setItem(
              "user-profile",
              JSON.stringify(this.myUserProfile)
            ),
            (this.loggedIn = !0);
        } catch (s) {
          console.log("user error: " + s);
        }
        return !0;
      },
      logout() {
        (this.userId = ""),
          (this.myUserProfile = fa),
          localStorage.removeItem("login-token"),
          localStorage.removeItem("user-profile");
      },
      async loadProfileFromUserId(t) {
        const e = vi(Bh, ai("user_id", "==", t)),
          n = await ua(e);
        if (n.size == 0) throw new Error("Unable to find profile");
        const s = [];
        return (
          n.forEach((r) => {
            s.push({
              id: r.id,
              avatar: r.data().avatar,
              username: r.data().username,
            });
          }),
          (this.tempUserProfile = s[0]),
          s[0]
        );
      },
      async loadProfileFromProfileId(t) {
        const e = cr(es, "profiles", t);
        return (await Nm(e)).data();
      },
      async loadProfileFromUsername(t) {
        const e = vi(Bh, ai("username", "==", t)),
          n = await ua(e);
        if (n.size == 0) throw new Error("Unable to find profile");
        const s = [];
        return (
          n.forEach((r) => {
            s.push({
              id: r.id,
              avatar: r.data().avatar,
              username: r.data().username,
            });
          }),
          (this.tempUserProfile = s[0]),
          s[0]
        );
      },
    },
  }),
  wx = { class: "top-0 z-10 bg-amber-400 py-4 shadow-md" },
  _x = {
    class: "container mx-auto -mb-px flex justify-between px-10 sm:px-12",
  },
  bx = { class: "flex gap-4 text-white" },
  Ex = {
    __name: "Topbar",
    setup(t) {
      const e = An(),
        n = co();
      function s() {
        e.logout(), n.push({ name: "login" });
      }
      return (r, i) => {
        const o = En("RouterLink");
        return (
          ie(),
          ge("header", wx, [
            _("div", _x, [
              Z(
                o,
                { to: "/home", class: "text-white" },
                { default: Wt(() => [kt("Appointmate")]), _: 1 }
              ),
              _("nav", bx, [
                Z(
                  o,
                  { to: "/home" },
                  { default: Wt(() => [kt("Home")]), _: 1 }
                ),
                Z(
                  o,
                  {
                    to: {
                      name: "profile",
                      params: { username: Gt(e).myUserProfile.username },
                    },
                  },
                  { default: Wt(() => [kt("Profile")]), _: 1 },
                  8,
                  ["to"]
                ),
                _(
                  "button",
                  { onClick: i[0] || (i[0] = (a) => s()) },
                  "Log out"
                ),
              ]),
            ]),
          ])
        );
      };
    },
  },
  xx = {
    class: "flex h-screen flex-col items-stretch bg-cover",
    style: { "background-image": "url('/img/login_bg.jpg')" },
  },
  Tx = {
    __name: "MainView",
    setup(t) {
      return (e, n) => {
        const s = En("RouterView");
        return (
          ie(),
          ge("div", xx, [Z(Ex), (ie(), xn(s, { key: e.$route.fullPath }))])
        );
      };
    },
  },
  Ix = {
    __name: "App",
    setup(t) {
      return (e, n) => (ie(), xn(Gt(rd)));
    },
  },
  Cx = { class: "group-active:text-white" },
  Sx = _(
    "span",
    {
      class:
        "material-symbols-outlined text-orange-600 group-active:text-white",
    },
    "arrow_circle_right",
    -1
  ),
  _i = {
    __name: "QuickLinkItem",
    props: { title: String, link: String },
    setup(t) {
      return (e, n) => {
        const s = En("RouterLink");
        return (
          ie(),
          xn(
            s,
            {
              to: t.link,
              class:
                "border-box group flex items-center justify-between rounded-xl bg-white p-4 shadow-md shadow-zinc-400 transition-colors hover:text-orange-600 active:bg-orange-500",
            },
            { default: Wt(() => [_("span", Cx, pt(t.title), 1), Sx]), _: 1 },
            8,
            ["to"]
          )
        );
      };
    },
  },
  Ax = {
    class: "box-border flex flex-col justify-center overflow-hidden py-2 px-4",
  },
  kx = {
    class:
      "truncate text-ellipsis whitespace-nowrap text-2xl group-hover:text-orange-600 group-active:text-amber-400",
  },
  Rx = {
    class:
      "overflow-hidden text-ellipsis whitespace-nowrap text-xs text-gray-600 group-hover:text-orange-500 group-active:text-amber-400",
  },
  Dx = {
    class:
      "h-8 flex-auto overflow-hidden text-ellipsis text-sm leading-4 group-hover:text-orange-600 group-active:text-amber-400 sm:leading-5",
  },
  Nx = _(
    "p",
    {
      class:
        "mt-1 overflow-hidden text-ellipsis whitespace-nowrap text-xs group-hover:text-orange-500 group-active:text-amber-400",
    },
    " Booked for: 12 PM ",
    -1
  ),
  Ox = ["src"],
  Px = {
    __name: "AppointmentCardItem",
    props: { appointment: Object },
    setup(t) {
      const e = t,
        n = _e("[][][][][][][][][]"),
        s = An();
      return (
        kr(async () => {
          n.value = (
            await s.loadProfileFromProfileId(e.appointment.host_id)
          ).username;
        }),
        (r, i) => {
          const o = En("RouterLink");
          return (
            ie(),
            xn(
              o,
              {
                class:
                  "group flex flex-col-reverse justify-between rounded-xl bg-white shadow-md shadow-zinc-400 transition-colors md:flex-row",
                to: {
                  name: "appointmentdetails",
                  params: { id: t.appointment.id },
                },
              },
              {
                default: Wt(() => [
                  _("div", Ax, [
                    _("h2", kx, pt(t.appointment.title), 1),
                    _("p", Rx, pt("@" + n.value), 1),
                    _("p", Dx, pt(t.appointment.description), 1),
                    Nx,
                  ]),
                  _(
                    "img",
                    {
                      src: t.appointment.image_path,
                      alt: "",
                      class:
                        "h-32 shrink-0 rounded-t-xl object-cover md:w-40 md:rounded-r-xl md:rounded-tl-none",
                    },
                    null,
                    8,
                    Ox
                  ),
                ]),
                _: 1,
              },
              8,
              ["to"]
            )
          );
        }
      );
    },
  },
  Mx = { class: "flex flex-col items-stretch gap-4 px-1 pb-4" },
  uc = {
    __name: "AppointmentCardList",
    props: {
      filter: { type: String, default: "Appointment Title" },
      limit: { default: 100 },
    },
    setup(t) {
      const e = _e([]),
        n = Kr(es, "appointments"),
        s = vi(n, L1("host_id"));
      return (
        kr(async () => {
          j1(s, (r) => {
            const i = [];
            r.forEach((o) => {
              const a = {
                id: o.id,
                title: o.data().title,
                host_id: o.data().host_id,
                description: o.data().description,
                datetime: o.data().datetime,
                image_path: o.data().image_path,
              };
              i.push(a);
            }),
              (e.value = i);
          });
        }),
        (r, i) => (
          ie(),
          ge("div", Mx, [
            (ie(!0),
            ge(
              tt,
              null,
              wa(
                e.value,
                (o, a) => (
                  ie(),
                  ge(
                    tt,
                    { key: o.id },
                    [
                      a < t.limit
                        ? (ie(),
                          xn(Px, { key: 0, appointment: o }, null, 8, [
                            "appointment",
                          ]))
                        : Tt("", !0),
                    ],
                    64
                  )
                )
              ),
              128
            )),
          ])
        )
      );
    },
  },
  Lx = {
    class:
      "container mx-auto grid h-full grid-cols-1 gap-10 overflow-hidden overflow-y-auto bg-zinc-100 px-10 py-10 sm:grid-cols-12",
  },
  Fx = { class: "flex flex-col gap-2 sm:col-start-1 sm:col-end-8" },
  $x = _("header", { class: "text-2xl" }, "Upcoming", -1),
  Ux = { class: "text-right font-medium text-orange-600 underline" },
  Vx = { class: "shrink-0 sm:col-start-8 sm:col-end-13" },
  Bx = { class: "flex flex-col gap-2" },
  jx = { class: "text-2xl" },
  qx = {
    class:
      "mt-8 flex flex-col gap-2 rounded-2xl bg-white p-4 shadow-md shadow-zinc-400",
  },
  Hx = _("h1", { class: "text-xl" }, "Add appointment", -1),
  Kx = Ms(
    '<p class="mt-1 text-center">--or--</p><form action="#" class="flex flex-col"><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">VIEW APPOINTMENT</label><input type="text" name="appointment_id" class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600" placeholder="Enter appointment code or URL" id=""></article><button class="mt-2 rounded-lg bg-amber-400 p-2 text-sm font-medium text-white transition-colors hover:bg-amber-500 active:bg-orange-600" type="submit"> View </button></form>',
    2
  ),
  zx = {
    __name: "HomeView",
    setup(t) {
      const e = An();
      return (n, s) => {
        const r = En("RouterLink");
        return (
          ie(),
          ge("main", Lx, [
            _("main", Fx, [
              $x,
              Z(uc, { limit: "3" }),
              _("footer", Ux, [
                Z(
                  r,
                  { to: "profile", href: "#" },
                  { default: Wt(() => [kt("See all...")]), _: 1 }
                ),
              ]),
            ]),
            _("aside", Vx, [
              _("section", Bx, [
                _(
                  "header",
                  jx,
                  " Hello " + pt(Gt(e).myUserProfile.username) + ", ",
                  1
                ),
                Z(_i, { title: "See upcoming appointments", link: "profile" }),
                Z(_i, { title: "See available appointments", link: "profile" }),
              ]),
              _("section", qx, [
                Hx,
                Z(_i, {
                  title: "Host an appointment",
                  link: "appointmentform",
                }),
                Kx,
              ]),
            ]),
          ])
        );
      };
    },
  },
  Gx = {
    class:
      "justify-stretch justify-stretch container mx-auto box-border flex h-full flex-col-reverse gap-10 overflow-hidden overflow-y-auto bg-zinc-100 px-10 pb-10 sm:grid sm:grid-cols-12 sm:pt-10",
  },
  Wx = {
    class: "rounded-t-xl pb-1 sm:col-start-1 sm:col-end-8 sm:overflow-y-auto",
  },
  Qx = {
    class:
      "sticky top-0 mb-2 border-b border-transparent bg-white text-center text-sm font-medium text-stone-700 shadow-md shadow-zinc-400",
  },
  Yx = { class: "flex" },
  Xx = { class: "-mb-px w-full" },
  Jx = { class: "-mb-px w-full" },
  Zx = {
    class:
      "flex shrink-0 flex-col gap-2 pt-10 sm:col-start-8 sm:col-end-13 sm:h-[inherit] sm:pt-0",
  },
  eT = { class: "sticky top-0" },
  tT = {
    class:
      "mb-4 flex flex-col items-center gap-2 rounded-xl bg-white py-4 text-2xl shadow-md shadow-zinc-400",
  },
  nT = ["src"],
  sT = { class: "overflow-hidden text-ellipsis whitespace-nowrap text-lg" },
  jh = {
    __name: "ProfileView",
    props: {
      username: {
        type: String,
        default: localStorage.getItem("user-profile")
          ? JSON.parse(localStorage.getItem("user-profile")).username
          : "",
      },
      activeTab: { type: String, default: "hosted" },
    },
    setup(t) {
      const e = t,
        n = _e(""),
        s = _e(e.activeTab),
        r = _e(JSON.parse(localStorage.getItem("user-profile"))),
        i = _e(!1);
      kr(async () => {
        n.value = e.username;
        const a = An();
        (r.value = await a.loadProfileFromUsername(n.value)),
          (i.value = e.username == a.myUserProfile.username);
      });
      function o(a) {
        s.value = a;
      }
      return (a, c) => (
        ie(),
        ge("main", Gx, [
          _("main", Wx, [
            _("nav", Qx, [
              _("ul", Yx, [
                _("li", Xx, [
                  _(
                    "a",
                    {
                      href: "#",
                      onClick: c[0] || (c[0] = (l) => o("hosted")),
                      class: ln([
                        {
                          "border-orange-600 text-orange-600":
                            s.value == "hosted",
                        },
                        "inline-block w-full rounded-t-lg border-b-2 border-transparent p-4 hover:border-amber-400 hover:text-amber-400",
                      ]),
                    },
                    " Hosted Appointments ",
                    2
                  ),
                ]),
                _("li", Jx, [
                  _(
                    "a",
                    {
                      href: "#",
                      onClick: c[1] || (c[1] = (l) => o("booked")),
                      class: ln([
                        {
                          "border-orange-600 text-orange-600":
                            s.value == "booked",
                        },
                        "inline-block w-full rounded-t-lg border-b-2 border-transparent p-4 hover:border-amber-400 hover:text-amber-400",
                      ]),
                    },
                    " Booked Appointments ",
                    2
                  ),
                ]),
              ]),
            ]),
            Z(
              uc,
              { filter: "hosted", class: ln({ hidden: s.value != "hosted" }) },
              null,
              8,
              ["class"]
            ),
            Z(
              uc,
              { filter: "booked", class: ln({ hidden: s.value != "booked" }) },
              null,
              8,
              ["class"]
            ),
          ]),
          _("aside", Zx, [
            _("section", eT, [
              _("header", tT, [
                _(
                  "img",
                  {
                    src: r.value.avatar,
                    class:
                      "h-32 w-32 rounded-full border-4 border-gray-300 bg-indigo-800",
                    alt: "",
                  },
                  null,
                  8,
                  nT
                ),
                _("h3", sT, pt("@" + n.value), 1),
              ]),
              i.value
                ? (ie(),
                  xn(_i, {
                    key: 0,
                    title: "Host an appointment",
                    link: "/appointmentform",
                  }))
                : Tt("", !0),
            ]),
          ]),
        ])
      );
    },
  },
  rT = Ms(
    '<div class="fixed flex h-screen w-screen items-center bg-cover" style="background-image:url(&#39;/img/login_bg.jpg&#39;);"><div class="z-20 hidden w-full bg-[#4f4f4f] opacity-60 mix-blend-multiply lg:block"><div class="container mx-auto grid grid-cols-12 gap-10 px-10 py-8"><div class="lg:col-start-2 lg:col-end-6"><h1 class="mb-8 text-4xl text-transparent"> All appointments, <br>in one place </h1><p class="text-transparent"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis ut mollitia in, inventore blanditiis. </p></div></div></div></div>',
    1
  ),
  iT = { class: "z-10 flex h-screen w-full items-center" },
  oT = {
    class:
      "container z-30 mx-auto grid grid-cols-1 items-center gap-10 overflow-hidden px-10 sm:grid-cols-12",
  },
  aT = _(
    "div",
    { class: "hidden lg:col-start-2 lg:col-end-6 lg:block" },
    [
      _("h1", { class: "mb-8 text-4xl text-white" }, [
        kt(" All appointments, "),
        _("br"),
        kt("in one place "),
      ]),
      _(
        "p",
        { class: "text-white opacity-100" },
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus reiciendis ut mollitia in, inventore blanditiis. "
      ),
    ],
    -1
  ),
  cT = {
    class:
      "rounded-3xl bg-white p-10 pt-8 shadow-md sm:col-start-3 sm:col-end-11 lg:col-start-8 lg:col-end-12",
  },
  lT = {
    __name: "LoginView",
    setup(t) {
      return (
        _e("hello"),
        (e, n) => {
          const s = En("RouterView");
          return (
            ie(),
            ge(
              tt,
              null,
              [
                rT,
                _("div", iT, [_("main", oT, [aT, _("section", cT, [Z(s)])])]),
              ],
              64
            )
          );
        }
      );
    },
  },
  uT = ["type"],
  Lt = {
    __name: "ButtonPrimary",
    props: {
      text: { type: String, default: "Primary" },
      clickAction: Function,
      buttonType: { type: String, default: "button" },
      variant: { type: String, default: "Primary" },
    },
    setup(t) {
      const e = {
        Primary: "bg-amber-400 hover:bg-amber-500 active:bg-orange-600",
        Danger: "bg-red-500 hover:bg-orange-500 active:bg-red-600",
      };
      return (n, s) => (
        ie(),
        ge(
          "button",
          {
            class: ln([
              "mt-2 rounded-lg border-2 border-transparent p-2 px-6 text-sm font-medium text-white transition-colors",
              e[t.variant],
            ]),
            type: t.buttonType,
            onClick:
              s[0] || (s[0] = (...r) => t.clickAction && t.clickAction(...r)),
          },
          pt(t.text),
          11,
          uT
        )
      );
    },
  },
  hT = ["type"],
  Ml = {
    __name: "ButtonAlternative",
    props: {
      text: { type: String, default: "Alternative" },
      clickAction: Function,
      buttonType: { type: String, default: "button" },
    },
    setup(t) {
      return (e, n) => (
        ie(),
        ge(
          "button",
          {
            class:
              "mt-2 rounded-lg border-2 border-zinc-300 p-2 px-6 text-sm font-medium text-zinc-600 transition-colors hover:border-orange-600 hover:text-orange-600 active:border-orange-600 active:bg-orange-600 active:text-white",
            type: t.buttonType,
            onClick:
              n[0] || (n[0] = (...s) => t.clickAction && t.clickAction(...s)),
          },
          pt(t.text),
          9,
          hT
        )
      );
    },
  },
  da = Kr(es, "appointments"),
  fT = Kr(es, "schedules"),
  Lm = zf("appointments", {
    state: () => ({
      appointments: [
        {
          id: 0,
          title: "Appointment title",
          description: "Appointment description",
          image: "/img/sample.jpg",
          host_id: "abcde1ff",
        },
      ],
      nextId: 0,
      tempAppointment: {
        id: 0,
        title: "Appointment title",
        description:
          "No appointment loaded. Please wait a moment, or refresh the page instead",
        image_path: "/img/sample.jpg",
        host_id: "asd",
      },
      openedAppointmentid: "",
    }),
    getters: {
      hostedAppointments(t, e) {
        return t.appointments.filter((n) => n.host_id == e);
      },
    },
    actions: {
      async addAppointment(t, e) {
        console.log("appointment ready. sending...");
        const n = await Mh(da, t);
        (this.openedAppointmentid = n.id),
          console.log(e),
          console.log(
            "created appointment with id: " + this.openedAppointmentid
          );
        const s = dT(e, n.id);
        for (const r in s) await this.addSchedule(r);
        return !0;
      },
      async getAppointment(t) {
        const e = cr(es, "appointments", t);
        return (await Nm(e)).data();
      },
      async updateAppointment(t, e) {
        await V1(cr(da, t), e);
      },
      async deleteAppointment(t) {
        return await B1(cr(da, t)), !0;
      },
      async addSchedule(t) {
        await Mh(fT, t);
      },
    },
  });
function dT(t, e) {
  const n = [];
  for (const s in t)
    if (s.date != "")
      for (const r in s.times)
        r.starttime != "" &&
          r.endtime != "" &&
          n.push({
            appointee_id: "",
            appointment_id: e,
            timestart: qh(r.starttime),
            timeend: qh(r.endtime),
          });
  return n;
}
function qh(t, e) {
  const [n, s, r] = t.split("-"),
    [i, o] = e.split(":");
  return new Date(+n, s - 1, +r, i, o);
}
const pT = { class: "container mx-auto flex h-full flex-col overflow-y-auto" },
  mT = _(
    "section",
    {
      class:
        "flex h-40 w-full shrink-0 items-end justify-end bg-cover bg-center px-12 py-6 sm:h-60 md:h-80",
      style: { "background-image": "url('/img/sample.jpg')" },
    },
    [
      _(
        "label",
        {
          for: "input-image",
          id: "label-edit-image",
          class:
            "material-symbols-outlined cursor-pointer rounded-xl bg-white p-2 text-4xl text-orange-600 shadow-md shadow-zinc-400 hover:text-amber-500",
        },
        "add_photo_alternate"
      ),
      _("input", {
        type: "file",
        name: "image",
        id: "input-image",
        hidden: "",
        accept: "image/*",
      }),
    ],
    -1
  ),
  gT = ["onSubmit"],
  yT = { class: "flex flex-col gap-2 bg-white lg:col-start-1 lg:col-end-8" },
  vT = _("header", { class: "text-2xl" }, "Details", -1),
  wT = { class: "flex flex-col gap-4" },
  _T = { class: "flex flex-col" },
  bT = _(
    "label",
    { for: "appointment_name", class: "text-xs font-medium text-orange-600" },
    "TITLE",
    -1
  ),
  ET = { class: "flex flex-col" },
  xT = _(
    "label",
    {
      for: "appointment_description",
      class: "text-xs font-medium text-orange-600",
    },
    "DESCRIPTION",
    -1
  ),
  TT = { class: "shrink-0 bg-white lg:col-start-8 lg:col-end-13" },
  IT = { class: "flex flex-col gap-2" },
  CT = _("header", { class: "text-2xl" }, "Set available time schedules", -1),
  ST = { class: "flex flex-col justify-items-stretch gap-2" },
  AT = { class: "flex items-center justify-between gap-2" },
  kT = ["onUpdate:modelValue"],
  RT = { class: "flex gap-2" },
  DT = ["onClick", "disabled"],
  NT = ["onClick"],
  OT = ["onClick", "disabled"],
  PT = { class: "flex items-center justify-end gap-2" },
  MT = { class: "flex basis-full flex-wrap items-center justify-end gap-2" },
  LT = ["disabled", "onUpdate:modelValue"],
  FT = ["disabled", "onUpdate:modelValue"],
  $T = { class: "flex gap-2" },
  UT = ["onClick"],
  VT = ["disabled"],
  BT = ["onClick", "disabled"],
  jT = { class: "mt-4 flex flex-row-reverse gap-4" },
  qT = {
    __name: "AppointmentFormView",
    setup(t) {
      const e = Lm(),
        n = An(),
        s = co(),
        r = _e(""),
        i = _e(""),
        o = _e("/img/sample.jpg"),
        a = _e([
          {
            date: "2023-02-03",
            times: [
              { starttime: "13:00", endtime: "14:00" },
              { starttime: "", endtime: "" },
            ],
          },
          { date: "", times: [] },
        ]);
      async function c() {
        const g = {
          title: r.value,
          description: i.value,
          image_path: o.value,
          host_id: n.myUserProfile.id,
        };
        (await e.addAppointment(g, a.value)) &&
          s.push({
            name: "appointmentdetails",
            params: { id: e.openedAppointmentid },
          });
      }
      function l(g) {
        return g != "";
      }
      function u(g) {
        g.times.push({ starttime: "", endtime: "" }),
          a.value.push({ date: "", times: [] });
      }
      function h(g) {
        g.push({ starttime: "", endtime: "" });
      }
      function f(g, v) {
        g.splice(v, 1);
      }
      function m(g) {
        a.value.splice(a.value.length - 1, 0, g);
      }
      return (g, v) => (
        ie(),
        ge("main", pT, [
          mT,
          _(
            "form",
            {
              onSubmit: Rc(c, ["stop", "prevent"]),
              class:
                "justify-stretch grid basis-full grid-cols-1 gap-10 bg-white p-10 lg:grid-cols-12",
            },
            [
              _("main", yT, [
                vT,
                _("main", wT, [
                  _("article", _T, [
                    bT,
                    Mn(
                      _(
                        "input",
                        {
                          type: "text",
                          name: "appointment_name",
                          class:
                            "border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600",
                          placeholder: "Enter title",
                          "onUpdate:modelValue":
                            v[0] || (v[0] = (b) => (r.value = b)),
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[Fn, r.value]]
                    ),
                  ]),
                  _("article", ET, [
                    xT,
                    Mn(
                      _(
                        "textarea",
                        {
                          class:
                            "h-min border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600",
                          name: "appointment_description",
                          id: "",
                          placeholder: "Enter description",
                          "onUpdate:modelValue":
                            v[1] || (v[1] = (b) => (i.value = b)),
                          required: "",
                        },
                        null,
                        512
                      ),
                      [[Fn, i.value]]
                    ),
                  ]),
                ]),
              ]),
              _("aside", TT, [
                _("section", IT, [
                  CT,
                  (ie(!0),
                  ge(
                    tt,
                    null,
                    wa(
                      a.value,
                      (b, S) => (
                        ie(),
                        ge("article", ST, [
                          _("article", AT, [
                            Mn(
                              _(
                                "input",
                                {
                                  type: "date",
                                  "onUpdate:modelValue": (R) => (b.date = R),
                                  class:
                                    "shadow-m basis-full rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600",
                                },
                                null,
                                8,
                                kT
                              ),
                              [[Fn, b.date]]
                            ),
                            _("div", RT, [
                              _(
                                "button",
                                {
                                  type: "button",
                                  onClick: (R) => m(b),
                                  disabled:
                                    !l(b.date) ||
                                    b.times.length == 0 ||
                                    !l(b.times[0].endtime),
                                  class:
                                    "material-symbols-outlined text-orange-600 disabled:text-white",
                                },
                                " content_copy ",
                                8,
                                DT
                              ),
                              S != a.value.length - 1
                                ? (ie(),
                                  ge(
                                    "button",
                                    {
                                      key: 0,
                                      type: "button",
                                      onClick: (R) => f(a.value, S),
                                      class:
                                        "material-symbols-outlined text-orange-600",
                                    },
                                    " cancel ",
                                    8,
                                    NT
                                  ))
                                : Tt("", !0),
                              S == a.value.length - 1
                                ? (ie(),
                                  ge(
                                    "button",
                                    {
                                      key: 1,
                                      type: "button",
                                      onClick: (R) => u(b),
                                      disabled: !l(b.date),
                                      class:
                                        "material-symbols-outlined text-orange-600 disabled:text-zinc-400",
                                    },
                                    " add_circle ",
                                    8,
                                    OT
                                  ))
                                : Tt("", !0),
                            ]),
                          ]),
                          (ie(!0),
                          ge(
                            tt,
                            null,
                            wa(
                              b.times,
                              (R, O) => (
                                ie(),
                                ge("article", PT, [
                                  _("div", MT, [
                                    Mn(
                                      _(
                                        "input",
                                        {
                                          disabled: !l(b.date),
                                          type: "time",
                                          "onUpdate:modelValue": (U) =>
                                            (R.starttime = U),
                                          class:
                                            "box-border basis-5/12 rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600 disabled:text-zinc-400",
                                        },
                                        null,
                                        8,
                                        LT
                                      ),
                                      [[Fn, R.starttime]]
                                    ),
                                    Mn(
                                      _(
                                        "input",
                                        {
                                          disabled: !l(R.starttime),
                                          type: "time",
                                          "onUpdate:modelValue": (U) =>
                                            (R.endtime = U),
                                          class:
                                            "box-border basis-5/12 rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600 disabled:text-zinc-400",
                                        },
                                        null,
                                        8,
                                        FT
                                      ),
                                      [[Fn, R.endtime]]
                                    ),
                                  ]),
                                  _("div", $T, [
                                    O != b.times.length - 1
                                      ? (ie(),
                                        ge(
                                          "button",
                                          {
                                            key: 0,
                                            onClick: (U) => f(b.times, O),
                                            type: "button",
                                            class:
                                              "material-symbols-outlined text-orange-600 disabled:text-zinc-400",
                                          },
                                          " cancel ",
                                          8,
                                          UT
                                        ))
                                      : Tt("", !0),
                                    _(
                                      "span",
                                      {
                                        disabled: !l(R.endtime),
                                        class:
                                          "material-symbols-outlined text-white",
                                      },
                                      " content_copy ",
                                      8,
                                      VT
                                    ),
                                    O == b.times.length - 1
                                      ? (ie(),
                                        ge(
                                          "button",
                                          {
                                            key: 1,
                                            onClick: (U) => h(b.times),
                                            type: "button",
                                            disabled: !l(R.endtime),
                                            class:
                                              "material-symbols-outlined text-orange-600 disabled:text-zinc-400",
                                          },
                                          " add_circle ",
                                          8,
                                          BT
                                        ))
                                      : Tt("", !0),
                                  ]),
                                ])
                              )
                            ),
                            256
                          )),
                        ])
                      )
                    ),
                    256
                  )),
                  _("footer", jT, [
                    Z(Ml, { text: "Discard/Delete" }),
                    Z(Lt, { "button-type": "submit", text: "Create/Update" }),
                  ]),
                ]),
              ]),
            ],
            40,
            gT
          ),
        ])
      );
    },
  },
  HT = ["onClick"],
  KT = {
    class:
      "relative flex max-w-xl flex-col gap-2 rounded-2xl bg-white p-4 shadow-md",
  },
  zT = { class: "flex items-start justify-between rounded-t p-2" },
  GT = { class: "text-xl text-zinc-700" },
  WT = _(
    "svg",
    {
      "aria-hidden": "true",
      class: "h-5 w-5",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
    },
    [
      _("path", {
        "fill-rule": "evenodd",
        d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
        "clip-rule": "evenodd",
      }),
    ],
    -1
  ),
  QT = _("span", { class: "sr-only" }, "Close modal", -1),
  YT = [WT, QT],
  XT = { class: "p-2" },
  JT = { class: "text-base leading-relaxed" },
  ZT = { class: "flex flex-row-reverse flex-wrap-reverse gap-x-2" },
  eI = {
    __name: "ConfirmationModal",
    props: {
      show: { default: !1 },
      title: { type: String, default: "Pop-up" },
      message: { type: String, default: "No Message" },
    },
    emits: ["confirm", "cancel"],
    setup(t, { emit: e }) {
      function n() {
        e("cancel");
      }
      function s() {
        e("confirm");
      }
      return (r, i) =>
        t.show
          ? (ie(),
            ge(
              "div",
              {
                key: 0,
                onClick: Rc(n, ["self"]),
                class:
                  "fixed inset-0 z-50 flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-50 px-8",
              },
              [
                _("div", KT, [
                  _("header", zT, [
                    _("h3", GT, pt(t.title), 1),
                    _(
                      "button",
                      {
                        type: "button",
                        onClick: n,
                        class:
                          "ml-auto inline-flex items-center rounded-lg p-1.5 text-sm text-zinc-400 hover:bg-zinc-200 hover:text-orange-600",
                        "data-modal-hide": "defaultModal",
                      },
                      YT
                    ),
                  ]),
                  _("div", XT, [_("p", JT, pt(t.message), 1)]),
                  _("footer", ZT, [
                    Z(Ml, { text: "Cancel", "click-action": n }),
                    Z(Lt, {
                      text: "Delete",
                      "click-action": s,
                      variant: "Danger",
                    }),
                  ]),
                ]),
              ],
              8,
              HT
            ))
          : Tt("", !0);
    },
  },
  tI = { class: "container mx-auto flex h-full flex-col overflow-y-auto" },
  nI = {
    class:
      "justify-stretch grid basis-full grid-cols-1 gap-10 bg-white px-10 py-10 sm:grid-cols-12",
  },
  sI = {
    class: "flex grow-0 flex-col gap-2 bg-white sm:col-start-1 sm:col-end-8",
  },
  rI = { class: "flex justify-between" },
  iI = { class: "text-3xl" },
  oI = _("span", { class: "material-symbols-outlined" }, "link", -1),
  aI = { class: "flex justify-between" },
  cI = { class: "flex items-center" },
  lI = _("span", null, "27 available", -1),
  uI = { class: "whitespace-pre-wrap" },
  hI = { class: "shrink-0 sm:col-start-8 sm:col-end-13" },
  fI = { class: "flex flex-col gap-4" },
  dI = {
    key: 0,
    class: "flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400",
  },
  pI = Ms(
    '<header class="text-2xl">Available time schedules</header><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">DATE</label><select id="standard-select" class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"><option value="Option 1">Select Date</option><option value="Option 2">Oct 12, 2022 (Tue)</option><option value="Option 3">Oct 13, 2022 (Wed)</option></select></article><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">TIME</label><select id="standard-select" class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"><option value="Option 1">Select Time Period</option><option value="Option 2">9:00 AM - 10:00 AM</option><option value="Option 3">10:00 AM - 11:00 AM</option><option value="Option 3">11:00 AM - 12:00 PM</option></select></article>',
    3
  ),
  mI = { class: "flex flex-row-reverse gap-4" },
  gI = {
    key: 1,
    class: "flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400",
  },
  yI = Ms(
    '<header class="text-2xl">Booked appointment</header><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">DATE</label><select disabled id="standard-select" class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"><option value="Option 1">Select Date</option><option value="Option 2" selected>Oct 12, 2022 (Tue)</option><option value="Option 3">Oct 13, 2022 (Wed)</option></select></article><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">TIME</label><select disabled id="standard-select" class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"><option value="Option 1">Select Time Period</option><option value="Option 2" selected>9:00 AM - 10:00 AM</option><option value="Option 3">10:00 AM - 11:00 AM</option><option value="Option 3">11:00 AM - 12:00 PM</option></select></article>',
    3
  ),
  vI = { class: "flex flex-row-reverse gap-4" },
  wI = {
    key: 2,
    class: "flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400",
  },
  _I = Ms(
    '<header class="text-2xl">Booked appointment</header><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">DATE</label><select id="standard-select" class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"><option value="Option 1">Select Date</option><option value="Option 2" selected>Oct 12, 2022 (Tue)</option><option value="Option 3">Oct 13, 2022 (Wed)</option></select></article><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">TIME</label><select id="standard-select" class="rounded-xl bg-white p-2.5 shadow-md shadow-stone-400 outline-orange-600 focus:border-orange-600"><option value="Option 1">Select Time Period</option><option value="Option 2" selected>9:00 AM - 10:00 AM</option><option value="Option 3">10:00 AM - 11:00 AM</option><option value="Option 3">11:00 AM - 12:00 PM</option></select></article>',
    3
  ),
  bI = { class: "flex flex-row-reverse flex-wrap-reverse gap-x-4" },
  EI = {
    key: 3,
    class: "flex flex-col gap-4 rounded-2xl p-4 shadow-md shadow-zinc-400",
  },
  xI = _("header", { class: "text-2xl" }, "Booked appointments", -1),
  TI = _(
    "article",
    { class: "flex flex-col" },
    " 0 out of 27 schedules booked. ",
    -1
  ),
  II = { class: "flex flex-row-reverse gap-4" },
  CI = {
    __name: "AppointmentDetailsView",
    props: { id: { type: String, default: "asd" } },
    setup(t) {
      const e = t,
        n = co(),
        s = An(),
        r = Lm(),
        i = _e(!1),
        o = _e(""),
        a = _e(r.tempAppointment),
        c = _e(s.tempUserProfile),
        l = _e(!1);
      _e(!1);
      const u = _e(!1),
        h = _e(!1);
      _e(""),
        kr(async () => {
          (o.value = e.id),
            (a.value = await r.getAppointment(e.id)),
            console.log(a.value),
            (c.value = await s.loadProfileFromProfileId(a.value.host_id)),
            a.value.host_id == s.myUserProfile.id && (l.value = !0);
        });
      function f(g) {
        i.value = g;
      }
      async function m() {
        f(!1),
          (await r.deleteAppointment(o.value)) &&
            n.push({
              name: "profile",
              params: { username: s.myUserProfile.username },
            });
      }
      return (g, v) => {
        const b = En("RouterLink");
        return (
          ie(),
          ge(
            tt,
            null,
            [
              _("main", tI, [
                _(
                  "section",
                  {
                    class:
                      "h-40 w-full shrink-0 bg-cover bg-center sm:h-60 md:h-80",
                    style: Gi({
                      "background-image": "url(" + a.value.image_path + ")",
                    }),
                  },
                  null,
                  4
                ),
                _("main", nI, [
                  _("main", sI, [
                    _("section", rI, [_("h1", iI, pt(a.value.title), 1), oI]),
                    _("section", aI, [
                      Z(
                        b,
                        {
                          to: {
                            name: "profile",
                            params: { username: c.value.username },
                          },
                          href: "#",
                          class: "text-gray-600",
                        },
                        {
                          default: Wt(() => [
                            kt(pt("@" + c.value.username), 1),
                          ]),
                          _: 1,
                        },
                        8,
                        ["to"]
                      ),
                      _("section", cI, [
                        lI,
                        _(
                          "span",
                          {
                            class:
                              "material-symbols-outlined cursor-pointer text-amber-400",
                            onClick: v[0] || (v[0] = (S) => m()),
                          },
                          "bookmark"
                        ),
                      ]),
                    ]),
                    _("p", uI, pt(a.value.description), 1),
                  ]),
                  _("aside", hI, [
                    _("section", fI, [
                      l.value
                        ? Tt("", !0)
                        : (ie(),
                          ge("section", dI, [
                            pI,
                            _("footer", mI, [
                              Z(Lt, { text: "Book Appointment" }),
                            ]),
                          ])),
                      h.value && !u.value
                        ? (ie(),
                          ge("section", gI, [
                            yI,
                            _("footer", vI, [
                              Z(Lt, { text: "Edit Booked Appointment" }),
                            ]),
                          ]))
                        : Tt("", !0),
                      h.value && u.value
                        ? (ie(),
                          ge("section", wI, [
                            _I,
                            _("footer", bI, [
                              Z(Ml, { text: "Cancel" }),
                              Z(Lt, {
                                text: "Delete",
                                "click-action": f,
                                variant: "Danger",
                              }),
                              Z(Lt, { text: "Reschedule" }),
                            ]),
                          ]))
                        : Tt("", !0),
                      l.value
                        ? (ie(),
                          ge("section", EI, [
                            xI,
                            TI,
                            _("footer", II, [
                              Z(Lt, { text: "Edit appointment" }),
                            ]),
                          ]))
                        : Tt("", !0),
                      Z(Lt, {
                        text: "TempDelete",
                        "click-action": f,
                        variant: "Danger",
                      }),
                    ]),
                  ]),
                ]),
              ]),
              (ie(),
              xn(Ty, { to: "body" }, [
                Z(
                  eI,
                  {
                    show: i.value,
                    onCancel: v[1] || (v[1] = (S) => f(!1)),
                    onConfirm: v[2] || (v[2] = (S) => m()),
                    title: "Delete Appointment",
                    message:
                      "Are you sure you want to delete? This cannot be undone.",
                  },
                  null,
                  8,
                  ["show"]
                ),
              ])),
            ],
            64
          )
        );
      };
    },
  },
  SI = { class: "flex flex-col gap-6" },
  AI = { class: "flex flex-col gap-2" },
  kI = _("h1", { class: "text-4xl" }, "Log in", -1),
  RI = ["onSubmit"],
  DI = { class: "flex flex-col" },
  NI = _(
    "label",
    { for: "email_login", class: "text-xs font-medium text-orange-600" },
    "EMAIL",
    -1
  ),
  OI = { class: "flex flex-col" },
  PI = _(
    "label",
    { for: "password-login", class: "text-xs font-medium text-orange-600" },
    " PASSWORD ",
    -1
  ),
  MI = _(
    "p",
    null,
    [
      kt(" Forgot password? "),
      _("a", { href: "#", class: "underline" }, "Create an account"),
    ],
    -1
  ),
  LI = { class: "flex" },
  FI = {
    __name: "LoginMiniView",
    setup(t) {
      const e = An(),
        n = co(),
        s = _e(""),
        r = _e("");
      async function i() {
        (await e.login(s.value, r.value)) && n.push({ name: "home" });
      }
      return (o, a) => {
        const c = En("RouterLink");
        return (
          ie(),
          ge("div", SI, [
            _("section", AI, [
              kI,
              _("p", null, [
                kt(" New here? "),
                Z(
                  c,
                  { to: "/register", class: "underline" },
                  { default: Wt(() => [kt("Create an account")]), _: 1 }
                ),
              ]),
            ]),
            _(
              "form",
              {
                class: "flex flex-col gap-3",
                onSubmit: Rc(i, ["stop", "prevent"]),
              },
              [
                _("article", DI, [
                  NI,
                  Mn(
                    _(
                      "input",
                      {
                        type: "email",
                        name: "email",
                        class:
                          "border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600",
                        placeholder: "Enter email",
                        id: "email-login",
                        "onUpdate:modelValue":
                          a[0] || (a[0] = (l) => (s.value = l)),
                      },
                      null,
                      512
                    ),
                    [[Fn, s.value]]
                  ),
                ]),
                _("article", OI, [
                  PI,
                  Mn(
                    _(
                      "input",
                      {
                        type: "password",
                        name: "password",
                        "onUpdate:modelValue":
                          a[1] || (a[1] = (l) => (r.value = l)),
                        class:
                          "border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600",
                        placeholder: "Enter password",
                        id: "password-login",
                      },
                      null,
                      512
                    ),
                    [[Fn, r.value]]
                  ),
                ]),
                MI,
                _("article", LI, [
                  Z(Lt, { text: "Log in", "button-type": "submit" }),
                ]),
              ],
              40,
              RI
            ),
          ])
        );
      };
    },
  },
  $I = { class: "flex flex-col gap-6" },
  UI = _(
    "section",
    { class: "flex flex-col gap-2" },
    [_("h1", { class: "text-4xl" }, "Register")],
    -1
  ),
  VI = { action: "#", class: "flex flex-col gap-3" },
  BI = Ms(
    '<article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">USERNAME</label><input type="text" name="appointment_id" class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600" placeholder="Enter username" id=""></article><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">EMAIL</label><input type="email" name="appointment_id" class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600" placeholder="Enter email" id=""></article><article class="flex flex-col"><label for="appointment_id" class="text-xs font-medium text-orange-600">PASSWORD</label><input type="text" name="appointment_id" class="border-b-2 border-gray-300 py-2 outline-0 focus:border-b-orange-600" placeholder="Enter password" id=""></article>',
    3
  ),
  jI = { class: "flex" },
  qI = {
    __name: "RegisterMiniView",
    setup(t) {
      return (e, n) => (
        ie(),
        ge("div", $I, [
          UI,
          _("form", VI, [BI, _("article", jI, [Z(Lt, { text: "Register" })])]),
        ])
      );
    },
  },
  Ll = y0({
    history: Pv("/"),
    routes: [
      {
        path: "/",
        name: "main",
        component: Tx,
        redirect: "/home",
        meta: { requiresAuth: !0 },
        children: [
          { path: "/home", name: "home", component: zx },
          { path: "/appointmentform", name: "appointmentform", component: qT },
          {
            path: "/appointment/:id",
            name: "appointmentdetails",
            component: CI,
            props: !0,
          },
          { path: "/profile", name: "myProfile", component: jh },
          {
            path: "/profile/:username",
            name: "profile",
            component: jh,
            props: !0,
          },
        ],
      },
      {
        path: "/login",
        component: lT,
        meta: { requiresAuth: !1 },
        children: [
          { path: "", name: "login", component: FI },
          { path: "/register", name: "register", component: qI },
        ],
      },
    ],
  });
Ll.beforeEach((t, e, n) => {
  const s = An();
  !t.meta.requiresAuth && s.isLoggedIn
    ? n({ name: "home" })
    : t.meta.requiresAuth && !s.isLoggedIn
    ? n({ name: "login" })
    : n();
});
Ll.be;
const Fl = lv(Ix);
Fl.use(fv());
Fl.use(Ll);
Fl.mount("#app");
