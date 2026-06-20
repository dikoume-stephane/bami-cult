# 07 — Responsive Design

## Vue d'ensemble

Le **responsive design** signifie que le site s'adapte à toutes les tailles d'écran : mobile, tablette, desktop.

---

## La philosophie "Mobile First"

Le site est développé en commençant par le mobile, puis en ajoutant des styles pour les grands écrans.

**Pourquoi ?**
- Plus de gens naviguent sur mobile que sur desktop
- C'est plus facile d'ajouter de la complexité que d'en enlever
- Les performances sont meilleures sur mobile

---

## Les breakpoints (points de rupture)

Un **breakpoint** est une taille d'écran où le design change.

```css
/* Par défaut : Mobile */
.nav__links { display: none; }

/* À partir de 768px : Desktop */
@media (min-width: 768px) {
  .nav__links { display: flex; }
}
```

### Les breakpoints du site

| Breakpoint | Taille | Appareil |
|------------|--------|----------|
| Par défaut | 0 - 767px | Mobile |
| `768px` | 768px+ | Tablette / Desktop |

**Utilisation :** Le site utilise principalement `max-width: 768px` pour cacher les éléments desktop sur mobile.

---

## Le viewport

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**C'est quoi ?** Cette balise dit au navigateur : "affiche le site à la taille réelle de l'écran, pas à 980px comme avant".

- `width=device-width` = la largeur du site = la largeur de l'écran
- `initial-scale=1.0` = pas de zoom initial

---

## Les techniques responsive utilisées

### 1. `clamp()` pour la typographie

```css
--fs-hero: clamp(3rem, 8vw, 7rem);
--fs-h1: clamp(2.5rem, 6vw, 5rem);
--fs-h2: clamp(2rem, 4vw, 3.5rem);
```

**Comment ça marche ?**
- `3rem` = taille minimale (48px)
- `8vw` = 8% de la largeur de l'écran (la valeur "idéale")
- `7rem` = taille maximale (112px)

**Résultat :** Pas besoin de media queries pour la typographie. Le texte s'adapte automatiquement.

**Exemple concret :**
| Écran | Calcul | Taille |
|-------|--------|--------|
| iPhone SE (375px) | 375 × 8% = 30px | 48px (min) |
| iPad (768px) | 768 × 8% = 61px | 61px |
| Desktop (1440px) | 1440 × 8% = 115px | 112px (max) |

### 2. Le grid responsive

```css
.section-narrative__content {
  display: grid;
  grid-template-columns: 1fr 1fr;  /* 2 colonnes sur desktop */
}

@media (max-width: 768px) {
  .section-narrative__content {
    grid-template-columns: 1fr;  /* 1 seule colonne sur mobile */
  }
}
```

**Sur mobile :** Les colonnes s'empilent verticalement.

### 3. Le menu burger

```css
.nav__links {
  display: flex;  /* Visible sur desktop */
}

.nav__burger {
  display: none;  /* Caché sur desktop */
}

@media (max-width: 768px) {
  .nav__links { display: none; }    /* Caché sur mobile */
  .nav__burger { display: flex; }   /* Visible sur mobile */
}
```

### 4. Le padding responsive

```css
.container {
  padding: 0 clamp(1rem, 4vw, 3rem);
}
```

Les marges latérales s'adaptent à la taille de l'écran.

### 5. Les images fluides

```css
img {
  max-width: 100%;
  height: auto;
}
```

Les images ne débordent jamais de leur conteneur.

---

## Ce qui change entre mobile et desktop

### Navigation

| Élément | Mobile | Desktop |
|---------|--------|---------|
| Liens nav | Cachés | Visibles |
| Burger | Visible | Caché |
| Panel mobile | Glisse depuis la droite | Caché |
| Logo | Taille normale | Taille normale |

### Layout des sections

| Élément | Mobile | Desktop |
|---------|--------|---------|
| Grilles (2 colonnes) | 1 colonne | 2 colonnes |
| Grilles (3 colonnes) | 1 colonne | 3 colonnes |
| Contenu inversé | Ordre normal | Ordre inversé |
| Images | Pleine largeur | Côte à côte avec le texte |

### Typographie

| Élément | Mobile | Desktop |
|---------|--------|---------|
| Hero title | ~48px (min clamp) | ~112px (max clamp) |
| H2 | ~32px (min clamp) | ~56px (max clamp) |
| Corps de texte | 16px | 18px |

### Composants

| Composant | Mobile | Desktop |
|-----------|--------|---------|
| Footer | Colonnes empilées | Colonnes côte à côte |
| Breadcrumb | Visible | Visible |
| Lightbox | Boutons réduits | Boutons normaux |
| Audio player | Pleine largeur | Largeur max 360px |

---

## Le curseur personnalisé

```css
@media (pointer: coarse) {
  .custom-cursor,
  .custom-cursor__dot {
    display: none !important;
  }
}
```

**`pointer: coarse`** détecte les écrans tactiles (pas de souris précise). Le curseur custom est inutile sur mobile.

---

## Le prefers-reduced-motion

```css
@media (prefers-reduced-motion: reduce) {
  .reveal,
  .reveal-left,
  .reveal-right,
  .reveal-scale,
  [data-stagger] > * {
    opacity: 1;
    transform: none;
    transition: none;
  }
  body::after { display: none; }
}
```

Si l'utilisateur a activé "réduire les animations" dans les paramètres de son appareil, le site désactive :
- Toutes les animations de scroll
- L'effet grain/noise
- Le parallax

---

## Tester le responsive

### Outils

1. **Chrome DevTools** — F12 → Mode responsive (icône téléphone)
2. **Firefox Responsive Design Mode** — Ctrl+Shift+M
3. **Outils en ligne** — https://www.responsivebreakpoints.com

### Tailles à tester

| Appareil | Largeur | Hauteur |
|----------|---------|---------|
| iPhone SE | 375px | 667px |
| iPhone 14 | 390px | 844px |
| iPad | 768px | 1024px |
| iPad Pro | 1024px | 1366px |
| Desktop HD | 1440px | 900px |

### Ce qu'il faut vérifier

1. ✅ La navigation fonctionne (burger ouvre/ferme)
2. ✅ Les textes ne débordent pas
3. ✅ Les images s'adaptent
4. ✅ Les grilles s'empilent correctement
5. ✅ Le lightbox fonctionne
6. ✅ Le scroll est fluide
7. ✅ Les boutons sont cliquables (pas trop petits)
8. ✅ Le texte est lisible (pas trop petit)

---

## Bonnes pratiques respectées

1. ✅ **Pas de largeur fixe** — Tout est en `%`, `vw`, `clamp()`
2. ✅ **Images fluides** — `max-width: 100%`
3. ✅ **Grid responsive** — `grid-template-columns` avec media queries
4. ✅ **Typographie adaptative** — `clamp()` au lieu de media queries
5. ✅ **Touch targets** — Les boutons font au moins 44x44px
6. ✅ **Pas de horizontal scroll** — `overflow-x: hidden` si nécessaire
7. ✅ **Testé sur plusieurs tailles** — Mobile, tablette, desktop
