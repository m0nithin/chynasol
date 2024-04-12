import {
    i as al,
    r as A,
    c as u,
    _ as oe,
    d as le,
    o as Le,
    a as Et,
    b as c,
    e as h,
    f as E,
    t as X,
    g as O,
    n as J,
    F as pe,
    h as ke,
    j as Ge,
    w as ce,
    k as Be,
    l as Te,
    m as F,
    p as De,
    q as ze,
    s as Xe,
    u as he,
    v as Re,
    x as _e,
    y as sn,
    z as Po,
    A as Io,
    B as Ve,
    C as At,
    D as Bt,
    E as Nn,
    G as nl,
    H as Dt,
    I as pa,
    J as bt,
    K as B,
    L as rl,
    M as ol,
    N as il,
    O as Jr,
    P as Ha,
    Q as er,
    R as Tt,
    S as yi,
    T as Uu,
    U as Yu,
    V as qu
} from "./_plugin-vue_export-helper.uIuuipNl.js";
import {
    u as ht,
    v as Gt,
    w as Ee,
    T as Mt,
    a as Oe,
    s as eo,
    b as sl,
    c as Wu,
    r as bi
} from "./scrollToSection.Cu46GdqB.js";
import {
    S as Nt,
    L as to,
    a as ll,
    M as ao,
    D as Fu,
    b as Sa,
    c as xn,
    E as ta,
    d as La,
    e as ul,
    f as cl,
    Z as Gu,
    g as ju,
    h as zu,
    P as dl,
    i as Eo,
    j as Qu,
    k as Ku,
    A as ml,
    l as Zu,
    I as _i,
    m as Cr,
    n as Xu,
    o as Ju,
    p as ec,
    q as wi,
    r as In,
    s as En,
    t as Tr,
    u as gl,
    v as tc,
    w as ac,
    x as nc,
    y as rc,
    z as ki,
    B as pl,
    C as Si,
    F as oc,
    G as ic,
    H as sc,
    J as no,
    K as Ci,
    N as lc,
    O as uc,
    Q as cc,
    R as dc,
    T as vl,
    U as Pr,
    V as Ti,
    W as Pi,
    X as mc,
    Y as gc,
    _ as pc,
    $ as vc,
    a0 as hc,
    a1 as fc,
    a2 as yc,
    a3 as bc,
    a4 as _c,
    a5 as yt,
    a6 as Ii,
    a7 as Ei,
    a8 as Ir,
    a9 as Di
} from "./index.F1yg2eyd.js"; /* empty css                        */
import {
    g as hl,
    a as wc,
    s as Mi,
    b as kc,
    i as fl,
    c as $a,
    d as Sc
} from "./addDocumentElements.DKUXGbzq.js";
/*!
 * vue-router v4.3.0
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */
var Oi;
(function(e) {
    e.pop = "pop", e.push = "push"
})(Oi || (Oi = {}));
var Li;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(Li || (Li = {}));
var Ai;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Ai || (Ai = {}));
const Cc = Symbol(""),
    Tc = Symbol("");

function Pc() {
    return al(Cc)
}

function Ic() {
    return al(Tc)
}
const Bi = A(null),
    Qe = A({}),
    Je = () => {
        const e = H => {
                Bi.value = H
            },
            n = H => {
                Qe.value = H
            },
            t = u(() => Qe.value.pages || {}),
            a = u(() => Qe.value.blocks),
            r = u(() => Qe.value.elements),
            i = u(() => Qe.value.nav),
            o = u(() => Qe.value.homePageId),
            s = u(() => Qe.value.isNavHidden),
            l = u(() => Qe.value.cookieBannerAcceptText),
            d = u(() => Qe.value.cookieBannerDisclaimer),
            g = u(() => Qe.value.cookieBannerDeclineText),
            m = u(() => Qe.value.blogReadingTimeText),
            p = u(() => Qe.value.meta),
            f = u(() => Qe.value.metaTitle),
            b = u(() => Qe.value.forms),
            S = u(() => Qe.value.styles),
            C = u(() => Qe.value.domain),
            w = u(() => Qe.value.siteId),
            y = u(() => Qe.value.ecommerceShoppingCart),
            D = u(() => Qe.value.blogCategories),
            P = u(() => Qe.value.languageSwitcherLanguages),
            M = u(() => Qe.value.currentPageId),
            R = u(() => t.value[M.value]),
            $ = u(() => Qe.value.currentLocale),
            Z = u(() => Qe.value.languageKeys),
            G = u(() => Qe.value.ecwidPages),
            T = ({
                pageId: H
            }) => {
                if (!t.value[H]) return null;
                const z = t.value[H].slug;
                return [Nt, p.value.defaultLocale].includes($.value) ? o.value === H ? "/" : `/${z}` : o.value === H ? `/${$.value}` : `/${$.value}/${z}`
            };
        return {
            website: Bi,
            pageData: Qe,
            pages: t,
            blocks: a,
            elements: r,
            nav: i,
            homePageId: o,
            isNavHidden: s,
            cookieBannerAcceptText: l,
            cookieBannerDisclaimer: d,
            cookieBannerDeclineText: g,
            blogReadingTimeText: m,
            meta: p,
            metaTitle: f,
            forms: b,
            styles: S,
            domain: C,
            siteId: w,
            ecommerceShoppingCart: y,
            blogCategories: D,
            languageSwitcherLanguages: P,
            currentPageId: M,
            currentLocale: $,
            languageKeys: Z,
            ecwidPages: G,
            currentPageData: R,
            setWebsite: e,
            setPageData: n,
            getPagePathFromId: T,
            getButtonHref: ({
                isFormButton: H,
                linkedPageId: z,
                linkType: V,
                href: I
            }) => H ? null : I || (V === to && z ? T({
                pageId: z
            }) : I)
        }
    },
    Ri = A(!0),
    yl = () => {
        const e = n => {
            Ri.value = n
        };
        return {
            hasUserScrolled: u(() => !Ri.value),
            setIntersectingState: e
        }
    },
    Ec = le({
        __name: "StickyTrigger",
        setup(e, {
            expose: n
        }) {
            n();
            const t = {
                    threshold: 1
                },
                a = A(null),
                r = A(null),
                {
                    setIntersectingState: i
                } = yl();
            Le(() => {
                r.value = new IntersectionObserver(([{
                    isIntersecting: s
                }]) => {
                    i(s)
                }, t), a.value && r.value.observe(a.value)
            }), Et(() => {
                r.value ? .disconnect()
            });
            const o = {
                OBSERVER_OPTIONS: t,
                stickyTriggerRef: a,
                observer: r,
                setIntersectingState: i
            };
            return Object.defineProperty(o, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), o
        }
    }),
    Dc = {
        ref: "stickyTriggerRef",
        class: "sticky-trigger"
    };

function Mc(e, n, t, a, r, i) {
    return c(), h("div", Dc, null, 512)
}
const Oc = oe(Ec, [
        ["render", Mc]
    ]),
    $i = 1600,
    Ni = 1224,
    xi = 12,
    Lc = 1224,
    Ca = 1920,
    Ac = (e, n) => {
        const [t, a, r, i] = n.split("/").map(Number.parseFloat), {
            styles: o
        } = e.settings ? ? {}, s = Number.parseFloat(o ? .["row-size"]) ? ? 48, l = Number.parseFloat(o ? .["column-gap"]) ? ? 24, d = Number.parseFloat(o ? .["row-gap"]) ? ? 16, g = (Ni - (xi - 1) * l) / xi, m = (Ca - $i) / 2 + l, p = ($i - Ni) / 2 - l;
        let f = Ca;
        const b = r - t,
            S = b * s + (b - 1) * d;
        return a !== 1 && (f -= m), i !== 17 && (f -= m), a > 2 && (f -= p), i < 16 && (f -= p), a > 3 && (f -= (a - 3) * (g + l)), i < 15 && (f -= (15 - i) * (g + l)), i - a === 1 && (f = g), {
            width: f,
            height: S
        }
    },
    Hi = e => Object.prototype.toString.call(e) === "[object Object]",
    Xa = e => {
        const n = e.split(" "),
            t = n.length;
        if (t < 1 || t > 4) throw new Error(`Cannot parse ${t} sides`);
        return ((r, i = r, o = r, s = i) => ({
            top: r,
            right: i,
            bottom: o,
            left: s
        }))(...n)
    },
    Bc = ["padding", "m-padding", "block-padding"],
    Rc = ["border-radius"],
    Kt = (e, n = "") => Hi(e) ? Object.entries(e).reduce((t, [a, r]) => {
        const i = n ? `${n}-${a}` : `--${a}`;
        if (Hi(r)) return { ...t,
            ...Kt(r, i)
        };
        const o = Bc.includes(a) ? Object.entries(Xa(r)).reduce((s, [l, d]) => ({ ...s,
            [`${i}-${l}`]: d,
            [i]: r
        }), {}) : {
            [i]: r
        };
        return { ...t,
            ...Rc.includes(a) ? {
                [i]: `${r}px`
            } : o
        }
    }, {}) : {},
    Er = A([]),
    bl = () => {
        const e = u(() => Er.value.reduce((r, i) => r + i.quantity, 0)),
            n = () => {
                const r = window.Ecwid.Controller.getEntryPage();
                window.Ecwid.openPage(r.type.toLowerCase(), {
                    id: r.categoryId
                })
            },
            t = () => {
                window.Ecwid && window.Ecwid.openPage("cart")
            },
            a = r => {
                Er.value = r
            };
        return {
            ecwidCartItems: u(() => Er.value),
            ecwidCartItemCount: e,
            openCart: t,
            setEcwidCartItems: a,
            openEcwidHomepage: n
        }
    },
    $c = ({
        path: e,
        languageKeys: n = [],
        defaultLocale: t = "system"
    }) => {
        const [a, r] = e.split("/").filter(i => i !== "");
        return !n || !n.length > 1 ? {
            locale: t,
            slug: a
        } : n.includes(a) ? {
            locale: a,
            slug: r
        } : {
            locale: t ? ? Nt,
            slug: a
        }
    },
    Do = (e, n, t) => !e || !n ? null : e === "assets" ? `https://assets.zyrosite.com/${t}/${n}` : e === "unsplash" ? `https://images.unsplash.com/${n}` : n,
    Nc = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
    xc = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
    Hc = /^\d+$/,
    Vc = e => typeof e != "string" ? "" : e.charAt(0).toUpperCase() + e.slice(1),
    Qa = e => {
        const n = e.split(/[/\\]/).pop(),
            t = n.lastIndexOf(".");
        return n === "" || t < 1 ? "" : n.slice(t + 1).toLowerCase()
    },
    Uc = [ll, "https://assets.zyrosite.space", "https://assets.zyrosite.com", "https://cdn.zyrosite.com"],
    Yc = "https://images.unsplash.com",
    qc = "cdn-cgi/image",
    Mo = [{
        width: 360,
        height: 640
    }],
    Oo = [1, 2, 2.625, 3],
    Wc = [{
        width: 1440
    }, {
        width: 1920
    }],
    Lo = [1, 2],
    Ao = 16,
    Dn = (e, n = Ao) => [`(min-width: ${ao}px) ${e}px`, `calc(100vw - ${n*2}px)`].join(", "),
    Fc = (e, n, t = {}) => {
        const a = t.fit || (t.shouldContain ? "scale-down" : "crop"),
            r = ["format=auto", t.width && `w=${t.width}`, t.height && `h=${t.height}`, `fit=${a}`, t.isLossless && "q=100", t.format && `f=${t.format}`, t.trim && `trim=${t.trim}`, t.quality && !t.isLossless && `q=${t.quality}`].filter(o => !!o).join(",");
        let [, i] = n.split(e);
        for (; i.startsWith("/");) i = i.replace("/", "");
        return `${e}/${qc}/${r}/${i}`
    },
    Gc = (e, n = {}) => {
        const t = new URL(e);
        return t.searchParams.set("auto", n.format || "format"), t.searchParams.set("fit", n.shouldContain ? "clip" : "crop"), n.width && t.searchParams.set("w", n.width), n.height && t.searchParams.set("h", n.height), n.isLossless && t.searchParams.set("q", 100), t.href
    },
    ot = (e, n, t, a = {}) => {
        const r = Do(e, n, t);
        if (!r) return null;
        if (Qa(r) === "svg" || Qa(r) === "ico" || Qa(r) === "gif") return r;
        const i = Uc.find(o => r.includes(o));
        return i ? Fc(i, r, a) : r.includes(Yc) ? Gc(r, a) : r
    },
    Ta = (e, n, t, a = {}) => {
        const r = Wc.map(s => Lo.map(l => {
            const d = Math.round(s.width * l);
            return `${ot(e,n,t,{...a,width:d})} ${d}w`
        })).join(",");
        return `${Mo.map(s=>Oo.map(l=>{const d=Math.round(s.width*l),g={...a,width:d};return a.isMobileFullScreen&&(g.height=Math.round(s.height*l)),`
        $ {
            ot(e, n, t, g)
        }
        $ {
            d
        }
        w `})).join(",")},${r}`
    },
    Aa = (e, n, t, a = {}) => {
        if (!a.width) return Ta(e, n, t, a);
        const r = Lo.map(l => {
                const d = Math.round(a.width * l),
                    g = Math.round(a.height * l);
                return `${ot(e,n,t,{...a,width:d,height:g})} ${d}w`
            }).join(","),
            i = (a.mobilePadding ? ? Ao) * 2;
        return `${Mo.map(l=>{const d=l.width-i;return Oo.map(g=>{const m=a.width/a.height,p=Math.round(d*g),f=Math.round(p/m);return`${ot(e,n,t,{...a,width:p,height:f})} ${p}w`}).join(",")}).join(",")},${r}`
    },
    jc = (e, n, t, a = {}) => {
        if (!a.width) return Ta(e, n, t, a);
        const r = Lo.map(s => {
                const l = Math.round(a.width * s),
                    d = Math.round(a.height * s);
                return `${ot(e,n,t,{...a,width:l,height:d})} ${l}w`
            }).join(","),
            i = (a.mobilePadding ? ? Ao) * 2;
        return `${Mo.map(s=>{const l=Math.round((s.width-i+a.columnGap)/a.columnCount-a.columnGap);return Oo.map(d=>{const g=Math.round(l*d),m=Math.round(l*d);return`${ot(e,n,t,{...a,width:m,height:!a.isMasonryLayout&&m})} ${g}w`}).join(",")}).join(",")},${r}`
    },
    zc = () => {
        const {
            meta: e
        } = Je(), n = A("z-cookies-consent"), t = A("1"), a = u(() => !!t.value), r = u(() => t.value === "1"), i = u(() => t.value !== "0");
        return Le(() => {
            const l = hl(window.location.hostname);
            n.value = `z-cookies-consent-${l}`, t.value = wc(n.value)
        }), {
            acceptCookies: () => {
                Mi(n.value, 1, 365), t.value = "1", kc({
                    siteMeta: e.value,
                    areCookiesAllowed: i.value
                })
            },
            declineCookies: () => {
                Mi(n.value, 0, 1), t.value = "0"
            },
            hasUserConsentedCookieBanner: a,
            hasUserAcceptedCookies: r,
            areCookiesAllowed: i
        }
    },
    Qc = le({
        __name: "CookieBanner",
        props: {
            disclaimer: {
                type: String,
                required: !0
            },
            acceptText: {
                type: String,
                default: "Accept"
            },
            declineText: {
                type: String,
                default: "Decline"
            },
            siteMeta: {
                type: Object,
                required: !0
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const {
                acceptCookies: t,
                declineCookies: a,
                hasUserConsentedCookieBanner: r
            } = zc(), i = {
                acceptCookies: t,
                declineCookies: a,
                hasUserConsentedCookieBanner: r,
                get isAppPrerendering() {
                    return fl
                }
            };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    }),
    Kc = {
        key: 0,
        class: "cookie-banner"
    },
    Zc = {
        class: "cookie-banner__frame"
    },
    Xc = {
        class: "cookie-banner__text"
    },
    Jc = {
        class: "cookie-banner__controls"
    };

function ed(e, n, t, a, r, i) {
    return !a.isAppPrerendering && !a.hasUserConsentedCookieBanner ? (c(), h("div", Kc, [E("div", Zc, [E("p", Xc, X(t.disclaimer), 1), E("div", Jc, [E("button", {
        class: "control-button primary",
        onClick: n[0] || (n[0] = (...o) => a.acceptCookies && a.acceptCookies(...o))
    }, X(t.acceptText), 1), E("button", {
        class: "control-button",
        onClick: n[1] || (n[1] = (...o) => a.declineCookies && a.declineCookies(...o))
    }, X(t.declineText), 1)])])])) : O("", !0)
}
const td = oe(Qc, [
        ["render", ed]
    ]),
    ad = e => {
        const n = e.colors.map(t => t.value).join(", ");
        return `linear-gradient(${e.angle}deg, ${n})`
    },
    nd = le({
        __name: "BlockBackground",
        props: {
            type: {
                default: "color"
            },
            alt: {},
            overlayOpacity: {},
            src: {},
            srcset: {},
            isEager: {
                type: Boolean
            },
            gradient: {},
            color: {},
            isFixed: {
                type: Boolean
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(l => ({
                "5b5b2c5e": a.value,
                "00b9b266": r.value.xStart,
                "0157ff6c": r.value.yStart,
                "2e158a06": r.value.xEnd,
                f92b1a26: o.value
            }));
            const t = e,
                a = u(() => t.type === "gradient" && t.gradient ? ad(t.gradient) : t.type === "color" ? t.color : "transparent"),
                r = u(() => {
                    const d = ((t.gradient ? .angle || 0) + 90) * Math.PI / 180,
                        g = `${Math.round(50-50*Math.cos(d))}%`,
                        m = `${Math.round(50-50*Math.sin(d))}%`,
                        p = `${Math.round(50+50*Math.cos(d))}%`,
                        f = `${Math.round(50+50*Math.sin(d))}%`;
                    return {
                        xStart: g,
                        yStart: m,
                        xEnd: p,
                        yEnd: f
                    }
                }),
                i = u(() => t.type === "image" && t.overlayOpacity),
                o = u(() => t.type === "image" && t.overlayOpacity ? t.overlayOpacity : 0),
                s = {
                    props: t,
                    backgroundColor: a,
                    gradientBackgroundPosition: r,
                    isBackgroundOverlayShown: i,
                    backgroundOverlayOpacity: o
                };
            return Object.defineProperty(s, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), s
        }
    }),
    rd = ["alt", "src", "srcset", "loading"];

function od(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(["block-background", {
            "block-background--fixed": t.isFixed,
            "block-background--animated-gradient": t.type === "gradient" && t.gradient ? .isAnimated
        }])
    }, [t.type === "image" && t.src ? (c(), h("img", {
        key: t.src,
        alt: t.alt,
        src: t.src,
        srcset: t.srcset,
        width: "100vw",
        sizes: "(max-width: 500px) 800px, 100vw",
        loading: t.isEager ? "eager" : "lazy",
        class: J(["block-background__image", {
            "block-background__image--fixed": t.isFixed
        }])
    }, null, 10, rd)) : O("", !0), a.isBackgroundOverlayShown ? (c(), h("div", {
        key: 1,
        class: J(["block-background__overlay", {
            "block-background__overlay--fixed": t.isFixed
        }])
    }, null, 2)) : O("", !0)], 2)
}
const _l = oe(nd, [
        ["render", od]
    ]),
    id = le({
        props: {
            categories: {
                type: Array,
                default: () => []
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            }
        },
        methods: {
            getCategoryNameById(e) {
                return this.blogCategories[e] ? .name ? .toUpperCase()
            }
        }
    }),
    sd = {
        class: "categories"
    },
    ld = ["onClick"];

function ud(e, n, t, a, r, i) {
    return c(), h("p", sd, [(c(!0), h(pe, null, ke(e.categories, (o, s) => (c(), h("span", {
        key: o,
        class: "categories__item",
        onClick: l => e.$emit("filter-category", e.categories[s])
    }, X(e.getCategoryNameById(o)), 9, ld))), 128))])
}
const wl = oe(id, [
        ["render", ud],
        ["__scopeId", "data-v-17a7aef3"]
    ]),
    cd = le({
        __name: "BlockBlogListItemMeta",
        props: {
            authorName: {
                type: String,
                default: ""
            },
            minutesAmount: {
                type: String,
                default: "0"
            },
            blogReadingTimeText: {
                type: String,
                default: ""
            },
            date: {
                type: String,
                default: ""
            },
            showAvatar: {
                type: Boolean,
                default: !0
            },
            showName: {
                type: Boolean,
                default: !0
            },
            showDate: {
                type: Boolean,
                default: !0
            },
            showMinutes: {
                type: Boolean,
                default: !0
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = {
                get DEFAULT_MIN_READ_TEXT() {
                    return Fu
                }
            };
            return Object.defineProperty(t, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), t
        }
    }),
    dd = {
        class: "blog-list-item-meta"
    },
    md = {
        class: "font-secondary"
    },
    gd = {
        class: "blog-list-item-meta__author-name"
    },
    pd = {
        class: "blog-list-item-meta__subtitle"
    },
    vd = {
        key: 0
    },
    hd = {
        key: 1
    };

function fd(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", dd, [E("div", md, [ce((c(), h("p", gd, [Be(X(t.authorName), 1)])), [
        [Gt, t.showName],
        [o, "blog-author"]
    ]), ce(E("p", pd, [t.showDate && t.date ? (c(), h("span", vd, X(t.date), 1)) : O("", !0), t.showMinutes ? (c(), h("span", hd, X(`${t.minutesAmount} ${t.blogReadingTimeText||a.DEFAULT_MIN_READ_TEXT}`), 1)) : O("", !0)], 512), [
        [Gt, t.showDate || t.showMinutes]
    ])])])
}
const kl = oe(cd, [
        ["render", fd],
        ["__scopeId", "data-v-88ffe988"]
    ]),
    Sl = e => new Date(e).toLocaleDateString("en-US"),
    Bo = le({
        name: "BlockBlogHeader",
        components: {
            BlockBlogListItemMeta: kl,
            BlockBlogListItemCategories: wl
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            currentBlogPage: {
                type: Object,
                required: !0
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            },
            blogReadingTimeText: {
                type: [String, void 0],
                default: void 0
            }
        },
        setup(e) {
            const t = u(() => `${e.data.settings.blogTitleFontSize||32}px`);
            return {
                getFormattedNumericDate: Sl,
                DATA_ATTRIBUTE_ANIMATION_ROLE: Sa,
                DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: xn,
                blogTitleTextSize: t
            }
        },
        computed: {
            categories() {
                return this.currentBlogPage ? .categories ? ? []
            },
            meta() {
                return this.currentBlogPage ? .meta ? ? {}
            },
            authorName() {
                return this.meta ? .authorName
            },
            shownItems() {
                return this.data ? .settings ? .shownItems ? ? {}
            },
            areCategoriesShown() {
                return this.shownItems.categories && this.categories.length
            }
        }
    }),
    Vi = () => {
        ht(e => ({
            "21ab201a": e.blogTitleTextSize
        }))
    },
    Ui = Bo.setup;
Bo.setup = Ui ? (e, n) => (Vi(), Ui(e, n)) : Vi;
const yd = {
        class: "block-blog-header__content"
    },
    bd = {
        class: "font-primary block-blog-header__title"
    },
    _d = {
        key: 0,
        class: "font-secondary block-blog-header__description"
    };

function wd(e, n, t, a, r, i) {
    const o = Te("BlockBlogListItemCategories"),
        s = Te("BlockBlogListItemMeta"),
        l = Ge("qa");
    return ce((c(), h("div", Xe({
        class: "block-blog-header",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT
    }), [E("div", yd, [ce((c(), h("h1", bd, [Be(X(e.meta.title), 1)])), [
        [l, "blog-label-posttitle"]
    ]), e.shownItems.description ? ce((c(), h("p", _d, [Be(X(e.meta.description), 1)])), [
        [l, "blog-label-postdescription"]
    ]) : O("", !0), e.areCategoriesShown ? ce((c(), F(o, {
        key: 1,
        class: "font-secondary",
        categories: e.categories,
        "blog-categories": e.blogCategories
    }, null, 8, ["categories", "blog-categories"])), [
        [l, "blog-label-category"]
    ]) : O("", !0), De(s, ze({
        authorName: e.authorName,
        minutesAmount: e.currentBlogPage.minutesToRead,
        date: e.getFormattedNumericDate(e.currentBlogPage.date),
        showAvatar: e.shownItems.avatar,
        showName: e.shownItems.authorFullName,
        showDate: e.shownItems.date,
        showMinutes: e.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": e.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])])], 16)), [
        [l, "blog-postinformation"]
    ])
}
const kd = oe(Bo, [
        ["render", wd],
        ["__scopeId", "data-v-dfe4e670"]
    ]),
    ro = A(!1),
    Yi = A(null),
    oo = ({
        blockId: e
    }) => ({
        isSearchOpenedInCurrentBlock: u(() => Yi.value === e && ro.value),
        toggleSearchDropdown: a => {
            Yi.value = e, ro.value = a
        }
    }),
    Zn = 16,
    va = 1224,
    sa = 360,
    Cl = sa - Zn * 2,
    qi = 16,
    Sd = le({
        __name: "BlockLayoutWrapper",
        props: {
            isMobileLegacy: {
                type: Boolean,
                default: !1
            },
            isBlockResponsive: {
                type: Boolean,
                default: !1
            },
            isForcedOnTop: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(l => ({
                c467b54c: i.value,
                "2c660f9c": r.value,
                "6ced7b1e": a.value,
                "1f9bbfe2": o.value
            }));
            const t = e,
                a = u(() => t.isBlockResponsive && !t.isInPreviewMode ? `0 ${Zn*100/sa}vw` : `0 ${Zn}px`),
                r = u(() => `${sa}px`),
                i = u(() => `${va}px`),
                o = u(() => `0 ${Zn}px`),
                s = {
                    props: t,
                    mobileBlockPaddingCSSVar: a,
                    mobileMaxWidthCSSVar: r,
                    maxWidthCSSVar: i,
                    tabletBlockPaddingCSSVar: o
                };
            return Object.defineProperty(s, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), s
        }
    });

function Cd(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(["block-layout", {
            "block-layout--legacy": t.isMobileLegacy,
            "block-layout--layout": !t.isMobileLegacy,
            "block-layout--forcedOnTop": t.isForcedOnTop
        }])
    }, [he(e.$slots, "default")], 2)
}
const Td = oe(Sd, [
        ["render", Cd]
    ]),
    Wi = ({
        blockElements: e,
        elementPositionKey: n
    }) => e ? .length ? Math.max(...e.map(t => t[n].top + t[n].height)) : 0,
    Pd = [ul, cl],
    Id = ({
        lowestElementBottom: e,
        sectionMinHeight: n
    }) => {
        const a = e >= n ? 0 : n - e;
        return e ? `${a}px` : "1fr"
    },
    tr = ({
        blockElementsWithPosition: e
    }) => {
        try {
            const n = e.flatMap(({
                position: a
            }) => [a.top, a.height + a.top]);
            return [...new Set([0, ...n])].sort((a, r) => a - r)
        } catch (n) {
            console.error(n)
        }
    },
    io = ({
        rowTopsUniqueSorted: e,
        columnsLeftUniqueSorted: n,
        elementPosition: t
    }) => {
        const {
            top: a,
            left: r,
            width: i,
            height: o
        } = t, s = e.indexOf(a) + 1, l = e.indexOf(a + o) + 1, d = n.indexOf(r) + 1, g = n.indexOf(r + i) + 1;
        return {
            rowStart: s,
            rowEnd: l,
            columnStart: d,
            columnEnd: g
        }
    },
    ar = ({
        blockElementsWithPosition: e,
        blockWidth: n
    }) => {
        const t = e.flatMap(({
            position: r
        }) => [r.left, r.width + r.left]);
        return [...new Set([0, ...t, n])].sort((r, i) => r - i)
    },
    Mn = ({
        blockElements: e,
        elementPositionKey: n
    }) => e.map(t => ({ ...t,
        position: t[n]
    })),
    Fi = ({
        blockElements: e,
        elementPositionKey: n,
        buildResponsiveGrid: t
    }) => {
        const a = n === ta ? Cl : va,
            r = Mn({
                blockElements: e,
                elementPositionKey: n
            });
        return ar({
            blockElementsWithPosition: r,
            blockWidth: a
        }).map((l, d, g) => d === 0 ? l : l - g[d - 1]).filter(l => l !== 0).map(l => t ? `${l/a*100}%` : `${l}px`).join(" ")
    },
    Ed = ({
        gridRows: e
    }) => e.filter(n => n !== 0),
    Dd = ({
        gridRows: e
    }) => e.map(n => `${n}px`),
    Md = ({
        gridRows: e
    }) => e.map(n => `minmax(${n}px, auto)`),
    Od = ({
        gridRows: e,
        responsiveRows: n,
        isMobile: t
    }) => e.map((a, r) => n.includes(r + 1) ? "auto" : `${a*100/(t?sa:va)}vw`),
    Dr = ({
        gridRows: e,
        lastRowHeight: n
    }) => `${e.join(" ")} ${n}`,
    Wn = ({
        blockElements: e,
        elementPositionKey: n,
        buildResponsiveGrid: t,
        responsiveRows: a,
        lowestElementBottom: r,
        sectionMinHeight: i
    }) => {
        const o = n === ta,
            s = Mn({
                blockElements: e,
                elementPositionKey: n
            }),
            d = tr({
                blockElementsWithPosition: s
            }).map((f, b, S) => b === 0 ? f : f - S[b - 1]),
            g = Id({
                lowestElementBottom: r,
                sectionMinHeight: i
            }),
            m = Ed({
                gridRows: d
            });
        if (!t) {
            const f = Dd({
                gridRows: m
            });
            return Dr({
                gridRows: f,
                lastRowHeight: g
            })
        }
        if (!a) {
            const f = Md({
                gridRows: m
            });
            return Dr({
                gridRows: f,
                lastRowHeight: g
            })
        }
        const p = Od({
            gridRows: m,
            responsiveRows: a,
            isMobile: o
        });
        return Dr({
            gridRows: p,
            lastRowHeight: g
        })
    },
    Gi = ({
        blockElements: e,
        elementPositionKey: n
    }) => {
        const t = Mn({
                blockElements: e,
                elementPositionKey: n
            }),
            a = tr({
                blockElementsWithPosition: t
            }),
            r = ar({
                blockElementsWithPosition: t,
                blockWidth: n === ta ? Cl : va
            });
        return e.filter(i => !Pd.includes(i.type)).reduce((i, o) => {
            const {
                rowEnd: s,
                rowStart: l
            } = io({
                rowTopsUniqueSorted: a,
                columnsLeftUniqueSorted: r,
                elementPosition: o[n]
            }), d = s > l ? s - l : 1, g = [...new Array(d).keys()].map((m, p) => l + p);
            return i.some(m => g.includes(m)) ? i : [...i, s - 1]
        }, [])
    },
    Ld = (e, n) => {
        const t = Mn({
                blockElements: e,
                elementPositionKey: La
            }),
            a = tr({
                blockElementsWithPosition: t
            }),
            r = ar({
                blockElementsWithPosition: t,
                blockWidth: va
            }),
            i = Mn({
                blockElements: e,
                elementPositionKey: ta
            }),
            o = tr({
                blockElementsWithPosition: i
            }),
            s = ar({
                blockElementsWithPosition: i,
                blockWidth: va
            });
        return e.map(l => {
            const {
                rowStart: d,
                rowEnd: g,
                columnStart: m,
                columnEnd: p
            } = io({
                rowTopsUniqueSorted: a,
                columnsLeftUniqueSorted: r,
                elementPosition: l.desktop
            }), {
                rowStart: f,
                rowEnd: b,
                columnStart: S,
                columnEnd: C
            } = io({
                rowTopsUniqueSorted: o,
                columnsLeftUniqueSorted: s,
                elementPosition: l.mobile
            });
            return { ...l,
                settings: { ...l.settings,
                    styles: { ...l.settings ? .styles || {},
                        "z-index" : n.indexOf(l.elementId) + 1,
                        "grid-row": `${d}/${g}`,
                        "grid-column": `${m}/${p}`,
                        "m-grid-row": `${f}/${b}`,
                        "m-grid-column": `${S}/${C}`
                    }
                }
            }
        })
    },
    ji = ({
        blockData: e,
        siteElements: n,
        shouldBuildResponsive: t = !0
    } = {}) => {
        const a = A(t),
            r = u(() => e.value.components.map(P => ({ ...n.value[P],
                elementId: P
            }))),
            i = u(() => r ? .value ? .length ? Wi({
                blockElements: r.value,
                elementPositionKey: ta
            }) : null),
            o = u(() => r ? .value ? .length ? Wi({
                blockElements: r.value,
                elementPositionKey: La
            }) : null),
            s = u(() => e.value.mobile ? .minHeight && i.value ? "auto" : `${e.value.mobile?.minHeight||qi}px`),
            l = u(() => e.value.desktop ? .minHeight && o.value ? "auto" : `${e.value.desktop?.minHeight}px`),
            d = u(() => e.value.components.some(P => !n.value[P].mobile)),
            g = u(() => Wn({
                blockElements: r.value,
                elementPositionKey: La,
                buildResponsiveGrid: a.value
            })),
            m = u(() => Fi({
                blockElements: r.value,
                elementPositionKey: La,
                buildResponsiveGrid: a.value
            })),
            p = u(() => Fi({
                blockElements: r.value,
                elementPositionKey: ta,
                buildResponsiveGrid: a.value
            })),
            f = u(() => Gi({
                blockElements: r.value,
                elementPositionKey: ta
            })),
            b = u(() => Wn({
                blockElements: r.value,
                elementPositionKey: ta,
                buildResponsiveGrid: a.value,
                responsiveRows: f.value,
                lowestElementBottom: i.value,
                sectionMinHeight: e.value.mobile ? .minHeight
            })),
            S = u(() => Wn({
                blockElements: r.value,
                elementPositionKey: ta,
                buildResponsiveGrid: a.value
            })),
            C = u(() => Gi({
                blockElements: r.value,
                elementPositionKey: La
            })),
            w = u(() => Wn({
                blockElements: r.value,
                elementPositionKey: La,
                buildResponsiveGrid: a.value,
                responsiveRows: C.value,
                lowestElementBottom: o.value,
                sectionMinHeight: e.value.desktop ? .minHeight
            })),
            y = u(() => Ld(r.value, e.value.zindexes)),
            D = u(() => ({
                "--m-grid-template-rows": b.value,
                "--t-grid-template-rows": S.value,
                "--small-desktop-grid-template-rows": w.value,
                "--grid-template-rows": g.value,
                "--m-grid-template-columns": p.value,
                "--grid-template-columns": m.value,
                "--m-block-min-height": s.value,
                "--t-block-min-height": `${e.value.mobile?.minHeight||qi}px`,
                "--small-desktop-block-min-height": l.value,
                "--block-min-height": `${e.value.desktop.minHeight}px`
            }));
        return {
            blockElements: r,
            layoutElements: y,
            buildResponsiveGrid: a,
            layoutCSSVars: D,
            isMobileLegacy: d
        }
    },
    Ad = le({
        name: "LayoutElementWrapper",
        props: {
            elementData: {
                type: Object,
                required: !0
            },
            isForcedOnTop: {
                type: Boolean,
                default: !1
            },
            isMobileLegacy: {
                type: Boolean,
                default: !1
            },
            isMobileView: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            settings() {
                return this.elementData.settings
            },
            styles() {
                return this.settings.styles
            },
            innerBackgroundValue() {
                const {
                    innerBackground: e
                } = this.elementData;
                if (!e) return {};
                const n = e[e.current];
                return e.current !== "image" ? {
                    "--gridItemInnerBackground": n
                } : {
                    "--gridItemInnerBackground": `url(${n})`,
                    "--gridItemInnerBackgroundOverlayOpacity": "overlay-opacity" in e ? e["overlay-opacity"] : null
                }
            },
            isHiddenDesktop() {
                return this.elementData.desktop.isHidden
            },
            isHiddenMobile() {
                return this.elementData.mobile.isHidden
            },
            computedStyles() {
                return { ...Kt(this.styles),
                    ...this.innerBackgroundValue,
                    ...this.isHiddenDesktop && !this.isMobileView && {
                        "--hidden-element-z-index": 0
                    },
                    ...this.isHiddenMobile && this.isMobileView && {
                        "--m-hidden-element-z-index": 0
                    },
                    ...this.isForcedOnTop && {
                        "--z-index": Gu
                    }
                }
            }
        }
    });

function Bd(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(["layout-element", {
            "layout-element--legacy": e.isMobileLegacy,
            "layout-element--layout": !e.isMobileLegacy
        }]),
        style: Re(e.computedStyles)
    }, [he(e.$slots, "default")], 6)
}
const Rd = oe(Ad, [
        ["render", Bd]
    ]),
    $d = le({
        __name: "GridButton",
        props: {
            tagName: {
                default: "a"
            },
            href: {
                default: null
            },
            target: {
                default: null
            },
            rel: {
                default: null
            },
            type: {
                default: "primary"
            },
            buttonType: {
                default: null
            },
            content: {
                default: ""
            },
            isDisabled: {
                type: Boolean,
                default: !1
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            fontSizeMobile: {
                default: null
            },
            fontSizeDesktop: {
                default: null
            },
            fontFamily: {
                default: null
            },
            fontWeight: {
                default: null
            },
            borderWidth: {
                default: null
            },
            borderRadius: {
                default: null
            },
            backgroundColor: {
                default: null
            },
            fontColor: {
                default: null
            },
            borderColor: {
                default: null
            },
            backgroundColorHover: {
                default: null
            },
            fontColorHover: {
                default: null
            },
            borderColorHover: {
                default: null
            },
            mobileElementWidth: {
                default: 0
            },
            mobileElementHeight: {
                default: 0
            },
            isInBuilder: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["click", "drag", "dragstart"],
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                a = u(() => `${t.mobileElementWidth*100/sa}vw`),
                r = u(() => `${t.mobileElementHeight*100/sa}vw`),
                i = u(() => ({
                    "--font-size-mobile": t.fontSizeMobile ? `${t.fontSizeMobile}px` : null,
                    "--font-size-desktop": t.fontSizeDesktop ? `${t.fontSizeDesktop}px` : null,
                    "--font-family": t.fontFamily,
                    "--font-weight": t.fontWeight,
                    "--border-radius": t.borderRadius === 0 || t.borderRadius ? `${t.borderRadius}px` : null,
                    "--border-width": t.borderWidth === 0 || t.borderWidth ? `${t.borderWidth}px` : "0px",
                    "--background-color": t.backgroundColor,
                    "--font-color": t.fontColor,
                    "--border-color": t.borderColor || "rgb(26, 26, 26)",
                    "--background-color-hover": t.backgroundColorHover,
                    "--font-color-hover": t.fontColorHover,
                    "--border-color-hover": t.borderColorHover,
                    "--m-height": t.isInBuilder ? "100%" : r.value,
                    "--m-width": t.isInBuilder ? "100%" : a.value
                })),
                o = u(() => ({
                    "grid-button--empty": !t.content,
                    [`grid-button--${t.type}`]: t.type,
                    loading: t.isLoading
                })),
                s = {
                    props: t,
                    mobileWidthCSSVar: a,
                    mobileHeightCSSVar: r,
                    buttonCSSVars: i,
                    computedClass: o
                };
            return Object.defineProperty(s, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), s
        }
    });

function Nd(e, n, t, a, r, i) {
    return c(), F(sn(t.tagName), {
        type: t.buttonType,
        name: t.buttonType,
        href: t.href,
        disabled: t.isDisabled,
        target: t.target,
        rel: t.rel,
        class: J(["grid-button", a.computedClass]),
        "aria-hidden": t.isLoading,
        style: Re(a.buttonCSSVars),
        onClick: n[0] || (n[0] = o => e.$emit("click", o)),
        onDrag: n[1] || (n[1] = o => e.$emit("drag", o)),
        onDragstart: n[2] || (n[2] = o => e.$emit("dragstart", o))
    }, {
        default: _e(() => [Be(X(t.content), 1)]),
        _: 1
    }, 40, ["type", "name", "href", "disabled", "target", "rel", "class", "aria-hidden", "style"])
}
const Va = oe($d, [
        ["render", Nd],
        ["__scopeId", "data-v-4a176f12"]
    ]),
    On = (e, {
        href: n
    } = {}) => ({
        href: n,
        type: u(() => e.data.settings ? .type),
        fontSizeMobile: u(() => e.data.mobile ? .fontSize),
        fontSizeDesktop: u(() => e.data.desktop ? .fontSize),
        fontFamily: u(() => e.data.fontFamily),
        fontWeight: u(() => e.data.fontWeight),
        borderWidth: u(() => e.data.borderWidth),
        borderRadius: u(() => e.data.borderRadius),
        backgroundColor: u(() => e.data.backgroundColor),
        fontColor: u(() => e.data.fontColor),
        borderColor: u(() => e.data.borderColor),
        backgroundColorHover: u(() => e.data.backgroundColorHover),
        fontColorHover: u(() => e.data.fontColorHover),
        borderColorHover: u(() => e.data.borderColorHover),
        buttonType: u(() => e.data.settings.isFormButton ? "submit" : null),
        tagName: u(() => e.data.settings.isFormButton ? "button" : "a"),
        target: u(() => e.data.target),
        rel: u(() => e.data.rel),
        content: u(() => e.data.content),
        mobileElementWidth: u(() => e.data.mobile.width),
        mobileElementHeight: u(() => e.data.mobile.height)
    }),
    xd = {
        __name: "GridButtonProviderUser",
        props: {
            data: {
                type: Object,
                required: !0
            },
            currentLocale: {
                type: String,
                required: !0
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    getButtonHref: a
                } = Je(),
                {
                    tagName: r,
                    href: i,
                    target: o,
                    rel: s,
                    type: l,
                    buttonType: d,
                    content: g,
                    fontSizeMobile: m,
                    fontSizeDesktop: p,
                    fontFamily: f,
                    fontWeight: b,
                    borderWidth: S,
                    borderRadius: C,
                    backgroundColor: w,
                    fontColor: y,
                    borderColor: D,
                    backgroundColorHover: P,
                    fontColorHover: M,
                    borderColorHover: R
                } = On(t, {
                    href: u(() => a({
                        isFormButton: t.data.settings.isFormButton,
                        linkedPageId: t.data.linkedPageId,
                        linkType: t.data.linkType,
                        href: t.data.href
                    }))
                }),
                $ = {
                    props: t,
                    getButtonHref: a,
                    tagName: r,
                    href: i,
                    target: o,
                    rel: s,
                    type: l,
                    buttonType: d,
                    content: g,
                    fontSizeMobile: m,
                    fontSizeDesktop: p,
                    fontFamily: f,
                    fontWeight: b,
                    borderWidth: S,
                    borderRadius: C,
                    backgroundColor: w,
                    fontColor: y,
                    borderColor: D,
                    backgroundColorHover: P,
                    fontColorHover: M,
                    borderColorHover: R,
                    computed: u,
                    get useSiteGlobal() {
                        return Je
                    },
                    GridButton: Va,
                    get useGridButton() {
                        return On
                    }
                };
            return Object.defineProperty($, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), $
        }
    };

function Hd(e, n, t, a, r, i) {
    return c(), F(a.GridButton, {
        "tag-name": a.tagName,
        href: a.href,
        target: a.target,
        rel: a.rel,
        type: a.type,
        "button-type": a.buttonType,
        content: a.content,
        "font-size-mobile": a.fontSizeMobile,
        "font-size-desktop": a.fontSizeDesktop,
        "font-family": a.fontFamily,
        "font-weight": a.fontWeight,
        "border-width": a.borderWidth,
        "border-radius": a.borderRadius,
        "background-color": a.backgroundColor,
        "font-color": a.fontColor,
        "border-color": a.borderColor,
        "background-color-hover": a.backgroundColorHover,
        "font-color-hover": a.fontColorHover,
        "border-color-hover": a.borderColorHover,
        "mobile-element-width": t.mobileElementWidth,
        "mobile-element-height": t.mobileElementHeight
    }, null, 8, ["tag-name", "href", "target", "rel", "type", "button-type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const Vd = oe(xd, [
        ["render", Hd]
    ]),
    Ud = (e, n) => {
        const t = u(() => n.ecommerce ? .products),
            a = u(() => e.data.settings ? .productId),
            r = u(() => e.data.settings ? .productVariantId);
        return {
            storeProducts: t,
            productId: a,
            productVariantId: r
        }
    },
    Mr = A(""),
    zi = A({}),
    xt = () => ({
        openEcommerceModal: a => {
            Mr.value = a
        },
        closeEcommerceModal: () => {
            Mr.value = null
        },
        openEcommerceModalName: Mr,
        productPreviewData: zi,
        setProductPreviewData: a => {
            zi.value = a
        }
    }),
    Ro = "https://cdn.zyrosite.com/cdn-builder-placeholders",
    $t = `${Ro}/ecommerce-product`,
    et = `${Ro}/instagram`,
    Yd = `${Ro}/password-page`,
    da = {
        id: -1,
        title: "Product name",
        subtitle: null,
        description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
        images: [],
        options: [],
        product_collections: [],
        ribbon_text: null,
        site_product_selection: null,
        type: {
            value: "physical"
        },
        thumbnail: null,
        variants: [{
            id: "",
            manage_inventory: !1,
            prices: [{
                amount: 0,
                currency_code: "USD",
                sale_amount: null,
                currency: {
                    code: "USD",
                    decimal_digits: 2,
                    template: "$$1",
                    name: "US Dollar",
                    symbol: "$",
                    symbol_native: "$",
                    name_plural: "US dollars",
                    rounding: 0,
                    min_amount: 0
                }
            }],
            options: []
        }],
        purchasable: !0
    };
({ ...da,
    images: `${$t}`,
    thumbnail: `${$t}`
}, { ...da,
    images: `${$t}`,
    thumbnail: `${$t}`
}), { ...da,
    images: `${$t}`,
    thumbnail: `${$t}`
}, { ...da,
    images: `${$t}`,
    thumbnail: `${$t}`
}, { ...da,
    images: `${$t}`,
    thumbnail: `${$t}`
}, { ...da,
    images: `${$t}`,
    thumbnail: `${$t}`
};
const so = "donation",
    Ht = "booking",
    lo = "hours",
    qd = ["BlockEcommerceProduct", "BlockEcommerceProductList"],
    Qi = {
        INSUFFICIENT_INVENTORY: "insufficient_inventory",
        BOOKING_UNAVAILABLE: "booking_slot_not_available"
    },
    Wd = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5",
    uo = "shopping-cart-items",
    Fd = 864e5,
    Tl = "site_product_selection",
    $o = "lowest_price_first",
    ja = 160,
    Hn = "https://api-ecommerce.zyro.com/store",
    Gd = async (e, n) => {
        const t = n.map(i => `ids[]=${i}`).join("&");
        return (await (await fetch(`${Hn}/${e}/products?${t}`)).json()).products
    },
    jd = async (e, n) => {
        const t = n.map(i => `product_ids[]=${i}`).join("&");
        return (await (await fetch(`${Hn}/${e}/variants?fields=inventory_quantity&${t}`)).json()).variants
    },
    zd = async ({
        items: e,
        successUrl: n,
        cancelUrl: t,
        locale: a,
        storeId: r
    }) => fetch(`${Hn}/${r}/checkout`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
            items: e,
            successUrl: n,
            cancelUrl: t,
            locale: a
        })
    }).then(async i => {
        const o = await i.json();
        if (i.ok) return o.url;
        throw o
    }),
    Qd = async (e, n) => fetch(`${Hn}/time-slots`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
            booking_event_id: e,
            time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            date: n
        })
    }).then(async t => {
        const a = await t.json();
        if (t.ok) return a.slots;
        throw a
    }),
    Kd = async ({
        bookingId: e,
        fromDate: n,
        toDate: t
    }) => fetch(`${Hn}/availability`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        credentials: "omit",
        body: JSON.stringify({
            booking_event_id: e,
            time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            from_date: n,
            to_date: t
        })
    }).then(async a => {
        const r = await a.json();
        if (a.ok) return r.disabled_dates;
        throw r
    }),
    Ja = e => {
        const {
            openEcommerceModal: n
        } = xt(), {
            meta: t,
            ecommerceShoppingCart: a
        } = Je();
        let r = "";
        const i = A("");
        Le(() => {
            r = t.value ? .ecommerceStoreId, i.value = `${window.location.origin}${window.location.pathname}`
        });

        function o(d) {
            const g = d.some(f => f.type.value === so),
                m = d.some(f => f.type.value === Ht);
            let p = "";
            return m ? p = `&product=${Ht}` : g && (p = `&product=${so}`), `${i.value}?open-modal=EcommerceCheckoutSuccess${p}`
        }
        async function s(d) {
            const g = d.reduce((f, b) => f.find(C => C.variant_id === b.variants[0].id) ? f.map(C => C.variant_id === b.variants[0].id ? {
                    variant_id: C.variant_id,
                    quantity: C.quantity + 1
                } : C) : [...f, {
                    variant_id: b.variants[0].id,
                    quantity: 1,
                    time_slot: b.variants[0].booking_event ? .time_slot,
                    time_zone: b.variants[0].booking_event ? .time_zone
                }], []),
                m = a.value ? .lang || "en";
            let p = await zd({
                items: g,
                cancelUrl: i.value,
                successUrl: o(d),
                locale: m,
                storeId: r
            });
            return p = new URL(p), p.searchParams.set("lang", m), p.toString()
        }
        async function l(d) {
            if (!r) {
                n("EcommerceCheckoutFailed");
                return
            }
            try {
                const g = await s(d);
                window.location.assign(g)
            } catch (g) {
                g.code === Qi.INSUFFICIENT_INVENTORY ? n("EcommerceOutOfStock") : g.code === Qi.BOOKING_UNAVAILABLE ? n("EcommerceBookingUnavailable") : n("EcommerceCheckoutFailed")
            }
        }
        return {
            initiateCheckout: l,
            storeId: r
        }
    },
    Ki = e => e.ecommerceStoreId ? ? e.demoEcommerceStoreId ? ? Wd,
    Zi = () => {
        const e = window.localStorage.getItem(uo);
        if (!e) return [];
        const n = JSON.parse(e);
        return n.payload.length ? Date.now() > n.expiry ? (window.localStorage.removeItem(uo), []) : n.payload : []
    },
    Ya = A([]),
    dn = A([]),
    mn = A([]),
    Xi = A(null),
    Ji = A(!1),
    es = A(!1),
    ts = A(!1),
    as = A(!1),
    Zd = A(!1),
    Vt = () => {
        const {
            meta: e,
            pages: n
        } = Je(), t = u(() => e.value[ju] === zu), a = u(() => !!e.value ? .ecommerceStoreId), r = u(() => dn.value.reduce((y, D) => y.find(M => M.product.variants[0].id === D.variants[0].id) ? y.map(M => M.product.variants[0].id === D.variants[0].id ? { ...M,
            quantity: M.quantity + 1
        } : M) : [...y, {
            product: D,
            quantity: 1
        }], [])), i = (y, D) => {
            if (dn.value.length >= ja) return !1;
            const P = Ya.value.find(R => R.id === y),
                M = P ? .variants.find(R => R.id === D);
            if (!P || !M) return !1;
            if (M.manage_inventory) {
                const $ = r.value.find(G => G.product.id === y && G.product.variants.some(T => T.id === M.id)) ? .quantity || 0,
                    Z = mn.value.find(G => G.id === D) ? .inventory_quantity;
                return $ < Z
            }
            return !0
        }, o = u(() => Object.values(n.value).filter(y => y.type === dl)), s = y => {
            ts.value = y
        }, l = y => {
            as.value = y
        }, d = y => {
            es.value = y
        }, g = y => {
            Ya.value = y
        }, m = y => {
            Ji.value = y
        }, p = y => {
            dn.value = y || [];
            const D = {
                payload: y,
                expiry: Date.now() + Fd
            };
            window.localStorage.setItem(uo, JSON.stringify(D))
        }, f = y => {
            Xi.value = y
        }, b = y => {
            mn.value = y
        }, S = ({
            cartItems: y
        }) => (y || dn.value).reduce((D, P) => {
            const M = Ya.value.find(L => L.id === P.id),
                R = M ? .variants.find(L => P.variants.some(H => L.id === H.id)),
                $ = D.reduce((L, H) => H.variants.some(z => z.id === R ? .id) ? L + 1 : L, 0),
                Z = mn.value.find(L => L.id === R ? .id) ? .inventory_quantity,
                G = !R ? .manage_inventory || $ < Z,
                T = M ? .type.value === Ht ? { ...P.variants[0].booking_event,
                    time_slot: P.variants[0].booking_event.time_slot,
                    date: P.variants[0].booking_event.date
                } : null;
            return M && R && G ? [...D, { ...M,
                variants: [{ ...R,
                    booking_event: T
                }]
            }] : D
        }, []), C = async y => {
            const D = Ki(e.value);
            if (!D) return;
            try {
                const M = await jd(D, y),
                    R = [...mn.value, ...M];
                b(R)
            } catch (M) {
                console.error(M)
            }
            const P = await S({
                cartItems: Zi()
            });
            p(P)
        };
        return {
            products: Ya,
            shoppingCartItems: dn,
            selectedBookingProductId: Xi,
            variantsQuantity: mn,
            isShoppingCartOpen: Ji,
            isCheckoutLoading: es,
            isLoading: ts,
            isLoaded: as,
            isProductPageLoaded: Zd,
            isStoreTypeZyro: t,
            isEcommerceStoreCreated: a,
            quantifiedCartItemsList: r,
            canAddToCart: i,
            productPages: o,
            setIsLoading: s,
            setIsLoaded: l,
            setIsCheckoutLoading: d,
            setStoreProducts: g,
            setShoppingCartOpen: m,
            setShoppingCartItems: p,
            setSelectedBookingId: f,
            setVariantsQuantity: b,
            fetchProducts: async y => {
                const D = Ki(e.value);
                if (!D) return;
                const R = [...Zi().map($ => $.id), ...y].reduce(($, Z) => Ya.value.some(G => G.id === Z) ? $ : [...$, Z], []);
                if (R.length) {
                    l(!1), s(!0);
                    try {
                        const Z = (await Gd(D, R)).reduce((G, T) => G.some(H => H.id === T.id) ? G : [...G, T], [...Ya.value]);
                        g(Z), await C(R)
                    } catch ($) {
                        console.error($)
                    } finally {
                        s(!1), l(!0)
                    }
                }
            },
            updateVariantsQuantity: C,
            refreshCartItems: S
        }
    },
    Xd = le({
        name: "GridEcommerceButtonProviderUser",
        components: {
            GridButton: Va
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                getButtonHref: n
            } = Je(), {
                canAddToCart: t,
                isShoppingCartOpen: a,
                products: r,
                shoppingCartItems: i,
                setShoppingCartOpen: o,
                setShoppingCartItems: s,
                setSelectedBookingId: l
            } = Vt(), {
                initiateCheckout: d
            } = Ja(), {
                openEcommerceModal: g
            } = xt(), {
                content: m,
                type: p,
                fontSizeMobile: f,
                fontSizeDesktop: b,
                fontFamily: S,
                fontWeight: C,
                borderRadius: w,
                backgroundColor: y,
                fontColor: D,
                borderColor: P,
                borderWidth: M,
                backgroundColorHover: R,
                fontColorHover: $,
                borderColorHover: Z
            } = On(e, {
                href: u(() => n({
                    isFormButton: e.data.settings.isFormButton,
                    linkedPageId: e.data.linkedPageId,
                    linkType: e.data.linkType,
                    href: e.data.href
                }))
            }), {
                productId: G,
                productVariantId: T,
                storeProducts: L
            } = Ud(e, {
                ecommerce: {
                    products: r.value
                }
            }), H = u(() => r.value.find(N => N.id === G.value)), z = u(() => H.value ? .type.value === Ht), V = u(() => z.value && !!i.value ? .some(N => N.id === G.value)), I = u(() => V.value || !t(G.value, T.value));
            return {
                openEcommerceModal: g,
                productId: G,
                productVariantId: T,
                content: m,
                type: p,
                fontSizeMobile: f,
                fontSizeDesktop: b,
                fontFamily: S,
                fontWeight: C,
                borderRadius: w,
                borderWidth: M,
                backgroundColor: y,
                fontColor: D,
                borderColor: P,
                backgroundColorHover: R,
                fontColorHover: $,
                borderColorHover: Z,
                initiateCheckout: d,
                shoppingCartItems: i,
                storeProducts: L,
                isAddToCartDisabled: I,
                product: H,
                canAddToCart: t,
                isShoppingCartOpen: a,
                setShoppingCartOpen: o,
                setShoppingCartItems: s,
                setSelectedBookingId: l
            }
        },
        data() {
            return {
                isLoading: !1
            }
        },
        methods: {
            async handleClick() {
                if (this.product ? .type.value === Ht) {
                    this.setSelectedBookingId(this.productId), this.openEcommerceModal("EcommerceBookingEventSelect");
                    return
                }
                if ($a() || this.isInPreviewMode) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                const e = this.product ? .variants.find(t => t.id === this.productVariantId),
                    n = { ...this.product,
                        variants: [e]
                    };
                this.isCartVisible ? (this.setShoppingCartItems([...this.shoppingCartItems, n]), this.manageCartOpenState()) : (this.isLoading = !0, await this.initiateCheckout([n]).then(() => {
                    this.isLoading = !1
                }))
            },
            manageCartOpenState() {
                this.isShoppingCartOpen || this.setShoppingCartOpen(!0)
            }
        }
    });

function Jd(e, n, t, a, r, i) {
    const o = Te("GridButton"),
        s = Ge("qa");
    return ce((c(), F(o, {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: e.handleClick
    }, null, 8, ["content", "type", "is-disabled", "is-loading", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-radius", "border-width", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height", "onClick"])), [
        [s, "button-ecommerce-checkout"]
    ])
}
const em = oe(Xd, [
        ["render", Jd]
    ]),
    tm = le({
        __name: "GridEmbed",
        props: {
            srcdoc: {
                default: ""
            },
            shouldRender: {
                type: Boolean,
                default: !1
            },
            height: {
                default: null
            },
            id: {}
        },
        emits: ["iframe-height-updated"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n();
            const a = e,
                r = t,
                i = A(0),
                o = A(),
                s = u(() => a.height && i.value > a.height ? i.value : a.height || i.value),
                l = u(() => ({
                    "--height": `${s.value}px`
                })),
                g = {
                    props: a,
                    emit: r,
                    observedHeight: i,
                    gridEmbedIframeRef: o,
                    embedHeight: s,
                    computedStyles: l,
                    observeGridEmbed: () => {
                        const m = o.value ? .contentWindow ? .document.querySelector("html");
                        new ResizeObserver(([{
                            contentRect: f
                        }]) => {
                            requestAnimationFrame(() => {
                                const {
                                    height: b
                                } = f;
                                b !== i.value && (i.value = b, r("iframe-height-updated", i.value))
                            })
                        }).observe(m)
                    }
                };
            return Object.defineProperty(g, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), g
        }
    }),
    am = ["id"],
    nm = ["srcdoc"];

function rm(e, n, t, a, r, i) {
    const o = Ge("qa");
    return ce((c(), h("div", {
        id: t.id,
        class: "grid-embed",
        style: Re(a.computedStyles)
    }, [t.shouldRender ? (c(), h("iframe", {
        key: 0,
        ref: "gridEmbedIframeRef",
        class: "grid-embed__iframe",
        srcdoc: t.srcdoc,
        title: "custom code element",
        onLoad: a.observeGridEmbed
    }, null, 40, nm)) : O("", !0)], 12, am)), [
        [o, "builder-gridelement-gridembed"]
    ])
}
const om = oe(tm, [
        ["render", rm]
    ]),
    im = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`,
    sm = e => {
        const n = document.createElement("div");
        n.innerHTML = e;
        const t = [...n.children].reduce((a, r) => r.tagName === "STYLE" ? { ...a,
            styles: `${a.styles} ${r.outerHTML}`
        } : r.tagName === "SCRIPT" ? { ...a,
            scripts: `${a.scripts} ${r.outerHTML}`
        } : { ...a,
            html: `${a.html} ${r.outerHTML}`
        }, {
            styles: im,
            scripts: "",
            html: ""
        });
        return `<!DOCTYPE html>
	<head>${t.styles}</head>
	<body>${t.html}${t.scripts}</body>
</html>`
    },
    lm = "500px",
    Pl = (e, n = lm) => {
        const t = A(!1),
            a = A(null);
        try {
            Le(() => {
                a.value = new IntersectionObserver(([{
                    isIntersecting: i
                }]) => {
                    i && (t.value = !0, a.value ? .disconnect())
                }, {
                    threshold: 0,
                    rootMargin: n
                })
            });
            const r = Po(() => {
                if (e.value && a.value) {
                    const i = e.value.$el ? ? e.value;
                    a.value.observe(i), r()
                }
            });
            Et(() => a.value ? .disconnect())
        } catch (r) {
            console.error(r)
        }
        return {
            isObserved: t
        }
    },
    um = le({
        components: {
            GridEmbed: om
        },
        props: {
            data: {
                type: Object,
                default: () => ({})
            },
            id: {
                type: String,
                default: null
            }
        },
        setup(e) {
            const n = A(null),
                {
                    isObserved: t
                } = Pl(n),
                a = A(null);
            return Le(() => {
                a.value = sm(e.data.content)
            }), {
                gridEmbedRef: n,
                isObserved: t,
                srcdoc: a
            }
        }
    });

function cm(e, n, t, a, r, i) {
    const o = Te("GridEmbed");
    return c(), F(o, {
        id: e.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        height: e.data.settings.styles.height
    }, null, 8, ["id", "should-render", "srcdoc", "height"])
}
const dm = oe(um, [
        ["render", cm]
    ]),
    Or = ({
        value: e = "",
        validation: n,
        validationMessages: t
    }) => {
        const a = [];
        return n.includes("required") && !e.replace(/ /g, "") && a.push(t.required), e.replace(/ /g, "") && (n.includes("email") && !Nc.test(e) && a.push(t.email), n.includes("phone") && !xc.test(e) && a.push(t.phone)), a
    },
    mm = le({
        props: {
            modelValue: {
                type: String,
                default: ""
            },
            label: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            isRequired: {
                type: Boolean,
                default: !1
            },
            isRequiredAsteriskVisible: {
                type: Boolean,
                default: !0
            },
            isInteractive: {
                type: Boolean,
                default: !0
            },
            areErrorsShown: {
                type: Boolean,
                default: !1
            },
            validationErrors: {
                type: Array,
                required: !1,
                default: () => []
            },
            theme: {
                type: String,
                required: !0
            },
            tag: {
                type: String,
                default: "input",
                validator: e => ["textarea", "input"].includes(e)
            }
        },
        emits: ["update:model-value"],
        data() {
            return {
                gridInputValue: ""
            }
        },
        computed: {
            computedClasses() {
                return [{
                    "input__component--textarea": this.tag === "textarea"
                }, {
                    "input__component--read-only": !this.isInteractive
                }, `input__component--${this.theme}`]
            }
        }
    }),
    gm = ["placeholder", "value", "readonly", "tabindex"],
    pm = ["placeholder", "value", "readonly", "tabindex"],
    vm = {
        key: 2
    };

function hm(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(["input", `input--${e.theme}`])
    }, [E("label", {
        class: J(["input__label", `input__label--${e.theme}`])
    }, X(e.label) + X(e.isRequired && e.isRequiredAsteriskVisible ? "*" : ""), 3), e.tag === "input" ? (c(), h("input", {
        key: 0,
        placeholder: e.placeholder,
        type: "text",
        class: J(["input__component", e.computedClasses]),
        value: e.modelValue,
        readonly: !e.isInteractive,
        tabindex: e.isInteractive ? 0 : -1,
        onInput: n[0] || (n[0] = o => e.$emit("update:model-value", o.target.value)),
        onClick: n[1] || (n[1] = Ee(() => {}, ["prevent"])),
        onDragstart: n[2] || (n[2] = Ee(() => {}, ["prevent"])),
        onDrag: n[3] || (n[3] = Ee(() => {}, ["prevent"]))
    }, null, 42, gm)) : O("", !0), e.tag === "textarea" ? (c(), h("textarea", {
        key: 1,
        placeholder: e.placeholder,
        type: "text",
        class: J(["input__component", e.computedClasses]),
        value: e.modelValue,
        readonly: !e.isInteractive,
        tabindex: e.isInteractive ? 0 : -1,
        onInput: n[4] || (n[4] = o => e.$emit("update:model-value", o.target.value)),
        onClick: n[5] || (n[5] = Ee(() => {}, ["prevent"])),
        onDragstart: n[6] || (n[6] = Ee(() => {}, ["prevent"])),
        onDrag: n[7] || (n[7] = Ee(() => {}, ["prevent"]))
    }, null, 42, pm)) : O("", !0), e.validationErrors.length && e.areErrorsShown ? (c(), h("div", vm, [(c(!0), h(pe, null, ke(e.validationErrors, o => (c(), h("p", {
        key: o,
        class: "input__error-message text-body-2"
    }, X(o), 1))), 128))])) : O("", !0)], 2)
}
const fm = oe(mm, [
        ["render", hm],
        ["__scopeId", "data-v-ee2fb8ad"]
    ]),
    ym = le({
        name: "GridSelectInput",
        props: {
            name: {
                type: String,
                required: !0
            },
            id: {
                type: String,
                required: !0
            },
            tag: {
                type: String,
                required: !0
            },
            selectedOptions: {
                type: Array,
                required: !0
            },
            isInteractive: {
                type: Boolean,
                default: !0
            },
            theme: {
                type: String,
                required: !0
            },
            isSelected: {
                type: Boolean,
                required: !0
            }
        },
        emits: ["select-option", "remove-selection", "add-selection"],
        computed: {
            labelClasses() {
                return [{
                    "input__label--read-only": !this.isInteractive
                }, `select-input--${this.theme}`]
            },
            inputClasses() {
                return [{
                    "input__component--read-only": !this.isInteractive
                }]
            }
        },
        methods: {
            selectOption() {
                if (!this.isInteractive) return;
                const e = {
                    id: this.id,
                    value: this.name
                };
                this.tag !== "checkbox" ? this.$emit("select-option", e) : this.isSelected ? this.$emit("remove-selection", e) : this.$emit("add-selection", e)
            }
        }
    }),
    bm = ["for"],
    _m = ["id", "type", "checked", "tabindex"];

function wm(e, n, t, a, r, i) {
    return c(), h("label", {
        class: J(["select-input", e.labelClasses]),
        for: e.id
    }, [(c(), h("input", {
        id: e.id,
        key: e.isSelected,
        type: e.tag,
        class: J(["select-input__input", e.inputClasses]),
        checked: e.isSelected,
        tabindex: e.isInteractive ? 0 : -1,
        onInput: n[0] || (n[0] = Ee((...o) => e.selectOption && e.selectOption(...o), ["stop"])),
        onDragstart: n[1] || (n[1] = Ee(() => {}, ["prevent"])),
        onDrag: n[2] || (n[2] = Ee(() => {}, ["prevent"]))
    }, null, 42, _m)), Be(" " + X(e.name), 1)], 10, bm)
}
const km = oe(ym, [
        ["render", wm],
        ["__scopeId", "data-v-3b89e969"]
    ]),
    Sm = le({
        name: "GridSelectInputsWrapper",
        components: {
            GridSelectInput: km
        },
        props: {
            label: {
                type: String,
                default: null
            },
            isRequired: {
                type: Boolean,
                default: !1
            },
            isTextArea: {
                type: Boolean,
                default: !1
            },
            isInteractive: {
                type: Boolean,
                default: !0
            },
            areErrorsShown: {
                type: Boolean,
                default: !1
            },
            validationErrors: {
                type: Array,
                required: !1,
                default: () => []
            },
            theme: {
                type: String,
                required: !0
            },
            tag: {
                type: String,
                required: !0,
                validator: e => ["radio", "checkbox"].includes(e)
            },
            options: {
                type: Array,
                required: !0
            }
        },
        emits: ["input"],
        data() {
            return {
                selectedOptions: []
            }
        },
        watch: {
            selectedOptions() {
                const e = this.selectedOptions.map(({
                    value: n
                }) => n).toString();
                this.$emit("input", e)
            }
        },
        methods: {
            isSelected(e) {
                return this.selectedOptions.some(({
                    id: n
                }) => n === e)
            },
            removeSelection(e) {
                const n = this.selectedOptions.filter(t => t.id !== e.id);
                this.selectedOptions = n
            },
            addSelection(e) {
                this.selectedOptions = [...this.selectedOptions, e]
            },
            selectOption(e) {
                this.selectedOptions = [e]
            }
        }
    }),
    Cm = {
        key: 0
    };

function Tm(e, n, t, a, r, i) {
    const o = Te("GridSelectInput");
    return c(), h("div", {
        class: J(["input", `input--${e.theme}`])
    }, [E("label", {
        class: J(["input__label input__label--read-only", [`input__label--${e.theme}`]])
    }, X(e.label) + X(e.isRequired ? "*" : ""), 3), (c(!0), h(pe, null, ke(e.options, s => (c(), h("div", {
        key: s.id,
        class: "input__options"
    }, [De(o, {
        id: s.id,
        name: s.value,
        tag: e.tag,
        "is-selected": e.isSelected(s.id),
        theme: e.theme,
        "is-interactive": e.isInteractive,
        "selected-options": e.selectedOptions,
        onRemoveSelection: e.removeSelection,
        onAddSelection: e.addSelection,
        onSelectOption: e.selectOption
    }, null, 8, ["id", "name", "tag", "is-selected", "theme", "is-interactive", "selected-options", "onRemoveSelection", "onAddSelection", "onSelectOption"])]))), 128)), e.validationErrors.length && e.areErrorsShown ? (c(), h("div", Cm, [(c(!0), h(pe, null, ke(e.validationErrors, s => (c(), h("p", {
        key: s,
        class: "input__error-message text-body-2"
    }, X(s), 1))), 128))])) : O("", !0)], 2)
}
const Pm = oe(Sm, [
        ["render", Tm],
        ["__scopeId", "data-v-d57bc6de"]
    ]),
    Im = {
        __name: "GridForm",
        props: {
            id: {
                type: String,
                required: !0
            },
            settings: {
                type: Object,
                required: !0
            },
            submitButtonData: {
                type: Object,
                required: !0
            },
            formId: {
                type: String,
                default: null
            },
            isError: {
                type: Boolean,
                default: !1
            },
            showSuccessMessage: {
                type: Boolean,
                default: !1
            },
            isUserSite: {
                type: Boolean,
                default: !1
            },
            theme: {
                type: String,
                validator: e => ["dark", "light"].includes(e),
                default: "light"
            },
            formJustify: {
                type: String,
                default: null
            },
            formButtonJustifySelf: {
                type: String,
                default: null
            },
            mobileFormButtonJustifySelf: {
                type: String,
                default: null
            },
            formBackgroundColor: {
                type: String,
                default: null
            },
            formBorderWidth: {
                type: String,
                default: null
            },
            formBorderColor: {
                type: String,
                default: null
            },
            formBorderRadius: {
                type: String,
                default: null
            },
            formPadding: {
                type: String,
                default: null
            },
            submitButtonBackgroundColor: {
                type: String,
                default: null
            },
            submitButtonBackgroundColorHover: {
                type: String,
                default: null
            },
            submitButtonFontColor: {
                type: String,
                default: null
            },
            submitButtonFontColorHover: {
                type: String,
                default: null
            },
            submitButtonBorderColor: {
                type: String,
                default: null
            },
            submitButtonBorderColorHover: {
                type: String,
                default: null
            },
            submitButtonFontFamily: {
                type: String,
                default: null
            },
            submitButtonFontWeight: {
                type: Number,
                default: null
            },
            submitButtonFontSizeMobile: {
                type: Number,
                default: null
            },
            submitButtonFontSizeDesktop: {
                type: Number,
                default: null
            },
            submitButtonBorderWidth: {
                type: Number,
                default: null
            },
            submitButtonBorderRadius: {
                type: Number,
                default: null
            },
            inputFillColor: {
                type: String,
                default: null
            },
            inputFillColorHover: {
                type: String,
                default: null
            },
            formFontFamily: {
                type: String,
                default: null
            },
            formFontWeight: {
                type: Number,
                default: null
            },
            labelTextColor: {
                type: String,
                default: null
            },
            labelTextSize: {
                type: Number,
                default: null
            },
            mobileLabelTextSize: {
                type: Number,
                default: null
            },
            inputTextColor: {
                type: String,
                default: null
            },
            inputTextColorHover: {
                type: String,
                default: null
            },
            inputTextSize: {
                type: Number,
                default: null
            },
            mobileInputTextSize: {
                type: Number,
                default: null
            },
            inputBorderColor: {
                type: String,
                default: null
            },
            inputBorderColorHover: {
                type: String,
                default: null
            },
            inputBorderWidth: {
                type: Number,
                default: null
            },
            inputBorderRadius: {
                type: Number,
                default: null
            },
            elementsVerticalSpacing: {
                type: Number,
                default: null
            },
            mobileElementsVerticalSpacing: {
                type: Number,
                default: null
            }
        },
        emits: ["on-submit"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n();
            const a = e,
                r = t,
                i = A({}),
                o = A({}),
                s = A(!1),
                l = u(() => a.settings.schema.reduce((S, C) => ({ ...S,
                    [C.name]: {
                        validation: C.validation.flat(),
                        validationMessages: C["validation-messages"]
                    }
                }), {})),
                d = u(() => {
                    const S = Number.isInteger(a.elementsVerticalSpacing) ? `${a.elementsVerticalSpacing}px` : null,
                        C = Number.isInteger(a.mobileElementsVerticalSpacing) ? `${a.mobileElementsVerticalSpacing}px` : null;
                    return {
                        "--form-flex": a.formJustify ? null : "0 1 100%",
                        "--form-button-justify-self": a.formButtonJustifySelf,
                        "--m-form-button-justify-self": a.mobileFormButtonJustifySelf,
                        "--form-background-color": a.formBackgroundColor,
                        "--form-border-width": `${a.formBorderWidth}px`,
                        "--form-border-color": a.formBorderColor,
                        "--form-border-radius": `${a.formBorderRadius}px`,
                        "--form-padding": a.formPadding ? `${a.formPadding}px` : null,
                        "--form-font-family": a.formFontFamily,
                        "--form-font-weight": a.formFontWeight,
                        "--input-fill-color": a.inputFillColor,
                        "--input-fill-color--hover": a.inputFillColorHover || a.inputFillColor,
                        "--label-text-color": a.labelTextColor,
                        "--label-text-size": a.labelTextSize ? `${a.labelTextSize}px` : null,
                        "--m-label-text-size": a.mobileLabelTextSize ? `${a.mobileLabelTextSize}px` : null,
                        "--input-text-color": a.inputTextColor,
                        "--input-text-color--hover": a.inputTextColorHover || a.inputTextColor,
                        "--input-text-size": a.inputTextSize ? `${a.inputTextSize}px` : null,
                        "--m-input-text-size": a.mobileInputTextSize ? `${a.mobileInputTextSize}px` : null,
                        "--input-height": a.inputTextSize ? "auto" : "48px",
                        "--input-border-color": a.inputBorderColor,
                        "--input-border-color--hover": a.inputBorderColorHover || a.inputBorderColor,
                        "--input-border-width": a.inputBorderWidth ? `${a.inputBorderWidth}px` : null,
                        "--input-border-radius": a.inputBorderRadius ? `${a.inputBorderRadius}px` : null,
                        "--form-elements-vertical-spacing": S,
                        "--m-form-elements-vertical-spacing": C,
                        "--form-spacing": "var(--formSpacing)",
                        "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
                        "--grid-item-inner-background": "var(--gridItemInnerBackground)"
                    }
                }),
                g = () => a.settings.schema.flatMap(({
                    name: S
                }) => {
                    const C = Or({
                        value: o.value[S] ? .value,
                        ...l.value[S]
                    });
                    return i.value = { ...i.value,
                        [S]: C
                    }, C
                }),
                m = (S, C) => {
                    i.value = { ...i.value,
                        [S]: Or({
                            value: C,
                            ...l.value[S]
                        })
                    }, o.value = { ...o.value,
                        [S]: {
                            value: C,
                            type: a.settings.schema.find(({
                                name: w
                            }) => w === S).validationType || "text"
                        }
                    }
                },
                p = () => {
                    o.value = Object.fromEntries(Object.entries(o.value).map(([S, {
                        value: C,
                        type: w
                    }]) => [S, {
                        value: C.trim(),
                        type: w
                    }]))
                },
                b = {
                    props: a,
                    emit: r,
                    validationErrors: i,
                    formValues: o,
                    areErrorsVisible: s,
                    validationRules: l,
                    formCSSVars: d,
                    validateForm: g,
                    updateField: m,
                    trimFormValues: p,
                    handleSubmit: () => {
                        p();
                        const S = g();
                        s.value = S.length > 0, s.value || r("on-submit", o.value)
                    },
                    computed: u,
                    ref: A,
                    get validateInput() {
                        return Or
                    },
                    GridButton: Va,
                    GridInput: fm,
                    GridSelectInputsWrapper: Pm
                };
            return Object.defineProperty(b, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), b
        }
    },
    Em = ["id"],
    Dm = ["name"];

function Mm(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", {
        id: t.id,
        class: J(["form", {
            "form--single-field": t.settings.type === "singleField"
        }]),
        style: Re(a.formCSSVars)
    }, [E("form", {
        class: J(["form__control", {
            "form__control--invisible": t.showSuccessMessage || t.isError
        }]),
        name: t.formId,
        onSubmit: Ee(a.handleSubmit, ["prevent"])
    }, [(c(!0), h(pe, null, ke(t.settings.schema, s => (c(), h(pe, {
        key: s.id
    }, [s.type === "GridInput" ? ce((c(), F(a.GridInput, {
        key: 0,
        theme: t.theme,
        tag: s.tag,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": a.validationRules[s.name].validation.includes("required"),
        "is-required-asterisk-visible": t.settings.schema.length > 1,
        "validation-errors": a.validationErrors[s.name],
        "are-errors-shown": a.areErrorsVisible,
        "is-interactive": t.isUserSite,
        "model-value": a.formValues[s.name] ? .value,
        "onUpdate:modelValue": l => a.updateField(s.name, l)
    }, null, 8, ["theme", "tag", "placeholder", "label", "is-required", "is-required-asterisk-visible", "validation-errors", "are-errors-shown", "is-interactive", "model-value", "onUpdate:modelValue"])), [
        [o, `form-field-${s.inputLabel}`]
    ]) : O("", !0), s.type === "GridSelectInput" ? ce((c(), F(a.GridSelectInputsWrapper, {
        key: 1,
        theme: t.theme,
        tag: s.tag,
        options: s.options,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": a.validationRules[s.name].validation.includes("required"),
        "validation-errors": a.validationErrors[s.name],
        "are-errors-shown": a.areErrorsVisible,
        "is-interactive": t.isUserSite,
        onInput: l => a.updateField(s.name, l)
    }, null, 8, ["theme", "tag", "options", "placeholder", "label", "is-required", "validation-errors", "are-errors-shown", "is-interactive", "onInput"])), [
        [o, `form-field-${s.inputLabel}`]
    ]) : O("", !0)], 64))), 128)), De(a.GridButton, {
        content: t.submitButtonData.content,
        type: t.submitButtonData.settings.type,
        "background-color": t.submitButtonBackgroundColor,
        "background-color-hover": t.submitButtonBackgroundColorHover,
        "font-color": t.submitButtonFontColor,
        "font-color-hover": t.submitButtonFontColorHover,
        "border-color": t.submitButtonBorderColor,
        "border-color-hover": t.submitButtonBorderColorHover,
        "font-family": t.submitButtonFontFamily,
        "font-weight": t.submitButtonFontWeight,
        "font-size-mobile": t.submitButtonFontSizeMobile,
        "font-size-desktop": t.submitButtonFontSizeDesktop,
        "border-width": t.submitButtonBorderWidth,
        "border-radius": t.submitButtonBorderRadius,
        class: "form__button",
        "button-type": "submit",
        "tag-name": "button"
    }, null, 8, ["content", "type", "background-color", "background-color-hover", "font-color", "font-color-hover", "border-color", "border-color-hover", "font-family", "font-weight", "font-size-mobile", "font-size-desktop", "border-width", "border-radius"])], 42, Dm), he(e.$slots, "default", {}, void 0, !0)], 14, Em)
}
const Om = oe(Im, [
        ["render", Mm],
        ["__scopeId", "data-v-77575ff3"]
    ]),
    Lm = le({
        __name: "ZyroLoader",
        props: {
            color: {
                default: "var(--color-dark)"
            },
            size: {
                default: "40px"
            },
            weight: {
                default: "4px"
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(a => ({
                "31918b4a": a.size,
                "19ef3f81": a.weight,
                "007e258c": a.color
            }));
            const t = {};
            return Object.defineProperty(t, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), t
        }
    }),
    Am = {
        class: "loader"
    },
    Bm = Io('<div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div><div class="loader__element" data-v-a1cb4206></div>', 5),
    Rm = [Bm];

function $m(e, n, t, a, r, i) {
    return c(), h("div", Am, Rm)
}
const No = oe(Lm, [
        ["render", $m],
        ["__scopeId", "data-v-a1cb4206"]
    ]),
    Nm = "light",
    xm = 200,
    Hm = {
        SHOW_MESSAGE: "showMessage",
        LINK_TO_PAGE: "linkToPage"
    },
    Vm = le({
        __name: "PostSubmitElement",
        props: {
            successMessage: {
                default: ""
            },
            isError: {
                type: Boolean,
                default: !1
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            showSuccessMessage: {
                type: Boolean,
                default: !1
            },
            theme: {
                default: Nm
            },
            hasBorderWidth: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                a = A(null),
                r = u(() => ({
                    "--submit-element-border": t.hasBorderWidth ? "" : "var(--color-gray)"
                }));
            Ve(a, () => {
                a.value && a.value.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            });
            const i = {
                props: t,
                postSubmitRef: a,
                submitElementCSSVars: r,
                ZyroLoader: No
            };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    }),
    Il = e => (At("data-v-00e42172"), e = e(), Bt(), e),
    Um = {
        key: 1,
        class: "success-message__heading"
    },
    Ym = {
        key: 2
    },
    qm = Il(() => E("div", {
        class: "submit-message__heading"
    }, " Something went wrong ", -1)),
    Wm = Il(() => E("div", null, " Please try again later ", -1)),
    Fm = [qm, Wm];

function Gm(e, n, t, a, r, i) {
    return t.isLoading || t.showSuccessMessage || t.isError ? (c(), h("div", {
        key: 0,
        ref: "postSubmitRef",
        class: J(["submit-message", `submit-message--${t.theme}`]),
        style: Re(a.submitElementCSSVars)
    }, [t.isLoading ? (c(), F(a.ZyroLoader, {
        key: 0,
        color: "var(--grid-button-primary-background-color)"
    })) : t.showSuccessMessage && !t.isError ? (c(), h("div", Um, X(t.successMessage), 1)) : O("", !0), t.isError && !t.isLoading ? (c(), h("div", Ym, Fm)) : O("", !0)], 6)) : O("", !0)
}
const jm = oe(Vm, [
        ["render", Gm],
        ["__scopeId", "data-v-00e42172"]
    ]),
    zm = le({
        components: {
            GridForm: Om,
            PostSubmitElement: jm
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            currentLocale: {
                type: String,
                required: !0
            }
        },
        setup() {
            const {
                meta: e,
                forms: n,
                getPagePathFromId: t
            } = Je();
            return {
                meta: e,
                forms: n,
                getPagePathFromId: t
            }
        },
        data() {
            return {
                isLoading: !1,
                showSuccessMessage: !1,
                isError: !1
            }
        },
        methods: {
            async saveData({
                token: e,
                model: n
            }) {
                await fetch(`https://backend.zyro.com/u1/data/v2/post/${e}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    credentials: "omit",
                    mode: "cors",
                    body: JSON.stringify(n)
                }).then(t => {
                    if (!t.ok) throw new Error(t.statusText);
                    return t
                })
            },
            async onSubmit(e) {
                if (this.meta.isDemoTemplate) {
                    this.showSuccessMessage = !0;
                    return
                }
                this.isLoading = !0;
                let n = !1;
                setTimeout(() => {
                    n = !0, this.isLoading = !(this.showSuccessMessage || this.isError)
                }, xm);
                try {
                    await this.saveData({
                        token: this.forms[this.data.formId].token,
                        model: Object.fromEntries(Object.entries(e).map(([i, o]) => [i.replace(/["']+/g, ""), o]))
                    }), this.showSuccessMessage = !0;
                    const {
                        submitAction: t
                    } = this.data.settings;
                    if (!t || t.id === Hm.SHOW_MESSAGE) return;
                    const {
                        pageId: a
                    } = this.data.settings.submitRedirectPage, r = this.getPagePathFromId({
                        pageId: a
                    });
                    this.$router.push({
                        path: r
                    })
                } catch (t) {
                    console.error(t), this.isError = !0
                } finally {
                    n && (this.isLoading = !1)
                }
            }
        }
    });

function Qm(e, n, t, a, r, i) {
    const o = Te("PostSubmitElement"),
        s = Te("GridForm");
    return c(), F(s, {
        id: e.id,
        "form-id": e.data.formId,
        settings: e.data.settings,
        "submit-button-data": e.data.submitButtonData,
        "submit-button-background-color": e.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover": e.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": e.data.submitButtonFontColor,
        "submit-button-font-color-hover": e.data.submitButtonFontColorHover,
        "submit-button-border-color": e.data.submitButtonBorderColor,
        "submit-button-border-color-hover": e.data.submitButtonBorderColorHover,
        "submit-button-font-family": e.data.submitButtonFontFamily,
        "submit-button-font-weight": e.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": e.data.mobile ? .submitButtonFontSize,
        "submit-button-font-size-desktop": e.data.desktop ? .submitButtonFontSize,
        "submit-button-border-width": e.data.submitButtonBorderWidth,
        "submit-button-border-radius": e.data.submitButtonBorderRadius,
        "show-success-message": e.showSuccessMessage,
        "is-error": e.isError,
        "is-user-site": !0,
        theme: e.data.settings.theme,
        "form-justify": e.data.settings.styles.justify,
        "form-button-justify-self": e.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self": e.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": e.data.formBackgroundColor,
        "form-border-width": e.data.formBorderWidth,
        "form-border-color": e.data.formBorderColor,
        "form-border-radius": e.data.formBorderRadius,
        "form-padding": e.data.formPadding,
        "input-fill-color": e.data.inputFillColor,
        "input-fill-color-hover": e.data.inputFillColorHover,
        "form-font-family": e.data.formFontFamily,
        "form-font-weight": e.data.formFontWeight,
        "label-text-color": e.data.labelTextColor,
        "label-text-size": e.data.desktop ? .labelTextSize,
        "mobile-label-text-size": e.data.mobile ? .labelTextSize,
        "input-text-color": e.data.inputTextColor,
        "input-text-color-hover": e.data.inputTextColorHover,
        "input-text-size": e.data.desktop ? .inputTextSize,
        "mobile-input-text-size": e.data.mobile ? .inputTextSize,
        "input-border-color": e.data.inputBorderColor,
        "input-border-color-hover": e.data.inputBorderColorHover,
        "input-border-width": e.data.inputBorderWidth,
        "input-border-radius": e.data.inputBorderRadius,
        "elements-vertical-spacing": e.data.desktop ? .formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing": e.data.mobile ? .formElementsVerticalSpacing,
        onOnSubmit: e.onSubmit
    }, {
        default: _e(() => [De(o, {
            "show-success-message": e.showSuccessMessage,
            "success-message": e.data.settings.successMessage,
            "is-loading": e.isLoading,
            "is-error": e.isError,
            theme: e.data.settings.theme,
            "has-border-width": e.data.formBorderWidth !== 0
        }, null, 8, ["show-success-message", "success-message", "is-loading", "is-error", "theme", "has-border-width"])]),
        _: 1
    }, 8, ["id", "form-id", "settings", "submit-button-data", "submit-button-background-color", "submit-button-background-color-hover", "submit-button-font-color", "submit-button-font-color-hover", "submit-button-border-color", "submit-button-border-color-hover", "submit-button-font-family", "submit-button-font-weight", "submit-button-font-size-mobile", "submit-button-font-size-desktop", "submit-button-border-width", "submit-button-border-radius", "show-success-message", "is-error", "theme", "form-justify", "form-button-justify-self", "mobile-form-button-justify-self", "form-background-color", "form-border-width", "form-border-color", "form-border-radius", "form-padding", "input-fill-color", "input-fill-color-hover", "form-font-family", "form-font-weight", "label-text-color", "label-text-size", "mobile-label-text-size", "input-text-color", "input-text-color-hover", "input-text-size", "mobile-input-text-size", "input-border-color", "input-border-color-hover", "input-border-width", "input-border-radius", "elements-vertical-spacing", "mobile-elements-vertical-spacing", "onOnSubmit"])
}
const Km = oe(zm, [
        ["render", Qm]
    ]),
    Zm = [Zu, ml],
    xo = le({
        props: {
            alt: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: null
            },
            preventDrag: {
                type: Boolean,
                default: !1
            },
            sizes: {
                type: String,
                default: null
            },
            src: {
                type: String,
                required: !0
            },
            srcset: {
                type: String,
                default: null
            },
            tagName: {
                type: String,
                validator: e => Zm.includes(e),
                default: "div"
            },
            target: {
                type: String,
                default: null
            },
            rel: {
                type: String,
                default: null
            },
            isLightboxEnabled: {
                type: Boolean,
                default: !1
            },
            isUnstyled: {
                type: Boolean,
                default: !1
            },
            resetMobilePosition: {
                type: Boolean,
                default: !0
            },
            elementWidth: {
                type: Number,
                default: null
            },
            elementHeight: {
                type: Number,
                default: null
            },
            mobileBorderRadius: {
                type: [String, Number],
                default: 0
            },
            desktopBorderRadius: {
                type: [String, Number],
                default: 0
            },
            cropCssVars: {
                type: Object,
                default: null
            },
            isOverflowVisible: {
                type: Boolean,
                default: !1
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            isMobileImage: {
                type: Boolean,
                default: !1
            },
            isInBuilder: {
                type: Boolean,
                default: !1
            },
            isSvg: {
                type: Boolean,
                default: !1
            },
            shapeMaskSource: {
                type: String,
                default: null
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["image-load", "image-click"],
        setup(e, n) {
            const t = A(null),
                a = A(!1),
                r = u(() => e.elementHeight > 0 && e.isMobileImage),
                i = u(() => e.isInPreviewMode ? `${e.elementWidth}px` : r.value ? `${e.elementWidth*100/sa}vw` : "100%"),
                o = u(() => e.isInPreviewMode ? `${e.elementHeight}px` : r.value ? `${e.elementHeight*100/sa}vw` : "auto"),
                s = u(() => `${e.elementWidth*100/va}vw`),
                l = u(() => `${e.elementHeight*100/va}vw`),
                d = u(() => e.shapeMaskSource ? null : e.desktopBorderRadius ? e.desktopBorderRadius : e.mobileBorderRadius ? e.mobileBorderRadius : null),
                g = u(() => e.shapeMaskSource ? null : e.mobileBorderRadius ? e.mobileBorderRadius : e.desktopBorderRadius ? e.desktopBorderRadius : null),
                m = u(() => e.shapeMaskSource && `url('${e.shapeMaskSource}')`),
                p = () => {
                    n.emit("image-load"), a.value = !0
                };
            return Le(() => {
                if (t.value) {
                    if (t.value ? .complete) {
                        p();
                        return
                    }
                    t.value.addEventListener("load", p)
                }
            }), Nn(() => {
                t.value && t.value.removeEventListener("load", p)
            }), {
                imageRef: t,
                DATA_ATTRIBUTE_ANIMATION_ROLE: Sa,
                DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Eo,
                DATA_ATTRIBUTE_SELECTOR: Qu,
                DATA_ATTRIBUTE_SELECTOR_IMAGE: Ku,
                ANCHOR_TAG: ml,
                isLoaded: a,
                imageCSSVars: u(() => ({
                    "--overflow": e.isOverflowVisible ? "visible" : null,
                    ...e.cropCssVars
                })),
                mobileWidthCSSVar: u(() => e.isInBuilder ? "100%" : i.value),
                mobileHeightCSSVar: u(() => e.isInBuilder ? "auto" : o.value),
                smallDesktopWidthCSSVar: u(() => e.isInBuilder ? "100%" : s.value),
                smallDesktopHeightCSSVar: u(() => e.isInBuilder ? "100%" : l.value),
                desktopBorderRadiusCSSVar: d,
                mobileBorderRadiusCSSVar: g,
                shapeMaskSourceCssVar: m
            }
        }
    }),
    ns = () => {
        ht(e => ({
            "5575641b": e.desktopBorderRadiusCSSVar,
            "255fc2ae": e.shapeMaskSourceCssVar,
            f0d1bc9c: e.smallDesktopWidthCSSVar,
            "31ed1dfa": e.smallDesktopHeightCSSVar,
            "5a1e5507": e.mobileBorderRadiusCSSVar,
            b75e5476: e.mobileWidthCSSVar,
            "61863f50": e.mobileHeightCSSVar
        }))
    },
    rs = xo.setup;
xo.setup = rs ? (e, n) => (ns(), rs(e, n)) : ns;
const Xm = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];

function Jm(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), F(sn(e.tagName), Xe({
        href: e.href,
        target: e.target,
        rel: e.rel,
        title: e.alt,
        style: e.imageCSSVars,
        class: ["image", {
            "image--grid": !e.isUnstyled,
            "image--unstyled": e.isUnstyled,
            "image--link": e.tagName === e.ANCHOR_TAG,
            loaded: e.isLoaded
        }],
        [e.DATA_ATTRIBUTE_SELECTOR || ""]: e.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = s => e.$emit("image-click", s))
    }), {
        default: _e(() => [ce(E("img", ze({
            ref: "imageRef",
            alt: e.alt,
            src: e.src,
            srcset: e.srcset,
            sizes: e.sizes,
            height: e.elementHeight,
            width: e.elementWidth,
            loading: e.isEager ? "eager" : "lazy",
            class: {
                "image__image--zoom": e.isLightboxEnabled, "image__image--unstyled": e.isUnstyled, "image__image--cropped": !!e.cropCssVars, image__image: !e.isUnstyled, "image__image--reset-m-position": e.resetMobilePosition, "image__image--svg": e.isSvg
            }
        }, nl({
            drag: e.preventDrag ? s => s.preventDefault() : () => null,
            dragstart: e.preventDrag ? s => s.preventDefault() : () => null
        }, !0)), null, 16, Xm), [
            [o, "builder-gridelement-gridimage"]
        ]), he(e.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 16, ["href", "target", "rel", "title", "style", "class"])
}
const El = oe(xo, [
        ["render", Jm],
        ["__scopeId", "data-v-04610e81"]
    ]),
    os = (e, n) => {
        const t = Array(e).fill([]);
        return n.reduce((a, r, i) => {
            const o = i % e;
            return a[o] = [...a[o], { ...r,
                originalIndex: i
            }], a
        }, t)
    },
    eg = le({
        name: "GridGallery",
        components: {
            GridImage: El
        },
        props: {
            columnCount: {
                type: Number,
                required: !0
            },
            columnGap: {
                type: Number,
                required: !0
            },
            mobileColumnCount: {
                type: Number,
                required: !0
            },
            mobileColumnGap: {
                type: Number,
                required: !0
            },
            gridImages: {
                type: Array,
                required: !0
            },
            isLightboxEnabled: {
                type: Boolean,
                required: !1
            },
            isMasonryLayout: {
                type: Boolean,
                default: !1
            },
            loadImages: {
                type: Boolean,
                default: !0
            }
        },
        emits: ["image-load"],
        setup(e) {
            const n = u(() => os(e.columnCount, e.gridImages)),
                t = u(() => os(e.mobileColumnCount, e.gridImages));
            return {
                masonryColumns: n,
                mobileMasonryColumns: t
            }
        },
        computed: {
            gridGalleryCSSVars() {
                return {
                    "--column-gap": `${this.columnGap}px`,
                    "--column-count": this.columnCount,
                    "--m-column-gap": `${this.mobileColumnGap}px`,
                    "--m-column-count": this.mobileColumnCount
                }
            }
        }
    }),
    tg = {
        class: "gallery"
    };

function ag(e, n, t, a, r, i) {
    const o = Te("GridImage");
    return c(), h("div", tg, [e.isMasonryLayout ? (c(), h("div", {
        key: 0,
        class: "gallery__masonry",
        style: Re(e.gridGalleryCSSVars)
    }, [(c(!0), h(pe, null, ke(e.mobileMasonryColumns, (s, l) => (c(), h("div", {
        key: l,
        class: "gallery__masonry-mobile-columns"
    }, [(c(!0), h(pe, null, ke(s, (d, g) => (c(), F(o, {
        key: `${g}${d.src}`,
        class: "gallery__masonry-image",
        alt: d.alt,
        src: e.loadImages ? d.src : "",
        srcset: d.srcset,
        sizes: d.sizes,
        "element-width": d.width,
        "prevent-drag": "",
        "is-eager": "",
        "is-unstyled": "",
        "reset-mobile-position": !1,
        "is-lightbox-enabled": e.isLightboxEnabled,
        onImageClick: m => e.$emit("image-click", d.originalIndex),
        onImageLoad: n[0] || (n[0] = m => e.$emit("image-load"))
    }, null, 8, ["alt", "src", "srcset", "sizes", "element-width", "is-lightbox-enabled", "onImageClick"]))), 128))]))), 128)), (c(!0), h(pe, null, ke(e.masonryColumns, (s, l) => (c(), h("div", {
        key: l,
        class: "gallery__masonry-desktop-columns"
    }, [(c(!0), h(pe, null, ke(s, (d, g) => (c(), F(o, {
        key: `${g}${d.src}`,
        class: "gallery__masonry-image",
        alt: d.alt,
        src: e.loadImages ? d.src : "",
        srcset: d.srcset,
        sizes: d.sizes,
        "element-width": d.width,
        "prevent-drag": "",
        "is-eager": "",
        "is-unstyled": "",
        "reset-mobile-position": !1,
        "is-lightbox-enabled": e.isLightboxEnabled,
        onImageClick: m => e.$emit("image-click", d.originalIndex),
        onImageLoad: n[1] || (n[1] = m => e.$emit("image-load"))
    }, null, 8, ["alt", "src", "srcset", "sizes", "element-width", "is-lightbox-enabled", "onImageClick"]))), 128))]))), 128))], 4)) : (c(), h("div", {
        key: 1,
        class: "gallery__grid",
        style: Re(e.gridGalleryCSSVars)
    }, [(c(!0), h(pe, null, ke(e.gridImages, (s, l) => (c(), h("div", {
        key: `${l}${s.src}`,
        class: "gallery__block"
    }, [(c(), F(o, {
        key: `${l}${s.src}`,
        alt: s.alt,
        src: e.loadImages ? s.src : "",
        srcset: s.srcset,
        sizes: s.sizes,
        "element-width": s.width,
        "element-height": s.height,
        "prevent-drag": "",
        "is-lightbox-enabled": e.isLightboxEnabled,
        "reset-mobile-position": !1,
        "is-eager": "",
        class: "gallery__image",
        onImageClick: d => e.$emit("image-click", l),
        onImageLoad: n[2] || (n[2] = d => e.$emit("image-load"))
    }, null, 8, ["alt", "src", "srcset", "sizes", "element-width", "element-height", "is-lightbox-enabled", "onImageClick"]))]))), 128))], 4)), he(e.$slots, "default", {}, void 0, !0)])
}
const ng = oe(eg, [
        ["render", ag],
        ["__scopeId", "data-v-0346154b"]
    ]),
    rg = e => {
        const n = u(() => e.data.images.length > 0),
            t = u(() => Number.parseInt(e.data.desktop.columnCount || 1, 10)),
            a = u(() => Number.parseInt(e.data.desktop.columnGap || 0, 10)),
            r = u(() => Number.parseInt(e.data.mobile.columnCount || 1, 10)),
            i = u(() => Number.parseInt(e.data.mobile.columnGap || 0, 10)),
            o = u(() => e.data.settings.layout === "masonry");
        return {
            hasGridImages: n,
            columnCount: t,
            columnGap: a,
            isMasonryLayout: o,
            mobileColumnCount: r,
            mobileColumnGap: i
        }
    },
    nt = {
        Backspace: "Backspace",
        ShiftLeft: "ShiftLeft",
        Escape: "Escape",
        Space: "Space",
        ArrowLeft: "ArrowLeft",
        ArrowUp: "ArrowUp",
        ArrowRight: "ArrowRight",
        ArrowDown: "ArrowDown",
        Delete: "Delete",
        KeyX: "KeyX",
        KeyC: "KeyC",
        KeyD: "KeyD",
        KeyY: "KeyY",
        KeyZ: "KeyZ",
        OSLeft: "OSLeft",
        NumLockSlash: "NumLockSlash",
        KeySlash: "Slash",
        Enter: "Enter",
        BracketLeft: "BracketLeft",
        BracketRight: "BracketRight"
    },
    og = {
        8: nt.Backspace,
        16: nt.ShiftLeft,
        27: nt.Escape,
        32: nt.Space,
        37: nt.ArrowLeft,
        38: nt.ArrowUp,
        39: nt.ArrowRight,
        40: nt.ArrowDown,
        46: nt.Delete,
        67: nt.KeyC,
        68: nt.KeyD,
        88: nt.KeyX,
        89: nt.KeyY,
        90: nt.KeyZ,
        91: nt.OSLeft,
        111: nt.NumLockSlash,
        191: nt.KeySlash,
        219: nt.BracketLeft,
        221: nt.BracketRight
    },
    Lr = e => {
        let n;
        return e ? e.code !== void 0 ? n = e.code === "MetaLeft" ? "OSLeft" : e.code : e.keyCode !== void 0 && (n = og[e.keyCode]) : n = void 0, n
    },
    Ea = A([]),
    Da = A(null),
    en = () => {
        const e = u(() => Ea.value.length > 0),
            n = u(() => Ea.value.length > 1),
            t = u(() => Ea.value.length - 1),
            a = u(() => Da.value === Ea.value.length - 1),
            r = u(() => Da.value === 0),
            i = u(() => Ea.value[Da.value]),
            o = b => {
                Da.value = b
            },
            s = b => {
                Ea.value = Array.isArray(b) ? b : [b]
            },
            l = () => r.value ? o(t.value) : o(Da.value - 1),
            d = () => a.value ? o(0) : o(Da.value + 1),
            g = () => {
                s([]), o(null)
            },
            m = () => {
                n.value || g()
            },
            p = (b, S = 0) => {
                s(b), o(S)
            },
            f = b => {
                Lr(b) === nt.ArrowRight && d(), Lr(b) === nt.ArrowLeft && l(), Lr(b) === nt.Escape && g()
            };
        return {
            lightboxImages: u(() => Ea.value),
            currentLightboxImageIndex: u(() => Da.value),
            currentLightboxImage: i,
            lastImageIndex: t,
            isFirstImage: r,
            isLastImage: a,
            isLightboxOpen: e,
            isImageGalleryMode: n,
            setLightboxImages: s,
            setCurrentLightboxImageIndex: o,
            goToNextImage: d,
            goToPreviousImage: l,
            handleLightboxNav: f,
            closeLightbox: g,
            addImagesToLightbox: p,
            onLightboxClickOutside: m
        }
    },
    ig = "lightbox",
    sg = le({
        name: "GridGalleryProviderUser",
        components: {
            GridGallery: ng
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            mobileBlockPadding: {
                type: String,
                default: "0px"
            },
            elementWidth: {
                type: Number,
                default: null
            },
            elementHeight: {
                type: Number,
                default: null
            }
        },
        emits: ["image-load"],
        setup(e) {
            const {
                siteId: n
            } = Je(), {
                columnCount: t,
                columnGap: a,
                isMasonryLayout: r,
                mobileColumnCount: i,
                mobileColumnGap: o
            } = rg(e), {
                addImagesToLightbox: s
            } = en(), l = u(() => {
                const {
                    right: y
                } = Xa(e.mobileBlockPadding ? ? "");
                return Number.parseInt(y, 10) || 0
            }), d = A(!1), g = () => {
                d.value = window.matchMedia(`(max-width: ${ao}px)`).matches
            };
            Le(() => {
                g(), window.addEventListener("resize", g)
            }), Nn(() => {
                window.removeEventListener("resize", g)
            });
            const m = u(() => d.value ? i.value : t.value),
                p = u(() => Math.ceil((a.value + e.elementWidth) / m.value) - a.value),
                f = u(() => !r.value && p.value),
                b = u(() => [`(min-width: ${ao}px) ${p.value}px`, `${100/m.value}vw`].join(", ")),
                S = u(() => e.data.images.map(y => {
                    const D = u(() => ot(y.origin, y.path, n.value, {
                            width: p.value,
                            height: f.value
                        })),
                        P = u(() => jc(y.origin, y.path, n.value, {
                            width: p.value,
                            height: f.value,
                            columnCount: m.value,
                            columnGap: a.value,
                            mobilePadding: l.value,
                            isMasonryLayout: r.value
                        }));
                    return { ...y,
                        src: D.value,
                        srcset: P.value,
                        sizes: b.value,
                        width: p.value,
                        height: f.value
                    }
                })),
                C = u(() => e.data.settings.imageClickAction === ig);
            return {
                gridImages: S,
                isLightboxEnabled: C,
                handleGalleryImageClick: y => {
                    if (C.value) {
                        const D = e.data.images.map(P => ({
                            alt: P.alt,
                            src: Do(P.origin, P.path, n.value)
                        }));
                        s(D, y)
                    }
                },
                columnCount: t,
                columnGap: a,
                isMasonryLayout: r,
                mobileColumnCount: i,
                mobileColumnGap: o
            }
        }
    });

function lg(e, n, t, a, r, i) {
    const o = Te("GridGallery");
    return c(), F(o, {
        "grid-images": e.gridImages,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "column-count": e.columnCount,
        "column-gap": e.columnGap,
        "mobile-column-count": e.mobileColumnCount,
        "mobile-column-gap": e.mobileColumnGap,
        "is-masonry-layout": e.isMasonryLayout,
        onImageClick: e.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = s => e.$emit("image-load"))
    }, null, 8, ["grid-images", "is-lightbox-enabled", "column-count", "column-gap", "mobile-column-count", "mobile-column-gap", "is-masonry-layout", "onImageClick"])
}
const ug = oe(sg, [
        ["render", lg]
    ]),
    cg = (e, n, t) => Math.min(Math.max(e, n), t),
    is = 1920,
    ss = ({
        isAspectRatioBiggerThanContainer: e,
        scale: n,
        containerHeight: t,
        containerWidth: a,
        naturalImageHeight: r,
        naturalImageWidth: i
    }) => {
        if (e) {
            const o = t / r;
            return Math.round(i * o * n)
        }
        return Math.round(a * n)
    },
    ls = ({
        isAspectRatioBiggerThanContainer: e,
        scale: n,
        containerHeight: t,
        containerWidth: a,
        naturalImageHeight: r,
        naturalImageWidth: i
    }) => {
        if (!e) {
            const o = a / i;
            return Math.round(r * o * n)
        }
        return Math.round(t * n)
    },
    Fn = ({
        offsetInPx: e,
        imageSize: n,
        containerSize: t,
        offsetInPercent: a
    }) => {
        if (!e) return a;
        const r = (n - t) / 100;
        return cg(a + e / r, 0, 100)
    },
    Gn = ({
        imageSize: e,
        containerSize: n,
        offset: t
    }) => (n - e) * (t / 100),
    us = ({
        prefix: e,
        left: n,
        top: t,
        scale: a,
        isAspectRatioLargerThanContainer: r
    }) => ({
        [`--${e}-left`]: `${n}px`,
        [`--${e}-top`]: `${t}px`,
        [`--${e}-scale`]: a,
        [`--${e}-width`]: r ? "auto" : "100%",
        [`--${e}-height`]: r ? "100%" : "auto"
    }),
    cs = ({
        left: e,
        top: n,
        imageWidth: t,
        imageHeight: a,
        containerWidth: r,
        containerHeight: i
    }) => ({
        left: Math.round(Math.abs(e)),
        top: Math.round(Math.abs(n)),
        right: Math.round(t - r - Math.abs(e)),
        bottom: Math.round(a - i - Math.abs(n)),
        imageWidth: t,
        imageHeight: a
    }),
    dg = (e, n) => {
        if (e > is) {
            const t = is / e;
            return {
                width: Math.round(e * t),
                height: Math.round(n * t)
            }
        }
        return {
            width: e,
            height: n
        }
    },
    ds = (e, {
        dragDeltaYPosition: n,
        dragDeltaXPosition: t,
        href: a
    } = {}) => {
        const r = u(() => dg(e.data.fullResolutionWidth, e.data.fullResolutionHeight)),
            i = u(() => r.value.width),
            o = u(() => r.value.height),
            s = () => i.value / o.value,
            l = u(() => e.data.desktop ? .crop),
            d = u(() => e.renderedPosition || e.data.desktop),
            g = u(() => d.value.width),
            m = u(() => d.value.height),
            p = u(() => g.value / m.value),
            f = u(() => s() > p.value),
            b = u(() => ss({
                isAspectRatioBiggerThanContainer: f.value,
                scale: l.value.scale,
                containerHeight: m.value,
                containerWidth: g.value,
                naturalImageHeight: o.value,
                naturalImageWidth: i.value
            })),
            S = u(() => ls({
                isAspectRatioBiggerThanContainer: f.value,
                scale: l.value.scale,
                containerHeight: m.value,
                containerWidth: g.value,
                naturalImageHeight: o.value,
                naturalImageWidth: i.value
            })),
            C = u(() => Fn({
                offsetInPx: -n ? .value,
                imageSize: S.value,
                containerSize: m.value,
                offsetInPercent: l.value.top
            })),
            w = u(() => Gn({
                imageSize: S.value,
                containerSize: m.value,
                offset: C.value
            })),
            y = u(() => Fn({
                offsetInPx: -t ? .value,
                imageSize: b.value,
                containerSize: g.value,
                offsetInPercent: l.value.left
            })),
            D = u(() => Gn({
                imageSize: b.value,
                containerSize: g.value,
                offset: y.value
            })),
            P = u(() => cs({
                left: D.value,
                top: w.value,
                imageWidth: b.value,
                imageHeight: S.value,
                containerWidth: g.value,
                containerHeight: m.value
            })),
            M = u(() => e.data.mobile.crop || l.value),
            R = u(() => e.renderedPosition || e.data.mobile),
            $ = u(() => R.value.width),
            Z = u(() => R.value.height),
            G = u(() => $.value / Z.value),
            T = u(() => s() > G.value),
            L = u(() => ss({
                isAspectRatioBiggerThanContainer: T.value,
                scale: M.value.scale,
                containerHeight: Z.value,
                containerWidth: $.value,
                naturalImageHeight: o.value,
                naturalImageWidth: i.value
            })),
            H = u(() => ls({
                isAspectRatioBiggerThanContainer: T.value,
                scale: M.value.scale,
                containerHeight: Z.value,
                containerWidth: $.value,
                naturalImageHeight: o.value,
                naturalImageWidth: i.value
            })),
            z = u(() => Fn({
                offsetInPx: -n ? .value,
                imageSize: H.value,
                containerSize: Z.value,
                offsetInPercent: M.value.top
            })),
            V = u(() => Gn({
                imageSize: H.value,
                containerSize: Z.value,
                offset: z.value
            })),
            I = u(() => Fn({
                offsetInPx: -t ? .value,
                imageSize: L.value,
                containerSize: $.value,
                offsetInPercent: M.value.left
            })),
            N = u(() => Gn({
                imageSize: L.value,
                containerSize: $.value,
                offset: I.value
            })),
            U = u(() => cs({
                left: N.value,
                top: V.value,
                imageWidth: L.value,
                imageHeight: H.value,
                containerWidth: $.value,
                containerHeight: Z.value
            })),
            Q = u(() => {
                const _ = !["svg", "ico", "gif"].includes(Qa(e.data.settings.path));
                if (!l.value || !i.value || !o.value || !_) return null;
                const v = us({
                        prefix: "desktop",
                        left: D.value,
                        top: w.value,
                        scale: l.value.scale,
                        isAspectRatioLargerThanContainer: f.value
                    }),
                    Y = us({
                        prefix: "mobile",
                        left: N.value,
                        top: V.value,
                        scale: M.value.scale,
                        isAspectRatioLargerThanContainer: T.value
                    });
                return { ...v,
                    ...Y
                }
            });
        return {
            href: a,
            cropCSSVars: Q,
            desktopCropParams: P,
            mobileCropParams: U,
            desktopTop: w,
            desktopLeft: D,
            mobileLeft: N,
            mobileTop: V,
            desktopTopPercentWithOffset: C,
            desktopLeftPercentWithOffset: y
        }
    },
    mg = {
        __name: "GridImageProviderUser",
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            mobileBlockPadding: {
                type: String,
                default: "0px"
            },
            elementWidth: {
                type: Number,
                default: null
            },
            elementHeight: {
                type: Number,
                default: null
            },
            mobileElementWidth: {
                type: Number,
                default: null
            },
            mobileElementHeight: {
                type: Number,
                default: null
            },
            resetMobilePosition: {
                type: Boolean,
                default: !0
            },
            currentLocale: {
                type: String,
                required: !0
            },
            mobileBorderRadius: {
                type: Number,
                default: 0
            },
            desktopBorderRadius: {
                type: Number,
                default: 0
            },
            shapeMaskSource: {
                type: String,
                default: null
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(z => ({
                e3c7ca36: M.value,
                d239673a: R.value
            }));
            const t = e,
                {
                    addImagesToLightbox: a
                } = en(),
                {
                    siteId: r,
                    getPagePathFromId: i
                } = Je(),
                {
                    cropCSSVars: o,
                    desktopCropParams: s,
                    mobileCropParams: l,
                    href: d
                } = ds(t, {
                    href: u(() => t.data.linkType === to ? i({
                        pageId: t.data.linkedPageId
                    }) : t.data.href)
                }),
                g = z => {
                    const {
                        fullResolutionWidth: V,
                        fullResolutionHeight: I
                    } = t.data, {
                        left: N,
                        top: U,
                        right: Q,
                        bottom: _,
                        imageWidth: v,
                        imageHeight: Y
                    } = z, W = N / v, ee = U / Y, ie = Q / v, q = _ / Y;
                    return {
                        left: V * W,
                        top: I * ee,
                        right: V * ie,
                        bottom: I * q
                    }
                },
                m = z => {
                    const {
                        top: V,
                        right: I,
                        bottom: N,
                        left: U
                    } = g(z);
                    return `${V};${I};${N};${U}`
                },
                p = u(() => [t.data.settings.origin, t.data.settings.path, r.value]),
                f = u(() => o.value ? ot(...p.value, {
                    width: t.elementWidth,
                    height: t.elementHeight,
                    shouldContain: !1,
                    trim: m(s.value)
                }) : ot(...p.value, {
                    width: t.elementWidth,
                    height: t.elementHeight,
                    shouldContain: t.data.settings.styles["object-fit"] === "contain"
                })),
                b = u(() => Qa(t.data.settings.path) === "svg"),
                S = u(() => t.mobileElementWidth && t.mobileElementHeight),
                C = u(() => !t.mobileElementHeight || t.mobileElementHeight < 0 ? f.value : o.value ? ot(...p.value, {
                    width: t.mobileElementWidth,
                    height: t.mobileElementHeight,
                    shouldContain: !1,
                    trim: m(l.value)
                }) : ot(...p.value, {
                    width: t.mobileElementWidth,
                    height: t.mobileElementHeight,
                    shouldContain: !1
                })),
                w = u(() => o.value ? Aa(...p.value, {
                    width: t.elementWidth,
                    height: t.elementHeight,
                    shouldContain: !1,
                    mobilePadding: 0,
                    trim: m(s.value)
                }) : Aa(...p.value, {
                    width: t.elementWidth,
                    height: t.elementHeight,
                    shouldContain: t.data.settings.styles["object-fit"] === "contain"
                })),
                y = u(() => !t.mobileElementHeight || t.mobileElementHeight < 0 ? w.value : o.value ? Aa(...p.value, {
                    width: t.mobileElementWidth,
                    height: t.mobileElementHeight,
                    shouldContain: !1,
                    mobilePadding: 0,
                    trim: m(l.value)
                }) : Aa(...p.value, {
                    width: t.mobileElementWidth,
                    height: t.mobileElementHeight,
                    mobilePadding: 0,
                    shouldContain: !1
                })),
                D = u(() => {
                    const {
                        right: z
                    } = Xa(t.mobileBlockPadding ? ? ""), V = z ? Number.parseInt(z, 10) : null;
                    return Dn(t.elementWidth, V)
                }),
                P = () => {
                    t.data.settings.clickAction === Cr && a({
                        src: ot(t.data.settings.origin, t.data.settings.path, r.value),
                        srcset: Ta(t.data.settings.origin, t.data.settings.path, r.value),
                        alt: t.data.settings.alt
                    })
                },
                M = u(() => `${t.elementHeight}px`),
                R = u(() => `${t.mobileElementHeight}px`),
                $ = u(() => t.data.settings.alt),
                Z = u(() => t.data.settings.clickAction === _i ? "a" : "div"),
                G = u(() => t.data.target),
                T = u(() => t.data.rel),
                L = u(() => t.data.settings.clickAction === Cr),
                H = {
                    props: t,
                    addImagesToLightbox: a,
                    siteId: r,
                    getPagePathFromId: i,
                    cropCSSVars: o,
                    desktopCropParams: s,
                    mobileCropParams: l,
                    href: d,
                    calculateFullResolutionTrim: g,
                    constructTrimParamForCloudflare: m,
                    imagePathParams: p,
                    src: f,
                    isSvg: b,
                    isMobileLayout: S,
                    mobileSrc: C,
                    srcset: w,
                    mobileSrcset: y,
                    sizes: D,
                    handleImageClick: P,
                    elementHeightCssVar: M,
                    mobileElementHeightCssVar: R,
                    alt: $,
                    tagName: Z,
                    target: G,
                    rel: T,
                    isLightboxEnabled: L,
                    computed: u,
                    GridImage: El,
                    get useLightbox() {
                        return en
                    },
                    get IMAGE_CLICK_ACTION_LINK() {
                        return _i
                    },
                    get IMAGE_CLICK_ACTION_LIGHTBOX() {
                        return Cr
                    },
                    get LINK_TYPE_INTERNAL() {
                        return to
                    },
                    get getOptimizedSrc() {
                        return ot
                    },
                    get getGridItemSrcset() {
                        return Aa
                    },
                    get getGridItemSizes() {
                        return Dn
                    },
                    get getFullWidthSrcset() {
                        return Ta
                    },
                    get parseCSSSides() {
                        return Xa
                    },
                    get useGridImage() {
                        return ds
                    },
                    get getExtension() {
                        return Qa
                    },
                    get useSiteGlobal() {
                        return Je
                    }
                };
            return Object.defineProperty(H, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), H
        }
    },
    gg = ["id"];

function pg(e, n, t, a, r, i) {
    return c(), h("div", {
        id: t.id,
        class: J(["image-wrapper", {
            "image-wrapper--layout": a.isMobileLayout
        }])
    }, [De(a.GridImage, {
        class: "image-wrapper--desktop",
        alt: a.alt,
        href: a.href,
        sizes: a.sizes,
        src: a.src,
        srcset: a.srcset,
        "tag-name": a.tagName,
        target: a.target,
        rel: a.rel,
        "is-eager": t.lcp.type === "grid-image" && t.lcp.id === t.id,
        "is-lightbox-enabled": a.isLightboxEnabled,
        "element-height": t.elementHeight,
        "element-width": t.elementWidth,
        "shape-mask-source": t.shapeMaskSource,
        "reset-mobile-position": t.resetMobilePosition,
        "mobile-border-radius": t.mobileBorderRadius,
        "desktop-border-radius": t.desktopBorderRadius,
        "is-in-preview-mode": t.isInPreviewMode,
        onImageClick: a.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "is-in-preview-mode"]), a.isMobileLayout ? (c(), F(a.GridImage, {
        key: 0,
        "is-mobile-image": !0,
        class: "image-wrapper--mobile",
        alt: a.alt,
        href: a.href,
        sizes: a.sizes,
        src: a.mobileSrc,
        srcset: a.mobileSrcset,
        "tag-name": a.tagName,
        "is-svg": a.isSvg,
        target: a.target,
        rel: a.rel,
        "is-eager": t.lcp.type === "grid-image" && t.lcp.id === t.id,
        "is-lightbox-enabled": a.isLightboxEnabled,
        "element-height": t.mobileElementHeight,
        "element-width": t.mobileElementWidth,
        "shape-mask-source": t.shapeMaskSource,
        "reset-mobile-position": t.resetMobilePosition,
        "mobile-border-radius": t.mobileBorderRadius,
        "desktop-border-radius": t.desktopBorderRadius,
        "is-in-preview-mode": t.isInPreviewMode,
        onImageClick: a.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "is-svg", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "is-in-preview-mode"])) : O("", !0)], 10, gg)
}
const vg = oe(mg, [
        ["render", pg],
        ["__scopeId", "data-v-aadef881"]
    ]),
    hg = le({
        props: {
            src: {
                type: String,
                default: null
            },
            alt: {
                type: String,
                default: null
            },
            poster: {
                type: String,
                default: null
            }
        },
        emits: ["media-load"]
    }),
    fg = ["src", "poster"],
    yg = ["src", "alt"];

function bg(e, n, t, a, r, i) {
    return c(), h("figure", null, [e.src.includes("video") || e.src.includes(".mp4") ? (c(), h("video", {
        key: 0,
        src: e.src,
        poster: e.poster,
        class: "media-item",
        controls: "",
        onProgressOnce: n[0] || (n[0] = o => e.$emit("media-load"))
    }, null, 40, fg)) : (c(), h("img", {
        key: 1,
        src: e.src,
        alt: e.alt,
        class: "media-item",
        onLoad: n[1] || (n[1] = o => e.$emit("media-load"))
    }, null, 40, yg))])
}
const _g = oe(hg, [
        ["render", bg],
        ["__scopeId", "data-v-c35ee7e4"]
    ]),
    wg = le({
        components: {
            GridInstagramFeedMediaItemFigure: _g
        },
        props: {
            src: {
                type: String,
                default: null
            },
            alt: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: null
            },
            poster: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                DATA_ATTRIBUTE_ANIMATION_ROLE: Sa,
                DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: Eo,
                isLoaded: !1
            }
        }
    }),
    kg = ["href"],
    Sg = {
        key: 1
    },
    Cg = {
        key: 2,
        class: "placeholder"
    };

function Tg(e, n, t, a, r, i) {
    const o = Te("GridInstagramFeedMediaItemFigure");
    return c(), h("div", Xe({
        class: ["media-wrapper", {
            loaded: e.isLoaded
        }],
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE
    }), [e.src && e.href ? (c(), h("a", {
        key: 0,
        title: "Open instagram page of this image",
        href: e.href,
        rel: "noopener",
        target: "_blank"
    }, [De(o, {
        src: e.src,
        alt: e.alt,
        poster: e.poster,
        onMediaLoad: n[0] || (n[0] = s => e.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])], 8, kg)) : e.src && !e.href ? (c(), h("div", Sg, [De(o, {
        src: e.src,
        alt: e.alt,
        poster: e.poster,
        onMediaLoad: n[1] || (n[1] = s => e.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])])) : (c(), h("div", Cg))], 16)
}
const Pg = oe(wg, [
        ["render", Tg],
        ["__scopeId", "data-v-8ece2404"]
    ]),
    Ig = le({
        components: {
            GridInstagramFeedMediaItem: Pg
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            media: {
                type: Array,
                default: () => []
            }
        }
    }),
    Eg = ["id"];

function Dg(e, n, t, a, r, i) {
    const o = Te("GridInstagramFeedMediaItem");
    return c(), h("div", {
        id: e.id,
        class: "instagram-feed"
    }, [(c(!0), h(pe, null, ke(e.media, s => (c(), F(o, {
        key: s.src,
        src: s.src,
        href: s.href,
        alt: s.alt,
        poster: s.poster
    }, null, 8, ["src", "href", "alt", "poster"]))), 128))], 8, Eg)
}
const Mg = oe(Ig, [
        ["render", Dg]
    ]),
    ms = [{
        alt: "Workstation",
        id: "qc2YaEHSYsc",
        src: `${et}/workstation.jpg`
    }, {
        alt: "Waterfall between rocks",
        id: "ifnzcFXUmH0",
        src: `${et}/waterfall-between-rocks.jpg`
    }, {
        alt: "Trees with snow",
        id: "J2vryWaTqlB",
        src: `${et}/trees-with-snow.png`
    }, {
        alt: "Tree buds",
        id: "ZzmFPZuw7S1",
        src: `${et}/tree-buds.jpg`
    }, {
        alt: "Tiger drinking water",
        id: "k37Jfax7a6k",
        src: `${et}/tiger-drinking-water.jpg`
    }, {
        alt: "Tall well preserved buildings",
        id: "gTNSQDsXWp7",
        src: `${et}/tall-well-preserved-buildings.jpg`
    }, {
        alt: "Sunny beautiful wall",
        id: "QEdmdqjqcMf",
        src: `${et}/sunny-beautiful-wall.jpg`
    }, {
        alt: "Stereo gear",
        id: "iUXujDl2onh",
        src: `${et}/stereo-gear.jpg`
    }, {
        alt: "Rooftop oasis",
        id: "LWHjQE4HOv7",
        src: `${et}/rooftop-oasis.jpg`
    }, {
        alt: "Rocky beach",
        id: "o4qz1QOQcpJ",
        src: `${et}/rocky-beach.jpg`
    }, {
        alt: "Photographer holding camera",
        id: "VAHQ4wGABhK",
        src: `${et}/photographer-holding-camera.jpg`
    }, {
        alt: "Koi fishes",
        id: "zg35JVHQ4wG",
        src: `${et}/koi-fishes.jpg`
    }, {
        alt: "Human head artificially created",
        id: "zg35JVl8GY2",
        src: `${et}/human-head-artificially-created.jpg`
    }, {
        alt: "Horse eating grass",
        id: "dBwJoATZJBH",
        src: `${et}/horse-eating-grass.jpg`
    }, {
        alt: "Fluffy decoration in water",
        id: "HR21NDsphkV",
        src: `${et}/fluffy-docoration-in-water.jpg`
    }, {
        alt: "Elk looking at camera",
        id: "oLq0J4X2h2P",
        src: `${et}/elk-looking-at-camera.jpg`
    }, {
        alt: "Dog running in snow",
        id: "dbULY2RIxXc",
        src: `${et}/dog-running-in-snow.jpg`
    }, {
        alt: "Clean workspace",
        id: "WRmXHA1JA8H",
        src: `${et}/clean-workspace.jpg`
    }, {
        alt: "Cinematic food shot",
        id: "YgbHW4EtzbY",
        src: `${et}/cinematic-food-shot.jpg`
    }, {
        alt: "Christmas houses",
        id: "Eyoj1y8hvYz",
        src: `${et}/christmas-houses.jpg`
    }, {
        alt: "Bird sitting on branch",
        id: "yQKxjLtI8eg",
        src: `${et}/bird-sitting-on-branch.jpg`
    }, {
        alt: "Beautiful entry to private property",
        id: "1StnvFtqFjR",
        src: `${et}/beautiful-entry-to-private-property.jpg`
    }, {
        alt: "African animals",
        id: "nPjqWNmfFf0",
        src: `${et}/african-animals.jpg`
    }, {
        alt: "Workspace",
        id: "7gsm5H6lHSH",
        src: `${et}/workspace.jpg`
    }],
    Og = "https://graph.instagram.com/me/media",
    Lg = ["id", "permalink", "caption", "media_url", "thumbnail_url"],
    Ag = ({
        elementId: e,
        elementData: n,
        siteId: t,
        getInstagramTokenHandler: a,
        cleanupCallback: r
    }) => {
        const i = u(() => n.value.settings["item-count"]),
            o = A(null),
            s = A([]),
            l = u(() => s.value.length > 0 ? s.value.filter(({
                src: m
            }) => typeof m < "u").slice(0, i.value) : new Array(i.value).fill({})),
            d = async () => {
                const m = new URL(Og);
                m.searchParams.set("fields", Lg.join(",")), m.searchParams.set("access_token", o.value);
                const p = await fetch(m.toString());
                return p.ok ? (await p.json()).data : Promise.reject(p)
            };
        return {
            media: l,
            init: async () => {
                try {
                    o.value = await a({
                        siteId: t,
                        elementId: e.value
                    })
                } catch {
                    s.value = ms;
                    return
                }
                try {
                    const m = await d();
                    s.value = m.map(p => ({
                        id: p.id,
                        src: p.media_url,
                        alt: p.caption,
                        href: p.permalink,
                        poster: p.thumbnail_url
                    }))
                } catch (m) {
                    throw s.value = ms, r && r(o.value), m
                }
            },
            itemGap: u(() => n.value.settings.styles["item-gap"])
        }
    },
    Bg = le({
        components: {
            GridInstagramFeed: Mg
        },
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            }
        },
        emits: ["media-loaded"],
        setup(e, n) {
            const {
                siteId: t
            } = Je(), a = u(() => e.id), r = u(() => e.data), i = async ({
                siteId: l,
                elementId: d
            }) => (await (await fetch(`https://backend.zyro.com/u1/instagram/token/${l}/${d}`)).json()).accessToken, {
                media: o,
                init: s
            } = Ag({
                elementId: a,
                elementData: r,
                siteId: t.value,
                getInstagramTokenHandler: i
            });
            return Le(() => {
                s()
            }), Ve(o, async l => {
                l ? .length && (await Dt(), n.emit("media-loaded"))
            }, {
                immediate: !1
            }), {
                media: o
            }
        }
    });

function Rg(e, n, t, a, r, i) {
    const o = Te("GridInstagramFeed");
    return c(), F(o, {
        id: e.id,
        media: e.media
    }, null, 8, ["id", "media"])
}
const $g = oe(Bg, [
        ["render", Rg]
    ]),
    Ng = le({
        name: "GridMap",
        props: {
            isIframeLoaded: {
                type: Boolean,
                default: !1
            },
            shouldRender: {
                type: Boolean,
                default: !0
            },
            src: {
                type: String,
                required: !0
            }
        },
        computed: {
            renderSrc() {
                return this.shouldRender ? this.src : null
            }
        }
    }),
    xg = ["src"],
    Hg = {
        class: "grid-map__pin"
    };

function Vg(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(["grid-map", {
            "grid-map--loading": !e.isIframeLoaded
        }])
    }, [E("iframe", {
        ref: "iframeRef",
        class: "grid-map__frame",
        width: "100%",
        height: "100%",
        src: e.renderSrc
    }, null, 8, xg), ce(E("div", Hg, null, 512), [
        [Gt, !e.isIframeLoaded]
    ])], 2)
}
const Ug = oe(Ng, [
        ["render", Vg],
        ["__scopeId", "data-v-3b334315"]
    ]),
    Yg = (e, n) => {
        try {
            const {
                isObserved: t
            } = Pl(n), a = A(!1), r = pa({
                src: u(() => e.data.settings ? .src),
                shouldRender: u(() => t.value),
                isIframeLoaded: u(() => a.value)
            }), i = Po(() => {
                const o = n.value ? .$refs;
                o && (o.iframeRef.addEventListener("load", () => {
                    a.value = !0
                }), i())
            });
            return {
                composedProps: r
            }
        } catch (t) {
            console.error(t)
        }
    },
    qg = le({
        name: "GridMapProviderUser",
        components: {
            GridMap: Ug
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const n = A(null),
                {
                    composedProps: t
                } = Yg(e, n);
            return {
                mapRef: n,
                composedProps: t
            }
        }
    });

function Wg(e, n, t, a, r, i) {
    const o = Te("GridMap");
    return c(), F(o, ze({
        ref: "mapRef"
    }, e.composedProps), null, 16)
}
const Fg = oe(qg, [
        ["render", Wg]
    ]),
    Gg = le({
        __name: "GridSocialIcons",
        props: {
            links: {
                default: () => []
            },
            preventLinks: {
                type: Boolean,
                default: !1
            },
            direction: {
                default: "row"
            },
            directionMobile: {
                default: null
            },
            preventSpacing: {
                type: Boolean,
                default: !1
            },
            fullHeight: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                a = u(() => ["social-icons", `social-icons--${t.direction}`]),
                r = u(() => ({
                    "--m-icon-direction": t.directionMobile || t.direction,
                    "--icon-padding-vertical": t.direction === "column" ? "var(--space-between-icons)" : "0",
                    "--icon-padding-horizontal": t.direction === "row" ? "var(--space-between-icons)" : "0",
                    ...t.fullHeight && {
                        height: "100%"
                    },
                    ...t.preventSpacing && {
                        "--space-between-icons": "0px"
                    },
                    ...t.directionMobile && {
                        "--m-icon-padding-vertical": t.directionMobile === "column" ? "var(--space-between-icons)" : "0",
                        "--m-icon-padding-horizontal": t.directionMobile === "row" ? "var(--space-between-icons)" : "0"
                    }
                })),
                i = {
                    props: t,
                    computedClass: a,
                    computedStyles: r
                };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    }),
    jg = ["href", "title", "innerHTML"];

function zg(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(a.computedClass),
        style: Re(a.computedStyles)
    }, [(c(!0), h(pe, null, ke(t.links, ({
        link: o,
        svg: s,
        title: l
    }) => (c(), h("a", ze({
        key: o,
        href: o,
        target: "_blank",
        rel: "noopener",
        title: l,
        class: "social-icons__link"
    }, nl({
        dragstart: t.preventLinks ? d => d.preventDefault() : () => null,
        click: t.preventLinks ? d => d.preventDefault() : () => null
    }, !0), {
        innerHTML: s
    }), null, 16, jg))), 128))], 6)
}
const Dl = oe(Gg, [
        ["render", zg],
        ["__scopeId", "data-v-723bd2cd"]
    ]),
    Qg = e => {
        const n = u(() => e.data.settings.styles);
        return pa({
            links: u(() => e.data.links.map(a => ({ ...a,
                title: `Go to ${Vc(a.icon)} page`
            }))),
            direction: u(() => n.value["icon-direction"]),
            directionMobile: u(() => n.value["m-icon-direction"]),
            fullHeight: u(() => !n.value.justify),
            preventSpacing: u(() => n.value["icon-spacing"] !== "center" || n.value["icon-direction"] === "column" ? !n.value.justify : !n.value.align)
        })
    },
    Kg = le({
        components: {
            GridSocialIcons: Dl
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e, n) {
            return {
                composedProps: Qg(e)
            }
        }
    });

function Zg(e, n, t, a, r, i) {
    const o = Te("GridSocialIcons");
    return c(), F(o, Xe(bt(e.composedProps)), null, 16)
}
const Xg = oe(Kg, [
        ["render", Zg]
    ]),
    Jg = A(null),
    ep = e => {
        const n = u(() => e.data.settings ? .priceId || ""),
            t = u(() => e.data.settings ? .paymentType || "payment");
        return {
            stripeInstance: Jg,
            priceId: n,
            paymentType: t
        }
    },
    tp = "https://js.stripe.com/v3",
    ap = le({
        name: "GridStripeButtonProviderUser",
        components: {
            GridButton: Va
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            successPageSlug: {
                type: String,
                required: !0
            },
            cancellationPageSlug: {
                type: String,
                required: !0
            },
            stripePublicApiKey: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const {
                getButtonHref: n
            } = Je(), {
                content: t,
                type: a
            } = On(e, {
                href: u(() => n({
                    isFormButton: e.data.settings.isFormButton,
                    linkedPageId: e.data.linkedPageId,
                    linkType: e.data.linkType,
                    href: e.data.href
                }))
            }), {
                stripeInstance: r,
                priceId: i,
                paymentType: o
            } = ep(e), s = A(!1), l = () => new Promise((g, m) => {
                if (!!(r.value && window.Stripe)) {
                    g();
                    return
                }
                const f = document.createElement("script");
                f.addEventListener("load", () => {
                    window.Stripe && (r.value = window.Stripe(e.stripePublicApiKey), g())
                }), f.addEventListener("error", () => {
                    m()
                }), f.src = tp, document.head.appendChild(f)
            });
            return {
                content: t,
                type: a,
                isLoadingStripeScript: s,
                handleClick: async () => {
                    i.value && (s.value = !0, await l(), s.value = !1, r.value.redirectToCheckout({
                        lineItems: [{
                            price: i.value,
                            quantity: 1
                        }],
                        mode: o.value,
                        successUrl: `${window.location.origin}/${e.successPageSlug}`,
                        cancelUrl: `${window.location.origin}/${e.cancellationPageSlug}`
                    }).then(g => {
                        g.error && console.error(g.error.message)
                    }))
                }
            }
        }
    });

function np(e, n, t, a, r, i) {
    const o = Te("GridButton"),
        s = Ge("qa");
    return ce((c(), F(o, {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isLoadingStripeScript,
        onClick: e.handleClick
    }, null, 8, ["content", "type", "is-disabled", "onClick"])), [
        [s, "button-stripe-checkout"]
    ])
}
const rp = oe(ap, [
        ["render", np]
    ]),
    op = {
        __name: "GridTextBox",
        props: {
            textAlign: {
                type: String,
                default: null
            },
            textAlignMobile: {
                type: String,
                default: null
            },
            backgroundColor: {
                type: String,
                default: null
            },
            content: {
                type: String,
                default: null
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(s => ({
                aaa7845e: r.value,
                "766ab03e": a.value,
                e11f4c5a: i.value
            }));
            const t = e,
                a = u(() => t.backgroundColor),
                r = u(() => t.textAlign === "justify" ? "normal" : "break-spaces"),
                i = u(() => t.textAlignMobile && t.textAlignMobile === "justify" ? "normal" : r.value),
                o = {
                    props: t,
                    backgroundColor: a,
                    whiteSpace: r,
                    whiteSpaceMobile: i,
                    computed: u
                };
            return Object.defineProperty(o, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), o
        }
    },
    ip = ["innerHTML"],
    sp = {
        key: 1,
        class: "text-box"
    };

function lp(e, n, t, a, r, i) {
    return t.content ? (c(), h("div", {
        key: 0,
        class: "text-box",
        innerHTML: t.content
    }, null, 8, ip)) : (c(), h("div", sp, [he(e.$slots, "default")]))
}
const up = oe(op, [
        ["render", lp]
    ]),
    cp = {
        __name: "GridTextBoxProviderUser",
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = {
                GridTextBox: up
            };
            return Object.defineProperty(t, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), t
        }
    };

function dp(e, n, t, a, r, i) {
    return c(), F(a.GridTextBox, {
        "text-align": t.data.settings.styles.text,
        "text-align-mobile": t.data.settings.styles["m-text"],
        "background-color": t.data.backgroundColor,
        content: t.data.content
    }, null, 8, ["text-align", "text-align-mobile", "background-color", "content"])
}
const mp = oe(cp, [
        ["render", dp]
    ]),
    It = {
        YOUTUBE: "youtube",
        VIMEO: "vimeo"
    },
    Vn = "0",
    nr = "1",
    gp = Vn,
    pp = Vn,
    vp = nr,
    hp = Vn,
    fp = Vn,
    yp = nr;
It.YOUTUBE;
const bp = /t=\d+/g,
    Pt = {
        AUTOPLAY: "autoplay",
        LOOP: "loop",
        CONTROLS: "controls",
        AUTOPAUSE: "autopause",
        PLAYLIST: "playlist",
        PLAYSINLINE: "playsinline",
        ALBUM: "h",
        MUTE: {
            [It.YOUTUBE]: "mute",
            [It.VIMEO]: "muted"
        },
        TIME: "t",
        START: "start"
    },
    _p = {
        [It.YOUTUBE]: "https://www.youtube.com/embed/",
        [It.VIMEO]: "https://player.vimeo.com/video/"
    },
    wp = {
        [It.YOUTUBE]: /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
        [It.VIMEO]: /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/
    },
    kp = "https://vimeo.com/api/oembed.json?url=https://vimeo.com",
    Sp = {
        __name: "GridVideo",
        props: {
            renderIframe: {
                type: Boolean,
                default: !1
            },
            renderPicture: {
                type: Boolean,
                default: !0
            },
            src: {
                type: String,
                required: !0
            },
            provider: {
                type: String,
                default: It.YOUTUBE
            },
            jpg: {
                type: String,
                default: ""
            },
            webp: {
                type: String,
                default: ""
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(i => ({
                "60d8e812": a.value
            }));
            const t = A(!1),
                a = u(() => t.value ? "transparent" : "var(--color-dark)"),
                r = {
                    isIframeLoaded: t,
                    backgroundColor: a,
                    get PROVIDERS() {
                        return It
                    },
                    computed: u,
                    ref: A
                };
            return Object.defineProperty(r, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), r
        }
    },
    Cp = {
        class: "video"
    },
    Tp = ["src"],
    Pp = ["srcset"],
    Ip = ["src"];

function Ep(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", Cp, [t.renderIframe ? (c(), h("iframe", {
        key: 0,
        src: t.src,
        class: "video__frame",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "",
        width: "100%",
        height: "100%",
        onLoad: n[0] || (n[0] = s => a.isIframeLoaded = !0)
    }, null, 40, Tp)) : t.renderPicture && (t.jpg || t.webp) ? (c(), h(pe, {
        key: 1
    }, [E("picture", null, [E("source", {
        type: "image/webp",
        srcset: t.webp
    }, null, 8, Pp), ce(E("img", {
        referrerpolicy: "origin",
        class: "video__placeholder",
        height: "100%",
        width: "100%",
        src: t.jpg
    }, null, 8, Ip), [
        [o, "builder-gridelement-gridvideo"]
    ])]), E("button", {
        type: "button",
        class: J(`video__play video__play--${t.provider}`)
    }, null, 2)], 64)) : O("", !0)])
}
const Dp = oe(Sp, [
        ["render", Ep],
        ["__scopeId", "data-v-ad3c9850"]
    ]),
    Mp = async e => {
        const a = (await (await fetch(`${kp}/${e}`)).json()).thumbnail_url.replace("_295x166", "_720");
        return {
            jpg: a.replace(".webp", ".jpg"),
            webp: a.replace(".jpg", ".webp")
        }
    },
    Op = async (e, n) => {
        switch (e) {
            case It.YOUTUBE:
                return {
                    jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
                    webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`
                };
            case It.VIMEO:
                return Mp(n);
            default:
                return {
                    jpg: null,
                    webp: null
                }
        }
    },
    Lp = (e, n, t, a) => {
        const r = n === It.VIMEO ? e.split("/")[1] : null,
            i = n === It.VIMEO ? e.split("/")[0] : e,
            o = a.match(bp),
            s = n === It.YOUTUBE && o ? {
                [Pt.START]: o[0].slice(2) ? ? 0
            } : {},
            l = Pt.MUTE[n],
            d = new URLSearchParams({
                [Pt.ALBUM]: r,
                [Pt.PLAYLIST]: i,
                [Pt.AUTOPLAY]: t ? .[Pt.AUTOPLAY] ? ? gp,
                [Pt.CONTROLS]: t ? .[Pt.CONTROLS] ? ? vp,
                [Pt.LOOP]: t ? .[Pt.LOOP] ? ? pp,
                [Pt.AUTOPAUSE]: hp,
                [Pt.PLAYSINLINE]: yp,
                [l]: fp,
                ...s
            }).toString();
        return `${_p[n]}${i}?${d}`
    },
    Ap = async (e, n) => {
        const t = Object.entries(wp).find(([, g]) => e ? .match(g)),
            a = t && t.length === 2;
        if (!a) return {
            url: e,
            isUrlValid: !1
        };
        const [r, i] = t, o = e.match(i), s = [o[1], o[2]].join(""), {
            jpg: l,
            webp: d
        } = await Op(r, s);
        return {
            src: Lp(s, r, n, e),
            isUrlValid: a,
            jpg: l,
            webp: d,
            provider: r,
            id: s
        }
    },
    Bp = e => {
        const n = pa({
                src: null,
                provider: null,
                width: null,
                height: null,
                webp: null,
                jpg: null
            }),
            t = pa({
                src: u(() => n.src ? ? e.data.settings.src),
                provider: u(() => n.provider ? ? e.data.settings.provider),
                width: u(() => n.width ? ? e.data.settings.width),
                height: u(() => n.height ? ? e.data.settings.height),
                webp: u(() => n.webp ? ? e.data.settings.webp),
                jpg: u(() => n.jpg ? ? e.data.settings.jpg)
            });
        return Po(() => {
            (e.data.settings.src !== t.src || !e.data.settings.jpg) && Ap(e.data.settings.src).then(a => {
                Object.entries(a).forEach(([r, i]) => {
                    n[r] = i
                })
            })
        }), {
            composedProps: t
        }
    },
    Rp = le({
        name: "GridVideoProviderUser",
        components: {
            GridVideo: Dp
        },
        props: {
            data: {
                type: Object,
                required: !0
            }
        },
        setup(e) {
            const {
                composedProps: n
            } = Bp(e), t = A(null), a = u(() => e.data.settings.src ? .includes(`${[Pt.AUTOPLAY]}=${nr}`) ? ? !1), r = u(() => {
                const l = Pt.MUTE[n.provider];
                return a.value ? n.src.replace(`${[l]}=${Vn}`, `${[l]}=${nr}`) : n.src
            }), i = A(!1), o = A(!1), s = () => {
                const l = new IntersectionObserver(([{
                    isIntersecting: d
                }]) => {
                    d && (a.value ? i.value = !0 : o.value = !0, l.disconnect())
                }, {
                    threshold: 0
                });
                l.observe(t.value.$el), i.value = !0
            };
            return Le(() => {
                s()
            }), {
                videoRef: t,
                composedProps: n,
                composedSrc: r,
                renderIframe: i,
                renderPicture: o
            }
        }
    });

function $p(e, n, t, a, r, i) {
    const o = Te("GridVideo");
    return c(), F(o, ze({
        ref: "videoRef"
    }, e.composedProps, {
        src: e.composedSrc,
        "render-iframe": e.renderIframe,
        "render-picture": e.renderPicture,
        onClickOnce: n[0] || (n[0] = s => e.renderIframe = !0)
    }), null, 16, ["src", "render-iframe", "render-picture"])
}
const Np = oe(Rp, [
        ["render", $p]
    ]),
    xp = le({
        name: "GridShape",
        props: {
            svg: {
                type: String,
                required: !0
            }
        }
    }),
    Hp = ["innerHTML"];

function Vp(e, n, t, a, r, i) {
    return c(), h("div", {
        class: "grid-shape",
        innerHTML: e.svg
    }, null, 8, Hp)
}
const Up = oe(xp, [
        ["render", Vp]
    ]),
    Yp = le({
        name: "GridShapeProviderUser",
        components: {
            GridShape: Up
        },
        props: {
            data: {
                type: Object,
                required: !0
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        computed: {
            cssVars() {
                const e = this.data.mobile.height * 100 / sa,
                    n = this.data.desktop.height * 100 / va;
                return {
                    "--shape-height": `${this.data.desktop.height}px`,
                    "--m-shape-height": this.isInPreviewMode ? `${this.data.mobile.height}px` : `${e}vw`,
                    "--t-shape-height": `${this.data.mobile.height}px`,
                    "--small-desktop-shape-height": `${n}vw`,
                    "--shape-color": `${this.data.color}`
                }
            }
        }
    });

function qp(e, n, t, a, r, i) {
    const o = Te("GridShape");
    return c(), F(o, {
        svg: e.data.svg,
        style: Re(e.cssVars)
    }, null, 8, ["svg", "style"])
}
const Wp = oe(Yp, [
        ["render", qp]
    ]),
    Fp = le({
        props: {
            alt: {
                type: String,
                default: null
            },
            src: {
                type: String,
                required: !0
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            objectFit: {
                type: String,
                default: "cover"
            },
            width: {
                type: Number,
                default: null
            },
            height: {
                type: Number,
                default: null
            },
            enableSrcset: {
                type: Boolean,
                default: !1
            },
            imageOrigin: {
                type: String,
                default: "other"
            },
            isLossless: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                imageUrl: this.src,
                srcset: null,
                isLoaded: !1
            }
        },
        computed: {
            sizes() {
                return this.enableSrcset ? Dn(this.width, null) : null
            }
        },
        watch: {
            objectFit(e, n) {
                e !== n && n === "cover" && this.imageUrl.includes("fit=crop") && (this.imageUrl = this.getImageUrl(), this.srcset = this.getSrcSet())
            }
        },
        mounted() {
            this.imageUrl = this.getImageUrl(), this.srcset = this.getSrcSet()
        },
        methods: {
            getImageUrl() {
                return ot(this.imageOrigin, this.src, this.siteId, {
                    width: this.width,
                    height: this.height,
                    shouldContain: this.objectFit === "contain",
                    isLossless: this.isLossless
                })
            },
            getSrcSet() {
                return this.enableSrcset ? Aa(this.imageOrigin, this.src, this.siteId, {
                    width: this.width,
                    height: this.height,
                    shouldContain: this.objectFit === "contain",
                    isLossless: this.isLossless
                }) : null
            }
        }
    }),
    Gp = ["loading", "src", "alt", "srcset", "sizes"];

function jp(e, n, t, a, r, i) {
    return c(), F(Mt, {
        name: "fade",
        mode: "out-in"
    }, {
        default: _e(() => [E("img", ze(e.$attrs, {
            loading: e.isEager ? "eager" : "lazy",
            src: e.imageUrl,
            alt: e.alt,
            srcset: e.srcset,
            sizes: e.sizes,
            class: ["ecommerce-product-image", {
                "ecommerce-product-image--loading": !e.isLoaded
            }],
            onLoad: n[0] || (n[0] = o => e.isLoaded = !0),
            onError: n[1] || (n[1] = o => e.isLoaded = !0)
        }), null, 16, Gp)]),
        _: 1
    })
}
const mr = oe(Fp, [
    ["render", jp]
]);

function Ho(e) {
    return ol() ? (il(e), !0) : !1
}

function Vo(e) {
    return typeof e == "function" ? e() : B(e)
}
const Uo = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const zp = e => e != null,
    Qp = Object.prototype.toString,
    Kp = e => Qp.call(e) === "[object Object]",
    Xn = () => {},
    Zp = Xp();

function Xp() {
    var e, n;
    return Uo && ((e = window ? .navigator) == null ? void 0 : e.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((n = window ? .navigator) == null ? void 0 : n.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window ? .navigator.userAgent))
}

function Jp(e) {
    return e || rl()
}

function ev(e, n = !0, t) {
    Jp() ? Le(e, t) : n ? e() : Dt(e)
}

function ra(e) {
    var n;
    const t = Vo(e);
    return (n = t ? .$el) != null ? n : t
}
const gr = Uo ? window : void 0,
    tv = Uo ? window.document : void 0;

function Ka(...e) {
    let n, t, a, r;
    if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([t, a, r] = e, n = gr) : [n, t, a, r] = e, !n) return Xn;
    Array.isArray(t) || (t = [t]), Array.isArray(a) || (a = [a]);
    const i = [],
        o = () => {
            i.forEach(g => g()), i.length = 0
        },
        s = (g, m, p, f) => (g.addEventListener(m, p, f), () => g.removeEventListener(m, p, f)),
        l = Ve(() => [ra(n), Vo(r)], ([g, m]) => {
            if (o(), !g) return;
            const p = Kp(m) ? { ...m
            } : m;
            i.push(...t.flatMap(f => a.map(b => s(g, f, b, p))))
        }, {
            immediate: !0,
            flush: "post"
        }),
        d = () => {
            l(), o()
        };
    return Ho(d), d
}
let gs = !1;

function pr(e, n, t = {}) {
    const {
        window: a = gr,
        ignore: r = [],
        capture: i = !0,
        detectIframe: o = !1
    } = t;
    if (!a) return Xn;
    Zp && !gs && (gs = !0, Array.from(a.document.body.children).forEach(p => p.addEventListener("click", Xn)), a.document.documentElement.addEventListener("click", Xn));
    let s = !0;
    const l = p => r.some(f => {
            if (typeof f == "string") return Array.from(a.document.querySelectorAll(f)).some(b => b === p.target || p.composedPath().includes(b)); {
                const b = ra(f);
                return b && (p.target === b || p.composedPath().includes(b))
            }
        }),
        g = [Ka(a, "click", p => {
            const f = ra(e);
            if (!(!f || f === p.target || p.composedPath().includes(f))) {
                if (p.detail === 0 && (s = !l(p)), !s) {
                    s = !0;
                    return
                }
                n(p)
            }
        }, {
            passive: !0,
            capture: i
        }), Ka(a, "pointerdown", p => {
            const f = ra(e);
            s = !l(p) && !!(f && !p.composedPath().includes(f))
        }, {
            passive: !0
        }), o && Ka(a, "blur", p => {
            setTimeout(() => {
                var f;
                const b = ra(e);
                ((f = a.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !b ? .contains(a.document.activeElement) && n(p)
            }, 0)
        })].filter(Boolean);
    return () => g.forEach(p => p())
}

function av() {
    const e = A(!1),
        n = rl();
    return n && Le(() => {
        e.value = !0
    }, n), e
}

function Ml(e) {
    const n = av();
    return u(() => (n.value, !!e()))
}

function nv(e, n, t = {}) {
    const {
        window: a = gr,
        ...r
    } = t;
    let i;
    const o = Ml(() => a && "MutationObserver" in a),
        s = () => {
            i && (i.disconnect(), i = void 0)
        },
        l = u(() => {
            const p = Vo(e),
                f = (Array.isArray(p) ? p : [p]).map(ra).filter(zp);
            return new Set(f)
        }),
        d = Ve(() => l.value, p => {
            s(), o.value && a && p.size && (i = new MutationObserver(n), p.forEach(f => i.observe(f, r)))
        }, {
            immediate: !0,
            flush: "post"
        }),
        g = () => i ? .takeRecords(),
        m = () => {
            s(), d()
        };
    return Ho(m), {
        isSupported: o,
        stop: m,
        takeRecords: g
    }
}

function rv(e = {}) {
    const {
        document: n = tv
    } = e;
    if (!n) return A("visible");
    const t = A(n.visibilityState);
    return Ka(n, "visibilitychange", () => {
        t.value = n.visibilityState
    }), t
}

function ov(e, n, t = {}) {
    const {
        window: a = gr,
        ...r
    } = t;
    let i;
    const o = Ml(() => a && "ResizeObserver" in a),
        s = () => {
            i && (i.disconnect(), i = void 0)
        },
        l = u(() => Array.isArray(e) ? e.map(m => ra(m)) : [ra(e)]),
        d = Ve(l, m => {
            if (s(), o.value && a) {
                i = new ResizeObserver(n);
                for (const p of m) p && i.observe(p, r)
            }
        }, {
            immediate: !0,
            flush: "post"
        }),
        g = () => {
            s(), d()
        };
    return Ho(g), {
        isSupported: o,
        stop: g
    }
}

function iv(e, n = {}) {
    const {
        reset: t = !0,
        windowResize: a = !0,
        windowScroll: r = !0,
        immediate: i = !0
    } = n, o = A(0), s = A(0), l = A(0), d = A(0), g = A(0), m = A(0), p = A(0), f = A(0);

    function b() {
        const S = ra(e);
        if (!S) {
            t && (o.value = 0, s.value = 0, l.value = 0, d.value = 0, g.value = 0, m.value = 0, p.value = 0, f.value = 0);
            return
        }
        const C = S.getBoundingClientRect();
        o.value = C.height, s.value = C.bottom, l.value = C.left, d.value = C.right, g.value = C.top, m.value = C.width, p.value = C.x, f.value = C.y
    }
    return ov(e, b), Ve(() => ra(e), S => !S && b()), nv(e, b, {
        attributeFilter: ["style", "class"]
    }), r && Ka("scroll", b, {
        capture: !0,
        passive: !0
    }), a && Ka("resize", b, {
        passive: !0
    }), ev(() => {
        i && b()
    }), {
        height: o,
        bottom: s,
        left: l,
        right: d,
        top: g,
        width: m,
        x: p,
        y: f,
        update: b
    }
}
const ps = 45,
    sv = le({
        __name: "SiteElementSearchBar",
        props: {
            placeholderText: {},
            noResultsText: {},
            fillColor: {},
            fillColorHover: {},
            textAndIconColor: {},
            textAndIconColorHover: {},
            resultItemHoverColor: {},
            fontFamily: {},
            borderColor: {},
            borderColorHover: {},
            borderRadius: {},
            translations: {},
            siteId: {},
            searchTerm: {
                default: ""
            },
            results: {
                default: null
            },
            isLoading: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["update:search-term", "is-dropdown-open"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n(), ht(y => ({
                "45245e45": y.fontFamily,
                c48fbf5c: y.textAndIconColor,
                "60741c0a": y.textAndIconColorHover,
                "6b74e73d": p.value,
                "6169fb25": y.borderColor,
                "0b56f8a4": y.fillColor,
                a82de5d2: y.borderColorHover,
                "121b722e": y.fillColorHover,
                "360a1fa9": y.resultItemHoverColor,
                "44bc226c": a
            }));
            const a = `${ps}px`,
                r = t,
                i = e,
                o = A(null),
                s = A(!1),
                l = A([]),
                d = A(-1),
                g = u(() => i.isLoading),
                m = u(() => i.results),
                p = u(() => `${i.borderRadius}px`),
                f = () => {
                    i.results && d.value < i.results.length - 1 && (d.value += 1)
                },
                b = () => {
                    d.value > 0 && (d.value -= 1)
                },
                S = () => {
                    const y = l.value[d.value];
                    if (!y) return;
                    const D = new MouseEvent("click", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window
                    });
                    y.dispatchEvent(D)
                },
                C = () => {
                    s.value = !1, r("update:search-term", ""), d.value = -1
                };
            Ve([m, g], () => {
                s.value = !!m.value || g.value, r("is-dropdown-open", s.value)
            }), Le(() => {
                pr(o, () => {
                    C()
                })
            });
            const w = {
                IMAGE_DIMENSIONS_PX: ps,
                IMAGE_DIMENSIONS_PX_STRING: a,
                emit: r,
                props: i,
                searchBarRef: o,
                isSearchResultDropdownVisible: s,
                itemLinksRefs: l,
                highlightedItemIndex: d,
                isLoading: g,
                results: m,
                borderRadiusInPx: p,
                highlightNextItem: f,
                highlightPreviousItem: b,
                redirectToHighlightedItem: S,
                dropdownCloseHandler: C,
                ZyroLoader: No,
                ProductImage: mr
            };
            return Object.defineProperty(w, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), w
        }
    }),
    lv = {
        ref: "searchBarRef",
        class: "site-element-search-bar",
        "aria-owns": "search-results",
        tabindex: "0",
        "aria-haspopup": "listbox"
    },
    uv = {
        class: "site-element-search-bar__input-wrapper"
    },
    cv = ["placeholder", "value", "onKeydown"],
    dv = {
        key: 0,
        id: "search-results",
        role: "listbox",
        class: "site-element-search-bar__dropdown"
    },
    mv = {
        key: 1,
        class: "site-element-search-bar__dropdown-no-results"
    },
    gv = ["area-selected"],
    pv = ["href", "onMouseover", "onFocus", "onKeydown"],
    vv = {
        class: "search-result-item__content"
    },
    hv = {
        class: "search-result-item__title"
    },
    fv = {
        class: "search-result-item__price"
    },
    yv = {
        key: 0
    },
    bv = {
        key: 0
    },
    _v = {
        key: 0,
        class: "search-result-item__sale-price"
    },
    wv = {
        key: 1
    };

function kv(e, n, t, a, r, i) {
    return c(), h("div", lv, [E("div", uv, [E("input", {
        class: "site-element-search-bar__input",
        placeholder: a.props.placeholderText,
        value: a.props.searchTerm,
        onInput: n[0] || (n[0] = o => a.emit("update:search-term", o.target.value)),
        onKeydown: [Oe(Ee(a.highlightNextItem, ["prevent"]), ["down"]), Oe(Ee(a.highlightPreviousItem, ["prevent"]), ["up"]), Oe(a.redirectToHighlightedItem, ["enter"])]
    }, null, 40, cv), a.isSearchResultDropdownVisible ? (c(), h("div", {
        key: 0,
        class: "site-element-search-bar__dropdown-close",
        onClick: a.dropdownCloseHandler
    })) : O("", !0)]), a.isSearchResultDropdownVisible ? (c(), h("ul", dv, [a.props.isLoading ? (c(), F(a.ZyroLoader, {
        key: 0,
        size: "30px",
        color: a.props.textAndIconColorHover,
        class: "site-element-search-bar__loader"
    }, null, 8, ["color"])) : !a.props.results || a.props.results.length === 0 ? (c(), h("p", mv, X(t.noResultsText), 1)) : (c(!0), h(pe, {
        key: 2
    }, ke(a.props.results, (o, s) => (c(), h("li", {
        key: o.id,
        role: "option",
        "area-selected": s === a.highlightedItemIndex
    }, [E("a", {
        ref_for: !0,
        ref: "itemLinksRefs",
        href: o.href,
        class: J(["search-result-item", {
            "search-result-item--highlighted": s === a.highlightedItemIndex
        }]),
        onMouseover: l => a.highlightedItemIndex = s,
        onFocus: l => a.highlightedItemIndex = s,
        onKeydown: Oe(Ee(a.redirectToHighlightedItem, ["prevent"]), ["enter"])
    }, [o.thumbnail ? (c(), F(a.ProductImage, {
        key: 0,
        src: o.thumbnail,
        alt: o.title,
        class: "search-result-item__image",
        width: a.IMAGE_DIMENSIONS_PX,
        height: a.IMAGE_DIMENSIONS_PX,
        "site-id": a.props.siteId,
        "enable-srcset": ""
    }, null, 8, ["src", "alt", "site-id"])) : O("", !0), E("div", vv, [E("h3", hv, X(o.title), 1), E("p", fv, [o.isInStock ? (c(), h("span", yv, [o.price ? .length ? (c(), h("span", bv, [o.oldPrice ? (c(), h("span", _v, X(o.oldPrice), 1)) : O("", !0), Be(" " + X(o.price), 1)])) : O("", !0)])) : (c(), h("span", wv, X(t.translations.soldOut), 1))])])], 42, pv)], 8, gv))), 128))])) : O("", !0)], 512)
}
const Sv = oe(sv, [
        ["render", kv]
    ]),
    Ol = (e, n) => {
        let t;
        return function() {
            const r = () => Reflect.apply(e, this, arguments);
            clearTimeout(t), t = setTimeout(r, n)
        }
    },
    Cv = 6,
    Tv = 5,
    Pv = 4,
    Iv = 3,
    Ll = 2,
    Ev = {
        [Cv]: 18,
        [Tv]: 15,
        [Pv]: 12,
        [Iv]: 9,
        [Ll]: 6
    },
    Dv = e => e ? .variants[0].booking_event ? .length_unit === lo;

function co(e) {
    return e ? .variants[0].booking_event ? .length || 0
}
const Yo = (e, n) => {
        const t = a => Math.round(a * 100) / 100;
        return Dv(e) ? `${t(co(e)/1e3/60/60)} ${n.hourShort}` : `${t(co(e)/1e3/60)} ${n.minuteShort}`
    },
    kn = e => e[Tl] !== $o ? !1 : !e.variants.every((n, t, a) => {
        const r = a[0] ? .prices ? .[0] ? ? a[0],
            i = n ? .prices ? .[0] ? ? n,
            o = r.sale_amount ? ? r.amount,
            s = i.sale_amount ? ? i.amount;
        return o === s
    }),
    wn = ({
        variantsQuantity: e,
        variantId: n
    }) => e.find(t => t.id === n) ? .inventory_quantity || 0,
    Al = ({
        product: e,
        variantsQuantity: n
    }) => e.variants.reduce((t, a) => t + wn({
        variantsQuantity: n,
        variantId: a.id
    }), 0),
    Mv = ({
        product: e,
        variantsQuantity: n
    }) => e.variants[0].manage_inventory ? Al({
        product: e,
        variantsQuantity: n
    }) > 0 : !0,
    Ov = ({
        variants: e
    }) => e.reduce((n, t) => (n.sale_amount || n.amount) <= (t.sale_amount || t.amount) ? n : t);

function ba({
    amount: e,
    currency: n,
    isPriceDisplayedWithCurrency: t = !0
}) {
    if (!n) return t ? "€0.00" : "0.00";
    const a = Number(e) || 0,
        i = Number(a / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
    return t ? n.template.replace("$1", i) : i
}
const Lv = "https://backend.zyro.com/public",
    Av = async ({
        query: e,
        indices: n,
        pageSize: t = 5,
        storeId: a
    }) => {
        if (!e) return [];
        const r = await fetch(`${Lv}/search`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    query: e,
                    indices: n,
                    storeId: a,
                    pageSize: t
                })
            }),
            {
                results: i
            } = await r.json();
        return i.products.hits
    },
    vs = 400,
    Bv = le({
        __name: "SiteElementSearchBarProviderSiteEngine",
        props: {
            data: {
                type: Object,
                required: !0
            },
            blockId: {
                type: String,
                required: !0
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    meta: a,
                    siteId: r,
                    ecommerceShoppingCart: i
                } = Je(),
                o = u(() => i.value ? .translations || {}),
                {
                    toggleSearchDropdown: s
                } = oo({
                    blockId: t.blockId
                }),
                l = A(""),
                d = A(!1),
                g = A(null),
                m = u(() => a.value.ecommerceStoreId),
                p = u(() => g.value ? g.value.map(C => {
                    const w = C.site_product_selection === $o ? Ov({
                            variants: C.variants
                        }) : C.variants[0],
                        {
                            amount: y,
                            sale_amount: D,
                            currency_decimal_digits: P,
                            currency_template: M,
                            manage_inventory: R
                        } = w,
                        $ = {
                            decimal_digits: P,
                            template: M
                        },
                        Z = `/product-redirect/${C.id}`,
                        G = y && kn(C) ? `${o.value.from} ` : "",
                        T = y ? `${G}${ba({amount:D||y,currency:$})}` : "",
                        L = D ? ba({
                            amount: y,
                            currency: $
                        }) : null,
                        H = !R || !!y && Mv({
                            product: C,
                            variantsQuantity: C.variants
                        });
                    return {
                        id: C.id,
                        thumbnail: C.thumbnail,
                        title: C.title,
                        href: Z,
                        price: T,
                        oldPrice: L,
                        isInStock: H
                    }
                }) : null),
                f = Ol(async () => {
                    d.value = !0, l.value && m.value ? g.value = await Av({
                        query: l.value,
                        indices: [Xu],
                        storeId: m.value
                    }) : g.value = null, d.value = !1
                }, vs),
                S = {
                    TIMEOUT_MS_SEARCH_DEBOUNCE: vs,
                    props: t,
                    meta: a,
                    siteId: r,
                    ecommerceShoppingCart: i,
                    ecommerceTranslations: o,
                    toggleSearchDropdown: s,
                    searchTerm: l,
                    isLoading: d,
                    results: g,
                    storeId: m,
                    computedResults: p,
                    searchHandler: f,
                    updateSearchTerm: ({
                        newValue: C
                    }) => {
                        l.value = C, f()
                    },
                    SiteElementSearchBar: Sv
                };
            return Object.defineProperty(S, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), S
        }
    });

function Rv(e, n, t, a, r, i) {
    return c(), F(a.SiteElementSearchBar, {
        "placeholder-text": a.props.data.placeholderText,
        "no-results-text": a.props.data.noResultsText,
        "fill-color": a.props.data.fillColor,
        "fill-color-hover": a.props.data.fillColorHover,
        "text-and-icon-color": a.props.data.textAndIconColor,
        "text-and-icon-color-hover": a.props.data.textAndIconColorHover,
        "font-family": a.props.data.fontFamily,
        "border-color": a.props.data.borderColor,
        "border-color-hover": a.props.data.borderColorHover,
        "border-radius": a.props.data.borderRadius,
        "is-loading": a.isLoading,
        "result-item-hover-color": a.props.data.resultItemHoverColor,
        results: a.computedResults,
        "search-term": a.searchTerm,
        "site-id": a.siteId,
        translations: a.ecommerceTranslations,
        "onUpdate:searchTerm": n[0] || (n[0] = o => a.updateSearchTerm({
            newValue: o
        })),
        onIsDropdownOpen: a.toggleSearchDropdown
    }, null, 8, ["placeholder-text", "no-results-text", "fill-color", "fill-color-hover", "text-and-icon-color", "text-and-icon-color-hover", "font-family", "border-color", "border-color-hover", "border-radius", "is-loading", "result-item-hover-color", "results", "search-term", "site-id", "translations", "onIsDropdownOpen"])
}
const $v = oe(Bv, [
        ["render", Rv]
    ]),
    gn = A(!1),
    pn = A(!1),
    Ar = A(!1),
    Br = A(""),
    qa = A(null),
    Rr = A(!1),
    Ln = ({
        elementData: e,
        data: n,
        elementId: t,
        isParentBlockFooter: a
    } = {}) => {
        const r = A(null),
            i = A(null),
            o = A(null),
            s = e || n || {},
            l = w => `transition transition--${w}`,
            d = u(() => {
                const w = t && Ju.includes(s.type),
                    y = !t && !ec.includes(s.type);
                if (w || y) return "";
                const D = l(s.animation ? .name);
                return wi.includes(s.type) ? `${D} transition--root-hidden` : D
            }),
            g = u(() => {
                const w = qa.value && t === qa.value;
                return !gn.value || qa.value && !w ? "" : Ar.value
            }),
            m = u(() => pn.value ? In : null),
            p = async w => {
                w.forEach(({
                    target: y,
                    isIntersecting: D
                }) => {
                    if (!D) {
                        y.removeAttribute(En);
                        return
                    }
                    a || o.value ? .unobserve(y), y.setAttribute(En, In)
                })
            },
            f = ({
                root: w = null
            } = {}) => {
                s.animation ? .name && (o.value = new IntersectionObserver(p, {
                    threshold: 0,
                    root: w
                }))
            },
            b = async w => {
                if (s.animation ? .name)
                    if (await Dt(), wi.includes(s.type)) {
                        const y = w ? .querySelectorAll(`[${Sa}="${Eo}"]`),
                            D = w ? .querySelectorAll(`[${Sa}="${xn}"]`);
                        [...y, ...D].forEach(M => o.value ? .observe(M))
                    } else o.value ? .observe(w)
            },
            S = () => {
                window.clearTimeout(r.value), window.clearTimeout(i.value), gn.value = !1, pn.value = !1
            },
            C = ({
                animation: w,
                id: y
            }) => {
                S(), !w !== "none" && (qa.value = y, Br.value = w, gn.value = !0, Ar.value = l(Br.value), r.value = setTimeout(() => {
                    pn.value = !0
                }, 500), i.value = setTimeout(() => {
                    gn.value = !1, pn.value = !1, qa.value = null
                }, 2e3))
            };
        return Ve(Rr, async w => {
            w && (await Dt(), Rr.value = !1)
        }), {
            intersectionObserver: o,
            animationClass: d,
            animationInEditorClass: Ar,
            animationInEditorComponentId: qa,
            isAnimationDisplayedInEditor: gn,
            isAnimationDisplayedInEditorActive: pn,
            animationInEditorName: Br,
            addIntersectionObserver: f,
            observe: b,
            displayAnimationInEditor: C,
            shouldMountAnimationsInPreview: Rr,
            customAnimationClass: g,
            animationAttributeStateValue: m
        }
    },
    Nv = {
        __name: "LayoutElementProviderUser",
        props: {
            elementId: {
                type: String,
                required: !0
            },
            blockId: {
                type: String,
                required: !0
            },
            elementData: {
                type: Object,
                required: !0
            },
            overrideWidth: {
                type: Number,
                default: null
            },
            overrideHeight: {
                type: Number,
                default: null
            },
            isMobileLegacy: {
                type: Boolean,
                default: !1
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            siteLanguagePages: {
                type: Object,
                required: !0
            },
            stripePublicApiKey: {
                type: String,
                default: ""
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isParentBlockFooter: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(D => ({
                fbe62064: b.value,
                "6ee972b0": S.value
            }));
            const t = e,
                a = A(null),
                {
                    intersectionObserver: r,
                    animationClass: i,
                    addIntersectionObserver: o,
                    observe: s,
                    shouldMountAnimationsInPreview: l
                } = Ln({
                    elementData: t.elementData,
                    isParentBlockFooter: t.isParentBlockFooter,
                    elementId: t.elementId
                }),
                d = u(() => Object.values(t.siteLanguagePages)[0]),
                g = u(() => t.elementData.mobile ? .isHidden || !1),
                m = u(() => t.elementData.desktop ? .isHidden || !1),
                p = u(() => t.elementData.type !== Tr ? "" : (t.siteLanguagePages[t.elementData.settings ? .successPageId] || d.value).slug),
                f = u(() => t.elementData.type !== Tr ? "" : (t.siteLanguagePages[t.elementData.settings ? .cancellationPageId] || d.value).slug),
                b = u(() => `${t.elementData.desktop.height}px`),
                S = u(() => `${t.elementData.mobile.height}px`),
                C = async () => {
                    await s(a.value ? .$el)
                },
                w = async () => {
                    const P = [ki, Si].includes(t.elementData.type),
                        R = a.value ? .$el.getBoundingClientRect().height > window.innerHeight,
                        $ = !P && R && a.value ? a.value.$el.parentElement : null;
                    o({
                        root: $
                    }), P || await C()
                };
            Le(async () => {
                await w()
            }), Et(() => r.value ? .disconnect()), Ve(l, async D => {
                D && await w()
            });
            const y = {
                props: t,
                elementRef: a,
                intersectionObserver: r,
                animationClass: i,
                addIntersectionObserver: o,
                observe: s,
                shouldMountAnimationsInPreview: l,
                firstLanguagePage: d,
                isMobileElementHidden: g,
                isDesktopElementHidden: m,
                stripeSuccessPageSlug: p,
                stripeCancellationPageSlug: f,
                elementHeightDesktop: b,
                elementHeightMobile: S,
                observeElement: C,
                initiateAnimations: w,
                get ELEMENT_TYPE_BUTTON() {
                    return gl
                },
                get ELEMENT_TYPE_STRIPE_BUTTON() {
                    return Tr
                },
                get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
                    return tc
                },
                get ELEMENT_TYPE_MAP() {
                    return ul
                },
                get ELEMENT_TYPE_VIDEO() {
                    return cl
                },
                get ELEMENT_TYPE_IMAGE() {
                    return ac
                },
                get ELEMENT_TYPE_TEXT_BOX() {
                    return nc
                },
                get ELEMENT_TYPE_FORM() {
                    return rc
                },
                get ELEMENT_TYPE_INSTAGRAM_FEED() {
                    return ki
                },
                get ELEMENT_TYPE_SOCIAL_ICONS() {
                    return pl
                },
                get ELEMENT_TYPE_GALLERY() {
                    return Si
                },
                get ELEMENT_TYPE_EMBED() {
                    return oc
                },
                get ELEMENT_TYPE_SHAPE() {
                    return ic
                },
                get ELEMENT_TYPE_SEARCH_BAR() {
                    return sc
                },
                LayoutElementWrapper: Rd,
                GridButtonProviderUser: Vd,
                GridEcommerceButtonProviderUser: em,
                GridEmbedProviderUser: dm,
                GridFormProviderUser: Km,
                GridGalleryProviderUser: ug,
                GridImageProviderUser: vg,
                GridInstagramFeedProviderUser: $g,
                GridMapProviderUser: Fg,
                GridSocialIconsProviderUser: Xg,
                GridStripeButtonProviderUser: rp,
                GridTextBoxProviderUser: mp,
                GridVideoProviderUser: Np,
                GridShapeProviderUser: Wp,
                SiteElementSearchBarProviderSiteEngine: $v,
                get useSiteEngineAnimations() {
                    return Ln
                },
                computed: u,
                onMounted: Le,
                onBeforeUnmount: Et,
                ref: A,
                watch: Ve,
                get isSearchDropdownOpen() {
                    return ro
                }
            };
            return Object.defineProperty(y, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), y
        }
    };

function xv(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), F(a.LayoutElementWrapper, {
        ref: "elementRef",
        class: J(["layout-element", [{
            "layout-element--desktop-element-hidden": a.isDesktopElementHidden,
            "layout-element--mobile-element-hidden": a.isMobileElementHidden
        }, a.animationClass]]),
        "element-data": t.elementData,
        "is-forced-on-top": a.isSearchDropdownOpen && t.elementData.type === a.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": t.isMobileLegacy
    }, {
        default: _e(() => [t.elementData.type === a.ELEMENT_TYPE_BUTTON ? ce((c(), F(a.GridButtonProviderUser, {
            key: 0,
            id: t.elementId,
            data: t.elementData,
            "current-locale": t.currentLocale,
            "mobile-element-width": t.elementData.mobile.width,
            "mobile-element-height": t.elementData.mobile.height,
            class: "layout-element__component layout-element__component--GridButton"
        }, null, 8, ["id", "data", "current-locale", "mobile-element-width", "mobile-element-height"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_STRIPE_BUTTON ? ce((c(), F(a.GridStripeButtonProviderUser, {
            key: 1,
            id: t.elementId,
            data: t.elementData,
            "success-page-slug": a.stripeSuccessPageSlug,
            "cancellation-page-slug": a.stripeCancellationPageSlug,
            "stripe-public-api-key": t.stripePublicApiKey,
            class: "layout-element__component layout-element__component--GridStripeButton"
        }, null, 8, ["id", "data", "success-page-slug", "cancellation-page-slug", "stripe-public-api-key"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_ECOMMERCE_BUTTON ? ce((c(), F(a.GridEcommerceButtonProviderUser, {
            key: 2,
            id: t.elementId,
            data: t.elementData,
            "is-cart-visible": t.isCartVisible,
            "mobile-element-width": t.elementData.mobile.width,
            "mobile-element-height": t.elementData.mobile.height,
            "is-in-preview-mode": a.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridEcommerceButton"
        }, null, 8, ["id", "data", "is-cart-visible", "mobile-element-width", "mobile-element-height", "is-in-preview-mode"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_FORM ? ce((c(), F(a.GridFormProviderUser, {
            key: 3,
            id: t.elementId,
            data: t.elementData,
            "current-locale": t.currentLocale,
            class: "layout-element__component layout-element__component--GridForm"
        }, null, 8, ["id", "data", "current-locale"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_VIDEO ? ce((c(), F(a.GridVideoProviderUser, {
            key: 4,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component layout-element__component--GridVideo"
        }, null, 8, ["id", "data"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_TEXT_BOX ? ce((c(), F(a.GridTextBoxProviderUser, {
            key: 5,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component layout-element__component--GridTextBox"
        }, null, 8, ["id", "data"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_MAP ? ce((c(), F(a.GridMapProviderUser, {
            key: 6,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component layout-element__component--GridMap"
        }, null, 8, ["id", "data"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_SOCIAL_ICONS ? ce((c(), F(a.GridSocialIconsProviderUser, {
            key: 7,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component layout-element__component--GridSocialIcons"
        }, null, 8, ["id", "data"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_GALLERY ? ce((c(), F(a.GridGalleryProviderUser, {
            key: 8,
            id: t.elementId,
            data: t.elementData,
            "element-width": t.elementData.desktop.width,
            "element-height": t.elementData.desktop.height,
            class: "layout-element__component layout-element__component--GridGallery",
            onImageLoad: a.observeElement
        }, null, 8, ["id", "data", "element-width", "element-height"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_IMAGE ? ce((c(), F(a.GridImageProviderUser, {
            key: 9,
            id: t.elementId,
            lcp: t.lcp,
            data: t.elementData,
            "mobile-element-width": t.elementData.mobile.width,
            "mobile-element-height": t.elementData.mobile.height,
            "element-width": t.elementData.desktop.width,
            "element-height": t.elementData.desktop.height,
            "reset-mobile-position": t.isMobileLegacy,
            "current-locale": t.currentLocale,
            "mobile-border-radius": t.elementData.mobile.borderRadius,
            "desktop-border-radius": t.elementData.desktop.borderRadius,
            "shape-mask-source": t.elementData.shapeMaskSource,
            "is-in-preview-mode": a.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridImage"
        }, null, 8, ["id", "lcp", "data", "mobile-element-width", "mobile-element-height", "element-width", "element-height", "reset-mobile-position", "current-locale", "mobile-border-radius", "desktop-border-radius", "shape-mask-source", "is-in-preview-mode"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_INSTAGRAM_FEED ? ce((c(), F(a.GridInstagramFeedProviderUser, {
            key: 10,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component layout-element__component--GridInstagramFeed",
            onMediaLoaded: a.observeElement
        }, null, 8, ["id", "data"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_EMBED ? ce((c(), F(a.GridEmbedProviderUser, {
            key: 11,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component layout-element__component--GridEmbed"
        }, null, 8, ["id", "data"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_SHAPE ? ce((c(), F(a.GridShapeProviderUser, {
            key: 12,
            id: t.elementId,
            data: t.elementData,
            "is-in-preview-mode": a.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridShape"
        }, null, 8, ["id", "data", "is-in-preview-mode"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), t.elementData.type === a.ELEMENT_TYPE_SEARCH_BAR ? ce((c(), F(a.SiteElementSearchBarProviderSiteEngine, {
            key: 13,
            id: t.elementId,
            data: t.elementData,
            class: "layout-element__component",
            "block-id": t.blockId
        }, null, 8, ["id", "data", "block-id"])), [
            [o, `${t.elementData.type}:${t.elementId}`]
        ]) : O("", !0), he(e.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 8, ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"])
}
const Hv = oe(Nv, [
        ["render", xv],
        ["__scopeId", "data-v-c26ff75d"]
    ]),
    Vv = {
        __name: "BlockLayoutProviderUser",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            components: {
                type: Object,
                default: () => ({})
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            siteLanguagePages: {
                type: Object,
                required: !0
            },
            stripePublicApiKey: {
                type: String,
                default: ""
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    isSearchOpenedInCurrentBlock: a
                } = oo({
                    blockId: t.blockId
                }),
                {
                    components: r
                } = Jr(t),
                i = u(() => t.data),
                {
                    layoutElements: o,
                    layoutCSSVars: s,
                    isMobileLegacy: l
                } = ji({
                    blockData: i,
                    siteElements: r,
                    shouldBuildResponsive: !t.isInPreviewMode
                }),
                d = u(() => i.value.slot === "footer"),
                g = {
                    props: t,
                    isSearchOpenedInCurrentBlock: a,
                    siteElements: r,
                    blockData: i,
                    layoutElements: o,
                    layoutCSSVars: s,
                    isMobileLegacy: l,
                    isBlockFooter: d,
                    toRefs: Jr,
                    computed: u,
                    get useSearchElementDropdown() {
                        return oo
                    },
                    BlockLayoutWrapper: Td,
                    get useBlockLayout() {
                        return ji
                    },
                    LayoutElementProviderUser: Hv
                };
            return Object.defineProperty(g, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), g
        }
    };

function Uv(e, n, t, a, r, i) {
    return c(), F(a.BlockLayoutWrapper, {
        ref: "blockLayout",
        style: Re(a.layoutCSSVars),
        "is-mobile-legacy": a.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": a.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": a.props.isInPreviewMode
    }, {
        default: _e(() => [(c(!0), h(pe, null, ke(a.layoutElements, o => (c(), F(a.LayoutElementProviderUser, {
            key: o.elementId,
            "is-mobile-legacy": a.isMobileLegacy,
            "element-id": o.elementId,
            "element-data": o,
            lcp: t.lcp,
            "is-cart-visible": t.isCartVisible,
            "current-locale": t.currentLocale,
            "site-language-pages": t.siteLanguagePages,
            "stripe-public-api-key": t.stripePublicApiKey,
            "is-parent-block-footer": a.isBlockFooter,
            "block-id": t.blockId,
            "is-in-preview-mode": a.props.isInPreviewMode
        }, null, 8, ["is-mobile-legacy", "element-id", "element-data", "lcp", "is-cart-visible", "current-locale", "site-language-pages", "stripe-public-api-key", "is-parent-block-footer", "block-id", "is-in-preview-mode"]))), 128))]),
        _: 1
    }, 8, ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"])
}
const Yv = oe(Vv, [
        ["render", Uv]
    ]),
    qv = le({
        __name: "ZyroPagination",
        props: {
            currentPage: {},
            pageCount: {},
            color: {
                default: null
            }
        },
        emits: ["change-page"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n();
            const a = e,
                r = t,
                i = u(() => ({
                    "--button-color": a.color
                })),
                o = u(() => {
                    if (5 > a.pageCount) return [...new Array(a.pageCount + 1).keys()].slice(1);
                    const d = 4 / 2,
                        g = Array.from({
                            length: 4
                        }).fill(0);
                    if (a.currentPage <= d + 1) {
                        g[0] = 1;
                        const p = g.map((f, b) => g[0] + b);
                        return p.push(a.pageCount), p
                    }
                    if (a.currentPage >= a.pageCount - d + 1) {
                        const p = g.map((f, b) => a.pageCount - b);
                        return p.reverse().unshift(1), p
                    }
                    g[0] = a.currentPage - d + 1;
                    const m = g.map((p, f) => g[0] + f);
                    return m.unshift(1), m[m.length - 1] = a.pageCount, m
                }),
                s = {
                    props: a,
                    emit: r,
                    computedStyle: i,
                    paginationTriggersList: o
                };
            return Object.defineProperty(s, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), s
        }
    }),
    Bl = e => (At("data-v-1ee2fd7c"), e = e(), Bt(), e),
    Wv = ["disabled"],
    Fv = Bl(() => E("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M7 1L1 7L7 13",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    Gv = [Fv],
    jv = ["data-testId", "disabled", "onClick"],
    zv = ["disabled"],
    Qv = Bl(() => E("svg", {
        width: "8",
        height: "14",
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M1 13L7 7L1 1",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    Kv = [Qv];

function Zv(e, n, t, a, r, i) {
    return t.pageCount > 1 ? (c(), h("div", {
        key: 0,
        class: "pagination",
        style: Re(a.computedStyle)
    }, [E("button", {
        disabled: t.currentPage === 1,
        class: "pagination__button",
        "data-testId": "button-previous",
        onClick: n[0] || (n[0] = o => a.emit("change-page", Math.max(1, t.currentPage - 1)))
    }, Gv, 8, Wv), (c(!0), h(pe, null, ke(a.paginationTriggersList, o => (c(), h("button", {
        key: `${o}-trigger`,
        class: J(["pagination__button pagination__trigger", {
            "pagination__trigger--current": o === t.currentPage
        }]),
        "data-testId": `button-${o}`,
        disabled: t.currentPage === o,
        onClick: s => a.emit("change-page", o)
    }, X(o), 11, jv))), 128)), E("button", {
        disabled: t.currentPage === t.pageCount,
        class: "pagination__button",
        "data-testId": "button-next",
        onClick: n[1] || (n[1] = o => a.emit("change-page", Math.min(t.pageCount, t.currentPage + 1)))
    }, Kv, 8, zv)], 4)) : O("", !0)
}
const Rl = oe(qv, [
        ["render", Zv],
        ["__scopeId", "data-v-1ee2fd7c"]
    ]),
    mo = 1800,
    Xv = 1080,
    hs = 100,
    Jv = {
        __name: "BlockBlogListItem",
        props: {
            post: {
                type: Object,
                default: () => ({})
            },
            authorName: {
                type: String,
                default: null
            },
            shownItems: {
                type: Object,
                default: () => ({
                    authorFullName: !0,
                    coverImage: !0,
                    title: !0,
                    description: !0,
                    date: !0,
                    categories: !0,
                    avatar: !0,
                    minutesToRead: !0
                })
            },
            coverObjectFit: {
                type: String,
                default: "cover"
            },
            cursor: {
                type: String,
                default: "pointer"
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            },
            isAnimationActive: {
                type: Boolean,
                default: !1
            },
            blogReadingTimeText: {
                type: [String, void 0],
                default: void 0
            },
            blogTitleTextSize: {
                type: Number,
                default: 24
            }
        },
        emits: ["post-click", "filter-category"],
        setup(e, {
            expose: n
        }) {
            n(), ht(m => ({
                "74783e9f": r.value
            }));
            const t = e,
                a = A(),
                r = u(() => `${t.blogTitleTextSize}px`),
                i = u(() => t.post ? .coverImageAlt ? ? ""),
                o = u(() => Dn(mo, null)),
                s = u(() => t.post ? .categories ? ? []),
                l = u(() => !!t.shownItems.coverImage && (t.post ? .coverImageSrc || t.post ? .coverImageSrcset)),
                d = u(() => {
                    const m = a.value ? .getBoundingClientRect();
                    if (!m || !window || !document) return !0;
                    const {
                        top: p
                    } = m, {
                        innerHeight: f
                    } = window, {
                        clientHeight: b
                    } = document.documentElement;
                    return p <= (f || b) + hs
                }),
                g = {
                    props: t,
                    VERTICAL_VIEWPORT_OFFSET: hs,
                    coverImageContainerRef: a,
                    blogTitleTextSize: r,
                    coverImageAlt: i,
                    sizes: o,
                    categories: s,
                    isCoverImageShown: l,
                    isElementInViewport: d,
                    BlockBlogListItemCategories: wl,
                    BlockBlogListItemMeta: kl,
                    get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
                        return mo
                    },
                    get getFormattedNumericDate() {
                        return Sl
                    },
                    get getGridItemSizes() {
                        return Dn
                    },
                    get DATA_ATTRIBUTE_ANIMATION_ROLE() {
                        return Sa
                    },
                    get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
                        return xn
                    },
                    get DATA_ATTRIBUTE_ANIMATION_STATE() {
                        return En
                    },
                    get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
                        return In
                    },
                    computed: u,
                    ref: A
                };
            return Object.defineProperty(g, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), g
        }
    },
    eh = ["href"],
    th = {
        class: "block-blog-list-item__cover-image-wrapper"
    },
    ah = ["alt", "src", "srcset", "sizes", "loading"],
    nh = ["href"];

function rh(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", Xe({
        class: "block-blog-list-item",
        [a.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: a.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [a.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: t.isAnimationActive ? a.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE : null
    }), [he(e.$slots, "block-blog-list-item-overlay", {}, void 0, !0), a.isCoverImageShown ? ce((c(), h("a", {
        key: 0,
        ref: "coverImageContainerRef",
        href: t.post.slug,
        class: "block-blog-list-item__cover-image-container",
        onClick: n[0] || (n[0] = Ee(s => e.$emit("post-click"), ["prevent"]))
    }, [E("div", th, [E("img", {
        class: "block-blog-list-item__cover-image",
        alt: a.coverImageAlt,
        src: t.post.coverImageSrc,
        srcset: t.post.coverImageSrcset,
        sizes: a.sizes,
        loading: a.isElementInViewport ? void 0 : "lazy"
    }, null, 8, ah)])], 8, eh)), [
        [o, "blog-list-item-image"]
    ]) : O("", !0), ce(De(a.BlockBlogListItemCategories, {
        class: "font-secondary",
        categories: a.categories,
        "blog-categories": t.blogCategories,
        onFilterCategory: n[1] || (n[1] = s => e.$emit("filter-category", s))
    }, null, 8, ["categories", "blog-categories"]), [
        [Gt, t.shownItems.categories && a.categories.length]
    ]), E("a", {
        class: "block-blog-list-item__content",
        href: t.post.slug,
        onClick: n[2] || (n[2] = Ee(s => e.$emit("post-click"), ["prevent"]))
    }, [ce(E("h3", {
        class: "font-primary block-blog-list-item__title"
    }, X(t.post.meta.title), 513), [
        [Gt, t.shownItems.title]
    ]), ce(E("p", {
        class: "block-blog-list-item__description font-secondary"
    }, X(t.post.meta.description), 513), [
        [Gt, t.shownItems.description]
    ]), De(a.BlockBlogListItemMeta, ze({
        authorName: t.authorName,
        minutesAmount: t.post.minutesToRead,
        date: a.getFormattedNumericDate(t.post.date),
        showAvatar: t.shownItems.avatar,
        showName: t.shownItems.authorFullName,
        showDate: t.shownItems.date,
        showMinutes: t.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": t.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])], 8, nh)], 16)
}
const oh = oe(Jv, [
        ["render", rh],
        ["__scopeId", "data-v-d6576b2a"]
    ]),
    ih = "Show all posts",
    fs = 46,
    ys = 24,
    sh = {
        __name: "BlockBlogList",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            posts: {
                type: Object,
                default: () => ({})
            },
            blogCategories: {
                type: Object,
                default: () => ({})
            },
            blogReadingTimeText: {
                type: [String, void 0],
                default: void 0
            }
        },
        emits: ["post-click"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n(), ht(y => ({
                b0e46082: d.value,
                68036045: l.value
            }));
            const a = e,
                r = t,
                i = A(0),
                o = A(null),
                s = A(!1),
                l = u(() => Number.parseInt(a.data.settings.postColumnCount, 10)),
                d = u(() => `${fs}px`),
                g = u(() => a.data.settings.blogTitleFontSize || ys),
                m = u(() => {
                    const {
                        categories: y,
                        showAllPosts: D,
                        showWithoutCategories: P
                    } = a.data.settings, M = D ? a.posts : Object.fromEntries(Object.entries(a.posts).filter(([, R]) => {
                        const $ = y.some(G => R.categories.includes(G));
                        return P && R.categories.length === 0 || $
                    }));
                    return o.value ? Object.fromEntries(Object.entries(M).filter(([, R]) => R.categories.includes(o.value))) : M
                }),
                p = u(() => Object.values(m.value).sort((y, D) => Date.parse(D.date) - Date.parse(y.date))),
                f = u(() => p.value.slice((i.value > 0 ? i.value - 1 : 0) * a.data.settings.postsPerPage, i.value * a.data.settings.postsPerPage)),
                b = u(() => Math.ceil(Object.keys(m.value).length / a.data.settings.postsPerPage)),
                S = () => {
                    const y = new URLSearchParams(window.location.search),
                        D = Number.parseInt(y.get("page"), 10) || 1;
                    D !== i.value && (i.value = D)
                },
                C = y => {
                    i.value = y, s.value = !0;
                    const D = new URL(window.location);
                    D.searchParams.set("page", i.value), window.history.pushState(null, "", D.toString()), eo(`#${a.blockId}`)
                };
            Ve(f, y => {
                y.length === 0 && i.value > 1 && (i.value -= 1)
            }), Le(() => {
                const y = new URLSearchParams(window.location.search),
                    D = Number.parseInt(y.get("page"), 10) || 1;
                i.value !== D && (i.value = D), window.addEventListener("popstate", () => {
                    S()
                })
            }), Et(() => {
                window.removeEventListener("popstate", S)
            });
            const w = {
                SHOW_ALL_POSTS_LABEL: ih,
                BLOG_LIST_PADDING_X: fs,
                props: a,
                emit: r,
                currentPage: i,
                filteredCategoryId: o,
                isAnimationActive: s,
                postColumnCount: l,
                blogListPaddingXCssVar: d,
                BLOG_TITLE_FONT_SIZE_FALLBACK: ys,
                blogTitleTextSize: g,
                postsToRender: m,
                sortedPosts: p,
                currentPageItems: f,
                pageCount: b,
                handleBrowserNavigationPageChange: S,
                setCurrentPage: C,
                get scrollToSection() {
                    return eo
                },
                ZyroPagination: Rl,
                BlockBlogListItem: oh,
                ref: A,
                onMounted: Le,
                onBeforeUnmount: Et,
                computed: u,
                watch: Ve
            };
            return Object.defineProperty(w, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), w
        }
    },
    lh = ["id"],
    uh = {
        key: 0,
        class: "block-blog-list__filter"
    },
    ch = {
        key: 2,
        class: "block-blog-list__empty-block"
    };

function dh(e, n, t, a, r, i) {
    const o = Ge("qa");
    return ce((c(), h("div", {
        id: t.blockId,
        ref: "blogList",
        class: "block-blog-list"
    }, [a.filteredCategoryId ? (c(), h("div", uh, [Be(X(t.blogCategories[a.filteredCategoryId].name) + " ", 1), E("button", {
        class: "block-blog-list__filter-button",
        onClick: n[0] || (n[0] = s => a.filteredCategoryId = null)
    }, X(a.SHOW_ALL_POSTS_LABEL))])) : O("", !0), a.currentPageItems.length ? (c(), h("div", {
        key: 1,
        class: J(["block-blog-list__list", {
            "block-blog-list__list--one-col": a.postColumnCount === 1
        }])
    }, [(c(!0), h(pe, null, ke(a.currentPageItems, (s, l) => ce((c(), F(a.BlockBlogListItem, {
        key: `post-${l}`,
        post: s,
        "author-name": s.meta.authorName,
        "cover-object-fit": t.data.settings.styles["cover-object-fit"],
        "shown-items": t.data.settings.shownItems,
        "blog-categories": t.blogCategories,
        "is-animation-active": a.isAnimationActive,
        "blog-reading-time-text": t.blogReadingTimeText,
        "blog-title-text-size": a.blogTitleTextSize,
        onFilterCategory: n[1] || (n[1] = d => a.filteredCategoryId = d),
        onPostClick: d => a.emit("post-click", s)
    }, {
        "block-blog-list-item-overlay": _e(() => [he(e.$slots, "block-blog-list-overlay", {
            post: s
        }, void 0, !0)]),
        _: 2
    }, 1032, ["post", "author-name", "cover-object-fit", "shown-items", "blog-categories", "is-animation-active", "blog-reading-time-text", "blog-title-text-size", "onPostClick"])), [
        [o, "blog-list-item"]
    ])), 128))], 2)) : (c(), h("div", ch, [he(e.$slots, "block-blog-list-empty-block", {}, void 0, !0)])), De(a.ZyroPagination, {
        class: "block-blog-list__pagination",
        "current-page": a.currentPage,
        "page-count": a.pageCount,
        onChangePage: a.setCurrentPage
    }, null, 8, ["current-page", "page-count"])], 8, lh)), [
        [o, "builder-section-blog"]
    ])
}
const mh = oe(sh, [
        ["render", dh],
        ["__scopeId", "data-v-93a110a6"]
    ]),
    gh = le({
        name: "BlockBlogListProviderUser",
        components: {
            BlockBlogList: mh
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            currentLocale: {
                type: String,
                default: Nt
            }
        },
        setup() {
            const {
                blogReadingTimeText: e,
                siteId: n,
                pages: t,
                blogCategories: a,
                meta: r
            } = Je();
            return {
                blogReadingTimeText: e,
                siteId: n,
                pages: t,
                blogCategories: a,
                meta: r
            }
        },
        computed: {
            publishedBlogPages() {
                return Object.fromEntries(Object.entries(this.pages).filter(([, e]) => e.type === no && !e.isDraft))
            },
            blogPosts() {
                const e = this.currentLocale === this.meta.defaultLocale;
                return Object.fromEntries(Object.entries(this.publishedBlogPages).map(([n, t]) => {
                    const a = Aa(t.coverImageOrigin, t.coverImagePath, this.siteId, {
                        width: mo,
                        height: Xv
                    });
                    return [n, {
                        id: n,
                        ...t,
                        coverImageSrcset: a,
                        slug: `/${e?"":`${this.currentLocale}/`}${t.slug}`
                    }]
                }))
            }
        }
    });

function ph(e, n, t, a, r, i) {
    const o = Te("BlockBlogList");
    return c(), F(o, {
        data: e.data,
        "block-id": e.blockId,
        posts: e.blogPosts,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText
    }, null, 8, ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text"])
}
const vh = oe(gh, [
        ["render", ph]
    ]),
    hh = le({
        props: {
            columnCount: {
                type: Number,
                default: 3
            }
        }
    }),
    qo = e => (At("data-v-c0f30deb"), e = e(), Bt(), e),
    fh = {
        class: "skeleton-loader"
    },
    yh = qo(() => E("div", {
        class: "skeleton-loader__image-placeholder"
    }, null, -1)),
    bh = qo(() => E("div", {
        class: "skeleton-loader__text"
    }, null, -1)),
    _h = qo(() => E("div", {
        class: "skeleton-loader__text"
    }, null, -1)),
    wh = [yh, bh, _h];

function kh(e, n, t, a, r, i) {
    return c(), h("div", fh, [(c(!0), h(pe, null, ke(e.columnCount, o => (c(), h("div", {
        key: o,
        class: "skeleton-loader__item"
    }, wh))), 128))])
}
const Sh = oe(hh, [
        ["render", kh],
        ["__scopeId", "data-v-c0f30deb"]
    ]),
    Ch = le({
        props: {
            textColorVars: {
                type: Object,
                default: () => ({})
            },
            emptyPageMessage: {
                type: String,
                required: !0
            }
        },
        computed: {
            computedStyles() {
                return { ...Kt(this.textColorVars)
                }
            }
        }
    }),
    Th = E("svg", {
        class: "product-list-empty-state__icon",
        width: "41",
        height: "40",
        viewBox: "0 0 41 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), E("path", {
        d: "M5.5 10H35.5",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), E("path", {
        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1);

function Ph(e, n, t, a, r, i) {
    return c(), h("div", {
        class: "product-list-empty-state",
        style: Re(e.computedStyles)
    }, [Th, E("h6", null, X(e.emptyPageMessage), 1)], 4)
}
const Ih = oe(Ch, [
        ["render", Ph]
    ]),
    Eh = {},
    Dh = {
        width: "392",
        height: "392",
        viewBox: "0 0 392 392",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    },
    Mh = Io('<g clip-path="url(#clip0_2_420)"><rect width="392" height="392" fill="var(--color-success-light)"></rect><path d="M133.859 223.769C134.843 221.858 137.577 221.858 138.561 223.769L162.649 270.514C163.282 271.741 164.751 272.275 166.023 271.742L214.483 251.437C216.466 250.607 218.558 252.361 218.086 254.458L206.528 305.78C206.225 307.125 207.005 308.477 208.321 308.887L258.489 324.525C260.54 325.164 261.014 327.852 259.306 329.154L217.502 361.032C216.407 361.868 216.136 363.404 216.88 364.564L245.273 408.837C246.433 410.645 245.067 413.006 242.921 412.907L190.444 410.42C189.066 410.354 187.869 411.36 187.694 412.729L181.025 464.906C180.753 467.039 178.185 467.975 176.606 466.517L138.006 430.84C136.992 429.904 135.428 429.904 134.414 430.84L95.8141 466.517C94.2351 467.975 91.6671 467.039 91.3946 464.906L84.7258 412.729C84.5509 411.36 83.3542 410.354 81.9766 410.42L29.4987 412.907C27.3526 413.006 25.9869 410.645 27.1466 408.837L55.5405 364.564C56.2846 363.404 56.0134 361.868 54.9179 361.032L13.1143 329.154C11.4063 327.852 11.8805 325.164 13.931 324.525L64.0988 308.887C65.4146 308.477 66.195 307.125 65.8924 305.78L54.3339 254.458C53.8617 252.361 55.9546 250.607 57.937 251.437L106.397 271.742C107.67 272.275 109.138 271.741 109.771 270.514L133.859 223.769Z" fill="var(--color-gray)"></path><path d="M32.7289 525.562C56.9795 538.816 116.766 483.102 166.267 401.122C215.767 319.141 236.236 241.939 211.986 228.685C187.735 215.431 127.948 271.145 78.448 353.125C28.9475 435.105 8.47843 512.308 32.7289 525.562Z" fill="var(--color-gray-border)"></path><path d="M266.714 528.065C312.959 554.631 379.209 526.102 414.687 464.343C450.165 402.584 441.437 330.982 395.192 304.416C348.947 277.85 282.697 306.38 247.219 368.139C211.74 429.898 220.469 501.499 266.714 528.065Z" fill="var(--color-gray-border)"></path><path d="M169.89 442.88C194.14 456.134 244.767 415.592 282.967 352.326C321.168 289.06 332.477 227.028 308.226 213.774C283.976 200.52 233.349 241.063 195.149 304.329C156.948 367.595 145.639 429.627 169.89 442.88Z" fill="var(--color-gray-border)"></path><path d="M235.035 369.11C250.062 375.748 276.749 351.408 294.642 314.746C312.535 278.083 314.859 242.98 299.831 236.342C284.804 229.704 258.117 254.043 240.224 290.706C222.331 327.369 220.008 362.471 235.035 369.11Z" fill="var(--color-gray)"></path><path d="M285.233 362.514C296.758 367.605 316.693 350.03 329.759 323.258C342.825 296.487 344.073 270.657 332.548 265.565C321.023 260.474 301.088 278.049 288.022 304.821C274.956 331.592 273.708 357.422 285.233 362.514Z" fill="var(--color-gray)"></path><path d="M326.668 344.001C334.199 347.328 346.602 337.118 354.373 321.197C362.143 305.276 362.337 289.672 354.807 286.346C347.276 283.019 334.872 293.229 327.102 309.15C319.332 325.071 319.137 340.675 326.668 344.001Z" fill="var(--color-gray)"></path><path d="M360.481 368.158C367.473 371.28 377.736 363.518 383.403 350.822C389.071 338.126 387.998 325.303 381.006 322.182C374.013 319.061 363.751 326.822 358.083 339.518C352.415 352.214 353.489 365.037 360.481 368.158Z" fill="var(--color-gray)"></path><path d="M85.3546 149.427C96.7914 145.844 102.551 131.729 98.2183 117.901C93.8859 104.072 81.1024 95.7667 69.6656 99.3498C58.2287 102.933 52.4694 117.048 56.8018 130.876C61.1342 144.705 73.9177 153.01 85.3546 149.427Z" fill="var(--color-gray)"></path></g><defs><clipPath id="clip0_2_420"><rect width="392" height="392" fill="var(--color-light)"></rect></clipPath></defs>', 2),
    Oh = [Mh];

function Lh(e, n) {
    return c(), h("svg", Dh, Oh)
}
const $l = oe(Eh, [
        ["render", Lh]
    ]),
    Ah = {
        props: {
            text: {
                type: String,
                default: ""
            },
            ribbonStyle: {
                type: Object,
                default: () => ({})
            }
        },
        computed: {
            computedStyles() {
                return { ...Kt(this.ribbonStyle)
                }
            }
        }
    },
    Bh = {
        class: "ecommerce-product-ribbon__text"
    };

function Rh(e, n, t, a, r, i) {
    return c(), h("div", {
        class: "ecommerce-product-ribbon",
        style: Re(i.computedStyles)
    }, [E("p", Bh, X(t.text), 1)], 4)
}
const $h = oe(Ah, [
        ["render", Rh]
    ]),
    Nh = le({
        __name: "ProductListItem",
        props: {
            image: {
                default: ""
            },
            title: {},
            price: {
                default: null
            },
            isCentered: {
                type: Boolean,
                default: !1
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            imageMaxWidth: {},
            duration: {},
            productType: {
                default: ""
            },
            translations: {
                default: () => ({})
            },
            isStoreQuantityTracked: {
                type: Boolean
            },
            quantity: {},
            isButtonEnabled: {
                type: Boolean,
                default: !1
            },
            buttonDisplay: {
                default: ""
            },
            buttonText: {
                default: ""
            },
            buttonStyle: {
                default: () => ({})
            },
            buttonType: {
                default: "primary"
            },
            buttonBorderWidth: {
                default: 0
            },
            isPriceRangeShown: {
                type: Boolean
            },
            ribbon: {
                default: ""
            },
            ribbonStyle: {
                default: () => ({})
            },
            siteId: {
                default: ""
            },
            isPurchasable: {
                type: Boolean
            },
            imageRatio: {
                default: "cover"
            }
        },
        emits: ["button-click"],
        setup(e, {
            expose: n
        }) {
            n(), ht(g => ({
                "5a795a7f": g.imageRatio
            }));
            const t = {
                    [Sa]: xn
                },
                a = e,
                r = u(() => !a.isStoreQuantityTracked || a.quantity > 0),
                i = u(() => a.buttonText || a.translations ? .addToBag || "Add to bag"),
                o = u(() => ({
                    normal: a.buttonStyle[`grid-button-${a.buttonType}-border-color`],
                    hover: a.buttonStyle[`grid-button-${a.buttonType}-border-color-hover`]
                })),
                s = u(() => ({
                    normal: a.buttonStyle[`grid-button-${a.buttonType}-background-color`],
                    hover: a.buttonStyle[`grid-button-${a.buttonType}-background-color-hover`]
                })),
                l = u(() => ({ ...Kt(a.buttonStyle)
                })),
                d = {
                    CUSTOM_ATTRIBUTES: t,
                    props: a,
                    isInStock: r,
                    blockButtonText: i,
                    buttonBorderColor: o,
                    buttonBackgroundColor: s,
                    computedStyles: l,
                    GridButton: Va,
                    get PRODUCT_TYPE_BOOKING() {
                        return Ht
                    },
                    get formatPrice() {
                        return ba
                    },
                    ProductImage: mr,
                    ProductImagePlaceholder: $l,
                    ProductRibbon: $h
                };
            return Object.defineProperty(d, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), d
        }
    }),
    xh = {
        class: "product-list-item__content"
    },
    Hh = {
        class: "product-list-item__title"
    },
    Vh = {
        key: 0,
        class: "product-list-item__price-wrapper"
    },
    Uh = {
        key: 0,
        class: "product-list-item__price-range"
    },
    Yh = {
        key: 0,
        class: "product-list-item__price-content"
    },
    qh = {
        key: 1,
        class: "product-list-item__duration"
    },
    Wh = {
        key: 1,
        class: "product-list-item__text"
    };

function Fh(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", ze({
        class: ["product-list-item", {
            "product-list-item--centered": t.isCentered
        }],
        style: a.computedStyles
    }, a.CUSTOM_ATTRIBUTES), [E("div", xh, [ce((c(), h("div", {
        class: J(["product-list-item__image-wrapper", {
            "product-list-item__image-wrapper--contain": t.imageRatio === "contain"
        }])
    }, [t.image ? (c(), F(a.ProductImage, {
        key: 0,
        src: t.image,
        alt: t.title,
        class: "product-list-item__image",
        "is-eager": t.isEager,
        width: t.imageMaxWidth,
        height: t.imageMaxWidth,
        "site-id": t.siteId,
        "object-fit": t.imageRatio,
        "enable-srcset": "",
        "is-lossless": !0
    }, null, 8, ["src", "alt", "is-eager", "width", "height", "site-id", "object-fit"])) : (c(), F(a.ProductImagePlaceholder, {
        key: 1,
        class: "product-list-item__image"
    })), t.ribbon ? (c(), F(a.ProductRibbon, {
        key: 2,
        text: t.ribbon,
        "ribbon-style": t.ribbonStyle
    }, null, 8, ["text", "ribbon-style"])) : O("", !0)], 2)), [
        [o, "product-list-section-item-image"]
    ]), ce((c(), h("h6", Hh, [Be(X(t.title), 1)])), [
        [o, "product-list-section-item-title"]
    ]), t.price ? ce((c(), h("div", Vh, [a.isInStock ? (c(), h(pe, {
        key: 0
    }, [E("p", null, [t.isPriceRangeShown && !t.price.sale_amount ? (c(), h("span", Uh, X(t.translations.from), 1)) : O("", !0), E("span", {
        class: J({
            "product-list-item__price": t.price.sale_amount
        })
    }, X(a.formatPrice({
        amount: t.price.amount,
        currency: t.price.currency
    })), 3)]), t.price.sale_amount ? (c(), h("p", Yh, [t.isPriceRangeShown ? (c(), h(pe, {
        key: 0
    }, [Be(X(t.translations.from), 1)], 64)) : O("", !0), Be(" " + X(a.formatPrice({
        amount: t.price.sale_amount,
        currency: t.price.currency
    })), 1)])) : O("", !0), t.productType === a.PRODUCT_TYPE_BOOKING ? (c(), h("p", qh, X(t.duration), 1)) : O("", !0)], 64)) : (c(), h("p", Wh, X(t.translations.soldOut), 1))])), [
        [o, "product-list-section-item-price"]
    ]) : O("", !0)]), t.isButtonEnabled && t.isPurchasable ? (c(), h("div", {
        key: 0,
        class: J(["product-list-item__button-wrapper", {
            "product-list-item__button-wrapper--hidden": !a.isInStock,
            "product-list-item__button-wrapper--with-hover": t.buttonDisplay === "hover"
        }]),
        onClick: n[1] || (n[1] = Ee(() => {}, ["prevent", "stop"]))
    }, [ce(De(a.GridButton, {
        type: t.buttonType,
        content: a.blockButtonText,
        class: J(["product-list-item__button", `product-list-item__button--${t.buttonType}`]),
        "tag-name": "button",
        "border-width": t.buttonBorderWidth,
        "border-color": a.buttonBorderColor.normal,
        "border-color-hover": a.buttonBorderColor.hover,
        "background-color": a.buttonBackgroundColor.normal,
        "background-color-hover": a.buttonBackgroundColor.hover,
        onClick: n[0] || (n[0] = s => e.$emit("button-click"))
    }, null, 8, ["type", "content", "class", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [
        [o, "productlistsection-btn-addtobag"]
    ])], 2)) : O("", !0)], 16)
}
const Gh = oe(Nh, [
        ["render", Fh],
        ["__scopeId", "data-v-ad1657c2"]
    ]),
    go = e => e.variants.reduce((n, t) => {
        const a = n.prices[0] ? .sale_amount || n.prices[0] ? .amount,
            r = t.prices[0] ? .sale_amount || t.prices[0] ? .amount;
        return a < r ? n : t
    }),
    jh = e => e.variants.reduce((n, t) => {
        const a = n.prices[0] ? .sale_amount || n.prices[0] ? .amount,
            r = t.prices[0] ? .sale_amount || t.prices[0] ? .amount;
        return a > r ? n : t
    }),
    $r = 24,
    zh = le({
        __name: "BlockEcommerceProductList",
        props: {
            blockId: {},
            products: {},
            productPages: {
                default: () => ({})
            },
            blockStyle: {
                default: () => ({})
            },
            textColorVars: {
                default: () => ({})
            },
            isProductListShown: {
                type: Boolean,
                default: !0
            },
            isLoading: {
                type: Boolean
            },
            isEager: {
                type: Boolean
            },
            columnCount: {
                default: 3
            },
            productsPerPage: {
                default: 9
            },
            translations: {},
            productIds: {
                default: () => []
            },
            productCategoryId: {
                default: ""
            },
            isButtonEnabled: {
                type: Boolean
            },
            buttonDisplay: {
                default: ""
            },
            buttonText: {
                default: ""
            },
            buttonStyle: {
                default: () => ({})
            },
            buttonType: {
                default: "primary"
            },
            buttonBorderWidth: {
                default: 0
            },
            ribbonStyle: {
                default: () => ({})
            },
            isProductListItemLinkDisabled: {
                type: Boolean
            },
            siteId: {},
            variantsQuantity: {},
            imageRatio: {
                default: "cover"
            }
        },
        emits: ["product-click", "button-click", "page-changed"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n();
            const a = e,
                r = t,
                i = Ic(),
                o = A(1),
                s = A(!1),
                l = u(() => `store-page-${a.blockId}`),
                d = u(() => Math.ceil(a.productIds.length / a.productsPerPage)),
                g = u(() => ({
                    [En]: s.value ? In : null
                })),
                m = u(() => o.value > d.value ? d.value : o.value < 1 ? 1 : o.value),
                p = u(() => (m.value - 1) * a.productsPerPage),
                f = u(() => p.value + a.productsPerPage),
                b = u(() => a.productIds.slice(p.value, f.value)),
                S = u(() => {
                    const L = Object.values(a.products),
                        H = L.filter(z => b.value.includes(z.id));
                    return H.length ? H : L.slice(p.value, f.value)
                }),
                C = u(() => a.translations.onlineStoreNoProducts || "No publicly visible products"),
                w = () => {
                    const H = new URLSearchParams(window.location.search).get(l.value) || "1",
                        z = Number.parseInt(H, 10);
                    z !== o.value && (o.value = z)
                };
            Le(() => {
                const H = new URLSearchParams(window.location.search).get(l.value) || "1",
                    z = Number.parseInt(H, 10);
                z !== o.value && (o.value = z, r("page-changed", b.value)), window.addEventListener("popstate", () => {
                    w()
                })
            }), Et(() => {
                window.removeEventListener("popstate", w)
            });
            const y = u(() => a.blockStyle ? .textAlign === "center"),
                D = u(() => {
                    const L = (a.columnCount - 1) * $r,
                        H = Lc - L;
                    return Math.floor(H / a.columnCount)
                }),
                P = u(() => ({
                    "--image-max-width": `${D.value}px`,
                    "--gap-size": `${$r}px`,
                    ...Kt(a.textColorVars)
                })),
                M = async L => {
                    s.value = !1, o.value = L, r("page-changed", b.value), await Dt(), s.value = !0;
                    const H = document.getElementById(a.blockId),
                        z = H ? .getBoundingClientRect();
                    z && z.top >= 0 && z.bottom <= window.innerHeight || H ? .scrollIntoView({
                        behavior: "smooth"
                    })
                },
                R = L => Object.values(a.productPages).find(H => H.productId === L),
                T = {
                    GAP_SIZE: $r,
                    props: a,
                    emit: r,
                    route: i,
                    currentPage: o,
                    isAnimationActive: s,
                    blockStorePageQuery: l,
                    pageCount: d,
                    customAttributes: g,
                    modifiedCurrentPage: m,
                    startIndex: p,
                    endIndex: f,
                    targetIds: b,
                    currentPageProducts: S,
                    emptyPageMessage: C,
                    handleBrowserNavigationPageChange: w,
                    isCentered: y,
                    imageWidth: D,
                    computedStyles: P,
                    handlePageChange: M,
                    getItemProductPage: R,
                    getItemProductPageTo: L => {
                        if (a.isProductListItemLinkDisabled) return i;
                        const H = R(L);
                        return H ? {
                            path: `/${H.slug}`
                        } : {
                            path: "/"
                        }
                    },
                    getSmallestProductPrice: L => kn(L) ? go(L).prices[0] : L.variants[0].prices[0],
                    getProductImage: L => kn(L) && go(L).image_url || L.thumbnail,
                    ListSkeletonLoader: Sh,
                    ZyroPagination: Rl,
                    ProductListEmptyState: Ih,
                    ProductListItem: Gh,
                    get getFormattedBookingDuration() {
                        return Yo
                    },
                    get isProductPriceRangeShown() {
                        return kn
                    },
                    get getFullProductQuantity() {
                        return Al
                    }
                };
            return Object.defineProperty(T, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), T
        }
    }),
    Qh = ["id"],
    Kh = {
        key: 1,
        ref: "productList",
        class: "block-product-list"
    },
    Zh = {
        class: "block-product-list__content"
    };

function Xh(e, n, t, a, r, i) {
    const o = Te("RouterLink");
    return c(), h("div", {
        id: t.blockId,
        class: "block-product-list-wrapper",
        style: Re(a.computedStyles)
    }, [t.isLoading ? (c(), F(a.ListSkeletonLoader, {
        key: 0,
        "column-count": t.columnCount
    }, null, 8, ["column-count"])) : t.isProductListShown ? (c(), h("div", Kh, [E("div", Zh, [(c(!0), h(pe, null, ke(a.currentPageProducts, (s, l) => (c(), F(o, {
        key: `product-${l}-${s.id}`,
        to: a.getItemProductPageTo(s.id),
        class: "block-product-list__link"
    }, {
        default: _e(() => [De(a.ProductListItem, ze(a.customAttributes, {
            image: a.getProductImage(s),
            title: s.title,
            ribbon: s.ribbon_text,
            price: a.getSmallestProductPrice(s),
            "is-centered": a.isCentered,
            "is-eager": t.isEager && l === 0,
            duration: a.getFormattedBookingDuration(s, t.translations),
            "image-max-width": a.imageWidth,
            "image-ratio": t.imageRatio,
            "is-store-quantity-tracked": s.variants[0].manage_inventory,
            "is-price-range-shown": a.isProductPriceRangeShown(s),
            quantity: a.getFullProductQuantity({
                product: s,
                variantsQuantity: t.variantsQuantity
            }),
            "product-type": s.type.value,
            translations: t.translations,
            "is-button-enabled": t.isButtonEnabled,
            "button-display": t.buttonDisplay,
            "button-text": t.buttonText,
            "button-style": t.buttonStyle,
            "button-type": t.buttonType,
            "button-border-width": t.buttonBorderWidth,
            "ribbon-style": t.ribbonStyle,
            "is-purchasable": s.purchasable ? ? !0,
            "site-id": t.siteId,
            onClick: d => e.$emit("product-click", s),
            onButtonClick: d => e.$emit("button-click", s)
        }), null, 16, ["image", "title", "ribbon", "price", "is-centered", "is-eager", "duration", "image-max-width", "image-ratio", "is-store-quantity-tracked", "is-price-range-shown", "quantity", "product-type", "translations", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "ribbon-style", "is-purchasable", "site-id", "onClick", "onButtonClick"])]),
        _: 2
    }, 1032, ["to"]))), 128))]), De(a.ZyroPagination, {
        "current-page": a.currentPage,
        "page-count": a.pageCount,
        class: "block-product-list__pagination",
        color: "var(--body-color)",
        onChangePage: n[0] || (n[0] = s => a.handlePageChange(s))
    }, null, 8, ["current-page", "page-count"])], 512)) : (c(), F(a.ProductListEmptyState, {
        key: 2,
        "text-color-vars": t.textColorVars,
        "empty-page-message": a.emptyPageMessage
    }, null, 8, ["text-color-vars", "empty-page-message"]))], 12, Qh)
}
const Jh = oe(zh, [
        ["render", Xh],
        ["__scopeId", "data-v-327db8c3"]
    ]),
    bs = (e, {
        productPages: n,
        isStoreTypeZyro: t,
        products: a
    }) => {
        const r = u(() => {
                let D;
                return t.value ? D = a.value ? .filter(P => Object.values(n.value).find(M => M.productId === P.id)) : D = a.value, e.data.productCategoryId ? (D = D.filter(P => P.product_collections.some(M => M.collection_id === e.data.productCategoryId)), D ? .sort((P, M) => {
                    const R = P.product_collections.find(Z => Z.collection_id === e.data.productCategoryId),
                        $ = M.product_collections.find(Z => Z.collection_id === e.data.productCategoryId);
                    return R.order - $.order
                })) : D ? .sort((P, M) => P.title.localeCompare(M.title))
            }),
            i = u(() => e.data.settings ? .styles),
            o = u(() => e.data.textColorVars),
            s = u(() => e.data.columnCount),
            l = u(() => e.data.productCategoryId),
            d = u(() => e.data.productIds),
            g = u(() => e.data.isButtonEnabled ? ? !1),
            m = u(() => e.data.buttonDisplay),
            p = u(() => e.data.buttonText),
            f = u(() => e.data.buttonStyle),
            b = u(() => e.data.buttonType),
            S = u(() => e.data.buttonBorderWidth),
            C = u(() => e.data.ribbonStyle),
            w = u(() => e.data.imageRatio),
            y = u(() => e.data.productsPerPage || Ev[s.value || Ll]);
        return {
            productList: r,
            textColorVars: o,
            blockStyle: i,
            columnCount: s,
            productsPerPage: y,
            productIds: d,
            productCategoryId: l,
            isButtonEnabled: g,
            buttonDisplay: m,
            buttonText: p,
            buttonStyle: f,
            buttonType: b,
            buttonBorderWidth: S,
            ribbonStyle: C,
            imageRatio: w
        }
    },
    ef = {
        __name: "BlockEcommerceProductListProviderUser",
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            currentLocale: {
                type: String,
                default: Nt
            },
            blocks: {
                type: Object,
                default: () => ({})
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    siteId: a
                } = Je(),
                {
                    products: r,
                    isStoreTypeZyro: i,
                    productPages: o,
                    isShoppingCartOpen: s,
                    shoppingCartItems: l,
                    variantsQuantity: d,
                    isLoading: g,
                    fetchProducts: m,
                    setShoppingCartOpen: p,
                    setShoppingCartItems: f,
                    setIsCheckoutLoading: b,
                    setSelectedBookingId: S
                } = Vt(),
                {
                    openEcommerceModal: C,
                    closeEcommerceModal: w,
                    setProductPreviewData: y
                } = xt(),
                {
                    initiateCheckout: D
                } = Ja(),
                {
                    productList: P,
                    blockStyle: M,
                    textColorVars: R,
                    columnCount: $,
                    productsPerPage: Z,
                    productIds: G,
                    productCategoryId: T,
                    isButtonEnabled: L,
                    buttonDisplay: H,
                    buttonText: z,
                    buttonStyle: V,
                    buttonType: I,
                    buttonBorderWidth: N,
                    ribbonStyle: U,
                    imageRatio: Q
                } = bs(t, {
                    productPages: o,
                    isStoreTypeZyro: i,
                    products: r
                }),
                _ = A(!1),
                v = u(() => !!P.value ? .length),
                Y = u(() => g.value || !_.value),
                W = q => {
                    m(q)
                },
                ee = async q => {
                    if (t.isInPreviewMode) {
                        C("EcommerceMessageButtonDisabled");
                        return
                    }
                    if (q.options.length) {
                        const te = Object.values(o.value).find(ve => ve.productId === q.id),
                            K = Object.keys(t.blocks).filter(ve => t.blocks[ve].type === "BlockEcommerceProduct").find(ve => te.blocks.includes(ve));
                        if (!K) {
                            if (!te) {
                                window.location.assign("/");
                                return
                            }
                            window.location.assign(`/${te.slug}`);
                            return
                        }
                        y(t.blocks[K]), C("EcommerceProductPreview");
                        return
                    }
                    const k = [{ ...q,
                        variants: [q.variants[0]]
                    }];
                    if (await w(), q.type.value === Ht) {
                        S(q.id), C("EcommerceBookingEventSelect");
                        return
                    }
                    if (t.isCartVisible) {
                        if (f([...l.value, ...k]), s.value) return;
                        p(!0)
                    } else b(!0), await D(k).then(() => {
                        b(!1)
                    })
                };
            Le(() => {
                _.value = !0
            });
            const ie = {
                props: t,
                siteId: a,
                products: r,
                isStoreTypeZyro: i,
                productPages: o,
                isShoppingCartOpen: s,
                shoppingCartItems: l,
                variantsQuantity: d,
                isEcommerceLoading: g,
                fetchProducts: m,
                setShoppingCartOpen: p,
                setShoppingCartItems: f,
                setIsCheckoutLoading: b,
                setSelectedBookingId: S,
                openEcommerceModal: C,
                closeEcommerceModal: w,
                setProductPreviewData: y,
                initiateCheckout: D,
                productList: P,
                blockStyle: M,
                textColorVars: R,
                columnCount: $,
                productsPerPage: Z,
                productIds: G,
                productCategoryId: T,
                isButtonEnabled: L,
                buttonDisplay: H,
                buttonText: z,
                buttonStyle: V,
                buttonType: I,
                buttonBorderWidth: N,
                ribbonStyle: U,
                imageRatio: Q,
                isClientLoaded: _,
                isProductListShown: v,
                isLoading: Y,
                handlePageChange: W,
                handleButtonClick: ee,
                computed: u,
                ref: A,
                onMounted: Le,
                get useSiteGlobal() {
                    return Je
                },
                get isAppPrerendering() {
                    return fl
                },
                BlockEcommerceProductList: Jh,
                get useBlockEcommerceProductList() {
                    return bs
                },
                get SYSTEM_LOCALE() {
                    return Nt
                },
                get useEcommerceModal() {
                    return xt
                },
                get useEcommerce() {
                    return Ja
                },
                get PRODUCT_TYPE_BOOKING() {
                    return Ht
                },
                get useEcommerceGlobal() {
                    return Vt
                }
            };
            return Object.defineProperty(ie, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), ie
        }
    };

function tf(e, n, t, a, r, i) {
    return c(), F(a.BlockEcommerceProductList, {
        "block-id": t.blockId,
        "block-style": a.blockStyle,
        "text-color-vars": a.textColorVars,
        "is-product-list-shown": a.isProductListShown,
        "products-per-page": a.productsPerPage,
        "column-count": a.columnCount,
        "product-pages": a.productPages,
        "product-ids": a.productIds,
        "product-category-id": a.productCategoryId,
        "is-button-enabled": a.isButtonEnabled,
        "button-display": a.buttonDisplay,
        "button-text": a.buttonText,
        "button-style": a.buttonStyle,
        "button-type": a.buttonType,
        "button-border-width": a.buttonBorderWidth,
        "is-loading": a.isLoading,
        "ribbon-style": a.ribbonStyle,
        products: a.productList,
        translations: t.ecommerceTranslations,
        "image-ratio": a.imageRatio,
        "is-eager": t.lcp.type === "block-ecommerce-product-list" && t.lcp.id === t.blockId,
        "site-id": a.siteId,
        "variants-quantity": a.variantsQuantity,
        onPageChanged: a.handlePageChange,
        onButtonClick: a.handleButtonClick
    }, null, 8, ["block-id", "block-style", "text-color-vars", "is-product-list-shown", "products-per-page", "column-count", "product-pages", "product-ids", "product-category-id", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "is-loading", "ribbon-style", "products", "translations", "image-ratio", "is-eager", "site-id", "variants-quantity"])
}
const af = oe(ef, [
        ["render", tf]
    ]),
    Nl = ({
        move: e = {
            swipe: !1,
            drag: !1
        },
        onMoveLeft: n = () => {},
        onMoveRight: t = () => {},
        onMoveUp: a = () => {},
        onMoveDown: r = () => {}
    }) => {
        let i = null,
            o = null;
        const s = e.swipe && e.drag,
            l = e.swipe || e.drag;

        function d(C) {
            return C.touches
        }

        function g(C) {
            const w = d(C)[0];
            i = w.clientX, o = w.clientY
        }

        function m(C) {
            const w = new Image;
            w.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", C.dataTransfer.setDragImage(w, 0, 0), i = C.clientX, o = C.clientY
        }
        const p = (C, w) => {
                Math.abs(C) > Math.abs(w) ? C > 0 ? n() : t() : w > 0 ? a() : r(), i = null, o = null
            },
            f = C => {
                if (!i || !o) return;
                const w = C.touches[0].clientX,
                    y = C.touches[0].clientY,
                    D = i - w,
                    P = o - y;
                p(D, P)
            },
            b = C => {
                if (!i || !o) return;
                const w = i - C.clientX,
                    y = o - C.clientY;
                p(w, y)
            };
        return {
            enableMoveEvents: (C = !0, w = null) => {
                const y = w === null ? document : w,
                    D = C ? "addEventListener" : "removeEventListener";
                if (s) y[D]("touchstart", g, !1), y[D]("touchmove", f, !1), y[D]("dragstart", m, !1), y[D]("drag", b, !1);
                else if (l) {
                    const P = e.swipe ? g : m,
                        M = e.swipe ? f : b;
                    y[D](e.swipe ? "touchstart" : "dragstart", P, !1), y[D](e.swipe ? "touchmove" : "drag", M, !1)
                }
            }
        }
    },
    nf = le({
        components: {
            ProductImage: mr,
            ProductImagePlaceholder: $l
        },
        props: {
            images: {
                type: Array,
                required: !0
            },
            productTitle: {
                type: String,
                required: !0
            },
            arrowsColor: {
                type: String,
                default: "unset"
            },
            navigationThumbnailArrowsColor: {
                type: String,
                default: "unset"
            },
            galleryPlacement: {
                type: String,
                default: "left"
            },
            imageRatio: {
                type: String,
                default: "unset"
            },
            imageBorderRadius: {
                type: String,
                default: "unset"
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            variantImage: {
                type: String,
                default: null
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            isVariantImagePreselected: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            }
        },
        emits: ["image-click"],
        data() {
            return {
                PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX: Ci,
                windowWidth: null,
                slideDirection: "",
                currentIndex: 0,
                imageListStartIndex: 0
            }
        },
        computed: {
            imagePreviewAmount() {
                let e = 0;
                switch (!0) {
                    case this.windowWidth < (this.isGalleryLeft ? 920 : 900):
                        e = 4;
                        break;
                    case this.windowWidth < (this.isGalleryLeft ? 1060 : 1020):
                        e = 5;
                        break;
                    case this.windowWidth < (this.isGalleryLeft ? 1250 : 1160):
                        e = 6;
                        break;
                    case this.windowWidth < (this.isGalleryLeft ? 1400 : 1320):
                        e = 7;
                        break;
                    default:
                        e = this.isGalleryLeft ? 7 : 8
                }
                return this.imageListStartIndex !== 0 && this.imageListStartIndex + e < this.images.length ? e - 1 : e
            },
            isGalleryLeft() {
                return this.galleryPlacement === "left"
            },
            thumbnails() {
                return this.images.slice(this.imageListStartIndex, this.imageListStartIndex + this.imagePreviewAmount)
            },
            isThumbnailVisible() {
                return this.thumbnails.some(e => e.url === this.images[this.currentIndex].url)
            },
            isArrowsShown() {
                return this.isMoreThanOneImage && !this.isQuickPreview
            },
            isRightImageArrowShown() {
                return this.images.length < this.imagePreviewAmount ? !1 : this.imageListStartIndex + this.imagePreviewAmount < this.images.length
            },
            isMoreThanOneImage() {
                return this.images.length > 1
            },
            imageMaxWidth() {
                return this.isQuickPreview ? lc : uc
            },
            carouselStyle() {
                return {
                    "--image-max-width": `${this.imageMaxWidth}px`,
                    "--image-max-width-left": `${cc}px`,
                    "--image-max-width-small": `${Ci}px`,
                    "--image-object-fit": this.imageRatio,
                    "--image-border-radius": this.imageRatio === "cover" ? this.imageBorderRadius : 0,
                    "--image-position": this.imageRatio === "cover" ? "absolute" : "relative",
                    "--arrow-color": this.arrowsColor,
                    "--thumbnail-arrow-color": this.navigationThumbnailArrowsColor
                }
            }
        },
        watch: {
            variantImage() {
                this.setVariantImage(), this.isThumbnailVisible || this.presetThumbnailPosition()
            }
        },
        mounted() {
            this.windowWidth = window.innerWidth, window.addEventListener("resize", this.resizeEventHandler), this.isVariantImagePreselected && this.setVariantImage(), this.enableCarouselMoveEvents(!0)
        },
        beforeUnmount() {
            window.removeEventListener("resize", this.resizeEventHandler), this.enableCarouselMoveEvents(!1)
        },
        methods: {
            resizeEventHandler() {
                this.windowWidth = window.innerWidth, this.imagePreviewAmount < this.images.length && this.presetThumbnailPosition()
            },
            presetThumbnailPosition() {
                this.images.length - this.currentIndex < this.imagePreviewAmount ? this.imageListStartIndex = this.images.length - this.imagePreviewAmount : this.imageListStartIndex = this.currentIndex
            },
            isImageMatch(e) {
                return this.thumbnails[e].url === this.images[this.currentIndex].url
            },
            handleThumbnailClick(e) {
                this.currentIndex = this.images.findIndex(n => n.url === this.thumbnails[e].url)
            },
            goToNextSlide() {
                this.slideDirection = "right", this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1, this.isThumbnailVisible || (this.imageListStartIndex + this.imagePreviewAmount === this.images.length ? this.imageListStartIndex = 0 : (this.presetThumbnailPosition(), this.imagePreviewAmount !== this.thumbnails.length && this.presetThumbnailPosition()))
            },
            goToPreviousSlide() {
                this.slideDirection = "left", this.currentIndex = this.currentIndex === 0 ? this.images.length - 1 : this.currentIndex - 1, this.isThumbnailVisible || (this.imageListStartIndex === 0 ? this.imageListStartIndex = this.images.length - this.imagePreviewAmount : this.presetThumbnailPosition())
            },
            moveImageListRight() {
                const e = this.imagePreviewAmount;
                this.imageListStartIndex += 1;
                const n = this.imagePreviewAmount;
                e !== n && this.isRightImageArrowShown && this.moveImageListRight()
            },
            moveImageListLeft() {
                this.imageListStartIndex -= 1
            },
            enableCarouselMoveEvents(e) {
                if (!this.isMoreThanOneImage) return;
                const {
                    enableMoveEvents: n
                } = Nl({
                    move: {
                        drag: !1,
                        swipe: !0
                    },
                    onMoveLeft: () => this.goToNextSlide(),
                    onMoveRight: () => this.goToPreviousSlide()
                });
                n(e, this.$refs.carouselRef)
            },
            setVariantImage() {
                const e = this.images.findIndex(n => n.url === this.variantImage);
                e > -1 && (this.currentIndex = e)
            }
        }
    }),
    rf = E("span", {
        class: "product-carousel__arrow product-carousel__arrow--left"
    }, null, -1),
    of = [rf],
    sf = E("span", {
        class: "product-carousel__arrow product-carousel__arrow--right"
    }, null, -1),
    lf = [sf],
    uf = ["onClick"],
    cf = {
        class: "product-carousel__dots-wrapper"
    },
    df = ["onClick"];

function mf(e, n, t, a, r, i) {
    const o = Te("ProductImage"),
        s = Te("ProductImagePlaceholder"),
        l = Ge("qa");
    return c(), h("div", {
        class: J(["product-carousel", {
            "product-carousel--left": e.isGalleryLeft
        }]),
        style: Re(e.carouselStyle)
    }, [E("div", {
        ref: "carouselRef",
        class: J(["product-carousel__image-wrapper", {
            "product-carousel__image-wrapper--contain": e.imageRatio === "contain"
        }])
    }, [e.isArrowsShown ? (c(), h(pe, {
        key: 0
    }, [ce((c(), h("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--left",
        onClick: n[0] || (n[0] = (...d) => e.goToPreviousSlide && e.goToPreviousSlide(...d))
    }, of )), [
        [l, "product-carousel-button-prev"]
    ]), ce((c(), h("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--right",
        onClick: n[1] || (n[1] = (...d) => e.goToNextSlide && e.goToNextSlide(...d))
    }, lf)), [
        [l, "product-carousel-button-next"]
    ])], 64)) : O("", !0), e.images.length ? (c(), F(Mt, {
        key: 1,
        name: `slide-${e.slideDirection}`,
        mode: "out-in",
        class: "product-carousel__image-content"
    }, {
        default: _e(() => [(c(), F(o, {
            key: e.images[e.currentIndex].url,
            src: e.images[e.currentIndex].url,
            alt: e.productTitle,
            class: "product-carousel__image product-carousel__main-image",
            "is-eager": e.isEager,
            "object-fit": e.imageRatio,
            width: e.imageMaxWidth,
            height: e.imageMaxWidth,
            "enable-srcset": "",
            onClick: n[2] || (n[2] = d => e.$emit("image-click", e.currentIndex))
        }, null, 8, ["src", "alt", "is-eager", "object-fit", "width", "height"]))]),
        _: 1
    }, 8, ["name"])) : (c(), F(s, {
        key: 2,
        class: "product-carousel__image product-carousel__main-image"
    }))], 2), e.isMoreThanOneImage ? (c(), h(pe, {
        key: 0
    }, [e.isQuickPreview ? O("", !0) : (c(), h("div", {
        key: 0,
        class: J(["product-carousel__image-list", {
            "product-carousel__image-list-left": e.isGalleryLeft
        }])
    }, [e.imageListStartIndex !== 0 ? ce((c(), h("button", {
        key: 0,
        class: J(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--left": !e.isGalleryLeft,
            "product-carousel__image-arrow--top": e.isGalleryLeft
        }]),
        onClick: n[3] || (n[3] = (...d) => e.moveImageListLeft && e.moveImageListLeft(...d))
    }, null, 2)), [
        [l, "product-carousel-image-button-left"]
    ]) : O("", !0), E("div", {
        class: J({
            "product-carousel__image-list-element-wrapper-left": e.isGalleryLeft
        })
    }, [(c(!0), h(pe, null, ke(e.thumbnails, (d, g) => (c(), h("button", {
        key: `image-${g}-${d.url}`,
        class: J(["product-carousel__image-list-element", {
            "product-carousel__image-list-element--active": e.isImageMatch(g)
        }]),
        onClick: m => e.handleThumbnailClick(g)
    }, [De(o, {
        src: d.url,
        alt: e.productTitle,
        class: "product-carousel__image",
        "is-eager": e.isEager,
        "object-fit": e.imageRatio,
        "site-id": e.siteId,
        width: e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
        height: e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX
    }, null, 8, ["src", "alt", "is-eager", "object-fit", "site-id", "width", "height"])], 10, uf))), 128))], 2), e.isRightImageArrowShown ? ce((c(), h("button", {
        key: 1,
        class: J(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--right": !e.isGalleryLeft,
            "product-carousel__image-arrow--bottom": e.isGalleryLeft
        }]),
        onClick: n[4] || (n[4] = (...d) => e.moveImageListRight && e.moveImageListRight(...d))
    }, null, 2)), [
        [l, "product-carousel-image-button-right"]
    ]) : O("", !0)], 2)), E("div", cf, [(c(!0), h(pe, null, ke(e.images, (d, g) => (c(), h("button", {
        key: `image-dot-${g}`,
        class: "product-carousel__dot-button",
        onClick: m => e.currentIndex = g
    }, [E("span", {
        class: J(["product-carousel__dot", {
            "product-carousel__dot--active": g === e.currentIndex
        }])
    }, null, 2)], 8, df))), 128))])], 64)) : O("", !0)], 6)
}
const gf = oe(nf, [
        ["render", mf]
    ]),
    pf = le({
        __name: "OptionSelect",
        props: {
            title: {},
            labelKey: {
                default: "value"
            },
            options: {
                default: () => ({})
            },
            value: {
                default: ""
            }
        },
        emits: ["set-value"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n();
            const a = t,
                i = {
                    emit: a,
                    updateSelectedValue: o => {
                        const s = o.target ? .value;
                        a("set-value", s)
                    }
                };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    }),
    vf = {
        class: "option-select"
    },
    hf = {
        class: "option-select__label"
    },
    ff = {
        class: "option-select__select-wrapper"
    },
    yf = ["value"],
    bf = ["value"];

function _f(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", vf, [E("p", hf, X(t.title), 1), E("div", ff, [ce((c(), h("select", {
        value: t.value,
        class: "option-select__select",
        onChange: n[0] || (n[0] = s => a.updateSelectedValue(s))
    }, [(c(!0), h(pe, null, ke(t.options, (s, l) => (c(), h("option", {
        key: `option-${l}`,
        value: s.id
    }, X(s[t.labelKey]), 9, bf))), 128))], 40, yf)), [
        [o, "product-section-select-button"]
    ])])])
}
const wf = oe(pf, [
        ["render", _f],
        ["__scopeId", "data-v-4f73632f"]
    ]),
    kf = {
        props: {
            imageBorderRadius: {
                type: String,
                default: "0"
            },
            textAlign: {
                type: String,
                default: ""
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--image-border-radius": this.imageBorderRadius
                }
            }
        }
    },
    xl = e => (At("data-v-56d737b7"), e = e(), Bt(), e),
    Sf = xl(() => E("div", {
        class: "skeleton-loader__image"
    }, null, -1)),
    Cf = xl(() => E("div", {
        class: "skeleton-loader__title skeleton-loader__text"
    }, null, -1));

function Tf(e, n, t, a, r, i) {
    return c(), h("div", {
        class: "skeleton-loader",
        style: Re(i.computedStyles)
    }, [Sf, E("div", {
        class: J(["skeleton-loader__wrapper", {
            "skeleton-loader__wrapper--center": t.textAlign === "center"
        }])
    }, [Cf, (c(), h(pe, null, ke(10, o => E("div", {
        key: o,
        class: "skeleton-loader__text"
    })), 64))], 2)], 4)
}
const Pf = oe(kf, [
        ["render", Tf],
        ["__scopeId", "data-v-56d737b7"]
    ]),
    If = le({
        name: "QuantityPicker",
        props: {
            qaSelector: {
                type: String,
                default: ""
            },
            isStockAvailable: {
                type: Boolean,
                default: !0
            },
            quantity: {
                type: Number,
                required: !0
            },
            size: {
                type: Number,
                default: 48
            },
            fontSize: {
                type: Number,
                default: 16
            },
            isCartStyle: {
                type: Boolean,
                default: !1
            },
            isInputDisabled: {
                type: Boolean,
                default: !1
            },
            isLimitReached: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["quantity-change"],
        data() {
            return {
                inputValue: this.quantity
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--size": `${this.size}px`,
                    "--font-size": `${this.fontSize}px`
                }
            },
            isIncreaseDisabled() {
                return !this.isStockAvailable || this.isLimitReached
            }
        },
        watch: {
            quantity(e) {
                this.inputValue = e
            }
        },
        methods: {
            handleQuantityInput(e) {
                const n = e.target ? .value;
                if (n.match(Hc)) this.$emit("quantity-change", Number(e.target.value));
                else if (n === "") return;
                this.inputValue = this.quantity
            },
            handleEmptyInput(e) {
                e.target ? .value === "" && (this.$emit("quantity-change", 1), this.inputValue = 1)
            }
        }
    }),
    Ef = ["disabled"],
    Df = ["disabled"];

function Mf(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("span", {
        class: J(["quantity-picker", {
            "quantity-picker--cart-style": e.isCartStyle
        }]),
        style: Re(e.computedStyles)
    }, [ce((c(), h("button", {
        class: J(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": e.isCartStyle
        }]),
        onClick: n[0] || (n[0] = s => e.$emit("quantity-change", e.quantity - 1))
    }, [Be(" - ")], 2)), [
        [o, `${e.qaSelector}-btn-decrease`]
    ]), ce(E("input", {
        "onUpdate:modelValue": n[1] || (n[1] = s => e.inputValue = s),
        disabled: e.isInputDisabled,
        class: J(["quantity-picker__amount", {
            "quantity-picker__amount--borderless": e.isCartStyle
        }]),
        onInput: n[2] || (n[2] = (...s) => e.handleQuantityInput && e.handleQuantityInput(...s)),
        onBlur: n[3] || (n[3] = (...s) => e.handleEmptyInput && e.handleEmptyInput(...s))
    }, null, 42, Ef), [
        [sl, e.inputValue],
        [o, `${e.qaSelector}-text-qty`]
    ]), ce((c(), h("button", {
        class: J(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": e.isCartStyle
        }]),
        disabled: e.isIncreaseDisabled,
        onClick: n[4] || (n[4] = s => e.$emit("quantity-change", e.quantity + 1))
    }, [Be(" + ")], 10, Df)), [
        [o, `${e.qaSelector}-btn-increaseq`]
    ])], 6)
}
const Hl = oe(If, [
        ["render", Mf],
        ["__scopeId", "data-v-9766ec29"]
    ]),
    Nr = 5,
    vn = 1,
    Of = le({
        __name: "BlockEcommerceProduct",
        props: {
            blockId: {},
            productData: {},
            blockStyle: {
                default: () => ({})
            },
            textColorVars: {
                default: () => ({})
            },
            blockButtonText: {
                default: ""
            },
            blockButtonStyle: {
                default: () => ({})
            },
            blockButtonType: {
                default: "primary"
            },
            blockButtonBorderWidth: {
                default: 0
            },
            navigationArrowsColor: {
                default: ""
            },
            navigationThumbnailArrowsColor: {
                default: ""
            },
            galleryPlacement: {
                default: ""
            },
            imageRatio: {
                default: "cover"
            },
            imageBorderRadius: {
                default: "0%"
            },
            isLoading: {
                type: Boolean,
                default: !1
            },
            isCheckoutLoading: {
                type: Boolean,
                default: !1
            },
            canAddToCart: {
                type: Function,
                default: () => !0
            },
            isEager: {
                type: Boolean,
                default: !1
            },
            translations: {},
            quantifiedCartItemsList: {
                default: () => []
            },
            isQuantityPickerEnabled: {
                type: Boolean
            },
            productPages: {
                default: () => ({})
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            isCartVisible: {
                type: Boolean
            },
            siteId: {},
            shoppingCartItems: {
                default: () => []
            },
            variantsQuantity: {},
            currentPageType: {
                default: "default"
            }
        },
        emits: ["buy-button-click", "click-more", "image-click"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            n(), ht(k => ({
                f775556c: g.value
            }));
            const a = {
                    [Sa]: xn
                },
                r = e,
                i = t,
                o = A(1),
                s = A(""),
                l = A(!1),
                d = A(da),
                g = u(() => `${sa}px`),
                m = u(() => r.currentPageType === dl),
                p = u(() => ({
                    normal: r.blockButtonStyle[`grid-button-${r.blockButtonType}-background-color`],
                    hover: r.blockButtonStyle[`grid-button-${r.blockButtonType}-background-color-hover`]
                })),
                f = u(() => ({
                    hover: r.blockButtonStyle[`grid-button-${r.blockButtonType}-border-color-hover`],
                    normal: r.blockButtonStyle[`grid-button-${r.blockButtonType}-border-color`]
                })),
                b = u(() => r.blockStyle ? .textAlign),
                S = u(() => r.productData),
                C = u(() => S.value.options.length ? S.value.options.map(k => ({ ...k.values.filter((te, ue, K) => K.findIndex(ve => ve.value === te.value) === ue)
                })) : []),
                w = u(() => d.value ? .variants[0]),
                y = u(() => r.productData.purchasable === void 0 || r.productData.purchasable),
                D = k => {
                    const te = w.value ? .options.find(ue => ue.option_id === C.value[k][0].option_id);
                    return Object.values(C.value[k]).find(ue => te ? .value === ue.value) ? .id
                },
                P = u(() => d.value.id ? w.value ? .prices[0] : S.value ? .variants[0].prices[0]),
                M = u(() => r.quantifiedCartItemsList.find(k => k.product.variants[0].id === w.value ? .id) ? .quantity || 0),
                R = u(() => r.isCartVisible ? o.value + M.value : o.value),
                $ = u(() => w.value ? .manage_inventory ? R.value < wn({
                    variantsQuantity: r.variantsQuantity,
                    variantId: w.value ? .id
                }) : !0),
                Z = u(() => ({ ...Kt({ ...r.textColorVars,
                        ...r.blockButtonStyle
                    })
                })),
                G = u(() => !S.value ? .options.length || S.value ? .options.length && d.value),
                T = u(() => S.value ? .type.value === Ht),
                L = u(() => T.value && r.shoppingCartItems ? .some(k => k.id === S.value ? .id)),
                H = u(() => L.value || !r.canAddToCart(S.value ? .id, d.value ? .variants[0].id)),
                z = u(() => L.value ? `✓ ${r.translations.booked}` : r.blockButtonText || r.translations ? .addToBag || "Add to bag"),
                V = u(() => S.value ? .variants[0].booking_event ? .location),
                I = u(() => Yo(S.value, r.translations)),
                N = u(() => w.value ? .manage_inventory && wn({
                    variantsQuantity: r.variantsQuantity,
                    variantId: w.value ? .id
                }) === 0),
                U = u(() => !!w.value ? .manage_inventory),
                Q = u(() => {
                    if (!r.productPages) return "/";
                    const k = Object.values(r.productPages).find(te => te.productId === S.value.id);
                    return k ? `/${k.slug}` : "/"
                }),
                _ = u(() => {
                    const k = wn({
                        variantsQuantity: r.variantsQuantity,
                        variantId: w.value ? .id
                    });
                    return N.value || M.value === k ? r.translations.outOfStock : `${k<=Nr?k:`${Nr}+`} ${r.translations.inStock} `
                }),
                v = k => ({ ...S.value,
                    variants: [k]
                }),
                Y = () => {
                    if (!S.value) return da;
                    if (S.value[Tl] === $o) {
                        const te = S.value.variants.reduce((ve, me) => {
                                const j = ve.prices[0] ? .sale_amount || ve.prices[0] ? .amount,
                                    ne = me.prices[0] ? .sale_amount || me.prices[0] ? .amount;
                                return j <= ne ? ve : me
                            }),
                            ue = C.value.map(ve => Object.values(ve).find(me => te.options.some(j => j.value === me.value)) || {}),
                            K = { ...te,
                                options: [...ue]
                            };
                        return v(K)
                    }
                    const k = S.value.variants.find(te => te.options.every(ue => C.value.some(K => K[0].value === ue.value)));
                    return v(k || S.value.variants[0])
                },
                W = () => {
                    const k = new Array(o.value).fill(d.value);
                    o.value = vn, i("buy-button-click", k)
                },
                ee = k => {
                    o.value = vn;
                    const te = S.value.options.map(me => me.values.find(j => j.id === k)).find(me => me) || {},
                        K = [...w.value ? .options.filter(me => me.option_id !== te.option_id), te],
                        ve = S.value.variants.find(me => me.options.every(j => K.some(ne => ne.value === j.value && ne.option_id === j.option_id)));
                    ve && (d.value = v(ve))
                },
                ie = k => {
                    const te = w.value ? .manage_inventory;
                    if (l.value = r.shoppingCartItems.length + k >= ja, te) {
                        const ue = wn({
                            variantsQuantity: r.variantsQuantity,
                            variantId: w.value ? .id
                        });
                        if (M.value + k > ue || l.value) {
                            const K = Math.min(ue - M.value, ja - r.shoppingCartItems.length);
                            o.value = K;
                            return
                        }
                    } else if (l.value) {
                        o.value = ja - r.shoppingCartItems.length;
                        return
                    }
                    if (k <= 0) {
                        o.value = vn;
                        return
                    }
                    o.value = k
                };
            Le(() => {
                S.value && (d.value = Y())
            }), Ve(S, (k, te) => {
                JSON.stringify(k) !== JSON.stringify(te) && (d.value = Y())
            }), Ve(d, (k, te) => {
                te ? .id === -1 && !k ? .site_product_selection || JSON.stringify(k) !== JSON.stringify(te) && k ? .variants[0].image_url && (s.value = k.variants[0].image_url)
            }), Ve(() => r.shoppingCartItems, k => {
                const te = k ? .length || 0;
                o.value = vn, l.value = te + o.value >= ja
            }, {
                immediate: !0
            });
            const q = {
                MAX_STOCK_AMOUNT_TO_SHOW: Nr,
                DEFAULT_PICKER_VALUE: vn,
                CUSTOM_ATTRIBUTES: a,
                props: r,
                emit: i,
                selectedQuantity: o,
                variantImage: s,
                isLimitReached: l,
                selectedVariant: d,
                mobileMaxWidthCSSVar: g,
                isBlockInProductPage: m,
                buttonBackgroundColor: p,
                buttonBorderColor: f,
                textAlign: b,
                productData: S,
                uniqueOptionSelections: C,
                selectedValueVariant: w,
                isPurchasable: y,
                selectedOption: D,
                priceData: P,
                quantityInCart: M,
                totalQuantitySelected: R,
                isStockAvailable: $,
                computedStyles: Z,
                isPriceShown: G,
                isProductTypeBooking: T,
                isBookingProductInCart: L,
                isAddToCartDisabled: H,
                buttonText: z,
                location: V,
                formattedBookingDuration: I,
                isOutOfStock: N,
                isStockInfoShown: U,
                productPagePath: Q,
                stockInfoText: _,
                getProductWithSelectedVariant: v,
                getInitiallySelectedVariant: Y,
                handleButtonClick: W,
                handleVariantOptionChange: ee,
                handleQuantityChange: ie,
                Carousel: gf,
                OptionSelect: wf,
                GridButton: Va,
                get formatPrice() {
                    return ba
                },
                get isProductPriceRangeShown() {
                    return kn
                },
                ProductSkeletonLoader: Pf,
                QuantityPicker: Hl
            };
            return Object.defineProperty(q, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), q
        }
    }),
    Lf = ["id"],
    Af = {
        class: "block-product__content-wrapper"
    },
    Bf = {
        class: "block-product__price-data-wrapper"
    },
    Rf = {
        key: 0,
        class: "block-product__title"
    },
    $f = {
        key: 1,
        class: "block-product__title"
    },
    Nf = {
        class: "block-product__subtitle"
    },
    xf = {
        class: "block-product__additional-info"
    },
    Hf = {
        key: 0,
        class: "block-product__price body-large"
    },
    Vf = {
        key: 1,
        class: "block-product__duration body-large"
    },
    Uf = {
        key: 3,
        class: "block-product__location"
    },
    Yf = {
        key: 4,
        class: "block-product__option-select-wrapper"
    },
    qf = {
        key: 0,
        class: "block-product__stock-text"
    },
    Wf = {
        key: 0,
        class: "block-product__button-wrapper"
    },
    Ff = {
        key: 0,
        class: "block-product__notice"
    },
    Gf = ["innerHTML"];

function jf(e, n, t, a, r, i) {
    const o = Te("RouterLink"),
        s = Ge("qa");
    return c(), h("div", ze({
        id: t.blockId,
        class: "block-product-wrapper"
    }, a.CUSTOM_ATTRIBUTES), [t.isLoading || !a.productData ? (c(), F(a.ProductSkeletonLoader, {
        key: 0,
        "image-border-radius": t.imageBorderRadius,
        "text-align": a.textAlign
    }, null, 8, ["image-border-radius", "text-align"])) : (c(), h("div", {
        key: 1,
        class: J(["block-product", {
            "block-product--centered": a.textAlign === "center",
            "block-product--in-preview": t.isQuickPreview
        }]),
        style: Re(a.computedStyles)
    }, [De(a.Carousel, {
        images: a.productData.images,
        "product-title": a.productData.title,
        "arrows-color": t.navigationArrowsColor,
        "navigation-thumbnail-arrows-color": t.navigationThumbnailArrowsColor,
        "gallery-placement": t.galleryPlacement,
        "image-ratio": t.imageRatio,
        "image-border-radius": t.imageBorderRadius,
        "is-eager": t.isEager,
        "site-id": t.siteId,
        "variant-image": a.variantImage,
        "is-quick-preview": t.isQuickPreview,
        "is-variant-image-preselected": a.isProductPriceRangeShown(a.productData),
        onImageClick: n[0] || (n[0] = l => e.$emit("image-click", l))
    }, null, 8, ["images", "product-title", "arrows-color", "navigation-thumbnail-arrows-color", "gallery-placement", "image-ratio", "image-border-radius", "is-eager", "site-id", "variant-image", "is-quick-preview", "is-variant-image-preselected"]), E("div", Af, [E("div", Bf, [a.isBlockInProductPage ? ce((c(), h("h1", Rf, [Be(X(a.productData.title), 1)])), [
        [s, "builder-product-section-title"]
    ]) : ce((c(), h("h3", $f, [Be(X(a.productData.title), 1)])), [
        [s, "builder-product-section-title"]
    ]), E("h5", Nf, X(a.productData.subtitle), 1), Object.keys(a.priceData || {}) ? .length ? (c(), h("div", {
        key: 2,
        class: J(["block-product__price-wrapper", {
            "block-product__price-wrapper--with-duration": a.isProductTypeBooking
        }])
    }, [a.isPriceShown ? (c(), h("p", {
        key: 0,
        class: J(["block-product__price body-large", {
            "block-product__price--sale": a.priceData.sale_amount
        }])
    }, X(a.formatPrice({
        amount: a.priceData.amount,
        currency: a.priceData.currency
    })), 3)) : O("", !0), E("div", xf, [a.priceData.sale_amount && a.isPriceShown ? (c(), h("p", Hf, X(a.formatPrice({
        amount: a.priceData.sale_amount,
        currency: a.priceData.currency
    })), 1)) : O("", !0), a.isProductTypeBooking ? (c(), h("p", Vf, X(a.formattedBookingDuration), 1)) : O("", !0)])], 2)) : O("", !0), a.isProductTypeBooking ? (c(), h("p", Uf, X(a.location), 1)) : O("", !0), a.productData.options.length ? (c(), h("div", Yf, [(c(!0), h(pe, null, ke(a.productData.options, (l, d) => (c(), F(a.OptionSelect, {
        key: `option-${d}`,
        value: a.selectedOption(d),
        options: a.uniqueOptionSelections[d],
        title: l.title,
        class: J(["block-product__option-select", {
            "block-product__option-select--centered": a.textAlign === "center"
        }]),
        "label-key": "value",
        onSetValue: n[1] || (n[1] = g => a.handleVariantOptionChange(g))
    }, null, 8, ["value", "options", "title", "class"]))), 128))])) : O("", !0), !a.isProductTypeBooking && t.isQuantityPickerEnabled && a.isPurchasable ? (c(), h("div", {
        key: 5,
        class: J(["block-product__quantity-wrapper", {
            "block-product__quantity-wrapper--disabled": a.isOutOfStock || a.isAddToCartDisabled
        }])
    }, [De(a.QuantityPicker, {
        "qa-selector": "productpage",
        quantity: a.selectedQuantity,
        "is-limit-reached": a.isLimitReached,
        "is-stock-available": a.isStockAvailable,
        onQuantityChange: a.handleQuantityChange
    }, null, 8, ["quantity", "is-limit-reached", "is-stock-available"]), a.isStockInfoShown ? (c(), h("p", qf, X(a.stockInfoText), 1)) : O("", !0)], 2)) : O("", !0)]), a.isPurchasable ? (c(), h("div", Wf, [ce(De(a.GridButton, {
        type: t.blockButtonType,
        content: a.buttonText,
        class: J(["block-product__button", `block-product__button--${t.blockButtonType}`]),
        "is-loading": t.isCheckoutLoading,
        "tag-name": "button",
        disabled: a.isAddToCartDisabled,
        "border-width": t.blockButtonBorderWidth,
        "border-color": a.buttonBorderColor.normal,
        "border-color-hover": a.buttonBorderColor.hover,
        "background-color": a.buttonBackgroundColor.normal,
        "background-color-hover": a.buttonBackgroundColor.hover,
        onClick: a.handleButtonClick
    }, null, 8, ["type", "content", "class", "is-loading", "disabled", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [
        [s, "productsection-btn-addtobag"]
    ])])) : O("", !0), De(Mt, null, {
        default: _e(() => [a.isBookingProductInCart ? (c(), h("p", Ff, X(t.translations.purchaseToBookAgain), 1)) : O("", !0)]),
        _: 1
    }), a.productData.description && !t.isQuickPreview ? (c(), h("p", {
        key: 1,
        class: "block-product__description",
        innerHTML: a.productData.description
    }, null, 8, Gf)) : t.isQuickPreview ? (c(), F(o, {
        key: 2,
        to: {
            path: a.productPagePath
        },
        class: "block-product__link body-large",
        onClick: n[2] || (n[2] = l => e.$emit("click-more"))
    }, {
        default: _e(() => [Be(X(t.translations.moreDetails), 1)]),
        _: 1
    }, 8, ["to"])) : O("", !0)])], 6))], 16, Lf)
}
const zf = oe(Of, [
        ["render", jf]
    ]),
    Qf = e => {
        const n = u(() => e.data.product.id),
            t = u(() => e.data.settings ? .styles),
            a = u(() => e.data.textColorVars),
            r = u(() => e.data.buttonText),
            i = u(() => e.data.buttonStyle),
            o = u(() => e.data.buttonType),
            s = u(() => e.data.buttonBorderWidth),
            l = u(() => e.data.navigationArrowsColor),
            d = u(() => e.data.navigationThumbnailArrowsColor),
            g = u(() => e.data.galleryPlacement),
            m = u(() => e.data.imageRatio),
            p = u(() => e.data.imageBorderRadius),
            f = u(() => e.data.isQuantityPickerEnabled ? ? !0);
        return {
            productId: n,
            blockStyle: t,
            blockButtonText: r,
            blockButtonStyle: i,
            blockButtonType: o,
            blockButtonBorderWidth: s,
            textColorVars: a,
            imageBorderRadius: p,
            navigationArrowsColor: l,
            navigationThumbnailArrowsColor: d,
            galleryPlacement: g,
            imageRatio: m,
            isQuantityPickerEnabled: f
        }
    },
    Kf = e => e.replace(/<[^>]*>/g, ""),
    Zf = ({
        product: e,
        pageSlug: n
    }) => {
        const t = hl(window.location.hostname),
            {
                variants: a
            } = e,
            r = a.length > 1,
            i = {
                "@context": "https://schema.org/",
                "@type": "Product",
                name: e.title,
                image: e.images.map(o => o.url),
                description: e.description ? Kf(e.description) : "",
                offers: {}
            };
        if (r) {
            const s = go(e).prices[0],
                l = ba({
                    amount: s.sale_amount || s.amount,
                    currency: s.currency,
                    isPriceDisplayedWithCurrency: !1
                }),
                g = jh(e).prices[0],
                m = ba({
                    amount: g.sale_amount || g.amount,
                    currency: g.currency,
                    isPriceDisplayedWithCurrency: !1
                });
            i.offers = {
                "@type": "AggregateOffer",
                url: `https://${t}/${n}`,
                priceCurrency: g.currency.code,
                lowPrice: l,
                highPrice: m
            }
        } else {
            const s = a[0].prices[0],
                l = ba({
                    amount: s.sale_amount || s.amount,
                    currency: s.currency,
                    isPriceDisplayedWithCurrency: !1
                });
            i.offers = {
                "@type": "Offer",
                url: `https://${t}/${n}`,
                priceCurrency: s.currency.code,
                price: l,
                availability: "https://schema.org/InStock"
            }
        }
        return i
    },
    Xf = ({
        product: e,
        pageSlug: n
    }) => {
        const t = {
            type: "element",
            tagName: "script",
            properties: {
                [dc]: `jsonld-product-${e.id}`,
                type: "application/ld+json"
            },
            children: []
        };
        t.children = [{
            type: "text",
            value: JSON.stringify(Zf({
                product: e,
                pageSlug: n
            }))
        }], Sc(t)
    },
    Jf = le({
        __name: "BlockEcommerceProductProviderUser",
        props: {
            blockId: {
                default: ""
            },
            data: {},
            lcp: {
                default: () => ({})
            },
            ecommerceTranslations: {
                default: () => ({})
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            productPages: {
                default: () => []
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            currentPageType: {
                default: "default"
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    siteId: a
                } = Je(),
                {
                    quantifiedCartItemsList: r,
                    canAddToCart: i,
                    isShoppingCartOpen: o,
                    products: s,
                    shoppingCartItems: l,
                    variantsQuantity: d,
                    isCheckoutLoading: g,
                    isLoading: m,
                    isLoaded: p,
                    setShoppingCartOpen: f,
                    setShoppingCartItems: b,
                    setIsCheckoutLoading: S,
                    setSelectedBookingId: C
                } = Vt(),
                {
                    openEcommerceModal: w,
                    closeEcommerceModal: y
                } = xt(),
                {
                    initiateCheckout: D
                } = Ja(),
                {
                    addImagesToLightbox: P
                } = en(),
                {
                    productId: M,
                    blockStyle: R,
                    blockButtonText: $,
                    blockButtonStyle: Z,
                    blockButtonType: G,
                    blockButtonBorderWidth: T,
                    textColorVars: L,
                    imageBorderRadius: H,
                    navigationArrowsColor: z,
                    navigationThumbnailArrowsColor: V,
                    galleryPlacement: I,
                    imageRatio: N,
                    isQuantityPickerEnabled: U
                } = Qf(t),
                Q = u(() => s.value.find(k => k.id === M.value) || da),
                _ = u(() => t.productPages.find(k => k.productId === Q.value.id)),
                v = A(null),
                Y = () => {
                    setTimeout(() => {
                        v.value = In
                    }, 100)
                },
                W = () => {
                    o.value || f(!0)
                },
                ee = k => {
                    const te = Q.value.images.map(ue => ({
                        alt: Q.value.title,
                        src: ue.url
                    }));
                    P(te, k)
                },
                ie = async k => {
                    if (await y(), Q.value.type.value === Ht) {
                        C(M.value), w("EcommerceBookingEventSelect");
                        return
                    }
                    if ($a() || t.isInPreviewMode) {
                        w("EcommerceMessageButtonDisabled");
                        return
                    }
                    t.isCartVisible ? (b([...l.value, ...k]), W()) : (S(!0), await D(k), S(!1))
                };
            Le(() => {
                Y()
            }), Et(() => {
                y()
            }), Ve(Q, () => {
                Q.value && _.value && Xf({
                    product: Q.value,
                    pageSlug: _.value ? .slug
                })
            });
            const q = {
                props: t,
                siteId: a,
                quantifiedCartItemsList: r,
                canAddToCart: i,
                isShoppingCartOpen: o,
                products: s,
                shoppingCartItems: l,
                variantsQuantity: d,
                isCheckoutLoading: g,
                isLoading: m,
                isLoaded: p,
                setShoppingCartOpen: f,
                setShoppingCartItems: b,
                setIsCheckoutLoading: S,
                setSelectedBookingId: C,
                openEcommerceModal: w,
                closeEcommerceModal: y,
                initiateCheckout: D,
                addImagesToLightbox: P,
                productId: M,
                blockStyle: R,
                blockButtonText: $,
                blockButtonStyle: Z,
                blockButtonType: G,
                blockButtonBorderWidth: T,
                textColorVars: L,
                imageBorderRadius: H,
                navigationArrowsColor: z,
                navigationThumbnailArrowsColor: V,
                galleryPlacement: I,
                imageRatio: N,
                isQuantityPickerEnabled: U,
                product: Q,
                productPage: _,
                animationState: v,
                setAnimationState: Y,
                manageCartOpenState: W,
                handleImageClick: ee,
                handleBuyButtonClick: ie,
                get DATA_ATTRIBUTE_ANIMATION_STATE() {
                    return En
                },
                BlockEcommerceProduct: zf
            };
            return Object.defineProperty(q, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), q
        }
    });

function ey(e, n, t, a, r, i) {
    return c(), F(a.BlockEcommerceProduct, ze({
        blockId: t.blockId,
        blockStyle: a.blockStyle,
        blockButtonText: a.blockButtonText,
        blockButtonStyle: a.blockButtonStyle,
        blockButtonType: a.blockButtonType,
        blockButtonBorderWidth: a.blockButtonBorderWidth,
        textColorVars: a.textColorVars,
        imageBorderRadius: a.imageBorderRadius,
        navigationArrowsColor: a.navigationArrowsColor,
        navigationThumbnailArrowsColor: a.navigationThumbnailArrowsColor,
        galleryPlacement: a.galleryPlacement,
        imageRatio: a.imageRatio,
        isQuantityPickerEnabled: a.isQuantityPickerEnabled,
        quantifiedCartItemsList: a.quantifiedCartItemsList,
        isCheckoutLoading: a.isCheckoutLoading,
        productPages: t.productPages,
        isQuickPreview: t.isQuickPreview,
        currentPageType: t.currentPageType
    }, {
        "product-data": a.product,
        "can-add-to-cart": a.canAddToCart,
        "is-loading": (a.isLoading || !a.isLoaded) && a.productId !== -1,
        translations: t.ecommerceTranslations,
        "is-cart-visible": t.isCartVisible,
        "is-eager": t.lcp.type === "block-ecommerce-product" && t.lcp.id === t.blockId,
        [a.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: a.animationState,
        "site-id": a.siteId,
        "shopping-cart-items": a.shoppingCartItems,
        "variants-quantity": a.variantsQuantity,
        onBuyButtonClick: a.handleBuyButtonClick,
        onClickMore: a.closeEcommerceModal,
        onImageClick: a.handleImageClick
    }), null, 16, ["product-data", "can-add-to-cart", "is-loading", "translations", "is-cart-visible", "is-eager", "site-id", "shopping-cart-items", "variants-quantity", "onClickMore"])
}
const Vl = oe(Jf, [
        ["render", ey]
    ]),
    ty = le({
        components: {
            ZyroLoader: No
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            storeId: {
                type: String,
                required: !0
            },
            isStoreLoading: {
                type: Boolean,
                required: !0
            },
            showStore: {
                type: Boolean,
                required: !0
            },
            loadingText: {
                type: String,
                default: "Store is loading"
            }
        }
    }),
    ay = ["id"],
    ny = {
        key: 0,
        class: "block-ecwid-store__loader-block"
    },
    ry = ["id"];

function oy(e, n, t, a, r, i) {
    const o = Te("ZyroLoader"),
        s = Ge("qa");
    return ce((c(), h("div", {
        id: e.blockId,
        class: "block-ecwid-store"
    }, [e.isStoreLoading ? (c(), h("div", ny, [De(o, {
        size: "44px",
        class: "block-ecwid-store__loader",
        color: "var(--color-dark)"
    }), Be(" " + X(e.loadingText), 1)])) : O("", !0), E("div", {
        class: J({
            "height-0": e.isStoreLoading
        })
    }, [e.showStore ? ce((c(), h("div", {
        key: 0,
        id: `my-store-${e.storeId}`
    }, null, 8, ry)), [
        [s, "onlinestore-section-ecwid"]
    ]) : O("", !0)], 2)], 8, ay)), [
        [s, "builder-section-onlinestore"]
    ])
}
const iy = oe(ty, [
        ["render", oy],
        ["__scopeId", "data-v-912878a7"]
    ]),
    hn = `${ll}/ecwid-app-images`,
    _s = [{
        name: "omniva",
        logoSource: `${hn}/omniva.svg`,
        headerText: "Omniva"
    }, {
        name: "dpd",
        logoSource: `${hn}/dpd.svg`,
        headerText: "DPD"
    }, {
        name: "lpexpress",
        logoSource: `${hn}/lpexpress.svg`,
        headerText: "LPExpress"
    }, {
        name: "inpost",
        logoSource: `${hn}/inpost.svg`,
        headerText: "InPost"
    }, {
        name: "other",
        logoSource: `${hn}/other.svg`,
        headerText: "other"
    }],
    sy = ({
        headerText: e,
        name: n,
        logoSource: t
    }) => {
        const a = n === "other",
            r = rosettaMessages["new-frontend"]["Checkout.LocalDelivery.title"];
        return `
	<div class="ec-form__cell ec-form__cell--4">
		<label>
			<div class="ec-form__title ec-header-h6">${a?r:e}</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty">
			<label for="${n}">
				<div class="ec-radiogroup__radio">
					<div class="form-control--radio form-control ">
						<div class="form-control__radio-wrap">
							<input class="form-control__radio" type="radio" name="delivery-filter" value="${n}" data-filter="${n}">
							<div class="form-control__radio-view">
								<div class="form-control__radio-view-inner"></div>
							</div>
						</div>
						<div class="form-control__inline-label">
							<img class="filter-logo" src="${t}" alt="${n}" title="${n}" />
							${a?r:""}
						</div>
					</div>
				</div>
			</label>
		</div>
	</div>
	`
    },
    ly = () => `
<div class="zyro-ecwid__search ec-form__row">
	<div class="ec-form__cell ec-form__cell--4">
		<label for="zyro-ecwid-search">
			<div class="ec-form__title ec-header-h6">
				<div class="marker-required marker-required--medium"></div>${rosettaMessages["new-frontend"]["ProductSearch.Breadcrumbs.General"]}
			</div>
		</label>
		<div class="form-control form-control--flexible form-control--empty form-control--type-name">
			<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">
			<div class="form-control__placeholder">
				<div class="form-control__placeholder-inner"></div>
			</div>
		</div>
	</div>
</div>
`,
    uy = {
        attributes: !0,
        childList: !0,
        subtree: !0
    },
    cy = () => {
        let e, n = "",
            t, a, r, i;
        const o = m => m.some(p => !!p ? .includes(n)),
            s = () => {
                a ? .forEach(m => {
                    const {
                        type: p,
                        element: f,
                        title: b,
                        description: S
                    } = m;
                    (p !== e || !o([b, S])) && f.classList.add("zyro-ecwid__option--hidden")
                })
            },
            l = () => {
                t = (a ? .filter(p => {
                    const {
                        title: f,
                        description: b,
                        element: S,
                        type: C
                    } = p, w = o([f, b]), y = C === e && (w || !n.length);
                    return S.classList.toggle("zyro-ecwid__option--hidden", !y), !y
                })).length
            },
            d = m => {
                let p = !1;
                a = [...m.querySelectorAll(".ec-radiogroup__item")].map(y => {
                    const D = y.querySelector(".ec-radiogroup__title").innerText,
                        P = D.split(":")[0].toLowerCase(),
                        M = _s.some($ => $.name === P) ? P : "other",
                        R = y.querySelector('input[type="radio"]');
                    return R.addEventListener("change", $ => {
                        $.target.checked && l()
                    }), {
                        title: D.toLowerCase(),
                        description: y.querySelector(".ec-radiogroup__text").innerText.toLowerCase(),
                        element: y,
                        cost: y.querySelector(".ec-radiogroup__data").innerText,
                        selected: y.querySelector("input").checked,
                        type: M,
                        radio: R
                    }
                });
                const b = m.closest(".ec-cart-step__section"),
                    S = b.querySelector(".ec-radiogroup__wrap");
                r || b.insertAdjacentHTML("beforeend", ly()), b.classList.add("zyro-ecwid__radio-section"), b.querySelector(".zyro-ecwid__search input").addEventListener("input", Ol(y => {
                    n = y.target.value.toLowerCase(), l()
                }), 30);
                const C = a.find(y => y.selected),
                    w = [...new Set(a.map(y => y.type))];
                r ? (i ? .classList.remove("ec-radiogroup--hidden"), r ? .classList.remove("zyro-ecwid__search--hidden"), b.querySelector(".ec-cart-step--delivery .ec-radiogroup:last-child") ? .classList.add("ec-radiogroup--hidden")) : w.forEach(y => {
                    if (y === "other" && p) return;
                    const D = _s.find(M => M.name === y),
                        P = sy(D);
                    y === "other" && (p = !0), b.querySelector(".zyro-ecwid__search").insertAdjacentHTML("afterbegin", P), b.querySelector("[data-filter]").addEventListener("change", M => {
                        M.target.checked && (e = M.target.dataset.filter, l())
                    })
                }), i = b.querySelector(".ec-cart-step--delivery .ec-radiogroup"), r = b.querySelector(".zyro-ecwid__search"), b.querySelector("[data-filter]").checked = !0, e = w[w.length - 1], l(), S.scroll(C.element.offsetTop, 0)
            };
        return new MutationObserver(() => {
            if (!document.querySelector(".ec-cart__body")) return;
            const m = document.querySelector(".ec-cart-step--delivery .ec-radiogroup__items"),
                p = !!document.querySelector(".ec-cart-step--delivery .ec-cart-step__icon--done"),
                f = document.querySelectorAll(".zyro-ecwid__option--hidden");
            !!!document.querySelector(".ec-cart-step--address .ec-cart-step__icon--done") && !m && r && (r = null), !p && !a && m && d(m), t !== f.length && s(), (p || !m) && (i ? .classList.contains("ec-radiogroup--hidden") || i ? .classList.add("ec-radiogroup--hidden"), r ? .classList.contains("zyro-ecwid__search--hidden") || r ? .classList.add("zyro-ecwid__search--hidden"), a = null, n && (n = "", document.getElementById("zyro-ecwid-search").value = ""))
        }, uy)
    },
    po = "ecwid-loaded",
    dy = () => {
        const e = document.querySelector(".ec-notices");
        if (!e) return;
        const n = document.querySelector(".builder-header") ? .clientHeight ? ? 0,
            t = document.querySelector(`.${vl}`) ? .clientHeight ? ? 0,
            a = e.getBoundingClientRect().top + n + t;
        e.style.top = `${a}px`
    },
    Ul = () => window.dispatchEvent(new Event(po)),
    my = e => {
        const {
            setEcwidCartItems: n
        } = bl();
        n(e.items)
    },
    gy = () => {
        window.ecwid_initial_data.data.storeClosed && Ul()
    },
    py = () => {
        window.Ecwid.OnAPILoaded.add(gy), window.Ecwid.OnPageLoaded.add(Ul), window.Ecwid.OnPageLoaded.add(dy), window.Ecwid.OnCartChanged.add(my)
    },
    vy = {
        load(e, n) {
            if (window.ec = window.ec || {}, window.ec.config = window.ec.config || {}, window.ec.config.enable_canonical_urls = !0, window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {}, window.ec.config.storefrontUrls.cleanUrls = !0, window.ec.config.storefrontUrls.queryBasedCleanUrls = !0, window.ecwid_script_defer = !0, window.ecwid_dynamic_widgets = !0, typeof Ecwid < "u") try {
                window.Ecwid.destroy()
            } catch {}
            if (window._xnext_initialization_scripts = [{
                    widgetType: "ProductBrowser",
                    id: `my-store-${e}`,
                    arg: ["id=productBrowser", "categoriesPerRow=4", "views=grid(4,3) list(10) table(20)", "categoryView=grid", "searchView=list"]
                }], document.querySelector("#ecwid-script")) window.ecwid_onBodyDone(), setTimeout(() => {
                !!document.getElementById(`my-store-${e}`) ? .innerHTML || this.load(e, n)
            }, 1e3);
            else {
                const t = document.createElement("script");
                t.defer = !0, t.type = "text/javascript", t.async = !0, t.src = `https://app.ecwid.com/script.js?${e}`, n && n !== Nt && (t.src += `&lang=${n}`), t.id = "ecwid-script", t.addEventListener("load", py), document.body.append(t)
            }
        }
    },
    hy = "26103239",
    fy = {
        attributes: !0,
        childList: !0,
        subtree: !0
    },
    yy = (e, {
        ecwidStoreId: n,
        demoEcwidStoreId: t
    }) => {
        const a = A(!0),
            r = A(!1),
            i = A(!0),
            o = u(() => e.data.settings.loadingText || "Store is loading"),
            s = u(() => n.value || t.value || hy),
            l = () => {
                vy.load(s.value, e.currentLocale)
            },
            d = () => {
                r.value = !0, window.addEventListener(po, () => {
                    r.value = !1
                }), l()
            };
        return Le(() => {
            d(), i.value = cy(), i.value.observe(document.querySelector(`#my-store-${s.value}`), fy)
        }), Et(() => {
            i.value.disconnect()
        }), Ve(s, async g => {
            t.value !== g && (document.querySelector(`#my-store-${s.value}`).innerHTML = "", await Dt(), d())
        }), {
            storeId: s,
            showStore: a,
            isStoreLoading: r,
            loadStore: l,
            loadingText: o,
            ECWID_LOADED_EVENT: po
        }
    },
    by = le({
        components: {
            BlockEcwidStore: iy
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            currentLocale: {
                type: String,
                default: Nt
            }
        },
        setup(e) {
            const {
                meta: n
            } = Je(), t = u(() => n.value.ecwidStoreId), a = u(() => n.value.demoEcwidStoreId), {
                storeId: r,
                showStore: i,
                isStoreLoading: o,
                loadingText: s
            } = yy(e, {
                ecwidStoreId: t,
                demoEcwidStoreId: a
            });
            return Le(() => {
                window ? .Ecwid ? .getStorefrontLang() && window.Ecwid.getStorefrontLang() !== e.currentLocale && !$a() && window.location.reload()
            }), {
                storeId: r,
                showStore: i,
                isStoreLoading: o,
                loadingText: s
            }
        }
    });

function _y(e, n, t, a, r, i) {
    const o = Te("BlockEcwidStore");
    return c(), F(o, {
        "store-id": e.storeId,
        "block-id": e.blockId,
        "show-store": e.showStore,
        "is-store-loading": e.isStoreLoading,
        "loading-text": e.loadingText
    }, null, 8, ["store-id", "block-id", "show-store", "is-store-loading", "loading-text"])
}
const wy = oe(by, [
        ["render", _y]
    ]),
    ky = A({}),
    vo = "forward",
    ws = "backward",
    Sy = ({
        isAutoplayEnabled: e,
        isLoopEnabled: n,
        autoplayInterval: t,
        isTransitioning: a,
        slides: r
    } = {}) => {
        const i = A(0),
            o = A(""),
            s = A(null),
            l = u(() => r.value.length),
            d = u(() => i.value === r.value.length - 1),
            g = u(() => i.value === 0),
            m = u(() => (!d.value || n.value) && l.value > 1 && !a.value),
            p = u(() => (!g.value || n.value) && l.value > 1 && !a.value),
            f = () => {
                if (m.value) {
                    if (o.value = vo, n.value && d.value) {
                        i.value = 0;
                        return
                    }
                    i.value += 1
                }
            },
            b = () => {
                if (p.value) {
                    if (o.value = ws, n.value && g.value) {
                        i.value = r.value.length - 1;
                        return
                    }
                    i.value -= 1
                }
            },
            S = D => {
                o.value = D > i.value ? vo : ws, i.value = D
            },
            C = () => {
                s.value = setInterval(() => {
                    !n.value && d.value || f()
                }, t.value * 1e3)
            },
            w = () => {
                s.value && (clearInterval(s.value), s.value = null)
            },
            y = () => {
                w(), e.value && C()
            };
        return e && (e.value && C(), Ve(e, () => {
            e.value ? C() : w()
        }), Ve(rv(), D => {
            D === "visible" ? C() : w()
        })), t && Ve(t, () => {
            y()
        }), {
            slideshowRefs: ky,
            slideToNext: f,
            slideToPrevious: b,
            slideTo: S,
            slideDirection: o,
            slideCount: l,
            currentSlideIndex: i,
            slides: r,
            isLoopEnabled: n,
            isAutoplayEnabled: e,
            autoplayInterval: t,
            resetAutoplayInterval: y,
            setAutoplayInterval: C,
            clearAutoplayInterval: w,
            canSlideToNext: m,
            canSlideToPrevious: p
        }
    },
    Wo = le({
        props: {
            slides: {
                type: Array,
                required: !0
            },
            isLoopEnabled: {
                type: Boolean,
                default: !1
            },
            currentSlideIndex: {
                type: Number,
                default: 0
            },
            slideDirection: {
                type: String,
                default: vo
            },
            arrowColor: {
                type: String,
                default: "rgb(255, 255, 255)"
            },
            dotColor: {
                type: String,
                default: "rgb(255, 255, 255)"
            },
            isNextButtonDisabled: {
                type: Boolean,
                default: !1
            },
            isPreviousButtonDisabled: {
                type: Boolean,
                default: !1
            },
            isNavigationArrowsVisible: {
                type: Boolean,
                default: !0
            },
            isNavigationDotsVisible: {
                type: Boolean,
                default: !0
            },
            isTransitioning: {
                type: Boolean,
                default: !1
            },
            desktopMinHeight: {
                type: Number,
                required: !0
            },
            mobileMinHeight: {
                type: Number,
                required: !0
            },
            websiteId: {
                type: String,
                default: ""
            }
        },
        emits: ["transition-start", "transition-end", "next-slide", "previous-slide", "dot-click"],
        setup() {
            return {
                FULL_WIDTH: Ca,
                getOptimizedSrc: ot
            }
        },
        computed: {
            isNextSlideButtonVisible() {
                if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
                const e = this.currentSlideIndex === this.slides.length - 1;
                return this.isNavigationArrowsVisible && !e
            },
            isPreviousSlideButtonVisible() {
                if (this.isLoopEnabled) return this.isNavigationArrowsVisible;
                const e = this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
                return this.isNavigationArrowsVisible && !e
            }
        }
    }),
    ks = () => {
        ht(e => ({
            fd06db1c: e.desktopMinHeight,
            "1f7ca1af": e.arrowColor,
            "56d289af": e.dotColor,
            "3b9747e2": e.mobileMinHeight
        }))
    },
    Ss = Wo.setup;
Wo.setup = Ss ? (e, n) => (ks(), Ss(e, n)) : ks;
const Yl = e => (At("data-v-f3299b46"), e = e(), Bt(), e),
    Cy = {
        class: "slideshow"
    },
    Ty = ["alt", "src"],
    Py = ["disabled"],
    Iy = Yl(() => E("svg", {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M1 25L13 13L1 1",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    Ey = [Iy],
    Dy = ["disabled"],
    My = Yl(() => E("svg", {
        width: "14",
        height: "26",
        viewBox: "0 0 14 26",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M1 25L13 13L1 1",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    Oy = [My],
    Ly = {
        key: 2,
        class: "slideshow__dots"
    },
    Ay = ["onClick"];

function By(e, n, t, a, r, i) {
    return c(), h("div", Cy, [De(Wu, {
        name: `slide-${e.slideDirection}`,
        onLeave: n[0] || (n[0] = o => e.$emit("transition-start")),
        onAfterLeave: n[1] || (n[1] = o => e.$emit("transition-end"))
    }, {
        default: _e(() => [(c(!0), h(pe, null, ke(e.slides, (o, s) => ce((c(), h("img", {
            key: `${o.path}-${s}`,
            alt: o.alt || "",
            class: "slide",
            src: e.getOptimizedSrc(o.origin, o.path, e.websiteId, {
                width: e.FULL_WIDTH
            })
        }, null, 8, Ty)), [
            [Gt, e.currentSlideIndex === s]
        ])), 128))]),
        _: 1
    }, 8, ["name"]), e.isNextSlideButtonVisible ? (c(), h("button", {
        key: 0,
        class: J(["slideshow-nav-button slideshow-nav-button--right", {
            "is-transitioning": e.isTransitioning
        }]),
        disabled: e.isNextButtonDisabled,
        onClick: n[2] || (n[2] = o => e.$emit("next-slide"))
    }, Ey, 10, Py)) : O("", !0), e.isPreviousSlideButtonVisible ? (c(), h("button", {
        key: 1,
        class: J(["slideshow-nav-button slideshow-nav-button--left", {
            "is-transitioning": e.isTransitioning
        }]),
        disabled: e.isPreviousButtonDisabled,
        onClick: n[3] || (n[3] = o => e.$emit("previous-slide"))
    }, Oy, 10, Dy)) : O("", !0), e.isNavigationDotsVisible ? (c(), h("div", Ly, [(c(!0), h(pe, null, ke(e.slides, (o, s) => (c(), h("button", {
        key: `${o.path}-${s}`,
        class: J(["dot", {
            "dot--current": e.currentSlideIndex === s
        }]),
        onClick: l => e.$emit("dot-click", s)
    }, null, 10, Ay))), 128))])) : O("", !0)])
}
const Ry = oe(Wo, [
        ["render", By],
        ["__scopeId", "data-v-f3299b46"]
    ]),
    $y = le({
        components: {
            BlockImageSlideshow: Ry
        },
        props: {
            blockId: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                default: () => ({})
            },
            websiteId: {
                type: String,
                default: ""
            }
        },
        setup(e) {
            const {
                data: n
            } = Jr(e), t = A(!1), a = u(() => `${n.value.desktop.minHeight}px`), r = u(() => `${n.value.mobile.minHeight}px`), i = u(() => n.value.settings.styles.navigationDotsColor), o = u(() => n.value.settings.styles.navigationArrowsColor), s = u(() => n.value.slides), l = u(() => n.value.isLoopEnabled), d = u(() => n.value.isAutoplayEnabled), g = u(() => n.value.autoplayInterval), m = u(() => n.value.isNavigationDotsVisible), p = u(() => n.value.isNavigationArrowsVisible), f = u(() => n.value.desktop.minHeight), b = u(() => n.value.mobile.minHeight), {
                slideDirection: S,
                currentSlideIndex: C,
                canSlideToNext: w,
                canSlideToPrevious: y,
                slideToNext: D,
                slideToPrevious: P,
                slideTo: M,
                resetAutoplayInterval: R,
                clearAutoplayInterval: $
            } = Sy({
                isAutoplayEnabled: d,
                isLoopEnabled: l,
                autoplayInterval: g,
                isTransitioning: t,
                slides: s
            });
            return {
                canSlideToNext: w,
                canSlideToPrevious: y,
                desktopHeight: a,
                mobileHeight: r,
                slides: s,
                currentSlideIndex: C,
                slideDirection: S,
                isLoopEnabled: l,
                isTransitioning: t,
                resetAutoplayInterval: R,
                dotColor: i,
                arrowColor: o,
                isNavigationDotsVisible: m,
                isNavigationArrowsVisible: p,
                clearAutoplayInterval: $,
                slideToNext: D,
                slideToPrevious: P,
                slideTo: M,
                desktopMinHeight: f,
                mobileMinHeight: b
            }
        }
    });

function Ny(e, n, t, a, r, i) {
    const o = Te("BlockImageSlideshow");
    return c(), F(o, {
        slides: e.slides,
        "is-loop-enabled": e.isLoopEnabled,
        "current-slide-index": e.currentSlideIndex,
        "slide-direction": e.slideDirection,
        "dot-color": e.dotColor,
        "is-navigation-arrows-visible": e.isNavigationArrowsVisible,
        "is-navigation-dots-visible": e.isNavigationDotsVisible,
        "arrow-color": e.arrowColor,
        "is-next-button-disabled": !e.canSlideToNext,
        "is-previous-button-disabled": !e.canSlideToPrevious,
        "desktop-min-height": e.desktopMinHeight,
        "mobile-min-height": e.mobileMinHeight,
        "website-id": e.websiteId,
        onTransitionStart: n[0] || (n[0] = s => e.isTransitioning = !0),
        onTransitionEnd: n[1] || (n[1] = s => e.isTransitioning = !1),
        onMouseenter: e.clearAutoplayInterval,
        onMouseleave: e.resetAutoplayInterval,
        onNextSlide: e.slideToNext,
        onPreviousSlide: e.slideToPrevious,
        onDotClick: e.slideTo
    }, null, 8, ["slides", "is-loop-enabled", "current-slide-index", "slide-direction", "dot-color", "is-navigation-arrows-visible", "is-navigation-dots-visible", "arrow-color", "is-next-button-disabled", "is-previous-button-disabled", "desktop-min-height", "mobile-min-height", "website-id", "onMouseenter", "onMouseleave", "onNextSlide", "onPreviousSlide", "onDotClick"])
}
const xy = oe($y, [
        ["render", Ny]
    ]),
    Cs = 360,
    Hy = {
        __name: "BlockUser",
        props: {
            id: {
                type: String,
                required: !0
            },
            data: {
                type: Object,
                required: !0
            },
            lcp: {
                type: Object,
                default: () => ({})
            },
            currentLocale: {
                type: String,
                default: Nt
            },
            style: {
                type: Object,
                default: () => ({})
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            pageId: {
                type: String,
                required: !0
            },
            currentPageType: {
                type: String,
                default: "default"
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            },
            screenWidth: {
                type: Number,
                default: 0
            },
            isFirstVisibleDesktopBlock: {
                type: Boolean,
                default: !1
            },
            isFirstVisibleMobileBlock: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                a = A(null),
                {
                    productPages: r,
                    isLoaded: i
                } = Vt(),
                {
                    blocks: o,
                    elements: s,
                    pages: l,
                    siteId: d,
                    blogReadingTimeText: g,
                    blogCategories: m,
                    siteId: p,
                    meta: f
                } = Je(),
                {
                    addIntersectionObserver: b,
                    observe: S,
                    intersectionObserver: C,
                    animationClass: w,
                    shouldMountAnimationsInPreview: y
                } = Ln({
                    data: t.data
                }),
                D = u(() => t.currentLocale),
                P = u(() => t.data.desktop ? .isHidden ? t.isInPreviewMode ? t.screenWidth > Pr : !0 : !1),
                M = u(() => t.data.mobile ? .isHidden ? t.isInPreviewMode ? t.screenWidth <= Pr : !0 : !1),
                R = u(() => ({ ...t.style,
                    ...Kt(t.data ? .settings ? .styles)
                })),
                $ = u(() => {
                    if (!t.data ? .settings ? .styles["m-block-padding"]) return !1;
                    const {
                        top: N,
                        bottom: U
                    } = Xa(t.data.settings.styles["m-block-padding"]);
                    return Number.parseInt(N, 10) + Number.parseInt(U, 10) > Cs
                }),
                Z = u(() => ot(t.data.background.origin, t.data.background.path, p.value, {
                    width: Ca
                })),
                G = u(() => Ta(t.data.background.origin, t.data.background.path, p.value, {
                    isMobileFullScreen: $.value
                })),
                T = u(() => t.data.slot === "footer"),
                L = u(() => {
                    if (t.data.type !== Ti) return null;
                    const [, N] = Object.entries(l.value).find(([U, Q]) => Q.type === no && U === t.pageId);
                    return N
                }),
                H = u(() => f.value.stripePublicApiKey),
                z = u(() => t.data.type === Pi),
                V = async () => {
                    b(), (!z.value || i.value) && await S(a.value)
                };
            Le(async () => {
                await V()
            }), Et(() => C.value ? .disconnect()), Ve([D, i], async ([N, U], [Q]) => {
                (U || N !== Q) && z.value && await S(a.value)
            }), Ve(y, async N => {
                N && await V()
            });
            const I = {
                MOBILE_FULL_HEIGT_THRESHOLD: Cs,
                props: t,
                blockRef: a,
                productPages: r,
                isEcommerceProductsLoaded: i,
                siteBlocks: o,
                siteElements: s,
                siteLanguagePages: l,
                websiteId: d,
                blogReadingTimeText: g,
                blogCategories: m,
                siteId: p,
                meta: f,
                addIntersectionObserver: b,
                observe: S,
                intersectionObserver: C,
                animationClass: w,
                shouldMountAnimationsInPreview: y,
                currentSiteLocale: D,
                isDesktopBlockHidden: P,
                isMobileBlockHidden: M,
                computedStyles: R,
                isMobileFullScreen: $,
                backgroundSrc: Z,
                backgroundSrcSet: G,
                isBlockFooter: T,
                currentBlogPage: L,
                stripePublicApiKey: H,
                isEcommerceBlock: z,
                initiateAnimations: V,
                computed: u,
                onMounted: Le,
                onBeforeUnmount: Et,
                ref: A,
                watch: Ve,
                BlockBackground: _l,
                BlockBlogHeader: kd,
                get PAGE_TYPE_BLOG() {
                    return no
                },
                get SYSTEM_LOCALE() {
                    return Nt
                },
                get BLOCK_TYPE_LAYOUT() {
                    return mc
                },
                get BLOCK_TYPE_BLOG_HEADER() {
                    return Ti
                },
                get BLOCK_TYPE_BLOG_LIST() {
                    return gc
                },
                get BLOCK_TYPE_IMAGE_SLIDESHOW() {
                    return pc
                },
                get BLOCK_TYPE_ECWID() {
                    return vc
                },
                get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
                    return hc
                },
                get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
                    return Pi
                },
                get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
                    return Pr
                },
                get FULL_WIDTH() {
                    return Ca
                },
                get getFullWidthSrcset() {
                    return Ta
                },
                get getOptimizedSrc() {
                    return ot
                },
                get useSiteGlobal() {
                    return Je
                },
                get objectToCssVariables() {
                    return Kt
                },
                get parseCSSSides() {
                    return Xa
                },
                BlockLayoutProviderUser: Yv,
                BlockBlogListProviderUser: vh,
                BlockEcommerceProductListProviderUser: af,
                BlockEcommerceProductProviderUser: Vl,
                BlockEcwidStoreProviderUser: wy,
                BlockImageSlideshowProviderUser: xy,
                get useSiteEngineAnimations() {
                    return Ln
                },
                get useEcommerceGlobal() {
                    return Vt
                }
            };
            return Object.defineProperty(I, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), I
        }
    },
    Vy = ["id"];

function Uy(e, n, t, a, r, i) {
    return c(), h("section", {
        id: t.id,
        ref: "blockRef",
        class: J(["block", [a.animationClass, {
            "block--footer": a.isBlockFooter,
            "block--desktop-hidden": a.isDesktopBlockHidden,
            "block--mobile-hidden": a.isMobileBlockHidden,
            "block--desktop-first-visible": t.isFirstVisibleDesktopBlock,
            "block--mobile-first-visible": t.isFirstVisibleMobileBlock
        }]]),
        style: Re(a.computedStyles)
    }, [t.data.background ? (c(), F(a.BlockBackground, {
        key: 0,
        "overlay-opacity": t.data.background["overlay-opacity"],
        type: t.data.background.current,
        color: t.data.background.color,
        gradient: t.data.background.gradient,
        src: a.backgroundSrc,
        srcset: a.backgroundSrcSet,
        "is-eager": t.lcp.type === "block-background" && t.lcp.id === t.id,
        "is-fixed": t.data.attachment === "fixed",
        alt: t.data.background && t.data.background.alt
    }, null, 8, ["overlay-opacity", "type", "color", "gradient", "src", "srcset", "is-eager", "is-fixed", "alt"])) : O("", !0), t.data.type === a.BLOCK_TYPE_LAYOUT ? (c(), F(a.BlockLayoutProviderUser, {
        key: 1,
        lcp: t.lcp,
        data: t.data,
        "block-id": t.id,
        components: a.siteElements,
        "current-locale": t.currentLocale,
        "is-cart-visible": t.isCartVisible,
        "site-language-pages": a.siteLanguagePages,
        "stripe-public-api-key": a.stripePublicApiKey,
        "is-in-preview-mode": a.props.isInPreviewMode
    }, null, 8, ["lcp", "data", "block-id", "components", "current-locale", "is-cart-visible", "site-language-pages", "stripe-public-api-key", "is-in-preview-mode"])) : O("", !0), t.data.type === a.BLOCK_TYPE_BLOG_HEADER ? (c(), F(a.BlockBlogHeader, {
        key: 2,
        data: t.data,
        "current-blog-page": a.currentBlogPage,
        "blog-categories": a.blogCategories,
        "blog-reading-time-text": a.blogReadingTimeText
    }, null, 8, ["data", "current-blog-page", "blog-categories", "blog-reading-time-text"])) : O("", !0), t.data.type === a.BLOCK_TYPE_BLOG_LIST ? (c(), F(a.BlockBlogListProviderUser, {
        key: 3,
        data: t.data,
        "block-id": t.id,
        "current-locale": t.currentLocale
    }, null, 8, ["data", "block-id", "current-locale"])) : O("", !0), t.data.type === a.BLOCK_TYPE_IMAGE_SLIDESHOW ? (c(), F(a.BlockImageSlideshowProviderUser, {
        key: 4,
        data: t.data,
        "block-id": t.id,
        "website-id": a.websiteId
    }, null, 8, ["data", "block-id", "website-id"])) : O("", !0), t.data.type === a.BLOCK_TYPE_ECWID ? (c(), F(a.BlockEcwidStoreProviderUser, {
        key: 5,
        data: t.data,
        "block-id": t.id,
        "current-locale": t.currentLocale
    }, null, 8, ["data", "block-id", "current-locale"])) : O("", !0), t.data.type === a.BLOCK_TYPE_ECOMMERCE_PRODUCT ? (c(), F(a.BlockEcommerceProductProviderUser, {
        key: 6,
        lcp: t.lcp,
        data: t.data,
        "block-id": t.id,
        "product-pages": a.productPages,
        "is-cart-visible": t.isCartVisible,
        "ecommerce-translations": t.ecommerceTranslations,
        "current-page-type": t.currentPageType,
        "is-in-preview-mode": a.props.isInPreviewMode
    }, null, 8, ["lcp", "data", "block-id", "product-pages", "is-cart-visible", "ecommerce-translations", "current-page-type", "is-in-preview-mode"])) : O("", !0), t.data.type === a.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST ? (c(), F(a.BlockEcommerceProductListProviderUser, {
        key: 7,
        lcp: t.lcp,
        data: t.data,
        "block-id": t.id,
        blocks: a.siteBlocks,
        "current-locale": t.currentLocale,
        "is-cart-visible": t.isCartVisible,
        "ecommerce-translations": t.ecommerceTranslations,
        "is-in-preview-mode": a.props.isInPreviewMode
    }, null, 8, ["lcp", "data", "block-id", "blocks", "current-locale", "is-cart-visible", "ecommerce-translations", "is-in-preview-mode"])) : O("", !0)], 14, Vy)
}
const Yy = oe(Hy, [
        ["render", Uy],
        ["__scopeId", "data-v-768a5e41"]
    ]),
    jn = A({}),
    ql = ({
        pagePassword: e,
        locale: n,
        pageId: t
    }) => {
        const a = u(() => `${t}-${n}`),
            r = u(() => !e || e && !!jn.value[a.value]);
        return {
            isPageUnlocked: jn,
            openUnlockedPage: () => {
                jn.value = { ...jn.value,
                    [a.value]: !0
                }
            },
            isPageOpen: r
        }
    },
    qy = async e => {
        const n = new TextEncoder().encode(e),
            t = await crypto.subtle.digest("SHA-256", n);
        return [...new Uint8Array(t)].map(i => i.toString(16).padStart(2, "0")).join("")
    },
    Wy = {
        src: "/_astro-1712900538638/lock.CUuFZ5nx.svg",
        width: 40,
        height: 40,
        format: "svg"
    },
    Fy = le({
        __name: "PasswordPage",
        props: {
            pageId: {},
            locale: {},
            currentPageData: {},
            isCurrentPageHomepage: {
                type: Boolean,
                default: !1
            },
            inPreviewMode: {
                type: Boolean,
                default: !1
            },
            defaultLocale: {},
            homepageName: {}
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                a = A(""),
                r = A(""),
                i = u(() => t.currentPageData ? .meta ? .passwordDesign ? ? ""),
                o = u(() => t.currentPageData ? .meta ? .password ? ? ""),
                s = u(() => t.currentPageData ? .meta ? .passwordHeadingText ? ? "Guest Area"),
                l = u(() => t.currentPageData ? .meta ? .passwordSubheadingText ? ? "Please enter the password to access the page"),
                d = u(() => t.currentPageData ? .meta ? .passwordButtonText ? ? "Enter"),
                g = u(() => t.currentPageData ? .meta ? .passwordPlaceholderText ? ? "Type password"),
                m = u(() => t.currentPageData ? .meta ? .passwordBackText ? ? "Back to"),
                p = u(() => i.value === fc),
                f = u(() => i.value === yc),
                {
                    openUnlockedPage: b
                } = ql({
                    pagePassword: o.value,
                    locale: t.locale,
                    pageId: t.pageId
                }),
                S = async () => {
                    const D = await qy(a.value);
                    if (!a.value || D !== o.value) {
                        r.value = "Please enter the correct password";
                        return
                    }
                    b()
                },
                C = u(() => t.locale && t.locale !== t.defaultLocale ? `/${t.locale}` : "/"),
                w = u(() => !t.inPreviewMode && !t.isCurrentPageHomepage);
            Le(() => {
                document.body.style.overflow = "hidden"
            }), Et(() => {
                document.body.style.overflow = ""
            });
            const y = {
                props: t,
                password: a,
                errorMessage: r,
                passwordPageStyle: i,
                currentPagePassword: o,
                passwordPageHeading: s,
                passwordPageSubheading: l,
                passwordPageButtonText: d,
                passwordPlaceholder: g,
                passwordBackText: m,
                isCalmTheme: p,
                isPopularTheme: f,
                openUnlockedPage: b,
                unlock: S,
                homepageLink: C,
                isHomepageLinkShown: w,
                get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
                    return Yd
                }
            };
            return Object.defineProperty(y, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), y
        }
    }),
    Gy = e => (At("data-v-5df21e4b"), e = e(), Bt(), e),
    jy = {
        key: 0,
        class: "password-page__background-wave-wrapper"
    },
    zy = Gy(() => E("div", {
        class: "password-page__background-wave"
    }, null, -1)),
    Qy = [zy],
    Ky = ["src"],
    Zy = {
        key: 0,
        class: "password-page__icon-lock",
        src: Wy
    },
    Xy = {
        class: "password-page__heading"
    },
    Jy = {
        for: "password",
        class: "password-page__label"
    },
    eb = ["placeholder"],
    tb = {
        key: 1,
        class: "password-page__error-message"
    },
    ab = {
        class: "password-page__button",
        type: "submit"
    },
    nb = {
        key: 2,
        class: "password-page__homepage-link"
    },
    rb = ["href"];

function ob(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("main", {
        class: J(["password-page", {
            "password-page--calm": a.isCalmTheme,
            "password-page--popular": a.isPopularTheme
        }])
    }, [a.isCalmTheme ? ce((c(), h("div", jy, Qy)), [
        [o, "password-page-background-calm"]
    ]) : O("", !0), a.isPopularTheme ? ce((c(), h("img", {
        key: 1,
        class: "password-page__background-image",
        src: `${a.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`
    }, null, 8, Ky)), [
        [o, "password-page-background-popular"]
    ]) : O("", !0), E("form", {
        class: "password-page__form",
        onSubmit: Ee(a.unlock, ["prevent"])
    }, [a.isCalmTheme ? (c(), h("img", Zy)) : O("", !0), ce((c(), h("h1", Xy, [Be(X(a.passwordPageHeading), 1)])), [
        [o, "password-page-heading"]
    ]), ce((c(), h("label", Jy, [Be(X(a.passwordPageSubheading), 1)])), [
        [o, "password-page-subheading"]
    ]), ce(E("input", {
        id: "password",
        "onUpdate:modelValue": n[0] || (n[0] = s => a.password = s),
        type: "password",
        autocomplete: "off",
        autocapitalize: "off",
        autocorrect: "off",
        name: "password",
        placeholder: a.passwordPlaceholder,
        required: "",
        class: J(["password-page__input", {
            "password-page__input--error": a.errorMessage
        }]),
        onBlur: n[1] || (n[1] = s => a.errorMessage = "")
    }, null, 42, eb), [
        [sl, a.password],
        [o, "password-page-placeholder"]
    ]), a.errorMessage ? (c(), h("p", tb, X(a.errorMessage), 1)) : O("", !0), ce((c(), h("button", ab, [Be(X(a.passwordPageButtonText), 1)])), [
        [o, "password-page-button"]
    ]), a.isHomepageLinkShown ? ce((c(), h("p", nb, [Be(X(a.passwordBackText) + " ", 1), E("a", {
        href: a.homepageLink,
        class: "password-page__homepage-link-text"
    }, X(t.homepageName), 9, rb)])), [
        [o, "password-page-footer"]
    ]) : O("", !0)], 32)], 2)
}
const ib = oe(Fy, [
        ["render", ob],
        ["__scopeId", "data-v-5df21e4b"]
    ]),
    sb = {},
    lb = Io('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>', 1),
    ub = [lb];

function cb(e, n) {
    return c(), h("button", {
        class: "delete-button",
        onClick: n[0] || (n[0] = t => e.$emit("handle-button-click"))
    }, ub)
}
const db = oe(sb, [
        ["render", cb],
        ["__scopeId", "data-v-334df6f8"]
    ]),
    mb = {},
    gb = e => (At("data-v-2f9813ef"), e = e(), Bt(), e),
    pb = {
        class: "close-button"
    },
    vb = gb(() => E("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M12 4L4 12",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), E("path", {
        d: "M4 4L12 12",
        stroke: "currentColor",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    hb = [vb];

function fb(e, n) {
    return c(), h("button", pb, hb)
}
const Fo = oe(mb, [
        ["render", fb],
        ["__scopeId", "data-v-2f9813ef"]
    ]),
    yb = le({
        name: "Drawer",
        components: {
            CloseButton: Fo
        },
        props: {
            placement: {
                type: String,
                default: "right",
                validator: e => ["right", "left"].includes(e)
            },
            width: {
                type: String,
                default: "350px"
            },
            alwaysShowCloseButton: {
                type: Boolean,
                default: !0
            },
            isOpen: {
                type: Boolean,
                default: !1
            },
            topPositionMobile: {
                type: String,
                default: "0px"
            }
        },
        emits: ["close-drawer"],
        setup(e, n) {
            const t = A(null);
            return Le(() => {
                pr(t, () => {
                    n.emit("close-drawer")
                })
            }), {
                siteDrawerRef: t
            }
        },
        computed: {
            computedStyles() {
                return {
                    "--sidebar-width": this.width,
                    "--sidebar-top-mobile": this.topPositionMobile
                }
            }
        },
        methods: {
            closeDrawer() {
                this.$emit("close-drawer")
            }
        }
    }),
    bb = {
        class: "site-drawer__content"
    };

function _b(e, n, t, a, r, i) {
    const o = Te("CloseButton"),
        s = Ge("qa");
    return c(), h("div", null, [e.isOpen ? (c(), h("div", {
        key: 0,
        class: J(["site-drawer-overlay", {
            "site-drawer-overlay--open": e.isOpen
        }]),
        onTouchend: n[0] || (n[0] = Ee(() => {}, ["stop", "prevent"]))
    }, null, 34)) : O("", !0), De(Mt, {
        name: e.placement === "right" ? "drawer-slide-right" : "drawer-slide-left"
    }, {
        default: _e(() => [e.isOpen ? (c(), h("aside", {
            key: 0,
            ref: "siteDrawerRef",
            class: J([{
                "site-drawer--left": e.placement === "left",
                "site-drawer--right": e.placement === "right"
            }, "site-drawer"]),
            style: Re(e.computedStyles)
        }, [E("div", bb, [ce((c(), h("span", {
            class: J(["site-drawer__close-button", {
                "site-drawer__close-button--hide-mobile": !e.alwaysShowCloseButton
            }]),
            onClick: n[1] || (n[1] = (...l) => e.closeDrawer && e.closeDrawer(...l))
        }, [De(o)], 2)), [
            [s, "builder-sitedrawer-btn-close"]
        ]), he(e.$slots, "default", {}, void 0, !0)])], 6)) : O("", !0)]),
        _: 3
    }, 8, ["name"])])
}
const wb = oe(yb, [
        ["render", _b],
        ["__scopeId", "data-v-12672165"]
    ]),
    Ts = 90,
    kb = le({
        components: {
            Drawer: wb,
            DeleteButton: db,
            ProductImage: mr,
            QuantityPicker: Hl
        },
        props: {
            isLoading: {
                type: Boolean,
                default: !1
            },
            isShoppingCartOpen: {
                type: Boolean,
                default: !1
            },
            translations: {
                type: Object,
                default: null
            },
            language: {
                type: String,
                default: "en"
            },
            isHeaderSticky: {
                type: Boolean,
                default: !1
            },
            isNavHidden: {
                type: Boolean,
                default: !1
            },
            siteId: {
                type: String,
                default: null
            },
            quantifiedCartItemsList: {
                type: Array,
                default: () => []
            },
            products: {
                type: Array,
                default: () => []
            },
            shoppingCartItems: {
                type: Array,
                default: () => []
            },
            variantsQuantity: {
                type: Array,
                default: () => []
            }
        },
        emits: ["close-shopping-cart", "checkout-button-click", "set-shopping-cart-items"],
        data() {
            return {
                IMAGE_WIDTH_PX: Ts,
                isHeaderVisible: !1,
                topPositionMobile: "0px",
                resizeObserver: null
            }
        },
        computed: {
            totalPrice() {
                return this.quantifiedCartItemsList.reduce((e, n) => e + (n.product ? .variants[0] ? .prices[0] ? .sale_amount || n.product ? .variants[0] ? .prices[0] ? .amount || 0) * n.quantity, 0)
            },
            currencyCode() {
                return this.products[0] ? .variants[0] ? .prices[0] ? .currency
            },
            computedStyle() {
                return {
                    "--image-width": `${Ts}px`
                }
            },
            isLimitReached() {
                return this.shoppingCartItems.length >= ja
            }
        },
        watch: {
            isShoppingCartOpen(e) {
                document.documentElement.style.overflow = e ? "hidden" : "auto"
            },
            headerHeight() {
                this.setHeaderVisibilityValues()
            }
        },
        mounted() {
            const e = document.querySelector(".block-header");
            e && (this.resizeObserver = new ResizeObserver(() => {
                this.setHeaderHeight()
            }), this.resizeObserver.observe(e)), window.addEventListener("scroll", this.setHeaderVisibilityValues)
        },
        beforeUnmount() {
            this.resizeObserver ? .disconnect(), window.removeEventListener("scroll", this.setHeaderVisibilityValues)
        },
        methods: {
            getFormattedBookingDuration: Yo,
            formatPrice: ba,
            isStockAvailable(e) {
                if (e.product.variants[0].manage_inventory) {
                    const t = this.variantsQuantity.find(a => a.id === e.product.variants[0].id) ? .inventory_quantity || 0;
                    return e.quantity < t
                }
                return !0
            },
            handleQuantityChange(e, n) {
                if (e > n.quantity) {
                    this.increaseQuantity(n);
                    return
                }
                this.decreaseQuantity(n)
            },
            decreaseQuantity(e) {
                const n = [...this.shoppingCartItems],
                    t = this.shoppingCartItems.filter(r => r.variants[0].id === e.product.variants[0].id),
                    a = this.shoppingCartItems.lastIndexOf(t[t.length - 1]);
                n.splice(a, 1), this.$emit("set-shopping-cart-items", n)
            },
            increaseQuantity(e) {
                this.$emit("set-shopping-cart-items", [...this.shoppingCartItems, e.product])
            },
            removeProduct(e) {
                const n = this.shoppingCartItems.filter(t => t.variants[0].id !== e.variants[0].id);
                this.$emit("set-shopping-cart-items", n)
            },
            closeShoppingCart() {
                this.$emit("close-shopping-cart")
            },
            setHeaderVisibility() {
                this.isHeaderVisible = this.isHeaderSticky || (this.isNavHidden ? !1 : window.scrollY <= Number(this.headerHeight) * .4)
            },
            setTopPositionMobile() {
                const e = this.isHeaderSticky ? this.headerHeight : this.headerHeight - window.scrollY;
                this.topPositionMobile = `${this.isHeaderVisible?Math.floor(e)-1:0}px`
            },
            setHeaderVisibilityValues() {
                this.setHeaderVisibility(), this.setTopPositionMobile()
            },
            setHeaderHeight() {
                this.headerHeight = document.querySelector(".block-header") ? .clientHeight
            },
            getFormattedSelectedDate(e) {
                return new Date(e.product ? .variants[0] ? .booking_event ? .date).toLocaleDateString(this.language) || null
            },
            getFormattedTime(e) {
                const n = new Date(e.product ? .variants[0] ? .booking_event ? .time_slot),
                    t = n.getTime(),
                    a = new Date(t + co(e.product)),
                    r = n.toLocaleTimeString(this.language, {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    i = a.toLocaleTimeString(this.language, {
                        hour: "2-digit",
                        minute: "2-digit"
                    });
                return `${r} - ${i}`
            },
            isProductBookingType(e) {
                return e.product ? .type.value === Ht
            },
            getProductImage(e) {
                return e.product.variants[0].image_url || e.product.thumbnail
            }
        }
    }),
    Wl = e => (At("data-v-688c363e"), e = e(), Bt(), e),
    Sb = {
        class: "cart"
    },
    Cb = {
        class: "cart__content"
    },
    Tb = {
        key: 0,
        class: "cart__content-title cart__content-title--with-margin"
    },
    Pb = {
        key: 1,
        class: "cart__content-title"
    },
    Ib = {
        class: "cart__list"
    },
    Eb = {
        class: "cart__title"
    },
    Db = {
        key: 0,
        class: "cart__text"
    },
    Mb = {
        key: 1,
        class: "cart__text cart__sale-price"
    },
    Ob = {
        class: "cart__text cart__duration"
    },
    Lb = {
        class: "cart__time-wrapper"
    },
    Ab = Wl(() => E("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon"
    }, [E("path", {
        d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
        fill: "currentColor"
    })], -1)),
    Bb = {
        class: "cart__text cart__text--lighter"
    },
    Rb = {
        class: "cart__time-wrapper"
    },
    $b = Wl(() => E("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "cart__time-icon"
    }, [E("path", {
        d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
        fill: "currentColor"
    })], -1)),
    Nb = {
        class: "cart__text cart__text--lighter"
    },
    xb = {
        key: 3,
        class: "cart__quantity"
    },
    Hb = {
        class: "cart__quantity-title"
    },
    Vb = {
        key: 0,
        class: "cart__footer"
    },
    Ub = {
        class: "cart__title cart__title--with-slot"
    };

function Yb(e, n, t, a, r, i) {
    const o = Te("ProductImage"),
        s = Te("QuantityPicker"),
        l = Te("DeleteButton"),
        d = Te("Drawer"),
        g = Ge("qa");
    return c(), F(d, {
        "is-open": e.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: Re(e.computedStyle),
        onCloseDrawer: e.closeShoppingCart
    }, {
        default: _e(() => [E("div", Sb, [E("div", Cb, [e.quantifiedCartItemsList.length ? (c(), h("p", Pb, X(e.translations.shoppingBag), 1)) : ce((c(), h("p", Tb, [Be(X(e.translations.shoppingBagEmpty), 1)])), [
            [g, "shoppingcart-text-emptystate"]
        ]), E("ul", Ib, [(c(!0), h(pe, null, ke(e.quantifiedCartItemsList, m => (c(), h("li", {
            key: m.product.variants[0].id,
            class: "cart__list-item"
        }, [m.product.thumbnail ? (c(), F(o, {
            key: 0,
            src: e.getProductImage(m),
            alt: m.product.title,
            class: "cart__list-item-image",
            width: e.IMAGE_WIDTH_PX,
            height: e.IMAGE_WIDTH_PX,
            "site-id": e.siteId,
            "enable-srcset": ""
        }, null, 8, ["src", "alt", "width", "height", "site-id"])) : O("", !0), E("div", null, [ce((c(), h("p", Eb, [Be(X(m.product.title), 1)])), [
            [g, "shoppingcart-text-product"]
        ]), m.product.options.length ? ce((c(), h("p", Db, [Be(X(m.product.variants[0].title), 1)])), [
            [g, "shoppingcart-text-variant"]
        ]) : O("", !0), ce((c(), h("p", {
            class: J(["cart__text cart__price", {
                "cart__price--strikethrough": m.product.variants[0].prices[0].sale_amount
            }])
        }, [Be(X(e.formatPrice({
            amount: m.product.variants[0].prices[0].amount,
            currency: m.product.variants[0].prices[0].currency
        })), 1)], 2)), [
            [g, "shoppingcart-text-price"]
        ]), m.product.variants[0].prices[0].sale_amount ? ce((c(), h("p", Mb, [Be(X(e.formatPrice({
            amount: m.product.variants[0].prices[0].sale_amount,
            currency: m.product.variants[0].prices[0].currency
        })), 1)])), [
            [g, "shoppingcart-text-saleprice"]
        ]) : O("", !0), e.isProductBookingType(m) ? (c(), h(pe, {
            key: 2
        }, [ce((c(), h("p", Ob, [Be(X(e.getFormattedBookingDuration(m.product, e.translations)), 1)])), [
            [g, "shoppingcart-text-duration"]
        ]), E("div", Lb, [Ab, E("p", Bb, X(e.getFormattedSelectedDate(m)), 1)]), E("div", Rb, [$b, E("p", Nb, X(e.getFormattedTime(m)), 1)])], 64)) : (c(), h("p", xb, [E("span", Hb, X(e.translations.quantityShort) + ": ", 1), De(s, {
            "qa-selector": "shoppingcart",
            "is-cart-style": "",
            size: 26,
            "font-size": 14,
            quantity: m.quantity,
            "is-input-disabled": "",
            "is-limit-reached": e.isLimitReached,
            "is-stock-available": e.isStockAvailable(m),
            onQuantityChange: p => e.handleQuantityChange(p, m)
        }, null, 8, ["quantity", "is-limit-reached", "is-stock-available", "onQuantityChange"])]))]), ce(De(l, {
            class: "cart__remove-button",
            onHandleButtonClick: p => e.removeProduct(m.product)
        }, null, 8, ["onHandleButtonClick"]), [
            [g, "shoppingcart-btn-delete"]
        ])]))), 128))])]), e.quantifiedCartItemsList.length ? (c(), h("div", Vb, [ce((c(), h("p", Ub, [Be(X(e.translations.subtotal) + ": ", 1), E("span", null, X(e.formatPrice({
            amount: e.totalPrice,
            currency: e.currencyCode
        })), 1)])), [
            [g, "shoppingcart-text-subtotal"]
        ]), ce((c(), h("button", {
            class: J(["cart__text cart__checkout-button", {
                loading: e.isLoading
            }]),
            onClick: n[0] || (n[0] = m => e.$emit("checkout-button-click"))
        }, [Be(X(e.translations.checkout), 1)], 2)), [
            [g, "shoppingcart-btn-checkout"]
        ])])) : O("", !0)])]),
        _: 1
    }, 8, ["is-open", "top-position-mobile", "style", "onCloseDrawer"])
}
const qb = oe(kb, [
        ["render", Yb],
        ["__scopeId", "data-v-688c363e"]
    ]),
    Wb = le({
        components: {
            EcommerceShoppingCart: qb
        },
        props: {
            headerHeight: {
                type: Number,
                default: 0
            },
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            language: {
                type: String,
                default: "en"
            },
            currentPageEcommerceBlocks: {
                type: Array,
                default: () => []
            },
            currentPageEcommerceComponents: {
                type: Array,
                default: () => []
            },
            isHeaderSticky: {
                type: Boolean,
                default: !1
            },
            isNavHidden: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                siteId: n
            } = Je(), {
                quantifiedCartItemsList: t,
                products: a,
                isShoppingCartOpen: r,
                isCheckoutLoading: i,
                shoppingCartItems: o,
                variantsQuantity: s,
                fetchProducts: l,
                setShoppingCartOpen: d,
                setShoppingCartItems: g,
                setIsCheckoutLoading: m
            } = Vt(), {
                openEcommerceModal: p
            } = xt(), {
                initiateCheckout: f
            } = Ja();
            return {
                openEcommerceModal: p,
                initiateCheckout: f,
                quantifiedCartItemsList: t,
                products: a,
                isShoppingCartOpen: r,
                isCheckoutLoading: i,
                shoppingCartItems: o,
                variantsQuantity: s,
                fetchProducts: l,
                setShoppingCartOpen: d,
                setShoppingCartItems: g,
                setIsCheckoutLoading: m,
                siteId: n
            }
        },
        computed: {
            currentPageEcommerceElements() {
                return [...this.currentPageEcommerceBlocks, ...this.currentPageEcommerceComponents]
            },
            productIds() {
                const n = this.currentPageEcommerceElements.reduce((t, a) => {
                    let r = [];
                    const i = new URLSearchParams(window.location.search),
                        o = Number.parseInt(i.get("store-page"), 10) || 1;
                    switch (a.type) {
                        case "BlockEcommerceProductList":
                            r = [...r, ...a.productIds.slice(0, a.productsPerPage * o)];
                            break;
                        case "BlockEcommerceProduct":
                            r = [...r, a.product ? .id];
                            break;
                        case "GridEcommerceButton":
                            r = [...r, a.settings ? .productId];
                            break
                    }
                    return [...t, ...r]
                }, []).filter(t => t !== -1);
                return [...new Set(n)]
            }
        },
        watch: {
            currentPageEcommerceElements: {
                async handler(e, n) {
                    JSON.stringify(e) !== JSON.stringify(n) && await this.loadProducts()
                }
            }
        },
        mounted() {
            this.loadProducts()
        },
        methods: {
            async loadProducts() {
                await this.fetchProducts(this.productIds)
            },
            async initCheckout() {
                if ($a() || this.isInPreviewMode) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                this.isCheckoutLoading || (this.setIsCheckoutLoading(!0), await this.initiateCheckout(this.shoppingCartItems).then(() => {
                    this.setShoppingCartOpen(!1), this.setIsCheckoutLoading(!1)
                }))
            }
        }
    });

function Fb(e, n, t, a, r, i) {
    const o = Te("EcommerceShoppingCart"),
        s = Ge("qa");
    return ce((c(), F(o, {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "header-height": e.headerHeight,
        "is-header-sticky": e.isHeaderSticky,
        "is-nav-hidden": e.isNavHidden,
        translations: e.ecommerceTranslations,
        language: e.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        products: e.products,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = l => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems
    }, null, 8, ["is-shopping-cart-open", "is-loading", "header-height", "is-header-sticky", "is-nav-hidden", "translations", "language", "site-id", "quantified-cart-items-list", "products", "shopping-cart-items", "variants-quantity", "onCheckoutButtonClick", "onSetShoppingCartItems"])), [
        [s, "user-section-zyroecommerceshoppingcart"]
    ])
}
const Gb = oe(Wb, [
        ["render", Fb]
    ]),
    jb = le({
        components: {
            CloseButton: Fo
        },
        props: {
            backgroundColor: {
                type: String,
                default: "var(--color-light)"
            },
            padding: {
                type: String,
                default: "16px"
            },
            width: {
                type: String,
                default: "auto"
            },
            maxWidth: {
                type: String,
                default: "unset"
            },
            overflow: {
                type: String,
                default: "unset"
            },
            height: {
                type: String,
                default: "auto"
            },
            mobileHeight: {
                type: String,
                default: ""
            }
        },
        setup() {
            const {
                closeEcommerceModal: e
            } = xt();
            return {
                closeEcommerceModal: e
            }
        },
        computed: {
            modalStyle() {
                return {
                    "--modal-background-color": this.backgroundColor,
                    "--padding": this.padding,
                    "--width": this.width,
                    "--max-width": this.maxWidth,
                    "--overflow": this.overflow,
                    "--height": this.height,
                    "--mobile-height": this.mobileHeight || this.height
                }
            }
        },
        mounted() {
            this.$refs.modal ? .focus()
        },
        methods: {
            handleCloseModalAction() {
                this.closeEcommerceModal();
                const e = new URLSearchParams(window.location.search);
                if (!e.get("open-modal")) return;
                e.delete("open-modal"), e.delete("product");
                const n = e.toString();
                n && window.history.pushState(null, null, `?${n}`)
            }
        }
    }),
    zb = {
        class: "modal-wrapper"
    };

function Qb(e, n, t, a, r, i) {
    const o = Te("CloseButton");
    return c(), F(Mt, {
        name: "fade"
    }, {
        default: _e(() => [E("div", zb, [E("div", {
            tabindex: "-1",
            class: "modal-backdrop",
            onClick: n[0] || (n[0] = (...s) => e.handleCloseModalAction && e.handleCloseModalAction(...s))
        }), E("div", {
            ref: "modal",
            style: Re(e.modalStyle),
            class: "modal",
            tabindex: "0",
            "aria-modal": "true",
            onKeydown: n[1] || (n[1] = Oe((...s) => e.handleCloseModalAction && e.handleCloseModalAction(...s), ["esc"]))
        }, [De(o, {
            class: "modal__close-button",
            onClick: e.handleCloseModalAction
        }, null, 8, ["onClick"]), he(e.$slots, "default", {}, void 0, !0)], 36)])]),
        _: 3
    })
}
const ln = oe(jb, [
        ["render", Qb],
        ["__scopeId", "data-v-35831679"]
    ]),
    Kb = {
        __name: "EcommerceProductPreview",
        props: {
            translations: {
                type: Object,
                default: () => {}
            },
            isQuickPreview: {
                type: Boolean,
                default: !1
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    productPreviewData: a
                } = xt(),
                {
                    siteId: r
                } = Je(),
                {
                    productPages: i
                } = Vt(),
                o = u(() => ot(a.value.background.origin, a.value.background.path, r.value, {
                    width: Ca
                })),
                s = u(() => Ta(a.value.background.origin, a.value.background.path, r.value, {
                    isMobileFullScreen: !1
                })),
                l = {
                    props: t,
                    productPreviewData: a,
                    siteId: r,
                    productPages: i,
                    backgroundSrc: o,
                    backgroundSrcSet: s,
                    BlockBackground: _l,
                    ModalLayout: ln,
                    BlockEcommerceProductProviderUser: Vl,
                    computed: u,
                    get useEcommerceModal() {
                        return xt
                    },
                    get getFullWidthSrcset() {
                        return Ta
                    },
                    get getOptimizedSrc() {
                        return ot
                    },
                    get FULL_WIDTH() {
                        return Ca
                    },
                    get useEcommerceGlobal() {
                        return Vt
                    },
                    get useSiteGlobal() {
                        return Je
                    }
                };
            return Object.defineProperty(l, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), l
        }
    },
    Zb = {
        class: "ecommerce-product-preview__content-wrapper"
    };

function Xb(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), F(a.ModalLayout, {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview"
    }, {
        default: _e(() => [ce((c(), h("div", Zb, [a.productPreviewData.background ? (c(), F(a.BlockBackground, {
            key: 0,
            "overlay-opacity": a.productPreviewData.background["overlay-opacity"],
            type: a.productPreviewData.background.current,
            color: a.productPreviewData.background.color,
            gradient: a.productPreviewData.background.gradient,
            src: a.backgroundSrc,
            srcset: a.backgroundSrcSet,
            "is-fixed": a.productPreviewData.attachment === "fixed",
            alt: a.productPreviewData.background && a.productPreviewData.background.alt,
            class: "ecommerce-product-preview__background"
        }, null, 8, ["overlay-opacity", "type", "color", "gradient", "src", "srcset", "is-fixed", "alt"])) : O("", !0), De(a.BlockEcommerceProductProviderUser, {
            class: "ecommerce-product-preview__content",
            "is-quick-preview": t.isQuickPreview,
            data: a.productPreviewData,
            "product-pages": a.productPages,
            "is-cart-visible": t.isCartVisible,
            "ecommerce-translations": t.translations
        }, null, 8, ["is-quick-preview", "data", "product-pages", "is-cart-visible", "ecommerce-translations"])])), [
            [o, "productpreview-modal"]
        ])]),
        _: 1
    }, 512)
}
const Jb = oe(Kb, [
    ["render", Xb],
    ["__scopeId", "data-v-e0753e53"]
]);

function Ut(e) {
    "@babel/helpers - typeof";
    return Ut = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    } : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }, Ut(e)
}

function Pe(e) {
    if (e === null || e === !0 || e === !1) return NaN;
    var n = Number(e);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n)
}

function be(e, n) {
    if (n.length < e) throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + n.length + " present")
}

function we(e) {
    be(1, arguments);
    var n = Object.prototype.toString.call(e);
    return e instanceof Date || Ut(e) === "object" && n === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || n === "[object Number]" ? new Date(e) : ((typeof e == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN))
}

function ma(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    return isNaN(a) ? new Date(NaN) : (a && t.setDate(t.getDate() + a), t)
}

function jt(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    if (isNaN(a)) return new Date(NaN);
    if (!a) return t;
    var r = t.getDate(),
        i = new Date(t.getTime());
    i.setMonth(t.getMonth() + a + 1, 0);
    var o = i.getDate();
    return r >= o ? i : (t.setFullYear(i.getFullYear(), i.getMonth(), r), t)
}

function Fl(e, n) {
    if (be(2, arguments), !n || Ut(n) !== "object") return new Date(NaN);
    var t = n.years ? Pe(n.years) : 0,
        a = n.months ? Pe(n.months) : 0,
        r = n.weeks ? Pe(n.weeks) : 0,
        i = n.days ? Pe(n.days) : 0,
        o = n.hours ? Pe(n.hours) : 0,
        s = n.minutes ? Pe(n.minutes) : 0,
        l = n.seconds ? Pe(n.seconds) : 0,
        d = we(e),
        g = a || t ? jt(d, a + t * 12) : d,
        m = i || r ? ma(g, i + r * 7) : g,
        p = s + o * 60,
        f = l + p * 60,
        b = f * 1e3,
        S = new Date(m.getTime() + b);
    return S
}

function e_(e, n) {
    be(2, arguments);
    var t = we(e).getTime(),
        a = Pe(n);
    return new Date(t + a)
}
var t_ = {};

function la() {
    return t_
}

function Na(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = la(),
        m = Pe((t = (a = (r = (i = n ? .weekStartsOn) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : g.weekStartsOn) !== null && a !== void 0 ? a : (l = g.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
    if (!(m >= 0 && m <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = we(e),
        f = p.getDay(),
        b = (f < m ? 7 : 0) + f - m;
    return p.setDate(p.getDate() - b), p.setHours(0, 0, 0, 0), p
}

function rr(e) {
    return be(1, arguments), Na(e, {
        weekStartsOn: 1
    })
}

function a_(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getFullYear(),
        a = new Date(0);
    a.setFullYear(t + 1, 0, 4), a.setHours(0, 0, 0, 0);
    var r = rr(a),
        i = new Date(0);
    i.setFullYear(t, 0, 4), i.setHours(0, 0, 0, 0);
    var o = rr(i);
    return n.getTime() >= r.getTime() ? t + 1 : n.getTime() >= o.getTime() ? t : t - 1
}

function n_(e) {
    be(1, arguments);
    var n = a_(e),
        t = new Date(0);
    t.setFullYear(n, 0, 4), t.setHours(0, 0, 0, 0);
    var a = rr(t);
    return a
}

function or(e) {
    var n = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
    return n.setUTCFullYear(e.getFullYear()), e.getTime() - n.getTime()
}

function Ps(e) {
    be(1, arguments);
    var n = we(e);
    return n.setHours(0, 0, 0, 0), n
}
var r_ = 864e5;

function o_(e, n) {
    be(2, arguments);
    var t = Ps(e),
        a = Ps(n),
        r = t.getTime() - or(t),
        i = a.getTime() - or(a);
    return Math.round((r - i) / r_)
}

function i_(e, n) {
    be(2, arguments);
    var t = Pe(n),
        a = t * 3;
    return jt(e, a)
}

function Go(e, n) {
    be(2, arguments);
    var t = Pe(n);
    return jt(e, t * 12)
}
var jo = 6e4,
    zo = 36e5,
    s_ = 1e3;

function Gl(e) {
    return be(1, arguments), e instanceof Date || Ut(e) === "object" && Object.prototype.toString.call(e) === "[object Date]"
}

function Sn(e) {
    if (be(1, arguments), !Gl(e) && typeof e != "number") return !1;
    var n = we(e);
    return !isNaN(Number(n))
}

function Is(e) {
    be(1, arguments);
    var n = we(e),
        t = Math.floor(n.getMonth() / 3) + 1;
    return t
}

function jl(e, n) {
    var t;
    be(1, arguments);
    var a = e || {},
        r = we(a.start),
        i = we(a.end),
        o = i.getTime();
    if (!(r.getTime() <= o)) throw new RangeError("Invalid interval");
    var s = [],
        l = r;
    l.setHours(0, 0, 0, 0);
    var d = Number((t = n ? .step) !== null && t !== void 0 ? t : 1);
    if (d < 1 || isNaN(d)) throw new RangeError("`options.step` must be a number greater than 1");
    for (; l.getTime() <= o;) s.push(we(l)), l.setDate(l.getDate() + d), l.setHours(0, 0, 0, 0);
    return s
}

function An(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getMonth(),
        a = t - t % 3;
    return n.setMonth(a, 1), n.setHours(0, 0, 0, 0), n
}

function l_(e) {
    be(1, arguments);
    var n = e || {},
        t = we(n.start),
        a = we(n.end),
        r = a.getTime();
    if (!(t.getTime() <= r)) throw new RangeError("Invalid interval");
    var i = An(t),
        o = An(a);
    r = o.getTime();
    for (var s = [], l = i; l.getTime() <= r;) s.push(we(l)), l = i_(l, 1);
    return s
}

function u_(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getFullYear();
    return n.setFullYear(t + 1, 0, 0), n.setHours(23, 59, 59, 999), n
}

function c_(e) {
    be(1, arguments);
    var n = we(e),
        t = new Date(0);
    return t.setFullYear(n.getFullYear(), 0, 1), t.setHours(0, 0, 0, 0), t
}

function d_(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = la(),
        m = Pe((t = (a = (r = (i = n ? .weekStartsOn) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : g.weekStartsOn) !== null && a !== void 0 ? a : (l = g.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
    if (!(m >= 0 && m <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = we(e),
        f = p.getDay(),
        b = (f < m ? -7 : 0) + 6 - (f - m);
    return p.setDate(p.getDate() + b), p.setHours(23, 59, 59, 999), p
}

function Es(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getMonth(),
        a = t - t % 3 + 3;
    return n.setMonth(a, 0), n.setHours(23, 59, 59, 999), n
}

function zl(e, n) {
    be(2, arguments);
    var t = Pe(n);
    return e_(e, -t)
}
var m_ = 864e5;

function g_(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getTime();
    n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
    var a = n.getTime(),
        r = t - a;
    return Math.floor(r / m_) + 1
}

function tn(e) {
    be(1, arguments);
    var n = 1,
        t = we(e),
        a = t.getUTCDay(),
        r = (a < n ? 7 : 0) + a - n;
    return t.setUTCDate(t.getUTCDate() - r), t.setUTCHours(0, 0, 0, 0), t
}

function Ql(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getUTCFullYear(),
        a = new Date(0);
    a.setUTCFullYear(t + 1, 0, 4), a.setUTCHours(0, 0, 0, 0);
    var r = tn(a),
        i = new Date(0);
    i.setUTCFullYear(t, 0, 4), i.setUTCHours(0, 0, 0, 0);
    var o = tn(i);
    return n.getTime() >= r.getTime() ? t + 1 : n.getTime() >= o.getTime() ? t : t - 1
}

function p_(e) {
    be(1, arguments);
    var n = Ql(e),
        t = new Date(0);
    t.setUTCFullYear(n, 0, 4), t.setUTCHours(0, 0, 0, 0);
    var a = tn(t);
    return a
}
var v_ = 6048e5;

function Kl(e) {
    be(1, arguments);
    var n = we(e),
        t = tn(n).getTime() - p_(n).getTime();
    return Math.round(t / v_) + 1
}

function xa(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = la(),
        m = Pe((t = (a = (r = (i = n ? .weekStartsOn) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : g.weekStartsOn) !== null && a !== void 0 ? a : (l = g.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && t !== void 0 ? t : 0);
    if (!(m >= 0 && m <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var p = we(e),
        f = p.getUTCDay(),
        b = (f < m ? 7 : 0) + f - m;
    return p.setUTCDate(p.getUTCDate() - b), p.setUTCHours(0, 0, 0, 0), p
}

function Qo(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = we(e),
        m = g.getUTCFullYear(),
        p = la(),
        f = Pe((t = (a = (r = (i = n ? .firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : p.firstWeekContainsDate) !== null && a !== void 0 ? a : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
    if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = new Date(0);
    b.setUTCFullYear(m + 1, 0, f), b.setUTCHours(0, 0, 0, 0);
    var S = xa(b, n),
        C = new Date(0);
    C.setUTCFullYear(m, 0, f), C.setUTCHours(0, 0, 0, 0);
    var w = xa(C, n);
    return g.getTime() >= S.getTime() ? m + 1 : g.getTime() >= w.getTime() ? m : m - 1
}

function h_(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = la(),
        m = Pe((t = (a = (r = (i = n ? .firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : g.firstWeekContainsDate) !== null && a !== void 0 ? a : (l = g.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1),
        p = Qo(e, n),
        f = new Date(0);
    f.setUTCFullYear(p, 0, m), f.setUTCHours(0, 0, 0, 0);
    var b = xa(f, n);
    return b
}
var f_ = 6048e5;

function Zl(e, n) {
    be(1, arguments);
    var t = we(e),
        a = xa(t, n).getTime() - h_(t, n).getTime();
    return Math.round(a / f_) + 1
}

function je(e, n) {
    for (var t = e < 0 ? "-" : "", a = Math.abs(e).toString(); a.length < n;) a = "0" + a;
    return t + a
}
var y_ = {
    y: function(n, t) {
        var a = n.getUTCFullYear(),
            r = a > 0 ? a : 1 - a;
        return je(t === "yy" ? r % 100 : r, t.length)
    },
    M: function(n, t) {
        var a = n.getUTCMonth();
        return t === "M" ? String(a + 1) : je(a + 1, 2)
    },
    d: function(n, t) {
        return je(n.getUTCDate(), t.length)
    },
    a: function(n, t) {
        var a = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (t) {
            case "a":
            case "aa":
                return a.toUpperCase();
            case "aaa":
                return a;
            case "aaaaa":
                return a[0];
            case "aaaa":
            default:
                return a === "am" ? "a.m." : "p.m."
        }
    },
    h: function(n, t) {
        return je(n.getUTCHours() % 12 || 12, t.length)
    },
    H: function(n, t) {
        return je(n.getUTCHours(), t.length)
    },
    m: function(n, t) {
        return je(n.getUTCMinutes(), t.length)
    },
    s: function(n, t) {
        return je(n.getUTCSeconds(), t.length)
    },
    S: function(n, t) {
        var a = t.length,
            r = n.getUTCMilliseconds(),
            i = Math.floor(r * Math.pow(10, a - 3));
        return je(i, t.length)
    }
};
const ha = y_;
var Wa = {
        am: "am",
        pm: "pm",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    b_ = {
        G: function(n, t, a) {
            var r = n.getUTCFullYear() > 0 ? 1 : 0;
            switch (t) {
                case "G":
                case "GG":
                case "GGG":
                    return a.era(r, {
                        width: "abbreviated"
                    });
                case "GGGGG":
                    return a.era(r, {
                        width: "narrow"
                    });
                case "GGGG":
                default:
                    return a.era(r, {
                        width: "wide"
                    })
            }
        },
        y: function(n, t, a) {
            if (t === "yo") {
                var r = n.getUTCFullYear(),
                    i = r > 0 ? r : 1 - r;
                return a.ordinalNumber(i, {
                    unit: "year"
                })
            }
            return ha.y(n, t)
        },
        Y: function(n, t, a, r) {
            var i = Qo(n, r),
                o = i > 0 ? i : 1 - i;
            if (t === "YY") {
                var s = o % 100;
                return je(s, 2)
            }
            return t === "Yo" ? a.ordinalNumber(o, {
                unit: "year"
            }) : je(o, t.length)
        },
        R: function(n, t) {
            var a = Ql(n);
            return je(a, t.length)
        },
        u: function(n, t) {
            var a = n.getUTCFullYear();
            return je(a, t.length)
        },
        Q: function(n, t, a) {
            var r = Math.ceil((n.getUTCMonth() + 1) / 3);
            switch (t) {
                case "Q":
                    return String(r);
                case "QQ":
                    return je(r, 2);
                case "Qo":
                    return a.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "QQQ":
                    return a.quarter(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "QQQQQ":
                    return a.quarter(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "QQQQ":
                default:
                    return a.quarter(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        q: function(n, t, a) {
            var r = Math.ceil((n.getUTCMonth() + 1) / 3);
            switch (t) {
                case "q":
                    return String(r);
                case "qq":
                    return je(r, 2);
                case "qo":
                    return a.ordinalNumber(r, {
                        unit: "quarter"
                    });
                case "qqq":
                    return a.quarter(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "qqqqq":
                    return a.quarter(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "qqqq":
                default:
                    return a.quarter(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        M: function(n, t, a) {
            var r = n.getUTCMonth();
            switch (t) {
                case "M":
                case "MM":
                    return ha.M(n, t);
                case "Mo":
                    return a.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "MMM":
                    return a.month(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "MMMMM":
                    return a.month(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "MMMM":
                default:
                    return a.month(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        L: function(n, t, a) {
            var r = n.getUTCMonth();
            switch (t) {
                case "L":
                    return String(r + 1);
                case "LL":
                    return je(r + 1, 2);
                case "Lo":
                    return a.ordinalNumber(r + 1, {
                        unit: "month"
                    });
                case "LLL":
                    return a.month(r, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "LLLLL":
                    return a.month(r, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "LLLL":
                default:
                    return a.month(r, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        w: function(n, t, a, r) {
            var i = Zl(n, r);
            return t === "wo" ? a.ordinalNumber(i, {
                unit: "week"
            }) : je(i, t.length)
        },
        I: function(n, t, a) {
            var r = Kl(n);
            return t === "Io" ? a.ordinalNumber(r, {
                unit: "week"
            }) : je(r, t.length)
        },
        d: function(n, t, a) {
            return t === "do" ? a.ordinalNumber(n.getUTCDate(), {
                unit: "date"
            }) : ha.d(n, t)
        },
        D: function(n, t, a) {
            var r = g_(n);
            return t === "Do" ? a.ordinalNumber(r, {
                unit: "dayOfYear"
            }) : je(r, t.length)
        },
        E: function(n, t, a) {
            var r = n.getUTCDay();
            switch (t) {
                case "E":
                case "EE":
                case "EEE":
                    return a.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "EEEEE":
                    return a.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "EEEEEE":
                    return a.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                case "EEEE":
                default:
                    return a.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        e: function(n, t, a, r) {
            var i = n.getUTCDay(),
                o = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "e":
                    return String(o);
                case "ee":
                    return je(o, 2);
                case "eo":
                    return a.ordinalNumber(o, {
                        unit: "day"
                    });
                case "eee":
                    return a.day(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "eeeee":
                    return a.day(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "eeeeee":
                    return a.day(i, {
                        width: "short",
                        context: "formatting"
                    });
                case "eeee":
                default:
                    return a.day(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        c: function(n, t, a, r) {
            var i = n.getUTCDay(),
                o = (i - r.weekStartsOn + 8) % 7 || 7;
            switch (t) {
                case "c":
                    return String(o);
                case "cc":
                    return je(o, t.length);
                case "co":
                    return a.ordinalNumber(o, {
                        unit: "day"
                    });
                case "ccc":
                    return a.day(i, {
                        width: "abbreviated",
                        context: "standalone"
                    });
                case "ccccc":
                    return a.day(i, {
                        width: "narrow",
                        context: "standalone"
                    });
                case "cccccc":
                    return a.day(i, {
                        width: "short",
                        context: "standalone"
                    });
                case "cccc":
                default:
                    return a.day(i, {
                        width: "wide",
                        context: "standalone"
                    })
            }
        },
        i: function(n, t, a) {
            var r = n.getUTCDay(),
                i = r === 0 ? 7 : r;
            switch (t) {
                case "i":
                    return String(i);
                case "ii":
                    return je(i, t.length);
                case "io":
                    return a.ordinalNumber(i, {
                        unit: "day"
                    });
                case "iii":
                    return a.day(r, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "iiiii":
                    return a.day(r, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "iiiiii":
                    return a.day(r, {
                        width: "short",
                        context: "formatting"
                    });
                case "iiii":
                default:
                    return a.day(r, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        a: function(n, t, a) {
            var r = n.getUTCHours(),
                i = r / 12 >= 1 ? "pm" : "am";
            switch (t) {
                case "a":
                case "aa":
                    return a.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "aaa":
                    return a.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "aaaaa":
                    return a.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "aaaa":
                default:
                    return a.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        b: function(n, t, a) {
            var r = n.getUTCHours(),
                i;
            switch (r === 12 ? i = Wa.noon : r === 0 ? i = Wa.midnight : i = r / 12 >= 1 ? "pm" : "am", t) {
                case "b":
                case "bb":
                    return a.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "bbb":
                    return a.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    }).toLowerCase();
                case "bbbbb":
                    return a.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "bbbb":
                default:
                    return a.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        B: function(n, t, a) {
            var r = n.getUTCHours(),
                i;
            switch (r >= 17 ? i = Wa.evening : r >= 12 ? i = Wa.afternoon : r >= 4 ? i = Wa.morning : i = Wa.night, t) {
                case "B":
                case "BB":
                case "BBB":
                    return a.dayPeriod(i, {
                        width: "abbreviated",
                        context: "formatting"
                    });
                case "BBBBB":
                    return a.dayPeriod(i, {
                        width: "narrow",
                        context: "formatting"
                    });
                case "BBBB":
                default:
                    return a.dayPeriod(i, {
                        width: "wide",
                        context: "formatting"
                    })
            }
        },
        h: function(n, t, a) {
            if (t === "ho") {
                var r = n.getUTCHours() % 12;
                return r === 0 && (r = 12), a.ordinalNumber(r, {
                    unit: "hour"
                })
            }
            return ha.h(n, t)
        },
        H: function(n, t, a) {
            return t === "Ho" ? a.ordinalNumber(n.getUTCHours(), {
                unit: "hour"
            }) : ha.H(n, t)
        },
        K: function(n, t, a) {
            var r = n.getUTCHours() % 12;
            return t === "Ko" ? a.ordinalNumber(r, {
                unit: "hour"
            }) : je(r, t.length)
        },
        k: function(n, t, a) {
            var r = n.getUTCHours();
            return r === 0 && (r = 24), t === "ko" ? a.ordinalNumber(r, {
                unit: "hour"
            }) : je(r, t.length)
        },
        m: function(n, t, a) {
            return t === "mo" ? a.ordinalNumber(n.getUTCMinutes(), {
                unit: "minute"
            }) : ha.m(n, t)
        },
        s: function(n, t, a) {
            return t === "so" ? a.ordinalNumber(n.getUTCSeconds(), {
                unit: "second"
            }) : ha.s(n, t)
        },
        S: function(n, t) {
            return ha.S(n, t)
        },
        X: function(n, t, a, r) {
            var i = r._originalDate || n,
                o = i.getTimezoneOffset();
            if (o === 0) return "Z";
            switch (t) {
                case "X":
                    return Ms(o);
                case "XXXX":
                case "XX":
                    return Ma(o);
                case "XXXXX":
                case "XXX":
                default:
                    return Ma(o, ":")
            }
        },
        x: function(n, t, a, r) {
            var i = r._originalDate || n,
                o = i.getTimezoneOffset();
            switch (t) {
                case "x":
                    return Ms(o);
                case "xxxx":
                case "xx":
                    return Ma(o);
                case "xxxxx":
                case "xxx":
                default:
                    return Ma(o, ":")
            }
        },
        O: function(n, t, a, r) {
            var i = r._originalDate || n,
                o = i.getTimezoneOffset();
            switch (t) {
                case "O":
                case "OO":
                case "OOO":
                    return "GMT" + Ds(o, ":");
                case "OOOO":
                default:
                    return "GMT" + Ma(o, ":")
            }
        },
        z: function(n, t, a, r) {
            var i = r._originalDate || n,
                o = i.getTimezoneOffset();
            switch (t) {
                case "z":
                case "zz":
                case "zzz":
                    return "GMT" + Ds(o, ":");
                case "zzzz":
                default:
                    return "GMT" + Ma(o, ":")
            }
        },
        t: function(n, t, a, r) {
            var i = r._originalDate || n,
                o = Math.floor(i.getTime() / 1e3);
            return je(o, t.length)
        },
        T: function(n, t, a, r) {
            var i = r._originalDate || n,
                o = i.getTime();
            return je(o, t.length)
        }
    };

function Ds(e, n) {
    var t = e > 0 ? "-" : "+",
        a = Math.abs(e),
        r = Math.floor(a / 60),
        i = a % 60;
    if (i === 0) return t + String(r);
    var o = n || "";
    return t + String(r) + o + je(i, 2)
}

function Ms(e, n) {
    if (e % 60 === 0) {
        var t = e > 0 ? "-" : "+";
        return t + je(Math.abs(e) / 60, 2)
    }
    return Ma(e, n)
}

function Ma(e, n) {
    var t = n || "",
        a = e > 0 ? "-" : "+",
        r = Math.abs(e),
        i = je(Math.floor(r / 60), 2),
        o = je(r % 60, 2);
    return a + i + t + o
}
var Os = function(n, t) {
        switch (n) {
            case "P":
                return t.date({
                    width: "short"
                });
            case "PP":
                return t.date({
                    width: "medium"
                });
            case "PPP":
                return t.date({
                    width: "long"
                });
            case "PPPP":
            default:
                return t.date({
                    width: "full"
                })
        }
    },
    Xl = function(n, t) {
        switch (n) {
            case "p":
                return t.time({
                    width: "short"
                });
            case "pp":
                return t.time({
                    width: "medium"
                });
            case "ppp":
                return t.time({
                    width: "long"
                });
            case "pppp":
            default:
                return t.time({
                    width: "full"
                })
        }
    },
    __ = function(n, t) {
        var a = n.match(/(P+)(p+)?/) || [],
            r = a[1],
            i = a[2];
        if (!i) return Os(n, t);
        var o;
        switch (r) {
            case "P":
                o = t.dateTime({
                    width: "short"
                });
                break;
            case "PP":
                o = t.dateTime({
                    width: "medium"
                });
                break;
            case "PPP":
                o = t.dateTime({
                    width: "long"
                });
                break;
            case "PPPP":
            default:
                o = t.dateTime({
                    width: "full"
                });
                break
        }
        return o.replace("{{date}}", Os(r, t)).replace("{{time}}", Xl(i, t))
    },
    ho = {
        p: Xl,
        P: __
    },
    w_ = ["D", "DD"],
    k_ = ["YY", "YYYY"];

function Jl(e) {
    return w_.indexOf(e) !== -1
}

function eu(e) {
    return k_.indexOf(e) !== -1
}

function ir(e, n, t) {
    if (e === "YYYY") throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (e === "YY") throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (e === "D") throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (e === "DD") throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(t, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var S_ = {
        lessThanXSeconds: {
            one: "less than a second",
            other: "less than {{count}} seconds"
        },
        xSeconds: {
            one: "1 second",
            other: "{{count}} seconds"
        },
        halfAMinute: "half a minute",
        lessThanXMinutes: {
            one: "less than a minute",
            other: "less than {{count}} minutes"
        },
        xMinutes: {
            one: "1 minute",
            other: "{{count}} minutes"
        },
        aboutXHours: {
            one: "about 1 hour",
            other: "about {{count}} hours"
        },
        xHours: {
            one: "1 hour",
            other: "{{count}} hours"
        },
        xDays: {
            one: "1 day",
            other: "{{count}} days"
        },
        aboutXWeeks: {
            one: "about 1 week",
            other: "about {{count}} weeks"
        },
        xWeeks: {
            one: "1 week",
            other: "{{count}} weeks"
        },
        aboutXMonths: {
            one: "about 1 month",
            other: "about {{count}} months"
        },
        xMonths: {
            one: "1 month",
            other: "{{count}} months"
        },
        aboutXYears: {
            one: "about 1 year",
            other: "about {{count}} years"
        },
        xYears: {
            one: "1 year",
            other: "{{count}} years"
        },
        overXYears: {
            one: "over 1 year",
            other: "over {{count}} years"
        },
        almostXYears: {
            one: "almost 1 year",
            other: "almost {{count}} years"
        }
    },
    C_ = function(n, t, a) {
        var r, i = S_[n];
        return typeof i == "string" ? r = i : t === 1 ? r = i.one : r = i.other.replace("{{count}}", t.toString()), a != null && a.addSuffix ? a.comparison && a.comparison > 0 ? "in " + r : r + " ago" : r
    };
const T_ = C_;

function xr(e) {
    return function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            t = n.width ? String(n.width) : e.defaultWidth,
            a = e.formats[t] || e.formats[e.defaultWidth];
        return a
    }
}
var P_ = {
        full: "EEEE, MMMM do, y",
        long: "MMMM do, y",
        medium: "MMM d, y",
        short: "MM/dd/yyyy"
    },
    I_ = {
        full: "h:mm:ss a zzzz",
        long: "h:mm:ss a z",
        medium: "h:mm:ss a",
        short: "h:mm a"
    },
    E_ = {
        full: "{{date}} 'at' {{time}}",
        long: "{{date}} 'at' {{time}}",
        medium: "{{date}}, {{time}}",
        short: "{{date}}, {{time}}"
    },
    D_ = {
        date: xr({
            formats: P_,
            defaultWidth: "full"
        }),
        time: xr({
            formats: I_,
            defaultWidth: "full"
        }),
        dateTime: xr({
            formats: E_,
            defaultWidth: "full"
        })
    };
const M_ = D_;
var O_ = {
        lastWeek: "'last' eeee 'at' p",
        yesterday: "'yesterday at' p",
        today: "'today at' p",
        tomorrow: "'tomorrow at' p",
        nextWeek: "eeee 'at' p",
        other: "P"
    },
    L_ = function(n, t, a, r) {
        return O_[n]
    };
const A_ = L_;

function fn(e) {
    return function(n, t) {
        var a = t != null && t.context ? String(t.context) : "standalone",
            r;
        if (a === "formatting" && e.formattingValues) {
            var i = e.defaultFormattingWidth || e.defaultWidth,
                o = t != null && t.width ? String(t.width) : i;
            r = e.formattingValues[o] || e.formattingValues[i]
        } else {
            var s = e.defaultWidth,
                l = t != null && t.width ? String(t.width) : e.defaultWidth;
            r = e.values[l] || e.values[s]
        }
        var d = e.argumentCallback ? e.argumentCallback(n) : n;
        return r[d]
    }
}
var B_ = {
        narrow: ["B", "A"],
        abbreviated: ["BC", "AD"],
        wide: ["Before Christ", "Anno Domini"]
    },
    R_ = {
        narrow: ["1", "2", "3", "4"],
        abbreviated: ["Q1", "Q2", "Q3", "Q4"],
        wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    },
    $_ = {
        narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
        abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    },
    N_ = {
        narrow: ["S", "M", "T", "W", "T", "F", "S"],
        short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    x_ = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night"
        }
    },
    H_ = {
        narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        },
        wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night"
        }
    },
    V_ = function(n, t) {
        var a = Number(n),
            r = a % 100;
        if (r > 20 || r < 10) switch (r % 10) {
            case 1:
                return a + "st";
            case 2:
                return a + "nd";
            case 3:
                return a + "rd"
        }
        return a + "th"
    },
    U_ = {
        ordinalNumber: V_,
        era: fn({
            values: B_,
            defaultWidth: "wide"
        }),
        quarter: fn({
            values: R_,
            defaultWidth: "wide",
            argumentCallback: function(n) {
                return n - 1
            }
        }),
        month: fn({
            values: $_,
            defaultWidth: "wide"
        }),
        day: fn({
            values: N_,
            defaultWidth: "wide"
        }),
        dayPeriod: fn({
            values: x_,
            defaultWidth: "wide",
            formattingValues: H_,
            defaultFormattingWidth: "wide"
        })
    };
const Y_ = U_;

function yn(e) {
    return function(n) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = t.width,
            r = a && e.matchPatterns[a] || e.matchPatterns[e.defaultMatchWidth],
            i = n.match(r);
        if (!i) return null;
        var o = i[0],
            s = a && e.parsePatterns[a] || e.parsePatterns[e.defaultParseWidth],
            l = Array.isArray(s) ? W_(s, function(m) {
                return m.test(o)
            }) : q_(s, function(m) {
                return m.test(o)
            }),
            d;
        d = e.valueCallback ? e.valueCallback(l) : l, d = t.valueCallback ? t.valueCallback(d) : d;
        var g = n.slice(o.length);
        return {
            value: d,
            rest: g
        }
    }
}

function q_(e, n) {
    for (var t in e)
        if (e.hasOwnProperty(t) && n(e[t])) return t
}

function W_(e, n) {
    for (var t = 0; t < e.length; t++)
        if (n(e[t])) return t
}

function F_(e) {
    return function(n) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            a = n.match(e.matchPattern);
        if (!a) return null;
        var r = a[0],
            i = n.match(e.parsePattern);
        if (!i) return null;
        var o = e.valueCallback ? e.valueCallback(i[0]) : i[0];
        o = t.valueCallback ? t.valueCallback(o) : o;
        var s = n.slice(r.length);
        return {
            value: o,
            rest: s
        }
    }
}
var G_ = /^(\d+)(th|st|nd|rd)?/i,
    j_ = /\d+/i,
    z_ = {
        narrow: /^(b|a)/i,
        abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
        wide: /^(before christ|before common era|anno domini|common era)/i
    },
    Q_ = {
        any: [/^b/i, /^(a|c)/i]
    },
    K_ = {
        narrow: /^[1234]/i,
        abbreviated: /^q[1234]/i,
        wide: /^[1234](th|st|nd|rd)? quarter/i
    },
    Z_ = {
        any: [/1/i, /2/i, /3/i, /4/i]
    },
    X_ = {
        narrow: /^[jfmasond]/i,
        abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
        wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    },
    J_ = {
        narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
        any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    },
    e0 = {
        narrow: /^[smtwf]/i,
        short: /^(su|mo|tu|we|th|fr|sa)/i,
        abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
        wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    },
    t0 = {
        narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
        any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    },
    a0 = {
        narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
        any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    },
    n0 = {
        any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i
        }
    },
    r0 = {
        ordinalNumber: F_({
            matchPattern: G_,
            parsePattern: j_,
            valueCallback: function(n) {
                return parseInt(n, 10)
            }
        }),
        era: yn({
            matchPatterns: z_,
            defaultMatchWidth: "wide",
            parsePatterns: Q_,
            defaultParseWidth: "any"
        }),
        quarter: yn({
            matchPatterns: K_,
            defaultMatchWidth: "wide",
            parsePatterns: Z_,
            defaultParseWidth: "any",
            valueCallback: function(n) {
                return n + 1
            }
        }),
        month: yn({
            matchPatterns: X_,
            defaultMatchWidth: "wide",
            parsePatterns: J_,
            defaultParseWidth: "any"
        }),
        day: yn({
            matchPatterns: e0,
            defaultMatchWidth: "wide",
            parsePatterns: t0,
            defaultParseWidth: "any"
        }),
        dayPeriod: yn({
            matchPatterns: a0,
            defaultMatchWidth: "any",
            parsePatterns: n0,
            defaultParseWidth: "any"
        })
    };
const o0 = r0;
var i0 = {
    code: "en-US",
    formatDistance: T_,
    formatLong: M_,
    formatRelative: A_,
    localize: Y_,
    match: o0,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
};
const tu = i0;
var s0 = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    l0 = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    u0 = /^'([^]*?)'?$/,
    c0 = /''/g,
    d0 = /[a-zA-Z]/;

function _a(e, n, t) {
    var a, r, i, o, s, l, d, g, m, p, f, b, S, C, w, y, D, P;
    be(2, arguments);
    var M = String(n),
        R = la(),
        $ = (a = (r = t ? .locale) !== null && r !== void 0 ? r : R.locale) !== null && a !== void 0 ? a : tu,
        Z = Pe((i = (o = (s = (l = t ? .firstWeekContainsDate) !== null && l !== void 0 ? l : t == null || (d = t.locale) === null || d === void 0 || (g = d.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && s !== void 0 ? s : R.firstWeekContainsDate) !== null && o !== void 0 ? o : (m = R.locale) === null || m === void 0 || (p = m.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!(Z >= 1 && Z <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var G = Pe((f = (b = (S = (C = t ? .weekStartsOn) !== null && C !== void 0 ? C : t == null || (w = t.locale) === null || w === void 0 || (y = w.options) === null || y === void 0 ? void 0 : y.weekStartsOn) !== null && S !== void 0 ? S : R.weekStartsOn) !== null && b !== void 0 ? b : (D = R.locale) === null || D === void 0 || (P = D.options) === null || P === void 0 ? void 0 : P.weekStartsOn) !== null && f !== void 0 ? f : 0);
    if (!(G >= 0 && G <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!$.localize) throw new RangeError("locale must contain localize property");
    if (!$.formatLong) throw new RangeError("locale must contain formatLong property");
    var T = we(e);
    if (!Sn(T)) throw new RangeError("Invalid time value");
    var L = or(T),
        H = zl(T, L),
        z = {
            firstWeekContainsDate: Z,
            weekStartsOn: G,
            locale: $,
            _originalDate: T
        },
        V = M.match(l0).map(function(I) {
            var N = I[0];
            if (N === "p" || N === "P") {
                var U = ho[N];
                return U(I, $.formatLong)
            }
            return I
        }).join("").match(s0).map(function(I) {
            if (I === "''") return "'";
            var N = I[0];
            if (N === "'") return m0(I);
            var U = b_[N];
            if (U) return !(t != null && t.useAdditionalWeekYearTokens) && eu(I) && ir(I, n, String(e)), !(t != null && t.useAdditionalDayOfYearTokens) && Jl(I) && ir(I, n, String(e)), U(H, I, $.localize, z);
            if (N.match(d0)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + N + "`");
            return I
        }).join("");
    return V
}

function m0(e) {
    var n = e.match(u0);
    return n ? n[1].replace(c0, "'") : e
}

function g0(e, n) {
    if (e == null) throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
    return e
}

function p0(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getDay();
    return t
}

function v0(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getFullYear(),
        a = n.getMonth(),
        r = new Date(0);
    return r.setFullYear(t, a + 1, 0), r.setHours(0, 0, 0, 0), r.getDate()
}

function zt(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getHours();
    return t
}
var h0 = 6048e5;

function f0(e) {
    be(1, arguments);
    var n = we(e),
        t = rr(n).getTime() - n_(n).getTime();
    return Math.round(t / h0) + 1
}

function ia(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getMinutes();
    return t
}

function He(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getMonth();
    return t
}

function an(e) {
    be(1, arguments);
    var n = we(e),
        t = n.getSeconds();
    return t
}

function y0(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = we(e),
        m = g.getFullYear(),
        p = la(),
        f = Pe((t = (a = (r = (i = n ? .firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : p.firstWeekContainsDate) !== null && a !== void 0 ? a : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1);
    if (!(f >= 1 && f <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = new Date(0);
    b.setFullYear(m + 1, 0, f), b.setHours(0, 0, 0, 0);
    var S = Na(b, n),
        C = new Date(0);
    C.setFullYear(m, 0, f), C.setHours(0, 0, 0, 0);
    var w = Na(C, n);
    return g.getTime() >= S.getTime() ? m + 1 : g.getTime() >= w.getTime() ? m : m - 1
}

function b0(e, n) {
    var t, a, r, i, o, s, l, d;
    be(1, arguments);
    var g = la(),
        m = Pe((t = (a = (r = (i = n ? .firstWeekContainsDate) !== null && i !== void 0 ? i : n == null || (o = n.locale) === null || o === void 0 || (s = o.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : g.firstWeekContainsDate) !== null && a !== void 0 ? a : (l = g.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && t !== void 0 ? t : 1),
        p = y0(e, n),
        f = new Date(0);
    f.setFullYear(p, 0, m), f.setHours(0, 0, 0, 0);
    var b = Na(f, n);
    return b
}
var _0 = 6048e5;

function w0(e, n) {
    be(1, arguments);
    var t = we(e),
        a = Na(t, n).getTime() - b0(t, n).getTime();
    return Math.round(a / _0) + 1
}

function Ae(e) {
    return be(1, arguments), we(e).getFullYear()
}

function Bn(e, n) {
    be(2, arguments);
    var t = we(e),
        a = we(n);
    return t.getTime() > a.getTime()
}

function Rn(e, n) {
    be(2, arguments);
    var t = we(e),
        a = we(n);
    return t.getTime() < a.getTime()
}

function za(e, n) {
    be(2, arguments);
    var t = we(e),
        a = we(n);
    return t.getTime() === a.getTime()
}

function Ls(e, n) {
    (n == null || n > e.length) && (n = e.length);
    for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
    return a
}

function k0(e, n) {
    if (e) {
        if (typeof e == "string") return Ls(e, n);
        var t = Object.prototype.toString.call(e).slice(8, -1);
        if (t === "Object" && e.constructor && (t = e.constructor.name), t === "Map" || t === "Set") return Array.from(e);
        if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Ls(e, n)
    }
}

function As(e, n) {
    var t = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
    if (!t) {
        if (Array.isArray(e) || (t = k0(e)) || n && e && typeof e.length == "number") {
            t && (e = t);
            var a = 0,
                r = function() {};
            return {
                s: r,
                n: function() {
                    return a >= e.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: e[a++]
                    }
                },
                e: function(d) {
                    throw d
                },
                f: r
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var i = !0,
        o = !1,
        s;
    return {
        s: function() {
            t = t.call(e)
        },
        n: function() {
            var d = t.next();
            return i = d.done, d
        },
        e: function(d) {
            o = !0, s = d
        },
        f: function() {
            try {
                !i && t.return != null && t.return()
            } finally {
                if (o) throw s
            }
        }
    }
}

function ye(e) {
    if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}

function fo(e, n) {
    return fo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(a, r) {
        return a.__proto__ = r, a
    }, fo(e, n)
}

function Ue(e, n) {
    if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: e,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(e, "prototype", {
        writable: !1
    }), n && fo(e, n)
}

function sr(e) {
    return sr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
    }, sr(e)
}

function au() {
    try {
        var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (au = function() {
        return !!e
    })()
}

function S0(e, n) {
    if (n && (Ut(n) === "object" || typeof n == "function")) return n;
    if (n !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
    return ye(e)
}

function Ye(e) {
    var n = au();
    return function() {
        var a = sr(e),
            r;
        if (n) {
            var i = sr(this).constructor;
            r = Reflect.construct(a, arguments, i)
        } else r = a.apply(this, arguments);
        return S0(this, r)
    }
}

function Ne(e, n) {
    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
}

function C0(e, n) {
    if (Ut(e) != "object" || !e) return e;
    var t = e[Symbol.toPrimitive];
    if (t !== void 0) {
        var a = t.call(e, n || "default");
        if (Ut(a) != "object") return a;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(e)
}

function nu(e) {
    var n = C0(e, "string");
    return Ut(n) == "symbol" ? n : String(n)
}

function Bs(e, n) {
    for (var t = 0; t < n.length; t++) {
        var a = n[t];
        a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, nu(a.key), a)
    }
}

function xe(e, n, t) {
    return n && Bs(e.prototype, n), t && Bs(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e
}

function fe(e, n, t) {
    return n = nu(n), n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e
}
var T0 = 10,
    ru = function() {
        function e() {
            Ne(this, e), fe(this, "priority", void 0), fe(this, "subPriority", 0)
        }
        return xe(e, [{
            key: "validate",
            value: function(t, a) {
                return !0
            }
        }]), e
    }(),
    P0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t(a, r, i, o, s) {
            var l;
            return Ne(this, t), l = n.call(this), l.value = a, l.validateValue = r, l.setValue = i, l.priority = o, s && (l.subPriority = s), l
        }
        return xe(t, [{
            key: "validate",
            value: function(r, i) {
                return this.validateValue(r, this.value, i)
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return this.setValue(r, i, this.value, o)
            }
        }]), t
    }(ru),
    I0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", T0), fe(ye(a), "subPriority", -1), a
        }
        return xe(t, [{
            key: "set",
            value: function(r, i) {
                if (i.timestampIsSet) return r;
                var o = new Date(0);
                return o.setFullYear(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()), o.setHours(r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()), o
            }
        }]), t
    }(ru),
    Fe = function() {
        function e() {
            Ne(this, e), fe(this, "incompatibleTokens", void 0), fe(this, "priority", void 0), fe(this, "subPriority", void 0)
        }
        return xe(e, [{
            key: "run",
            value: function(t, a, r, i) {
                var o = this.parse(t, a, r, i);
                return o ? {
                    setter: new P0(o.value, this.validate, this.set, this.priority, this.subPriority),
                    rest: o.rest
                } : null
            }
        }, {
            key: "validate",
            value: function(t, a, r) {
                return !0
            }
        }]), e
    }(),
    E0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 140), fe(ye(a), "incompatibleTokens", ["R", "u", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "G":
                    case "GG":
                    case "GGG":
                        return o.era(r, {
                            width: "abbreviated"
                        }) || o.era(r, {
                            width: "narrow"
                        });
                    case "GGGGG":
                        return o.era(r, {
                            width: "narrow"
                        });
                    case "GGGG":
                    default:
                        return o.era(r, {
                            width: "wide"
                        }) || o.era(r, {
                            width: "abbreviated"
                        }) || o.era(r, {
                            width: "narrow"
                        })
                }
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return i.era = o, r.setUTCFullYear(o, 0, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    it = {
        month: /^(1[0-2]|0?\d)/,
        date: /^(3[0-1]|[0-2]?\d)/,
        dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
        week: /^(5[0-3]|[0-4]?\d)/,
        hour23h: /^(2[0-3]|[0-1]?\d)/,
        hour24h: /^(2[0-4]|[0-1]?\d)/,
        hour11h: /^(1[0-1]|0?\d)/,
        hour12h: /^(1[0-2]|0?\d)/,
        minute: /^[0-5]?\d/,
        second: /^[0-5]?\d/,
        singleDigit: /^\d/,
        twoDigits: /^\d{1,2}/,
        threeDigits: /^\d{1,3}/,
        fourDigits: /^\d{1,4}/,
        anyDigitsSigned: /^-?\d+/,
        singleDigitSigned: /^-?\d/,
        twoDigitsSigned: /^-?\d{1,2}/,
        threeDigitsSigned: /^-?\d{1,3}/,
        fourDigitsSigned: /^-?\d{1,4}/
    },
    aa = {
        basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
        basic: /^([+-])(\d{2})(\d{2})|Z/,
        basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
        extended: /^([+-])(\d{2}):(\d{2})|Z/,
        extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
    };

function st(e, n) {
    return e && {
        value: n(e.value),
        rest: e.rest
    }
}

function at(e, n) {
    var t = n.match(e);
    return t ? {
        value: parseInt(t[0], 10),
        rest: n.slice(t[0].length)
    } : null
}

function na(e, n) {
    var t = n.match(e);
    if (!t) return null;
    if (t[0] === "Z") return {
        value: 0,
        rest: n.slice(1)
    };
    var a = t[1] === "+" ? 1 : -1,
        r = t[2] ? parseInt(t[2], 10) : 0,
        i = t[3] ? parseInt(t[3], 10) : 0,
        o = t[5] ? parseInt(t[5], 10) : 0;
    return {
        value: a * (r * zo + i * jo + o * s_),
        rest: n.slice(t[0].length)
    }
}

function ou(e) {
    return at(it.anyDigitsSigned, e)
}

function rt(e, n) {
    switch (e) {
        case 1:
            return at(it.singleDigit, n);
        case 2:
            return at(it.twoDigits, n);
        case 3:
            return at(it.threeDigits, n);
        case 4:
            return at(it.fourDigits, n);
        default:
            return at(new RegExp("^\\d{1," + e + "}"), n)
    }
}

function lr(e, n) {
    switch (e) {
        case 1:
            return at(it.singleDigitSigned, n);
        case 2:
            return at(it.twoDigitsSigned, n);
        case 3:
            return at(it.threeDigitsSigned, n);
        case 4:
            return at(it.fourDigitsSigned, n);
        default:
            return at(new RegExp("^-?\\d{1," + e + "}"), n)
    }
}

function Ko(e) {
    switch (e) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0
    }
}

function iu(e, n) {
    var t = n > 0,
        a = t ? n : 1 - n,
        r;
    if (a <= 50) r = e || 100;
    else {
        var i = a + 50,
            o = Math.floor(i / 100) * 100,
            s = e >= i % 100;
        r = e + o - (s ? 100 : 0)
    }
    return t ? r : 1 - r
}

function su(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}
var D0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 130), fe(ye(a), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                var s = function(d) {
                    return {
                        year: d,
                        isTwoDigitYear: i === "yy"
                    }
                };
                switch (i) {
                    case "y":
                        return st(rt(4, r), s);
                    case "yo":
                        return st(o.ordinalNumber(r, {
                            unit: "year"
                        }), s);
                    default:
                        return st(rt(i.length, r), s)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i.isTwoDigitYear || i.year > 0
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                var s = r.getUTCFullYear();
                if (o.isTwoDigitYear) {
                    var l = iu(o.year, s);
                    return r.setUTCFullYear(l, 0, 1), r.setUTCHours(0, 0, 0, 0), r
                }
                var d = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
                return r.setUTCFullYear(d, 0, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    M0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 130), fe(ye(a), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                var s = function(d) {
                    return {
                        year: d,
                        isTwoDigitYear: i === "YY"
                    }
                };
                switch (i) {
                    case "Y":
                        return st(rt(4, r), s);
                    case "Yo":
                        return st(o.ordinalNumber(r, {
                            unit: "year"
                        }), s);
                    default:
                        return st(rt(i.length, r), s)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i.isTwoDigitYear || i.year > 0
            }
        }, {
            key: "set",
            value: function(r, i, o, s) {
                var l = Qo(r, s);
                if (o.isTwoDigitYear) {
                    var d = iu(o.year, l);
                    return r.setUTCFullYear(d, 0, s.firstWeekContainsDate), r.setUTCHours(0, 0, 0, 0), xa(r, s)
                }
                var g = !("era" in i) || i.era === 1 ? o.year : 1 - o.year;
                return r.setUTCFullYear(g, 0, s.firstWeekContainsDate), r.setUTCHours(0, 0, 0, 0), xa(r, s)
            }
        }]), t
    }(Fe),
    O0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 130), fe(ye(a), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i) {
                return lr(i === "R" ? 4 : i.length, r)
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                var s = new Date(0);
                return s.setUTCFullYear(o, 0, 4), s.setUTCHours(0, 0, 0, 0), tn(s)
            }
        }]), t
    }(Fe),
    L0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 130), fe(ye(a), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i) {
                return lr(i === "u" ? 4 : i.length, r)
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCFullYear(o, 0, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    A0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 120), fe(ye(a), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "Q":
                    case "QQ":
                        return rt(i.length, r);
                    case "Qo":
                        return o.ordinalNumber(r, {
                            unit: "quarter"
                        });
                    case "QQQ":
                        return o.quarter(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.quarter(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQQ":
                        return o.quarter(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "QQQQ":
                    default:
                        return o.quarter(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.quarter(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.quarter(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 1 && i <= 4
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMonth((o - 1) * 3, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    B0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 120), fe(ye(a), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "q":
                    case "qq":
                        return rt(i.length, r);
                    case "qo":
                        return o.ordinalNumber(r, {
                            unit: "quarter"
                        });
                    case "qqq":
                        return o.quarter(r, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || o.quarter(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqqq":
                        return o.quarter(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "qqqq":
                    default:
                        return o.quarter(r, {
                            width: "wide",
                            context: "standalone"
                        }) || o.quarter(r, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || o.quarter(r, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 1 && i <= 4
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMonth((o - 1) * 3, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    R0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]), fe(ye(a), "priority", 110), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                var s = function(d) {
                    return d - 1
                };
                switch (i) {
                    case "M":
                        return st(at(it.month, r), s);
                    case "MM":
                        return st(rt(2, r), s);
                    case "Mo":
                        return st(o.ordinalNumber(r, {
                            unit: "month"
                        }), s);
                    case "MMM":
                        return o.month(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.month(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMMM":
                        return o.month(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "MMMM":
                    default:
                        return o.month(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.month(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.month(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 11
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMonth(o, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    $0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 110), fe(ye(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                var s = function(d) {
                    return d - 1
                };
                switch (i) {
                    case "L":
                        return st(at(it.month, r), s);
                    case "LL":
                        return st(rt(2, r), s);
                    case "Lo":
                        return st(o.ordinalNumber(r, {
                            unit: "month"
                        }), s);
                    case "LLL":
                        return o.month(r, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || o.month(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLLL":
                        return o.month(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "LLLL":
                    default:
                        return o.month(r, {
                            width: "wide",
                            context: "standalone"
                        }) || o.month(r, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || o.month(r, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 11
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMonth(o, 1), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe);

function N0(e, n, t) {
    be(2, arguments);
    var a = we(e),
        r = Pe(n),
        i = Zl(a, t) - r;
    return a.setUTCDate(a.getUTCDate() - i * 7), a
}
var x0 = function(e) {
    Ue(t, e);
    var n = Ye(t);

    function t() {
        var a;
        Ne(this, t);
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
        return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 100), fe(ye(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), a
    }
    return xe(t, [{
        key: "parse",
        value: function(r, i, o) {
            switch (i) {
                case "w":
                    return at(it.week, r);
                case "wo":
                    return o.ordinalNumber(r, {
                        unit: "week"
                    });
                default:
                    return rt(i.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, i) {
            return i >= 1 && i <= 53
        }
    }, {
        key: "set",
        value: function(r, i, o, s) {
            return xa(N0(r, o, s), s)
        }
    }]), t
}(Fe);

function H0(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n),
        r = Kl(t) - a;
    return t.setUTCDate(t.getUTCDate() - r * 7), t
}
var V0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 100), fe(ye(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "I":
                        return at(it.week, r);
                    case "Io":
                        return o.ordinalNumber(r, {
                            unit: "week"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 1 && i <= 53
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return tn(H0(r, o))
            }
        }]), t
    }(Fe),
    U0 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    Y0 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    q0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 90), fe(ye(a), "subPriority", 1), fe(ye(a), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "d":
                        return at(it.date, r);
                    case "do":
                        return o.ordinalNumber(r, {
                            unit: "date"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                var o = r.getUTCFullYear(),
                    s = su(o),
                    l = r.getUTCMonth();
                return s ? i >= 1 && i <= Y0[l] : i >= 1 && i <= U0[l]
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCDate(o), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    W0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 90), fe(ye(a), "subpriority", 1), fe(ye(a), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "D":
                    case "DD":
                        return at(it.dayOfYear, r);
                    case "Do":
                        return o.ordinalNumber(r, {
                            unit: "date"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                var o = r.getUTCFullYear(),
                    s = su(o);
                return s ? i >= 1 && i <= 366 : i >= 1 && i <= 365
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMonth(0, o), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe);

function Zo(e, n, t) {
    var a, r, i, o, s, l, d, g;
    be(2, arguments);
    var m = la(),
        p = Pe((a = (r = (i = (o = t ? .weekStartsOn) !== null && o !== void 0 ? o : t == null || (s = t.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && i !== void 0 ? i : m.weekStartsOn) !== null && r !== void 0 ? r : (d = m.locale) === null || d === void 0 || (g = d.options) === null || g === void 0 ? void 0 : g.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(p >= 0 && p <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = we(e),
        b = Pe(n),
        S = f.getUTCDay(),
        C = b % 7,
        w = (C + 7) % 7,
        y = (w < p ? 7 : 0) + b - S;
    return f.setUTCDate(f.getUTCDate() + y), f
}
var F0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 90), fe(ye(a), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "E":
                    case "EE":
                    case "EEE":
                        return o.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEE":
                        return o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEEEE":
                        return o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "EEEE":
                    default:
                        return o.day(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 6
            }
        }, {
            key: "set",
            value: function(r, i, o, s) {
                return r = Zo(r, o, s), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    G0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 90), fe(ye(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o, s) {
                var l = function(g) {
                    var m = Math.floor((g - 1) / 7) * 7;
                    return (g + s.weekStartsOn + 6) % 7 + m
                };
                switch (i) {
                    case "e":
                    case "ee":
                        return st(rt(i.length, r), l);
                    case "eo":
                        return st(o.ordinalNumber(r, {
                            unit: "day"
                        }), l);
                    case "eee":
                        return o.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeee":
                        return o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeeeee":
                        return o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "eeee":
                    default:
                        return o.day(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 6
            }
        }, {
            key: "set",
            value: function(r, i, o, s) {
                return r = Zo(r, o, s), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    j0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 90), fe(ye(a), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o, s) {
                var l = function(g) {
                    var m = Math.floor((g - 1) / 7) * 7;
                    return (g + s.weekStartsOn + 6) % 7 + m
                };
                switch (i) {
                    case "c":
                    case "cc":
                        return st(rt(i.length, r), l);
                    case "co":
                        return st(o.ordinalNumber(r, {
                            unit: "day"
                        }), l);
                    case "ccc":
                        return o.day(r, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || o.day(r, {
                            width: "short",
                            context: "standalone"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "ccccc":
                        return o.day(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccccc":
                        return o.day(r, {
                            width: "short",
                            context: "standalone"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "standalone"
                        });
                    case "cccc":
                    default:
                        return o.day(r, {
                            width: "wide",
                            context: "standalone"
                        }) || o.day(r, {
                            width: "abbreviated",
                            context: "standalone"
                        }) || o.day(r, {
                            width: "short",
                            context: "standalone"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "standalone"
                        })
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 6
            }
        }, {
            key: "set",
            value: function(r, i, o, s) {
                return r = Zo(r, o, s), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe);

function z0(e, n) {
    be(2, arguments);
    var t = Pe(n);
    t % 7 === 0 && (t = t - 7);
    var a = 1,
        r = we(e),
        i = r.getUTCDay(),
        o = t % 7,
        s = (o + 7) % 7,
        l = (s < a ? 7 : 0) + t - i;
    return r.setUTCDate(r.getUTCDate() + l), r
}
var Q0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 90), fe(ye(a), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                var s = function(d) {
                    return d === 0 ? 7 : d
                };
                switch (i) {
                    case "i":
                    case "ii":
                        return rt(i.length, r);
                    case "io":
                        return o.ordinalNumber(r, {
                            unit: "day"
                        });
                    case "iii":
                        return st(o.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                    case "iiiii":
                        return st(o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                    case "iiiiii":
                        return st(o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        }), s);
                    case "iiii":
                    default:
                        return st(o.day(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "short",
                            context: "formatting"
                        }) || o.day(r, {
                            width: "narrow",
                            context: "formatting"
                        }), s)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 1 && i <= 7
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r = z0(r, o), r.setUTCHours(0, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    K0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 80), fe(ye(a), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "a":
                    case "aa":
                    case "aaa":
                        return o.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaaa":
                        return o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "aaaa":
                    default:
                        return o.dayPeriod(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCHours(Ko(o), 0, 0, 0), r
            }
        }]), t
    }(Fe),
    Z0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 80), fe(ye(a), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "b":
                    case "bb":
                    case "bbb":
                        return o.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbbb":
                        return o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "bbbb":
                    default:
                        return o.dayPeriod(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCHours(Ko(o), 0, 0, 0), r
            }
        }]), t
    }(Fe),
    X0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 80), fe(ye(a), "incompatibleTokens", ["a", "b", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "B":
                    case "BB":
                    case "BBB":
                        return o.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBBB":
                        return o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        });
                    case "BBBB":
                    default:
                        return o.dayPeriod(r, {
                            width: "wide",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "abbreviated",
                            context: "formatting"
                        }) || o.dayPeriod(r, {
                            width: "narrow",
                            context: "formatting"
                        })
                }
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCHours(Ko(o), 0, 0, 0), r
            }
        }]), t
    }(Fe),
    J0 = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 70), fe(ye(a), "incompatibleTokens", ["H", "K", "k", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "h":
                        return at(it.hour12h, r);
                    case "ho":
                        return o.ordinalNumber(r, {
                            unit: "hour"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 1 && i <= 12
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                var s = r.getUTCHours() >= 12;
                return s && o < 12 ? r.setUTCHours(o + 12, 0, 0, 0) : !s && o === 12 ? r.setUTCHours(0, 0, 0, 0) : r.setUTCHours(o, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    ew = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 70), fe(ye(a), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "H":
                        return at(it.hour23h, r);
                    case "Ho":
                        return o.ordinalNumber(r, {
                            unit: "hour"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 23
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCHours(o, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    tw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 70), fe(ye(a), "incompatibleTokens", ["h", "H", "k", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "K":
                        return at(it.hour11h, r);
                    case "Ko":
                        return o.ordinalNumber(r, {
                            unit: "hour"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 11
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                var s = r.getUTCHours() >= 12;
                return s && o < 12 ? r.setUTCHours(o + 12, 0, 0, 0) : r.setUTCHours(o, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    aw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 70), fe(ye(a), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "k":
                        return at(it.hour24h, r);
                    case "ko":
                        return o.ordinalNumber(r, {
                            unit: "hour"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 1 && i <= 24
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                var s = o <= 24 ? o % 24 : o;
                return r.setUTCHours(s, 0, 0, 0), r
            }
        }]), t
    }(Fe),
    nw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 60), fe(ye(a), "incompatibleTokens", ["t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "m":
                        return at(it.minute, r);
                    case "mo":
                        return o.ordinalNumber(r, {
                            unit: "minute"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 59
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMinutes(o, 0, 0), r
            }
        }]), t
    }(Fe),
    rw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 50), fe(ye(a), "incompatibleTokens", ["t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i, o) {
                switch (i) {
                    case "s":
                        return at(it.second, r);
                    case "so":
                        return o.ordinalNumber(r, {
                            unit: "second"
                        });
                    default:
                        return rt(i.length, r)
                }
            }
        }, {
            key: "validate",
            value: function(r, i) {
                return i >= 0 && i <= 59
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCSeconds(o, 0), r
            }
        }]), t
    }(Fe),
    ow = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 30), fe(ye(a), "incompatibleTokens", ["t", "T"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i) {
                var o = function(l) {
                    return Math.floor(l * Math.pow(10, -i.length + 3))
                };
                return st(rt(i.length, r), o)
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return r.setUTCMilliseconds(o), r
            }
        }]), t
    }(Fe),
    iw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 10), fe(ye(a), "incompatibleTokens", ["t", "T", "x"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i) {
                switch (i) {
                    case "X":
                        return na(aa.basicOptionalMinutes, r);
                    case "XX":
                        return na(aa.basic, r);
                    case "XXXX":
                        return na(aa.basicOptionalSeconds, r);
                    case "XXXXX":
                        return na(aa.extendedOptionalSeconds, r);
                    case "XXX":
                    default:
                        return na(aa.extended, r)
                }
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return i.timestampIsSet ? r : new Date(r.getTime() - o)
            }
        }]), t
    }(Fe),
    sw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 10), fe(ye(a), "incompatibleTokens", ["t", "T", "X"]), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r, i) {
                switch (i) {
                    case "x":
                        return na(aa.basicOptionalMinutes, r);
                    case "xx":
                        return na(aa.basic, r);
                    case "xxxx":
                        return na(aa.basicOptionalSeconds, r);
                    case "xxxxx":
                        return na(aa.extendedOptionalSeconds, r);
                    case "xxx":
                    default:
                        return na(aa.extended, r)
                }
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return i.timestampIsSet ? r : new Date(r.getTime() - o)
            }
        }]), t
    }(Fe),
    lw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 40), fe(ye(a), "incompatibleTokens", "*"), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r) {
                return ou(r)
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return [new Date(o * 1e3), {
                    timestampIsSet: !0
                }]
            }
        }]), t
    }(Fe),
    uw = function(e) {
        Ue(t, e);
        var n = Ye(t);

        function t() {
            var a;
            Ne(this, t);
            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
            return a = n.call.apply(n, [this].concat(i)), fe(ye(a), "priority", 20), fe(ye(a), "incompatibleTokens", "*"), a
        }
        return xe(t, [{
            key: "parse",
            value: function(r) {
                return ou(r)
            }
        }, {
            key: "set",
            value: function(r, i, o) {
                return [new Date(o), {
                    timestampIsSet: !0
                }]
            }
        }]), t
    }(Fe),
    cw = {
        G: new E0,
        y: new D0,
        Y: new M0,
        R: new O0,
        u: new L0,
        Q: new A0,
        q: new B0,
        M: new R0,
        L: new $0,
        w: new x0,
        I: new V0,
        d: new q0,
        D: new W0,
        E: new F0,
        e: new G0,
        c: new j0,
        i: new Q0,
        a: new K0,
        b: new Z0,
        B: new X0,
        h: new J0,
        H: new ew,
        K: new tw,
        k: new aw,
        m: new nw,
        s: new rw,
        S: new ow,
        X: new iw,
        x: new sw,
        t: new lw,
        T: new uw
    },
    dw = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    mw = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    gw = /^'([^]*?)'?$/,
    pw = /''/g,
    vw = /\S/,
    hw = /[a-zA-Z]/;

function yo(e, n, t, a) {
    var r, i, o, s, l, d, g, m, p, f, b, S, C, w, y, D, P, M;
    be(3, arguments);
    var R = String(e),
        $ = String(n),
        Z = la(),
        G = (r = (i = a ? .locale) !== null && i !== void 0 ? i : Z.locale) !== null && r !== void 0 ? r : tu;
    if (!G.match) throw new RangeError("locale must contain match property");
    var T = Pe((o = (s = (l = (d = a ? .firstWeekContainsDate) !== null && d !== void 0 ? d : a == null || (g = a.locale) === null || g === void 0 || (m = g.options) === null || m === void 0 ? void 0 : m.firstWeekContainsDate) !== null && l !== void 0 ? l : Z.firstWeekContainsDate) !== null && s !== void 0 ? s : (p = Z.locale) === null || p === void 0 || (f = p.options) === null || f === void 0 ? void 0 : f.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
    if (!(T >= 1 && T <= 7)) throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var L = Pe((b = (S = (C = (w = a ? .weekStartsOn) !== null && w !== void 0 ? w : a == null || (y = a.locale) === null || y === void 0 || (D = y.options) === null || D === void 0 ? void 0 : D.weekStartsOn) !== null && C !== void 0 ? C : Z.weekStartsOn) !== null && S !== void 0 ? S : (P = Z.locale) === null || P === void 0 || (M = P.options) === null || M === void 0 ? void 0 : M.weekStartsOn) !== null && b !== void 0 ? b : 0);
    if (!(L >= 0 && L <= 6)) throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if ($ === "") return R === "" ? we(t) : new Date(NaN);
    var H = {
            firstWeekContainsDate: T,
            weekStartsOn: L,
            locale: G
        },
        z = [new I0],
        V = $.match(mw).map(function(ue) {
            var K = ue[0];
            if (K in ho) {
                var ve = ho[K];
                return ve(ue, G.formatLong)
            }
            return ue
        }).join("").match(dw),
        I = [],
        N = As(V),
        U;
    try {
        var Q = function() {
            var K = U.value;
            !(a != null && a.useAdditionalWeekYearTokens) && eu(K) && ir(K, $, e), !(a != null && a.useAdditionalDayOfYearTokens) && Jl(K) && ir(K, $, e);
            var ve = K[0],
                me = cw[ve];
            if (me) {
                var j = me.incompatibleTokens;
                if (Array.isArray(j)) {
                    var ne = I.find(function(ge) {
                        return j.includes(ge.token) || ge.token === ve
                    });
                    if (ne) throw new RangeError("The format string mustn't contain `".concat(ne.fullToken, "` and `").concat(K, "` at the same time"))
                } else if (me.incompatibleTokens === "*" && I.length > 0) throw new RangeError("The format string mustn't contain `".concat(K, "` and any other token at the same time"));
                I.push({
                    token: ve,
                    fullToken: K
                });
                var Ie = me.run(R, K, G.match, H);
                if (!Ie) return {
                    v: new Date(NaN)
                };
                z.push(Ie.setter), R = Ie.rest
            } else {
                if (ve.match(hw)) throw new RangeError("Format string contains an unescaped latin alphabet character `" + ve + "`");
                if (K === "''" ? K = "'" : ve === "'" && (K = fw(K)), R.indexOf(K) === 0) R = R.slice(K.length);
                else return {
                    v: new Date(NaN)
                }
            }
        };
        for (N.s(); !(U = N.n()).done;) {
            var _ = Q();
            if (Ut(_) === "object") return _.v
        }
    } catch (ue) {
        N.e(ue)
    } finally {
        N.f()
    }
    if (R.length > 0 && vw.test(R)) return new Date(NaN);
    var v = z.map(function(ue) {
            return ue.priority
        }).sort(function(ue, K) {
            return K - ue
        }).filter(function(ue, K, ve) {
            return ve.indexOf(ue) === K
        }).map(function(ue) {
            return z.filter(function(K) {
                return K.priority === ue
            }).sort(function(K, ve) {
                return ve.subPriority - K.subPriority
            })
        }).map(function(ue) {
            return ue[0]
        }),
        Y = we(t);
    if (isNaN(Y.getTime())) return new Date(NaN);
    var W = zl(Y, or(Y)),
        ee = {},
        ie = As(v),
        q;
    try {
        for (ie.s(); !(q = ie.n()).done;) {
            var k = q.value;
            if (!k.validate(W, H)) return new Date(NaN);
            var te = k.set(W, ee, H);
            Array.isArray(te) ? (W = te[0], g0(ee, te[1])) : W = te
        }
    } catch (ue) {
        ie.e(ue)
    } finally {
        ie.f()
    }
    return W
}

function fw(e) {
    return e.match(gw)[1].replace(pw, "'")
}

function Rs(e, n) {
    be(2, arguments);
    var t = An(e),
        a = An(n);
    return t.getTime() === a.getTime()
}

function yw(e, n) {
    be(2, arguments);
    var t = Pe(n);
    return ma(e, -t)
}

function bw(e, n) {
    var t;
    be(1, arguments);
    var a = Pe((t = n ? .additionalDigits) !== null && t !== void 0 ? t : 2);
    if (a !== 2 && a !== 1 && a !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]")) return new Date(NaN);
    var r = Sw(e),
        i;
    if (r.date) {
        var o = Cw(r.date, a);
        i = Tw(o.restDateString, o.year)
    }
    if (!i || isNaN(i.getTime())) return new Date(NaN);
    var s = i.getTime(),
        l = 0,
        d;
    if (r.time && (l = Pw(r.time), isNaN(l))) return new Date(NaN);
    if (r.timezone) {
        if (d = Iw(r.timezone), isNaN(d)) return new Date(NaN)
    } else {
        var g = new Date(s + l),
            m = new Date(0);
        return m.setFullYear(g.getUTCFullYear(), g.getUTCMonth(), g.getUTCDate()), m.setHours(g.getUTCHours(), g.getUTCMinutes(), g.getUTCSeconds(), g.getUTCMilliseconds()), m
    }
    return new Date(s + l + d)
}
var zn = {
        dateTimeDelimiter: /[T ]/,
        timeZoneDelimiter: /[Z ]/i,
        timezone: /([Z+-].*)$/
    },
    _w = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
    ww = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
    kw = /^([+-])(\d{2})(?::?(\d{2}))?$/;

function Sw(e) {
    var n = {},
        t = e.split(zn.dateTimeDelimiter),
        a;
    if (t.length > 2) return n;
    if (/:/.test(t[0]) ? a = t[0] : (n.date = t[0], a = t[1], zn.timeZoneDelimiter.test(n.date) && (n.date = e.split(zn.timeZoneDelimiter)[0], a = e.substr(n.date.length, e.length))), a) {
        var r = zn.timezone.exec(a);
        r ? (n.time = a.replace(r[1], ""), n.timezone = r[1]) : n.time = a
    }
    return n
}

function Cw(e, n) {
    var t = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)"),
        a = e.match(t);
    if (!a) return {
        year: NaN,
        restDateString: ""
    };
    var r = a[1] ? parseInt(a[1]) : null,
        i = a[2] ? parseInt(a[2]) : null;
    return {
        year: i === null ? r : i * 100,
        restDateString: e.slice((a[1] || a[2]).length)
    }
}

function Tw(e, n) {
    if (n === null) return new Date(NaN);
    var t = e.match(_w);
    if (!t) return new Date(NaN);
    var a = !!t[4],
        r = bn(t[1]),
        i = bn(t[2]) - 1,
        o = bn(t[3]),
        s = bn(t[4]),
        l = bn(t[5]) - 1;
    if (a) return Lw(n, s, l) ? Ew(n, s, l) : new Date(NaN);
    var d = new Date(0);
    return !Mw(n, i, o) || !Ow(n, r) ? new Date(NaN) : (d.setUTCFullYear(n, i, Math.max(r, o)), d)
}

function bn(e) {
    return e ? parseInt(e) : 1
}

function Pw(e) {
    var n = e.match(ww);
    if (!n) return NaN;
    var t = Hr(n[1]),
        a = Hr(n[2]),
        r = Hr(n[3]);
    return Aw(t, a, r) ? t * zo + a * jo + r * 1e3 : NaN
}

function Hr(e) {
    return e && parseFloat(e.replace(",", ".")) || 0
}

function Iw(e) {
    if (e === "Z") return 0;
    var n = e.match(kw);
    if (!n) return 0;
    var t = n[1] === "+" ? -1 : 1,
        a = parseInt(n[2]),
        r = n[3] && parseInt(n[3]) || 0;
    return Bw(a, r) ? t * (a * zo + r * jo) : NaN
}

function Ew(e, n, t) {
    var a = new Date(0);
    a.setUTCFullYear(e, 0, 4);
    var r = a.getUTCDay() || 7,
        i = (n - 1) * 7 + t + 1 - r;
    return a.setUTCDate(a.getUTCDate() + i), a
}
var Dw = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function lu(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}

function Mw(e, n, t) {
    return n >= 0 && n <= 11 && t >= 1 && t <= (Dw[n] || (lu(e) ? 29 : 28))
}

function Ow(e, n) {
    return n >= 1 && n <= (lu(e) ? 366 : 365)
}

function Lw(e, n, t) {
    return n >= 1 && n <= 53 && t >= 0 && t <= 6
}

function Aw(e, n, t) {
    return e === 24 ? n === 0 && t === 0 : t >= 0 && t < 60 && n >= 0 && n < 60 && e >= 0 && e < 25
}

function Bw(e, n) {
    return n >= 0 && n <= 59
}

function uu(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n),
        r = t.getFullYear(),
        i = t.getDate(),
        o = new Date(0);
    o.setFullYear(r, a, 15), o.setHours(0, 0, 0, 0);
    var s = v0(o);
    return t.setMonth(a, Math.min(i, s)), t
}

function Ze(e, n) {
    if (be(2, arguments), Ut(n) !== "object" || n === null) throw new RangeError("values parameter must be an object");
    var t = we(e);
    return isNaN(t.getTime()) ? new Date(NaN) : (n.year != null && t.setFullYear(n.year), n.month != null && (t = uu(t, n.month)), n.date != null && t.setDate(Pe(n.date)), n.hours != null && t.setHours(Pe(n.hours)), n.minutes != null && t.setMinutes(Pe(n.minutes)), n.seconds != null && t.setSeconds(Pe(n.seconds)), n.milliseconds != null && t.setMilliseconds(Pe(n.milliseconds)), t)
}

function cu(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    return t.setHours(a), t
}

function Xo(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    return t.setMilliseconds(a), t
}

function du(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    return t.setMinutes(a), t
}

function Jo(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    return t.setSeconds(a), t
}

function oa(e, n) {
    be(2, arguments);
    var t = we(e),
        a = Pe(n);
    return isNaN(t.getTime()) ? new Date(NaN) : (t.setFullYear(a), t)
}

function nn(e, n) {
    be(2, arguments);
    var t = Pe(n);
    return jt(e, -t)
}

function Rw(e, n) {
    if (be(2, arguments), !n || Ut(n) !== "object") return new Date(NaN);
    var t = n.years ? Pe(n.years) : 0,
        a = n.months ? Pe(n.months) : 0,
        r = n.weeks ? Pe(n.weeks) : 0,
        i = n.days ? Pe(n.days) : 0,
        o = n.hours ? Pe(n.hours) : 0,
        s = n.minutes ? Pe(n.minutes) : 0,
        l = n.seconds ? Pe(n.seconds) : 0,
        d = nn(e, a + t * 12),
        g = yw(d, i + r * 7),
        m = s + o * 60,
        p = l + m * 60,
        f = p * 1e3,
        b = new Date(g.getTime() - f);
    return b
}

function mu(e, n) {
    be(2, arguments);
    var t = Pe(n);
    return Go(e, -t)
}

function un() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
    }), E("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), E("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), E("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
    })])
}
un.compatConfig = {
    MODE: 3
};

function gu() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
    }), E("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })])
}
gu.compatConfig = {
    MODE: 3
};

function ei() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })])
}
ei.compatConfig = {
    MODE: 3
};

function ti() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
    })])
}
ti.compatConfig = {
    MODE: 3
};

function ai() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
    }), E("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    })])
}
ai.compatConfig = {
    MODE: 3
};

function ni() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })])
}
ni.compatConfig = {
    MODE: 3
};

function ri() {
    return c(), h("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [E("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })])
}
ri.compatConfig = {
    MODE: 3
};

function oi(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var pu = {
    exports: {}
};
(function(e) {
    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports
})(pu);
var $w = pu.exports,
    bo = {
        exports: {}
    };
(function(e, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = t;

    function t(a) {
        if (a === null || a === !0 || a === !1) return NaN;
        var r = Number(a);
        return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r)
    }
    e.exports = n.default
})(bo, bo.exports);
var Nw = bo.exports;
const xw = oi(Nw);
var _o = {
    exports: {}
};
(function(e, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = t;

    function t(a) {
        var r = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds(), a.getMilliseconds()));
        return r.setUTCFullYear(a.getFullYear()), a.getTime() - r.getTime()
    }
    e.exports = n.default
})(_o, _o.exports);
var Hw = _o.exports;
const $s = oi(Hw);

function Vw(e, n) {
    var t = Ww(n);
    return t.formatToParts ? Yw(t, e) : qw(t, e)
}
var Uw = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};

function Yw(e, n) {
    try {
        for (var t = e.formatToParts(n), a = [], r = 0; r < t.length; r++) {
            var i = Uw[t[r].type];
            i >= 0 && (a[i] = parseInt(t[r].value, 10))
        }
        return a
    } catch (o) {
        if (o instanceof RangeError) return [NaN];
        throw o
    }
}

function qw(e, n) {
    var t = e.format(n).replace(/\u200E/g, ""),
        a = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(t);
    return [a[3], a[1], a[2], a[4], a[5], a[6]]
}
var Vr = {};

function Ww(e) {
    if (!Vr[e]) {
        var n = new Intl.DateTimeFormat("en-US", {
                hour12: !1,
                timeZone: "America/New_York",
                year: "numeric",
                month: "numeric",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit"
            }).format(new Date("2014-06-25T04:00:00.123Z")),
            t = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
        Vr[e] = t ? new Intl.DateTimeFormat("en-US", {
            hour12: !1,
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US", {
            hourCycle: "h23",
            timeZone: e,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }
    return Vr[e]
}

function ii(e, n, t, a, r, i, o) {
    var s = new Date(0);
    return s.setUTCFullYear(e, n, t), s.setUTCHours(a, r, i, o), s
}
var Ns = 36e5,
    Fw = 6e4,
    Ur = {
        timezone: /([Z+-].*)$/,
        timezoneZ: /^(Z)$/,
        timezoneHH: /^([+-]\d{2})$/,
        timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
    };

function si(e, n, t) {
    var a, r;
    if (e === "" || (a = Ur.timezoneZ.exec(e), a)) return 0;
    var i;
    if (a = Ur.timezoneHH.exec(e), a) return i = parseInt(a[1], 10), xs(i) ? -(i * Ns) : NaN;
    if (a = Ur.timezoneHHMM.exec(e), a) {
        i = parseInt(a[1], 10);
        var o = parseInt(a[2], 10);
        return xs(i, o) ? (r = Math.abs(i) * Ns + o * Fw, i > 0 ? -r : r) : NaN
    }
    if (zw(e)) {
        n = new Date(n || Date.now());
        var s = t ? n : Gw(n),
            l = wo(s, e),
            d = t ? l : jw(n, l, e);
        return -d
    }
    return NaN
}

function Gw(e) {
    return ii(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds())
}

function wo(e, n) {
    var t = Vw(e, n),
        a = ii(t[0], t[1] - 1, t[2], t[3] % 24, t[4], t[5], 0).getTime(),
        r = e.getTime(),
        i = r % 1e3;
    return r -= i >= 0 ? i : 1e3 + i, a - r
}

function jw(e, n, t) {
    var a = e.getTime(),
        r = a - n,
        i = wo(new Date(r), t);
    if (n === i) return n;
    r -= i - n;
    var o = wo(new Date(r), t);
    return i === o ? i : Math.max(i, o)
}

function xs(e, n) {
    return -23 <= e && e <= 23 && (n == null || 0 <= n && n <= 59)
}
var Hs = {};

function zw(e) {
    if (Hs[e]) return !0;
    try {
        return new Intl.DateTimeFormat(void 0, {
            timeZone: e
        }), Hs[e] = !0, !0
    } catch {
        return !1
    }
}
var vu = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/,
    Yr = 36e5,
    Vs = 6e4,
    Qw = 2,
    Ct = {
        dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
        datePattern: /^([0-9W+-]+)(.*)/,
        plainTime: /:/,
        YY: /^(\d{2})$/,
        YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
        YYYY: /^(\d{4})/,
        YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
        MM: /^-(\d{2})$/,
        DDD: /^-?(\d{3})$/,
        MMDD: /^-?(\d{2})-?(\d{2})$/,
        Www: /^-?W(\d{2})$/,
        WwwD: /^-?W(\d{2})-?(\d{1})$/,
        HH: /^(\d{2}([.,]\d*)?)$/,
        HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
        HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
        timeZone: vu
    };

function ko(e, n) {
    if (arguments.length < 1) throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (e === null) return new Date(NaN);
    var t = n || {},
        a = t.additionalDigits == null ? Qw : xw(t.additionalDigits);
    if (a !== 2 && a !== 1 && a !== 0) throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (e instanceof Date || typeof e == "object" && Object.prototype.toString.call(e) === "[object Date]") return new Date(e.getTime());
    if (typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]") return new Date(e);
    if (!(typeof e == "string" || Object.prototype.toString.call(e) === "[object String]")) return new Date(NaN);
    var r = Kw(e),
        i = Zw(r.date, a),
        o = i.year,
        s = i.restDateString,
        l = Xw(s, o);
    if (isNaN(l)) return new Date(NaN);
    if (l) {
        var d = l.getTime(),
            g = 0,
            m;
        if (r.time && (g = Jw(r.time), isNaN(g))) return new Date(NaN);
        if (r.timeZone || t.timeZone) {
            if (m = si(r.timeZone || t.timeZone, new Date(d + g)), isNaN(m)) return new Date(NaN)
        } else m = $s(new Date(d + g)), m = $s(new Date(d + g + m));
        return new Date(d + g + m)
    } else return new Date(NaN)
}

function Kw(e) {
    var n = {},
        t = Ct.dateTimePattern.exec(e),
        a;
    if (t ? (n.date = t[1], a = t[3]) : (t = Ct.datePattern.exec(e), t ? (n.date = t[1], a = t[2]) : (n.date = null, a = e)), a) {
        var r = Ct.timeZone.exec(a);
        r ? (n.time = a.replace(r[1], ""), n.timeZone = r[1].trim()) : n.time = a
    }
    return n
}

function Zw(e, n) {
    var t = Ct.YYY[n],
        a = Ct.YYYYY[n],
        r;
    if (r = Ct.YYYY.exec(e) || a.exec(e), r) {
        var i = r[1];
        return {
            year: parseInt(i, 10),
            restDateString: e.slice(i.length)
        }
    }
    if (r = Ct.YY.exec(e) || t.exec(e), r) {
        var o = r[1];
        return {
            year: parseInt(o, 10) * 100,
            restDateString: e.slice(o.length)
        }
    }
    return {
        year: null
    }
}

function Xw(e, n) {
    if (n === null) return null;
    var t, a, r, i;
    if (e.length === 0) return a = new Date(0), a.setUTCFullYear(n), a;
    if (t = Ct.MM.exec(e), t) return a = new Date(0), r = parseInt(t[1], 10) - 1, Ys(n, r) ? (a.setUTCFullYear(n, r), a) : new Date(NaN);
    if (t = Ct.DDD.exec(e), t) {
        a = new Date(0);
        var o = parseInt(t[1], 10);
        return a1(n, o) ? (a.setUTCFullYear(n, 0, o), a) : new Date(NaN)
    }
    if (t = Ct.MMDD.exec(e), t) {
        a = new Date(0), r = parseInt(t[1], 10) - 1;
        var s = parseInt(t[2], 10);
        return Ys(n, r, s) ? (a.setUTCFullYear(n, r, s), a) : new Date(NaN)
    }
    if (t = Ct.Www.exec(e), t) return i = parseInt(t[1], 10) - 1, qs(n, i) ? Us(n, i) : new Date(NaN);
    if (t = Ct.WwwD.exec(e), t) {
        i = parseInt(t[1], 10) - 1;
        var l = parseInt(t[2], 10) - 1;
        return qs(n, i, l) ? Us(n, i, l) : new Date(NaN)
    }
    return null
}

function Jw(e) {
    var n, t, a;
    if (n = Ct.HH.exec(e), n) return t = parseFloat(n[1].replace(",", ".")), qr(t) ? t % 24 * Yr : NaN;
    if (n = Ct.HHMM.exec(e), n) return t = parseInt(n[1], 10), a = parseFloat(n[2].replace(",", ".")), qr(t, a) ? t % 24 * Yr + a * Vs : NaN;
    if (n = Ct.HHMMSS.exec(e), n) {
        t = parseInt(n[1], 10), a = parseInt(n[2], 10);
        var r = parseFloat(n[3].replace(",", "."));
        return qr(t, a, r) ? t % 24 * Yr + a * Vs + r * 1e3 : NaN
    }
    return null
}

function Us(e, n, t) {
    n = n || 0, t = t || 0;
    var a = new Date(0);
    a.setUTCFullYear(e, 0, 4);
    var r = a.getUTCDay() || 7,
        i = n * 7 + t + 1 - r;
    return a.setUTCDate(a.getUTCDate() + i), a
}
var e1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    t1 = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function hu(e) {
    return e % 400 === 0 || e % 4 === 0 && e % 100 !== 0
}

function Ys(e, n, t) {
    if (n < 0 || n > 11) return !1;
    if (t != null) {
        if (t < 1) return !1;
        var a = hu(e);
        if (a && t > t1[n] || !a && t > e1[n]) return !1
    }
    return !0
}

function a1(e, n) {
    if (n < 1) return !1;
    var t = hu(e);
    return !(t && n > 366 || !t && n > 365)
}

function qs(e, n, t) {
    return !(n < 0 || n > 52 || t != null && (t < 0 || t > 6))
}

function qr(e, n, t) {
    return !(e != null && (e < 0 || e >= 25) || n != null && (n < 0 || n >= 60) || t != null && (t < 0 || t >= 60))
}
var So = {
        exports: {}
    },
    Co = {
        exports: {}
    };
(function(e, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = t;

    function t(a, r) {
        if (a == null) throw new TypeError("assign requires that input parameter not be null or undefined");
        for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (a[i] = r[i]);
        return a
    }
    e.exports = n.default
})(Co, Co.exports);
var n1 = Co.exports;
(function(e, n) {
    var t = $w.default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.default = r;
    var a = t(n1);

    function r(i) {
        return (0, a.default)({}, i)
    }
    e.exports = n.default
})(So, So.exports);
var r1 = So.exports;
const o1 = oi(r1);

function i1(e, n, t) {
    var a = ko(e, t),
        r = si(n, a, !0),
        i = new Date(a.getTime() - r),
        o = new Date(0);
    return o.setFullYear(i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()), o.setHours(i.getUTCHours(), i.getUTCMinutes(), i.getUTCSeconds(), i.getUTCMilliseconds()), o
}

function s1(e, n, t) {
    if (typeof e == "string" && !e.match(vu)) {
        var a = o1(t);
        return a.timeZone = n, ko(e, a)
    }
    var r = ko(e, t),
        i = ii(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()).getTime(),
        o = si(n, new Date(i));
    return new Date(i + o)
}

function Ws(e) {
    return n => new Intl.DateTimeFormat(e, {
        weekday: "short",
        timeZone: "UTC"
    }).format(new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2)
}

function l1(e) {
    return n => _a(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", {
        locale: e
    })
}
const u1 = (e, n, t) => {
        const a = [1, 2, 3, 4, 5, 6, 7];
        let r;
        if (e !== null) try {
            r = a.map(l1(e))
        } catch {
            r = a.map(Ws(n))
        } else r = a.map(Ws(n));
        const i = r.slice(0, t),
            o = r.slice(t + 1, r.length);
        return [r[t]].concat(...o).concat(...i)
    },
    li = (e, n) => {
        const t = [];
        for (let a = +e[0]; a <= +e[1]; a++) t.push({
            value: +a,
            text: `${a}`
        });
        return n ? t.reverse() : t
    },
    fu = (e, n, t) => {
        const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => {
            const o = i < 10 ? `0${i}` : i;
            return new Date(`2017-${o}-01T00:00:00+00:00`)
        });
        if (e !== null) try {
            const i = t === "long" ? "MMMM" : "MMM";
            return a.map((o, s) => {
                const l = _a(o, i, {
                    locale: e
                });
                return {
                    text: l.charAt(0).toUpperCase() + l.substring(1),
                    value: s
                }
            })
        } catch {}
        const r = new Intl.DateTimeFormat(n, {
            month: t,
            timeZone: "UTC"
        });
        return a.map((i, o) => {
            const s = r.format(i);
            return {
                text: s.charAt(0).toUpperCase() + s.substring(1),
                value: o
            }
        })
    },
    c1 = e => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][e],
    ct = e => {
        const n = B(e);
        return n != null && n.$el ? n ? .$el : n
    },
    d1 = e => Object.assign({
        type: "dot"
    }, e),
    yu = e => Array.isArray(e) ? !!e[0] && !!e[1] : !1,
    ur = {
        prop: e => `"${e}" prop must be enabled!`,
        dateArr: e => `You need to use array as "model-value" binding in order to support "${e}"`
    },
    mt = e => e,
    Fs = e => e === 0 ? e : !e || isNaN(+e) ? null : +e,
    Gs = e => e === null,
    m1 = e => {
        if (e) return [...e.querySelectorAll("input, button, select, textarea, a[href]")][0]
    },
    g1 = e => {
        const n = [],
            t = a => a.filter(r => r);
        for (let a = 0; a < e.length; a += 3) {
            const r = [e[a], e[a + 1], e[a + 2]];
            n.push(t(r))
        }
        return n
    },
    $n = (e, n, t) => {
        const a = t != null,
            r = n != null;
        if (!a && !r) return !1;
        const i = +t,
            o = +n;
        return a && r ? +e > i || +e < o : a ? +e > i : r ? +e < o : !1
    },
    rn = (e, n) => g1(e).map(t => t.map(a => {
        const {
            active: r,
            disabled: i,
            isBetween: o,
            highlighted: s
        } = n(a);
        return { ...a,
            active: r,
            disabled: i,
            className: {
                dp__overlay_cell_active: r,
                dp__overlay_cell: !r,
                dp__overlay_cell_disabled: i,
                dp__overlay_cell_pad: !0,
                dp__overlay_cell_active_disabled: i && r,
                dp__cell_in_between: o,
                "dp--highlighted": s
            }
        }
    })),
    wa = (e, n, t = !1) => {
        e && n.allowStopPropagation && (t && e.stopImmediatePropagation(), e.stopPropagation())
    },
    p1 = () => ["a[href]", "area[href]", "input:not([disabled]):not([type='hidden'])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "[tabindex]:not([tabindex='-1'])", "[data-datepicker-instance]"].join(", ");

function v1(e, n) {
    let t = [...document.querySelectorAll(p1())];
    t = t.filter(r => !e.contains(r) || r.hasAttribute("data-datepicker-instance"));
    const a = t.indexOf(e);
    if (a >= 0 && (n ? a - 1 >= 0 : a + 1 <= t.length)) return t[a + (n ? -1 : 1)]
}
const h1 = (e, n) => {
        let t;
        return function(...a) {
            clearTimeout(t), t = setTimeout(() => {
                e(...a)
            }, n)
        }
    },
    js = (e, n, t, a, r) => {
        const i = yo(e, n.slice(0, e.length), new Date);
        return Sn(i) && Gl(i) ? a || r ? i : Ze(i, {
            hours: +t.hours,
            minutes: +t ? .minutes,
            seconds: +t ? .seconds,
            milliseconds: 0
        }) : null
    },
    f1 = (e, n, t, a, r) => {
        const i = Array.isArray(t) ? t[0] : t;
        if (typeof n == "string") return js(e, n, i, a, r);
        if (Array.isArray(n)) {
            let o = null;
            for (const s of n)
                if (o = js(e, s, i, a, r), o) break;
            return o
        }
        return typeof n == "function" ? n(e) : null
    },
    ae = e => e ? new Date(e) : new Date,
    y1 = (e, n, t) => {
        if (n) {
            const r = (e.getMonth() + 1).toString().padStart(2, "0"),
                i = e.getDate().toString().padStart(2, "0"),
                o = e.getHours().toString().padStart(2, "0"),
                s = e.getMinutes().toString().padStart(2, "0"),
                l = t ? e.getSeconds().toString().padStart(2, "0") : "00";
            return `${e.getFullYear()}-${r}-${i}T${o}:${s}:${l}.000Z`
        }
        const a = Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds());
        return new Date(a).toISOString()
    },
    wt = e => {
        let n = ae(JSON.parse(JSON.stringify(e)));
        return n = cu(n, 0), n = du(n, 0), n = Jo(n, 0), n = Xo(n, 0), n
    },
    ka = (e, n, t, a) => {
        let r = e ? ae(e) : ae();
        return (n || n === 0) && (r = cu(r, +n)), (t || t === 0) && (r = du(r, +t)), (a || a === 0) && (r = Jo(r, +a)), Xo(r, 0)
    },
    vt = (e, n) => !e || !n ? !1 : Rn(wt(e), wt(n)),
    We = (e, n) => !e || !n ? !1 : za(wt(e), wt(n)),
    _t = (e, n) => !e || !n ? !1 : Bn(wt(e), wt(n)),
    vr = (e, n, t) => e != null && e[0] && e != null && e[1] ? _t(t, e[0]) && vt(t, e[1]) : e != null && e[0] && n ? _t(t, e[0]) && vt(t, n) || vt(t, e[0]) && _t(t, n) : !1,
    Ft = e => {
        const n = Ze(new Date(e), {
            date: 1
        });
        return wt(n)
    },
    Wr = (e, n, t) => n && (t || t === 0) ? Object.fromEntries(["hours", "minutes", "seconds"].map(a => a === n ? [a, t] : [a, isNaN(+e[a]) ? void 0 : +e[a]])) : {
        hours: isNaN(+e.hours) ? void 0 : +e.hours,
        minutes: isNaN(+e.minutes) ? void 0 : +e.minutes,
        seconds: isNaN(+e.seconds) ? void 0 : +e.seconds
    },
    Ba = e => ({
        hours: zt(e),
        minutes: ia(e),
        seconds: an(e)
    }),
    bu = (e, n) => {
        if (n) {
            const t = Ae(ae(n));
            if (t > e) return 12;
            if (t === e) return He(ae(n))
        }
    },
    _u = (e, n) => {
        if (n) {
            const t = Ae(ae(n));
            return t < e ? -1 : t === e ? He(ae(n)) : void 0
        }
    },
    on = e => {
        if (e) return Ae(ae(e))
    },
    Qt = (e, n) => n ? i1(e, n) : e,
    wu = (e, n) => n ? s1(e, n) : e,
    b1 = e => e instanceof Date ? e : bw(e),
    ku = (e, n) => {
        const t = _t(e, n) ? n : e,
            a = _t(n, e) ? n : e;
        return jl({
            start: t,
            end: a
        })
    },
    _1 = e => {
        const n = jt(e, 1);
        return {
            month: He(n),
            year: Ae(n)
        }
    },
    Jn = (e, n, t) => {
        const a = Na(Qt(e, n), {
                weekStartsOn: +t
            }),
            r = d_(Qt(e, n), {
                weekStartsOn: +t
            });
        return [a, r]
    },
    Su = (e, n) => {
        const t = {
            hours: zt(ae()),
            minutes: ia(ae()),
            seconds: n ? an(ae()) : 0
        };
        return Object.assign(t, e)
    },
    ya = (e, n, t) => [Ze(ae(e), {
        date: 1
    }), Ze(ae(), {
        month: n,
        year: t,
        date: 1
    })],
    ga = (e, n, t) => {
        let a = e ? ae(e) : ae();
        return (n || n === 0) && (a = uu(a, n)), t && (a = oa(a, t)), a
    },
    Cu = (e, n, t, a, r) => {
        if (!a || r && !n || !r && !t) return !1;
        const i = r ? jt(e, 1) : nn(e, 1),
            o = [He(i), Ae(i)];
        return r ? !k1(...o, n) : !w1(...o, t)
    },
    w1 = (e, n, t) => vt(...ya(t, e, n)) || We(...ya(t, e, n)),
    k1 = (e, n, t) => _t(...ya(t, e, n)) || We(...ya(t, e, n)),
    Tu = (e, n, t, a, r, i, o) => {
        if (typeof n == "function" && !o) return n(e);
        const s = t ? {
            locale: t
        } : void 0;
        return Array.isArray(e) ? `${_a(e[0],i,s)}${r&&!e[1]?"":a}${e[1]?_a(e[1],i,s):""}` : _a(e, i, s)
    },
    Fa = e => {
        if (e) return null;
        throw new Error(ur.prop("partial-range"))
    },
    Qn = (e, n) => {
        if (n) return e();
        throw new Error(ur.prop("range"))
    },
    To = e => Array.isArray(e) ? Sn(e[0]) && (e[1] ? Sn(e[1]) : !0) : e ? Sn(e) : !1,
    S1 = (e, n) => Ze(n ? ? ae(), {
        hours: +e.hours || 0,
        minutes: +e.minutes || 0,
        seconds: +e.seconds || 0
    }),
    Fr = (e, n, t, a) => {
        if (!e) return !0;
        if (a) {
            const r = t === "max" ? Rn(e, n) : Bn(e, n),
                i = {
                    seconds: 0,
                    milliseconds: 0
                };
            return r || za(Ze(e, i), Ze(n, i))
        }
        return t === "max" ? e.getTime() <= n.getTime() : e.getTime() >= n.getTime()
    },
    Gr = (e, n, t) => e ? S1(e, n) : ae(t ? ? n),
    zs = (e, n, t, a, r) => {
        if (Array.isArray(a)) {
            const o = Gr(e, a[0], n),
                s = Gr(e, a[1], n);
            return Fr(a[0], o, t, !!n) && Fr(a[1], s, t, !!n) && r
        }
        const i = Gr(e, a, n);
        return Fr(a, i, t, !!n) && r
    },
    jr = e => Ze(ae(), Ba(e)),
    C1 = (e, n) => Array.isArray(e) ? e.map(t => ae(t)).filter(t => Ae(ae(t)) === n).map(t => He(t)) : [],
    Pu = (e, n, t) => typeof e == "function" ? e({
        month: n,
        year: t
    }) : !!e.months.find(a => a.month === n && a.year === t),
    ui = (e, n) => typeof e == "function" ? e(n) : e.years.includes(n),
    _n = pa({
        menuFocused: !1,
        shiftKeyInMenu: !1
    }),
    Iu = () => {
        const e = t => {
                _n.menuFocused = t
            },
            n = t => {
                _n.shiftKeyInMenu !== t && (_n.shiftKeyInMenu = t)
            };
        return {
            control: u(() => ({
                shiftKeyInMenu: _n.shiftKeyInMenu,
                menuFocused: _n.menuFocused
            })),
            setMenuFocused: e,
            setShiftKey: n
        }
    },
    Ke = pa({
        monthYear: [],
        calendar: [],
        time: [],
        actionRow: [],
        selectionGrid: [],
        timePicker: {
            0: [],
            1: []
        },
        monthPicker: []
    }),
    zr = A(null),
    Kn = A(!1),
    Qr = A(!1),
    Kr = A(!1),
    Zr = A(!1),
    St = A(0),
    pt = A(0),
    Pa = () => {
        const e = u(() => Kn.value ? [...Ke.selectionGrid, Ke.actionRow].filter(m => m.length) : Qr.value ? [...Ke.timePicker[0], ...Ke.timePicker[1], Zr.value ? [] : [zr.value], Ke.actionRow].filter(m => m.length) : Kr.value ? [...Ke.monthPicker, Ke.actionRow] : [Ke.monthYear, ...Ke.calendar, Ke.time, Ke.actionRow].filter(m => m.length)),
            n = m => {
                St.value = m ? St.value + 1 : St.value - 1;
                let p = null;
                e.value[pt.value] && (p = e.value[pt.value][St.value]), p || (St.value = m ? St.value - 1 : St.value + 1)
            },
            t = m => {
                pt.value === 0 && !m || pt.value === e.value.length && m || (pt.value = m ? pt.value + 1 : pt.value - 1, e.value[pt.value] ? e.value[pt.value] && !e.value[pt.value][St.value] && St.value !== 0 && (St.value = e.value[pt.value].length - 1) : pt.value = m ? pt.value - 1 : pt.value + 1)
            },
            a = m => {
                let p = null;
                e.value[pt.value] && (p = e.value[pt.value][St.value]), p ? p.focus({
                    preventScroll: !Kn.value
                }) : St.value = m ? St.value - 1 : St.value + 1
            },
            r = () => {
                n(!0), a(!0)
            },
            i = () => {
                n(!1), a(!1)
            },
            o = () => {
                t(!1), a(!0)
            },
            s = () => {
                t(!0), a(!0)
            },
            l = (m, p) => {
                Ke[p] = m
            },
            d = (m, p) => {
                Ke[p] = m
            },
            g = () => {
                St.value = 0, pt.value = 0
            };
        return {
            buildMatrix: l,
            buildMultiLevelMatrix: d,
            setTimePickerBackRef: m => {
                zr.value = m
            },
            setSelectionGrid: m => {
                Kn.value = m, g(), m || (Ke.selectionGrid = [])
            },
            setTimePicker: (m, p = !1) => {
                Qr.value = m, Zr.value = p, g(), m || (Ke.timePicker[0] = [], Ke.timePicker[1] = [])
            },
            setTimePickerElements: (m, p = 0) => {
                Ke.timePicker[p] = m
            },
            arrowRight: r,
            arrowLeft: i,
            arrowUp: o,
            arrowDown: s,
            clearArrowNav: () => {
                Ke.monthYear = [], Ke.calendar = [], Ke.time = [], Ke.actionRow = [], Ke.selectionGrid = [], Ke.timePicker[0] = [], Ke.timePicker[1] = [], Kn.value = !1, Qr.value = !1, Zr.value = !1, Kr.value = !1, g(), zr.value = null
            },
            setMonthPicker: m => {
                Kr.value = m, g()
            },
            refSets: Ke
        }
    },
    Qs = e => ({
        menuAppearTop: "dp-menu-appear-top",
        menuAppearBottom: "dp-menu-appear-bottom",
        open: "dp-slide-down",
        close: "dp-slide-up",
        next: "calendar-next",
        previous: "calendar-prev",
        vNext: "dp-slide-up",
        vPrevious: "dp-slide-down",
        ...e ? ? {}
    }),
    T1 = e => ({
        toggleOverlay: "Toggle overlay",
        menu: "Datepicker menu",
        input: "Datepicker input",
        calendarWrap: "Calendar wrapper",
        calendarDays: "Calendar days",
        openTimePicker: "Open time picker",
        closeTimePicker: "Close time Picker",
        incrementValue: n => `Increment ${n}`,
        decrementValue: n => `Decrement ${n}`,
        openTpOverlay: n => `Open ${n} overlay`,
        amPmButton: "Switch AM/PM mode",
        openYearsOverlay: "Open years overlay",
        openMonthsOverlay: "Open months overlay",
        nextMonth: "Next month",
        prevMonth: "Previous month",
        nextYear: "Next year",
        prevYear: "Previous year",
        day: () => "",
        ...e ? ? {}
    }),
    Ks = e => e ? typeof e == "boolean" ? e ? 2 : 0 : +e >= 2 ? +e : 2 : 0,
    P1 = e => {
        const n = typeof e == "object" && e,
            t = {
                static: !0,
                solo: !1
            };
        if (!e) return { ...t,
            count: Ks(!1)
        };
        const a = n ? e : {},
            r = n ? a.count ? ? !0 : e,
            i = Ks(r);
        return Object.assign(t, a, {
            count: i
        })
    },
    I1 = (e, n, t) => e || (typeof t == "string" ? t : n),
    E1 = e => typeof e == "boolean" ? e ? Qs({}) : !1 : Qs(e),
    D1 = e => {
        const n = {
            enterSubmit: !0,
            tabSubmit: !0,
            openMenu: !0,
            selectOnFocus: !1,
            rangeSeparator: " - "
        };
        return typeof e == "object" ? { ...n,
            ...e ? ? {},
            enabled : !0
        } : { ...n,
            enabled: e
        }
    },
    M1 = e => ({
        months: [],
        years: [],
        times: {
            hours: [],
            minutes: [],
            seconds: []
        },
        ...e ? ? {}
    }),
    O1 = e => ({
        showSelect: !0,
        showCancel: !0,
        showNow: !1,
        showPreview: !0,
        ...e ? ? {}
    }),
    L1 = e => {
        const n = {
            input: !1
        };
        return typeof e == "object" ? { ...n,
            ...e ? ? {},
            enabled : !0
        } : {
            enabled: e,
            ...n
        }
    },
    A1 = e => ({
        allowStopPropagation: !0,
        closeOnScroll: !1,
        modeHeight: 255,
        allowPreventDefault: !1,
        closeOnClearValue: !0,
        closeOnAutoApply: !0,
        noSwipe: !1,
        keepActionRow: !1,
        onClickOutside: void 0,
        tabOutClosesMenu: !0,
        ...e ? ? {}
    }),
    B1 = (e, n, t) => {
        const a = {
            dates: Array.isArray(e) ? e.map(r => ae(r)) : [],
            years: [],
            months: [],
            quarters: [],
            weeks: [],
            weekdays: n,
            options: {
                highlightDisabled: t
            }
        };
        return typeof e == "function" ? e : { ...a,
            ...e ? ? {}
        }
    },
    R1 = e => typeof e == "object" ? {
        type: e.type,
        hideOnOffsetDates: e.hideOnOffsetDates ? ? !1
    } : {
        type: e,
        hideOnOffsetDates: !1
    },
    lt = e => {
        const n = () => {
                const w = e.enableSeconds ? ":ss" : "";
                return e.is24 ? `HH:mm${w}` : `hh:mm${w} aa`
            },
            t = () => e.format ? e.format : e.monthPicker ? "MM/yyyy" : e.timePicker ? n() : e.weekPicker ? "MM/dd/yyyy" : e.yearPicker ? "yyyy" : e.quarterPicker ? "QQQ/yyyy" : e.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy",
            a = w => Su(w, e.enableSeconds),
            r = () => e.range ? e.startTime && Array.isArray(e.startTime) ? [a(e.startTime[0]), a(e.startTime[1])] : null : e.startTime && !Array.isArray(e.startTime) ? a(e.startTime) : null,
            i = u(() => P1(e.multiCalendars)),
            o = u(() => r()),
            s = u(() => T1(e.ariaLabels)),
            l = u(() => M1(e.filters)),
            d = u(() => E1(e.transitions)),
            g = u(() => O1(e.actionRow)),
            m = u(() => I1(e.previewFormat, e.format, t())),
            p = u(() => D1(e.textInput)),
            f = u(() => L1(e.inline)),
            b = u(() => A1(e.config)),
            S = u(() => B1(e.highlight, e.highlightWeekDays, e.highlightDisabledDays)),
            C = u(() => R1(e.weekNumbers));
        return {
            defaultedTransitions: d,
            defaultedMultiCalendars: i,
            defaultedStartTime: o,
            defaultedAriaLabels: s,
            defaultedFilters: l,
            defaultedActionRow: g,
            defaultedPreviewFormat: m,
            defaultedTextInput: p,
            defaultedInline: f,
            defaultedConfig: b,
            defaultedHighlight: S,
            defaultedWeekNumbers: C,
            getDefaultPattern: t,
            getDefaultStartTime: r
        }
    },
    $1 = (e, n, t) => {
        const a = A(),
            {
                defaultedTextInput: r,
                getDefaultPattern: i
            } = lt(n),
            o = A(""),
            s = er(n, "format");
        Ve(a, () => {
            e("internal-model-change", a.value)
        }), Ve(s, () => {
            V()
        });
        const l = v => wu(v, n.timezone),
            d = v => Qt(v, n.timezone),
            g = (v, Y, W = !1) => Tu(v, n.format, n.formatLocale, r.value.rangeSeparator, n.modelAuto, Y ? ? i(), W),
            m = v => v ? n.modelType ? N(v) : {
                hours: zt(v),
                minutes: ia(v),
                seconds: n.enableSeconds ? an(v) : 0
            } : null,
            p = v => n.modelType ? N(v) : {
                month: He(v),
                year: Ae(v)
            },
            f = v => Array.isArray(v) ? n.multiDates ? v.map(Y => b(Y, oa(ae(), Y))) : Qn(() => [oa(ae(), v[0]), v[1] ? oa(ae(), v[1]) : Fa(n.partialRange)], n.range) : oa(ae(), +v),
            b = (v, Y) => (typeof v == "string" || typeof v == "number") && n.modelType ? I(v) : Y,
            S = v => Array.isArray(v) ? [b(v[0], ka(null, +v[0].hours, +v[0].minutes, v[0].seconds)), b(v[1], ka(null, +v[1].hours, +v[1].minutes, v[1].seconds))] : b(v, ka(null, v.hours, v.minutes, v.seconds)),
            C = v => Array.isArray(v) ? n.multiDates ? v.map(Y => b(Y, ga(null, +Y.month, +Y.year))) : Qn(() => [b(v[0], ga(null, +v[0].month, +v[0].year)), b(v[1], v[1] ? ga(null, +v[1].month, +v[1].year) : Fa(n.partialRange))], n.range) : b(v, ga(null, +v.month, +v.year)),
            w = v => {
                if (Array.isArray(v)) return v.map(Y => I(Y));
                throw new Error(ur.dateArr("multi-dates"))
            },
            y = v => {
                if (Array.isArray(v)) return [ae(v[0]), ae(v[1])];
                throw new Error(ur.dateArr("week-picker"))
            },
            D = v => n.modelAuto ? Array.isArray(v) ? [I(v[0]), I(v[1])] : n.autoApply ? [I(v)] : [I(v), null] : Array.isArray(v) ? Qn(() => [I(v[0]), v[1] ? I(v[1]) : Fa(n.partialRange)], n.range) : I(v),
            P = () => {
                Array.isArray(a.value) && n.range && a.value.length === 1 && a.value.push(Fa(n.partialRange))
            },
            M = () => {
                const v = a.value;
                return [N(v[0]), v[1] ? N(v[1]) : Fa(n.partialRange)]
            },
            R = () => a.value[1] ? M() : N(mt(a.value[0])),
            $ = () => (a.value || []).map(v => N(v)),
            Z = () => (P(), n.modelAuto ? R() : n.multiDates ? $() : Array.isArray(a.value) ? Qn(() => M(), n.range) : N(mt(a.value))),
            G = v => !v || Array.isArray(v) && !v.length ? null : n.timePicker ? S(mt(v)) : n.monthPicker ? C(mt(v)) : n.yearPicker ? f(mt(v)) : n.multiDates ? w(mt(v)) : n.weekPicker ? y(mt(v)) : D(mt(v)),
            T = v => {
                const Y = G(v);
                To(mt(Y)) ? (a.value = mt(Y), V()) : (a.value = null, o.value = "")
            },
            L = () => {
                const v = Y => _a(Y, r.value.format);
                return `${v(a.value[0])} ${r.value.rangeSeparator} ${a.value[1]?v(a.value[1]):""}`
            },
            H = () => t.value && a.value ? Array.isArray(a.value) ? L() : _a(a.value, r.value.format) : g(a.value),
            z = () => a.value ? n.multiDates ? a.value.map(v => g(v)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? H() : g(a.value) : "",
            V = () => {
                !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? o.value = z() : o.value = n.format(a.value)
            },
            I = v => {
                if (n.utc) {
                    const Y = new Date(v);
                    return n.utc === "preserve" ? new Date(Y.getTime() + Y.getTimezoneOffset() * 6e4) : Y
                }
                return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? d(new Date(v)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? yo(v, i(), new Date) : d(yo(v, n.modelType, new Date)) : d(new Date(v))
            },
            N = v => v ? n.utc ? y1(v, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +l(v) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? g(l(v)) : g(l(v), n.modelType, !0) : l(v) : "",
            U = (v, Y = !1) => {
                if (e("update:model-value", v), n.emitTimezone && Y) {
                    const W = Array.isArray(v) ? v.map(ee => Qt(mt(ee)), n.emitTimezone) : Qt(mt(v), n.emitTimezone);
                    e("update:model-timezone-value", W)
                }
            },
            Q = v => Array.isArray(a.value) ? n.multiDates ? a.value.map(Y => v(Y)) : [v(a.value[0]), a.value[1] ? v(a.value[1]) : Fa(n.partialRange)] : v(mt(a.value)),
            _ = v => U(mt(Q(v)));
        return {
            inputValue: o,
            internalModelValue: a,
            checkBeforeEmit: () => a.value ? n.range ? n.partialRange ? a.value.length >= 1 : a.value.length === 2 : !!a.value : !1,
            parseExternalModelValue: T,
            formatInputValue: V,
            emitModelValue: () => (V(), n.monthPicker ? _(p) : n.timePicker ? _(m) : n.yearPicker ? _(Ae) : n.weekPicker ? U(a.value.map(v => N(v)), !0) : U(Z(), !0))
        }
    },
    N1 = (e, n) => {
        const {
            defaultedFilters: t
        } = lt(e), {
            validateMonthYearInRange: a
        } = Ua(e), r = (d, g) => {
            let m = d;
            return t.value.months.includes(He(m)) ? (m = g ? jt(d, 1) : nn(d, 1), r(m, g)) : m
        }, i = (d, g) => {
            let m = d;
            return t.value.years.includes(Ae(m)) ? (m = g ? Go(d, 1) : mu(d, 1), i(m, g)) : m
        }, o = (d, g = !1) => {
            const m = Ze(new Date, {
                month: e.month,
                year: e.year
            });
            let p = d ? jt(m, 1) : nn(m, 1);
            e.disableYearSelect && (p = oa(p, e.year));
            let f = He(p),
                b = Ae(p);
            t.value.months.includes(f) && (p = r(p, d), f = He(p), b = Ae(p)), t.value.years.includes(b) && (p = i(p, d), b = Ae(p)), a(f, b, d, e.preventMinMaxNavigation) && s(f, b, g)
        }, s = (d, g, m) => {
            n("update-month-year", {
                month: d,
                year: g,
                fromNav: m
            })
        }, l = u(() => d => Cu(Ze(new Date, {
            month: e.month,
            year: e.year
        }), e.maxDate, e.minDate, e.preventMinMaxNavigation, d));
        return {
            handleMonthYearChange: o,
            isDisabled: l,
            updateMonthYear: s
        }
    };
var Ga = (e => (e.center = "center", e.left = "left", e.right = "right", e))(Ga || {}),
    Wt = (e => (e.month = "month", e.year = "year", e))(Wt || {}),
    Oa = (e => (e.top = "top", e.bottom = "bottom", e))(Oa || {}),
    Ra = (e => (e.header = "header", e.calendar = "calendar", e.timePicker = "timePicker", e))(Ra || {}),
    ea = (e => (e.month = "month", e.year = "year", e.calendar = "calendar", e.time = "time", e.minutes = "minutes", e.hours = "hours", e.seconds = "seconds", e))(ea || {});
const x1 = ({
        menuRef: e,
        menuRefInner: n,
        inputRef: t,
        pickerWrapperRef: a,
        inline: r,
        emit: i,
        props: o,
        slots: s
    }) => {
        const l = A({}),
            d = A(!1),
            g = A({
                top: "0",
                left: "0"
            }),
            m = A(!1),
            p = er(o, "teleportCenter");
        Ve(p, () => {
            g.value = JSON.parse(JSON.stringify({})), P()
        });
        const f = I => {
                if (o.teleport) {
                    const N = I.getBoundingClientRect();
                    return {
                        left: N.left + window.scrollX,
                        top: N.top + window.scrollY
                    }
                }
                return {
                    top: 0,
                    left: 0
                }
            },
            b = (I, N) => {
                g.value.left = `${I+N-l.value.width}px`
            },
            S = I => {
                g.value.left = `${I}px`
            },
            C = (I, N) => {
                o.position === Ga.left && S(I), o.position === Ga.right && b(I, N), o.position === Ga.center && (g.value.left = `${I+N/2-l.value.width/2}px`)
            },
            w = I => {
                const {
                    width: N,
                    height: U
                } = I.getBoundingClientRect(), {
                    top: Q,
                    left: _
                } = o.altPosition ? o.altPosition(I) : f(I);
                return {
                    top: +Q,
                    left: +_,
                    width: N,
                    height: U
                }
            },
            y = () => {
                g.value.left = "50%", g.value.top = "50%", g.value.transform = "translate(-50%, -50%)", g.value.position = "fixed", delete g.value.opacity
            },
            D = () => {
                const I = ct(t),
                    {
                        top: N,
                        left: U,
                        transform: Q
                    } = o.altPosition(I);
                g.value = {
                    top: `${N}px`,
                    left: `${U}px`,
                    transform: Q ? ? ""
                }
            },
            P = (I = !0) => {
                var N;
                if (!r.value.enabled) {
                    if (p.value) return y();
                    if (o.altPosition !== null) return D();
                    if (I) {
                        const U = o.teleport ? (N = n.value) == null ? void 0 : N.$el : e.value;
                        U && (l.value = U.getBoundingClientRect()), i("recalculate-position")
                    }
                    return L()
                }
            },
            M = ({
                inputEl: I,
                left: N,
                width: U
            }) => {
                window.screen.width > 768 && !d.value && C(N, U), Z(I)
            },
            R = I => {
                const {
                    top: N,
                    left: U,
                    height: Q,
                    width: _
                } = w(I);
                g.value.top = `${Q+N+ +o.offset}px`, m.value = !1, d.value || (g.value.left = `${U+_/2-l.value.width/2}px`), M({
                    inputEl: I,
                    left: U,
                    width: _
                })
            },
            $ = I => {
                const {
                    top: N,
                    left: U,
                    width: Q
                } = w(I);
                g.value.top = `${N-+o.offset-l.value.height}px`, m.value = !0, M({
                    inputEl: I,
                    left: U,
                    width: Q
                })
            },
            Z = I => {
                if (o.autoPosition) {
                    const {
                        left: N,
                        width: U
                    } = w(I), {
                        left: Q,
                        right: _
                    } = l.value;
                    if (!d.value) {
                        if (Math.abs(Q) !== Math.abs(_)) {
                            if (Q <= 0) return d.value = !0, S(N);
                            if (_ >= document.documentElement.clientWidth) return d.value = !0, b(N, U)
                        }
                        return C(N, U)
                    }
                }
            },
            G = () => {
                const I = ct(t);
                if (I) {
                    const {
                        height: N
                    } = l.value, {
                        top: U,
                        height: Q
                    } = I.getBoundingClientRect(), _ = window.innerHeight - U - Q, v = U;
                    return N <= _ ? Oa.bottom : N > _ && N <= v ? Oa.top : _ >= v ? Oa.bottom : Oa.top
                }
                return Oa.bottom
            },
            T = I => G() === Oa.bottom ? R(I) : $(I),
            L = () => {
                const I = ct(t);
                if (I) return o.autoPosition ? T(I) : R(I)
            },
            H = function(I) {
                if (I) {
                    const N = I.scrollHeight > I.clientHeight,
                        U = window.getComputedStyle(I).overflowY.indexOf("hidden") !== -1;
                    return N && !U
                }
                return !0
            },
            z = function(I) {
                return !I || I === document.body || I.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : H(I) ? I : z(I.parentNode)
            },
            V = I => {
                if (I) switch (o.position) {
                    case Ga.left:
                        return {
                            left: 0,
                            transform: "translateX(0)"
                        };
                    case Ga.right:
                        return {
                            left: `${I.width}px`,
                            transform: "translateX(-100%)"
                        };
                    default:
                        return {
                            left: `${I.width/2}px`,
                            transform: "translateX(-50%)"
                        }
                }
                return {}
            };
        return {
            openOnTop: m,
            menuStyle: g,
            xCorrect: d,
            setMenuPosition: P,
            getScrollableParent: z,
            shadowRender: (I, N) => {
                var U, Q, _;
                const v = document.createElement("div"),
                    Y = (U = ct(t)) == null ? void 0 : U.getBoundingClientRect();
                v.setAttribute("id", "dp--temp-container");
                const W = (Q = a.value) != null && Q.clientWidth ? a.value : document.body;
                W.append(v);
                const ee = V(Y),
                    ie = Yu(I, { ...N,
                        shadow: !0,
                        style: {
                            opacity: 0,
                            position: "absolute",
                            ...ee
                        }
                    }, Object.fromEntries(Object.keys(s).filter(q => ["right-sidebar", "left-sidebar"].includes(q)).map(q => [q, s[q]])));
                bi(ie, v), l.value = (_ = ie.el) == null ? void 0 : _.getBoundingClientRect(), bi(null, v), W.removeChild(v)
            }
        }
    },
    fa = [{
        name: "clock-icon",
        use: ["time", "calendar", "shared"]
    }, {
        name: "arrow-left",
        use: ["month-year", "calendar", "shared", "year-mode"]
    }, {
        name: "arrow-right",
        use: ["month-year", "calendar", "shared", "year-mode"]
    }, {
        name: "arrow-up",
        use: ["time", "calendar", "month-year", "shared"]
    }, {
        name: "arrow-down",
        use: ["time", "calendar", "month-year", "shared"]
    }, {
        name: "calendar-icon",
        use: ["month-year", "time", "calendar", "shared", "year-mode"]
    }, {
        name: "day",
        use: ["calendar", "shared"]
    }, {
        name: "month-overlay-value",
        use: ["calendar", "month-year", "shared"]
    }, {
        name: "year-overlay-value",
        use: ["calendar", "month-year", "shared", "year-mode"]
    }, {
        name: "year-overlay",
        use: ["month-year", "shared"]
    }, {
        name: "month-overlay",
        use: ["month-year", "shared"]
    }, {
        name: "month-overlay-header",
        use: ["month-year", "shared"]
    }, {
        name: "year-overlay-header",
        use: ["month-year", "shared"]
    }, {
        name: "hours-overlay-value",
        use: ["calendar", "time", "shared"]
    }, {
        name: "minutes-overlay-value",
        use: ["calendar", "time", "shared"]
    }, {
        name: "seconds-overlay-value",
        use: ["calendar", "time", "shared"]
    }, {
        name: "hours",
        use: ["calendar", "time", "shared"]
    }, {
        name: "minutes",
        use: ["calendar", "time", "shared"]
    }, {
        name: "month",
        use: ["calendar", "month-year", "shared"]
    }, {
        name: "year",
        use: ["calendar", "month-year", "shared", "year-mode"]
    }, {
        name: "action-buttons",
        use: ["action"]
    }, {
        name: "action-preview",
        use: ["action"]
    }, {
        name: "calendar-header",
        use: ["calendar", "shared"]
    }, {
        name: "marker-tooltip",
        use: ["calendar", "shared"]
    }, {
        name: "action-extra",
        use: ["menu"]
    }, {
        name: "time-picker-overlay",
        use: ["calendar", "time", "shared"]
    }, {
        name: "am-pm-button",
        use: ["calendar", "time", "shared"]
    }, {
        name: "left-sidebar",
        use: ["menu"]
    }, {
        name: "right-sidebar",
        use: ["menu"]
    }, {
        name: "month-year",
        use: ["month-year", "shared"]
    }, {
        name: "time-picker",
        use: ["menu", "shared"]
    }, {
        name: "action-row",
        use: ["action"]
    }, {
        name: "marker",
        use: ["calendar", "shared"]
    }, {
        name: "quarter",
        use: ["shared"]
    }],
    H1 = [{
        name: "trigger"
    }, {
        name: "input-icon"
    }, {
        name: "clear-icon"
    }, {
        name: "dp-input"
    }],
    V1 = {
        all: () => fa,
        monthYear: () => fa.filter(e => e.use.includes("month-year")),
        input: () => H1,
        timePicker: () => fa.filter(e => e.use.includes("time")),
        action: () => fa.filter(e => e.use.includes("action")),
        calendar: () => fa.filter(e => e.use.includes("calendar")),
        menu: () => fa.filter(e => e.use.includes("menu")),
        shared: () => fa.filter(e => e.use.includes("shared")),
        yearMode: () => fa.filter(e => e.use.includes("year-mode"))
    },
    Lt = (e, n, t) => {
        const a = [];
        return V1[n]().forEach(r => {
            e[r.name] && a.push(r.name)
        }), t != null && t.length && t.forEach(r => {
            r.slot && a.push(r.slot)
        }), a
    },
    Un = e => {
        const n = u(() => a => e.value ? a ? e.value.open : e.value.close : ""),
            t = u(() => a => e.value ? a ? e.value.menuAppearTop : e.value.menuAppearBottom : "");
        return {
            transitionName: n,
            showTransition: !!e.value,
            menuTransition: t
        }
    },
    Yn = (e, n) => {
        const t = ae(Qt(new Date, e.timezone)),
            a = A([{
                month: He(t),
                year: Ae(t)
            }]),
            r = pa({
                hours: e.range ? [zt(t), zt(t)] : zt(t),
                minutes: e.range ? [ia(t), ia(t)] : ia(t),
                seconds: e.range ? [0, 0] : 0
            }),
            i = u({
                get: () => e.internalModelValue,
                set: l => {
                    !e.readonly && !e.disabled && n("update:internal-model-value", l)
                }
            }),
            o = u(() => l => a.value[l] ? a.value[l].month : 0),
            s = u(() => l => a.value[l] ? a.value[l].year : 0);
        return {
            calendars: a,
            time: r,
            modelValue: i,
            month: o,
            year: s
        }
    },
    U1 = (e, n) => {
        const {
            defaultedMultiCalendars: t,
            defaultedHighlight: a
        } = lt(n), {
            isDisabled: r,
            matchDate: i
        } = Ua(n), o = A(null), s = A(ae(Qt(new Date, n.timezone))), l = _ => {
            !_.current && n.hideOffsetDates || (o.value = _.value)
        }, d = () => {
            o.value = null
        }, g = _ => Array.isArray(e.value) && n.range && e.value[0] && o.value ? _ ? _t(o.value, e.value[0]) : vt(o.value, e.value[0]) : !0, m = (_, v) => {
            const Y = () => e.value ? v ? e.value[0] || null : e.value[1] : null,
                W = e.value && Array.isArray(e.value) ? Y() : null;
            return We(ae(_.value), W)
        }, p = _ => {
            const v = Array.isArray(e.value) ? e.value[0] : null;
            return _ ? !vt(o.value ? ? null, v) : !0
        }, f = (_, v = !0) => (n.range || n.weekPicker) && Array.isArray(e.value) && e.value.length === 2 ? n.hideOffsetDates && !_.current ? !1 : We(ae(_.value), e.value[v ? 0 : 1]) : n.range ? m(_, v) && p(v) || We(_.value, Array.isArray(e.value) ? e.value[0] : null) && g(v) : !1, b = (_, v, Y) => Array.isArray(e.value) && e.value[0] && e.value.length === 1 ? _ ? !1 : Y ? _t(e.value[0], v.value) : vt(e.value[0], v.value) : !1, S = _ => !e.value || n.hideOffsetDates && !_.current ? !1 : n.range ? n.modelAuto && Array.isArray(e.value) ? We(_.value, e.value[0] ? e.value[0] : s.value) : !1 : n.multiDates && Array.isArray(e.value) ? e.value.some(v => We(v, _.value)) : We(_.value, e.value ? e.value : s.value), C = _ => {
            if (n.autoRange || n.weekPicker) {
                if (o.value) {
                    if (n.hideOffsetDates && !_.current) return !1;
                    const v = ma(o.value, +n.autoRange),
                        Y = Jn(ae(o.value), n.timezone, n.weekStart);
                    return n.weekPicker ? We(Y[1], ae(_.value)) : We(v, ae(_.value))
                }
                return !1
            }
            return !1
        }, w = _ => {
            if (n.autoRange || n.weekPicker) {
                if (o.value) {
                    const v = ma(o.value, +n.autoRange);
                    if (n.hideOffsetDates && !_.current) return !1;
                    const Y = Jn(ae(o.value), n.timezone, n.weekStart);
                    return n.weekPicker ? _t(_.value, Y[0]) && vt(_.value, Y[1]) : _t(_.value, o.value) && vt(_.value, v)
                }
                return !1
            }
            return !1
        }, y = _ => {
            if (n.autoRange || n.weekPicker) {
                if (o.value) {
                    if (n.hideOffsetDates && !_.current) return !1;
                    const v = Jn(ae(o.value), n.timezone, n.weekStart);
                    return n.weekPicker ? We(v[0], _.value) : We(o.value, _.value)
                }
                return !1
            }
            return !1
        }, D = _ => vr(e.value, o.value, _.value), P = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1, M = () => n.modelAuto ? yu(n.internalModelValue) : !0, R = _ => {
            if (Array.isArray(e.value) && e.value.length || n.weekPicker) return !1;
            const v = n.range ? !f(_) && !f(_, !1) : !0;
            return !r(_.value) && !S(_) && !(!_.current && n.hideOffsetDates) && v
        }, $ = _ => n.range ? n.modelAuto ? P() && S(_) : !1 : S(_), Z = _ => {
            var v;
            return a.value ? typeof a.value == "function" ? a.value(_.value) : i(_.value, (v = n.arrMapValues) != null && v.highlightedDates ? n.arrMapValues.highlightedDates : a.value.dates) : !1
        }, G = _ => {
            const v = r(_.value);
            return v && (typeof a.value == "function" ? !a.value(_.value, v) : !a.value.options.highlightDisabled)
        }, T = _ => {
            var v;
            return typeof a.value == "function" ? a.value(_.value) : (v = a.value.weekdays) == null ? void 0 : v.includes(_.value.getDay())
        }, L = _ => (n.range || n.weekPicker) && (!(t.value.count > 0) || _.current) && M() && !(!_.current && n.hideOffsetDates) && !S(_) ? D(_) : !1, H = _ => {
            const {
                isRangeStart: v,
                isRangeEnd: Y
            } = I(_), W = n.range ? v || Y : !1;
            return {
                dp__cell_offset: !_.current,
                dp__pointer: !n.disabled && !(!_.current && n.hideOffsetDates) && !r(_.value),
                dp__cell_disabled: r(_.value),
                dp__cell_highlight: !G(_) && (Z(_) || T(_)) && !$(_) && !W && !y(_) && !(L(_) && n.weekPicker) && !Y,
                dp__cell_highlight_active: !G(_) && (Z(_) || T(_)) && $(_),
                dp__today: !n.noToday && We(_.value, s.value) && _.current
            }
        }, z = _ => ({
            dp__active_date: $(_),
            dp__date_hover: R(_)
        }), V = _ => ({ ...N(_),
            ...U(_),
            dp__range_between_week: L(_) && n.weekPicker
        }), I = _ => {
            const v = t.value.count > 0 ? _.current && f(_) && M() : f(_) && M(),
                Y = t.value.count > 0 ? _.current && f(_, !1) && M() : f(_, !1) && M();
            return {
                isRangeStart: v,
                isRangeEnd: Y
            }
        }, N = _ => {
            const {
                isRangeStart: v,
                isRangeEnd: Y
            } = I(_);
            return {
                dp__range_start: v,
                dp__range_end: Y,
                dp__range_between: L(_) && !n.weekPicker,
                dp__date_hover_start: b(R(_), _, !0),
                dp__date_hover_end: b(R(_), _, !1)
            }
        }, U = _ => ({ ...N(_),
            dp__cell_auto_range: w(_),
            dp__cell_auto_range_start: y(_),
            dp__cell_auto_range_end: C(_)
        }), Q = _ => n.range ? n.autoRange ? U(_) : n.modelAuto ? { ...z(_),
            ...N(_)
        } : N(_) : n.weekPicker ? V(_) : z(_);
        return {
            setHoverDate: l,
            clearHoverDate: d,
            getDayClassData: _ => n.hideOffsetDates && !_.current ? {} : { ...H(_),
                ...Q(_),
                [n.dayClass ? n.dayClass(_.value) : ""]: !0,
                [n.calendarCellClassName]: !!n.calendarCellClassName
            }
        }
    },
    Ua = e => {
        const {
            defaultedFilters: n,
            defaultedHighlight: t
        } = lt(e), a = () => {
            if (e.timezone) return e.timezone;
            if (e.utc) return "UTC"
        }, r = T => {
            const L = wt(i(ae(T))).toISOString(),
                [H] = L.split("T");
            return H
        }, i = T => e.utc === "preserve" ? wu(T, a()) : Qt(T, a()), o = T => {
            var L;
            const H = e.maxDate ? _t(T, i(ae(e.maxDate))) : !1,
                z = e.minDate ? vt(T, i(ae(e.minDate))) : !1,
                V = g(i(T), (L = e.arrMapValues) != null && L.disabledDates ? e.arrMapValues.disabledDates : e.disabledDates),
                I = n.value.months.map(v => +v).includes(He(T)),
                N = e.disabledWeekDays.length ? e.disabledWeekDays.some(v => +v === p0(T)) : !1,
                U = p(T),
                Q = Ae(T),
                _ = Q < +e.yearRange[0] || Q > +e.yearRange[1];
            return !(H || z || V || I || _ || N || U)
        }, s = (T, L) => vt(...ya(e.minDate, T, L)) || We(...ya(e.minDate, T, L)), l = (T, L) => _t(...ya(e.maxDate, T, L)) || We(...ya(e.maxDate, T, L)), d = (T, L, H) => {
            let z = !1;
            return e.maxDate && H && l(T, L) && (z = !0), e.minDate && !H && s(T, L) && (z = !0), z
        }, g = (T, L) => T ? L instanceof Map ? !!L.get(r(T)) : Array.isArray(L) ? L.some(H => We(i(ae(H)), T)) : L ? L(ae(JSON.parse(JSON.stringify(T)))) : !1 : !0, m = (T, L, H, z) => {
            let V = !1;
            return z ? e.minDate && e.maxDate ? V = d(T, L, H) : (e.minDate && s(T, L) || e.maxDate && l(T, L)) && (V = !0) : V = !0, V
        }, p = T => {
            var L, H, z, V, I;
            return Array.isArray(e.allowedDates) && !((L = e.allowedDates) != null && L.length) ? !0 : (H = e.arrMapValues) != null && H.allowedDates ? !g(T, (z = e.arrMapValues) == null ? void 0 : z.allowedDates) : (V = e.allowedDates) != null && V.length ? !((I = e.allowedDates) != null && I.some(N => We(wt(N), i(wt(T))))) : !1
        }, f = T => !o(T), b = T => e.noDisabledRange ? !jl({
            start: T[0],
            end: T[1]
        }).some(L => f(L)) : !0, S = (T, L, H = 0) => {
            if (Array.isArray(L) && L[H]) {
                const z = o_(T, L[H]),
                    V = ku(L[H], T),
                    I = V.length === 1 ? 0 : V.filter(U => f(U)).length,
                    N = Math.abs(z) - I;
                if (e.minRange && e.maxRange) return N >= +e.minRange && N <= +e.maxRange;
                if (e.minRange) return N >= +e.minRange;
                if (e.maxRange) return N <= +e.maxRange
            }
            return !0
        }, C = T => new Map(T.map(L => [r(L), !0])), w = T => Array.isArray(T) && T.length > 0, y = () => {
            const T = {
                disabledDates: null,
                allowedDates: null,
                highlightedDates: null
            };
            return w(e.allowedDates) && (T.allowedDates = C(e.allowedDates)), typeof t.value != "function" && w(t.value.dates) && (T.highlightedDates = C(t.value.dates)), w(e.disabledDates) && (T.disabledDates = C(e.disabledDates)), T
        }, D = () => !e.enableTimePicker || e.monthPicker || e.yearPicker || e.ignoreTimeValidation, P = T => Array.isArray(T) ? [T[0] ? jr(T[0]) : null, T[1] ? jr(T[1]) : null] : jr(T), M = (T, L, H) => T.find(z => +z.hours === zt(L) && z.minutes === "*" ? !0 : +z.minutes === ia(L) && +z.hours === zt(L)) && H, R = (T, L, H) => {
            const [z, V] = T, [I, N] = L;
            return !M(z, I, H) && !M(V, N, H) && H
        }, $ = (T, L) => {
            const H = Array.isArray(L) ? L : [L];
            return Array.isArray(e.disabledTimes) ? Array.isArray(e.disabledTimes[0]) ? R(e.disabledTimes, H, T) : !H.some(z => M(e.disabledTimes, z, T)) : T
        }, Z = (T, L) => {
            const H = Array.isArray(L) ? [Ba(L[0]), L[1] ? Ba(L[1]) : void 0] : Ba(L),
                z = !e.disabledTimes(H);
            return T && z
        }, G = (T, L) => e.disabledTimes ? Array.isArray(e.disabledTimes) ? $(L, T) : Z(L, T) : L;
        return {
            isDisabled: f,
            validateDate: o,
            validateMonthYearInRange: m,
            isDateRangeAllowed: b,
            checkMinMaxRange: S,
            matchDate: g,
            mapDatesArrToMap: y,
            isValidTime: T => {
                let L = !0;
                if (!T || D()) return !0;
                const H = !e.minDate && !e.maxDate ? P(T) : T;
                return (e.maxTime || e.maxDate) && (L = zs(e.maxTime, e.maxDate, "max", mt(H), L)), (e.minTime || e.minDate) && (L = zs(e.minTime, e.minDate, "min", mt(H), L)), G(T, L)
            }
        }
    },
    hr = () => {
        const e = u(() => (a, r) => a ? .includes(r)),
            n = u(() => (a, r) => a.count ? a.solo ? !0 : r === 0 : !0),
            t = u(() => (a, r) => a.count ? a.solo ? !0 : r === a.count - 1 : !0);
        return {
            hideNavigationButtons: e,
            showLeftIcon: n,
            showRightIcon: t
        }
    },
    Y1 = (e, n, t) => {
        const a = A(0),
            r = pa({
                [Ra.timePicker]: !e.enableTimePicker || e.timePicker || e.monthPicker,
                [Ra.calendar]: !1,
                [Ra.header]: !1
            }),
            i = u(() => e.monthPicker),
            o = m => {
                var p;
                if ((p = e.flow) != null && p.length) {
                    if (!m && i.value) return g();
                    r[m] = !0, Object.keys(r).filter(f => !r[f]).length || g()
                }
            },
            s = () => {
                var m;
                (m = e.flow) != null && m.length && a.value !== -1 && (a.value += 1, n("flow-step", a.value), g())
            },
            l = () => {
                a.value = -1
            },
            d = (m, p, ...f) => {
                e.flow[a.value] === m && t.value && t.value[p](...f)
            },
            g = () => {
                d(ea.month, "toggleMonthPicker", !0), d(ea.year, "toggleYearPicker", !0), d(ea.calendar, "toggleTimePicker", !1, !0), d(ea.time, "toggleTimePicker", !0, !0);
                const m = e.flow[a.value];
                (m === ea.hours || m === ea.minutes || m === ea.seconds) && d(m, "toggleTimePicker", !0, !0, m)
            };
        return {
            childMount: o,
            updateFlowStep: s,
            resetFlow: l,
            flowStep: a
        }
    },
    fr = {
        multiCalendars: {
            type: [Boolean, Number, String, Object],
            default: void 0
        },
        modelValue: {
            type: [String, Date, Array, Object, Number],
            default: null
        },
        modelType: {
            type: String,
            default: null
        },
        position: {
            type: String,
            default: "center"
        },
        dark: {
            type: Boolean,
            default: !1
        },
        format: {
            type: [String, Function],
            default: () => null
        },
        autoPosition: {
            type: Boolean,
            default: !0
        },
        altPosition: {
            type: Function,
            default: null
        },
        transitions: {
            type: [Boolean, Object],
            default: !0
        },
        formatLocale: {
            type: Object,
            default: null
        },
        utc: {
            type: [Boolean, String],
            default: !1
        },
        ariaLabels: {
            type: Object,
            default: () => ({})
        },
        offset: {
            type: [Number, String],
            default: 10
        },
        hideNavigation: {
            type: Array,
            default: () => []
        },
        timezone: {
            type: String,
            default: null
        },
        emitTimezone: {
            type: String,
            default: null
        },
        vertical: {
            type: Boolean,
            default: !1
        },
        disableMonthYearSelect: {
            type: Boolean,
            default: !1
        },
        disableYearSelect: {
            type: Boolean,
            default: !1
        },
        menuClassName: {
            type: String,
            default: null
        },
        dayClass: {
            type: Function,
            default: null
        },
        yearRange: {
            type: Array,
            default: () => [1900, 2100]
        },
        calendarCellClassName: {
            type: String,
            default: null
        },
        enableTimePicker: {
            type: Boolean,
            default: !0
        },
        autoApply: {
            type: Boolean,
            default: !1
        },
        disabledDates: {
            type: [Array, Function],
            default: () => []
        },
        monthNameFormat: {
            type: String,
            default: "short"
        },
        startDate: {
            type: [Date, String],
            default: null
        },
        startTime: {
            type: [Object, Array],
            default: null
        },
        hideOffsetDates: {
            type: Boolean,
            default: !1
        },
        autoRange: {
            type: [Number, String],
            default: null
        },
        noToday: {
            type: Boolean,
            default: !1
        },
        disabledWeekDays: {
            type: Array,
            default: () => []
        },
        allowedDates: {
            type: Array,
            default: null
        },
        nowButtonLabel: {
            type: String,
            default: "Now"
        },
        markers: {
            type: Array,
            default: () => []
        },
        escClose: {
            type: Boolean,
            default: !0
        },
        spaceConfirm: {
            type: Boolean,
            default: !0
        },
        monthChangeOnArrows: {
            type: Boolean,
            default: !0
        },
        presetDates: {
            type: Array,
            default: () => []
        },
        flow: {
            type: Array,
            default: () => []
        },
        partialFlow: {
            type: Boolean,
            default: !1
        },
        preventMinMaxNavigation: {
            type: Boolean,
            default: !1
        },
        minRange: {
            type: [Number, String],
            default: null
        },
        maxRange: {
            type: [Number, String],
            default: null
        },
        multiDatesLimit: {
            type: [Number, String],
            default: null
        },
        reverseYears: {
            type: Boolean,
            default: !1
        },
        weekPicker: {
            type: Boolean,
            default: !1
        },
        filters: {
            type: Object,
            default: () => ({})
        },
        arrowNavigation: {
            type: Boolean,
            default: !1
        },
        disableTimeRangeValidation: {
            type: Boolean,
            default: !1
        },
        highlight: {
            type: [Array, Function, Object],
            default: null
        },
        highlightWeekDays: {
            type: Array,
            default: null
        },
        highlightDisabledDays: {
            type: Boolean,
            default: !1
        },
        teleport: {
            type: [String, Boolean, Object],
            default: null
        },
        teleportCenter: {
            type: Boolean,
            default: !1
        },
        locale: {
            type: String,
            default: "en-Us"
        },
        weekNumName: {
            type: String,
            default: "W"
        },
        weekStart: {
            type: [Number, String],
            default: 1
        },
        weekNumbers: {
            type: [String, Function, Object],
            default: null
        },
        calendarClassName: {
            type: String,
            default: null
        },
        monthChangeOnScroll: {
            type: [Boolean, String],
            default: !0
        },
        dayNames: {
            type: [Function, Array],
            default: null
        },
        monthPicker: {
            type: Boolean,
            default: !1
        },
        customProps: {
            type: Object,
            default: null
        },
        yearPicker: {
            type: Boolean,
            default: !1
        },
        modelAuto: {
            type: Boolean,
            default: !1
        },
        selectText: {
            type: String,
            default: "Select"
        },
        cancelText: {
            type: String,
            default: "Cancel"
        },
        previewFormat: {
            type: [String, Function],
            default: () => ""
        },
        multiDates: {
            type: Boolean,
            default: !1
        },
        partialRange: {
            type: Boolean,
            default: !0
        },
        ignoreTimeValidation: {
            type: Boolean,
            default: !1
        },
        minDate: {
            type: [Date, String],
            default: null
        },
        maxDate: {
            type: [Date, String],
            default: null
        },
        minTime: {
            type: Object,
            default: null
        },
        maxTime: {
            type: Object,
            default: null
        },
        name: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: ""
        },
        hideInputIcon: {
            type: Boolean,
            default: !1
        },
        clearable: {
            type: Boolean,
            default: !0
        },
        state: {
            type: Boolean,
            default: null
        },
        required: {
            type: Boolean,
            default: !1
        },
        autocomplete: {
            type: String,
            default: "off"
        },
        inputClassName: {
            type: String,
            default: null
        },
        fixedStart: {
            type: Boolean,
            default: !1
        },
        fixedEnd: {
            type: Boolean,
            default: !1
        },
        timePicker: {
            type: Boolean,
            default: !1
        },
        enableSeconds: {
            type: Boolean,
            default: !1
        },
        is24: {
            type: Boolean,
            default: !0
        },
        noHoursOverlay: {
            type: Boolean,
            default: !1
        },
        noMinutesOverlay: {
            type: Boolean,
            default: !1
        },
        noSecondsOverlay: {
            type: Boolean,
            default: !1
        },
        hoursGridIncrement: {
            type: [String, Number],
            default: 1
        },
        minutesGridIncrement: {
            type: [String, Number],
            default: 5
        },
        secondsGridIncrement: {
            type: [String, Number],
            default: 5
        },
        hoursIncrement: {
            type: [Number, String],
            default: 1
        },
        minutesIncrement: {
            type: [Number, String],
            default: 1
        },
        secondsIncrement: {
            type: [Number, String],
            default: 1
        },
        range: {
            type: Boolean,
            default: !1
        },
        uid: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: !1
        },
        readonly: {
            type: Boolean,
            default: !1
        },
        inline: {
            type: [Boolean, Object],
            default: !1
        },
        textInput: {
            type: [Boolean, Object],
            default: !1
        },
        noDisabledRange: {
            type: Boolean,
            default: !1
        },
        sixWeeks: {
            type: [Boolean, String],
            default: !1
        },
        actionRow: {
            type: Object,
            default: () => ({})
        },
        focusStartDate: {
            type: Boolean,
            default: !1
        },
        disabledTimes: {
            type: [Function, Array],
            default: void 0
        },
        showLastInRange: {
            type: Boolean,
            default: !0
        },
        timePickerInline: {
            type: Boolean,
            default: !1
        },
        calendar: {
            type: Function,
            default: null
        },
        config: {
            type: Object,
            default: void 0
        },
        quarterPicker: {
            type: Boolean,
            default: !1
        },
        yearFirst: {
            type: Boolean,
            default: !1
        }
    },
    Zt = { ...fr,
        shadow: {
            type: Boolean,
            default: !1
        },
        flowStep: {
            type: Number,
            default: 0
        },
        internalModelValue: {
            type: [Date, Array],
            default: null
        },
        arrMapValues: {
            type: Object,
            default: () => ({})
        },
        noOverlayFocus: {
            type: Boolean,
            default: !1
        }
    },
    q1 = {
        key: 1,
        class: "dp__input_wrap"
    },
    W1 = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"],
    F1 = {
        key: 2,
        class: "dp__clear_icon"
    },
    G1 = le({
        compatConfig: {
            MODE: 3
        },
        __name: "DatepickerInput",
        props: {
            isMenuOpen: {
                type: Boolean,
                default: !1
            },
            inputValue: {
                type: String,
                default: ""
            },
            ...fr
        },
        emits: ["clear", "open", "update:input-value", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus-prev", "focus", "blur", "real-blur"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    defaultedTextInput: i,
                    defaultedAriaLabels: o,
                    defaultedInline: s,
                    defaultedConfig: l,
                    getDefaultPattern: d,
                    getDefaultStartTime: g
                } = lt(r),
                {
                    checkMinMaxRange: m
                } = Ua(r),
                p = A(),
                f = A(null),
                b = A(!1),
                S = A(!1),
                C = u(() => ({
                    dp__pointer: !r.disabled && !r.readonly && !i.value.enabled,
                    dp__disabled: r.disabled,
                    dp__input_readonly: !i.value.enabled,
                    dp__input: !0,
                    dp__input_icon_pad: !r.hideInputIcon,
                    dp__input_valid: !!r.state,
                    dp__input_invalid: r.state === !1,
                    dp__input_focus: b.value || r.isMenuOpen,
                    dp__input_reg: !i.value.enabled,
                    [r.inputClassName]: !!r.inputClassName
                })),
                w = () => {
                    a("set-input-date", null), r.autoApply && (a("set-empty-date"), p.value = null)
                },
                y = V => {
                    const I = g();
                    return f1(V, i.value.format ? ? d(), I ? ? Su({}, r.enableSeconds), r.inputValue, S.value)
                },
                D = V => {
                    const {
                        rangeSeparator: I
                    } = i.value, [N, U] = V.split(`${I}`);
                    if (N) {
                        const Q = y(N.trim()),
                            _ = U ? y(U.trim()) : null,
                            v = Q && _ ? [Q, _] : [Q];
                        m(_, v, 0) && (p.value = Q ? v : null)
                    }
                },
                P = () => {
                    S.value = !0
                },
                M = V => {
                    if (r.range) D(V);
                    else if (r.multiDates) {
                        const I = V.split(";");
                        p.value = I.map(N => y(N.trim())).filter(N => N)
                    } else p.value = y(V)
                },
                R = V => {
                    var I;
                    const N = typeof V == "string" ? V : (I = V.target) == null ? void 0 : I.value;
                    N !== "" ? (i.value.openMenu && !r.isMenuOpen && a("open"), M(N), a("set-input-date", p.value)) : w(), S.value = !1, a("update:input-value", N)
                },
                $ = V => {
                    i.value.enabled ? (M(V.target.value), i.value.enterSubmit && To(p.value) && r.inputValue !== "" ? (a("set-input-date", p.value, !0), p.value = null) : i.value.enterSubmit && r.inputValue === "" && (p.value = null, a("clear"))) : T(V)
                },
                Z = V => {
                    i.value.enabled && i.value.tabSubmit && M(V.target.value), i.value.tabSubmit && To(p.value) && r.inputValue !== "" ? (a("set-input-date", p.value, !0, !0), p.value = null) : i.value.tabSubmit && r.inputValue === "" && (p.value = null, a("clear", !0))
                },
                G = () => {
                    var V;
                    b.value = !0, a("focus"), i.value.enabled && i.value.selectOnFocus && ((V = f.value) == null || V.select())
                },
                T = V => {
                    V.preventDefault(), wa(V, l.value, !0), i.value.enabled && i.value.openMenu && !s.value.input && !r.isMenuOpen ? a("open") : i.value.enabled || a("toggle")
                },
                L = () => {
                    a("real-blur"), b.value = !1, (!r.isMenuOpen || s.value.enabled && s.value.input) && a("blur"), r.autoApply && i.value.enabled && p.value && !r.isMenuOpen && (a("set-input-date", p.value), a("select-date"), p.value = null)
                },
                H = V => {
                    wa(V, l.value, !0), a("clear")
                },
                z = V => {
                    if (!i.value.enabled) {
                        if (V.code === "Tab") return;
                        V.preventDefault()
                    }
                };
            return n({
                focusInput: () => {
                    var V;
                    (V = f.value) == null || V.focus({
                        preventScroll: !0
                    })
                },
                setParsedDate: V => {
                    p.value = V
                }
            }), (V, I) => {
                var N;
                return c(), h("div", {
                    onClick: T
                }, [V.$slots.trigger && !V.$slots["dp-input"] && !B(s).enabled ? he(V.$slots, "trigger", {
                    key: 0
                }) : O("", !0), !V.$slots.trigger && (!B(s).enabled || B(s).input) ? (c(), h("div", q1, [V.$slots["dp-input"] && !V.$slots.trigger && !B(s).enabled ? he(V.$slots, "dp-input", {
                    key: 0,
                    value: e.inputValue,
                    isMenuOpen: e.isMenuOpen,
                    onInput: R,
                    onEnter: $,
                    onTab: Z,
                    onClear: H,
                    onBlur: L,
                    onKeypress: z,
                    onPaste: P,
                    openMenu: () => V.$emit("open"),
                    closeMenu: () => V.$emit("close"),
                    toggleMenu: () => V.$emit("toggle")
                }) : O("", !0), V.$slots["dp-input"] ? O("", !0) : (c(), h("input", {
                    key: 1,
                    id: V.uid ? `dp-input-${V.uid}` : void 0,
                    ref_key: "inputRef",
                    ref: f,
                    name: V.name,
                    class: J(C.value),
                    inputmode: B(i).enabled ? "text" : "none",
                    placeholder: V.placeholder,
                    disabled: V.disabled,
                    readonly: V.readonly,
                    required: V.required,
                    value: e.inputValue,
                    autocomplete: V.autocomplete,
                    "aria-label": (N = B(o)) == null ? void 0 : N.input,
                    "aria-disabled": V.disabled || void 0,
                    "aria-invalid": V.state === !1 ? !0 : void 0,
                    onInput: R,
                    onKeydown: [Oe($, ["enter"]), Oe(Z, ["tab"]), z],
                    onBlur: L,
                    onFocus: G,
                    onKeypress: z,
                    onPaste: P
                }, null, 42, W1)), E("div", {
                    onClick: I[2] || (I[2] = U => a("toggle"))
                }, [V.$slots["input-icon"] && !V.hideInputIcon ? (c(), h("span", {
                    key: 0,
                    class: "dp__input_icon",
                    onClick: I[0] || (I[0] = U => a("toggle"))
                }, [he(V.$slots, "input-icon")])) : O("", !0), !V.$slots["input-icon"] && !V.hideInputIcon && !V.$slots["dp-input"] ? (c(), F(B(un), {
                    key: 1,
                    class: "dp__input_icon dp__input_icons",
                    onClick: I[1] || (I[1] = U => a("toggle"))
                })) : O("", !0)]), V.$slots["clear-icon"] && e.inputValue && V.clearable && !V.disabled && !V.readonly ? (c(), h("span", F1, [he(V.$slots, "clear-icon", {
                    clear: H
                })])) : O("", !0), V.clearable && !V.$slots["clear-icon"] && e.inputValue && !V.disabled && !V.readonly ? (c(), F(B(gu), {
                    key: 3,
                    class: "dp__clear_icon dp__input_icons",
                    onClick: I[3] || (I[3] = Ee(U => H(U), ["prevent"]))
                })) : O("", !0)])) : O("", !0)])
            }
        }
    }),
    j1 = ["title"],
    z1 = {
        class: "dp__action_buttons"
    },
    Q1 = ["disabled"],
    K1 = le({
        compatConfig: {
            MODE: 3
        },
        __name: "ActionRow",
        props: {
            menuMount: {
                type: Boolean,
                default: !1
            },
            calendarWidth: {
                type: Number,
                default: 0
            },
            ...Zt
        },
        emits: ["close-picker", "select-date", "select-now", "invalid-select"],
        setup(e, {
            emit: n
        }) {
            const t = n,
                a = e,
                {
                    defaultedActionRow: r,
                    defaultedPreviewFormat: i,
                    defaultedMultiCalendars: o,
                    defaultedTextInput: s,
                    defaultedInline: l,
                    getDefaultPattern: d
                } = lt(a),
                {
                    isValidTime: g
                } = Ua(a),
                {
                    buildMatrix: m
                } = Pa(),
                p = A(null),
                f = A(null);
            Le(() => {
                a.arrowNavigation && m([ct(p), ct(f)], "actionRow")
            });
            const b = u(() => a.range && !a.partialRange && a.internalModelValue ? a.internalModelValue.length === 2 : !0),
                S = u(() => !C.value || !w.value || !b.value),
                C = u(() => !a.enableTimePicker || a.ignoreTimeValidation ? !0 : g(a.internalModelValue)),
                w = u(() => a.monthPicker ? a.range && Array.isArray(a.internalModelValue) ? !a.internalModelValue.filter(T => !Z(T)).length : Z(a.internalModelValue) : !0),
                y = () => {
                    const T = i.value;
                    return a.timePicker || a.monthPicker, T(mt(a.internalModelValue))
                },
                D = () => {
                    const T = a.internalModelValue;
                    return o.value.count > 0 ? `${P(T[0])} - ${P(T[1])}` : [P(T[0]), P(T[1])]
                },
                P = T => Tu(T, i.value, a.formatLocale, s.value.rangeSeparator, a.modelAuto, d()),
                M = u(() => !a.internalModelValue || !a.menuMount ? "" : typeof i.value == "string" ? Array.isArray(a.internalModelValue) ? a.internalModelValue.length === 2 && a.internalModelValue[1] ? D() : a.multiDates ? a.internalModelValue.map(T => `${P(T)}`) : a.modelAuto ? `${P(a.internalModelValue[0])}` : `${P(a.internalModelValue[0])} -` : P(a.internalModelValue) : y()),
                R = () => a.multiDates ? "; " : " - ",
                $ = u(() => Array.isArray(M.value) ? M.value.join(R()) : M.value),
                Z = T => {
                    if (!a.monthPicker) return !0;
                    let L = !0;
                    const H = ae(Ft(T));
                    if (a.minDate && a.maxDate) {
                        const z = ae(Ft(a.minDate)),
                            V = ae(Ft(a.maxDate));
                        return _t(H, z) && vt(H, V) || We(H, z) || We(H, V)
                    }
                    if (a.minDate) {
                        const z = ae(Ft(a.minDate));
                        L = _t(H, z) || We(H, z)
                    }
                    if (a.maxDate) {
                        const z = ae(Ft(a.maxDate));
                        L = vt(H, z) || We(H, z)
                    }
                    return L
                },
                G = () => {
                    C.value && w.value && b.value ? t("select-date") : t("invalid-select")
                };
            return (T, L) => (c(), h("div", {
                class: "dp__action_row",
                style: Re(e.calendarWidth ? {
                    width: `${e.calendarWidth}px`
                } : {})
            }, [T.$slots["action-row"] ? he(T.$slots, "action-row", Xe(ze({
                key: 0
            }, {
                internalModelValue: T.internalModelValue,
                disabled: S.value,
                selectDate: () => T.$emit("select-date"),
                closePicker: () => T.$emit("close-picker")
            }))) : (c(), h(pe, {
                key: 1
            }, [B(r).showPreview ? (c(), h("div", {
                key: 0,
                class: "dp__selection_preview",
                title: $.value
            }, [T.$slots["action-preview"] ? he(T.$slots, "action-preview", {
                key: 0,
                value: T.internalModelValue
            }) : O("", !0), T.$slots["action-preview"] ? O("", !0) : (c(), h(pe, {
                key: 1
            }, [Be(X($.value), 1)], 64))], 8, j1)) : O("", !0), E("div", z1, [T.$slots["action-buttons"] ? he(T.$slots, "action-buttons", {
                key: 0,
                value: T.internalModelValue
            }) : O("", !0), T.$slots["action-buttons"] ? O("", !0) : (c(), h(pe, {
                key: 1
            }, [!B(l).enabled && B(r).showCancel ? (c(), h("button", {
                key: 0,
                ref_key: "cancelButtonRef",
                ref: p,
                type: "button",
                class: "dp__action_button dp__action_cancel",
                onClick: L[0] || (L[0] = H => T.$emit("close-picker")),
                onKeydown: [L[1] || (L[1] = Oe(H => T.$emit("close-picker"), ["enter"])), L[2] || (L[2] = Oe(H => T.$emit("close-picker"), ["space"]))]
            }, X(T.cancelText), 545)) : O("", !0), B(r).showNow ? (c(), h("button", {
                key: 1,
                ref_key: "cancelButtonRef",
                ref: p,
                type: "button",
                class: "dp__action_button dp__action_cancel",
                onClick: L[3] || (L[3] = H => T.$emit("select-now")),
                onKeydown: [L[4] || (L[4] = Oe(H => T.$emit("select-now"), ["enter"])), L[5] || (L[5] = Oe(H => T.$emit("select-now"), ["space"]))]
            }, X(T.nowButtonLabel), 545)) : O("", !0), B(r).showSelect ? (c(), h("button", {
                key: 2,
                ref_key: "selectButtonRef",
                ref: f,
                type: "button",
                class: "dp__action_button dp__action_select",
                disabled: S.value,
                onKeydown: [Oe(G, ["enter"]), Oe(G, ["space"])],
                onClick: G
            }, X(T.selectText), 41, Q1)) : O("", !0)], 64))])], 64))], 4))
        }
    }),
    Z1 = ["onKeydown"],
    X1 = {
        class: "dp__selection_grid_header"
    },
    J1 = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"],
    ek = ["aria-label"],
    qn = le({
        __name: "SelectionOverlay",
        props: {
            items: {},
            type: {},
            isLast: {
                type: Boolean
            },
            arrowNavigation: {
                type: Boolean
            },
            skipButtonRef: {
                type: Boolean
            },
            headerRefs: {},
            hideNavigation: {},
            escClose: {
                type: Boolean
            },
            useRelative: {
                type: Boolean
            },
            height: {},
            textInput: {
                type: [Boolean, Object]
            },
            config: {},
            noOverlayFocus: {
                type: Boolean
            },
            focusValue: {}
        },
        emits: ["selected", "toggle", "reset-flow", "hover-value"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const {
                setSelectionGrid: a,
                buildMultiLevelMatrix: r,
                setMonthPicker: i
            } = Pa(), o = t, s = e, {
                defaultedAriaLabels: l,
                defaultedTextInput: d,
                defaultedConfig: g
            } = lt(s), {
                hideNavigationButtons: m
            } = hr(), p = A(!1), f = A(null), b = A(null), S = A([]), C = A(), w = A(null), y = A(0), D = A(null);
            qu(() => {
                f.value = null
            }), Le(() => {
                Dt().then(() => L()), s.noOverlayFocus || M(), P(!0)
            }), Nn(() => P(!1));
            const P = _ => {
                    var v;
                    s.arrowNavigation && ((v = s.headerRefs) != null && v.length ? i(_) : a(_))
                },
                M = () => {
                    var _;
                    const v = ct(b);
                    v && (d.value.enabled || (f.value ? (_ = f.value) == null || _.focus({
                        preventScroll: !0
                    }) : v.focus({
                        preventScroll: !0
                    })), p.value = v.clientHeight < v.scrollHeight)
                },
                R = u(() => ({
                    dp__overlay: !0,
                    "dp--overlay-absolute": !s.useRelative,
                    "dp--overlay-relative": s.useRelative
                })),
                $ = u(() => s.useRelative ? {
                    height: `${s.height}px`,
                    width: "260px"
                } : void 0),
                Z = u(() => ({
                    dp__overlay_col: !0
                })),
                G = u(() => ({
                    dp__btn: !0,
                    dp__button: !0,
                    dp__overlay_action: !0,
                    dp__over_action_scroll: p.value,
                    dp__button_bottom: s.isLast
                })),
                T = u(() => {
                    var _, v;
                    return {
                        dp__overlay_container: !0,
                        dp__container_flex: ((_ = s.items) == null ? void 0 : _.length) <= 6,
                        dp__container_block: ((v = s.items) == null ? void 0 : v.length) > 6
                    }
                });
            Ve(() => s.items, () => L(), {
                deep: !0
            });
            const L = () => {
                    Dt().then(() => {
                        const _ = ct(f),
                            v = ct(b),
                            Y = ct(w),
                            W = ct(D),
                            ee = Y ? Y.getBoundingClientRect().height : 0;
                        v && (v.getBoundingClientRect().height ? y.value = v.getBoundingClientRect().height - ee : y.value = g.value.modeHeight - ee), _ && W && (W.scrollTop = _.offsetTop - W.offsetTop - (y.value / 2 - _.getBoundingClientRect().height) - ee)
                    })
                },
                H = _ => {
                    _.disabled || o("selected", _.value)
                },
                z = () => {
                    o("toggle"), o("reset-flow")
                },
                V = () => {
                    s.escClose && z()
                },
                I = (_, v, Y, W) => {
                    _ && ((v.active || v.value === s.focusValue) && (f.value = _), s.arrowNavigation && (Array.isArray(S.value[Y]) ? S.value[Y][W] = _ : S.value[Y] = [_], N()))
                },
                N = () => {
                    var _, v;
                    const Y = (_ = s.headerRefs) != null && _.length ? [s.headerRefs].concat(S.value) : S.value.concat([s.skipButtonRef ? [] : [w.value]]);
                    r(mt(Y), (v = s.headerRefs) != null && v.length ? "monthPicker" : "selectionGrid")
                },
                U = _ => {
                    s.arrowNavigation || wa(_, g.value, !0)
                },
                Q = _ => {
                    C.value = _, o("hover-value", _)
                };
            return n({
                focusGrid: M
            }), (_, v) => {
                var Y;
                return c(), h("div", {
                    ref_key: "gridWrapRef",
                    ref: b,
                    class: J(R.value),
                    style: Re($.value),
                    role: "dialog",
                    tabindex: "0",
                    onKeydown: [Oe(Ee(V, ["prevent"]), ["esc"]), v[0] || (v[0] = Oe(Ee(W => U(W), ["prevent"]), ["left"])), v[1] || (v[1] = Oe(Ee(W => U(W), ["prevent"]), ["up"])), v[2] || (v[2] = Oe(Ee(W => U(W), ["prevent"]), ["down"])), v[3] || (v[3] = Oe(Ee(W => U(W), ["prevent"]), ["right"]))]
                }, [E("div", {
                    ref_key: "containerRef",
                    ref: D,
                    class: J(T.value),
                    role: "grid",
                    style: Re({
                        height: `${y.value}px`
                    })
                }, [E("div", X1, [he(_.$slots, "header")]), _.$slots.overlay ? he(_.$slots, "overlay", {
                    key: 0
                }) : (c(!0), h(pe, {
                    key: 1
                }, ke(_.items, (W, ee) => (c(), h("div", {
                    key: ee,
                    class: J(["dp__overlay_row", {
                        dp__flex_row: _.items.length >= 3
                    }]),
                    role: "row"
                }, [(c(!0), h(pe, null, ke(W, (ie, q) => (c(), h("div", {
                    key: ie.value,
                    ref_for: !0,
                    ref: k => I(k, ie, ee, q),
                    role: "gridcell",
                    class: J(Z.value),
                    "aria-selected": ie.active,
                    "aria-disabled": ie.disabled || void 0,
                    tabindex: "0",
                    onClick: k => H(ie),
                    onKeydown: [Oe(Ee(k => H(ie), ["prevent"]), ["enter"]), Oe(Ee(k => H(ie), ["prevent"]), ["space"])],
                    onMouseover: k => Q(ie.value)
                }, [E("div", {
                    class: J(ie.className)
                }, [_.$slots.item ? he(_.$slots, "item", {
                    key: 0,
                    item: ie
                }) : O("", !0), _.$slots.item ? O("", !0) : (c(), h(pe, {
                    key: 1
                }, [Be(X(ie.text), 1)], 64))], 2)], 42, J1))), 128))], 2))), 128))], 6), _.$slots["button-icon"] ? ce((c(), h("button", {
                    key: 0,
                    ref_key: "toggleButton",
                    ref: w,
                    type: "button",
                    "aria-label": (Y = B(l)) == null ? void 0 : Y.toggleOverlay,
                    class: J(G.value),
                    tabindex: "0",
                    onClick: z,
                    onKeydown: [Oe(z, ["enter"]), Oe(z, ["tab"])]
                }, [he(_.$slots, "button-icon")], 42, ek)), [
                    [Gt, !B(m)(_.hideNavigation, _.type)]
                ]) : O("", !0)], 46, Z1)
            }
        }
    }),
    yr = le({
        __name: "InstanceWrap",
        props: {
            multiCalendars: {},
            stretch: {
                type: Boolean
            }
        },
        setup(e) {
            const n = e,
                t = u(() => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0]),
                a = u(() => ({
                    dp__instance_calendar: n.multiCalendars > 0
                }));
            return (r, i) => (c(), h("div", {
                class: J({
                    dp__menu_inner: !r.stretch,
                    "dp--menu--inner-stretched": r.stretch,
                    dp__flex_display: r.multiCalendars > 0
                })
            }, [(c(!0), h(pe, null, ke(t.value, (o, s) => (c(), h("div", {
                key: o,
                class: J(a.value)
            }, [he(r.$slots, "default", {
                instance: o,
                index: s
            })], 2))), 128))], 2))
        }
    }),
    tk = ["aria-label", "aria-disabled"],
    Cn = le({
        compatConfig: {
            MODE: 3
        },
        __name: "ArrowBtn",
        props: {
            ariaLabel: {},
            disabled: {
                type: Boolean
            }
        },
        emits: ["activate", "set-ref"],
        setup(e, {
            emit: n
        }) {
            const t = n,
                a = A(null);
            return Le(() => t("set-ref", a)), (r, i) => (c(), h("button", {
                ref_key: "elRef",
                ref: a,
                type: "button",
                class: "dp__btn dp--arrow-btn-nav",
                tabindex: "0",
                "aria-label": r.ariaLabel,
                "aria-disabled": r.disabled || void 0,
                onClick: i[0] || (i[0] = o => r.$emit("activate")),
                onKeydown: [i[1] || (i[1] = Oe(Ee(o => r.$emit("activate"), ["prevent"]), ["enter"])), i[2] || (i[2] = Oe(Ee(o => r.$emit("activate"), ["prevent"]), ["space"]))]
            }, [E("span", {
                class: J(["dp__inner_nav", {
                    dp__inner_nav_disabled: r.disabled
                }])
            }, [he(r.$slots, "default")], 2)], 40, tk))
        }
    }),
    ak = {
        class: "dp--year-mode-picker"
    },
    nk = ["aria-label"],
    Eu = le({
        __name: "YearModePicker",
        props: { ...Zt,
            showYearPicker: {
                type: Boolean,
                default: !1
            },
            items: {
                type: Array,
                default: () => []
            },
            instance: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            isDisabled: {
                type: Function,
                default: () => !1
            }
        },
        emits: ["toggle-year-picker", "year-select", "handle-year"],
        setup(e, {
            emit: n
        }) {
            const t = n,
                a = e,
                {
                    showRightIcon: r,
                    showLeftIcon: i
                } = hr(),
                {
                    defaultedConfig: o,
                    defaultedMultiCalendars: s,
                    defaultedAriaLabels: l,
                    defaultedTransitions: d
                } = lt(a),
                {
                    showTransition: g,
                    transitionName: m
                } = Un(d),
                p = (S = !1, C) => {
                    t("toggle-year-picker", {
                        flow: S,
                        show: C
                    })
                },
                f = S => {
                    t("year-select", S)
                },
                b = (S = !1) => {
                    t("handle-year", S)
                };
            return (S, C) => {
                var w, y, D;
                return c(), h("div", ak, [B(i)(B(s), e.instance) ? (c(), F(Cn, {
                    key: 0,
                    ref: "mpPrevIconRef",
                    "aria-label": (w = B(l)) == null ? void 0 : w.prevYear,
                    disabled: e.isDisabled(!1),
                    onActivate: C[0] || (C[0] = P => b(!1))
                }, {
                    default: _e(() => [S.$slots["arrow-left"] ? he(S.$slots, "arrow-left", {
                        key: 0
                    }) : O("", !0), S.$slots["arrow-left"] ? O("", !0) : (c(), F(B(ei), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["aria-label", "disabled"])) : O("", !0), E("button", {
                    ref: "mpYearButtonRef",
                    class: "dp__btn dp--year-select",
                    type: "button",
                    "aria-label": (y = B(l)) == null ? void 0 : y.openYearsOverlay,
                    onClick: C[1] || (C[1] = () => p(!1)),
                    onKeydown: C[2] || (C[2] = Oe(() => p(!1), ["enter"]))
                }, [S.$slots.year ? he(S.$slots, "year", {
                    key: 0,
                    year: e.year
                }) : O("", !0), S.$slots.year ? O("", !0) : (c(), h(pe, {
                    key: 1
                }, [Be(X(e.year), 1)], 64))], 40, nk), B(r)(B(s), e.instance) ? (c(), F(Cn, {
                    key: 1,
                    ref: "mpNextIconRef",
                    "aria-label": (D = B(l)) == null ? void 0 : D.nextYear,
                    disabled: e.isDisabled(!0),
                    onActivate: C[3] || (C[3] = P => b(!0))
                }, {
                    default: _e(() => [S.$slots["arrow-right"] ? he(S.$slots, "arrow-right", {
                        key: 0
                    }) : O("", !0), S.$slots["arrow-right"] ? O("", !0) : (c(), F(B(ti), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["aria-label", "disabled"])) : O("", !0), De(Mt, {
                    name: B(m)(e.showYearPicker),
                    css: B(g)
                }, {
                    default: _e(() => [e.showYearPicker ? (c(), F(qn, {
                        key: 0,
                        items: e.items,
                        "text-input": S.textInput,
                        "esc-close": S.escClose,
                        config: S.config,
                        "is-last": S.autoApply && !B(o).keepActionRow,
                        "hide-navigation": S.hideNavigation,
                        type: "year",
                        onToggle: p,
                        onSelected: C[4] || (C[4] = P => f(P))
                    }, Tt({
                        "button-icon": _e(() => [S.$slots["calendar-icon"] ? he(S.$slots, "calendar-icon", {
                            key: 0
                        }) : O("", !0), S.$slots["calendar-icon"] ? O("", !0) : (c(), F(B(un), {
                            key: 1
                        }))]),
                        _: 2
                    }, [S.$slots["year-overlay-value"] ? {
                        name: "item",
                        fn: _e(({
                            item: P
                        }) => [he(S.$slots, "year-overlay-value", {
                            text: P.text,
                            value: P.value
                        })]),
                        key: "0"
                    } : void 0]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation"])) : O("", !0)]),
                    _: 3
                }, 8, ["name", "css"])])
            }
        }
    }),
    ci = (e, n, t) => {
        if (n.value && Array.isArray(n.value))
            if (n.value.some(a => We(e, a))) {
                const a = n.value.filter(r => !We(r, e));
                n.value = a.length ? a : null
            } else(t && +t > n.value.length || !t) && n.value.push(e);
        else n.value = [e]
    },
    di = (e, n, t) => {
        let a = e.value ? e.value.slice() : [];
        return a.length === 2 && a[1] !== null && (a = []), a.length ? vt(n, a[0]) ? (a.unshift(n), t("range-start", a[0]), t("range-start", a[1])) : (a[1] = n, t("range-end", n)) : (a = [n], t("range-start", n)), e.value = a, a
    },
    br = (e, n, t, a) => {
        e[0] && e[1] && t && n("auto-apply"), e[0] && !e[1] && a && t && n("auto-apply")
    },
    Du = e => {
        Array.isArray(e.value) && e.value.length <= 2 && e.range ? e.modelValue.value = e.value.map(n => Qt(ae(n), e.timezone)) : Array.isArray(e.value) || (e.modelValue.value = Qt(ae(e.value), e.timezone))
    },
    Mu = ({
        multiCalendars: e,
        highlight: n,
        calendars: t,
        modelValue: a,
        props: r,
        year: i,
        month: o,
        emit: s
    }) => {
        const l = u(() => li(r.yearRange, r.reverseYears)),
            d = A([!1]),
            g = u(() => (P, M) => {
                const R = Ze(Ft(new Date), {
                    month: o.value(P),
                    year: i.value(P)
                });
                return Cu(R, r.maxDate, r.minDate, r.preventMinMaxNavigation, M)
            }),
            m = () => {
                for (let P = 0; P < e.value.count; P++)
                    if (P === 0) t.value[P] = t.value[0];
                    else {
                        const M = Ze(ae(), t.value[P - 1]);
                        t.value[P] = {
                            month: He(M),
                            year: Ae(Go(M, 1))
                        }
                    }
            },
            p = P => {
                if (!P) return m();
                const M = Ze(ae(), t.value[P]);
                return t.value[0].year = Ae(mu(M, e.value.count - 1)), m()
            },
            f = P => r.focusStartDate ? P[0] : P[1] ? P[1] : P[0],
            b = () => {
                if (a.value) {
                    const P = Array.isArray(a.value) ? f(a.value) : a.value;
                    t.value[0] = {
                        month: He(P),
                        year: Ae(P)
                    }
                }
            };
        Le(() => {
            b(), e.value.count && m()
        });
        const S = (P, M) => {
                t.value[M].year = P, e.value.count && !e.value.solo && p(M)
            },
            C = u(() => P => rn(l.value, M => {
                const R = i.value(P) === M.value,
                    $ = $n(M.value, on(r.minDate), on(r.maxDate)),
                    Z = ui(n.value, M.value);
                return {
                    active: R,
                    disabled: $,
                    highlighted: Z
                }
            })),
            w = (P, M) => {
                S(P, M), D(M)
            },
            y = (P, M = !1) => {
                if (!g.value(P, M)) {
                    const R = M ? i.value(P) + 1 : i.value(P) - 1;
                    S(R, P)
                }
            },
            D = (P, M = !1, R) => {
                M || s("reset-flow"), R !== void 0 ? d.value[P] = R : d.value[P] = !d.value[P], d.value || s("overlay-closed")
            };
        return {
            isDisabled: g,
            groupedYears: C,
            showYearPicker: d,
            selectYear: S,
            toggleYearPicker: D,
            handleYearSelect: w,
            handleYear: y
        }
    },
    rk = (e, n) => {
        const {
            defaultedMultiCalendars: t,
            defaultedAriaLabels: a,
            defaultedTransitions: r,
            defaultedConfig: i,
            defaultedHighlight: o
        } = lt(e), {
            modelValue: s,
            year: l,
            month: d,
            calendars: g
        } = Yn(e, n), m = u(() => fu(e.formatLocale, e.locale, e.monthNameFormat)), p = A(null), {
            selectYear: f,
            groupedYears: b,
            showYearPicker: S,
            toggleYearPicker: C,
            handleYearSelect: w,
            handleYear: y,
            isDisabled: D
        } = Mu({
            modelValue: s,
            multiCalendars: t,
            highlight: o,
            calendars: g,
            year: l,
            month: d,
            props: e,
            emit: n
        });
        Le(() => {
            e.startDate && (s.value && e.focusStartDate || !s.value) && f(Ae(ae(e.startDate)), 0)
        });
        const P = U => U ? {
                month: He(U),
                year: Ae(U)
            } : {
                month: null,
                year: null
            },
            M = () => s.value ? Array.isArray(s.value) ? s.value.map(U => P(U)) : P(s.value) : P(),
            R = (U, Q) => {
                const _ = g.value[U],
                    v = M();
                return Array.isArray(v) ? v.some(Y => Y.year === _ ? .year && Y.month === Q) : _ ? .year === v.year && Q === v.month
            },
            $ = (U, Q, _) => {
                var v, Y;
                const W = M();
                return Array.isArray(W) ? l.value(Q) === ((v = W[_]) == null ? void 0 : v.year) && U === ((Y = W[_]) == null ? void 0 : Y.month) : !1
            },
            Z = (U, Q) => {
                if (e.range) {
                    const _ = M();
                    if (Array.isArray(s.value) && Array.isArray(_)) {
                        const v = $(U, Q, 0) || $(U, Q, 1),
                            Y = ga(Ft(ae()), U, l.value(Q));
                        return vr(s.value, p.value, Y) && !v
                    }
                    return !1
                }
                return !1
            },
            G = u(() => U => rn(m.value, Q => {
                const _ = R(U, Q.value),
                    v = $n(Q.value, bu(l.value(U), e.minDate), _u(l.value(U), e.maxDate)) || C1(e.disabledDates, l.value(U)).includes(Q.value),
                    Y = Z(Q.value, U),
                    W = Pu(o.value, Q.value, l.value(U));
                return {
                    active: _,
                    disabled: v,
                    isBetween: Y,
                    highlighted: W
                }
            })),
            T = (U, Q) => ga(Ft(ae()), U, l.value(Q)),
            L = (U, Q) => {
                const _ = s.value ? s.value : Ft(new Date);
                s.value = ga(_, U, l.value(Q)), n("auto-apply")
            },
            H = (U, Q) => {
                const _ = di(s, T(U, Q), n);
                br(_, n, e.autoApply, e.modelAuto)
            },
            z = (U, Q) => {
                ci(T(U, Q), s, e.multiDatesLimit), n("auto-apply", !0)
            },
            V = (U, Q) => (g.value[Q].month = U, N(Q, g.value[Q].year, U), e.multiDates ? z(U, Q) : e.range ? H(U, Q) : L(U, Q)),
            I = (U, Q) => {
                f(U, Q), N(Q, U, null)
            },
            N = (U, Q, _) => {
                let v = _;
                if (!v && v !== 0) {
                    const Y = M();
                    v = Array.isArray(Y) ? Y[U].month : Y.month
                }
                n("update-month-year", {
                    instance: U,
                    year: Q,
                    month: v
                })
            };
        return {
            groupedMonths: G,
            groupedYears: b,
            year: l,
            isDisabled: D,
            defaultedMultiCalendars: t,
            defaultedAriaLabels: a,
            defaultedTransitions: r,
            defaultedConfig: i,
            showYearPicker: S,
            modelValue: s,
            presetDate: (U, Q) => {
                Du({
                    value: U,
                    modelValue: s,
                    range: e.range,
                    timezone: Q ? void 0 : e.timezone
                }), n("auto-apply")
            },
            setHoverDate: (U, Q) => {
                p.value = T(U, Q)
            },
            selectMonth: V,
            selectYear: I,
            toggleYearPicker: C,
            handleYearSelect: w,
            handleYear: y,
            getModelMonthYear: M
        }
    },
    ok = le({
        compatConfig: {
            MODE: 3
        },
        __name: "MonthPicker",
        props: { ...Zt
        },
        emits: ["update:internal-model-value", "overlay-closed", "reset-flow", "range-start", "range-end", "auto-apply", "update-month-year", "mount"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = Ha(),
                i = Lt(r, "yearMode"),
                o = e;
            Le(() => {
                o.shadow || a("mount", null)
            });
            const {
                groupedMonths: s,
                groupedYears: l,
                year: d,
                isDisabled: g,
                defaultedMultiCalendars: m,
                defaultedConfig: p,
                showYearPicker: f,
                modelValue: b,
                presetDate: S,
                setHoverDate: C,
                selectMonth: w,
                selectYear: y,
                toggleYearPicker: D,
                handleYearSelect: P,
                handleYear: M,
                getModelMonthYear: R
            } = rk(o, a);
            return n({
                getSidebarProps: () => ({
                    modelValue: b,
                    year: d,
                    getModelMonthYear: R,
                    selectMonth: w,
                    selectYear: y,
                    handleYear: M
                }),
                presetDate: S,
                toggleYearPicker: $ => D(0, $)
            }), ($, Z) => (c(), F(yr, {
                "multi-calendars": B(m).count,
                stretch: ""
            }, {
                default: _e(({
                    instance: G
                }) => [$.$slots["month-year"] ? he($.$slots, "month-year", Xe(ze({
                    key: 0
                }, {
                    year: B(d),
                    months: B(s)(G),
                    years: B(l)(G),
                    selectMonth: B(w),
                    selectYear: B(y),
                    instance: G
                }))) : (c(), F(qn, {
                    key: 1,
                    items: B(s)(G),
                    "arrow-navigation": $.arrowNavigation,
                    "is-last": $.autoApply && !B(p).keepActionRow,
                    "esc-close": $.escClose,
                    height: B(p).modeHeight,
                    config: $.config,
                    "no-overlay-focus": !!($.noOverlayFocus || $.textInput),
                    "use-relative": "",
                    type: "month",
                    onSelected: T => B(w)(T, G),
                    onHoverValue: T => B(C)(T, G)
                }, {
                    header: _e(() => [De(Eu, ze($.$props, {
                        items: B(l)(G),
                        instance: G,
                        "show-year-picker": B(f)[G],
                        year: B(d)(G),
                        "is-disabled": T => B(g)(G, T),
                        onHandleYear: T => B(M)(G, T),
                        onYearSelect: T => B(P)(T, G),
                        onToggleYearPicker: T => B(D)(G, T ? .flow, T ? .show)
                    }), Tt({
                        _: 2
                    }, [ke(B(i), (T, L) => ({
                        name: T,
                        fn: _e(H => [he($.$slots, T, Xe(bt(H)))])
                    }))]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]),
                    _: 2
                }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))]),
                _: 3
            }, 8, ["multi-calendars"]))
        }
    }),
    ik = (e, n) => {
        const {
            modelValue: t
        } = Yn(e, n), a = A(null), {
            defaultedHighlight: r,
            defaultedFilters: i
        } = lt(e), o = A();
        Le(() => {
            e.startDate && (t.value && e.focusStartDate || !t.value) && (o.value = Ae(ae(e.startDate)))
        });
        const s = m => Array.isArray(t.value) ? t.value.some(p => Ae(p) === m) : t.value ? Ae(t.value) === m : !1,
            l = m => e.range && Array.isArray(t.value) ? vr(t.value, a.value, g(m)) : !1,
            d = u(() => rn(li(e.yearRange, e.reverseYears), m => {
                const p = s(m.value),
                    f = $n(m.value, on(e.minDate), on(e.maxDate)) || i.value.years.includes(m.value),
                    b = l(m.value) && !p,
                    S = ui(r.value, m.value);
                return {
                    active: p,
                    disabled: f,
                    isBetween: b,
                    highlighted: S
                }
            })),
            g = m => oa(Ft(new Date), m);
        return {
            groupedYears: d,
            modelValue: t,
            focusYear: o,
            setHoverValue: m => {
                a.value = oa(Ft(new Date), m)
            },
            selectYear: m => {
                var p;
                if (e.multiDates) return t.value ? Array.isArray(t.value) && (((p = t.value) == null ? void 0 : p.map(f => Ae(f))).includes(m) ? t.value = t.value.filter(f => Ae(f) !== m) : t.value.push(oa(wt(ae()), m))) : t.value = [oa(wt(ae()), m)], n("auto-apply", !0);
                if (e.range) {
                    const f = di(t, g(m), n);
                    return br(f, n, e.autoApply, e.modelAuto)
                }
                t.value = g(m), n("auto-apply")
            }
        }
    },
    sk = le({
        compatConfig: {
            MODE: 3
        },
        __name: "YearPicker",
        props: { ...Zt
        },
        emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    groupedYears: i,
                    modelValue: o,
                    focusYear: s,
                    selectYear: l,
                    setHoverValue: d
                } = ik(r, a),
                {
                    defaultedConfig: g
                } = lt(r);
            return n({
                getSidebarProps: () => ({
                    modelValue: o,
                    selectYear: l
                })
            }), (m, p) => (c(), h("div", null, [m.$slots["month-year"] ? he(m.$slots, "month-year", Xe(ze({
                key: 0
            }, {
                years: B(i),
                selectYear: B(l)
            }))) : (c(), F(qn, {
                key: 1,
                items: B(i),
                "is-last": m.autoApply && !B(g).keepActionRow,
                height: B(g).modeHeight,
                config: m.config,
                "no-overlay-focus": !!(m.noOverlayFocus || m.textInput),
                "focus-value": B(s),
                type: "year",
                "use-relative": "",
                onSelected: B(l),
                onHoverValue: B(d)
            }, Tt({
                _: 2
            }, [m.$slots["year-overlay-value"] ? {
                name: "item",
                fn: _e(({
                    item: f
                }) => [he(m.$slots, "year-overlay-value", {
                    text: f.text,
                    value: f.value
                })]),
                key: "0"
            } : void 0]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))]))
        }
    }),
    lk = {
        key: 0,
        class: "dp__time_input"
    },
    uk = ["aria-label", "onKeydown", "onClick"],
    ck = E("span", {
        class: "dp__tp_inline_btn_bar dp__tp_btn_in_l"
    }, null, -1),
    dk = E("span", {
        class: "dp__tp_inline_btn_bar dp__tp_btn_in_r"
    }, null, -1),
    mk = ["aria-label", "disabled", "onKeydown", "onClick"],
    gk = ["aria-label", "onKeydown", "onClick"],
    pk = E("span", {
        class: "dp__tp_inline_btn_bar dp__tp_btn_in_l"
    }, null, -1),
    vk = E("span", {
        class: "dp__tp_inline_btn_bar dp__tp_btn_in_r"
    }, null, -1),
    hk = {
        key: 0
    },
    fk = ["aria-label", "onKeydown"],
    yk = le({
        compatConfig: {
            MODE: 3
        },
        __name: "TimeInput",
        props: {
            hours: {
                type: Number,
                default: 0
            },
            minutes: {
                type: Number,
                default: 0
            },
            seconds: {
                type: Number,
                default: 0
            },
            closeTimePickerBtn: {
                type: Object,
                default: null
            },
            order: {
                type: Number,
                default: 0
            },
            disabledTimesConfig: {
                type: Function,
                default: null
            },
            validateTime: {
                type: Function,
                default: () => !1
            },
            ...Zt
        },
        emits: ["set-hours", "set-minutes", "update:hours", "update:minutes", "update:seconds", "reset-flow", "mounted", "overlay-closed", "am-pm-change"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    setTimePickerElements: i,
                    setTimePickerBackRef: o
                } = Pa(),
                {
                    defaultedAriaLabels: s,
                    defaultedTransitions: l,
                    defaultedFilters: d,
                    defaultedConfig: g
                } = lt(r),
                {
                    transitionName: m,
                    showTransition: p
                } = Un(l),
                f = pa({
                    hours: !1,
                    minutes: !1,
                    seconds: !1
                }),
                b = A("AM"),
                S = A(null),
                C = A([]);
            Le(() => {
                a("mounted")
            });
            const w = k => Ze(new Date, {
                    hours: k.hours,
                    minutes: k.minutes,
                    seconds: r.enableSeconds ? k.seconds : 0,
                    milliseconds: 0
                }),
                y = u(() => k => V(k, r[k]) || P(k, r[k])),
                D = u(() => ({
                    hours: r.hours,
                    minutes: r.minutes,
                    seconds: r.seconds
                })),
                P = (k, te) => r.range && !r.disableTimeRangeValidation ? !r.validateTime(k, te) : !1,
                M = (k, te) => {
                    if (r.range && !r.disableTimeRangeValidation) {
                        const ue = te ? +r[`${k}Increment`] : - +r[`${k}Increment`],
                            K = r[k] + ue;
                        return !r.validateTime(k, K)
                    }
                    return !1
                },
                R = u(() => k => !N(+r[k] + +r[`${k}Increment`], k) || M(k, !0)),
                $ = u(() => k => !N(+r[k] - +r[`${k}Increment`], k) || M(k, !1)),
                Z = (k, te) => Fl(Ze(ae(), k), te),
                G = (k, te) => Rw(Ze(ae(), k), te),
                T = u(() => ({
                    dp__time_col: !0,
                    dp__time_col_block: !r.timePickerInline,
                    dp__time_col_reg_block: !r.enableSeconds && r.is24 && !r.timePickerInline,
                    dp__time_col_reg_inline: !r.enableSeconds && r.is24 && r.timePickerInline,
                    dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
                    dp__time_col_sec: r.enableSeconds && r.is24,
                    dp__time_col_sec_with_button: r.enableSeconds && !r.is24
                })),
                L = u(() => {
                    const k = [{
                        type: "hours"
                    }, {
                        type: "",
                        separator: !0
                    }, {
                        type: "minutes"
                    }];
                    return r.enableSeconds ? k.concat([{
                        type: "",
                        separator: !0
                    }, {
                        type: "seconds"
                    }]) : k
                }),
                H = u(() => L.value.filter(k => !k.separator)),
                z = u(() => k => {
                    if (k === "hours") {
                        const te = Y(+r.hours);
                        return {
                            text: te < 10 ? `0${te}` : `${te}`,
                            value: te
                        }
                    }
                    return {
                        text: r[k] < 10 ? `0${r[k]}` : `${r[k]}`,
                        value: r[k]
                    }
                }),
                V = (k, te) => {
                    var ue;
                    if (!r.disabledTimesConfig) return !1;
                    const K = r.disabledTimesConfig(r.order, k === "hours" ? te : void 0);
                    return K[k] ? !!((ue = K[k]) != null && ue.includes(te)) : !0
                },
                I = k => {
                    const te = r.is24 ? 24 : 12,
                        ue = k === "hours" ? te : 60,
                        K = +r[`${k}GridIncrement`],
                        ve = k === "hours" && !r.is24 ? K : 0,
                        me = [];
                    for (let j = ve; j < ue; j += K) me.push({
                        value: j,
                        text: j < 10 ? `0${j}` : `${j}`
                    });
                    return k === "hours" && !r.is24 && me.push({
                        value: 0,
                        text: "12"
                    }), rn(me, j => ({
                        active: !1,
                        disabled: d.value.times[k].includes(j.value) || !N(j.value, k) || V(k, j.value) || P(k, j.value)
                    }))
                },
                N = (k, te) => {
                    const ue = r.minTime ? w(Wr(r.minTime)) : null,
                        K = r.maxTime ? w(Wr(r.maxTime)) : null,
                        ve = w(Wr(D.value, te, k));
                    return ue && K ? (Rn(ve, K) || za(ve, K)) && (Bn(ve, ue) || za(ve, ue)) : ue ? Bn(ve, ue) || za(ve, ue) : K ? Rn(ve, K) || za(ve, K) : !0
                },
                U = k => r[`no${k[0].toUpperCase()+k.slice(1)}Overlay`],
                Q = k => {
                    U(k) || (f[k] = !f[k], f[k] || a("overlay-closed"))
                },
                _ = k => k === "hours" ? zt : k === "minutes" ? ia : an,
                v = (k, te = !0) => {
                    const ue = te ? Z : G,
                        K = te ? +r[`${k}Increment`] : - +r[`${k}Increment`];
                    N(+r[k] + K, k) && a(`update:${k}`, _(k)(ue({
                        [k]: +r[k]
                    }, {
                        [k]: +r[`${k}Increment`]
                    })))
                },
                Y = k => r.is24 ? k : (k >= 12 ? b.value = "PM" : b.value = "AM", c1(k)),
                W = () => {
                    b.value === "PM" ? (b.value = "AM", a("update:hours", r.hours - 12)) : (b.value = "PM", a("update:hours", r.hours + 12)), a("am-pm-change", b.value)
                },
                ee = k => {
                    f[k] = !0
                },
                ie = (k, te, ue) => {
                    if (k && r.arrowNavigation) {
                        Array.isArray(C.value[te]) ? C.value[te][ue] = k : C.value[te] = [k];
                        const K = C.value.reduce((ve, me) => me.map((j, ne) => [...ve[ne] || [], me[ne]]), []);
                        o(r.closeTimePickerBtn), S.value && (K[1] = K[1].concat(S.value)), i(K, r.order)
                    }
                },
                q = (k, te) => (Q(k), k === "hours" && !r.is24 ? a(`update:${k}`, b.value === "PM" ? te + 12 : te) : a(`update:${k}`, te));
            return n({
                openChildCmp: ee
            }), (k, te) => {
                var ue;
                return k.disabled ? O("", !0) : (c(), h("div", lk, [(c(!0), h(pe, null, ke(L.value, (K, ve) => {
                    var me, j, ne;
                    return c(), h("div", {
                        key: ve,
                        class: J(T.value)
                    }, [K.separator ? (c(), h(pe, {
                        key: 0
                    }, [Be(" : ")], 64)) : (c(), h(pe, {
                        key: 1
                    }, [E("button", {
                        ref_for: !0,
                        ref: Ie => ie(Ie, ve, 0),
                        type: "button",
                        class: J({
                            dp__btn: !0,
                            dp__inc_dec_button: !k.timePickerInline,
                            dp__inc_dec_button_inline: k.timePickerInline,
                            dp__tp_inline_btn_top: k.timePickerInline,
                            dp__inc_dec_button_disabled: R.value(K.type)
                        }),
                        "aria-label": (me = B(s)) == null ? void 0 : me.incrementValue(K.type),
                        tabindex: "0",
                        onKeydown: [Oe(Ee(Ie => v(K.type), ["prevent"]), ["enter"]), Oe(Ee(Ie => v(K.type), ["prevent"]), ["space"])],
                        onClick: Ie => v(K.type)
                    }, [r.timePickerInline ? (c(), h(pe, {
                        key: 1
                    }, [ck, dk], 64)) : (c(), h(pe, {
                        key: 0
                    }, [k.$slots["arrow-up"] ? he(k.$slots, "arrow-up", {
                        key: 0
                    }) : O("", !0), k.$slots["arrow-up"] ? O("", !0) : (c(), F(B(ni), {
                        key: 1
                    }))], 64))], 42, uk), E("button", {
                        ref_for: !0,
                        ref: Ie => ie(Ie, ve, 1),
                        type: "button",
                        "aria-label": (j = B(s)) == null ? void 0 : j.openTpOverlay(K.type),
                        class: J({
                            dp__time_display: !0,
                            dp__time_display_block: !k.timePickerInline,
                            dp__time_display_inline: k.timePickerInline,
                            "dp--time-invalid": y.value(K.type),
                            "dp--time-overlay-btn": !y.value(K.type)
                        }),
                        disabled: U(K.type),
                        tabindex: "0",
                        onKeydown: [Oe(Ee(Ie => Q(K.type), ["prevent"]), ["enter"]), Oe(Ee(Ie => Q(K.type), ["prevent"]), ["space"])],
                        onClick: Ie => Q(K.type)
                    }, [k.$slots[K.type] ? he(k.$slots, K.type, {
                        key: 0,
                        text: z.value(K.type).text,
                        value: z.value(K.type).value
                    }) : O("", !0), k.$slots[K.type] ? O("", !0) : (c(), h(pe, {
                        key: 1
                    }, [Be(X(z.value(K.type).text), 1)], 64))], 42, mk), E("button", {
                        ref_for: !0,
                        ref: Ie => ie(Ie, ve, 2),
                        type: "button",
                        class: J({
                            dp__btn: !0,
                            dp__inc_dec_button: !k.timePickerInline,
                            dp__inc_dec_button_inline: k.timePickerInline,
                            dp__tp_inline_btn_bottom: k.timePickerInline,
                            dp__inc_dec_button_disabled: $.value(K.type)
                        }),
                        "aria-label": (ne = B(s)) == null ? void 0 : ne.decrementValue(K.type),
                        tabindex: "0",
                        onKeydown: [Oe(Ee(Ie => v(K.type, !1), ["prevent"]), ["enter"]), Oe(Ee(Ie => v(K.type, !1), ["prevent"]), ["space"])],
                        onClick: Ie => v(K.type, !1)
                    }, [r.timePickerInline ? (c(), h(pe, {
                        key: 1
                    }, [pk, vk], 64)) : (c(), h(pe, {
                        key: 0
                    }, [k.$slots["arrow-down"] ? he(k.$slots, "arrow-down", {
                        key: 0
                    }) : O("", !0), k.$slots["arrow-down"] ? O("", !0) : (c(), F(B(ri), {
                        key: 1
                    }))], 64))], 42, gk)], 64))], 2)
                }), 128)), k.is24 ? O("", !0) : (c(), h("div", hk, [k.$slots["am-pm-button"] ? he(k.$slots, "am-pm-button", {
                    key: 0,
                    toggle: W,
                    value: b.value
                }) : O("", !0), k.$slots["am-pm-button"] ? O("", !0) : (c(), h("button", {
                    key: 1,
                    ref_key: "amPmButton",
                    ref: S,
                    type: "button",
                    class: "dp__pm_am_button",
                    role: "button",
                    "aria-label": (ue = B(s)) == null ? void 0 : ue.amPmButton,
                    tabindex: "0",
                    onClick: W,
                    onKeydown: [Oe(Ee(W, ["prevent"]), ["enter"]), Oe(Ee(W, ["prevent"]), ["space"])]
                }, X(b.value), 41, fk))])), (c(!0), h(pe, null, ke(H.value, (K, ve) => (c(), F(Mt, {
                    key: ve,
                    name: B(m)(f[K.type]),
                    css: B(p)
                }, {
                    default: _e(() => [f[K.type] ? (c(), F(qn, {
                        key: 0,
                        items: I(K.type),
                        "is-last": k.autoApply && !B(g).keepActionRow,
                        "esc-close": k.escClose,
                        type: K.type,
                        "text-input": k.textInput,
                        config: k.config,
                        "arrow-navigation": k.arrowNavigation,
                        onSelected: me => q(K.type, me),
                        onToggle: me => Q(K.type),
                        onResetFlow: te[0] || (te[0] = me => k.$emit("reset-flow"))
                    }, Tt({
                        "button-icon": _e(() => [k.$slots["clock-icon"] ? he(k.$slots, "clock-icon", {
                            key: 0
                        }) : O("", !0), k.$slots["clock-icon"] ? O("", !0) : (c(), F(sn(k.timePickerInline ? B(un) : B(ai)), {
                            key: 1
                        }))]),
                        _: 2
                    }, [k.$slots[`${K.type}-overlay-value`] ? {
                        name: "item",
                        fn: _e(({
                            item: me
                        }) => [he(k.$slots, `${K.type}-overlay-value`, {
                            text: me.text,
                            value: me.value
                        })]),
                        key: "0"
                    } : void 0]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : O("", !0)]),
                    _: 2
                }, 1032, ["name", "css"]))), 128))]))
            }
        }
    }),
    bk = {
        class: "dp--tp-wrap"
    },
    _k = ["aria-label", "tabindex"],
    wk = ["tabindex"],
    kk = ["aria-label"],
    Ou = le({
        compatConfig: {
            MODE: 3
        },
        __name: "TimePicker",
        props: {
            hours: {
                type: [Number, Array],
                default: 0
            },
            minutes: {
                type: [Number, Array],
                default: 0
            },
            seconds: {
                type: [Number, Array],
                default: 0
            },
            disabledTimesConfig: {
                type: Function,
                default: null
            },
            validateTime: {
                type: Function,
                default: () => !1
            },
            ...Zt
        },
        emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow", "overlay-opened", "overlay-closed", "am-pm-change"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    buildMatrix: i,
                    setTimePicker: o
                } = Pa(),
                s = Ha(),
                {
                    defaultedTransitions: l,
                    defaultedAriaLabels: d,
                    defaultedTextInput: g,
                    defaultedConfig: m
                } = lt(r),
                {
                    transitionName: p,
                    showTransition: f
                } = Un(l),
                {
                    hideNavigationButtons: b
                } = hr(),
                S = A(null),
                C = A(null),
                w = A([]),
                y = A(null);
            Le(() => {
                a("mount"), !r.timePicker && r.arrowNavigation ? i([ct(S.value)], "time") : o(!0, r.timePicker)
            });
            const D = u(() => r.range && r.modelAuto ? yu(r.internalModelValue) : !0),
                P = A(!1),
                M = I => ({
                    hours: Array.isArray(r.hours) ? r.hours[I] : r.hours,
                    minutes: Array.isArray(r.minutes) ? r.minutes[I] : r.minutes,
                    seconds: Array.isArray(r.seconds) ? r.seconds[I] : r.seconds
                }),
                R = u(() => {
                    const I = [];
                    if (r.range)
                        for (let N = 0; N < 2; N++) I.push(M(N));
                    else I.push(M(0));
                    return I
                }),
                $ = (I, N = !1, U = "") => {
                    N || a("reset-flow"), P.value = I, a(I ? "overlay-opened" : "overlay-closed"), r.arrowNavigation && o(I), Dt(() => {
                        U !== "" && w.value[0] && w.value[0].openChildCmp(U)
                    })
                },
                Z = u(() => ({
                    dp__btn: !0,
                    dp__button: !0,
                    dp__button_bottom: r.autoApply && !m.value.keepActionRow
                })),
                G = Lt(s, "timePicker"),
                T = (I, N, U) => r.range ? N === 0 ? [I, R.value[1][U]] : [R.value[0][U], I] : I,
                L = I => {
                    a("update:hours", I)
                },
                H = I => {
                    a("update:minutes", I)
                },
                z = I => {
                    a("update:seconds", I)
                },
                V = () => {
                    if (y.value && !g.value.enabled && !r.noOverlayFocus) {
                        const I = m1(y.value);
                        I && I.focus({
                            preventScroll: !0
                        })
                    }
                };
            return n({
                toggleTimePicker: $
            }), (I, N) => {
                var U;
                return c(), h("div", bk, [!I.timePicker && !I.timePickerInline ? ce((c(), h("button", {
                    key: 0,
                    ref_key: "openTimePickerBtn",
                    ref: S,
                    type: "button",
                    class: J(Z.value),
                    "aria-label": (U = B(d)) == null ? void 0 : U.openTimePicker,
                    tabindex: I.noOverlayFocus ? void 0 : 0,
                    onKeydown: [N[0] || (N[0] = Oe(Q => $(!0), ["enter"])), N[1] || (N[1] = Oe(Q => $(!0), ["space"]))],
                    onClick: N[2] || (N[2] = Q => $(!0))
                }, [I.$slots["clock-icon"] ? he(I.$slots, "clock-icon", {
                    key: 0
                }) : O("", !0), I.$slots["clock-icon"] ? O("", !0) : (c(), F(B(ai), {
                    key: 1
                }))], 42, _k)), [
                    [Gt, !B(b)(I.hideNavigation, "time")]
                ]) : O("", !0), De(Mt, {
                    name: B(p)(P.value),
                    css: B(f) && !I.timePickerInline
                }, {
                    default: _e(() => {
                        var Q;
                        return [P.value || I.timePicker || I.timePickerInline ? (c(), h("div", {
                            key: 0,
                            ref_key: "overlayRef",
                            ref: y,
                            class: J({
                                dp__overlay: !I.timePickerInline,
                                "dp--overlay-absolute": !r.timePicker && !I.timePickerInline,
                                "dp--overlay-relative": r.timePicker
                            }),
                            style: Re(I.timePicker ? {
                                height: `${B(m).modeHeight}px`
                            } : void 0),
                            tabindex: I.timePickerInline ? void 0 : 0
                        }, [E("div", {
                            class: J(I.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
                            style: {
                                display: "flex"
                            }
                        }, [I.$slots["time-picker-overlay"] ? he(I.$slots, "time-picker-overlay", {
                            key: 0,
                            hours: e.hours,
                            minutes: e.minutes,
                            seconds: e.seconds,
                            setHours: L,
                            setMinutes: H,
                            setSeconds: z
                        }) : O("", !0), I.$slots["time-picker-overlay"] ? O("", !0) : (c(), h("div", {
                            key: 1,
                            class: J(I.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                        }, [(c(!0), h(pe, null, ke(R.value, (_, v) => ce((c(), F(yk, ze({
                            key: v
                        }, { ...I.$props,
                            order: v,
                            hours: _.hours,
                            minutes: _.minutes,
                            seconds: _.seconds,
                            closeTimePickerBtn: C.value,
                            disabledTimesConfig: e.disabledTimesConfig,
                            disabled: v === 0 ? I.fixedStart : I.fixedEnd
                        }, {
                            ref_for: !0,
                            ref_key: "timeInputRefs",
                            ref: w,
                            "validate-time": (Y, W) => e.validateTime(Y, T(W, v, Y)),
                            "onUpdate:hours": Y => L(T(Y, v, "hours")),
                            "onUpdate:minutes": Y => H(T(Y, v, "minutes")),
                            "onUpdate:seconds": Y => z(T(Y, v, "seconds")),
                            onMounted: V,
                            onOverlayClosed: V,
                            onAmPmChange: N[3] || (N[3] = Y => I.$emit("am-pm-change", Y))
                        }), Tt({
                            _: 2
                        }, [ke(B(G), (Y, W) => ({
                            name: Y,
                            fn: _e(ee => [he(I.$slots, Y, Xe(bt(ee)))])
                        }))]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [
                            [Gt, v === 0 ? !0 : D.value]
                        ])), 128))], 2)), !I.timePicker && !I.timePickerInline ? ce((c(), h("button", {
                            key: 2,
                            ref_key: "closeTimePickerBtn",
                            ref: C,
                            type: "button",
                            class: J(Z.value),
                            "aria-label": (Q = B(d)) == null ? void 0 : Q.closeTimePicker,
                            tabindex: "0",
                            onKeydown: [N[4] || (N[4] = Oe(_ => $(!1), ["enter"])), N[5] || (N[5] = Oe(_ => $(!1), ["space"]))],
                            onClick: N[6] || (N[6] = _ => $(!1))
                        }, [I.$slots["calendar-icon"] ? he(I.$slots, "calendar-icon", {
                            key: 0
                        }) : O("", !0), I.$slots["calendar-icon"] ? O("", !0) : (c(), F(B(un), {
                            key: 1
                        }))], 42, kk)), [
                            [Gt, !B(b)(I.hideNavigation, "time")]
                        ]) : O("", !0)], 2)], 14, wk)) : O("", !0)]
                    }),
                    _: 3
                }, 8, ["name", "css"])])
            }
        }
    }),
    Lu = (e, n, t, a) => {
        const r = (w, y) => Array.isArray(n[w]) ? n[w][y] : n[w],
            i = w => e.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[w] : n.seconds : 0,
            o = (w, y) => w ? y !== void 0 ? ka(w, r("hours", y), r("minutes", y), i(y)) : ka(w, n.hours, n.minutes, i()) : Jo(ae(), i(y)),
            s = (w, y) => {
                n[w] = y
            },
            l = (w, y) => {
                const D = Object.fromEntries(Object.keys(n).map(P => P === w ? [P, y] : [P, n[P]].slice()));
                if (e.range && !e.disableTimeRangeValidation) {
                    const P = R => t.value ? ka(t.value[R], D.hours[R], D.minutes[R], D.seconds[R]) : null,
                        M = R => Xo(t.value[R], 0);
                    return !(We(P(0), P(1)) && (Bn(P(0), M(1)) || Rn(P(1), M(0))))
                }
                return !0
            },
            d = (w, y) => {
                l(w, y) && (s(w, y), a && a())
            },
            g = w => {
                d("hours", w)
            },
            m = w => {
                d("minutes", w)
            },
            p = w => {
                d("seconds", w)
            },
            f = (w, y, D, P) => {
                y && g(w), !y && !D && m(w), D && p(w), t.value && P(t.value)
            },
            b = w => {
                if (w) {
                    const y = Array.isArray(w),
                        D = y ? [+w[0].hours, +w[1].hours] : +w.hours,
                        P = y ? [+w[0].minutes, +w[1].minutes] : +w.minutes,
                        M = y ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
                    s("hours", D), s("minutes", P), e.enableSeconds && s("seconds", M)
                }
            },
            S = (w, y) => {
                const D = {
                    hours: Array.isArray(n.hours) ? n.hours[w] : n.hours,
                    disabledArr: []
                };
                return (y || y === 0) && (D.hours = y), Array.isArray(e.disabledTimes) && (D.disabledArr = e.range && Array.isArray(e.disabledTimes[w]) ? e.disabledTimes[w] : e.disabledTimes), D
            },
            C = u(() => (w, y) => {
                var D;
                if (Array.isArray(e.disabledTimes)) {
                    const {
                        disabledArr: P,
                        hours: M
                    } = S(w, y), R = P.filter($ => +$.hours === M);
                    return ((D = R[0]) == null ? void 0 : D.minutes) === "*" ? {
                        hours: [M],
                        minutes: void 0,
                        seconds: void 0
                    } : {
                        hours: [],
                        minutes: R ? .map($ => +$.minutes) ? ? [],
                        seconds: R ? .map($ => $.seconds ? +$.seconds : void 0) ? ? []
                    }
                }
                return {
                    hours: [],
                    minutes: [],
                    seconds: []
                }
            });
        return {
            setTime: s,
            updateHours: g,
            updateMinutes: m,
            updateSeconds: p,
            getSetDateTime: o,
            updateTimeValues: f,
            getSecondsValue: i,
            assignStartTime: b,
            validateTime: l,
            disabledTimesConfig: C
        }
    },
    Sk = (e, n) => {
        const {
            modelValue: t,
            time: a
        } = Yn(e, n), {
            defaultedStartTime: r
        } = lt(e), {
            updateTimeValues: i,
            getSetDateTime: o,
            setTime: s,
            assignStartTime: l,
            disabledTimesConfig: d,
            validateTime: g
        } = Lu(e, a, t), m = y => {
            const {
                hours: D,
                minutes: P,
                seconds: M
            } = y;
            return {
                hours: +D,
                minutes: +P,
                seconds: M ? +M : 0
            }
        }, p = () => {
            if (e.startTime) {
                if (Array.isArray(e.startTime)) {
                    const D = m(e.startTime[0]),
                        P = m(e.startTime[1]);
                    return [Ze(ae(), D), Ze(ae(), P)]
                }
                const y = m(e.startTime);
                return Ze(ae(), y)
            }
            return e.range ? [null, null] : null
        }, f = () => {
            if (e.range) {
                const [y, D] = p();
                t.value = [o(y, 0), o(D, 1)]
            } else t.value = o(p())
        }, b = y => Array.isArray(y) ? [Ba(ae(y[0])), Ba(ae(y[1]))] : [Ba(y ? ? ae())], S = (y, D, P) => {
            s("hours", y), s("minutes", D), s("seconds", e.enableSeconds ? P : 0)
        }, C = () => {
            const [y, D] = b(t.value);
            return e.range ? S([y.hours, D.hours], [y.minutes, D.minutes], [y.seconds, D.minutes]) : S(y.hours, y.minutes, y.seconds)
        };
        Le(() => {
            if (!e.shadow) return l(r.value), t.value ? C() : f()
        });
        const w = () => {
            Array.isArray(t.value) ? t.value = t.value.map((y, D) => y && o(y, D)) : t.value = o(t.value), n("time-update")
        };
        return {
            modelValue: t,
            time: a,
            disabledTimesConfig: d,
            updateTime: (y, D = !0, P = !1) => {
                i(y, D, P, w)
            },
            validateTime: g
        }
    },
    Ck = le({
        compatConfig: {
            MODE: 3
        },
        __name: "TimePickerSolo",
        props: { ...Zt
        },
        emits: ["update:internal-model-value", "time-update", "am-pm-change"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                i = Ha(),
                o = Lt(i, "timePicker"),
                {
                    time: s,
                    modelValue: l,
                    disabledTimesConfig: d,
                    updateTime: g,
                    validateTime: m
                } = Sk(r, a);
            return n({
                getSidebarProps: () => ({
                    modelValue: l,
                    time: s,
                    updateTime: g
                })
            }), (p, f) => (c(), F(yr, {
                "multi-calendars": 0,
                stretch: ""
            }, {
                default: _e(() => [De(Ou, ze(p.$props, {
                    hours: B(s).hours,
                    minutes: B(s).minutes,
                    seconds: B(s).seconds,
                    "internal-model-value": p.internalModelValue,
                    "disabled-times-config": B(d),
                    "validate-time": B(m),
                    "onUpdate:hours": f[0] || (f[0] = b => B(g)(b)),
                    "onUpdate:minutes": f[1] || (f[1] = b => B(g)(b, !1)),
                    "onUpdate:seconds": f[2] || (f[2] = b => B(g)(b, !1, !0)),
                    onAmPmChange: f[3] || (f[3] = b => p.$emit("am-pm-change", b))
                }), Tt({
                    _: 2
                }, [ke(B(o), (b, S) => ({
                    name: b,
                    fn: _e(C => [he(p.$slots, b, Xe(bt(C)))])
                }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])]),
                _: 3
            }))
        }
    }),
    Tk = {
        class: "dp__month_year_row"
    },
    Pk = ["aria-label", "onClick", "onKeydown"],
    Ik = le({
        compatConfig: {
            MODE: 3
        },
        __name: "DpHeader",
        props: {
            month: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            instance: {
                type: Number,
                default: 0
            },
            years: {
                type: Array,
                default: () => []
            },
            months: {
                type: Array,
                default: () => []
            },
            ...Zt
        },
        emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    defaultedTransitions: i,
                    defaultedAriaLabels: o,
                    defaultedMultiCalendars: s,
                    defaultedFilters: l,
                    defaultedConfig: d,
                    defaultedHighlight: g
                } = lt(r),
                {
                    transitionName: m,
                    showTransition: p
                } = Un(i),
                {
                    buildMatrix: f
                } = Pa(),
                {
                    handleMonthYearChange: b,
                    isDisabled: S,
                    updateMonthYear: C
                } = N1(r, a),
                {
                    showLeftIcon: w,
                    showRightIcon: y
                } = hr(),
                D = A(!1),
                P = A(!1),
                M = A([null, null, null, null]);
            Le(() => {
                a("mount")
            });
            const R = v => ({
                    get: () => r[v],
                    set: Y => {
                        const W = v === Wt.month ? Wt.year : Wt.month;
                        a("update-month-year", {
                            [v]: Y,
                            [W]: r[W]
                        }), v === Wt.month ? V(!0) : I(!0)
                    }
                }),
                $ = u(R(Wt.month)),
                Z = u(R(Wt.year)),
                G = u(() => v => ({
                    month: r.month,
                    year: r.year,
                    items: v === Wt.month ? r.months : r.years,
                    instance: r.instance,
                    updateMonthYear: C,
                    toggle: v === Wt.month ? V : I
                })),
                T = u(() => r.months.find(Y => Y.value === r.month) || {
                    text: "",
                    value: 0
                }),
                L = u(() => rn(r.months, v => {
                    const Y = r.month === v.value,
                        W = $n(v.value, bu(r.year, r.minDate), _u(r.year, r.maxDate)) || l.value.months.includes(v.value),
                        ee = Pu(g.value, v.value, r.year);
                    return {
                        active: Y,
                        disabled: W,
                        highlighted: ee
                    }
                })),
                H = u(() => rn(r.years, v => {
                    const Y = r.year === v.value,
                        W = $n(v.value, on(r.minDate), on(r.maxDate)) || l.value.years.includes(v.value),
                        ee = ui(g.value, v.value);
                    return {
                        active: Y,
                        disabled: W,
                        highlighted: ee
                    }
                })),
                z = (v, Y) => {
                    Y !== void 0 ? v.value = Y : v.value = !v.value, v.value || a("overlay-closed")
                },
                V = (v = !1, Y) => {
                    N(v), z(D, Y)
                },
                I = (v = !1, Y) => {
                    N(v), z(P, Y)
                },
                N = v => {
                    v || a("reset-flow")
                },
                U = (v, Y) => {
                    r.arrowNavigation && (M.value[Y] = ct(v), f(M.value, "monthYear"))
                },
                Q = u(() => {
                    var v, Y;
                    return [{
                        type: Wt.month,
                        index: 1,
                        toggle: V,
                        modelValue: $.value,
                        updateModelValue: W => $.value = W,
                        text: T.value.text,
                        showSelectionGrid: D.value,
                        items: L.value,
                        ariaLabel: (v = o.value) == null ? void 0 : v.openMonthsOverlay
                    }, {
                        type: Wt.year,
                        index: 2,
                        toggle: I,
                        modelValue: Z.value,
                        updateModelValue: W => Z.value = W,
                        text: r.year,
                        showSelectionGrid: P.value,
                        items: H.value,
                        ariaLabel: (Y = o.value) == null ? void 0 : Y.openYearsOverlay
                    }]
                }),
                _ = u(() => r.disableYearSelect ? [Q.value[0]] : r.yearFirst ? [...Q.value].reverse() : Q.value);
            return n({
                toggleMonthPicker: V,
                toggleYearPicker: I,
                handleMonthYearChange: b
            }), (v, Y) => {
                var W, ee, ie;
                return c(), h("div", Tk, [v.$slots["month-year"] ? he(v.$slots, "month-year", Xe(ze({
                    key: 0
                }, {
                    month: e.month,
                    year: e.year,
                    months: e.months,
                    years: e.years,
                    updateMonthYear: B(C),
                    handleMonthYearChange: B(b),
                    instance: e.instance
                }))) : (c(), h(pe, {
                    key: 1
                }, [B(w)(B(s), e.instance) && !v.vertical ? (c(), F(Cn, {
                    key: 0,
                    "aria-label": (W = B(o)) == null ? void 0 : W.prevMonth,
                    disabled: B(S)(!1),
                    onActivate: Y[0] || (Y[0] = q => B(b)(!1, !0)),
                    onSetRef: Y[1] || (Y[1] = q => U(q, 0))
                }, {
                    default: _e(() => [v.$slots["arrow-left"] ? he(v.$slots, "arrow-left", {
                        key: 0
                    }) : O("", !0), v.$slots["arrow-left"] ? O("", !0) : (c(), F(B(ei), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["aria-label", "disabled"])) : O("", !0), E("div", {
                    class: J(["dp__month_year_wrap", {
                        dp__year_disable_select: v.disableYearSelect
                    }])
                }, [(c(!0), h(pe, null, ke(_.value, (q, k) => (c(), h(pe, {
                    key: q.type
                }, [E("button", {
                    ref_for: !0,
                    ref: te => U(te, k + 1),
                    type: "button",
                    class: "dp__btn dp__month_year_select",
                    tabindex: "0",
                    "aria-label": q.ariaLabel,
                    onClick: q.toggle,
                    onKeydown: [Oe(Ee(q.toggle, ["prevent"]), ["enter"]), Oe(Ee(q.toggle, ["prevent"]), ["space"])]
                }, [v.$slots[q.type] ? he(v.$slots, q.type, {
                    key: 0,
                    text: q.text,
                    value: r[q.type]
                }) : O("", !0), v.$slots[q.type] ? O("", !0) : (c(), h(pe, {
                    key: 1
                }, [Be(X(q.text), 1)], 64))], 40, Pk), De(Mt, {
                    name: B(m)(q.showSelectionGrid),
                    css: B(p)
                }, {
                    default: _e(() => [q.showSelectionGrid ? (c(), F(qn, {
                        key: 0,
                        items: q.items,
                        "arrow-navigation": v.arrowNavigation,
                        "hide-navigation": v.hideNavigation,
                        "is-last": v.autoApply && !B(d).keepActionRow,
                        "skip-button-ref": !1,
                        config: v.config,
                        type: q.type,
                        "header-refs": [],
                        "esc-close": v.escClose,
                        "text-input": v.textInput,
                        onSelected: q.updateModelValue,
                        onToggle: q.toggle
                    }, Tt({
                        "button-icon": _e(() => [v.$slots["calendar-icon"] ? he(v.$slots, "calendar-icon", {
                            key: 0
                        }) : O("", !0), v.$slots["calendar-icon"] ? O("", !0) : (c(), F(B(un), {
                            key: 1
                        }))]),
                        _: 2
                    }, [v.$slots[`${q.type}-overlay-value`] ? {
                        name: "item",
                        fn: _e(({
                            item: te
                        }) => [he(v.$slots, `${q.type}-overlay-value`, {
                            text: te.text,
                            value: te.value
                        })]),
                        key: "0"
                    } : void 0, v.$slots[`${q.type}-overlay`] ? {
                        name: "overlay",
                        fn: _e(() => [he(v.$slots, `${q.type}-overlay`, Xe(bt(G.value(q.type))))]),
                        key: "1"
                    } : void 0, v.$slots[`${q.type}-overlay-header`] ? {
                        name: "header",
                        fn: _e(() => [he(v.$slots, `${q.type}-overlay-header`, {
                            toggle: q.toggle
                        })]),
                        key: "2"
                    } : void 0]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : O("", !0)]),
                    _: 2
                }, 1032, ["name", "css"])], 64))), 128))], 2), B(w)(B(s), e.instance) && v.vertical ? (c(), F(Cn, {
                    key: 1,
                    "aria-label": (ee = B(o)) == null ? void 0 : ee.prevMonth,
                    disabled: B(S)(!1),
                    onActivate: Y[2] || (Y[2] = q => B(b)(!1, !0))
                }, {
                    default: _e(() => [v.$slots["arrow-up"] ? he(v.$slots, "arrow-up", {
                        key: 0
                    }) : O("", !0), v.$slots["arrow-up"] ? O("", !0) : (c(), F(B(ni), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["aria-label", "disabled"])) : O("", !0), B(y)(B(s), e.instance) ? (c(), F(Cn, {
                    key: 2,
                    ref: "rightIcon",
                    disabled: B(S)(!0),
                    "aria-label": (ie = B(o)) == null ? void 0 : ie.nextMonth,
                    onActivate: Y[3] || (Y[3] = q => B(b)(!0, !0)),
                    onSetRef: Y[4] || (Y[4] = q => U(q, v.disableYearSelect ? 2 : 3))
                }, {
                    default: _e(() => [v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? he(v.$slots, v.vertical ? "arrow-down" : "arrow-right", {
                        key: 0
                    }) : O("", !0), v.$slots[v.vertical ? "arrow-down" : "arrow-right"] ? O("", !0) : (c(), F(sn(v.vertical ? B(ri) : B(ti)), {
                        key: 1
                    }))]),
                    _: 3
                }, 8, ["disabled", "aria-label"])) : O("", !0)], 64))])
            }
        }
    }),
    Ek = ["aria-label"],
    Dk = {
        class: "dp__calendar_header",
        role: "row"
    },
    Mk = {
        key: 0,
        class: "dp__calendar_header_item",
        role: "gridcell"
    },
    Ok = E("div", {
        class: "dp__calendar_header_separator"
    }, null, -1),
    Lk = ["aria-label"],
    Ak = {
        key: 0,
        role: "gridcell",
        class: "dp__calendar_item dp__week_num"
    },
    Bk = {
        class: "dp__cell_inner"
    },
    Rk = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"],
    $k = le({
        compatConfig: {
            MODE: 3
        },
        __name: "DpCalendar",
        props: {
            mappedDates: {
                type: Array,
                default: () => []
            },
            instance: {
                type: Number,
                default: 0
            },
            month: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            ...Zt
        },
        emits: ["select-date", "set-hover-date", "handle-scroll", "mount", "handle-swipe", "handle-space", "tooltip-open", "tooltip-close"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    buildMultiLevelMatrix: i
                } = Pa(),
                {
                    defaultedTransitions: o,
                    defaultedConfig: s,
                    defaultedAriaLabels: l,
                    defaultedMultiCalendars: d,
                    defaultedWeekNumbers: g
                } = lt(r),
                m = A(null),
                p = A({
                    bottom: "",
                    left: "",
                    transform: ""
                }),
                f = A([]),
                b = A(null),
                S = A(!0),
                C = A(""),
                w = A({
                    startX: 0,
                    endX: 0,
                    startY: 0,
                    endY: 0
                }),
                y = A([]),
                D = A({
                    left: "50%"
                }),
                P = u(() => r.calendar ? r.calendar(r.mappedDates) : r.mappedDates),
                M = u(() => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : u1(r.formatLocale, r.locale, +r.weekStart));
            Le(() => {
                a("mount", {
                    cmp: "calendar",
                    refs: f
                }), s.value.noSwipe || b.value && (b.value.addEventListener("touchstart", I, {
                    passive: !1
                }), b.value.addEventListener("touchend", N, {
                    passive: !1
                }), b.value.addEventListener("touchmove", U, {
                    passive: !1
                })), r.monthChangeOnScroll && b.value && b.value.addEventListener("wheel", v, {
                    passive: !1
                })
            });
            const R = q => q ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous",
                $ = (q, k) => {
                    if (r.transitions) {
                        const te = wt(ga(ae(), r.month, r.year));
                        C.value = _t(wt(ga(ae(), q, k)), te) ? o.value[R(!0)] : o.value[R(!1)], S.value = !1, Dt(() => {
                            S.value = !0
                        })
                    }
                },
                Z = u(() => ({
                    [r.calendarClassName]: !!r.calendarClassName
                })),
                G = u(() => q => {
                    const k = d1(q);
                    return {
                        dp__marker_dot: k.type === "dot",
                        dp__marker_line: k.type === "line"
                    }
                }),
                T = u(() => q => We(q, m.value)),
                L = u(() => ({
                    dp__calendar: !0,
                    dp__calendar_next: d.value.count > 0 && r.instance !== 0
                })),
                H = u(() => q => r.hideOffsetDates ? q.current : !0),
                z = async (q, k, te) => {
                    var ue, K;
                    if (a("set-hover-date", q), (K = (ue = q.marker) == null ? void 0 : ue.tooltip) != null && K.length) {
                        const ve = ct(f.value[k][te]);
                        if (ve) {
                            const {
                                width: me,
                                height: j
                            } = ve.getBoundingClientRect();
                            m.value = q.value;
                            let ne = {
                                    left: `${me/2}px`
                                },
                                Ie = -50;
                            if (await Dt(), y.value[0]) {
                                const {
                                    left: ge,
                                    width: qe
                                } = y.value[0].getBoundingClientRect();
                                ge < 0 && (ne = {
                                    left: "0"
                                }, Ie = 0, D.value.left = `${me/2}px`), window.innerWidth < ge + qe && (ne = {
                                    right: "0"
                                }, Ie = 0, D.value.left = `${qe-me/2}px`)
                            }
                            p.value = {
                                bottom: `${j}px`,
                                ...ne,
                                transform: `translateX(${Ie}%)`
                            }, a("tooltip-open", q.marker)
                        }
                    }
                },
                V = q => {
                    m.value && (m.value = null, p.value = JSON.parse(JSON.stringify({
                        bottom: "",
                        left: "",
                        transform: ""
                    })), a("tooltip-close", q.marker))
                },
                I = q => {
                    w.value.startX = q.changedTouches[0].screenX, w.value.startY = q.changedTouches[0].screenY
                },
                N = q => {
                    w.value.endX = q.changedTouches[0].screenX, w.value.endY = q.changedTouches[0].screenY, Q()
                },
                U = q => {
                    r.vertical && !r.inline && q.preventDefault()
                },
                Q = () => {
                    const q = r.vertical ? "Y" : "X";
                    Math.abs(w.value[`start${q}`] - w.value[`end${q}`]) > 10 && a("handle-swipe", w.value[`start${q}`] > w.value[`end${q}`] ? "right" : "left")
                },
                _ = (q, k, te) => {
                    q && (Array.isArray(f.value[k]) ? f.value[k][te] = q : f.value[k] = [q]), r.arrowNavigation && i(f.value, "calendar")
                },
                v = q => {
                    r.monthChangeOnScroll && (q.preventDefault(), a("handle-scroll", q))
                },
                Y = q => g.value.type === "local" ? w0(q.value, {
                    weekStartsOn: +r.weekStart
                }) : g.value.type === "iso" ? f0(q.value) : typeof g.value.type == "function" ? g.value.type(q.value) : "",
                W = q => {
                    const k = q[0];
                    return g.value.hideOnOffsetDates ? q.some(te => te.current) ? Y(k) : "" : Y(k)
                },
                ee = (q, k) => {
                    wa(q, s.value), a("select-date", k)
                },
                ie = q => {
                    wa(q, s.value)
                };
            return n({
                triggerTransition: $
            }), (q, k) => {
                var te;
                return c(), h("div", {
                    class: J(L.value)
                }, [E("div", {
                    ref_key: "calendarWrapRef",
                    ref: b,
                    role: "grid",
                    class: J(Z.value),
                    "aria-label": (te = B(l)) == null ? void 0 : te.calendarWrap
                }, [(c(), h(pe, {
                    key: 0
                }, [E("div", Dk, [q.weekNumbers ? (c(), h("div", Mk, X(q.weekNumName), 1)) : O("", !0), (c(!0), h(pe, null, ke(M.value, (ue, K) => (c(), h("div", {
                    key: K,
                    class: "dp__calendar_header_item",
                    role: "gridcell"
                }, [q.$slots["calendar-header"] ? he(q.$slots, "calendar-header", {
                    key: 0,
                    day: ue,
                    index: K
                }) : O("", !0), q.$slots["calendar-header"] ? O("", !0) : (c(), h(pe, {
                    key: 1
                }, [Be(X(ue), 1)], 64))]))), 128))]), Ok, De(Mt, {
                    name: C.value,
                    css: !!q.transitions
                }, {
                    default: _e(() => {
                        var ue;
                        return [S.value ? (c(), h("div", {
                            key: 0,
                            class: "dp__calendar",
                            role: "rowgroup",
                            "aria-label": ((ue = B(l)) == null ? void 0 : ue.calendarDays) || void 0
                        }, [(c(!0), h(pe, null, ke(P.value, (K, ve) => (c(), h("div", {
                            key: ve,
                            class: "dp__calendar_row",
                            role: "row"
                        }, [q.weekNumbers ? (c(), h("div", Ak, [E("div", Bk, X(W(K.days)), 1)])) : O("", !0), (c(!0), h(pe, null, ke(K.days, (me, j) => {
                            var ne, Ie, ge;
                            return c(), h("div", {
                                id: me.value.toISOString().split("T")[0],
                                ref_for: !0,
                                ref: qe => _(qe, ve, j),
                                key: j + ve,
                                role: "gridcell",
                                class: "dp__calendar_item",
                                "aria-selected": me.classData.dp__active_date || me.classData.dp__range_start || me.classData.dp__range_start,
                                "aria-disabled": me.classData.dp__cell_disabled || void 0,
                                "aria-label": (Ie = (ne = B(l)) == null ? void 0 : ne.day) == null ? void 0 : Ie.call(ne, me),
                                tabindex: "0",
                                onClick: Ee(qe => ee(qe, me), ["prevent"]),
                                onKeydown: [Oe(qe => q.$emit("select-date", me), ["enter"]), Oe(qe => q.$emit("handle-space", me), ["space"])],
                                onMouseenter: qe => z(me, ve, j),
                                onMouseleave: qe => V(me)
                            }, [E("div", {
                                class: J(["dp__cell_inner", me.classData])
                            }, [q.$slots.day && H.value(me) ? he(q.$slots, "day", {
                                key: 0,
                                day: +me.text,
                                date: me.value
                            }) : O("", !0), q.$slots.day ? O("", !0) : (c(), h(pe, {
                                key: 1
                            }, [Be(X(me.text), 1)], 64)), me.marker && H.value(me) ? (c(), h(pe, {
                                key: 2
                            }, [q.$slots.marker ? he(q.$slots, "marker", {
                                key: 0,
                                marker: me.marker,
                                day: +me.text,
                                date: me.value
                            }) : (c(), h("div", {
                                key: 1,
                                class: J(G.value(me.marker)),
                                style: Re(me.marker.color ? {
                                    backgroundColor: me.marker.color
                                } : {})
                            }, null, 6))], 64)) : O("", !0), T.value(me.value) ? (c(), h("div", {
                                key: 3,
                                ref_for: !0,
                                ref_key: "activeTooltip",
                                ref: y,
                                class: "dp__marker_tooltip",
                                style: Re(p.value)
                            }, [(ge = me.marker) != null && ge.tooltip ? (c(), h("div", {
                                key: 0,
                                class: "dp__tooltip_content",
                                onClick: ie
                            }, [(c(!0), h(pe, null, ke(me.marker.tooltip, (qe, gt) => (c(), h("div", {
                                key: gt,
                                class: "dp__tooltip_text"
                            }, [q.$slots["marker-tooltip"] ? he(q.$slots, "marker-tooltip", {
                                key: 0,
                                tooltip: qe,
                                day: me.value
                            }) : O("", !0), q.$slots["marker-tooltip"] ? O("", !0) : (c(), h(pe, {
                                key: 1
                            }, [E("div", {
                                class: "dp__tooltip_mark",
                                style: Re(qe.color ? {
                                    backgroundColor: qe.color
                                } : {})
                            }, null, 4), E("div", null, X(qe.text), 1)], 64))]))), 128)), E("div", {
                                class: "dp__arrow_bottom_tp",
                                style: Re(D.value)
                            }, null, 4)])) : O("", !0)], 4)) : O("", !0)], 2)], 40, Rk)
                        }), 128))]))), 128))], 8, Lk)) : O("", !0)]
                    }),
                    _: 3
                }, 8, ["name", "css"])], 64))], 10, Ek)], 2)
            }
        }
    }),
    Zs = e => Array.isArray(e),
    Nk = (e, n, t, a) => {
        const r = A([]),
            {
                modelValue: i,
                calendars: o,
                time: s
            } = Yn(e, n),
            {
                defaultedMultiCalendars: l,
                defaultedStartTime: d
            } = lt(e),
            {
                validateMonthYearInRange: g,
                isDisabled: m,
                isDateRangeAllowed: p,
                checkMinMaxRange: f
            } = Ua(e),
            {
                updateTimeValues: b,
                getSetDateTime: S,
                setTime: C,
                assignStartTime: w,
                validateTime: y,
                disabledTimesConfig: D
            } = Lu(e, s, i, a),
            P = u(() => x => o.value[x] ? o.value[x].month : 0),
            M = u(() => x => o.value[x] ? o.value[x].year : 0),
            R = (x, re, se) => {
                var Se, $e;
                o.value[x] || (o.value[x] = {
                    month: 0,
                    year: 0
                }), o.value[x].month = Gs(re) ? (Se = o.value[x]) == null ? void 0 : Se.month : re, o.value[x].year = Gs(se) ? ($e = o.value[x]) == null ? void 0 : $e.year : se
            },
            $ = () => {
                e.autoApply && n("select-date")
            };
        Ve(i, (x, re) => {
            JSON.stringify(x) !== JSON.stringify(re) && T()
        }), Le(() => {
            e.shadow || (i.value || (v(), d.value && w(d.value)), T(!0), e.focusStartDate && e.startDate && v())
        });
        const Z = u(() => {
                var x;
                return (x = e.flow) != null && x.length && !e.partialFlow ? e.flowStep === e.flow.length : !0
            }),
            G = () => {
                e.autoApply && Z.value && n("auto-apply", e.partialFlow)
            },
            T = (x = !1) => {
                if (i.value) return Array.isArray(i.value) ? (r.value = i.value, N(x)) : H(i.value, x);
                if (l.value.count && x && !e.startDate) return L(ae(), x)
            },
            L = (x, re = !1) => {
                if ((!l.value.count || !l.value.static || re) && R(0, He(x), Ae(x)), l.value.count && (!l.value.solo || !i.value))
                    for (let se = 1; se < l.value.count; se++) {
                        const Se = Ze(ae(), {
                                month: P.value(se - 1),
                                year: M.value(se - 1)
                            }),
                            $e = Fl(Se, {
                                months: 1
                            });
                        o.value[se] = {
                            month: He($e),
                            year: Ae($e)
                        }
                    }
            },
            H = (x, re) => {
                L(x), C("hours", zt(x)), C("minutes", ia(x)), C("seconds", an(x)), l.value.count && re && _()
            },
            z = x => {
                if (l.value.count) {
                    if (l.value.solo) return 0;
                    const re = He(x[0]),
                        se = He(x[1]);
                    return Math.abs(se - re) < l.value.count ? 0 : 1
                }
                return 1
            },
            V = (x, re) => {
                x[1] && e.showLastInRange ? L(x[z(x)], re) : L(x[0], re);
                const se = (Se, $e) => [Se(x[0]), x[1] ? Se(x[1]) : s[$e][1]];
                C("hours", se(zt, "hours")), C("minutes", se(ia, "minutes")), C("seconds", se(an, "seconds"))
            },
            I = (x, re) => {
                if ((e.range || e.weekPicker) && !e.multiDates) return V(x, re);
                if (e.multiDates && re) {
                    const se = x[x.length - 1];
                    return H(se, re)
                }
            },
            N = x => {
                const re = i.value;
                I(re, x), l.value.count && l.value.solo && _()
            },
            U = (x, re) => {
                const se = Ze(ae(), {
                        month: P.value(re),
                        year: M.value(re)
                    }),
                    Se = x < 0 ? jt(se, 1) : nn(se, 1);
                g(He(Se), Ae(Se), x < 0, e.preventMinMaxNavigation) && (R(re, He(Se), Ae(Se)), n("update-month-year", {
                    instance: re,
                    month: He(Se),
                    year: Ae(Se)
                }), l.value.count && !l.value.solo && Q(re), t())
            },
            Q = x => {
                for (let re = x - 1; re >= 0; re--) {
                    const se = nn(Ze(ae(), {
                        month: P.value(re + 1),
                        year: M.value(re + 1)
                    }), 1);
                    R(re, He(se), Ae(se))
                }
                for (let re = x + 1; re <= l.value.count - 1; re++) {
                    const se = jt(Ze(ae(), {
                        month: P.value(re - 1),
                        year: M.value(re - 1)
                    }), 1);
                    R(re, He(se), Ae(se))
                }
            },
            _ = () => {
                if (Array.isArray(i.value) && i.value.length === 2) {
                    const x = ae(ae(i.value[1] ? i.value[1] : jt(i.value[0], 1))),
                        [re, se] = [He(i.value[0]), Ae(i.value[0])],
                        [Se, $e] = [He(i.value[1]), Ae(i.value[1])];
                    (re !== Se || re === Se && se !== $e) && l.value.solo && R(1, He(x), Ae(x))
                } else i.value && !Array.isArray(i.value) && (R(0, He(i.value), Ae(i.value)), L(ae()))
            },
            v = () => {
                e.startDate && (R(0, He(ae(e.startDate)), Ae(ae(e.startDate))), l.value.count && Q(0))
            },
            Y = h1((x, re) => {
                e.monthChangeOnScroll && U(e.monthChangeOnScroll !== "inverse" ? -x.deltaY : x.deltaY, re)
            }, 50),
            W = (x, re, se = !1) => {
                e.monthChangeOnArrows && e.vertical === se && ee(x, re)
            },
            ee = (x, re) => {
                U(x === "right" ? -1 : 1, re)
            },
            ie = x => e.markers.find(re => We(b1(x.value), Qt(ae(re.date), e.timezone))),
            q = (x, re) => {
                switch (e.sixWeeks === !0 ? "append" : e.sixWeeks) {
                    case "prepend":
                        return [!0, !1];
                    case "center":
                        return [x == 0, !0];
                    case "fair":
                        return [x == 0 || re > x, !0];
                    case "append":
                        return [!1, !1];
                    default:
                        return [!1, !1]
                }
            },
            k = (x, re, se, Se) => {
                if (e.sixWeeks && x.length < 6) {
                    const $e = 6 - x.length,
                        tt = (re.getDay() + 7 - Se) % 7,
                        dt = 6 - (se.getDay() + 7 - Se) % 7,
                        [de, Me] = q(tt, dt);
                    for (let Ce = 1; Ce <= $e; Ce++)
                        if (Me ? !!(Ce % 2) == de : de) {
                            const kt = x[0].days[0],
                                Rt = te(ma(kt.value, -7), He(re));
                            x.unshift({
                                days: Rt
                            })
                        } else {
                            const kt = x[x.length - 1],
                                Rt = kt.days[kt.days.length - 1],
                                cn = te(ma(Rt.value, 1), He(re));
                            x.push({
                                days: cn
                            })
                        }
                }
                return x
            },
            te = (x, re) => {
                const se = ae(x),
                    Se = [];
                for (let $e = 0; $e < 7; $e++) {
                    const tt = ma(se, $e),
                        dt = He(tt) !== re;
                    Se.push({
                        text: e.hideOffsetDates && dt ? "" : tt.getDate(),
                        value: tt,
                        current: !dt,
                        classData: {}
                    })
                }
                return Se
            },
            ue = (x, re) => {
                const se = [],
                    Se = new Date(re, x),
                    $e = new Date(re, x + 1, 0),
                    tt = e.weekStart,
                    dt = Na(Se, {
                        weekStartsOn: tt
                    }),
                    de = Me => {
                        const Ce = te(Me, x);
                        if (se.push({
                                days: Ce
                            }), !se[se.length - 1].days.some(kt => We(wt(kt.value), wt($e)))) {
                            const kt = ma(Me, 7);
                            de(kt)
                        }
                    };
                return de(dt), k(se, Se, $e, tt)
            },
            K = x => (i.value = Jn(ae(x.value), e.timezone, e.weekStart), n("date-update", x.value), G()),
            ve = x => {
                const re = ka(ae(x.value), s.hours, s.minutes, Yt());
                n("date-update", re), e.multiDates ? ci(re, i, e.multiDatesLimit) : i.value = re, a(), Dt().then(() => {
                    G()
                })
            },
            me = x => e.noDisabledRange ? ku(r.value[0], x).some(re => m(re)) : !1,
            j = () => {
                r.value = i.value ? i.value.slice() : [], r.value.length === 2 && !(e.fixedStart || e.fixedEnd) && (r.value = [])
            },
            ne = (x, re) => {
                const se = [ae(x.value), ma(ae(x.value), +e.autoRange)];
                p(se) ? (re && Ie(x.value), r.value = se) : n("invalid-date", x.value)
            },
            Ie = x => {
                const re = He(ae(x)),
                    se = Ae(ae(x));
                if (R(0, re, se), l.value.count > 0)
                    for (let Se = 1; Se < l.value.count; Se++) {
                        const $e = _1(Ze(ae(x), {
                            year: P.value(Se - 1),
                            month: M.value(Se - 1)
                        }));
                        R(Se, $e.month, $e.year)
                    }
            },
            ge = x => Array.isArray(i.value) && i.value.length === 2 ? e.fixedStart && (_t(x, i.value[0]) || We(x, i.value[0])) ? [i.value[0], x] : e.fixedEnd && (vt(x, i.value[1]) || We(x, i.value[1])) ? [x, i.value[1]] : (n("invalid-fixed-range", x), i.value) : [],
            qe = x => {
                if (me(x.value) || !f(x.value, i.value, e.fixedStart ? 0 : 1)) return n("invalid-date", x.value);
                r.value = ge(ae(x.value))
            },
            gt = (x, re) => {
                if (j(), e.autoRange) return ne(x, re);
                if (e.fixedStart || e.fixedEnd) return qe(x);
                r.value[0] ? f(ae(x.value), i.value) && !me(x.value) ? vt(ae(x.value), ae(r.value[0])) ? (r.value.unshift(ae(x.value)), n("range-end", r.value[0])) : (r.value[1] = ae(x.value), n("range-end", r.value[1])) : (e.autoApply && n("auto-apply-invalid", x.value), n("invalid-date", x.value)) : (r.value[0] = ae(x.value), n("range-start", r.value[0]))
            },
            Yt = (x = !0) => e.enableSeconds ? Array.isArray(s.seconds) ? x ? s.seconds[0] : s.seconds[1] : s.seconds : 0,
            Ot = x => {
                r.value[x] = ka(r.value[x], s.hours[x], s.minutes[x], Yt(x !== 1))
            },
            ut = () => {
                var x, re;
                r.value[0] && r.value[1] && +((x = r.value) == null ? void 0 : x[0]) > +((re = r.value) == null ? void 0 : re[1]) && (r.value.reverse(), n("range-start", r.value[0]), n("range-end", r.value[1]))
            },
            Xt = () => {
                r.value.length && (r.value[0] && !r.value[1] ? Ot(0) : (Ot(0), Ot(1), a()), ut(), i.value = r.value.slice(), br(r.value, n, e.autoApply, e.modelAuto))
            },
            ua = (x, re = !1) => {
                if (m(x.value) || !x.current && e.hideOffsetDates) return n("invalid-date", x.value);
                if (e.weekPicker) return K(x);
                if (!e.range) return ve(x);
                Zs(s.hours) && Zs(s.minutes) && !e.multiDates && (gt(x, re), Xt())
            },
            qt = (x, re) => {
                var se;
                R(x, re.month, re.year), l.value.count && !l.value.solo && Q(x), n("update-month-year", {
                    instance: x,
                    month: re.month,
                    year: re.year
                }), t(l.value.solo ? x : void 0);
                const Se = (se = e.flow) != null && se.length ? e.flow[e.flowStep] : void 0;
                !re.fromNav && (Se === ea.month || Se === ea.year) && a()
            },
            ft = (x, re) => {
                Du({
                    value: x,
                    modelValue: i,
                    range: e.range,
                    timezone: re ? void 0 : e.timezone
                }), $(), e.multiCalendars && Dt().then(() => T(!0))
            },
            Jt = () => {
                e.range ? i.value && Array.isArray(i.value) && i.value[0] ? i.value = vt(ae(), i.value[0]) ? [ae(), i.value[0]] : [i.value[0], ae()] : i.value = [ae()] : i.value = ae(), $()
            },
            Ia = () => {
                if (Array.isArray(i.value))
                    if (e.multiDates) {
                        const x = ca();
                        i.value[i.value.length - 1] = S(x)
                    } else i.value = i.value.map((x, re) => x && S(x, re));
                else i.value = S(i.value);
                n("time-update")
            },
            ca = () => Array.isArray(i.value) && i.value.length ? i.value[i.value.length - 1] : null;
        return {
            calendars: o,
            modelValue: i,
            month: P,
            year: M,
            time: s,
            disabledTimesConfig: D,
            validateTime: y,
            getCalendarDays: ue,
            getMarker: ie,
            handleScroll: Y,
            handleSwipe: ee,
            handleArrow: W,
            selectDate: ua,
            updateMonthYear: qt,
            presetDate: ft,
            selectCurrentDate: Jt,
            updateTime: (x, re = !0, se = !1) => {
                b(x, re, se, Ia)
            }
        }
    },
    xk = {
        key: 0
    },
    Hk = le({
        __name: "DatePicker",
        props: { ...Zt
        },
        emits: ["tooltip-open", "tooltip-close", "mount", "update:internal-model-value", "update-flow-step", "reset-flow", "auto-apply", "focus-menu", "select-date", "range-start", "range-end", "invalid-fixed-range", "time-update", "am-pm-change", "time-picker-open", "time-picker-close", "recalculate-position", "update-month-year", "auto-apply-invalid", "date-update", "invalid-date"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                {
                    calendars: i,
                    month: o,
                    year: s,
                    modelValue: l,
                    time: d,
                    disabledTimesConfig: g,
                    validateTime: m,
                    getCalendarDays: p,
                    getMarker: f,
                    handleArrow: b,
                    handleScroll: S,
                    handleSwipe: C,
                    selectDate: w,
                    updateMonthYear: y,
                    presetDate: D,
                    selectCurrentDate: P,
                    updateTime: M
                } = Nk(r, a, _, v),
                R = Ha(),
                {
                    setHoverDate: $,
                    getDayClassData: Z,
                    clearHoverDate: G
                } = U1(l, r),
                {
                    defaultedMultiCalendars: T
                } = lt(r),
                L = A([]),
                H = A([]),
                z = A(null),
                V = Lt(R, "calendar"),
                I = Lt(R, "monthYear"),
                N = Lt(R, "timePicker"),
                U = W => {
                    r.shadow || a("mount", W)
                };
            Ve(i, () => {
                r.shadow || setTimeout(() => {
                    a("recalculate-position")
                }, 0)
            }, {
                deep: !0
            });
            const Q = u(() => W => p(o.value(W), s.value(W)).map(ee => ({ ...ee,
                days: ee.days.map(ie => (ie.marker = f(ie), ie.classData = Z(ie), ie))
            })));

            function _(W) {
                var ee;
                W || W === 0 ? (ee = H.value[W]) == null || ee.triggerTransition(o.value(W), s.value(W)) : H.value.forEach((ie, q) => ie.triggerTransition(o.value(q), s.value(q)))
            }

            function v() {
                a("update-flow-step")
            }
            const Y = (W, ee = !1) => {
                w(W, ee), r.spaceConfirm && a("select-date")
            };
            return n({
                clearHoverDate: G,
                presetDate: D,
                selectCurrentDate: P,
                toggleMonthPicker: (W, ee, ie = 0) => {
                    var q;
                    (q = L.value[ie]) == null || q.toggleMonthPicker(W, ee)
                },
                toggleYearPicker: (W, ee, ie = 0) => {
                    var q;
                    (q = L.value[ie]) == null || q.toggleYearPicker(W, ee)
                },
                toggleTimePicker: (W, ee, ie) => {
                    var q;
                    (q = z.value) == null || q.toggleTimePicker(W, ee, ie)
                },
                handleArrow: b,
                updateMonthYear: y,
                getSidebarProps: () => ({
                    modelValue: l,
                    month: o,
                    year: s,
                    time: d,
                    updateTime: M,
                    updateMonthYear: y,
                    selectDate: w,
                    presetDate: D
                })
            }), (W, ee) => (c(), h(pe, null, [De(yr, {
                "multi-calendars": B(T).count
            }, {
                default: _e(({
                    instance: ie,
                    index: q
                }) => [W.disableMonthYearSelect ? O("", !0) : (c(), F(Ik, ze({
                    key: 0,
                    ref: k => {
                        k && (L.value[q] = k)
                    },
                    months: B(fu)(W.formatLocale, W.locale, W.monthNameFormat),
                    years: B(li)(W.yearRange, W.reverseYears),
                    month: B(o)(ie),
                    year: B(s)(ie),
                    instance: ie
                }, W.$props, {
                    onMount: ee[0] || (ee[0] = k => U(B(Ra).header)),
                    onResetFlow: ee[1] || (ee[1] = k => W.$emit("reset-flow")),
                    onUpdateMonthYear: k => B(y)(ie, k),
                    onOverlayClosed: ee[2] || (ee[2] = k => W.$emit("focus-menu"))
                }), Tt({
                    _: 2
                }, [ke(B(I), (k, te) => ({
                    name: k,
                    fn: _e(ue => [he(W.$slots, k, Xe(bt(ue)))])
                }))]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])), De($k, ze({
                    ref: k => {
                        k && (H.value[q] = k)
                    },
                    "mapped-dates": Q.value(ie),
                    month: B(o)(ie),
                    year: B(s)(ie),
                    instance: ie
                }, W.$props, {
                    onSelectDate: k => B(w)(k, ie !== 1),
                    onHandleSpace: k => Y(k, ie !== 1),
                    onSetHoverDate: ee[3] || (ee[3] = k => B($)(k)),
                    onHandleScroll: k => B(S)(k, ie),
                    onHandleSwipe: k => B(C)(k, ie),
                    onMount: ee[4] || (ee[4] = k => U(B(Ra).calendar)),
                    onResetFlow: ee[5] || (ee[5] = k => W.$emit("reset-flow")),
                    onTooltipOpen: ee[6] || (ee[6] = k => W.$emit("tooltip-open", k)),
                    onTooltipClose: ee[7] || (ee[7] = k => W.$emit("tooltip-close", k))
                }), Tt({
                    _: 2
                }, [ke(B(V), (k, te) => ({
                    name: k,
                    fn: _e(ue => [he(W.$slots, k, Xe(bt({ ...ue
                    })))])
                }))]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])]),
                _: 3
            }, 8, ["multi-calendars"]), W.enableTimePicker ? (c(), h("div", xk, [W.$slots["time-picker"] ? he(W.$slots, "time-picker", Xe(ze({
                key: 0
            }, {
                time: B(d),
                updateTime: B(M)
            }))) : (c(), F(Ou, ze({
                key: 1,
                ref_key: "timePickerRef",
                ref: z
            }, W.$props, {
                hours: B(d).hours,
                minutes: B(d).minutes,
                seconds: B(d).seconds,
                "internal-model-value": W.internalModelValue,
                "disabled-times-config": B(g),
                "validate-time": B(m),
                onMount: ee[8] || (ee[8] = ie => U(B(Ra).timePicker)),
                "onUpdate:hours": ee[9] || (ee[9] = ie => B(M)(ie)),
                "onUpdate:minutes": ee[10] || (ee[10] = ie => B(M)(ie, !1)),
                "onUpdate:seconds": ee[11] || (ee[11] = ie => B(M)(ie, !1, !0)),
                onResetFlow: ee[12] || (ee[12] = ie => W.$emit("reset-flow")),
                onOverlayClosed: ee[13] || (ee[13] = ie => W.$emit("time-picker-close")),
                onOverlayOpened: ee[14] || (ee[14] = ie => W.$emit("time-picker-open", ie)),
                onAmPmChange: ee[15] || (ee[15] = ie => W.$emit("am-pm-change", ie))
            }), Tt({
                _: 2
            }, [ke(B(N), (ie, q) => ({
                name: ie,
                fn: _e(k => [he(W.$slots, ie, Xe(bt(k)))])
            }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))])) : O("", !0)], 64))
        }
    }),
    Vk = (e, n) => {
        const t = A(),
            {
                defaultedMultiCalendars: a,
                defaultedConfig: r,
                defaultedHighlight: i
            } = lt(e),
            {
                modelValue: o,
                year: s,
                month: l,
                calendars: d
            } = Yn(e, n),
            {
                isDisabled: g
            } = Ua(e),
            {
                selectYear: m,
                groupedYears: p,
                showYearPicker: f,
                isDisabled: b,
                toggleYearPicker: S,
                handleYearSelect: C,
                handleYear: w
            } = Mu({
                modelValue: o,
                multiCalendars: a,
                highlight: i,
                calendars: d,
                month: l,
                year: s,
                props: e,
                emit: n
            }),
            y = (G, T) => [G, T].map(L => _a(L, "MMMM", {
                locale: e.formatLocale
            })).join("-"),
            D = u(() => G => o.value ? Array.isArray(o.value) ? o.value.some(T => Rs(G, T)) : Rs(o.value, G) : !1),
            P = G => {
                if (e.range) {
                    if (Array.isArray(o.value)) {
                        const T = We(G, o.value[0]) || We(G, o.value[1]);
                        return vr(o.value, t.value, G) && !T
                    }
                    return !1
                }
                return !1
            },
            M = u(() => G => {
                const T = Ze(new Date, {
                    year: s.value(G)
                });
                return l_({
                    start: c_(T),
                    end: u_(T)
                }).map(L => {
                    const H = An(L),
                        z = Es(L),
                        V = g(L),
                        I = P(H),
                        N = typeof i.value == "function" ? i.value({
                            quarter: Is(H),
                            year: Ae(H)
                        }) : !!i.value.quarters.find(U => U.quarter === Is(H) && U.year === Ae(H));
                    return {
                        text: y(H, z),
                        value: H,
                        active: D.value(H),
                        highlighted: N,
                        disabled: V,
                        isBetween: I
                    }
                })
            }),
            R = G => {
                ci(G, o, e.multiDatesLimit), n("auto-apply", !0)
            },
            $ = G => {
                const T = di(o, G, n);
                br(T, n, e.autoApply, e.modelAuto)
            },
            Z = G => {
                o.value = G, n("auto-apply")
            };
        return {
            defaultedConfig: r,
            defaultedMultiCalendars: a,
            groupedYears: p,
            year: s,
            isDisabled: b,
            quarters: M,
            showYearPicker: f,
            modelValue: o,
            setHoverDate: G => {
                t.value = G
            },
            selectYear: m,
            selectQuarter: (G, T, L) => {
                if (!L) return d.value[T].month = He(Es(G)), e.multiDates ? R(G) : e.range ? $(G) : Z(G)
            },
            toggleYearPicker: S,
            handleYearSelect: C,
            handleYear: w
        }
    },
    Uk = {
        class: "dp--quarter-items"
    },
    Yk = ["disabled", "onClick", "onMouseover"],
    qk = le({
        compatConfig: {
            MODE: 3
        },
        __name: "QuarterPicker",
        props: { ...Zt
        },
        emits: ["update:internal-model-value", "reset-flow", "overlay-closed", "auto-apply", "range-start", "range-end"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                i = Ha(),
                o = Lt(i, "yearMode"),
                {
                    defaultedMultiCalendars: s,
                    defaultedConfig: l,
                    groupedYears: d,
                    year: g,
                    isDisabled: m,
                    quarters: p,
                    modelValue: f,
                    showYearPicker: b,
                    setHoverDate: S,
                    selectQuarter: C,
                    toggleYearPicker: w,
                    handleYearSelect: y,
                    handleYear: D
                } = Vk(r, a);
            return n({
                getSidebarProps: () => ({
                    modelValue: f,
                    year: g,
                    selectQuarter: C,
                    handleYearSelect: y,
                    handleYear: D
                })
            }), (P, M) => (c(), F(yr, {
                "multi-calendars": B(s).count,
                stretch: ""
            }, {
                default: _e(({
                    instance: R
                }) => [E("div", {
                    class: "dp-quarter-picker-wrap",
                    style: Re({
                        minHeight: `${B(l).modeHeight}px`
                    })
                }, [E("div", null, [De(Eu, ze(P.$props, {
                    items: B(d)(R),
                    instance: R,
                    "show-year-picker": B(b)[R],
                    year: B(g)(R),
                    "is-disabled": $ => B(m)(R, $),
                    onHandleYear: $ => B(D)(R, $),
                    onYearSelect: $ => B(y)($, R),
                    onToggleYearPicker: $ => B(w)(R, $ ? .flow, $ ? .show)
                }), Tt({
                    _: 2
                }, [ke(B(o), ($, Z) => ({
                    name: $,
                    fn: _e(G => [he(P.$slots, $, Xe(bt(G)))])
                }))]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]), E("div", Uk, [(c(!0), h(pe, null, ke(B(p)(R), ($, Z) => (c(), h("div", {
                    key: Z
                }, [E("button", {
                    type: "button",
                    class: J(["dp--qr-btn", {
                        "dp--qr-btn-active": $.active,
                        "dp--qr-btn-between": $.isBetween,
                        "dp--qr-btn-disabled": $.disabled,
                        "dp--highlighted": $.highlighted
                    }]),
                    disabled: $.disabled,
                    onClick: G => B(C)($.value, R, $.disabled),
                    onMouseover: G => B(S)($.value)
                }, [P.$slots.quarter ? he(P.$slots, "quarter", {
                    key: 0,
                    value: $.value,
                    text: $.text
                }) : (c(), h(pe, {
                    key: 1
                }, [Be(X($.text), 1)], 64))], 42, Yk)]))), 128))])], 4)]),
                _: 3
            }, 8, ["multi-calendars"]))
        }
    }),
    Wk = ["id"],
    Fk = {
        key: 0,
        class: "dp__sidebar_left"
    },
    Gk = {
        key: 1,
        class: "dp--preset-dates"
    },
    jk = ["onClick", "onKeydown"],
    zk = {
        key: 2,
        class: "dp__sidebar_right"
    },
    Qk = {
        key: 3,
        class: "dp__action_extra"
    },
    Xs = le({
        compatConfig: {
            MODE: 3
        },
        __name: "DatepickerMenu",
        props: { ...fr,
            shadow: {
                type: Boolean,
                default: !1
            },
            openOnTop: {
                type: Boolean,
                default: !1
            },
            internalModelValue: {
                type: [Date, Array],
                default: null
            },
            arrMapValues: {
                type: Object,
                default: () => ({})
            },
            noOverlayFocus: {
                type: Boolean,
                default: !1
            }
        },
        emits: ["close-picker", "select-date", "auto-apply", "time-update", "flow-step", "update-month-year", "invalid-select", "update:internal-model-value", "recalculate-position", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "auto-apply-invalid", "date-update", "invalid-date"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                i = u(() => {
                    const {
                        openOnTop: j,
                        ...ne
                    } = r;
                    return { ...ne,
                        flowStep: Z.value,
                        noOverlayFocus: r.noOverlayFocus
                    }
                }),
                {
                    setMenuFocused: o,
                    setShiftKey: s,
                    control: l
                } = Iu(),
                d = Ha(),
                {
                    defaultedTextInput: g,
                    defaultedInline: m,
                    defaultedConfig: p
                } = lt(r),
                f = A(null),
                b = A(0),
                S = A(null),
                C = A(null),
                w = A(!1),
                y = A(null);
            Le(() => {
                if (!r.shadow) {
                    w.value = !0, D(), window.addEventListener("resize", D);
                    const j = ct(S);
                    if (j && !g.value.enabled && !m.value.enabled && (o(!0), z()), j) {
                        const ne = Ie => {
                            p.value.allowPreventDefault && Ie.preventDefault(), wa(Ie, p.value, !0)
                        };
                        j.addEventListener("pointerdown", ne), j.addEventListener("mousedown", ne)
                    }
                }
            }), Nn(() => {
                window.removeEventListener("resize", D)
            });
            const D = () => {
                    const j = ct(C);
                    j && (b.value = j.getBoundingClientRect().width)
                },
                {
                    arrowRight: P,
                    arrowLeft: M,
                    arrowDown: R,
                    arrowUp: $
                } = Pa(),
                {
                    flowStep: Z,
                    updateFlowStep: G,
                    childMount: T,
                    resetFlow: L
                } = Y1(r, a, y),
                H = u(() => r.monthPicker ? ok : r.yearPicker ? sk : r.timePicker ? Ck : r.quarterPicker ? qk : Hk),
                z = () => {
                    const j = ct(S);
                    j && j.focus({
                        preventScroll: !0
                    })
                },
                V = u(() => {
                    var j;
                    return ((j = y.value) == null ? void 0 : j.getSidebarProps()) || {}
                }),
                I = () => {
                    r.openOnTop && a("recalculate-position")
                },
                N = Lt(d, "action"),
                U = u(() => r.monthPicker || r.yearPicker ? Lt(d, "monthYear") : r.timePicker ? Lt(d, "timePicker") : Lt(d, "shared")),
                Q = u(() => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top"),
                _ = u(() => ({
                    dp__menu_disabled: r.disabled,
                    dp__menu_readonly: r.readonly
                })),
                v = u(() => ({
                    dp__menu: !0,
                    dp__menu_index: !m.value.enabled,
                    dp__relative: m.value.enabled,
                    [r.menuClassName]: !!r.menuClassName
                })),
                Y = j => {
                    wa(j, p.value, !0)
                },
                W = () => {
                    r.escClose && a("close-picker")
                },
                ee = j => {
                    if (r.arrowNavigation) {
                        if (j === "up") return $();
                        if (j === "down") return R();
                        if (j === "left") return M();
                        if (j === "right") return P()
                    } else j === "left" || j === "up" ? ue("handleArrow", "left", 0, j === "up") : ue("handleArrow", "right", 0, j === "down")
                },
                ie = j => {
                    s(j.shiftKey), !r.disableMonthYearSelect && j.code === "Tab" && j.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (j.preventDefault(), wa(j, p.value, !0), a("close-picker"))
                },
                q = () => {
                    z(), a("time-picker-close")
                },
                k = j => {
                    var ne, Ie, ge;
                    (ne = y.value) == null || ne.toggleTimePicker(!1, !1), (Ie = y.value) == null || Ie.toggleMonthPicker(!1, !1, j), (ge = y.value) == null || ge.toggleYearPicker(!1, !1, j)
                },
                te = (j, ne = 0) => {
                    var Ie, ge, qe;
                    return j === "month" ? (Ie = y.value) == null ? void 0 : Ie.toggleMonthPicker(!1, !0, ne) : j === "year" ? (ge = y.value) == null ? void 0 : ge.toggleYearPicker(!1, !0, ne) : j === "time" ? (qe = y.value) == null ? void 0 : qe.toggleTimePicker(!0, !1) : k(ne)
                },
                ue = (j, ...ne) => {
                    var Ie, ge;
                    (Ie = y.value) != null && Ie[j] && ((ge = y.value) == null || ge[j](...ne))
                },
                K = () => {
                    ue("selectCurrentDate")
                },
                ve = (j, ne) => {
                    ue("presetDate", j, ne)
                },
                me = () => {
                    ue("clearHoverDate")
                };
            return n({
                updateMonthYear: (j, ne) => {
                    ue("updateMonthYear", j, ne)
                },
                switchView: te
            }), (j, ne) => {
                var Ie;
                return c(), h("div", {
                    id: j.uid ? `dp-menu-${j.uid}` : void 0,
                    ref_key: "dpMenuRef",
                    ref: S,
                    tabindex: "0",
                    role: "dialog",
                    class: J(v.value),
                    onMouseleave: me,
                    onClick: Y,
                    onKeydown: [Oe(W, ["esc"]), ne[18] || (ne[18] = Oe(Ee(ge => ee("left"), ["prevent"]), ["left"])), ne[19] || (ne[19] = Oe(Ee(ge => ee("up"), ["prevent"]), ["up"])), ne[20] || (ne[20] = Oe(Ee(ge => ee("down"), ["prevent"]), ["down"])), ne[21] || (ne[21] = Oe(Ee(ge => ee("right"), ["prevent"]), ["right"])), ie]
                }, [(j.disabled || j.readonly) && B(m).enabled ? (c(), h("div", {
                    key: 0,
                    class: J(_.value)
                }, null, 2)) : O("", !0), !B(m).enabled && !j.teleportCenter ? (c(), h("div", {
                    key: 1,
                    class: J(Q.value)
                }, null, 2)) : O("", !0), E("div", {
                    ref_key: "innerMenuRef",
                    ref: C,
                    class: J({
                        dp__menu_content_wrapper: ((Ie = j.presetDates) == null ? void 0 : Ie.length) || !!j.$slots["left-sidebar"] || !!j.$slots["right-sidebar"]
                    }),
                    style: Re({
                        "--dp-menu-width": `${b.value}px`
                    })
                }, [j.$slots["left-sidebar"] ? (c(), h("div", Fk, [he(j.$slots, "left-sidebar", Xe(bt(V.value)))])) : O("", !0), j.presetDates.length ? (c(), h("div", Gk, [(c(!0), h(pe, null, ke(j.presetDates, (ge, qe) => (c(), h(pe, {
                    key: qe
                }, [ge.slot ? he(j.$slots, ge.slot, {
                    key: 0,
                    presetDate: ve,
                    label: ge.label,
                    value: ge.value
                }) : (c(), h("button", {
                    key: 1,
                    type: "button",
                    style: Re(ge.style || {}),
                    class: "dp__btn dp--preset-range",
                    onClick: Ee(gt => ve(ge.value, ge.noTz), ["prevent"]),
                    onKeydown: [Oe(Ee(gt => ve(ge.value, ge.noTz), ["prevent"]), ["enter"]), Oe(Ee(gt => ve(ge.value, ge.noTz), ["prevent"]), ["space"])]
                }, X(ge.label), 45, jk))], 64))), 128))])) : O("", !0), E("div", {
                    ref_key: "calendarWrapperRef",
                    ref: f,
                    class: "dp__instance_calendar",
                    role: "document"
                }, [(c(), F(sn(H.value), ze({
                    ref_key: "dynCmpRef",
                    ref: y
                }, i.value, {
                    "flow-step": B(Z),
                    onMount: B(T),
                    onUpdateFlowStep: B(G),
                    onResetFlow: B(L),
                    onFocusMenu: z,
                    onSelectDate: ne[0] || (ne[0] = ge => j.$emit("select-date")),
                    onDateUpdate: ne[1] || (ne[1] = ge => j.$emit("date-update", ge)),
                    onTooltipOpen: ne[2] || (ne[2] = ge => j.$emit("tooltip-open", ge)),
                    onTooltipClose: ne[3] || (ne[3] = ge => j.$emit("tooltip-close", ge)),
                    onAutoApply: ne[4] || (ne[4] = ge => j.$emit("auto-apply", ge)),
                    onRangeStart: ne[5] || (ne[5] = ge => j.$emit("range-start", ge)),
                    onRangeEnd: ne[6] || (ne[6] = ge => j.$emit("range-end", ge)),
                    onInvalidFixedRange: ne[7] || (ne[7] = ge => j.$emit("invalid-fixed-range", ge)),
                    onTimeUpdate: ne[8] || (ne[8] = ge => j.$emit("time-update")),
                    onAmPmChange: ne[9] || (ne[9] = ge => j.$emit("am-pm-change", ge)),
                    onTimePickerOpen: ne[10] || (ne[10] = ge => j.$emit("time-picker-open", ge)),
                    onTimePickerClose: q,
                    onRecalculatePosition: I,
                    onUpdateMonthYear: ne[11] || (ne[11] = ge => j.$emit("update-month-year", ge)),
                    onAutoApplyInvalid: ne[12] || (ne[12] = ge => j.$emit("auto-apply-invalid", ge)),
                    onInvalidDate: ne[13] || (ne[13] = ge => j.$emit("invalid-date", ge)),
                    "onUpdate:internalModelValue": ne[14] || (ne[14] = ge => j.$emit("update:internal-model-value", ge))
                }), Tt({
                    _: 2
                }, [ke(U.value, (ge, qe) => ({
                    name: ge,
                    fn: _e(gt => [he(j.$slots, ge, Xe(bt({ ...gt
                    })))])
                }))]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))], 512), j.$slots["right-sidebar"] ? (c(), h("div", zk, [he(j.$slots, "right-sidebar", Xe(bt(V.value)))])) : O("", !0), j.$slots["action-extra"] ? (c(), h("div", Qk, [j.$slots["action-extra"] ? he(j.$slots, "action-extra", {
                    key: 0,
                    selectCurrentDate: K
                }) : O("", !0)])) : O("", !0)], 6), !j.autoApply || B(p).keepActionRow ? (c(), F(K1, ze({
                    key: 2,
                    "menu-mount": w.value
                }, i.value, {
                    "calendar-width": b.value,
                    onClosePicker: ne[15] || (ne[15] = ge => j.$emit("close-picker")),
                    onSelectDate: ne[16] || (ne[16] = ge => j.$emit("select-date")),
                    onInvalidSelect: ne[17] || (ne[17] = ge => j.$emit("invalid-select")),
                    onSelectNow: K
                }), Tt({
                    _: 2
                }, [ke(B(N), (ge, qe) => ({
                    name: ge,
                    fn: _e(gt => [he(j.$slots, ge, Xe(bt({ ...gt
                    })))])
                }))]), 1040, ["menu-mount", "calendar-width"])) : O("", !0)], 42, Wk)
            }
        }
    }),
    Kk = typeof window < "u" ? window : void 0,
    Xr = () => {},
    Zk = e => ol() ? (il(e), !0) : !1,
    Xk = (e, n, t, a) => {
        if (!e) return Xr;
        let r = Xr;
        const i = Ve(() => B(e), s => {
                r(), s && (s.addEventListener(n, t, a), r = () => {
                    s.removeEventListener(n, t, a), r = Xr
                })
            }, {
                immediate: !0,
                flush: "post"
            }),
            o = () => {
                i(), r()
            };
        return Zk(o), o
    },
    Jk = (e, n, t, a = {}) => {
        const {
            window: r = Kk,
            event: i = "pointerdown"
        } = a;
        return r ? Xk(r, i, o => {
            const s = ct(e),
                l = ct(n);
            !s || !l || s === o.target || o.composedPath().includes(s) || o.composedPath().includes(l) || t(o)
        }, {
            passive: !0
        }) : void 0
    },
    eS = le({
        compatConfig: {
            MODE: 3
        },
        __name: "VueDatePicker",
        props: { ...fr
        },
        emits: ["update:model-value", "update:model-timezone-value", "text-submit", "closed", "cleared", "open", "focus", "blur", "internal-model-change", "recalculate-position", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "date-update", "invalid-date"],
        setup(e, {
            expose: n,
            emit: t
        }) {
            const a = t,
                r = e,
                i = Ha(),
                o = A(!1),
                s = er(r, "modelValue"),
                l = er(r, "timezone"),
                d = A(null),
                g = A(null),
                m = A(null),
                p = A(!1),
                f = A(null),
                b = A(!1),
                S = A(!1),
                {
                    setMenuFocused: C,
                    setShiftKey: w
                } = Iu(),
                {
                    clearArrowNav: y
                } = Pa(),
                {
                    mapDatesArrToMap: D,
                    validateDate: P,
                    isValidTime: M
                } = Ua(r),
                {
                    defaultedTransitions: R,
                    defaultedTextInput: $,
                    defaultedInline: Z,
                    defaultedConfig: G
                } = lt(r),
                {
                    menuTransition: T,
                    showTransition: L
                } = Un(R);
            Le(() => {
                ee(r.modelValue), Dt().then(() => {
                    if (!Z.value.enabled) {
                        const de = _(f.value);
                        de ? .addEventListener("scroll", j), window ? .addEventListener("resize", ne)
                    }
                }), Z.value.enabled && (o.value = !0), window ? .addEventListener("keyup", Ie), window ? .addEventListener("keydown", ge)
            });
            const H = u(() => D());
            Nn(() => {
                if (!Z.value.enabled) {
                    const de = _(f.value);
                    de ? .removeEventListener("scroll", j), window ? .removeEventListener("resize", ne)
                }
                window ? .removeEventListener("keyup", Ie), window ? .removeEventListener("keydown", ge)
            });
            const z = Lt(i, "all", r.presetDates),
                V = Lt(i, "input");
            Ve([s, l], () => {
                ee(s.value)
            }, {
                deep: !0
            });
            const {
                openOnTop: I,
                menuStyle: N,
                xCorrect: U,
                setMenuPosition: Q,
                getScrollableParent: _,
                shadowRender: v
            } = x1({
                menuRef: d,
                menuRefInner: g,
                inputRef: m,
                pickerWrapperRef: f,
                inline: Z,
                emit: a,
                props: r,
                slots: i
            }), {
                inputValue: Y,
                internalModelValue: W,
                parseExternalModelValue: ee,
                emitModelValue: ie,
                formatInputValue: q,
                checkBeforeEmit: k
            } = $1(a, r, p), te = u(() => ({
                dp__main: !0,
                dp__theme_dark: r.dark,
                dp__theme_light: !r.dark,
                dp__flex_display: Z.value.enabled,
                dp__flex_display_with_input: Z.value.input
            })), ue = u(() => r.dark ? "dp__theme_dark" : "dp__theme_light"), K = u(() => ({
                to: typeof r.teleport == "boolean" ? "body" : r.teleport,
                disabled: !r.teleport || Z.value.enabled
            })), ve = u(() => ({
                class: "dp__outer_menu_wrap"
            })), me = u(() => Z.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker)), j = () => {
                o.value && (G.value.closeOnScroll ? ft() : Q())
            }, ne = () => {
                o.value && Q()
            }, Ie = de => {
                de.key === "Tab" && !Z.value.enabled && !r.teleport && G.value.tabOutClosesMenu && (f.value.contains(document.activeElement) || ft()), S.value = de.shiftKey
            }, ge = de => {
                S.value = de.shiftKey
            }, qe = () => {
                !r.disabled && !r.readonly && (v(Xs, r), Q(!1), o.value = !0, o.value && a("open"), o.value || qt(), ee(r.modelValue))
            }, gt = () => {
                var de;
                Y.value = "", qt(), (de = m.value) == null || de.setParsedDate(null), a("update:model-value", null), a("update:model-timezone-value", null), a("cleared"), G.value.closeOnClearValue && ft()
            }, Yt = () => {
                const de = W.value;
                return !de || !Array.isArray(de) && P(de) ? !0 : Array.isArray(de) ? r.multiDates || de.length === 2 && P(de[0]) && P(de[1]) ? !0 : r.partialRange && !r.timePicker ? P(de[0]) : !1 : !1
            }, Ot = () => {
                k() && Yt() ? (ie(), ft()) : a("invalid-select", W.value)
            }, ut = de => {
                Xt(), ie(), G.value.closeOnAutoApply && !de && ft()
            }, Xt = () => {
                m.value && $.value.enabled && m.value.setParsedDate(W.value)
            }, ua = (de = !1) => {
                r.autoApply && M(W.value) && Yt() && (r.range && Array.isArray(W.value) ? (r.partialRange || W.value.length === 2) && ut(de) : ut(de))
            }, qt = () => {
                $.value.enabled || (W.value = null)
            }, ft = () => {
                Z.value.enabled || (o.value && (o.value = !1, U.value = !1, C(!1), w(!1), y(), a("closed"), Y.value && ee(s.value)), qt(), a("blur"))
            }, Jt = (de, Me, Ce = !1) => {
                if (!de) {
                    W.value = null;
                    return
                }
                const kt = Array.isArray(de) ? !de.some(cn => !P(cn)) : P(de),
                    Rt = M(de);
                kt && Rt && (W.value = de, Me && (b.value = Ce, Ot(), a("text-submit")))
            }, Ia = () => {
                r.autoApply && M(W.value) && ie(), Xt()
            }, ca = () => o.value ? ft() : qe(), x = de => {
                W.value = de
            }, re = () => {
                $.value.enabled && (p.value = !0, q()), a("focus")
            }, se = () => {
                if ($.value.enabled && (p.value = !1, ee(r.modelValue), b.value)) {
                    const de = v1(f.value, S.value);
                    de ? .focus()
                }
                a("blur")
            }, Se = de => {
                g.value && g.value.updateMonthYear(0, {
                    month: Fs(de.month),
                    year: Fs(de.year)
                })
            }, $e = de => {
                ee(de ? ? r.modelValue)
            }, tt = (de, Me) => {
                var Ce;
                (Ce = g.value) == null || Ce.switchView(de, Me)
            }, dt = de => G.value.onClickOutside ? G.value.onClickOutside(de) : ft();
            return Jk(d, m, () => dt(Yt)), n({
                closeMenu: ft,
                selectDate: Ot,
                clearValue: gt,
                openMenu: qe,
                onScroll: j,
                formatInputValue: q,
                updateInternalModelValue: x,
                setMonthYear: Se,
                parseModel: $e,
                switchView: tt,
                toggleMenu: ca
            }), (de, Me) => (c(), h("div", {
                ref_key: "pickerWrapperRef",
                ref: f,
                class: J(te.value),
                "data-datepicker-instance": ""
            }, [De(G1, ze({
                ref_key: "inputRef",
                ref: m,
                "input-value": B(Y),
                "onUpdate:inputValue": Me[0] || (Me[0] = Ce => yi(Y) ? Y.value = Ce : null),
                "is-menu-open": o.value
            }, de.$props, {
                onClear: gt,
                onOpen: qe,
                onSetInputDate: Jt,
                onSetEmptyDate: B(ie),
                onSelectDate: Ot,
                onToggle: ca,
                onClose: ft,
                onFocus: re,
                onBlur: se,
                onRealBlur: Me[1] || (Me[1] = Ce => p.value = !1)
            }), Tt({
                _: 2
            }, [ke(B(V), (Ce, kt) => ({
                name: Ce,
                fn: _e(Rt => [he(de.$slots, Ce, Xe(bt(Rt)))])
            }))]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]), De(Uu, Xe(bt(K.value)), {
                default: _e(() => [De(Mt, {
                    name: B(T)(B(I)),
                    css: B(L) && !B(Z).enabled
                }, {
                    default: _e(() => [o.value ? (c(), h("div", ze({
                        key: 0,
                        ref_key: "dpWrapMenuRef",
                        ref: d
                    }, ve.value, {
                        class: {
                            "dp--menu-wrapper": !B(Z).enabled
                        },
                        style: B(Z).enabled ? void 0 : B(N)
                    }), [De(Xs, ze({
                        ref_key: "dpMenuRef",
                        ref: g
                    }, de.$props, {
                        "internal-model-value": B(W),
                        "onUpdate:internalModelValue": Me[2] || (Me[2] = Ce => yi(W) ? W.value = Ce : null),
                        class: {
                            [ue.value]: !0,
                            "dp--menu-wrapper": de.teleport
                        },
                        "open-on-top": B(I),
                        "arr-map-values": H.value,
                        "no-overlay-focus": me.value,
                        onClosePicker: ft,
                        onSelectDate: Ot,
                        onAutoApply: ua,
                        onTimeUpdate: Ia,
                        onFlowStep: Me[3] || (Me[3] = Ce => de.$emit("flow-step", Ce)),
                        onUpdateMonthYear: Me[4] || (Me[4] = Ce => de.$emit("update-month-year", Ce)),
                        onInvalidSelect: Me[5] || (Me[5] = Ce => de.$emit("invalid-select", B(W))),
                        onAutoApplyInvalid: Me[6] || (Me[6] = Ce => de.$emit("invalid-select", Ce)),
                        onInvalidFixedRange: Me[7] || (Me[7] = Ce => de.$emit("invalid-fixed-range", Ce)),
                        onRecalculatePosition: B(Q),
                        onTooltipOpen: Me[8] || (Me[8] = Ce => de.$emit("tooltip-open", Ce)),
                        onTooltipClose: Me[9] || (Me[9] = Ce => de.$emit("tooltip-close", Ce)),
                        onTimePickerOpen: Me[10] || (Me[10] = Ce => de.$emit("time-picker-open", Ce)),
                        onTimePickerClose: Me[11] || (Me[11] = Ce => de.$emit("time-picker-close", Ce)),
                        onAmPmChange: Me[12] || (Me[12] = Ce => de.$emit("am-pm-change", Ce)),
                        onRangeStart: Me[13] || (Me[13] = Ce => de.$emit("range-start", Ce)),
                        onRangeEnd: Me[14] || (Me[14] = Ce => de.$emit("range-end", Ce)),
                        onDateUpdate: Me[15] || (Me[15] = Ce => de.$emit("date-update", Ce)),
                        onInvalidDate: Me[16] || (Me[16] = Ce => de.$emit("invalid-date", Ce))
                    }), Tt({
                        _: 2
                    }, [ke(B(z), (Ce, kt) => ({
                        name: Ce,
                        fn: _e(Rt => [he(de.$slots, Ce, Xe(bt({ ...Rt
                        })))])
                    }))]), 1040, ["internal-model-value", "class", "open-on-top", "arr-map-values", "no-overlay-focus", "onRecalculatePosition"])], 16)) : O("", !0)]),
                    _: 3
                }, 8, ["name", "css"])]),
                _: 3
            }, 16)], 2))
        }
    }),
    mi = (() => {
        const e = eS;
        return e.install = n => {
            n.component("Vue3DatePicker", e)
        }, e
    })(),
    tS = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: mi
    }, Symbol.toStringTag, {
        value: "Module"
    }));
Object.entries(tS).forEach(([e, n]) => {
    e !== "default" && (mi[e] = n)
});
const aS = {
        props: {
            month: {
                type: Number,
                default: 0
            },
            year: {
                type: Number,
                default: 0
            },
            customProps: {
                type: Object,
                default: null
            }
        },
        emits: ["update-month-year"],
        computed: {
            getLanguage() {
                return this.customProps.language === "br" ? "pt-BR" : this.customProps.language
            },
            calendarTitle() {
                return new Date(this.year, this.month).toLocaleDateString(this.getLanguage, {
                    year: "numeric",
                    month: "long"
                })
            }
        },
        methods: {
            onNextClick() {
                let e = this.month,
                    n = this.year;
                this.month === 11 ? (e = 0, n = this.year + 1) : e += 1, this.updateDate(e, n)
            },
            onPreviousClick() {
                let e = this.month,
                    n = this.year;
                this.month === 0 ? (e = 11, n = this.year - 1) : e -= 1, this.updateDate(e, n)
            },
            updateDate(e, n) {
                this.$emit("update-month-year", {
                    instance: 0,
                    month: e,
                    year: n
                })
            }
        }
    },
    Au = e => (At("data-v-707c7e3f"), e = e(), Bt(), e),
    nS = {
        class: "date-picker-header"
    },
    rS = Au(() => E("div", {
        class: "date-picker-header__arrow"
    }, [E("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M12.5 5L7.5 10L12.5 15",
        stroke: "black",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })])], -1)),
    oS = [rS],
    iS = Au(() => E("div", {
        class: "date-picker-header__arrow date-picker-header__arrow--next"
    }, [E("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M12.5 5L7.5 10L12.5 15",
        stroke: "black",
        "stroke-width": "1.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })])], -1)),
    sS = [iS];

function lS(e, n, t, a, r, i) {
    return c(), h("div", nS, [E("button", {
        class: "date-picker-header__button",
        onClick: n[0] || (n[0] = (...o) => i.onPreviousClick && i.onPreviousClick(...o))
    }, oS), Be(" " + X(i.calendarTitle) + " ", 1), E("button", {
        class: "date-picker-header__button",
        onClick: n[1] || (n[1] = (...o) => i.onNextClick && i.onNextClick(...o))
    }, sS)])
}
const uS = oe(aS, [
        ["render", lS],
        ["__scopeId", "data-v-707c7e3f"]
    ]),
    cS = le({
        components: {
            ModalLayout: ln,
            DatePicker: mi
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            },
            language: {
                type: String,
                default: "en"
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e) {
            const {
                isStoreTypeZyro: n,
                products: t,
                selectedBookingProductId: a,
                shoppingCartItems: r,
                setShoppingCartOpen: i,
                setShoppingCartItems: o,
                setSelectedBookingId: s
            } = Vt(), {
                openEcommerceModal: l
            } = xt(), {
                initiateCheckout: d
            } = Ja(), g = u(() => uS);
            return {
                initiateCheckout: d,
                openEcommerceModal: l,
                datePickerHeader: g,
                isStoreTypeZyro: n,
                products: t,
                selectedBookingProductId: a,
                shoppingCartItems: r,
                setShoppingCartOpen: i,
                setShoppingCartItems: o,
                setSelectedBookingId: s
            }
        },
        data() {
            return {
                isTimeSelected: !1,
                selectedTimeSlot: null,
                selectedDate: new Date,
                timeSlots: [],
                isSlotsLoading: !1,
                isCalendarLoading: !1,
                isCheckoutLoading: !1,
                disabledDates: []
            }
        },
        computed: {
            isModalEnabled() {
                return this.isStoreTypeZyro && !!this.selectedBookingProductId
            },
            selectedBookingProduct() {
                return this.products ? .find(e => e.id === this.selectedBookingProductId)
            },
            bookingEvent() {
                return this.selectedBookingProduct ? .variants[0].booking_event
            },
            title() {
                return this.selectedBookingProduct ? .title
            },
            location() {
                return this.bookingEvent ? .location
            },
            duration() {
                return this.bookingEvent ? .length || null
            },
            durationUnit() {
                return this.bookingEvent ? .length_unit
            },
            aggregatedDuration() {
                const e = this.durationUnit === lo ? this.duration / 1e3 / 60 / 60 : this.duration / 1e3 / 60,
                    n = this.durationUnit === lo ? this.translations.hourShort : this.translations.minuteShort;
                return `${e} ${n}`
            },
            eventStartDate() {
                return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null
            },
            eventEndDate() {
                if (!this.selectedTimeSlot) return null;
                const n = this.eventStartDate.getTime() + this.duration;
                return new Date(n)
            },
            calculatedTime() {
                if (!this.selectedTimeSlot) return "--:--";
                const e = this.getVisibleDate(this.eventStartDate),
                    n = this.getVisibleDate(this.eventEndDate);
                return `${e} - ${n}`
            },
            dayNames() {
                const e = [],
                    n = new Date;
                n.setDate(n.getDate() - n.getDay());
                for (let t = 0; t < 7; t += 1) n.setDate(n.getDate() + 1), e.push(new Date(n).toLocaleDateString(this.getLanguage, {
                    weekday: "short"
                }));
                return e
            },
            formattedSelectedDate() {
                const e = this.selectedDate ? .toLocaleDateString(this.language);
                if (this.eventStartDate ? .toDateString() !== this.eventEndDate ? .toDateString()) {
                    const n = this.eventEndDate.toLocaleDateString(this.language);
                    return `${e} - ${n}`
                }
                return e
            },
            selectedMonthAndWeekday() {
                if (!this.selectedDate) return null;
                const e = this.selectedDate ? .toLocaleDateString(this.getLanguage, {
                    month: "long",
                    day: "numeric"
                });
                return `${this.selectedDate?.toLocaleDateString(this.getLanguage,{weekday:"long"})}, ${e}`
            },
            getLanguage() {
                return this.language === "br" ? "pt-BR" : this.language
            }
        },
        watch: {
            async selectedDate() {
                this.selectedTimeSlot = null, this.isTimeSelected = !1, await this.loadTimeSlots()
            }
        },
        async mounted() {
            this.isModalEnabled && this.setDefaultData()
        },
        methods: {
            closeEcommerceModal() {
                this.setSelectedBookingId(null), this.$refs.modal.handleCloseModalAction()
            },
            async setDefaultData() {
                if (await this.loadAvailability(), this.disabledDates.some(e => e.toDateString() === this.selectedDate.toDateString())) {
                    const n = this.getAllDaysInCurrentMonth().filter(t => !this.disabledDates.some(a => a.toDateString() === t.toDateString())).sort((t, a) => new Date(t.date) - new Date(a.date));
                    this.selectedDate = n.shift()
                }
                await this.loadTimeSlots()
            },
            async handleSubmit() {
                if ($a() || this.isInPreviewMode) {
                    this.openEcommerceModal("EcommerceMessageButtonDisabled");
                    return
                }
                const e = { ...this.selectedBookingProduct
                    },
                    {
                        timeZone: n
                    } = Intl.DateTimeFormat().resolvedOptions();
                e.variants[0].booking_event = { ...e.variants[0].booking_event,
                    time_slot: this.selectedTimeSlot,
                    time_zone: n,
                    length: e.variants[0].booking_event.length,
                    length_unit: e.variants[0].booking_event.length_unit,
                    date: this.selectedDate
                }, this.isCartVisible ? (this.isCheckoutLoading = !0, this.setShoppingCartItems([...this.shoppingCartItems, e]), this.setShoppingCartOpen(!0), this.closeEcommerceModal()) : await this.initiateCheckout([e]).then(() => {
                    this.isCheckoutLoading = !1, this.closeEcommerceModal()
                })
            },
            selectTimeSlot(e) {
                this.isTimeSelected = !0, this.selectedTimeSlot = e
            },
            async loadTimeSlots() {
                this.isSlotsLoading = !0;
                const e = new Intl.DateTimeFormat("lt").format(this.selectedDate);
                this.timeSlots = await Qd(this.bookingEvent.id, e).then(n => (this.isSlotsLoading = !1, n))
            },
            async loadAvailability({
                data: e = {}
            } = {}) {
                this.isCalendarLoading = !0;
                const n = Object.keys(e).length ? new Date(e.year, e.month) : this.selectedDate,
                    t = new Date(n.getFullYear(), n.getMonth() + 1, 0);
                this.disabledDates = await Kd({
                    bookingId: this.bookingEvent.id,
                    fromDate: new Intl.DateTimeFormat("lt").format(n),
                    toDate: new Intl.DateTimeFormat("lt").format(t)
                }).then(a => (this.isCalendarLoading = !1, a.map(r => {
                    const i = r.split("-");
                    return new Date(i[0], i[1] - 1, i[2])
                })))
            },
            getAllDaysInCurrentMonth() {
                const e = new Date().getMonth(),
                    n = new Date(new Date().getFullYear(), e, new Date().getDate()),
                    t = [];
                for (; n.getMonth() === e;) t.push(new Date(n)), n.setDate(n.getDate() + 1);
                return t
            },
            getVisibleDate(e) {
                return e.toLocaleTimeString(this.language, {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }
        }
    }),
    dS = {
        class: "ecommerce-booking-modal"
    },
    mS = {
        class: "ecommerce-booking-modal__content"
    },
    gS = {
        class: "ecommerce-booking-modal__info"
    },
    pS = {
        class: "ecommerce-booking-modal__title"
    },
    vS = {
        class: "ecommerce-booking-modal__icons"
    },
    hS = {
        class: "ecommerce-booking-modal__text-wrapper"
    },
    fS = E("div", {
        class: "ecommerce-booking-modal__icon"
    }, [E("svg", {
        width: "16",
        height: "18",
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
        fill: "#474B4F"
    })])], -1),
    yS = {
        class: "ecommerce-booking-modal__text"
    },
    bS = {
        class: "ecommerce-booking-modal__text-wrapper"
    },
    _S = E("div", {
        class: "ecommerce-booking-modal__icon"
    }, [E("svg", {
        width: "18",
        height: "18",
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
        fill: "#474B4F"
    })])], -1),
    wS = {
        class: "ecommerce-booking-modal__text"
    },
    kS = {
        class: "ecommerce-booking-modal__text-wrapper"
    },
    SS = E("div", {
        class: "ecommerce-booking-modal__icon"
    }, [E("svg", {
        width: "12",
        height: "18",
        viewBox: "0 0 12 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
        fill: "#474B4F"
    })])], -1),
    CS = {
        class: "ecommerce-booking-modal__text"
    },
    TS = {
        class: "ecommerce-booking-modal__availability"
    },
    PS = {
        class: "ecommerce-booking-modal__time-title"
    },
    IS = {
        class: "ecommerce-booking-modal__calendar-wrapper"
    },
    ES = {
        class: "ecommerce-booking-modal__time-wrapper"
    },
    DS = {
        class: "ecommerce-booking-modal__selected-day"
    },
    MS = {
        class: "ecommerce-booking-modal__time-slot-wrapper"
    },
    OS = {
        key: 0,
        class: "ecommerce-booking-modal__time-slot-loader"
    },
    LS = ["onClick"],
    AS = {
        class: "ecommerce-booking-modal__buttons"
    },
    BS = ["disabled"];

function RS(e, n, t, a, r, i) {
    const o = Te("DatePicker"),
        s = Te("ModalLayout");
    return e.isModalEnabled ? (c(), F(s, {
        key: 0,
        ref: "modal",
        padding: "0",
        "max-width": "1048px",
        "mobile-height": "100%",
        width: "100vw",
        "background-color": "transparent"
    }, {
        default: _e(() => [E("div", dS, [E("div", mS, [E("div", gS, [E("p", pS, X(e.title), 1), E("div", vS, [E("div", hS, [fS, E("p", yS, X(e.formattedSelectedDate), 1)]), E("div", bS, [_S, E("p", wS, X(e.calculatedTime) + " (" + X(e.aggregatedDuration) + ") ", 1)])]), E("div", kS, [SS, E("p", CS, X(e.location), 1)])]), E("div", TS, [E("p", PS, X(e.translations.selectDateAndTime), 1), E("div", IS, [De(o, {
            modelValue: e.selectedDate,
            "onUpdate:modelValue": n[0] || (n[0] = l => e.selectedDate = l),
            inline: "",
            "hide-offset-dates": "",
            "auto-apply": "",
            class: J(["ecommerce-booking-modal-calendar", {
                "ecommerce-booking-modal-calendar--loading": e.isCalendarLoading
            }]),
            "disabled-dates": e.disabledDates,
            "min-date": new Date,
            locale: e.getLanguage,
            "no-swipe": "",
            "month-change-on-scroll": !1,
            "enable-time-picker": !1,
            "custom-props": {
                language: e.getLanguage
            },
            "month-year-component": e.datePickerHeader,
            onUpdateMonthYear: n[1] || (n[1] = l => e.loadAvailability({
                data: l
            }))
        }, {
            "calendar-header": _e(({
                index: l
            }) => [E("div", null, X(e.dayNames[l]), 1)]),
            _: 1
        }, 8, ["modelValue", "class", "disabled-dates", "min-date", "locale", "custom-props", "month-year-component"]), E("div", ES, [E("div", null, [E("p", DS, X(e.selectedMonthAndWeekday), 1)]), E("div", MS, [e.isSlotsLoading ? (c(), h("div", OS)) : (c(!0), h(pe, {
            key: 1
        }, ke(e.timeSlots, (l, d) => (c(), h("button", {
            key: `time-${d}`,
            class: J(["ecommerce-booking-modal__time-slot", {
                "ecommerce-booking-modal__time-slot--active": e.selectedTimeSlot === l
            }]),
            onClick: g => e.selectTimeSlot(l)
        }, X(e.getVisibleDate(new Date(l))), 11, LS))), 128))])])])])]), E("div", AS, [E("button", {
            class: "ecommerce-booking-modal__button",
            onClick: n[2] || (n[2] = (...l) => e.closeEcommerceModal && e.closeEcommerceModal(...l))
        }, X(e.translations.cancel), 1), E("button", {
            class: J(["ecommerce-booking-modal__button ecommerce-booking-modal__button--save", {
                loading: e.isCheckoutLoading
            }]),
            disabled: !e.isTimeSelected,
            onClick: n[3] || (n[3] = (...l) => e.handleSubmit && e.handleSubmit(...l))
        }, X(e.translations.book), 11, BS)])])]),
        _: 1
    }, 512)) : O("", !0)
}
const $S = oe(cS, [
        ["render", RS]
    ]),
    NS = le({
        name: "EcommerceModalContent",
        props: {
            title: {
                type: String,
                required: !0
            },
            text: {
                type: String,
                required: !0
            },
            buttonText: {
                type: String,
                required: !0
            },
            qaSelector: {
                type: String,
                default: "success"
            }
        },
        emits: ["handle-close"]
    }),
    xS = {
        class: "payment-info"
    },
    HS = {
        class: "payment-info__content"
    },
    VS = {
        class: "payment-info__title"
    },
    US = {
        class: "payment-info__text body-large"
    };

function YS(e, n, t, a, r, i) {
    const o = Ge("qa");
    return ce((c(), h("div", xS, [E("div", HS, [E("h5", VS, X(e.title), 1), E("p", US, X(e.text), 1), E("button", {
        class: "payment-info__button",
        type: "primary",
        onClick: n[0] || (n[0] = s => e.$emit("handle-close"))
    }, X(e.buttonText), 1)])])), [
        [o, `ecommerce-modal-checkout-${e.qaSelector}`]
    ])
}
const _r = oe(NS, [
        ["render", YS],
        ["__scopeId", "data-v-98b20e5c"]
    ]),
    qS = le({
        components: {
            ModalLayout: ln,
            ModalContent: _r
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        }
    });

function WS(e, n, t, a, r, i) {
    const o = Te("ModalContent"),
        s = Te("ModalLayout");
    return c(), F(s, {
        ref: "modal"
    }, {
        default: _e(() => [De(o, {
            "qa-selector": "booking-unavailable",
            title: e.translations.checkoutModalBookingUnavailable,
            text: e.translations.checkoutModalChooseDifferentTime,
            "button-text": e.translations.gotIt,
            onHandleClose: n[0] || (n[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const FS = oe(qS, [
        ["render", WS]
    ]),
    GS = le({
        components: {
            ModalLayout: ln,
            ModalContent: _r
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        }
    });

function jS(e, n, t, a, r, i) {
    const o = Te("ModalContent"),
        s = Te("ModalLayout");
    return c(), F(s, {
        ref: "modal"
    }, {
        default: _e(() => [De(o, {
            "qa-selector": "failed",
            title: e.translations.checkoutModalCantAcceptOrders,
            text: e.translations.checkoutModalPleaseContact,
            "button-text": e.translations.close,
            onHandleClose: n[0] || (n[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const zS = oe(GS, [
        ["render", jS]
    ]),
    QS = le({
        __name: "EcommerceCheckoutSuccess",
        props: {
            translations: {
                default: () => ({})
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    isEcommerceStoreCreated: a,
                    setShoppingCartItems: r
                } = Vt(),
                i = A({
                    title: t.translations.checkoutModalThanksForOrder,
                    text: t.translations.checkoutModalOrderReceived,
                    buttonText: t.translations.gotIt,
                    modalType: "success-order"
                }),
                o = A(null);
            Le(() => {
                r([]);
                const d = new URLSearchParams(window.location.search).get("product");
                d === Ht ? i.value = {
                    title: t.translations.checkoutModalThanksForOrder,
                    text: t.translations.checkoutModalSuccessfullyBooked,
                    buttonText: t.translations.gotIt,
                    modalType: "success-orderbooking"
                } : d === so && (i.value = {
                    title: t.translations.checkoutModalThanksForDonation,
                    text: t.translations.checkoutModalDonationReceived,
                    buttonText: t.translations.gotIt,
                    modalType: "success-orderdonation"
                })
            });
            const s = {
                props: t,
                isEcommerceStoreCreated: a,
                setShoppingCartItems: r,
                modalContent: i,
                modalRef: o,
                ModalContent: _r,
                ModalLayout: ln
            };
            return Object.defineProperty(s, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), s
        }
    });

function KS(e, n, t, a, r, i) {
    return a.isEcommerceStoreCreated ? (c(), F(a.ModalLayout, {
        key: 0,
        ref: "modalRef"
    }, {
        default: _e(() => [De(a.ModalContent, {
            title: a.modalContent.title,
            text: a.modalContent.text,
            "button-text": a.modalContent.buttonText,
            "qa-selector": a.modalContent.modalType,
            onHandleClose: n[0] || (n[0] = o => a.modalRef.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text", "qa-selector"])]),
        _: 1
    }, 512)) : O("", !0)
}
const ZS = oe(QS, [
        ["render", KS]
    ]),
    XS = le({
        components: {
            CloseButton: Fo
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        },
        setup() {
            const {
                closeEcommerceModal: e
            } = xt(), n = setTimeout(() => {
                e()
            }, 6e3);
            return Et(() => {
                clearTimeout(n)
            }), {
                closeEcommerceModal: e
            }
        }
    }),
    JS = e => (At("data-v-2b2551b7"), e = e(), Bt(), e),
    eC = {
        class: "notification"
    },
    tC = JS(() => E("svg", {
        class: "notification__icon",
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), E("path", {
        d: "M12.01 16L12.01 12",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    }), E("path", {
        d: "M12.01 8L12 8",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
    })], -1)),
    aC = {
        class: "notification__content"
    };

function nC(e, n, t, a, r, i) {
    const o = Te("CloseButton"),
        s = Ge("qa");
    return c(), F(Mt, {
        name: "fade"
    }, {
        default: _e(() => [ce((c(), h("div", eC, [tC, E("p", aC, X(e.translations.checkoutModalDisabledPreview), 1), De(o, {
            class: "notification__close",
            title: "Close",
            onClick: n[0] || (n[0] = l => e.closeEcommerceModal())
        })])), [
            [s, "builder-message-ecommercedisabled"]
        ])]),
        _: 1
    })
}
const rC = oe(XS, [
        ["render", nC],
        ["__scopeId", "data-v-2b2551b7"]
    ]),
    oC = le({
        components: {
            ModalLayout: ln,
            ModalContent: _r
        },
        props: {
            translations: {
                type: Object,
                default: () => {}
            }
        }
    });

function iC(e, n, t, a, r, i) {
    const o = Te("ModalContent"),
        s = Te("ModalLayout");
    return c(), F(s, {
        ref: "modal"
    }, {
        default: _e(() => [De(o, {
            "qa-selector": "outofstock",
            title: e.translations.checkoutModalOutOfStock,
            text: e.translations.checkoutModalTryOrChoose,
            "button-text": e.translations.gotIt,
            onHandleClose: n[0] || (n[0] = l => e.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const sC = oe(oC, [
        ["render", iC]
    ]),
    lC = "open-modal",
    uC = le({
        components: {
            EcommerceProductPreview: Jb,
            EcommerceBookingEventSelect: $S,
            EcommerceBookingUnavailable: FS,
            EcommerceCheckoutFailed: zS,
            EcommerceCheckoutSuccess: ZS,
            EcommerceMessageButtonDisabled: rC,
            EcommerceOutOfStock: sC
        },
        props: {
            ecommerceTranslations: {
                type: Object,
                default: () => ({})
            },
            language: {
                type: String,
                default: "en"
            },
            currentLocale: {
                type: String,
                required: !0
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup() {
            const {
                openEcommerceModal: e,
                closeEcommerceModal: n,
                openEcommerceModalName: t
            } = xt();
            return Le(() => {
                const r = new URLSearchParams(window.location.search).get(lC);
                r && e(r)
            }), {
                openEcommerceModal: e,
                closeEcommerceModal: n,
                openEcommerceModalName: t
            }
        }
    });

function cC(e, n, t, a, r, i) {
    return e.openEcommerceModalName ? (c(), F(sn(e.openEcommerceModalName), {
        key: 0,
        translations: e.ecommerceTranslations,
        language: e.language,
        "current-locale": e.currentLocale,
        "is-cart-visible": e.isCartVisible,
        "is-in-preview-mode": e.isInPreviewMode,
        "is-quick-preview": ""
    }, null, 8, ["translations", "language", "current-locale", "is-cart-visible", "is-in-preview-mode"])) : O("", !0)
}
const dC = oe(uC, [
        ["render", cC]
    ]),
    mC = le({
        __name: "Flag",
        props: {
            alt: {},
            src: {
                default: void 0
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = {};
            return Object.defineProperty(t, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), t
        }
    }),
    gC = {
        class: "flag"
    },
    pC = ["src", "alt"],
    vC = E("div", {
        class: "flag__shadow"
    }, null, -1);

function hC(e, n, t, a, r, i) {
    return c(), h("div", gC, [E("img", {
        class: "flag__img",
        src: t.src,
        alt: t.alt
    }, null, 8, pC), vC])
}
const fC = oe(mC, [
        ["render", hC]
    ]),
    yC = le({
        __name: "LanguageSwitcher",
        props: {
            languages: {},
            currentLocale: {
                default: null
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                a = u(() => t.languages.filter(({
                    isHidden: o
                }) => !o).map(o => ({ ...o,
                    src: `${bc}/${o.flagPath}`,
                    alt: `${o.locale} flag`
                }))),
                r = u(() => a.value.find(({
                    locale: o
                }) => o === t.currentLocale) ? ? {}),
                i = {
                    props: t,
                    languageSwitcherLanguages: a,
                    selectedLanguage: r,
                    Flag: fC
                };
            return Object.defineProperty(i, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), i
        }
    }),
    bC = {
        ref: "languageSwitcher",
        class: "language-switcher",
        tabindex: "0"
    },
    _C = {
        class: "language-switcher__button"
    },
    wC = {
        key: 1,
        class: "language-switcher__locale"
    },
    kC = E("svg", {
        class: "language-switcher__icon",
        width: "10",
        height: "7",
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor"
    })], -1),
    SC = {
        class: "language-switcher__dropdown-area"
    },
    CC = {
        class: "language-switcher__dropdown"
    },
    TC = ["href"];

function PC(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", bC, [ce((c(), h("div", _C, [a.selectedLanguage.country ? ce((c(), F(a.Flag, {
        key: 0,
        class: "language-switcher__flag",
        src: a.selectedLanguage.src,
        alt: a.selectedLanguage.alt
    }, null, 8, ["src", "alt"])), [
        [o, `navigation-selected-language-${a.selectedLanguage.name}`]
    ]) : (c(), h("div", wC, X(a.selectedLanguage.locale), 1)), kC])), [
        [o, "navigation-language-switcher"]
    ]), E("div", SC, [E("ul", CC, [(c(!0), h(pe, null, ke(a.languageSwitcherLanguages, s => ce((c(), h("li", {
        key: s.locale,
        class: "language-switcher__dropdown-item"
    }, [E("a", {
        href: s.href,
        class: J(["language-switcher__dropdown-link", {
            "--current": s.locale === t.currentLocale
        }])
    }, [s.country ? (c(), F(a.Flag, {
        key: 0,
        class: "language-switcher__dropdown-flag",
        src: s.src,
        alt: s.alt
    }, null, 8, ["src", "alt"])) : O("", !0), Be(" " + X(s.name), 1)], 10, TC)])), [
        [o, `navigation-language-switcher-${s.locale}`]
    ])), 128))])])], 512)
}
const IC = oe(yC, [
        ["render", PC]
    ]),
    EC = le({
        __name: "ZyroHamburger",
        props: {
            title: {
                type: String,
                default: "Menu"
            },
            isOpen: {
                type: Boolean,
                required: !0
            },
            color: {
                type: String,
                default: "var(--nav-link-text-color)"
            }
        },
        setup(e, {
            expose: n
        }) {
            n(), ht(i => ({
                "49f0cf5b": a.value
            }));
            const t = e,
                a = u(() => t.color),
                r = {
                    props: t,
                    burgerColor: a
                };
            return Object.defineProperty(r, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), r
        }
    }),
    gi = e => (At("data-v-ef8a58d4"), e = e(), Bt(), e),
    DC = ["title"],
    MC = gi(() => E("span", {
        class: "burger__bun"
    }, null, -1)),
    OC = gi(() => E("span", {
        class: "burger__meat"
    }, null, -1)),
    LC = gi(() => E("span", {
        class: "burger__bun"
    }, null, -1)),
    AC = [MC, OC, LC];

function BC(e, n, t, a, r, i) {
    return c(), h("button", {
        type: "button",
        class: J(["burger", {
            "burger--open": t.isOpen
        }]),
        title: t.title
    }, AC, 10, DC)
}
const RC = oe(EC, [
        ["render", BC],
        ["__scopeId", "data-v-ef8a58d4"]
    ]),
    $C = le({
        name: "BlockHeaderBackground",
        props: {
            type: {
                type: String,
                default: "color"
            },
            imageUrl: {
                type: String,
                default: null
            },
            color: {
                type: String,
                default: ""
            },
            isTransparent: {
                type: Boolean,
                default: !1
            },
            overlayOpacity: {
                type: Number,
                default: 0
            }
        },
        computed: {
            backgroundImage() {
                return this.type === "image" && this.imageUrl
            },
            backgroundColor() {
                return this.type === "color" ? this.color : "transparent"
            },
            backgroundCSSVars() {
                return {
                    "--background-color": this.isTransparent ? "transparent" : this.backgroundColor,
                    ...!!this.backgroundImage && {
                        "--background-image": `url(${this.backgroundImage})`
                    },
                    ...!!this.overlayOpacity && {
                        "--overlay-opacity": this.overlayOpacity
                    }
                }
            }
        }
    });

function NC(e, n, t, a, r, i) {
    return c(), h("div", {
        class: J(["background", {
            "background--with-image": e.backgroundImage
        }]),
        style: Re(e.backgroundCSSVars)
    }, null, 6)
}
const xC = oe($C, [
        ["render", NC]
    ]),
    HC = le({
        name: "BlockHeaderCart",
        props: {
            cartIconSize: {
                type: String,
                required: !0
            },
            cartText: {
                type: String,
                required: !0
            },
            itemsInCart: {
                type: Number,
                required: !0
            },
            cartUrl: {
                type: String,
                default: null
            }
        },
        emits: ["cart-click"]
    }),
    VC = e => (At("data-v-f90c8b45"), e = e(), Bt(), e),
    UC = ["href"],
    YC = {
        class: "block-header-cart__icon-container"
    },
    qC = VC(() => E("svg", {
        width: "19",
        height: "24",
        viewBox: "0 0 19 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        class: "block-header-cart__icon"
    }, [E("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
        fill: "currentColor"
    })], -1));

function WC(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", {
        class: "block-header-cart-wrapper",
        style: Re({
            "--cart-icon-size": e.cartIconSize
        })
    }, [E("a", {
        href: e.cartUrl,
        class: "block-header-cart"
    }, [ce((c(), h("button", {
        class: "block-header-cart__button",
        title: "Go to cart",
        onClick: n[0] || (n[0] = s => e.$emit("cart-click"))
    }, [E("div", YC, [qC, E("span", null, X(e.cartText) + " (" + X(e.itemsInCart) + ")", 1)])])), [
        [o, "header-btn-shoppingbag"]
    ])], 8, UC)], 4)
}
const FC = oe(HC, [
        ["render", WC],
        ["__scopeId", "data-v-f90c8b45"]
    ]),
    GC = le({
        name: "BlockHeaderItemContent",
        props: {
            item: {
                type: Object,
                required: !0
            }
        },
        computed: {
            linkDataQa() {
                return this.item.isCurrent ? `navigationblock-page-active-${this.item.name}` : `navigationblock-page-${this.item.name}`
            }
        }
    }),
    jC = e => (At("data-v-cf3ff533"), e = e(), Bt(), e),
    zC = ["target", "rel", "href", "textContent"],
    QC = ["textContent"],
    KC = {
        key: 2,
        class: "item-content__icon-container-wrapper"
    },
    ZC = jC(() => E("span", {
        class: "item-content__icon-container"
    }, [E("svg", {
        class: "item-content__icon",
        width: "10",
        height: "7",
        viewBox: "0 0 10 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, [E("path", {
        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
        fill: "currentColor"
    })])], -1)),
    XC = [ZC];

function JC(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("div", {
        class: J(["item-content-wrapper", {
            "item-content-wrapper--active": e.item.isCurrent
        }])
    }, [e.item.href ? ce((c(), h("a", {
        key: 0,
        class: "item-content",
        target: e.item.target,
        rel: e.item.rel,
        href: e.item.href,
        textContent: X(e.item.name)
    }, null, 8, zC)), [
        [o, e.linkDataQa]
    ]) : ce((c(), h("span", {
        key: 1,
        class: "item-content",
        textContent: X(e.item.name)
    }, null, 8, QC)), [
        [o, e.linkDataQa]
    ]), e.item.hasDropdown ? (c(), h("div", KC, XC)) : O("", !0)], 2)
}
const eT = oe(GC, [
        ["render", JC],
        ["__scopeId", "data-v-cf3ff533"]
    ]),
    tT = le({
        name: "BlockHeaderItem",
        components: {
            BlockHeaderItemContent: eT
        },
        props: {
            item: {
                type: Object,
                required: !0
            },
            areDropdownsHidden: {
                type: Boolean,
                default: !1
            }
        }
    }),
    aT = {
        class: "block-header-item"
    },
    nT = {
        class: "block-header-item__label"
    },
    rT = {
        key: 0,
        type: "checkbox",
        class: "block-header-item__mobile-dropdown-trigger"
    },
    oT = {
        key: 1,
        class: "block-header-item__dropdown-area"
    },
    iT = {
        class: "block-header-item__dropdown"
    };

function sT(e, n, t, a, r, i) {
    const o = Te("BlockHeaderItemContent"),
        s = Te("BlockHeaderItem", !0),
        l = Ge("qa");
    return c(), h("li", aT, [E("label", nT, [!e.areDropdownsHidden && e.item.hasDropdown ? (c(), h("input", rT)) : O("", !0), ce(De(o, {
        item: e.item,
        class: "block-header-item__item",
        "aria-haspopup": e.item.hasDropdown
    }, null, 8, ["item", "aria-haspopup"]), [
        [l, `navigation-item-${e.item.name}`]
    ]), !e.areDropdownsHidden && e.item.hasDropdown ? (c(), h("div", oT, [E("ul", iT, [(c(!0), h(pe, null, ke(e.item.subItems, d => (c(), F(s, {
        key: d.id,
        item: d
    }, null, 8, ["item"]))), 128))])])) : O("", !0)])])
}
const lT = oe(tT, [
        ["render", sT],
        ["__scopeId", "data-v-ee55214b"]
    ]),
    uT = le({
        name: "BlockHeaderLogo",
        props: {
            logoSrc: {
                type: String,
                default: null
            },
            logoSvg: {
                type: String,
                default: null
            },
            href: {
                type: String,
                default: "/"
            },
            height: {
                type: Number,
                default: null
            },
            heightMobile: {
                type: Number,
                default: null
            },
            maxWidth: {
                type: String,
                default: null
            },
            maxWidthMobile: {
                type: String,
                default: null
            },
            objectPosition: {
                type: String,
                default: null
            },
            objectPositionMobile: {
                type: String,
                default: null
            },
            isOptimized: {
                type: Boolean,
                default: !1
            },
            siteName: {
                type: String,
                default: null
            }
        },
        data() {
            return {
                optimizedHeight: null,
                optimizedHeightMobile: null
            }
        },
        computed: {
            logoAltTag() {
                return this.siteName ? `${this.siteName} logo` : null
            },
            computedCSSVars() {
                return {
                    "--height": this.isOptimized && this.height ? `${this.height}px` : null,
                    "--m-height": this.isOptimized && this.heightMobile ? `${this.heightMobile}px` : null,
                    "--width": this.maxWidth,
                    "--m-width": this.maxWidthMobile,
                    "--object-position": this.objectPosition,
                    "--m-object-position": this.objectPositionMobile
                }
            }
        }
    }),
    cT = ["href"],
    dT = ["innerHTML"],
    mT = ["src", "alt"];

function gT(e, n, t, a, r, i) {
    const o = Ge("qa");
    return c(), h("a", {
        class: "block-header-logo",
        href: e.href,
        style: Re(e.computedCSSVars)
    }, [e.logoSvg ? (c(), h("div", {
        key: 0,
        class: "block-header-logo__image",
        innerHTML: e.logoSvg
    }, null, 8, dT)) : ce((c(), h("img", {
        key: 1,
        class: "block-header-logo__image",
        src: e.logoSrc,
        alt: e.logoAltTag
    }, null, 8, mT)), [
        [o, "builder-siteheader-img-logo"]
    ])], 12, cT)
}
const pT = oe(uT, [
        ["render", gT],
        ["__scopeId", "data-v-237d5d94"]
    ]),
    vT = le({
        __name: "BlockHeaderButton",
        props: {
            elementId: {},
            data: {}
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    getButtonHref: a
                } = Je(),
                {
                    tagName: r,
                    href: i,
                    target: o,
                    rel: s,
                    type: l,
                    content: d,
                    fontSizeMobile: g,
                    fontSizeDesktop: m,
                    fontFamily: p,
                    fontWeight: f,
                    borderWidth: b,
                    borderRadius: S,
                    backgroundColor: C,
                    fontColor: w,
                    borderColor: y,
                    backgroundColorHover: D,
                    fontColorHover: P,
                    borderColorHover: M,
                    mobileElementWidth: R,
                    mobileElementHeight: $
                } = On(t, {
                    href: u(() => a({
                        isFormButton: !1,
                        linkedPageId: t.data.linkedPageId,
                        linkType: t.data.linkType,
                        href: t.data.href
                    }))
                }),
                Z = {
                    props: t,
                    getButtonHref: a,
                    tagName: r,
                    href: i,
                    target: o,
                    rel: s,
                    type: l,
                    content: d,
                    fontSizeMobile: g,
                    fontSizeDesktop: m,
                    fontFamily: p,
                    fontWeight: f,
                    borderWidth: b,
                    borderRadius: S,
                    backgroundColor: C,
                    fontColor: w,
                    borderColor: y,
                    backgroundColorHover: D,
                    fontColorHover: P,
                    borderColorHover: M,
                    mobileElementWidth: R,
                    mobileElementHeight: $,
                    GridButton: Va
                };
            return Object.defineProperty(Z, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), Z
        }
    });

function hT(e, n, t, a, r, i) {
    return c(), F(a.GridButton, {
        "data-element-ref": t.elementId,
        "tag-name": a.tagName,
        href: a.href,
        target: a.target,
        rel: a.rel,
        type: a.type,
        content: a.content,
        "font-size-mobile": a.fontSizeMobile,
        "font-size-desktop": a.fontSizeDesktop,
        "font-family": a.fontFamily,
        "font-weight": a.fontWeight,
        "border-width": a.borderWidth,
        "border-radius": a.borderRadius,
        "background-color": a.backgroundColor,
        "font-color": a.fontColor,
        "border-color": a.borderColor,
        "background-color-hover": a.backgroundColorHover,
        "font-color-hover": a.fontColorHover,
        "border-color-hover": a.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight,
        onClick: n[0] || (n[0] = Ee(() => {}, ["prevent"])),
        onDrag: n[1] || (n[1] = Ee(() => {}, ["prevent"])),
        onDragstart: n[2] || (n[2] = Ee(() => {}, ["prevent"]))
    }, null, 8, ["data-element-ref", "tag-name", "href", "target", "rel", "type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const fT = oe(vT, [
        ["render", hT]
    ]),
    pi = le({
        name: "BlockHeader",
        components: {
            ZyroHamburger: RC,
            BlockHeaderCart: FC,
            BlockHeaderLogo: pT,
            BlockHeaderItem: lT,
            BlockHeaderBackground: xC,
            LanguageSwitcher: IC,
            BlockHeaderButton: fT,
            GridSocialIcons: Dl
        },
        props: {
            siteName: {
                type: String,
                default: null
            },
            languageSwitcherLanguages: {
                type: Array,
                default: () => []
            },
            items: {
                type: Array,
                default: () => []
            },
            logoHref: {
                type: String,
                default: "/"
            },
            logoSrc: {
                type: String,
                default: null
            },
            logoSvg: {
                type: String,
                default: null
            },
            backgroundImageUrl: {
                type: String,
                default: null
            },
            isOpen: {
                type: Boolean,
                default: !1
            },
            isSticky: {
                type: Boolean,
                default: !1
            },
            isTransparent: {
                type: Boolean,
                default: !1
            },
            isLogoVisible: {
                type: Boolean,
                default: !1
            },
            isCartVisible: {
                type: Boolean,
                default: !1
            },
            isLanguageSwitcherVisible: {
                type: Boolean,
                default: !1
            },
            currentLocale: {
                type: String,
                default: null
            },
            backgroundColor: {
                type: String,
                default: ""
            },
            backgroundColorContrast: {
                type: String,
                default: ""
            },
            navLinkTextColor: {
                type: String,
                default: ""
            },
            navLinkTextColorHover: {
                type: String,
                default: ""
            },
            cartText: {
                type: String,
                default: null
            },
            cartUrl: {
                type: String,
                default: null
            },
            itemsInCart: {
                type: Number,
                default: 0
            },
            logoPlacement: {
                type: String,
                default: null
            },
            logoPlacementMobile: {
                type: String,
                default: null
            },
            navigationPlacement: {
                type: String,
                default: null
            },
            navigationPlacementMobile: {
                type: String,
                default: null
            },
            areDropdownsHidden: {
                type: Boolean,
                default: !1
            },
            isLogoOptimized: {
                type: Boolean,
                default: !1
            },
            background: {
                type: Object,
                default: null
            },
            cartIconSize: {
                type: String,
                default: null
            },
            logoMaxWidth: {
                type: String,
                default: null
            },
            logoHeight: {
                type: Number,
                default: null
            },
            logoHeightMobile: {
                type: Number,
                default: null
            },
            logoMaxWidthMobile: {
                type: String,
                default: null
            },
            logoObjectPosition: {
                type: String,
                default: null
            },
            logoObjectPositionMobile: {
                type: String,
                default: null
            },
            fontFamily: {
                type: String,
                default: null
            },
            fontWeight: {
                type: Number,
                default: null
            },
            socialIconsLinks: {
                type: Array,
                default: () => []
            },
            socialIconsStyles: {
                type: Object,
                default: () => ({})
            },
            buttonElementId: {
                type: String
            },
            buttonElementData: {
                type: Object,
                default: () => ({})
            }
        },
        emits: ["toggle-visibility", "cart-click", "logo-click"],
        setup(e, n) {
            const t = A(null),
                a = u(() => e.socialIconsLinks.length > 0);
            Le(() => {
                pr(t, () => {
                    e.isOpen && n.emit("toggle-visibility")
                })
            });
            const {
                hasUserScrolled: r
            } = yl(), i = u(() => !e.items.length && !e.isLanguageSwitcherVisible ? "inline-flex" : "none"), o = u(() => e.socialIconsStyles.justify || "flex-end");
            return {
                hasUserScrolled: r,
                BLOCK_HEADER_CLASS: vl,
                BLOCK_HEADER_STICKY_CLASS: _c,
                headerRef: t,
                isSocialIconsLinksVisible: a,
                mobileHeaderSocialIconsCssDisplay: i,
                headerSocialIconsCssJustify: o
            }
        },
        computed: {
            isButtonVisible() {
                return !!Object.keys(this.buttonElementData).length
            },
            isWithShadow() {
                return this.hasUserScrolled && this.isSticky
            },
            shouldForceTransparency() {
                return this.isSticky && !this.hasUserScrolled || !this.isSticky
            },
            isCurrentlyTransparent() {
                return this.isTransparent && this.shouldForceTransparency && !this.isOpen
            },
            isLogoAndNavigationCentered() {
                return this.logoPlacement === "center" && this.navigationPlacement === "center"
            },
            isLogoAndNavigationCenteredMobile() {
                return this.logoPlacementMobile === "center" && this.navigationPlacementMobile === "center"
            },
            navigationGridRowCount() {
                return this.isLogoVisible && this.isCartVisible ? 3 : 2
            },
            computedStyles() {
                const e = `${this.logoPlacement}-${this.navigationPlacement}`,
                    n = `${this.logoPlacementMobile}-${this.navigationPlacementMobile}`,
                    {
                        templateColumns: t
                    } = yt[e],
                    a = this.isCartVisible ? "auto minmax(0, calc(var(--m-logo-width) + var(--space-between-menu) * 2)) 1fr" : yt[n].mTemplateColumns;
                return {
                    "--navigation-grid-template-columns": this.isLogoVisible ? t : "1fr",
                    "--m-navigation-grid-template-columns": this.isLogoVisible ? a : "1fr",
                    "--logo-grid-row": `${yt[e].logoRow}/${this.navigationGridRowCount}`,
                    "--m-logo-grid-row": `${yt[n].logoRow}/${this.navigationGridRowCount}`,
                    "--logo-grid-column": yt[e].logoColumn,
                    "--m-logo-grid-column": yt[n].logoColumn,
                    "--logo-justify-self": this.getJustifyContent(this.logoPlacement),
                    "--m-logo-justify-self": this.getJustifyContent(this.logoPlacementMobile),
                    "--logo-image-object-position": this.getLogoImageObjectPosition(this.logoPlacement),
                    "--m-logo-image-object-position": this.getLogoImageObjectPosition(this.logoPlacementMobile),
                    "--links-grid-row": `${yt[e].menuRow}/${this.navigationGridRowCount}`,
                    "--m-links-grid-row": `${yt[n].menuRow}/${this.navigationGridRowCount}`,
                    "--links-grid-column": this.isLogoVisible ? yt[e].menuColumn : "1/2",
                    "--m-links-grid-column": this.isLogoVisible ? yt[n].menuColumn : "1/2",
                    "--cart-grid-row": `${yt[e].cartRow}/${this.navigationGridRowCount}`,
                    "--cart-grid-column": this.isLogoVisible ? yt[e].cartColumn : "2/2",
                    "--logo-spacing": this.getLogoMarginPlacement(),
                    "--m-logo-spacing": this.getLogoMarginPlacement(!0),
                    "--navigation-text-align": this.navigationPlacement,
                    "--m-navigation-text-align": this.navigationPlacementMobile,
                    "--navigation-justify-self": this.getJustifyContent(this.navigationPlacement),
                    "--m-navigation-justify-self": this.getJustifyContent(this.navigationPlacementMobile),
                    "--mobile-background": "var(--background-color,  var(--background-image))",
                    "--dropdown-background-color": this.backgroundColor,
                    "--m-dropdown-background-color": this.background.current === "image" ? "transparent" : this.backgroundColor,
                    "--dropdown-background-contrast-color": this.backgroundColorContrast,
                    "--text-font-family": this.fontFamily,
                    "--text-font-weight": this.fontWeight,
                    "--nav-link-text-color": this.navLinkTextColor || "var(--nav-link-color)",
                    "--nav-link-text-color-hover": this.navLinkTextColorHover || "var(--nav-link-color-hover)",
                    ...this.isSocialIconsLinksVisible && {
                        "--social-icons-grid-row": `${yt[e].socialIconsRow}/${this.navigationGridRowCount}`,
                        "--social-icons-grid-column": this.isLogoVisible ? yt[e].socialIconsColumn : "3/3",
                        "--space-between-icons": this.socialIconsStyles["space-between-icons"],
                        "--icon-color": this.socialIconsStyles["icon-color"],
                        "--icon-size": this.socialIconsStyles["icon-size"],
                        "--icon-color-hover": this.socialIconsStyles["icon-color-hover"]
                    },
                    ...this.isButtonVisible && {
                        "--button-grid-row": `${yt[e].buttonRow}/${this.navigationGridRowCount}`,
                        "--button-grid-column": this.isLogoVisible ? yt[e].buttonColumn : "4/4"
                    }
                }
            }
        },
        methods: {
            getJustifyContent(e) {
                return Ii[e] || Ii.default
            },
            getLogoImageObjectPosition(e) {
                return Ei[e] || Ei.default
            },
            getLogoMarginPlacement(e = !1) {
                const n = e ? this.isLogoAndNavigationCenteredMobile : this.isLogoAndNavigationCentered,
                    t = e ? this.logoPlacementMobile : this.logoPlacement;
                return e && this.isCartVisible ? Ir.center : n ? Ir["center-center"] : Ir[t]
            }
        }
    }),
    Js = () => {
        ht(e => ({
            b85afa84: e.headerSocialIconsCssJustify,
            d98daba4: e.mobileHeaderSocialIconsCssDisplay,
            "1a75c024": e.navigationPlacementMobile
        }))
    },
    el = pi.setup;
pi.setup = el ? (e, n) => (Js(), el(e, n)) : Js;
const yT = {
        class: "block-header__nav"
    },
    bT = {
        key: 1,
        class: "block-header-item"
    },
    _T = {
        key: 2,
        class: "block-header-item"
    };

function wT(e, n, t, a, r, i) {
    const o = Te("BlockHeaderBackground"),
        s = Te("BlockHeaderLogo"),
        l = Te("ZyroHamburger"),
        d = Te("BlockHeaderItem"),
        g = Te("LanguageSwitcher"),
        m = Te("GridSocialIcons"),
        p = Te("BlockHeaderButton"),
        f = Te("BlockHeaderCart"),
        b = Ge("qa");
    return c(), h("header", {
        ref: "headerRef",
        class: J({
            [e.BLOCK_HEADER_CLASS]: !0,
            [e.BLOCK_HEADER_STICKY_CLASS]: e.isSticky,
            "block-header--with-shadow": e.isWithShadow
        })
    }, [e.background ? (c(), F(o, {
        key: 0,
        type: e.background.current,
        "image-url": e.backgroundImageUrl,
        color: e.background.color,
        "overlay-opacity": Number(e.background["overlay-opacity"]),
        "is-transparent": e.isCurrentlyTransparent
    }, null, 8, ["type", "image-url", "color", "overlay-opacity", "is-transparent"])) : O("", !0), E("div", {
        class: J(["block-header__content", {
            "block-header__content--open": e.isOpen
        }]),
        style: Re(e.computedStyles)
    }, [e.isLogoVisible ? (c(), F(s, {
        key: 0,
        class: J(["block-header__logo", {
            "block-header__logo--m-with-cart": e.isCartVisible
        }]),
        "logo-src": e.logoSrc,
        "logo-svg": e.logoSvg,
        href: e.logoHref,
        "site-name": e.siteName,
        "max-width": e.logoMaxWidth,
        "max-width-mobile": e.logoMaxWidthMobile,
        height: e.logoHeight,
        "height-mobile": e.logoHeightMobile,
        "is-optimized": e.isLogoOptimized,
        "object-position": e.logoObjectPosition,
        "object-position-mobile": e.logoObjectPositionMobile,
        onClick: n[0] || (n[0] = S => e.$emit("logo-click"))
    }, null, 8, ["class", "logo-src", "logo-svg", "href", "site-name", "max-width", "max-width-mobile", "height", "height-mobile", "is-optimized", "object-position", "object-position-mobile"])) : O("", !0), e.items.length || e.isLanguageSwitcherVisible ? ce((c(), F(l, {
        key: 1,
        class: J(["block-header__burger", {
            "block-header__burger--m-with-cart": e.isCartVisible
        }]),
        "is-open": e.isOpen,
        onClick: n[1] || (n[1] = Ee(S => e.$emit("toggle-visibility"), ["stop"]))
    }, null, 8, ["class", "is-open"])), [
        [b, "builder-siteheader-btn-hamburger"]
    ]) : O("", !0), E("nav", yT, [ce((c(), h("ul", {
        class: J(["block-header__links", [{
            "block-header__links--open": e.isOpen
        }, `block-header__links--align-${e.navigationPlacementMobile||e.navigationPlacement}`]])
    }, [(c(!0), h(pe, null, ke(e.items, S => (c(), F(d, {
        key: S.id,
        item: S,
        "are-dropdowns-hidden": e.areDropdownsHidden
    }, null, 8, ["item", "are-dropdowns-hidden"]))), 128)), e.isLanguageSwitcherVisible ? (c(), F(g, {
        key: 0,
        class: J({
            "mouse-disabled": e.areDropdownsHidden
        }),
        languages: e.languageSwitcherLanguages,
        "current-locale": e.currentLocale
    }, null, 8, ["class", "languages", "current-locale"])) : O("", !0), e.socialIconsLinks.length ? (c(), h("li", bT, [De(m, {
        class: "block-header__social-icons block-header__social-icons--mobile",
        links: e.socialIconsLinks
    }, null, 8, ["links"])])) : O("", !0), e.isButtonVisible ? (c(), h("li", _T, [De(p, {
        "element-id": e.buttonElementId,
        data: e.buttonElementData,
        class: "block-header__button block-header__button--mobile"
    }, null, 8, ["element-id", "data"])])) : O("", !0)], 2)), [
        [b, "builder-siteheader-emptyspace"]
    ])]), e.isCartVisible ? (c(), F(f, {
        key: 2,
        class: "block-header__cart",
        "cart-text": e.cartText,
        "cart-icon-size": e.cartIconSize,
        "cart-url": e.cartUrl,
        "items-in-cart": e.itemsInCart,
        onCartClick: n[2] || (n[2] = S => e.$emit("cart-click"))
    }, null, 8, ["cart-text", "cart-icon-size", "cart-url", "items-in-cart"])) : O("", !0), e.socialIconsLinks.length ? (c(), F(m, {
        key: 3,
        class: "block-header__social-icons",
        links: e.socialIconsLinks
    }, null, 8, ["links"])) : O("", !0), e.isButtonVisible ? (c(), F(p, {
        key: 4,
        "element-id": e.buttonElementId,
        data: e.buttonElementData,
        class: "block-header__button"
    }, null, 8, ["element-id", "data"])) : O("", !0)], 6)], 2)
}
const kT = oe(pi, [
        ["render", wT],
        ["__scopeId", "data-v-780535e6"]
    ]),
    ST = e => {
        const t = e.current === "image" ? `url(${e[e.current]})` : e[e.current];
        return {
            [`--background-${e.current}`]: t
        }
    },
    CT = e => e && Object.values(e).some(n => qd.includes(n.type)),
    TT = e => e && Object.values(e).some(n => n ? .type === "GridEcommerceButton"),
    Bu = ({
        blocks: e,
        elements: n
    }) => TT(n) || CT(e),
    PT = ({
        siteId: e,
        meta: n,
        blocks: t,
        nav: a,
        pages: r,
        elements: i,
        languageMetaTitle: o,
        languageSwitcherLanguages: s,
        currentLocale: l,
        currentPageId: d,
        isLogoOptimized: g,
        shoppingCartItems: m,
        ecwidCartItemCount: p,
        isOpen: f,
        getPagePathFromId: b,
        ecwidPages: S,
        isEcommerceWebsite: C
    }) => {
        const {
            headerHeight: w,
            headerHeightMobile: y,
            defaultLocale: D
        } = n, {
            background: P,
            settings: M,
            fontWeight: R,
            fontFamily: $,
            navLinkTextColor: Z,
            navLinkTextColorHover: G
        } = t.header, {
            imageOrigin: T,
            imagePath: L
        } = P, {
            cartText: H,
            isCartVisible: z,
            isLanguageSwitcherHidden: V,
            isSticky: I,
            logoPlacement: N,
            navigationPlacement: U,
            showLogo: Q,
            styles: _,
            logoImageOrigin: v,
            logoImagePath: Y,
            logoSvg: W
        } = M, ee = Object.keys(S).length > 0, ie = Bu({
            blocks: t,
            elements: i
        }), q = { ...Kt(_),
            ...ST(P)
        }, k = () => {
            if (!g) return Do(v, Y, e);
            const ut = Number.parseInt(_["logo-width"], 10);
            return ot(v, Y, e, {
                width: ut * 2,
                quality: 95
            })
        }, te = () => ot(T, L, e, {
            width: Ca
        }), ue = ut => {
            const {
                navItemId: Xt,
                linkType: ua,
                linkedPageId: qt,
                isHidden: ft,
                rel: Jt,
                href: Ia,
                target: ca,
                name: x,
                subItems: re = []
            } = ut;
            return {
                navItemId: Xt,
                hasDropdown: !!re.length,
                isCurrent: d === qt,
                subItems: re.map(ue),
                target: ca,
                name: ua === Di ? r[qt] ? .name : x,
                isHidden: ft,
                rel: Jt,
                href: ua === Di ? b({
                    pageId: qt
                }) : Ia,
                locale: l
            }
        }, K = a.filter(({
            isHidden: ut
        }) => !ut).map(ue), ve = z && (ee || ie), me = !!s.length && !V && l !== Nt, j = () => C || ie ? m.length : z ? p : 0, ne = () => {
            if (!S || !Object.keys(S).length) return null;
            const [ut] = Object.keys(S);
            return `${b({pageId:ut})}?store-page=cart`
        }, Ie = o || n.metaTitle, ge = t.header.components.find(ut => i[ut].type === pl), qe = i[ge] ? .links || [], gt = i[ge] ? .settings ? .styles || {}, Yt = t.header.components.find(ut => i[ut].type === gl), Ot = i[Yt];
        return {
            background: P,
            backgroundColor: P.color,
            backgroundImageUrl: te(),
            backgroundColorContrast: _.contrastBackgroundColor,
            cartText: H,
            cartIconSize: _.cartIconSize,
            cartUrl: ne(),
            currentLocale: l,
            height: w,
            heightMobile: y,
            fontFamily: $,
            navLinkTextColor: Z,
            navLinkTextColorHover: G,
            fontWeight: R,
            isTransparent: P.isTransparent,
            items: K,
            isCartVisible: ve,
            itemsInCart: j(),
            isSticky: I,
            isLanguageSwitcherVisible: me,
            isLogoVisible: Q,
            isLogoOptimized: g,
            isOpen: f,
            languageSwitcherLanguages: s,
            logoHeight: t.header ? .desktop ? .logoHeight,
            logoHref: l !== D && l !== Nt ? `/${l}` : "/",
            logoHeightMobile: t.header ? .mobile ? .logoHeight,
            logoMaxWidth: _["logo-width"],
            logoMaxWidthMobile: _["m-logo-width"],
            logoObjectPosition: _["logo-image-object-position"],
            logoObjectPositionMobile: _["m-logo-image-object-position"],
            logoPlacement: N,
            logoPlacementMobile: M["m-logoPlacement"] || N,
            logoSrc: k(),
            logoSvg: W,
            style: q,
            siteName: Ie,
            socialIconsLinks: qe,
            socialIconsStyles: gt,
            buttonElementId: Yt,
            buttonElementData: Ot,
            navigationPlacement: U,
            navigationPlacementMobile: M["m-navigationPlacement"] || U
        }
    };

function IT(e) {
    if (Array.isArray(e)) {
        for (var n = 0, t = Array(e.length); n < e.length; n++) t[n] = e[n];
        return t
    } else return Array.from(e)
}
var vi = !1;
if (typeof window < "u") {
    var tl = {
        get passive() {
            vi = !0
        }
    };
    window.addEventListener("testPassive", null, tl), window.removeEventListener("testPassive", null, tl)
}
var Ru = typeof window < "u" && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === "MacIntel" && window.navigator.maxTouchPoints > 1),
    Za = [],
    cr = !1,
    hi = -1,
    Tn = void 0,
    Pn = void 0,
    $u = function(n) {
        return Za.some(function(t) {
            return !!(t.options.allowTouchMove && t.options.allowTouchMove(n))
        })
    },
    dr = function(n) {
        var t = n || window.event;
        return $u(t.target) || t.touches.length > 1 ? !0 : (t.preventDefault && t.preventDefault(), !1)
    },
    ET = function(n) {
        if (Pn === void 0) {
            var t = !!n && n.reserveScrollBarGap === !0,
                a = window.innerWidth - document.documentElement.clientWidth;
            t && a > 0 && (Pn = document.body.style.paddingRight, document.body.style.paddingRight = a + "px")
        }
        Tn === void 0 && (Tn = document.body.style.overflow, document.body.style.overflow = "hidden")
    },
    DT = function() {
        Pn !== void 0 && (document.body.style.paddingRight = Pn, Pn = void 0), Tn !== void 0 && (document.body.style.overflow = Tn, Tn = void 0)
    },
    MT = function(n) {
        return n ? n.scrollHeight - n.scrollTop <= n.clientHeight : !1
    },
    OT = function(n, t) {
        var a = n.targetTouches[0].clientY - hi;
        return $u(n.target) ? !1 : t && t.scrollTop === 0 && a > 0 || MT(t) && a < 0 ? dr(n) : (n.stopPropagation(), !0)
    },
    LT = function(n, t) {
        if (!n) {
            console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");
            return
        }
        if (!Za.some(function(r) {
                return r.targetElement === n
            })) {
            var a = {
                targetElement: n,
                options: t || {}
            };
            Za = [].concat(IT(Za), [a]), Ru ? (n.ontouchstart = function(r) {
                r.targetTouches.length === 1 && (hi = r.targetTouches[0].clientY)
            }, n.ontouchmove = function(r) {
                r.targetTouches.length === 1 && OT(r, n)
            }, cr || (document.addEventListener("touchmove", dr, vi ? {
                passive: !1
            } : void 0), cr = !0)) : ET(t)
        }
    },
    AT = function() {
        Ru ? (Za.forEach(function(n) {
            n.targetElement.ontouchstart = null, n.targetElement.ontouchmove = null
        }), cr && (document.removeEventListener("touchmove", dr, vi ? {
            passive: !1
        } : void 0), cr = !1), hi = -1) : DT(), Za = []
    };
const BT = le({
        name: "Lightbox",
        setup() {
            const {
                lightboxImages: e,
                currentLightboxImageIndex: n,
                currentLightboxImage: t,
                closeLightbox: a,
                isLightboxOpen: r,
                isFirstImage: i,
                isLastImage: o,
                isImageGalleryMode: s,
                onLightboxClickOutside: l,
                handleLightboxNav: d,
                goToNextImage: g,
                goToPreviousImage: m
            } = en(), p = A(null), {
                enableMoveEvents: f
            } = Nl({
                move: {
                    drag: !0,
                    swipe: !0
                },
                onMoveLeft: g,
                onMoveRight: m
            });
            return Le(() => {
                pr(p, b => {
                    b.target.matches("[data-lightbox-button],[data-lightbox-nav]") || a()
                }), f(), window.document.addEventListener("keydown", d)
            }), Et(() => {
                a(), f(!1), document.removeEventListener("keydown", d)
            }), {
                lightboxImages: e,
                currentLightboxImageIndex: n,
                currentLightboxImage: t,
                closeLightbox: a,
                isImageGalleryMode: s,
                isFirstImage: i,
                isLastImage: o,
                isLightboxOpen: r,
                onLightboxClickOutside: l,
                goToNextImage: g,
                goToPreviousImage: m,
                lightboxRef: p
            }
        },
        async mounted() {
            await this.$nextTick(), LT(this.$refs.lightboxRef)
        },
        beforeUnmount() {
            AT()
        }
    }),
    RT = {
        key: 0,
        class: "lightbox",
        role: "dialog",
        "aria-modal": "true"
    },
    $T = {
        class: "lightbox__container"
    },
    NT = E("button", {
        class: "lightbox__button lightbox__button--nav lightbox__button--prev",
        "data-lightbox-button": ""
    }, null, -1),
    xT = [NT],
    HT = ["src", "alt"],
    VT = E("button", {
        "data-lightbox-button": "",
        class: "lightbox__button lightbox__button--nav lightbox__button--next"
    }, null, -1),
    UT = [VT];

function YT(e, n, t, a, r, i) {
    return c(), F(Mt, {
        name: "fade",
        appear: ""
    }, {
        default: _e(() => [e.isLightboxOpen ? (c(), h("div", RT, [E("button", {
            class: "lightbox__button lightbox__button--close",
            title: "close-ligthbox-button",
            "data-lightbox-button": "",
            onClick: n[0] || (n[0] = (...o) => e.closeLightbox && e.closeLightbox(...o))
        }), E("div", $T, [E("div", {
            class: J(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: n[1] || (n[1] = (...o) => e.goToPreviousImage && e.goToPreviousImage(...o))
        }, xT, 2), De(Mt, {
            name: "fade",
            mode: "out-in"
        }, {
            default: _e(() => [(c(), h("img", {
                key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                ref: "lightboxRef",
                class: J(["lightbox__image", {
                    "lightbox__image--multiple": e.isImageGalleryMode,
                    "lightbox__image--single": !e.isImageGalleryMode
                }]),
                src: e.currentLightboxImage.src,
                alt: e.currentLightboxImage.alt
            }, null, 10, HT))]),
            _: 1
        }), E("div", {
            class: J(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: n[2] || (n[2] = (...o) => e.goToNextImage && e.goToNextImage(...o))
        }, UT, 2)])])) : O("", !0)]),
        _: 1
    })
}
const qT = oe(BT, [
        ["render", YT]
    ]),
    WT = le({
        __name: "Page",
        props: {
            pageData: {
                type: Object,
                required: !0
            },
            isInPreviewMode: {
                type: Boolean,
                default: !1
            }
        },
        setup(e, {
            expose: n
        }) {
            n();
            const t = e,
                {
                    pages: a,
                    blocks: r,
                    elements: i,
                    nav: o,
                    meta: s,
                    metaTitle: l,
                    ecommerceShoppingCart: d,
                    cookieBannerDisclaimer: g,
                    cookieBannerAcceptText: m,
                    cookieBannerDeclineText: p,
                    currentLocale: f,
                    languageKeys: b,
                    ecwidPages: S,
                    languageSwitcherLanguages: C,
                    siteId: w,
                    homePageId: y,
                    styles: D,
                    isNavHidden: P,
                    currentPageId: M,
                    currentPageData: R,
                    getPagePathFromId: $,
                    setPageData: Z
                } = Je(),
                {
                    isStoreTypeZyro: G,
                    shoppingCartItems: T,
                    setShoppingCartOpen: L
                } = Vt(),
                {
                    openEcwidHomepage: H,
                    openCart: z,
                    ecwidCartItemCount: V
                } = bl(),
                {
                    isLightboxOpen: I
                } = en(),
                N = Pc(),
                {
                    shouldMountAnimationsInPreview: U
                } = Ln(),
                Q = A(!1),
                _ = A(null),
                {
                    width: v
                } = iv(_),
                Y = u(() => R.value.type),
                W = u(() => Kt(D.value)),
                ee = u(() => !P.value),
                ie = u(() => M.value === y.value),
                q = u(() => a.value ? .[y.value] ? .name ? ? ""),
                k = u(() => {
                    if (!R.value ? .meta ? .password || t.isInPreviewMode) return !0;
                    const {
                        isPageOpen: se
                    } = ql({
                        pagePassword: R.value ? .meta ? .password ? ? "",
                        locale: f.value,
                        pageId: M.value
                    });
                    return se.value
                }),
                te = u(() => {
                    if (!R.value || R.value.footerSlotIsHidden) return [];
                    const se = Object.keys(r.value).find(Se => r.value[Se].slot === "footer");
                    return se ? [se] : []
                }),
                ue = u(() => R.value ? [...R.value.blocks, ...te.value] : []),
                K = u(() => PT({
                    siteId: w.value,
                    meta: s.value,
                    blocks: r.value,
                    nav: o.value,
                    pages: a.value,
                    elements: i.value,
                    languageMetaTitle: l.value,
                    currentLocale: f.value,
                    currentPageId: M.value,
                    languageSwitcherLanguages: C.value,
                    isLogoOptimized: !0,
                    shoppingCartItems: T.value,
                    ecwidCartItemCount: V.value,
                    getPagePathFromId: ({
                        pageId: se
                    }) => $({
                        pageId: se
                    }),
                    isOpen: Q.value,
                    ecwidPages: S.value
                })),
                ve = u(() => K.value.height),
                me = u(() => K.value.heightMobile),
                j = u(() => ue.value.map(se => r.value[se])),
                ne = u(() => Bu({
                    blocks: r.value,
                    elements: i.value
                })),
                Ie = u(() => s.value.defaultLocale ? ? Nt),
                ge = u(() => G.value ? d.value ? .translations ? ? {} : {}),
                qe = u(() => G.value ? d.value ? .lang ? ? "en" : null),
                gt = u(() => ne.value ? j.value.filter(se => ["BlockEcommerceProduct", "BlockEcommerceProductList"].includes(se.type)) : []),
                Yt = u(() => ne.value ? (Object.keys(i.value) ? .filter(Se => i.value[Se].type === "GridEcommerceButton")).filter(Se => j.value.some($e => $e.components ? .includes(Se))).map(Se => i.value[Se]) : []),
                Ot = u(() => ue.value.find(se => !r.value[se][La] ? .isHidden)),
                ut = u(() => ue.value.find(se => !r.value[se][ta] ? .isHidden)),
                Xt = u(() => {
                    const {
                        isTransparent: se
                    } = r.value.header.background ? ? {};
                    if (se && ee.value && me.value) return `${me.value}px`
                }),
                ua = u(() => {
                    const {
                        isTransparent: se
                    } = r.value.header.background ? ? {};
                    if (se && ee.value && ve.value) return `${ve.value}px`
                }),
                qt = se => ({ ...Ot.value === se && {
                        "--header-height": ua.value
                    },
                    ...ut.value === se && {
                        "--header-height-mobile": Xt.value
                    }
                }),
                ft = u(() => {
                    const [se] = R.value ? .blocks ? ? [];
                    if (r.value ? .[se] ? .background ? .current === "image") return {
                        type: "block-background",
                        id: se
                    };
                    if (r.value ? .[se] ? .type === "BlockBlogList") return {
                        type: "block-blog-list",
                        id: se
                    };
                    if (r.value ? .[se] ? .type === "BlockEcommerceProduct") return {
                        type: "block-ecommerce-product",
                        id: se
                    };
                    if (r.value ? .[se] ? .type === "BlockEcommerceProductList") return {
                        type: "block-ecommerce-product-list",
                        id: se
                    };
                    const $e = ue.value.filter(tt => r.value[tt] ? .components ? .length > 0).flatMap(tt => r.value[tt].components.map(dt => ({
                        blockId: tt,
                        elementId: dt
                    }))).filter(({
                        elementId: tt
                    }) => i.value[tt] ? .type === "GridImage").map(({
                        blockId: tt,
                        elementId: dt
                    }) => {
                        const de = i.value[dt],
                            Me = de.mobile ? ? de.desktop,
                            {
                                width: Ce,
                                height: kt
                            } = Me ? ? Ac(r.value[tt], de.settings.styles.position);
                        return {
                            elementId: dt,
                            imageRatio: kt / Ce
                        }
                    })[0];
                    return $e ? {
                        type: "grid-image",
                        id: $e ? .elementId
                    } : {}
                }),
                Jt = se => {
                    if (!se) {
                        window.scrollTo({
                            top: 0,
                            left: 0,
                            behavior: "smooth"
                        });
                        return
                    }
                    eo(se)
                },
                Ia = () => {
                    ne.value && L(!0)
                },
                ca = se => {
                    const {
                        target: Se,
                        href: $e
                    } = se, dt = Se === "_blank" || $a() || t.isInPreviewMode ? "_blank" : "_self";
                    window.open($e, dt)
                },
                x = async se => {
                    if (!se.target) return;
                    const Se = se.target.closest("a");
                    if (!Se) return;
                    const {
                        href: $e,
                        pathname: tt,
                        origin: dt,
                        hash: de,
                        target: Me,
                        search: Ce
                    } = Se;
                    if (!$e) return;
                    if (se.preventDefault(), window.location.origin !== dt) {
                        ca(Se);
                        return
                    }
                    const {
                        slug: Rt
                    } = $c({
                        path: tt,
                        languageKeys: b.value,
                        defaultLocale: Ie.value
                    }), cn = Rt ? Object.keys(a.value).find(Vu => a.value[Vu].slug === Rt) : y.value, Nu = window.location.pathname === tt, wr = new URLSearchParams(Ce).get("store-page"), xu = Object.keys(S.value).includes(cn), fi = !!wr || xu, kr = Me === "_blank", Sr = $e.replace(dt, ""), Hu = `${window.location.pathname}${window.location.search}${window.location.hash}`;
                    if (Nu && !kr && Jt(de), kr && !t.isInPreviewMode && !$a() ? window.open($e, Me) : (kr && t.isInPreviewMode || Hu !== Sr) && (fi ? window.location.assign($e) : t.isInPreviewMode ? N.push(Sr) : window.location.assign(Sr), de && Jt(de), Q.value = !1), !!fi) {
                        if (!wr) {
                            if (!window.Ecwid) return;
                            H();
                            return
                        }
                        wr === "cart" && z()
                    }
                };
            Ve(() => t.pageData, se => {
                Z(se)
            }, {
                immediate: !0
            }), Ve(() => t.pageData, async () => {
                t.isInPreviewMode && (U.value = !0)
            }), Le(() => {
                Jt(window.location.hash)
            });
            const re = {
                props: t,
                pages: a,
                blocks: r,
                elements: i,
                nav: o,
                meta: s,
                metaTitle: l,
                ecommerceShoppingCart: d,
                cookieBannerDisclaimer: g,
                cookieBannerAcceptText: m,
                cookieBannerDeclineText: p,
                currentLocale: f,
                languageKeys: b,
                ecwidPages: S,
                languageSwitcherLanguages: C,
                siteId: w,
                homePageId: y,
                styles: D,
                isNavHidden: P,
                currentPageId: M,
                currentPage: R,
                getPagePathFromId: $,
                setPageData: Z,
                isStoreTypeZyro: G,
                shoppingCartItems: T,
                setShoppingCartOpen: L,
                openEcwidHomepage: H,
                openCart: z,
                ecwidCartItemCount: V,
                isLightboxOpen: I,
                router: N,
                shouldMountAnimationsInPreview: U,
                isNavOpen: Q,
                blockListRef: _,
                screenWidth: v,
                currentPageType: Y,
                pageCSSVars: W,
                isHeaderVisible: ee,
                isCurrentPageHomepage: ie,
                homepageName: q,
                shouldRenderPage: k,
                pageBlocksSlotFooter: te,
                currentPageBlocks: ue,
                headerProps: K,
                headerHeight: ve,
                headerHeightMobile: me,
                currentPageBlockData: j,
                isLocaleWithEcommerceItems: ne,
                defaultLocale: Ie,
                ecommerceTranslations: ge,
                language: qe,
                currentPageEcommerceBlocks: gt,
                currentPageEcommerceComponents: Yt,
                firstVisibleDesktopBlockId: Ot,
                firstVisibleMobileBlockId: ut,
                visibleMobileHeaderHeight: Xt,
                visibleDesktopHeaderHeight: ua,
                getHeaderHeightStyles: qt,
                lcp: ft,
                scrollToHash: Jt,
                handleCartClick: Ia,
                redirectToThirdPartyLink: ca,
                handleGlobalClick: x,
                StickyTrigger: Oc,
                CookieBanner: td,
                BlockUser: Yy,
                PasswordPage: ib,
                EcommerceShoppingCartProviderUser: Gb,
                EcommerceModalRoot: dC,
                BlockHeader: kT,
                Lightbox: qT
            };
            return Object.defineProperty(re, "__isScriptSetup", {
                enumerable: !1,
                value: !0
            }), re
        }
    }),
    FT = {
        ref: "blockListRef",
        class: "blocks"
    };

function GT(e, n, t, a, r, i) {
    return c(), h(pe, null, [a.shouldRenderPage ? (c(), h("main", {
        key: 0,
        style: Re(a.pageCSSVars),
        class: "page",
        onClick: a.handleGlobalClick
    }, [a.blocks.header.settings.isSticky ? (c(), F(a.StickyTrigger, {
        key: 0
    })) : O("", !0), a.isHeaderVisible ? (c(), F(a.BlockHeader, ze({
        key: 1
    }, a.headerProps, {
        onToggleVisibility: n[0] || (n[0] = o => a.isNavOpen = !a.isNavOpen),
        onCartClick: a.handleCartClick
    }), null, 16)) : O("", !0), E("div", FT, [(c(!0), h(pe, null, ke(a.currentPageBlocks, o => (c(), F(a.BlockUser, {
        id: a.blocks[o].htmlId || o,
        key: o,
        data: a.blocks[o],
        blocks: a.blocks,
        lcp: a.lcp,
        "page-id": a.currentPageId,
        "ecommerce-translations": a.ecommerceTranslations,
        "current-page-type": a.currentPageType,
        components: a.elements,
        "screen-width": a.screenWidth,
        style: Re(a.getHeaderHeightStyles(o)),
        "current-locale": a.currentLocale,
        "is-cart-visible": a.headerProps.isCartVisible,
        "is-in-preview-mode": a.props.isInPreviewMode,
        "is-first-visible-desktop-block": a.firstVisibleDesktopBlockId === o,
        "is-first-visible-mobile-block": a.firstVisibleMobileBlockId === o
    }, null, 8, ["id", "data", "blocks", "lcp", "page-id", "ecommerce-translations", "current-page-type", "components", "screen-width", "style", "current-locale", "is-cart-visible", "is-in-preview-mode", "is-first-visible-desktop-block", "is-first-visible-mobile-block"]))), 128))], 512), a.meta.isCookieBarEnabled ? (c(), F(a.CookieBanner, {
        key: 2,
        disclaimer: a.cookieBannerDisclaimer || "",
        "accept-text": a.cookieBannerAcceptText,
        "decline-text": a.cookieBannerDeclineText,
        "site-meta": a.meta
    }, null, 8, ["disclaimer", "accept-text", "decline-text", "site-meta"])) : O("", !0), a.isLocaleWithEcommerceItems ? (c(), F(a.EcommerceShoppingCartProviderUser, {
        key: 3,
        "ecommerce-translations": a.ecommerceTranslations,
        language: a.language,
        "is-header-sticky": a.headerProps.isSticky,
        "is-nav-hidden": !a.isHeaderVisible,
        "current-page-ecommerce-blocks": a.currentPageEcommerceBlocks,
        "current-page-ecommerce-components": a.currentPageEcommerceComponents,
        "is-in-preview-mode": a.props.isInPreviewMode
    }, null, 8, ["ecommerce-translations", "language", "is-header-sticky", "is-nav-hidden", "current-page-ecommerce-blocks", "current-page-ecommerce-components", "is-in-preview-mode"])) : O("", !0), De(a.EcommerceModalRoot, {
        "ecommerce-translations": a.ecommerceTranslations,
        language: a.language,
        "current-locale": a.currentLocale,
        "is-cart-visible": a.headerProps.isCartVisible,
        "is-in-preview-mode": a.props.isInPreviewMode
    }, null, 8, ["ecommerce-translations", "language", "current-locale", "is-cart-visible", "is-in-preview-mode"])], 4)) : (c(), F(a.PasswordPage, {
        key: 1,
        "page-id": a.currentPageId,
        locale: a.currentLocale,
        "default-locale": a.defaultLocale,
        "in-preview-mode": t.isInPreviewMode,
        "current-page-data": a.currentPage,
        "homepage-name": a.homepageName,
        "is-current-page-homepage": a.isCurrentPageHomepage
    }, null, 8, ["page-id", "locale", "default-locale", "in-preview-mode", "current-page-data", "homepage-name", "is-current-page-homepage"])), a.isLightboxOpen ? (c(), F(a.Lightbox, {
        key: 2
    })) : O("", !0)], 64)
}
const JT = oe(WT, [
    ["render", GT]
]);
export {
    JT as
    default
};