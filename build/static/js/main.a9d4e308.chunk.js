(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [1],
  [
    ,
    ,
    ,
    ,
    ,
    ,
    function (e, t, n) {
      e.exports = {
        header: 'MainNavigation_header__pcWBd',
        logo: 'MainNavigation_logo__3mTft',
        nav: 'MainNavigation_nav__2KJfX',
        active: 'MainNavigation_active__oN3Ka',
      };
    },
    ,
    ,
    function (e, t, n) {
      'use strict';
      var c = n(12),
        a = n.n(c),
        s = n(1);
      t.a = function () {
        return Object(s.jsx)('div', { className: a.a.spinner });
      };
    },
    ,
    function (e, t, n) {
      e.exports = { main: 'Layout_main__auk_r' };
    },
    function (e, t, n) {
      e.exports = { spinner: 'LoadingSpinner_spinner__2Kyqv' };
    },
    ,
    ,
    ,
    ,
    function (e, t, n) {},
    ,
    function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(10),
        a = n.n(c),
        s = (n(17), n(2)),
        i = n(4),
        j = n(0),
        l = n(11),
        r = n.n(l),
        o = n(6),
        u = n.n(o),
        b = n(1),
        d = function () {
          return Object(b.jsxs)('header', {
            className: u.a.header,
            children: [
              Object(b.jsx)('div', {
                className: u.a.logo,
                children: 'Great Quotes',
              }),
              Object(b.jsx)('nav', {
                className: u.a.nav,
                children: Object(b.jsxs)('ul', {
                  children: [
                    Object(b.jsx)('li', {
                      children: Object(b.jsx)(i.c, {
                        to: '/quotes',
                        className: function (e) {
                          return e.isActive ? u.a.active : '';
                        },
                        children: 'All Quotes',
                      }),
                    }),
                    Object(b.jsx)('li', {
                      children: Object(b.jsx)(i.c, {
                        to: '/new-quote',
                        className: function (e) {
                          return e.isActive ? u.a.active : '';
                        },
                        children: 'Add a Quote',
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        },
        O = function (e) {
          return Object(b.jsxs)(j.Fragment, {
            children: [
              Object(b.jsx)(d, {}),
              Object(b.jsx)('main', {
                className: r.a.main,
                children: e.children,
              }),
            ],
          });
        },
        h = n(9),
        m = Object(j.lazy)(function () {
          return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 37));
        }),
        x = Object(j.lazy)(function () {
          return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, 38));
        }),
        p = Object(j.lazy)(function () {
          return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 40));
        }),
        v = Object(j.lazy)(function () {
          return n.e(8).then(n.bind(null, 36));
        }),
        f = Object(j.lazy)(function () {
          return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 39));
        });
      var _ = function () {
        return Object(b.jsx)(O, {
          children: Object(b.jsx)(j.Suspense, {
            fallback: Object(b.jsx)('div', {
              className: 'centered',
              children: Object(b.jsx)(h.a, {}),
            }),
            children: Object(b.jsxs)(s.e, {
              children: [
                Object(b.jsx)(s.c, {
                  path: '/',
                  element: Object(b.jsx)(s.a, { to: '/quotes' }),
                }),
                Object(b.jsx)(s.c, {
                  path: '/quotes',
                  element: Object(b.jsx)(m, {}),
                }),
                Object(b.jsxs)(s.c, {
                  path: '/quotes/:quoteId/*',
                  element: Object(b.jsx)(p, {}),
                  children: [
                    Object(b.jsx)(s.c, {
                      path: '',
                      element: Object(b.jsx)('div', {
                        className: 'centered',
                        children: Object(b.jsx)(i.b, {
                          className: 'btn--flat',
                          to: 'comments',
                          children: 'Load Comments',
                        }),
                      }),
                    }),
                    Object(b.jsx)(s.c, {
                      path: 'comments',
                      element: Object(b.jsx)(f, {}),
                    }),
                  ],
                }),
                Object(b.jsx)(s.c, {
                  path: '/new-quote',
                  element: Object(b.jsx)(x, {}),
                }),
                Object(b.jsx)(s.c, {
                  path: '*',
                  element: Object(b.jsx)(v, {}),
                }),
              ],
            }),
          }),
        });
      };
      a.a.render(
        Object(b.jsx)(i.a, { children: Object(b.jsx)(_, {}) }),
        document.getElementById('root')
      );
    },
  ],
  [[19, 2, 3]],
]);
//# sourceMappingURL=main.a9d4e308.chunk.js.map
