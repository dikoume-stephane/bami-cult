# Documentation Complète — Site Culturel Bamiléké

## Table des matières

1. [Présentation du projet](#01-architecture.md)
2. [Structure & Architecture](#01-architecture.md)
3. [HTML — Structure des pages](#02-html.md)
4. [CSS — Design & Thèmes](#03-css.md)
5. [JavaScript — Interactivité](#04-javascript.md)
6. [Images & Assets](#05-images.md)
7. [SEO & Méta-tags](#06-seo.md)
8. [Responsive Design](#07-responsive.md)
9. [Accessibilité](#08-accessibility.md)

---

## Résumé rapide

| Technologie | Utilisation |
|-------------|-------------|
| HTML5 | Structure sémantique des 4 pages |
| CSS3 | Design tokens, double thème, animations, responsive |
| JavaScript ES6+ | Navigation, thème, animations, lightbox, audio, curseur |
| Google Fonts | Playfair Display + Inter |
| Prettier | Formatage du code |

## Commandes utiles

```bash
npm run dev      # Lancer le serveur local (localhost:3000)
npm run format   # Formater tout le code avec Prettier
npm run check    # Vérifier le formatage
```

## Structure du dossier

```
culture-bami/
├── index.html              # Page d'accueil
├── chefferies.html         # Les Chefferies Monumentales
├── pouvoir.html            # Le Fo et le Pouvoir
├── art-matiere.html        # Art & Matière
├── css/
│   ├── variables.css       # Design tokens (couleurs, polices, espaces)
│   ├── style.css           # Reset & styles globaux
│   ├── components.css      # Composants réutilisables
│   └── pages.css           # Styles spécifiques par page
├── js/
│   ├── main.js             # Init globale & navigation
│   ├── theme-toggle.js     # Bascule thème sombre/clair
│   ├── nav-mobile.js       # Menu burger mobile
│   ├── animations.js       # Scroll reveal & parallax
│   ├── smooth-scroll.js    # Scroll fluide & back to top
│   ├── lightbox.js         # Galerie plein écran
│   ├── cursor.js           # Curseur personnalisé
│   ├── scroll-progress.js  # Barre de progression
│   └── components/
│       └── audio-player.js # Lecteur audio
├── assets/
│   ├── images/
│   │   ├── hero/           # Images grand format (4 fichiers)
│   │   ├── culture/        # Photos culturelles (6 fichiers)
│   │   └── icons/          # Favicon (1 SVG)
│   └── fonts/              # Polices locales (vide)
├── docs/                   # Cette documentation
├── tasks/
│   └── progress.md         # Suivi des tâches
├── MEMORY.md               # Directives artistiques
├── IMAGES.md               # Inventaire des images
├── README.md               # Présentation du projet
├── package.json            # Configuration npm
└── .prettierrc             # Configuration Prettier
```
