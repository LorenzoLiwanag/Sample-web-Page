document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menu-icon');
    const navCenter = document.querySelector('.nav-center');
    console.log('init', !!menuIcon, !!navCenter); // should log true true

    if (menuIcon && navCenter) {
      menuIcon.addEventListener('click', () => {
        navCenter.classList.toggle('open');
      });
    }
  });