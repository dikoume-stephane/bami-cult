// ===========================
// AUDIO PLAYER — Tam-Tam & Chants
// Site Bamiléké — Culture & Traditions
// ===========================

class AudioPlayer {
  constructor(container) {
    this.container = container;
    this.audio = null;
    this.isPlaying = false;
    this.init();
  }

  init() {
    const src = this.container.dataset.src;
    if (!src) return;

    this.audio = new Audio(src);
    this.audio.preload = 'metadata';

    this.btn = this.container.querySelector('.audio-player__btn');
    this.progress = this.container.querySelector('.audio-player__progress');
    this.progressFill = this.container.querySelector('.audio-player__fill');
    this.time = this.container.querySelector('.audio-player__time');

    if (this.btn) {
      this.btn.addEventListener('click', () => this.toggle());
    }

    this.audio.addEventListener('timeupdate', () => this.updateProgress());
    this.audio.addEventListener('loadedmetadata', () => this.updateProgress());
    this.audio.addEventListener('ended', () => this.onEnd());

    if (this.progress) {
      this.progress.addEventListener('click', (e) => this.seek(e));
    }
  }

  toggle() {
    if (!this.audio) return;

    if (this.isPlaying) {
      this.audio.pause();
      this.container.classList.remove('is-playing');
    } else {
      this.audio.play();
      this.container.classList.add('is-playing');
    }

    this.isPlaying = !this.isPlaying;
  }

  updateProgress() {
    if (!this.audio || !this.progressFill) return;
    const pct = (this.audio.currentTime / this.audio.duration) * 100 || 0;
    this.progressFill.style.width = pct + '%';

    if (this.time) {
      this.time.textContent = this.formatTime(this.audio.currentTime);
    }
  }

  seek(e) {
    if (!this.audio) return;
    const rect = this.progress.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    this.audio.currentTime = pct * this.audio.duration;
  }

  onEnd() {
    this.isPlaying = false;
    this.container.classList.remove('is-playing');
  }

  formatTime(s) {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ':' + (sec < 10 ? '0' : '') + sec;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-audio-player]').forEach((el) => {
    new AudioPlayer(el);
  });
});
