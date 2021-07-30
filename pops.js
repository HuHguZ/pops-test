(() => {
    alert("hello");
    console.log("hello");
    ("use strict");
    var e = {
        d: (t, s) => {
          for (var n in s)
            e.o(s, n) &&
              !e.o(t, n) &&
              Object.defineProperty(t, n, { enumerable: !0, get: s[n] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }
      },
      t = {};
    e.r(t);
    var s = {};
    e.r(s), e.d(s, { subscribe: () => d, unsubscribe: () => u });
    const n = (e) => {
        const {
          extended_zone: t,
          timezone_diff: s,
          timezone_offset: n,
          ignore_timezone_check: i
        } = e;
        if (i) return !0;
        if (void 0 !== n) {
          const i = -1 * new Date().getTimezoneOffset();
          if (Math.abs(i - 60 * n) > s)
            return (
              ((e) => {
                (e.capping = 86400),
                  (e.frequency = 1),
                  (e.every_view = !1),
                  (e.every_page = !1),
                  (e.every_session = !1);
              })(e),
              !t
            );
        }
        return !0;
      },
      i = (e, t) => {
        const s = t.length / 2,
          n = t.substr(0, s),
          i = t.substr(s);
        return JSON.parse(
          e
            .split("")
            .map((e) => {
              const t = i.indexOf(e);
              return -1 !== t ? n[t] : e;
            })
            .join("")
        );
      },
      o = (e) =>
        new Promise((t) => {
          setTimeout(t, e);
        }),
      r = [
        () => {
          let e;
          const t = window.outerWidth - window.innerWidth > 160,
            s = window.outerHeight - window.innerHeight > 160;
          return (
            (e = !(
              (s && t) ||
              !(
                (window.Firebug &&
                  window.Firebug.chrome &&
                  window.Firebug.chrome.isInitialized) ||
                t ||
                s
              )
            )),
            e
          );
        },
        () => {
          let e;
          const t = document.createElement("img");
          return (
            Object.defineProperty(t, "id", {
              get: function () {
                throw ((e = !0), new Error("0"));
              }
            }),
            (e = !1),
            console.dir(t),
            console.clear(),
            e
          );
        }
      ];
    let a = !1;
    const c = async (e = null) => {
      if (a) {
        const t = (() => {
          for (const e of r)
            try {
              if (!e()) return !1;
            } catch (e) {
              return !1;
            }
          return !0;
        })();
        e !== t && l.forEach((e) => e(t)), await o(500), c(t);
      }
    };
    let l = [];
    const d = (e) => {
        l.push(e), l.length > 0 && !a && ((a = !0), c());
      },
      u = (e) => {
        (l = l.filter((t) => t !== e)), l.length < 1 && a && (a = !1);
      },
      h = 0,
      p = {
        1: { name: "error", value: 1 },
        2: { name: "warning", value: 2 },
        3: { name: "info", value: 3 },
        4: { name: "debug", value: 4 }
      },
      w = () => {},
      g = "interactive",
      m = { loading: 0, [g]: 1, complete: 2 },
      f = (e) => m[document.readyState] >= m[e],
      v = (e, t) => {
        f(e)
          ? t()
          : ((e, t) => {
              const s = () => {
                f(e) &&
                  (document.removeEventListener("readystatechange", s), t());
              };
              document.addEventListener("readystatechange", s);
            })(e, t);
      },
      y = (e, t, s, n = "important") => {
        e.style.setProperty(t, s, n);
      },
      b = (e, t, s) => {
        Object.keys(t).forEach((n) => {
          y(e, n, t[n], s);
        });
      },
      S = (e = 150) =>
        new Promise((t) => {
          v(g, () => {
            const s = document.createElement("div");
            b(s, { position: "absolute", opacity: "0", bottom: "0", left: "0" }),
              (s.innerHTML = "advertiser"),
              (s.className = "ad_slot"),
              document.body.appendChild(s),
              setTimeout(() => {
                t(0 === s.offsetHeight), s.remove();
              }, e);
          });
        }),
      E = (e, t) => {
        const s = [];
        for (let n = e.charCodeAt(0); n <= t.charCodeAt(0); n += 1)
          s.push(String.fromCharCode(n));
        return s;
      },
      k = (e) => {
        for (let t = e.length - 1; t > 0; t--) {
          const s = Math.floor(Math.random() * (t + 1));
          [e[t], e[s]] = [e[s], e[t]];
        }
        return e;
      },
      P = [...E("a", "z"), ...E("0", "9")],
      _ = () => {
        try {
          return window.self !== window.top;
        } catch (e) {
          return !0;
        }
      },
      O = "lotame_16256_audiences";
    Array.isArray(window[O]) || (window[O] = []);
    const x = () => {
        var e;
        const t =
            null === (e = document.querySelector('meta[name="keywords"]')) ||
            void 0 === e
              ? void 0
              : e.getAttribute("content"),
          s = t ? t.split(",").map((e) => e.trim()) : [],
          n = [];
        let i = 0;
        for (const e of s) {
          if (i + e.length > 50) break;
          n.push(e), (i += e.length);
        }
        return { title: document.title.slice(0, 50), keywords: n };
      },
      I = () => Math.floor(1e4 * Math.random()) + 1;
    let L = "",
      $ = 0;
    S()
      .then((e) => {
        $ = e ? 1 : 4;
      })
      .catch(() => {
        $ = 2;
      });
    const D = (e) => {
        L = e;
      },
      V = (e = {}) => {
        try {
          const [, t] = [[...P], k([...P])],
            s = {
              ...e,
              a: I(),
              s: `${window.screen.width}x${window.screen.height}`,
              b: `${Math.max(
                document.documentElement.clientWidth,
                window.innerWidth || 0
              )}x${Math.max(
                document.documentElement.clientHeight,
                window.innerHeight || 0
              )}`,
              r: document.referrer.substring(0, 255),
              q: window.location.href.substring(0, 255),
              h: I(),
              l: navigator.language || navigator.userLanguage,
              t: new Date().getTimezoneOffset(),
              z: I(),
              k: $,
              u: L,
              f: _(),
              e: t.slice(0, 15).join(""),
              o: void 0 === window.orientation,
              m: Date.now(),
              w: encodeURIComponent(JSON.stringify(x())),
              ltm: JSON.stringify(Array.isArray(window[O]) ? window[O] : [])
            };
          let n = JSON.stringify(s);
          return (
            (n = window
              .btoa(n.split("").reverse().join(""))
              .split("")
              .reverse()
              .join("")),
            (n = n.replace(/=/g, "")),
            (n = encodeURIComponent(n)),
            n
          );
        } catch (e) {
          return "";
        }
      },
      z = (e, t, s) => {
        const n = V(s),
          i = t || /\[mdglh\]/g;
        return n ? e.replace(i, n) : e;
      },
      N = (...e) => {},
      M = (e) => {
        const t = 4 * parseInt(e.slice(0, 4), 36) + 4,
          s = parseInt(e.slice(t, t + 4), 36),
          n = `${e.slice(4, t)}${e.slice(t + 4)}`,
          i = [];
        for (let e = 0; e < n.length; e += 4) i.push(n.slice(e, e + 4));
        const o = i.reduce(
          (e, t) =>
            `${e}${((e, t) => String.fromCharCode(parseInt(e, 36) - t))(t, s)}`,
          ""
        );
        return JSON.parse(o);
      },
      T =
        (M("0002003k005j002m005o005u005f005s005t005u005j005u005j005b005m003k"),
        M("000000250033005800570059004u0050004y0033"),
        M("00060068008e008d008e008h0068005a")),
      j =
        (M("00090017003d003i003g0035001i003i003d00170009"),
        M("0000001u002s0051004r0052004n0033004k005300520052004x004w002s"),
        M("0001005c004e007m00770073007l0077007k005c"),
        M("000000450053006x0072007b006y006w007d0053"),
        async (e, t) => {
          try {
            return (
              await fetch(e, {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                body: t
              }),
              !0
            );
          } catch (e) {
            return !1;
          }
        }),
      A = (e, t) => {
        try {
          const s = JSON.stringify(t);
          ("function" == typeof navigator.sendBeacon &&
            ((e, t) =>
              navigator.sendBeacon(
                e,
                new Blob([t], { type: "application/json" })
              ))(e, s)) ||
            j(e, s);
        } catch (e) {}
      },
      C = { Accept: "application/json", "Content-Type": "application/json" },
      F = (e) => {
        if (!e.ok) throw new Error(`${e.status} ${e.statusText}`);
        return e;
      },
      q = (e, t, s = {}) =>
        fetch(e, {
          method: "POST",
          headers: C,
          body: JSON.stringify(t),
          ...s
        }).then(F),
      R = "1bgbb027-3b87-ae67-26ar-hz150f600z16",
      U = "bf001a61-ea58-4c69-33b4-1b01154b26f5",
      B = (e, t) =>
        q(
          `${e}?f=${encodeURIComponent(
            window.location.href.slice(0, window.location.href.indexOf("/", 8))
          )}`,
          { key: t },
          { credentials: "include" }
        )
          .then((e) => e.json())
          .then(({ key: e }) => (D(e), localStorage.setItem(U, e), e)),
      J = (e) => {
        const t = (() => {
          const e = localStorage.getItem(U);
          return "string" == typeof e && e.length > 0 ? (D(e), e) : "";
        })();
        return window[R]
          ? window[R]
          : e
          ? t
            ? ((window[R] = Promise.resolve(t)),
              Promise.race([B(e, t).catch(() => t), o(8e3).then(() => t)]).then(
                (e) => {
                  window[R] = Promise.resolve(e);
                }
              ),
              window[R])
            : ((window[R] = Promise.race([
                B(e, t).catch(() => t),
                o(8e3).then(() => t)
              ])),
              window[R])
          : ((window[R] = Promise.resolve(t)), window[R]);
      },
      H = (e, t, o) =>
        new Promise(async (r) => {
          const a = i(e, t);
          if (o.withTimeZoneCheck && !n(a)) throw new Error("tz check");
          const c = {
            settings: a,
            metric: (e) =>
              ((e, t, s) => {
                e && A(e, { event: t, type: s });
              })(a.metric_url, e, o.metricType)
          };
          if (
            (o.withLogger &&
              (c.log = ((e, t = {}) => {
                const { level: s = h } = t;
                return Object.entries(p).reduce(
                  (t, [, { name: n, value: i }]) =>
                    i > s ? { ...t, [n]: w } : { ...t, [n]: e },
                  {}
                );
              })(console.log, { level: a.trace || h })),
            o.withDevtools && (c.devtoolsChecker = s),
            o.withUserId)
          ) {
            const e = await J(a.uuid_url).catch(N);
            e && D(e);
          }
          r(c);
        }),
      W = (e) => "process_" + (17 * e - 34),
      K = (e, t) => (...s) => {
        alert(`once ${t} ${window[W(t)]}`),
          window[W(t)] || ((window[W(t)] = 1), e(...s));
      },
      Z = (e, t, s) => {
        switch (t) {
          case "time":
            s && s > 0 ? setTimeout(e, 1e3 * s) : e();
            break;
          case "clicks":
            if (s && s > 0) {
              let t = 0;
              const n = () => {
                (t += 1),
                  t >= s && (e(), window.removeEventListener("click", n, !0));
              };
              window.addEventListener("click", n, !0);
            } else e();
            break;
          default:
            e();
        }
      };
    function G(e, t, s) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
            })
          : (e[t] = s),
        e
      );
    }
    const Q = (e, t) => Math.floor(e + Math.random() * (t + 1 - e)),
      X = (e) => `000${e.toString(36)}`.slice(-4),
      Y = (e, t) => {
        const s = JSON.stringify(e),
          n = t ? 42 : Q(0, 255),
          i = t ? 0 : Q(0, s.length),
          o = Array.from(s).reduce((e, t) => `${e}${X(t.charCodeAt(0) + n)}`, "");
        return `${X(i)}${o.slice(0, 4 * i)}${X(n)}${o.slice(4 * i)}`;
      };
    const ee = class {
      constructor(e) {
        this.key = Y(e, !0);
      }
      parseValue(e) {
        return e ? M(e) : null;
      }
      getValue() {
        return this.parseValue(localStorage.getItem(this.key));
      }
      setValue(e) {
        localStorage.setItem(this.key, Y(e));
      }
      removeValue() {
        localStorage.removeItem(this.key);
      }
    };
    class te {
      static secondsToMilliseconds(e) {
        return e * te.Second;
      }
      static defaultOnEveryViewOrSessionResetFactory(e) {
        return (t) => {
          t.reset(e);
        };
      }
      static passFromNow(e) {
        return Date.now() - e;
      }
      static didPassFromNow(e, t) {
        return te.passFromNow(e) > t;
      }
      static didPassFromNowIfSet(e, t) {
        return e > 0 && te.didPassFromNow(e, t);
      }
      constructor(e, t = {}) {
        n(e);
        const {
          key: s,
          zone_id: i,
          every_page: o,
          every_view: r,
          every_session: a,
          capping: c,
          frequency: l,
          interval: d = 0
        } = e;
        (this.zoneId = s || i),
          (this.frequency = l),
          (this.everyPage = o),
          (this.everyView = r),
          (this.everySession = a),
          (this.capping = te.secondsToMilliseconds(c)),
          (this.interval = te.secondsToMilliseconds(d)),
          (this.store = new ee(this.getKey()));
        const {
          EveryViewMetric: u,
          EverySessionMetric: h,
          defaultOnEveryViewOrSessionResetFactory: p
        } = te;
        (this.metric = t.metric),
          (this.onEveryView = t.onEveryView || p(u)),
          (this.onEverySession = t.onEverySession || p(h)),
          this.onInitialization(),
          window.addEventListener("beforeunload", this.onBeforeUnload.bind(this));
      }
      can(e = 0) {
        if (this.isDisabled()) return 60 * te.Minute;
        this.actualize(this.capping);
        const { impressions: t } = this.getState();
        if (t.length >= this.frequency)
          return this.capping - te.passFromNow(t[0] - e);
        const s = t[t.length - 1];
        return s ? this.interval - te.passFromNow(s - e) : 0;
      }
      reset(e) {
        this.setState({ impressions: [] }), this.metric && this.metric(e);
      }
      impression() {
        this.setState({
          impressions: [...this.getState().impressions, Date.now()]
        });
      }
      updateLastImpression() {
        this.setState({
          impressions: [...this.getState().impressions.slice(0, -1), Date.now()]
        });
      }
      didPassFromLoadedAt(e) {
        const { loadedAt: t } = this.getState(),
          { didPassFromNow: s, secondsToMilliseconds: n } = te;
        return s(t, n(e));
      }
      isDisabled() {
        return this.frequency <= 0 || this.capping <= 0;
      }
      actualize(e) {
        const { impressions: t } = this.getState();
        this.setState({ impressions: t.filter((t) => !te.didPassFromNow(t, e)) });
      }
      getKey() {
        return this.everyPage
          ? `${this.zoneId}${window.location.href.slice(-14)}`
          : `${this.zoneId}`;
      }
      getState() {
        const e = this.store.getValue();
        return e || { loadedAt: -1, unloadedAt: -1, impressions: [] };
      }
      setState(e) {
        this.store.setValue({ ...this.getState(), ...e });
      }
      onInitialization() {
        const { unloadedAt: e } = this.getState();
        this.everySession &&
          (te.didPassFromNowIfSet(e, te.Minute)
            ? this.onEverySession(this)
            : e < 0 && this.actualize(6e4)),
          this.everyView && this.onEveryView(this);
        const { loadedAt: t } = this.getState();
        te.didPassFromNow(t, this.capping) &&
          this.setState({ loadedAt: Date.now() });
      }
      onBeforeUnload() {
        this.setState({ unloadedAt: Date.now() });
      }
    }
    G(te, "EveryViewMetric", "every_view"),
      G(te, "EverySessionMetric", "every_session"),
      G(te, "Second", 1e3),
      G(te, "Minute", 60 * te.Second);
    const se = te,
      ne = M("000000160024003w0046003y0024"),
      ie = M("000000160024004e003v003w004f004a0024"),
      oe = M("000000160024004a0049004a004f004a0024"),
      re = M("000000160024004e003v003w004f0048003y003z004c0024"),
      ae = M("000000160024004a0049004a004f0048003y003z004c0024"),
      ce = M(
        "0005001q003p003u0040003l000s003y0042003h003s003f003i003l00400043003l003l003u003f003h003k003z003f003z003l003j003v003u003k003z001q"
      ),
      le = M("0004004a0065006m0065003c006i006p005z006m0069006j0069006k004a"),
      de = M(
        "0004005p007k0081007k004r007x0084007e007y007k007y007y007o007u007t005p"
      ),
      ue = M("0001005l004n007r007q007r007a007v0080007r007g005l"),
      he = M(
        "000c006g008m008e008f008i0087008k008q008e008o008l008m005i008f00890085008i008b008s008b008i006g"
      ),
      pe = (e, t, s) => {
        const n = t ? "css_include" : "css_exclude";
        if (!Array.isArray(s[n]) || 0 === s[n].length) return !0;
        let i = !t;
        return (
          s[n].forEach((s) => {
            if (0 === s.indexOf(".")) {
              e.classList.contains(s.slice(1).toLowerCase()) && (i = t);
              let n = e;
              for (; (n = n.parentElement); )
                if (n.classList.contains(s.slice(1).toLowerCase())) {
                  i = t;
                  break;
                }
            } else
              0 === s.indexOf("#")
                ? e.id.toLowerCase() === s.slice(1).toLowerCase() && (i = t)
                : e.matches(s) && (i = t);
          }),
          i
        );
      },
      we = (e, t) => pe(e, !0, t),
      ge = (e, t) => pe(e, !1, t),
      me = ({ metric: e, settings: t }) =>
        new se(
          ((e) => {
            const { [ce]: t, [le]: s } = e,
              n = { ...e, [de]: s, interval: t };
            return delete n[le], delete n[ce], n;
          })(t),
          { metric: e }
        );
    function fe(e, t, { log: s, settings: n }) {
      return (
        null == s || s.debug("check frequency"),
        !(e.can() > 0) &&
          !(
            t &&
            (null == s || s.debug("check css", we(t, n), ge(t, n)),
            !we(t, n) || !ge(t, n))
          ) &&
          (null == s || s.debug("can"), !0)
      );
    }
    const ve = class extends ee {
      constructor(e, t, s) {
        super(`c_imp_${e}`),
          (this.ctx = t),
          (this.onOuterChange = s),
          window.addEventListener("message", this.onMessage.bind(this));
      }
      onMessage(e) {
        try {
          const s = JSON.parse(e.data);
          var t;
          if (s.b > 0 && s.c >= 0)
            this.ctx.metric("imp sync"),
              null === (t = this.ctx.log) ||
                void 0 === t ||
                t.debug("update BIDStore from redirect", s),
              this.saveImpression(s.b, s.c),
              this.onOuterChange();
        } catch (e) {}
      }
      getExclude(e) {
        if (e) {
          const t = Date.now();
          return Object.entries(e.impressions).reduce((e, [s, n]) => {
            const i = n.filter((e) => e > t);
            return i.length ? { ...e, [Number(s)]: i.length } : e;
          }, {});
        }
        return {};
      }
      getInclude(e) {
        return e ? e.total : {};
      }
      getOptions(e) {
        const t = this.getValue();
        return e.includes("ck9")
          ? { e: this.getExclude(t), i: this.getInclude(t) }
          : { exclude: this.getExclude(t), include: this.getInclude(t) };
      }
      getImpressionNumber(e) {
        const t = this.getValue();
        return t && t.total[e] ? t.total[e] + 1 : 1;
      }
      saveImpression(e, t) {
        const s = this.getValue();
        if (s) {
          if (
            (s.total[e] ? (s.total[e] += 1) : (s.total[e] = 1), s.impressions[e])
          ) {
            const n = Date.now();
            s.impressions[e] = [
              ...s.impressions[e].filter((e) => e > n),
              n + 1e3 * t
            ];
          } else s.impressions[e] = [Date.now() + 1e3 * t];
          this.setValue(s);
        } else
          this.setValue({
            total: { [e]: 1 },
            impressions: { [e]: [Date.now() + 1e3 * t] }
          });
      }
    };
    let ye;
    !(function (e) {
      (e[(e.Idle = 0)] = "Idle"),
        (e[(e.Fetching = 1)] = "Fetching"),
        (e[(e.Success = 2)] = "Success"),
        (e[(e.Fail = 3)] = "Fail");
    })(ye || (ye = {}));
    const be = {
      status: ye.Idle,
      fetchedAt: 0,
      response: null,
      previousState: null
    };
    class Se {
      static isStateExpired(e, t = 0) {
        return (
          !!e.response && Date.now() - e.fetchedAt > 1e3 * e.response.ttl - t
        );
      }
      static isSuccessfullyPrefetchState(e) {
        return (
          e.status === ye.Success && null !== e.response && !Se.isStateExpired(e)
        );
      }
      constructor(e, t) {
        const { settings: s } = e,
          { zone_id: n, rot_url: i, devtools_protection: o } = s;
        (this.ctx = e),
          (this.rotationUrl = i),
          (this.stop = !1),
          (this.unused = 0),
          (this.isDevtoolsOpened = !1),
          (this.ignorePrefetchResponse = !1),
          (this.fm = t),
          (this.state = new ee(`st_prf_${n}`)),
          (this.campaigns = new ve(n, e, this.reset.bind(this))),
          (this.can = this.can.bind(this)),
          (this.watch = this.watch.bind(this)),
          (this.prefetch = this.prefetch.bind(this)),
          (this.onDevtoolsOpenStatusChange = this.onDevtoolsOpenStatusChange.bind(
            this
          )),
          o && d(this.onDevtoolsOpenStatusChange),
          this.watch(this.prefetch);
      }
      reset() {
        var e;
        this.getState().status !== ye.Fail &&
          (this.state.setValue(be),
          (this.ignorePrefetchResponse = !0),
          null === (e = this.ctx.log) ||
            void 0 === e ||
            e.debug("reset, cause outer freq changed"));
      }
      getState() {
        const e = this.state.getValue();
        return null === e ? be : e;
      }
      canRePrefetch() {
        const e = this.getState();
        if (e.status === ye.Idle) return !0;
        if (e.status === ye.Fail) return !0;
        const t = e.status === ye.Success && Se.isStateExpired(e, 1e4);
        var s, n;
        if (
          t &&
          ((this.unused += 1),
          null === (s = this.ctx.log) ||
            void 0 === s ||
            s.debug("unused prefetch responses", this.unused),
          this.unused >= 2)
        )
          return (
            (this.stop = !0),
            (this.unused = 0),
            null === (n = this.ctx.log) ||
              void 0 === n ||
              n.debug("2 unused prefetch responses", "stop prefetch"),
            !1
          );
        return t;
      }
      onDevtoolsOpenStatusChange(e) {
        var t;
        (this.isDevtoolsOpened = e),
          null === (t = this.ctx.log) ||
            void 0 === t ||
            t.debug(
              `devtools was ${e ? "opened" : "closed"}, prefetch ${
                e ? "stopped" : " is running"
              }`
            );
      }
      async prefetch() {
        var e, t;
        null === (e = this.ctx.log) ||
          void 0 === e ||
          e.debug("prefetched, start");
        try {
          var s;
          const e = this.getState();
          this.state.setValue({ ...e, status: ye.Fetching, previousState: e });
          const i = await q(
              z(this.rotationUrl),
              this.campaigns.getOptions(this.rotationUrl)
            ),
            o = ((e) => "url" in e)((t = await i.json()))
              ? { bid: t.bid, cap: t.cap, url: t.url, ttl: (t.ttl || 300) - 5 }
              : { bid: t.b, cap: t.c, url: t.u, ttl: (t.t || 300) - 5 };
          var n;
          if (this.ignorePrefetchResponse)
            return (
              (this.ignorePrefetchResponse = !1),
              void (
                null === (n = this.ctx.log) ||
                void 0 === n ||
                n.debug("prefetched was ignored")
              )
            );
          this.state.setValue({
            ...this.getState(),
            status: ye.Success,
            fetchedAt: Date.now(),
            response: o
          }),
            null === (s = this.ctx.log) ||
              void 0 === s ||
              s.debug("prefetched url was updated");
        } catch (e) {
          this.state.setValue({
            ...this.getState(),
            status: ye.Fail,
            fetchedAt: Date.now(),
            response: null
          }),
            (this.stop = !0);
        }
      }
      can() {
        return new Promise((e, t) => {
          var s;
          if (
            (null === (s = this.ctx.log) || void 0 === s || s.debug("prefetch?"),
            this.stop || this.isDevtoolsOpened || !this.canRePrefetch())
          )
            return void t(new Error("command@sleep@1000"));
          const n = this.fm.can(1e4);
          n > 0 ? t(new Error(`command@sleep@${n}`)) : e();
        });
      }
      watch(e) {
        return this.can()
          .then(e)
          .then(() => {
            throw Error("command@continue");
          })
          .catch((t) => {
            if ("command@continue" === t.message) return this.watch(e);
            if (t.message.includes("command@sleep")) {
              var s;
              const [, , n] = t.message.split("@");
              return (
                null === (s = this.ctx.log) ||
                  void 0 === s ||
                  s.debug(`sleep ${n}ms`),
                o(Number(n)).then(() => this.watch(e))
              );
            }
          });
      }
      impression(e, t) {
        var s;
        this.fm.impression(),
          this.campaigns.saveImpression(e, t),
          null === (s = this.ctx.log) ||
            void 0 === s ||
            s.debug("campaign frequency updated", this.campaigns.getValue());
      }
      getPrefetchResponse() {
        var e;
        this.stop = !1;
        const t = this.getState();
        let s;
        var n;
        if (Se.isSuccessfullyPrefetchState(t))
          (s = t.response),
            this.state.setValue(be),
            null === (n = this.ctx.log) ||
              void 0 === n ||
              n.debug("select prefetched url");
        else if (
          t.previousState &&
          Se.isSuccessfullyPrefetchState(t.previousState)
        ) {
          var i;
          (s = t.previousState.response),
            this.state.setValue({ ...this.getState(), previousState: null }),
            null === (i = this.ctx.log) ||
              void 0 === i ||
              i.debug("select previously prefetched url");
        }
        return s
          ? [!1, s, this.campaigns.getImpressionNumber(s.bid)]
          : (null === (e = this.ctx.log) ||
              void 0 === e ||
              e.debug("select fallback url"),
            [t.status === ye.Fail, null, null]);
      }
    }
    const Ee = Se,
      ke = window.open,
      Pe = (...e) => {
        try {
          return window.open(...e);
        } catch (t) {
          return ke(...e);
        }
      };
    let _e = 0,
      Oe = 0;
    v(g, () => {
      _e = Date.now();
    });
    const xe = (e) => (t) => {
      const s = Date.now(),
        n = z(t, null, { n: e, c: _e ? s - _e : -1, d: Oe ? s - Oe : -1 });
      return (Oe = s), n;
    };
    let Ie = xe(0);
    const Le = (e) => (t, s, n, { settings: { philanthropic_level: i } }) =>
        s && n
          ? (e(t), void (1 === i && Pe(s)))
          : s
          ? (e(t), void (window.location.href = s))
          : void e(t),
      $e = (e, t) => {
        Pe(t || window.location.href), (window.location.href = Ie(e));
      },
      De = {
        [ne]: (e) => {
          window.location.href = Ie(e);
        },
        [ie]: Le((e) => Pe(Ie(e))),
        [oe]: Le(
          (
            e,
            t = `status=1,fullscreen=yes,width=${window.width},height=${window.height}`
          ) => Pe(Ie(e), Math.floor(1e6 * Math.random()).toString(36), t)
        ),
        [re]: $e,
        [ae]: $e
      },
      Ve = (e, t, s, n) => {
        const {
          metric: i,
          settings: { url: o, [he]: r, [ue]: a }
        } = t;
        let c, l;
        if (e) {
          const t = e.target,
            s = "function" == typeof t.closest ? t.closest("a") : t;
          if (s && s.href) {
            const t = s.href,
              n = "_blank" === s.target;
            if (n) {
              if ([2, 4].includes(r)) return void i("skip, on click mode 2/4");
            } else if ([3, 4].includes(r))
              return void i("skip, on click mode 3/4");
            ((e) => {
              try {
                if (!e) return !0;
                if ("#" === e.slice(window.location.href.length)[0]) return !1;
              } catch (e) {
                return !0;
              }
              return (
                window.location.href !== e &&
                "javascript" !== e.trim().slice(0, 10).toLowerCase()
              );
            })(s.href) &&
              (e.preventDefault(),
              (a !== re && a !== ae) || e.stopImmediatePropagation(),
              (l = t),
              (c = n));
          }
        }
        if ("function" == typeof De[a]) {
          i("show");
          const [e, r, d] = n.getPrefetchResponse();
          r && d
            ? (n.impression(r.bid, r.cap), (Ie = xe(d)), De[a](r.url, l, c, t))
            : (i("no url" + (e ? ", failed" : "")),
              s.impression(),
              (Ie = xe(0)),
              De[a](o, l, c, t));
        }
      };
    (async () => {
      const e = await H(
        '{"hgj5_l3":yswsf,"8ckv5":p,"nnl3_ncm":"6889://mgvkm6gr8:2eee/nr5c-l3/","t58clv_ncm":"6889://mgvkm6gr8:2eee/t58clv","cg8_ncm":"6889://mgvkm6gr8:2eee/vc5k8l05r/9g9r/yswsf?vow=[t3dm6]","3508ggmr_9cg85v8lgj":7kmr5,"8lt5hgj5_3l77":ie,"8lt5hgj5_g77r58":2,"5185j353_hgj5":7kmr5,"ldjgc5_8lt5hgj5_v65vo":8cn5,"96lmkj86cg9lv_m505m":e,"ncm":"6889://mgvkm6gr8:2eee/4r-c53lc5v8?h=yswsf&t3=[t3dm6]&z=p&v=2ee","vrr_51vmn35":[".dm1-mljo",".dm1-8518",".dm1-ltkd5",".dm1-vmgr5",".dm1-65k35c",".dm1-85kr5c",".dm1-vmgr5-lvgj",".dm1-35rvcl98lgj",".dm1-kmmgx-zn88gj",".dm1-vkjv5m-zn88gj",".dm1-xk85ctkco",".dm1-xk85ctkco-9c50l5x-vmgr5",".dm1-xk85ctkco-9c50l5x-3k8k",".dm1-xk85ctkco-9c50l5x-vgj8klj5c"],"vk99ljd":iee,"9g9_8a95":"9g9n9","7c5un5jva":2,"505ca_9kd5":7kmr5,"505ca_0l5x":8cn5,"505ca_0lrl8":7kmr5,"k3zmgvo_r6gx":8cn5,"8lt5_hgj5_3l77":ie,"nv_zcgxr5c_9g9_8a95":"zmkvo_c53lc5v8","35mka_z57gc5_r8kc8_vmlvor":e,"35mka_z57gc5_r8kc8_r5vgj3r":e,"lj85c0km_z58x55j_k3r_vmlvor":e,"lj85c0km_z58x55j_k3r_r5vgj3r":2}',
        "abcdefghijklmnopqrstuvwxyz0123456789kzv357d6l4omtjg9ucr8n0x1ahesy2pqibfw",
        {
          withUserId: !0,
          withLogger: !0,
          withTimeZoneCheck: !0,
          withDevtools: !0,
          metricType: T
        }
      );
      alert("ctx created");
      const { settings: t, log: s, metric: n } = e,
        { zone_id: i } = t;
      K(() => {
        const i = me(e),
          o = new Ee(e, i);
        n("load"), null == s || s.debug(t), alert("once stared");
        const { ab_servers_url: r, devtools_protection: a } = t;
        r && fetch(r, { mode: "no-cors" }).catch(N);
        let c = !1,
          l = !1,
          u = !1,
          h = !1;
        a &&
          (alert("devttols prorection"),
          d((e) => {
            c = e;
          }));
        const p = (e) => {
            (() => {
              try {
                const e = document.getElementsByTagName("iframe"),
                  t = document.getElementsByTagName("object");
                return [...e, ...t];
              } catch (e) {
                return null == s || s.error(e), [];
              }
            })().forEach(e);
          },
          w = () => {
            p((t) => {
              try {
                document.activeElement === t &&
                  fe(i, t.parentElement, e) &&
                  (t.blur(),
                  navigator.userAgent.match(/Version\/[\d\.]+.*Safari/) &&
                    window.focus());
              } catch (e) {
                null == s || s.error(e);
              }
            });
          };
        let m = 0;
        const f = (t) => {
            if ((n("click"), null == s || s.debug("click"), t.isTrusted))
              if (l && !c && fe(i, t.target, e)) {
                if (Date.now() - m < 500)
                  return void (null == s || s.debug("click prevent by timeout"));
                null == s || s.debug("click imp"),
                  (m = Date.now()),
                  Ve(t, e, i, o);
              } else n("skip, frequency");
          },
          y = (e) => {
            null == s || s.debug("window click"), (h = !0), f(e);
          },
          b = (e) => {
            null == s || s.debug("document click"),
              h || ((u = !0), window.removeEventListener("click", y, !0)),
              u && f(e);
          },
          S = (e) => {
            null == s || s.debug("video click"), f(e);
          },
          E = () => {
            setTimeout(() => {
              null == s || s.debug("blur"),
                p((t) => {
                  if (document.activeElement === t) {
                    if (1 === Number(t.$IG$))
                      return void (
                        null == s || s.debug("our iframe clicked, return")
                      );
                    n("blur"),
                      l && !c && fe(i, t.parentElement, e)
                        ? (null == s || s.debug("blur imp"), Ve(null, e, i, o))
                        : n("skip, frequency");
                  }
                });
            }, 0);
          };
        if ((alert(`is in iframe? ${_()}`), _()))
          try {
            window.top.addEventListener("blur", E, !0),
              window.top.addEventListener("pointerup", y, !0),
              window.top.document.addEventListener("pointerup", b, !0),
              null == s || s.debug("listen top window");
          } catch (e) {
            try {
              window.parent.addEventListener("blur", E, !0),
                window.parent.addEventListener("pointerup", y, !0),
                window.parent.document.addEventListener("pointerup", b, !0),
                null == s || s.debug("listen parent window");
            } catch (e) {
              window.addEventListener("blur", E, !0),
                window.addEventListener("pointerup", y, !0),
                document.addEventListener("pointerup", b, !0),
                null == s || s.debug("listen current window");
            }
          }
        else
          alert("set blur pointerup listeners"),
            window.addEventListener("blur", E, !0),
            window.addEventListener("pointerup", y, !0),
            document.addEventListener("pointerup", b, !0);
        v(g, () => {
          alert("dom interactive!");
          const e = document.getElementsByTagName("video");
          for (let t = 0; t < e.length; t++)
            try {
              e[t].addEventListener("play", S),
                e[t].addEventListener("pause", S),
                e[t].addEventListener("touchend", S, { passive: !0 });
            } catch (e) {
              null == s || s.debug(e);
            }
        });
        const k = ((e) => {
          const {
            delay_before_start_seconds: t,
            delay_before_start_clicks: s
          } = e;
          return t > 0
            ? { type: "time", delay: t }
            : s > 0
            ? { type: "clicks", delay: s }
            : { type: "time", delay: 0 };
        })(e.settings);
        let { delay: P } = k;
        const { type: O } = k;
        null == s || s.debug("delay", { type: O, delay: P }),
          "time" === O &&
            i.didPassFromLoadedAt(P) &&
            (null == s ||
              s.debug("time delay reset by loaded at", { type: O, delay: P }),
            (P = 0)),
          Z(
            () => {
              alert("run callback"),
                n("watching"),
                null == s || s.debug("watching"),
                (l = !0),
                w(),
                setTimeout(w, 0),
                setTimeout(w, 1e3),
                setInterval(w, 2500);
            },
            O,
            P
          );
      }, i)();
    })(),
      (self.MyLibrary = t);
  })();
  