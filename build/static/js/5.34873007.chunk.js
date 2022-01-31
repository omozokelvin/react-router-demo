(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [5],
  {
    25: function (e, t, c) {
      e.exports = { noquotes: 'NoQuotesFound_noquotes__3DIYb' };
    },
    26: function (e, t, c) {
      e.exports = { item: 'QuoteItem_item__2dOvb' };
    },
    27: function (e, t, c) {
      e.exports = {
        list: 'QuoteList_list__3pzcl',
        sorting: 'QuoteList_sorting__rL6H1',
      };
    },
    37: function (e, t, c) {
      'use strict';
      c.r(t);
      var s = c(0),
        n = c(4),
        i = c(25),
        o = c.n(i),
        r = c(1),
        a = function () {
          return Object(r.jsxs)('div', {
            className: o.a.noquotes,
            children: [
              Object(r.jsx)('p', { children: 'No quotes found!' }),
              Object(r.jsx)(n.b, {
                className: 'btn',
                to: '/new-quote',
                children: 'Add a Quote',
              }),
            ],
          });
        },
        u = c(2),
        d = c(26),
        j = c.n(d),
        l = function (e) {
          return Object(r.jsxs)('li', {
            className: j.a.item,
            children: [
              Object(r.jsxs)('figure', {
                children: [
                  Object(r.jsx)('blockquote', {
                    children: Object(r.jsx)('p', { children: e.text }),
                  }),
                  Object(r.jsx)('figcaption', { children: e.author }),
                ],
              }),
              Object(r.jsx)(n.b, {
                className: 'btn',
                to: '/quotes/'.concat(e.id),
                children: 'View Fullscreen',
              }),
            ],
          });
        },
        b = c(27),
        h = c.n(b),
        x = function (e) {
          var t,
            c,
            n = Object(u.i)(),
            i = Object(u.h)(),
            o =
              'asc' ===
              new URLSearchParams(
                null === i || void 0 === i ? void 0 : i.search
              ).get('sort'),
            a =
              ((t = e.quotes),
              (c = o),
              t.sort(function (e, t) {
                return c ? (e.id > t.id ? 1 : -1) : e.id < t.id ? 1 : -1;
              }));
          return Object(r.jsxs)(s.Fragment, {
            children: [
              Object(r.jsx)('div', {
                className: h.a.sorting,
                children: Object(r.jsxs)('button', {
                  onClick: function () {
                    n({
                      pathname: i.pathname,
                      search: '?sort='.concat(o ? 'desc' : 'asc'),
                    });
                  },
                  children: ['Sort ', o ? 'Descending' : 'Ascending'],
                }),
              }),
              Object(r.jsx)('ul', {
                className: h.a.list,
                children: a.map(function (e) {
                  return Object(r.jsx)(
                    l,
                    { id: e.id, author: e.author, text: e.text },
                    e.id
                  );
                }),
              }),
            ],
          });
        },
        O = c(9),
        m = c(20),
        p = c(21);
      t.default = function () {
        var e = Object(m.a)(p.d, !0),
          t = e.sendRequest,
          c = e.status,
          n = e.data,
          i = e.error;
        return (
          Object(s.useEffect)(
            function () {
              t();
            },
            [t]
          ),
          'pending' === c
            ? Object(r.jsx)('div', {
                className: 'centered',
                children: Object(r.jsx)(O.a, {}),
              })
            : i
            ? Object(r.jsx)('p', { className: 'centered focused', children: i })
            : 'completed' !== c || (n && 0 !== n.length)
            ? Object(r.jsx)(x, { quotes: n })
            : Object(r.jsx)(a, {})
        );
      };
    },
  },
]);
//# sourceMappingURL=5.34873007.chunk.js.map
