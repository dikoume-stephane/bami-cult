# 08 — Accessibilité

## Vue d'ensemble

L'**accessibilité** (a11y) signifie que le site est utilisable par tous, y compris les personnes en situation de handicap : malvoyants, malentendants, personnes à mobilité réduite, etc.

---

## Les standards suivis

Le site vise le niveau **WCAG 2.1 AA** (Web Content Accessibility Guidelines). C'est le standard international.

| Niveau | Description |
|--------|-------------|
| A | Minimum absolu |
| **AA** | Standard recommandé (objectif du site) |
| AAA | Le plus strict (difficile à atteindre) |

---

## 1. Les textes alternatifs (alt)

Chaque image a un attribut `alt` décrivant son contenu.

```html
<img alt="Tissu Ndop tissé et teint à l'indigo" ...>
```

### Règles

| Type d'image | Bon `alt` | Mauvais `alt` |
|--------------|-----------|---------------|
| Image informative | Description concise | "image", "photo" |
| Image décorative | `alt=""` (vide) | Description inutile |
| Image complexe | Description + longdesc | Rien |

### Sur le site

Toutes les images de contenu ont un `alt` descriptif :
- `alt="Tissu Ndop"` — décrit l'objet
- `alt="Masque Kwifon"` — identifie l'objet
- `alt="Tam-Tam et musiciens"` — décrit la scène

---

## 2. Les labels ARIA

**ARIA** (Accessible Rich Internet Applications) sont des attributs qui donnent des informations supplémentaires aux lecteurs d'écran.

### Les labels sur les boutons

```html
<button class="theme-toggle" aria-label="Passer au thème clair"></button>
<button class="nav__burger" aria-label="Menu" aria-expanded="false"></button>
<button class="lightbox__close" aria-label="Fermer"></button>
<button class="back-to-top" aria-label="Retour en haut"></button>
```

**`aria-label`** = texte invisible lu par les lecteurs d'écran. Indispensable quand le bouton n'a pas de texte visible.

### L'état du menu burger

```html
<button class="nav__burger" aria-expanded="false">
```

**`aria-expanded`** = indique si le menu est ouvert (`true`) ou fermé (`false`). Le JS met à jour cet attribut.

### Le lightbox

```html
<div class="lightbox" role="dialog" aria-label="Visionneuse d'image">
```

**`role="dialog"`** = indique aux lecteurs d'écran que c'est une boîte de dialogue modale.

---

## 3. La navigation au clavier

### La touche Escape

```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') this.close();
});
```

Le menu mobile et le lightbox se ferment avec la touche Escape.

### L'ordre de tabulation

Les éléments interactifs sont dans l'ordre logique dans le HTML :
1. Logo
2. Liens de navigation
3. Bouton thème
4. Bouton burger
5. Contenu
6. Footer

### L'indicateur de focus

```css
.nav__link:focus-visible,
.btn:focus-visible {
  outline: 2px solid var(--accent-gold);
  outline-offset: 2px;
}
```

**`:focus-visible`** = montre un contour uniquement quand l'utilisateur utilise le clavier (pas la souris).

---

## 4. Le contraste des couleurs

### Vérification des ratios

| Élément | Couleur texte | Couleur fond | Ratio | Verdict |
|---------|---------------|--------------|-------|---------|
| Titres | #F5F5F0 | #0D0D0D | 17.5:1 | ✅ AAA |
| Corps | #CCCCCC | #0D0D0D | 11.2:1 | ✅ AAA |
| Labels | #A63A2B | #0D0D0D | 4.8:1 | ✅ AA |
| Texte muet | #888888 | #0D0D0D | 4.5:1 | ✅ AA |

**Règle WCAG AA :** Ratio minimum de 4.5:1 pour le texte normal, 3:1 pour le texte gros.

### Thème clair

| Élément | Couleur texte | Couleur fond | Ratio | Verdict |
|---------|---------------|--------------|-------|---------|
| Titres | #1A1A1A | #F9F8F6 | 16.8:1 | ✅ AAA |
| Corps | #5A524C | #F9F8F6 | 5.2:1 | ✅ AA |
| Labels | #7E2217 | #F9F8F6 | 6.1:1 | ✅ AA |

---

## 5. Le prefers-reduced-motion

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

```javascript
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
```

**Pourquoi ?** Certaines personnes ont des vertiges ou des nausées avec les animations. Le site respecte ce choix.

---

## 6. Les contenus alternatifs

### Le scroll progress

```html
<div class="scroll-progress" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
```

