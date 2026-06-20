# Project Memory & Skills

## Informations Générales
- **Nom du Projet :** Site Culturel Bamiléké
- **Type :** Site web éditorial haut de gamme

## Active Skills (Compétences)
- **Component-Generator :** Créer des sections asymétriques HTML/CSS.
- **Responsive-Checker :** Ajuster le rendu mobile.

## Active Skills

### Skill: Component-Generator
- **Trigger:** Quand l'utilisateur demande un nouveau composant, une section ou un élément d'interface.
- **Workflow:** 1. Créer un fichier HTML partiel ou injecter la structure dans l'index.
  2. Créer un fichier CSS dédié dans le dossier `/css`.
  3. Créer un script JS dédié dans le dossier `/js` si de l'interactivité est requise.
  4. Vérifier que les liaisons (tags `<link>` et `<script>`) sont correctement injectées.

### Skill: Responsive-Checker
- **Trigger:** Commande manuelle ou après une modification majeure du CSS.
- **Workflow:**
  1. S'assurer que le serveur local est actif.
  2. Utiliser le MCP `playwright` pour capturer le rendu en 375px (Mobile), 768px (Tablette) et 1440px (Desktop).
  3. Inspecter visuellement via le modèle pour détecter les débordements (overflow) ou textes illisibles.
  4. Appliquer les correctifs nécessaires dans les Media Queries du fichier CSS.

### Skill: Deploy-Ready
- **Trigger:** Avant de finaliser une tâche ou à la demande du déploiement.
- **Workflow:**
  1. Exécuter `npx prettier --write .` pour nettoyer le code HTML/CSS/JS.
  2. Lancer une validation des balises et scripts.
  3. Mettre à jour le fichier de progression `tasks/progress.md`.

# Directives de Projet MiMoCode : Site Culturel Bamiléké

Ce fichier définit l'identité visuelle, la structure technique et les règles de conception que MiMoCode doit impérativement respecter pour le développement du site web. 

Toute modification de code (HTML, CSS, JS) doit s'aligner sur les standards esthétiques haut de gamme décrits ci-dessous, inspirés directement du fichier de référence `style-exemple.jpg`.

---

## 🎨 1. Identité Visuelle & Direction Artistique

Le design repose sur une esthétique narrative, immersive, institutionnelle et haut de gamme ("editorial design"). Le site doit ressembler à un magazine ou un documentaire interactif moderne.

### Palette de Couleurs (Extraite de style-exemple.jpg)
L'ambiance générale est sombre ("dark mode" chaleureux et organique), contrastée par des éclats de terre et d'orignalité.
- **Fond Principal (Sombre Organique) :** `#0D0D0D` à `#121212` (Noir très doux, presque terreux, évitant le noir pur `#000000`).
- **Fond de Section Alternatif (Bleu Royal Profond) :** `#1A2844` (Utilisé pour marquer les ruptures narratives, par exemple la section *Le Fo et le Pouvoir* dans `style-exemple.jpg`).
- **Accents Culturels (Terre Rouge / Or) :** 
  - Rouge latérite / ocre : `#7E2217` ou `#A63A2B` (Pour les petits titres, numéros et lignes de séparation discrètes).
  - Or / Bronze subtil : `#D4AF37` (Optionnel, pour de rares éléments de surbrillance).
