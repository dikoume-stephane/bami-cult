# 04 — JavaScript — Interactivité

## Vue d'ensemble

Le JavaScript du site est en **vanilla ES6+** (pas de framework). Chaque fichier gère une fonctionnalité indépendante.

```
main.js             → Navigation + scroll reveal (globale)
theme-toggle.js     → Changement de thème sombre/clair
nav-mobile.js       → Menu burger mobile
animations.js       → Effets de scroll enrichis
smooth-scroll.js    → Navigation fluide + back to top
lightbox.js         → Visionneuse d'images plein écran
cursor.js           → Curseur personnalisé
scroll-progress.js  → Barre de progression du scroll
components/
  audio-player.js   → Lecteur audio Tam-Tam
```

---

## 1. `main.js` — Script principal

### L'initialisation globale

```javascript
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
});
```

**`DOMContentLoaded`** = l'événement qui se déclenche quand le HTML est entièrement chargé (mais pas nécessairement les images). C'est le moment idéal pour lancer le JS.

### La navigation au scroll

```javascript
function initNav() {
  const nav = document.querySelector('.nav');
  const onScroll = () => {
    nav.classList.toggle('is-scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}
```

**Comment ça marche :**
1. On attend l'événement `scroll` sur la fenêtre
2. Si on a scrolled plus de 50px, on ajoute `is-scrolled` à la nav
3. Sinon, on l'enlève
4. `{ passive: true }` = on dit au navigateur qu'on ne fera pas `preventDefault()` (plus performant)

**L'effet visuel :** La nav passe de transparente à un fond sombre avec un blur.

### Le Scroll Reveal

```javascript
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  reveals.forEach((el) => observer.observe(el));
}
```

**`IntersectionObserver`** = une API du navigateur qui détecte quand un élément entre/sort de l'écran.

**Comment ça marche :**
1. On observe tous les éléments avec la classe `.reveal`
2. Quand un élément devient visible (10% minimum), on ajoute `is-visible`
3. `observer.unobserve()` = on arrête d'observer cet élément (il ne disparaîtra plus)

**`{ threshold: 0.1 }`** = se déclenche quand 10% de l'élément est visible.

---

## 2. `theme-toggle.js` — Bascule thème

### La structure

```javascript
const ThemeToggle = {
  STORAGE_KEY: 'bamileke-theme',
  DARK: 'dark',
  LIGHT: 'light',

  init() {
    this.toggle = document.querySelector('.theme-toggle');
    this.loadSaved();
    this.toggle.addEventListener('click', () => this.switch());
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
  }
};
```

**`localStorage`** = un stockage local du navigateur qui persiste même après fermeture.

**Comment ça marche :**
1. Au chargement, on lit la préférence sauvegardée
2. Si aucune préférence, on utilise le thème sombre par défaut
3. Au clic, on inverse le thème
4. On sauvegarde dans `localStorage`
5. Le CSS lit `data-theme` sur `<html>` pour appliquer les bonnes couleurs

---

## 3. `nav-mobile.js` — Menu burger

### La structure

```javascript
const NavMobile = {
  init() {
    this.burger = document.querySelector('.nav__burger');
    this.nav = document.querySelector('.nav');
    this.panel = document.querySelector('.nav__panel');
    this.overlay = document.querySelector('.nav__overlay');
    this.links = document.querySelectorAll('.nav__panel-link');

    this.burger.addEventListener('click', () => this.toggle());
    this.overlay.addEventListener('click', () => this.close());
    this.links.forEach((link) => link.addEventListener('click', () => this.close()));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.close();
    });
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
```

**Les fonctionnalités :**
1. **Ouverture/fermeture** au clic sur le burger
2. **Fermeture** au clic sur l'overlay sombre
3. **Fermeture** au clic sur un lien de navigation
4. **Fermeture** avec la touche Escape
5. **`body.style.overflow = 'hidden'`** = bloque le scroll du body quand le menu est ouvert
6. **`aria-expanded`** = met à jour l'état pour les lecteurs d'écran

---

## 4. `animations.js` — Animations enrichies

### La vérification de prefers-reduced-motion

```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
```

**C'est quoi ?** Si l'utilisateur a activé "réduire les animations" dans les paramètres de son OS, on ne lance aucune animation.

### Le parallax sur le hero

```javascript
function initParallax() {
  const heroBg = document.querySelector('.hero__bg');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
  }, { passive: true });
}
```

**Qu'est-ce que le parallax ?** L'image de fond bouge plus lentement que le contenu, créant un effet de profondeur.

**`scrolled * 0.3`** = l'image bouge à 30% de la vitesse du scroll.

### Le reveal latéral

```javascript
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  elements.forEach((el) => observer.observe(el));
}
```

**Les 4 types de reveal :**
- `.reveal` — Apparaît en montant (translateY)
- `.reveal-left` — Apparaît depuis la gauche (translateX)
- `.reveal-right` — Apparaît depuis la droite (translateX)
- `.reveal-scale` — Apparaît en grossissant (scale)

### Le stagger (délai progressif)

```javascript
function initStaggeredReveal() {
  const groups = document.querySelectorAll('[data-stagger]');
  groups.forEach((group) => {
    const items = group.children;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          Array.from(items).forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('is-visible');
            }, i * 150);  // 150ms de délai entre chaque élément
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    observer.observe(group);
  });
}
```

**C'est quoi le stagger ?** Les éléments apparaissent un par un avec un délai, comme un cascade.

**`i * 150`** = le premier élément à 0ms, le deuxième à 150ms, le troisième à 300ms, etc.

