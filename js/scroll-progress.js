// ===========================
// SCROLL PROGRESS BAR
// Site Bamiléké — Culture & Traditions
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  const bar = document.querySelector('.scroll-progress');
  if (!bar) return;

  const fill = bar.querySelector('.scroll-progress__fill');
  if (!fill) return;

  window.addEventListener(
    'scroll',
    () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      fill.style.width = pct + '%';
      bar.setAttribute('aria-valuenow', Math.round(pct));
    },
    { passive: true }
  );
});
