# CKAN MENU - Site Web de Restaurant Moderne

Un site web complet de restaurant construit avec HTML5, CSS3 et JavaScript ES6+, optimisé pour le déploiement statique avec un système de menu dynamique et des fonctionnalités avancées.

## 🍽️ À propos du projet

CKAN MENU est un site web professionnel pour restaurant avec :
- **Menu dynamique** : Chargement des plats depuis JSON avec filtres interactifs
- **Design moderne** : Interface élégante, responsive et accessible
- **Animations fluides** : Transitions CSS3 et JavaScript pour une UX premium
- **Réalité augmentée** : Support des modèles 3D avec Google Model Viewer
- **Architecture simplifiée** : Workflow unifié avec un seul dossier de travail
- **Déploiement multi-plateforme** : Optimisé pour Vercel, Netlify et GitHub Pages
- **Performance optimisée** : Chargement rapide et animations 60 FPS

## 📁 Structure du projet

```
CKAN MENU/
├── 📁 public/                    # Site web complet (espace de travail)
│   ├── 📁 assets/               # Ressources statiques
│   │   └── 📁 images/           # Images organisées par catégorie
│   │       ├── 📁 menu/         # Images des plats (maki, uramaki, special, sashimi)
│   │       ├── 📁 hero/         # Images de fond des pages
│   │       ├── 📁 cards/        # Images des cartes
│   │       ├── 📁 about/        # Images page à propos
│   │       └── 📁 icons/        # Icônes et logos
│   └── 📁 pages/                # Composants
│       └── navbar.html          # Composant navigation
│   ├── 📁 css/                  # Styles CSS
│   │   ├── main.css            # Styles principaux
│   │   ├── components/
│   │   │   └── navbar.css      # Styles navigation
│   │   └── pages/
│   │       ├── a-propos.css    # Styles page à propos
│   │       ├── contact.css     # Styles page contact
│   │       ├── menu.css        # Styles page menu
│   │       └── reservation.css # Styles page réservation
│   ├── 📁 js/                   # Scripts JavaScript
│   │   ├── main.js             # Script principal
│   │   └── components/
│   │       ├── navbar.js       # Fonctionnalité navigation
│   │       ├── a-propos.js     # Scripts page à propos
│   │       ├── contact.js      # Scripts page contact
│   │       ├── menu.js         # Scripts page menu (dynamique)
│   │       └── reservation.js  # Scripts page réservation
│   ├── 📁 data/                 # Données
│   │   └── menu-data.json      # Données du menu (JSON)
│   ├── index.html              # Page d'accueil
│   ├── a-propos.html           # Page à propos
│   ├── contact.html            # Page contact
│   ├── menu.html               # Page menu (dynamique)
│   └── reservation.html        # Page réservation
├── 📁 config/                   # Configuration déploiement
│   ├── netlify.toml            # Configuration Netlify
│   └── _redirects              # Redirections URL
├── 📄 vercel.json              # Configuration Vercel (racine)
├── 📄 package.json             # Configuration du projet
└── 📄 README.md                # Ce fichier
```

## 🚀 Démarrage rapide

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Git (pour cloner le repository)
- Un serveur HTTP local (optionnel pour le développement)

### Installation

1. **Cloner le repository** :
   ```bash
   git clone <url-du-repository>
   cd ckan-menu
   ```

2. **Développement local** :
   ```bash
   # Option 1: Serveur HTTP avec live-server (recommandé)
   npx live-server public
   
   # Option 2: Serveur HTTP avec Python
   cd public && python -m http.server 8000
   
   # Option 3: Serveur HTTP avec Node.js
   npx http-server public
   
   # Option 4: Serveur HTTP avec PHP
   cd public && php -S localhost:8000
   ```

3. **Ouvrir dans le navigateur** :
   - **Accueil** : http://localhost:8080 (ou port affiché)
   - **Menu** : http://localhost:8080/menu
   - **À propos** : http://localhost:8080/a-propos
   - **Contact** : http://localhost:8080/contact
   - **Réservation** : http://localhost:8080/reservation

### 🎯 Workflow de développement

**Structure simplifiée** - Tout se trouve dans le dossier `public/` :
1. **Modifier** directement dans `public/`
2. **Tester** localement avec un serveur HTTP
3. **Commiter** : `git add . && git commit -m "Description"`
4. **Déployer** : `git push` (déploiement automatique)

## ✨ Fonctionnalités