### Le scale-up des images

```javascript
function initScaleUpImages() {
  const images = document.querySelectorAll('.section-narrative__content > img');
  images.forEach((img) => {
    img.classList.add('reveal-scale');
    observer.observe(img);
  });
}
```

Les images de contenu apparaissent en grossissant légèrement (de 95% à 100%) quand on les atteint en scrollant.

---

## 5. `smooth-scroll.js` — Navigation fluide

### Smooth scroll sur ancres

```javascript
initAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const id = link.getAttribute('href');
      const target = document.querySelector(id);
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
```

**`a[href^="#"]`** = sélecteur CSS qui cible tous les liens commençant par `#`.

**`scrollIntoView({ behavior: 'smooth' })`** = fait défiler la page jusqu'à l'élément avec une animation fluide.

### Le bouton back-to-top

```javascript
initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 300);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
```

Le bouton apparaît après 300px de scroll et remonte en haut au clic.

---

## 6. `lightbox.js` — Visionneuse d'images

### L'ouverture

```javascript
open(index) {
  this.currentIndex = index;
  this.update();
  this.lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

update() {
  const el = this.images[this.currentIndex];
  const src = el.tagName === 'IMG' ? el.src : el.dataset.src;
  this.img.src = src;
  this.img.alt = el.alt;
  this.caption.textContent = el.alt;
}
```

### La navigation

```javascript
prev() {
  this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  this.update();
}

next() {
  this.currentIndex = (this.currentIndex + 1) % this.images.length;
  this.update();
}
```

**L'astuce `%` (modulo) :** Quand on dépasse la dernière image, on revient à la première, et inversement.

### Le swipe tactile

```javascript
this.lightbox.addEventListener('touchstart', (e) => {
  this.touchStartX = e.touches[0].clientX;
}, { passive: true });

this.lightbox.addEventListener('touchend', (e) => {
  const diff = this.touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) {
    diff > 0 ? this.next() : this.prev();
  }
});
```

**Comment ça marche :**
1. On enregistre la position de départ du doigt
2. Quand le doigt se lève, on calcule la distance
3. Si > 50px, on navigue (gauche = suivant, droite = précédent)

---

## 7. `cursor.js` — Curseur personnalisé

### La détection tactile

```javascript
if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
```

**Pourquoi ?** Sur mobile/tablette, il n'y a pas de souris. Le curseur custom serait inutile et gênant.

### La création

```javascript
this.cursor = document.createElement('div');
this.cursor.className = 'custom-cursor';
document.body.appendChild(this.cursor);

this.dot = document.createElement('div');
this.dot.className = 'custom-cursor__dot';
document.body.appendChild(this.dot);
```

**Deux éléments :**
1. Le curseur principal (cercle doré, 32px)
2. Le point central (6px)

### Le suivi de la souris

```javascript
move(e) {
  this.cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  this.dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
}
```

**`clientX`/`clientY`** = les coordonnées de la souris par rapport à la fenêtre.

### L'effet hover

```javascript
this.links.forEach((el) => {
  el.addEventListener('mouseenter', () => this.cursor.classList.add('is-hover'));
  el.addEventListener('mouseleave', () => this.cursor.classList.remove('is-hover'));
});
```

Quand la souris passe sur un lien/bouton, le curseur grossit et change de couleur.

---

## 8. `scroll-progress.js` — Barre de progression

```javascript
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  fill.style.width = pct + '%';
}, { passive: true });
```

**Le calcul :**
- `scrollHeight` = hauteur totale de la page
- `innerHeight` = hauteur visible de la fenêtre
- `scrollHeight - innerHeight` = hauteur maximale qu'on peut scroller
- `scrollTop / (scrollHeight - innerHeight) * 100` = pourcentage

---

## 9. `audio-player.js` — Lecteur audio

### La classe

```javascript
class AudioPlayer {
  constructor(container) {
    this.container = container;
    this.audio = null;
    this.isPlaying = false;
    this.init();
  }

  init() {
    const src = this.container.dataset.src;
    this.audio = new Audio(src);
    this.audio.preload = 'metadata';
    // ...
  }
}
```

**`new Audio(src)`** = crée un élément audio HTML5 en JS.

**`preload: 'metadata'`** = ne charge que les métadonnées (durée), pas tout le fichier audio.

### La barre de progression

```javascript
updateProgress() {
  const pct = (this.audio.currentTime / this.audio.duration) * 100 || 0;
  this.progressFill.style.width = pct + '%';
  this.time.textContent = this.formatTime(this.audio.currentTime);
}
```

**`timeupdate`** = événement déclenché environ 4 fois par secondes pendant la lecture.

### Le seek (avancer/reculer)

```javascript
seek(e) {
  const rect = this.progress.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  this.audio.currentTime = pct * this.audio.duration;
}
```

**`getBoundingClientRect()`** = donne la position et taille d'un élément sur l'écran.

---

## Résumé des APIs JavaScript utilisées

| API | Utilisation |
|-----|-------------|
| `IntersectionObserver` | Détecter quand un élément entre dans l'écran |
| `localStorage` | Sauvegarder la préférence de thème |
| `matchMedia` | Vérifier `prefers-reduced-motion` |
| `Audio` | Jouer des fichiers audio |
| `getBoundingClientRect` | Calculer les positions pour le seek |
| `touchstart`/`touchend` | Détecter les gestes tactiles |
| `keydown` | Réagir aux touches (Escape) |
| `createElement` | Créer le curseur personnalisé |
