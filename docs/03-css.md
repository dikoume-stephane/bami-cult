# 03 — CSS — Design & Thèmes

## Vue d'ensemble

Le CSS du site est réparti en 4 fichiers avec des rôles distincts :

```
variables.css → Les valeurs (couleurs, tailles, polices)
style.css     → Les règles globales (reset, container, typographie)
components.css → Les composants (nav, footer, boutons, lightbox...)
pages.css     → Les styles propres à chaque page
```

---

## 1. `variables.css` — Les Design Tokens

### C'est quoi une variable CSS ?

Une variable CSS est un nom qui stocke une valeur. On la définit une fois et on l'utilise partout.

```css
:root {
  --accent-red: #A63A2B;
}

.btn {
  background-color: var(--accent-red);  /* Utilise la variable */
}
```

**Avantage :** Pour changer la couleur rouge, on modifie UNE ligne et tout le site change.

### La palette de couleurs

#### Thème Sombre (par défaut)

| Variable | Couleur | Signification |
|----------|---------|---------------|
| `--bg-primary` | `#0D0D0D` | Noir organique (pas le noir pur #000) |
| `--bg-secondary` | `#1A2844` | Bleu Ndop (indigo traditionnel) |
| `--bg-tertiary` | `#121212` | Gris très sombre |
| `--accent-red` | `#A63A2B` | Rouge latérite (terre rouge) |
| `--accent-red-hover` | `#7E2217` | Rouge plus foncé (survol) |
| `--accent-gold` | `#C5A059` | Bronze/or des sculptures |
| `--text-primary` | `#F5F5F0` | Blanc ivoire (titres) |
| `--text-body` | `#CCCCCC` | Gris clair (texte) |
| `--text-muted` | `#888888` | Gris moyen (notes) |

#### Thème Clair (optionnel)

| Variable | Couleur | Signification |
|----------|---------|---------------|
| `--bg-primary` | `#F9F8F6` | Blanc argileux |
| `--bg-secondary` | `#F0EAE1` | Ocre jaune (paille séchée) |
| `--accent-red` | `#7E2217` | Rouge profond (terre cuite) |
| `--accent-gold` | `#8A6F3E` | Bronze patiné |
| `--text-primary` | `#1A1A1A` | Noir organique |

### La typographie

```css
--font-title: 'Playfair Display', Georgia, serif;
--font-body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Playfair Display** — Police serif avec de forts contrastes (fins/épais). Style éditorial haute couture. Utilisée pour les titres H1, H2, H3.

**Inter** — Police sans-serif géométrique, très lisible. Utilisée pour le texte, les labels, la navigation.

### L'échelle responsive avec `clamp()`

```css
--fs-hero: clamp(3rem, 8vw, 7rem);
```

**Qu'est-ce que `clamp()` ?** C'est une fonction CSS qui calcule une valeur entre un minimum et un maximum.

- `3rem` = taille minimale (48px)
- `8vw` = 8% de la largeur de l'écran (la valeur "idéale")
- `7rem` = taille maximale (112px)

**Résultat :** Le titre s'agrandit et rétrécit avec l'écran, sans avoir besoin de media queries.

### Les transitions

```css
--transition-fast: 0.2s ease;    /* Éléments réactifs */
--transition-base: 0.4s ease;    /* Transitions normales */
--transition-slow: 0.6s ease;    /* Animations lentes */
```

**`ease`** = ralentit au début et à la fin (naturel). D'autres options : `linear` (constant), `ease-in` (accélère), `ease-out` (ralentit).

---

## 2. `style.css` — Les Styles Globaux

### Le Reset CSS

```css
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

**Pourquoi ?** Chaque navigateur a des styles par défaut différents. Le reset les met tous à zéro pour partir sur des bases égales.

**`box-sizing: border-box`** signifie que la largeur d'un élément inclut le padding et la bordure (plus intuitif).

### Le Container

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1rem, 4vw, 3rem);
}
```

**Rôle :** Centre le contenu et ajoute des marges latérales responsive.

### Le Grain/Noise Overlay

```css
body::after {
  content: '';
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  opacity: 0.035;
  background-image: url("data:image/svg+xml,...");
}
```

**C'est quoi ?** Un filtre SVG de bruit fractal appliqué sur toute la page. Il donne un effet "grain de film" très subtil.

**`pointer-events: none`** = l'overlay est invisible aux clics (on peut cliquer à travers).

**`inset: 0`** = raccourci pour `top: 0; right: 0; bottom: 0; left: 0;`

---

## 3. `components.css` — Les Composants

### La Navigation (nav)

```css
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
```

**`position: fixed`** = la nav reste collée en haut quand on scrolle.

**`z-index: 100`** = la nav est toujours au-dessus des autres éléments.

### L'indicateur de page active

```css
.nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-red);
  transition: width var(--transition-base);
}

