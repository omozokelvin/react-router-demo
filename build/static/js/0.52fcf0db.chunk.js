(this['webpackJsonpreact-complete-guide'] =
  this['webpackJsonpreact-complete-guide'] || []).push([
  [0],
  {
    20: function (t, e, r) {
      'use strict';
      var n = r(22),
        o = r(23),
        a = r(5),
        i = r(24),
        c = r.n(i),
        u = r(0),
        s = function (t, e) {
          return 'SEND' === e.type
            ? { data: null, error: null, status: 'pending' }
            : 'SUCCESS' === e.type
            ? { data: e.responseData, error: null, status: 'completed' }
            : 'ERROR' === e.type
            ? { data: null, error: e.errorMessage, status: 'completed' }
            : t;
        };
      e.a = function (t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = Object(u.useReducer)(s, {
            status: e ? 'pending' : null,
            data: null,
            error: null,
          }),
          i = Object(a.a)(r, 2),
          f = i[0],
          h = i[1],
          l = Object(u.useCallback)(
            (function () {
              var e = Object(o.a)(
                c.a.mark(function e(r) {
                  var n;
                  return c.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              h({ type: 'SEND' }),
                              (e.prev = 1),
                              (e.next = 4),
                              t(r)
                            );
                          case 4:
                            (n = e.sent),
                              h({ type: 'SUCCESS', responseData: n }),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              h({
                                type: 'ERROR',
                                errorMessage:
                                  e.t0.message || 'Something went wrong!',
                              });
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            [t]
          );
        return Object(n.a)({ sendRequest: l }, f);
      };
    },
    21: function (t, e, r) {
      'use strict';
      r.d(e, 'd', function () {
        return u;
      }),
        r.d(e, 'e', function () {
          return f;
        }),
        r.d(e, 'b', function () {
          return l;
        }),
        r.d(e, 'a', function () {
          return y;
        }),
        r.d(e, 'c', function () {
          return v;
        });
      var n = r(22),
        o = r(23),
        a = r(24),
        i = r.n(a),
        c = 'https://react-http-54590-default-rtdb.firebaseio.com';
      function u() {
        return s.apply(this, arguments);
      }
      function s() {
        return (s = Object(o.a)(
          i.a.mark(function t() {
            var e, r, o, a, u;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (t.next = 2), fetch(''.concat(c, '/quotes.json'));
                  case 2:
                    return (e = t.sent), (t.next = 5), e.json();
                  case 5:
                    if (((r = t.sent), e.ok)) {
                      t.next = 8;
                      break;
                    }
                    throw new Error(r.message || 'Could not fetch quotes.');
                  case 8:
                    for (a in ((o = []), r))
                      (u = Object(n.a)({ id: a }, r[a])), o.push(u);
                    return t.abrupt('return', o);
                  case 11:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function f(t) {
        return h.apply(this, arguments);
      }
      function h() {
        return (h = Object(o.a)(
          i.a.mark(function t(e) {
            var r, o, a;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(''.concat(c, '/quotes/').concat(e, '.json'))
                    );
                  case 2:
                    return (r = t.sent), (t.next = 5), r.json();
                  case 5:
                    if (((o = t.sent), r.ok)) {
                      t.next = 8;
                      break;
                    }
                    throw new Error(o.message || 'Could not fetch quote.');
                  case 8:
                    return (
                      (a = Object(n.a)({ id: e }, o)), t.abrupt('return', a)
                    );
                  case 10:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function l(t) {
        return p.apply(this, arguments);
      }
      function p() {
        return (p = Object(o.a)(
          i.a.mark(function t(e) {
            var r, n;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(''.concat(c, '/quotes.json'), {
                        method: 'POST',
                        body: JSON.stringify(e),
                        headers: { 'Content-Type': 'application/json' },
                      })
                    );
                  case 2:
                    return (r = t.sent), (t.next = 5), r.json();
                  case 5:
                    if (((n = t.sent), r.ok)) {
                      t.next = 8;
                      break;
                    }
                    throw new Error(n.message || 'Could not create quote.');
                  case 8:
                    return t.abrupt('return', null);
                  case 9:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function y(t) {
        return d.apply(this, arguments);
      }
      function d() {
        return (d = Object(o.a)(
          i.a.mark(function t(e) {
            var r, n;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(
                        ''.concat(c, '/comments/').concat(e.quoteId, '.json'),
                        {
                          method: 'POST',
                          body: JSON.stringify(e.commentData),
                          headers: { 'Content-Type': 'application/json' },
                        }
                      )
                    );
                  case 2:
                    return (r = t.sent), (t.next = 5), r.json();
                  case 5:
                    if (((n = t.sent), r.ok)) {
                      t.next = 8;
                      break;
                    }
                    throw new Error(n.message || 'Could not add comment.');
                  case 8:
                    return t.abrupt('return', { commentId: n.name });
                  case 9:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
      function v(t) {
        return g.apply(this, arguments);
      }
      function g() {
        return (g = Object(o.a)(
          i.a.mark(function t(e) {
            var r, o, a, u, s;
            return i.a.wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return (
                      (t.next = 2),
                      fetch(''.concat(c, '/comments/').concat(e, '.json'))
                    );
                  case 2:
                    return (r = t.sent), (t.next = 5), r.json();
                  case 5:
                    if (((o = t.sent), r.ok)) {
                      t.next = 8;
                      break;
                    }
                    throw new Error(o.message || 'Could not get comments.');
                  case 8:
                    for (u in ((a = []), o))
                      (s = Object(n.a)({ id: u }, o[u])), a.push(s);
                    return t.abrupt('return', a);
                  case 11:
                  case 'end':
                    return t.stop();
                }
            }, t);
          })
        )).apply(this, arguments);
      }
    },
    22: function (t, e, r) {
      'use strict';
      function n(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      function o(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function a(t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? o(Object(r), !0).forEach(function (e) {
                n(t, e, r[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(r, e)
                );
              });
        }
        return t;
      }
      r.d(e, 'a', function () {
        return a;
      });
    },
    23: function (t, e, r) {
      'use strict';
      function n(t, e, r, n, o, a, i) {
        try {
          var c = t[a](i),
            u = c.value;
        } catch (s) {
          return void r(s);
        }
        c.done ? e(u) : Promise.resolve(u).then(n, o);
      }
      function o(t) {
        return function () {
          var e = this,
            r = arguments;
          return new Promise(function (o, a) {
            var i = t.apply(e, r);
            function c(t) {
              n(i, o, a, c, u, 'next', t);
            }
            function u(t) {
              n(i, o, a, c, u, 'throw', t);
            }
            c(void 0);
          });
        };
      }
      r.d(e, 'a', function () {
        return o;
      });
    },
    24: function (t, e, r) {
      t.exports = r(28);
    },
    28: function (t, e, r) {
      var n = (function (t) {
        'use strict';
        var e,
          r = Object.prototype,
          n = r.hasOwnProperty,
          o = 'function' === typeof Symbol ? Symbol : {},
          a = o.iterator || '@@iterator',
          i = o.asyncIterator || '@@asyncIterator',
          c = o.toStringTag || '@@toStringTag';
        function u(t, e, r) {
          return (
            Object.defineProperty(t, e, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            }),
            t[e]
          );
        }
        try {
          u({}, '');
        } catch (N) {
          u = function (t, e, r) {
            return (t[e] = r);
          };
        }
        function s(t, e, r, n) {
          var o = e && e.prototype instanceof v ? e : v,
            a = Object.create(o.prototype),
            i = new P(n || []);
          return (
            (a._invoke = (function (t, e, r) {
              var n = h;
              return function (o, a) {
                if (n === p) throw new Error('Generator is already running');
                if (n === y) {
                  if ('throw' === o) throw a;
                  return C();
                }
                for (r.method = o, r.arg = a; ; ) {
                  var i = r.delegate;
                  if (i) {
                    var c = k(i, r);
                    if (c) {
                      if (c === d) continue;
                      return c;
                    }
                  }
                  if ('next' === r.method) r.sent = r._sent = r.arg;
                  else if ('throw' === r.method) {
                    if (n === h) throw ((n = y), r.arg);
                    r.dispatchException(r.arg);
                  } else 'return' === r.method && r.abrupt('return', r.arg);
                  n = p;
                  var u = f(t, e, r);
                  if ('normal' === u.type) {
                    if (((n = r.done ? y : l), u.arg === d)) continue;
                    return { value: u.arg, done: r.done };
                  }
                  'throw' === u.type &&
                    ((n = y), (r.method = 'throw'), (r.arg = u.arg));
                }
              };
            })(t, r, i)),
            a
          );
        }
        function f(t, e, r) {
          try {
            return { type: 'normal', arg: t.call(e, r) };
          } catch (N) {
            return { type: 'throw', arg: N };
          }
        }
        t.wrap = s;
        var h = 'suspendedStart',
          l = 'suspendedYield',
          p = 'executing',
          y = 'completed',
          d = {};
        function v() {}
        function g() {}
        function m() {}
        var w = {};
        u(w, a, function () {
          return this;
        });
        var b = Object.getPrototypeOf,
          x = b && b(b(_([])));
        x && x !== r && n.call(x, a) && (w = x);
        var j = (m.prototype = v.prototype = Object.create(w));
        function O(t) {
          ['next', 'throw', 'return'].forEach(function (e) {
            u(t, e, function (t) {
              return this._invoke(e, t);
            });
          });
        }
        function E(t, e) {
          function r(o, a, i, c) {
            var u = f(t[o], t, a);
            if ('throw' !== u.type) {
              var s = u.arg,
                h = s.value;
              return h && 'object' === typeof h && n.call(h, '__await')
                ? e.resolve(h.__await).then(
                    function (t) {
                      r('next', t, i, c);
                    },
                    function (t) {
                      r('throw', t, i, c);
                    }
                  )
                : e.resolve(h).then(
                    function (t) {
                      (s.value = t), i(s);
                    },
                    function (t) {
                      return r('throw', t, i, c);
                    }
                  );
            }
            c(u.arg);
          }
          var o;
          this._invoke = function (t, n) {
            function a() {
              return new e(function (e, o) {
                r(t, n, e, o);
              });
            }
            return (o = o ? o.then(a, a) : a());
          };
        }
        function k(t, r) {
          var n = t.iterator[r.method];
          if (n === e) {
            if (((r.delegate = null), 'throw' === r.method)) {
              if (
                t.iterator.return &&
                ((r.method = 'return'),
                (r.arg = e),
                k(t, r),
                'throw' === r.method)
              )
                return d;
              (r.method = 'throw'),
                (r.arg = new TypeError(
                  "The iterator does not provide a 'throw' method"
                ));
            }
            return d;
          }
          var o = f(n, t.iterator, r.arg);
          if ('throw' === o.type)
            return (
              (r.method = 'throw'), (r.arg = o.arg), (r.delegate = null), d
            );
          var a = o.arg;
          return a
            ? a.done
              ? ((r[t.resultName] = a.value),
                (r.next = t.nextLoc),
                'return' !== r.method && ((r.method = 'next'), (r.arg = e)),
                (r.delegate = null),
                d)
              : a
            : ((r.method = 'throw'),
              (r.arg = new TypeError('iterator result is not an object')),
              (r.delegate = null),
              d);
        }
        function L(t) {
          var e = { tryLoc: t[0] };
          1 in t && (e.catchLoc = t[1]),
            2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
            this.tryEntries.push(e);
        }
        function S(t) {
          var e = t.completion || {};
          (e.type = 'normal'), delete e.arg, (t.completion = e);
        }
        function P(t) {
          (this.tryEntries = [{ tryLoc: 'root' }]),
            t.forEach(L, this),
            this.reset(!0);
        }
        function _(t) {
          if (t) {
            var r = t[a];
            if (r) return r.call(t);
            if ('function' === typeof t.next) return t;
            if (!isNaN(t.length)) {
              var o = -1,
                i = function r() {
                  for (; ++o < t.length; )
                    if (n.call(t, o)) return (r.value = t[o]), (r.done = !1), r;
                  return (r.value = e), (r.done = !0), r;
                };
              return (i.next = i);
            }
          }
          return { next: C };
        }
        function C() {
          return { value: e, done: !0 };
        }
        return (
          (g.prototype = m),
          u(j, 'constructor', m),
          u(m, 'constructor', g),
          (g.displayName = u(m, c, 'GeneratorFunction')),
          (t.isGeneratorFunction = function (t) {
            var e = 'function' === typeof t && t.constructor;
            return (
              !!e &&
              (e === g || 'GeneratorFunction' === (e.displayName || e.name))
            );
          }),
          (t.mark = function (t) {
            return (
              Object.setPrototypeOf
                ? Object.setPrototypeOf(t, m)
                : ((t.__proto__ = m), u(t, c, 'GeneratorFunction')),
              (t.prototype = Object.create(j)),
              t
            );
          }),
          (t.awrap = function (t) {
            return { __await: t };
          }),
          O(E.prototype),
          u(E.prototype, i, function () {
            return this;
          }),
          (t.AsyncIterator = E),
          (t.async = function (e, r, n, o, a) {
            void 0 === a && (a = Promise);
            var i = new E(s(e, r, n, o), a);
            return t.isGeneratorFunction(r)
              ? i
              : i.next().then(function (t) {
                  return t.done ? t.value : i.next();
                });
          }),
          O(j),
          u(j, c, 'Generator'),
          u(j, a, function () {
            return this;
          }),
          u(j, 'toString', function () {
            return '[object Generator]';
          }),
          (t.keys = function (t) {
            var e = [];
            for (var r in t) e.push(r);
            return (
              e.reverse(),
              function r() {
                for (; e.length; ) {
                  var n = e.pop();
                  if (n in t) return (r.value = n), (r.done = !1), r;
                }
                return (r.done = !0), r;
              }
            );
          }),
          (t.values = _),
          (P.prototype = {
            constructor: P,
            reset: function (t) {
              if (
                ((this.prev = 0),
                (this.next = 0),
                (this.sent = this._sent = e),
                (this.done = !1),
                (this.delegate = null),
                (this.method = 'next'),
                (this.arg = e),
                this.tryEntries.forEach(S),
                !t)
              )
                for (var r in this)
                  't' === r.charAt(0) &&
                    n.call(this, r) &&
                    !isNaN(+r.slice(1)) &&
                    (this[r] = e);
            },
            stop: function () {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ('throw' === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function (t) {
              if (this.done) throw t;
              var r = this;
              function o(n, o) {
                return (
                  (c.type = 'throw'),
                  (c.arg = t),
                  (r.next = n),
                  o && ((r.method = 'next'), (r.arg = e)),
                  !!o
                );
              }
              for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                var i = this.tryEntries[a],
                  c = i.completion;
                if ('root' === i.tryLoc) return o('end');
                if (i.tryLoc <= this.prev) {
                  var u = n.call(i, 'catchLoc'),
                    s = n.call(i, 'finallyLoc');
                  if (u && s) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  } else if (u) {
                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                  } else {
                    if (!s)
                      throw new Error('try statement without catch or finally');
                    if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                  }
                }
              }
            },
            abrupt: function (t, e) {
              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r];
                if (
                  o.tryLoc <= this.prev &&
                  n.call(o, 'finallyLoc') &&
                  this.prev < o.finallyLoc
                ) {
                  var a = o;
                  break;
                }
              }
              a &&
                ('break' === t || 'continue' === t) &&
                a.tryLoc <= e &&
                e <= a.finallyLoc &&
                (a = null);
              var i = a ? a.completion : {};
              return (
                (i.type = t),
                (i.arg = e),
                a
                  ? ((this.method = 'next'), (this.next = a.finallyLoc), d)
                  : this.complete(i)
              );
            },
            complete: function (t, e) {
              if ('throw' === t.type) throw t.arg;
              return (
                'break' === t.type || 'continue' === t.type
                  ? (this.next = t.arg)
                  : 'return' === t.type
                  ? ((this.rval = this.arg = t.arg),
                    (this.method = 'return'),
                    (this.next = 'end'))
                  : 'normal' === t.type && e && (this.next = e),
                d
              );
            },
            finish: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.finallyLoc === t)
                  return this.complete(r.completion, r.afterLoc), S(r), d;
              }
            },
            catch: function (t) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                  var n = r.completion;
                  if ('throw' === n.type) {
                    var o = n.arg;
                    S(r);
                  }
                  return o;
                }
              }
              throw new Error('illegal catch attempt');
            },
            delegateYield: function (t, r, n) {
              return (
                (this.delegate = { iterator: _(t), resultName: r, nextLoc: n }),
                'next' === this.method && (this.arg = e),
                d
              );
            },
          }),
          t
        );
      })(t.exports);
      try {
        regeneratorRuntime = n;
      } catch (o) {
        'object' === typeof globalThis
          ? (globalThis.regeneratorRuntime = n)
          : Function('r', 'regeneratorRuntime = r')(n);
      }
    },
  },
]);
//# sourceMappingURL=0.52fcf0db.chunk.js.map
