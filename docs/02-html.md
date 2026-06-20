# 02 — HTML — Structure des Pages

## Les 4 pages du site

| Page | Fichier | Contenu |
|------|---------|---------|
| Accueil | `index.html` | Présentation du peuple Bamiléké, géographie, aperçu des thèmes |
| Chefferies | `chefferies.html` | Architecture traditionnelle, toits coniques, layout de village |
| Pouvoir | `pouvoir.html` | Le Fo (roi), le Kwifon, les Reines Mères, les Notables |
| Art & Matière | `art-matiere.html` | Le Ndop, les sculptures, le Tam-Tam, audio player |

---

## Structure type d'une page

Chaque page suit le même modèle :

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <!-- Encodage & responsive -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- SEO -->
  <title>Titre de la page</title>
  <meta name="description" content="Description pour Google...">
  
  <!-- Open Graph (réseaux sociaux) -->
  <meta property="og:title" content="...">
  
  <!-- Polices Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=..." rel="stylesheet">
  
  <!-- CSS (dans l'ordre) -->
  <link rel="stylesheet" href="css/variables.css">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/components.css">
  <link rel="stylesheet" href="css/pages.css">
</head>
<body>

  <!-- 1. Barre de progression scroll -->
  <div class="scroll-progress">...</div>

  <!-- 2. Navigation -->
  <nav class="nav">...</nav>

  <!-- 3. Breadcrumb (fil d'Ariane) -->
  <div class="breadcrumb">...</div>

  <!-- 4. Hero (bannière principale) -->
  <section class="hero">...</section>

  <!-- 5. Sections de contenu -->
  <section class="section">...</section>

  <!-- 6. Footer -->
  <footer class="footer">...</footer>

  <!-- 7. Lightbox (visionneuse) -->
  <div class="lightbox">...</div>

  <!-- 8. Bouton back to top -->
  <button class="back-to-top">...</button>

  <!-- 9. Scripts JS (dans l'ordre) -->
  <script src="js/theme-toggle.js"></script>
  <script src="js/nav-mobile.js"></script>
  <!-- etc. -->
</body>
</html>
```

---

## Les balises sémantiques

Le HTML5 utilise des balises qui décrivent leur contenu. C'est comme étiqueter clairement chaque boîte.

### `<nav>` — La navigation
```html
<nav class="nav">
  <div class="container nav__inner">
    <a href="index.html" class="nav__logo">Bamiléké</a>
    <div class="nav__links">
      <a href="index.html" class="nav__link is-active">Accueil</a>
      <a href="chefferies.html" class="nav__link">Chefferies</a>
    </div>
  </div>
</nav>
```

**Explication :**
- `<nav>` dit au navigateur "c'est une navigation"
- Les classes CSS (`.nav`, `.nav__link`) suivent la méthodologie **BEM** (Block Element Modifier)
- `is-active` marque la page en cours

### `<section>` — Les sections
```html
<section class="section section--alt">
  <div class="container">
    <!-- Contenu de la section -->
  </div>
</section>
```

**Explication :**
- `<section>` délimite une partie thématique de la page
- `section--alt` ajoute un fond alterné (bleu Ndop en sombre, ocre en clair)
- `.container` centre le contenu (max-width: 1200px)

### `<article>` — Un contenu autonome
Utilisé pour les cartes et les éléments qui peuvent exister indépendamment.

### `<header>`, `<footer>` — En-tête et pied de page
Le `<footer>` contient les liens de navigation et le copyright.

---

## Les images

### Image hero (fond de section)
```html
<img 
  src="assets/images/hero/hero-home.jpg" 
  alt="Peuple Bamiléké" 
  class="hero__bg" 
  loading="eager" 
  fetchpriority="high"
>
```

**Les attributs :**
- `alt` : Texte alternatif pour les malvoyants et le SEO
- `loading="eager"` : Charger immédiatement (pour le hero)
- `fetchpriority="high"` : Priorité haute (le navigateur le charge en premier)

### Image de contenu
```html
<img 
  src="assets/images/culture/culture-textile.jpg" 
  alt="Tissu Ndop" 
  class="img-placeholder img-placeholder--landscape" 
  loading="lazy" 
  data-lightbox
>
```

**Les attributs :**
- `loading="lazy"` : Charger quand l'image arrive à l'écran (économie de bande passante)
- `data-lightbox` : Active la visionneuse plein écran au clic
- `img-placeholder--landscape` : Ratio 16:9, `--portrait` = 3:4, `--square` = 1:1

---

## Le menu mobile (burger)

```html
<button class="nav__burger" aria-label="Menu" aria-expanded="false">
  <span></span>
  <span></span>
  <span></span>
</button>
<div class="nav__overlay"></div>
<div class="nav__panel">
  <a href="index.html" class="nav__panel-link">Accueil</a>
  <!-- etc. -->
</div>
```

**Comment ça marche :**
1. Le bouton burger a 3 `<span>` qui forment les 3 barres
2. Quand on clique, JS ajoute `is-open` sur `<nav>`
3. Le CSS transforme les barres en croix (X) avec des rotations
4. Le panel glisse depuis la droite (`transform: translateX`)
5. L'overlay sombre apparaît par-dessus le contenu

---

## Le lightbox (visionneuse d'images)

```html
<div class="lightbox" role="dialog" aria-label="Visionneuse d'image">
  <div class="lightbox__overlay"></div>
  <div class="lightbox__content">
    <button class="lightbox__close" aria-label="Fermer">X</button>
    <button class="lightbox__prev" aria-label="Image précédente"><</button>
    <img class="lightbox__img" src="" alt="">
    <p class="lightbox__caption"></p>
    <button class="lightbox__next" aria-label="Image suivante">></button>
  </div>
</div>
```

**Comment ça marche :**
1. Caché par défaut (`opacity: 0`, `visibility: hidden`)
2. Au clic sur une image `data-lightbox`, le JS :
   - Récupère le `src` de l'image cliquée
   - L'affiche dans le lightbox
   - Ajoute `is-open` pour l'afficher
3. Navigation avec flèches, Escape, ou swipe tactile

---

## L'audio player

```html
<div class="audio-player" data-audio-player data-src="assets/audio/tam-tam.mp3">
  <button class="audio-player__btn" aria-label="Écouter">
    <svg class="icon-play">▶</svg>
    <svg class="icon-pause">⏸</svg>
  </button>
  <div class="audio-player__controls">
    <div class="audio-player__progress">
      <div class="audio-player__fill"></div>
    </div>
    <div class="audio-player__bottom">
      <span class="audio-player__label">Tam-Tam</span>
      <span class="audio-player__time">0:00</span>
    </div>
  </div>
</div>
```

**Comment ça marche :**
1. Le JS lit l'attribut `data-src` pour charger l'audio
2. Au clic sur le bouton, il joue/pause l'audio
3. La barre de progression se remplit avec `timeupdate`
4. On peut cliquer sur la barre pour avancer dans le morceau

---

## La navbar — Indicateur de page active

Chaque lien de navigation a une classe `is-active` sur la page correspondante :

```html
<!-- Dans index.html -->
<a href="index.html" class="nav__link is-active">Accueil</a>
<a href="chefferies.html" class="nav__link">Chefferies</a>

<!-- Dans chefferies.html -->
<a href="index.html" class="nav__link">Accueil</a>
<a href="chefferies.html" class="nav__link is-active">Chefferies</a>
```

Le CSS ajoute un soulignement doré sous le lien actif :
```css
.nav__link.is-active::after {
  width: 100%;
  background-color: var(--accent-gold);
}
```