.nav__link.is-active::after {
  width: 100%;
  background-color: var(--accent-gold);
}
```

**Comment ça marche :**
1. Un pseudo-élément `::after` crée une barre sous le lien
2. Par défaut, `width: 0` (invisible)
3. Quand `is-active`, `width: 100%` (visible, dorée)
4. La transition anime le changement de largeur

### Le Menu Burger Mobile

```css
.nav__burger span {
  width: 24px;
  height: 2px;
  transition: transform var(--transition-base);
}

.nav.is-open .nav__burger span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
```

**Le passage en croix (X) :**
1. Les 3 barres sont au centre
2. Quand `is-open`, la barre du haut descend et tourne 45°
3. La barre du milieu disparaît (`opacity: 0`)
4. La barre du bas monte et tourne -45°

### Le Lightbox

```css
.lightbox {
  position: fixed;
  inset: 0;
  z-index: 9000;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-base);
}

.lightbox.is-open {
  opacity: 1;
  visibility: visible;
}
```

**Pourquoi `visibility: hidden` et pas `display: none` ?**
- `display: none` empêche les transitions
- `visibility: hidden` permet l'animation d'opacité

### Le Curseur Personnalisé

```css
.custom-cursor {
  position: fixed;
  width: 32px;
  height: 32px;
  border: 1.5px solid var(--accent-gold);
  border-radius: 50%;
  mix-blend-mode: difference;
}
```

**`mix-blend-mode: difference`** = le curseur inverse les couleurs en dessous. Sur fond noir, il devient blanc. Sur fond blanc, il devient noir.

**Désactivation mobile :**
```css
@media (pointer: coarse) {
  .custom-cursor { display: none !important; }
}
```

`pointer: coarse` détecte les écrans tactiles (pas de souris).

---

## 4. `pages.css` — Styles par Page

### Le layout asymétrique

```css
.section-narrative__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-lg);
  align-items: center;
}
```

**`1fr 1fr`** = deux colonnes égales. `1fr` signifie "une fraction de l'espace disponible".

### L'inversion (reversed)

```css
.section-narrative__content.reversed {
  direction: rtl;
}
.section-narrative__content.reversed > * {
  direction: ltr;
}
```

**Comment ça marche ?**
1. `direction: rtl` inverse l'ordre des colonnes (droite à gauche)
2. `> * direction: ltr` remet le contenu à l'ordre normal (sinon le texte serait inversé)

### Les grilles numérotées (Pouvoir)

```css
.pouvoir__pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

**`repeat(3, 1fr)`** = 3 colonnes égales. Raccourci pour écrire `1fr 1fr 1fr`.

---

## 5. Media Queries — Le Responsive

### Le principe

```css
@media (max-width: 768px) {
  /* Styles pour mobile */
}
```

**`768px`** = la taille d'une tablette en portrait. En dessous, on passe en mode mobile.

### Ce qui change en mobile

```css
@media (max-width: 768px) {
  .nav__links { display: none; }     /* Cache les liens desktop */
  .nav__burger { display: flex; }     /* Affiche le burger */
  .grid--2, .grid--3 { grid-template-columns: 1fr; }  /* 1 seule colonne */
}
```

### `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
  body::after { display: none; }  /* Désactive le grain */
}
```

**C'est quoi ?** Un paramètre du système d'exploitation. Si l'utilisateur a activé "réduire les animations" (pour des raisons de santé), le site désactive toutes les animations.

---

## 6. Techniques CSS avancées utilisées

### Les BEM Classes

**BEM** = Block Element Modifier. C'est une méthode pour nommer les classes CSS.

```
.nav                    ← Block (le composant)
.nav__link              ← Element (un élément du composant)
.nav__link.is-active    ← Modifier (une variation)
```

**Règles :**
- Block : `.nav`, `.card`, `.hero`
- Element : `__` (deux underscores) → `.nav__link`
- Modifier : `--` (deux tirets) ou `.is-` → `.section--alt`, `.is-open`

### Les pseudo-éléments

```css
.nav__link::after { }    /* Élément créé après le contenu */
body::before { }         /* Élément créé avant le contenu */
```

**Utilisation :** Créer des décorations (barres, points, overlays) sans ajouter de HTML.

### Les flexbox et grid

**Flexbox** (1 dimension) :
```css
.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

**Grid** (2 dimensions)：
```css
.section-narrative__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
```

**Différence :** Flexbox pour aligner en ligne ou en colonne. Grid pour créer des grilles complexes.