- **Textes :** 
  - Titres principaux : `#FFFFFF` (Blanc pur ou légèrement cassé).
  - Corps de texte : `#CCCCCC` à `#E0E0E0` (Gris clair pour maximiser la lisibilité sur fond sombre sans agresser l'œil).

### 📐 Typographie & Hiérarchie
L'identité du site repose entièrement sur un contraste fort entre une police de titre serif très élégante et expressive, et une police sans-serif géométrique et moderne pour le texte.

1. **Titres Principaux (H1, H2, H3) :** 
   - **Style :** Serif de style éditorial / Haute Couture. Lettres étirées, contrastes de lignes fins/épais très marqués (Style "Didone" ou "Display Serif").
   - **Polices recommandées (Google Fonts) :** `Playfair Display`, `Cormorant Garamond` ou `Cinzel`.
   - **Règles CSS :** `font-weight: 400` ou `500`; `letter-spacing: -0.02em`; `line-height: 1.1`.

2. **Corps de Texte & Navigation :**
   - **Style :** Sans-serif géométrique, minimaliste, très lisible, aéré.
   - **Polices recommandées (Google Fonts) :** `Inter`, `Plus Jakarta Sans` ou `Montserrat`.
   - **Règles CSS :** `font-weight: 300` ou `400`; `line-height: 1.6`; `letter-spacing: 0.03em`.

3. **Petits Sur-titres ou Éléments Techniques (ex: "01 / TRADITION") :**
   - **Style :** Sans-serif, entièrement en majuscules (uppercase), couleur accentuée (Terre Rouge).
   - **Règles CSS :** `font-size: 0.75rem`; `letter-spacing: 0.15em`; `color: #A63A2B`.

---

## 🧱 2. Structure des Pages & Layout (Layout Rules)

En suivant l'agencement vertical asymétrique de `style-exemple.jpg`, décline les sections selon cette grille :

1. **Hero Section (L'introduction) :**
   - Grand titre théâtral excentré (ex: *Le Peuple Bamiléké*).
   - Un arrière-plan immersif (image ou vidéo sombre masquée par un dégradé linéaire vers le noir `#0D0D0D`).
   - Un paragraphe d'introduction court, très aéré.

2. **Sections Narratives Alternées (Asymétrie) :**
   - **Blocs de contenu :** Alterne une section avec texte à gauche / espace visuel à droite, puis l'inverse.
   - **Grille de piliers (ex: Les Notables, Le Fo) :** Utilise un système de colonnes (CSS Grid) numérotées proprement (`01`, `02`, `03`) avec le petit numéro en rouge ocre au-dessus d'un titre blanc.
   - **Grands espaces vides (Whitespace) :** Laisse beaucoup de marge (`padding-vertical: 8rem` à `12rem`) entre les sections pour donner un effet luxueux et respirant.

3. **Citations en exergue (Callouts) :**
   - Texte centré ou aligné dans un encadré très minimaliste. Exemple : *"Un vieillard qui meurt est une bibliothèque qui brûle"*. Police Serif, italique ou grand format.

---

## 🤖 3. Instructions d'Exécution pour MiMoCode

Lorsque tu manipules le code de ce site, applique strictement ces règles de développement :

- **Règle 1 (Pas de Framework Lourd) :** Reste sur du HTML5 sémantique, CSS3 pur (ou Tailwind si configuré) et JavaScript moderne (ES6+).
- **Règle 2 (Intégration Typographique) :** Injecte correctement les polices sélectionnées dans le `<head>` via Google Fonts (ex: `Playfair Display` et `Inter`) ou configure-les dans le fichier CSS principal.
- **Règle 3 (Gestion des Images) :** Pour les conteneurs d'images vides (qui attendent les vraies photos culturelles), applique un fond gris très sombre (`#1A1A1A`) avec un effet de ratio fixe (`aspect-ratio: 16/9` ou `3/4`) pour préserver le squelette du design tel qu'on le voit sur `style-exemple.jpg`.
- **Règle 4 (Responsive Obligatoire) :** Sur mobile, réduit la taille disproportionnée des titres Serif (`em` ou `rem` adaptatifs avec `clamp()`) et passe les grilles asymétriques sur une seule colonne centrée.
- **Règle 5 (Micro-interactions) :** Ajoute des transitions fluides (`transition: all 0.4s ease`) sur les liens, les boutons et les apparitions de sections pour accentuer l'effet haut de gamme.

---

## 🛠 Skills Disponibles pour ce Projet
- `Component-Generator` : Pour créer une nouvelle section thématique respectant l'asymétrie.
- `Responsive-Checker` : Pour vérifier que la typographie éditoriale ne déborde pas sur mobile (en utilisant le plugin `playwright`).
- `Deploy-Ready` : Pour formater et valider avant déploiement.

---

## 🗺 4. Roadmap d'Améliorations

### 🔴 Haute Priorité — Fonctionnalités Manquantes
1. **Menu Mobile (Burger)** — Panneau slide-in avec overlay, animations fluides
2. **Lazy Loading Images** — `loading="lazy"` sur images de contenu, `eager` sur hero
3. **Smooth Scroll & Back to Top** — Navigation fluide + bouton retour after 300px scroll

### 🟠 Priorité Moyenne — UX & Interactions
4. **Effet Grain/Noise** — Overlay pseudo-élement avec bruit SVG (opacité ~0.03)
5. **Animations Enrichies** — Stagger cartes, fade-in latéral, scale-up images
6. **Lightbox Galerie** — Plein écran, navigation suivant/précédent, swipe
7. **Audio Player Tam-Tam** — Design minimaliste, section art-matiere.html

### 🟡 Priorité Basse — SEO & Finitions
8. **Open Graph & SEO** — Meta tags OG + Twitter Cards + favicon
9. **Breadcrumb** — Fil d'Ariane minimaliste en haut de page
10. **Cursor Personnalisé** — Curseur doré/terre avec effet hover
11. **Barre de Progression** — Scroll progress bar rouge → or en haut de page

Détails complets dans `tasks/progress.md`.

---

## 📁 5. Structure du Projet (Work Structure)

```
mon-site-bamileke/
├── MEMORY.md                  # Directives artistiques & skills
├── README.md                  # Présentation du projet
│
├── index.html                 # Accueil — Le Peuple Bamiléké
├── chefferies.html            # Les Chefferies Monumentales
├── pouvoir.html               # Le Fo et le Pouvoir
├── art-matiere.html           # Art & Matière (Ndop, Sculptures)
│
├── css/
│   ├── variables.css          # Design tokens (couleurs, polices, espaces)
│   ├── style.css              # Reset & styles globaux
│   ├── components.css         # Composants réutilisables (nav, footer, toggle, lightbox...)
│   └── pages.css              # Styles spécifiques par page
│
├── js/
│   ├── main.js                # Init globale & navigation
│   ├── theme-toggle.js        # Bascule thème sombre/clair
│   ├── nav-mobile.js          # Menu burger mobile
│   ├── animations.js          # Scroll reveal & parallax & stagger
│   ├── smooth-scroll.js       # Scroll fluide & back to top (à créer)
│   ├── lightbox.js            # Galerie plein écran (à créer)
│   ├── scroll-progress.js     # Barre de progression scroll (à créer)
│   └── components/
│       └── audio-player.js    # Lecteur audio (Tam-Tam)
│
├── assets/
│   ├── fonts/                 # Polices locales
│   ├── icons/                 # Icônes (SVG)
│   └── images/
│       ├── hero/              # Images grand format
│       ├── culture/           # Photos culturelles
│       └── placeholders/      # Placeholders sombres
│
├── tasks/
│   └── progress.md            # Suivi des tâches & roadmap
├── .prettierrc                # Config Prettier
└── package.json               # Scripts npm
```

### Règles de travail respectées :
1. **Un fichier CSS par rôle** : `variables.css`, `style.css`, `components.css`, `pages.css`
2. **Un fichier JS par fonctionnalité** dans `js/` ou `js/components/`
3. **Toujours inclure les `<link>` et `<script>`** dans chaque page HTML
4. **Lancer `npm run format`** avant chaque commit
5. **Mettre à jour `tasks/progress.md`** à chaque tâche complétée
6. **Respecter la palette et typographie** définies dans MEMORY.md
7. **Images** : `assets/images/hero/` pour les héros, `culture/` pour le contenu, `placeholders/` pour les maquettes
8. **Respecter `prefers-reduced-motion`** pour les animations (désactiver si demandé)
9. **Accessibilité** : balises ARIA, navigation clavier, contraste WCAG AA minimum