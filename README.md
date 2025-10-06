# CKAN MENU - Site Web de Restaurant

Un site web moderne de restaurant de sushi construit avec HTML, CSS et JavaScript, optimisé pour le déploiement statique avec un système de menu dynamique basé sur JSON.

## 🍣 À propos du projet

CKAN MENU est un site web complet pour un restaurant de sushi avec :
- **Menu dynamique** : Chargement des plats depuis un fichier JSON
- **Design moderne** : Interface élégante et responsive
- **Animations fluides** : Transitions optimisées pour une expérience utilisateur premium
- **Système extensible** : Facile d'ajouter de nouveaux plats et catégories
- **Déploiement statique** : Optimisé pour Netlify, Vercel et autres plateformes
- **Réalité augmentée** : Support des modèles 3D avec Model Viewer

## 📁 Structure du projet

```
CKAN MENU/
├── 📁 public/                    # Fichiers publics
│   ├── 📁 assets/               # Ressources statiques
│   │   └── 📁 images/           # Images organisées par catégorie
│   │       ├── 📁 menu/         # Images des plats (maki, uramaki, special, sashimi)
│   │       ├── 📁 hero/         # Images de fond des pages
│   │       ├── 📁 cards/        # Images des cartes
│   │       ├── 📁 about/        # Images page à propos
│   │       └── 📁 icons/        # Icônes et logos
│   └── 📁 pages/                # Pages HTML
│       ├── index.html           # Page d'accueil
│       ├── a-propos.html       # Page à propos
│       ├── contact.html         # Page contact
│       ├── menu.html            # Page menu (dynamique)
│       ├── reservation.html     # Page réservation
│       └── navbar.html          # Composant navigation
├── 📁 src/                      # Code source
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
│   └── 📁 data/                 # Données
│       └── menu-data.json      # Données du menu (JSON)
├── 📁 config/                   # Configuration déploiement
│   ├── netlify.toml            # Configuration Netlify
│   ├── vercel.json             # Configuration Vercel
│   └── _redirects              # Redirections URL
├── 📄 package.json             # Configuration du projet
└── 📄 README.md                # Ce fichier
```

## 🚀 Démarrage rapide

### Prérequis
- Un navigateur web moderne
- Un serveur HTTP local (optionnel pour le développement)

### Installation

1. **Cloner le repository** :
   ```bash
   git clone <url-du-repository>
   cd ckan-menu
   ```

2. **Développement local** :
   ```bash
   # Option 1: Serveur HTTP simple
   npx live-server public
   
   # Option 2: Serveur HTTP avec Python
   cd public && python -m http.server 8000
   
   # Option 3: Serveur HTTP avec Node.js
   npx http-server public
   ```

3. **Ouvrir dans le navigateur** :
   - **Accueil** : http://localhost:8080 (ou port affiché)
   - **Menu** : http://localhost:8080/menu
   - **À propos** : http://localhost:8080/a-propos
   - **Contact** : http://localhost:8080/contact
   - **Réservation** : http://localhost:8080/reservation

## ✨ Fonctionnalités

### 🍣 Système de menu dynamique
- **Chargement JSON** : Les plats sont chargés depuis `src/data/menu-data.json`
- **Filtrage par catégories** : Navigation fluide entre les catégories
- **Ajout facile** : Ajouter un nouveau plat = modifier le JSON
- **Images optimisées** : Support des images locales et externes

### 🎨 Design et UX
- **Responsive** : Adaptation mobile, tablette et desktop
- **Animations modernes** : Transitions fluides et élégantes
- **Performance** : Chargement rapide et optimisé
- **Accessibilité** : Navigation au clavier et lecteurs d'écran

### 🔧 Fonctionnalités techniques
- **Architecture modulaire** : Code organisé par composants
- **CSS moderne** : Flexbox, Grid, animations CSS3
- **JavaScript ES6+** : Async/await, modules, gestion d'erreurs
- **Déploiement statique** : Optimisé pour Netlify, Vercel, GitHub Pages
- **Réalité augmentée** : Support des modèles 3D avec Model Viewer
- **Performance** : Chargement optimisé, images compressées

