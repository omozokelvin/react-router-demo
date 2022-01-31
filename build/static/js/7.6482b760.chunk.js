(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [7],
  {
    31: function (e, t, c) {
      e.exports = { quote: 'HighlightedQuote_quote__nE9T6' };
    },
    40: function (e, t, c) {
      'use strict';
      c.r(t);
      var n = c(0),
        s = c(2),
        i = c(31),
        u = c.n(i),
        o = c(1),
        r = function (e) {
          return Object(o.jsxs)('figure', {
            className: u.a.quote,
            children: [
              Object(o.jsx)('p', { children: e.text }),
              Object(o.jsx)('figcaption', { children: e.author }),
            ],
          });
        },
        a = c(9),
        d = c(20),
        j = c(21);
      t.default = function () {
        var e = Object(d.a)(j.e, !0),
          t = e.sendRequest,
          c = e.status,
          i = e.data,
          u = e.error,
          l = Object(s.j)().quoteId;
        return (
          Object(n.useEffect)(
            function () {
              t(l);
            },
            [l, t]
          ),
          'pending' === c
            ? Object(o.jsx)('div', {
                className: 'centered',
                children: Object(o.jsx)(a.a, {}),
              })
            : u
            ? Object(o.jsx)('p', { className: 'centered', children: u })
            : null !== i && void 0 !== i && i.text
            ? Object(o.jsxs)(n.Fragment, {
                children: [
                  Object(o.jsx)(r, {
                    text: null === i || void 0 === i ? void 0 : i.text,
                    author: null === i || void 0 === i ? void 0 : i.author,
                  }),
                  Object(o.jsx)(s.b, {}),
                ],
              })
            : Object(o.jsx)('p', { children: 'No quote found.' })
        );
      };
    },
  },
]);
//# sourceMappingURL=7.6482b760.chunk.js.map
