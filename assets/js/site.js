/* ============================================================
   Site chrome: lecturer identity, contents scrollspy.
   ============================================================ */

/* ─────────────────────────────────────────────────────────────
   EDIT HERE — this is the only place the lecturer is named.
   Every byline on the page is filled from this one object.

   • photo       : STILL A PLACEHOLDER. Drop a square portrait at
                   Site/assets/img/professor.jpg and it is picked up
                   automatically — no edit needed here.
   • affiliation : deliberately kept to what the source material
                   actually establishes. Do not add a title or
                   institution that cannot be verified — this byline
                   names a real person.
   • email       : rendered as a mailto: link in the page footer, so
                   it is visible to anyone the artifact link is
                   shared with. Set to "" to omit the contact line.
   ───────────────────────────────────────────────────────────── */
window.SITE = {
  professor: {
    honorific: "Dr.",
    firstName: "Peter",
    surname: "Copf",
    affiliation: "Author of the complexity–energy proposal",
    email: "petercopf1964@gmail.com",
    photo: "assets/img/professor.jpg",
    fallbackPhoto: "assets/img/professor.svg"
  }
};

(function () {
  "use strict";

  var prof = window.SITE.professor;

  /* ── 1. Name every byline slot ───────────────────────────── */

  var surnameHTML = prof.surname
    ? prof.surname
    : '<span class="tbd" title="Placeholder — set professor.surname in assets/js/site.js">[Surname]</span>';

  var fullName = prof.honorific + " " + prof.firstName + " " + surnameHTML;

  Array.prototype.forEach.call(document.querySelectorAll("[data-prof-name]"), function (el) {
    el.innerHTML = fullName;
  });
  function paintAffiliation() {
    var text = (window.I18N && window.I18N.t)
      ? window.I18N.t("ui.affiliation", prof.affiliation)
      : prof.affiliation;
    Array.prototype.forEach.call(document.querySelectorAll("[data-prof-affil]"), function (el) {
      el.textContent = text;
    });
  }
  paintAffiliation();

  /* Contact line. Built as real elements rather than innerHTML so the
     address is never parsed as markup. Omitted entirely if unset. */
  function paintContact() {
    var label = (window.I18N && window.I18N.t)
      ? window.I18N.t("ui.correspondence", "Correspondence")
      : "Correspondence";
    Array.prototype.forEach.call(document.querySelectorAll("[data-prof-email]"), function (el) {
      if (!prof.email) { el.hidden = true; return; }
      var a = document.createElement("a");
      a.href = "mailto:" + prof.email;
      a.textContent = prof.email;
      el.textContent = label + " ";
      el.appendChild(a);
    });
  }
  paintContact();

  document.addEventListener("langchange", function () {
    paintAffiliation();
    paintContact();
  });

  /* Portrait: try the real photo, fall back to the placeholder plate. */
  Array.prototype.forEach.call(document.querySelectorAll("[data-prof-photo]"), function (img) {
    img.addEventListener("error", function onError() {
      img.removeEventListener("error", onError);
      img.src = prof.fallbackPhoto;
    });
    img.src = prof.photo;
  });

  /* ── 2. Contents scrollspy ───────────────────────────────── */

  var links = Array.prototype.slice.call(document.querySelectorAll(".rail a[href^='#']"));
  if (!links.length || !("IntersectionObserver" in window)) return;

  var byId = {};
  var targets = [];

  links.forEach(function (a) {
    var id = a.getAttribute("href").slice(1);
    var section = document.getElementById(id);
    if (!section) return;
    byId[id] = a;
    targets.push(section);
  });

  var visible = new Set();

  function mark() {
    /* The topmost visible section wins, so the rail never flickers
       between two sections that share the viewport. */
    var best = null;
    var bestTop = Infinity;
    visible.forEach(function (id) {
      var top = document.getElementById(id).getBoundingClientRect().top;
      if (top < bestTop) { bestTop = top; best = id; }
    });

    links.forEach(function (a) {
      if (best && a === byId[best]) a.setAttribute("aria-current", "true");
      else a.removeAttribute("aria-current");
    });
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });
    mark();
  }, { rootMargin: "-12% 0px -70% 0px", threshold: 0 });

  targets.forEach(function (t) { observer.observe(t); });
})();
