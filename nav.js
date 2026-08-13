(function () {
  var toggle = document.getElementById('navToggle');
  var side = document.getElementById('sideNav');
  var backdrop = document.getElementById('navBackdrop');
  if (!toggle || !side || !backdrop) return;

  function open() {
    side.classList.add('open');
    backdrop.classList.add('open');
    toggle.setAttribute('aria-expanded', 'true');
  }
  function close() {
    side.classList.remove('open');
    backdrop.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    side.classList.contains('open') ? close() : open();
  });
  backdrop.addEventListener('click', close);
  side.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', close);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
