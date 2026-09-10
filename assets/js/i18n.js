/* ============================================================
   Language switching.

   English lives inline in index.html and is the source of truth:
   first paint, no-JS readers and crawlers all get a complete
   English page, typeset normally, with no flash. Other languages
   are dictionaries applied over it.

   ── ADDING A LANGUAGE ──────────────────────────────────────
   1. Write Site/i18n/<code>.json with the same keys as en.json.
   2. Add one entry to LANGUAGES below.
   3. Rebuild the artifact (Site/tools/build_artifact.py).
   Nothing else changes.
   ============================================================ */

(function () {
  "use strict";

  var LANGUAGES = [
    { code: "en", label: "English", short: "EN" },
    { code: "it", label: "Italiano", short: "IT" }
    // { code: "ru", label: "Русский", short: "RU" }
  ];

  var STORAGE_KEY = "cc-lang";
  var dicts = {};          // code -> dictionary
  var english = {};        // key -> original innerHTML / attribute value
  var current = "en";
  var busy = false;

  /* ── capture the English page as the fallback dictionary ──── */

  function capture() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!(k in english)) english[k] = el.innerHTML;
    });
    [["data-i18n-aria", "aria-label"], ["data-i18n-alt", "alt"]].forEach(function (pair) {
      document.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
        var k = el.getAttribute(pair[0]);
        if (!(k in english)) english[k] = el.getAttribute(pair[1]) || "";
      });
    });
    english["meta.title"] = document.title;
    var md = document.querySelector('meta[name="description"]');
    english["meta.desc"] = md ? md.getAttribute("content") : "";
  }

  /* ── dictionary loading ──────────────────────────────────────
     Three sources, in order:
       1. an inlined <script type="application/json"> block  (the artifact)
       2. window.I18N_DICT, if a wrapper already loaded
       3. injecting <script src="i18n/<code>.js">

     Step 3 is a script tag, not fetch, on purpose: opening index.html
     straight off disk gives a file:// page, and browsers block fetch and
     XHR against local files. Script tags still load, so the switcher works
     from the filesystem as well as over http. The wrappers are generated
     from the .json files by Site/tools/make_dicts.py. */

  function loadDict(code) {
    if (code === "en") return Promise.resolve(null);
    if (dicts[code]) return Promise.resolve(dicts[code]);

    var inline = document.getElementById("i18n-" + code);
    if (inline) {
      try {
        dicts[code] = JSON.parse(inline.textContent);
        return Promise.resolve(dicts[code]);
      } catch (err) {
        console.error("i18n: inlined " + code + " is not valid JSON", err);
      }
    }

    if (window.I18N_DICT && window.I18N_DICT[code]) {
      dicts[code] = window.I18N_DICT[code];
      return Promise.resolve(dicts[code]);
    }

    return new Promise(function (resolve, reject) {
      var src = "i18n/" + code + ".js";
      var tag = document.querySelector('script[data-i18n-src="' + code + '"]');
      if (!tag) {
        tag = document.createElement("script");
        tag.src = src;
        tag.setAttribute("data-i18n-src", code);
        document.head.appendChild(tag);
      }
      tag.addEventListener("load", function () {
        if (window.I18N_DICT && window.I18N_DICT[code]) {
          dicts[code] = window.I18N_DICT[code];
          resolve(dicts[code]);
        } else {
          reject(new Error(src + " loaded but defined no dictionary"));
        }
      });
      tag.addEventListener("error", function () {
        reject(new Error("could not load " + src +
          " (run: python Site/tools/make_dicts.py)"));
      });
    });
  }

  /* ── applying a language ─────────────────────────────────── */

  function textOf(html) {
    var d = document.createElement("div");
    d.innerHTML = html;
    return d.textContent;
  }

  function apply(code, dict) {
    var missing = [];
    var mathy = [];        // elements we rewrote that contain TeX

    function value(key) {
      if (code === "en") return english[key];
      if (dict && Object.prototype.hasOwnProperty.call(dict, key)) return dict[key];
      missing.push(key);
      return english[key];        // never blank a block
    }

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var v = value(el.getAttribute("data-i18n"));
      if (v == null || v === el.innerHTML) return;
      el.innerHTML = v;
      if (v.indexOf("\\(") >= 0 || v.indexOf("$$") >= 0) mathy.push(el);
    });
    [["data-i18n-aria", "aria-label"], ["data-i18n-alt", "alt"]].forEach(function (pair) {
      document.querySelectorAll("[" + pair[0] + "]").forEach(function (el) {
        var v = value(el.getAttribute(pair[0]));
        if (v != null) el.setAttribute(pair[1], textOf(v));
      });
    });

    document.title = textOf(value("meta.title"));
    var md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", textOf(value("meta.desc")));

    document.documentElement.setAttribute("lang", code);
    document.documentElement.setAttribute("data-lang", code);

    if (missing.length) {
      console.warn("i18n: " + missing.length + " key(s) missing from " + code +
                   ", left in English:", missing.slice(0, 12));
    }
    current = code;
    return mathy;
  }

  /* ── public surface, used by hourglass.js and site.js ────── */

  window.I18N = {
    lang: function () { return current; },
    /* Translated string for `key`, else `fallback`. Returns plain text. */
    t: function (key, fallback) {
      var d = current === "en" ? english : dicts[current];
      var v = d && Object.prototype.hasOwnProperty.call(d, key) ? d[key]
            : (english[key] != null ? english[key] : fallback);
      return v == null ? fallback : textOf(v);
    },
    set: setLanguage
  };

  function setLanguage(code, opts) {
    if (busy || code === current) return Promise.resolve();
    busy = true;
    paintSwitcher(code);

    return loadDict(code)
      .then(function (dict) {
        var mathy = apply(code, dict);
        try { localStorage.setItem(STORAGE_KEY, code); } catch (err) { /* private mode */ }
        if (mathy.length && window.MathJax && window.MathJax.typesetPromise) {
          if (window.MathJax.typesetClear) window.MathJax.typesetClear(mathy);
          return window.MathJax.typesetPromise(mathy);
        }
      })
      .catch(function (err) {
        console.error("i18n: could not switch to " + code, err);
        paintSwitcher(current);
      })
      .then(function () {
        busy = false;
        paintSwitcher(current);
        document.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
        if (opts && opts.focus) {
          var b = document.querySelector('.lang-switch button[data-lang="' + current + '"]');
          if (b) b.focus();
        }
      });
  }

  /* ── switcher ────────────────────────────────────────────── */

  var mount = document.querySelector(".lang-switch");

  function paintSwitcher(active) {
    if (!mount) return;
    mount.querySelectorAll("button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === active;
      b.setAttribute("aria-current", on ? "true" : "false");
      b.disabled = busy;
    });
  }

  function buildSwitcher() {
    if (!mount || LANGUAGES.length < 2) return;
    mount.innerHTML = "";
    LANGUAGES.forEach(function (l, i) {
      if (i) {
        var sep = document.createElement("span");
        sep.className = "lang-sep";
        sep.setAttribute("aria-hidden", "true");
        sep.textContent = "·";
        mount.appendChild(sep);
      }
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-lang", l.code);
      b.setAttribute("lang", l.code);
      b.title = l.label;
      b.textContent = l.short;
      b.addEventListener("click", function () { setLanguage(l.code, { focus: true }); });
      mount.appendChild(b);
    });
  }

  /* ── boot ────────────────────────────────────────────────── */

  capture();
  buildSwitcher();
  paintSwitcher("en");

  /* The artifact host owns the root element, so the initial state may
     carry no lang. Mark it explicitly: [data-lang] drives the note. */
  var root = document.documentElement;
  if (!root.getAttribute("lang")) root.setAttribute("lang", "en");
  root.setAttribute("data-lang", root.getAttribute("lang") || "en");

  /* First visit is always English; a remembered choice is honoured. */
  var saved = null;
  try { saved = localStorage.getItem(STORAGE_KEY); } catch (err) { /* ignore */ }
  if (saved && saved !== "en" && LANGUAGES.some(function (l) { return l.code === saved; })) {
    setLanguage(saved);
  }
})();