### 🍽️ Système de menu dynamique
- **Chargement JSON** : Les plats sont chargés depuis `public/data/menu-data.json`
- **Filtrage par catégories** : Navigation fluide entre les catégories (7 catégories disponibles)
- **Ajout facile** : Ajouter un nouveau plat = modifier le JSON
- **Images optimisées** : Support des images locales et externes
- **Prix en FCFA** : Adaptation locale pour l'Afrique de l'Ouest

### 🎨 Design et UX
- **Responsive** : Adaptation mobile, tablette et desktop
- **Animations modernes** : Transitions CSS3 et JavaScript fluides
- **Performance** : Chargement rapide et optimisé (60 FPS)
- **Accessibilité** : Navigation au clavier, ARIA labels, lecteurs d'écran
- **Thème sombre** : Palette de couleurs élégante (#0A0B0A, #EFE7D2)

### 🥽 Réalité augmentée
- **Model Viewer** : Intégration Google Model Viewer
- **Modèles 3D** : Support des fichiers GLB pour AR
- **Multi-plateforme** : iOS, Android, WebXR
- **Interface dédiée** : Modal AR avec contrôles intuitifs

### 🔧 Fonctionnalités techniques
- **Architecture modulaire** : Code organisé par composants
- **CSS moderne** : Flexbox, Grid, animations CSS3, variables CSS
- **JavaScript ES6+** : Async/await, modules, Fetch API, Intersection Observer
- **Déploiement statique** : Optimisé pour Vercel, Netlify, GitHub Pages
- **Performance** : Chargement asynchrone, images optimisées
- **SEO friendly** : URLs propres, meta tags, structure sémantique

## 📝 Gestion du menu

### Ajouter un nouveau plat

1. **Ouvrir** `public/data/menu-data.json`
2. **Ajouter** un nouvel objet dans la catégorie souhaitée :

```json
{
  "id": "nouveau-plat",
  "name": "Nom du plat",
  "price": "5000 FCFA",
  "description": "Description détaillée du plat",
  "image": "/assets/images/menu/categorie/nom-image.jpg",
  "hasLeaf": true,
  "modelUrl": "/assets/models/modele-3d.glb"
}
```

### Ajouter une nouvelle catégorie

```json
{
  "id": "nouvelle-categorie",
  "name": "Nom de la catégorie",
  "items": [
    {
      "id": "plat-1",
      "name": "Premier plat",
      "price": "3000 FCFA",
      "description": "Description du plat",
      "image": "/assets/images/menu/categorie/plat1.jpg",
      "hasLeaf": false
    }
  ]
}
```

### Gestion des images

Les images sont organisées dans `public/assets/images/` :
- **Menu** : `menu/maki/`, `menu/uramaki/`, `menu/special/`, `menu/sashimi/`
- **Pages** : `hero/`, `cards/`, `about/`, `icons/`
- **Modèles 3D** : `models/` (fichiers GLB pour AR)

### Catégories disponibles

Le menu comprend 7 catégories :
1. **Burgers** (4 plats)
2. **Grillades** (4 plats)
3. **Spécialités Locales** (4 plats)
4. **Desserts** (4 plats)
5. **Pizzas** (4 plats)
6. **Pâtes** (4 plats)
7. **Boissons** (4 plats)

## 🛠 Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique avec balises modernes
- **CSS3** : Flexbox, Grid, animations, variables CSS, responsive design
- **JavaScript ES6+** : Async/await, modules, Fetch API, Intersection Observer
- **JSON** : Stockage des données du menu (28 plats, 7 catégories)

### Fonctionnalités avancées
- **Google Model Viewer** : Affichage des modèles 3D et réalité augmentée
- **Fetch API** : Chargement asynchrone des données
- **Intersection Observer** : Animations au scroll
- **CSS Grid & Flexbox** : Layouts modernes et responsive

### Déploiement
- **Vercel** : Déploiement automatique avec configuration optimisée
- **Netlify** : Alternative de déploiement avec redirections
- **GitHub Pages** : Hébergement statique gratuit
- **Git** : Versioning et déploiement continu

## 🚀 Déploiement

Le projet est optimisé pour le déploiement statique sur plusieurs plateformes :

### Vercel (Recommandé) ⭐
1. **Connecter le repository** à Vercel
2. **Configuration automatique** :
   - Dossier de publication : `public`
   - Commande de build : `echo "No build step required"`
3. **Routage** : Géré par `vercel.json` (URLs propres automatiques)
4. **Performance** : CDN global, HTTPS automatique, déploiement instantané

### Netlify
1. **Connecter le repository** à Netlify
2. **Configuration automatique** :
   - Dossier de publication : `public`
   - Commande de build : `echo "No build step required"`
3. **Routage** : Géré par `config/netlify.toml` et `public/_redirects`
4. **URLs propres** : `/menu` → `/menu.html`

### GitHub Pages
1. **Activer GitHub Pages** dans les paramètres du repository
2. **Dossier source** : `public`
3. **URL** : `https://username.github.io/repository-name`

### Déploiement manuel
Uploader le contenu du dossier `public` sur tout serveur web supportant :
- **Fichiers statiques** : HTML, CSS, JS, images
- **Réécriture d'URL** : Pour les URLs propres (`/menu` au lieu de `/menu.html`)
- **HTTPS** : Recommandé pour la sécurité

### 🔄 Workflow de déploiement automatique

1. **Modifier** les fichiers dans `public/`
2. **Commiter** : `git add . && git commit -m "Description"`
3. **Push** : `git push origin main`
4. **Déploiement automatique** : Vercel/Netlify détecte les changements
5. **Site mis à jour** : En quelques secondes

## 📚 Développement

### Structure du code
- **Pages HTML** : `public/` (racine) - Toutes les pages principales
- **Styles CSS** : `public/css/` avec fichiers séparés par composants et pages
- **Scripts JS** : `public/js/` avec organisation modulaire par composants
- **Assets** : `public/assets/` - Images, icônes, modèles 3D
- **Données** : `public/data/` - Fichier JSON du menu

### 🎯 Workflow de développement simplifié

**Architecture unifiée** - Tout dans `public/` :
```
public/                    # VOTRE ESPACE DE TRAVAIL UNIQUE
├── index.html            # Modifier directement
├── menu.html            # Modifier directement
├── css/                 # Styles organisés
├── js/                  # Scripts modulaires
├── data/                # Données JSON
└── assets/              # Images et ressources
```

### Bonnes pratiques
- **Modularité** : Un fichier CSS/JS par page/composant
- **Performance** : Images optimisées, chargement asynchrone, animations 60 FPS
- **Maintenabilité** : Code commenté, structure claire, architecture simplifiée
- **Extensibilité** : Système JSON flexible pour le menu
- **Déploiement** : Configuration multi-plateforme (Vercel, Netlify, GitHub Pages)
- **Accessibilité** : Navigation au clavier, ARIA labels, lecteurs d'écran
- **Responsive** : Design mobile-first avec breakpoints optimisés

## 🤝 Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajouter nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.

## 📞 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

## 🎯 Fonctionnalités avancées

### 🥽 Réalité augmentée
- **Modèles 3D** : Support des fichiers GLB pour l'affichage 3D
- **Model Viewer** : Intégration Google Model Viewer pour la RA
- **Interactivité** : Rotation, zoom, et visualisation des plats en 3D
- **Multi-plateforme** : iOS, Android, WebXR

### ⚡ Performance
- **Chargement asynchrone** : Données du menu chargées dynamiquement
- **Images optimisées** : Compression et formats modernes
- **Animations fluides** : 60 FPS avec CSS3 et JavaScript
- **Responsive design** : Adaptation mobile-first
- **Lazy loading** : Chargement optimisé des ressources

### 🔍 SEO et accessibilité
- **URLs propres** : `/menu` au lieu de `/menu.html`
- **Structure sémantique** : HTML5 avec balises appropriées
- **Navigation clavier** : Support complet de la navigation au clavier
- **Lecteurs d'écran** : Compatible avec les technologies d'assistance
- **Meta tags** : Optimisation pour les moteurs de recherche

### 🎨 Design system
- **Palette de couleurs** : Thème sombre élégant (#0A0B0A, #EFE7D2)
- **Typographie** : Google Fonts (Forum, Inter)
- **Animations** : Transitions CSS3 et JavaScript fluides
- **Responsive** : Breakpoints optimisés pour tous les écrans

---

## 📊 Statistiques du projet

- **📄 Pages** : 5 pages principales
- **🍽️ Plats** : 28 plats dans 7 catégories
- **🎨 Styles** : 4 fichiers CSS modulaires
- **⚡ Scripts** : 5 composants JavaScript
- **🖼️ Images** : Organisation par catégories
- **🥽 AR** : Support modèles 3D GLB

---

**CKAN MENU** - Site web moderne pour restaurant 🍽️

*Architecture simplifiée, déploiement automatique, réalité augmentée intégrée*