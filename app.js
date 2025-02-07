(function(e) {
    function t(t) {
        for (var n, i, s = t[0], c = t[1], l = t[2], u = 0, d = []; u < s.length; u++)
            i = s[u],
            Object.prototype.hasOwnProperty.call(r, i) && r[i] && d.push(r[i][0]),
            r[i] = 0;
        for (n in c)
            Object.prototype.hasOwnProperty.call(c, n) && (e[n] = c[n]);
        m && m(t);
        while (d.length)
            d.shift()();
        return o.push.apply(o, l || []),
        a()
    }
    function a() {
        for (var e, t = 0; t < o.length; t++) {
            for (var a = o[t], n = !0, i = 1; i < a.length; i++) {
                var s = a[i];
                0 !== r[s] && (n = !1)
            }
            n && (o.splice(t--, 1),
            e = c(c.s = a[0]))
        }
        return e
    }
    var n = {}
      , i = {
        app: 0
    }
      , r = {
        app: 0
    }
      , o = [];
    function s(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-14f4422c": "a8478e84",
            "chunk-2d0d67a2": "3540b80f",
            "chunk-2d20f52a": "5ab5298c",
            "chunk-3f69790a": "267213dc",
            "chunk-541328b6": "7ead4a4e",
            "chunk-298598b1": "3d3deaa4",
            "chunk-7d0291a2": "4e464d77",
            "chunk-cc84d7f0": "bc67c8d8",
            "chunk-2d0a496f": "c3d670a7",
            "chunk-743145ef": "bd78810c",
            "chunk-7afb3f78": "3cdce16f",
            "chunk-2d207bc2": "865c8fab",
            "chunk-2d0c91b3": "50965e0a",
            "chunk-ad582ca2": "32310977",
            "chunk-d01cbc3a": "724bf74d",
            "chunk-5876cdd3": "01f95386",
            "chunk-860ba808": "0a08ea3d",
            "chunk-9a8ac2e8": "f9481a38",
            "chunk-2ae023b9": "8857d6ce",
            "chunk-d2aea0ee": "da753111",
            "chunk-43b9c088": "b05346cf",
            "chunk-479d8dba": "57f6d3dc"
        }[e] + ".js"
    }
    function c(t) {
        if (n[t])
            return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, c),
        a.l = !0,
        a.exports
    }
    c.e = function(e) {
        var t = []
          , a = {
            "chunk-541328b6": 1,
            "chunk-298598b1": 1,
            "chunk-cc84d7f0": 1,
            "chunk-d01cbc3a": 1,
            "chunk-860ba808": 1,
            "chunk-9a8ac2e8": 1,
            "chunk-2ae023b9": 1,
            "chunk-d2aea0ee": 1,
            "chunk-43b9c088": 1,
            "chunk-479d8dba": 1
        };
        i[e] ? t.push(i[e]) : 0 !== i[e] && a[e] && t.push(i[e] = new Promise((function(t, a) {
            for (var n = "css/" + ({}[e] || e) + "." + {
                "chunk-14f4422c": "31d6cfe0",
                "chunk-2d0d67a2": "31d6cfe0",
                "chunk-2d20f52a": "31d6cfe0",
                "chunk-3f69790a": "31d6cfe0",
                "chunk-541328b6": "78170097",
                "chunk-298598b1": "86b0f0cb",
                "chunk-7d0291a2": "31d6cfe0",
                "chunk-cc84d7f0": "2ec1beca",
                "chunk-2d0a496f": "31d6cfe0",
                "chunk-743145ef": "31d6cfe0",
                "chunk-7afb3f78": "31d6cfe0",
                "chunk-2d207bc2": "31d6cfe0",
                "chunk-2d0c91b3": "31d6cfe0",
                "chunk-ad582ca2": "31d6cfe0",
                "chunk-d01cbc3a": "1c64c4da",
                "chunk-5876cdd3": "31d6cfe0",
                "chunk-860ba808": "edbaa458",
                "chunk-9a8ac2e8": "c434cd3e",
                "chunk-2ae023b9": "67ae5cde",
                "chunk-d2aea0ee": "2c3872f8",
                "chunk-43b9c088": "b3de657b",
                "chunk-479d8dba": "fbe5335e"
            }[e] + ".css", r = c.p + n, o = document.getElementsByTagName("link"), s = 0; s < o.length; s++) {
                var l = o[s]
                  , u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === n || u === r))
                    return t()
            }
            var d = document.getElementsByTagName("style");
            for (s = 0; s < d.length; s++) {
                l = d[s],
                u = l.getAttribute("data-href");
                if (u === n || u === r)
                    return t()
            }
            var m = document.createElement("link");
            m.rel = "stylesheet",
            m.type = "text/css",
            m.onload = t,
            m.onerror = function(t) {
                var n = t && t.target && t.target.src || r
                  , o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                o.code = "CSS_CHUNK_LOAD_FAILED",
                o.request = n,
                delete i[e],
                m.parentNode.removeChild(m),
                a(o)
            }
            ,
            m.href = r;
            var _ = document.getElementsByTagName("head")[0];
            _.appendChild(m)
        }
        )).then((function() {
            i[e] = 0
        }
        )));
        var n = r[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var o = new Promise((function(t, a) {
                    n = r[e] = [t, a]
                }
                ));
                t.push(n[2] = o);
                var l, u = document.createElement("script");
                u.charset = "utf-8",
                u.timeout = 120,
                c.nc && u.setAttribute("nonce", c.nc),
                u.src = s(e);
                var d = new Error;
                l = function(t) {
                    u.onerror = u.onload = null,
                    clearTimeout(m);
                    var a = r[e];
                    if (0 !== a) {
                        if (a) {
                            var n = t && ("load" === t.type ? "missing" : t.type)
                              , i = t && t.target && t.target.src;
                            d.message = "Loading chunk " + e + " failed.\n(" + n + ": " + i + ")",
                            d.name = "ChunkLoadError",
                            d.type = n,
                            d.request = i,
                            a[1](d)
                        }
                        r[e] = void 0
                    }
                }
                ;
                var m = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: u
                    })
                }
                ), 12e4);
                u.onerror = u.onload = l,
                document.head.appendChild(u)
            }
        return Promise.all(t)
    }
    ,
    c.m = e,
    c.c = n,
    c.d = function(e, t, a) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: a
        })
    }
    ,
    c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    c.t = function(e, t) {
        if (1 & t && (e = c(e)),
        8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var a = Object.create(null);
        if (c.r(a),
        Object.defineProperty(a, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var n in e)
                c.d(a, n, function(t) {
                    return e[t]
                }
                .bind(null, n));
        return a
    }
    ,
    c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return c.d(t, "a", t),
        t
    }
    ,
    c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    c.p = "/",
    c.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var l = window["webpackJsonp"] = window["webpackJsonp"] || []
      , u = l.push.bind(l);
    l.push = t,
    l = l.slice();
    for (var d = 0; d < l.length; d++)
        t(l[d]);
    var m = u;
    o.push([0, "chunk-vendors"]),
    a()
}
)({
    0: function(e, t, a) {
        e.exports = a("56d7")
    },
    "034f": function(e, t, a) {
        "use strict";
        var n = a("27fb")
          , i = a.n(n);
        i.a
    },
    1: function(e, t) {},
    2: function(e, t) {},
    "27fb": function(e, t, a) {},
    3: function(e, t) {},
    "3e67": function(e, t, a) {
        "use strict";
        a.r(t),
        function(e) {
            a.d(t, "aes256", (function() {
                return r
            }
            ));
            a("6b54");
            var n = a("1c46")
              , i = "aes-256-cbc"
              , r = {
                encrypt: function(t, a) {
                    if ("string" !== typeof t || !t)
                        throw new TypeError('Provided "key" must be a non-empty string');
                    var r = "string" === typeof a
                      , o = e.isBuffer(a);
                    if (!r && !o || r && !a || o && !e.byteLength(a))
                        throw new TypeError('Provided "input" must be a non-empty string or buffer');
                    var s = n.createHash("sha256");
                    s.update(t);
                    var c = n.randomBytes(16)
                      , l = n.createCipheriv(i, s.digest(), c)
                      , u = a;
                    r && (u = e.from(a));
                    var d = l.update(u)
                      , m = e.concat([c, d, l.final()]);
                    return r && (m = m.toString("base64")),
                    m
                },
                decrypt: function(t, a) {
                    if ("string" !== typeof t || !t)
                        throw new TypeError('Provided "key" must be a non-empty string');
                    var r = "string" === typeof a
                      , o = e.isBuffer(a);
                    if (!r && !o || r && !a || o && !e.byteLength(a))
                        throw new TypeError('Provided "encrypted" must be a non-empty string or buffer');
                    var s = n.createHash("sha256");
                    s.update(t);
                    var c = a;
                    if (r) {
                        if (c = e.from(a, "base64"),
                        c.length < 17)
                            throw new TypeError('Provided "encrypted" must decrypt to a non-empty string or buffer')
                    } else if (e.byteLength(a) < 17)
                        throw new TypeError('Provided "encrypted" must decrypt to a non-empty string or buffer');
                    var l, u = c.slice(0, 16), d = n.createDecipheriv(i, s.digest(), u), m = c.slice(16);
                    return l = r ? d.update(m) + d.final() : e.concat([d.update(m), d.final()]),
                    l
                }
            };
            function o(e) {
                if ("string" !== typeof e || !e)
                    throw new TypeError('Provided "key" must be a non-empty string');
                Object.defineProperty(this, "key", {
                    value: e
                })
            }
            o.prototype.encrypt = function(e) {
                return r.encrypt(this.key, e)
            }
            ,
            o.prototype.decrypt = function(e) {
                return r.decrypt(this.key, e)
            }
            ,
            r.createCipher = function(e) {
                return new o(e)
            }
        }
        .call(this, a("b639").Buffer)
    },
    4: function(e, t) {},
    4360: function(e, t, a) {
        "use strict";
        var n = a("a026")
          , i = a("2f62")
          , r = (a("8e6e"),
        a("ac6a"),
        a("456d"),
        a("96cf"),
        a("3b8d"))
          , o = a("bd86")
          , s = (a("c5f6"),
        a("4a49"))
          , c = a("56d7");
        a("eaf8");
        function l(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function u(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? l(Object(a), !0).forEach((function(t) {
                    Object(o["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var d = {
            user: {},
            userInfo: {},
            isVerify: !1,
            free_quota: 0,
            free_quota_messages: 0,
            token: null,
            storageToken: null,
            language: "",
            acceptedYears: !1,
            sexChecked: !1,
            openTokSession: null,
            defaultPayment: "verotel",
            countChats: 0,
            adShowed: !1,
            kyc: null,
            isLogin: !1,
            isAuth: !1,
            login: null,
            sessionToken: "",
            sessionTokenExpired: null,
            pushToken: null,
            isRefreshingToken: !1,
            refreshingTokenCall: void 0,
            pushEnabled: !1,
            localPushEnabled: !1,
            cloudpaymentsPk: null,
            primeProject: null,
            chooseVideoDeviceId: null,
            chooseAudioDeviceId: null,
            haveUnreadPenalty: !1
        }
          , m = {
            setLanguage: function(e, t) {
                e.language = t
            },
            setChooseVideoDeviceId: function(e, t) {
                e.chooseVideoDeviceId = t
            },
            setChooseAudioDeviceId: function(e, t) {
                e.chooseAudioDeviceId = t
            },
            acceptedYears: function(e, t) {
                e.acceptedYears = t
            },
            sexChecked: function(e) {
                e.sexChecked = !0
            },
            setUserProfile: function(e, t) {
                e.profile = t
            },
            setDefaultPayment: function(e, t) {
                "giftcard" === t && (t = "verotel"),
                e.defaultPayment = t
            },
            changePushToken: function(e, t) {
                e.pushToken = t
            },
            changeSessionToken: function(e, t) {
                e.sessionToken = t,
                e.sessionTokenExpired = Number((new Date).getTime()) + 54e4
            },
            setIsLogin: function(e, t) {
                e.isLogin = t
            },
            setLogin: function(e, t) {
                e.login = t
            },
            setIsRefreshingToken: function(e, t) {
                e.isRefreshingToken = t
            },
            setRefreshingTokenCall: function(e, t) {
                e.refreshingTokenCall = t
            },
            setLocalPushEnabled: function(e, t) {
                e.localPushEnabled = t
            },
            setPushEnabled: function(e, t) {
                e.pushEnabled = t
            },
            setOpenTokSession: function(e, t) {
                e.openTokSession = t
            },
            setUser: function(e, t) {
                e.user = t
            },
            setBalance: function(e, t) {
                e.user.balance = t
            },
            setBalanceMessages: function(e, t) {
                e.user.balance_messages = t
            },
            plusBalance: function(e, t) {
                e.user.balance += t
            },
            addCountChats: function(e, t) {
                e.countChats += t
            },
            setAdShowed: function(e, t) {
                e.adShowed = t
            },
            decreaseBalanceMessages: function(e) {
                e.free_quota_messages > 0 && (e.free_quota_messages = e.free_quota_messages - 1)
            },
            setIsPremium: function(e, t) {
                e.user.is_premium = t
            },
            setAvatarUrl: function(e, t) {
                e.user.avatar = t
            },
            setInfo: function(e, t) {
                e.userInfo = Object.assign(u({}, e.userInfo, {}, t)),
                e.userInfo.hasOwnProperty("new_password") && delete e.userInfo["new_password"],
                t.hasOwnProperty("nick") && (e.user.nick = t["nick"]),
                t.hasOwnProperty("noty_email") && (e.user.noty_email = t["noty_email"]),
                t.hasOwnProperty("safe_video") && (e.user.safe_video = t["safe_video"]),
                t.hasOwnProperty("noty_push") && (e.user.noty_push = t["noty_push"])
            },
            setNewUSDT: function(e, t) {
                e.user.info.usdt_wallet = t
            },
            changeOrtcToken: function(e, t) {
                e.user.ortc_token = t
            },
            changeLocale: function(e, t) {
                e.user.locale = t
            },
            setToken: function(e, t) {
                e.token = t
            },
            setIsAuth: function(e, t) {
                e.isAuth = t
            },
            setUserAuthInfo: function(e, t) {
                e.token = t["token"],
                e.user = t["user"],
                t["user"].hasOwnProperty("fs_token") && (e.storageToken = e.user["fs_token"]),
                t["user"].hasOwnProperty("info") && (e.userInfo = t["user"]["info"],
                1 === e.userInfo["is_verify"] && (e.isVerify = !0)),
                t["user"].hasOwnProperty("default_pay_system") && t["user"]["default_pay_system"] && (e.defaultPayment = t["user"]["default_pay_system"]),
                "giftcard" === e.defaultPayment && (e.defaultPayment = "verotel"),
                e.free_quota = t["free_quota"],
                e.free_quota_messages = t["free_quota_messages"],
                e.isAuth = !0,
                e.user.email && (e.isLogin = !0)
            },
            setVerify: function(e, t) {
                e.isVerify = t,
                e.userInfo.is_verify = !0
            },
            socket_user_info: function(e, t) {
                e.user = t,
                e.user.email && (e.isLogin = !0)
            },
            socket_balance: function(e, t) {
                e.user = Object.assign({}, e.user, {
                    balance: t.balance
                })
            },
            socket_free_quota: function(e, t) {
                e.free_quota = t.sec
            },
            socket_payments_methods_extend: function(e, t) {
                t.hasOwnProperty("cloudpayments") && (-1 === e.defaultPayment.indexOf("prime") && -1 === e.defaultPayment.indexOf("contact") && -1 === e.defaultPayment.indexOf("fk") && -1 === e.defaultPayment.indexOf("payselect") && -1 === e.defaultPayment.indexOf("expay") && "expay" !== e.defaultPayment && (e.defaultPayment = "expay"),
                e.primeProject = !0)
            },
            socket_error_102: function(e, t) {
                e.token = null,
                e.user = {},
                e.isLogin = !1,
                e.isAuth = !1
            },
            setPhotosExistence: function(e, t) {
                e.user.hasPhotos = t
            },
            setUnreadPenalty: function(e, t) {
                e.haveUnreadPenalty = t
            }
        }
          , _ = {
            socket_auth_success: function(e, t) {
                var a = e.state
                  , n = e.commit
                  , i = e.rootState;
                if (window.forStatsLocalUser = t["user"]["id"],
                t["user"]["ortc_token"] !== a.user.ortc_token && i.ortc.webrtcSocketConnected && i.ortc.webrtcSocketAuth && c["WebrtcSocket"].forceReconnect(),
                n("setUserAuthInfo", t),
                t.hasOwnProperty("active_session") && t["active_session"] && (!t["active_session"].hasOwnProperty("type_session") || "opentok" === t["active_session"]["type_session"])) {
                    var r = s["a"].initSession(t["active_session"]["id"]);
                    n("setOpenTokSession", r),
                    r.connect(t["active_session"]["token"], (function(e) {
                        e && console.log("ERR: sessionConnect")
                    }
                    ))
                }
                a.language !== a.user.locale && (this.$socketActions.changeLocale(a.language),
                n("changeLocale", a.language)),
                n("loading", !1, {
                    root: !0
                }),
                n("loadingKey", ["reconnect", !1], {
                    root: !0
                })
            },
            socket_new_session: function(e, t) {
                e.state;
                var a = e.commit;
                if (!t["session"].hasOwnProperty("type_session") || "opentok" === t["session"]["type_session"]) {
                    var n = s["a"].initSession(t["session"]["id"]);
                    a("setOpenTokSession", n),
                    n.connect(t["session"]["token"], (function(e) {
                        e && console.log("ERR: sessionConnect")
                    }
                    ))
                }
                a("addCountChats", 1),
                a("setAdShowed", !1),
                this.soundPlayer.play("/partner.mp3")
            },
            socket_close_session: function(e, t) {
                var a = e.state;
                e.commit;
                a.openTokSession && (a.openTokSession.disconnect(),
                a.openTokSession.off())
            },
            logout: function(e) {
                e.state;
                var t = e.commit
                  , a = e.dispatch;
                e.rootState;
                t("setIsAuth", !1),
                a("cleanAuth"),
                this.$socketActions.logout(),
                setTimeout((function() {
                    window.location.reload()
                }
                ), 500)
            },
            loadInfo: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                t.state,
                                t.commit;
                            case 1:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function t(t) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            initLoad: function(e, t) {
                var a = e.state
                  , n = (e.commit,
                e.dispatch)
                  , i = function() {
                    return a.isLogin ? n("loadInfo").finally((function() {
                        t()
                    }
                    )) : t()
                };
                return a.token,
                i()
            },
            authCommits: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
                    var n, i, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                n = t.commit,
                                i = t.dispatch,
                                r = t.rootState,
                                r.wallet.accounts = [],
                                o = a.response.data.data,
                                n("changeAuthToken", o.authToken),
                                n("changeSessionToken", o.sessionToken),
                                n("changePushToken", o.pushToken),
                                n("setLogin", a.login),
                                i("loadInfo");
                            case 8:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            cleanAuth: function(e) {
                var t = e.commit;
                t("setIsAuth", !1),
                t("setUser", null),
                t("setToken", null)
            },
            setPhotosExistence: function(e, t) {
                var a = e.commit
                  , n = t.hasPhotos;
                a("setPhotosExistence", n)
            }
        }
          , p = {
            namespaced: !0,
            state: d,
            actions: _,
            mutations: m
        }
          , g = {
            accounts: [],
            activeVideoSession: null,
            moderationInfoSession: null,
            mute: !1,
            soundOff: !1,
            lastVideoSession: null,
            fastPhrases: null
        }
          , h = {
            getSoundOff: function(e) {
                return function() {
                    return e.soundOff
                }
            }
        }
          , f = {
            socket_auth_success: function(e, t) {
                t.hasOwnProperty("active_session") && t["active_session"] ? (e.activeVideoSession = t["active_session"],
                e.lastVideoSession = t["active_session"]) : e.activeVideoSession = null,
                t.hasOwnProperty("moderation_info") && t["moderation_info"] && (e.moderationInfoSession = t["moderation_info"])
            },
            socket_new_session: function(e, t) {
                e.activeVideoSession = t["session"],
                e.lastVideoSession = t["session"],
                t.hasOwnProperty("moderation_info") && t["moderation_info"] && (e.moderationInfoSession = t["moderation_info"])
            },
            setMute: function(e, t) {
                e.mute = t
            },
            setSoundOff: function(e, t) {
                e.soundOff = t
            },
            setConnectionInterlocutor: function(e, t) {
                e.activeVideoSession["interlocutorConnection"] = t
            },
            setFastPhrases: function(e, t) {
                e.fastPhrases = t
            }
        }
          , v = {
            sendMessage: function(e, t) {
                var a = e.rootState
                  , n = e.state;
                e.commit;
                console.log(n.activeVideoSession.interlocutorConnection),
                a.user.openTokSession && a.user.openTokSession.signal({
                    to: n.activeVideoSession.interlocutorConnection,
                    data: JSON.stringify(t),
                    type: "textMessage"
                }),
                this.$socketActions.textChatMessage(t.text, t.id, n.activeVideoSession.id)
            },
            setFastPhrases: function(e, t) {
                var a = e.commit;
                a("setFastPhrases", t.map((function(e) {
                    return {
                        text: e,
                        isDeleted: !1
                    }
                }
                )))
            },
            deleteFromFastPhrases: function(e, t) {
                var a = e.state
                  , n = e.commit;
                n("setFastPhrases", a.fastPhrases.map((function(e) {
                    return e.text === t && (e.isDeleted = !0),
                    e
                }
                )))
            },
            clearFastPhrases: function(e, t) {
                var a = e.state
                  , n = e.commit;
                n("setFastPhrases", a.fastPhrases.map((function(e) {
                    return e.isDeleted = !1,
                    e
                }
                )))
            },
            socket_close_session: function(e, t) {
                var a = e.commit
                  , n = e.state
                  , i = e.rootState;
                "girl" === i.user.user.role && (i.system.breakSearchGirl ? a("system/setBreakSearchGirl", !1, {
                    root: !0
                }) : a("system/setToSearchAtOnce", !0, {
                    root: !0
                })),
                n.activeVideoSession = null
            }
        }
          , b = {
            namespaced: !0,
            state: g,
            getters: h,
            mutations: f,
            actions: v
        }
          , y = (a("0d6d"),
        a("6b7f"))
          , w = {
            socketConnected: !1,
            errorInternet: !1,
            captchaRequired: !1,
            renderCaptcha: !1,
            newDeviceOpen: !1,
            additionalLoad: !0,
            innerWidthWindow: null,
            innerHeightWindow: null,
            toSearchAtOnce: !1,
            breakSearchGirl: !1,
            toCameraAtOnce: !1,
            countWoman: 20,
            catalogScroll: null,
            topScroll: null,
            defaultEmail: null,
            toScreenAfterAuth: null,
            socketSecretKey: null,
            routeAfterCall: null
        }
          , k = {
            setErrorInternet: function(e, t) {
                e.errorInternet = t
            },
            setSocketSecretKey: function(e, t) {
                e.socketSecretKey = t
            },
            setDefaultEmail: function(e, t) {
                e.defaultEmail = t
            },
            setToScreenAfterAuth: function(e, t) {
                e.toScreenAfterAuth = t
            },
            setCatalogScroll: function(e, t) {
                e.catalogScroll = t
            },
            setTopScroll: function(e, t) {
                e.topScroll = t
            },
            setSocketConnected: function(e, t) {
                e.socketConnected = t,
                t || (e.isAuth = !1)
            },
            setCaptchaRequired: function(e, t) {
                e.renderCaptcha || (e.renderCaptcha = !0,
                Object.freeze(e.renderCaptcha)),
                t && y["a"].$emit("captchaVisible"),
                e.captchaRequired = t
            },
            setWindowSizes: function(e, t) {
                e.innerWidthWindow = t.width,
                e.innerHeightWindow = t.height
            },
            setToSearchAtOnce: function(e, t) {
                e.toSearchAtOnce = t
            },
            setToCameraAtOnce: function(e, t) {
                e.toCameraAtOnce = t
            },
            setBreakSearchGirl: function(e, t) {
                e.breakSearchGirl = t
            },
            setRouteAfterCall: function(e, t) {
                e.routeAfterCall = t
            },
            socket_connect: function(e) {
                e.socketConnected = !0,
                e.errorInternet = !1
            },
            "socket_online.count": function(e, t) {
                e.countWoman = t.woman
            },
            webrtc_socket_auth_success: function(e, t) {
                e.socketSecretKey = t.cipher_key
            }
        }
          , x = {
            socket_connect: function(e) {
                var t = e.commit;
                console.log("Socket opened"),
                t("setSocketConnected", !0)
            },
            socket_disconnect: function(e, t) {
                var a = e.state
                  , n = e.commit;
                if (console.log("Socket close"),
                a.socketConnected && n("setSocketConnected", !1),
                "io server disconnect" === t)
                    return a.newDeviceOpen = !0,
                    void c["WebrtcSocket"].io.disconnect();
                c["Socket"].waitAndReconnect()
            },
            socket_connect_error: function(e) {
                var t = e.state
                  , a = e.commit;
                console.log("Socket connect_error"),
                t.socketConnected && a("setSocketConnected", !1),
                c["Socket"].waitAndReconnect()
            },
            socket_connect_timeout: function(e) {
                var t = e.state
                  , a = e.commit;
                console.log("Socket connect_timeout"),
                t.socketConnected && a("setSocketConnected", !1),
                c["Socket"].waitAndReconnect()
            },
            socket_error_600: function(e) {
                e.state;
                var t = e.commit;
                t("setCaptchaRequired", !0)
            },
            "socket_captcha.verify": function(e) {
                var t = e.commit;
                t("setCaptchaRequired", !1)
            }
        }
          , S = {
            namespaced: !0,
            state: w,
            actions: x,
            mutations: k
        }
          , C = {
            webrtcSocketConnected: !1,
            webrtcSocketAuth: !1,
            newDeviceOpen: !1,
            peerInfo: null,
            activeConnectionId: null,
            offer: null,
            ice: null
        }
          , T = {
            getOffer: function(e) {
                return function() {
                    return e.offer
                }
            },
            getIce: function(e) {
                return function() {
                    return e.ice
                }
            },
            getPeerInfo: function(e) {
                return function() {
                    return e.peerInfo
                }
            }
        }
          , E = {
            setSocketConnected: function(e, t) {
                e.webrtcSocketConnected = t,
                t || (e.webrtcSocketAuth = !1)
            },
            setSocketAuth: function(e, t) {
                e.webrtcSocketAuth = t
            },
            setPeer: function(e, t) {
                e.peerInfo = t
            },
            setActiveConnectionId: function(e, t) {
                e.activeConnectionId = t
            },
            setOffer: function(e, t) {
                e.offer = t
            },
            setIceCandidates: function(e, t) {
                e.ice = t
            }
        }
          , P = {
            socket_new_session: function(e, t) {
                var a = e.commit;
                e.state;
                a("setOffer", null),
                a("setIceCandidates", null),
                this.$webrtcSignal.log(t["session"]["id"], "new_session_got")
            },
            webrtc_socket_connect: function(e) {
                var t = e.commit;
                t("setSocketConnected", !0),
                t("loadingKey", ["reconnect", !1], {
                    root: !0
                })
            },
            webrtc_socket_disconnect: function(e, t) {
                var a = e.rootState
                  , n = e.state
                  , i = e.commit;
                console.log("[ORTC] Socket close"),
                n.webrtcSocketConnected && i("setSocketConnected", !1),
                n.newDeviceOpen || a.system.newDeviceOpen || ("io server disconnect" !== t ? c["WebrtcSocket"].waitAndReconnect() : n.newDeviceOpen = !0)
            },
            webrtc_socket_connect_error: function(e) {
                var t = e.state
                  , a = e.commit;
                console.log("[ORTC] Socket connect_error"),
                t.webrtcSocketConnected && a("setSocketConnected", !1),
                c["WebrtcSocket"].waitAndReconnect()
            },
            webrtc_socket_connect_timeout: function(e) {
                var t = e.state
                  , a = e.commit;
                console.log("[ORTC] Socket connect_timeout"),
                t.webrtcSocketConnected && a("setSocketConnected", !1),
                c["WebrtcSocket"].waitAndReconnect()
            },
            webrtc_socket_auth_success: function(e, t) {
                var a = e.commit;
                e.state;
                a("setSocketAuth", !0)
            },
            webrtc_socket_peer_signal: function(e, t) {
                var a = e.commit;
                "offer" === t["type_signal"] ? a("setOffer", t) : "ice-candidate" === t["type_signal"] && a("setIceCandidates", t)
            },
            webrtc_socket_new_peer: function(e, t) {
                var a = e.rootState
                  , n = (e.state,
                e.commit);
                n("setOffer", null),
                n("setIceCandidates", null),
                a.chat.activeVideoSession.id === t.session_guid && (t.turn_params = JSON.parse(t.turn_params),
                window.forStatsSessionGuid = t.session_guid,
                window.forStatsInterlocutor = a.chat.activeVideoSession.user_interlocutor.id,
                !c["monitoringRtc"] || 61 != a.user.user.id && 8093389 != a.user.user.id && 12642119 != a.user.user.id && 1814422 != a.user.user.id || c["monitoringRtc"].initialize(a.user.user.id, t.session_guid),
                n("setPeer", t))
            }
        }
          , I = {
            namespaced: !0,
            state: C,
            getters: T,
            actions: P,
            mutations: E
        }
          , O = a("75fc");
        function A(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function R(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? A(Object(a), !0).forEach((function(t) {
                    Object(o["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : A(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var M = {
            dialogs: [],
            messages: {},
            activeDialogId: 0,
            activeDialog: null,
            countNewMessages: 0,
            randomIdsToMessage: {},
            messsagesIndexedMessageId: {},
            dialogsIndexedId: {},
            unreadMessages: {},
            lastUnreadMessages: {},
            loadedMessagesDialogs: [],
            lastOnline: {},
            gifts: null,
            _giftsCall: null
        }
          , z = {
            getActiveDialog: function(e) {
                return function() {
                    return e.activeDialog
                }
            }
        }
          , D = function(e, t) {
            for (var a = {}, n = 0; n < e.length; n++)
                a[e[n][t]] = e[n];
            return a
        }
          , j = {
            setCountNewMessages: function(e, t) {
                Number(t) >= 0 && (e.countNewMessages = Number(t))
            },
            addCountNewMessages: function(e, t) {
                e.countNewMessages = e.countNewMessages + 1,
                e.dialogsIndexedId[t.dialogId] && (e.dialogsIndexedId[t.dialogId].count_new_messages = e.dialogsIndexedId[t.dialogId].count_new_messages + 1)
            },
            minusCountNewMessages: function(e, t) {
                e.countNewMessages = e.countNewMessages - t,
                e.countNewMessages < 0 && (e.countNewMessages = 0)
            },
            setAllDialogs: function(e, t) {
                e.dialogs = t,
                e.dialogsIndexedId = D(e.dialogs, "id");
                for (var a = 0; a < e.dialogs.length; a++)
                    e.dialogs[a].hasOwnProperty("last_message") && e.dialogs[a].last_message && e.dialogs[a].last_message.hasOwnProperty("read_status") && 1 != e.dialogs[a].last_message.read_status && Number(e.dialogs[a].last_message.sender_id) !== this.state.user.user.id && n["default"].set(e.lastUnreadMessages, e.dialogs[a].last_message.message_id, e.dialogs[a].last_message)
            },
            changeInterlocutorFavoriteStatus: function(e, t) {
                var a = t.userId
                  , n = t.isFavorite;
                e.dialogs = e.dialogs.map((function(e) {
                    return e.interlocutor.id == a && (e.interlocutor.is_favorite = n),
                    e
                }
                ))
            },
            prependDialog: function(e, t) {
                e.dialogs.unshift(t),
                e.dialogsIndexedId = D(e.dialogs, "id");
                for (var a = 0; a < e.dialogs.length; a++)
                    e.dialogs[a].hasOwnProperty("last_message") && e.dialogs[a].last_message && e.dialogs[a].last_message.hasOwnProperty("read_status") && 1 != e.dialogs[a].last_message.read_status && Number(e.dialogs[a].last_message.sender_id) !== this.state.user.user.id && n["default"].set(e.lastUnreadMessages, e.dialogs[a].last_message.message_id, e.dialogs[a].last_message)
            },
            setMessages: function(e, t) {
                n["default"].set(e.messages, t.dialogId, t.messages),
                e.messsagesIndexedMessageId = D(e.messages[t.dialogId], "message_id")
            },
            addMessages: function(e, t) {
                var a = e.messages[t.dialogId];
                n["default"].set(e.messages, t.dialogId, [].concat(Object(O["a"])(t.messages), Object(O["a"])(a))),
                e.messsagesIndexedMessageId = D(e.messages[t.dialogId], "message_id")
            },
            newMessage: function(e, t) {
                e.messages.hasOwnProperty(t.dialogId) || n["default"].set(e.messages, t.dialogId, []);
                var a = e.messages[t.dialogId].push(t.message);
                t.message.hasOwnProperty("random_id") ? e.randomIdsToMessage[t.message.random_id] = e.messages[t.dialogId][a - 1] : t.hasOwnProperty("isGotMessage") && !t.isGotMessage || (e.unreadMessages.hasOwnProperty(t.dialogId) || n["default"].set(e.unreadMessages, t.dialogId, []),
                e.messsagesIndexedMessageId[t.message.message_id] = e.messages[t.dialogId][a - 1],
                e.unreadMessages[t.dialogId].push(t.message.message_id)),
                e.dialogsIndexedId.hasOwnProperty(t.dialogId) && (e.dialogsIndexedId[t.dialogId].last_message = e.messages[t.dialogId][a - 1])
            },
            changeActiveDialog: function(e, t) {
                var a = t.dialogId
                  , i = t.newDialogUser
                  , r = void 0 === i ? void 0 : i;
                if (e.activeDialogId = a,
                e.unreadMessages.hasOwnProperty(a) || n["default"].set(e.unreadMessages, a, []),
                a && (console.log(e.activeDialogId && e.dialogs.length),
                e.activeDialogId && e.dialogs.length)) {
                    var o = !1;
                    for (var s in e.dialogs)
                        if (Number(e.activeDialogId) === Number(e.dialogs[s].id)) {
                            o = !0,
                            e.activeDialog = e.dialogs[s];
                            break
                        }
                    if (!o && r) {
                        var c = {
                            count_new_messages: 0,
                            id: "".concat(a),
                            interlocutor: r,
                            type: "common"
                        };
                        e.dialogs = [c].concat(Object(O["a"])(e.dialogs)),
                        e.activeDialog = c
                    }
                }
            },
            unactiveDialog: function(e) {},
            unActivesDialog: function(e) {
                e.activeDialogId = 0,
                e.activeDialog = null
            },
            setLoadedMessagesDialog: function(e, t) {
                e.loadedMessagesDialogs.push(t.dialogId)
            },
            cleanMessages: function(e) {
                e.messages = {},
                e.messsagesIndexedMessageId = {},
                e.unreadMessages = {},
                e.loadedMessagesDialogs = [],
                e.lastOnline = {}
            },
            deleteDialog: function(e, t) {
                var a = t.dialogId;
                e.activeDialogId = 0,
                e.activeDialog = null,
                e.messages.hasOwnProperty(a) && n["default"].delete(e.messages, a),
                e.dialogsIndexedId.hasOwnProperty(a) && n["default"].delete(e.dialogsIndexedId, a);
                for (var i = 0; i < e.dialogs.length; i++)
                    if (e.dialogs[i].id === a) {
                        e.dialogs.splice(i, 1);
                        break
                    }
                var r = e.loadedMessagesDialogs.indexOf(a);
                -1 !== r && e.loadedMessagesDialogs.splice(r, 1)
            },
            cleanDialog: function(e, t) {
                var a = t.dialogId;
                e.messages.hasOwnProperty(a) && n["default"].set(e.messages, a, [])
            },
            readMessages: function(e, t) {
                for (var a = 0; a < e.unreadMessages[t.dialogId].length; a++)
                    e.messsagesIndexedMessageId[e.unreadMessages[t.dialogId][a]].read_status = 1,
                    n["default"].delete(e.lastUnreadMessages, e.unreadMessages[t.dialogId][a]),
                    e.dialogsIndexedId.hasOwnProperty(t.dialogId) && Number(e.dialogsIndexedId[t.dialogId].last_message.message_id) === Number(e.messsagesIndexedMessageId[e.unreadMessages[t.dialogId][a]].message_id) && (e.dialogsIndexedId[t.dialogId].last_message.read_status = 1);
                e.countNewMessages = e.countNewMessages - e.dialogsIndexedId[t.dialogId].count_new_messages,
                e.countNewMessages < 0 && (e.countNewMessages = 0),
                e.dialogsIndexedId[t.dialogId].count_new_messages = 0,
                n["default"].set(e.unreadMessages, t.dialogId, [])
            },
            readYourMessages: function(e, t) {
                for (var a = 0; a < t.messageIds.length; a++)
                    e.messsagesIndexedMessageId.hasOwnProperty(t.messageIds[a]) && (e.messsagesIndexedMessageId[t.messageIds[a]].read_status = 1),
                    e.dialogsIndexedId.hasOwnProperty(t.dialogId) && Number(e.dialogsIndexedId[t.dialogId].last_message.message_id) === Number(t.messageIds[a]) && (e.dialogsIndexedId[t.dialogId].last_message.read_status = 1)
            },
            updateInterlocutorStatus: function(e, t) {
                e.dialogsIndexedId[t.dialogId].interlocutor.status = t.status
            },
            updateInterlocutorLastOnline: function(e, t) {
                n["default"].set(e.lastOnline, t.user_id, t.time_online)
            },
            setGifts: function(e, t) {
                e.gifts = t
            }
        }
          , q = {
            socket_auth_success: function(e, t) {
                e.state;
                var a = e.commit;
                this.$socketActions.getCountNewMessages().then((function(e) {
                    a("setCountNewMessages", e.data.count_new_messages)
                }
                ))
            },
            socket_send_message_success: function(e, t) {
                var a = e.state
                  , n = e.rootState
                  , i = e.commit;
                a.randomIdsToMessage.hasOwnProperty(t.random_id) && (a.randomIdsToMessage[t.random_id].message_id = t.message_id,
                a.messsagesIndexedMessageId[t.message_id] = a.randomIdsToMessage[t.random_id],
                delete a.randomIdsToMessage[t.random_id]),
                t.hasOwnProperty("reward") && t.reward && t.reward > 0 && "girl" === n.user.user.role && i("user/plusBalance", t.reward, {
                    root: !0
                })
            },
            socket_messenger_message: function(e, t) {
                var a = this
                  , i = e.rootState
                  , r = e.state
                  , o = e.commit
                  , s = Number(t.sender_id) !== Number(i.user.user.id);
                r.dialogsIndexedId.hasOwnProperty(t.dialog_id) ? (o("newMessage", {
                    dialogId: t.dialog_id,
                    message: t,
                    isGotMessage: s
                }),
                y["a"].$emit("messenger/gottenMessage"),
                s && this.soundPlayer.play("/message.mp3")) : s && this.$socketActions.getDialog(t.dialog_id).then((function(e) {
                    o("prependDialog", e.data),
                    o("newMessage", {
                        dialogId: t.dialog_id,
                        message: t,
                        isGotMessage: s
                    }),
                    s && (y["a"].$emit("messenger/newInterlocutor", {
                        id: t.sender_id
                    }),
                    a.soundPlayer.play("/message.mp3")),
                    y["a"].$emit("messenger/gottenMessage")
                }
                )),
                s && o("addCountNewMessages", {
                    dialogId: t.dialog_id
                }),
                n["default"].set(r.lastUnreadMessages, t.message_id, t)
            },
            socket_messenger_read_message: function(e, t) {
                e.state;
                var a = e.commit;
                a("readYourMessages", {
                    dialogId: t.dialog_id,
                    messageIds: t.message_ids
                })
            },
            socket_update_status_girl: function(e, t) {
                for (var a = e.state, n = e.commit, i = 0; i < a.dialogs.length; i++)
                    Number(a.dialogs[i].interlocutor.id) === Number(t.user_id) && t.status && (n("updateInterlocutorStatus", {
                        dialogId: a.dialogs[i].id,
                        status: t.status
                    }),
                    "online" === t.status && n("updateInterlocutorLastOnline", {
                        user_id: t.user_id,
                        time_online: new Date
                    }))
            }
        }
          , N = R({
            getDialogs: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t.rootState,
                                t.state,
                                n = t.commit,
                                e.abrupt("return", this.$socketActions.getDialogs().then((function(e) {
                                    return e && e.data && n("setAllDialogs", e.data.dialogs),
                                    n("cleanMessages"),
                                    e && e.data ? e.data : {
                                        dialogs: []
                                    }
                                }
                                )));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            getMessages: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
                    var i, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (i = t.state,
                                r = t.rootState,
                                o = t.commit,
                                a.hasOwnProperty("force") || -1 === i.loadedMessagesDialogs.indexOf(a.dialogId)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                return e.abrupt("return", this.$socketActions.getDialogMessages(a.dialogId, a.page, a.before).then((function(e) {
                                    if (1 === a.page)
                                        o("setMessages", {
                                            dialogId: a.dialogId,
                                            messages: e.data.messages
                                        }),
                                        o("setLoadedMessagesDialog", {
                                            dialogId: a.dialogId
                                        });
                                    else {
                                        if (!e.data || !e.data.hasOwnProperty("messages") || !e.data.messages.length)
                                            return null;
                                        o("addMessages", {
                                            dialogId: a.dialogId,
                                            messages: e.data.messages
                                        })
                                    }
                                    for (var t = 0; t < e.data.messages.length; t++)
                                        1 != e.data.messages[t].read_status && Number(r.user.user.id) !== Number(e.data.messages[t].sender_id) && (i.unreadMessages.hasOwnProperty(a.dialogId) || n["default"].set(i.unreadMessages, a.dialogId, []),
                                        i.unreadMessages[a.dialogId].push(e.data.messages[t].message_id));
                                    return e.data
                                }
                                )));
                            case 4:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            sendMessage: function(e, t) {
                var a = e.rootState
                  , n = (e.state,
                e.commit);
                if (n("newMessage", {
                    dialogId: t.dialogId,
                    message: {
                        message_id: null,
                        type: "text",
                        random_id: t.random_id,
                        sender_id: a.user.user.id,
                        message: t.msg,
                        read_status: 0,
                        translate_message: "",
                        create_time: new Date
                    }
                }),
                a.user.user && "men" === a.user.user.role) {
                    var i = a.user.free_quota_messages;
                    1 == i && y["a"].$emit("messenger/quota_spent"),
                    n("user/decreaseBalanceMessages", {}, {
                        root: !0
                    })
                }
                this.$socketActions.sendDialogMessage(t.dialogId, t.msg, t.random_id)
            },
            readMessages: function(e, t) {
                var a = e.commit;
                M.unreadMessages.hasOwnProperty(t.dialogId) && M.unreadMessages[t.dialogId].length && (this.$socketActions.readDialogMessages(t.dialogId, M.unreadMessages[t.dialogId]),
                a("readMessages", {
                    dialogId: t.dialogId
                }))
            },
            startDialog: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                return t.commit,
                                e.abrupt("return", this.$socketActions.startDialog(a.interlocutor_id).then((function(e) {
                                    if (e.data && "error" === e.notice && 362 === Number(e.data.code)) {
                                        var t = e.data.additional.dialog_id;
                                        return t
                                    }
                                    return e.data && e.data.hasOwnProperty("dialog_id") && e.data.dialog_id ? e.data.dialog_id : null
                                }
                                )));
                            case 2:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }(),
            loadGifts: function() {
                var e = Object(r["a"])(regeneratorRuntime.mark((function e(t, a) {
                    var n, i, r, o;
                    return regeneratorRuntime.wrap((function(e) {
                        while (1)
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = t.commit,
                                i = t.rootState,
                                r = t.state,
                                r.gifts) {
                                    e.next = 9;
                                    break
                                }
                                return e.next = 4,
                                this.$serviceApi.getGifts(i.user.language);
                            case 4:
                                return o = e.sent,
                                o && (o = o.data,
                                n("setGifts", o)),
                                e.abrupt("return", []);
                            case 9:
                                return e.abrupt("return", r.gifts);
                            case 10:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                )));
                function t(t, a) {
                    return e.apply(this, arguments)
                }
                return t
            }()
        }, q)
          , L = {
            namespaced: !0,
            state: M,
            getters: z,
            actions: N,
            mutations: j
        }
          , B = a("0e44")
          , V = a("323e")
          , U = a.n(V);
        a.d(t, "a", (function() {
            return G
        }
        )),
        n["default"].use(i["a"]);
        var G = new i["a"].Store({
            modules: {
                user: p,
                chat: b,
                messenger: L,
                system: S,
                ortc: I
            },
            state: {
                isLoading: [],
                loadingByKeys: [],
                startedProgress: !1
            },
            mutations: {
                loading: function(e, t) {
                    !0 === t && (e.isLoading.push({}),
                    e.startedProgress || (e.startedProgress = !0,
                    U.a.start())),
                    !1 === t && (e.isLoading.pop(),
                    0 === e.isLoading.length && setTimeout((function() {
                        0 === e.isLoading.length && (e.startedProgress = !1,
                        U.a.done())
                    }
                    ), 50))
                },
                loadingKey: function(e, t) {
                    var a = t[0]
                      , n = t[1];
                    !0 === n && -1 === e.loadingByKeys.indexOf(a) && (e.loadingByKeys.push(a),
                    e.startedProgress || (e.startedProgress = !0,
                    U.a.start())),
                    !1 === n && -1 !== e.loadingByKeys.indexOf(a) && (delete e.loadingByKeys[e.loadingByKeys.indexOf(a)],
                    0 === e.isLoading.length && setTimeout((function() {
                        0 === e.isLoading.length && (e.startedProgress = !1,
                        U.a.done())
                    }
                    ), 50))
                },
                loadingStop: function(e) {
                    e.isLoading = [],
                    e.loadingByKeys = [],
                    this.loading(e, !1)
                }
            },
            plugins: [Object(B["a"])({
                key: "storage_v3",
                paths: ["user.token", "user.acceptedYears", "user.defaultPayment", "user.sexChecked", "chat.mute", "chat.soundOff", "user.chooseVideoDeviceId", "user.chooseAudioDeviceId", "user.countChats"]
            })]
        })
    },
    "4a49": function(e, t, a) {
        "use strict";
        var n = a("33ba")
          , i = a.n(n)
          , r = "46462862"
          , o = "2_MX40NjQ2Mjg2Mn5-MTU4MTU5MjAwMjE4MH5lcktTSWplSUUzSkg1ZVlRcjhYOHpaRTJ-fg";
        t["a"] = {
            initSession: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                return e || (e = o),
                i.a.initSession(r, e)
            },
            initPublisher: function(e, t, a) {
                return i.a.initPublisher(e, t, a)
            }
        }
    },
    5: function(e, t) {},
    "56d7": function(e, t, a) {
        "use strict";
        a.r(t);
        a("28a5"),
        a("a481"),
        a("c5f6"),
        a("cadf"),
        a("551c"),
        a("f751"),
        a("097d");
        var n = a("a026")
          , i = a("2f62")
          , r = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                ref: "app"
            }, [a("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.startedProgress,
                    expression: "startedProgress"
                }],
                ref: "loadMask",
                staticStyle: {
                    height: "100px",
                    width: "100px"
                },
                attrs: {
                    id: "loadMask"
                }
            }), a("router-view")], 1)
        }
          , o = []
          , s = (a("8e6e"),
        a("ac6a"),
        a("456d"),
        a("bd86"))
          , c = (a("386d"),
        a("5132"))
          , l = a.n(c)
          , u = a("8055")
          , d = a.n(u)
          , m = a("4360")
          , _ = "https";
        "http:" === window.location.protocol && (_ = "https");
        var p = "/signal"
          , g = "3000"
          , h = 1 === Number(Object({
            NODE_ENV: "production",
            VUE_APP_BUGSNAG_ID: "74131913cc5e3e7677e7a7ae209e37b8",
            VUE_APP_BUGSNAG: "1",
            VUE_APP_GTAG: "UA-166056108-1",
            VUE_APP_TOK_API_KEY: "46462862",
            VUE_APP_SERVICE_API_URL: "/api",
            VUE_APP_STORAGE_API_URL: "https://rda.la/api",
            VUE_APP_CHECKOUT_BASE: "https://mirami.chat/",
            VUE_APP_UPLOADS_BASE_URL: "https://mirami.chat/uploads/",
            VUE_APP_SOCKET_SERVER: "mirame.chat",
            VUE_APP_WEBRTC_SOCKET_SERVER: "ortc.mirame.chat",
            VUE_APP_WEBRTC_MONITORING: "https://ortc-api.rda.la/monitoring/log/",
            VUE_APP_WEBRTC_PK: "a6YrIjPuP43IIEKzBu4hZaRyjS6nBjFcomfI",
            VUE_APP_PATH_SOCKET: "/socket.io",
            VUE_APP_PATH_WEBRTC_SOCKET: "/signal",
            VUE_APP_SOCKET_RECONNECT_FREQ: "3000",
            VUE_APP_COIN_RATE: "1250",
            BASE_URL: "/"
        }).VUE_APP_DEBUG_MODE) || !1
          , f = a("a418")
          , v = new l.a({
            debug: h,
            connection: d()(_ + "://ortc.mirame.chat", {
                path: p,
                parser: f.default,
                reconnection: !1,
                timeout: 1e4,
                autoConnect: !1,
                transports: ["websocket"]
            }),
            vuex: {
                store: m["a"],
                actionPrefix: "webrtc_socket_",
                mutationPrefix: "webrtc_socket_"
            }
        });
        v.emitter.emit = function(e, t) {
            if ("connect" !== e || this.listeners.has(e)) {
                if ("notice" === e && (e = t.notice,
                t = t.data,
                "error" === e))
                    return h && console.log("[ORTC] Broadcasting: #".concat(e, ", Data:"), t),
                    void this.emit("error_" + t.code, t);
                this.listeners.has(e) && (h && console.log("[ORTC] Broadcasting: #".concat(e, ", Data:"), t),
                this.listeners.get(e).forEach((function(e) {
                    e.callback.call(e.component, t)
                }
                ))),
                this.dispatchStore(e, t)
            } else {
                var a = this;
                setTimeout((function() {
                    a.emit(e, t)
                }
                ), 300)
            }
        }
        ,
        v.waitAndReconnect = function() {
            m["a"].commit("loadingKey", ["reconnect", !0]),
            setTimeout((function() {
                v.io.connect()
            }
            ), g)
        }
        ,
        v.forceReconnect = function() {
            v.io.disconnect(),
            setTimeout((function() {
                v.io.connect()
            }
            ), 500)
        }
        ,
        console.log(v.io);
        var b = v;
        function y(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function w(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? y(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : y(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var k = {
            sockets: {
                connect: function() {
                    var e = window.location.search.substring(1)
                      , t = new URLSearchParams(e)
                      , a = t.get("rc")
                      , n = t.get("email")
                      , i = t.get("to-screen")
                      , r = window.location.href.split("?");
                    if (r.length > 1 && n && (this.$store.commit("system/setDefaultEmail", n),
                    this.$store.commit("system/setToScreenAfterAuth", i),
                    history.replaceState(null, null, r[0])),
                    r.length > 1 && a)
                        a = a.trim(),
                        history.replaceState(null, null, r[0]);
                    else if (!this.token && r[0].indexOf("/girl/")) {
                        var o = r[0].split("/");
                        a = o[o.length - 1],
                        "" == a && (a = o[o.length - 2])
                    }
                    this.token ? this.$socketActions.authByToken(this.token, a) : this.$socketActions.register(a)
                },
                auth_success: function(e) {
                    var t = this;
                    window.requestIdleCallback ? requestIdleCallback((function() {
                        t.$socketActions.setFpt()
                    }
                    )) : setTimeout((function() {
                        t.$socketActions.setFpt()
                    }
                    ), 500),
                    this.$serviceApi.getSettings({
                        locale: this.$i18n.locale
                    }).then((function(e) {
                        t.$store.dispatch("chat/setFastPhrases", e.data.fast_phrases)
                    }
                    )),
                    e && e["user"] && e["user"]["email"] ? this.toScreenAfterAuth && ("verify" === this.toScreenAfterAuth && this.$router.replace({
                        name: "Withdraw"
                    }),
                    this.$store.commit("system/setToScreenAfterAuth", null)) : this.defaultEmail && setTimeout((function() {
                        t.$bus.$emit("modals.open", {
                            modalName: "Login"
                        })
                    }
                    ), 1e3)
                },
                payments_methods_extend: function(e) {
                    e.hasOwnProperty("cloudpayments")
                },
                refill_balance: function() {
                    this.lastVideoSession && this.lastVideoSession.user_interlocutor && this.lastVideoSession.user_interlocutor.hasOwnProperty("ref_code") && this.lastVideoSession.user_interlocutor.ref_code.length && this.$router.push({
                        name: "Profile",
                        params: {
                            refCode: this.lastVideoSession.user_interlocutor.ref_code
                        }
                    }),
                    this.isLogin ? this.$bus.$emit("modals.open", {
                        modalName: "NotBalance",
                        payload: {
                            withLastInterlocutor: !0
                        }
                    }) : this.$bus.$emit("modals.open", {
                        modalName: "Register"
                    })
                },
                update_profile_success: function(e) {
                    e.hasOwnProperty("register") && 1 == e["register"] && this.$bus.$emit("modals.open", {
                        modalName: "RegisterSuccess"
                    })
                },
                error_102: function() {
                    this.$socketActions.register()
                },
                got_gift: function(e) {
                    this.$bus.$emit("modals.open", {
                        modalName: "PresentSuccess",
                        payload: {
                            data: e
                        }
                    })
                },
                force_close_connection: function(e) {
                    window.location.reload()
                },
                opentok_config: function(e) {
                    e.hasOwnProperty("config_url") && (window.OTProperties.configURL = e.config_url)
                },
                new_balance_info: function(e) {
                    this.$infoMessage(this.$t("alerts.new_currency_first_label") + ' <img src="/images/icons/diamond.svg">' + this.$t("alerts.new_currency_second_label"), null, "OK", "/images/modals/convert-balance.png", this.$t("alerts.new_currency_title")),
                    this.$socketActions.gotNewBalanceInfo()
                },
                new_session: function(e) {
                    if (e["session"].hasOwnProperty("ortc_token") && "opentok" !== e["session"]["type_session"] && e.ortc_token !== this.user.ortc_token && (this.$store.commit("user/changeOrtcToken", e["session"]["ortc_token"]),
                    this.webrtcSocketConnected && !this.webrtcSocketAuth)) {
                        var t = this;
                        setTimeout((function() {
                            t.$webrtcSignal.authByToken(e["session"]["ortc_token"])
                        }
                        ), 500)
                    }
                },
                penalty: function(e) {
                    this.$store.commit("user/setUnreadPenalty", !0),
                    this.$bus.$emit("modals.open", {
                        modalName: "PenaltyReceived",
                        payload: e
                    })
                },
                pay_success: function(e) {
                    var t = null;
                    e.hasOwnProperty("balance") && (t = e.balance),
                    t && this.$store.commit("user/setBalance", Number(t)),
                    this.$store.commit("user/setIsPremium", !0),
                    this.$gtag.event("SuccessfulPayment"),
                    this.$ym.goal("SuccessfulPayment"),
                    this.$infoMessage(this.$t("alerts.success_payment"), null, "OK", "/images/modals/joy_diamond.svg")
                },
                remove_favourite_success: function(e) {
                    this.$bus.$emit("favorites.remove", e.favourite_id)
                },
                add_favourite_success: function(e) {
                    this.$bus.$emit("favorites.add", e.favourite_id)
                },
                added_your_favorites: function(e) {
                    this.$bus.$emit("favorites.smbAdd", e.user_id)
                }
            },
            webrtc_sockets: {
                connect: function() {
                    this.user.ortc_token && this.user.ortc_token.length && this.$webrtcSignal.authByToken(this.user.ortc_token)
                }
            },
            mounted: function() {
                var e = this;
                this.$store.commit("system/setWindowSizes", {
                    width: window.innerWidth,
                    height: window.innerHeight
                }),
                window.addEventListener("resize", (function() {
                    e.$store.commit("system/setWindowSizes", {
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                }
                ));
                var t = window.location.search.substring(1)
                  , a = new URLSearchParams(t)
                  , n = window.location.href.split("?")
                  , i = a.get("utm_source")
                  , r = a.get("cam");
                n.length > 1 && (i && (-1 !== i.indexOf("land") || -1 !== i.indexOf("clickadilla_sex_popunder") || -1 !== i.indexOf("adsterra_popunder") || -1 !== i.indexOf("adsterra_sex-chat_popunder")) || r && -1 !== r.indexOf("cam")) && this.$store.commit("system/setToCameraAtOnce", !0)
            },
            updated: function() {
                this.$refs.loadMask.style.height = this.$refs.app.scrollHeight + "px",
                this.$refs.loadMask.style.width = this.$refs.app.clientWidth + "px"
            },
            computed: w({}, Object(i["d"])(["startedProgress"]), {}, Object(i["d"])("chat", ["lastVideoSession"]), {}, Object(i["d"])("system", ["newDeviceOpen", "toScreenAfterAuth", "defaultEmail"]), {}, Object(i["d"])("user", ["user", "isLogin", "ortc_token", "token", "acceptedYears", "isAuth"]), {}, Object(i["d"])("ortc", ["webrtcSocketConnected", "webrtcSocketAuth"]))
        }
          , x = k
          , S = (a("034f"),
        a("b0a0"),
        a("2877"))
          , C = Object(S["a"])(x, r, o, !1, null, null, null)
          , T = C.exports
          , E = a("a18c")
          , P = a("a925")
          , I = {
            sex_check: {
                title: "Кто вы?",
                sex_male: "Парень",
                sex_female: "Девушка"
            },
            staff: {
                title: "Ваш баланс",
                button: {
                    get_premium: "Получить премиум",
                    login: "Войти",
                    register: "Регистрация",
                    save: "Сохранить",
                    send: "Отправить",
                    refill_balance: "Пополнить баланс",
                    next: "Далее",
                    upload: "Загрузить",
                    yes: "Да",
                    begin: "Начать",
                    edit: "Изменить",
                    ok: "Ок",
                    confirm: "Подтвердить",
                    enter: "Войти",
                    back: "назад"
                },
                buy: "Купить",
                min: "мин.",
                understand: "Понятно",
                error: "Ошибка",
                all: "Все",
                delete: "Удалить",
                error_devices: {
                    already_open: "Видео чат MiraMi уже был открыт в другой вкладке.",
                    this_tab_active: "Хотите сделать эту вкладку активной?"
                },
                days: "дней",
                other: "Прочее",
                user: "пользователь",
                collapse: "Свернуть"
            },
            search: {
                start: "Начать поиск",
                note: "Пожалуйста не сворачивайте экран",
                your_ready: "Готовы начать?",
                process: "Поиск партнера по чату",
                awaiting: "Ожидаем"
            },
            chat: {
                type_message: "Ваше сообщение",
                to_end: "Завершить",
                is_premium: "Премиум",
                add_favourite: "Добавить в избранное",
                reconnection: "Восстановление соединения",
                connecting: "Соеденение с собеседником...",
                your_favourite: "Добавлен в избранное",
                time_to_end: "Время до окончания:"
            },
            modals: {
                login: {
                    create_account: "Регистрация",
                    email: "Ваш email",
                    password: "Ваш пароль",
                    title: "Авторизация",
                    forgot_password: "Забыли пароль?",
                    wrong_login: "Неправильный логин или пароль",
                    subtitle: "Общайся и наслаждайся"
                },
                support: {
                    title: "Поддержка",
                    have_questions: "Вы можете задать вопрос и наши специалисты в кратчайшие сроки постараются дать развернутый ответ."
                },
                register: {
                    already_have_account: "У меня уже есть аккаунт.",
                    title: "Сними ограничения,",
                    subtitle: "Регистрируйся!",
                    subtitle_2: "Продли свое удовольствие",
                    nickname: "Ник",
                    already_email: "Этот e-mail уже используется",
                    password_bad: "Пароль должен быть больше 8 символов.",
                    name_short: "Имя слишком короткое",
                    name_long: "Имя слишком длинное"
                },
                present: {
                    done: "Подарить",
                    cancel: "Отмена",
                    not_enough_balance_title: "Недостаточный баланс",
                    title: "Отправить подарок",
                    gift_price: "Стоимость подарка",
                    consent: "Вы готовы отправить подарок",
                    cost: "стоимостью",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Подарок успешно отправлен!"
                },
                complaint: {
                    title: "Сообщить о нарушении",
                    complaint_1: "Вовлечение детей",
                    complaint_5: "Обман",
                    complaint_2: "Просит подарок",
                    more: "Подробно опишите нарушение",
                    word: "Пожаловаться",
                    nudity: "Нагота",
                    dont_like: "Не нравится этот пользователь",
                    inappropriate_content: "Неприемлемый контент",
                    span_or_scam: "Спам или мошенничество"
                },
                success_register: {
                    title: "Вы успешно зарегистрированы",
                    keep_chat: "Продолжайте общаться с девушками."
                },
                present_success: {
                    title_2: "Вам подарок!",
                    thanks: "Спасибо!",
                    present_from: "от {giver_nick}"
                },
                photo_view: {
                    text_1: "Доступно только для премиум-пользователей",
                    text_2: "Доступно всем",
                    stub_only_premium: "Только премиум"
                },
                remove_favourite: {
                    text: "Вы уверены, что хотите удалить из избранного?"
                },
                remove_gallery: {
                    title: "Удалить",
                    text: "Вы уверены, что хотите удалить из галереи?"
                },
                chat: {
                    value_video_chat_text: "Стоимость общения в чатрулетке",
                    value_direct_video_chat_text: "Стоимость личного звонка",
                    top_up_balance_text_web: "Пополните баланс, чтобы продолжить общение с {nick}"
                },
                block_user: {
                    title: "Заблокировать",
                    confirm_text: "Вы действительно хотите заблокировать данного пользователя?"
                },
                prohibition: {
                    title: "У нас запрещены",
                    item_1: "Демонстрация половых\nорганов"
                },
                nudity_warning: {
                    title_1: "Покажи себя",
                    title_2: "Только твои фото",
                    title_3: "Правила приличия",
                    warning_1: "Выбирай фотографии на которых тебя хорошо видно",
                    warning_2: "Не загружай фотографии других людей - мы их удалим",
                    warning_3: "Воздержись от наготы и непристойных фото"
                },
                messenger_warning_limit: {
                    text_free: "Вы использовали свой дневной лимит. Станьте Premium.",
                    text_prem: "Вы использовали свой дневной лимит, теперь за каждое сообщение будет взиматься",
                    text_anonim: "Для просмотра сообщения вам необходимо войти или зарегистрироваться"
                },
                liking_send: {
                    text: "Отправь парню симпатию, чтобы он смог с тобой связаться."
                },
                billing: {
                    subtitle_3: "Выберите пакет алмазов",
                    subtitle_2: "Премиум в подарок навсегда",
                    messages: "сообщений",
                    choose_payment: "Выберите способ оплаты",
                    agreement: "Совершая оплату, я подтверждаю свое совершеннолетие, согласен с",
                    terms_conditions: "Условиями и правилами"
                },
                accept_years: {
                    sub_title: "Перед тем как войти, подтвердите, что вам исполнилось 18 лет и вы согласны с условиями ниже:",
                    rule_1: "Вы подтверждаете, достигли совершеннолетнего возраста.",
                    rule_2: "Вы гарантируете, что не допустите несовершеннолетних лиц к использованию Mirami.chat.",
                    rule_3: "Вы гарантируете, что Вы немедленно сообщите нам обо всех пользователях, которые по Вашему мнению являются несовершеннолетними.",
                    welcome: "Добро пожаловать"
                },
                rules: {
                    title: "Напоминание",
                    text_public_chats: "Публичные чаты",
                    text_nudity: "Нагота запрещена!",
                    text_sexual_context: "Поведение с сексуальным подтекстом запрещено!",
                    text_private_chats: "Личные чаты",
                    text_free: "Можете вести себя свободно.",
                    text_moderation: "Все звонки публичные и частные, модерируются.",
                    text_chat_indicator: "Внимательно следите за индикатором чата, он может менять свое состояние.",
                    text_rules: "Правила видео чата",
                    memo: "Памятка",
                    update_date: "Дата обновления: {0}",
                    list_text_1: "Ведите себя как обычная одинокая девушка, которая ищет новые знакомства и общение в видеочате.",
                    list_text_2: "Обязательно следите за тем, чтобы ваше лицо было хорошо видно собеседнику.",
                    list_text_3: "Уделяйте все внимание собеседнику, всегда пишите первой и отвечайте парню.",
                    list_text_4: "Не ведите параллельные трансляции в других видеочатах.",
                    list_text_5: "Соблюдайте правила поведения в разных чатах (статус видеочата отмечается соответствующей иконкой рядом с аватаром собеседника):",
                    text_public_chat: "Публичный чат",
                    text_private_chat: "Приватный чат",
                    text_nudity_context: "Нагота и сексуальное поведение* запрещены.",
                    text_nudity_context_allowed: "Нагота и сексуальное поведение* разрешены, если собеседник совершеннолетний и выразил свое согласие на это.",
                    text_nudity_additional: "*Сексуальное поведение включает в себя демонстрацию гениталий, топлесс, нижнее белье или чрезмерно открытую одежду, сексуально откровенные позы, ласки тела, движения ртом или языком.",
                    text_salary: "Никому не говорите, что вы зарабатываете здесь деньги!",
                    full_rules: "Полный список правил смотрите {here}.",
                    here: "здесь",
                    text_ban: "За нарушение правил платформы ваш аккаунт заблокируют навсегда, и вы потеряете все заработанные деньги!"
                },
                requisites: {
                    text_first: "Ваши доходы будут переводиться на ваш криптокошелек. Чтобы получать зарплату вам необходимо иметь криптокошелек USDT (TRC-20) на любой платформе.",
                    text_second: "Если у вас его нет, вы можете бесплатно зарегистрировать его: Binance и тд.",
                    text_third: "Пожалуйста, используйте здесь только адрес USDT (TRC-20), В случае предоставления неверного вся ответственность ложится на вас.",
                    address_usdt: "Адрес USDT (TRC-20)",
                    address_usdt_error: "Данный адрес не принадлежит USDT (TRC-20)"
                },
                nudity_error: {
                    text: "Фотография содержит наготу, поэтому не может быть загружена"
                },
                denied_camera: {
                    title_3: "Ваша камера или микрофон недоступны",
                    title_2: "Передумали?",
                    message: "Вы не разрешили доступ к своей камере, девушки не смогут вас видеть, поэтому вы не можете начать чат.",
                    message_girl: "Вы не разрешили доступ к своей камере, парни не смогут вас видеть, поэтому вы не можете начать чат.",
                    restart_page: "Перезагрузите страницу, разрешите использовать вашу камеру и сразу же сможете начать общение."
                },
                accept_camera: {
                    subtitle_2: "Разреши доступ к камере и микрофону",
                    title: "Девушка хочет тебя видеть",
                    allow_camera_first: "Приложение нуждается в доступе к камере и микрофону, чтобы девушки могли видеть Вас.",
                    allow_camera_second: "Разрешите доступ к камере, микрофону и начните увлекательный чат.",
                    allow_camera_girl_bold: "Без камеры начать чат не получится."
                },
                girloffline: {
                    text_3: "Девушка сейчас",
                    text_4: "Используй крутую функцию 😎"
                },
                choose_file: {
                    title: "Выбрать файл",
                    text: "Нагота запрещена. Используйте только свои медиа материалы, которые подходят в Instagram или TikTok.",
                    only_premium: "Только для премиум"
                },
                recovery: {
                    title: "Восстановление доступа",
                    enter_new_password: "Восстановление доступа к Mirami chat",
                    invalid_recovery_key: "Ссылка для восстановления доступа не действительна.",
                    success: "Новый пароль успешно установлен. Теперь можете авторизоваться.",
                    sent_link: "На ваш e-mail {email} была отправлена ссылка для восстановления пароля. Если вы не получили письмо, проверьте правильность ввода e-mail или в спаме.",
                    reset_password: "Сбросить пароль",
                    info_text: "Введите email, который использовали при регистрации.<br/>Мы отправим вам письмо со специальной ссылкой, которая поможет переустановить пароль."
                },
                model_status: {
                    title: "Статус активности",
                    subtitle: "Зарабатывай больше",
                    free_user: "C бесплатным пользователем",
                    prem_user: "C премиум-пользователем",
                    pay_start: "Оплата за общение начинается {after}.",
                    pay_start_after: "после 10 секунд",
                    descr_top: "Позволяет модели получать максимальную ставку и иметь приоритетную выдачу в рулетке. Он активируется {auto} с момента выполнения одного из условий:",
                    descr_top_auto: "автоматически на 20 дней",
                    if_1: "Реферал купил",
                    if_2: "Парень купил, после общения с тобой",
                    if_3: "Непрерывный чат с премиумом {min}",
                    if_3_min: "> 3 минут",
                    status_reload: "Статус {auto} если выполняется одно из условий:",
                    status_reload_auto: "автоматически продлевается на 10 дней"
                },
                profile: {
                    title: "Профиль",
                    affiliate: "Реферальная программа",
                    link: "Ссылка",
                    count: "Количество",
                    profit: "Прибыль"
                },
                warning_activity: {
                    title: "Внимание! Было зафиксировано отсутствие в чате.",
                    message: "Не игнорируйте собеседников, иначе система исключит вас из поиска и будут реже показывать."
                },
                ad: {
                    try: "Попробовать"
                },
                add_avatar: {
                    title: "Добавьте аватар 🫢",
                    text: "Загрузите аватар, прежде чем начинать поиск собеседников"
                },
                penalty_received: {
                    title: "Штраф",
                    total_penalties: "Всего штрафов:",
                    first_penalty: "Это ваше первое нарушение, поэтому мы даем вам шанс исправиться. Мы вернем вам монеты, если вы в течение 7 дней заработаете более 20 000 монет и не нарушите правила.",
                    reason: "Причина:",
                    place: "Место",
                    comment: "Комментарий:",
                    screenshot: "Скриншот нарушения",
                    sexual_behavior: "Сексуально откровенное поведение"
                },
                image_upload_error: {
                    text: "Не передавайте личные данные и снимки экрана. Будьте внимательны, общайтесь напрямую в Mirami.chat"
                },
                camscore: {
                    title: "Ваш Camscore",
                    description: "Если ваш Camscore — «Хорошо» или «Отлично», вы получите статус TOP и приоритет в очереди.",
                    description_undefined: "Вы провели менее 500 видеочатов, поэтому мы не можем рассчитать ваш Camscore. <br/>Пожалуйста, проводите больше времени в видеочатах.",
                    what_is: "Что такое Camscore?",
                    status: {
                        none: "Не определено",
                        terrible: "Ужасно",
                        bad: "Плохо",
                        good: "Хорошо",
                        excellent: "Отлично"
                    },
                    text: {
                        line_1: "Camscore — это рейтинг, который отражает общую продуктивность и прибыльность модели на платформе.",
                        line_2: "Camscore рассчитывается на основе доходов модели за последние 7 дней и чатов длительностью более 5 секунд. Чем больше модель зарабатывает на приватных чатах и подарках, тем выше её Camscore. Раз в сутки рейтинг модели пересчитывается с учётом её последних семидневных результатов. Таким образом, активность модели напрямую влияет на рост или снижение её рейтинга.",
                        line_3: "Важно понимать, что этот показатель зависит от нескольких факторов, которые напрямую влияют на прибыльность модели:",
                        line_4: "Количество времени в эфире – Чем больше времени модель проводит онлайн и активно взаимодействует с пользователями, тем больше у неё возможностей для заработка.",
                        line_5: "Частота покупок от собеседников – Чем больше пользователи платят за приватные чаты и отправляют подарки, тем выше Camscore модели.",
                        line_6: "Продление видеочатов – Чем чаще собеседники продлевают видеозвонки с моделью, тем выше её рейтинг. Модели рекомендуется создавать поводы для регулярных звонков — например, предлагать уникальные шоу или вести дружеские беседы, которые могут мотивировать пользователей к приватным звонкам.",
                        line_7: "Проявление инициативы – Модели не стоит ждать, пока пользователи сделают первый шаг. Ей следует активно писать и звонить первой. Это демонстрирует внимание и заинтересованность, что мотивирует пользователей больше взаимодействовать с моделью.",
                        line_8: "Активность и креативность – Пользователи ценят качественную картинку, хорошее освещение и активное общение, что может побудить их тратить больше денег.",
                        line_9: "Таким образом, чем выше доход модели, тем лучше её Camscore, что помогает ей занять место в топах платформы и привлечь ещё больше пользователей."
                    }
                },
                santa_top: {
                    title: "Santa’s Top Pick🎄",
                    text1: "Участвуйте в нашем рождественском конкурсе и зарабатывайте дополнительные бонусы! 🎁 За сутки: заработайте $20 и получите $5, соберите $45 — получите $15, а за $100 вы получите целых $35!",
                    text2: "Превратите свои усилия в щедрые подарки ❤️",
                    every_day: "✨ Ежедневно до 31 декабря",
                    launch_auto: "Запускается автоматически каждые сутки по вашему местному времени.",
                    stats_update: "⏰ Статистика обновляется каждые ~5 минут"
                }
            },
            profile: {
                email_notifications: "Email уведомления",
                change_password: "Изменить пароль",
                new_password: "Новый пароль",
                repeat_password: "Повторите пароль",
                passwords_not_match: "Пароли не совпадают",
                delete_account: "Удалить аккаунт",
                about: "О себе",
                birthday: "Дата рождения",
                receive_guests: "Получать уведомления от премиум-гостей.",
                receive_girls: "Получайте уведомления, когда нужная девушка в сети и есть важная для вас информация.",
                premium_btn: "Стать Премиум",
                bad_btc: "Такого BTC wallet не существует.",
                actions: {
                    invite: "Пригласить в чат",
                    start_chat: "Видео звонок",
                    remove_favourite: "Удалить из избранного",
                    message: "Сообщение",
                    was_invited: "Приглашение отправлено",
                    cancel_notify: "Отменить уведомление",
                    notify_online: "Уведомить когда онлайн"
                },
                premium_descr: "Станьте премиум-пользователем и получите полный доступ ко всем функциям.",
                subtitle: {
                    foto: "Фото",
                    video: "Видео"
                },
                foto_descr: "Добавьте фотографии, чтобы пользователи могли лучше вас узнать.",
                verify_descr: "Подтвердите свою личность, чтобы люди могли вам доверять.",
                geo_button: "Мои геопозиция",
                geo_description: "Отображать мою страну",
                rp_btn: "Я здесь",
                rules: {
                    forbidden: {
                        title: "Запрещено",
                        text_1: "Нагота и поведение с сексуальным подтекстом в публичном чате.",
                        text_2: "Использовать более 1 аккаунта.",
                        text_3: "Загружать фото или видео в обнаженном виде.",
                        text_4: "Использовать чужой аккаунт.",
                        text_5: "Просить деньги или предлагать другие платежные средства.",
                        text_6: "Делиться личными данными (номера телефонов, социальных сетей и т.д.).",
                        text_7: "Быть в видео чате с кем-то.",
                        text_8: "Использовать автоматизацию (боты, видеозапись транслируемая веб-камерой и т. д.).",
                        text_9: "Игнорировать собеседника (отсутствовать в кадре, не отвечать на текстовые сообщения, отвлекаться на посторонние дела)"
                    },
                    allowed: {
                        title: "Разрешено",
                        text_1: "Вести себя свободно в приватном видео чате, как комфортно вам и вашему собеседнику.",
                        text_2: "Продлевать звонок, как можно дольше.",
                        text_3: "Отвечать на сообщения и начинать общение. Быть доброй, общительной и улыбаться.",
                        text_4: "Находиться перед камерой, с хорошим освещением. Вас должно быть четко видно.",
                        text_5: "Загружать только свои фото.",
                        text_6: "Сообщать о пользователях, когда вы сталкиваетесь с несовершеннолетними, домогательством или неверным полом.",
                        text_7: "Быть онлайн не реже одного раза в месяц, иначе баланс будет обнулен."
                    },
                    warn: "Нарушения фиксируются модераторами и ботами. Вы можете быть оштрафованы или заблокированы навсегда"
                },
                queen_day: "Королева дня",
                queen_week: "Королева недели",
                queen_mirami: "Королева Mirami",
                blur_button: "Размывать видеочат с собеседником",
                blur_description: "Нажмите на экран видео чата, чтобы убрать размытие",
                not_found_title: "Данный пользователь не найден",
                not_found_description: "Начните новое знакомство прямо сейчас!",
                tab_personal: "Личная информация",
                tab_settings: "Настройки аккаунта",
                tab_rules: "Правила",
                tg_link_1: "Наш",
                tg_link_2: "официальный Telegram канал",
                about_girl: "О девушке",
                bad_nickname: "Ник должен содержать не менее 3 символов.",
                bad_about: "Максимальное количество символов о себе - 2000.",
                personal_info: "Личные данные",
                btc_wallet: "Bitcoin кошелёк Totalcoin",
                phone: "(номер телефона)",
                birthday_required: "Поле дата рождения обязательно.",
                birthday_invalid: "Некорректная дата рождения",
                password_success: "Смена пароля прошла успешно.",
                my_settings: "Мои настройки",
                avatar_only_image: "Вы можете загрузить только jpg, png.",
                avatar_file_size: "Максимальный размер файла 2MB.",
                undefined_avatar_problems: "При сохранении файла возникли неизвестные проблемы.",
                last_visit_girl: "Был (a) в сети",
                video_descr: "Добавьте свое веселое видео, чтобы повысить свою популярность.",
                gallery_rp: "Еще больше моего контента здесь"
            },
            main: {
                history_chat_title: "История общения",
                chat_men: "Начать видео чат",
                h1: "MiraMi — случайный видео чат с девушками",
                h1_girl: "MiraMi — случайный видео чат с парнями",
                sign_1: "Одинокие незнакомки ждут тебя онлайн!",
                sign_2: "Хотите найти собеседницу?",
                sign_2_girl: "Хотите найти собеседника?",
                camera_need: "Включите камеру, чтобы начать поиск незнакомки.",
                camera_need_girl: "Включите камеру, чтобы начать поиск."
            },
            sections: {
                affiliate: "Реф. программа",
                top: "ТОП Mirami",
                logout: "Выход",
                billing: "Купить минуты",
                billing_messages: "Купить сообщения",
                main: "Видеочат",
                girls: "Девушки",
                favourites: "Избранное",
                auto_translate: "Авто перевод",
                gifts: "Подарки"
            },
            virtual_date: {
                earn_more_money_guys: "Зарабатывайте больше денег, встречаясь на Mirami!",
                invited: "приглашено",
                reward: "заработано",
                invite_guys: "Пригласи мужчин",
                invite_girls: "Пригласи девушек",
                how_work: {
                    title: "Как это работает",
                    item_1: "Знакомьтесь с парнями на любых сайтах знакомств, в социальных сетях и т.д. Разжигайте их интерес, флиртуя и показывая свои фотографии.",
                    item_2: "Когда парень уже увлечен вами, предложите ему показать себя и пообщаться с помощью видеочата MiraMi, отправив ему ссылку на свою комнату.",
                    item_3: "Если вы ему действительно нравитесь, он легко купит премиум-доступ, чтобы проводить время только с вами.",
                    item_4: "{bonus} к вашему заработку! Этот гость навсегда становится вашим рефералом, и за каждую его покупку вы будете получать {reward}.",
                    item_4_bonus: "Дополнительный бонус",
                    item_4_reward: "15% вознаграждения"
                },
                link_guys: "Ваша ссылка для приглашения мужчин",
                earn_more_money_girls: "Зарабатывайте больше, приглашая девушек в MiraMi!",
                invite_models: "Приглашайте моделей и получайте 10% от ее премиального заработка.",
                link_girls: "Ваша ссылка для приглашения девушек"
            },
            gifts: {
                title: "Мои подарки",
                empty: "В настоящее время у вас нет подарков",
                from: "от {giver_nick}",
                block: "Вы не можете принимать подарки."
            },
            withdraw: {
                go: "Вывести",
                balance: {
                    title: "Баланс",
                    info: "Информация",
                    rating: "Рейтинг",
                    minimal_sum: "Минимальная сумма монет для обмена {0}.",
                    any_day: "Выплату запрашивать можно в любой день.",
                    every_thursday: "Каждый четверг в 21:00 (GMT+3) происходит расчет заработанных монет. Выплата происходит в пятницу.",
                    requisites: "Реквизиты",
                    my_requisites: "Мои реквизиты",
                    actual_info: "Вся актуальная информация по выплатам здесь:",
                    official_channel: "Официальный канал Telegram",
                    withdraw: "Вывести",
                    error_minimal_sum: "минимальная сумма вывода {0} монет",
                    commission: "Комиссия платежной системы за каждую выплату составляет {0}$"
                },
                history: {
                    title: "История платежей",
                    income_sum: "Суммарный доход за все время:",
                    success: "Успешно",
                    declined: "Отклонено",
                    waiting: "Ожидание"
                },
                title: "Вывод средств",
                your_wallet: "Ваш Bitcoin кошелек Totalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "Плохое соединение",
                    other: "Другое",
                    sex: "Сексуальные действия",
                    nudse: "Нагота в кадре",
                    absence: "Отсутствие в кадре",
                    dont_attention: "Нет внимания собеседнику",
                    video: "Использование видео материалов",
                    multi_accounts: "Использование нескольких аккаунтов",
                    alien_account: "Использование чужого аккаунта"
                },
                your_ban: "Вы забанены",
                what_reason: "Ваш аккаунт заблокирован по причине",
                unban_time: "Дата разблокировки:",
                infinity: "Навсегда",
                never: "Никогда",
                comment: "Комментарий от администратора"
            },
            messenger: {
                antispam: "Чат анонимен, поэтому запрещено делиться любыми контактными данными и ссылками. Дальнейшие попытки приведут к блокировке вашего аккаунта навсегда.",
                dialog_timer_label: "Скоро исчезнет",
                dialog_male_liking_label: "😍 Вы понравились девушке!",
                dialog_female_liking_label: "💖 Вы отправили симпатию!",
                dialog_gift_offer_label: "😉 Ей скучно, сделай подарок",
                dialog_message: "Подарок",
                dialog_not_support: "Не поддерживается",
                dialog_empty_state_female: "Здесь пока ничего нет.\nБудь первой! Напиши сообщение!",
                dialog_empty_state_male: "Будь первым! Напиши девушке сообщение!",
                select_girl: "Выбрать девушку",
                modal_message_price_label: "Стоимость сообщения",
                dialog_gift_offer_female_label: "😜 Если отправить подарок, то она будет видеть твои сообщения первыми",
                dialog_gift_offer_male_label: "🤫 Он думает подарить тебе подарок. Напиши ему",
                typing: "Печатает",
                dialog_liking_text: "Привет, ты мне понравился! Давай пообщаемся 🔥🔥",
                confirm_clear_history_chat: "Вы уверены что хотите очистить историю чата?",
                confirm_delete_chat: "Вы уверены что хотите удалить диалог?",
                btn_clear_chat: "Очистить историю чата",
                delete_dialog: "Удалить чат",
                timer_label: "Сообщение удалится через",
                timer_descr: "Это сообщение доступно только для премиум пользователей.",
                you: "Вы:",
                sent: "Отправлено",
                read: "Прочитано",
                title: "Мессенджер",
                select_dialogue: "Чтобы начать общение,<br/>выберите диалог.",
                start_date: "У тебя пока нет сообщений.<br/>Начни знакомство с девушками уже сейчас!",
                fill_package: "Чтобы продолжить общение,<br/>пополни пакет сообщений.",
                read_messege: "Прочти сообщение от девушки.<br/>Оно удалится через час.",
                start_reg: "Чтобы общаться с девушками <br/>вам необходимо войти или зарегистрироваться",
                chat_with_her: "Зарегистрируйся,<br/>чтобы пообщаться с ней.",
                no_dialogue: "У тебя пока нет сообщений.",
                dialog_violation_label: "Изображение удалено",
                dialog_violation_message: "Изображение было удалено, поскольку не соответствует правилам приложения."
            },
            check_age: {
                main_title: "Верификация",
                verify_button: "Верифицировать"
            },
            alerts: {
                new_currency_title: "Внимание",
                new_currency_first_label: "Теперь валюта приложения",
                new_currency_second_label: "Равный эквивалент зачислен вам на баланс.",
                limit_function2: "Доступ только для премиум-пользователей.",
                have_active_chat: "Вы в активном чате.",
                confirm: "Вы уверены?",
                success_payment: "Ваш баланс успешно пополнен!"
            },
            verification: {
                rule_1: "Убедитесь, что документ ваш и он в хорошем состоянии.",
                rule_2: "Убедитесь, чтобы у вас нет больше аккаунтов, даже отклоненных.",
                rule_3: "Не используйте поддельные или измененые документы.",
                rule_4: "Проходить верификацию может только владелец аккаунта.",
                info_text_1: "Наша система автоматически по вашему лицу и данным определит поддельный документ или то, что у вас уже есть аккаунт.",
                info_text_2: "Не пренебрегайте этим требованиями, иначе ваш аккаунт будет автоматически заблокирован.",
                info_text_3: "Если у вас есть аккаунт с неудачной верификацией напишите на почту, будем решать вопрос в индивидуальном порядке."
            },
            top_girls: {
                one_day: "Топ дня",
                one_week: "Топ недели",
                all_time: "Всё время",
                your_rating: "Ваш рейтинг",
                your_place: "Вы на {0} месте",
                yesterday_winners: "Победители вчерашнего дня",
                prev_week_winners: "Победители прошлой недели",
                rules_button: "Как формируется рейтинг?",
                daily_rating: "Дневной рейтинг",
                current_daily_rating: "Рейтинг текущего дня",
                weekly_rating: "Недельный рейтинг",
                current_weekly_rating: "Рейтинг текущей недели",
                all_time_rating: "Рейтинг за всё время",
                current_place: "Текущее место: {0} ({1})",
                yesterday_place: "Место вчера: {0} ({1})",
                previous_week_place: "Место на прошлой неделе: {0} ({1})",
                rules: {
                    title: "Баллы начисляются за:",
                    rule_1: "общение в видеочате",
                    rule_3: "хорошую реакцию от собеседников",
                    rule_4: "добавления в друзья и ежедневную активность",
                    rule_5: "Баллы могут списываться за плохую реакцию от собеседника, за недельную неактивность и за бан."
                }
            },
            boys: {
                title: "Пользователи Mirami"
            },
            favourites: {
                title: "Избранное",
                add_girls: "Добавляйте понравившихся девушек в список избранных для быстрого доступа к ним.",
                to_roulette: "Чат-рулетка",
                empty_title: "Список избранных пуст",
                empty_text: "Добавьте парней в избранное, чтобы оставаться на связи",
                added_to_favorites: "{name} добавлен в {br}список избранных",
                you_in_favorites: "Вас добавили в {br}список избранного"
            },
            catalog: {
                title: "Каталог девушек",
                online: "Девушки онлайн",
                offline: "Девушки оффлайн",
                only_premium: "Полный каталог наших девушек доступен только премиум-пользователям."
            },
            history: {
                empty_title: "Ваша история общения пуста",
                empty_text: "Давайте исправим это прямо сейчас"
            }
        }
          , O = {
            sex_check: {
                title: "Who are you?",
                sex_male: "Man",
                sex_female: "Girl"
            },
            staff: {
                title: "Your balance",
                button: {
                    get_premium: "Get premium",
                    login: "Sign in",
                    register: "Register",
                    save: "Save",
                    send: "Send",
                    refill_balance: "Refill balance",
                    next: "Next",
                    upload: "Upload",
                    yes: "Yes",
                    begin: "Start",
                    edit: "Edit",
                    ok: "ОK",
                    confirm: "Confirm",
                    enter: "Enter",
                    back: "back"
                },
                buy: "Buy",
                min: "min.",
                understand: "It’s clear",
                error: "Error",
                all: "All",
                delete: "Remove",
                error_devices: {
                    already_open: "The chat MiraMi is already open.",
                    this_tab_active: "Do you want to make this tab active?"
                },
                days: "days",
                other: "Other",
                user: "user",
                collapse: "Collapse"
            },
            search: {
                start: "Start searching",
                note: "Please don't close the screen",
                your_ready: "Ready to get started?",
                process: "Finding you a chat partner",
                awaiting: "Awaiting"
            },
            chat: {
                type_message: "Type your message",
                to_end: "End",
                is_premium: "Premium",
                add_favourite: "Add to favourites",
                reconnection: "Reconnection",
                connecting: "Connecting to partner...",
                your_favourite: "Your favourite",
                time_to_end: "Time to end chat"
            },
            modals: {
                login: {
                    create_account: "Register",
                    email: "Your email",
                    password: "Your password",
                    title: "Log in",
                    forgot_password: "Forgot your password?",
                    wrong_login: "Wrong login or password",
                    subtitle: "Chat and enjoy"
                },
                support: {
                    title: "Support",
                    have_questions: "If you have any questions or suggestions, email us."
                },
                register: {
                    already_have_account: "I already have an account.",
                    title: "Remove restrictions,",
                    subtitle: "Register!",
                    subtitle_2: "Extend your pleasure",
                    nickname: "Nickname",
                    already_email: "This email is already being used.",
                    password_bad: "Password must be at least 8 characters in length.",
                    name_short: "Name is too short",
                    name_long: "Name is too long"
                },
                present: {
                    done: "Send a gift",
                    cancel: "Cancel",
                    not_enough_balance_title: "Insufficient balance",
                    title: "Send a gift",
                    gift_price: "The cost of the gift",
                    consent: "Are you ready to send a gift",
                    cost: "worth",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Gift successfully sent!"
                },
                complaint: {
                    title: "Report Abuse",
                    complaint_1: "Child involvement",
                    complaint_5: "Deception",
                    complaint_2: "Asks for a gift",
                    more: "Please describe the violation in detail",
                    word: "Complain",
                    nudity: "Nudity",
                    dont_like: "Don't like this user",
                    inappropriate_content: "Inappropriate content",
                    span_or_scam: "Spam or scam"
                },
                success_register: {
                    title: "Successful registration",
                    keep_chat: "Keep chatting with girls."
                },
                present_success: {
                    title_2: "A gift for you!",
                    thanks: "Thanks!",
                    present_from: "You received a gift from {giver_nick}"
                },
                photo_view: {
                    text_1: "Now available for premium users only",
                    text_2: "Now available to everyone",
                    stub_only_premium: "Only premium"
                },
                remove_favourite: {
                    text: "Are you sure you want to remove from Favorites?"
                },
                remove_gallery: {
                    title: "Remove",
                    text: "Are you sure you want to remove from gallery?"
                },
                chat: {
                    value_video_chat_text: "The cost of communication in a chatroulette",
                    value_direct_video_chat_text: "The cost of a personal call",
                    top_up_balance_text_web: "Top up your balance to continue communication with {nick}"
                },
                block_user: {
                    title: "Block user",
                    confirm_text: "Are you sure you want to block this user?"
                },
                prohibition: {
                    title: "We are prohibiting",
                    item_1: "Displays of sexual\norgans"
                },
                nudity_warning: {
                    title_1: "Show yourself",
                    title_2: "Only your photos",
                    title_3: "Propriety rules",
                    warning_1: "Choose photos that show you clearly",
                    warning_2: "Don't upload photos of other people - we'll remove them",
                    warning_3: "Avoid nudity and obscene photos"
                },
                messenger_warning_limit: {
                    text_free: "You've used your daily limit. Become Premium.",
                    text_prem: "You've used your daily limit, now you will be charged per message",
                    text_anonim: "To view the message you need to login or register"
                },
                liking_send: {
                    text: "Send a like to a guy so he can contact you."
                },
                billing: {
                    subtitle_3: "Choose a pack of diamonds",
                    subtitle_2: "Premium as a gift forever",
                    messages: "messages",
                    choose_payment: "Choose payment method",
                    agreement: "By making this payment I confirm I'm 18+ years old, agree to the",
                    terms_conditions: "Terms and Conditions"
                },
                accept_years: {
                    sub_title: "Before you can proceed, please confirm you’re over 18 years old and agree to the terms below:",
                    rule_1: "You confirm that you are of a neccessary age.",
                    rule_2: "You guarantee that you won't allow minors to use Mirami.chat.",
                    rule_3: "You guarantee that you will immediately notify us of any users who you believe are underage.",
                    welcome: "Welcome"
                },
                rules: {
                    title: "Reminder",
                    text_public_chats: "Public chats",
                    text_nudity: "Nudity is not allowed!",
                    text_sexual_context: "Sexual behavior is prohibited!",
                    text_private_chats: "Private chats",
                    text_free: "You can be yourself.",
                    text_moderation: "Both public and private calls can be moderated.",
                    text_chat_indicator: "Keep an eye on the chat, it can always change.",
                    text_rules: "Video chat rules",
                    memo: "Reminder",
                    update_date: "Update date: {0}",
                    list_text_1: "Act like a normal single girl who is looking for new men to video chat with.",
                    list_text_2: "Make sure that your face is clearly visible to your conversation partner.",
                    list_text_3: "Pay full attention to the conversation partner, always write first and reply to the guy.",
                    list_text_4: "Do not run multistreaming in other video chats.",
                    list_text_5: "Follow the rules of behavior in different chat types (video chat status is marked with a corresponding icon next to the avatar of the conversation partner):",
                    text_public_chat: "Public chat",
                    text_private_chat: "Private chat",
                    text_nudity_context: "Nudity and sexual behavior* are forbidden.",
                    text_nudity_context_allowed: "Nudity and sexual behavior* are allowed if the conversation partner is of legal age and has given their consent.",
                    text_nudity_additional: "*Sexual behavior includes genital display, topless, underwear or overly revealing clothing, sexually explicit poses, body caressing, mouth or tongue movements.",
                    text_salary: "Do not tell anyone that you make money here!",
                    full_rules: "For the complete list of rules, see {here}",
                    here: "here",
                    text_ban: "If you violate the rules of the platform, your account will be permanently banned and you will lose all the money you have earned!"
                },
                requisites: {
                    text_first: "Your earnings will be withdrawn your crypto wallet. To receive the payout, you need to have a USDT (TRC-20) crypto wallet on any platform.",
                    text_second: "If you don't have one, please create one by registering on Binance or other crypto exchanges - it's free",
                    text_third: "Please use only the USDT (TRC-20) address here. If you provide an incorrect address, the responsibility is on you.",
                    address_usdt: "USDT Address (TRC-20)",
                    address_usdt_error: "This address does not belong to USDT (TRC-20)"
                },
                nudity_error: {
                    text: "Photo contains nudity and cannot be uploaded"
                },
                denied_camera: {
                    title_3: "Your camera or microphone is not connected",
                    title_2: "Have you changed your mind?",
                    message: "You have not allowed access to your camera so girls will not be able to see you.",
                    message_girl: "You have not allowed access to your camera so guys will not be able to see you.",
                    restart_page: "Restart the page and allow to use your camera."
                },
                accept_camera: {
                    subtitle_2: "Allow access to the camera and microphone",
                    title: "The girl want to see you",
                    allow_camera_first: "The app needs access to the camera and microphone so the girls will be able see you",
                    allow_camera_second: "Allow access to the camera, microphone and start an exciting chat.",
                    allow_camera_girl_bold: "You cannot start a chat without a camera."
                },
                girloffline: {
                    text_3: "The girl is",
                    text_4: "Use a cool feature 😎"
                },
                choose_file: {
                    title: "Choose File",
                    text: "Nudity is prohibited. Use only your own media that you could upload to Instagram or TikTok.",
                    only_premium: "Only for premium"
                },
                recovery: {
                    title: "Access recovery",
                    enter_new_password: "Access recovery to Mirami chat",
                    invalid_recovery_key: "The link to access recovery is invalid.",
                    success: "The new password was successfully set. Now you can log in.",
                    sent_link: "A link to reset your password has been sent to your e-mail {email}. If you have not received an email, please check the correctness of your e-mail or spam.",
                    reset_password: "Reset password",
                    info_text: "Enter the email you used to register. <br/> We will send you an email with a special link to help you reset your password."
                },
                model_status: {
                    title: "Activity Status",
                    subtitle: "Earn more",
                    free_user: "With free user",
                    prem_user: "With premium user",
                    pay_start: "Payment for communication starts {after}.",
                    pay_start_after: "after 10 seconds",
                    descr_top: "Allows the model to get the maximum rate and priority in roulette. It is activated {auto} from the moment when one of the conditions is met:",
                    descr_top_auto: "automatically for 20 days",
                    if_1: "Referral user bought",
                    if_2: "The guy bought after chatting with you",
                    if_3: "Continuous chat with premium user {min}",
                    if_3_min: "> 3 minutes",
                    status_reload: "Status {auto} if one of the following conditions is met:",
                    status_reload_auto: "is automatically prolonged for 10 days"
                },
                profile: {
                    title: "Profile",
                    affiliate: "Affiliate program",
                    link: "Link",
                    count: "Count",
                    profit: "Profit"
                },
                warning_activity: {
                    title: "Warning! Your absence at chat has been noticed.",
                    message: "Do not ignore the interlocutors, otherwise you will be excluded from the search and shown less often."
                },
                ad: {
                    try: "Try it now"
                },
                add_avatar: {
                    title: "Add avatar 🫢",
                    text: "Upload your avatar before you start searching for partners."
                },
                penalty_received: {
                    title: "Penalty",
                    total_penalties: "Total penalties:",
                    first_penalty: "This is your first violation, so we give you a chance to make it right. We will give you your coins back if you earn more than 20,000 coins within 7 days and don't break the rules.",
                    reason: "Reason",
                    place: "Location",
                    comment: "Comment:",
                    screenshot: "Screenshot of violation",
                    sexual_behavior: "Sexually explicit behavior"
                },
                image_upload_error: {
                    text: "Do not share personal data or screenshots. Be careful and communicate directly on Mirami.chat."
                },
                camscore: {
                    title: "Your Camscore",
                    description: 'If your Camscore is "Good" or "Excellent", you will receive the TOP status and priority in the queue.',
                    description_undefined: "You have had fewer than 500 video chats, so we cannot calculate your Camscore. <br/>Please spend more time in video chats.",
                    what_is: "What is Camscore?",
                    status: {
                        none: "Undefined",
                        terrible: "Terrible",
                        bad: "Bad",
                        good: "Good",
                        excellent: "Excellent"
                    },
                    text: {
                        line_1: "Camscore is a rating that reflects the overall productivity and profitability of a model on the platform.",
                        line_2: "Camscore is calculated based on the model’s earnings over the last 7 days and chats lasting more than 5 seconds. The more a model earns from private chats and gifts, the higher their Camscore. The model's rating is recalculated daily, taking into account their most recent seven-day results. Thus, the model's activity directly affects the increase or decrease of their rating.",
                        line_3: "It is important to understand that this indicator depends on several factors that directly influence the model’s profitability:",
                        line_4: "Amount of time spent online – The more time a model spends online and actively interacts with users, the more opportunities they have to earn.",
                        line_5: "Frequency of purchases from users – The more users pay for private chats and send gifts, the higher the model’s Camscore.",
                        line_6: "Chat extensions – The more often users extend video calls with the model, the higher their rating. Models are advised to create reasons for regular calls — for example, offer unique shows or have friendly conversations that can motivate users to make private calls.",
                        line_7: "Taking initiative – Models should not wait for users to make the first move. They should actively write and call first. This shows attentiveness and interest, motivating users to interact more with the model.",
                        line_8: "Activity and creativity – Users appreciate high-quality images, good lighting, and active communication, which can encourage them to spend more money.",
                        line_9: "Therefore, the higher a model’s earnings, the better their Camscore, helping them to rank higher on the platform and attract more users."
                    }
                },
                santa_top: {
                    title: "Santa’s Top Pick🎄",
                    text1: "Join our Christmas contest and earn extra bonuses! 🎁 In one day: earn $20 and get $5, collect $45 and get $15, and for $100, you’ll receive a full $35!",
                    text2: "Turn your efforts into generous gifts ❤️",
                    every_day: "✨ Daily until December 31",
                    launch_auto: "Automatically starts every day at your local time.",
                    stats_update: "⏰ Statistics are updated every ~5 minutes."
                }
            },
            profile: {
                email_notifications: "Email notifications",
                change_password: "Change password",
                new_password: "New password",
                repeat_password: "Repeat password",
                passwords_not_match: "Passwords do not match",
                delete_account: "Delete an account",
                about: "About",
                birthday: "Date of birth",
                receive_guests: "Receive notifications from premium guests on time.",
                receive_girls: "Receive notifications when the needed girl is online and there is important information for you.",
                premium_btn: "Get premium",
                bad_btc: "No such BTC wallet exists.",
                actions: {
                    invite: "Invite to chat",
                    start_chat: "Video Call",
                    remove_favourite: "Remove from favourites",
                    message: "Message",
                    was_invited: "Girl was invited. Wait please.",
                    cancel_notify: "Cancel Notification",
                    notify_online: "Notify when online"
                },
                premium_descr: "Become a premium user and enjoy full access to all features.",
                subtitle: {
                    foto: "Photos",
                    video: "Videos"
                },
                foto_descr: "Add photos so users can see you better",
                verify_descr: "Verify your identity so people can trust you.",
                geo_button: "My geoposition",
                geo_description: "Display my country",
                rp_btn: "I'm here",
                rules: {
                    forbidden: {
                        title: "Forbidden",
                        text_1: "Nudity and sexual behavior in public chat.",
                        text_2: "Use more than 1 account.",
                        text_3: "Upload nude photos or videos.",
                        text_4: "Use someone else's account.",
                        text_5: "Ask for money or offer other payment methods.",
                        text_6: "Share personal data (phone numbers, social networks, etc.).",
                        text_7: "Enter a video chat with someone.",
                        text_8: "Use automation (bots, video broadcast by a webcam, etc.).",
                        text_9: "Ignore the chat partner (not be in the frame, not respond to text messages, get distracted by other matters)"
                    },
                    allowed: {
                        title: "Allowed",
                        text_1: "Behave yourself freely in a private video chat, whatever feels comfortable for you and the other party.",
                        text_2: "Extend the call as long as possible.",
                        text_3: "Reply to messages and start talking. Be kind, sociable and smile.",
                        text_4: "Be in front of the camera, with good lighting. You must be clearly visible.",
                        text_5: "Only upload your own photos.",
                        text_6: "Report users when you encounter minors, harassment, or inappropriate gender.",
                        text_7: "Come online at least once a month, otherwise the balance will be reset to zero."
                    },
                    warn: "All misbehaviours and violations are monitored by moderators and bots. You may be fined or banned permanently"
                },
                queen_day: "Queen of the day",
                queen_week: "Queen of the week",
                queen_mirami: "Mirami Queen",
                blur_button: "Blur a video chat with a interlocutor",
                blur_description: "Tap on a video chat screen to remove the blur",
                not_found_title: "This user was not found",
                not_found_description: "Meet someone new right now!",
                tab_personal: "Personal details",
                tab_settings: "Settings account",
                tab_rules: "Rules",
                tg_link_1: "Our",
                tg_link_2: "official Telegram channel",
                about_girl: "About",
                bad_nickname: "Nickname must contain at least 3 symbols.",
                bad_about: "Maximum symbols is 2000.",
                personal_info: "Personal information",
                btc_wallet: "Bitcoin wallet Totalcoin",
                phone: "(phone number)",
                birthday_required: "Birthday field is required.",
                birthday_invalid: "Birthday is invalid",
                password_success: "Password change has been successful.",
                my_settings: "My settings",
                avatar_only_image: "You can upload only jpg, png.",
                avatar_file_size: "Max size of file is 2MB.",
                undefined_avatar_problems: "Undefined problems occurred while saving file.",
                last_visit_girl: "Was online",
                video_descr: "Add your own funny video to boost your popularity.",
                gallery_rp: "More of my content here"
            },
            main: {
                history_chat_title: "Chat history",
                chat_men: "Start videochat",
                h1: "MiraMi — the live videochat with girls",
                h1_girl: "MiraMi — the live video chat with guys",
                sign_1: "Beautiful strangers are waiting for you online!",
                sign_2: "Want to find a girl to chat to?",
                sign_2_girl: "Want to find a guys to chat to?",
                camera_need: "Activate your camera to start searching for a stranger.",
                camera_need_girl: "Activate your camera to start searching."
            },
            sections: {
                affiliate: "Referral program",
                top: "TOP Mirami",
                logout: "Log out",
                billing: "Buy minutes",
                billing_messages: "Buy messages",
                main: "VideoChat",
                girls: "Girls",
                favourites: "Favourites",
                auto_translate: "Auto translate",
                gifts: "Gifts"
            },
            virtual_date: {
                earn_more_money_guys: "Earn more money by dating at MiraMi!",
                invited: "Invited",
                reward: "Reward",
                invite_guys: "Invite guys",
                invite_girls: "Invite girls",
                how_work: {
                    title: "How does it work",
                    item_1: "Meet guys on any dating sites, social networks, etc. Warm their interest by flirting and showing your photos.",
                    item_2: "When the guy is already passionate about you, offer him to show yourself and chat using video chat MiraMi, sending him a link to your room.",
                    item_3: "If he really likes you, he will easily buy premium access to spend time only with you.",
                    item_4: "{bonus} to your earnings is fact that this guest becomes your referral forever and for each of his purchases you will receive a {reward}.",
                    item_4_bonus: "An additional bonus.",
                    item_4_reward: "15% reward"
                },
                link_guys: "Your personal link for invitations guys",
                earn_more_money_girls: "Earn more money by inviting girls to MiraMi!",
                invite_models: "Invite models and earn 10% of her premium earnings.",
                link_girls: "Your personal link for invitations girls"
            },
            gifts: {
                title: "My gifts",
                empty: "You currently have no gifts",
                from: "by {giver_nick}",
                block: "You cannot accept gifts."
            },
            withdraw: {
                go: "Withdrawal",
                balance: {
                    title: "Balance",
                    info: "Information",
                    rating: "Rating",
                    minimal_sum: "The minimum amount of coins for exchange is {0}.",
                    any_day: "You can request the payout at any day.",
                    every_thursday: "Every Thursday at 21:00 (GMT+3) our system recalculates the coins you earned. The payment is made on Friday.",
                    requisites: "Bank details",
                    my_requisites: "My details",
                    actual_info: "All relevant information on payouts is availlable in our",
                    official_channel: "official channel in Telegram.",
                    withdraw: "Withdraw",
                    error_minimal_sum: "The minimum withdrawal amount is {0} coins",
                    commission: "The payment system fee for each pay-out is {0}$."
                },
                history: {
                    title: "Payment history",
                    income_sum: "Total income for all time:",
                    success: "Successfull",
                    declined: "Rejected",
                    waiting: "Pending"
                },
                title: "Withdrawal",
                your_wallet: "Your bitcoin wallet Totalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "Bad connection",
                    other: "Other",
                    sex: "Sexual activities",
                    nudse: "Nudity in the frame",
                    absence: "Absence in the frame",
                    dont_attention: "No attention to the interlocutor",
                    video: "Using video materials",
                    multi_accounts: "Using multiple accounts",
                    alien_account: "Using someone else's account"
                },
                your_ban: "You are banned",
                what_reason: "Your account was blocked because of",
                unban_time: "Date of unblocking:",
                infinity: "Forever",
                never: "Never",
                comment: "Comment from admin"
            },
            messenger: {
                antispam: "The chat is anonymous, therefore it is forbidden to share any contact details and links. Further attempts will lead your account to blocking forever.",
                dialog_timer_label: "Will be gone soon",
                dialog_male_liking_label: "😍 The girl liked you!",
                dialog_female_liking_label: "💖 You've sent a like!",
                dialog_gift_offer_label: "😉 She's bored, give her a gift",
                dialog_message: "Gift",
                dialog_not_support: "Not supported",
                dialog_empty_state_female: "There's nothing here yet.\nBe the first! Leave a message!",
                dialog_empty_state_male: "Be the first! Send a message to the girl!",
                select_girl: "Choose a girl",
                modal_message_price_label: "Message cost",
                dialog_gift_offer_female_label: "😜 If you send a gift, she will see your messages first",
                dialog_gift_offer_male_label: "🤫 He's thinking of giving you a gift. Leave a message to him",
                typing: "Typing",
                dialog_liking_text: "Hi, I like you! Let's chat 🔥🔥",
                confirm_clear_history_chat: "Are you sure you want to clear the chat history?",
                confirm_delete_chat: "Are you sure you want to delete the dialog?",
                btn_clear_chat: "Clear chat history",
                delete_dialog: "Delete chat",
                timer_label: "The message will be deleted in",
                timer_descr: "This message is available only for premium users.",
                you: "you:",
                sent: "Sent",
                read: "Read",
                title: "Messenger",
                select_dialogue: "To start chatting, <br/> select a dialog.",
                start_date: "You have no messages yet. <br/> Start dating girls now!",
                fill_package: "To continue chatting, <br/> refill the message pack.",
                read_messege: "Read the message from the girl. <br/> It will be deleted in an hour.",
                start_reg: "To chat with girls <br/> you need to log in or sign up.",
                chat_with_her: "Sign up, <br/> to chat with her.",
                no_dialogue: "You have no messages yet.",
                dialog_violation_label: "Image deleted",
                dialog_violation_message: "The image was deleted because it does not comply with the application rules."
            },
            check_age: {
                main_title: "Verification",
                verify_button: "Verify"
            },
            alerts: {
                new_currency_title: "Attention",
                new_currency_first_label: "Now the currency of the application",
                new_currency_second_label: "An equal equivalent is credited to your balance.",
                limit_function2: "This function is available only to premium users.",
                have_active_chat: "You are in an active chat.",
                confirm: "Are you sure?",
                success_payment: "Payment was successful!"
            },
            verification: {
                rule_1: "Make sure the document is yours and in good condition.",
                rule_2: "Make sure you don't have any more accounts, even rejected ones.",
                rule_3: "Do not use fake or altered documents.",
                rule_4: "Only the account owner can go through the process of verification",
                info_text_1: "Our system will automatically detect a fake document or the fact that you already have an account based on your face and data.",
                info_text_2: "Do not ignore these requirements, otherwise your account will be automatically blocked.",
                info_text_3: "If your account couldn't be verified successfulle, drop us an email, we will resolve the issue and your case"
            },
            top_girls: {
                one_day: "Top of the day",
                one_week: "Top of the week",
                all_time: "All time",
                your_rating: "Your rating",
                your_place: "You are {0} in line",
                yesterday_winners: "Yesterday's winners",
                prev_week_winners: "Last week's winners",
                rules_button: "How is the rating created?",
                daily_rating: "Daily rating",
                current_daily_rating: "Today's rating",
                weekly_rating: "Weekly rating",
                current_weekly_rating: "Current week's rating",
                all_time_rating: "All-time ranking",
                current_place: "Current ranking: {0} ({1})",
                yesterday_place: "Yesterday's ranking: {0} ({1})",
                previous_week_place: "Last week’s ranking: {0} ({1})",
                rules: {
                    title: "You get points for:",
                    rule_1: "video chat duration",
                    rule_3: "positive response from people you chat with",
                    rule_4: "getting added as a friend and daily activity",
                    rule_5: "You can lose points because of a negative response from someone you’ve chatted with, for being inactive for a week, and for a ban."
                }
            },
            boys: {
                title: "Mirami users"
            },
            favourites: {
                title: "Your favorites",
                add_girls: "Add the girls you like to your favorites list for quick access to them.",
                to_roulette: "Chatroulette",
                empty_title: "Favorites list is empty",
                empty_text: "Add guys to favorites to stay in touch",
                added_to_favorites: "{name} was added to {br}favorites",
                you_in_favorites: "You've been added to {br}favorites"
            },
            catalog: {
                title: "Catalog girls",
                online: "Girls online",
                offline: "Girls offline",
                only_premium: "The full catalog of our girls is available only to premium users"
            },
            history: {
                empty_title: "Your chat history is empty.",
                empty_text: "Let's fix it right now."
            }
        }
          , A = {
            sex_check: {
                title: "Welches Geschlecht hast Du?",
                sex_male: "Mann",
                sex_female: "Frau"
            },
            staff: {
                title: "Dein Guthaben",
                button: {
                    get_premium: "Premium-Nutzer werde",
                    login: "Anmelden",
                    register: "Registriere",
                    save: "Speichern",
                    send: "Senden",
                    refill_balance: "Guthaben aufladen",
                    next: "Unten",
                    upload: "Hochladen",
                    yes: "Ja",
                    begin: "Start",
                    edit: "Ändern",
                    ok: "OK",
                    confirm: "Bestätigen",
                    enter: "Enter",
                    back: "Zurück"
                },
                buy: "Kaufen",
                min: "min.",
                understand: "Es ist klar",
                error: "Fehler",
                all: "Alle",
                delete: "Entfernen",
                error_devices: {
                    already_open: "Der MiraMi Chat ist bereits geöffnet.",
                    this_tab_active: "Möchtest Du diese Registerkarte aktivieren?"
                },
                days: "Tage",
                other: "Andere",
                collapse: "Reduzieren"
            },
            search: {
                start: "Suche starten",
                note: "Bitte minimierst du den Bildschirm nicht",
                your_ready: "Bereit anzufangen?",
                process: "Suche nach einem Chat-Partner",
                awaiting: "Abwarten"
            },
            chat: {
                type_message: "Schreibe Deine Nachricht",
                to_end: "Ende",
                is_premium: "Premium Nutzer",
                add_favourite: "Zu den Favoriten hinzufügen",
                reconnection: "Wiederherstellung der Verbindung",
                connecting: "Mit Partner verbinden...",
                your_favourite: "Deine Favoriten",
                time_to_end: "Zeit, den Chat zu beenden"
            },
            modals: {
                login: {
                    create_account: "Registrieren",
                    email: "Deine E-mail",
                    password: "Dein Passwort",
                    title: "Anmelden",
                    forgot_password: "Passwort vergessen?",
                    wrong_login: "Falsches Passwort",
                    subtitle: "Chatten und genießen"
                },
                support: {
                    title: "Support",
                    have_questions: "Wenn Du Fragen oder Anregungen hast, schick uns eine E-Mail."
                },
                register: {
                    already_have_account: "Ich habe bereits ein Konto.",
                    title: "Einschränkungen entfernen,",
                    subtitle: "Registrieren!",
                    subtitle_2: "Verlänger Dein Vergnügen",
                    nickname: "Spitzname",
                    already_email: "Diese E-Mail wird bereits verwendet.",
                    password_bad: "Das Passwort muss mindestens 8 Zeichen lang sein.",
                    name_short: "Name ist zu kurz",
                    name_long: "Name ist zu lang"
                },
                present: {
                    done: "Geschenk senden",
                    cancel: "Stornieren",
                    not_enough_balance_title: "Unzureichende Bilanz",
                    title: "Geschenk senden",
                    gift_price: "Wert des Geschenks",
                    consent: "Willst Du ein Geschenk senden?",
                    cost: "Betrag",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Das Geschenk wurde erfolgreich verschickt!"
                },
                complaint: {
                    title: "Missbrauch melden",
                    complaint_1: "Kinderbeteiligung",
                    complaint_5: "Täuschung",
                    complaint_2: "Bittet um ein Geschenk",
                    more: "Bitte beschreibe den Verstoß im Detail",
                    word: "Melden",
                    nudity: "Nacktheit",
                    dont_like: "Ich mag diesen Nutzer nicht",
                    inappropriate_content: "Unangemessener Inhalt",
                    span_or_scam: "Spam oder Betrug"
                },
                success_register: {
                    title: "Erfolgreiche Registrierung",
                    keep_chat: "Chatte weiter mit den Mädchen."
                },
                present_success: {
                    title_2: "Ein Geschenk für Dich!",
                    thanks: "Danke!",
                    present_from: "Du hast ein Geschenk erhalten von {giver_nick}"
                },
                photo_view: {
                    text_1: "Jetzt nur für Premium-Nutzer verfügbar",
                    text_2: "Jetzt für alle verfügbar",
                    stub_only_premium: "Nur für Premium"
                },
                remove_favourite: {
                    text: "Möchtest Du wirklich aus den Favoriten entfernen?"
                },
                remove_gallery: {
                    title: "Entfernen",
                    text: "Möchtest Du wirklich aus den Galerie entfernen?"
                },
                chat: {
                    value_video_chat_text: "Die Kosten für die Kommunikation im Chatroulette",
                    value_direct_video_chat_text: "Kosten für einen persönlichen Anruf",
                    top_up_balance_text_web: "Füllen Sie Ihr Guthaben auf, um die Kommunikation fortzusetzen"
                },
                block_user: {
                    title: "Block",
                    confirm_text: "Möchten Sie diesen Benutzer wirklich blockieren?"
                },
                prohibition: {
                    title: "Sie sind verboten...",
                    item_1: "Demonstration der\nGeschlechtsorgane"
                },
                nudity_warning: {
                    title_1: "Zeig dich",
                    title_2: "Nur deine Fotos",
                    title_3: "Regeln des Anstands",
                    warning_1: "Wählst du die Fotos aus, auf denen du dich deutlich sehen können",
                    warning_2: "Ladst du keine Fotos anderer Personen hoch - wir werden sie löschen",
                    warning_3: "Verzichst du auf Nacktheit und obszöne Fotos"
                },
                messenger_warning_limit: {
                    text_free: "Du hast deine Tageslimit aufgebraucht. Wirdst du Premium-Nutzer",
                    text_prem: "Du hast dein Tageslimit aufgebraucht, wird jetzt jede Nachricht in Rechnung gestellt",
                    text_anonim: "Du müsst angemeldet oder registriert sein, um die Nachricht zu sehen"
                },
                liking_send: {
                    text: "Sende dem Kerl ein Mitgefühl, damit er dich kontaktieren kann"
                },
                billing: {
                    subtitle_3: "Wähle dich ein Diamantpaket",
                    subtitle_2: "Premium als Geschenk für immer",
                    messages: "Nachrichten",
                    choose_payment: "Wähle eine Zahlungsmethode",
                    agreement: "Durch diese Zahlung bestätige ich, den dieses Kaufs zuzustimmen",
                    terms_conditions: "Allgemeinen Geschäftsbedingungen"
                },
                accept_years: {
                    sub_title: "Bevor Sie teilnehmen, bestätigen Sie bitte, dass Sie über 18 Jahre alt sind und den nachstehenden Bedingungen zustimmen:",
                    rule_1: "Sie bestätigen, dass Sie volljährig sind.",
                    rule_2: "Sie garantieren, dass Sie Minderjährigen die Nutzung von Mirami.chat nicht erlauben.",
                    rule_3: "Sie garantieren, dass Sie uns unverzüglich über alle Nutzer informieren, von denen Sie glauben, dass sie minderjährig sind.",
                    welcome: "Willkommen"
                },
                rules: {
                    title: "Erinnerung",
                    text_public_chats: "Öffentliche Chats",
                    text_nudity: "Nacktheit ist verboten!",
                    text_sexual_context: "Sexuelles Verhalten ist verboten!",
                    text_private_chats: "Private Chats",
                    text_free: "Es steht Ihnen frei, sich zu benehmen.",
                    text_moderation: "Sowohl öffentliche und private Gespräche werden moderiert.",
                    text_chat_indicator: "Behalten Sie den Chat im Auge, er kann sich immer ändern.",
                    text_rules: "Regeln des Videochats",
                    memo: "Hinweis",
                    update_date: "Aktualisiert am: {0}",
                    list_text_1: "Verhalte dich wie eine normale Single-Frau, die auf der Suche nach neuen Männern für einen Video-Chat ist.",
                    list_text_2: "Achte darauf, dass dein Gesicht für deinen Gesprächspartner gut sichtbar ist.",
                    list_text_3: "Schenke deinem Gesprächspartner volle Aufmerksamkeit, schreibe immer zuerst und antworte dem Mann.",
                    list_text_4: "Führe kein Multistreaming in anderen Videochats durch.",
                    list_text_5: "Befolge die Verhaltensregeln in den verschiedenen Chat-Typen (der Video-Chat-Status ist mit einem entsprechenden Symbol neben dem Avatar des Gesprächspartners gekennzeichnet):",
                    text_public_chat: "Öffentlicher Chat",
                    text_private_chat: "Privater Chat",
                    text_nudity_context: "Nacktheit und sexuelles Verhalten* sind verboten.",
                    text_nudity_context_allowed: "Nacktheit und sexuelles Verhalten* sind erlaubt, wenn der Gesprächspartner volljährig ist und seine Zustimmung gegeben hat.",
                    text_nudity_additional: "*Sexuelles Verhalten umfasst die Zurschaustellung der Genitalien, Oben-ohne, Unterwäsche oder allzu freizügige Kleidung, sexuell eindeutige Posen, Körperstreicheln, Mund- oder Zungenbewegungen.",
                    text_salary: "Sag niemandem, dass du hier Geld verdienst!",
                    full_rules: "Die vollständige Liste der Regeln findest du {here}",
                    here: "hier",
                    text_ban: "Wenn du gegen die Regeln der Plattform verstößt, wird dein Konto dauerhaft gesperrt und du verlierst das gesamte Geld, das du verdient hast!"
                },
                requisites: {
                    text_first: "Ihr Gewinn wird von Ihrer Krypto-Wallet abgebucht. Um die Auszahlung zu erhalten, müssen Sie über eine USDT (TRC-20) Krypto-Wallet auf einer beliebigen Plattform verfügen.",
                    text_second: "Wenn Sie keine haben, erstellen Sie bitte eine, indem Sie sich bei Binance oder anderen Kryptobörsen registrieren - es ist kostenlos",
                    text_third: "Bitte verwenden Sie hier nur die USDT (TRC-20)-Adresse. Wenn Sie eine falsche Adresse angeben, liegt die Verantwortung bei Ihnen.",
                    address_usdt: "USDT-Adresse (TRC-20)",
                    address_usdt_error: "Diese Adresse gehört nicht zu USDT (TRC-20)"
                },
                nudity_error: {
                    text: "Das Foto enthält Nacktheit und kann daher nicht hochgeladen werden"
                },
                denied_camera: {
                    title_3: "Ihre Kamera oder Ihr Mikrofon ist nicht angeschlossen",
                    title_2: "Hast Du es Dir anders überlegt?",
                    message: "Du hast den Kamera-Zugriff nicht freigegeben. Die Mädchen können Dich nicht sehen.",
                    message_girl: "Du hast den Kamera-Zugriff nicht freigegeben. Die Partner können Dich nicht sehen.",
                    restart_page: "Starte die Seite neu und erlaube die Verwendung der Kamera."
                },
                accept_camera: {
                    subtitle_2: "Erlauben Sie den Zugriff auf die Kamera und das Mikrofon",
                    title: "Das Mädchen will Dich sehen",
                    allow_camera_first: "Die App benötigt Zugriff auf Kamera und Mikrofon, damit die Mädchen Dich sehen können",
                    allow_camera_second: "Ermögliche Zugriff auf Kamera und Mikrofon und starte einen spannenden Chat.",
                    allow_camera_girl_bold: "Du kannst den Chat nicht ohne Kamera starten."
                },
                girloffline: {
                    text_3: "Das Mädchen ist",
                    text_4: "Verwende eine fetzige Funktion 😎"
                },
                choose_file: {
                    title: "Wähle Datei",
                    text: "Nacktaufnahmen verboten. Verwende nur Deine eigenen Inhalte, die Du auch auf Instagram oder TikTok hochladen könntest.",
                    only_premium: "Nur für Premium-Nutzer"
                },
                recovery: {
                    title: "Zugriffswiederherstellung",
                    enter_new_password: "Wiederherstellen des Zugriffs auf den Mirami-Chat",
                    invalid_recovery_key: "Der Link zum Wiederherstellen des Zugriffs ist ungültig.",
                    success: "Das neue Passwort wurde erfolgreich angelegt. Jetzt kannst Du Dich anmelden.",
                    sent_link: "Ein Link zum Zurücksetzen Deines Passworts wurde an Deine E-Mail-Adresse {email} gesendet. Wenn Du keine E-Mail erhalten hast, überprüfe bitte die Richtigkeit Deiner E-Mail-Adresse oder Deinen Spam Ordner.",
                    reset_password: "Passwort zurücksetzen",
                    info_text: "Gebe die E-Mail-Adresse ein, die Du bei der Registrierung verwendet hast.<br/>Wir senden Dir eine E-Mail mit einem Link, damit Du Dein Passwort zurücksetzen kannst."
                },
                model_status: {
                    title: "Status",
                    subtitle: "Verdiene mehr",
                    free_user: "Mit kostenlosem Nutzer",
                    prem_user: "Mit Premium Nutzer",
                    pay_start: "Die Bezahlung für die Kommunikation beginnt {after}.",
                    pay_start_after: "nach 10 Sekunden",
                    descr_top: "Ermöglichte dem Modell, die maximale Rate und Priorität beim Roulette zu erreichen. Es wird automatisch {auto} ab dem Moment, an dem eine der Bedingungen erfüllt ist:",
                    descr_top_auto: "für 10 Tage aktiviert",
                    if_1: "Empfehlung-Nutzer gekauft",
                    if_2: "Der Nutzer hat gekauft, nachdem er mit dir gechattet hat",
                    if_3: "Kontinuierlicher Chat mit Premium-Nutzern {min}",
                    if_3_min: "3 Minuten",
                    status_reload: "Der Status {auto} wenn eine der folgenden Bedingungen erfüllt ist:",
                    status_reload_auto: "wird automatisch für 10 Tage verlängert"
                },
                profile: {
                    title: "Profil",
                    affiliate: "Affilate Programm",
                    link: "Link",
                    count: "Anzahl",
                    profit: "Gewinn"
                },
                warning_activity: {
                    title: "Warnung! Deine Abwesenheit beim Chat wurde bemerkt.",
                    message: "Ignoriere die Gesprächspartner nicht, da Du sonst von der Suche ausgeschlossen und seltener angezeigt wirst."
                },
                ad: {
                    try: "Jetzt probieren"
                },
                add_avatar: {
                    title: "Avatar hinzufügen 🫢",
                    text: "Lade deinen Avatar hoch, bevor du mit der Suche nach Partnern beginnst."
                },
                penalty_received: {
                    title: "Strafe",
                    total_penalties: "Strafen insgesamt:",
                    first_penalty: "Dies ist dein erster Verstoß, also geben wir dir eine Chance, es richtig zu machen. Wir geben dir deine Münzen zurück, wenn du innerhalb von 7 Tagen mehr als 20.000 Münzen verdienst und nicht gegen die Regeln verstößt.",
                    reason: "Reason",
                    place: "Ort",
                    comment: "Stellungnahme:",
                    screenshot: "Screenshot des Verstoßes",
                    sexual_behavior: "Sexuell eindeutiges Verhalten"
                },
                image_upload_error: {
                    text: "Gib keine persönlichen Daten oder Screenshots weiter. Sei vorsichtig und kommuniziere direkt auf Mirami.chat."
                },
                camscore: {
                    title: "Dein Camscore",
                    description: "Wenn dein Camscore „Gut“ oder „Ausgezeichnet“ ist, erhältst du den Status TOP und Priorität in der Warteschlange.",
                    description_undefined: "Du hast weniger als 500 Videochats gemacht, deshalb können wir deinen Camscore nicht berechnen. <br/>Bitte verbringe mehr Zeit in Videochats.",
                    what_is: "Was ist Camscore?",
                    status: {
                        none: "Nicht definiert",
                        terrible: "Schrecklich",
                        bad: "Schlecht",
                        good: "Gut",
                        excellent: "Ausgezeichnet"
                    },
                    text: {
                        line_1: "Camscore ist ein Ranking, das die allgemeine Produktivität und Rentabilität des Models auf der Plattform widerspiegelt.",
                        line_2: "Camscore wird auf der Grundlage des Einkommens des Models in den letzten 7 Tagen und von Chats, die länger als 5 Sekunden dauern, berechnet. Je mehr ein Model in privaten Chats und durch Geschenke verdient, desto höher ist ihr Camscore. Einmal täglich wird der Camscore des Models unter Berücksichtigung der letzten sieben Tage neu berechnet. So beeinflusst die Aktivität des Models direkt das Wachstum oder den Rückgang ihres Rankings.",
                        line_3: "Es ist wichtig zu verstehen, dass dieser Wert von mehreren Faktoren abhängt, die direkt die Rentabilität des Models beeinflussen:",
                        line_4: "Menge an Zeit online – Je mehr Zeit das Model online ist und aktiv mit den Nutzern interagiert, desto mehr Möglichkeiten hat es, Geld zu verdienen.",
                        line_5: "Kaufhäufigkeit von Gesprächspartnern – Je mehr die Nutzer für private Chats bezahlen und Geschenke senden, desto höher ist der Camscore des Models.",
                        line_6: "Verlängerung von Videochats – Je häufiger Gesprächspartner Videoanrufe mit dem Model verlängern, desto höher ist ihr Ranking. Es wird empfohlen, regelmäßige Anrufe zu fördern – z.B. durch einzigartige Shows oder freundliche Gespräche, die die Nutzer zu privaten Anrufen motivieren können.",
                        line_7: "Initiative zeigen – Models sollten nicht warten, bis die Nutzer den ersten Schritt machen. Sie sollten aktiv schreiben und anrufen. Das zeigt Aufmerksamkeit und Interesse, was die Nutzer dazu motiviert, mehr mit dem Model zu interagieren.",
                        line_8: "Aktivität und Kreativität – Nutzer schätzen eine gute Bildqualität, gutes Licht und aktive Kommunikation, was sie dazu anregen kann, mehr Geld auszugeben.",
                        line_9: "Daher gilt: Je mehr das Model verdient, desto besser ist ihr Camscore, was ihr hilft, einen Platz in den Top-Rankings der Plattform zu bekommen und noch mehr Nutzer anzuziehen."
                    }
                },
                santa_top: {
                    title: "Santas Top-Auswahl 🎄",
                    text1: "Mach mit bei unserem Weihnachtswettbewerb und verdiene zusätzliche Boni! 🎁 An einem Tag: Verdiene $20 und erhalte $5, sammle $45 und bekomme $15, und bei $100 erhältst du ganze $35!",
                    text2: "Verwandle deine Mühe in großzügige Geschenke ❤️",
                    every_day: "✨ Täglich bis zum 31. Dezember",
                    launch_auto: "Startet automatisch jeden Tag zu deiner Ortszeit.",
                    stats_update: "⏰ Die Statistiken werden alle ~5 Minuten aktualisiert."
                }
            },
            profile: {
                email_notifications: "E-Mail Nachrichten",
                change_password: "Passwort ändern",
                new_password: "Neues Passwort",
                repeat_password: "Passwort wiederholen",
                passwords_not_match: "Passwörter stimmen nicht überein",
                delete_account: "Konto löschen",
                about: "Über",
                birthday: "Geburtstag",
                receive_guests: "Erhalte rechtzeitig Benachrichtigungen von Premium-Gästen.",
                receive_girls: "Erhalte Benachrichtigungen, wenn das gesuchte Mädchen online ist und es wichtige Informationen für Dich gibt.",
                premium_btn: "Besorge Dir Premium",
                bad_btc: "Ein solchen BTC-Wallet gibt es nicht.",
                actions: {
                    invite: "Zum Chat einladen",
                    start_chat: "Video-Call",
                    remove_favourite: "Aus Favoriten entfernen",
                    message: "Schreiben",
                    was_invited: "Mädchen wurde eingeladen. Warte bitte.",
                    cancel_notify: "Benachrichtigung abbstellen",
                    notify_online: "Benachrichtigen, wenn online"
                },
                premium_descr: "Werde Premium-Nutzer und genieße vollen Zugriff auf alle Funktionen.",
                subtitle: {
                    foto: "Fotos",
                    video: "Videos"
                },
                foto_descr: "Lade Bilder von Dir hoch, damit andere Nutzern einen optischen Eindruck bekommen.",
                verify_descr: "Bestätigen Sie Ihre Identität, damit die Leute Ihnen vertrauen können.",
                geo_button: "Mein Standort",
                geo_description: "Mein Land anzeigen",
                rp_btn: "Ich bin hier",
                rules: {
                    forbidden: {
                        title: "Verboten",
                        text_1: "Nacktheit und sexuelles Verhalten in öffentlichen Chats.",
                        text_2: "Mehr als 1 Konto verwenden.",
                        text_3: "Fotos oder Videos mit Nacktaufnahmen hochladen.",
                        text_4: "Verwendung des Kontos einer anderen Person.",
                        text_5: "Um Geld oder andere Zahlungsmittel bieten.",
                        text_6: "Weitergabe persönlicher Daten (Telefonnummern, soziale Netzwerke usw.).",
                        text_7: "Mit jemandem in einem Videochat sein.",
                        text_8: "Einsatz von Automatisierung (Bots, Videoübertragung per Webcam usw.).",
                        text_9: "Den Chatpartner ignorieren (nicht im Bild sein, nicht auf Textnachrichten antworten, sich von anderen Dingen ablenken lassen)"
                    },
                    allowed: {
                        title: "Erlaubt",
                        text_1: "Sich frei in einem privaten Video-Chat verhalten, wie Sie und Ihr Chat-Partner es für richtig halten.",
                        text_2: "Das Gespräch so lange führen, wie Sie möchten.",
                        text_3: "Auf Mitteilungen antworten und ins Gespräch kommen. Freundlich und kontaktfreudig sein.",
                        text_4: "Sich bei guter Beleuchtung vor der Kamera befinden. Sie sollten gut sichtbar sein.",
                        text_5: "Nur eigene Fotos hochladen.",
                        text_6: "Nutzer melden, wenn Sie auf Minderjährige, Belästigung oder unangemessenes Geschlecht stoßen.",
                        text_7: "Mindestens einmal im Monat online sein, sonst wird das Guthaben auf Null zurückgesetzt."
                    },
                    warn: "All misbehaviours and violations are monitored by moderators and bots. You may be fined or banned permanently"
                },
                queen_day: "Königin des Tages",
                queen_week: "Königin der Woche",
                queen_mirami: "Mirami Königin",
                blur_button: "Ein Video-Chat mit einem Gesprächspartner verwischen",
                blur_description: "Tippen Sie auf den Bildschirm des Video-Chats, um die Unschärfe zu entfernen",
                not_found_title: "Dieser Nutzer wurde nicht gefunden",
                not_found_description: "Schließen Sie gleich jetzt neue Bekanntschaften!",
                tab_personal: "Persönliche Daten",
                tab_settings: "Konto Einstellungen",
                tab_rules: "Regeln",
                tg_link_1: "Unser",
                tg_link_2: "offizieller Telegram Kanal",
                about_girl: "Über",
                bad_nickname: "Der Spitzname muss mindestens 3 Zeichen enthalten.",
                bad_about: "Maximal 2000 Zeichen",
                personal_info: "Persönliche Angaben",
                btc_wallet: "Bitcoin wallet Totalcoin",
                phone: "(Telefonnummer)",
                birthday_required: "Das Geburtstagdatum ist Muss-Feld.",
                password_success: "Das Passwort wurde erfolgreich geändert.",
                my_settings: "Meine Einstellungen",
                avatar_only_image: "Du kannst nur JPG- und PNG-Dateien hochladen.",
                avatar_file_size: "Maximale Dateigröße 2 MB.",
                undefined_avatar_problems: "Beim Speichern der Datei sind Probleme aufgetreten.",
                last_visit_girl: "War online",
                video_descr: "Lade ein eigenes lustiges Video hoch, um Deine Popularität zu steigern."
            },
            main: {
                history_chat_title: "Chatverlauf",
                chat_men: "Starte Video-Chat",
                h1: "MiraMi - der Live-Video-Chat mit Mädchen",
                h1_girl: "MiraMi - der Live-Video-Chat mit Partnern",
                sign_1: "Wildfremde Schönheiten warten Online auf Dich!",
                sign_2: "Möchtest Du Mädchen für einen Chat finden?",
                sign_2_girl: "Möchtest Du Partner für einen Chat finden?",
                camera_need: "Aktiviere Deine Kamera, um nach unbekannten Kontakten zu suchen.",
                camera_need_girl: "Aktiviere Deine Kamera, um die Suche zu starten."
            },
            sections: {
                affiliate: "Empfehlungsprogramm",
                top: "TOP Mirami",
                logout: "Abmelden",
                billing: "Minuten kaufen",
                billing_messages: "Nachrichtenguthaben kaufen",
                main: "Video chat",
                girls: "Mädchen",
                favourites: "Favoriten",
                auto_translate: "Automatische Übersetzung",
                gifts: "Gifts"
            },
            virtual_date: {
                earn_more_money_guys: "Verdiene mehr Geld, mit Dating bei MiraMi!",
                invited: "Eingeladen",
                reward: "Prämie",
                invite_guys: "Partner einladen",
                invite_girls: "Mädchen einladen",
                how_work: {
                    title: "Wie funktioniert es",
                    item_1: "Treffe Partner auf Dating-Sites, in sozialen Netzwerken usw. erwärme ihr Interesse, indem Du flirtest und tolle Bilder von Dir zeigst.",
                    item_2: "Wenn Dein Gegenüber bereits eine Leidenschaft für Dich entwicklet hat, biete ihm an, mehr von Dir im MiraMi Video-Chat zu zeigen. Sende ihm einen Link zu Deinem Chatraum.",
                    item_3: "Wenn er dich wirklich mag, wird er ungezwungen einen Premium-Zugang kaufen, um mehr Zeit nur mit Dir zu verbringen.",
                    item_4: "{bonus} wird der von Dir eingeladene Partner dauerhaft Deine Empfehlung und Du erhältst für jeden seiner zukünftigen Einkäufe eine {reward}.",
                    item_4_bonus: "Als zusätzlicher Bonus",
                    item_4_reward: "Prämie von 15%"
                },
                link_guys: "Dein persönlicher Link für Partner-Einladungen",
                earn_more_money_girls: "Verdiene mehr Geld, indem du Mädchen zu MiraMi einlädst!",
                invite_models: "Lade Models ein und verdiene eine 10% Prämie von ihren Einnahmen.",
                link_girls: "Dein persönlicher Model-Einladungs-Link"
            },
            gifts: {
                title: "Meine Geschenke",
                empty: "Du hast derzeit keine Geschenke",
                from: "von {giver_nick}",
                block: "Du kannst keine Geschenke annehmen."
            },
            withdraw: {
                go: "Auszahlen",
                balance: {
                    title: "Guthaben",
                    info: "Informationen",
                    rating: "Rating",
                    minimal_sum: "Der Mindestbetrag der umzutauschenden Münzen beträgt {0}.",
                    any_day: "Sie können die Auszahlung zu jedem beliebigen Zeitpunkt beantragen.",
                    every_thursday: "Jeden Donnerstag um 21:00 (GMT+3) berechnet unser System die von Ihnen verdienten Münzen neu. Die Auszahlung erfolgt am Freitag.",
                    requisites: "Bankdaten",
                    my_requisites: "Meine Bankdaten",
                    actual_info: "Alle aktuellen Auszahlungsinformationen finden Sie",
                    official_channel: "in unserem offiziellen Telegram-Kanal.",
                    withdraw: "Auszahlen",
                    error_minimal_sum: "Der Mindestauszahlungsbetrag beträgt {0} Münzen",
                    commission: "Die Gebühr des Zahlungssystems für jede Auszahlung beträgt {0}$."
                },
                history: {
                    title: "Zahlungsverlauf",
                    income_sum: "Gesamteinkommen für die gesamte Zeit:",
                    success: "Erfolgreich",
                    declined: "Abgelehnt",
                    waiting: "Ausstehend"
                },
                title: "Auszahlung",
                your_wallet: "Dein Totalcoin Bitcoin Wallet"
            },
            ban: {
                reason: {
                    bad_connection: "Schlechte Verbindung",
                    other: "Andere",
                    sex: "Sexuelle Handlung",
                    nudse: "Nacktheit im Rahmen",
                    absence: "Abwesenheit im Rahmen",
                    dont_attention: "Keine Aufmerksamkeit für den Gesprächspartner",
                    video: "Videomaterial verwenden",
                    multi_accounts: "Mehrere Konten verwenden",
                    alien_account: "Verwendung eines anderen Kontos"
                },
                your_ban: "Du bist gesperrt",
                what_reason: "Dein Konto wurde aus folgenden Grund gesperrt",
                unban_time: "Aufhebung der Sperre:",
                infinity: "Dauerhaft",
                comment: "Kommentar von Administrator"
            },
            messenger: {
                antispam: "Der Chat ist anonym! Es ist untersagt Kontaktdaten und Links zu teilen. Bei weiteren Verstößen wird Dein Konto dauerhaft gesperrt.",
                dialog_timer_label: "Es wird bald verschwinden",
                dialog_male_liking_label: "😍 Das Mädchen mochte dich!",
                dialog_female_liking_label: "💖 Du hast Sympathie gesendet!",
                dialog_gift_offer_label: "😉 Sie langweilt sich, mach ihr ein Geschenk",
                dialog_message: "Geschenk",
                dialog_not_support: "Nicht unterstützt",
                dialog_empty_state_female: "Hier ist noch nichts.\nSei der Erste! Schreibst du eine Nachricht!",
                dialog_empty_state_male: "Sei der Erste! Schreibe dem Mädchen eine Nachricht!",
                select_girl: "Ein Mädchen wählen",
                modal_message_price_label: "Wert der Nachricht",
                dialog_gift_offer_female_label: "😜 Wenn du ein Geschenk sendst, wirst du diene Nachrichten zuerst sehen",
                dialog_gift_offer_male_label: "🤫 Er denkt daran, dir ein Geschenk zu machen. Schreib ihm",
                typing: "Schreibt",
                dialog_liking_text: "Hallo, ich mag dich! Lass uns plaudern 🔥🔥",
                confirm_clear_history_chat: "Bist du sicher, dass du deinen Chatverlauf löschen möchten?",
                confirm_delete_chat: "Bist du sicher, dass du den Dialog löschen möchten?",
                btn_clear_chat: "Chatverlauf löschen",
                delete_dialog: "Chat löschen",
                timer_label: "Die Nachricht wird über gelöscht...",
                timer_descr: "Dieser Beitrag ist nur für Premium-Benutzer verfügbar",
                you: "Du:",
                sent: "Gesendet",
                read: "Gelesen",
                title: "Messenger",
                select_dialogue: "Wähle einen Dialog aus,<br/>um ein Chat zu starten.",
                start_date: "Du hast noch keine Nachrichten.<br/>Lerne jetzt die Mädchen kennen!",
                fill_package: "Fülle Dein Nachrichtenguthaben auf,<br/>um den Chat fortzusetzen.",
                read_messege: "Lese die Nachricht des Mädchens.<br/>Sie wird in einer Stunde gelöscht.",
                start_reg: "Um mit Mädchen zu chatten, <br/> musst du dich einloggen oder registrieren.",
                chat_with_her: "Registriere Dich,<br/>um mit ihr zu chatten.",
                no_dialogue: "Du hast noch keine Nachrichten",
                dialog_violation_label: "Bild gelöscht",
                dialog_violation_message: "Das Bild wurde gelöscht, weil es nicht mit den Anwendungsregeln übereinstimmt."
            },
            check_age: {
                main_title: "Verification",
                verify_button: "Verify"
            },
            alerts: {
                new_currency_title: "Achtung",
                new_currency_first_label: "Jetzt ist die Währung der Anwendung",
                new_currency_second_label: "Der gleiche Gegenwert wird Ihnen dem Guthaben gutgeschrieben.",
                limit_function2: "Diese Funktion steht nur Premium-Nutzern zur Verfügung.",
                have_active_chat: "Du bist in einem aktiven Chat.",
                confirm: "Bist Du sicher?",
                success_payment: "Die Zahlung war erfolgreich!"
            },
            verification: {
                rule_1: "Vergewissern Sie sich, dass das Dokument Ihnen gehört und in gutem Zustand ist.",
                rule_2: "Stellen Sie sicher, dass Sie keine weiteren Konten haben, auch keine abgelehnten.",
                rule_3: "Verwenden Sie keine gefälschten oder geänderten Dokumente.",
                rule_4: "Nur der Kontoinhaber kann den Verifizierungsprozess durchlaufen",
                info_text_1: "Unser System erkennt anhand Ihres Gesichts und Ihrer Angaben automatisch ein gefälschtes Dokument oder die Tatsache, dass Sie bereits ein Konto haben.",
                info_text_2: "Ignorieren Sie nicht diese Anforderungen, sonst wird Ihr Konto automatisch gesperrt.",
                info_text_3: "Wenn Ihr Konto nicht erfolgreich verifiziert werden konnte, senden Sie uns eine E-Mail, wir werden dieses Problem lösen."
            },
            top_girls: {
                one_day: "Top des Tages",
                one_week: "Top der Woche",
                all_time: "Die ganze Zeit",
                your_rating: "Ihr Rating",
                your_place: "Sie befinden sich an {0} Stelle",
                yesterday_winners: "Die Gewinner von gestern",
                prev_week_winners: "Die Gewinner der letzten Woche",
                rules_button: "Wie entsteht die Rangliste?",
                daily_rating: "Tagesbewertung",
                current_daily_rating: "Aktuelle Tagesbewertung",
                weekly_rating: "Wöchentliche Bewertung",
                current_weekly_rating: "Aktuelle wöchentliche Bewertung",
                all_time_rating: "Allzeitbewertung",
                current_place: "Aktueller Platz: {0} ({1})",
                yesterday_place: "Platz gestern: {0} ({1})",
                previous_week_place: "Platz von letzter Woche: {0} ({1})",
                rules: {
                    title: "Punkte werden vergeben für:",
                    rule_1: "Kommunikation im Video-Chat",
                    rule_3: "Gute Reaktion der Gesprächspartner",
                    rule_4: "Hinzufügen von Freunden und tägliche Aktivitäten",
                    rule_5: "Für eine schlechte Reaktion des Gesprächspartners, für eine Woche Inaktivität und für ein Verbot können Punkte abgezogen werden."
                }
            },
            boys: {
                title: "Mirami Nutzer"
            },
            favourites: {
                title: "Deine Favoriten",
                add_girls: "Setze Mädchen für einen schnellen Zugriff auf Deine Favoritinnen-Liste,",
                to_roulette: "Chat-Roulette",
                empty_title: "Die Favoritenliste ist leer",
                empty_text: "Füge Jungs zu deinen Favoriten hinzu, um in Kontakt zu bleiben",
                added_to_favorites: "{name} wurde zu den {br}Favoriten hinzugefügt",
                you_in_favorites: "Du wurdest zu den {br}Favoriten hinzugefügt"
            },
            catalog: {
                title: "Mädchen Katalog",
                online: "Mädchen online",
                offline: "Mädchen offline",
                only_premium: "Der vollständige Mädchen Katalog steht nur Premium Nutzern zur Verfügung."
            },
            history: {
                empty_title: "Deine Chat-Historie ist leer.",
                empty_text: "Lass uns das jetzt beheben."
            }
        }
          , R = {
            staff: {
                button: {
                    ok: "نعم",
                    enter: "دخول",
                    register: "التسجيل",
                    get_premium: "اصبح مميزا",
                    login: "الدخول",
                    send: "ارسال",
                    yes: "نعم",
                    save: "حفظ",
                    back: "الى الخلف",
                    refill_balance: "Refill balance"
                },
                error_devices: {
                    already_open: "الفيديو MiraMi مفتوح في نافذة اخرى.",
                    this_tab_active: "هل تريد ان تجعل هذه البوابة نشطة?"
                },
                title: "رصيدكم:",
                min: "الدقائق",
                days: "الأيام"
            },
            sections: {
                support: "مساعدة",
                login: "الدخول",
                register: "التسجيل",
                logout: "الخروج",
                billing: "شراء دقائق",
                main: "الدردشة عبر الفيديو",
                girls: "الفتيات",
                favourites: "المفضلة",
                affiliate: "البرنامج الحالي",
                profile: "البروفايل",
                auto_translate: "المترجم الالي",
                gifts: "Gifts"
            },
            modals: {
                accept_camera: {
                    title: "فتاة تريد رؤيتك",
                    subtitle: "السماح بالوصول للكاميرة",
                    allow_camera: "<p>الموقع بحاجة للوصول الى الكاميرة و الميكريفون, لكي تستطيع الفتياة رؤيتك.</p><p>السماح بالوصول للكاميرة و الميكريفون و بدء المحادثة.</p>",
                    allow_camera_girl: "<p>السماح بالوصول الى الكاميرة و الميكريفون و بدء المحادثة.</p>",
                    allow_camera_girl_bold: "<p><b> لا يمكن بدء المحادثة دون الكاميرة </b>.</p>"
                },
                accept_years: {
                    welcome: "أهلا و سهلا",
                    rule: "موقعنا مخصص فقط للكبار. عند الضغط على «الدخول», أنت تؤكد أن, عمرك يتجازو 18 عاما. أو مغادرة الموقع."
                },
                billing: {
                    title: "شراء حزمة دقائق",
                    subtitle: "المراسلة بلا حدود",
                    subtitle_2: "احصل على التمييز بشكل دائم",
                    minute: "الدقائق",
                    text: "ادفع بأمان عبر أي حساب.",
                    choose_payment: "اختر طريقة الدفع",
                    buy_button: "شراء دقائق",
                    agreement: "Al hacer este pago confirmo que soy mayor de edad, acepto los",
                    terms_conditions: "Términos y Condiciones"
                },
                denied_camera: {
                    title_1: "ألكاميرة غير فعالة",
                    title_2: "غيرت رأيك?",
                    message: "لم تسمح بالوصول الى الكاميرة, الفتياة لا يستطعن رؤيتك, لذلك لا تستطيع بدء المحادثة.",
                    message_girl: "لم تسمحي بالوصول الى الكاميرة, الشبان لا يستطيعون رؤيتك, لذلك لا تستطيعن بدء المحادثة.",
                    restart_page: "قم باعادة تحميل الصفحة, قم بالسماح للوصول الى الكاميرة و ابدء المحادثة."
                },
                login: {
                    title: "الدخول",
                    subtitle: "راسل و تمتع",
                    email: "الايميلl",
                    password: "كلمة السر",
                    forgot_password: "نسيت كلمة السر?",
                    create_account: "التسجبل",
                    wrong_login: "كلمة السر او الايميل غير صحيح"
                },
                recovery: {
                    title: "Access recovery",
                    enter_new_password: "Access recovery to Mirami chat",
                    invalid_recovery_key: "The link to access recovery is invalid.",
                    success: "The new password was successfully set. Now you can log in. ",
                    sent_link: "A link to reset your password has been sent to your e-mail {email}. If you have not received an email, please check the correctness of your e-mail or spam.",
                    reset_password: "Reset password",
                    info_text: "Enter the email you used to register. <br/> We will send you an email with a special link to help you reset your password."
                },
                register: {
                    title: "تخلص من الحدود,",
                    subtitle: "قم بالتسجيل!",
                    subtitle_2: "تابع سرورك",
                    nickname: "اللقب",
                    already_have_account: "يوجد لدي حساب",
                    already_email: "هذا الايميل مستخدم",
                    password_bad: "كلمة السر يجب ان تحتوي أكثر من 8 اشارات."
                },
                success_register: {
                    title: "لقد سجلت بنجاح",
                    keep_chat: "تابع المراسلة مع الفتياة."
                },
                model_status: {
                    title: "حالة النشاط",
                    subtitle: "احصل اكثر",
                    free_user: "مع مستخدم مجاني",
                    prem_user: "المستخدم المميز",
                    hide_rate: "زيادة المعدل مع المستخدم المجاني",
                    interval: "من 1:00 الى 9:00 GMT +03:00",
                    pay_start: "دفع ثمن المحادثة يبدأ <b>بعد 10 ثوان</b>.",
                    descr_top: " يسمح للجميلات الحصول على معدل اقصىو امتلاك الافضلية في الروليت. بتم التفعيل <b>بشكل الي 20 يوم</b> منذ لحظة تنفيذ احد الشروط:",
                    if_1: "اشتريت الاحالة",
                    if_2: "الشاب اشتراها, بعد الحديث معك",
                    if_3: " محادثة غير منقطعة مع التمييز <b> > 3 دقائق</b>",
                    status_reload: "الحالة <b>يتم التمديد بشكل الي لمدة  10 يوم</b> اذا قمت بتحقيق احد الشروط:",
                    min: "الدقائق"
                },
                profile: {
                    title: "البروفايل",
                    affiliate: "البرنامج الاحالي",
                    link: "الرابط",
                    count: "الكمية",
                    profit: "الربح"
                },
                settings_chat: {
                    title: "ضبط المحادثة",
                    your_language: "لغتك"
                },
                support: {
                    title: "مساعدة",
                    have_questions: "اذا لديك اسئلة او طروحات اكتبها لنا "
                },
                warning_activity: {
                    title: "انتبه! كان هناك غياب في المحادثة .",
                    message: "لا تتجاهل المتحدثين الاخرين, و الا سيقوم البرنامج بازالتك من القائمة."
                },
                present: {
                    title: "Send a gift",
                    consent: "Are you ready to send a gift",
                    cost: "worth",
                    min: "minutes",
                    warning: "Your balance will be debited",
                    done: "send a gift",
                    cancel: "Cancel",
                    success_send: "Gift successfully sent!",
                    insufficient_funds: 'You don’t have enough minutes on your balance to buy as a gift "{gift}"'
                },
                present_success: {
                    title: "Gift",
                    present_from: "You received a gift from",
                    thanks: "Thank you"
                },
                complaint: {
                    title: "Report Abuse",
                    complaint_1: "Child involvement",
                    complaint_2: "Asks for a gift",
                    complaint_4: "There is no girl on the spot",
                    complaint_5: "Deception",
                    send: "Send",
                    cancel: "Cancel",
                    more: "Please describe the violation in detail"
                }
            },
            alerts: {
                limit_function: "الوصول محدود فقط للمستخدمين المسجلين.",
                limit_function2: "الوصول فقط للمستخدمين المميزين.",
                have_active_chat: "انت في محادثة نشطة.",
                confirm: "هل انت واثق?",
                success_payment: "تم تعبئة رصيدك بنجاح!"
            },
            chat: {
                connecting: "الاتصال مع الطرف الاخر...",
                to_end: "انهاء",
                next: "التالي",
                add_favourite: "اضافة في المفضلة",
                your_favourite: "تمت الاضافة في المفضلة",
                is_premium: "مميز",
                time_to_end: "الوقت حتى النهاية:",
                type_message: "رسائلكم",
                auto_translate: "المترجم الالي"
            },
            main: {
                h1: "MiraMi — الدردشة عبر الفيديو مع الفتيات",
                h1_girl: "MiraMi — الدردشة عبر الفيديو مع الشبان",
                sign_1: "فتيات وحيدات ينتظرنك اونلاين!",
                sign_2: "تود العثور على فتاة للمحادثة?",
                sign_2_girl: "تريدين العثور على شاب للمحادثة?",
                free: "حاول مجانا. <span>بدون تسجيل</span>.",
                chat_men: "بدء الدردشة عبر الفيديو",
                chat_girl: "بدء الدردشة عبر الفيديو",
                camera_need: "شغل الكاميرة, من أجل بدء التعارف.",
                camera_need_girl: "شغل الكاميرة, من اجل بدء البحث.",
                history_chat_title: "Chat history"
            },
            search: {
                your_ready: "جاهز للبدء?",
                start: "بدء البحث",
                process: "البحث عن شريك عبر المحادثة",
                awaiting: "انتظار",
                exit: "الخروج من البحث",
                back: "للخلف"
            },
            favourites: {
                title: "المفضلة",
                add_girls: "قم باضافة الفتيات اللواتي يعجبنكفي المفضلة من اجل العثور السريع عليهن",
                to_roulette: "محادثة الروليت",
                only_premium: "هذه الخدمة موفرة فقط للمستخدمين المميزين."
            },
            catalog: {
                title: "فهرس الفتياة",
                online: "الفتيات اونلاين",
                offline: "الفتيات اوفلاين",
                only_premium: "الفهرس الكامل للفتيات متوفر فقط للمستخدمين المميزين."
            },
            profile: {
                tab_personal: "المعلومات الخاصة",
                tab_settings: "ضبط الحساب",
                tab_rules: "القوانين",
                status_standard: "اساسي",
                status_top: "اعلى مركز",
                nickname: "اللقب",
                about: "عنك",
                tg_link_1: "لنا ",
                tg_link_2: "قناة التيلغرام الرسمية",
                about_girl: "عن الفتاة",
                bad_nickname: "اللقب يجب ان يحتوي ليس على اقل من 3 اشارات.",
                bad_about: "الحد الأقصى لكمية الاشارات لا أكثر من - 2000.",
                personal_info: "المعلومات الشخصية",
                birthday: "تاريخ الميلاد",
                btc_wallet: "Bitcoin محفظة Totalcoin",
                bad_btc: "هذا النوع من BTC wallet غير موجود.",
                phone: "(رقم الهاتف)",
                birthday_required: "من الضروري تعبئة تاريخ الميلاد.",
                change_password: "تغيير كلمة السر",
                new_password: "كلمة السر الجديدة",
                repeat_password: "أعد كتابة كلمة السر",
                password_bad: "كلمة السر يجب ان تحتوي ليس على اقل من 8 اشارات.",
                passwords_not_match: "كلمة السر غير صحيحة.",
                password_success: "تم تغير كلمة السر بنجاح.",
                my_settings: "الضبط",
                email_notifications: "Email الاشعارات",
                receive_guests: "الحصول على اشعارات من الضيوف المميزين.",
                receive_girls: "الحصول على اشعار, في حال وجود فتاة اونلاين  مهمة بالنسبة لك .",
                delete_account: "حذف الحساب",
                avatar_only_image: "تستطيع تحميل فقط jpg, png.",
                avatar_file_size: "الحجم الاقصى للملف 2MB.",
                undefined_avatar_problems: "عند حفظ الملف حدثت مشاكل مجهولة.",
                last_visit_girl: "كان متصلاً",
                actions: {
                    invite: "الدعوة للمحادثة",
                    was_invited: "تم ارسال الدعوة",
                    start_chat: "بدء المحادثة",
                    notify_online: "الحصول على اشعار في حالة اونلاين",
                    cancel_notify: "الغاء الاشعارات",
                    add_favourites: "الاضافة في المفضلة",
                    remove_favourite: "حذف من المفضلة"
                }
            },
            virtual_date: {
                invite_guys: "ادعي الشبان",
                invite_girls: "ادعي الفتياة",
                earn_more_money_guys: "احصل على المزيد من المال, عبر MiraMi!",
                how_work: {
                    title: "كيف يعمل هذا",
                    item_1: "تعرفي على الشبان على جميع المواقع في التواصل الاجتماعيو حققوا امالهم,عبر صورك ",
                    item_2: "عندما يتعلق بك الشاب, اريه نفسك و دردشي معه عبر MiraMi, بارسالك له رابطك الخاص.",
                    item_3: "اذا كنت تعجبيه حقا, سيقوم بشراء التمييز, لاجل المحادثة معك.",
                    item_4: '<b>رصيد اضافي</b> لعملكم ! هذا الضيف سيصبح حالتك, و في كل مرة يشتري فيها ستحصل على  <b class="rose">15% مكفأة</b>.'
                },
                link_guys: "رابطكم لدعوة الشبان",
                invited: "تمت الدعوة",
                reward: "مكفأة",
                earn_more_money_girls: "احصل على المزيد, عبر دعوة الفتيات الى MiraMi!",
                invite_models: "ادعو الفتيات الجميلات و احصلو على 10% من عملها.",
                link_girls: "رابطكم لدعوة الفتياة"
            },
            withdraw: {
                title: "اخراج المال",
                your_wallet: " Bitcoinمحفظتكم  Totalcoin",
                go: "اخراج",
                profile_settings: "الضبط",
                min_withdraw: "الحد الادنى للاخراج"
            },
            sex_check: {
                title: "من أنت؟",
                sex_male: "رجل",
                sex_female: "أنثى"
            },
            gifts: {
                title: "My gifts",
                from: "by",
                empty: "You currently have no gifts.",
                block: "You cannot accept gifts."
            }
        }
          , M = {
            sex_check: {
                title: "Vous êtes qui?",
                sex_male: "Gars",
                sex_female: "Fille"
            },
            staff: {
                title: "Votre bilan",
                button: {
                    get_premium: "Recevoir Premium",
                    login: "Identifiez-vous",
                    register: "Enregistremet",
                    save: "Sauvegarder",
                    send: "Envoyer",
                    refill_balance: "Approvisionner le compte",
                    next: "Ensuite",
                    upload: "Télécharger",
                    yes: "Oui",
                    begin: "Commencer",
                    edit: "Modifier",
                    ok: "ОK",
                    confirm: "Confirmer",
                    enter: "Connexion",
                    back: "Retour"
                },
                buy: "Acheter",
                min: "min.",
                understand: "Compris",
                error: "Erreur",
                all: "Tous",
                delete: "Supprimer",
                error_devices: {
                    already_open: "Le chat vidéo MiraMi a déjà été ouvert dans un autre onglet.",
                    this_tab_active: "Vous voulez rendre cet onglet actif?"
                },
                days: "jours",
                other: "Autre",
                collapse: "Réduire"
            },
            search: {
                start: "Pour lancer la recherche",
                note: "Veuillez ne pas fermer l'onglet",
                your_ready: "Êtes-vous prêt(e) à commencer?",
                process: "Trouver un partenaire de chat",
                awaiting: "Merci de patienter"
            },
            chat: {
                type_message: "Votre message",
                to_end: "Terminer",
                is_premium: "Premium",
                add_favourite: "Ajouter aux Favoris",
                reconnection: "Reconnexion",
                connecting: "Connexion avec l'interlocuteur ...",
                your_favourite: "Ajouté aux Favoris",
                time_to_end: "Durée jusqu'à la fin:"
            },
            modals: {
                login: {
                    create_account: "Enregistrez-vous",
                    email: "Votre email",
                    password: "Votre mot de passe",
                    title: "Autorisation",
                    forgot_password: "Mot de passe oublié?",
                    wrong_login: "Identifiant ou mot de passe incorrect",
                    subtitle: "Parlez et profitez"
                },
                support: {
                    title: "Support",
                    have_questions: "Vous pouvez poser une question et nos spécialistes essaieront de vous donner une réponse détaillée le plus vote possible."
                },
                register: {
                    already_have_account: "J'ai déjà un compte.",
                    title: "Débloquez,",
                    subtitle: "S'enregistrer!",
                    subtitle_2: "Prolongez votre plaisir",
                    nickname: "Pseudo",
                    already_email: "Cet e-mail est déjà utilisé",
                    password_bad: "Votre mot-de-passe doit contenir au moins 8 caractères.",
                    name_short: "Prénom est trop court",
                    name_long: "Prénom est trop long"
                },
                present: {
                    done: "Offrir",
                    cancel: "Annulation",
                    not_enough_balance_title: "Bilan insuffisant",
                    title: "Envoyer un cadeau",
                    gift_price: "Prix d'cadeau",
                    consent: "Vous êtes prêt à envoyer un cadeau",
                    cost: "qui coûte",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Cadeau a envoyé avec succès!"
                },
                complaint: {
                    title: "Signaler une infraction",
                    complaint_1: "Implication des enfants",
                    complaint_5: "Escroqurie",
                    complaint_2: "Demande un cadeau",
                    more: "Décrivez la violation en détail",
                    word: "Plainte",
                    nudity: "Nudité",
                    dont_like: "Je n'aime pas cet utilisateur",
                    inappropriate_content: "Contenu inapproprié",
                    span_or_scam: "Spam ou arnaque"
                },
                success_register: {
                    title: "Vous avez réussi à vous inscrir",
                    keep_chat: "Continuez à parler avec les filles."
                },
                present_success: {
                    title_2: "Un cadeau pour vous!",
                    thanks: "Merci!",
                    present_from: "Vous avez reçu un cadeau de {giver_nick}"
                },
                photo_view: {
                    text_1: "Maintenant disponible juste pour Premium",
                    text_2: "Maintenant disponible à tous",
                    stub_only_premium: "Juste Premium"
                },
                remove_favourite: {
                    text: "Voulez-vous vraiment supprimer de la favoris?"
                },
                remove_gallery: {
                    title: "Supprimer",
                    text: "Voulez-vous vraiment supprimer de la galerie?"
                },
                chat: {
                    value_video_chat_text: "Prix d'chat roulette",
                    value_direct_video_chat_text: "Prix d'appel personnel",
                    top_up_balance_text_web: "Rechargez votre bilan pour continuer votre communication"
                },
                block_user: {
                    title: "Bloquer",
                    confirm_text: "Êtes vous sûr de vouloir bloquer cet utilisateur?"
                },
                prohibition: {
                    title: "Interdit",
                    item_1: "Démonstration des organes\ngénitaux"
                },
                nudity_warning: {
                    title_1: "Montre-toi",
                    title_2: "Juste tes photos",
                    title_3: "Bonnes manières",
                    warning_1: "Choisis des photos où t'es bien visible",
                    warning_2: "Ne télécharge pas de photos d'autres personnes - on les supprimera",
                    warning_3: "Évitez la nudité et les photos obscènes"
                },
                messenger_warning_limit: {
                    text_free: "Votre limite quotidienne est épuisée. Soyez Premium.",
                    text_prem: "Votre limite quotidienne est épuisée, maintenant chaque message sera facturé",
                    text_anonim: "Pour voir le message, vous devez vous connecter ou vous inscrire"
                },
                liking_send: {
                    text: "Envoie un Like à un gars pour qu'il puisse te contacter."
                },
                billing: {
                    subtitle_3: "Choisissez un paquet de diamants",
                    subtitle_2: "Premium comme cadeau pour toujours",
                    messages: "messages",
                    choose_payment: "Choisissez votre moyen de paiement",
                    agreement: "En payant, je confirme avoir plus de 18 ans, j’accepte les",
                    terms_conditions: "Conditions générales d’utilisation"
                },
                accept_years: {
                    sub_title: "Avant de vous connecter, confirmez que vous avez plus de 18 ans et que vous acceptez les conditions générales ci-dessous :",
                    rule_1: "Vous confirmez être majeure.",
                    rule_2: "Vous garantissez que vous n'autorisez pas les mineurs à utiliser Mirami.chat.",
                    rule_3: "Vous garantissez que vous nous informerez immédiatement de tout utilisateur que vous identifiez comme étant mineur.",
                    welcome: "Bienvenue"
                },
                rules: {
                    title: "Rappel",
                    text_public_chats: "Salons publics",
                    text_nudity: "Nudité interdite !",
                    text_sexual_context: "Comportement sexuel interdit !",
                    text_private_chats: "Dialogues privés",
                    text_free: "Vous pouvez vous comporter librement.",
                    text_moderation: "Les appels publics et privés peuvent être soumis à une modération.",
                    text_chat_indicator: "Surveillez de près l'indicateur de chat, il peut changer de mode.",
                    text_rules: "Règles du tchat vidéo",
                    memo: "Rappel",
                    update_date: "Date de mise à jour : {0}",
                    list_text_1: "Agissez comme une fille célibataire normale qui cherche de nouveaux hommes avec qui discuter en vidéo.",
                    list_text_2: "Assurez-vous que votre visage est clairement visible pour votre interlocuteur.",
                    list_text_3: "Accordez toute votre attention à votre interlocuteur, écrivez toujours en premier et répondez au gars.",
                    list_text_4: "N'utilisez pas le multistreaming dans d'autres chats vidéo.",
                    list_text_5: "Respectez les règles de comportement dans les différents types de chat (le statut du chat vidéo est indiqué par une icône correspondante à côté de l'avatar de l'interlocuteur) :",
                    text_public_chat: "Chat public",
                    text_private_chat: "Chat privé",
                    text_nudity_context: "La nudité et les comportements sexuels* sont interdits.",
                    text_nudity_context_allowed: "La nudité et les comportements sexuels* sont autorisés si l'interlocuteur est majeur et a donné son consentement.",
                    text_nudity_additional: "*Le comportement sexuel comprend l'exhibition des organes génitaux, les seins nus, les sous-vêtements ou les vêtements trop révélateurs, les poses sexuellement explicites, les caresses corporelles, les mouvements de la bouche ou de la langue.",
                    text_salary: "Ne dites à personne que vous gagnez de l'argent ici !",
                    full_rules: "Pour la liste complète des règles, voir {here}",
                    here: "ici",
                    text_ban: "Si vous enfreignez les règles de la plateforme, votre compte sera définitivement banni et vous perdrez tout l'argent que vous avez gagné !"
                },
                requisites: {
                    text_first: "Vos revenus seront transférés sur votre portefeuille de crypto-monnaie. Vous devez disposer d'un portefeuille de crypto-monnaie USDT (TRC-20) sur n'importe quelle plateforme pour recevoir votre salaire.",
                    text_second: "Si vous n'en avez pas, vous pouvez créer un compte gratuit sur Binance ou ailleurs.",
                    text_third: "Veuillez n'utiliser ici que l'adresse USDT (TRC-20). En cas d'adresse incorrecte, toute la responsabilité vous incombe.",
                    address_usdt: "Adresse USDT (TRC-20)",
                    address_usdt_error: "L'adresse donnée n'appartient pas à USDT (TRC-20"
                },
                nudity_error: {
                    text: "La photo contient de la nudité et ne peut pas être ajoutée."
                },
                denied_camera: {
                    title_3: "Votre caméra ou votre microphone n'est pas connecté",
                    title_2: "Avez-vous changé d'avis?",
                    message: "Vous n'avez pas autorisé l'accès à votre caméra, les filles ne pourront pas vous voir, vous ne pouvez donc pas démarrer le chat.",
                    message_girl: "Vous n'avez pas autorisé l'accès à votre caméra, les gars ne pourront pas vous voir, vous ne pouvez donc pas démarrer le chat.",
                    restart_page: "Rafraîchissez la page, autorisez votre caméra et commencez à discuter tout de suite."
                },
                accept_camera: {
                    subtitle_2: "Autoriser l'accès à la caméra et au microphone",
                    title: "La fille veut te voir",
                    allow_camera_first: "MiraMi a besoin d'accès à la caméra et au micro pour que les filles puissent vous voir.",
                    allow_camera_second: "Autorisez l'accès à la caméra, au micro et commencez une discussion passionnante.",
                    allow_camera_girl_bold: "Vous ne pouvez pas démarrer une discussion sans caméra."
                },
                girloffline: {
                    text_3: "Fille maintenant",
                    text_4: "Utiliser la super fonction 😎"
                },
                choose_file: {
                    title: "Sélectionner un fichier",
                    text: "La nudité est interdite. Utilisez uniquement vos propres médias que vous pouvez télécharger sur Instagram ou TikTok.",
                    only_premium: "Juste pour Premium"
                },
                recovery: {
                    title: "restauration de l'accès",
                    enter_new_password: "restauration de l'accès à Mirami chat",
                    invalid_recovery_key: "Le lien pour restaurer l'accès n'est pas valide.",
                    success: "Le nouveau mot de passe a été bien activé. Maintenant vous pouvez vous connecter.",
                    sent_link: "Le lien a été envoyé sur votre e-mail {email} pour réinitialiser votre mot de passe. Si vous n'avez pas reçu la lettre, veuillez vérifier l'exactitude de votre e-mail ou dans le spam.",
                    reset_password: "Réinitialisez le mot de passe",
                    info_text: "Entrez l'e-mail que vous avez utilisé lors de votre inscription.<br/>Nous vous enverrons un e-mail avec un lien spécial qui vous aidera à réinitialiser votre mot de passe."
                },
                model_status: {
                    title: "Statut d'activité",
                    subtitle: "Gagnez plus",
                    free_user: "Avec un compte gratuit",
                    prem_user: "Avec un compte premium",
                    pay_start: "La facturation commence {after}.",
                    pay_start_after: "après 10 secondes",
                    descr_top: "Permet au modèle d'obtenir la mise maximale et d'avoir un paiement prioritaire dans la roulette. Il est activé {auto} à partir du moment où l'une des conditions est remplie:",
                    descr_top_auto: "automatiquement d'une durée de 20 jours",
                    if_1: "L'utilisateur invité a acheté",
                    if_2: "L'homme a acheté, après t'avoir parlé",
                    if_3: "Le chat avec premium {min}",
                    if_3_min: "> dure plus de 3 minutes",
                    status_reload: "Le statut {auto} si l'une des conditions est remplie:",
                    status_reload_auto: "est automatiquement prolongé de 10 jours"
                },
                profile: {
                    title: "Profil",
                    affiliate: "Programme partenaire",
                    link: "Lien",
                    count: "Quantité",
                    profit: "Bénéfice"
                },
                warning_activity: {
                    title: "Attention! L'absence dans le chat a été enregistrée.",
                    message: "N'ignorez pas les interlocuteurs, sinon le système vous exclura de la recherche et vous serez montré moins souvent."
                },
                add_avatar: {
                    title: "Ajouter un avatar 🫢",
                    text: "Téléchargez votre avatar avant de commencer à chercher des partenaires."
                },
                penalty_received: {
                    title: "Pénalité",
                    total_penalties: "Total des pénalités:",
                    first_penalty: "Il s'agit de votre première violation, nous vous donnons donc une chance d'y remédier. Nous vous rendrons vos pièces si vous gagnez plus de 20 000 pièces dans les 7 jours et si vous n'enfreignez pas les règles.",
                    reason: "Raison",
                    place: "Localisation",
                    comment: "Commentaire:",
                    screenshot: "Capture d'écran de la violation",
                    sexual_behavior: "Comportement sexuellement explicite"
                },
                image_upload_error: {
                    text: "Ne partagez pas de données personnelles ni de captures d'écran. Soyez prudent et communiquez directement sur Mirami.chat."
                },
                camscore: {
                    title: "Votre Camscore",
                    description: "Si votre Camscore est « Bon » ou « Excellent », vous recevrez le statut TOP et la priorité dans la file d'attente.",
                    description_undefined: "Vous avez effectué moins de 500 vidéochats, nous ne pouvons donc pas calculer votre Camscore. <br/>Veuillez passer plus de temps en vidéochats.",
                    what_is: "Qu'est-ce que le Camscore ?",
                    status: {
                        none: "Non défini",
                        terrible: "Terrible",
                        bad: "Mauvais",
                        good: "Bon",
                        excellent: "Excellent"
                    },
                    text: {
                        line_1: "Camscore est une note qui reflète la productivité et la rentabilité globale d'un modèle sur la plateforme.",
                        line_2: "Le Camscore est calculé en fonction des gains du modèle au cours des 7 derniers jours et des chats de plus de 5 secondes. Plus un modèle gagne avec des chats privés et des cadeaux, plus son Camscore est élevé. Le classement du modèle est recalculé tous les jours en prenant en compte ses résultats des sept derniers jours. Ainsi, l'activité du modèle a une influence directe sur l'augmentation ou la diminution de son classement.",
                        line_3: "Il est important de comprendre que cet indicateur dépend de plusieurs facteurs qui influencent directement la rentabilité du modèle :",
                        line_4: "Temps passé en ligne – Plus un modèle passe de temps en ligne et interagit activement avec les utilisateurs, plus il a de possibilités de gagner.",
                        line_5: "Fréquence des achats des utilisateurs – Plus les utilisateurs paient pour des chats privés et envoient des cadeaux, plus le Camscore du modèle est élevé.",
                        line_6: "Prolongation des vidéochats – Plus les utilisateurs prolongent leurs appels vidéo avec le modèle, plus son classement est élevé. Il est conseillé aux modèles de créer des occasions pour des appels réguliers, par exemple en proposant des shows uniques ou en menant des conversations amicales qui peuvent motiver les utilisateurs à effectuer des appels privés.",
                        line_7: "Prise d'initiative – Les modèles ne doivent pas attendre que les utilisateurs fassent le premier pas. Ils doivent écrire et appeler en premier. Cela montre de l'attention et de l'intérêt, ce qui motive les utilisateurs à interagir davantage avec le modèle.",
                        line_8: "Activité et créativité – Les utilisateurs apprécient des images de qualité, une bonne lumière et une communication active, ce qui peut les encourager à dépenser plus d'argent.",
                        line_9: "Ainsi, plus un modèle gagne, meilleur est son Camscore, ce qui l’aide à se classer dans les meilleurs sur la plateforme et à attirer encore plus d’utilisateurs."
                    }
                },
                santa_top: {
                    title: "Le choix du Père Noël 🎄",
                    text1: "Participez à notre concours de Noël et gagnez des bonus supplémentaires ! 🎁 En une journée : gagnez $20 et recevez $5, accumulez $45 et recevez $15, et pour $100, vous recevrez $35 entiers.",
                    text2: "Transformez vos efforts en cadeaux généreux ❤️",
                    every_day: "✨ Tous les jours jusqu’au 31 décembre",
                    launch_auto: "Cela démarre automatiquement chaque jour à votre heure locale.",
                    stats_update: "⏰ Les statistiques sont mises à jour toutes les ~5 minutes."
                }
            },
            profile: {
                email_notifications: "Email notifications",
                change_password: "Changer le mot de passe",
                new_password: "Nouveau mot de passe",
                repeat_password: "Répétez le mot de passe",
                passwords_not_match: "Les mots de passe ne correspondent pas",
                delete_account: "Supprimer mon compte",
                about: "À propos de moi",
                birthday: "La date de naissence",
                receive_guests: "Recevez des notifications d'invités premium.",
                receive_girls: "Recevez des notifications quand la fille dont vous avez besoin est en ligne et il y a des infos importantes pour vous.",
                premium_btn: "Devenir Premium",
                bad_btc: "Il n'y a pas de tel portefeuille Bitcoin.",
                actions: {
                    invite: "Inviter à rejoindre le chat",
                    start_chat: "Appel vidéo",
                    remove_favourite: "Supprimer des favoris",
                    message: "Message",
                    was_invited: "Invitation est envoyée",
                    cancel_notify: "Annuler la notification",
                    notify_online: "Notifier quand il/elle sera en ligne"
                },
                premium_descr: "Devenez Premium et obtenez un accès complet à toutes les options.",
                subtitle: {
                    foto: "Photo",
                    video: "Vidéo"
                },
                foto_descr: "Ajoutez vos propres photos pour que les gens puissent mieux vous connaître.",
                verify_descr: "Confirmez votre identité afin que les gens puissent vous faire confiance.",
                geo_button: "Mes données géographiques",
                geo_description: "Afficher mon pays",
                rp_btn: "Je suis ici",
                rules: {
                    forbidden: {
                        title: "Interdit",
                        text_1: "Nudité et comportement sexuellement dans un salon de discussion public.",
                        text_2: "Utiliser plus d'un profil.",
                        text_3: "Ajouter des photos ou des vidéos contenant de la nudité.",
                        text_4: "Utiliser le profil d'autrui.",
                        text_5: "Demander de l'argent ou offrir d'autres modes de payment.",
                        text_6: "Partager ses données personnelles (numéros de téléphone, réseaux sociaux, etc).",
                        text_7: "Entrer dans le tchat vidéo avec quelqu'un.",
                        text_8: "Utiliser l'automatisation (robots, vidéo diffusée par webcam, etc.)",
                        text_9: "Ignorer l’interlocuteur (ne pas être dans le cadre, ne pas répondre aux messages texte, se laisser distraire par d’autres choses)"
                    },
                    allowed: {
                        title: "Autorisé",
                        text_1: "Se mettre à l'aise sur le tchat vidéo en privé, confortablement pour vous et pour votre intelocuteur.",
                        text_2: "Prolonger l'appel le plus longtemps possible.",
                        text_3: "Répondre aux messages et entamer des conversations. Rester aimable, ouverte et souriante.",
                        text_4: "Se placer devant la caméra avec un bon éclairage. Vous devez être clairement visible.",
                        text_5: "Télécharger ses photos personnelles uniquement.",
                        text_6: "Signaler les utilisateurs lorsque ces derniers sont mineurs, vous harcèlent ou lorsque leur genre est inapproprié.",
                        text_7: "Se présenter en ligne au moins une fois par mois. Dans le cas contraire, le solde sera annulé."
                    },
                    warn: "Les violations sont enregistrées par les modérateurs et les robots. Vous pouvez être condamné à une amende ou à un bannissement définitif."
                },
                queen_day: "Reine de la journée",
                queen_week: "Reine de la semaine",
                queen_mirami: "Reine Mirami",
                blur_button: "Flouter un chat vidéo avec un interlocuteur",
                blur_description: "Appuyez sur l'écran du chat vidéo pour supprimer le flou",
                not_found_title: "Utilisateur introuvable",
                not_found_description: "Rencontrez quelqu'un de nouveau dès maintenant !",
                tab_personal: "Informations personnelles",
                tab_settings: "Paramètres du compte",
                tab_rules: "Règles",
                tg_link_1: "Notre",
                tg_link_2: "chaîne officielle Telegram",
                about_girl: "À propos de la fille",
                bad_nickname: "Le pseudo doit contenir au moins 3 caractères.",
                bad_about: "Le nombre maximum de caractères à propos de vous-même - 2000.",
                personal_info: "Données personnelles",
                btc_wallet: "Portefeuille Bitcoin Totalcoin",
                phone: "(numéro de téléphone)",
                birthday_required: "La date de naissance est obligatoire.",
                password_success: "Votre mot de passe a bien été modifié.",
                my_settings: "Mes paramètres",
                avatar_only_image: "Vous ne pouvez télécharger que des fichiers jpg, png.",
                avatar_file_size: "Taille maximale du fichier 2MB.",
                undefined_avatar_problems: "Des problèmes inconnus se sont produits pendant l’enregistrement du fichier.",
                last_visit_girl: "Était en ligne",
                video_descr: "Ajoutez votre propre vidéo amusante et augmentez votre popularité."
            },
            main: {
                history_chat_title: "L'historique de la conversation",
                chat_men: "Commencer le chat vidéo",
                h1: "MiraMi — un chat vidéo aléatoire avec les filles",
                h1_girl: "MiraMi — chat aléatoire avec les hommes",
                sign_1: "Des inconnus célibataires vous attendent en ligne!",
                sign_2: "Voulez-vous trouvez une fille?",
                sign_2_girl: "Voulez-vous trouvez un homme?",
                camera_need: "Allumez votre caméra pour commencer la recherche de la fille.",
                camera_need_girl: "Allumez votre caméra pour commencer la recherche."
            },
            sections: {
                affiliate: "Réf. programme",
                top: "TOP Mirami",
                logout: "Retour",
                billing: "Acheter des minutes",
                billing_messages: "Acheter des messages",
                main: "Chat vidéo",
                girls: "Filles",
                favourites: "Favoris",
                auto_translate: "Traduction automatique",
                gifts: "Cadeaux"
            },
            virtual_date: {
                earn_more_money_guys: "Gagnez plus d'argent, en fréquentant sur Mirami!",
                invited: "invité",
                reward: "gagné",
                invite_guys: "Invitez des hommes",
                invite_girls: "Invitez des femmes",
                how_work: {
                    title: "Comment ça fonctionne",
                    item_1: "Rencontrez des gars sur n'importe quel site de rencontres.",
                    item_2: "Demandez-lui de rejoindre le chat vidéo Mirami.",
                    item_3: "S'il vous aime vraiment, il achètera facilement un accès premium pour parler avec vous.",
                    item_4: "{bonus} à vos gains! cet invité deviendra votre utilisateur invité pour toujours, pour chaque son achat vous recevrez {reward}.",
                    item_4_bonus: "Bonus supplémentaire",
                    item_4_reward: "15% des récompenses"
                },
                link_guys: "Votre lien pour inviter les hommes",
                earn_more_money_girls: "Gagnez plus, en invitant des filles à MiraMi!",
                invite_models: "Invitez des modèle Webcam et obtenez 10% de ses primes.",
                link_girls: "Votre lien pour inviter des filles"
            },
            gifts: {
                title: "Mes cadeaux",
                empty: "Actuellement vous n'avez aucun cadeaux",
                from: "de {giver_nick}",
                block: "Vous ne pouvez pas recevoir de cadeaux."
            },
            withdraw: {
                go: "Retirer",
                balance: {
                    title: "Solde",
                    info: "Informations",
                    rating: "Classement",
                    minimal_sum: "Le montant minimal pour échanger des pièces est de {0}",
                    any_day: "Vous pouvez demander un paiement à tout moment.",
                    every_thursday: "Le calcul des pièces gagnées a lieu tous les jeudis à 21h00 (TU+3). Le paiement a lieu le vendredi",
                    requisites: "Coordonnées bancaires",
                    my_requisites: "Mes coordonnées",
                    actual_info: "Toutes les actualités concernant les paiements sont affichées",
                    official_channel: "sur notre chaîne officiel Telegram",
                    withdraw: "Retirer",
                    error_minimal_sum: "Le retrait minimal est de {0} pièces",
                    commission: "Les frais du système de paiement pour chaque paiement sont de {0}$."
                },
                history: {
                    title: "Historique des paiements",
                    income_sum: "Totalité des revenus au cours de toute la période :",
                    success: "Succès",
                    declined: "Rejeté",
                    waiting: "Attente"
                },
                title: "Retirer des fonds",
                your_wallet: "Votre portefeuille Bitcoin Totalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "Movaise connection",
                    other: "Autrе",
                    sex: "Actes sexuels",
                    nudse: "La nudité dans le cadre",
                    absence: "Absence dans le cadre",
                    dont_attention: "Pas de réponse",
                    video: "Utilisation du matériel vidéo",
                    multi_accounts: "Utilisation de plusieurs comptes",
                    alien_account: "Utiliser le compte de quelqu'un d'autre"
                },
                your_ban: "Vous êtes bloqué",
                what_reason: "Votre compte a été bloqué à cause de",
                unban_time: "Date de débloquage:",
                infinity: "Pour toujours",
                comment: "Commentaire de l'administrateur"
            },
            messenger: {
                antispam: "Le chat est anonyme, il est interdit de partager des contacts et des liens.. Si vous l'essayez, on bloquera votre compte pour toujours.",
                dialog_timer_label: "Disparaîtra bientôt",
                dialog_male_liking_label: "😍 La fille t'a aimé!",
                dialog_female_liking_label: "💖 Vous avez envoyé un Like!",
                dialog_gift_offer_label: "😉 Elle s'ennuie, offre lui un cadeau",
                dialog_message: "Cadeau",
                dialog_not_support: "Ne fonctionne pas",
                dialog_empty_state_female: "Il n'y a rien encore ici.\nSois la première ! Écris un message!",
                dialog_empty_state_male: "Sois le premier! Écris un message à une fill!",
                select_girl: "Choisir une fille",
                modal_message_price_label: "Coût d'un message",
                dialog_gift_offer_female_label: "😜 Si tu envoies un cadeau, elle verra tes messages en premier",
                dialog_gift_offer_male_label: "🤫 Il pense à t'offrir un cadeau. écris-lui",
                typing: "Écrit",
                dialog_liking_text: "Bonjour, tu me plais! On va se parler 🔥🔥",
                confirm_clear_history_chat: "Êtes vous sûr de vouloir éffacer l'hustoire du chat?",
                confirm_delete_chat: "Êtes vous sûr de vouloir éffacer le chat?",
                btn_clear_chat: "Effacer l'historique du chat",
                delete_dialog: "Effacer le chat",
                timer_label: "Le message sera supprimé après",
                timer_descr: "Ce message n'est dispo que pour les utilisateurs Premium.",
                you: "Vous:",
                sent: "Envoyé",
                read: "Lu",
                title: "Messager",
                select_dialogue: "Pour commencer la communication,<br/>sélectionner le dialogue.",
                start_date: "Vous n'avez pas encore de messages.<br/>Commencez à parler avec des filles tout de suite!",
                fill_package: "Pour continuer la discution,<br/>recharger un forfait.",
                read_messege: "Lisez le message de la fille.<br/>Il sera supprimé dans une heure.",
                start_reg: "Pour discuter avec des filles <br/> vous devez vous connecter ou vous inscrire.",
                chat_with_her: "Inscrivez-vous,<br/>pour parler avec elle.",
                no_dialogue: "Vous n'avez pas encore de messages.",
                dialog_violation_label: "Image supprimée",
                dialog_violation_message: "L'image a été supprimée car elle n'est pas conforme aux règles de l'application."
            },
            check_age: {
                main_title: "Vérification",
                verify_button: "Vérifier"
            },
            alerts: {
                new_currency_title: "Attention",
                new_currency_first_label: "Devise de l'application désormais",
                new_currency_second_label: "Équivalent égal est crédité sur votre bilan",
                limit_function2: "Accès uniquement aux utilisateurs premium.",
                have_active_chat: "Vous êtes en chat actif.",
                confirm: "Êtes-vous sûr?",
                success_payment: "Votre compte a été crédité avec succès!"
            },
            verification: {
                rule_1: "Assurez-vous que le document vous appartient et qu'il est en bon état.",
                rule_2: "Assurez-vous que vous n'avez plus de comptes, même ceux qui ont été rejetés.",
                rule_3: "N'utilisez pas de documents falcifiés ou modifiés.",
                rule_4: "Seul le propriétaire du compte peut passer la vérification.",
                info_text_1: "Notre système détectera automatiquement, à partir de votre visage et de vos coordonnées, si vous avez un faux document ou si vous possédez déjà un compte.",
                info_text_2: "N'ignorez pas ces exigences ou votre compte sera automatiquement bloqué.",
                info_text_3: "Si vous avez un compte dont la vérification a échoué, envoyez-nous un courriel et nous traiterons le problème individuellement."
            },
            top_girls: {
                one_day: "Top du jour",
                one_week: "Top de la semaine",
                all_time: "Depuis tout le temps",
                your_rating: "Votre place au classement",
                your_place: "Vous êtes classée le {0}",
                yesterday_winners: "Gagnants d'hier",
                prev_week_winners: "Gagnants de la semaine dernière",
                rules_button: "Comment s'établit le classement ?",
                daily_rating: "Classement quotidien",
                current_daily_rating: "Classement du jour",
                weekly_rating: "Classement hebdomadaire",
                current_weekly_rating: "Classement de la semaine en cours",
                all_time_rating: "Classement général",
                current_place: "Classement actuel : {0} ({1})",
                yesterday_place: "Classement d'hier : {0} ({1})",
                previous_week_place: "Classement de la semaine dernière : {0} ({1})",
                rules: {
                    title: "Vous obtenez des points pour :",
                    rule_1: "durée du t'chat vidéo",
                    rule_3: "retour positif de vos interlocuteurs",
                    rule_4: "pour avoir été ajouté dans les amis et pour l'activité quotidienne",
                    rule_5: "Vous pouvez perdre des points en cas de retour négatif d'une personne avec laquelle vous avez discuté, en cas d'inactivité pendant une semaine et en cas de bannissement."
                }
            },
            boys: {
                title: "Utilisateurs de Mirami"
            },
            favourites: {
                title: "Favoris",
                add_girls: "Ajoutez vos filles préférées à votre liste de favoris pour y accéder rapidement.",
                to_roulette: "Chat roulette",
                empty_title: "La liste des favoris est vide",
                empty_text: "Ajoutez des gars aux favoris pour rester en contact",
                added_to_favorites: "{name} a été ajouté aux {br}favoris",
                you_in_favorites: "Vous avez été ajouté aux {br}favoris"
            },
            catalog: {
                title: "Catalogue des filles",
                online: "Filles en ligne",
                offline: "Filles hors ligne",
                only_premium: "Le catalogue complet de nos filles est disponible uniquement pour les utilisateurs premium."
            },
            history: {
                empty_title: "Votre historique de conversation est vide.",
                empty_text: "Corrigeons cela tout de suite."
            }
        }
          , z = {
            sex_check: {
                title: "¿Quién eres?",
                sex_male: "Hombre",
                sex_female: "Chica"
            },
            staff: {
                title: "Su balance",
                button: {
                    get_premium: "Obtener premium",
                    login: "Iniciar sesión",
                    register: "Registrarse",
                    save: "Guardar",
                    send: "Enviar",
                    refill_balance: "Recarga tu balance",
                    next: "A continuación",
                    upload: "Cargar",
                    yes: "Sí",
                    begin: "Iniciar",
                    edit: "Editar",
                    ok: "ОK",
                    confirm: "Confirmar",
                    enter: "Entrar",
                    back: "Volver"
                },
                buy: "Comprar",
                min: "min.",
                understand: "Está claro",
                error: "Error",
                all: "Todo",
                delete: "Eliminar",
                error_devices: {
                    already_open: "El chat MiraMi ya está abierto.",
                    this_tab_active: "¿Quieres activar esta pestaña?"
                },
                days: "dias",
                other: "Otros",
                collapse: "Minimizar"
            },
            search: {
                start: "Iniciar búsqueda",
                note: "Por favor, no minimice la pantalla",
                your_ready: "¿Listo para empezar?",
                process: "Encontrandote un compañero de chat",
                awaiting: "Esperando"
            },
            chat: {
                type_message: "Escriba su mensaje",
                to_end: "Fin",
                is_premium: "Usuario Premium",
                add_favourite: "Agregar a favoritos",
                reconnection: "Recuperación de la conexión",
                connecting: "Conectando con una pareja...",
                your_favourite: "Tu favorito",
                time_to_end: "Es hora de terminar el chat"
            },
            modals: {
                login: {
                    create_account: "Registrarse",
                    email: "Su correo electrónico",
                    password: "Su contraseña",
                    title: "Iniciar sesión",
                    forgot_password: "¿Olvidó su contraseña?",
                    wrong_login: "Nombre de usuario o contraseña incorrectos",
                    subtitle: "Chatea y disfruta"
                },
                support: {
                    title: "Soporte",
                    have_questions: "Si tiene alguna pregunta o sugerencia, envíenos un correo electrónico."
                },
                register: {
                    already_have_account: "Ya tengo una cuenta.",
                    title: "Eliminar restricciones,",
                    subtitle: "¡Registrarse!,",
                    subtitle_2: "Extiende tu placer",
                    nickname: "Alias/Apodo",
                    already_email: "Este correo electrónico ya se está utilizando.",
                    password_bad: "La contraseña debe tener al menos 8 caracteres.",
                    name_short: "El nombre es demasiado corto",
                    name_long: "El nombre es demasiado largo"
                },
                present: {
                    done: "Enviar un regalo",
                    cancel: "Cancelar",
                    not_enough_balance_title: "Balance insuficiente",
                    title: "Enviar un regalo",
                    gift_price: "Valor del regalo",
                    consent: "¿Estás listo para enviar un regalo?",
                    cost: "Equivalente a",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Regalo enviado exitosamente!"
                },
                complaint: {
                    title: "Informar abuso",
                    complaint_1: "Participación infantil",
                    complaint_5: "Engaño",
                    complaint_2: "Pide un regalo",
                    more: "Describa la infracción en detalle",
                    word: "Queja",
                    nudity: "Desnudez",
                    dont_like: "No me gusta este usuario",
                    inappropriate_content: "Contenido inapropiado",
                    span_or_scam: "Spam o estafa"
                },
                success_register: {
                    title: "Registro exitoso",
                    keep_chat: "Sigue chateando con chicas."
                },
                present_success: {
                    title_2: "¡Un regalo para ti!",
                    thanks: "¡Gracias!",
                    present_from: "Recibiste un regalo de {giver_nick}"
                },
                photo_view: {
                    text_1: "Disponible solo para los usuarios premium",
                    text_2: "Disponible para todos",
                    stub_only_premium: "Solo Premium"
                },
                remove_favourite: {
                    text: "¿Estás seguro de que quieres eliminarlo de favoritos?"
                },
                remove_gallery: {
                    title: "Eliminar",
                    text: "¿Estás seguro de que deseas eliminarlo de la galería?"
                },
                chat: {
                    value_video_chat_text: "El costo de la comunicación en Chatroulette",
                    value_direct_video_chat_text: "Costo de una llamada personal",
                    top_up_balance_text_web: "Recarga el saldo para continuar la comunicación"
                },
                block_user: {
                    title: "Bloquear",
                    confirm_text: "¿Realmente quieres bloquear a este usuario?"
                },
                prohibition: {
                    title: "Están prohibidos...",
                    item_1: "Demostración de órganos\nsexuales"
                },
                nudity_warning: {
                    title_1: "Muéstrate",
                    title_2: "Sólo tus fotos",
                    title_3: "Reglas de decoro",
                    warning_1: "Elige las fotos en las que se puede ver claramente",
                    warning_2: "No subas fotos de otras personas - las eliminaremos",
                    warning_3: "Abstenerse de desnudos y fotos obscenas"
                },
                messenger_warning_limit: {
                    text_free: "Has usado tu límite diario. Conviértase En Premium.",
                    text_prem: "Has utilizado su límite diario, ahora se te cobrará por cada mensaje",
                    text_anonim: "Para ver el mensaje, debes iniciar la sesión o registrarse"
                },
                liking_send: {
                    text: "Envíale una simpatía al chico para que pueda contactarte"
                },
                billing: {
                    subtitle_3: "Elije un paquete de diamantes",
                    subtitle_2: "Premium como regalo para siempre",
                    messages: "mensajes",
                    choose_payment: "Elige el método de pago",
                    agreement: "Al hacer este pago confirmo que soy mayor de edad, acepto los",
                    terms_conditions: "Términos y Condiciones"
                },
                accept_years: {
                    sub_title: "Antes de continuar, confirme que tiene más de 18 años y acepta los siguientes términos:",
                    rule_1: "Confirma que tienes la edad necesaria.",
                    rule_2: "Usted garantiza que no permitirá que menores tengan acceso a Mirami.chat.",
                    rule_3: "Usted garantiza que nos notificará de forma inmediata de cualquier usuario que crea que es menor de edad.",
                    welcome: "Bienvenido"
                },
                rules: {
                    title: "Recordatorio",
                    text_public_chats: "Chats públicos",
                    text_nudity: "¡La desnudez no está permitida!",
                    text_sexual_context: "¡El comportamiento sexual está prohibido!",
                    text_private_chats: "Chats privados",
                    text_free: "Puede ser usted mismo.",
                    text_moderation: "Se pueden moderar tanto las llamadas públicas como las privadas.",
                    text_chat_indicator: "Atento con el chat, siempre puede cambiar.",
                    text_rules: "Reglas de chat de video",
                    memo: "Recordatorio",
                    update_date: "Fecha de actualización: {0}",
                    list_text_1: "Actúa como una chica soltera normal que está buscando nuevos hombres para videochatear.",
                    list_text_2: "Asegúrate de que tu cara es claramente visible para tu interlocutor.",
                    list_text_3: "Presta toda tu atención al compañero de conversación, siempre escribe primero y responde al chico.",
                    list_text_4: "No hagas multistreaming en otros videochats.",
                    list_text_5: "Sigue las normas de comportamiento en los distintos tipos de chat (el estado del videochat se marca con el icono correspondiente junto al avatar del interlocutor):",
                    text_public_chat: "Chat público",
                    text_private_chat: "Chat privado",
                    text_nudity_context: "La desnudez y el comportamiento sexual* están prohibidos.",
                    text_nudity_context_allowed: "La desnudez y el comportamiento sexual* están permitidos si el interlocutor es mayor de edad y ha dado su consentimiento.",
                    text_nudity_additional: "*El comportamiento sexual incluye la exhibición de genitales, el topless, la ropa interior o la ropa demasiado reveladora, las poses sexualmente explícitas, las caricias corporales y los movimientos de la boca o la lengua.",
                    text_salary: "No le digas a nadie que ganas dinero aquí.",
                    full_rules: "Para ver la lista completa de normas, consulta {here}",
                    here: "aquí",
                    text_ban: "Si infringes las normas de la plataforma, tu cuenta será bloqueada permanentemente y perderás todo el dinero que hayas ganado."
                },
                requisites: {
                    text_first: "Sus ganancias serán retiradas de su monedero cripto. Par recibir el pago es necesario tener un monedero cripto USDT (TRC-20) en cualquier plataforma",
                    text_second: "Si no tiene uno, puede crear uno registrándose en Binance u otras plataformas de intercammbio de cripto: es gratis",
                    text_third: "Use solo la dirección USDT (TRC-20) aquí. Si proporciona una dirección incorrecta, la responsabilidad será suya.",
                    address_usdt: "Dirección USDT (TRC-20)",
                    address_usdt_error: "Esta dirección no pertenece a USDT (TRC-20)"
                },
                nudity_error: {
                    text: "La foto contiene desnudos y no puede ser subida"
                },
                denied_camera: {
                    title_3: "Su cámara o micrófono no está conectado",
                    title_2: "¿Has cambiado de opinión?",
                    message: "No has permitido el acceso a tu cámara, por lo que las chicas no podrán verte.",
                    message_girl: "No has permitido el acceso a tu cámara, por lo que los chicos no podrán verte.",
                    restart_page: "Reinicie la página y permita el uso de su cámara."
                },
                accept_camera: {
                    subtitle_2: "Permitir el acceso a la cámara y al micrófono",
                    title: "La chica quiere verte",
                    allow_camera_first: "La aplicación necesita acceso a la cámara y al micrófono para que las chicas puedan verte",
                    allow_camera_second: "Permita el acceso a tu cámara, el micrófono y comienza una conversación muy excitante.",
                    allow_camera_girl_bold: "No puedes iniciar el chat sin una cámara."
                },
                girloffline: {
                    text_3: "Chica ahora",
                    text_4: "Usa esta increíble función 😎"
                },
                choose_file: {
                    title: "Seleccionar un archivo",
                    text: "La desnudez está prohibida. Usa solo tus elementos multimedia, que puedes subir a Instagram o TikTok.",
                    only_premium: "Solo Premium"
                },
                recovery: {
                    title: "Recuperación de acceso",
                    enter_new_password: "Recuperación de acceso del chat de Mirami",
                    invalid_recovery_key: "El enlace para la recuperación de acceso no es válido.",
                    success: "La nueva contraseña se estableció correctamente. Ahora puedes iniciar sesión.",
                    sent_link: "Se ha enviado un enlace para restablecer su contraseña a su e-mail {email}. Si no ha recibido un correo electrónico, verifique nuevamente que la direccion de su correo electrónico sea correcto o verifique la carpeta de correo no deseado.",
                    reset_password: "Restablecer la contraseña",
                    info_text: "Introduzca el correo electrónico que utilizó para registrarse. <br/> Le enviaremos un correo electrónico con un enlace especial para ayudarlo a restablecer su contraseña."
                },
                model_status: {
                    title: "Estatus de actividad",
                    subtitle: "Ganar más",
                    free_user: "Con usuario gratuito",
                    prem_user: "Con usuario premium",
                    pay_start: "Pago, para iniciar la comunicación {after}.",
                    pay_start_after: "después de 10 segundos",
                    descr_top: "Permite al modelo, obtener la máxima tasa y prioridad en la ruleta. Esta activado {auto} desde el momento en que se cumple una de las condiciones:",
                    descr_top_auto: "automáticamente durante 20 días",
                    if_1: "El usuario de referencia compró",
                    if_2: "El chico compró después de charlar contigo",
                    if_3: "Chat continuo con usuario premium {min}",
                    if_3_min: "> 3 minutos",
                    status_reload: "Estatus {auto} si se cumple una de las siguientes condiciones:",
                    status_reload_auto: "se prolonga automáticamente durante 10 días"
                },
                profile: {
                    title: "Perfil",
                    affiliate: "Programa de afiliados",
                    link: "Link/Enlace",
                    count: "Total",
                    profit: "Ganancias"
                },
                warning_activity: {
                    title: "¡Advertencia! Se ha notado tu ausencia en el chat.",
                    message: "No ignore a los moderadores, de lo contrario, será excluido de las búsquedas y se mostrará con menos frecuencia."
                },
                add_avatar: {
                    title: "Añadir avatar 🫢",
                    text: "Sube tu avatar antes de empezar a buscar pareja."
                },
                penalty_received: {
                    title: "Penalización",
                    total_penalties: "Total de penalizaciones:",
                    first_penalty: "Esta es tu primera infracción, así que te damos la oportunidad de corregirla. Te devolveremos tus monedas si ganas más de 20.000 monedas en 7 días y no infringes las normas.",
                    reason: "Razón:",
                    place: "Ubicación",
                    comment: "Comentario:",
                    screenshot: "Captura de pantalla de la infracción",
                    sexual_behavior: "Comportamiento sexual explícito"
                },
                image_upload_error: {
                    text: "No compartas datos personales ni capturas de pantalla. Ten cuidado y comunícate directamente en Mirami.chat."
                },
                camscore: {
                    title: "Tu Camscore",
                    description: 'Si tu Camscore es "Bueno" o "Excelente", recibirás el estatus TOP y prioridad en la cola.',
                    description_undefined: "Has realizado menos de 500 videollamadas, por lo que no podemos calcular tu Camscore. <br/>Por favor, pasa más tiempo en videollamadas.",
                    what_is: "¿Qué es el Camscore?",
                    status: {
                        none: "No definido",
                        terrible: "Terrible",
                        bad: "Pobre",
                        good: "Bueno",
                        excellent: "Excelente"
                    },
                    text: {
                        line_1: "Camscore es una calificación que refleja la productividad general y la rentabilidad de un modelo en la plataforma.",
                        line_2: "Camscore se calcula en función de los ingresos del modelo en los últimos 7 días y de chats que duran más de 5 segundos. Cuanto más gane un modelo con chats privados y regalos, mayor será su Camscore. El ranking del modelo se recalcula a diario teniendo en cuenta sus resultados de los últimos siete días. Así, la actividad del modelo influye directamente en el aumento o disminución de su ranking.",
                        line_3: "Es importante entender que este indicador depende de varios factores que afectan directamente la rentabilidad del modelo:",
                        line_4: "Tiempo en línea – Cuanto más tiempo pase un modelo en línea y active interactúe con los usuarios, más oportunidades tendrá para ganar.",
                        line_5: "Frecuencia de compras de los usuarios – Cuanto más paguen los usuarios por chats privados y envíen regalos, mayor será el Camscore del modelo.",
                        line_6: "Extensión de videollamadas – Cuanto más a menudo los usuarios extiendan sus llamadas de video con el modelo, mayor será su ranking. Se recomienda que los modelos creen motivos para llamadas regulares, como ofrecer shows únicos o tener conversaciones amistosas que puedan motivar a los usuarios a realizar llamadas privadas.",
                        line_7: "Iniciativa – Los modelos no deben esperar a que los usuarios den el primer paso. Deben escribir y llamar ellos mismos primero. Esto demuestra atención e interés, lo que motiva a los usuarios a interactuar más con el modelo.",
                        line_8: "Actividad y creatividad – A los usuarios les gustan las imágenes de calidad, la buena iluminación y la comunicación activa, lo que puede motivarlos a gastar más dinero.",
                        line_9: "Por lo tanto, cuanto más gane un modelo, mejor será su Camscore, lo que le ayudará a llegar a los primeros puestos de la plataforma y atraer más usuarios."
                    }
                },
                santa_top: {
                    title: "La mejor elección de Santa 🎄",
                    text1: "¡Participa en nuestro concurso navideño y gana bonos adicionales! 🎁 En un día: gana $20 y obtén $5, acumula $45 y obtén $15, y si acumulas $100, obtendrás $35 completos.",
                    text2: "Convierte tus esfuerzos en regalos generosos ❤️",
                    every_day: "✨ Todos los días hasta el 31 de diciembre",
                    launch_auto: "Se inicia automáticamente cada día a tu hora local.",
                    stats_update: "⏰ Las estadísticas se actualizan aproximadamente cada 5 minutos."
                }
            },
            profile: {
                email_notifications: "Notificaciones por correo electrónico",
                change_password: "Cambiar contraseña",
                new_password: "Nueva contraseña",
                repeat_password: "Repetir contraseña",
                passwords_not_match: "Las contraseñas no coinciden",
                delete_account: "Eliminar una cuenta",
                about: "Acerca",
                birthday: "Fecha de nacimiento",
                receive_guests: "Reciba notificaciones de invitados premium a tiempo.",
                receive_girls: "Reciba notificaciones cuando la chica requerida esté en línea y haya información importante para usted.",
                premium_btn: "Obtener cuenta premium",
                bad_btc: "No existe tal billetera de BTC.",
                actions: {
                    invite: "Invitar al chat",
                    start_chat: "Videollamada",
                    remove_favourite: "Quitar de favoritos",
                    message: "Message",
                    was_invited: "La chica fue invitada. Espere por favor.",
                    cancel_notify: "Cancelar la notificación",
                    notify_online: "Notificar cuando esté en línea"
                },
                premium_descr: "Conviértete en un usuario premium y obtén acceso completo a todas las funciones.",
                subtitle: {
                    foto: "Foto",
                    video: "Vídeo"
                },
                foto_descr: "Añade fotos para que los usuarios puedan conocerte mejor.",
                verify_descr: "Confirme su identidad para que la gente pueda confiar en Usted",
                geo_button: "Mis geodatos",
                geo_description: "Mostrar mi país",
                rp_btn: "Estoy aquí",
                rules: {
                    forbidden: {
                        title: "Prohibido",
                        text_1: "Desnudarse y tener un comportamiento sexual en el chat público.",
                        text_2: "Usar más de 1 cuenta",
                        text_3: "Sube fotos o videos de desnudos.",
                        text_4: "Usar la cuenta de alguien más",
                        text_5: "Pedir dinero u ofrecer otros métodos de pago.",
                        text_6: "Compartir información personal (teléfono, redes sociales, etc)",
                        text_7: "Iniciar un chat de video con alguien",
                        text_8: "Usar automatización (bots, transmisión de video por una cámara web, etc.).",
                        text_9: "Ignorar al interlocutor (no estar en el encuadre, no responder a los mensajes de texto, distraerse con otras cosas)"
                    },
                    allowed: {
                        title: "Se permite",
                        text_1: "Comportarse correctamente en el chat de video, sentirse cómodamente y hacer sentir cómodo a la otra parte",
                        text_2: "Prolongar la llamada el mayor tiempo posible",
                        text_3: "Respondera los mensajes y hablara  Sea amable, sociable y sonría.",
                        text_4: "Estar frente a la cámara, con buena iluminación. La imagen debe ser claramente visible.",
                        text_5: "Subir solamente fotos propias",
                        text_6: "Reportar a los usuarios cuando detecte a menores, acoso o género inapropiado.",
                        text_7: "Conectarse al menos una vez al mes, de lo contrario, el saldo se restablecerá a cero."
                    },
                    warn: "Todos los malos comportamientos y faltas son monitoreados por moderadores y bots. Puede ser multado o la cuenta bloqueada permanentemente"
                },
                queen_day: "Reina del dia",
                queen_week: "Reina de la semana",
                queen_mirami: "Reina Mirami",
                blur_button: "Difuminar un videochat con un interlocutor",
                blur_description: "Toque la pantalla del video chat para quitar el desenfoque",
                not_found_title: "Este usuario no ha sido encontrado",
                not_found_description: "¡Conoce a alguien nuevo ahora mismo!",
                tab_personal: "Detalles personales",
                tab_settings: "Configuraciones de cuenta",
                tab_rules: "Reglas",
                tg_link_1: "Nuestro",
                tg_link_2: "Canal oficial de Telegram",
                about_girl: "Acerca",
                bad_nickname: "El apodo debe contener al menos 3 caracteres.",
                bad_about: "El número máximo de caracteres es 2000.",
                personal_info: "Informacion personal",
                btc_wallet: "Billetera de Bitcoin Totalcoin",
                phone: "(número de teléfono)",
                birthday_required: "El campo de cumpleaños es obligatorio.",
                password_success: "El cambio de contraseña se ha realizado correctamente.",
                my_settings: "Mi configuración",
                avatar_only_image: "Solo puedes subir jpg, png.",
                avatar_file_size: "El tamaño máximo del archivo es de 2 MB.",
                undefined_avatar_problems: "Ocurrieron algunos problemas al guardar el archivo.",
                last_visit_girl: "Estaba en línea",
                video_descr: "Añade tus vídeos divertidos para aumentar tu popularidad."
            },
            main: {
                history_chat_title: "Historial de chat",
                chat_men: "Iniciar chat de vídeo",
                h1: "MiraMi — el vídeo chat en vivo con chicas",
                h1_girl: "MiraMi — el vídeo chat en vivo con chicos",
                sign_1: "¡Hermosos desconocidos te están esperando en línea!",
                sign_2: "¿Quieres encontrar una chica con la cual charlar?",
                sign_2_girl: "¿Quieres encontrar chicos con los cuales charlar?",
                camera_need: "Activa tu cámara para comenzar a buscar a un desconocido.",
                camera_need_girl: "Activa tu cámara para comenzar a buscar."
            },
            sections: {
                affiliate: "Programa de referidos",
                top: "TOP Mirami",
                logout: "Cerrar sesión",
                billing: "Comprar minutos",
                billing_messages: "Comprar mensajes",
                main: "Chat vídeo",
                girls: "Chicas",
                favourites: "Favoritos",
                auto_translate: "Traducción automática",
                gifts: "Regalos"
            },
            virtual_date: {
                earn_more_money_guys: "¡Gana más dinero teniendo citas en MiraMi!",
                invited: "Invitado",
                reward: "Recompensa",
                invite_guys: "Invitar chicos",
                invite_girls: "Invitar chicas",
                how_work: {
                    title: "¿Cómo funciona?",
                    item_1: "Conoce a chicos en cualquier sitio de citas, redes sociales, etc. Estimula su interés coqueteando y mostrando tus fotos.",
                    item_2: "Cuando el chico ya esté apasionado por ti, ofrécele mostrarte y chatear usando el vídeo chat MiraMi, enviándole un enlace a tu sala de chat.",
                    item_3: "Si realmente le gustas, fácilmente el comprará el acceso premium para pasar más tiempo solo contigo.",
                    item_4: "{bonus} a tus ganancias si este invitado se convierte en tu afiliado para siempre y por cada una de sus compras recibirás un {reward}.",
                    item_4_bonus: "Un bono adicional",
                    item_4_reward: "15% de bonificación"
                },
                link_guys: "Tu enlace personal para invitaciones de chicos",
                earn_more_money_girls: "¡Gana más dinero invitando chicas a MiraMi!",
                invite_models: "Invita modelos y gana el 10% de sus ganancias premium.",
                link_girls: "Tu enlace personal para invitaciones de chicas"
            },
            gifts: {
                title: "Mis regalos",
                empty: "Tu actualmente no tienes regalos",
                from: "de {giver_nick}",
                block: "Tu no puedes aceptar regalos."
            },
            withdraw: {
                go: "Retiro",
                balance: {
                    title: "Balance",
                    info: "Información",
                    rating: "Valuación",
                    minimal_sum: "El monto mínimo de monedas para el intercambio es de {0}.",
                    any_day: "Puede solicitar el pago en cualquier momento.",
                    every_thursday: "Todos los jueves a las 21:00 (GMT+3) nuestro sistema vuelve a calcular las monedas que ganó. El pago se realiza el viernes.",
                    requisites: "Detalles del banco",
                    my_requisites: "Mis detalles",
                    actual_info: "Toda la información relevante sobre los pagos se encuantra en nuestro",
                    official_channel: "canal oficial en Telegram.",
                    withdraw: "Retirar",
                    error_minimal_sum: "El monto minimo de retiro es (0) monedas",
                    commission: "La comisión del sistema de pago por cada pago es de {0}$."
                },
                history: {
                    title: "Historial de pagos",
                    income_sum: "Ingreso total:",
                    success: "Exitoso",
                    declined: "Rechazado",
                    waiting: "Pendiente"
                },
                title: "Retiro",
                your_wallet: "Tu billetera de bitcoin Totalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "Mala conexión",
                    other: "Otro",
                    sex: "Acción sexual",
                    nudse: "Desnudez en el marco",
                    absence: "Falta de marco",
                    dont_attention: "No hay atención al interlocutor",
                    video: "Usar de materiales de vídeo",
                    multi_accounts: "Usar de varias cuentas",
                    alien_account: "Usar la cuenta de otra persona"
                },
                your_ban: "Usted ha sido Baneado",
                what_reason: "Su cuenta fue bloqueada debido a",
                unban_time: "Fecha de desbloqueo:",
                infinity: "Para siempre",
                comment: "Comentario de administrador"
            },
            messenger: {
                antispam: "El chat es anónimo, por lo tanto, está prohibido compartir datos de contacto y enlaces. Si lo intenta, su cuenta quedará bloqueada para siempre.",
                dialog_timer_label: "Desaparecerá pronto",
                dialog_male_liking_label: "😍 ¡Le gustaste a la chica!",
                dialog_female_liking_label: "💖 ¡Enviaste simpatía!",
                dialog_gift_offer_label: "😉 Ella está aburrida, hazle un regalo",
                dialog_message: "Regalo",
                dialog_not_support: "No es compatible",
                dialog_empty_state_female: "No hay nada aquí todavía.\n¡ Sé primera! ¡Escribe un mensaje!",
                dialog_empty_state_male: "¡Sé el primero! ¡Escribe un mensaje a la chica!",
                select_girl: "Elegir una chica",
                modal_message_price_label: "Valor del mensaje",
                dialog_gift_offer_female_label: "😜 Si envías un regalo, ella verá tus mensajes primero",
                dialog_gift_offer_male_label: "🤫 Está pensando en darte un regalo. Escríbele.",
                typing: "Está escribiendo",
                dialog_liking_text: "Hola, ¡me gustas! Vamos a charlar  🔥🔥",
                confirm_clear_history_chat: "¿Estás seguro/a de que quieres borrar tu historial de chat?",
                confirm_delete_chat: "¿Estás seguro/a de que quieres eliminar el diálogo?",
                btn_clear_chat: "Borrar historial de chat",
                delete_dialog: "Eliminar chat",
                timer_label: "El mensaje se borrará a través de...",
                timer_descr: "Esta publicación solo está disponible para los usuarios Premium",
                you: "Tú:",
                sent: "Enviado",
                read: "Leido",
                title: "Messenger",
                select_dialogue: "Para empezar a chatear, <br/> seleccionar un diálogo.",
                start_date: "Aún no tienes mensajes. <br/> Empieza a tener citas con chicas ahora!",
                fill_package: "Para seguir chateando, <br/> volver a llenar el paquete de mensajes.",
                read_messege: "Lee el mensaje de la chica. <br/> Se borrará en una hora.",
                start_reg: "Para chatear con chicas <br/> necesitas iniciar sesión o registrarte.",
                chat_with_her: "Inscribirse, <br/> para chatear con ella.",
                no_dialogue: "Aún no tienes mensajes.",
                dialog_violation_label: "Imagen eliminada",
                dialog_violation_message: "La imagen fue eliminada porque no cumple con las reglas de la aplicación."
            },
            check_age: {
                main_title: "Verificación",
                verify_button: "Verificar"
            },
            alerts: {
                new_currency_title: "Atención",
                new_currency_first_label: "Ahora la moneda de la aplicación",
                new_currency_second_label: "El equivalente igual se le acredita en el saldo",
                limit_function2: "Esta función está disponible solo para usuarios premium.",
                have_active_chat: "Estás en un chat activo.",
                confirm: "Estas seguro?",
                success_payment: "¡El pago fue exitoso!"
            },
            verification: {
                rule_1: "Asegúrese de que el documento es suyo y está en buenas condiciones.",
                rule_2: "Asegúrese de no tener más cuentas, incluso las rechazadas.",
                rule_3: "No use documentos falsos o alterados.",
                rule_4: "Solo el propietario de la cuenta puede pasar la verificación.",
                info_text_1: "Nuestro sistema detectará de manera automática un documento falso o el hecho de que ya tiene una cuenta en función de su rostro y datos.",
                info_text_2: "No ignore estos requisitos, de lo contrario su cuenta será bloqueada de forma automática.",
                info_text_3: "Si su cuenta no pudo ser verificada con éxito, envíenos un email, resolveremos el problema y su caso."
            },
            top_girls: {
                one_day: "Top del día",
                one_week: "Top de la semana",
                all_time: "Todo el tiempo",
                your_rating: "Su rating",
                your_place: "Estás {0} en la fila",
                yesterday_winners: "Los ganadores de ayer",
                prev_week_winners: "Los ganadores de la semana pasada",
                rules_button: "¿Cómo se crea la calificación?",
                daily_rating: "Calificación diaria",
                current_daily_rating: "Calificación de hoy",
                weekly_rating: "Calificación semanal",
                current_weekly_rating: "Calificación de la semana actual",
                all_time_rating: "Clasificación de todos los tiempos",
                current_place: "Clasificación actual: {0} ({1})",
                yesterday_place: "Clasificación de ayer: {0} ({1})",
                previous_week_place: "Clasificación de la semana pasada: {0} ({1})",
                rules: {
                    title: "Obtienes puntos por:",
                    rule_1: "Duración del videochat",
                    rule_3: "Respuesta positiva de las personas con las que chateas",
                    rule_4: "Ser agregado como amigo y actividad diaria",
                    rule_5: "Puedes perder puntos por una respuesta negativa de alguien con quien has chateado, por estar inactivo durante una semana y por un baneo."
                }
            },
            boys: {
                title: "Usuarios de Mirami"
            },
            favourites: {
                title: "Tus favoritos",
                add_girls: "Agrega las chicas que te gustan a tu lista de favoritos para acceder rápidamente a ellas.",
                to_roulette: "Chat-Ruleta",
                empty_title: "La lista de favoritos está vacía",
                empty_text: "Agrega chicos a tus favoritos para mantener el contacto",
                added_to_favorites: "{name} ha sido añadido a {br}favoritos",
                you_in_favorites: "Has sido añadido a {br}favoritos"
            },
            catalog: {
                title: "Catálogo de chicas",
                online: "Chicas en línea",
                offline: "Chicas sin conexión",
                only_premium: "El catálogo completo de nuestras chicas está disponible solo para usuarios premium"
            },
            history: {
                empty_title: "Tu historial de chat está vacío.",
                empty_text: "Arreglemos eso ahora mismo."
            }
        }
          , D = {
            sex_check: {
                title: "Chi sei?",
                sex_male: "Ragazzo",
                sex_female: "Ragazza"
            },
            staff: {
                title: "Il tuo saldo",
                button: {
                    get_premium: "Ottieni la versione Premium",
                    login: "Accedi",
                    register: "Registrati",
                    save: "Salvare",
                    send: "Inviare",
                    refill_balance: "Compra i minuti",
                    next: "Prossima",
                    upload: "Caricare",
                    yes: "Sì",
                    begin: "Inizia",
                    edit: "Modificare",
                    ok: "ОK",
                    confirm: "Confermi?",
                    enter: "Accedi",
                    back: "Dietro"
                },
                buy: "Aquistare",
                min: "min.",
                understand: "Capito",
                error: "Errore",
                all: "Tutto",
                delete: "Rimuovere",
                error_devices: {
                    already_open: "Video chat MiraMi è stato già aperto in un altro pannello.",
                    this_tab_active: "Vuoi rendere attivo questo pannello?"
                },
                days: "gorni",
                other: "Altro",
                collapse: "Chiudi"
            },
            search: {
                start: "Avviare la ricerca",
                note: "Si prega di non minimizzare lo schermo",
                your_ready: "Sei pronto?",
                process: "Ricerca di un partner in chat",
                awaiting: "In attesa"
            },
            chat: {
                type_message: "Il tuo messaggio",
                to_end: "Finire",
                is_premium: "Premium",
                add_favourite: "Aggiungi ai preferiti",
                reconnection: "Ripristino della connessione",
                connecting: "Connessione con utente...",
                your_favourite: "È stato aggiunto ai preferiti",
                time_to_end: "La sessione scade tra:"
            },
            modals: {
                login: {
                    create_account: "Registrati",
                    email: "Indirizzo e-mail",
                    password: "Password",
                    title: "Autorizzazione",
                    forgot_password: "Password dimenticata?",
                    wrong_login: "Il login o la password sono errati",
                    subtitle: "Chatti e godi"
                },
                support: {
                    title: "Support",
                    have_questions: "Fai una domanda e uno dei nostri assistenti ti risponderà in modo dettagliato il prima possibile."
                },
                register: {
                    already_have_account: "Ho già l’account",
                    title: "Rimuovi i limiti,",
                    subtitle: "Registrati!",
                    subtitle_2: "Prolunga il tuo piacere",
                    nickname: "Nome utente",
                    already_email: "Questa email è già utilizzata",
                    password_bad: "La password deve essere lunga almeno 9 carratteri.",
                    name_short: "Il nome utente troppo corto",
                    name_long: "Il nome utento troppo lungo"
                },
                present: {
                    done: "Regalare",
                    cancel: "Annula",
                    not_enough_balance_title: "ll saldo non è sufficiente",
                    title: "Inviare regalo",
                    gift_price: "Costo di un regalo",
                    consent: "Sei pronto per inviare un regalo",
                    cost: "valore di",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Regalo stato consegnato con successo!"
                },
                complaint: {
                    title: "Segnalare una violazione",
                    complaint_1: "Coinvolgimento dei minori",
                    complaint_5: "Truffo",
                    complaint_2: "Chiede un reagalo",
                    more: "Descrivi la violazione nel modo dettagliato",
                    word: "Reclamo",
                    nudity: "Nudità",
                    dont_like: "Non ti piace questo utente",
                    inappropriate_content: "Contenuto inaccettabile",
                    span_or_scam: "Spam o truffa"
                },
                success_register: {
                    title: "Sei stato registrato con successo",
                    keep_chat: "Continua a chattare con le raggazze."
                },
                present_success: {
                    title_2: "C’è un regalo per te!",
                    thanks: "Grazie!",
                    present_from: "Hai ricevuto un regalo {giver_nick}"
                },
                photo_view: {
                    text_1: "Adesso è disponibile solo agli utenti premium",
                    text_2: "Adesso è disponibile a tutti",
                    stub_only_premium: "Solo Premium"
                },
                remove_favourite: {
                    text: "Sei sicuro di voler rimuovere dai preferiti?"
                },
                remove_gallery: {
                    title: "Rimuovere",
                    text: "Sei sicuro di voler rimuovere da galleria?"
                },
                chat: {
                    value_video_chat_text: "Costo della comunicazione in chat-roulette",
                    value_direct_video_chat_text: "Costo di una chiamata personale",
                    top_up_balance_text_web: "Ricarica il saldo per continuare la conversazione"
                },
                block_user: {
                    title: "Blocco",
                    confirm_text: "Vuoi davvero bloccare questo utente?"
                },
                prohibition: {
                    title: "Sono proibiti...",
                    item_1: "Dimostrazione degli organi\ngenitali"
                },
                nudity_warning: {
                    title_1: "Fatti vedere",
                    title_2: "Solo le tue foto",
                    title_3: "Regole di decenza",
                    warning_1: "Seleziona le foto in cui puoi vedere chiaramente",
                    warning_2: "Non caricare le foto di altre persone, le cancelleremo",
                    warning_3: "Astenersi da nudità e foto oscene"
                },
                messenger_warning_limit: {
                    text_free: "Hai esaurito il tuo limite giornaliero. Diventa Premium",
                    text_prem: "Hai esaurito il tuo limite giornaliero, ora ti verrà addebitato per ogni messaggio",
                    text_anonim: "È necessario effettuare il login o registrarsi per vedere il messaggio"
                },
                liking_send: {
                    text: "Invia una simpatia al ragazzo in modo che possa contattarti"
                },
                billing: {
                    subtitle_3: "Scegli un pacchetto di diamanti",
                    subtitle_2: "Premium in regalo per sempre",
                    messages: "messaggi",
                    choose_payment: "Scegli il tuo metodo di pagamento",
                    agreement: "Effettuando questo pagamento dichiari di avere almeno 18 anni di età, di accettare i",
                    terms_conditions: "Termini di Utilizzo"
                },
                accept_years: {
                    sub_title: "Prima di accedere, confermate di aver compiuto 18 anni e accettate i termini sotto riportati:",
                    rule_1: "Confermate di aver raggiunto l'età necessaria.",
                    rule_2: "Garantite che non permetterete a minori di usare Mirami.chat.",
                    rule_3: "Garantite che ci informerete immediatamente di qualsiasi utente che ritenete essere minorenne.",
                    welcome: "Benvenuti"
                },
                rules: {
                    title: "Promemoria",
                    text_public_chats: "Chat pubbliche",
                    text_nudity: "La nudità è vietata!",
                    text_sexual_context: "Sono proibiti comportamenti con allusioni sessuali!",
                    text_private_chats: "Chat private",
                    text_free: "Puoi essere te stesso.",
                    text_moderation: "Tutte le chiamate, sia private che pubbliche, vengono moderate.",
                    text_chat_indicator: "Tieni d'occhio l'indicatore della chat, può cambiare stato.",
                    text_rules: "Regole della chat video",
                    memo: "Promemoria",
                    update_date: "Data di aggiornamento: {0}",
                    list_text_1: "Comportati come una normale ragazza single che cerca nuovi uomini con cui videochattare.",
                    list_text_2: "Assicurati che il tuo viso sia chiaramente visibile al tuo interlocutore.",
                    list_text_3: "Presta la massima attenzione all'interlocutore, scrivi sempre per primo e rispondi al ragazzo.",
                    list_text_4: "Non eseguire il multistreaming in altre chat video.",
                    list_text_5: "Seguire le regole di comportamento nei diversi tipi di chat (lo stato della chat video è contrassegnato da un'icona corrispondente accanto all'avatar dell'interlocutore):",
                    text_public_chat: "Chat pubblica",
                    text_private_chat: "Chat privata",
                    text_nudity_context: "Nudità e comportamenti sessuali* sono vietati.",
                    text_nudity_context_allowed: "Nudità e comportamenti sessuali* sono consentiti se l'interlocutore è maggiorenne e ha dato il suo consenso.",
                    text_nudity_additional: "*Il comportamento sessuale include l'esibizione dei genitali, il topless, la biancheria intima o l'abbigliamento eccessivamente rivelatore, le pose sessualmente esplicite, le carezze sul corpo, i movimenti della bocca o della lingua.",
                    text_salary: "Non dire a nessuno che qui si fanno soldi!",
                    full_rules: "Per l'elenco completo delle regole, consultare {here}",
                    here: "qui",
                    text_ban: "Se violate le regole della piattaforma, il vostro account sarà definitivamente bannato e perderete tutti i soldi guadagnati!"
                },
                requisites: {
                    text_first: "Le vostre vincite verranno accreditate sul vostro portafoglio criptografico. Per ricevere il pagamento, è necessario disporre di un portafoglio crittografico o USTD (TRC-20) su qualsiasi piattaforma.",
                    text_second: "Se non ne avete uno, si prega di crearlo registrandosi su Binance o su altre borse di criptovalute - è gratis.",
                    text_third: "Si prega di usare solo l'indirizzo USTD (TRC-20) qui. Se fornite un indirizzo incorretto, ve ne assumete la responsabilità.",
                    address_usdt: "Indirizzo USDT (TRC-20)",
                    address_usdt_error: "Questo indirizzo non appartiene a USTD (TRC-20)"
                },
                nudity_error: {
                    text: "La foto contiene nudità e non può essere caricata"
                },
                denied_camera: {
                    title_3: "La fotocamera o il microfono non sono collegati",
                    title_2: "Hai cambiato l’idea?",
                    message: "Non hai consentito l’accesso alla videocamera, le ragazze non possono vederti e quindi non puoi cominciare a chattare.",
                    message_girl: "Non hai consentito l’accesso a videocamera, ragazzi non possono vederti e quindi non puoi cominciare a chattare.",
                    restart_page: "Ricarica la pagina, consenti l’accesso a videocamera e puoi cominciare subito a chattare."
                },
                accept_camera: {
                    subtitle_2: "Consentire l'accesso alla fotocamera e al microfono",
                    title: "Una ragazza vuole vederti",
                    allow_camera_first: "L’app chiede l’accesso a microfono e videocamera per fare vederti alle ragazze.",
                    allow_camera_second: "Consenti l’accesso a microfono e videocamera e inizi la chat affascinante.",
                    allow_camera_girl_bold: "Senza videocamera non si può utilizzare la chat."
                },
                girloffline: {
                    text_3: "La ragazza è:",
                    text_4: "Usa una funzione interessante 😎"
                },
                choose_file: {
                    title: "Seleziona un file",
                    text: "La nudità è vietata. Usa solo i tuoi file multimediali che sono adatti per Instagram o TikTok.",
                    only_premium: "Solo agli utenti premium"
                },
                recovery: {
                    title: "Recupero l’accesso",
                    enter_new_password: "Recupero i dati di accesso a Mirami chat",
                    invalid_recovery_key: "Questo link per recuperare l’accesso non è valido.",
                    success: "La nuova password è stata reimpostata con successo. Ora puoi autorizzarti.",
                    sent_link: "Abbiamo inviato il link per recuperare la password a questo indirizzo: {email}. Se non hai ricevuto email, controlla l’indirizzo mail scritto o nelle cartelle spam.",
                    reset_password: "Cambiare password",
                    info_text: "Inserisci l’indirizzo mail, che hai usato per registrarti.<br/>Ti invieremo un link per cambiare la password."
                },
                model_status: {
                    title: "Stato di attività",
                    subtitle: "Guadagna di più",
                    free_user: "Con utente gratuito",
                    prem_user: "Con utente premium",
                    pay_start: "Il pagamento per chattare comincia {after}.",
                    pay_start_after: "dopo 10 secondi",
                    descr_top: "Consente alla modella di ottenere la puntata massima e avere priorità nella roulette. Si attiva {auto} dopo aver accettato una delle condizioni:",
                    descr_top_auto: "automaticamente per 20 giorni",
                    if_1: "Referral ha comprato",
                    if_2: "Il ragazzo ha comprato dopo averti parlato",
                    if_3: "La chat più lunga con premium {min}",
                    if_3_min: "> 3 minuti",
                    status_reload: "Lo stato {auto} se una delle condizioni è soddisfatta:",
                    status_reload_auto: "si prolunga automaticamente per 10 giorni"
                },
                profile: {
                    title: "Profilo",
                    affiliate: "Programma di affiliazione",
                    link: "Link",
                    count: "Quantità",
                    profit: "Profitto"
                },
                warning_activity: {
                    title: "Attenzione! È stata registrata la tua assenza nella chat.",
                    message: "Non ignorare gli interlocutori, altrimenti il sistema ti escluda dalla ricerca e ti mostra meno spesso."
                },
                add_avatar: {
                    title: "Aggiungi avatar 🫢",
                    text: "Caricate il vostro avatar prima di iniziare la ricerca di partner."
                },
                penalty_received: {
                    title: "Penalità",
                    total_penalties: "Totale penalità:",
                    first_penalty: "Questa è la tua prima violazione, quindi ti diamo la possibilità di rimediare. Ti restituiremo le monete se guadagnerai più di 20.000 monete entro 7 giorni e non infrangerai le regole.",
                    reason: "Per causa",
                    place: "Posizione",
                    comment: "Commento:",
                    screenshot: "Schermata della violazione",
                    sexual_behavior: "Comportamento sessualmente esplicito"
                },
                image_upload_error: {
                    text: "Non condividere dati personali o screenshot. Fai attenzione e comunica direttamente su Mirami.chat."
                },
                camscore: {
                    title: "Il tuo Camscore",
                    description: 'Se il tuo Camscore è "Buono" o "Eccellente", otterrai lo stato TOP e la priorità nella coda.',
                    description_undefined: "Hai effettuato meno di 500 videochat, quindi non possiamo calcolare il tuo Camscore. <br/>Per favore, trascorri più tempo nelle videochat.",
                    what_is: "Cos'è il Camscore?",
                    status: {
                        none: "Non definito",
                        terrible: "Terribile",
                        bad: "Scarso",
                        good: "Buono",
                        excellent: "Eccellente"
                    },
                    text: {
                        line_1: "Il Camscore è un punteggio che riflette la produttività complessiva e la redditività del modello sulla piattaforma.",
                        line_2: "Il Camscore viene calcolato in base ai guadagni del modello negli ultimi 7 giorni e alle chat di durata superiore ai 5 secondi. Più un modello guadagna con le chat private e i regali, più alto sarà il suo Camscore. Una volta al giorno, il punteggio viene aggiornato considerando i risultati degli ultimi sette giorni. Pertanto, l'attività del modello influisce direttamente sull'aumento o diminuzione del suo punteggio.",
                        line_3: "È importante capire che questo punteggio dipende da diversi fattori che influiscono direttamente sulla redditività del modello:",
                        line_4: "Tempo online – Più tempo il modello trascorre online interagendo con gli utenti, maggiori saranno le opportunità di guadagno.",
                        line_5: "Frequenza degli acquisti – Più gli utenti pagano per le chat private e inviano regali, più alto sarà il Camscore del modello.",
                        line_6: "Estensione delle videochat – Più frequentemente gli utenti prolungano le videochiamate con il modello, più alto sarà il punteggio. Si consiglia ai modelli di creare motivi per chiamate regolari, come spettacoli unici o conversazioni amichevoli che incoraggino gli utenti a effettuare chiamate private.",
                        line_7: "Iniziativa – Non aspettare che gli utenti facciano il primo passo. Invia messaggi e chiama attivamente per mostrare attenzione e interesse, il che motiverà gli utenti a interagire di più.",
                        line_8: "Attività e creatività – Gli utenti apprezzano un'immagine di qualità, una buona illuminazione e una comunicazione attiva, che li spinge a spendere di più.",
                        line_9: "Pertanto, maggiori sono i guadagni del modello, migliore sarà il suo Camscore, aiutandolo a posizionarsi tra i migliori della piattaforma e ad attirare ancora più utenti."
                    }
                },
                santa_top: {
                    title: "La scelta migliore di Babbo Natale 🎄",
                    text1: "Partecipa al nostro concorso natalizio e guadagna bonus extra! 🎁 In un giorno: guadagna $20 e ottieni $5, accumula $45 e ottieni $15, e con $100 guadagnerai ben $35!",
                    text2: "Trasforma i tuoi sforzi in regali generosi ❤️",
                    every_day: "✨ Ogni giorno fino al 31 dicembre",
                    launch_auto: "Si avvia automaticamente ogni giorno al tuo orario locale.",
                    stats_update: "⏰ Le statistiche vengono aggiornate ogni ~5 minuti."
                }
            },
            profile: {
                email_notifications: "Le notifiche e-mail",
                change_password: "Cambiare password",
                new_password: "Nuova password",
                repeat_password: "Ripeti la password",
                passwords_not_match: "Le password non coincidono",
                delete_account: "Eliminare l’account",
                about: "Chi sono",
                birthday: "Data di nascita",
                receive_guests: "Ricevere notifiche dagli ospiti premium",
                receive_girls: "Ricevi le notifiche quando la ragazza desiderata è online e c’è l’informazione importante per te",
                premium_btn: "Diventa Premium",
                bad_btc: "Non esiste tale BTC wallet.",
                actions: {
                    invite: "Invita a chattare",
                    start_chat: "Videochiamata",
                    remove_favourite: "Eliminare dai preferiti",
                    message: "Messaggio",
                    was_invited: "l’Invito inviato",
                    cancel_notify: "Annullare notifica",
                    notify_online: "Ricevere notifica quando lei/lui è online"
                },
                premium_descr: "Diventa utente premium e ottieni l’accesso completo a tutte le funzionalità.",
                subtitle: {
                    foto: "Foto",
                    video: "Video"
                },
                foto_descr: "Aggiungi delle tue foto che gli altri utenti possano conoscerti meglio.",
                verify_descr: "Verifica la tua identità in modo che le persone possano fidarsi di te",
                geo_button: "La tua posizione",
                geo_description: "Mostra il mio Paese",
                rp_btn: "Sono qua",
                rules: {
                    forbidden: {
                        title: "Vietato",
                        text_1: "Nudità e comportamenti con allusioni sessuali.",
                        text_2: "Usare più di 1 account",
                        text_3: "Caricare foto o video di nudo",
                        text_4: "Usare l'account di qualcun'altro.",
                        text_5: "Chiedere denaro o proporre altri metodi di pagamento.",
                        text_6: "Condividere dati personali, numeri di telefono, social network, ecc.)",
                        text_7: "Avvia una videochat con qualcuno",
                        text_8: "Utilizzare strumenti di automazione (bot, trasmettere video tramite la webcam, ecc.)",
                        text_9: "Ignorare l'interlocutore (non essere nell'inquadratura, non rispondere ai messaggi di testo, distrarsi con altre attività)"
                    },
                    allowed: {
                        title: "Permesso",
                        text_1: "Comportarsi liberamente in una chat video privata, in base a ciò che si ritiene opportuno per sé e per l'interlocutore.",
                        text_2: "Prolungare la chiamata il più possibile.",
                        text_3: "Rispondere ai messaggi e iniziare a parlare. Essere gentili, socievoli e sorridere.",
                        text_4: "Stare di fronte alla videocamera, con una buona illuminazione. Bisogna essere ben visibili.",
                        text_5: "Caricare solo le proprie foto.",
                        text_6: "Segnalare se si incontrano degli utenti minori, molestie, o un genere inappropriato.",
                        text_7: "Essere online almeno una volta al mese, altrimenti il saldo verrà azzerato."
                    },
                    warn: "Tutti i comportamenti scorretti e le violazioni sono monitorati dai moderatori e dai bot. Potresti essere disattivato o bandito in modo permanente."
                },
                queen_day: "Regina del giorno",
                queen_week: "Regina della settimana",
                queen_mirami: "Regina Mirami",
                blur_button: "Sfocare una video chat con un interlocutore",
                blur_description: "Tocca lo schermo della video chat per rimuovere lo sfocato",
                not_found_title: "Questo utente non è stato trovato",
                not_found_description: "Incontra qualcuno di nuovo adesso!",
                tab_personal: "Informazione personale",
                tab_settings: "Impostazioni dell'account",
                tab_rules: "Regolamenti",
                tg_link_1: "Il nostro",
                tg_link_2: "canale ufficiale Telegram",
                about_girl: "Sulla ragazza",
                bad_nickname: "Username deve contenere almeno 3 simboli.",
                bad_about: "Per la descrizione di te stesso sono ammessi al massimo 2.000 caratteri.",
                personal_info: "Dati personali",
                btc_wallet: "Bitcoin Wallet Totalcoin",
                phone: "(numero di telefono)",
                birthday_required: "Il campo di data di nascita è obbligatorio .",
                password_success: "La password è stata cambiata con successo.",
                my_settings: "I miei impostazioni",
                avatar_only_image: "Puoi scaricare solo in formato jpg, png.",
                avatar_file_size: "La dimensione massima del fail 2 MB.",
                undefined_avatar_problems: "Si sono verificati problemi sconosciuti durante il salvataggio di file.",
                last_visit_girl: "Ultimo accesso",
                video_descr: "Aggiungi il tuo video divertente e aumenta la tua popolarità."
            },
            main: {
                history_chat_title: "Storia della Chat",
                chat_men: "Cominciare video chat",
                h1: "MiraMi — videochat casuale con ragazze",
                h1_girl: "MiraMi — сvideochat casuale con ragazzi",
                sign_1: "Ragazze single ti aspettano online!",
                sign_2: "Vuoi chattare con una ragazza?",
                sign_2_girl: "Vuoi chattare con una bellissima ragazza?",
                camera_need: "Accedi la videocamera per avviare la ricerca di una bellissima ragazza",
                camera_need_girl: "Accedi la videocamera per avviare la ricerca."
            },
            sections: {
                affiliate: "Programma di affiliazione",
                top: "TOP Mirami",
                logout: "Uscire",
                billing: "Comprare minuti",
                billing_messages: "Acquistare messaggi",
                main: "Videochat",
                girls: "Ragazze",
                favourites: "Preferiti",
                auto_translate: "Traduzione automatica",
                gifts: "Regali"
            },
            virtual_date: {
                earn_more_money_guys: "Guadagna più soldi chattando nella Mirami!",
                invited: "invitato",
                reward: "guadagnato",
                invite_guys: "Invita ragazzi",
                invite_girls: "Invita ragazze",
                how_work: {
                    title: "Come funziona",
                    item_1: "Incontra ragazzi su qualsiasi sito di incontri.",
                    item_2: "Invitalo a chattare in videochat MiraMi.",
                    item_3: "Se gli piaci davvero lui compra facilmente l’accesso-premium per chattare con te.",
                    item_4: "{bonus} ai tuoi guadagni! Questo ospite diventa per sempre il tuo referral e tu ottieni {reward}.",
                    item_4_bonus: "Bonus aggiunto",
                    item_4_reward: "il 15% su ogni pagamento di referral."
                },
                link_guys: "Il tuo link per invitare ragazzi",
                earn_more_money_girls: "Guadagna di più iscrivendo le modelle in MiraMi!",
                invite_models: "Iscriviti le modelle e ottieni il 10% dei loro guadagni premium.",
                link_girls: "il tuo link per invitare le ragazze"
            },
            gifts: {
                title: "I miei regali",
                empty: "Non hai ancora i regali",
                from: "da {giver_nick}",
                block: "Non puoi ricevere i regali."
            },
            withdraw: {
                go: "Ritirare",
                balance: {
                    title: "Saldo",
                    info: "Informazioni",
                    rating: "Valutazione",
                    minimal_sum: "La somma minima di monete per effettuare un cambio è di {0}.",
                    any_day: "Puoi richiedere il pagamento in qualsiasi momento",
                    every_thursday: "Ogni Giovedì alle 21:00 (GTM+3) il nostro sistema ricalcola le monete che hai guadagnato. Il pagamento viene emesso di Venerdì.",
                    requisites: "Dettagli bancari.",
                    my_requisites: "I miei dati",
                    actual_info: "Tutte le informazioni rilevanti relativi ai pagamenti sono disponibili sul nostro",
                    official_channel: "canale ufficiale Telegram.",
                    withdraw: "Prelevare",
                    error_minimal_sum: "L'importo minimo di prelievo è di {0} monete"
                },
                history: {
                    title: "Storia dei pagamenti",
                    income_sum: "Entrate totali:",
                    success: "Andato a buon fine",
                    declined: "Rifiutato",
                    waiting: "In attesa"
                },
                title: "Ritiro di fondi",
                your_wallet: "Il tuo Bitcoin Wallet Totalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "La connesione internet è rallentata",
                    other: "Altro",
                    sex: "Atto sessuale",
                    nudse: "Scene di nudità",
                    absence: "Utente assente'",
                    dont_attention: "Non hai prestato attenzione all’utente",
                    video: "Utilizzo dimateriale video",
                    multi_accounts: "Utilizzo di più account",
                    alien_account: "L’uso dell’account di qualcun altro"
                },
                your_ban: "Sei stato bannato",
                what_reason: "Il tuo account è stato bloccato a causa",
                unban_time: "Giorno di sblocco:",
                infinity: "Blocco permanente",
                comment: "Commento dell’amministratore"
            },
            messenger: {
                antispam: "La chat è anonima perciò è vietato condividere recapiti e link. Potrebbero portare al blocco permanente del tuo account.",
                dialog_timer_label: "Scomparirà presto",
                dialog_male_liking_label: "😍 Alla ragazza piaci!",
                dialog_female_liking_label: "💖 Hai mandato simpatia!",
                dialog_gift_offer_label: "😉 Lei si annoia, dalle un regalo",
                dialog_message: "Regalo",
                dialog_not_support: "Non supportato",
                dialog_empty_state_female: "Non c'e ' ancora niente qui.\nSii il primo! Scrivi un messaggio!",
                dialog_empty_state_male: "Sii il primo! Scrivi un messaggio alla ragazza!",
                select_girl: "Scegliere una ragazza",
                modal_message_price_label: "Valore del messaggio",
                dialog_gift_offer_female_label: "😜 Quando si invia un regalo, lei vedrà i messaggi prima",
                dialog_gift_offer_male_label: "🤫 Sta pensando di farti un regalo. Scrivigli.",
                typing: "Scrive",
                dialog_liking_text: "Ciao, mi piaci! Facciamo due chiacchiere  🔥🔥",
                confirm_clear_history_chat: "Sei sicuro/a di voler eliminare la cronologia chat?",
                confirm_delete_chat: "Sei sicuro/a di voler eliminare la finestra di dialogo?",
                btn_clear_chat: "Elimina cronologia del chat",
                delete_dialog: "Elimina il tuo chat",
                timer_label: "Il messaggio verrà eliminato tramite...",
                timer_descr: "Questo post è disponibile solo per gli utenti Premium",
                you: "Tu:",
                sent: "Inviato",
                read: "Letto",
                title: "Messenger",
                select_dialogue: "Per cominciare a chattare,<br/>scegli un dialogo.",
                start_date: "Non hai ricevuto ancora i messaggi.<br/>Inizia a chattare con ragazze subito!",
                fill_package: "Per continuare a chattare,<br/>aggiungi i messaggi al tuo pacchetto di messaggi.",
                read_messege: "Leggi questo messaggio di una ragazza.<br/>Questo messaggio si cancella tra un’ora.",
                start_reg: "Per chattare con ragazze <br/> devi accedere o registrarti.",
                chat_with_her: "Registrati,<br/>per chattare con lei.",
                no_dialogue: "Non hai ancora i messaggi.",
                dialog_violation_label: "Immagine eliminata",
                dialog_violation_message: "L'immagine è stata eliminata perché non conforme alle regole dell'applicazione."
            },
            check_age: {
                main_title: "Verifica",
                verify_button: "Verificare"
            },
            alerts: {
                new_currency_title: "Attenzione",
                new_currency_first_label: "Ora valuta l'app",
                new_currency_second_label: "La valuta equivalente è stata accreditata sul tuo saldo",
                limit_function2: "Accesso solo agli utenti premium.",
                have_active_chat: "Stai nella chat attiva.",
                confirm: "Confermi?",
                success_payment: "Il tuo saldo è stato accreditato con successo!"
            },
            verification: {
                rule_1: "Assicurati che il documento appartenga a te e sia in buone condizioni.",
                rule_2: "Assicurati di non avere altri account, anche account respinti.",
                rule_3: "Non usare documenti falsi o alterati.",
                rule_4: "Solo il proprietario dell'account può effettuare il processo della verifica.",
                info_text_1: "Il nostro sistema rileva automaticamente un documento falso o il fatto che abbiate già un account in base al vostro volto e ai vostri dati.",
                info_text_2: "Non ignorare questi requisiti, altrimenti il tuo account verrà bloccato automaticamente .",
                info_text_3: "Se non riesci a verificare il tuo account, inviaci un'e-mail e risolveremo il problema e il tuo caso."
            },
            top_girls: {
                one_day: "Top del giorno",
                one_week: "Top della settimana",
                all_time: "Tutto il tempo",
                your_rating: "Il tuo punteggio",
                your_place: "Sei la {0}",
                yesterday_winners: "Vincitori di ieri",
                prev_week_winners: "Vincitori della scorsa settimana",
                rules_button: "Come viene creata la valutazione?",
                daily_rating: "Valutazione giornaliera",
                current_daily_rating: "La valutazione di oggi",
                weekly_rating: "La valutazione settimanale",
                current_weekly_rating: "Valutazione di questa settimana",
                all_time_rating: "Classifica di tutti i tempi",
                current_place: "Classifica attuale: {0} ({1})",
                yesterday_place: "Classifica di ieri: {0} ({1})",
                previous_week_place: "Classifica della settimana scorsa: {0} ({1})",
                rules: {
                    title: "Ottieni punti per:",
                    rule_1: "durata della chat video",
                    rule_3: "risposta positiva dalle persone con cui chatti",
                    rule_4: "aggiunta di amici e attività quotidiane",
                    rule_5: "Puoi perdere punti a causa di una risposta negativa da parte di qualcuno con cui hai chattato, per essere stato inattivo per una settimana e per un ban."
                }
            },
            boys: {
                title: "Utenti Mirami"
            },
            favourites: {
                title: "Preferiti",
                add_girls: "Aggiungi le ragazze piaciute ai preferiti per avere l’accesso rapido.",
                to_roulette: "Chat roulette",
                empty_title: "La lista dei preferiti è vuota",
                empty_text: "Aggiungi ragazzi ai preferiti per rimanere in contatto",
                added_to_favorites: "{name} è stato aggiunto ai {br}preferiti",
                you_in_favorites: "Sei stato aggiunto ai {br}preferiti"
            },
            catalog: {
                title: "Catalogo delle ragazze",
                online: "Ragazze online",
                offline: "Ragazze offline",
                only_premium: "Il catalogo completo delle nostre ragazze è disponibile solo per gli utenti premium."
            },
            history: {
                empty_title: "La tua cronologia chat è vuota.",
                empty_text: "Risolviamolo subito."
            }
        }
          , j = {
            sex_check: {
                title: "您是谁？",
                sex_male: "男人",
                sex_female: "姑娘"
            },
            staff: {
                title: "您的余额",
                button: {
                    get_premium: "获得票外价格",
                    login: "输入",
                    register: "注册",
                    save: "保存",
                    send: "发送",
                    refill_balance: "充值",
                    next: "继续",
                    upload: "下载",
                    yes: "是",
                    begin: "开始",
                    edit: "编辑",
                    ok: "好",
                    confirm: "确认",
                    enter: "输入",
                    back: "退回"
                },
                buy: "买",
                min: "分钟",
                understand: "清楚",
                error: "错误",
                all: "全部",
                delete: "删除",
                error_devices: {
                    already_open: "MiraMi 视频聊天已在另一个标签中打开。",
                    this_tab_active: "你想激活这个标签吗？"
                },
                days: "天",
                other: "其他",
                collapse: "收起"
            },
            search: {
                start: "开始寻找",
                note: "请不要收起屏幕。",
                your_ready: "准备开始吗？",
                process: "寻找聊天伙伴",
                awaiting: "等候"
            },
            chat: {
                type_message: "您的讯息",
                to_end: "结束",
                is_premium: "优先状态",
                add_favourite: "加入收藏",
                reconnection: "互联网连接的恢复",
                connecting: "与对话者联系。。。",
                your_favourite: "已加入了收藏",
                time_to_end: "结束前的时间"
            },
            modals: {
                login: {
                    create_account: "注册",
                    email: "您的电子邮件",
                    password: "您的密码",
                    title: "输入",
                    forgot_password: "忘记密码了吗？",
                    wrong_login: "写错了登录名或密码",
                    subtitle: "聊天并享受"
                },
                support: {
                    title: "技术支持",
                    have_questions: "您可以提出问题，我们的专家会尽快给出详细的答复。"
                },
                register: {
                    already_have_account: "我已经有一个帐户。",
                    title: "请开放，",
                    subtitle: "注册！",
                    subtitle_2: "延长你的乐趣",
                    nickname: "网名",
                    already_email: "此电子邮件已在使用中",
                    password_bad: "密码必须超过 8 个字符。",
                    name_short: "名字太短",
                    name_long: "名字太长"
                },
                present: {
                    done: "赠送",
                    cancel: "取消",
                    not_enough_balance_title: "经费不足",
                    title: "将礼物发送",
                    gift_price: "礼物价值",
                    consent: "您准备将礼物发送",
                    cost: "价值",
                    success_send: "礼物被发送成功！"
                },
                complaint: {
                    title: "报告违反",
                    complaint_1: "教唆未成年人",
                    complaint_5: "欺骗",
                    complaint_2: "央求礼物",
                    more: "详细地描述违规行为",
                    word: "抱怨",
                    nudity: "画面中的裸体",
                    dont_like: "不喜欢这个用户",
                    inappropriate_content: "不可接受的内容",
                    span_or_scam: "垃圾信息或诈骗"
                },
                success_register: {
                    title: "您已经成功注册了",
                    keep_chat: "继续和姑娘聊天。"
                },
                present_success: {
                    title_2: "您的礼物！",
                    thanks: "谢谢",
                    present_from: "您收到了 {giver_nick} 赠送的礼物"
                },
                photo_view: {
                    text_1: "仅适用于优先用户",
                    text_2: "所有人都可以使用",
                    stub_only_premium: "只豪华"
                },
                remove_favourite: {
                    text: "您确定想从收藏中删除吗？"
                },
                remove_gallery: {
                    title: "删除",
                    text: "您确定想从相簿中删除吗？"
                },
                chat: {
                    value_video_chat_text: "在轮盘赌聊天中交往的价值",
                    value_direct_video_chat_text: "个人电话价值",
                    top_up_balance_text_web: "充值以继续交往"
                },
                block_user: {
                    title: "屏蔽",
                    confirm_text: "您确定要屏蔽此用户吗？"
                },
                prohibition: {
                    title: "我们禁止",
                    item_1: "生殖器\n的展出"
                },
                nudity_warning: {
                    title_1: "展示你自己",
                    title_2: "只须你的照片",
                    title_3: "道德标准",
                    warning_1: "请选择能清楚地展示你的照片",
                    warning_2: "不要上传其他人的照片 -- 我们会删除它们",
                    warning_3: "请避免裸体和淫秽照片"
                },
                messenger_warning_limit: {
                    text_free: "您已使用每日限额。 成为Premium。",
                    text_prem: "您已使用每日限额，现在您将按每条消息收",
                    text_anonim: "要查看消息，您需要登录或注册"
                },
                liking_send: {
                    text: "向一个小伙子发同情，这样他就可以联系你。"
                },
                billing: {
                    subtitle_3: "请选择一套钻石",
                    subtitle_2: "永远作为礼物的豪华",
                    messages: "讯息",
                    choose_payment: "选择付款方式",
                    agreement: "通过付款，我确认我已达到法定年龄并同意以下",
                    terms_conditions: "条款和条件"
                },
                accept_years: {
                    sub_title: "在您继续之前，请确认您已年满18岁，并同意以下条款",
                    rule_1: "您确认自己已达到法定年龄。",
                    rule_2: "您保证不会允许未成年人使用Mirami.chat。",
                    rule_3: "您保证会立即通知我们任何您认为是未成年人的用户。",
                    welcome: "欢迎光临"
                },
                rules: {
                    title: "提醒",
                    text_public_chats: "公共聊天",
                    text_nudity: "不允许裸露！",
                    text_sexual_context: "禁止性相关内容",
                    text_private_chats: "私聊",
                    text_free: "您可以做自己。",
                    text_moderation: "公共和私人通话都可以进行监管。",
                    text_chat_indicator: "注意聊天内容，它可能随时改变。",
                    text_rules: "视频聊天规则",
                    memo: "提醒",
                    update_date: "更新日期： {0}",
                    list_text_1: "表现得像一个正在寻找视频聊天对象的普通单身女孩。",
                    list_text_2: "确保聊天对象能清楚看到你的脸。",
                    list_text_3: "全神贯注地关注聊天对象，总是先写信给对方，然后再回复。",
                    list_text_4: "不要在其他视频聊天中运行多流。",
                    list_text_5: "遵守不同聊天类型中的行为规则（视频聊天状态会在对话对方头像旁标注相应图标）：",
                    text_public_chat: "公开聊天",
                    text_private_chat: "私聊",
                    text_nudity_context: "禁止裸体和性行为*。",
                    text_nudity_context_allowed: "如果聊天对象达到法定年龄并同意，则允许裸体和性行为*。",
                    text_nudity_additional: "*性行为包括展示生殖器、裸露上身、穿内衣或过于暴露的衣服、摆出露骨的姿势、爱抚身体、用嘴或舌头活动。",
                    text_salary: "不要告诉任何人您在这里赚钱！",
                    full_rules: "有关规则的完整列表，请参见 {here}",
                    here: "这里",
                    text_ban: "如果您违反了平台规则，您的账户将被永久封禁，您将失去所有已赚取的资金！"
                },
                requisites: {
                    text_first: "您的收入将从您的加密钱包中提取。要收到支付，您需要在任何平台上拥有一个USDT（TRC-20）加密钱包。",
                    text_second: "如果您还没有，请通过在币安或其他加密货币交易所上注册一个帐户来创建一个-免费的。",
                    text_third: "请在此处只使用USDT（TRC-20）地址。如果您提供错误的地址，责任由您承担。",
                    address_usdt: "USDT地址（TRC-20）",
                    address_usdt_error: "此地址不属于USDT（TRC-20）"
                },
                nudity_error: {
                    text: "照片包含裸露内容，无法上传"
                },
                denied_camera: {
                    title_3: "您的相机或麦克风未连接",
                    title_2: "改变主意了吗？",
                    message: "您未允许访问您的相机，姑娘将无法看见您，因此您无法开始聊天。",
                    message_girl: "您未允许访问您的相机，男子将无法看见您，因此您无法开始聊天。",
                    restart_page: "重新加载页面，允许使用您的相机，您可以立即开始聊天。"
                },
                accept_camera: {
                    subtitle_2: "允许访问相机和麦克风",
                    title: "姑娘想见你",
                    allow_camera_first: "应用需要使用相机和麦克风，这样姑娘才能看到你。应用需要使用相机和麦克风，这样姑娘才能看到你。",
                    allow_camera_second: "请允许访问相机、麦克风并开始激动人心的聊天。",
                    allow_camera_girl_bold: "没有相机，开始聊天是行不通的。"
                },
                girloffline: {
                    text_3: "姑娘现在",
                    text_4: "使用很酷的功能😎"
                },
                choose_file: {
                    title: "选择一个文件",
                    text: "禁止裸体。 仅使用适合 Instagram 或 TikTok 的您自己的媒体文件。",
                    only_premium: "只为豪华"
                },
                recovery: {
                    title: "访问恢复",
                    enter_new_password: "对Mirami chat访问恢复",
                    invalid_recovery_key: "恢复访问的链接无效。",
                    success: "新密码已成功设置。 现在您可以登录了。",
                    sent_link: "重置密码的链接已发送到您的电子邮件 {email}。 如果您没有收到电子邮件，请检查您的电子邮件地址是否正确或垃圾邮件。",
                    reset_password: "重置密码",
                    info_text: "输入您在注册时使用的电子邮件。<br/>我们将向您发送一封带有特殊链接的电子邮件，其帮助您重置密码。"
                },
                model_status: {
                    title: "活动状态",
                    subtitle: "赚更多吧",
                    free_user: "与免费用户",
                    prem_user: "与优先用户",
                    pay_start: "{after}开始支付交往费用。",
                    pay_start_after: "10 秒后",
                    descr_top: "允许模特儿获得最高利率并在轮盘赌中拥有优先权。 从满足以下条件之一的那一刻起，状态会{auto}：",
                    descr_top_auto: "自动激活 20 天期间",
                    if_1: "转介买了",
                    if_2: "和你聊天后男人买了",
                    if_3: "与优先用户连续聊天 {min}",
                    if_3_min: "> 3 分钟",
                    status_reload: "从满足以下条件之一的那一刻起，状态会{auto}：",
                    status_reload_auto: "自动延长 10 天期间"
                },
                profile: {
                    title: "资料",
                    affiliate: "转介的 程序",
                    link: "链接",
                    count: "数量",
                    profit: "利润"
                },
                warning_activity: {
                    title: "注意！ 聊天中有人缺席。",
                    message: "不要忽略对话者，否则系统会将您排除在搜索之外，并且会显示您少见。"
                },
                add_avatar: {
                    title: "添加头像",
                    text: "在开始搜索合作伙伴之前，请上传您的头像。"
                },
                penalty_received: {
                    title: "处罚",
                    total_penalties: "处罚总数：",
                    first_penalty: "这是您第一次违规，我们给您一次改正的机会。如果您在 7 天内赚取超过 20,000 个金币并且没有违规，我们将返还您的金币。",
                    reason: "原因",
                    place: "地点",
                    comment: "评论：",
                    screenshot: "违规截图",
                    sexual_behavior: "露骨性行为"
                },
                image_upload_error: {
                    text: "不要分享个人信息或屏幕截图。请注意，直接在 Mirami.chat 上交流。"
                },
                camscore: {
                    title: "您的Camscore",
                    description: "如果您的Camscore为“良好”或“优秀”，您将获得TOP状态和队列优先权。",
                    description_undefined: "您进行了少于500次视频聊天，因此我们无法计算您的Camscore。<br/>请多花时间进行视频聊天。",
                    what_is: "什么是Camscore？",
                    status: {
                        none: "未定义",
                        terrible: "糟糕",
                        bad: "差劲",
                        good: "良好",
                        excellent: "优秀"
                    },
                    text: {
                        line_1: "Camscore是反映模特在平台上的整体生产力和盈利能力的评分。",
                        line_2: "Camscore根据过去7天的收入和超过5秒的聊天时间计算。模特通过私人聊天和礼物赚得越多，Camscore就越高。每天会根据最新的7天结果重新计算评分。因此，模特的活动直接影响评分的上升或下降。",
                        line_3: "这个评分取决于几个直接影响模特盈利能力的因素：",
                        line_4: "在线时间：模特在线时间越长并积极与用户互动，赚取的机会就越多。",
                        line_5: "用户购买频率：用户为私人聊天和发送礼物支付的越多，模特的Camscore就越高。",
                        line_6: "延长视频聊天：用户延长视频通话的次数越多，评分就越高。建议模特提供理由促进定期通话，例如独特的表演或友好聊天。",
                        line_7: "主动性：不要等待用户先采取行动。主动发送消息或发起通话，显示出关心和兴趣，这会激励用户更多地与模特互动。",
                        line_8: "积极性和创造力：用户喜欢高质量的画面、良好的灯光和积极的沟通，这会激励他们花费更多。",
                        line_9: "因此，模特的收入越高，她的Camscore就越好，这有助于她在平台中占据一席之地并吸引更多用户。"
                    }
                },
                santa_top: {
                    title: "圣诞老人特别推荐 🎄",
                    text1: "参与我们的圣诞比赛，赚取额外奖金！🎁 在一天内：赚取$20即可获得$5，累积$45可获得$15，达到$100则可获得整整$35！",
                    text2: "把你的努力变成丰厚的礼物 ❤️",
                    every_day: "✨ 每天直到12月31日",
                    launch_auto: "每天会根据您的本地时间自动启动。",
                    stats_update: "⏰ 统计数据大约每5分钟更新一次。"
                }
            },
            profile: {
                email_notifications: "电子邮件通知",
                change_password: "更改密码",
                new_password: "新的密码",
                repeat_password: "确认密码",
                passwords_not_match: "密码不匹配。",
                delete_account: "注销账号",
                about: "关于自己",
                birthday: "出生年月",
                receive_guests: "接收来自优先客人的通知。",
                receive_girls: "当合适的姑娘在线并且有对您很重要的信息时收到通知。",
                premium_btn: "成为优先用",
                bad_btc: "没有这样的 BTC 钱包。",
                actions: {
                    invite: "邀请参加聊天",
                    start_chat: "视频通话",
                    remove_favourite: "从收藏夹中移除",
                    message: "信息",
                    was_invited: "邀请已发送",
                    cancel_notify: "取消通知",
                    notify_online: "在线时通知"
                },
                premium_descr: "成为优先用户并获得对所有功能的完全访问。",
                subtitle: {
                    foto: "照片",
                    video: "视频"
                },
                foto_descr: "添加照片，以便用户更好地了解您。",
                verify_descr: "确认您的身份，以人们能信任您。",
                geo_button: "我的地理数据",
                geo_description: "显示我的国家",
                rp_btn: "我在这",
                rules: {
                    forbidden: {
                        title: "禁止",
                        text_1: "公共聊天中的裸露和性相关内容",
                        text_2: "使用多个帐户。",
                        text_3: "上传裸照或视频。",
                        text_4: "使用他人的帐户。",
                        text_5: "索要钱或提供其他付款方式。",
                        text_6: "分享个人数据（电话号码，社交网络等）。",
                        text_7: "与某人进行视频聊天。",
                        text_8: "使用自动化（机器人，通过网络摄像头广播视频等）。",
                        text_9: "忽略聊天对象（不在画面中、不回复文字消息、分心做其他事情）"
                    },
                    allowed: {
                        title: "允许",
                        text_1: "在私人视频聊天中自由行动，无论对您和对方来说都感到舒适。",
                        text_2: "尽可能延长通话时间。",
                        text_3: "回复消息并开始交谈。友善、善于交际并微笑。",
                        text_4: "面向摄像头，照明良好。您必须清晰可见。",
                        text_5: "只上传您自己的照片。",
                        text_6: "遇到未成年人、骚扰或不恰当性别时，请举报用户。",
                        text_7: "至少每月上线一次，否则余额将重置为零。"
                    },
                    warn: "所有不当行为和违规行为都将由管理员和机器人监控。您可能会被罚款或永久禁止。"
                },
                queen_day: "今日女王",
                queen_week: "本周女王",
                queen_mirami: "Mirami女王",
                blur_button: "使用模糊效果使视频聊天与对话者模糊",
                blur_description: "点击视频聊天屏幕以去除模糊效果",
                not_found_title: "找不到此用户",
                not_found_description: "现在认识一个新的人！",
                tab_personal: "个人资料",
                tab_settings: "帐户设置",
                tab_rules: "规矩",
                tg_link_1: "我们的",
                tg_link_2: "官方Telegram频道",
                about_girl: "关于姑娘",
                bad_nickname: "网名必须至少包含 3 个字符。",
                bad_about: "关于您自己的最大字符数为 2000。",
                personal_info: "私人数据",
                btc_wallet: "Totalcoin比特币钱包",
                phone: "（电话号码 ）",
                birthday_required: "出生日期字段是必需的。",
                password_success: "密码更改成功。",
                my_settings: "我的设置",
                avatar_only_image: "您只能下载 jpg、png。",
                avatar_file_size: "最大文件大小为 2MB。",
                undefined_avatar_problems: "保存文件时出现未知问题。",
                last_visit_girl: "上线了",
                video_descr: "添加您的有趣视频以增加您的知名度。"
            },
            main: {
                history_chat_title: "往来历史",
                chat_men: "开始视频聊天",
                h1: "MiraMi - 与姑娘随机视频聊天",
                h1_girl: "MiraMi - 与男人随机视频聊天",
                sign_1: "孤独的陌生人在线等你！",
                sign_2: "你想找一个女对话人吗？",
                sign_2_girl: "你想找一个男对话人吗？",
                camera_need: "打开相机开始寻找陌生的女人。",
                camera_need_girl: "打开相机开始寻找"
            },
            sections: {
                affiliate: "转介的程序",
                top: "Mirami排行榜",
                logout: "退出",
                billing: "买分钟",
                billing_messages: "买讯息",
                main: "视频聊天",
                girls: "姑娘",
                favourites: "收藏",
                auto_translate: "自动翻译",
                gifts: "礼物"
            },
            virtual_date: {
                earn_more_money_guys: "通过在 MiraMi 上见面赚更多的钱！",
                invited: "邀请了",
                reward: "已挣钱的",
                invite_guys: "邀请男人",
                invite_girls: "邀请姑娘",
                how_work: {
                    title: "活动规则",
                    item_1: "在任何约会网站、社交网络等上认识男人。 通过调情和表示您的照片激发他们的兴趣。",
                    item_2: "您已经使男人发疯时，建议他展示自己并通过 MiraMi 视频聊天交往，向他发送你房间的链接。",
                    item_3: "如果他真的喜欢你，他会很容易地购买优先访问权限，只与你度过时间。",
                    item_4: "对您的收入的{bonus}! 这位客人将永远成为您的转介，每次他购买您将{reward}.",
                    item_4_bonus: "宏利",
                    item_4_reward: "15%获得"
                },
                link_guys: "为了邀请男人您的链接",
                earn_more_money_girls: "邀请姑娘参加 MiraMi 赚更多的钱！",
                invite_models: "邀请模特儿并获得她奖金收入的 10%。",
                link_girls: "为了邀请姑娘您的链接"
            },
            gifts: {
                title: "我的礼物",
                empty: "您目前没有礼物。",
                from: "{giver_nick} 从",
                block: "您不能接受礼物。"
            },
            withdraw: {
                go: "提取",
                balance: {
                    title: "余额",
                    info: "信息",
                    rating: "评级",
                    minimal_sum: "交换的最低硬币数量为{0}。",
                    any_day: "您可以在任何一天申请提款。",
                    every_thursday: "每周四晚上21:00（GMT+3），我们的系统会重新计算您赚取的硬币。付款将在星期五进行。",
                    requisites: "银行详细信息",
                    my_requisites: "我的详细信息",
                    actual_info: "有关支付的所有相关信息均可在我们",
                    official_channel: "在Telegram的官方频道中找到。",
                    withdraw: "提款",
                    error_minimal_sum: "最低提款金额为{0}个硬币"
                },
                history: {
                    title: "支付历史",
                    income_sum: "总收入：",
                    success: "成功",
                    declined: "拒绝",
                    waiting: "待定"
                },
                title: "提取资金",
                your_wallet: "您的Totalcoin比特币钱包"
            },
            ban: {
                reason: {
                    bad_connection: "不良结合",
                    other: "别的",
                    sex: "性活动",
                    nudse: "画面中的裸体",
                    absence: "画面中的缺席",
                    dont_attention: "对话者没有注意",
                    video: "视频资料的使用",
                    multi_accounts: "使用几个帐户",
                    alien_account: "使用别人的账户"
                },
                your_ban: "您被封号了",
                what_reason: "您的帐户被屏蔽的原因",
                unban_time: "释放的日期",
                infinity: "永远",
                comment: "来自管理程序的评论"
            },
            messenger: {
                antispam: "聊天是匿名的，所以禁止分享任何联系方式和链接。 今后的尝试将导致您的帐户被永久禁止。",
                dialog_timer_label: "很快就会消失",
                dialog_male_liking_label: "😍 一个女孩喜欢你！",
                dialog_female_liking_label: "💖 您发来了同情！",
                dialog_gift_offer_label: "😉 她很无聊，送个礼物",
                dialog_message: "礼物",
                dialog_not_support: "不支持",
                dialog_empty_state_female: "这里还没有任何内容。\n成为第一个！ 写一个信息！",
                dialog_empty_state_male: "成为第一！ 给女孩写一个信息或送礼物！",
                select_girl: "选择一个女孩",
                modal_message_price_label: "一条消息的价格",
                dialog_gift_offer_female_label: "😜 如果你送礼物，她会先看到你的消息",
                dialog_gift_offer_male_label: "🤫 他正在考虑送你一个礼物。 给他写消息吧",
                typing: "正在打印中",
                dialog_liking_text: "你好，我喜欢你！ 我们来聊天🔥🔥",
                confirm_clear_history_chat: "您确定要清除聊天记录吗？",
                confirm_delete_chat: "您确定要删除对话框吗？",
                btn_clear_chat: "清除聊天记录",
                delete_dialog: "删除聊天",
                timer_label: "信息会被删除",
                timer_descr: "此消息仅适用于高级用户。",
                you: "您：",
                sent: "发送的",
                read: "阅读的",
                title: "聊天工具",
                select_dialogue: "选择一个对话<br/>来开始交往。",
                start_date: "您还没有任何消息。<br/>现在就开始和姑娘认识吧！",
                fill_package: "请补充消息一包<br/>来继续交往。",
                read_messege: "阅读姑娘的消息。<br/>一小时后其删除。",
                start_reg: "要与女生聊天 <br/> 您需要登录或注册。",
                chat_with_her: "请注册来<br/>与她聊天。",
                no_dialogue: "您还没有任何消息。",
                dialog_violation_label: "图片删除",
                dialog_violation_message: "由于图片不符合应用程序规则，已删除该图片。"
            },
            check_age: {
                main_title: "验证",
                verify_button: "验证"
            },
            alerts: {
                new_currency_title: "注意",
                new_currency_first_label: "现在应用的货币",
                new_currency_second_label: "等额已算入您的余额。",
                limit_function2: "只优先用户有访问。",
                have_active_chat: "您正在积极聊天。",
                confirm: "你确定吗？",
                success_payment: "您的余额已成功充值！"
            },
            verification: {
                rule_1: "确保文件是您自己的且处于良好状态。",
                rule_2: "确保您没有其他帐户，即使是已被拒绝的。",
                rule_3: "不要使用伪造或篡改的文件。",
                rule_4: "只有帐户所有者可以进行验证过程。",
                info_text_1: "我们的系统将根据您的面部和数据自动检测到伪造文件或您已经拥有一个帐户的事实。",
                info_text_2: "不要忽略这些要求，否则您的帐户将自动被阻止。",
                info_text_3: "如果您的帐户无法成功验证，请给我们发送电子邮件，我们将解决问题和您的情况。"
            },
            top_girls: {
                one_day: "今日排行榜",
                one_week: "本周排行榜",
                all_time: "历史排行榜",
                your_rating: "您的评级",
                your_place: "您排名第{0}",
                yesterday_winners: "昨天的获胜者",
                prev_week_winners: "上周的获胜者",
                rules_button: "排名是如何创建的？",
                daily_rating: "每日排名",
                current_daily_rating: "今日排名",
                weekly_rating: "每周排名",
                current_weekly_rating: "本周排名",
                all_time_rating: "历史排名",
                current_place: "当前排名:{0} ({1})",
                yesterday_place: "昨日排名:{0} ({1})",
                previous_week_place: "上周排名:{0} ({1})",
                rules: {
                    title: "您可以获得以下方面的积分：",
                    rule_1: "视频聊天持续时间",
                    rule_3: "与你聊天的人给的好评",
                    rule_4: "添加为好友和日常活动",
                    rule_5: "你可能会因为与你聊天的人给的差评、一周的不活跃以及禁令而失分。"
                }
            },
            boys: {
                title: "Mirami用户"
            },
            favourites: {
                title: "收藏",
                add_girls: "将您喜欢的姑娘添加到您的收藏列表中，以便快速访问她们。",
                to_roulette: "轮盘赌聊天",
                empty_title: "收藏列表为空",
                empty_text: "将男生添加到收藏，以保持联系",
                added_to_favorites: "{name} 已添加到{br}收藏夹",
                you_in_favorites: "你已被添加到{br}收藏夹"
            },
            catalog: {
                title: "姑娘目录",
                online: "姑娘在线",
                offline: "姑娘离线",
                only_premium: "只优先用户有我们姑娘的完整目录的访问。"
            },
            history: {
                empty_title: "您的聊天记录是空的。",
                empty_text: "让我们立即修复它。"
            }
        }
          , q = {
            sex_check: {
                title: "Quem é você?",
                sex_male: "Senhore",
                sex_female: "Senhora"
            },
            staff: {
                title: "Vosso saldo",
                button: {
                    get_premium: "Obter premium",
                    login: "Entrar",
                    register: "Registro",
                    save: "Salvar",
                    send: "Enviar",
                    refill_balance: "Reabastecer saldo",
                    next: "Seguinte",
                    upload: "Carregar",
                    yes: "Sim",
                    begin: "Começar",
                    edit: "Mudar",
                    ok: "Ok",
                    confirm: "Confirmar",
                    enter: "Entrar",
                    back: "Voltar"
                },
                buy: "Comprar",
                min: "min",
                understand: "Percebi",
                error: "Erro",
                all: "Todos",
                delete: "Eliminar",
                error_devices: {
                    already_open: "A chat de vídeo MiraMi foi aberta em outra guia.",
                    this_tab_active: "Deseja tornar esta guia ativa?"
                },
                days: "dias",
                other: "Outros",
                collapse: "Fechar"
            },
            search: {
                start: "Começar pesquisa",
                note: "Por favor, não vire a tela.",
                your_ready: "Pronto para começar ?",
                process: "Pesquisa de parceiro",
                awaiting: "Esperamos"
            },
            chat: {
                type_message: "Vossa mensagem",
                to_end: "Concluir",
                is_premium: "Premium",
                add_favourite: "Adicionar ao favorito",
                reconnection: "Reconexão",
                connecting: "conexão com o companheiro…",
                your_favourite: "Adicionado ao favorito",
                time_to_end: "Fim do tempo"
            },
            modals: {
                login: {
                    create_account: "Registro",
                    email: "Vosso email",
                    password: "Vosso padrão",
                    title: "Entrar",
                    forgot_password: "Esqueceu-se da password?",
                    wrong_login: "Login ou password incorreta",
                    subtitle: "Conversa e aproveita"
                },
                support: {
                    title: "Apoio",
                    have_questions: "Você pode fazer uma pergunta e nossos especialistas tentarão dar uma resposta detalhada o mais rápido possível."
                },
                register: {
                    already_have_account: "Já tenho conta",
                    title: "Remove as limitações",
                    subtitle: "Registra-te",
                    subtitle_2: "Prolonga o seu prazer",
                    nickname: "Nick",
                    already_email: "Este e-mail já é usado",
                    password_bad: "A password tem que conter mais de 8 caracteres",
                    name_short: "Nome curto demais",
                    name_long: "Nome comprido demais"
                },
                present: {
                    done: "Oferecer",
                    cancel: "Cancelar",
                    not_enough_balance_title: "Saldo insuficiente",
                    title: "Enviar presente",
                    gift_price: "Custo do presente",
                    consent: "Esta pronto para enviar presente?",
                    cost: "Custo",
                    smart_line: "{consent} {gift} {cost} {costGift} {min}",
                    success_send: "Presente enviado com sucesso!"
                },
                complaint: {
                    title: "Denunciar uma violação",
                    complaint_1: "Envolvimento infantil",
                    complaint_5: "Decepção",
                    complaint_2: "Pede presente",
                    more: "Descreva em detalhes a violação",
                    word: "Queixa",
                    nudity: "Nudez",
                    dont_like: "Não gosta deste usuário",
                    inappropriate_content: "Conteúdo inaceitável",
                    span_or_scam: "Spam ou fraude"
                },
                success_register: {
                    title: "Sucessamente registrado",
                    keep_chat: "Continue conversar com as mulheres"
                },
                present_success: {
                    title_2: "Presente para si",
                    thanks: "Obrigado(a)",
                    present_from: "você recebeu um presente de {giver_nick}"
                },
                photo_view: {
                    text_1: "Disponivel so para usario premium",
                    text_2: "Disponivel para todos",
                    stub_only_premium: "So premium"
                },
                remove_favourite: {
                    text: "Tem a certeza que deseja eliminar do favorito?"
                },
                remove_gallery: {
                    title: "Eliminar",
                    text: "Tem a certeza que deseja eliminar da galeria?"
                },
                chat: {
                    value_video_chat_text: "Custo da conversa no chat roleta",
                    value_direct_video_chat_text: "Custo da chamada pessoal",
                    top_up_balance_text_web: "Carregue o saldo para continuar a conversa"
                },
                block_user: {
                    title: "Bloquear",
                    confirm_text: "Tem certeza de que deseja bloquear este usuário?"
                },
                prohibition: {
                    title: "São proibidos",
                    item_1: "Demonstração de\nórgãos genitais"
                },
                nudity_warning: {
                    title_1: "Mostre-se",
                    title_2: "Só suas fotos",
                    title_3: "Regras de propriedade",
                    warning_1: "Escolhe fotos que mostrem-lhe claramente",
                    warning_2: "Não carregue fotos de outras pessoas - nós as removeremos",
                    warning_3: "Abster-se de nudez e fotos obscenas"
                },
                messenger_warning_limit: {
                    text_free: "Você gastou seu limite diário. Torne-se Premium.",
                    text_prem: "Você gastou seu limite diário, agora será cobrado por mensagem",
                    text_anonim: "Para visualizar a mensagem você precisa fazer login ou registrar-se"
                },
                liking_send: {
                    text: "Mande simpatia ao senhor para ele entrar em contato com você."
                },
                billing: {
                    subtitle_3: "Escolhe o pacote de diamantes",
                    subtitle_2: "Premium como presente para sempre",
                    messages: "mensagens",
                    choose_payment: "Escolha o metodo de pagamento",
                    agreement: "Ao efetuar pagamento, confirmo minha idade, concordo com",
                    terms_conditions: "termos e condições"
                },
                accept_years: {
                    sub_title: "Antes de entrar, confirme que você é maior de 18 anos e que concorda com os termos e condições abaixo:",
                    rule_1: "Você confirma que atingiu a maioridade.",
                    rule_2: "Você garante que não permitirá que menores de idade usem o Mirami.chat.",
                    rule_3: "Você garante que nos notificará imediatamente sobre qualquer usuário que acredite ser menor de idade.",
                    welcome: "Bem vindo"
                },
                rules: {
                    title: "Lembrete",
                    text_public_chats: "Chats públicos",
                    text_nudity: "Nudez é proibida!",
                    text_sexual_context: "Comportamento que implique um contexto sexual é proibido!",
                    text_private_chats: "Chats privados",
                    text_free: "Você pode se comportar livremente.",
                    text_moderation: "Todas as chamadas, públicas e privadas, são moderadas.",
                    text_chat_indicator: "Observe o indicador de bate-papo com atenção, ele pode mudar seu estado.",
                    text_rules: "Regras de bate-papo por vídeo",
                    memo: "Lembrete",
                    update_date: "Data de atualização: {0}",
                    list_text_1: "Aja como uma rapariga solteira normal que está à procura de novos homens para conversar por vídeo.",
                    list_text_2: "Certifique-se de que o seu rosto está claramente visível para o seu interlocutor.",
                    list_text_3: "Preste toda a atenção ao parceiro de conversa, escreva sempre primeiro e responda ao rapaz.",
                    list_text_4: "Não faça multistreaming noutras conversas de vídeo.",
                    list_text_5: "Siga as regras de comportamento nos diferentes tipos de conversação (o estado da conversação por vídeo é assinalado com um ícone correspondente junto ao avatar do interlocutor):",
                    text_public_chat: "Conversa pública",
                    text_private_chat: "Conversa privada",
                    text_nudity_context: "A nudez e o comportamento sexual* são proibidos.",
                    text_nudity_context_allowed: "A nudez e o comportamento sexual* são permitidos se o parceiro de conversação for maior de idade e tiver dado o seu consentimento.",
                    text_nudity_additional: "*O comportamento sexual inclui a exibição dos genitais, topless, roupa interior ou roupa demasiado reveladora, poses sexualmente explícitas, carícias corporais, movimentos da boca ou da língua.",
                    text_salary: "Não digas a ninguém que ganhas dinheiro aqui!",
                    full_rules: "Para obter a lista completa de regras, consulte {here}",
                    here: "aqui",
                    text_ban: "Se violar as regras da plataforma, a sua conta será permanentemente banida e perderá todo o dinheiro que ganhou!"
                },
                requisites: {
                    text_first: "A receita que você recebe será transferida para sua carteira criptográfica. Para receber o dinheiro que você ganha, você precisa ter uma carteira criptográfica USDT (TRC-20) em qualquer plataforma.",
                    text_second: "Se você não possui uma carteira criptográfica, pode registrar uma gratuitamente: Binance, etc.",
                    text_third: "Por favor, use apenas o endereço USDT (TRC-20) aqui. Se você fornecer um endereço incorreto, você é o único responsável.",
                    address_usdt: "Endereço USDT (TRC-20)",
                    address_usdt_error: "Este endereço não pertence ao USDT (TRC-20)"
                },
                nudity_error: {
                    text: "A foto que você carregou contém nudez e, portanto, não pode ser carregada"
                },
                denied_camera: {
                    title_3: "Sua câmera ou microfone não está disponível",
                    title_2: "Mudou de ideia?",
                    message: "Você não permitiu o acesso à sua câmera, as senhoras não poderão vê-lo, então você não pode iniciar a conversa.",
                    message_girl: "você não permitiu o acesso à sua câmera, os senhores não poderão vê-lo, então você não pode iniciar a conversa.",
                    restart_page: "Recarregue a página, permita o uso de sua câmera e você pode começar a conversar imediatamente."
                },
                accept_camera: {
                    subtitle_2: "Conceda acesso à sua câmera e microfone",
                    title: "A senhora deseja te ver",
                    allow_camera_first: "O aplicativo precisa de acesso a camera e ao microfone para que as senhoras possam ve-lo.",
                    allow_camera_second: "Permita o acesso a camera, microfone e inicie a conversa emocionante.",
                    allow_camera_girl_bold: "Sem camera e impossivel comecar."
                },
                girloffline: {
                    text_3: "Senhora agora",
                    text_4: "Usa uma função melhor 😎"
                },
                choose_file: {
                    title: "Escolher arquivo",
                    text: "Nudez e proibida. Use apenas seus materiais que sejam adequados para Instagram ou tiktok.",
                    only_premium: "So premium"
                },
                recovery: {
                    title: "recuperação de acesso",
                    enter_new_password: "recuperação de acesso ao Mirami chat",
                    invalid_recovery_key: "Link para a recuperação de acesso invalido",
                    success: "Nova passworde definida com sucesso. Agora você pode fazer login.",
                    sent_link: "Um link para restaurar sua password foi enviado para seu e-mail {email}. Se você não recebeu um e-mail, verifique se seu endereço de e-mail está correto ou no spam.",
                    reset_password: "Redefenir password.",
                    info_text: "Digite o e-mail que você usou durante o registro.<br/>Enviaremos um e-mail com um link especial que o ajudar a redefinir sua password."
                },
                model_status: {
                    title: "Status de ativação",
                    subtitle: "Ganha mais",
                    free_user: "Com utilizador gratis",
                    prem_user: "Com utilizador premium",
                    pay_start: "O pagamento de conversa come?a {after}.",
                    pay_start_after: "apois 10 segundos",
                    descr_top: "permite que o modelo receba a aposta máxima e tenha um problema prioritário na roleta. é ativado {auto} a partir do momento em que uma das condições é  atendida",
                    descr_top_auto: "automaticamente por 20 dias",
                    if_1: "Referência comprada",
                    if_2: "O senhore comprou, apois a conversa contigo",
                    if_3: "Conversa prolongada com premium {min}",
                    if_3_min: "> 3 minutos",
                    status_reload: "O status{auto} se uma das condições for atendida:",
                    status_reload_auto: "? prolongado automaticamente por 10 dias"
                },
                profile: {
                    title: "Perfil",
                    affiliate: "Programa de referência",
                    link: "Link",
                    count: "Quantidade",
                    profit: "Lucro"
                },
                warning_activity: {
                    title: "atenção! foi registrada ausência no chat",
                    message: "não ignore os interlocutores caso contrário o sistema irá excluí-lo da pesquisa e mostrar-lhe-á com menos frequência."
                },
                add_avatar: {
                    title: "Adicionar avatar",
                    text: "Carregue o seu avatar antes de começar a procurar parceiros."
                },
                penalty_received: {
                    title: "Penalidade",
                    total_penalties: "Total de penalidades:",
                    first_penalty: "Esta é a tua primeira violação, por isso damos-te uma oportunidade de corrigires a situação. Devolveremos as tuas moedas se ganhares mais de 20.000 moedas em 7 dias e não violares as regras.",
                    reason: "Causa",
                    place: "Localização",
                    comment: "Comentário",
                    screenshot: "Captura de ecrã da violação",
                    sexual_behavior: "Comportamento sexualmente explícito"
                },
                image_upload_error: {
                    text: "Não compartilhe dados pessoais ou capturas de tela. Seja cuidadoso e comunique-se diretamente no Mirami.chat."
                },
                camscore: {
                    title: "Seu Camscore",
                    description: 'Se o seu Camscore for "Bom" ou "Excelente", você receberá o status TOP e prioridade na fila.',
                    description_undefined: "Você realizou menos de 500 videochamadas, por isso não podemos calcular seu Camscore. <br/>Por favor, passe mais tempo em videochamadas.",
                    what_is: "O que é Camscore?",
                    status: {
                        none: "Não definido",
                        terrible: "Horrível",
                        bad: "Ruim",
                        good: "Bom",
                        excellent: "Excelente"
                    },
                    text: {
                        line_1: "O Camscore é uma classificação que reflete a produtividade geral e a lucratividade do modelo na plataforma.",
                        line_2: "O Camscore é calculado com base nos ganhos do modelo nos últimos 7 dias e nas chamadas com duração superior a 5 segundos. Quanto mais o modelo ganhar com chats privados e presentes, maior será o Camscore. Diariamente, a classificação é recalculada considerando os resultados dos últimos sete dias. Assim, a atividade do modelo impacta diretamente no aumento ou diminuição de sua classificação.",
                        line_3: "É importante entender que este indicador depende de vários fatores que afetam diretamente a lucratividade do modelo:",
                        line_4: "Tempo online - Quanto mais tempo o modelo passar online e interagir ativamente com os usuários, mais oportunidades de ganho terá.",
                        line_5: "Frequência de compras - Quanto mais os usuários pagarem por chats privados e enviarem presentes, maior será o Camscore do modelo.",
                        line_6: "Extensão das videochamadas - Quanto mais vezes os usuários prolongarem as chamadas com o modelo, maior será a classificação. Recomenda-se que o modelo crie razões para chamadas regulares, como shows exclusivos ou conversas amigáveis que incentivem os usuários a fazer chamadas privadas.",
                        line_7: "Iniciativa - Não espere que os usuários deem o primeiro passo. Envie mensagens e ligue ativamente para mostrar atenção e interesse, incentivando os usuários a interagir mais.",
                        line_8: "Atividade e criatividade - Os usuários valorizam uma imagem de qualidade, boa iluminação e comunicação ativa, o que pode motivá-los a gastar mais.",
                        line_9: "Assim, quanto maiores os ganhos do modelo, melhor será o seu Camscore, ajudando-o a se destacar no topo da plataforma e atrair ainda mais usuários."
                    }
                },
                santa_top: {
                    title: "A melhor escolha do Papai Noel 🎄",
                    text1: "Participe do nosso concurso de Natal e ganhe bônus extras! 🎁 Em um dia: ganhe $20 e receba $5, acumule 45 e receba $15, e com $100 você receberá incríveis $35!",
                    text2: "Transforme seus esforços em presentes generosos ❤️",
                    every_day: "✨ Diariamente até 31 de dezembro",
                    launch_auto: "Inicia automaticamente todos os dias no seu horário local.",
                    stats_update: "⏰ As estatísticas são atualizadas a cada ~5 minutos."
                }
            },
            profile: {
                email_notifications: "Notificações por e-mail",
                change_password: "Alterar password",
                new_password: "Nova password",
                repeat_password: "Repita a password",
                passwords_not_match: "As passwordes nao correspondem.",
                delete_account: "Eliminar conta",
                about: "Sobre mim",
                birthday: "Data de nascimento",
                receive_guests: "Receba notificações de pessoas premium.",
                receive_girls: "Seja notificado quando a senhora certa estiver online e houver importante para você.",
                premium_btn: "Tornar-se premium",
                bad_btc: "Nao existe tal carteira BTC.",
                actions: {
                    invite: "Convidar para conversar",
                    start_chat: "Chamada de video",
                    remove_favourite: "Remover dos favoritos",
                    message: "Mensagem",
                    was_invited: "Convido enviado",
                    cancel_notify: "Cancelar notificação",
                    notify_online: "Notificar quando estiver online"
                },
                premium_descr: "Torne-se um utilizadore premium e tenha acesso total a todas as funções",
                subtitle: {
                    foto: "Fotos",
                    video: "Video"
                },
                foto_descr: "Adicione fotos para que os utilizadores possam conhece-lo melhore.",
                verify_descr: "Verifique sua identidade para que as pessoas possam confiar em você.",
                geo_button: "Meus dados geográficos",
                geo_description: "Mostrar meu país",
                rp_btn: "Estou aqui",
                rules: {
                    forbidden: {
                        title: "Proibido",
                        text_1: "Nudez e qualquer comportamento de natureza sexual em um chat público.",
                        text_2: "Usar mais de 1 conta.",
                        text_3: "Carregar fotos ou vídeos nus.",
                        text_4: "Use a conta de outra pessoa.",
                        text_5: "Pedir dinheiro ou oferecer outro meio de pagamento.",
                        text_6: "Partilha de dados pessoais (telefones, redes sociais, etc.).",
                        text_7: "Participação em um bate-papo por vídeo com um terceiro que não seja você.",
                        text_8: "Use automação (bots, vídeo de webcam, etc.).",
                        text_9: "Ignorar o parceiro de conversa (não estar no quadro, não responder às mensagens de texto, se distrair com outras coisas)"
                    },
                    allowed: {
                        title: "Permitido",
                        text_1: "Comporte-se livremente em um chat de vídeo privado, o confortável para você e seu interlocutor.",
                        text_2: "para estender a duração da chamada o máximo possível.",
                        text_3: "Responda às mensagens e comece a conversar. Seja gentil, sociável e sorria.",
                        text_4: "Use na frente da câmera, boa iluminação. Você deve ser visto da forma mais clara possível.",
                        text_5: "Carregue apenas suas fotos.",
                        text_6: "Denuncie esses usuários se você encontrar menores de idade, assédio ou gênero impróprio.",
                        text_7: "Esteja online pelo menos uma vez por mês, caso contrário, seu saldo será zerado."
                    },
                    warn: "Todas as violações são registradas por moderadores e bots. Você pode ser multado ou banido permanentemente."
                },
                queen_day: "Rainha do dia",
                queen_week: "Rainha da semana",
                queen_mirami: "Rainha Mirami",
                blur_button: "Desfocar de vídeo com um interlocutor",
                blur_description: "Toque na tela do chat de vídeo para remover o desfoque",
                not_found_title: "Este usuário não foi encontrado",
                not_found_description: "Conheça alguém novo agora mesmo!",
                tab_personal: "Informação pessoal",
                tab_settings: "Configurações de conta",
                tab_rules: "Regras",
                tg_link_1: "Nosso",
                tg_link_2: "Canal oficial de Telegram",
                about_girl: "Sobre a senhora",
                bad_nickname: "O nick deve conter pelo menos 3 caracteres.",
                bad_about: "O numero maximo de caracteres sobre voce e 2000.",
                personal_info: "Dados pessoais",
                btc_wallet: "Carteira de bitcoin Totalcoin",
                phone: "(numero de telefone)",
                birthday_required: "A data de nascimento e obrigatorio",
                password_success: "A alteração da password foi bem sucedida.",
                my_settings: "Minhas configurações",
                avatar_only_image: "Voce pode carregar so jpg, png.",
                avatar_file_size: "Tamanho maximo do arquivo 2MB.",
                undefined_avatar_problems: "Ocorreram problemas desconhecidos ao salvar o arquivo.",
                last_visit_girl: "Esteve online",
                video_descr: "Adicione seu video, para aumentar a sua popularidade."
            },
            main: {
                history_chat_title: "Historia de comunicação",
                chat_men: "Começar chat de vídeo",
                h1: "MiraMi - Chat de vídeo aleatoria com senhoras",
                h1_girl: "MiraMi - Chat de vídeo aleatoria com senhores",
                sign_1: "estranhas solitárias estão esperando por você online!",
                sign_2: "Deseja encontrar companheira?",
                sign_2_girl: "Deseja encontrar companheiro?",
                camera_need: "Ligue a camera para comecar a procurar uma senhora",
                camera_need_girl: "Ligue a camera para comecar a pesquisa"
            },
            sections: {
                affiliate: "Ref. programma",
                top: "TOP Mirami",
                logout: "Saida",
                billing: "Comprar minutos",
                billing_messages: "Comprar mensagens",
                main: "Chat de vídeo",
                girls: "Senhoras",
                favourites: "Favorito",
                auto_translate: "Tradução automática",
                gifts: "Presentes"
            },
            virtual_date: {
                earn_more_money_guys: "Ganhe mais dinheiro, conversando na MiraMi!",
                invited: "Convidado",
                reward: "Ganho",
                invite_guys: "Convida senhores",
                invite_girls: "Convida senhoras",
                how_work: {
                    title: "Como funciona",
                    item_1: "Conhece senhores em qualquer site de namoro, redes sociais, etc. desperta o interesse deles flertando e mostrando suas fotos.",
                    item_2: "quando um senhore já está atraído por você, convide-o para se mostrar e converse via chat de vídeo, enviando-lhe um link para o seu quarto.",
                    item_3: "Se ele realmente gostar de você, ele comprará facilmente um acesso premium para passar um tempo apenas com você.",
                    item_4: "{bonus} para os vossos ganhos!esta pessoa se torna sua referência para sempre e você receberá {reward}.",
                    item_4_bonus: "Bônus extra",
                    item_4_reward: "15% recompensas por cada compra"
                },
                link_guys: "Seu link para convido de senhores.",
                earn_more_money_girls: "Ganhe mais dinheiro, convidando senhoras na MiraMi!",
                invite_models: "Convide modelos e receba 10% de ganho premium.",
                link_girls: "Vosso link para convido de senhoras"
            },
            gifts: {
                title: "Meus presentes",
                empty: "No momento você não tem presentes",
                from: "de {giver_nick}",
                block: "você não pode aceitar presentes."
            },
            withdraw: {
                go: "Retirar",
                balance: {
                    title: "Balanço",
                    info: "Informações",
                    rating: "Avaliação",
                    minimal_sum: "A quantidade mínima de moedas para trocar é {0}.",
                    any_day: "Você pode solicitar um pagamento a qualquer dia.",
                    every_thursday: "Todas as quintas-feiras às 21:00 (GMT+3) as moedas que você ganha são calculadas. O pagamento é feito na sexta-feira.",
                    requisites: "Dados bancários",
                    my_requisites: "Os meus dados.",
                    actual_info: "Todas as informações atualizadas sobre pagamentos podem ser encontradas em nosso",
                    official_channel: "canal oficial do Telegram.",
                    withdraw: "Retiradas",
                    error_minimal_sum: "O valor mínimo de retirada é de {0} moedas"
                },
                history: {
                    title: "Histórico de pagamento",
                    income_sum: "Sua renda total de todos os tempos:",
                    success: "Sucesso",
                    declined: "Rejeitado",
                    waiting: "Expectativa"
                },
                title: "Retiradas",
                your_wallet: "Sua carteira Bitcoin Totalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "Má conexão",
                    other: "Outro",
                    sex: "Ações sexuais",
                    nudse: "Nudez no quadro",
                    absence: "Ausencia no quadro",
                    dont_attention: "Sem atenção ao companheiro",
                    video: "Uso de materiais de video",
                    multi_accounts: "Uso de varias contas",
                    alien_account: "Uso da conta de outra pessoa"
                },
                your_ban: "você está banido",
                what_reason: "Sua conta foi bloqueada por algum motivo",
                unban_time: "Data de desbloqueio",
                infinity: "Para sempre",
                comment: "Comentario do administrador"
            },
            messenger: {
                antispam: "O chat é anônimo, portanto, é proibido compartilhar quaisquer detalhes de contato e links. Outras tentativas resultarão no banimento permanente da sua conta.",
                dialog_timer_label: "Irá desaparecer em breve",
                dialog_male_liking_label: "😍 A senhora gostou de você!",
                dialog_female_liking_label: "💖 Você mandou uma simpatia!",
                dialog_gift_offer_label: "😉 Ela está aborrecida, faça um presente",
                dialog_message: "Presente",
                dialog_not_support: "Não é suportado",
                dialog_empty_state_female: "Ainda não há nada aqui.\nSeja a primeira! Escreve uma mensagem!",
                dialog_empty_state_male: "Seja o primeiro! Escreva uma mensagem para uma senhora!",
                select_girl: "Escolher a senhora",
                modal_message_price_label: "Custo da mensagem",
                dialog_gift_offer_female_label: "😜Se você enviar um presente, ela será a primeira a ver suas mensagens.",
                dialog_gift_offer_male_label: "🤫Ele está pensando em lhe dar um presente. Escreva-lhe",
                typing: "A escrever",
                dialog_liking_text: "Olá, gostei de você! Vamos conversar🔥🔥",
                confirm_clear_history_chat: "Tem certeza de que deseja limpar o histórico do chat de vídeo?",
                confirm_delete_chat: "Tem certeza de que deseja limpar o diálogo?",
                btn_clear_chat: "Limpar o histórico de chat",
                delete_dialog: "Limpar o chat",
                timer_label: "A mensagem irá eliminar-se daqui a",
                timer_descr: "Esta mensagem está disponível apenas para usuários premium.",
                you: "você:",
                sent: "Enviado",
                read: "Lido",
                title: "Mensageiro",
                select_dialogue: "Para conversar,<br/>escolhe chat.",
                start_date: "Ainda não tens mensagens.<br/> Inicia conversa com as senhoras agora!",
                fill_package: "Para continuar conversa,<br/>complete o pacote de minutos.",
                read_messege: "Leia a mensagem da senhora.<br/> Vai eliminar-se daqui a hora.",
                start_reg: "Para conversar com garotas <br/> você precisa fazer login ou se registrar.",
                chat_with_her: "Registra-te <br/>, para conversar com ela.",
                no_dialogue: "Ainda nao tens mensagens.",
                dialog_violation_label: "A imagem foi removida.",
                dialog_violation_message: "A imagem foi removida por não estar de acordo com as orientações do aplicativo."
            },
            check_age: {
                main_title: "Verificação",
                verify_button: "Verificar"
            },
            alerts: {
                new_currency_title: "Atenção",
                new_currency_first_label: "Agora moeda do aplicativo",
                new_currency_second_label: "Um equivalente igual é creditado no seu saldo.",
                limit_function2: "Acesso so para usario premium",
                have_active_chat: "você esta na chat de vídeo ativa.",
                confirm: "Tem certeza?",
                success_payment: "Seu saldo foi carregado com sucesso!"
            },
            verification: {
                rule_1: "Certifique-se de que o documento que você está enviando é seu e está em boas condições.",
                rule_2: "Verifique se você não possui contas adicionais, incluindo aquelas que foram recusadas.",
                rule_3: "Não use documentos falsificados ou alterados de forma alguma.",
                rule_4: "Somente o proprietário da conta pode passar na verificação de identidade.",
                info_text_1: "Nosso sistema determina automaticamente, com base em seu rosto e seus dados, um documento falso ou a presença de uma conta adicional.",
                info_text_2: "Não negligencie esses requisitos, caso contrário sua conta será bloqueada automaticamente.",
                info_text_3: "Se você tiver uma conta com verificação malsucedida, escreva-nos por e-mail, resolveremos qualquer problema que surgir individualmente."
            },
            top_girls: {
                one_day: "Top do dia.",
                one_week: "Top da semana.",
                all_time: "Tempo todo",
                your_rating: "Sua classificação",
                your_place: "Você ocupa {0} posições",
                yesterday_winners: "Os vencedores de ontem",
                prev_week_winners: "Os vencedores da semana passada",
                rules_button: "Como a classificação é criada?",
                daily_rating: "Avaliação diária",
                current_daily_rating: "Avaliação de hoje",
                weekly_rating: "Avaliação semanal",
                current_weekly_rating: "Avaliação da semana atual",
                all_time_rating: "Classificação de todos os tempos",
                current_place: "Classificação atual: {0} ({1})",
                yesterday_place: "Avaliação de ontem: {0} ({1})",
                previous_week_place: "Avaliação da semana passada: {0} ({1})",
                rules: {
                    title: "Você ganha pontos por:",
                    rule_1: "duração do chat de vídeo",
                    rule_3: "resposta positiva das pessoas com quem você se comunica",
                    rule_4: "adicionando amigos e atividades diárias",
                    rule_5: "Você pode perder pontos por resposta negativa do seu interlocutor, por inatividade por uma semana e por ser banido."
                }
            },
            boys: {
                title: "Usuários Mirami"
            },
            favourites: {
                title: "Favorito",
                add_girls: "Adicione senhorar que voce gosta a sua lista de favorito para acesso rapido a elas.",
                to_roulette: "Roleta de bate-papo",
                empty_title: "A lista de favoritos está vazia",
                empty_text: "Adicione rapazes aos favoritos para se manter em contato",
                added_to_favorites: "{name} foi adicionado aos {br}favoritos",
                you_in_favorites: "Você foi adicionado aos {br}favoritos"
            },
            catalog: {
                title: "Catalogo de senhoras",
                online: "Senhoras online",
                offline: "Senhoras offline",
                only_premium: "Catalogo completo de senhoras e disponivel apenas para utilizadores premium"
            },
            history: {
                empty_title: "Seu histórico de bate-papo está vazio.",
                empty_text: "Vamos corrigir isso agora mesmo."
            }
        }
          , N = {
            sex_check: {
                title: "누구십니까?",
                sex_male: "남자",
                sex_female: "여자"
            },
            staff: {
                title: "귀하의 잔액",
                button: {
                    get_premium: "프리미엄 받기",
                    login: "들어가기",
                    register: "가입",
                    save: "저장",
                    send: "보내기",
                    refill_balance: "잔액 충전",
                    next: "다음",
                    upload: "업로드",
                    yes: "네",
                    begin: "시작",
                    edit: "변경",
                    ok: "예",
                    confirm: "확인",
                    enter: "들어가기",
                    back: "뒤로"
                },
                buy: "구매하기",
                min: "분",
                understand: "알겠습니다",
                error: "오류",
                all: "전체",
                delete: "삭제하기",
                error_devices: {
                    already_open: "MiraMi 영상 채팅은 이미 다른 탭에서 열렸습니다.",
                    this_tab_active: "이 탭을 활성화하시겠습니까?"
                },
                days: "일",
                other: "기타",
                collapse: "접기"
            },
            search: {
                start: "검색 시작",
                note: "화면을 닫지 마세요.",
                your_ready: "시작하시겠습니까?",
                process: "채팅 상대방 검색",
                awaiting: "기다리는 중"
            },
            chat: {
                type_message: "귀하의 메시지",
                to_end: "종료",
                is_premium: "프리미엄",
                add_favourite: "즐겨찾기에 추가하기",
                reconnection: "재접속 중",
                connecting: "상대방과 연결 중…",
                your_favourite: "즐겨찾기에 추가되었습니다",
                time_to_end: "종료까지 남은 시간:"
            },
            modals: {
                login: {
                    create_account: "가입",
                    email: "귀하의 이메일 주소",
                    password: "귀하의 비밀번호",
                    title: "들어가기",
                    forgot_password: "비밀번호를 잊으셨습니까?",
                    wrong_login: "아이디 또는 비밀번호가 잘못되었습니다",
                    subtitle: "소통하면서 즐기세요"
                },
                support: {
                    title: "지원",
                    have_questions: "질문을 하시면 전문가가 최대한 빨리 자세한 답변을 드릴 수 있도록 노력하겠습니다."
                },
                register: {
                    already_have_account: "이미 계정이 있습니다.",
                    title: "제한을 풀리고",
                    subtitle: "가입하세요!",
                    subtitle_2: "즐거움을 확장하세요",
                    nickname: "닉네임",
                    already_email: "이 이메일 주소는 이미 사용 중입니다",
                    password_bad: "비밀번호는 8자 이상이어야 합니다.",
                    name_short: "이름이 너무 짧습니다",
                    name_long: "이름이 너무 깁니다"
                },
                present: {
                    done: "선물하기",
                    cancel: "취소",
                    not_enough_balance_title: "잔액이 부족합니다",
                    title: "선물을 보내기",
                    gift_price: "선물 가격",
                    consent: "선물을 보내시겠어요?",
                    cost: "가치의",
                    smart_line: "{costGift} {min} {cost} {consent} {gift}",
                    success_send: "선물이 성공적으로 전송되었습니다!"
                },
                complaint: {
                    title: "위반 통보",
                    complaint_1: "아동 참여",
                    complaint_5: "사기",
                    complaint_2: "선물을 구결함",
                    more: "위반을 자세히 설명하세요",
                    word: "불평하다",
                    nudity: "화면에 나온 누드",
                    dont_like: "이 사용자가 마음에 들지 않습니다",
                    inappropriate_content: "부적절한 콘텐츠",
                    span_or_scam: "스팸 또는 사기"
                },
                success_register: {
                    title: "성공적으로 가입하셨습니다",
                    keep_chat: "여성들과 계속 소통하세요."
                },
                present_success: {
                    title_2: "귀하의 선물!",
                    thanks: "감사합니다",
                    present_from: "{giver_nick} 에게서 선물이 도착했습니다"
                },
                photo_view: {
                    text_1: "프리미엄 사용자만 사용 가능합니다",
                    text_2: "모든 사용자들이 사용 가능합니다",
                    stub_only_premium: "프리미엄만"
                },
                remove_favourite: {
                    text: "즐겨찾기에서 삭제하시겠습니까?"
                },
                remove_gallery: {
                    title: "삭제하기",
                    text: "갤러리에서 삭제하시겠습니까?"
                },
                chat: {
                    value_video_chat_text: "채팅 룰렛 가격",
                    value_direct_video_chat_text: "개인 전화 가격",
                    top_up_balance_text_web: "커뮤니케이션을 계속하려면 잔액을 충전하세요."
                },
                block_user: {
                    title: "차단하기",
                    confirm_text: "이 사용자를 정말 차단하시겠습니까?"
                },
                prohibition: {
                    title: "금지되어 있습니다",
                    item_1: "생식기/장기의 시연"
                },
                nudity_warning: {
                    title_1: "당신을 보여 주세요",
                    title_2: "당신의 사진만",
                    title_3: "도덕 표준",
                    warning_1: "당신을 선명하게 보여주는 사진을 선택하세요",
                    warning_2: "다른 사람의 사진을 업로드하지 마세요. 삭제하겠습니다.",
                    warning_3: "과도한 노출 및 음란 사진 자제하세요"
                },
                messenger_warning_limit: {
                    text_free: "일일 한도를 다 사용하셨습니다. 프리미엄이 되십시오.",
                    text_prem: "일일 한도를 소진하셨습니다. 이제 메시지당 다음 요금이 청구됩니다.",
                    text_anonim: "메시지를 보려면 로그인하거나 등록해야 합니다."
                },
                liking_send: {
                    text: "그가 당신에게 연락할 수 있도록 그에게 라이크를 보내십시오."
                },
                billing: {
                    subtitle_3: "다이먼드 페키지를 선택하십시오",
                    subtitle_2: "영원한 선물로 프리미엄",
                    messages: "메시지",
                    choose_payment: "결제 수단을 선택하세요",
                    agreement: "결제함으로써 본인은 법정 연령임을 확인하고",
                    terms_conditions: "이용약관에 동의합니다."
                },
                accept_years: {
                    sub_title: "계속하기 전에 18세 이상임을 확인하여 아래 약관에 동의하세요.",
                    rule_1: "법정연령이 되었음을 확인하십니다.",
                    rule_2: "미성년자가 Mirami.chat을 사용하는 것을 허용하지 않을 것임을 보장하십니다.",
                    rule_3: "미성년자라고 생각하는 모든 사용자에 대해 즉시 알려줄 것을 보장하십니다.",
                    welcome: "환영합니다"
                },
                rules: {
                    title: "알림",
                    text_public_chats: "공개 채팅",
                    text_nudity: "누드는 금지되어 있습니다!",
                    text_sexual_context: "성적 행위는 금지되어 있습니다!",
                    text_private_chats: "개인 채팅",
                    text_free: "자유롭게 하시면 됩니다.",
                    text_moderation: "공개 및 개인 통화는 조절됩니다.",
                    text_chat_indicator: "채팅이 바꿀 수 있으니 꼭 확인하세요.",
                    text_rules: "비디오 채팅 사용 규칙",
                    memo: "미리 알림",
                    update_date: "업데이트 날짜: {0}",
                    list_text_1: "영상 채팅을 할 새로운 남성을 찾고 있는 평범한 싱글 여성처럼 행동하세요.",
                    list_text_2: "대화 상대에게 내 얼굴이 선명하게 보이는지 확인하세요.",
                    list_text_3: "대화 상대에게 주의를 기울이고 항상 먼저 글을 쓰고 답장을 보내세요.",
                    list_text_4: "다른 영상 대화에서 멀티스트리밍을 실행하지 마세요.",
                    list_text_5: "다양한 채팅 유형에서 행동 규칙을 따르세요(영상 채팅 상태는 대화 상대방의 아바타 옆에 해당 아이콘으로 표시되어 있습니다):",
                    text_public_chat: "공개 채팅",
                    text_private_chat: "비공개 채팅",
                    text_nudity_context: "노출 및 성적인 행동*은 금지되어 있습니다.",
                    text_nudity_context_allowed: "대화 상대가 법적 연령에 해당하고 동의를 받은 경우에는 노출 및 성적인 행동*이 허용됩니다.",
                    text_nudity_additional: "*성적인 행동에는 성기 노출, 상의 탈의, 속옷 또는 지나치게 노출이 심한 의상, 성적으로 노골적인 포즈, 신체 애무, 입 또는 혀의 움직임이 포함됩니다.",
                    text_salary: "여기서 돈을 번다는 사실을 아무에게도 알리지 마세요!",
                    full_rules: "전체 운영원칙 목록은 {here} 를 참조하세요.",
                    here: "여기",
                    text_ban: "플랫폼의 규칙을 위반하면 계정이 영구적으로 금지되고 번 돈을 모두 잃게 됩니다!"
                },
                requisites: {
                    text_first: "수입은 암호화폐 지갑으로 인출됩니다. 지불금을 받으려면 어떤 플랫폼에 USDT(TRC-20) 암호화폐 지갑이 있어야 합니다.",
                    text_second: "암호화폐 지갑이 없다면 Binance 또는 기타 암호화폐 거래소에 등록하여 계정을 만드세요. 계정을 만드는 것은 무료입니다.",
                    text_third: "여기서는 USDT(TRC-20) 주소만 사용해 주세요. 잘못된 주소를 입력한 경우 사용자는 책임져야 합니다다.",
                    address_usdt: "USDT 주소(TRC-20)",
                    address_usdt_error: "이 주소는 USDT(TRC-20)에 속하지 않습니다."
                },
                nudity_error: {
                    text: "누드 사진을 업로드하시면 안 됩니다"
                },
                denied_camera: {
                    title_3: "카메라 또는 마이크가 연결되지 않았습니다",
                    title_2: "생각을 바꾸셨나요?",
                    message: "카메라에 대한 액세스를 허용하지 않았습니다. 여성들은 당신을 볼 수 없으므로 채팅을 시작할 수 없습니다.",
                    message_girl: "카메라에 대한 액세스를 허용하지 않았습니다. 남자들은 당신을 볼 수 없으므로 채팅을 시작할 수 없습니다.",
                    restart_page: "페이지를 새로고침하고 카메라를 사용하도록 허용하면 바로 채팅을 시작할 수 있습니다."
                },
                accept_camera: {
                    subtitle_2: "카메라 및 마이크에 대한 액세스를 허용하세요",
                    title: "여성은 당신을 보고 싶어합니다",
                    allow_camera_first: "여성들이 당신을 볼 수 있도록 앱에서 카메라와 마이크에 액세스 허용해야 합니다.",
                    allow_camera_second: "카메라, 마이크에 대한 액세스를 허용하고 흥미진진한 채팅을 시작하세요.",
                    allow_camera_girl_bold: "카메라가 없으면 채팅을 시작할 수 없습니다."
                },
                girloffline: {
                    text_3: "여성은 지금",
                    text_4: "멋있는 기능을 사용하세요 😎"
                },
                choose_file: {
                    title: "파일 선택",
                    text: "누드는 금지되어 있습니다. Instagram이나 TikTok에 적합한 미디어만 사용하세요.",
                    only_premium: "프리미엄 전용"
                },
                recovery: {
                    title: "액세스 복원",
                    enter_new_password: "Mirami 채팅에 대한 액세스 복원",
                    invalid_recovery_key: "액세스를 복원하는 링크가 유효하지 않습니다.",
                    success: "새 비밀번호가 성공적으로 설정되었습니다. 이제 로그인할 수 있습니다.",
                    sent_link: "비밀번호 재설정 링크가 귀하의 이메일 {email}로 전송되었습니다. 이메일을 받지 못한 경우 이메일 주소가 정확한지 확인하거나 스팸에 들어갔는지 확인하십시오.",
                    reset_password: "비밀번호 재설정",
                    info_text: "가입할 때 사용한 이메일 주소를 입력하세요.<br/>비밀번호 재설정에 도움이 되는 링크가 포함된 이메일을 보내드리겠습니다."
                },
                model_status: {
                    title: "활성 상태",
                    subtitle: "더 많이 버세요",
                    free_user: "무료 사용자와 함께",
                    prem_user: "프리미엄 사용자와 함께",
                    pay_start: "소통 결제는{after} 시작됩니다.",
                    pay_start_after: "10초 후",
                    descr_top: "모델이 최대 베팅을 받고 룰렛에서 우선권을 가질 수 있게 해줍니다. 다음 조건 중 하나가 충족되는 순간부터 {auto} 활성화됩니다.",
                    descr_top_auto: "20일 동안 자동",
                    if_1: "리퍼럴이 구매했습니다",
                    if_2: "당신과 소통한 후 남자가 구매했습니다",
                    if_3: "프리미엄과의 {min}으로 지속적인 채팅",
                    if_3_min: "> 3분",
                    status_reload: "다음 조건 중 하나가 충족되면 상태가 {auto}됩니다.",
                    status_reload_auto: "10일 동안 자동으로 연장"
                },
                profile: {
                    title: "프로필",
                    affiliate: "리퍼럴 프로그램",
                    link: "링크",
                    count: "수량",
                    profit: "수익"
                },
                warning_activity: {
                    title: "주의! 채팅에 부재 상태가 발견되었습니다.",
                    message: "대담자를 무시하지 마십시오. 그런 경우 시스템이 검색에서 귀하를 제외하고 덜 자주 보여주게 됩니다."
                },
                add_avatar: {
                    title: "아바타 추가하기",
                    text: "파트너 검색을 시작하기 전에 아바타를 업로드하세요."
                },
                penalty_received: {
                    title: "페널티",
                    total_penalties: "총 페널티:",
                    first_penalty: "첫 번째 위반이므로 바로잡을 수 있는 기회를 드립니다. 7일 이내에 20,000코인 이상을 적립하고 규칙을 위반하지 않으면 코인을 돌려드리겠습니다.",
                    reason: "이유",
                    place: "위치",
                    comment: "비고:",
                    screenshot: "위반 스크린샷",
                    sexual_behavior: "성적으로 노골적인 행동"
                },
                image_upload_error: {
                    text: "개인 정보나 스크린샷을 공유하지 마세요. 주의하고 Mirami.chat에서 직접 소통하세요."
                },
                camscore: {
                    title: "당신의 Camscore",
                    description: 'Camscore가 "좋음" 또는 "훌륭함"이라면 TOP 상태와 대기열 우선권을 받게 됩니다.',
                    description_undefined: "500번 미만의 화상 채팅을 진행했기 때문에 Camscore를 계산할 수 없습니다.<br/>화상 채팅에 더 많은 시간을 투자해주세요.",
                    what_is: "Camscore란 무엇인가요?",
                    status: {
                        none: "정의되지 않음",
                        terrible: "최악",
                        bad: "나쁨",
                        good: "좋음",
                        excellent: "훌륭함"
                    },
                    text: {
                        line_1: "Camscore는 플랫폼에서 모델의 전체 생산성과 수익성을 반영하는 등급입니다.",
                        line_2: "Camscore는 지난 7일 동안의 수익과 5초 이상 지속된 채팅을 기준으로 계산됩니다. 개인 채팅 및 선물로 더 많은 수익을 올릴수록 Camscore가 높아집니다. 매일 최근 7일의 결과를 바탕으로 등급이 다시 계산됩니다. 따라서 모델의 활동이 등급 상승 또는 하락에 직접적으로 영향을 미칩니다.",
                        line_3: "이 등급은 모델의 수익성에 직접적인 영향을 미치는 몇 가지 요인에 따라 달라집니다:",
                        line_4: "온라인 시간: 모델이 온라인 상태에서 사용자와 적극적으로 상호 작용하는 시간이 많을수록 더 많은 수익 기회를 얻을 수 있습니다.",
                        line_5: "구매 빈도: 사용자가 개인 채팅에 지불하고 선물을 보낼수록 모델의 Camscore는 더 높아집니다.",
                        line_6: "화상 채팅 연장: 사용자들이 화상 통화를 연장할수록 등급이 상승합니다. 정기적인 통화를 유도하기 위해 독특한 쇼나 친근한 대화를 제공하는 것이 좋습니다.",
                        line_7: "주도성: 사용자가 먼저 행동하기를 기다리지 마세요. 메시지를 보내거나 먼저 전화를 걸어 적극적으로 관심을 보여주세요.",
                        line_8: "활동성과 창의성: 사용자는 고품질의 영상, 좋은 조명, 활발한 대화를 높이 평가하며, 이는 그들이 더 많은 돈을 쓰도록 유도합니다.",
                        line_9: "따라서 모델의 수익이 높을수록 Camscore가 더 좋아지고, 플랫폼에서 상위권에 자리 잡아 더 많은 사용자를 끌어들일 수 있습니다."
                    }
                },
                santa_top: {
                    title: "산타의 추천 🎄",
                    text1: "우리의 크리스마스 콘테스트에 참여하여 추가 보너스를 받으세요! 🎁 하루 동안: $20를 벌면 $5를 받고, $45를 모으면 $15를 받고, $100를 모으면 무려 $35를 받을 수 있습니다!",
                    text2: "당신의 노력을 넉넉한 선물로 바꾸세요 ❤️",
                    every_day: "✨ 12월 31일까지 매일",
                    launch_auto: "매일 현지 시간으로 자동 시작됩니다.",
                    stats_update: "⏰ 통계는 약 5분마다 업데이트됩니다."
                }
            },
            profile: {
                email_notifications: "이메일 알림",
                change_password: "비밀번호 변경",
                new_password: "새 비밀번호",
                repeat_password: "비밀번호를 다시 입력하세요",
                passwords_not_match: "비밀번호는 일치하지 않습니다.",
                delete_account: "계정을 삭제하기",
                about: "자신에 대하여",
                birthday: "생년월일",
                receive_guests: "프리미엄 게스트로부터 알림을 받기",
                receive_girls: "원하시는 여성이 온라인 상태이고 귀하에게 중요한 정보가 있을 때 알림을 받으세요.",
                premium_btn: "프리미엄이 되기",
                bad_btc: "이 BTC 월렛은 없습니다.",
                actions: {
                    invite: "채팅방에 초대하기",
                    start_chat: "화상 전화",
                    remove_favourite: "마음에 듦에서 삭제",
                    message: "메시지",
                    was_invited: "초대되었습니다",
                    cancel_notify: "알림 취소",
                    notify_online: "온라인 상태일 때 알림 받기"
                },
                premium_descr: "프리미엄 사용자가 되어 모든 기능에 대한 전체 액세스 권한을 얻으세요.",
                subtitle: {
                    foto: "사진",
                    video: "영상"
                },
                foto_descr: "사용자가 당신을 더 잘 알 수 있도록 사진을 업로드하세요.",
                verify_descr: "사람들이 귀하를 신뢰할 수 있도록 신원을 확인하세요.",
                geo_button: "내 지리 데이터",
                geo_description: "내 국가를 표시하기",
                rp_btn: "저는 여기 있습니다",
                rules: {
                    forbidden: {
                        title: "금지된 사항",
                        text_1: "공개 채팅에서 누드 및 성행위",
                        text_2: "하나 이상의 계정 사용",
                        text_3: "누드 사진 또는 동영상 업로드",
                        text_4: "다른 사람의 계정 사용",
                        text_5: "돈을 요청 또는 다른 지불 방법 제안",
                        text_6: "개인 데이터(전화번호, 소셜 네트워크 등) 공유",
                        text_7: "다른 사람과 같이 비디오 채팅 시작",
                        text_8: "자동화(봇, 웹캠을 통한 비디오 방송 등) 사용",
                        text_9: "대화 상대를 무시하기 (화면에 없기, 문자 메시지에 응답하지 않기, 다른 일에 집중하기)"
                    },
                    allowed: {
                        title: "허용됨 사항",
                        text_1: "사용자나 상대방이 편안하게 느끼는 것이 무엇이든 비공개 비디오 채팅에서 자유롭게 행동하시면 됩니다.",
                        text_2: "통화를 가능한 한 길게 연장하세요.",
                        text_3: "메시지에 답장하고 대화를 시작하세요. 친절하고 사교적이며 미소를 지으세요.",
                        text_4: "조명이 좋은 곳에 카메라 앞에 있어야 합니다. 사용자가 잘 보여야 합니다.",
                        text_5: "자신의 사진만 업로드하세요.",
                        text_6: "미성년자, 괴롭힘 또는 부적절한 성별을 발견하시면 그 사용자에 대해서 신고하세요.",
                        text_7: "한 달에 한 번 이상 온라인에 접속 안 하시면 잔액이 0으로 재설정됩니다."
                    },
                    warn: "모든 잘못된 행동과 위반은 직원과 봇에 의해 모니터링됩니다. 벌금이 부과되거나 접속이 영구적으로 금지될 수 있습니다."
                },
                queen_day: "오늘의 퀸",
                queen_week: "이번 주의 퀸",
                queen_mirami: "Mirami의 퀸",
                blur_button: "대화 상대와 함께하는 비디오 채팅을 블러 처리하세요",
                blur_description: "흐림 효과를 제거하려면 비디오 채팅 화면을 누르세요",
                not_found_title: "이 사용자를 찾을 수 없습니다",
                not_found_description: "지금 바로 새로운 사람을 만나보세요!",
                tab_personal: "개인 정보",
                tab_settings: "계정 설정",
                tab_rules: "규칙",
                tg_link_1: "우리",
                tg_link_2: "공식 Telegram 채널",
                about_girl: "여성에 대하여",
                bad_nickname: "닉네임은 3자 이상이어야 합니다.",
                bad_about: "자신에 대한 정보의 최대 문자 수는 2000자입니다.",
                personal_info: "개인 데이터",
                btc_wallet: "Totalcoin 비트코인 월렛",
                phone: "(전화번호)",
                birthday_required: "생년월일 필드는 필수 항목입니다.",
                password_success: "비밀번호는 성공적으로 변경되었습니다.",
                my_settings: "내 설정",
                avatar_only_image: "jpg, png만 업로드할 수 있습니다.",
                avatar_file_size: "최대 파일 크기는 2MB입니다.",
                undefined_avatar_problems: "파일을 저장하는 중 알 수 없는 문제가 발생했습니다.",
                last_visit_girl: "온라인 상태였음",
                video_descr: "재미있는 동영상을 추가하여 인기도를 높이세요."
            },
            main: {
                history_chat_title: "채팅 내역",
                chat_men: "화상 채팅을 시작하기",
                h1: "MiraMi - 여성들과 무작위 영상 채팅",
                h1_girl: "MiraMi - 남자들과 무작위 영상 채팅",
                sign_1: "외로운 낯선 여성들이 온라인에서 당신을 기다리고 있습니다!",
                sign_2: "대화 상대를 찾고 싶으신가요?",
                sign_2_girl: "대화 상대를 찾고 싶으신가요?",
                camera_need: "낯선 여성을 검색하려면 카메라를 켜세요.",
                camera_need_girl: "검색 시작하려면 카메라를 켜세요."
            },
            sections: {
                affiliate: "리퍼럴 프로그램",
                top: "Mirami의 TOP",
                logout: "로그아웃",
                billing: "분을 구매하기",
                billing_messages: "메시지를 구매하기",
                main: "영상 채팅",
                girls: "여성들",
                favourites: "즐겨찾기",
                auto_translate: "자동 번역",
                gifts: "선물"
            },
            virtual_date: {
                earn_more_money_guys: "MiraMi에서 만나면서 더 많은 수익을 얻으세요!",
                invited: "초대되었음",
                reward: "번 금액",
                invite_guys: "남자를 초대하세요",
                invite_girls: "여성을 초대하세요",
                how_work: {
                    title: "작동 원리",
                    item_1: "데이트 사이트, 소셜 네트워크 등에서 남자를 만나십시오. 당신의 사진을 보여주고 자랑함으로써 그들의 관심을 불러일으키십시오.",
                    item_2: "남자가 이미 당신에게 끌리면 그에게 당신의 채팅방으로 링크를 보내 MiraMi 화상 채팅을 통해 자신을 보여주고 채팅하도록 초대하십시오.",
                    item_3: "그가 당신을 정말 좋아한다면 당신과만 시간을 보낼 수 있는 프리미엄 액세스 권한을 쉽게 구매할 것입니다.",
                    item_4: "수입에 대한 {bonus}! 이 게스트는 영원히 추천인이 되며 그가 구매할 때마다 당신이{reward}을 받게 됩니다.",
                    item_4_bonus: "추가 보너스",
                    item_4_reward: "15% 보상"
                },
                link_guys: "남자를 초대하는 링크",
                earn_more_money_girls: "MiraMi에 여성을 초대하여 더 많은 수익을 올리세요!",
                invite_models: "모델을 초대하고 그녀의 보너스 수입의 10%를 받으세요.",
                link_girls: "여성을 초대하는 링크"
            },
            gifts: {
                title: "내 선물",
                empty: "현재 선물이 없습니다.",
                from: "{giver_nick} 에게서",
                block: "선물을 받을 수 없습니다."
            },
            withdraw: {
                go: "인출하기",
                balance: {
                    title: "잔액",
                    info: "정보",
                    rating: "순위",
                    minimal_sum: "교환할 수 있는 최소 코인 수는 {0}입니다.",
                    any_day: "언제든지 지불금을 요청하실 수 있습니다.",
                    every_thursday: "매주 목요일 오후 9시(GMT+3)에 저희 시스템은 사용자가 획득한 코인을 다시 계산합니다. 결제는 금요일에 이루어집니다.",
                    requisites: "계좌 정보",
                    my_requisites: "은행 계좌번호",
                    actual_info: "지불금에 대한 모든 정보는",
                    official_channel: "Telegram 공식 채널에서 확인하실 수 있습니다.",
                    withdraw: "인출",
                    error_minimal_sum: "최소 인출 금액은 {0} 코인입니다."
                },
                history: {
                    title: "지불 내역",
                    income_sum: "총수입:",
                    success: "완료됨",
                    declined: "거절됨",
                    waiting: "처리 중"
                },
                title: "자금 인출",
                your_wallet: "귀하의 Totalcoin 비크코인 월렛"
            },
            ban: {
                reason: {
                    bad_connection: "좋지 않은 접속",
                    other: "다른 것",
                    sex: "성행위",
                    nudse: "화면에 나온 누드",
                    absence: "화면에 안 나왔음",
                    dont_attention: "상대방에 대한 무관심",
                    video: "영상 자료 사용",
                    multi_accounts: "여러 계정 사용",
                    alien_account: "다른 사용자의 계정 사용"
                },
                your_ban: "귀하는 금지되었습니다",
                what_reason: "귀하의 계정이 다음 이유로 정지되었습니다",
                unban_time: "잠금 해제 날짜",
                infinity: "영원히",
                comment: "관리자의 코멘트"
            },
            messenger: {
                antispam: "채팅은 익명이므로 연락처 및 링크를 공유하는 것은 금지되어 있습니다. 다시 시도하시면 계정이 영구적으로 차단됩니다.",
                dialog_timer_label: "곧 사라질 것입니다",
                dialog_male_liking_label: "😍 그 여셩은 당신이 마음에 들었습니다!",
                dialog_female_liking_label: "💖라이크를 보내주셨습니다!",
                dialog_gift_offer_label: "😉 그녀는 심심합니다. 선물을 보내십시오",
                dialog_message: "선물",
                dialog_not_support: "지원되지 않음",
                dialog_empty_state_female: "아직 아무것도 없습니다.\n첫 번째가 되세요! 메시지를 작성하세요!",
                dialog_empty_state_male: "첫 번째가 되십시오! 여성에게 메시지를 보내보세요!",
                select_girl: "여성을 선택하기",
                modal_message_price_label: "메시지 비용",
                dialog_gift_offer_female_label: "😜 당신이 선물을 보내면 그녀는 당신의 메시지를 먼저 볼 것입니다!",
                dialog_gift_offer_male_label: "🤫 그는 당신에게 선물을 줄 생각입니다. 그에게 메시지를 보내세요",
                typing: "타이핑 중",
                dialog_liking_text: "안녕하세요, 당신이 좋아요!채팅합시다 🔥🔥",
                confirm_clear_history_chat: "채팅 기록을 지우시겠습니까?",
                confirm_delete_chat: "대화를 지우시겠습니까?",
                btn_clear_chat: "채팅 기록을 지우기",
                delete_dialog: "채팅 삭제",
                timer_label: "메시지가 ...후 삭제됩니다",
                timer_descr: "이 메시지는 프리미엄 사용자에게만 제공됩니다.",
                you: "당신:",
                sent: "전송되었음",
                read: "읽힘",
                title: "메신저",
                select_dialogue: "대화를 시작하려면<br/>대화를 선택하세요.",
                start_date: "아직 메시지가 없습니다.<br/>지금 여성과 데이트를 시작하세요!",
                fill_package: "소통을 계속하려면<br/>메시지 패키지를 보충하세요.",
                read_messege: "여성의 메시지를 읽으십시오.<br/>1시간 후에 삭제됩니다.",
                start_reg: "여자들과 채팅하려면 <br/> 로그인하거나 가입해야 합니다.",
                chat_with_her: "그녀와 채팅하려면<br/>가입하세요.",
                no_dialogue: "아직 메시지가 없습니다.",
                dialog_violation_label: "이미지가 삭제되었습니다",
                dialog_violation_message: "이미지가 애플리케이션 규칙을 준수하지 않아 삭제되었습니다."
            },
            check_age: {
                main_title: "검증",
                verify_button: "검증하기"
            },
            alerts: {
                new_currency_title: "주의",
                new_currency_first_label: "지금 앱 통화",
                new_currency_second_label: "동일한 금액이 귀하의 잔액에 적립되었습니다.",
                limit_function2: "프리미엄 사용자만 액세스할 수 있습니다.",
                have_active_chat: "활성 채팅 중입니다.",
                confirm: "하시겠습니까?",
                success_payment: "잔액이 충전되었습니다!"
            },
            verification: {
                rule_1: "문서가 사용자의 것인지 잘 읽을 수 있는 상태인지 확인하세요.",
                rule_2: "거부된 계정을 포함하여 다른 계정이 있는지 확인하세요.",
                rule_3: "위조 문서 또는 변조된 문서를 사용하지 마세요.",
                rule_4: "계정 소유자만 인증 절차를 거치면 됩니다.",
                info_text_1: "저희 시스템은 사용자의 얼굴과 데이터를 기반으로 위조 문서 또는 이미 계정이 있다는 사실을 자동으로 감지합니다.",
                info_text_2: "이러한 요구 사항을 무시하지 마세요. 요구 사항을 위반할 경우 사용자의 계정이 자동으로 차단됩니다.",
                info_text_3: "계정을 성공적으로 확인할 수 없는 경우 이메일을 보내주시면 문제와 사례를 해결해 드리겠습니다."
            },
            top_girls: {
                one_day: "오늘의 TOP",
                one_week: "이번 주의 TOP",
                all_time: "모두",
                your_rating: "사용자의 순위",
                your_place: "사용자가 {0}위입니다",
                yesterday_winners: "어제 우승자",
                prev_week_winners: "지난 주 우승자",
                rules_button: "순위가 어떻게 생성되나요?",
                daily_rating: "매일 순위",
                current_daily_rating: "오늘 순위",
                weekly_rating: "주간 순위",
                current_weekly_rating: "이번주 순위",
                all_time_rating: "역대 순위",
                current_place: "현재 순위: {0} ({1})",
                yesterday_place: "어제 순위: {0} ({1})",
                previous_week_place: "지난주 순위: {0} ({1})",
                rules: {
                    title: "다음과 같은 것을 위한 점수를 얻었습니다",
                    rule_1: "영상 채팅 기간",
                    rule_3: "채팅하는 사람들의 긍정적인 반응",
                    rule_4: "친구 추가 및 일상 활동",
                    rule_5: "채팅 상대의 부정적인 반응, 일주일간 활동 없음, 차단 등으로 인해 포인트를 잃을 수 있습니다."
                }
            },
            boys: {
                title: "Mirami 사용자"
            },
            favourites: {
                title: "즐겨찾기",
                add_girls: "마음에 든 여성을 즐겨찾기 목록에 추가하면 빠르게 액세스할 수 있습니다.",
                to_roulette: "채팅 룰렛",
                empty_title: "즐겨찾기 목록이 비어 있습니다",
                empty_text: "남자들을 즐겨찾기에 추가하여 연락을 유지하세요",
                added_to_favorites: "{name}이(가) {br}즐겨찾기에 추가되었습니다",
                you_in_favorites: "당신이 {br}즐겨찾기에 추가되었습니다"
            },
            catalog: {
                title: "여성 카탈로그",
                online: "온라인 아가씨",
                offline: "오프라인 아가씨",
                only_premium: "여성들의 전체 카탈로그는 프리미엄 사용자만 사용할 수 있습니다."
            },
            history: {
                empty_title: "대화 기록이 비어 있습니다.",
                empty_text: "지금 바로 해결해 봅시다."
            }
        }
          , L = {
            sex_check: {
                title: "性別は",
                sex_male: "男性",
                sex_female: "女性"
            },
            staff: {
                title: "残高",
                button: {
                    get_premium: "プレミアムをゲット",
                    login: "ログイン",
                    register: "登録",
                    save: "保存",
                    send: "送る",
                    refill_balance: "残高を補充する",
                    next: "次へ",
                    upload: "ダウンロードする",
                    yes: "はい",
                    begin: "スタート",
                    edit: "編集",
                    ok: "ОK",
                    confirm: "検証",
                    enter: "入る",
                    back: "後ろへ"
                },
                buy: "買う",
                min: "分",
                understand: "承知しました",
                error: "エラー",
                all: "全て",
                delete: "削除する",
                error_devices: {
                    already_open: "MiraMiビデオチャットはすでに別のタブで開いています。",
                    this_tab_active: "このタブをアクティブにしたいですか？"
                },
                days: "日",
                other: "その他",
                collapse: "閉じる"
            },
            search: {
                start: "検索を開始する",
                note: "画面を回転させないでください",
                your_ready: "始める準備はできましたか？",
                process: "チャットパートナーを探す",
                awaiting: "少々お待ち下さい。"
            },
            chat: {
                type_message: "メセージ",
                to_end: "完了する",
                is_premium: "プレミアム",
                add_favourite: "お気に入りに追加する",
                reconnection: "インターネット接続の回復",
                connecting: "対話者との接続...",
                your_favourite: "お気に入りに追加しました",
                time_to_end: "終わるまでに時間"
            },
            modals: {
                login: {
                    create_account: "登録",
                    email: "電子メールアドレス",
                    password: "パスワード",
                    title: "入る",
                    forgot_password: "パスワードを忘れましたか。",
                    wrong_login: "不正なログイン名もしくはパスワードです",
                    subtitle: "話しながら楽しんで下さい。"
                },
                support: {
                    title: "サポート",
                    have_questions: "お客様から頂いたご質問は、いつでも弊社スタッフが迅速かつ丁寧に答えいたします。"
                },
                register: {
                    already_have_account: "既にアカウントを持っています",
                    title: "制限を削除してください、",
                    subtitle: "登録しよう！",
                    subtitle_2: "楽しみを伸ばしましょう！",
                    nickname: "ニックネーム",
                    already_email: "この電子メールは既に利用されています",
                    password_bad: "パスワードは8文字以上である必要があります。",
                    name_short: "「名前」は短すぎます",
                    name_long: "「名前」は長すぎます"
                },
                present: {
                    done: "プレゼントを送る",
                    cancel: "キャンセル",
                    not_enough_balance_title: "残高不足",
                    title: "プレゼントを送る",
                    gift_price: "プレゼントの価格",
                    consent: "ギフトを送る準備はできています。",
                    cost: "価格",
                    smart_line: "{costGift} {min} {cost} {consent} {gift}",
                    success_send: "ギフトの送信に成功しました。"
                },
                complaint: {
                    title: "違反を報告する",
                    complaint_1: "子供の関与",
                    complaint_5: "詐欺",
                    complaint_2: "プレゼントを乞います",
                    more: "詳細に説明して下さい。",
                    word: "不平をいう",
                    nudity: "ヌード",
                    dont_like: "このユーザーが気に入らない",
                    inappropriate_content: "受け入れられない内容",
                    span_or_scam: "スパムまたは詐欺"
                },
                success_register: {
                    title: "登録に成功しました",
                    keep_chat: "女性と話し続けてください。"
                },
                present_success: {
                    title_2: "あなたにプレゼントがあります！",
                    thanks: "ありがとう",
                    present_from: "{giver_nick} からギフトを頂いた。"
                },
                photo_view: {
                    text_1: "プレミアムユーザーのみが利用できます。",
                    text_2: "皆さんがアクセスできる",
                    stub_only_premium: "プレミアムのみ"
                },
                remove_favourite: {
                    text: "お気に入りから削除しますか？"
                },
                remove_gallery: {
                    title: "削除する",
                    text: "ギャラリーから削除しますか？"
                },
                chat: {
                    value_video_chat_text: "チャットルーレットでチャットの価格",
                    value_direct_video_chat_text: "プライベート電話の価格",
                    top_up_balance_text_web: "チャットを続けるにはバランスを補充してください"
                },
                block_user: {
                    title: "ブロックする",
                    confirm_text: "このユーザーをブロックしてもよろしいですか?"
                },
                prohibition: {
                    title: "禁止されています",
                    item_1: "性器の\nデモンストレーション"
                },
                nudity_warning: {
                    title_1: "自分を見せて",
                    title_2: "あなたの写真のみ",
                    title_3: "マナー",
                    warning_1: "あなたがはっきりと見える写真を選んでください",
                    warning_2: "他人が写っている画像をアップしないでください。削除されることになります。",
                    warning_3: "ヌードや猥褻な画像はご遠慮ください"
                },
                messenger_warning_limit: {
                    text_free: "1 日あたりの上限を使い切りました。プレミアムを使ってください",
                    text_prem: "1 日あたりの上限を使い切りました。これからメッセージごとに課金されます",
                    text_anonim: "メッセージを表示するには、ログインまたは登録する必要があります"
                },
                liking_send: {
                    text: "彼があなたに連絡できるために「いいね！」を送りましょう"
                },
                billing: {
                    subtitle_3: "ダイヤモンドの袋を選んでください",
                    subtitle_2: "永遠に利用出来るプレミアム（プレゼント）",
                    messages: "メッセージ",
                    choose_payment: "支払い方法を選んで下さい。",
                    agreement: "支払いを行うことにより、私は法定年齢に達していることを確認し、下記に同意します",
                    terms_conditions: "規約と規則で"
                },
                accept_years: {
                    sub_title: "次に進む前に、お客様が18歳以上であることを確認し、以下の規約に同意してください：",
                    rule_1: "必要な年齢に達していることを確認する。",
                    rule_2: "未成年者にMirami.chatを利用させないことを保証します。",
                    rule_3: "利用者は、未成年と思われる利用者がいた場合、直ちに当社に通知することを保証するものとします。",
                    welcome: "よこそ"
                },
                rules: {
                    title: "リマインダー",
                    text_public_chats: "公開チャット",
                    text_nudity: "ヌードは禁止です！",
                    text_sexual_context: "性的行為は禁止です！",
                    text_private_chats: "ダイレクト・チャット",
                    text_free: "自分らしくいられる。",
                    text_moderation: "公開通話も非公開通話も、モデレートすることができる。",
                    text_chat_indicator: "チャットは常に変更される可能性がありますので、目を離さないでください。",
                    text_rules: "ビデオチャットのルール",
                    memo: "リマインダー",
                    update_date: "更新日: {0｝",
                    list_text_1: "ビデオチャットをする新しい男性を探している普通の独身女性のように振る舞いましょう。",
                    list_text_2: "あなたの顔が会話相手にはっきりと見えるようにしてください。",
                    list_text_3: "会話相手に十分な注意を払い、常に最初に書き込み、男性に返信しましょう。",
                    list_text_4: "他のビデオチャットでマルチストリーミングを実行しないでください。",
                    list_text_5: "チャットの種類に応じた行動ルールに従ってください（ビデオチャットのステータスは、会話相手のアバターの横に対応するアイコンで表示されます）：",
                    text_public_chat: "パブリックチャット",
                    text_private_chat: "プライベートチャット",
                    text_nudity_context: "ヌードや性的な行為*は禁止されています。",
                    text_nudity_context_allowed: "ヌードおよび性的行為*は、会話相手が法定年齢に達しており、同意している場合に許可されます。",
                    text_nudity_additional: "*性行為には、性器の露出、トップレス、下着や過度に露出した服装、性的なポーズ、身体への愛撫、口や舌の動きなどが含まれます。",
                    text_salary: "ここでお金を稼いでいることを誰にも言わないでください！",
                    full_rules: "ルール全リストは {here} をご覧ください。",
                    here: "こちら",
                    text_ban: "プラットフォームの規則に違反した場合、あなたのアカウントは永久に禁止され、あなたが稼いだすべてのお金を失うことになります！"
                },
                requisites: {
                    text_first: "あなたの収益はあなたの暗号通貨ウォレットから引き出されます。支払いを受け取るには、どのプラットフォームでもUSDT (TRC-20) 暗号ウォレットが必要です。",
                    text_second: "お持ちでない方は、Binanceやその他の仮想通貨取引所に登録して作成してください。 無料です。",
                    text_third: "USDT(TRC-20)のアドレスのみご記入ください。間違った住所を記入した場合、その責任はお客様に帰します。",
                    address_usdt: "USDTアドレス（TRC-20）",
                    address_usdt_error: "このアドレスはUSDT（TRC-20）のものではありません。"
                },
                nudity_error: {
                    text: "写真にはヌードが含まれているためアップロードできません。"
                },
                denied_camera: {
                    title_3: "カメラまたはマイクが接続されていません",
                    title_2: "考え直しましたか。",
                    message: "カメラへのアクセスを許可していませんから女性はお客様を見ることができませんし、チャットを開始することができません。",
                    message_girl: "カメラへのアクセスを許可していませんから、男性は見ることができませんし、チャットを開始することができません。",
                    restart_page: "ページをリロードして、カメラの使用を許可すると、すぐにチャットを開始できます。"
                },
                accept_camera: {
                    subtitle_2: "カメラとマイクへのアクセスを許可する",
                    title: "女性はあなたを見たいです。",
                    allow_camera_first: "女性があなたを見ることができるように、アプリはカメラとマイクにアクセスする必要となります。",
                    allow_camera_second: "&nbsp;",
                    allow_camera_girl_bold: "カメラなしでチャットを開始できません."
                },
                girloffline: {
                    text_3: "今女性は",
                    text_4: "クールな機能を使用してください。😎"
                },
                choose_file: {
                    title: "ファイルを選択する",
                    text: "ヌードは禁止されています。 InstagramやTikTokに適切した自分のメディアのみを使用してください。",
                    only_premium: "プレミアムのみ"
                },
                recovery: {
                    title: "アクセスリカバリ",
                    enter_new_password: "MiraMiチャットへのアクセスリカバリ",
                    invalid_recovery_key: "アクセスを復元するためのリンクが無効です。",
                    success: "新しいパスワードが正常に設定されました。 これで、ログインできます。",
                    sent_link: "パスワードをリセットするためのリンクが電子メール{email}に送信されました。 メールが届かない場合は、メールアドレスが正しいかスパムかを確認してください。",
                    reset_password: "パスワードをリセットする",
                    info_text: "登録時に使用したメールアドレスを入力してください。<br/>パスワードのリセット用特別なリンクが記載されたメールアドレスをお送りします。"
                },
                model_status: {
                    title: "アクティビティステータス",
                    subtitle: "もっと稼ぎましょう",
                    free_user: "ただのユーザと一生に",
                    prem_user: "プレミアムののユーザと一緒に",
                    pay_start: "通信の支払いは{after}開始されます。",
                    pay_start_after: "10秒後に",
                    descr_top: "モデルが最大レートを受け取り、ルーレットで優先権を持つことを許可します。 ・・・から{auto}アクティブになります",
                    descr_top_auto: "20日間自動的に",
                    if_1: "レファレンスプログラム参加者は買いました",
                    if_2: "あなたと話した後、男性は買いました",
                    if_3: "プレミアムのお客様との継続的なチャット{min}",
                    if_3_min: "3分",
                    status_reload: "次の条件のいずれかが満たされた場合、ステータスは{auto}",
                    status_reload_auto: "自動的に10日間延長されます"
                },
                profile: {
                    title: "プロファイル",
                    affiliate: "レフェレンスプログラム",
                    link: "リンク",
                    count: "人数",
                    profit: "利益"
                },
                warning_activity: {
                    title: "注意！ チャットで欠席したことを発見しました。",
                    message: "対話者を無視しないでください。無視しないと、システムによって検索から除外され、表示される頻度が少なくなります。"
                },
                add_avatar: {
                    title: "アバターを追加",
                    text: "パートナー探しを始める前に、アバターをアップロードしてください。"
                },
                penalty_received: {
                    title: "ペナルティ",
                    total_penalties: "罰則の合計:",
                    first_penalty: "これはあなたの最初の違反です。7日以内に20,000コイン以上を獲得し、ルール違反をしなければ、コインをお返しします。",
                    reason: "理由",
                    place: "ロケーション",
                    comment: "コメント：",
                    screenshot: "違反のスクリーンショット",
                    sexual_behavior: "性的に露骨な行為"
                },
                image_upload_error: {
                    text: "個人情報やスクリーンショットを共有しないでください。注意して、Mirami.chatで直接やり取りしてください。"
                },
                camscore: {
                    title: "あなたのCamscore",
                    description: "Camscoreが「良い」または「優秀」と評価されると、TOPステータスと優先キューを獲得できます。",
                    description_undefined: "500回未満のビデオチャットしか行っていないため、Camscoreを計算できません。<br/>ビデオチャットにもっと時間を割いてください。",
                    what_is: "Camscoreとは？",
                    status: {
                        none: "未定義",
                        terrible: "ひどい",
                        bad: "悪い",
                        good: "良い",
                        excellent: "優秀"
                    },
                    text: {
                        line_1: "Camscoreは、プラットフォーム上でのモデルの全体的な生産性と収益性を反映する評価です。",
                        line_2: "Camscoreは、過去7日間の収益と5秒以上のチャットを基に計算されます。プライベートチャットやギフトで稼ぐほど、Camscoreが向上します。毎日、最新の7日間の結果を考慮してスコアが再計算されます。そのため、モデルの活動がスコアの上昇や低下に直接影響します。",
                        line_3: "この評価は、収益に直接影響を与えるいくつかの要因に依存しています：",
                        line_4: "オンライン時間：オンラインでの時間が長く、積極的にユーザーと交流するほど、収益の機会が増えます。",
                        line_5: "購入頻度：プライベートチャットやギフトの購入が多いほど、Camscoreが向上します。",
                        line_6: "ビデオチャットの延長：ビデオ通話を延長する回数が増えるほどスコアが上がります。定期的な通話の理由を提供することが推奨されます。",
                        line_7: "イニシアティブ：ユーザーが最初の行動を起こすのを待たないでください。自分からメッセージを送ったり通話したりして、積極性を示してください。",
                        line_8: "活動性と創造性：高品質な映像、適切な照明、積極的なコミュニケーションがユーザーの支出を促します。",
                        line_9: "したがって、モデルの収益が高いほどCamscoreが向上し、プラットフォームのトップにランクインしてさらに多くのユーザーを引き付けることができます。"
                    }
                },
                santa_top: {
                    title: "サンタのおすすめ 🎄",
                    text1: "クリスマスコンテストに参加して追加ボーナスを稼ぎましょう！🎁 1日で：$20を稼ぐと$5を獲得、$45を達成すると$15を獲得、そして$100を達成するとなんと$35を獲得！",
                    text2: "あなたの努力を素敵なプレゼントに変えましょう ❤️",
                    every_day: "✨ 12月31日まで毎日開催",
                    launch_auto: "毎日、現地時間で自動的に開始されます。",
                    stats_update: "⏰ 統計は約5分ごとに更新されます。"
                }
            },
            profile: {
                email_notifications: "電子メール通知",
                change_password: "パスワードの変更",
                new_password: "新パスワード",
                repeat_password: "パスワードを認証してください",
                passwords_not_match: "パスワードは合わない",
                delete_account: "アカウントを削除する",
                about: "自分について",
                birthday: "誕生日",
                receive_guests: "プレミアムお客さまからの通知を受け取ります。",
                receive_girls: "お気に入りの女性がオンラインで、重要な情報があるときに通知を受け取ります。",
                premium_btn: "プレミアムになる",
                bad_btc: "そのようなBTCウォレットはありません。",
                actions: {
                    invite: "チャットに招待する",
                    start_chat: "ビデオコール",
                    remove_favourite: "お気に入りから削除する",
                    message: "メッセージ",
                    was_invited: "招待書を送りました",
                    cancel_notify: "通知をキャンセルする",
                    notify_online: "オンラインになると通知する"
                },
                premium_descr: "プレミアムユーザーになり、すべての機能へのフルアクセスを取得します。",
                subtitle: {
                    foto: "写真",
                    video: "ビデオ"
                },
                foto_descr: "ユーザーがお客様をもっとよく知るために写真を追加してください。",
                verify_descr: "信頼を得られるよう本人確認を行ってください",
                geo_button: "私の地理データ",
                geo_description: "私の国を表示する",
                rp_btn: "ここにいます",
                rules: {
                    forbidden: {
                        title: "禁止",
                        text_1: "公開チャットでのヌードと性的行為。",
                        text_2: "複数のアカウントを使用する。",
                        text_3: "ヌード写真やビデオをアップロードする。",
                        text_4: "他人のアカウントを使う。",
                        text_5: "金銭を要求するか、他の支払い方法を提示する。",
                        text_6: "個人データ（電話番号、ソーシャルネットワークなど）を共有する。",
                        text_7: "誰かとビデオチャットに入る。",
                        text_8: "自動化（ボット、ウェブカメラによるビデオ放送など）を利用する。",
                        text_9: "相手を無視する（画面に映らない、テキストメッセージに返信しない、他のことに気を取られる）"
                    },
                    allowed: {
                        title: "可",
                        text_1: "プライベートビデオチャットでは、自分にとっても相手にとっても心地よく感じられるように、自由に振る舞ってください。",
                        text_2: "できるだけ長く通話を延長してください。",
                        text_3: "メッセージに返信して会話を始めます。優しく、社交的で、笑顔でいてください。",
                        text_4: "十分な照明の下で、カメラの前に立ってください。はっきりと見えるはずです。",
                        text_5: "自分の写真だけをアップロードしてください。",
                        text_6: "未成年者、ハラスメント、不適切な性別に遭遇した場合は、ユーザーを報告してください。",
                        text_7: "少なくとも、月に１回はオンラインに接続しないと、残高はゼロにリセットされます。"
                    },
                    warn: "すべての不正行為と違反は、モデレーターとボットによって監視されます。罰金または永久追放される可能性があります。"
                },
                queen_day: "今日の女王",
                queen_week: "今週の女王",
                queen_mirami: "ミラミ・クイーン",
                blur_button: "対話相手とのビデオチャットをぼかす",
                blur_description: "ぼかしを解除するには、ビデオチャット画面をタップしてください",
                not_found_title: "このユーザーは見つかりませんでした",
                not_found_description: "今すぐ新しい出会いを！",
                tab_personal: "自分の情報",
                tab_settings: "アカウントの設定",
                tab_rules: "規則",
                tg_link_1: "内の",
                tg_link_2: "Telegramの公式チャネル",
                about_girl: "女性について",
                bad_nickname: "ニックネームは3文字以上である必要があります。",
                bad_about: "自分について文章は最大文字数が2000文字です。",
                personal_info: "自分の情報",
                btc_wallet: "ビットコインウォレットTotalcoin",
                phone: "（電話番号）",
                birthday_required: "生年月日の登録するのは必要です。",
                password_success: "パスワードの変更が完了しました。",
                my_settings: "自分の設定",
                avatar_only_image: "アップロードできるのはjpg、pngのみです。",
                avatar_file_size: "最大ファイルサイズは2MBです。",
                undefined_avatar_problems: "ファイルの保存に不明な問題がありました。",
                last_visit_girl: "オンラインだった",
                video_descr: "人気になるために面白いビデオを追加してください。"
            },
            main: {
                history_chat_title: "会話の記録",
                chat_men: "ビデオチャットを開始",
                h1: "MiraMi　ー女性とのランダムなビデオチャット",
                h1_girl: "MiraMi　ー男性とのランダムなビデオチャット",
                sign_1: "孤独な美人がオンラインであなたを待っています！",
                sign_2: "女性の対話者を見つけたいですか？",
                sign_2_girl: "男性の対話者を見つけたいですか？",
                camera_need: "カメラをONして、女性の検索を開始します。",
                camera_need_girl: "カメラをONして、検索を開始します。"
            },
            sections: {
                affiliate: "レフェレンスプログラム",
                top: "TOP Mirami",
                logout: "出る",
                billing: "分を買う",
                billing_messages: "メセージを買う",
                main: "ビデオチャット",
                girls: "女性",
                favourites: "お気に入る",
                auto_translate: "自動翻訳",
                gifts: "プレゼント"
            },
            virtual_date: {
                earn_more_money_guys: "MiraMiで会ってもっとお金を稼ごう！",
                invited: "招待された",
                reward: "稼いだ",
                invite_guys: "男性を招待して",
                invite_girls: "女性を招待して",
                how_work: {
                    title: "使い方",
                    item_1: "出会い系サイトやソーシャルネットワークなどで男性に会いましょう。 イチャイチャし、自分の写真を見せて男性の興味を刺激してください。",
                    item_2: "男がすでに惹かれている場合は、彼に自分の部屋へのリンクを送信して、MiraMiビデオチャットで自分自身を見せてチャットするように招待しましょう。",
                    item_3: "彼が本当にあなたを好きなら、彼は二人で時間を過ごすためにプレミアムアクセスを購入するでしょう。",
                    item_4: "{bonus}があなたの収入に！ このお客様は永久にあなたの紹介になり、彼の購入ごとに{reward}を受け取ります。",
                    item_4_bonus: "追加ボーナス",
                    item_4_reward: "15％の報酬"
                },
                link_guys: "男性を招待するためのリンク",
                earn_more_money_girls: "MiraMiに女性を招待してもっと稼ごう！",
                invite_models: "モデルを招待して、プレミアム収益の10％を獲得します。",
                link_girls: "女性を招待するためのリンク"
            },
            gifts: {
                title: "私のプレゼント",
                empty: "今はプレゼントがありません。",
                from: "{giver_nick} より",
                block: "プレゼントを頂けません。"
            },
            withdraw: {
                go: "引き出す",
                balance: {
                    title: "バランス",
                    info: "インフォメーション",
                    rating: "評価",
                    minimal_sum: "コインの最低交換枚数は{0}枚です。",
                    any_day: "払い戻しはいつでも請求できます。",
                    every_thursday: "毎週木曜日21:00（GMT+3）に、当社のシステムがお客様の獲得コインを再計算します。支払いは金曜日に行われます。",
                    requisites: "銀行詳細",
                    my_requisites: "私の詳細",
                    actual_info: "支払いに関するすべての関連情報は、当社のウェブサイトをご覧ください。",
                    official_channel: "テレグラムの公式チャンネル",
                    withdraw: "辞退",
                    error_minimal_sum: "最低引き出し額は{0}コインです。"
                },
                history: {
                    title: "支払い履歴",
                    income_sum: "通算の収入：",
                    success: "成功しました",
                    declined: "拒否されました",
                    waiting: "保留中"
                },
                title: "資金の引き出し",
                your_wallet: "お客様のビットコインウォレットTotalcoin"
            },
            ban: {
                reason: {
                    bad_connection: "貧弱な接続",
                    other: "その他",
                    sex: "性行為",
                    nudse: "カメラフレーム内のヌード",
                    absence: "カメラフレームにいないこと",
                    dont_attention: "対話者へのアアテンションがありません",
                    video: "ビデオ資料の使用",
                    multi_accounts: "いくつかのアカウントを使用する",
                    alien_account: "他人のアカウントを使用する"
                },
                your_ban: "あなたは禁止されています",
                what_reason: "アカウントが停止されました。理由は",
                unban_time: "ロック解除日",
                infinity: "永遠に",
                comment: "管理者からのコメント"
            },
            messenger: {
                antispam: "チャットは匿名で行われるため、連絡先やリンクを共有することは禁じられています。さらに試行すると、アカウントは完全にブロックされます。",
                dialog_timer_label: "すぐ消えます",
                dialog_male_liking_label: "😍があなたを気に入りました！",
                dialog_female_liking_label: "💖「いいね！」を送りました！",
                dialog_gift_offer_label: "😉彼女は退屈しています。ギフトを送ってください！",
                dialog_message: "ギフト",
                dialog_not_support: "サポートされていません",
                dialog_empty_state_female: "ここにはまだ何もありません\n先にメッセージを書きましょう！",
                dialog_empty_state_male: "彼女より先にメッセージを送りましょう！",
                select_girl: "女性を選ぶ",
                modal_message_price_label: "メッセージ料金",
                dialog_gift_offer_female_label: "😜ギフトを送ると、彼女はあなたのメッセージを先に見てくれます",
                dialog_gift_offer_male_label: "🤫彼はあなたにギフトを贈ろうと考えています。彼に連絡しましょう",
                typing: "入力中",
                dialog_liking_text: "こんにちは、あなたが気に入りました。話しましょう！🔥🔥",
                confirm_clear_history_chat: "メッセージの履歴を削除してもよろしいですか？",
                confirm_delete_chat: "会話を削除してもよろしいですか？",
                btn_clear_chat: "メッセージの履歴を削除する",
                delete_dialog: "チャットを削除する",
                timer_label: "メッセージは削除されるまで",
                timer_descr: "このメッセージは、プレミアム ユーザーのみが利用できます",
                you: "あなた",
                sent: "送りました",
                read: "読みました",
                title: "メッセンジャー",
                select_dialogue: "話すために,<br/>会話を選んで下さい。",
                start_date: "まだメッセージがありません。<br/>今すぐ女性と会話しましょう！",
                fill_package: "会話を継続するには、<br/>メッセージのパッケージを補充してください。",
                read_messege: "女性からのメッセージをお読みください。<br/> 1時間で削除されます。",
                start_reg: "女の子とチャットするには <br/> ログインまたは登録が必要です。",
                chat_with_her: "彼女とチャットするために<br/>登録してください。",
                no_dialogue: "まだメセージがありません。",
                dialog_violation_label: "画像削除",
                dialog_violation_message: "アプリケーションのルールに準拠していないため、画像が削除されました。"
            },
            check_age: {
                main_title: "検証",
                verify_button: "検証する"
            },
            alerts: {
                new_currency_title: "注意",
                new_currency_first_label: "アプリの通貨",
                new_currency_second_label: "同等の金額が残高に加算されました。",
                limit_function2: "プレミアムユーザーのみがアクセスできます。",
                have_active_chat: "アクティブチャットをしています。",
                confirm: "確認してください。",
                success_payment: "残高が正常に補充されました！"
            },
            verification: {
                rule_1: "書類があなたのものであり、良好な状態であることを確認してください。",
                rule_2: "拒否されたものも含めて、これ以上アカウントがないことを確認してください。",
                rule_3: "偽造または改ざんされた書類は使用しないでください。",
                rule_4: "アカウント所有者のみが認証プロセスを実行できます。",
                info_text_1: "当社のシステムは、お客様の顔とデータに基づいて、偽造書類やすでにアカウントを持っていることを自動的に検出します。",
                info_text_2: "これらの要件を無視しないでください。さもなければ、あなたのアカウントは自動的にブロックされます。",
                info_text_3: "アカウントの認証に失敗した場合は、メールでご連絡ください。問題とお客様のケースを解決します。"
            },
            top_girls: {
                one_day: "今日のトップ",
                one_week: "今週のトップ",
                all_time: "ずっと",
                your_rating: "お客様の評価",
                your_place: "お客様は列の{0}です",
                yesterday_winners: "昨日の勝者",
                prev_week_winners: "先週の勝者",
                rules_button: "評価はどのように作成されますか？",
                daily_rating: "毎日の評価",
                current_daily_rating: "今日の評価",
                weekly_rating: "週間評価",
                current_weekly_rating: "今週の評価",
                all_time_rating: "歴代ランキング",
                current_place: "現在のランキング: {0} ({1})",
                yesterday_place: "昨日のランキング: {0} ({1})",
                previous_week_place: "先週のランキング: {0} ({1})",
                rules: {
                    title: "以下のポイントを獲得できます。",
                    rule_1: "ビデオチャットの継続時間",
                    rule_3: "チャットする人からの肯定的な反応",
                    rule_4: "友達として追加されることと毎日のアクティビティ",
                    rule_5: "チャットをした相手から否定的な反応があった場合、1週間アクティブでなかった場合、BANされた場合はポイントを失うことがあります。"
                }
            },
            boys: {
                title: "Miramiユーザー"
            },
            favourites: {
                title: "お気に入り",
                add_girls: "好きな女性をお気に入りリストに追加して、すばやくアクセスできるようにします。",
                to_roulette: "チャットルーレット",
                empty_title: "お気に入りリストは空です",
                empty_text: "男性をお気に入りに追加して連絡を取り続けましょう",
                added_to_favorites: "{name}が{br}お気に入りに追加されました",
                you_in_favorites: "あなたが{br}お気に入りに追加されました"
            },
            catalog: {
                title: "女性のカタログ",
                online: "オンラインになっている女性",
                offline: "オフラインになっている女性",
                only_premium: "女性のフルカタログは、プレミアムユーザーのみが利用できます。"
            },
            history: {
                empty_title: "あなたのチャット履歴は空です。",
                empty_text: "今すぐ解決しましょう。"
            }
        }
          , B = window.location.href
          , V = "en";
        -1 !== B.indexOf("/ru/") ? V = "ru" : -1 !== B.indexOf("/en/") ? V = "en" : -1 !== B.indexOf("/de/") ? V = "de" : -1 !== B.indexOf("/ar/") ? V = "ar" : -1 !== B.indexOf("/fr/") ? V = "fr" : -1 !== B.indexOf("/es/") ? V = "es" : -1 !== B.indexOf("/it/") ? V = "it" : -1 !== B.indexOf("/zh/") ? V = "zh" : -1 !== B.indexOf("/pt/") ? V = "pt" : -1 !== B.indexOf("/ko/") ? V = "ko" : -1 !== B.indexOf("/ja/") && (V = "ja"),
        m["a"].commit("user/setLanguage", V);
        var U = document.querySelector("body");
        V !== document.documentElement.lang && (document.documentElement.lang = V),
        "ar" !== V || document.documentElement.dir && "rtl" === document.documentElement.dir || (U.className = U.className + " rtl",
        document.documentElement.dir = "rtl"),
        "ar" !== V && document.documentElement.dir && "rtl" === document.documentElement.dir && (U.className = U.className.replace("rtl", ""),
        document.documentElement.dir = "ltr"),
        n["default"].use(P["a"]);
        var G = {
            locale: m["a"].state.user.language,
            silentFallbackWarn: !0,
            fallbackLocale: "en",
            dateTimeFormats: {
                ru: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                en: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                de: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                ar: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                fr: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                es: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                it: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                pt: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                zh: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                ko: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                },
                ja: {
                    only_month: {
                        year: "numeric",
                        month: "long"
                    }
                }
            },
            numberFormats: {
                ru: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                },
                en: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                de: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                ar: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                fr: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                es: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                it: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                pt: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                zh: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                ko: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                },
                ja: {
                    round2: {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    },
                    coins: {
                        maximumFractionDigits: 8
                    }
                }
            },
            messages: {
                ru: I,
                en: O,
                de: A,
                ar: R,
                fr: M,
                es: z,
                it: D,
                pt: q,
                zh: j,
                ko: N,
                ja: L
            }
        }
          , $ = new P["a"](G);
        n["default"].prototype.$i18n1 = $;
        var F = $
          , K = a("99d1")
          , W = a("6b7f")
          , H = function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                ref: "messagesModals"
            }, [a("div", {
                ref: "modalTypeBlockAlert",
                staticClass: "modal simple-modal system-modal"
            }, [a("div", {
                staticClass: "modal__outer"
            }, [a("div", {
                staticClass: "modal__before modal__close-handler",
                on: {
                    click: e.closeAll
                }
            }), a("div", {
                staticClass: "modal__content"
            }, [a("span", {
                staticClass: "modal__close modal__close-handler icon icon-close",
                on: {
                    click: e.closeAll
                }
            }), a("div", {
                staticClass: "modal__body"
            }, [a("p", {
                staticClass: "modal__title"
            }, [e._v(e._s(e.modalTypeBlockAlert.title))]), a("p", {
                staticClass: "text-center"
            }, [e._v(e._s(e.modalTypeBlockAlert.message))])])])])]), a("div", {
                ref: "modalTypeBlockAll",
                staticClass: "modal simple-modal system-modal"
            }, [a("div", {
                staticClass: "modal__outer"
            }, [a("div", {
                staticClass: "modal__before modal__close-handler"
            }), a("div", {
                staticClass: "modal__content"
            }, [a("div", {
                staticClass: "modal__body"
            }, [a("p", {
                staticClass: "modal__title"
            }, [e._v(e._s(e.modalTypeBlockAll.title))]), a("p", {
                staticClass: "text-center"
            }, [e._v(e._s(e.modalTypeBlockAll.message))]), a("div", {
                staticClass: "buttons"
            }, [a("span", {
                staticClass: "button modal__close-handler",
                attrs: {
                    onClick: "window.location.reload()",
                    type: "button"
                }
            }, [e._v(e._s(e.$i18n1.t("errors.network.button")))])])])])])]), a("div", {
                ref: "modalTypeAlert",
                staticClass: "modal simple-modal system-modal"
            }, [a("div", {
                staticClass: "modal__outer"
            }, [a("div", {
                staticClass: "modal__before modal__close-handler",
                on: {
                    click: e.closeAll
                }
            }), a("div", {
                staticClass: "modal__content"
            }, [a("span", {
                staticClass: "modal__close modal__close-handler icon icon-close",
                on: {
                    click: e.closeAll
                }
            }), a("div", {
                staticClass: "modal__body"
            }, [a("p", {
                staticClass: "modal__title"
            }, [e._v(e._s(e.modalTypeAlert.message))]), a("div", {
                staticClass: "buttons"
            }, [a("span", {
                staticClass: "button modal__close-handler",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.closeAll
                }
            }, [e._v(e._s(e.$i18n1.t("staff.buttons.ok")))])])])])])]), a("div", {
                ref: "modalTypeConfirm",
                staticClass: "modal simple-modal system-modal"
            }, [a("div", {
                staticClass: "modal__outer"
            }, [a("div", {
                staticClass: "modal__before modal__close-handler",
                on: {
                    click: e.closeAll
                }
            }), a("div", {
                staticClass: "modal__content"
            }, [a("span", {
                staticClass: "modal__close modal__close-handler icon icon-close",
                on: {
                    click: e.closeAll
                }
            }), a("div", {
                staticClass: "modal__body"
            }, [a("p", {
                staticClass: "modal__title",
                domProps: {
                    innerHTML: e._s(e.modalTypeConfirm.message)
                }
            }), a("div", {
                staticClass: "buttons"
            }, [a("span", {
                staticClass: "button button-gray modal__close-handler",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.confirmReject
                }
            }, [e._v(e._s(e.$i18n1.t("staff.buttons.cancel")))]), a("span", {
                staticClass: "button",
                attrs: {
                    disabled: e.modalTypeConfirm.acceptEnableBySeconds,
                    type: "button"
                },
                on: {
                    click: e.confirmAccept
                }
            }, [e._v(e._s(e.$i18n1.t("staff.buttons.ok")) + "\n                        "), e.modalTypeConfirm.acceptEnableBySeconds ? a("span", [e._v(" (" + e._s(e.modalTypeConfirm.acceptEnableBySeconds) + ")")]) : e._e()])])])])])])])
        }
          , Y = []
          , Z = {
            data: function() {
                return {
                    confirmCallback: null,
                    modalTypeBlockAlert: {
                        title: "Error",
                        message: "Empty"
                    },
                    modalTypeAlert: {
                        title: this.$i18n1.t("staff.alerts.title"),
                        message: "Empty"
                    },
                    modalTypeConfirm: {
                        title: this.$i18n1.t("staff.confirms.title"),
                        message: "Empty",
                        acceptEnableBySeconds: null
                    },
                    modalTypeBlockAll: {
                        title: this.$i18n1.t("staff.alerts.title"),
                        message: "Empty"
                    }
                }
            },
            mounted: function() {},
            methods: {
                open: function(e) {
                    this.$refs[e].classList.add("opened");
                    var t = this;
                    this.__keydownListener && (document.removeEventListener("keydown", this.__keydownListener),
                    this.__keydownListener = null),
                    this.__keydownListener = function(a) {
                        t.keyDownListener(a, e)
                    }
                    ,
                    document.addEventListener("keydown", this.__keydownListener)
                },
                confirm: function(e, t, a) {
                    a && (this.modalTypeConfirm.acceptEnableBySeconds = a,
                    setTimeout(this.tickAccept, 1e3)),
                    this.open(e),
                    t && (this.confirmCallback = t)
                },
                tickAccept: function() {
                    if (this.modalTypeConfirm.acceptEnableBySeconds--,
                    this.modalTypeConfirm.acceptEnableBySeconds <= 0)
                        return this.modalTypeConfirm.acceptEnableBySeconds = null,
                        !0;
                    setTimeout(this.tickAccept, 1e3)
                },
                confirmAccept: function() {
                    this.confirmCallback && (this.confirmCallback(),
                    this.confirmCallback = null),
                    this.closeAll()
                },
                confirmReject: function() {
                    this.closeAll()
                },
                closeAll: function() {
                    this.confirmCallback = null,
                    document.removeEventListener("keydown", this.__keydownListener),
                    this.__keydownListener = null;
                    for (var e = this.$refs.messagesModals.querySelectorAll(".modal.system-modal"), t = 0; t < e.length; t++)
                        e[t].classList.remove("opened")
                },
                keyDownListener: function(e, t) {
                    e.preventDefault(),
                    e.stopPropagation(),
                    13 !== e.keyCode && 27 !== e.keyCode || ("modalTypeBlockAlert" === t || "modalTypeAlert" === t ? this.closeAll() : "modalTypeBlockAll" === t && window.location.reload()),
                    13 !== e.keyCode || "modalTypeConfirm" !== t || this.modalTypeConfirm.acceptEnableBySeconds || this.confirmAccept(),
                    27 === e.keyCode && "modalTypeConfirm" === t && this.confirmReject()
                }
            }
        }
          , J = Z
          , Q = Object(S["a"])(J, H, Y, !1, null, null, null)
          , X = Q.exports
          , ee = {
            modalsInstance: null,
            install: function(e, t) {
                var a = e.extend(X)
                  , n = new a;
                this.modalsInstance = n,
                this.modalsInstance.$i18n1 = t,
                console.log(ee),
                n.$mount(),
                document.body.appendChild(n.$el),
                e.prototype.mModals = this
            },
            alert: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                this.modalsInstance.modalTypeAlert.message = e,
                t && (this.modalsInstance.modalTypeAlert.title = t),
                this.modalsInstance.open("modalTypeAlert")
            },
            error: function(e, t) {
                this.alert(this.modalsInstance.$i18n1.t("errors." + t + ".codes." + e), this.modalsInstance.$i18n1.t("errors.title"))
            },
            undefinedError: function(e) {
                this.alert(e, this.modalsInstance.$i18n1.t("errors.title_undefined"))
            },
            networkError: function() {
                this.modalsInstance.modalTypeBlockAll.message = this.modalsInstance.$i18n1.t("errors.network.message"),
                this.modalsInstance.modalTypeBlockAll.title = this.modalsInstance.$i18n1.t("errors.network.title"),
                this.modalsInstance.open("modalTypeBlockAll")
            },
            confirm: function(e, t, a) {
                this.modalsInstance.modalTypeConfirm.message = e,
                this.modalsInstance.confirm("modalTypeConfirm", t, a)
            }
        }
          , te = ee
          , ae = a("323e")
          , ne = a.n(ae)
          , ie = a("d225")
          , re = a("b0b4")
          , oe = function() {
            function e(t, a) {
                Object(ie["a"])(this, e),
                this.el = t,
                this.htmlPlaceholder = null,
                this.parent = t.parentNode,
                this.value = a;
                var n = this;
                this.__inputListener = function() {
                    n.__inputEvent(n.parent, n.el)
                }
                ,
                this.__focusListener = function() {
                    n.__focusEvent(n.parent, n.el)
                }
                ,
                this.__blurListener = function() {
                    n.__blurEvent(n.parent, n.el)
                }
                ,
                this.__clickListener = function() {
                    n.__clickEvent(n.parent, n.el, n.htmlPlaceholder)
                }
            }
            return Object(re["a"])(e, [{
                key: "bind",
                value: function() {
                    this.el.classList.contains("simple") || (null === this.parent.querySelector(".placeholder") ? this.el.insertAdjacentHTML("afterend", '<span class="placeholder">' + this.value + "</span>") : this.parent.querySelector(".placeholder").innerHTML = this.value,
                    "" !== this.el.value && this.parent.classList.add("notempty"),
                    this.el.addEventListener("focus", this.__focusListener),
                    this.el.addEventListener("keyup", this.__inputListener),
                    this.el.addEventListener("change", this.__inputListener),
                    this.el.addEventListener("blur", this.__blurListener),
                    this.htmlPlaceholder = this.parent.querySelector(".placeholder"),
                    this.htmlPlaceholder.addEventListener("click", this.__clickListener))
                }
            }, {
                key: "unbind",
                value: function() {
                    this.el.removeEventListener("focus", this.__focusListener),
                    this.el.removeEventListener("keyup", this.__inputListener),
                    this.el.removeEventListener("change", this.__inputListener),
                    this.el.removeEventListener("blur", this.__blurListener),
                    this.htmlPlaceholder.removeEventListener("click", this.__clickListener),
                    delete this.el._placeholder,
                    this.parent.querySelector(".placeholder").remove()
                }
            }, {
                key: "__inputEvent",
                value: function(e, t) {
                    "" !== t.value ? e.classList.add("notempty") : e.classList.remove("notempty")
                }
            }, {
                key: "__clickEvent",
                value: function(e, t, a) {
                    null !== e.querySelector("input, textarea, .textarea") && (t.hasAttribute("disabled") || (e.classList.add("active"),
                    t.focus()))
                }
            }, {
                key: "__focusEvent",
                value: function(e, t) {
                    e.classList.add("active")
                }
            }, {
                key: "__blurEvent",
                value: function(e, t) {
                    "" === t.value ? (e.classList.remove("active"),
                    e.classList.remove("notempty")) : e.classList.add("notempty")
                }
            }]),
            e
        }()
          , se = oe;
        function ce(e, t) {
            var a = t.value;
            t.modifiers;
            if ((e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && ue(e)) {
                var n = e._placeholder = new se(e,a);
                n.bind()
            } else
                e.setAttribute("placeholder", a)
        }
        function le(e) {
            e.hasOwnProperty("_placeholder") && e._placeholder.unbind()
        }
        function ue(e) {
            return "submit" !== e.getAttribute("type") && "radio" !== e.getAttribute("type") && "checkbox" !== e.getAttribute("type") && "file" !== e.getAttribute("type")
        }
        var de = function() {
            return {
                inserted: function(e, t, a) {
                    ce(e, t)
                },
                componentUpdated: function(e, t) {
                    t.value !== t.oldValue && (le(e),
                    ce(e, t))
                },
                unbind: le
            }
        }
          , me = {
            install: function(e) {
                e.directive("placeholder", de())
            },
            directive: de()
        }
          , _e = me
          , pe = a("cf94")
          , ge = a.n(pe)
          , he = a("a584")
          , fe = {
            goal: function(e, t, a) {
                a || (a = 0),
                a >= 20 || ("undefined" !== typeof window.yaCounter63022936 ? window.yaCounter63022936.reachGoal(e, t) : (a += 1,
                setTimeout((function() {
                    fe.goal(e, t, a)
                }
                ), 500)))
            }
        }
          , ve = fe
          , be = a("33ba")
          , ye = a.n(be)
          , we = "https";
        "http:" === window.location.protocol && (we = "http");
        var ke = "/socket.io"
          , xe = "3000"
          , Se = 1 === Number(Object({
            NODE_ENV: "production",
            VUE_APP_BUGSNAG_ID: "74131913cc5e3e7677e7a7ae209e37b8",
            VUE_APP_BUGSNAG: "1",
            VUE_APP_GTAG: "UA-166056108-1",
            VUE_APP_TOK_API_KEY: "46462862",
            VUE_APP_SERVICE_API_URL: "/api",
            VUE_APP_STORAGE_API_URL: "https://rda.la/api",
            VUE_APP_CHECKOUT_BASE: "https://mirami.chat/",
            VUE_APP_UPLOADS_BASE_URL: "https://mirami.chat/uploads/",
            VUE_APP_SOCKET_SERVER: "mirame.chat",
            VUE_APP_WEBRTC_SOCKET_SERVER: "ortc.mirame.chat",
            VUE_APP_WEBRTC_MONITORING: "https://ortc-api.rda.la/monitoring/log/",
            VUE_APP_WEBRTC_PK: "a6YrIjPuP43IIEKzBu4hZaRyjS6nBjFcomfI",
            VUE_APP_PATH_SOCKET: "/socket.io",
            VUE_APP_PATH_WEBRTC_SOCKET: "/signal",
            VUE_APP_SOCKET_RECONNECT_FREQ: "3000",
            VUE_APP_COIN_RATE: "1250",
            BASE_URL: "/"
        }).VUE_APP_DEBUG_MODE) || !1;
        m["a"].commit("loading", !0);
        var Ce = new l.a({
            debug: Se,
            connection: d()(we + "://mirame.chat", {
                path: ke,
                reconnection: !1,
                timeout: 1e4,
                transports: ["websocket"]
            }),
            vuex: {
                store: m["a"],
                actionPrefix: "socket_",
                mutationPrefix: "socket_"
            }
        });
        Ce.emitter.emit = function(e, t) {
            if ("connect" !== e || this.listeners.has(e))
                "notice" === e && (e = t.notice,
                t = t.data,
                "error" === e && this.emit("error_" + t.code, t)),
                this.listeners.has(e) && (Se && console.log("Broadcasting: #".concat(e, ", Data:"), t),
                this.listeners.get(e).forEach((function(e) {
                    e.callback.call(e.component, t)
                }
                ))),
                this.dispatchStore(e, t);
            else {
                var a = this;
                setTimeout((function() {
                    a.emit(e, t)
                }
                ), 50)
            }
        }
        ,
        Ce.waitAndReconnect = function() {
            m["a"].commit("loadingKey", ["reconnect", !0]),
            setTimeout((function() {
                Ce.io.connect()
            }
            ), xe)
        }
        ;
        var Te = Ce
          , Ee = a("e813")
          , Pe = a.n(Ee)
          , Ie = Te.io
          , Oe = {
            register: function(e) {
                var t = {};
                e && (t["ref_code"] = e),
                t["signature"] = "01f312c",
                t["device_type"] = "web",
                t["version"] = "2.0.1",
                this._send({
                    action: "AUTH",
                    data: t
                })
            },
            authByToken: function(e, t) {
                var a = {
                    token: e,
                    device_type: "web"
                };
                t && (a["ref_code"] = t),
                a["signature"] = "01f312c",
                a["version"] = "2.0.1",
                this._send({
                    action: "AUTH",
                    data: a
                })
            },
            authByLoginPass: function(e, t) {
                this._send({
                    action: "AUTH",
                    data: {
                        login: e,
                        password: t,
                        signature: "01f312c",
                        device_type: "web",
                        version: "2.0.1"
                    }
                })
            },
            setFpt: function() {
                var e = this;
                Pe.a.get({
                    excludes: {
                        userAgent: !0,
                        enumerateDevices: !0,
                        doNotTrack: !0,
                        pixelRatio: !0,
                        fontsFlash: !0
                    }
                }, (function(t) {
                    var a = t.map((function(e) {
                        return e.value
                    }
                    ))
                      , n = Pe.a.x64hash128(a.join(""), 31)
                      , i = window.location.href.split("?")
                      , r = "";
                    i.length > 1 && (r = i[1]);
                    var o = t.map((function(e) {
                        return "canvas" === e.key || "webgl" === e.key || "fonts" === e.key || "touchSupport" === e.key ? null : e.key + ":" + e.value
                    }
                    ));
                    e._send({
                        action: "SET_FPT",
                        data: {
                            fpt: n,
                            query_string: r,
                            device_info: o.join("|")
                        }
                    })
                }
                ))
            },
            subscriptionRoom: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "subscribe";
                this._send({
                    action: "SUBSCRIBTION_ROOM",
                    data: {
                        room: e,
                        type: a,
                        suffix: t
                    }
                })
            },
            subscribeOnline: function(e) {
                this._send({
                    action: "SUBSCRIBE",
                    data: {
                        user_id: e
                    }
                })
            },
            unSubscribeOnline: function(e) {
                this._send({
                    action: "UNSUBSCRIBE",
                    data: {
                        user_id: e
                    }
                })
            },
            addFavourite: function(e) {
                this._send({
                    action: "ADD_FAVOURITE",
                    data: {
                        user_id: e
                    }
                })
            },
            removeFavourite: function(e) {
                this._send({
                    action: "REMOVE_FAVOURITE",
                    data: {
                        user_id: e
                    }
                })
            },
            inviteGirl: function(e) {
                this._send({
                    action: "INVITE_TO_CHAT",
                    data: {
                        user_id: e
                    }
                })
            },
            updateProfile: function(e, t, a) {
                this._send({
                    action: "UPDATE_PROFILE",
                    data: {
                        email: e,
                        nick: t,
                        password: a,
                        locale: "en"
                    }
                })
            },
            logout: function() {
                this._send({
                    action: "LOGOUT",
                    data: {}
                })
            },
            searchCompany: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                e ? this._send({
                    action: "SEARCH_COMPANY",
                    data: {
                        target_id: e
                    }
                }) : this._send({
                    action: "SEARCH_COMPANY"
                })
            },
            outFromSearch: function() {
                this._send({
                    action: "OUT_FROM_SEARCH"
                })
            },
            searchPairAccept: function() {
                this._send({
                    action: "SEARCH_PAIR_ACCEPT"
                })
            },
            searchPairReject: function() {
                this._send({
                    action: "SEARCH_PAIR_REJECT"
                })
            },
            breakChat: function(e) {
                this._send({
                    action: "BREAK_SESSION",
                    data: {
                        session_id: e
                    }
                })
            },
            textChatMessage: function(e, t, a) {
                this._send({
                    action: "TEXT_CHAT_MESSAGE",
                    data: {
                        message: e,
                        message_id: t,
                        session_id: a
                    }
                })
            },
            changeLocale: function(e) {
                console.log(e),
                this._send({
                    action: "UPDATE_PROFILE",
                    data: {
                        locale: e
                    }
                })
            },
            giveGift: function(e, t) {
                this._send({
                    action: "GIVE_GIFT",
                    data: {
                        gift_id: e,
                        girl_id: t
                    }
                })
            },
            toComplain: function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                  , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
                  , r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null
                  , o = {
                    reason: e,
                    user_id: t,
                    comment: a
                };
                n && (o["session_id"] = n),
                i && (o["complainer_photo"] = i),
                r && (o["defendant_photo"] = r),
                this._send({
                    action: "TO_COMPLAIN",
                    data: o
                })
            },
            updatePushToken: function(e) {
                this._send({
                    action: "UPDATE_PUSH",
                    data: {
                        push_token: e
                    }
                })
            },
            gotNewBalanceInfo: function() {
                this._send({
                    action: "NEW_BALANCE_INFO_GOT"
                })
            },
            sessionReaction: function(e, t) {
                this._send({
                    action: "SESSION_UP_REACTION",
                    data: {
                        session_id: e,
                        type: t
                    }
                })
            },
            likingReaction: function(e) {
                this._send({
                    action: "LIKING_REACTION",
                    data: {
                        user_id: e
                    }
                })
            },
            startDialog: function(e) {
                return this._ack_promise_send({
                    action: "MESSENGER_START_DIALOG",
                    data: {
                        interlocutor_id: e
                    }
                })
            },
            getDialogs: function() {
                return this._ack_promise_send({
                    action: "MESSENGER_GET_DIALOGS",
                    data: {}
                })
            },
            getDialog: function(e) {
                return this._ack_promise_send({
                    action: "MESSENGER_GET_DIALOG",
                    data: {
                        dialog_id: e
                    }
                })
            },
            getDialogMessages: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1
                  , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , n = {
                    dialog_id: e,
                    page: t
                };
                return a && (n["before"] = a),
                this._ack_promise_send({
                    action: "MESSENGER_GET_DIALOG_MESSAGES",
                    data: n
                })
            },
            sendDialogMessage: function(e, t, a) {
                this._send({
                    action: "MESSENGER_MESSAGE",
                    data: {
                        dialog_id: e,
                        msg: t,
                        random_id: a
                    }
                })
            },
            readDialogMessages: function(e, t) {
                this._send({
                    action: "MESSENGER_READ_MESSAGE",
                    data: {
                        dialog_id: e,
                        message_ids: t
                    }
                })
            },
            deleteDialog: function(e) {
                this._send({
                    action: "MESSENGER_DELETE_DIALOG",
                    data: {
                        dialog_id: e
                    }
                })
            },
            cleanDialog: function(e) {
                this._send({
                    action: "MESSENGER_CLEAN_DIALOG",
                    data: {
                        dialog_id: e
                    }
                })
            },
            typingMessage: function(e, t) {
                this._send({
                    action: "MESSENGER_TYPING",
                    data: {
                        dialog_id: e,
                        typing: t
                    }
                })
            },
            getCountNewMessages: function() {
                return this._ack_promise_send({
                    action: "MESSENGER_GET_COUNT_NEW_MESSAGES",
                    data: {}
                })
            },
            _send: function(e) {
                Ie && Ie.emit("message_main", e)
            },
            _ack_promise_send: function(e) {
                if (Ie) {
                    var t = new Promise((function(t, a) {
                        Ie.emit("message_main", e, (function(e) {
                            t(e)
                        }
                        ))
                    }
                    ));
                    return t
                }
            }
        }
          , Ae = b.io
          , Re = {
            authByToken: function(e) {
                var t = {
                    token: e,
                    public_key: "a6YrIjPuP43IIEKzBu4hZaRyjS6nBjFcomfI",
                    device: "WebBrowser",
                    device_type: "web",
                    version: "1.0"
                };
                this._send({
                    action: "AUTH",
                    data: t
                })
            },
            joinSession: function(e) {
                this._send({
                    action: "JOIN_SESSION",
                    data: {
                        session_guid: e
                    }
                })
            },
            iceCandidate: function(e, t) {
                this.signal(e, "ice-candidate", t)
            },
            offer: function(e, t) {
                this.signal(e, "offer", t)
            },
            answer: function(e, t) {
                this.signal(e, "answer", t)
            },
            signal: function(e, t, a) {
                a = JSON.stringify(a),
                this._send({
                    action: "WEBRTC_SIGNAL",
                    data: {
                        session_guid: e,
                        type_signal: t,
                        payload: a
                    }
                })
            },
            peerMute: function(e) {
                this.log(e, "mute")
            },
            peerUnMute: function(e) {
                this.log(e, "unmute")
            },
            peerConnected: function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                a || (a = new Date),
                this._send({
                    action: "PEER_CONNECTED",
                    data: {
                        session_guid: e,
                        delta: t,
                        client_time: a
                    }
                })
            },
            peerNotConnected: function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                a || (a = new Date),
                this._send({
                    action: "PEER_NOT_CONNECTED",
                    data: {
                        session_guid: e,
                        delta: t,
                        client_time: a
                    }
                })
            },
            log: function(e, t) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                  , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                n || (n = new Date),
                this._send({
                    action: "LOG",
                    data: {
                        session_guid: e,
                        action: t,
                        client_time: n,
                        data: a
                    }
                })
            },
            _send: function(e) {
                Ae && Ae.emit("message_main", e)
            }
        }
          , Me = {
            beforeCreate: function() {
                var e = this;
                this.webrtcSockets || (this.webrtcSockets = {}),
                this.webrtcSockets.subscribe = function(t, a) {
                    e.$webrtcSocket.emitter.addListener(t, a, e)
                }
                ,
                this.webrtcSockets.unsubscribe = function(t) {
                    e.$webrtcSocket.emitter.removeListener(t, e)
                }
            },
            mounted: function() {
                var e = this;
                this.$options.webrtc_sockets && Object.keys(this.$options.webrtc_sockets).forEach((function(t) {
                    "subscribe" !== t && "unsubscribe" !== t && e.$webrtcSocket.emitter.addListener(t, e.$options.webrtc_sockets[t], e)
                }
                ))
            },
            beforeDestroy: function() {
                var e = this;
                this.$options.webrtc_sockets && Object.keys(this.$options.webrtc_sockets).forEach((function(t) {
                    e.$webrtcSocket.emitter.removeListener(t, e)
                }
                ))
            }
        }
          , ze = a("bc3a")
          , De = a.n(ze)
          , je = function(e, t) {
            e.interceptors.request.use((function(e) {
                var a = t.state.user.token;
                return e.headers.common["Client-Version"] = "2.0.0",
                "undefined" === typeof e.guest && a && (e.headers.common["Chat-Token"] = a),
                e
            }
            )),
            e.interceptors.response.use((function(e) {
                return e.data
            }
            ), (function(e) {
                var t = 0;
                return e.response.hasOwnProperty("data") && e.response.data.hasOwnProperty("code") && (t = e.response.data.code),
                Promise.reject({
                    code: t,
                    status: e.response.status
                })
            }
            ))
        }
          , qe = (a("96cf"),
        a("3b8d"))
          , Ne = function(e, t) {
            return {
                get: function() {
                    var a = Object(qe["a"])(regeneratorRuntime.mark((function a(n) {
                        var i, r, o = arguments;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return i = o.length > 1 && void 0 !== o[1] ? o[1] : {},
                                    r = o.length > 2 && void 0 !== o[2] && o[2],
                                    r ? i.hasOwnProperty("no_network_error") && (i["no_all_errors"] = 1) : t.commit("loading", !0),
                                    a.abrupt("return", e.get(n, i).finally((function() {
                                        r || t.commit("loading", !1)
                                    }
                                    )));
                                case 4:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )));
                    function n(e) {
                        return a.apply(this, arguments)
                    }
                    return n
                }(),
                post: function() {
                    var a = Object(qe["a"])(regeneratorRuntime.mark((function a(n, i) {
                        var r, o = arguments;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = o.length > 2 && void 0 !== o[2] && o[2],
                                    r || t.commit("loading", !0),
                                    a.abrupt("return", e.post(n, i).finally((function() {
                                        r || t.commit("loading", !1)
                                    }
                                    )));
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )));
                    function n(e, t) {
                        return a.apply(this, arguments)
                    }
                    return n
                }(),
                backgroundGet: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = n.length > 1 && void 0 !== n[1] ? n[1] : {},
                                    e.abrupt("return", this.get(t, a, !0));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                backgroundPost: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post(t, a, !0));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, a) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                cacheGet: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t, a, i) {
                        var r, o, s = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (r = s.length > 3 && void 0 !== s[3] ? s[3] : {},
                                    o = n["default"].$storage.get(t, null),
                                    !o) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", Promise.resolve(o));
                                case 6:
                                    return e.abrupt("return", this.get(i, r).then((function(e) {
                                        return n["default"].$storage.set(t, e, {
                                            ttl: 1e3 * a
                                        }),
                                        e
                                    }
                                    )));
                                case 7:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, a, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                uploadForm: function() {
                    var a = Object(qe["a"])(regeneratorRuntime.mark((function a(n, i) {
                        var r, o = arguments;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = o.length > 2 && void 0 !== o[2] && o[2],
                                    r || t.commit("loading", !0),
                                    a.abrupt("return", e.post(n, i, {
                                        headers: {
                                            "Content-Type": "multipart/form-data"
                                        }
                                    }).finally((function() {
                                        r || t.commit("loading", !1)
                                    }
                                    )));
                                case 3:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )));
                    function n(e, t) {
                        return a.apply(this, arguments)
                    }
                    return n
                }()
            }
        };
        function Le(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Be(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Le(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Le(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ve = function(e, t) {
            return Be({
                refStat: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("ref_stat"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                selfInfo: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("profile"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                girlInfo: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("girl_info", {
                                        params: {
                                            ref_code: t
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                deleteAvatarUrl: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("avatar/delete"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                saveProfile: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("profile", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getFavourites: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("favourites_pagination", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                checkFavourite: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("check_favourite", {
                                        params: {
                                            check_user_id: t
                                        }
                                    }, !0));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirls: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i = arguments;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = i.length > 1 && void 0 !== i[1] && i[1],
                                    n = {
                                        page: t
                                    },
                                    a && (n["force_cache"] = 1),
                                    e.abrupt("return", this.get("girls", {
                                        params: n
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGifts: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.backgroundGet("gifts", {
                                        params: {
                                            lang: t
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                withdraw: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("withdraw"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                checkBtc: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("check_btc", {
                                        params: {
                                            phone: t
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                countFavourites: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("count_favourites"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                girlGifts: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(a) {
                        var n;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return n = t.state.user.language,
                                    e.abrupt("return", this.get("girl_gifts", {
                                        params: {
                                            page: a,
                                            lang: n
                                        }
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function a(t) {
                        return e.apply(this, arguments)
                    }
                    return a
                }(),
                deleteAccount: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("delete_account"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getPassport: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("kyc"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getKycToken: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("ss/kyc/token"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                uploadPassport: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.uploadForm("upload_passport", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                forgotPassword: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("forgot_password", {
                                        params: {
                                            email: t
                                        }
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                recoveryPassword: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t, a) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("recovery_password", {
                                        recoveryKey: t,
                                        password: a
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, a) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                historyChats: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.backgroundGet("history_chats"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getBalance: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("balance"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                checkoutSpay: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("payment/spay?packet=" + t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                checkoutPaySelection: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("payment/pays?packet=" + t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                checkoutCloudpayments: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("payment/cloudpayments?packet=" + t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                banUser: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("/v2/manager/ban/impose", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                penaltyUser: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("/v2/manager/penalty/impose", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                penaltyRead: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("/v2/penalty/mark-all-as-read"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                banUserOld: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("ban_user", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                nsfwUser: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("user_nsfw", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                nsfwGalleryMedia: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("media_nsfw", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                showGirl: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.backgroundPost("stat/show_girl", {
                                        user_id: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                setAvatar: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("avatar/set", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                setManAvatar: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t, a, n) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = new FormData,
                                    i.append("img", t),
                                    e.abrupt("return", this.post("avatar", i));
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, a, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                createMedia: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("gallery/media", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                createMessengerMedia: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("/v2/gallery/media/messenger", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                deleteMedia: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("gallery/media/delete", {
                                        id: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                updateMedia: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("gallery/media/update", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGallery: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("gallery", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                likeGalleryMedia: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("gallery/media/like", t));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                logDevice: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("/log/camera", {
                                        device: t
                                    }, !0));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                sponsored: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.post("/sponsored"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirlsDailyTop: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/tournament/top/day/".concat(t)));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirlsDailyRatingCurrent: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/tournament/rating/current/day", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirlsWeeklyTop: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/tournament/top/week/".concat(t)));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirlsAllTimeTop: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/tournament/top/all-time"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirlsWeeklyRatingCurrent: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/tournament/rating/current/week", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getGirlsAllTimeRatingCurrent: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/tournament/rating/current", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getPaymentHistory: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/account/withdraw", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getPaymentStats: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/account/withdraw/statistics"));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getSettings: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/user/settings", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }(),
                getSantaReward: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.get("/v2/account/earnings/competition/profit", {
                                        params: t
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, Ne(e, t))
        }
          , Ue = "/api"
          , Ge = De.a.create({
            baseURL: Ue
        });
        je(Ge, m["a"]);
        var $e = Ve(Ge, m["a"])
          , Fe = function(e, t) {
            e.interceptors.request.use((function(e) {
                var a = t.state.user.storageToken;
                return "undefined" === typeof e.guest && a && (e.headers.common["User-Access-Token"] = a),
                e
            }
            )),
            e.interceptors.response.use((function(e) {
                return e.data
            }
            ), (function(e) {
                return Promise.reject({
                    code: 0,
                    status: e.response.status
                })
            }
            ))
        }
          , Ke = function(e, t) {
            return {
                upload: function() {
                    var a = Object(qe["a"])(regeneratorRuntime.mark((function a(n, i) {
                        var r, o, s = arguments;
                        return regeneratorRuntime.wrap((function(a) {
                            while (1)
                                switch (a.prev = a.next) {
                                case 0:
                                    return r = s.length > 2 && void 0 !== s[2] ? s[2] : {},
                                    o = s.length > 3 && void 0 !== s[3] && s[3],
                                    o || t.commit("loading", !0),
                                    r["headers"] = {
                                        "content-type": "multipart/form-data"
                                    },
                                    a.abrupt("return", e.post(n, i, r).finally((function() {
                                        o || t.commit("loading", !1)
                                    }
                                    )));
                                case 5:
                                case "end":
                                    return a.stop()
                                }
                        }
                        ), a)
                    }
                    )));
                    function n(e, t) {
                        return a.apply(this, arguments)
                    }
                    return n
                }()
            }
        };
        function We(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function He(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? We(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : We(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ye = function(e, t) {
            return He({
                uploadImage: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t, a, n) {
                        var i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return i = new FormData,
                                    i.append("image", t),
                                    i.append("image_original", a),
                                    i.append("file_type", n),
                                    e.abrupt("return", this.upload("/upload/image/mirami", i));
                                case 5:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, a, n) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, Ke(e, t))
        }
          , Ze = "https://rda.la/api"
          , Je = De.a.create({
            baseURL: Ze
        });
        Fe(Je, m["a"]);
        var Qe = Ye(Je, m["a"])
          , Xe = a("8832")
          , et = a.n(Xe)
          , tt = a("8682")
          , at = a("340b")
          , nt = a("e166")
          , it = a.n(nt)
          , rt = a("6d3b")
          , ot = a("5dc8")
          , st = a("8343")
          , ct = a("b42f")
          , lt = a("fb03")
          , ut = a.n(lt)
          , dt = (a("7f7f"),
        a("6762"),
        a("2fdb"),
        a("7618"))
          , mt = (a("7cdf"),
        a("8615"),
        a("55dd"),
        a("308d"))
          , _t = a("6bb5")
          , pt = a("013f")
          , gt = a("4e2b7")
          , ht = a("faa1")
          , ft = a("11c1");
        a("ac4d"),
        a("8a81"),
        a("7514");
        function vt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function bt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? vt(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : vt(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        function yt(e, t) {
            return t ? (e.audio.inbound.map((function(e) {
                var a = t.audio.inbound.find((function(t) {
                    return t.id === e.id
                }
                ));
                e.bitrate = xt(e, a, "bytesReceived"),
                e.packetRate = xt(e, a, "packetsReceived")
            }
            )),
            e.audio.outbound.map((function(e) {
                var a = t.audio.outbound.find((function(t) {
                    return t.id === e.id
                }
                ));
                e.bitrate = xt(e, a, "bytesSent"),
                e.packetRate = xt(e, a, "packetsSent")
            }
            )),
            e.video.inbound.map((function(e) {
                var a = t.video.inbound.find((function(t) {
                    return t.id === e.id
                }
                ));
                e.bitrate = xt(e, a, "bytesReceived"),
                e.packetRate = xt(e, a, "packetsReceived")
            }
            )),
            e.video.outbound.map((function(e) {
                var a = t.video.outbound.find((function(t) {
                    return t.id === e.id
                }
                ));
                e.bitrate = xt(e, a, "bytesSent"),
                e.packetRate = xt(e, a, "packetsSent")
            }
            )),
            e) : e
        }
        function wt(e, t) {
            if (!e || !t)
                return {};
            var a = bt({}, e);
            if (a.localCandidateId) {
                var n = t.get(a.localCandidateId);
                a.local = bt({}, n)
            }
            if (a.remoteCandidateId) {
                var i = t.get(a.remoteCandidateId);
                a.remote = bt({}, i)
            }
            return a
        }
        function kt(e, t, a) {
            var n = e[a]
              , i = t ? t[a] : null;
            return null === n || null === i ? null : (n - i) / (e.timestamp - t.timestamp) * 1e3
        }
        function xt(e, t, a) {
            return 8 * kt(e, t, a)
        }
        function St(e) {
            if (!e.entries)
                return e;
            var t = {};
            return e.forEach((function(e, a) {
                t[a] = e
            }
            )),
            t
        }
        function Ct(e, t, a) {
            if (!e)
                return null;
            var n = {
                audio: {
                    inbound: [],
                    outbound: []
                },
                video: {
                    inbound: [],
                    outbound: []
                },
                connection: {
                    inbound: [],
                    outbound: []
                }
            };
            a.remote && (n.remote = {
                audio: {
                    inbound: [],
                    outbound: []
                },
                video: {
                    inbound: [],
                    outbound: []
                }
            });
            var i = !0
              , r = !1
              , o = void 0;
            try {
                for (var s, c = e.values()[Symbol.iterator](); !(i = (s = c.next()).done); i = !0) {
                    var l = s.value;
                    switch (l.type) {
                    case "outbound-rtp":
                        var u = l.mediaType || l.kind
                          , d = {}
                          , m = {};
                        if (!["audio", "video"].includes(u))
                            continue;
                        if (l.codecId) {
                            var _ = e.get(l.codecId);
                            _ && (d.clockRate = _.clockRate,
                            d.mimeType = _.mimeType,
                            d.payloadType = _.payloadType)
                        }
                        m = e.get(l.mediaSourceId) || e.get(l.trackId) || {},
                        n[u].outbound.push(bt({}, l, {}, d, {
                            track: bt({}, m)
                        }));
                        break;
                    case "inbound-rtp":
                        var p = l.mediaType || l.kind
                          , g = {}
                          , h = {};
                        if (!["audio", "video"].includes(p))
                            if (l.id.includes("Video"))
                                p = "video";
                            else {
                                if (!l.id.includes("Audio"))
                                    continue;
                                p = "audio"
                            }
                        if (l.codecId) {
                            var f = e.get(l.codecId);
                            f && (h.clockRate = f.clockRate,
                            h.mimeType = f.mimeType,
                            h.payloadType = f.payloadType)
                        }
                        if (!n.connection.id && l.transportId) {
                            var v = e.get(l.transportId);
                            if (v && v.selectedCandidatePairId) {
                                var b = e.get(v.selectedCandidatePairId);
                                n.connection = wt(b, e)
                            }
                        }
                        g = e.get(l.mediaSourceId) || e.get(l.trackId) || {},
                        n[p].inbound.push(bt({}, l, {}, h, {
                            track: bt({}, g)
                        }));
                        break;
                    case "peer-connection":
                        n.connection.dataChannelsClosed = l.dataChannelsClosed,
                        n.connection.dataChannelsOpened = l.dataChannelsOpened;
                        break;
                    case "remote-inbound-rtp":
                        if (!a.remote)
                            break;
                        var y = l.mediaType || l.kind
                          , w = {};
                        if (!["audio", "video"].includes(y))
                            if (l.id.includes("Video"))
                                y = "video";
                            else {
                                if (!l.id.includes("Audio"))
                                    continue;
                                y = "audio"
                            }
                        if (l.codecId) {
                            var k = e.get(l.codecId);
                            k && (w.clockRate = k.clockRate,
                            w.mimeType = k.mimeType,
                            w.payloadType = k.payloadType)
                        }
                        if (!n.connection.id && l.transportId) {
                            var x = e.get(l.transportId);
                            if (x && x.selectedCandidatePairId) {
                                var S = e.get(x.selectedCandidatePairId);
                                n.connection = wt(S, e)
                            }
                        }
                        n.remote[y].inbound.push(bt({}, l, {}, w));
                        break;
                    case "remote-outbound-rtp":
                        if (!a.remote)
                            break;
                        var C = l.mediaType || l.kind
                          , T = {};
                        if (!["audio", "video"].includes(C))
                            continue;
                        if (l.codecId) {
                            var E = e.get(l.codecId);
                            E && (T.clockRate = E.clockRate,
                            T.mimeType = E.mimeType,
                            T.payloadType = E.payloadType)
                        }
                        n.remote[C].outbound.push(bt({}, l, {}, T));
                        break;
                    default:
                    }
                }
            } catch (z) {
                r = !0,
                o = z
            } finally {
                try {
                    i || null == c.return || c.return()
                } finally {
                    if (r)
                        throw o
                }
            }
            if (!n.connection.id) {
                var P = !0
                  , I = !1
                  , O = void 0;
                try {
                    for (var A, R = e.values()[Symbol.iterator](); !(P = (A = R.next()).done); P = !0) {
                        var M = A.value;
                        "candidate-pair" === M.type && M.nominated && "succeeded" === M.state && (n.connection = wt(M, e))
                    }
                } catch (z) {
                    I = !0,
                    O = z
                } finally {
                    try {
                        P || null == R.return || R.return()
                    } finally {
                        if (I)
                            throw O
                    }
                }
            }
            return n = yt(n, t),
            n
        }
        function Tt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Et(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Tt(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Tt(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Pt = {}
          , It = function(e) {
            function t(e) {
                var a;
                if (Object(ie["a"])(this, t),
                a = Object(mt["a"])(this, Object(_t["a"])(t).call(this)),
                Object(s["a"])(Object(pt["a"])(a), "isEdge", void 0),
                Object(s["a"])(Object(pt["a"])(a), "_getStatsInterval", void 0),
                Object(s["a"])(Object(pt["a"])(a), "monitoringSetInterval", 0),
                Object(s["a"])(Object(pt["a"])(a), "connectionMonitoringSetInterval", 0),
                Object(s["a"])(Object(pt["a"])(a), "connectionMonitoringInterval", 1e3),
                Object(s["a"])(Object(pt["a"])(a), "rawStats", void 0),
                Object(s["a"])(Object(pt["a"])(a), "statsObject", void 0),
                Object(s["a"])(Object(pt["a"])(a), "filteredStats", void 0),
                Object(s["a"])(Object(pt["a"])(a), "shouldWrapGetUserMedia", void 0),
                Object(s["a"])(Object(pt["a"])(a), "debug", void 0),
                Object(s["a"])(Object(pt["a"])(a), "remote", !0),
                Object(s["a"])(Object(pt["a"])(a), "peersToMonitor", {}),
                Object(s["a"])(Object(pt["a"])(a), "sdpIncluded", !1),
                Object(s["a"])(Object(pt["a"])(a), "logLevel", void 0),
                Object(s["a"])(Object(pt["a"])(a), "timeline", []),
                Object(s["a"])(Object(pt["a"])(a), "statsToMonitor", ["inbound-rtp", "outbound-rtp", "remote-inbound-rtp", "remote-outbound-rtp", "peer-connection", "data-channel", "stream", "track", "sender", "receiver", "transport", "candidate-pair", "local-candidate", "remote-candidate"]),
                "undefined" === typeof window)
                    throw new Error("WebRTCStats only works in browser");
                var n = Et({}, e);
                return a.isEdge = !!window.RTCIceGatherer,
                a.getStatsInterval = n.getStatsInterval || 1e3,
                a.rawStats = !!n.rawStats,
                a.statsObject = !!n.statsObject,
                a.filteredStats = !!n.filteredStats,
                a.sdpIncluded = !!n.sdpIncluded,
                a.shouldWrapGetUserMedia = !!n.wrapGetUserMedia,
                "boolean" === typeof n.remote && (a.remote = n.remote),
                a.debug = !!n.debug,
                a.logLevel = n.logLevel || "none",
                a.shouldWrapGetUserMedia && a.wrapGetUserMedia(),
                a
            }
            return Object(gt["a"])(t, e),
            Object(re["a"])(t, [{
                key: "addConnection",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i, r, o, s, c;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.pc,
                                    n = t.peerId,
                                    i = t.connectionId,
                                    r = t.remote,
                                    r = "boolean" === typeof r ? r : this.remote,
                                    a && a instanceof RTCPeerConnection) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("Missing argument 'pc' or is not of instance RTCPeerConnection");
                                case 5:
                                    if (n) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Error("Missing peerId");
                                case 7:
                                    if (!this.isEdge) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("Can't monitor peers in Edge");
                                case 9:
                                    if (!this.peersToMonitor[n]) {
                                        e.next = 23;
                                        break
                                    }
                                    if (!(i && i in this.peersToMonitor[n])) {
                                        e.next = 14;
                                        break
                                    }
                                    throw new Error("We are already monitoring connection with id ".concat(i, "."));
                                case 14:
                                    e.t0 = regeneratorRuntime.keys(this.peersToMonitor[n]);
                                case 15:
                                    if ((e.t1 = e.t0()).done) {
                                        e.next = 23;
                                        break
                                    }
                                    if (o = e.t1.value,
                                    s = this.peersToMonitor[n][o],
                                    s.pc !== a) {
                                        e.next = 20;
                                        break
                                    }
                                    throw new Error("We are already monitoring peer with id ".concat(n, "."));
                                case 20:
                                    "closed" === s.pc.connectionState && this.removeConnection({
                                        pc: s.pc
                                    }),
                                    e.next = 15;
                                    break;
                                case 23:
                                    return c = a.getConfiguration(),
                                    c.iceServers && c.iceServers.forEach((function(e) {
                                        delete e.credential
                                    }
                                    )),
                                    i || (i = Object(ft["v4"])()),
                                    this.emitEvent({
                                        event: "addConnection",
                                        tag: "peer",
                                        peerId: n,
                                        connectionId: i,
                                        data: {
                                            options: t,
                                            peerConfiguration: c
                                        }
                                    }),
                                    this.monitorPeer({
                                        peerId: n,
                                        connectionId: i,
                                        pc: a,
                                        remote: r
                                    }),
                                    e.abrupt("return", {
                                        connectionId: i
                                    });
                                case 29:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getTimeline",
                value: function(e) {
                    return this.timeline = this.timeline.sort((function(e, t) {
                        return e.timestamp.getTime() - t.timestamp.getTime()
                    }
                    )),
                    e ? this.timeline.filter((function(t) {
                        return t.tag === e
                    }
                    )) : this.timeline
                }
            }, {
                key: "monitorPeer",
                value: function(e) {
                    var t = e.peerId
                      , a = e.connectionId
                      , n = e.pc
                      , i = e.remote;
                    if (n) {
                        var r = {
                            pc: n,
                            connectionId: a,
                            stream: null,
                            stats: {
                                parsed: null,
                                raw: null
                            },
                            options: {
                                remote: i
                            }
                        };
                        if (this.peersToMonitor[t]) {
                            if (a in this.peersToMonitor[t])
                                return void this.logger.warn("Already watching connection with ID ".concat(a));
                            this.peersToMonitor[t][a] = r
                        } else
                            this.peersToMonitor[t] = Object(s["a"])({}, a, r);
                        this.addPeerConnectionEventListeners(t, a, n),
                        1 === this.numberOfMonitoredPeers && (this.startStatsMonitoring(),
                        this.startConnectionStateMonitoring())
                    } else
                        this.logger.warn("Did not receive pc argument when calling monitorPeer()")
                }
            }, {
                key: "startStatsMonitoring",
                value: function() {
                    var e = this;
                    this.monitoringSetInterval || (this.monitoringSetInterval = window.setInterval((function() {
                        e.numberOfMonitoredPeers || e.stopStatsMonitoring(),
                        e.getStats().then((function(t) {
                            t.forEach((function(t) {
                                e.emitEvent(t)
                            }
                            ))
                        }
                        ))
                    }
                    ), this._getStatsInterval))
                }
            }, {
                key: "stopStatsMonitoring",
                value: function() {
                    this.monitoringSetInterval && (window.clearInterval(this.monitoringSetInterval),
                    this.monitoringSetInterval = 0)
                }
            }, {
                key: "getStats",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i, r, o, s, c, l, u, d, m, _, p, g;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.logger.info(t ? "Getting stats from peer ".concat(t) : "Getting stats from all peers"),
                                    a = {},
                                    !t) {
                                        e.next = 8;
                                        break
                                    }
                                    if (this.peersToMonitor[t]) {
                                        e.next = 5;
                                        break
                                    }
                                    throw new Error("Cannot get stats. Peer with id ".concat(t, " does not exist"));
                                case 5:
                                    a[t] = this.peersToMonitor[t],
                                    e.next = 9;
                                    break;
                                case 8:
                                    a = this.peersToMonitor;
                                case 9:
                                    n = [],
                                    e.t0 = regeneratorRuntime.keys(a);
                                case 11:
                                    if ((e.t1 = e.t0()).done) {
                                        e.next = 49;
                                        break
                                    }
                                    i = e.t1.value,
                                    e.t2 = regeneratorRuntime.keys(a[i]);
                                case 14:
                                    if ((e.t3 = e.t2()).done) {
                                        e.next = 47;
                                        break
                                    }
                                    if (r = e.t3.value,
                                    o = a[i][r],
                                    s = o.pc,
                                    s && !this.checkIfConnectionIsClosed(i, r, s)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("continue", 14);
                                case 20:
                                    if (e.prev = 20,
                                    c = this.getTimestamp(),
                                    l = s.getStats(null),
                                    !l) {
                                        e.next = 39;
                                        break
                                    }
                                    return e.next = 26,
                                    l;
                                case 26:
                                    u = e.sent,
                                    d = this.getTimestamp(),
                                    m = St(u),
                                    _ = {
                                        remote: o.options.remote
                                    },
                                    p = Ct(u, o.stats.parsed, _),
                                    g = {
                                        event: "stats",
                                        tag: "stats",
                                        peerId: i,
                                        connectionId: r,
                                        timeTaken: d - c,
                                        data: p
                                    },
                                    !0 === this.rawStats && (g["rawStats"] = u),
                                    !0 === this.statsObject && (g["statsObject"] = m),
                                    !0 === this.filteredStats && (g["filteredStats"] = this.filteroutStats(m)),
                                    n.push(g),
                                    o.stats.parsed = p,
                                    e.next = 40;
                                    break;
                                case 39:
                                    this.logger.error("PeerConnection from peer ".concat(i, " did not return any stats data"));
                                case 40:
                                    e.next = 45;
                                    break;
                                case 42:
                                    e.prev = 42,
                                    e.t4 = e["catch"](20),
                                    this.logger.error(e.t4);
                                case 45:
                                    e.next = 14;
                                    break;
                                case 47:
                                    e.next = 11;
                                    break;
                                case 49:
                                    return e.abrupt("return", n);
                                case 50:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[20, 42]])
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "startConnectionStateMonitoring",
                value: function() {
                    var e = this;
                    this.connectionMonitoringSetInterval = window.setInterval((function() {
                        for (var t in e.numberOfMonitoredPeers || e.stopConnectionStateMonitoring(),
                        e.peersToMonitor)
                            for (var a in e.peersToMonitor[t]) {
                                var n = e.peersToMonitor[t][a].pc;
                                e.checkIfConnectionIsClosed(t, a, n)
                            }
                    }
                    ), this.connectionMonitoringInterval)
                }
            }, {
                key: "checkIfConnectionIsClosed",
                value: function(e, t, a) {
                    var n = this.isConnectionClosed(a);
                    if (n) {
                        this.removeConnection({
                            pc: a
                        });
                        var i = "closed" === a.connectionState ? "onconnectionstatechange" : "oniceconnectionstatechange";
                        this.emitEvent({
                            event: i,
                            peerId: e,
                            connectionId: t,
                            tag: "connection",
                            data: "closed"
                        })
                    }
                    return n
                }
            }, {
                key: "isConnectionClosed",
                value: function(e) {
                    return "closed" === e.connectionState || "closed" === e.iceConnectionState
                }
            }, {
                key: "stopConnectionStateMonitoring",
                value: function() {
                    this.connectionMonitoringSetInterval && (window.clearInterval(this.connectionMonitoringSetInterval),
                    this.connectionMonitoringSetInterval = 0)
                }
            }, {
                key: "wrapGetUserMedia",
                value: function() {
                    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                        this.logger.info("Wrapping getUsermedia functions.");
                        var e = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices)
                          , t = this.parseGetUserMedia.bind(this)
                          , a = function() {
                            return t({
                                constraints: arguments[0]
                            }),
                            e.apply(navigator.mediaDevices, arguments).then((function(e) {
                                return t({
                                    stream: e
                                }),
                                e
                            }
                            ), (function(e) {
                                return t({
                                    error: e
                                }),
                                Promise.reject(e)
                            }
                            ))
                        };
                        navigator.mediaDevices.getUserMedia = a.bind(navigator.mediaDevices)
                    } else
                        this.logger.warn("'navigator.mediaDevices.getUserMedia' is not available in browser. Will not wrap getUserMedia.")
                }
            }, {
                key: "filteroutStats",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = Et({}, e);
                    for (var a in t) {
                        var n = t[a];
                        this.statsToMonitor.includes(n.type) || delete t[a]
                    }
                    return t
                }
            }, {
                key: "addPeerConnectionEventListeners",
                value: function(e, t, a) {
                    var n = this;
                    this.logger.debug("Adding event listeners for peer ".concat(e, " and connection ").concat(t, ".")),
                    Pt[t] = {},
                    Object.keys(this.peerConnectionListeners).forEach((function(i) {
                        Pt[t][i] = n.peerConnectionListeners[i].bind(n, e, t, a),
                        a.addEventListener(i, Pt[t][i], !1)
                    }
                    ))
                }
            }, {
                key: "parseGetUserMedia",
                value: function(e) {
                    var t = this;
                    try {
                        var a = {
                            event: "getUserMedia",
                            tag: "getUserMedia",
                            data: Et({}, e)
                        };
                        e.stream && (a.data.details = this.parseStream(e.stream),
                        e.stream.getTracks().map((function(e) {
                            t.addTrackEventListeners(e)
                        }
                        ))),
                        this.emitEvent(a)
                    } catch (n) {}
                }
            }, {
                key: "parseStream",
                value: function(e) {
                    var t = this
                      , a = {
                        audio: [],
                        video: []
                    }
                      , n = e.getTracks();
                    return n.forEach((function(e) {
                        a[e.kind].push(t.getMediaTrackDetails(e))
                    }
                    )),
                    a
                }
            }, {
                key: "getMediaTrackDetails",
                value: function(e) {
                    return {
                        enabled: e.enabled,
                        id: e.id,
                        contentHint: e.contentHint,
                        kind: e.kind,
                        label: e.label,
                        muted: e.muted,
                        readyState: e.readyState,
                        constructorName: e.constructor.name,
                        capabilities: e.getCapabilities ? e.getCapabilities() : {},
                        constraints: e.getConstraints ? e.getConstraints() : {},
                        settings: e.getSettings ? e.getSettings() : {},
                        _track: e
                    }
                }
            }, {
                key: "getStreamDetails",
                value: function(e) {
                    return {
                        active: e.active,
                        id: e.id,
                        _stream: e
                    }
                }
            }, {
                key: "getTrackEventObject",
                value: function(e) {
                    var t = this;
                    return {
                        mute: function(a) {
                            t.emitEvent({
                                event: "mute",
                                tag: "track",
                                connectionId: e,
                                data: {
                                    event: a
                                }
                            })
                        },
                        unmute: function(a) {
                            t.emitEvent({
                                event: "unmute",
                                tag: "track",
                                connectionId: e,
                                data: {
                                    event: a
                                }
                            })
                        },
                        overconstrained: function(a) {
                            t.emitEvent({
                                event: "overconstrained",
                                tag: "track",
                                connectionId: e,
                                data: {
                                    event: a
                                }
                            })
                        },
                        ended: function(a) {
                            t.emitEvent({
                                event: "ended",
                                tag: "track",
                                connectionId: e,
                                data: {
                                    event: a
                                }
                            }),
                            t.removeTrackEventListeners(a.target)
                        }
                    }
                }
            }, {
                key: "addTrackEventListeners",
                value: function(e, t) {
                    var a = this;
                    Pt[e.id] = {};
                    var n = this.getTrackEventObject(t);
                    Object.keys(n).forEach((function(t) {
                        Pt[e.id][t] = n[t].bind(a),
                        e.addEventListener(t, Pt[e.id][t])
                    }
                    )),
                    Pt[e.id]["readyState"] = setInterval((function() {
                        if ("ended" === e.readyState) {
                            var t = new CustomEvent("ended",{
                                detail: {
                                    check: "readyState"
                                }
                            });
                            e.dispatchEvent(t)
                        }
                    }
                    ), 1e3)
                }
            }, {
                key: "removeTrackEventListeners",
                value: function(e) {
                    if (e.id in Pt) {
                        var t = this.getTrackEventObject();
                        Object.keys(t).forEach((function(t) {
                            e.removeEventListener(t, Pt[e.id][t])
                        }
                        )),
                        clearInterval(Pt[e.id]["readyState"]),
                        delete Pt[e.id]
                    }
                }
            }, {
                key: "addToTimeline",
                value: function(e) {
                    this.timeline.push(e),
                    this.emit("timeline", e)
                }
            }, {
                key: "emitEvent",
                value: function(e) {
                    var t = Et({}, e, {
                        timestamp: new Date
                    });
                    this.addToTimeline(t),
                    t.tag && this.emit(t.tag, t)
                }
            }, {
                key: "removeConnection",
                value: function(e) {
                    var t, a = e.connectionId, n = e.pc;
                    if (!n && !a)
                        throw new Error("Missing arguments. You need to either send pc or a connectionId.");
                    if (a) {
                        if ("string" !== typeof a)
                            throw new Error("connectionId must be a string.");
                        for (var i in this.peersToMonitor)
                            a in this.peersToMonitor[i] && (n = this.peersToMonitor[i][a].pc,
                            t = i)
                    } else if (n) {
                        if (!(n instanceof RTCPeerConnection))
                            throw new Error("pc must be an instance of RTCPeerConnection.");
                        for (var r in this.peersToMonitor)
                            for (var o in this.peersToMonitor[r])
                                this.peersToMonitor[r][o].pc === n && (a = o,
                                t = r)
                    }
                    if (!n || !a)
                        throw new Error("Could not find the desired connection.");
                    return this.removePeerConnectionEventListeners(a, n),
                    delete this.peersToMonitor[t][a],
                    0 === Object.values(this.peersToMonitor[t]).length && delete this.peersToMonitor[t],
                    {
                        connectionId: a
                    }
                }
            }, {
                key: "removePeer",
                value: function(e) {
                    if (this.logger.info("Removing PeerConnection with id ".concat(e, ".")),
                    this.peersToMonitor[e]) {
                        for (var t in this.peersToMonitor[e]) {
                            var a = this.peersToMonitor[e][t].pc;
                            this.removePeerConnectionEventListeners(t, a)
                        }
                        delete this.peersToMonitor[e]
                    }
                }
            }, {
                key: "removePeerConnectionEventListeners",
                value: function(e, t) {
                    var a = this;
                    e in Pt && (Object.keys(this.peerConnectionListeners).forEach((function(a) {
                        t.removeEventListener(a, Pt[e][a], !1)
                    }
                    )),
                    delete Pt[e]),
                    t.getSenders().forEach((function(e) {
                        e.track && a.removeTrackEventListeners(e.track)
                    }
                    )),
                    t.getReceivers().forEach((function(e) {
                        e.track && a.removeTrackEventListeners(e.track)
                    }
                    ))
                }
            }, {
                key: "getTimestamp",
                value: function() {
                    return Date.now()
                }
            }, {
                key: "peerConnectionListeners",
                get: function() {
                    var e = this;
                    return {
                        icecandidate: function(t, a, n, i) {
                            e.logger.debug("[pc-event] icecandidate | peerId: ${peerId}", i),
                            e.emitEvent({
                                event: "onicecandidate",
                                tag: "connection",
                                peerId: t,
                                connectionId: a,
                                data: i.candidate
                            })
                        },
                        track: function(t, a, n, i) {
                            e.logger.debug("[pc-event] track | peerId: ".concat(t), i);
                            var r = i.track
                              , o = i.streams[0];
                            t in e.peersToMonitor && a in e.peersToMonitor[t] && (e.peersToMonitor[t][a].stream = o),
                            e.addTrackEventListeners(r, a),
                            e.emitEvent({
                                event: "ontrack",
                                tag: "track",
                                peerId: t,
                                connectionId: a,
                                data: {
                                    stream: o ? e.getStreamDetails(o) : null,
                                    track: r ? e.getMediaTrackDetails(r) : null,
                                    title: i.track.kind + ":" + i.track.id + " " + i.streams.map((function(e) {
                                        return "stream:" + e.id
                                    }
                                    ))
                                }
                            })
                        },
                        signalingstatechange: function(t, a, n) {
                            e.logger.debug("[pc-event] signalingstatechange | peerId: ".concat(t)),
                            e.emitEvent({
                                event: "onsignalingstatechange",
                                tag: "connection",
                                peerId: t,
                                connectionId: a,
                                data: {
                                    signalingState: n.signalingState,
                                    localDescription: e.sdpIncluded ? n.localDescription : null,
                                    remoteDescription: e.sdpIncluded ? n.remoteDescription : null
                                }
                            })
                        },
                        iceconnectionstatechange: function(t, a, n) {
                            e.logger.debug("[pc-event] iceconnectionstatechange | peerId: ".concat(t)),
                            e.emitEvent({
                                event: "oniceconnectionstatechange",
                                tag: "connection",
                                peerId: t,
                                connectionId: a,
                                data: n.iceConnectionState
                            })
                        },
                        icegatheringstatechange: function(t, a, n) {
                            e.logger.debug("[pc-event] icegatheringstatechange | peerId: ".concat(t)),
                            e.emitEvent({
                                event: "onicegatheringstatechange",
                                tag: "connection",
                                peerId: t,
                                connectionId: a,
                                data: n.iceGatheringState
                            })
                        },
                        icecandidateerror: function(t, a, n, i) {
                            e.logger.debug("[pc-event] icecandidateerror | peerId: ".concat(t)),
                            e.emitEvent({
                                event: "onicecandidateerror",
                                tag: "connection",
                                peerId: t,
                                connectionId: a,
                                error: {
                                    errorCode: i.errorCode
                                }
                            })
                        },
                        connectionstatechange: function(t, a, n) {
                            e.logger.debug("[pc-event] connectionstatechange | peerId: ".concat(t)),
                            e.emitEvent({
                                event: "onconnectionstatechange",
                                tag: "connection",
                                peerId: t,
                                connectionId: a,
                                data: n.connectionState
                            })
                        },
                        negotiationneeded: function(t, a, n) {
                            e.logger.debug("[pc-event] negotiationneeded | peerId: ".concat(t)),
                            e.emitEvent({
                                event: "onnegotiationneeded",
                                tag: "connection",
                                peerId: t,
                                connectionId: a
                            })
                        },
                        datachannel: function(t, a, n, i) {
                            e.logger.debug("[pc-event] datachannel | peerId: ".concat(t), i),
                            e.emitEvent({
                                event: "ondatachannel",
                                tag: "datachannel",
                                peerId: t,
                                connectionId: a,
                                data: i.channel
                            })
                        }
                    }
                }
            }, {
                key: "getStatsInterval",
                set: function(e) {
                    if (!Number.isInteger(e))
                        throw new Error("getStatsInterval should be an integer, got: ".concat(e));
                    this._getStatsInterval = e,
                    this.monitoringSetInterval && (this.stopStatsMonitoring(),
                    this.startStatsMonitoring())
                }
            }, {
                key: "logger",
                get: function() {
                    var e = this
                      , t = function(t) {
                        var a = ["none", "error", "warn", "info", "debug"];
                        return a.slice(0, a.indexOf(e.logLevel) + 1).indexOf(t) > -1
                    };
                    return {
                        error: function() {
                            for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                                n[i] = arguments[i];
                            this.debug && t("error") && (e = console).error.apply(e, ["[webrtc-stats][error] "].concat(n))
                        },
                        warn: function() {
                            for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                                n[i] = arguments[i];
                            this.debug && t("warn") && (e = console).warn.apply(e, ["[webrtc-stats][warn] "].concat(n))
                        },
                        info: function() {
                            for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                                n[i] = arguments[i];
                            this.debug && t("info") && (e = console).log.apply(e, ["[webrtc-stats][info] "].concat(n))
                        },
                        debug: function() {
                            for (var e, a = arguments.length, n = new Array(a), i = 0; i < a; i++)
                                n[i] = arguments[i];
                            this.debug && t("debug") && (e = console).debug.apply(e, ["[webrtc-stats][debug] "].concat(n))
                        }
                    }
                }
            }, {
                key: "numberOfMonitoredPeers",
                get: function() {
                    return Object.keys(this.peersToMonitor).length
                }
            }]),
            t
        }(ht["EventEmitter"])
          , Ot = a("2b80")
          , At = a.n(Ot);
        function Rt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function Mt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Rt(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Rt(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var zt = function() {
            function e(t) {
                var a = t.userId
                  , n = t.userName;
                if (Object(ie["a"])(this, e),
                Object(s["a"])(this, "userId", void 0),
                Object(s["a"])(this, "userName", void 0),
                Object(s["a"])(this, "deviceInfo", void 0),
                Object(s["a"])(this, "platform", {}),
                Object(s["a"])(this, "constraints", {}),
                Object(s["a"])(this, "devices", []),
                !a)
                    throw new Error("missing argument userId");
                this.userId = a,
                this.userName = n
            }
            return Object(re["a"])(e, [{
                key: "getUserDetails",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        var t;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    this.gatherPlatformInfo();
                                case 2:
                                    return t = e.sent,
                                    e.abrupt("return", Mt({}, t));
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "gatherPlatformInfo",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return this.platform = this.getUAdetails(),
                                    this.constraints = this.getContraints(),
                                    e.next = 4,
                                    this.getDevices();
                                case 4:
                                    return this.devices = e.sent,
                                    e.next = 7,
                                    this.getDeviceInfo();
                                case 7:
                                    return this.deviceInfo = e.sent,
                                    e.abrupt("return", {
                                        platform: this.platform,
                                        constraints: this.constraints,
                                        devices: this.devices
                                    });
                                case 9:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getUAdetails",
                value: function() {
                    return (new At.a).getResult()
                }
            }, {
                key: "getContraints",
                value: function() {
                    return window.navigator && window.navigator.mediaDevices ? window.navigator.mediaDevices.getSupportedConstraints() : {}
                }
            }, {
                key: "getDeviceInfo",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        var t, a;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (t = navigator.getBattery,
                                    !t) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.prev = 2,
                                    e.next = 5,
                                    t();
                                case 5:
                                    a = e.sent,
                                    a = {
                                        charging: a.charging,
                                        chargingTime: a.chargingTime,
                                        dischargingTime: a.dischargingTime,
                                        level: a.level
                                    },
                                    e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9,
                                    e.t0 = e["catch"](2),
                                    a = {};
                                case 12:
                                    return e.abrupt("return", {
                                        battery: a,
                                        cores: navigator.hardwareConcurrency,
                                        memory: window.performance.memory || {},
                                        timing: window.performance.timing || {},
                                        navigation: window.performance.navigation || {}
                                    });
                                case 13:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, null, [[2, 9]])
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "getDevices",
                value: function() {
                    return window.navigator.mediaDevices && window.navigator.mediaDevices.enumerateDevices ? window.navigator.mediaDevices.enumerateDevices().then((function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            var a = e.toJSON();
                            a.label && t.push(a)
                        }
                        )),
                        t
                    }
                    )).catch((function() {
                        return []
                    }
                    )) : Promise.resolve([])
                }
            }]),
            e
        }()
          , Dt = !1;
        function jt(e) {
            Dt = e
        }
        function qt() {
            for (var e, t = arguments.length, a = new Array(t), n = 0; n < t; n++)
                a[n] = arguments[n];
            Dt && (e = console).log.apply(e, arguments)
        }
        var Nt, Lt = {
            pageEvents: {
                pageVisibility: !1
            },
            debug: !1,
            remote: !0,
            getStatsInterval: 7e3
        }, Bt = a("768b"), Vt = (a("5df3"),
        a("1c4c"),
        {
            batchConnectionEvents: !1,
            connectionTimeoutValue: 500
        }), Ut = function() {
            function e(t) {
                Object(ie["a"])(this, e),
                Object(s["a"])(this, "publicKey", void 0),
                Object(s["a"])(this, "apiRoot", "https://ortc-api.rda.la/monitoring/log/"),
                Object(s["a"])(this, "user", null),
                Object(s["a"])(this, "peerId", null),
                Object(s["a"])(this, "sessionId", null),
                Object(s["a"])(this, "batchConnectionEvents", Vt.batchConnectionEvents),
                Object(s["a"])(this, "connectionEvents", []),
                Object(s["a"])(this, "connectionTimeout", null),
                this.publicKey = t.publicKey,
                this.user = t.user,
                Nt = De.a.create({
                    baseURL: this.apiRoot,
                    headers: {
                        "Content-Type": "text/plain",
                        "X-PUBLIC-PROJECT-KEY": this.publicKey
                    }
                })
            }
            return Object(re["a"])(e, [{
                key: "updatePeerId",
                value: function(e) {
                    this.peerId = e
                }
            }, {
                key: "updateSessionId",
                value: function(e) {
                    this.sessionId = e
                }
            }, {
                key: "createSession",
                value: function(e) {
                    return this.makeRequest({
                        path: "session",
                        data: e
                    })
                }
            }, {
                key: "closeSession",
                value: function() {
                    return this.makeRequest({
                        path: "close-session",
                        data: {}
                    })
                }
            }, {
                key: "addSessionDetails",
                value: function(e) {
                    return this.makeRequest({
                        path: "session",
                        method: "put",
                        data: e
                    })
                }
            }, {
                key: "sendPageEvent",
                value: function(e) {
                    return this.makeRequest({
                        path: "device-event",
                        data: e
                    })
                }
            }, {
                key: "sendCustomEvent",
                value: function(e) {
                    return this.makeRequest({
                        path: "device-event",
                        data: {
                            eventName: e.eventName || "custom",
                            data: e
                        }
                    })
                }
            }, {
                key: "sendMediaDeviceChange",
                value: function(e) {
                    return this.makeRequest({
                        path: "device-event",
                        data: {
                            eventName: "mediaDeviceChange",
                            devices: e
                        }
                    })
                }
            }, {
                key: "saveGetUserMediaEvent",
                value: function(e) {
                    return this.makeRequest({
                        path: "gum-event",
                        data: {
                            eventName: "getUserMedia",
                            data: e
                        }
                    })
                }
            }, {
                key: "sendConnectionEvent",
                value: function(e) {
                    var t = this;
                    if (!1 === this.batchConnectionEvents)
                        return this._sendConnectionEvent(e);
                    null !== this.connectionTimeout && clearTimeout(this.connectionTimeout),
                    this.connectionTimeout = window.setTimeout((function() {
                        t.sendBatchConnectionEvents()
                    }
                    ), Vt.connectionTimeoutValue),
                    this.connectionEvents.push([e, Date.now()])
                }
            }, {
                key: "sendBatchConnectionEvents",
                value: function() {
                    var e = Array.from(this.connectionEvents);
                    this.connectionEvents = [],
                    clearTimeout(this.connectionTimeout),
                    1 === e.length ? this._handleSingleConnectionEvent(e[0]) : this._handleBatchConnectionEvents(e)
                }
            }, {
                key: "_handleSingleConnectionEvent",
                value: function(e) {
                    var t = e.ev
                      , a = e.timestamp
                      , n = Date.now()
                      , i = t.eventName
                      , r = t.peerId
                      , o = t.data;
                    return this._sendConnectionEvent({
                        eventName: i,
                        peerId: r,
                        timeDelta: n - a,
                        data: o
                    })
                }
            }, {
                key: "_handleBatchConnectionEvents",
                value: function(e) {
                    var t = Date.now()
                      , a = e.map((function(e) {
                        var a = Object(Bt["a"])(e, 2)
                          , n = a[0]
                          , i = a[1]
                          , r = n.eventName
                          , o = n.peerId
                          , s = n.data;
                        return {
                            eventName: r,
                            peerId: o,
                            timeDelta: t - i,
                            data: s
                        }
                    }
                    ));
                    return this._sendBatchConnectionEvents(a)
                }
            }, {
                key: "_sendConnectionEvent",
                value: function(e) {
                    return this.makeRequest({
                        path: "rtc-connection",
                        data: e
                    })
                }
            }, {
                key: "_sendBatchConnectionEvents",
                value: function(e) {
                    return this.makeRequest({
                        path: "rtc-connection-batch",
                        data: e
                    })
                }
            }, {
                key: "sendWebrtcStats",
                value: function(e) {
                    return this.makeRequest({
                        path: "stats",
                        data: e
                    })
                }
            }, {
                key: "sendWebrtcIssue",
                value: function(e) {
                    return this.makeRequest({
                        path: "webrtc-issue",
                        data: e
                    })
                }
            }, {
                key: "sendWebrtcScore",
                value: function(e) {
                    return this.makeRequest({
                        path: "webrtc-score",
                        data: e
                    })
                }
            }, {
                key: "sendTrackEvent",
                value: function(e) {
                    var t = "ontrack" === e.event ? "post" : "put";
                    return this.makeRequest({
                        path: "track",
                        method: t,
                        data: e
                    })
                }
            }, {
                key: "sendLeaveEvent",
                value: function(e) {
                    var t = "device-event"
                      , a = JSON.stringify({
                        peerId: this.peerId,
                        sessionId: this.sessionId,
                        eventName: e
                    });
                    Nt.post(t, a)
                }
            }, {
                key: "sendBeaconEvent",
                value: function(e) {
                    var t = this.apiRoot + "device-event"
                      , a = JSON.stringify({
                        peerId: this.peerId,
                        sessionId: this.sessionId,
                        eventName: e
                    });
                    if (navigator.sendBeacon) {
                        var n = {
                            "X-PUBLIC-PROJECT-KEY": this.publicKey
                        }
                          , i = new Blob([a],n);
                        navigator.sendBeacon(t, i)
                    }
                }
            }, {
                key: "makeRequest",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (a = t.path,
                                    n = t.timestamp,
                                    i = t.data,
                                    this.sessionId) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (i["user"] = {
                                        sessionId: this.sessionId,
                                        peerId: this.peerId
                                    },
                                    qt("request", Date.now(), a, i),
                                    n = n || i.timestamp,
                                    n ? i.delta = Date.now() - n : i.timestamp = new Date,
                                    "put" !== t.method) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", Nt.put(a, i));
                                case 11:
                                    return e.abrupt("return", Nt.post(a, i));
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]),
            e
        }();
        function Gt(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                a.push.apply(a, n)
            }
            return a
        }
        function $t(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Gt(Object(a), !0).forEach((function(t) {
                    Object(s["a"])(e, t, a[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : Gt(Object(a)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                }
                ))
            }
            return e
        }
        var Ft = {}
          , Kt = {}
          , Wt = []
          , Ht = function() {
            function e(t) {
                if (Object(ie["a"])(this, e),
                Object(s["a"])(this, "user", void 0),
                Object(s["a"])(this, "sessionId", void 0),
                Object(s["a"])(this, "startSessionTime", void 0),
                Object(s["a"])(this, "transport", void 0),
                Object(s["a"])(this, "webrtcStats", void 0),
                Object(s["a"])(this, "pageEvents", void 0),
                Object(s["a"])(this, "_options", void 0),
                Object(s["a"])(this, "_initialized", !1),
                Object(s["a"])(this, "turnUseEventSent", !1),
                "object" !== Object(dt["a"])(t))
                    throw new Error("Invalid argument. Expected object, got something else.");
                if (t = $t({}, Lt, {}, t),
                !t.publicKey)
                    throw new Error("Missing argument publicKey");
                this.user = new zt(t),
                this.transport = new Ut({
                    publicKey: t.publicKey,
                    user: this.user
                }),
                this._options = t,
                this.pageEvents = t.pageEvents,
                jt(!!t.debug)
            }
            return Object(re["a"])(e, [{
                key: "initialize",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t, a) {
                        var n, i, r, o = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.user = new zt({
                                        userId: t
                                    }),
                                    this.sessionId = a,
                                    this.transport.updatePeerId(t),
                                    this.transport.updateSessionId(a),
                                    this.turnUseEventSent = !1,
                                    n = window.RTCPeerConnection,
                                    i = navigator.mediaDevices.getUserMedia,
                                    n && i) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error("This device doesn't seem to support RTCPeerConnection or getUserMedia");
                                case 9:
                                    if ("undefined" !== typeof window.fetch) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("This device doesn't seem to support the fetch API.");
                                case 11:
                                    this.user.getUserDetails().then((function(e) {
                                        o.transport.addSessionDetails(e)
                                    }
                                    )),
                                    r = {},
                                    r.appVersion = this._options.appVersion,
                                    r.meta = this._options.meta,
                                    this.transport.createSession(r),
                                    this._initialized || (this._initialized = !0,
                                    this.addPageEventListeners(this.pageEvents),
                                    this.addMediaDeviceChangeListener(),
                                    this._initializeStatsModule());
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t, a) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "setStartSessionTime",
                value: function(e) {
                    this.startSessionTime = e
                }
            }, {
                key: "closeSession",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    this.transport.closeSession().then((function() {}
                                    )),
                                    this.sessionId = null,
                                    this.transport.updateSessionId(null);
                                case 3:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "addConnection",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i, r;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (this.webrtcStats) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (a = t.pc,
                                    n = String(this.user.userId),
                                    a) {
                                        e.next = 6;
                                        break
                                    }
                                    throw new Error("Missing argument pc: RTCPeerConnection.");
                                case 6:
                                    if (n) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new Error("Missing argument peerId.");
                                case 8:
                                    return qt("addConnection", t),
                                    e.next = 11,
                                    this.webrtcStats.addConnection({
                                        peerId: n,
                                        pc: a
                                    });
                                case 11:
                                    return i = e.sent,
                                    r = i.connectionId,
                                    this._sendAddConnectionRequest({
                                        connectionId: r,
                                        options: {
                                            pc: a,
                                            peerId: n
                                        }
                                    }),
                                    e.abrupt("return", {
                                        connectionId: r
                                    });
                                case 15:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "removeConnection",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i, r, o, s;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if (i = this.webrtcStats.removeConnection(t),
                                    r = i.connectionId,
                                    o = Kt[r],
                                    o) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    e.t0 = regeneratorRuntime.keys(Ft);
                                case 5:
                                    if ((e.t1 = e.t0()).done) {
                                        e.next = 13;
                                        break
                                    }
                                    if (s = e.t1.value,
                                    !Ft[s].connections.includes(o)) {
                                        e.next = 11;
                                        break
                                    }
                                    return n = Ft[s],
                                    a = s,
                                    e.abrupt("break", 13);
                                case 11:
                                    e.next = 5;
                                    break;
                                case 13:
                                    return e.next = 15,
                                    this.transport.sendConnectionEvent({
                                        eventName: "removeConnection",
                                        connectionId: o,
                                        peerId: a
                                    });
                                case 15:
                                    delete Kt[r],
                                    n.connections = n.connections.filter((function(e) {
                                        return e !== o
                                    }
                                    ));
                                case 17:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "removePeer",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("string" === typeof t) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Argument for removePeer() should be a string.");
                                case 2:
                                    if (Ft[t]) {
                                        e.next = 4;
                                        break
                                    }
                                    throw new Error("Could not find peer with id ".concat(t));
                                case 4:
                                    return this.webrtcStats.removePeer(t),
                                    e.next = 7,
                                    this.transport.sendConnectionEvent({
                                        eventName: "removePeer",
                                        peerId: t
                                    });
                                case 7:
                                    delete Ft[t];
                                case 8:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "addEvent",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("object" === Object(dt["a"])(t)) {
                                        e.next = 2;
                                        break
                                    }
                                    throw new Error("Parameter for addEvent() should be an object.");
                                case 2:
                                    return e.next = 4,
                                    this.transport.sendCustomEvent(t);
                                case 4:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "mute",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.transport.sendCustomEvent({
                                        eventName: "mute"
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "unmute",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", this.transport.sendCustomEvent({
                                        eventName: "unmute"
                                    }));
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this)
                    }
                    )));
                    function t() {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "addPageEventListeners",
                value: function(e) {
                    var t = this;
                    window.addEventListener("beforeunload", (function() {
                        t.transport.sendLeaveEvent("beforeunload")
                    }
                    )),
                    window.addEventListener("unload", (function() {
                        t.transport.sendBeaconEvent("unload")
                    }
                    )),
                    e.pageVisibility && window.document && this.addPageVisibilityListeners(window.document)
                }
            }, {
                key: "addPageVisibilityListeners",
                value: function(e) {
                    var t, a, n = this;
                    "undefined" !== typeof e.hidden ? (t = "hidden",
                    a = "visibilitychange") : "undefined" !== typeof e.msHidden ? (t = "msHidden",
                    a = "msvisibilitychange") : "undefined" !== typeof e.webkitHidden && (t = "webkitHidden",
                    a = "webkitvisibilitychange"),
                    void 0 !== t ? e.addEventListener(a, (function(a) {
                        n.transport.sendPageEvent({
                            eventName: "tabFocus",
                            focus: e[t]
                        })
                    }
                    ), !1) : qt("Page visibility is not supported")
                }
            }, {
                key: "addMediaDeviceChangeListener",
                value: function() {
                    var e = this;
                    navigator.mediaDevices.addEventListener("devicechange", (function() {
                        return e.user.getDevices().then((function(t) {
                            e.user.devices = t,
                            e.transport.sendMediaDeviceChange(t)
                        }
                        ))
                    }
                    ))
                }
            }, {
                key: "_initializeStatsModule",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Lt.getStatsInterval;
                    this.webrtcStats = new It({
                        getStatsInterval: e,
                        rawStats: !1,
                        statsObject: !0,
                        filteredStats: !1,
                        remote: !0,
                        wrapGetUserMedia: !0,
                        logLevel: "none"
                    }),
                    this._addWebrtcStatsEventListeners()
                }
            }, {
                key: "_addWebrtcStatsEventListeners",
                value: function() {
                    this.webrtcStats.on("timeline", this._handleTimelineEvent.bind(this))
                }
            }, {
                key: "_sendAddConnectionRequest",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i, r, o, s, c, l = this;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    return a = t.connectionId,
                                    n = t.options,
                                    i = n.pc,
                                    r = n.peerId,
                                    o = n.peerName,
                                    s = n.isSfu,
                                    e.prev = 2,
                                    e.next = 5,
                                    this.transport.sendConnectionEvent({
                                        eventName: "addConnection",
                                        peerId: r,
                                        peerName: o,
                                        connectionState: i.connectionState,
                                        isSfu: !!s
                                    });
                                case 5:
                                    if (c = e.sent,
                                    c) {
                                        e.next = 8;
                                        break
                                    }
                                    throw new Error("There was a problem while adding this connection");
                                case 8:
                                    e.next = 15;
                                    break;
                                case 10:
                                    throw e.prev = 10,
                                    e.t0 = e["catch"](2),
                                    qt(e.t0),
                                    this.removeConnection({
                                        connectionId: a
                                    }),
                                    e.t0;
                                case 15:
                                    Ft[r] = {
                                        id: c.peer_id,
                                        connections: []
                                    },
                                    Kt[a] = c.connection_id,
                                    Ft[r].connections.push(c.connection_id),
                                    Wt.map((function(e) {
                                        l._handleTimelineEvent(e)
                                    }
                                    )),
                                    Wt.length = 0;
                                case 20:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[2, 10]])
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }, {
                key: "_handleTimelineEvent",
                value: function(e) {
                    if (e.peerId) {
                        if (!Ft[e.peerId])
                            return e.delayed = !0,
                            void Wt.push(e);
                        e.peerId = Ft[e.peerId].id
                    }
                    if (e.connectionId) {
                        if (!(e.connectionId in Kt))
                            return e.delayed = !0,
                            void Wt.push(e);
                        e.connectionId = Kt[e.connectionId]
                    }
                    switch (e.tag) {
                    case "getUserMedia":
                        this._handleGumEvent(e);
                        break;
                    case "stats":
                        this._handleStatsEvent(e);
                        break;
                    case "track":
                        this._handleTrackEvent(e);
                        break;
                    default:
                        this._handleConnectionEvent(e);
                        break
                    }
                }
            }, {
                key: "_handleGumEvent",
                value: function(e) {
                    var t = this
                      , a = e.data
                      , n = {};
                    a.constraints && (n.constraints = a.constraints),
                    a.stream && (this.user.getDevices().then((function(e) {
                        e.length !== t.user.devices.length && (t.user.devices = e,
                        t.transport.addSessionDetails({
                            devices: t.user.devices
                        }))
                    }
                    )),
                    n = $t({}, a.details)),
                    a.error && (n.error = {
                        name: a.error.name,
                        message: a.error.message
                    }),
                    this.transport.saveGetUserMediaEvent(n)
                }
            }, {
                key: "_handleStatsEvent",
                value: function(e) {
                    var t = e.data
                      , a = e.peerId
                      , n = e.connectionId
                      , i = e.timeTaken;
                    this.transport.sendWebrtcStats({
                        data: t,
                        peerId: a,
                        connectionId: n,
                        timeTaken: i
                    }),
                    !this.turnUseEventSent && t.hasOwnProperty("connection") && t["connection"].hasOwnProperty("local") && t["connection"]["local"]["candidateType"] && (this.turnUseEventSent = !0,
                    "relay" === t["connection"]["local"]["candidateType"] && Re.log(this.sessionId, "turn_relay_use", t["connection"]["local"]["address"]))
                }
            }, {
                key: "_handleTrackEvent",
                value: function(e) {
                    var t = e.data
                      , a = e.peerId
                      , n = e.connectionId
                      , i = e.event
                      , r = {
                        event: i,
                        peerId: a,
                        connectionId: n,
                        trackId: null,
                        data: {}
                    };
                    "ontrack" === i && (r.data = t.track,
                    delete r.data._track),
                    t.track ? r.trackId = t.track.id : t.event ? (t.event.target && (r.trackId = t.event.target.id),
                    t.event.detail && t.event.detail.check && (r.data.check = t.event.detail.check)) : qt("Received track event without track"),
                    this.transport.sendTrackEvent(r)
                }
            }, {
                key: "_handleConnectionEvent",
                value: function() {
                    var e = Object(qe["a"])(regeneratorRuntime.mark((function e(t) {
                        var a, n, i, r, o, s, c;
                        return regeneratorRuntime.wrap((function(e) {
                            while (1)
                                switch (e.prev = e.next) {
                                case 0:
                                    a = t.event,
                                    n = t.peerId,
                                    i = t.connectionId,
                                    r = t.data,
                                    o = t.delayed,
                                    s = r,
                                    e.t0 = a,
                                    e.next = "addConnection" === e.t0 ? 5 : "onicecandidate" === e.t0 ? 9 : "onicecandidateerror" === e.t0 ? 11 : "ondatachannel" === e.t0 ? 13 : 15;
                                    break;
                                case 5:
                                    return delete s.options.pc,
                                    a = "peerDetails",
                                    e.abrupt("return");
                                case 9:
                                    return r && (s = {
                                        address: r.address,
                                        candidate: r.candidate,
                                        component: r.component,
                                        foundation: r.foundation,
                                        port: r.port,
                                        priority: r.priority,
                                        protocol: r.protocol,
                                        relatedAddress: r.relatedAddress,
                                        relatedPort: r.relatedPort,
                                        sdpMLineIndex: r.sdpMLineIndex,
                                        sdpMid: r.sdpMid,
                                        tcpType: r.tcpType,
                                        type: r.type,
                                        usernameFragment: r.usernameFragment
                                    }),
                                    e.abrupt("break", 17);
                                case 11:
                                    return s = t.error,
                                    e.abrupt("break", 17);
                                case 13:
                                    return s = null,
                                    e.abrupt("break", 17);
                                case 15:
                                    return qt(t),
                                    e.abrupt("break", 17);
                                case 17:
                                    return e.prev = 17,
                                    c = o ? t.timestamp : null,
                                    e.next = 21,
                                    this.transport.sendConnectionEvent({
                                        eventName: a,
                                        peerId: n,
                                        connectionId: i,
                                        timestamp: c,
                                        data: s
                                    });
                                case 21:
                                    e.next = 26;
                                    break;
                                case 23:
                                    e.prev = 23,
                                    e.t1 = e["catch"](17),
                                    qt(e.t1);
                                case 26:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e, this, [[17, 23]])
                    }
                    )));
                    function t(t) {
                        return e.apply(this, arguments)
                    }
                    return t
                }()
            }]),
            e
        }()
          , Yt = a("353a")
          , Zt = a.n(Yt)
          , Jt = a("3181")
          , Qt = a.n(Jt)
          , Xt = {
            player: null,
            init: function(e) {
                this.player = new Audio(e),
                this.player.disableRemotePlayback = !0
            },
            play: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                e && (this.player.src = e),
                this.player.audioTracks && this.player.audioTracks.length && (this.player.audioTracks[0].enabled = !0,
                this.player.audioTracks[0].kind = "main");
                var t = this.player.play()
                  , a = this;
                void 0 !== t && t.catch((function(e) {}
                )).then((function() {
                    setTimeout((function() {
                        if (a.player.audioTracks && a.player.audioTracks.length) {
                            a.player.audioTracks[0].enabled = !1;
                            try {
                                a.player.audioTracks[0].kind = "alternative"
                            } catch (e) {}
                        }
                    }
                    ), 2e3)
                }
                ))
            },
            fixAutoPlay: function() {
                this.player.play(),
                this.player.pause()
            }
        }
          , ea = Xt;
        a.d(t, "monitoringRtc", (function() {
            return ta
        }
        )),
        a.d(t, "store", (function() {
            return m["a"]
        }
        )),
        a.d(t, "MessageModalsPlugin", (function() {
            return te
        }
        )),
        a.d(t, "Socket", (function() {
            return Te
        }
        )),
        a.d(t, "WebrtcSocket", (function() {
            return b
        }
        )),
        a.d(t, "WebrtcSignal", (function() {
            return Re
        }
        )),
        a("09bd").shim(),
        a("d093");
        Number(Object({
            NODE_ENV: "production",
            VUE_APP_BUGSNAG_ID: "74131913cc5e3e7677e7a7ae209e37b8",
            VUE_APP_BUGSNAG: "1",
            VUE_APP_GTAG: "UA-166056108-1",
            VUE_APP_TOK_API_KEY: "46462862",
            VUE_APP_SERVICE_API_URL: "/api",
            VUE_APP_STORAGE_API_URL: "https://rda.la/api",
            VUE_APP_CHECKOUT_BASE: "https://mirami.chat/",
            VUE_APP_UPLOADS_BASE_URL: "https://mirami.chat/uploads/",
            VUE_APP_SOCKET_SERVER: "mirame.chat",
            VUE_APP_WEBRTC_SOCKET_SERVER: "ortc.mirame.chat",
            VUE_APP_WEBRTC_MONITORING: "https://ortc-api.rda.la/monitoring/log/",
            VUE_APP_WEBRTC_PK: "a6YrIjPuP43IIEKzBu4hZaRyjS6nBjFcomfI",
            VUE_APP_PATH_SOCKET: "/socket.io",
            VUE_APP_PATH_WEBRTC_SOCKET: "/signal",
            VUE_APP_SOCKET_RECONNECT_FREQ: "3000",
            VUE_APP_COIN_RATE: "1250",
            BASE_URL: "/"
        }).VUE_APP_DEBUG_MODE);
        var ta = null;
        ta = new Ht({
            publicKey: "a6YrIjPuP43IIEKzBu4hZaRyjS6nBjFcomfI",
            userId: "undefined",
            appVersion: "2.0.0"
        }),
        window.OTProperties = {},
        window.OTProperties.configURL = "https://config.opentok.com",
        n["default"].prototype.$bs = {
            notify: function() {}
        },
        window.$bs = {
            notify: function() {}
        },
        Zt.a.start({
            apiKey: "5e8e30faf133f2cc21896fe4f04fe44d",
            plugins: [new Qt.a]
        });
        var aa = Zt.a.getPlugin("vue");
        aa.installVueErrorHandler(n["default"]),
        n["default"].prototype.$bs = Zt.a,
        window.$bs = Zt.a,
        Object.defineProperty(n["default"].prototype, "$bus", {
            get: function() {
                return this.$root.bus
            }
        }),
        Object.defineProperty(n["default"].prototype, "$infoMessage", {
            get: function() {
                var e = this;
                return function(t, a, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null
                      , r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
                    e.$bus.$emit("modals.open", {
                        modalName: "InfoMessage",
                        payload: {
                            m: t,
                            btn: n,
                            icon: a,
                            imgIcon: i,
                            slug: r
                        }
                    })
                }
            }
        }),
        n["default"].filter("toNumber", (function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
            if (e = Number(e),
            "number" !== typeof e)
                return e;
            var a = new Intl.NumberFormat("ru",{
                minimumFractionDigits: 0,
                maximumFractionDigits: t
            });
            return a.format(e)
        }
        )),
        n["default"].filter("toTime", (function(e) {
            ("string" === typeof e || e instanceof String) && (e = e.replace(" ", "T") + "+03:00");
            var t = new Date(e);
            "Invalid Date" == t && ("string" === typeof e || e instanceof String) && (e = e.replace(/-/g, "/"),
            e = e.replace("T", " "),
            e = e.replace(/\.[0-9]*/, ""),
            t = new Date(e));
            var a = t.getHours()
              , n = t.getMinutes();
            return a < 10 && (a = "0" + a),
            n < 10 && (n = "0" + n),
            a + ":" + n
        }
        )),
        n["default"].filter("toDate", (function(e) {
            ("string" === typeof e || e instanceof String) && (e = e.replace(" ", "T") + "+03:00");
            var t = new Date(e);
            return "Invalid Date" == t && ("string" === typeof e || e instanceof String) && (e = e.replace(/-/g, "/"),
            e = e.replace("T", " "),
            e = e.replace(/\.[0-9]*/, ""),
            t = new Date(e)),
            t.toLocaleDateString(m["a"].state.user.language, {
                month: "long",
                day: "numeric",
                year: "numeric"
            })
        }
        )),
        n["default"].filter("toDateTime", (function(e) {
            ("string" === typeof e || e instanceof String) && (e = e.replace(" ", "T") + "+03:00");
            var t = new Date(e);
            return "Invalid Date" == t && ("string" === typeof e || e instanceof String) && (e = e.replace(/-/g, "/"),
            e = e.replace("T", " "),
            e = e.replace(/\.[0-9]*/, ""),
            t = new Date(e)),
            t.toLocaleDateString(m["a"].state.user.language, {
                month: "long",
                day: "numeric",
                year: "numeric",
                hour: "numeric",
                minute: "numeric"
            })
        }
        )),
        n["default"].prototype.$nprogress = ne.a,
        n["default"].prototype.$OT = ye.a,
        n["default"].prototype.$socketActions = Oe,
        n["default"].prototype.$webrtcSignal = Re,
        n["default"].prototype.$webrtcSocket = b,
        n["default"].prototype.$serviceApi = $e,
        n["default"].prototype.$storageApi = Qe,
        n["default"].prototype.$gtag = he["a"],
        n["default"].prototype.$ym = ve,
        n["default"].prototype.$monitoringRtc = ta,
        i["a"].Store.prototype.$socketActions = Oe,
        i["a"].Store.prototype.$webrtcSignal = Re,
        i["a"].Store.prototype.$serviceApi = $e,
        n["default"].use(te, F),
        n["default"].use(_e),
        n["default"].use(ge.a),
        n["default"].use(Te),
        n["default"].component("paginate", et.a),
        rt["a"].use([ot["a"], st["a"], ct["a"]]),
        n["default"].use(ut()(rt["a"])),
        n["default"].use(tt["a"], {
            name: "Timeago",
            locale: "en",
            locales: {
                ru: a("9f3f"),
                en: a("52cf"),
                es: a("fd2d"),
                ar: a("1034"),
                it: a("8666"),
                fr: a("2ca0"),
                de: a("6e0c")
            },
            converter: function(e, t, a) {
                var n = Object(at["distanceInWordsStrict"])(e, Date.now(), {
                    locale: t
                })
                  , i = n.split(" ");
                return i[0] + i[1].substring(0, 1)
            }
        }),
        n["default"].use(it.a, {
            props: {
                spinner: "waveDots"
            }
        }),
        n["default"].use(K["a"], {
            prefix: "cache_",
            driver: "local"
        }),
        n["default"].use(he["a"], {
            config: {
                id: "UA-166056108-1"
            }
        }, E["a"]),
        i["a"].Store.prototype.i18n = F,
        i["a"].Store.prototype.OT = ye.a,
        i["a"].Store.prototype.monitoringRtc = ta,
        i["a"].Store.prototype.soundPlayer = ea,
        n["default"].mixin(Me),
        ea.init("/partner.mp3"),
        n["default"].prototype.$sound = ea,
        setTimeout((function() {
            new n["default"]({
                el: "#app",
                data: {
                    bus: W["a"]
                },
                router: E["a"],
                i18n: F,
                store: m["a"],
                template: "<App/>",
                components: {
                    App: T
                }
            })
        }
        ), 500)
    },
    "68a4": function(e, t, a) {
        "use strict";
        a.r(t);
        a("6b54");
        var n = {}.toString;
        t["default"] = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    },
    "6b7f": function(e, t, a) {
        "use strict";
        a.d(t, "a", (function() {
            return i
        }
        ));
        var n = a("a026")
          , i = new n["default"]
    },
    7924: function(e, t, a) {
        "use strict";
        a.r(t);
        var n = a("7618")
          , i = (a("6b54"),
        {})
          , r = a("e3db")
          , o = a("ba5e")
          , s = Object.prototype.toString
          , c = "function" === typeof Blob || "undefined" !== typeof Blob && "[object BlobConstructor]" === s.call(Blob)
          , l = "function" === typeof File || "undefined" !== typeof File && "[object FileConstructor]" === s.call(File);
        function u(e, t) {
            if (!e)
                return e;
            if (o(e)) {
                var a = {
                    _placeholder: !0,
                    num: t.length
                };
                return t.push(e),
                a
            }
            if (r(e)) {
                for (var i = new Array(e.length), s = 0; s < e.length; s++)
                    i[s] = u(e[s], t);
                return i
            }
            if ("object" === Object(n["a"])(e) && !(e instanceof Date)) {
                i = {};
                for (var c in e)
                    i[c] = u(e[c], t);
                return i
            }
            return e
        }
        function d(e, t) {
            if (!e)
                return e;
            if (e && e._placeholder)
                return t[e.num];
            if (r(e))
                for (var a = 0; a < e.length; a++)
                    e[a] = d(e[a], t);
            else if ("object" === Object(n["a"])(e))
                for (var i in e)
                    e[i] = d(e[i], t);
            return e
        }
        i.deconstructPacket = function(e) {
            var t = []
              , a = e.data
              , n = e;
            return n.data = u(a, t),
            n.attachments = t.length,
            {
                packet: n,
                buffers: t
            }
        }
        ,
        i.reconstructPacket = function(e, t) {
            return e.data = d(e.data, t),
            e.attachments = void 0,
            e
        }
        ,
        i.removeBlobs = function(e, t) {
            function a(e, u, d) {
                if (!e)
                    return e;
                if (c && e instanceof Blob || l && e instanceof File) {
                    i++;
                    var m = new FileReader;
                    m.onload = function() {
                        d ? d[u] = this.result : s = this.result,
                        --i || t(s)
                    }
                    ,
                    m.readAsArrayBuffer(e)
                } else if (r(e))
                    for (var _ = 0; _ < e.length; _++)
                        a(e[_], _, e);
                else if ("object" === Object(n["a"])(e) && !o(e))
                    for (var p in e)
                        a(e[p], p, e)
            }
            var i = 0
              , s = e;
            a(s),
            i || t(s)
        }
        ,
        t["default"] = i
    },
    a18c: function(e, t, a) {
        "use strict";
        var n = a("7618")
          , i = (a("7f7f"),
        a("75fc"))
          , r = a("a026")
          , o = a("8c4f")
          , s = a("4360")
          , c = {
            auth: {
                authorize: function() {
                    return s["a"].state.user.token
                },
                next: function() {
                    return "/"
                }
            },
            guest: {
                authorize: function() {
                    return !s["a"].state.user.token
                },
                next: function() {
                    return "/"
                }
            },
            nobody: {
                authorize: function() {
                    return !1
                },
                next: function() {
                    return s["a"].state.user.token,
                    "/"
                }
            }
        }
          , l = c
          , u = function() {
            return Promise.all([a.e("chunk-d01cbc3a"), a.e("chunk-7afb3f78"), a.e("chunk-2d207bc2"), a.e("chunk-2ae023b9")]).then(a.bind(null, "3029"))
        }
          , d = function() {
            return Promise.all([a.e("chunk-d01cbc3a"), a.e("chunk-541328b6"), a.e("chunk-298598b1"), a.e("chunk-7d0291a2"), a.e("chunk-5876cdd3")]).then(a.bind(null, "3527"))
        }
          , m = function() {
            return Promise.all([a.e("chunk-541328b6"), a.e("chunk-298598b1"), a.e("chunk-7d0291a2"), a.e("chunk-cc84d7f0")]).then(a.bind(null, "0eeb"))
        }
          , _ = function() {
            return Promise.all([a.e("chunk-d01cbc3a"), a.e("chunk-d2aea0ee"), a.e("chunk-43b9c088")]).then(a.bind(null, "25fb"))
        }
          , p = function() {
            return Promise.all([a.e("chunk-d01cbc3a"), a.e("chunk-d2aea0ee"), a.e("chunk-479d8dba")]).then(a.bind(null, "4095"))
        }
          , g = function() {
            return a.e("chunk-14f4422c").then(a.bind(null, "e8e5"))
        }
          , h = function() {
            return a.e("chunk-743145ef").then(a.bind(null, "299a"))
        }
          , f = function() {
            return a.e("chunk-3f69790a").then(a.bind(null, "d40e"))
        }
          , v = function() {
            return a.e("chunk-ad582ca2").then(a.bind(null, "f96c"))
        }
          , b = function() {
            return a.e("chunk-2d20f52a").then(a.bind(null, "b2ae"))
        }
          , y = function() {
            return Promise.all([a.e("chunk-d01cbc3a"), a.e("chunk-541328b6"), a.e("chunk-9a8ac2e8")]).then(a.bind(null, "8bdb"))
        }
          , w = function() {
            return Promise.all([a.e("chunk-7afb3f78"), a.e("chunk-2d207bc2"), a.e("chunk-2d0c91b3")]).then(a.bind(null, "5871"))
        }
          , k = function() {
            return Promise.all([a.e("chunk-541328b6"), a.e("chunk-7d0291a2"), a.e("chunk-2d0a496f")]).then(a.bind(null, "06a4"))
        }
          , x = function() {
            return a.e("chunk-2d0d67a2").then(a.bind(null, "735e"))
        }
          , S = [{
            path: "/",
            name: "Index",
            component: u,
            meta: {
                guards: {}
            }
        }, {
            path: "/",
            component: w,
            meta: {
                guards: {}
            },
            children: [{
                path: "/girl/:refCode",
                name: "Profile",
                component: d,
                props: !0,
                meta: {
                    guards: {}
                }
            }, {
                path: "/profile/",
                name: "Personal",
                component: m,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }, {
                path: "/favorites/",
                name: "Favorites",
                component: _,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }, {
                path: "/history/",
                name: "History",
                component: p,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }, {
                path: "/girls/",
                name: "Girls",
                component: g,
                meta: {
                    guards: {}
                }
            }, {
                path: "/virtualdate/",
                name: "VirtualDate",
                component: h,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }, {
                path: "/withdraw/",
                name: "Withdraw",
                component: f,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }, {
                path: "/gifts/",
                name: "GiveGifts",
                component: v,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }, {
                path: "/recovery/:recoveryKey",
                name: "RecoveryPassword",
                component: b,
                props: !0,
                meta: {
                    guards: {}
                }
            }, {
                path: "/messenger/",
                name: "Messenger",
                component: y,
                props: !0,
                meta: {
                    guards: {}
                }
            }, {
                path: "/nsfw/gallery",
                name: "Nsfw Gallery",
                component: k,
                props: !0,
                meta: {
                    guards: {}
                }
            }, {
                path: "/top",
                name: "Top",
                component: x,
                meta: {
                    guards: {
                        auth: !0
                    }
                }
            }]
        }];
        r["default"].use(o["a"]);
        var C = "/";
        window.baseLangPath && (C = window.baseLangPath);
        var T = function() {
            return Promise.all([a.e("chunk-d01cbc3a"), a.e("chunk-541328b6"), a.e("chunk-7afb3f78"), a.e("chunk-298598b1"), a.e("chunk-860ba808")]).then(a.bind(null, "872b"))
        }
          , E = new o["a"]({
            base: C,
            mode: "history",
            scrollBehavior: function(e, t, a) {
                return {
                    y: 0
                }
            },
            routes: [{
                path: "/",
                component: T,
                meta: {
                    guards: {}
                },
                children: Object(i["a"])(S)
            }, {
                path: "*",
                name: "Any",
                meta: {
                    guards: {
                        nobody: !0
                    }
                }
            }]
        });
        E.beforeEach((function(e, t, a) {
            "Index" === e.name ? (document.getElementById("land_info").style.display = "block",
            document.getElementById("footer_site").style.display = "block",
            document.getElementById("language_site").style.display = "block") : (document.getElementById("land_info").style.display = "none",
            document.getElementById("footer_site").style.display = "none",
            document.getElementById("language_site").style.display = "none");
            var i = function(t) {
                if (e.matched.some((function(e) {
                    return e.meta.guards[t]
                }
                )) && !l[t].authorize())
                    return {
                        v: a(l[t].next())
                    }
            };
            for (var r in l) {
                var o = i(r);
                if ("object" === Object(n["a"])(o))
                    return o.v
            }
            return a()
        }
        ));
        t["a"] = E
    },
    a418: function(e, t, a) {
        "use strict";
        a.r(t);
        a("c5f6"),
        a("28a5");
        var n = a("4360")
          , i = {}
          , r = a("34eb")("socket.io-parser")
          , o = a("7297")
          , s = a("7924")
          , c = a("68a4").default
          , l = a("ba5e")
          , u = a("3e67").aes256
          , d = {
            main_secret_key: "8cAnF0nfLHmkVUaNLDJJRaLZW8KQVTk4",
            decrypt: function(e, t) {
                return "cipher.1" === e ? u.decrypt(d.main_secret_key, t) : "cipher.2" === e ? u.decrypt(n["a"].state.system.socketSecretKey, t) : void 0
            },
            encrypt: function(e, t) {
                return "cipher.1" === e ? u.encrypt(d.main_secret_key, t) : "cipher.2" === e ? u.encrypt(n["a"].state.system.socketSecretKey, t) : void 0
            }
        };
        function m() {}
        i.protocol = 4,
        i.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"],
        i.CONNECT = 0,
        i.DISCONNECT = 1,
        i.EVENT = 2,
        i.ACK = 3,
        i.ERROR = 4,
        i.BINARY_EVENT = 5,
        i.BINARY_ACK = 6,
        i.Encoder = m,
        i.Decoder = f;
        var _ = i.ERROR + '"encode error"';
        function p(e) {
            var t = "" + e.type;
            if (i.BINARY_EVENT !== e.type && i.BINARY_ACK !== e.type || (t += e.attachments + "-"),
            e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
            null != e.id && (t += e.id),
            null != e.data) {
                var a = g(e.data);
                if (!1 === a)
                    return _;
                "message_main" === e["data"][0] && (a = ":cipher.1@" + d.encrypt("cipher.1", a)),
                t += a
            }
            return r("encoded %j as %s", e, t),
            t
        }
        function g(e) {
            try {
                return JSON.stringify(e)
            } catch (t) {
                return !1
            }
        }
        function h(e, t) {
            function a(e) {
                var a = s.deconstructPacket(e)
                  , n = p(a.packet)
                  , i = a.buffers;
                i.unshift(n),
                t(i)
            }
            s.removeBlobs(e, a)
        }
        function f() {
            this.reconstructor = null
        }
        function v(e) {
            var t = 0
              , a = {
                type: Number(e.charAt(0))
            };
            if (null == i.types[a.type])
                return w("unknown packet type " + a.type);
            if (i.BINARY_EVENT === a.type || i.BINARY_ACK === a.type) {
                var n = t + 1;
                while ("-" !== e.charAt(++t) && t != e.length)
                    ;
                var o = e.substring(n, t);
                if (o != Number(o) || "-" !== e.charAt(t))
                    throw new Error("Illegal attachments");
                a.attachments = Number(o)
            }
            if ("/" === e.charAt(t + 1)) {
                n = t + 1;
                while (++t) {
                    var s = e.charAt(t);
                    if ("," === s)
                        break;
                    if (t === e.length)
                        break
                }
                a.nsp = e.substring(n, t)
            } else
                a.nsp = "/";
            var l = e.charAt(t + 1);
            if ("" !== l && Number(l) == l) {
                n = t + 1;
                while (++t) {
                    s = e.charAt(t);
                    if (null == s || Number(s) != s) {
                        --t;
                        break
                    }
                    if (t === e.length)
                        break
                }
                a.id = Number(e.substring(n, t + 1))
            }
            if (e.charAt(++t)) {
                var u = b(e.substr(t));
                console.log(c(u));
                var d = !1 !== u && (a.type === i.ERROR || c(u));
                if (!d)
                    return w("invalid payload");
                a.data = u
            }
            return r("decoded %s as %j", e, a),
            a
        }
        function b(e) {
            try {
                return JSON.parse(e)
            } catch (t) {
                return !1
            }
        }
        function y(e) {
            this.reconPack = e,
            this.buffers = []
        }
        function w(e) {
            return {
                type: i.ERROR,
                data: "parser error: " + e
            }
        }
        m.prototype.encode = function(e, t) {
            if (r("encoding packet %j", e),
            i.BINARY_EVENT === e.type || i.BINARY_ACK === e.type)
                h(e, t);
            else {
                var a = p(e);
                t([a])
            }
        }
        ,
        o(f.prototype),
        f.prototype.add = function(e) {
            var t;
            if ("string" === typeof e)
                -1 === e.indexOf("cipher.1@") && -1 === e.indexOf("cipher.2@") || (e = e.split("@"),
                e[0] = e[0].split(":"),
                e = e[0][0] + d.decrypt(e[0][1], e[1])),
                t = v(e),
                i.BINARY_EVENT === t.type || i.BINARY_ACK === t.type ? (this.reconstructor = new y(t),
                0 === this.reconstructor.reconPack.attachments && this.emit("decoded", t)) : this.emit("decoded", t);
            else {
                if (!l(e) && !e.base64)
                    throw new Error("Unknown type: " + e);
                if (!this.reconstructor)
                    throw new Error("got binary data when not reconstructing a packet");
                t = this.reconstructor.takeBinaryData(e),
                t && (this.reconstructor = null,
                this.emit("decoded", t))
            }
        }
        ,
        f.prototype.destroy = function() {
            this.reconstructor && this.reconstructor.finishedReconstruction()
        }
        ,
        y.prototype.takeBinaryData = function(e) {
            if (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments) {
                var t = s.reconstructPacket(this.reconPack, this.buffers);
                return this.finishedReconstruction(),
                t
            }
            return null
        }
        ,
        y.prototype.finishedReconstruction = function() {
            this.reconPack = null,
            this.buffers = []
        }
        ,
        t["default"] = i
    },
    b0a0: function(e, t, a) {
        "use strict";
        var n = a("b980")
          , i = a.n(n);
        i.a
    },
    b980: function(e, t, a) {},
    ba5e: function(e, t, a) {
        (function(t) {
            e.exports = r;
            var a = "function" === typeof t && "function" === typeof t.isBuffer
              , n = "function" === typeof ArrayBuffer
              , i = function(e) {
                return "function" === typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e.buffer instanceof ArrayBuffer
            };
            function r(e) {
                return a && t.isBuffer(e) || n && (e instanceof ArrayBuffer || i(e))
            }
        }
        ).call(this, a("b639").Buffer)
    },
    cf94: function(e, t, a) {
        var n = a("19e9")
          , i = a("1739");
        t.install = function(e) {
            e.directive("autosize", {
                bind: function(e, t) {
                    var a = e.tagName;
                    "TEXTAREA" == a ? n(e) : "INPUT" == a && "text" == e.type && i(e)
                },
                componentUpdated: function(e, t, a) {
                    var r = e.tagName;
                    "TEXTAREA" == r ? n.update(e) : "INPUT" == r && "text" == e.type && i(e)
                },
                unbind: function(e) {
                    n.destroy(e)
                }
            })
        }
    },
    eaf8: function(e, t, a) {
        "use strict";
        a("4917"),
        a("3b2b"),
        a("84b4"),
        a("f5766"),
        a("34ef"),
        a("a481"),
        a("28a5"),
        a("6b54"),
        a("6762"),
        a("2fdb");
        var n = {
            copyTextToClipboardNative: function(e, t) {
                navigator.clipboard ? navigator.clipboard.writeText(e).then((function() {
                    console.log("Async: Copying to clipboard was successful!")
                }
                ), (function(e) {
                    console.error("Async: Could not copy text: ", e)
                }
                )) : this.oldCopyTextToClipboard(e, t)
            },
            copyToClipboard: function(e) {
                window.getSelection().removeAllRanges();
                var t = document.createRange();
                t.selectNode(e),
                window.getSelection().addRange(t);
                try {
                    document.execCommand("copy")
                } catch (a) {
                    console.log("Can't copy")
                }
                window.getSelection().removeAllRanges()
            },
            selectInput: function(e) {
                window.getSelection().removeAllRanges(),
                e.focus(),
                e.select()
            },
            oldCopyTextToClipboard: function(e, t) {
                t || (t = document.body);
                var a = document.createElement("textarea");
                a.value = e,
                t.appendChild(a),
                a.focus(),
                a.select();
                try {
                    var n = document.execCommand("copy")
                      , i = n ? "successful" : "unsuccessful";
                    console.log("Fallback: Copying text command was " + i)
                } catch (r) {
                    console.error("Fallback: Oops, unable to copy", r)
                }
                t.removeChild(a)
            },
            deleteByValue: function(e, t, a) {
                for (var n = 0; n < e.length; n++)
                    if (e[n] === a) {
                        e.splice(n, 1);
                        break
                    }
            },
            declOfNum: function(e, t) {
                var a = [2, 0, 1, 1, 1, 2];
                return t[e % 100 > 4 && e % 100 < 20 ? 2 : a[e % 10 < 5 ? e % 10 : 5]]
            },
            countPartsNum: function(e) {
                return e.toString().includes(".") ? e.toString().split(".").pop().length : 0
            },
            countDaysFrom: function(e, t) {
                var a = 0;
                return a = e ? (new Date).getTime() - e : 0,
                Math.round(a / 1e3 / 86400) + " " + n.declOfNum(Math.round(a / 1e3 / 86400), t)
            },
            uuidv4: function() {
                return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (function(e) {
                    return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
                }
                ))
            },
            sound: function(e) {
                var t = document.createElement("audio")
                  , a = document.createElement("source");
                a.src = e,
                a.type = "audio/mp3",
                t.appendChild(a),
                document.querySelector("body").appendChild(t),
                t.play(),
                t.onended = function() {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            },
            isHiddenPage: function() {
                var e;
                return "undefined" !== typeof document.hidden ? (e = "hidden",
                "visibilitychange") : "undefined" !== typeof document.msHidden ? (e = "msHidden",
                "msvisibilitychange") : "undefined" !== typeof document.webkitHidden && (e = "webkitHidden",
                "webkitvisibilitychange"),
                document[e]
            },
            daysTo: function(e) {
                e = e.split(" ")[0];
                var t = Date.parse(e)
                  , a = Date.now()
                  , n = t - a;
                return n /= 1e3,
                n /= 60,
                n /= 60,
                n /= 24,
                Math.ceil(n)
            },
            normilizeDate1: function(e) {
                return e.replace(" ", "T") + "+03:00"
            },
            normilizeDate2: function(e) {
                return e = e.replace(/-/g, "/"),
                e = e.replace("T", " "),
                e = e.replace(/\.[0-9]*/, ""),
                e
            },
            formatDate: function(e) {
                var t = e.getFullYear()
                  , a = (e.getMonth() + 1).toString().padStart(2, "0")
                  , n = e.getDate().toString().padStart(2, "0");
                return "".concat(t, "-").concat(a, "-").concat(n)
            },
            truncateToDecimals: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
                  , a = Math.pow(10, t);
                return Math.trunc(e * a) / a
            },
            linkify: function(e) {
                var t, a;
                a = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim,
                t = e.replace(a, "***");
                var n = ["Кумит", "куми", "лакикраш", "coomeet", "luckycrush"]
                  , i = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/
                  , r = /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|xxx|associates|army|yoga|attorney|republican|reviews|xyz|zone|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|live|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)){3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i
                  , o = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
                  , s = /^\+?[1-9][0-9]{7,14}$/
                  , c = RegExp(n.join("|"), "g");
                return t = t.replace(i, "***"),
                t = t.replace(r, "***"),
                t = t.replace(o, "***"),
                t = t.replace(s, "***"),
                t = t.replace(c, "***"),
                t
            },
            isMobileSpay: function() {
                var e = {
                    isAndroid: function() {
                        return navigator.userAgent.match(/Android/i)
                    },
                    isBlackBerry: function() {
                        return navigator.userAgent.match(/BlackBerry/i)
                    },
                    isiOS: function() {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                    },
                    isOpera: function() {
                        return navigator.userAgent.match(/Opera Mini/i)
                    },
                    isWindows: function() {
                        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
                    },
                    isiOSWebView: function() {
                        return navigator.userAgent.match(/Apple.*Mobile(?!.*Safari)/i)
                    },
                    isInstagram: function() {
                        return navigator.userAgent.match(/instagram/i)
                    }
                };
                return e.isAndroid() && !e.isInstagram() || e.isiOS() && !e.isiOSWebView()
            }
        };
        t["a"] = n
    }
});

