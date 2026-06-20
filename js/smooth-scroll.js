// ===========================
// SMOOTH SCROLL & BACK TO TOP
// Site Bamiléké — Culture & Traditions
// ===========================

const SmoothScroll = {
  init() {
    this.initAnchorLinks();
    this.initBackToTop();
  },

  initAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const id = link.getAttribute('href');
        if (id === '#') return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  },

  initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener(
      'scroll',
      () => {
        btn.classList.toggle('is-visible', window.scrollY > 300);
      },
      { passive: true }
    );

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
};

document.addEventListener('DOMContentLoaded', () => SmoothScroll.init());
