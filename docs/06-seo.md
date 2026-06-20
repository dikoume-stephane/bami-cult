# 06 — SEO & Méta-tags

## Vue d'ensemble

Le **SEO** (Search Engine Optimization) est l'ensemble des techniques pour apparaître dans les résultats de recherche (Google, Bing, etc.).

---

## Les Méta-tags de base

Chaque page contient ces balises dans le `<head>` :

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bamiléké — La Force d'un Peuple</title>
<meta name="description" content="Découvrez le peuple Bamiléké, gardiens de traditions millénaires...">
```

### Chaque balise expliquée

| Balise | Rôle | Bonne pratique |
|--------|------|----------------|
| `charset="UTF-8"` | Encodage des caractères (accents français) | Toujours inclure |
| `viewport` | Règle le responsive (largeur = écran) | Toujours inclure |
| `title` | Titre affiché dans l'onglet et les résultats Google | 50-60 caractères, mots-clés importants en premier |
| `description` | Description sous le titre dans Google | 150-160 caractères, incite au clic |

### Les titres de chaque page

| Page | Title | Description |
|------|-------|-------------|
| Accueil | Bamiléké — La Force d'un Peuple | Découvrez le peuple Bamiléké, gardiens de traditions millénaires des hauts-plateaux de l'Ouest du Cameroun. |
| Chefferies | Chefferies Monumentales — Bamiléké | Découvrez les chefferies monumentales du peuple Bamiléké, joyaux de l'architecture traditionnelle de l'Ouest du Cameroun. |
| Pouvoir | Le Fo et le Pouvoir — Bamiléké | Le système politique Bamiléké : le Fo, les Reines Mères et les Notables du royaume. |
| Art & Matière | Art & Matière — Bamiléké | Les arts sacrés Bamiléké : le Ndop, la sculpture sur bois et les traditions artistiques millénaires. |

---

## Open Graph (Facebook, LinkedIn, etc.)

Les balises Open Graph contrôlent l'apparence du site quand on partage un lien sur les réseaux sociaux.

```html
<meta property="og:type" content="website">
<meta property="og:title" content="Bamiléké — La Force d'un Peuple">
<meta property="og:description" content="Découvrez le peuple Bamiléké...">
<meta property="og:image" content="assets/images/hero/hero-home.jpg">
<meta property="og:url" content="https://bamileke-culture.fr/">
<meta property="og:locale" content="fr_FR">
```

### Chaque balise expliquée

| Balise | Rôle | Valeur |
|--------|------|--------|
| `og:type` | Type de contenu | `website` (site web) |
| `og:title` | Titre affiché sur le réseau social | Même que `<title>` |
| `og:description` | Description affichée | Même que `meta description` |
| `og:image` | Image de prévisualisation | Image hero de la page |
| `og:url` | URL canonical du contenu | URL complète de la page |
| `og:locale` | Langue du contenu | `fr_FR` (français) |

### L'importance de `og:image`

C'est l'image qui apparaît quand quelqu'un partage votre lien sur Facebook, Twitter, LinkedIn, etc.

**Recommandations :**
- Taille : 1200 x 630 pixels (idéal)
- Format : JPG ou PNG
- Pas de texte trop petit (illisible en miniature)

---

## Twitter Card

Les balises Twitter contrôlent l'apparence sur Twitter/X.

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Bamiléké — La Force d'un Peuple">
<meta name="twitter:description" content="Découvrez le peuple Bamiléké...">
<meta name="twitter:image" content="assets/images/hero/hero-home.jpg">
```

### Les types de cartes

| Type | Description |
|------|-------------|
| `summary` | Petite carte (image carrée + titre) |
| `summary_large_image` | Grande carte (image large + titre) |

Le site utilise `summary_large_image` pour un impact visuel maximal.

---

## Le Favicon

Le favicon est l'icône affichée dans l'onglet du navigateur.

```html
<link rel="icon" type="image/svg+xml" href="assets/icons/favicon.svg">
<link rel="icon" type="image/png" sizes="32x32" href="assets/icons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="assets/icons/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="assets/icons/apple-touch-icon.png">
<meta name="theme-color" content="#0D0D0D">
```

### Chaque balise expliquée

| Balise | Rôle |
|--------|------|
| `icon` type `image/svg+xml` | Favicon SVG (navigateurs modernes) |
| `icon` type `image/png` sizes `32x32` | Favicon classique (compatibilité) |
| `icon` type `image/png` sizes `16x16` | Très petit favicon (onglets) |
| `apple-touch-icon` | Icône quand on ajoute le site à l'accueil iOS |
| `theme-color` | Couleur de la barre d'adresse sur mobile |

---

## SEO Technique

### Les balises sémantiques HTML5

Le site utilise des balises sémantiques qui aident Google à comprendre la structure :

```html
<nav>      <!-- Navigation -->
<section>  <!-- Section thématique -->
<footer>   <!-- Pied de page -->
<h1>       <!-- Titre principal (1 par page) -->
<h2>       <!-- Titres de sections -->
<h3>       <!-- Sous-titres -->
```

**Pourquoi ?** Google donne plus de poids au contenu dans `<h1>`, `<h2>`, etc. qu'à un simple `<div>`.

### L'attribut `lang="fr"`

```html
<html lang="fr">
```

Dit à Google que le site est en français. Important pour le référencement dans les résultats français.

### Les liens de navigation

Tous les liens internes utilisent des URLs relatives propres :

```html
<a href="index.html">Accueil</a>
<a href="chefferies.html">Chefferies</a>
```

**Pas de paramètres** (`?page=1`), pas de **fragments** (`#section`). Google préfère les URLs propres.

---

## SEO Contenu

### La hiérarchie des titres

Chaque page suit cette structure :

```
<h1> — Titre principal (1 seule fois par page)
  <h2> — Section principale (plusieurs fois)
    <h3> — Sous-section (si nécessaire)
```

### Le texte alternatif des images

```html
<img alt="Tissu Ndop tissé et teint à l'indigo">
```

Google utilise le texte `alt` pour comprendre le contenu des images et les indexer dans Google Images.

### Le contenu textuel

Chaque page contient du texte descriptif riche, pas juste des images. C'est important car Google indexe le texte.

---

## Ce qui manque pour un SEO complet

| Élément | Description | Priorité |
|---------|-------------|----------|
| `sitemap.xml` | Liste de toutes les pages pour Google | Haute |
| `robots.txt` | Instructions pour les robots d'indexation | Haute |
| Canonical URL | Éviter le contenu dupliqué | Moyenne |
| Schema.org (JSON-LD) | Données structurées pour Google | Moyenne |
| Analytics (GA4) | Suivi des visiteurs | Basse |

---

## Vérification du SEO

### Outils recommandés

1. **Google Search Console** — Voir comment Google indexe le site
2. **Google PageSpeed Insights** — Vérifier la vitesse
3. **Lighthouse** (intégré à Chrome) — Audit complet
4. **Open Graph Debugger** — Tester les partages sociaux

### Vérification rapide

```bash
# Lancer le serveur
npm run dev

# Ouvrir http://localhost:3000
# Vérifier dans l'inspecteur :
# - Pas d'erreurs dans la console
# - Toutes les images ont un alt
# - Les titres sont hiérarchisés (h1 > h2 > h3)
# - Le viewport est défini
```
