// ===========================
// NAV MOBILE — Menu Burger Slide-In
// Site Bamiléké — Culture & Traditions
// ===========================

const NavMobile = {
  init() {
    this.burger = document.querySelector('.nav__burger');
    this.nav = document.querySelector('.nav');
    this.panel = document.querySelector('.nav__panel');
    this.overlay = document.querySelector('.nav__overlay');
    this.links = document.querySelectorAll('.nav__panel-link');

    if (!this.burger || !this.panel) return;

    this.burger.addEventListener('click', () => this.toggle());
    if (this.overlay) this.overlay.addEventListener('click', () => this.close());
    this.links.forEach((link) => link.addEventListener('click', () => this.close()));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
  },

  toggle() {
    const isOpen = this.nav.classList.contains('is-open');
    isOpen ? this.close() : this.open();
  },

  open() {
    this.nav.classList.add('is-open');
    this.burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.nav.classList.remove('is-open');
    this.burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
};

document.addEventListener('DOMContentLoaded', () => NavMobile.init());
