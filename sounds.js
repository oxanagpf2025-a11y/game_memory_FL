/**
 * Звуки Memory FABERLIC: только сопровождение, логика игры в script.js.
 * Файлы: assets/sounds/flip.mp3, match.mp3, win.mp3, perfect.mp3
 */
(function () {
  "use strict";

  var STORAGE_KEY = "faberlic_memory_sound_enabled_v1";
  var BASE = "assets/sounds/";

  var VOLUME = {
    flip: 0.38,
    match: 0.42,
    win: 0.48,
    perfect: 0.52
  };

  var pool = {};
  var enabled;

  function loadEnabled() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw === null) return true;
      return raw === "1" || raw === "true";
    } catch (e) {
      return true;
    }
  }

  function saveEnabled(val) {
    try {
      localStorage.setItem(STORAGE_KEY, val ? "1" : "0");
    } catch (e) {
      /* ignore */
    }
  }

  function getAudio(name) {
    if (!pool[name]) {
      var a = new Audio();
      a.preload = "auto";
      a.src = BASE + name + ".mp3";
      a.volume = VOLUME[name] != null ? VOLUME[name] : 0.4;
      a.addEventListener(
        "error",
        function () {
          /* файл отсутствует или неверный — тихо игнорируем */
        },
        { once: true }
      );
      pool[name] = a;
    }
    return pool[name];
  }

  enabled = loadEnabled();

  function play(name) {
    if (!enabled) return;
    if (name !== "flip" && name !== "match" && name !== "win" && name !== "perfect") return;
    var a = getAudio(name);
    try {
      a.currentTime = 0;
      var p = a.play();
      if (p && typeof p.then === "function") {
        p.catch(function () {
          /* autoplay/файл */
        });
      }
    } catch (e) {
      /* ignore */
    }
  }

  function setEnabled(v) {
    enabled = Boolean(v);
    saveEnabled(enabled);
  }

  function isEnabled() {
    return enabled;
  }

  function initToggle() {
    var el = document.getElementById("sound-enabled");
    if (!el) return;
    el.checked = enabled;
    el.addEventListener("change", function () {
      setEnabled(el.checked);
    });
  }

  window.faberlicSounds = {
    playFlip: function () { play("flip"); },
    playMatch: function () { play("match"); },
    playWin: function () { play("win"); },
    playPerfect: function () { play("perfect"); },
    setEnabled: setEnabled,
    isEnabled: isEnabled,
    initToggle: initToggle
  };
})();
