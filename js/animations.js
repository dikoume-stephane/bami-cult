// ===========================
// ANIMATIONS — Scroll Transitions
// Site Bamiléké — Culture & Traditions
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  initParallax();
  initRevealAnimations();
  initStaggeredReveal();
  initScaleUpImages();
});

/* --- Parallax Effect on Hero --- */
function initParallax() {
  const heroBg = document.querySelector('.hero__bg');
  if (!heroBg) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    },
    { passive: true }
  );
}

/* --- Reveal Animations (up, left, right) --- */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* --- Staggered Reveal for Grid Items --- */
function initStaggeredReveal() {
  const groups = document.querySelectorAll('[data-stagger]');

  groups.forEach((group) => {
    const items = group.children;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            Array.from(items).forEach((item, i) => {
              setTimeout(() => {
                item.classList.add('is-visible');
              }, i * 150);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(group);
  });
}

/* --- Scale-Up for Images on Scroll --- */
function initScaleUpImages() {
  const images = document.querySelectorAll('.section-narrative__content > img');
  if (!images.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  images.forEach((img) => {
    img.classList.add('reveal-scale');
    observer.observe(img);
  });
}
