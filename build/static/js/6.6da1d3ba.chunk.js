(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [6],
  {
    29: function (e, t, c) {
      e.exports = { card: 'Card_card__1m44e' };
    },
    30: function (e, t, c) {
      e.exports = {
        form: 'QuoteForm_form__3Ndw9',
        loading: 'QuoteForm_loading__iDpS0',
        control: 'QuoteForm_control__2lCiE',
        actions: 'QuoteForm_actions__354La',
      };
    },
    38: function (e, t, c) {
      'use strict';
      c.r(t);
      var n = c(0),
        o = c(2),
        r = c(5),
        a = c(22);
      function i(e) {
        var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          c = Object(n.useContext)(o.f),
          r = c.navigator;
        Object(n.useEffect)(
          function () {
            if (t) {
              var c = r.block(function (t) {
                var n = Object(a.a)(
                  Object(a.a)({}, t),
                  {},
                  {
                    retry: function () {
                      c(), t.retry();
                    },
                  }
                );
                e(n);
              });
              return c;
            }
          },
          [r, e, t]
        );
      }
      var s = c(29),
        u = c.n(s),
        l = c(1),
        d = function (e) {
          return Object(l.jsx)('div', {
            className: u.a.card,
            children: e.children,
          });
        },
        j = c(9),
        b = c(30),
        f = c.n(b),
        O = function (e) {
          var t = Object(n.useState)(!1),
            c = Object(r.a)(t, 2),
            o = c[0],
            a = c[1],
            s = Object(n.useRef)(),
            u = Object(n.useRef)();
          return (
            (function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              i(
                Object(n.useCallback)(
                  function (t) {
                    window.confirm(e) && t.retry();
                  },
                  [e]
                ),
                t
              );
            })(
              'Are you sure you want to leave, all you entered data will be lost',
              o
            ),
            Object(l.jsx)(n.Fragment, {
              children: Object(l.jsx)(d, {
                children: Object(l.jsxs)('form', {
                  onFocus: function () {
                    a(!0);
                  },
                  className: f.a.form,
                  onSubmit: function (t) {
                    t.preventDefault();
                    var c = s.current.value,
                      n = u.current.value;
                    e.onAddQuote({ author: c, text: n });
                  },
                  children: [
                    e.isLoading &&
                      Object(l.jsx)('div', {
                        className: f.a.loading,
                        children: Object(l.jsx)(j.a, {}),
                      }),
                    Object(l.jsxs)('div', {
                      className: f.a.control,
                      children: [
                        Object(l.jsx)('label', {
                          htmlFor: 'author',
                          children: 'Author',
                        }),
                        Object(l.jsx)('input', {
                          type: 'text',
                          id: 'author',
                          ref: s,
                        }),
                      ],
                    }),
                    Object(l.jsxs)('div', {
                      className: f.a.control,
                      children: [
                        Object(l.jsx)('label', {
                          htmlFor: 'text',
                          children: 'Text',
                        }),
                        Object(l.jsx)('textarea', {
                          id: 'text',
                          rows: '5',
                          ref: u,
                        }),
                      ],
                    }),
                    Object(l.jsx)('div', {
                      className: f.a.actions,
                      children: Object(l.jsx)('button', {
                        className: 'btn',
                        onClick: function () {
                          a(!1);
                        },
                        children: 'Add Quote',
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        },
        m = c(20),
        x = c(21);
      t.default = function () {
        var e = Object(o.i)(),
          t = Object(m.a)(x.b),
          c = t.sendRequest,
          r = t.status;
        Object(n.useEffect)(
          function () {
            'completed' === r && e('/quotes');
          },
          [e, r]
        );
        return Object(l.jsx)(O, {
          isLoading: 'pending' === r,
          onAddQuote: function (e) {
            c(e);
          },
        });
      };
    },
  },
]);
//# sourceMappingURL=6.6da1d3ba.chunk.js.map
