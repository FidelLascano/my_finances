/**
 * main.js – Mr. Ahorro
 * Comportamientos interactivos globales del sitio.
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Menú hamburguesa (móvil) ─────────────────────────── */
  const toggle = document.getElementById('navToggle');
  const nav    = document.getElementById('navMenu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('nav--open');
      const icon   = toggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars',  !isOpen);
        icon.classList.toggle('fa-xmark',  isOpen);
      }
      toggle.setAttribute('aria-expanded', isOpen);
    });

    /* Cierra el menú si se hace clic en un enlace de navegación */
    nav.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('nav--open');
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Año dinámico en el footer ────────────────────────── */
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});