## 📝 Gestion du menu

### Ajouter un nouveau plat

1. **Ouvrir** `src/data/menu-data.json`
2. **Ajouter** un nouvel objet dans la catégorie souhaitée :

```json
{
  "id": "nouveau-plat",
  "name": "Nom du plat",
  "price": "5000 FCFA",
  "description": "Description du plat",
  "image": "chemin/vers/image.jpg",
  "hasLeaf": true
}
```

### Ajouter une nouvelle catégorie

```json
{
  "id": "nouvelle-categorie",
  "name": "Nom de la catégorie",
  "items": [
    // ... plats de la catégorie
  ]
}
```

### Gestion des images

Les images sont organisées dans `public/assets/images/` :
- **Menu** : `menu/maki/`, `menu/uramaki/`, `menu/special/`, `menu/sashimi/`
- **Pages** : `hero/`, `cards/`, `about/`, `icons/`

## 🛠 Technologies utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes, animations, responsive design
- **JavaScript ES6+** : Fonctionnalités dynamiques
- **JSON** : Stockage des données du menu
- **Model Viewer** : Affichage des modèles 3D et réalité augmentée
- **Fetch API** : Chargement asynchrone des données

## 🚀 Déploiement

Le projet est optimisé pour le déploiement statique sur plusieurs plateformes :

### Netlify (Recommandé)
1. **Connecter le repository** à Netlify
2. **Configuration automatique** :
   - Dossier de publication : `public`
   - Commande de build : `echo "No build step required"`
3. **Routage** : Géré par `config/netlify.toml` et `public/_redirects`
4. **URLs propres** : `/menu` → `/pages/menu.html`

### Vercel
1. **Connecter le repository** à Vercel
2. **Configuration** : `config/vercel.json` gère le routage automatiquement
3. **Dossier de sortie** : `public`
4. **Performance** : CDN global, HTTPS automatique

### GitHub Pages
1. **Activer GitHub Pages** dans les paramètres du repository
2. **Dossier source** : `public`
3. **URL** : `https://username.github.io/repository-name`

### Déploiement manuel
Uploader le contenu du dossier `public` sur tout serveur web supportant :
- **Fichiers statiques** : HTML, CSS, JS, images
- **Réécriture d'URL** : Pour les URLs propres (`/menu` au lieu de `/menu.html`)
- **HTTPS** : Recommandé pour la sécurité

## 📚 Développement

### Structure du code
- **Pages HTML** : `public/pages/`
- **Styles CSS** : `src/css/` avec fichiers séparés par composants et pages
- **Scripts JS** : `src/js/` avec organisation par composants
- **Assets** : `public/assets/`
- **Données** : `src/data/`

### Bonnes pratiques
- **Modularité** : Un fichier CSS/JS par page/composant
- **Performance** : Images optimisées, chargement asynchrone
- **Maintenabilité** : Code commenté, structure claire
- **Extensibilité** : Système JSON pour le menu
- **Déploiement** : Configuration multi-plateforme
- **Accessibilité** : Navigation au clavier, lecteurs d'écran

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

### Réalité augmentée
- **Modèles 3D** : Support des fichiers GLB pour l'affichage 3D
- **Model Viewer** : Intégration Google Model Viewer pour la RA
- **Interactivité** : Rotation, zoom, et visualisation des plats en 3D

### Performance
- **Chargement asynchrone** : Données du menu chargées dynamiquement
- **Images optimisées** : Compression et formats modernes
- **Animations fluides** : 60 FPS avec CSS3 et JavaScript
- **Responsive design** : Adaptation mobile-first

### SEO et accessibilité
- **URLs propres** : `/menu` au lieu de `/menu.html`
- **Structure sémantique** : HTML5 avec balises appropriées
- **Navigation clavier** : Support complet de la navigation au clavier
- **Lecteurs d'écran** : Compatible avec les technologies d'assistance

---

**CKAN MENU** - Site web moderne pour restaurant de sushi 🍣

*Optimisé pour le déploiement statique avec support de la réalité augmentée*