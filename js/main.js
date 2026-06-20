// ===========================
// MAIN SCRIPT — Global Init
// Site Bamiléké — Culture & Traditions
// ===========================

document.addEventListener('DOMContentLoaded', () => {
  initNav();
});

/* --- Navigation --- */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}
