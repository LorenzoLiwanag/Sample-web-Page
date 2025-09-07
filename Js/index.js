const btn = document.querySelector('.mobile-view-menu-toggle');
  const menu = document.querySelector('#primary-nav');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });
  }