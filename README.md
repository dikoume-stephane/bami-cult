# Bamiléké — La Force d'un Peuple

Site web culturel et éditorial présentant le peuple Bamiléké de l'Ouest du Cameroun.

## Technologies

- **HTML5** sémantique
- **CSS3** pur (variables, grid, flexbox)
- **JavaScript** vanilla (ES6+)
- Aucun framework, site 100% statique

## Structure du Projet

```
mon-site-bamileke/
├── MEMORY.md                  # Directives artistiques & skills
├── index.html                 # Page d'accueil
├── chefferies.html            # Les Chefferies Monumentales
├── pouvoir.html               # Le Fo et le Pouvoir
├── art-matiere.html           # Art & Matière (Ndop, Sculptures)
├── css/
│   ├── variables.css          # Design tokens (couleurs, polices, espaces)
│   ├── style.css              # Reset & styles globaux
│   ├── components.css         # Composants réutilisables
│   └── pages.css              # Styles spécifiques par page
├── js/
│   ├── main.js                # Init globale & navigation
│   ├── animations.js          # Scroll reveal & parallax
│   └── components/
│       └── audio-player.js    # Lecteur audio (Tam-Tam)
├── assets/
│   ├── fonts/                 # Polices locales
│   ├── icons/                 # Icônes
│   └── images/
│       ├── hero/              # Images grand format
│       ├── culture/           # Photos culturelles
│       └── placeholders/      # Placeholders sombres
└── tasks/
    └── progress.md            # Suivi des tâches
```

## Design

- **Esthétique** : Éditorial luxe / Magazine premium
- **Palette** : Dark mode organique (#0D0D0D) + accents terre (#A63A2B) et or (#D4AF37)
- **Typographie** : Playfair Display (titres) + Inter (corps)
- **Responsive** : Mobile-first avec `clamp()` pour la typographie

## Commandes

```bash
npm run format    # Formater le code avec Prettier
npm run check     # Vérifier le format
npm run dev       # Lancer un serveur local
```

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Accueil — Le Peuple Bamiléké |
| `chefferies.html` | Architecture traditionnelle |
| `pouvoir.html` | Système politique (Fo, Kwifon, Reines Mères) |
| `art-matiere.html` | Arts sacrés (Ndop, Sculptures, Tam-Tam) |
