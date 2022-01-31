(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [4],
  {
    32: function (e, t, n) {
      e.exports = { comments: 'Comments_comments__iZX-v' };
    },
    33: function (e, t, n) {
      e.exports = { item: 'CommentItem_item__24mbD' };
    },
    34: function (e, t, n) {
      e.exports = { comments: 'CommentsList_comments__valp0' };
    },
    35: function (e, t, n) {
      e.exports = {
        form: 'NewCommentForm_form__2Te8b',
        loading: 'NewCommentForm_loading__2veC2',
        control: 'NewCommentForm_control__3NVeP',
        actions: 'NewCommentForm_actions__2fwWP',
      };
    },
    39: function (e, t, n) {
      'use strict';
      n.r(t);
      var c = n(5),
        o = n(0),
        s = n(2),
        m = n(20),
        a = n(21),
        r = n(9),
        i = n(32),
        d = n.n(i),
        l = n(33),
        j = n.n(l),
        u = n(1),
        b = function (e) {
          return Object(u.jsx)('li', {
            className: j.a.item,
            children: Object(u.jsx)('p', { children: e.text }),
          });
        },
        x = n(34),
        O = n.n(x),
        f = function (e) {
          return Object(u.jsx)('ul', {
            className: O.a.comments,
            children: e.comments.map(function (e) {
              return Object(u.jsx)(b, { text: e.text }, e.id);
            }),
          });
        },
        h = n(35),
        p = n.n(h),
        _ = function (e) {
          var t = Object(o.useRef)(),
            n = Object(m.a)(a.a),
            c = n.sendRequest,
            s = n.status,
            i = n.error,
            d = e.onAddedComment,
            l = e.quoteId;
          Object(o.useEffect)(
            function () {
              'completed' !== s || i || d();
            },
            [s, i, d]
          );
          var j = function (e) {
            e.preventDefault();
            var n = t.current.value;
            c({ commentData: { text: n }, quoteId: l });
          };
          return Object(u.jsxs)('form', {
            className: p.a.form,
            onSubmit: j,
            children: [
              'pending' === s &&
                Object(u.jsx)('div', {
                  className: 'centered',
                  children: Object(u.jsx)(r.a, {}),
                }),
              Object(u.jsxs)('div', {
                className: p.a.control,
                onSubmit: j,
                children: [
                  Object(u.jsx)('label', {
                    htmlFor: 'comment',
                    children: 'Your Comment',
                  }),
                  Object(u.jsx)('textarea', {
                    id: 'comment',
                    rows: '5',
                    ref: t,
                  }),
                ],
              }),
              Object(u.jsx)('div', {
                className: p.a.actions,
                children: Object(u.jsx)('button', {
                  className: 'btn',
                  children: 'Add Comment',
                }),
              }),
            ],
          });
        };
      t.default = function () {
        var e = Object(s.j)().quoteId,
          t = Object(o.useState)(!1),
          n = Object(c.a)(t, 2),
          i = n[0],
          l = n[1],
          j = Object(m.a)(a.c),
          b = j.sendRequest,
          x = j.status,
          O = j.data;
        Object(o.useEffect)(
          function () {
            b(e);
          },
          [e, b]
        );
        var h,
          p = Object(o.useCallback)(
            function () {
              b(e);
            },
            [e, b]
          );
        return (
          'pending' === x &&
            (h = Object(u.jsx)('div', {
              className: 'center',
              children: Object(u.jsx)(r.a, {}),
            })),
          'completed' === x &&
            O &&
            (null === O || void 0 === O ? void 0 : O.length) > 0 &&
            (h = Object(u.jsx)(f, { comments: O })),
          'complete' !== x ||
            (O && 0 !== O.length) ||
            (h = Object(u.jsx)('p', {
              className: 'centered',
              children: 'No comments were added yet!',
            })),
          Object(u.jsxs)('section', {
            className: d.a.comments,
            children: [
              Object(u.jsx)('h2', { children: 'User Comments' }),
              !i &&
                Object(u.jsx)('button', {
                  className: 'btn',
                  onClick: function () {
                    l(!0);
                  },
                  children: 'Add a Comment',
                }),
              i && Object(u.jsx)(_, { quoteId: e, onAddedComment: p }),
              h,
            ],
          })
        );
      };
    },
  },
]);
//# sourceMappingURL=4.23451a78.chunk.js.map
