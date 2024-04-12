import {
    _ as c,
    d as l,
    b as m,
    e as p
} from "./_plugin-vue_export-helper.uIuuipNl.js";
import {
    aa as g
} from "./index.F1yg2eyd.js";
import {
    Z as u,
    i as d,
    c as f,
    g as w,
    a as h,
    e as x,
    d as s
} from "./addDocumentElements.DKUXGbzq.js";
const _ = ({
        domain: e,
        pageNoindex: t
    }) => {
        const n = window.origin.includes("https://latest-user-app.zyro.com"),
            o = u.some(a => window.origin.includes(a)),
            i = g.some(a => window.origin.includes(a)),
            r = !!t || (o || i) && !d;
        return {
            shouldRedirectToCanonical: e && e.toLowerCase() !== window.location.hostname.toLowerCase() && !o && !i && !d && !f() && !n,
            noindex: r
        }
    },
    C = l({
        props: {
            pageNoindex: {
                type: Boolean,
                default: !1
            },
            domain: {
                type: String,
                default: ""
            },
            canonicalUrl: {
                type: String,
                default: ""
            },
            siteMeta: {
                type: Object,
                default: null
            }
        },
        setup(e) {
            const {
                shouldRedirectToCanonical: t,
                noindex: n
            } = _({
                domain: e.domain,
                pageNoindex: e.pageNoindex
            });
            if (e.siteMeta) {
                const o = w(window.location.hostname),
                    i = h(`z-cookies-consent-${o}`) !== "0";
                x({
                    siteMeta: e.siteMeta,
                    areCookiesAllowed: i
                })
            }
            return !e.pageNoindex && n && s({
                type: "element",
                tagName: "meta",
                properties: {
                    name: "robots",
                    content: "noindex"
                }
            }), t && s({
                type: "element",
                tagName: "meta",
                properties: {
                    "http-equiv": "refresh",
                    content: `0; url=${e.canonicalUrl}`
                }
            }), s({
                type: "element",
                tagName: "meta",
                properties: {
                    name: "generator",
                    content: "Hostinger Website builder"
                }
            }), {
                shouldRedirectToCanonical: t,
                noindex: n
            }
        }
    });

function N(e, t, n, o, i, r) {
    return m(), p("div")
}
const E = c(C, [
    ["render", N]
]);
export {
    E as
    default
};