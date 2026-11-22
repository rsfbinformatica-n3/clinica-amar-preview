(function () {
  document.documentElement.classList.add('js');
  var header = document.querySelector('.site-header');
  var burger = document.getElementById('burger');
  var menu = document.getElementById('menu');

  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function setMenu(open) {
    menu.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  burger.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
  menu.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el, i) {
      el.style.transitionDelay = (i % 5) * 60 + 'ms';
      io.observe(el);
    });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  var y = document.getElementById('ano');
  if (y) y.textContent = new Date().getFullYear();
})();
