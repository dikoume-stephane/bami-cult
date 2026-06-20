# 01 — Architecture du Projet

## Présentation

Le site **"Bamiléké — La Force d'un Peuple"** est un site web éditorial culturel présentant le peuple Bamiléké de l'Ouest du Cameroun. Il suit une esthétique de **magazine haut de gamme** avec un design sombre et des accents terre/or.

## Technologies utilisées

### HTML5
**C'est quoi ?** Le langage de base pour créer la structure d'une page web. Chaque élément (titre, image, paragraphe) est une balise HTML.

**Pourquoi HTML5 ?** C'est le标准 mondial, simple, léger, et compatible avec tous les navigateurs. Pas besoin de framework lourd.

### CSS3
**C'est quoi ?** Le langage qui donne le style aux pages web : couleurs, tailles, positions, animations.

**Pourquoi CSS3 ?** Le site utilise CSS pur (sans framework comme Tailwind) pour un contrôle total du design et des performances optimales.

### JavaScript ES6+
**C'est quoi ?** Le langage de programmation qui rend les pages web interactives (boutons, animations, thème, etc.).

**Pourquoi ES6+ ?** C'est la version moderne de JavaScript, plus propre et plus lisible. On utilise du vanilla JS (sans bibliothèques comme React).

### Google Fonts
**C'est quoi ?** Un service gratuit de Google qui permet d'utiliser des polices de caractères sur le web.

**Polices utilisées :**
- **Playfair Display** — Police serif élégante pour les titres (style éditorial)
- **Inter** — Police sans-serif moderne pour le texte (très lisible)

### Prettier
**C'est quoi ?** Un outil qui formate automatiquement le code pour qu'il soit propre et uniforme.

**Pourquoi ?** Pour que le code soit facile à lire et à maintenir, avec la même organisation partout.

---

## Architecture des fichiers

### Le principe "Un fichier = Un rôle"

```
css/
├── variables.css    ← Les variables (couleurs, polices, tailles)
├── style.css        ← Les styles globaux (reset, container, typographie)
├── components.css   ← Les composants (nav, footer, boutons, lightbox...)
└── pages.css        ← Les styles spécifiques à chaque page
```

**Pourquoi séparer les fichiers ?**
- Plus facile de trouver ce qu'on cherche
- Plus facile de modifier un élément sans casser les autres
- Le navigateur peut télécharger les fichiers en parallèle (plus rapide)

### JavaScript — Un fichier = Une fonctionnalité

```
js/
├── main.js             ← Navigation + scroll reveal
├── theme-toggle.js     ← Changement de thème
├── nav-mobile.js       ← Menu burger
├── animations.js       ← Effets de scroll
├── smooth-scroll.js    ← Navigation fluide + back to top
├── lightbox.js         ← Visionneuse d'images
├── cursor.js           ← Curseur custom
├── scroll-progress.js  ← Barre de progression
└── components/
    └── audio-player.js ← Lecteur audio
```

**Pourquoi séparer les scripts ?**
- Chaque fonctionnalité est indépendante
- On peut désactiver une fonctionnalité sans casser les autres
- Plus facile de déboguer

---

## Comment le site se charge

Quand un utilisateur ouvre une page, voici ce qui se passe :

```
1. Le navigateur télécharge le HTML
   ↓
2. Il rencontre les <link> et télécharge les CSS
   ↓
3. Il rencontre les <script> et télécharge les JS
   ↓
4. Le JS s'exécute au moment "DOMContentLoaded"
   ↓
5. Le site est prêt et interactif
```

L'ordre des scripts dans le HTML est important :
```html
<script src="js/theme-toggle.js"></script>   <!-- 1er : thème -->
<script src="js/nav-mobile.js"></script>      <!-- 2e : navigation -->
<script src="js/main.js"></script>            <!-- 3e : globale -->
<script src="js/animations.js"></script>      <!-- 4e : animations -->
<script src="js/smooth-scroll.js"></script>   <!-- 5e : scroll -->
<script src="js/lightbox.js"></script>        <!-- 6e : lightbox -->
<script src="js/cursor.js"></script>          <!-- 7e : curseur -->
<script src="js/scroll-progress.js"></script> <!-- 8e : progression -->
```

---

## Le concept de "Design Tokens"

Les **design tokens** sont des variables CSS qui stockent toutes les valeurs visuelles du site. C'est comme un dictionnaire de styles.

**Exemple :**
```css
:root {
  --accent-red: #A63A2B;  /* Le rouge "terre" */
  --font-title: 'Playfair Display';  /* La police des titres */
}
```

**Avantage :** Si on veut changer la couleur rouge, on change UNE variable et tout le site se met à jour.

---

## Le système de double thème

Le site possède deux thèmes visuels :

1. **Sombre ("Sacré & Royal")** — Par défaut
   - Noir organique (#0D0D0D)
   - Évoque la nuit, les masques, le mystère

2. **Clair ("Hautes Terres & Argile")** — Optionnel
   - Blanc argileux (#F9F8F6)
   - Évoque lesoleil, la terre cuite, la paille

**Comment ça marche ?**
- Les deux thèmes sont définis dans `variables.css`
- Le thème clair utilise `:root[data-theme="light"]`
- Le JS change l'attribut `data-theme` sur `<html>`
- La préférence est sauvegardée dans `localStorage`
