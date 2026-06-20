// ===========================
// CURSOR PERSONNALISÉ
// Site Bamiléké — Culture & Traditions
// ===========================

const CustomCursor = {
  init() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

    this.cursor = document.createElement('div');
    this.cursor.className = 'custom-cursor';
    document.body.appendChild(this.cursor);

    this.dot = document.createElement('div');
    this.dot.className = 'custom-cursor__dot';
    document.body.appendChild(this.dot);

    this.links = document.querySelectorAll('a, button, [data-lightbox], .audio-player__btn, .theme-toggle');

    document.addEventListener('mousemove', (e) => this.move(e));
    this.links.forEach((el) => {
      el.addEventListener('mouseenter', () => this.cursor.classList.add('is-hover'));
      el.addEventListener('mouseleave', () => this.cursor.classList.remove('is-hover'));
    });
  },

  move(e) {
    this.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    this.dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  },
};

document.addEventListener('DOMContentLoaded', () => CustomCursor.init());
