# Journal IUT Info - Site Vitrine

## 📝 Description
Site vitrine HTML/CSS/JavaScript pour le journal interne du département informatique de l'IUT Aix-Marseille Université.

Projet réalisé par les étudiants de seconde année dans le cadre de leur projet de communication interne.

## 🎨 Caractéristiques

- **Design moderne et professionnel** avec animations CSS
- **Navigation intuitive** avec menus déroulants
- **Responsive** : s'adapte aux mobiles, tablettes et ordinateurs
- **Structure organisée** par rubriques :
  - Info (Formations, Erasmus, Musée)
  - Event (BDE, Tournois, Sport)
  - Article (Débouchés, Alumni, Secteur)
  - Contact

## 📁 Structure des fichiers

```
journal-iut/
│
├── index.html              # Page d'accueil
├── styles.css              # Feuille de style principale
├── script.js               # JavaScript pour interactions
│
├── event-sport.html        # Article exemple (Campus Sportif AMU)
├── info-formations.html    # Template pour articles Formations
├── contact.html            # Page de contact avec formulaire
│
└── [autres-pages.html]     # Pages à créer pour chaque rubrique
```

## 🚀 Comment utiliser ce site

### 1. Structure de base
Toutes les pages suivent la même structure :
- Header avec navigation
- Contenu principal
- Footer

### 2. Ajouter un nouvel article

Pour ajouter un article, créez une nouvelle page HTML en copiant la structure d'une page existante (exemple : `event-sport.html`).

**Étapes :**
1. Copiez `event-sport.html` ou `info-formations.html`
2. Renommez le fichier (ex: `event-bde.html`)
3. Modifiez le contenu entre les balises `<div class="article-body">...</div>`
4. Ajustez le titre, la catégorie et les métadonnées
5. Assurez-vous que la navigation active correspond à la bonne rubrique

### 3. Structure d'un article

```html
<article class="article-page">
    <a href="index.html" class="back-link">← Retour à l'accueil</a>
    
    <div class="article-header">
        <span class="article-category">Catégorie</span>
        <h1>Titre de l'article</h1>
        <div class="article-meta">
            <span>📅 Date</span>
            <span>✍️ Auteur</span>
            <span>⏱️ Temps de lecture</span>
        </div>
    </div>

    <div class="article-body">
        <!-- Votre contenu ici -->
        <p>Paragraphe d'introduction...</p>
        
        <h2>Titre de section</h2>
        <p>Contenu...</p>
        
        <h3>Sous-titre</h3>
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
        </ul>
    </div>
</article>
```

### 4. Modifier la page d'accueil

Dans `index.html`, vous pouvez :
- Modifier le titre et la description dans la section hero
- Ajouter/modifier les articles à la une dans `.featured-grid`
- Personnaliser les catégories dans `.categories-section`

### 5. Personnalisation des couleurs

Les couleurs principales sont définies dans `styles.css` au début du fichier :

```css
:root {
    --primary-color: #1a2332;      /* Couleur principale */
    --secondary-color: #667eea;    /* Couleur secondaire */
    --accent-color: #f5576c;       /* Couleur d'accentuation */
    --text-dark: #1a1a2e;          /* Texte foncé */
    --text-light: #6b7280;         /* Texte clair */
}
```

## 📋 Pages à créer

Voici la liste des pages mentionnées dans le menu qui doivent encore être créées :

### Rubrique Info
- ✅ `info-formations.html` (template créé)
- ⏳ `info-erasmus.html`
- ⏳ `info-musee.html`

### Rubrique Event
- ⏳ `event-bde.html`
- ⏳ `event-tournois.html`
- ✅ `event-sport.html` (créé avec contenu)

### Rubrique Article
- ⏳ `article-debouches.html`
- ⏳ `article-alumni.html`
- ⏳ `article-secteur.html`

## 💡 Conseils pour la rédaction

### Bon article
- Titre accrocheur et clair
- Introduction engageante
- Structure avec titres et sous-titres (h2, h3)
- Paragraphes courts et lisibles
- Images ou exemples concrets
- Conclusion récapitulative

### Catégories disponibles
Utilisez ces styles de catégorie dans vos articles :
- **Vie Étudiante** : BDE, soirées, événements
- **Formations** : cours, SAE, pédagogie
- **International** : Erasmus, échanges
- **Carrière** : débouchés, métiers, alumni
- **Sport & Bien-être** : activités sportives
- **Technologie** : secteur informatique

## 🎯 Objectifs du projet

1. Créer un journal de communication interne
2. Mettre en valeur la vie étudiante à l'IUT
3. Informer sur les formations et débouchés
4. Partager les témoignages d'alumni
5. Publier le site en ligne

## 🔧 Technologies utilisées

- **HTML5** : structure des pages
- **CSS3** : design et animations
- **JavaScript** : interactions et animations
- **Google Fonts** : typographie (Bitter + Source Sans 3)

## 📱 Responsive Design

Le site s'adapte automatiquement aux différentes tailles d'écran :
- **Desktop** : affichage complet avec grilles
- **Tablette** : grilles adaptées
- **Mobile** : navigation simplifiée, colonnes uniques

## ✅ Checklist de publication

Avant de mettre en ligne le site :
- [ ] Tous les articles sont rédigés et relus
- [ ] Les liens dans le menu fonctionnent
- [ ] Les images sont optimisées
- [ ] Le formulaire de contact est fonctionnel (ajout backend si nécessaire)
- [ ] Le site est testé sur mobile et desktop
- [ ] Les informations de contact sont à jour
- [ ] Le copyright et les mentions légales sont corrects

## 🤝 Contribution

Chaque groupe d'étudiants peut contribuer en :
1. Rédigeant des articles sur leur sujet assigné
2. Proposant des améliorations du design
3. Ajoutant des photos ou illustrations
4. Corrigeant les fautes d'orthographe

## 📞 Contact

Pour toute question sur le site ou le projet :
- Email : journal.iut-info@univ-amu.fr
- Équipe de rédaction : Groupe de 3 rédacteurs par classe

---

**Projet réalisé par les étudiants de seconde année**  
**IUT Aix-Marseille Université - Département Informatique**  
**Janvier 2026**
