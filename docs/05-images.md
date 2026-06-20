# 05 — Images & Assets

## Vue d'ensemble

Le site utilise des images organisées par rôle et par taille. Chaque image a une signification culturelle précise.

```
assets/
├── images/
│   ├── hero/        ← Images grand format (fond de section)
│   ├── culture/     ← Photos culturelles (contenu)
│   └── icons/       ← Favicon et icônes
├── audio/           ← Fichiers son (à créer)
└── fonts/           ← Polices locales (vide, utilise Google Fonts)
```

---

## Les Images Hero (Grand Format)

Ce sont les images qui remplissent tout l'écran en arrière-plan des sections principales. Elles créent l'ambiance visuelle du site.

| Fichier | Taille | Page | Symbolique |
|---------|--------|------|------------|
| `hero-home.jpg` | 392 KB | `index.html` | Le peuple Bamiléké dans sa globalité — force communautaire |
| `hero-chefferies.jpg` | 925 KB | `chefferies.html` | Les toits coniques, l'architecture monumentale |
| `hero-pouvoir.jpg` | 925 KB | `pouvoir.html` | La royauté, le Fo (roi), l'autorité ancestrale |
| `hero-art.jpg` | 198 KB | `art-matiere.html` | Les masques, sculptures, dimension spirituelle |

### Comment elles sont utilisées

```html
<section class="hero">
  <img src="assets/images/hero/hero-home.jpg" class="hero__bg" loading="eager" fetchpriority="high">
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <h1 class="hero__title">Le Peuple Bamiléké</h1>
  </div>
</section>
```

**Technique :**
1. L'image est en `position: absolute` pour remplir la section
2. Un dégradé `hero__overlay` assombrit le bas de l'image
3. Le texte est au-dessus avec `position: relative; z-index: 2`
4. `loading="eager"` + `fetchpriority="high"` = chargement prioritaire

---

## Les Images de Contenu

Ce sont les photos illustrant les différentes thématiques culturelles.

| Fichier | Taille | Pages | Symbolique |
|---------|--------|-------|------------|
| `culture-village.jpg` | 477 KB | index, chefferies | Paysage des hauts-plateaux, terre rouge, enracinement |
| `culture-carving.jpg` | 198 KB | chefferies (×2) | Porte sculptée et piliers — artisanat architectural |
| `culture-drum.jpg` | 274 KB | chefferies, art-matiere | Tam-Tam et musiciens — transmission orale,沟通 |
| `culture-mask.jpg` | 358 KB | pouvoir | Masque Kwifon — autorité invisible, justice transcendante |
| `culture-textile.jpg` | 274 KB | art-matiere | Tissu Ndop — carte cosmique, identité noble |
| `culture-throne.jpg` | 358 KB | art-matiere | Trône sculpté — puissance royale, panthère, mygale |

### Comment elles sont utilisées

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
- `loading="lazy"` — Chargement différé (l'image ne se charge que quand elle arrive à l'écran)
- `data-lightbox` — Active la visionneuse plein écran au clic
- `img-placeholder--landscape` — Ratio 16:9

### Les ratios d'aspect

| Classe | Ratio | Utilisation |
|--------|-------|-------------|
| `img-placeholder--landscape` | 16:9 | Images paysage, horizontales |
| `img-placeholder--portrait` | 3:4 | Images portrait, verticales (masques, trônes) |
| `img-placeholder--square` | 1:1 | Images carrées (galerie) |

---

## Les Images Réutilisées

Certaines images sont utilisées sur plusieurs pages :

| Image | Pages | Raison |
|-------|-------|--------|
| `culture-village.jpg` | index + chefferies | Paysage pour la géographie + sanctuaire |
| `culture-carving.jpg` | chefferies (×2) | Porte sculptée + piliers en bois |
| `culture-drum.jpg` | chefferies + art-matiere | Place de danse + section Tam-Tam |

---

## Les Fichiers Icônes

| Fichier | Taille | Utilité | Statut |
|---------|--------|---------|--------|
| `favicon.svg` | ~200 B | Favicon principal (lettre B sur fond sombre) | ✅ |
| `favicon-32x32.png` | — | Favicon 32px pour navigateurs | ❌ À générer |
| `favicon-16x16.png` | — | Favicon 16px pour onglets | ❌ À générer |
| `apple-touch-icon.png` | — | Icône 180px pour écran d'accueil iOS | ❌ À générer |

### Le favicon SVG

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="#0D0D0D"/>
  <text x="16" y="23" font-family="Georgia, serif" font-size="20" 
        font-weight="bold" fill="#A63A2B" text-anchor="middle">B</text>
</svg>
```

**Description :** Un carré arrondi sombre avec une lettre "B" rouge (latérite) au centre.

### Générer les PNG

Pour créer les versions PNG à partir du SVG :
1. Ouvrir le SVG dans un navigateur
2. Utiliser un outil comme https://realfavicongenerator.net
3. Ou exporter depuis Figma/Inkscape aux tailles requises

---

## Les Fichiers Audio

| Fichier | Page | Utilité | Statut |
|---------|------|---------|--------|
| `tam-tam.mp3` | art-matiere.html | Son de tambour Tam-Tam pour l'audio player | ❌ Manquant |

### Sources recommandées

- Freesound.org (gratuit, creative commons)
- Pixabay Audio (gratuit)
- Enregistrement personnel

---

## Optimisation des images

### Le chargement lazy

```html
<img loading="lazy" ...>
```

**C'est quoi ?** L'image ne se charge que quand elle arrive dans la zone visible de l'écran. Avant ça, le navigateur affiche un espace gris (placeholder).

**Avantage :** La page se charge beaucoup plus vite car on ne télécharge pas toutes les images d'un coup.

### Le fetchpriority

```html
<img fetchpriority="high" ...>
```

**C'est quoi ?** On dit au navigateur que cette image est prioritaire et doit être téléchargée en premier.

**Utilisé sur :** Les images hero uniquement (pas sur les images de contenu).

### L'attribut alt

```html
<img alt="Tissu Ndop" ...>
```

**Pourquoi c'est important ?**
1. **Accessibilité** : Les lecteurs d'écran lisent le texte aux malvoyants
2. **SEO** : Google comprend le contenu de l'image
3. **Fallback** : Si l'image ne charge pas, le texte s'affiche

**Bonnes pratiques :**
- Décrire l'image, pas juste "image"
- Être concis (5-10 mots max)
- Inclure des mots-clés pertinents

---

## Dossier `assets/fonts/`

Actuellement vide. Les polices sont chargées via Google Fonts dans le HTML :

```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
```

**Pourquoi Google Fonts ?**
- Gratuit
- Rapide (CDN mondial)
- Pas besoin de télécharger les fichiers

**Alternative :** Si on voulait des polices locales (plus de contrôle), on les mettrait dans `assets/fonts/` et on les chargerait avec `@font-face`.
