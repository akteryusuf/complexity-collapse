/* ============================================================
   Plate F — the hourglass phase-space continuum, live.

   Reworked from the original full-viewport sketch into a
   contained article figure:
     · renderer sized to its container (ResizeObserver), not window
     · play / pause / reset controls
     · pauses itself when scrolled out of view (IntersectionObserver)
     · falls back to the static Plate E drawing if WebGL is absent
     · HUD reports lambda = (3/2) r^(-5/4), the corrected value
       (V'' = -(9/4) r^(-5/2), so the growth rate is 3/2, not sqrt3/2)

   The throat is regularised at r_min so the mesh stays renderable;
   the model itself continues to r -> 0. The figure caption says so.
   ============================================================ */

(function () {
  "use strict";

  var panel = document.getElementById("model");
  if (!panel) return;

  /* Translated label, falling back to English if i18n.js is absent.
     Named tr(), not t() -- `t` is already the time parameter below. */
  function tr(key, fallback) {
    return (window.I18N && window.I18N.t) ? window.I18N.t(key, fallback) : fallback;
  }

  var stage = panel.querySelector(".model-stage");
  var btnPlay = document.getElementById("model-play");
  var btnReset = document.getElementById("model-reset");

  var hud = {
    phase: document.querySelector("#hud-phase .hv"),
    r: document.querySelector("#hud-r .hv"),
    e: document.querySelector("#hud-e .hv"),
    k: document.querySelector("#hud-k .hv"),
    lam: document.querySelector("#hud-lam .hv")
  };

  /* ── capability gate ──────────────────────────────────────── */

  function unsupported() {
    panel.classList.add("is-unsupported");
    if (btnPlay) btnPlay.disabled = true;
    if (btnReset) btnReset.disabled = true;
  }

  if (typeof window.THREE === "undefined") { unsupported(); return; }

  try {
    var probe = document.createElement("canvas");
    if (!(probe.getContext("webgl") || probe.getContext("experimental-webgl"))) {
      unsupported();
      return;
    }
  } catch (err) {
    unsupported();
    return;
  }

  /* ── geometry constants ───────────────────────────────────── */

  var R_MIN = 0.3;      // regularised throat radius
  var R_MAX = 6.8;      // peripheral rim
  var Z_MAX = 6.2;      // half-height of the hourglass
  var THROAT_BAND = 1.0; // |z| under which we call it "throat"

  var scene, camera, renderer, controls;
  var funnelGroup, throatSphere, ring, particle, particleMat, trailLine;
  var trail = [];
  var MAX_TRAIL = 300;

  var t = 0;
  var playing = false;
  var inView = true;
  var frame = null;

  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── scene ────────────────────────────────────────────────── */

  function build() {
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x070b12, 0.028);

    camera = new THREE.PerspectiveCamera(45, 16 / 10, 0.1, 1000);
    camera.position.set(0, 4.5, 22);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x070b12, 1);
    stage.appendChild(renderer.domElement);

    if (typeof THREE.OrbitControls === "function") {
      controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.maxPolarAngle = Math.PI - 0.1;
      controls.minDistance = 8;
      controls.maxDistance = 44;
    }

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    var core = new THREE.PointLight(0xff2d6b, 3, 15);
    core.position.set(0, 0, 0);
    scene.add(core);

    var top = new THREE.PointLight(0x4fd4f5, 1.5, 22);
    top.position.set(0, 8, 0);
    scene.add(top);

    var bottom = new THREE.PointLight(0x00ffcc, 1.5, 22);
    bottom.position.set(0, -8, 0);
    scene.add(bottom);

    /* double funnel */
    funnelGroup = new THREE.Group();
    scene.add(funnelGroup);

    var funnelMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      side: THREE.DoubleSide
    });

    funnelGroup.add(new THREE.Mesh(funnelGeometry(true), funnelMat));
    funnelGroup.add(new THREE.Mesh(funnelGeometry(false), funnelMat));

    /* singularity throat */
    throatSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.35, 32, 32),
      new THREE.MeshBasicMaterial({ color: 0xff2d6b })
    );
    scene.add(throatSphere);

    ring = new THREE.Mesh(
      new THREE.RingGeometry(0.4, 0.85, 48),
      new THREE.MeshBasicMaterial({
        color: 0xff7a3d, side: THREE.DoubleSide, transparent: true, opacity: 0.8
      })
    );
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    /* travelling state point */
    particleMat = new THREE.MeshStandardMaterial({
      color: 0xffffff, emissive: 0x4fd4f5, emissiveIntensity: 0.9, roughness: 0.2
    });
    particle = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 16), particleMat);
    scene.add(particle);

    /* trail */
    var geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(new Float32Array(MAX_TRAIL * 3), 3));
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(MAX_TRAIL * 3), 3));
    trailLine = new THREE.Line(geo, new THREE.LineBasicMaterial({
      vertexColors: true, transparent: true, opacity: 0.85
    }));
    scene.add(trailLine);
  }

  /* Parametric funnel: r grows as a power of height, so the surface
     narrows toward the throat the way 3 r^(-1/2) does. */
  function funnelGeometry(isUpper) {
    var radial = 48, heights = 32;
    var pos = [], col = [], idx = [];

    var cCore = new THREE.Color(0xff2d6b);
    var cMid = new THREE.Color(isUpper ? 0x3a7bd5 : 0x00b4db);
    var cEdge = new THREE.Color(0x4fd4f5);

    for (var i = 0; i <= heights; i++) {
      var v = i / heights;                                   // 0 throat → 1 rim
      var y = isUpper ? (0.2 + v * 6) : (-0.2 - v * 6);
      var radius = R_MIN + Math.pow(v, 1.8) * (R_MAX - R_MIN);

      for (var j = 0; j <= radial; j++) {
        var theta = (j / radial) * Math.PI * 2;
        pos.push(radius * Math.cos(theta), y, radius * Math.sin(theta));

        var c = new THREE.Color();
        if (v < 0.2) c.lerpColors(cCore, cMid, v / 0.2);
        else c.lerpColors(cMid, cEdge, (v - 0.2) / 0.8);
        col.push(c.r, c.g, c.b);
      }
    }

    for (var a = 0; a < heights; a++) {
      for (var b = 0; b < radial; b++) {
        var p = a * (radial + 1) + b;
        var q = p + radial + 1;
        idx.push(p, q, q + 1, p, q + 1, p + 1);
      }
    }

    var g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  }

  /* ── the state point's path, and the quantities it reports ── */

  function step() {
    var cycle = t % (Math.PI * 2);
    var z = Z_MAX * Math.cos(cycle);
    var absZ = Math.abs(z);

    var normZ = Math.max(0, (absZ - 0.2) / 6);
    var r = R_MIN + Math.pow(normZ, 1.8) * (R_MAX - R_MIN);

    /* angular sweep accelerates as the throat is approached */
    var omega = 0.5 + 1.2 / (r * r + 0.05);
    var theta = t * 3 + omega;

    particle.position.set(r * Math.cos(theta), z, r * Math.sin(theta));

    /* model quantities */
    var deltaEz = 3 / Math.sqrt(r);          // ΔE_z = 3 r^(-1/2)
    var K = 1 / deltaEz;                     // K    = 1/ΔE_z = r^(1/2)/3
    var lambda = 1.5 / Math.pow(r, 1.25);    // λ    = (3/2) r^(-5/4)

    if (hud.r) hud.r.textContent = r.toFixed(2);
    if (hud.e) hud.e.textContent = deltaEz.toFixed(2);
    if (hud.k) hud.k.textContent = K.toFixed(3);
    if (hud.lam) hud.lam.textContent = lambda.toFixed(2);

    var label, colour;
    if (z > THROAT_BAND) { label = tr("ui.phaseUpper", "Upper collapse"); colour = 0x4fd4f5; }
    else if (z < -THROAT_BAND) { label = tr("ui.phaseLower", "Lower expansion"); colour = 0x00ffcc; }
    else { label = tr("ui.phaseThroat", "Throat · chaos"); colour = 0xff2d6b; }

    if (hud.phase) hud.phase.textContent = label;
    particleMat.emissive.setHex(colour);

    /* trail */
    trail.push({ x: particle.position.x, y: z, z: particle.position.z });
    if (trail.length > MAX_TRAIL) trail.shift();

    var pa = trailLine.geometry.attributes.position;
    var ca = trailLine.geometry.attributes.color;
    var c = new THREE.Color();
    for (var i = 0; i < trail.length; i++) {
      var pt = trail[i];
      pa.setXYZ(i, pt.x, pt.y, pt.z);
      if (pt.y > THROAT_BAND) c.setHex(0x4fd4f5);
      else if (pt.y < -THROAT_BAND) c.setHex(0x00ffcc);
      else c.setHex(0xff2d6b);
      ca.setXYZ(i, c.r, c.g, c.b);
    }
    trailLine.geometry.setDrawRange(0, trail.length);
    pa.needsUpdate = true;
    ca.needsUpdate = true;

    /* throat pulse */
    var pulse = 1 + 0.15 * Math.sin(t * 10);
    throatSphere.scale.set(pulse, pulse, pulse);
    ring.rotation.z += 0.01;
    funnelGroup.rotation.y = t * 0.05;
  }

  function draw() {
    if (controls) controls.update();
    renderer.render(scene, camera);
  }

  function loop() {
    frame = requestAnimationFrame(loop);
    t += 0.008;
    step();
    draw();
  }

  /* ── play / pause ─────────────────────────────────────────── */

  function setPlaying(next) {
    playing = next;
    if (btnPlay) {
      btnPlay.textContent = playing ? tr("ui.pause", "Pause") : tr("ui.play", "Play");
      btnPlay.setAttribute("aria-pressed", String(playing));
    }
    if (playing && inView && frame === null) {
      frame = requestAnimationFrame(loop);
    } else if (!playing && frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  }

  /* Off-screen: stop the loop but remember the user's intent, so
     scrolling back resumes only if they had it running. */
  function setInView(next) {
    inView = next;
    if (!inView && frame !== null) {
      cancelAnimationFrame(frame);
      frame = null;
    } else if (inView && playing && frame === null) {
      frame = requestAnimationFrame(loop);
    }
  }

  function reset() {
    t = 0;
    trail.length = 0;
    trailLine.geometry.setDrawRange(0, 0);
    if (controls) controls.reset();
    camera.position.set(0, 4.5, 22);
    step();
    draw();
  }

  /* ── sizing ───────────────────────────────────────────────── */

  function resize() {
    var w = stage.clientWidth;
    var h = stage.clientHeight;
    if (!w || !h) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (!playing) draw();
  }

  /* ── wire up ──────────────────────────────────────────────── */

  build();
  resize();
  step();
  draw();

  if (btnPlay) {
    btnPlay.addEventListener("click", function () { setPlaying(!playing); });
  }
  if (btnReset) {
    btnReset.addEventListener("click", reset);
  }

  if ("ResizeObserver" in window) {
    new ResizeObserver(resize).observe(stage);
  } else {
    window.addEventListener("resize", resize);
  }

  if ("IntersectionObserver" in window) {
    new IntersectionObserver(function (entries) {
      setInView(entries[0].isIntersecting);
    }, { threshold: 0.05 }).observe(panel);
  }

  document.addEventListener("visibilitychange", function () {
    setInView(!document.hidden);
  });

  /* Relabel the HUD and the button when the language changes; if paused,
     redraw one frame so the new phase name appears immediately. */
  document.addEventListener("langchange", function () {
    if (btnPlay) btnPlay.textContent = playing ? tr("ui.pause", "Pause") : tr("ui.play", "Play");
    step();
    if (!playing) draw();
  });

  /* Autoplay unless the reader asked for reduced motion — either way
     the first frame is already drawn, so the figure is never blank. */
  setPlaying(!reduceMotion);
})();
