# Progression du Projet

## Tâches en cours
- [ ] Aucune pour le moment

## Tâches terminées
- [x] Initialisation du projet (npm, dossiers, fichiers de base)
- [x] Configuration de Prettier
- [x] Création de la structure HTML/CSS/JS
- [x] Réorganisation complète selon l'arborescence demandée
- [x] Création des fichiers CSS (variables, style, components, pages)
- [x] Création des fichiers JS (main, animations, audio-player)
- [x] Création de 4 pages HTML (index, chefferies, pouvoir, art-matiere)
- [x] Création du README.md
- [x] Mise à jour de MEMORY.md avec la nouvelle structure
- [x] Téléchargement des images (hero + culture)
- [x] Intégration des images dans les pages HTML
- [x] Système de double thème (Sombre / Clair)
- [x] Composant theme-toggle.js avec persistance localStorage

---

## Roadmap d'Améliorations

### 🔴 Haute Priorité — Fonctionnalités Manquantes

- [x] **T1 — Menu Mobile (Burger)**
  - Fichier : `js/nav-mobile.js` + `css/components.css`
  - Panneau latéral slide-in avec overlay sombre
  - Fermeture au clic sur un lien ou sur l'overlay
  - Animation d'ouverture/fermeture fluide

- [x] **T2 — Lazy Loading des Images**
  - Fichier : toutes les pages HTML
  - Ajouter `loading="lazy"` aux images de contenu
  - Garder `loading="eager"` + `fetchpriority="high"` pour les hero images

- [x] **T3 — Smooth Scroll & Back to Top**
  - Fichier : `js/smooth-scroll.js` + `css/components.css`
  - Navigation fluide entre ancres internes
  - Bouton "retour en haut" (flèche) qui apparaît après 300px de scroll
  - Animation de disparition/apparition

### 🟠 Priorité Moyenne — UX & Interactions

- [x] **T4 — Effet Grain/Noise Overlay**
  - Fichier : `css/style.css`
  - pseudo-élement `::after` avec bruit SVG
  - Opacité très faible (~0.035) sur toutes les pages
  - Respecte `prefers-reduced-motion`

- [x] **T5 — Animations d'Apparition Enrichies**
  - Fichier : `js/animations.js` + `css/components.css`
  - Stagger sur les cartes (délai progressif entre chaque)
  - Fade-in latéral sur les textes (gauche/droite selon position)
  - Scale-up léger sur les images au scroll
  - Respect de `prefers-reduced-motion`

- [x] **T6 — Lightbox pour Galerie d'Images**
  - Fichier : `js/lightbox.js` + `css/components.css`
  - Ouverture en plein écran au clic sur une image
  - Navigation entre images (suivant/précédent)
  - Fermeture par clic sur overlay, touche Escape, ou swipe

- [x] **T7 — Audio Player Intégré (Tam-Tam)**
  - Fichier : `js/components/audio-player.js` + `css/components.css`
  - Intégré dans la section "La Voix et le Tam-Tam" de `art-matiere.html`
  - Design furtif : icône play/pause + barre de progression
  - Autoplay off, interaction utilisateur requise

### 🟡 Priorité Basse — SEO & Finitions

- [x] **T8 — Open Graph & Meta Tags SEO**
  - Fichier : toutes les pages HTML
  - balises `og:title`, `og:description`, `og:image`, `og:url`
  - balises `twitter:card`, `twitter:title`, etc.
  - Favicon et apple-touch-icon (chemins prêts, images à créer)

- [x] **T9 — Breadcrumb / Fil d'Ariane**
  - Fichier : `css/components.css` + pages HTML
  - Affichage : Accueil > Page actuelle
  - Style minimaliste, police label en uppercase

- [x] **T10 — Cursor Personnalisé**
  - Fichier : `js/cursor.js` + `css/components.css`
  - Curseur custom doré avec point central
  - Effet d'agrandissement au survol des éléments interactifs
  - Désactivation sur mobile/tactile

- [x] **T11 — Barre de Progression de Scroll**
  - Fichier : `js/scroll-progress.js` + `css/components.css`
  - Fine barre (3px) en haut de page
  - Couleur : dégradé rouge → or
  - Largeur = % de scroll parcouru

---

## Images téléchargées
### Hero (assets/images/hero/)
- hero-home.jpg (392 KB)
- hero-chefferies.jpg (925 KB)
- hero-pouvoir.jpg (925 KB)
- hero-art.jpg (198 KB)

### Culture (assets/images/culture/)
- culture-mask.jpg (358 KB)
- culture-textile.jpg (274 KB)
- culture-carving.jpg (198 KB)
- culture-drum.jpg (274 KB)
- culture-throne.jpg (358 KB)
- culture-village.jpg (477 KB)

### Masques (assets/images/culture/) — À télécharger
- mask-elephant.jpg — Masque Éléphant (Mbap Mteng)
- mask-buffalo.jpg — Masque Bufflon
- mask-leopard.jpg — Panthère (Nso)

## Notes
- Style de référence : `style-exemple.png`
- Polices : Playfair Display + Inter
- Palette : dark mode (#0D0D0D) avec accents terre (#A63A2B) et or (#C5A059)
- Thème : double thème sombre/clair opérationnel
- Pages : 4 pages HTML statiques avec images intégrées

---

## Améliorations Culturelles

### ✅ Terminé
- [x] **Section "Paroles du Vieux Sage"** — 3 proverbes Bamiléké avec style dédié (index.html)
- [x] **Section "Célèbres Bamiléké"** — 6 personnalités mondiales (index.html)
- [x] **Motifs Ndop SVG** — Décorations géométriques sur sections (section--ndop)
- [x] **Bordures Beadwork** — Motifs de perles traditionnelles (beadwork-border)
- [x] **Proverbes additionnels** — Sur chefferies.html et art-matiere.html
- [x] **CSS dédié** — proverbs-grid, famous-grid, section--ndop, beadwork-border
- [x] **Carte des Hauts-Plateaux** — SVG interactif avec Bafoussam, Dschang, Bamenda
- [x] **Timeline "La Grande Migration"** — 7 étapes du IIIe au XXe siècle
- [x] **Stats géographiques** — Distance, altitude, nombre de chefferies
- [x] **Section "Le Sens des Masques"** — 3 masques (éléphant, bufflon, panthère) avec SVG
- [x] **Page Chefferies enrichie** — 4 nouvelles sections :
  - Les Grandes Chefferies (Bandjoun, Bafoussam, Bafang, Bangoua)
  - Anatomie d'une Chefferie (schéma SVG interactif)
  - Le Toit Conique (symbolisme)
  - La Construction Traditionnelle (4 étapes)

### 📝 Améliorations futures possibles
- [ ] Audio d'ambiance (tambours, balafon)
- [ ] Galerie étendue avec plus d'images culturelles
- [ ] Page "À propos" avec l'équipe du projet
