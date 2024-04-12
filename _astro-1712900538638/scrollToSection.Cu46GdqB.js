import {
    X as ht,
    Y as P,
    Z as Kt,
    $ as xt,
    a0 as Ft,
    o as Vt,
    E as qt,
    U as Gt,
    a1 as Ut,
    a2 as D,
    a3 as jt,
    a4 as Wt,
    L as gt,
    F as Ct,
    a5 as zt,
    a6 as Z,
    a7 as V,
    a8 as _,
    a9 as Xt,
    aa as Yt,
    ab as Zt,
    ac as Jt,
    ad as Qt,
    ae as kt,
    af as te,
    ag as vt,
    ah as ee,
    ai as ne,
    aj as se,
    ak as oe,
    al as re,
    am as J,
    an as Q,
    p as ie
} from "./_plugin-vue_export-helper.uIuuipNl.js";
import {
    T as ae,
    a4 as ce
} from "./index.F1yg2eyd.js";
/**
 * @vue/runtime-dom v3.4.18
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/
const le = "http://www.w3.org/2000/svg",
    fe = "http://www.w3.org/1998/Math/MathML",
    v = typeof document < "u" ? document : null,
    k = v && v.createElement("template"),
    ue = {
        insert: (t, e, n) => {
            e.insertBefore(t, n || null)
        },
        remove: t => {
            const e = t.parentNode;
            e && e.removeChild(t)
        },
        createElement: (t, e, n, s) => {
            const o = e === "svg" ? v.createElementNS(le, t) : e === "mathml" ? v.createElementNS(fe, t) : v.createElement(t, n ? {
                is: n
            } : void 0);
            return t === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o
        },
        createText: t => v.createTextNode(t),
        createComment: t => v.createComment(t),
        setText: (t, e) => {
            t.nodeValue = e
        },
        setElementText: (t, e) => {
            t.textContent = e
        },
        parentNode: t => t.parentNode,
        nextSibling: t => t.nextSibling,
        querySelector: t => v.querySelector(t),
        setScopeId(t, e) {
            t.setAttribute(e, "")
        },
        insertStaticContent(t, e, n, s, o, r) {
            const a = n ? n.previousSibling : e.lastChild;
            if (o && (o === r || o.nextSibling))
                for (; e.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)););
            else {
                k.innerHTML = s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t;
                const i = k.content;
                if (s === "svg" || s === "mathml") {
                    const f = i.firstChild;
                    for (; f.firstChild;) i.appendChild(f.firstChild);
                    i.removeChild(f)
                }
                e.insertBefore(i, n)
            }
            return [a ? a.nextSibling : e.firstChild, n ? n.previousSibling : e.lastChild]
        }
    },
    g = "transition",
    w = "animation",
    A = Symbol("_vtc"),
    St = (t, {
        slots: e
    }) => Gt(Ut, Tt(t), e);
St.displayName = "Transition";
const bt = {
        name: String,
        type: String,
        css: {
            type: Boolean,
            default: !0
        },
        duration: [String, Number, Object],
        enterFromClass: String,
        enterActiveClass: String,
        enterToClass: String,
        appearFromClass: String,
        appearActiveClass: String,
        appearToClass: String,
        leaveFromClass: String,
        leaveActiveClass: String,
        leaveToClass: String
    },
    pe = St.props = D({}, jt, bt),
    b = (t, e = []) => {
        _(t) ? t.forEach(n => n(...e)) : t && t(...e)
    },
    tt = t => t ? _(t) ? t.some(e => e.length > 1) : t.length > 1 : !1;

function Tt(t) {
    const e = {};
    for (const c in t) c in bt || (e[c] = t[c]);
    if (t.css === !1) return e;
    const {
        name: n = "v",
        type: s,
        duration: o,
        enterFromClass: r = `${n}-enter-from`,
        enterActiveClass: a = `${n}-enter-active`,
        enterToClass: i = `${n}-enter-to`,
        appearFromClass: f = r,
        appearActiveClass: l = a,
        appearToClass: u = i,
        leaveFromClass: p = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: T = `${n}-leave-to`
    } = t, E = de(o), Dt = E && E[0], Rt = E && E[1], {
        onBeforeEnter: q,
        onEnter: G,
        onEnterCancelled: U,
        onLeave: j,
        onLeaveCancelled: Bt,
        onBeforeAppear: It = q,
        onAppear: Ot = G,
        onAppearCancelled: Ht = U
    } = e, R = (c, m, S) => {
        C(c, m ? u : i), C(c, m ? l : a), S && S()
    }, W = (c, m) => {
        c._isLeaving = !1, C(c, p), C(c, T), C(c, d), m && m()
    }, z = c => (m, S) => {
        const X = c ? Ot : G,
            Y = () => R(m, c, S);
        b(X, [m, Y]), et(() => {
            C(m, c ? f : r), h(m, c ? u : i), tt(X) || nt(m, s, Dt, Y)
        })
    };
    return D(e, {
        onBeforeEnter(c) {
            b(q, [c]), h(c, r), h(c, a)
        },
        onBeforeAppear(c) {
            b(It, [c]), h(c, f), h(c, l)
        },
        onEnter: z(!1),
        onAppear: z(!0),
        onLeave(c, m) {
            c._isLeaving = !0;
            const S = () => W(c, m);
            h(c, p), yt(), h(c, d), et(() => {
                c._isLeaving && (C(c, p), h(c, T), tt(j) || nt(c, s, Rt, S))
            }), b(j, [c, S])
        },
        onEnterCancelled(c) {
            R(c, !1), b(U, [c])
        },
        onAppearCancelled(c) {
            R(c, !0), b(Ht, [c])
        },
        onLeaveCancelled(c) {
            W(c), b(Bt, [c])
        }
    })
}

function de(t) {
    if (t == null) return null;
    if (Wt(t)) return [B(t.enter), B(t.leave)]; {
        const e = B(t);
        return [e, e]
    }
}

function B(t) {
    return Xt(t)
}

function h(t, e) {
    e.split(/\s+/).forEach(n => n && t.classList.add(n)), (t[A] || (t[A] = new Set)).add(e)
}

function C(t, e) {
    e.split(/\s+/).forEach(s => s && t.classList.remove(s));
    const n = t[A];
    n && (n.delete(e), n.size || (t[A] = void 0))
}

function et(t) {
    requestAnimationFrame(() => {
        requestAnimationFrame(t)
    })
}
let me = 0;

function nt(t, e, n, s) {
    const o = t._endId = ++me,
        r = () => {
            o === t._endId && s()
        };
    if (n) return setTimeout(r, n);
    const {
        type: a,
        timeout: i,
        propCount: f
    } = Et(t, e);
    if (!a) return s();
    const l = a + "end";
    let u = 0;
    const p = () => {
            t.removeEventListener(l, d), r()
        },
        d = T => {
            T.target === t && ++u >= f && p()
        };
    setTimeout(() => {
        u < f && p()
    }, i + 1), t.addEventListener(l, d)
}

function Et(t, e) {
    const n = window.getComputedStyle(t),
        s = E => (n[E] || "").split(", "),
        o = s(`${g}Delay`),
        r = s(`${g}Duration`),
        a = st(o, r),
        i = s(`${w}Delay`),
        f = s(`${w}Duration`),
        l = st(i, f);
    let u = null,
        p = 0,
        d = 0;
    e === g ? a > 0 && (u = g, p = a, d = r.length) : e === w ? l > 0 && (u = w, p = l, d = f.length) : (p = Math.max(a, l), u = p > 0 ? a > l ? g : w : null, d = u ? u === g ? r.length : f.length : 0);
    const T = u === g && /\b(transform|all)(,|$)/.test(s(`${g}Property`).toString());
    return {
        type: u,
        timeout: p,
        propCount: d,
        hasTransform: T
    }
}

function st(t, e) {
    for (; t.length < e.length;) t = t.concat(t);
    return Math.max(...e.map((n, s) => ot(n) + ot(t[s])))
}

function ot(t) {
    return t === "auto" ? 0 : Number(t.slice(0, -1).replace(",", ".")) * 1e3
}

function yt() {
    return document.body.offsetHeight
}

function he(t, e, n) {
    const s = t[A];
    s && (e = (e ? [e, ...s] : [...s]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e
}
const M = Symbol("_vod"),
    qe = {
        beforeMount(t, {
            value: e
        }, {
            transition: n
        }) {
            t[M] = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : N(t, e)
        },
        mounted(t, {
            value: e
        }, {
            transition: n
        }) {
            n && e && n.enter(t)
        },
        updated(t, {
            value: e,
            oldValue: n
        }, {
            transition: s
        }) {
            !e == !n && t.style.display === t[M] || (s ? e ? (s.beforeEnter(t), N(t, !0), s.enter(t)) : s.leave(t, () => {
                N(t, !1)
            }) : N(t, e))
        },
        beforeUnmount(t, {
            value: e
        }) {
            N(t, e)
        }
    };

function N(t, e) {
    t.style.display = e ? t[M] : "none"
}
const At = Symbol("");

function Ge(t) {
    const e = gt();
    if (!e) return;
    const n = e.ut = (o = t(e.proxy)) => {
            Array.from(document.querySelectorAll(`[data-v-owner="${e.uid}"]`)).forEach(r => x(r, o))
        },
        s = () => {
            const o = t(e.proxy);
            K(e.subTree, o), n(o)
        };
    Ft(s), Vt(() => {
        const o = new MutationObserver(s);
        o.observe(e.subTree.el.parentNode, {
            childList: !0
        }), qt(() => o.disconnect())
    })
}

function K(t, e) {
    if (t.shapeFlag & 128) {
        const n = t.suspense;
        t = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
            K(n.activeBranch, e)
        })
    }
    for (; t.component;) t = t.component.subTree;
    if (t.shapeFlag & 1 && t.el) x(t.el, e);
    else if (t.type === Ct) t.children.forEach(n => K(n, e));
    else if (t.type === zt) {
        let {
            el: n,
            anchor: s
        } = t;
        for (; n && (x(n, e), n !== s);) n = n.nextSibling
    }
}

function x(t, e) {
    if (t.nodeType === 1) {
        const n = t.style;
        let s = "";
        for (const o in e) n.setProperty(`--${o}`, e[o]), s += `--${o}: ${e[o]};`;
        n[At] = s
    }
}
const ge = /(^|;)\s*display\s*:/;

function Ce(t, e, n) {
    const s = t.style,
        o = P(n),
        r = s.display;
    let a = !1;
    if (n && !o) {
        if (e && !P(e))
            for (const i in e) n[i] == null && F(s, i, "");
        for (const i in n) i === "display" && (a = !0), F(s, i, n[i])
    } else if (o) {
        if (e !== n) {
            const i = s[At];
            i && (n += ";" + i), s.cssText = n, a = ge.test(n)
        }
    } else e && t.removeAttribute("style");
    M in t && (t[M] = a ? s.display : "", s.display = r)
}
const rt = /\s*!important$/;

function F(t, e, n) {
    if (_(n)) n.forEach(s => F(t, e, s));
    else if (n == null && (n = ""), e.startsWith("--")) t.setProperty(e, n);
    else {
        const s = ve(t, e);
        rt.test(n) ? t.setProperty(V(s), n.replace(rt, ""), "important") : t[s] = n
    }
}
const it = ["Webkit", "Moz", "ms"],
    I = {};

function ve(t, e) {
    const n = I[e];
    if (n) return n;
    let s = Qt(e);
    if (s !== "filter" && s in t) return I[e] = s;
    s = kt(s);
    for (let o = 0; o < it.length; o++) {
        const r = it[o] + s;
        if (r in t) return I[e] = r
    }
    return e
}
const at = "http://www.w3.org/1999/xlink";

function Se(t, e, n, s, o) {
    if (s && e.startsWith("xlink:")) n == null ? t.removeAttributeNS(at, e.slice(6, e.length)) : t.setAttributeNS(at, e, n);
    else {
        const r = te(e);
        n == null || r && !vt(n) ? t.removeAttribute(e) : t.setAttribute(e, r ? "" : n)
    }
}

function be(t, e, n, s, o, r, a) {
    if (e === "innerHTML" || e === "textContent") {
        s && a(s, o, r), t[e] = n ? ? "";
        return
    }
    const i = t.tagName;
    if (e === "value" && i !== "PROGRESS" && !i.includes("-")) {
        t._value = n;
        const l = i === "OPTION" ? t.getAttribute("value") : t.value,
            u = n ? ? "";
        l !== u && (t.value = u), n == null && t.removeAttribute(e);
        return
    }
    let f = !1;
    if (n === "" || n == null) {
        const l = typeof t[e];
        l === "boolean" ? n = vt(n) : n == null && l === "string" ? (n = "", f = !0) : l === "number" && (n = 0, f = !0)
    }
    try {
        t[e] = n
    } catch {}
    f && t.removeAttribute(e)
}

function y(t, e, n, s) {
    t.addEventListener(e, n, s)
}

function Te(t, e, n, s) {
    t.removeEventListener(e, n, s)
}
const ct = Symbol("_vei");

function Ee(t, e, n, s, o = null) {
    const r = t[ct] || (t[ct] = {}),
        a = r[e];
    if (s && a) a.value = s;
    else {
        const [i, f] = ye(e);
        if (s) {
            const l = r[e] = Ne(s, o);
            y(t, i, l, f)
        } else a && (Te(t, i, a, f), r[e] = void 0)
    }
}
const lt = /(?:Once|Passive|Capture)$/;

function ye(t) {
    let e;
    if (lt.test(t)) {
        e = {};
        let s;
        for (; s = t.match(lt);) t = t.slice(0, t.length - s[0].length), e[s[0].toLowerCase()] = !0
    }
    return [t[2] === ":" ? t.slice(3) : V(t.slice(2)), e]
}
let O = 0;
const Ae = Promise.resolve(),
    we = () => O || (Ae.then(() => O = 0), O = Date.now());

function Ne(t, e) {
    const n = s => {
        if (!s._vts) s._vts = Date.now();
        else if (s._vts <= n.attached) return;
        ee(Le(s, n.value), e, 5, [s])
    };
    return n.value = t, n.attached = we(), n
}

function Le(t, e) {
    if (_(e)) {
        const n = t.stopImmediatePropagation;
        return t.stopImmediatePropagation = () => {
            n.call(t), t._stopped = !0
        }, e.map(s => o => !o._stopped && s && s(o))
    } else return e
}
const ft = t => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123,
    Me = (t, e, n, s, o, r, a, i, f) => {
        const l = o === "svg";
        e === "class" ? he(t, s, l) : e === "style" ? Ce(t, n, s) : Zt(e) ? Jt(e) || Ee(t, e, n, s, a) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : _e(t, e, s, l)) ? be(t, e, s, r, a, i, f) : (e === "true-value" ? t._trueValue = s : e === "false-value" && (t._falseValue = s), Se(t, e, s, l))
    };

function _e(t, e, n, s) {
    if (s) return !!(e === "innerHTML" || e === "textContent" || e in t && ft(e) && ht(n));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA") return !1;
    if (e === "width" || e === "height") {
        const o = t.tagName;
        if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE") return !1
    }
    return ft(e) && P(n) ? !1 : e in t
}
const wt = new WeakMap,
    Nt = new WeakMap,
    $ = Symbol("_moveCb"),
    ut = Symbol("_enterCb"),
    Lt = {
        name: "TransitionGroup",
        props: D({}, pe, {
            tag: String,
            moveClass: String
        }),
        setup(t, {
            slots: e
        }) {
            const n = gt(),
                s = ne();
            let o, r;
            return se(() => {
                if (!o.length) return;
                const a = t.moveClass || `${t.name||"v"}-move`;
                if (!Be(o[0].el, n.vnode.el, a)) return;
                o.forEach($e), o.forEach(De);
                const i = o.filter(Re);
                yt(), i.forEach(f => {
                    const l = f.el,
                        u = l.style;
                    h(l, a), u.transform = u.webkitTransform = u.transitionDuration = "";
                    const p = l[$] = d => {
                        d && d.target !== l || (!d || /transform$/.test(d.propertyName)) && (l.removeEventListener("transitionend", p), l[$] = null, C(l, a))
                    };
                    l.addEventListener("transitionend", p)
                })
            }), () => {
                const a = oe(t),
                    i = Tt(a);
                let f = a.tag || Ct;
                o = r, r = e.default ? re(e.default()) : [];
                for (let l = 0; l < r.length; l++) {
                    const u = r[l];
                    u.key != null && J(u, Q(u, i, s, n))
                }
                if (o)
                    for (let l = 0; l < o.length; l++) {
                        const u = o[l];
                        J(u, Q(u, i, s, n)), wt.set(u, u.el.getBoundingClientRect())
                    }
                return ie(f, null, r)
            }
        }
    },
    Pe = t => delete t.mode;
Lt.props;
const Ue = Lt;

function $e(t) {
    const e = t.el;
    e[$] && e[$](), e[ut] && e[ut]()
}

function De(t) {
    Nt.set(t, t.el.getBoundingClientRect())
}

function Re(t) {
    const e = wt.get(t),
        n = Nt.get(t),
        s = e.left - n.left,
        o = e.top - n.top;
    if (s || o) {
        const r = t.el.style;
        return r.transform = r.webkitTransform = `translate(${s}px,${o}px)`, r.transitionDuration = "0s", t
    }
}

function Be(t, e, n) {
    const s = t.cloneNode(),
        o = t[A];
    o && o.forEach(i => {
        i.split(/\s+/).forEach(f => f && s.classList.remove(f))
    }), n.split(/\s+/).forEach(i => i && s.classList.add(i)), s.style.display = "none";
    const r = e.nodeType === 1 ? e : e.parentNode;
    r.appendChild(s);
    const {
        hasTransform: a
    } = Et(s);
    return r.removeChild(s), a
}
const pt = t => {
    const e = t.props["onUpdate:modelValue"] || !1;
    return _(e) ? n => Yt(e, n) : e
};

function Ie(t) {
    t.target.composing = !0
}

function dt(t) {
    const e = t.target;
    e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")))
}
const H = Symbol("_assign"),
    je = {
        created(t, {
            modifiers: {
                lazy: e,
                trim: n,
                number: s
            }
        }, o) {
            t[H] = pt(o);
            const r = s || o.props && o.props.type === "number";
            y(t, e ? "change" : "input", a => {
                if (a.target.composing) return;
                let i = t.value;
                n && (i = i.trim()), r && (i = Z(i)), t[H](i)
            }), n && y(t, "change", () => {
                t.value = t.value.trim()
            }), e || (y(t, "compositionstart", Ie), y(t, "compositionend", dt), y(t, "change", dt))
        },
        mounted(t, {
            value: e
        }) {
            t.value = e ? ? ""
        },
        beforeUpdate(t, {
            value: e,
            modifiers: {
                lazy: n,
                trim: s,
                number: o
            }
        }, r) {
            if (t[H] = pt(r), t.composing) return;
            const a = o || t.type === "number" ? Z(t.value) : t.value,
                i = e ? ? "";
            a !== i && (document.activeElement === t && t.type !== "range" && (n || s && t.value.trim() === i) || (t.value = i))
        }
    },
    Oe = ["ctrl", "shift", "alt", "meta"],
    He = {
        stop: t => t.stopPropagation(),
        prevent: t => t.preventDefault(),
        self: t => t.target !== t.currentTarget,
        ctrl: t => !t.ctrlKey,
        shift: t => !t.shiftKey,
        alt: t => !t.altKey,
        meta: t => !t.metaKey,
        left: t => "button" in t && t.button !== 0,
        middle: t => "button" in t && t.button !== 1,
        right: t => "button" in t && t.button !== 2,
        exact: (t, e) => Oe.some(n => t[`${n}Key`] && !e.includes(n))
    },
    We = (t, e) => {
        const n = t._withMods || (t._withMods = {}),
            s = e.join(".");
        return n[s] || (n[s] = (o, ...r) => {
            for (let a = 0; a < e.length; a++) {
                const i = He[e[a]];
                if (i && i(o, e)) return
            }
            return t(o, ...r)
        })
    },
    Ke = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    ze = (t, e) => {
        const n = t._withKeys || (t._withKeys = {}),
            s = e.join(".");
        return n[s] || (n[s] = o => {
            if (!("key" in o)) return;
            const r = V(o.key);
            if (e.some(a => a === r || Ke[a] === r)) return t(o)
        })
    },
    Mt = D({
        patchProp: Me
    }, ue);
let L, mt = !1;

function _t() {
    return L || (L = Kt(Mt))
}

function xe() {
    return L = mt ? L : xt(Mt), mt = !0, L
}
const Xe = (...t) => {
        _t().render(...t)
    },
    Ye = (...t) => {
        const e = _t().createApp(...t),
            {
                mount: n
            } = e;
        return e.mount = s => {
            const o = $t(s);
            if (!o) return;
            const r = e._component;
            !ht(r) && !r.render && !r.template && (r.template = o.innerHTML), o.innerHTML = "";
            const a = n(o, !1, Pt(o));
            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), a
        }, e
    },
    Ze = (...t) => {
        const e = xe().createApp(...t),
            {
                mount: n
            } = e;
        return e.mount = s => {
            const o = $t(s);
            if (o) return n(o, !0, Pt(o))
        }, e
    };

function Pt(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml"
}

function $t(t) {
    return P(t) ? document.querySelector(t) : t
}
const Je = (t, e = !1) => {
    const n = document.getElementById(t.replace("#", "")) ? .getBoundingClientRect().top;
    if (!n) return;
    const s = document.querySelector(`.${ae}`) ? .offsetHeight || 0,
        o = document.querySelector(`.${ce}`);
    window.scrollBy({
        top: o ? n - s : n,
        behavior: e ? "instant" : "smooth"
    })
};
export {
    St as T, ze as a, je as b, Ue as c, Ze as d, Ye as e, Xe as r, Je as s, Ge as u, qe as v, We as w
};