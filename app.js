(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  if (!toggle || !menu) return;
  function setOpen(open) {
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  }
  toggle.addEventListener('click', () => setOpen(menu.hidden));
  menu.addEventListener('click', event => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') setOpen(false);
  });
})();
