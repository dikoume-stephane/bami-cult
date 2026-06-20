// ===========================
// THEME TOGGLE — Bascule Sombre / Clair
// Site Bamiléké — Culture & Traditions
// ===========================

const ThemeToggle = {
  STORAGE_KEY: 'bamileke-theme',
  DARK: 'dark',
  LIGHT: 'light',

  init() {
    this.toggles = document.querySelectorAll('.theme-toggle');
    if (!this.toggles.length) return;

    this.loadSaved();
    this.toggles.forEach((btn) => btn.addEventListener('click', () => this.switch()));
  },

  loadSaved() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    const theme = saved || this.DARK;
    this.apply(theme);
  },

  switch() {
    const current = document.documentElement.getAttribute('data-theme') || this.DARK;
    const next = current === this.DARK ? this.LIGHT : this.DARK;
    this.apply(next);
    localStorage.setItem(this.STORAGE_KEY, next);
  },

  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    this.updateIcon(theme);
  },

  updateIcon(theme) {
    const isDark = theme === this.DARK;
    this.toggles.forEach((btn) => {
      btn.setAttribute('aria-label', isDark ? 'Passer au thème clair' : 'Passer au thème sombre');
      btn.classList.toggle('is-light', !isDark);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => ThemeToggle.init());
