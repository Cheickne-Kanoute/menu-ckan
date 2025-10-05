# CKAN MENU - Site Web de Restaurant

Un site web moderne de restaurant de sushi construit avec HTML, CSS et JavaScript, utilisant un système de menu dynamique basé sur JSON.

## 🍣 À propos du projet

CKAN MENU est un site web complet pour un restaurant de sushi avec :
- **Menu dynamique** : Chargement des plats depuis un fichier JSON
- **Design moderne** : Interface élégante et responsive
- **Animations fluides** : Transitions optimisées pour une expérience utilisateur premium
- **Système extensible** : Facile d'ajouter de nouveaux plats et catégories

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
│   │   ├── server.js           # Configuration serveur
│   │   └── components/
│   │       ├── navbar.js       # Fonctionnalité navigation
│   │       ├── a-propos.js     # Scripts page à propos
│   │       ├── contact.js      # Scripts page contact
│   │       ├── menu.js         # Scripts page menu (dynamique)
│   │       └── reservation.js  # Scripts page réservation
│   └── 📁 data/                 # Données
│       └── menu-data.json      # Données du menu (JSON)
├── 📁 config/                   # Configuration
│   ├── netlify.toml            # Configuration Netlify
│   ├── vercel.json             # Configuration Vercel
│   └── _redirects              # Redirections URL
├── 📄 package.json             # Dépendances du projet
├── 📄 start.bat                # Script de démarrage Windows
├── 📄 start.sh                 # Script de démarrage Linux/Mac
└── 📄 README.md                # Ce fichier
```

## 🚀 Démarrage rapide

### Prérequis
- Node.js (version 14 ou supérieure)
- Un navigateur web moderne

### Installation

1. **Cloner le repository** :
   ```bash
   git clone <url-du-repository>
   cd ckan-menu
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer le serveur de développement** :
   ```bash
   # Windows
   start.bat
   
   # Linux/Mac
   ./start.sh
   
   # Ou manuellement
   npm start
   ```

4. **Ouvrir dans le navigateur** :
   - **Accueil** : http://localhost:3000
   - **Menu** : http://localhost:3000/menu
   - **À propos** : http://localhost:3000/a-propos
   - **Contact** : http://localhost:3000/contact
   - **Réservation** : http://localhost:3000/reservation

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
- **Déploiement multi-plateforme** : Netlify, Vercel, serveurs statiques

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
- **Node.js** : Serveur de développement
- **JSON** : Stockage des données du menu

## 🚀 Déploiement

Le projet est configuré pour le déploiement sur plusieurs plateformes :

### Netlify
1. Connecter le repository à Netlify
2. Commande de build : `echo "Aucune compilation requise"`
3. Dossier de publication : `public`
4. Les fichiers `netlify.toml` et `public/_redirects` gèrent le routage

### Vercel
1. Connecter le repository à Vercel
2. La configuration `vercel.json` gère le routage automatiquement
3. Dossier de sortie : `public`

### Déploiement manuel
Uploader simplement le contenu du dossier `public` sur tout serveur web supportant :
- Service de fichiers statiques
- Réécriture d'URL (pour les URLs propres)

## 📚 Développement

### Structure du code
- **Pages HTML** : `public/pages/`
- **Styles CSS** : `src/css/` avec fichiers séparés par composants et pages
- **Scripts JS** : `src/js/` avec organisation par composants
- **Assets** : `public/assets/`
- **Données** : `src/data/`

### Bonnes pratiques
- **Modularité** : Un fichier CSS/JS par page/composant
- **Performance** : Images optimisées, CSS minifié
- **Maintenabilité** : Code commenté, structure claire
- **Extensibilité** : Système JSON pour le menu

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

---

**CKAN MENU** - Site web moderne pour restaurant de sushi 🍣