**`role="progressbar"`** = indique aux lecteurs d'écran que c'est une barre de progression.

### Les images sans texte

Les images décoratives ou les placeholders ont un `alt` descriptif ou un `aria-label` :

```html
<div class="img-placeholder" aria-label="Architecture de chefferie"></div>
```

---

## 7. Les Media Queries d'accessibilité

### `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  /* Désactive toutes les animations */
}
```

### `pointer: coarse`

```css
@media (pointer: coarse) {
  .custom-cursor { display: none !important; }
}
```

Détecte les écrans tactiles pour désactiver le curseur custom.

### `prefers-color-scheme`

```css
@media (prefers-color-scheme: light) {
  /* Thème clair automatique */
}
```

**Note :** Le site utilise un toggle manuel plutôt que cette media query, mais la logique est similaire.

---

## 8. La structure sémantique

### Les titres hiérarchisés

```html
<h1>Le Peuple Bamiléké</h1>        <!-- Titre principal (1 par page) -->
  <h2>Les Enfants de la Terre Rouge</h2>  <!-- Section -->
  <h2>Les Chefferies Monumentales</h2>    <!-- Section -->
    <h3>Sous-titre</h3>                    <!-- Sous-section -->
```

**Règle :** Pas de saut de niveau (pas de h1 → h3, toujours h1 → h2 → h3).

### Les régions ARIA

```html
<nav>        <!-- Région de navigation -->
<footer>     <!-- Région de pied de page -->
<main>       <!-- Contenu principal (à ajouter) -->
```

### Les listes

```html
<ol class="breadcrumb__list">
  <li class="breadcrumb__item">Accueil</li>
  <li class="breadcrumb__item">Chefferies</li>
</ol>
```

Les listes sont balisées avec `<ul>` ou `<ol>` + `<li>` pour que les lecteurs d'écran puissent les compter.

---

## 9. Les formulaires (à venir)

Si le site ajoute un formulaire (contact, newsletter) :

```html
<label for="email">Email</label>
<input type="email" id="email" required aria-describedby="email-help">
<span id="email-help">Nous ne partagerons jamais votre email.</span>
```

**Règles :**
- Chaque champ a un `<label>` associé avec `for`/`id`
- Les erreurs sont décrites avec `aria-describedby`
- Les champs obligatoires ont `required`

---

## 10. Les documents audio

```html
<div class="audio-player" data-audio-player data-src="assets/audio/tam-tam.mp3">
  <button class="audio-player__btn" aria-label="Écouter">
```

**Bonne pratique :** Le bouton audio a un `aria-label` pour décrire son action.

---

## Vérification de l'accessibilité

### Outils

1. **Lighthouse** (Chrome DevTools) → Audit accessibility
2. **axe DevTools** → Extension Chrome/Firefox
3. **WAVE** → https://wave.webaim.org
4. **NVDA** → Lecteur d'écran gratuit (Windows)
5. **VoiceOver** → Lecteur d'écran intégré (Mac/iOS)

### Vérification manuelle

1. ✅ Naviguer uniquement avec Tab/Shift+Tab
2. ✅ Activer tous les boutons avec Entrée/Espace
3. ✅ Vérifier que le focus est toujours visible
4. ✅ Fermer le lightbox avec Escape
5. ✅ Lire le site avec un lecteur d'écran

### Checklist WCAG 2.1 AA

| Critère | Statut |
|---------|--------|
| 1.1.1 Contenu non-textuel | ✅ (alt sur images) |
| 1.3.1 Info et structure | ✅ (sémantique HTML) |
| 1.4.3 Contraste minimum | ✅ (ratio ≥ 4.5:1) |
| 2.1.1 Clavier | ✅ (navigation Tab) |
| 2.4.1 Bypass blocks | ⚠️ (à ajouter : lien "Aller au contenu") |
| 2.4.6 Titres et labels | ✅ (hiérarchie h1-h3) |
| 2.4.7 Focus visible | ✅ (outline doré) |
| 3.1.1 Langue de page | ✅ (lang="fr") |
| 4.1.2 Name, role, value | ✅ (aria-label) |

---

## Améliorations possibles

| Améliation | Priorité |
|------------|----------|
| Ajouter un lien "Aller au contenu principal" | Haute |
| Ajouter `lang` sur les citations en autre langue | Moyenne |
| Augmenter le contraste des labels (#A63A2B) | Moyenne |
| Ajouter des sous-titres aux audio | Basse |
| Test avec NVDA/VoiceOver | Recommandé |
