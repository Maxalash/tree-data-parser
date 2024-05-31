import { openBlock as t, createElementBlock as d, createElementVNode as r, defineComponent as w, ref as v, computed as g, resolveComponent as p, Fragment as a, normalizeStyle as k, normalizeClass as A, createTextVNode as N, createBlock as u, toDisplayString as C, renderList as y, createCommentVNode as M, watchEffect as b } from "vue";
const _ = (e, n) => {
  const o = e.__vccOpts || e;
  for (const [s, l] of n)
    o[s] = l;
  return o;
}, B = {}, R = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "6px",
  viewBox: "0 0 62 101",
  preserveAspectRatio: "xMidYMid meet"
}, T = /* @__PURE__ */ r("g", {
  transform: "translate(0,101) scale(0.1,-0.1)",
  stroke: "none"
}, [
  /* @__PURE__ */ r("path", { d: `M65 940 l-60 -60 190 -190 190 -190 -190 -190 -190 -190 60 -60 60\r
-60 250 250 250 250 -250 250 -250 250 -60 -60z` })
], -1), z = [
  T
];
function D(e, n) {
  return t(), d("svg", R, z);
}
const O = /* @__PURE__ */ _(B, [["render", D]]), q = {}, x = {
  xmlns: "http://www.w3.org/2000/svg",
  height: "6px",
  viewBox: "0 0 102 65",
  preserveAspectRatio: "xMidYMid meet"
}, E = /* @__PURE__ */ r("g", {
  transform: "translate(0,65) scale(0.1,-0.1)",
  stroke: "none"
}, [
  /* @__PURE__ */ r("path", { d: `M67 572 l-57 -57 250 -250 250 -250 250 250 250 250 -60 60 -60 60\r
-190 -190 -190 -190 -188 188 c-103 103 -190 187 -192 187 -3 0 -31 -26 -63\r
-58z` })
], -1), V = [
  E
];
function L(e, n) {
  return t(), d("svg", x, V);
}
const S = /* @__PURE__ */ _(q, [["render", L]]), Y = w({
  name: "TreeNode",
  props: {
    node: {
      type: Object,
      required: !0
    },
    nodes: {
      type: Array,
      required: !0
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  components: { ArrowRight: O, ArrowDown: S },
  setup(e) {
    const n = v(!1), o = () => {
      n.value = !n.value;
    }, s = g(() => e.nodes.filter((f) => f.parent_id === e.node.id)), l = g(() => s.value.length > 0 ? n.value ? "open" : "closed" : "line");
    return {
      isOpen: n,
      toggle: o,
      children: s,
      props: e,
      flag: l
    };
  }
}), j = { style: { width: "20px", display: "inline-block" } };
function F(e, n, o, s, l, f) {
  var m;
  const h = p("ArrowRight"), c = p("ArrowDown"), $ = p("tree-node", !0);
  return t(), d(a, null, [
    r("li", {
      onClick: n[0] || (n[0] = (...i) => e.toggle && e.toggle(...i)),
      style: k({
        paddingLeft: e.props.depth * 20 + 20 + "px",
        cursor: ((m = e.children) == null ? void 0 : m.length) > 0 ? "pointer" : "default"
      }),
      class: A(e.props.depth == 0 ? "root" : "")
    }, [
      r("p", null, [
        r("span", j, [
          e.flag === "line" ? (t(), d(a, { key: 0 }, [
            N(" – ")
          ], 64)) : e.flag === "closed" ? (t(), u(h, { key: 1 })) : (t(), u(c, { key: 2 }))
        ]),
        r("span", null, C(e.node.title), 1)
      ])
    ], 6),
    e.isOpen ? (t(!0), d(a, { key: 0 }, y(e.children, (i) => (t(), u($, {
      key: i.id,
      node: i,
      nodes: e.nodes,
      depth: e.depth + 1
    }, null, 8, ["node", "nodes", "depth"]))), 128)) : M("", !0)
  ], 64);
}
const I = /* @__PURE__ */ _(Y, [["render", F], ["__scopeId", "data-v-5afb3b49"]]), G = w({
  name: "TreeComponent",
  props: {
    nodes: {
      type: Array,
      required: !0
    }
  },
  components: { TreeNode: I },
  setup(e) {
    const n = v([]);
    return b(() => {
      var o;
      e.nodes && (n.value = (o = e.nodes) == null ? void 0 : o.filter((s) => s.parent_id === null));
    }), {
      props: e,
      rootNodes: n
    };
  }
});
function H(e, n, o, s, l, f) {
  const h = p("tree-node");
  return t(), d("div", null, [
    r("ul", null, [
      (t(!0), d(a, null, y(e.rootNodes, (c) => (t(), u(h, {
        key: c.id,
        node: c,
        nodes: e.nodes,
        depth: 0
      }, null, 8, ["node", "nodes"]))), 128))
    ])
  ]);
}
const K = /* @__PURE__ */ _(G, [["render", H]]);
export {
  K as TreeComponent
};
