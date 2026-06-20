// ===========================
// LIGHTBOX — Galerie Plein Écran
// Site Bamiléké — Culture & Traditions
// ===========================

const Lightbox = {
  init() {
    this.lightbox = document.querySelector('.lightbox');
    if (!this.lightbox) return;

    this.img = this.lightbox.querySelector('.lightbox__img');
    this.caption = this.lightbox.querySelector('.lightbox__caption');
    this.btnPrev = this.lightbox.querySelector('.lightbox__prev');
    this.btnNext = this.lightbox.querySelector('.lightbox__next');
    this.btnClose = this.lightbox.querySelector('.lightbox__close');
    this.overlay = this.lightbox.querySelector('.lightbox__overlay');

    this.images = Array.from(document.querySelectorAll('[data-lightbox]'));
    this.currentIndex = 0;
    this.touchStartX = 0;

    this.images.forEach((el, i) => {
      el.addEventListener('click', () => this.open(i));
      el.style.cursor = 'pointer';
    });

    this.btnClose?.addEventListener('click', () => this.close());
    this.overlay?.addEventListener('click', () => this.close());
    this.btnPrev?.addEventListener('click', () => this.prev());
    this.btnNext?.addEventListener('click', () => this.next());

    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('is-open')) return;
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });

    this.lightbox.addEventListener('touchstart', (e) => {
      this.touchStartX = e.touches[0].clientX;
    }, { passive: true });

    this.lightbox.addEventListener('touchend', (e) => {
      const diff = this.touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    });
  },

  open(index) {
    this.currentIndex = index;
    this.update();
    this.lightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  },

  close() {
    this.lightbox.classList.remove('is-open');
    document.body.style.overflow = '';
  },

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.update();
  },

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.update();
  },

  update() {
    const el = this.images[this.currentIndex];
    const src = el.tagName === 'IMG' ? el.src : el.dataset.src;
    const alt = el.alt || '';
    if (this.img) {
      this.img.src = src;
      this.img.alt = alt;
    }
    if (this.caption) this.caption.textContent = alt;
  },
};

document.addEventListener('DOMContentLoaded', () => Lightbox.init());
