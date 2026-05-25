# Orion

Site Orion public actuel, issu de la bascule du depot de test `orion-podium-test`.

Ancien site conserve pour Planning :
https://hijomi2013.github.io/orion-old/

Site en ligne :
https://hijomi2013.github.io/orion/

Depot GitHub :
https://github.com/hijomi2013/orion

## Etat Valide

Les blocs suivants sont maintenant consideres comme termines pour le site public :

- `Accueil` : page d'accueil finale validee.
- `Podium` : module Podium finalise visuellement et fonctionnellement.
- `Univers Verres` : acces Podium et module SAV en construction valides.
- `Univers Solaire` : catalogues Demetz, Oakley, Ray-Ban, Vuarnet et Bolle valides.
- `Univers Lentilles` : contenus integres en modales depuis l'accueil, avec offre marques et offre 3+1 valides.
- `Espace Directeur` : acces discret ajoute sur l'accueil, avec Planning et Encaissements en construction.

Important : ce depot est maintenant le site Orion public. L'ancien depot/site est conserve en `orion-old` pour laisser fonctionner Planning.

La suite ne doit plus etre une phase de construction lourde. Les prochaines interventions attendues sont seulement des ajustements d'agencement, de proportions, de positionnement, de lisibilite ou de remplacement ponctuel d'assets.

## Etat Post-Bascule

Etat de bascule verifie le 25/05/2026 :

- GitHub Pages sert bien l'accueil sur `https://hijomi2013.github.io/orion/`.
- L'ancien site Planning reste disponible sur `https://hijomi2013.github.io/orion-old/`.
- `index.html` sert l'accueil sur GitHub Pages.
- `podium.html` reste la page directe du module Podium.
- Aucun asset reference par HTML/CSS/JS/CSV n'est detecte comme manquant.
- Aucun probleme de casse de chemin n'est detecte pour GitHub Pages.
- Aucun doublon d'ID HTML detecte sur les pages principales.
- Les CSS principaux ont une structure d'accolades valide.
- `Planning` reste en construction sur ce site en ligne.

Attention locale importante :
- Des fichiers `planning.html`, `planning.css`, `planning.js` peuvent exister localement pour la suite du projet.
- Ces fichiers Planning ne doivent pas etre inclus dans le site public tant que le module Planning n'est pas explicitement valide.
- Si des changements locaux relient le bouton Directeur `Planning` a `planning.html`, ne pas les pousser. Le site en ligne doit garder `Planning` en modale construction.

## Accueil

Fichiers :
- `accueil.html`
- `accueil.css`
- `accueil.js`

Visuel valide :
- 3 tuiles premium : Lentilles / Verres / Solaire.
- Fond actif : `assets/ui/accueil-background-marble.png`.
- Ancien fond conserve : `assets/ui/accueil-background-test.jpg`.
- Logo : `assets/ui/logo-orion-complet.png`.
- Favicon : `assets/ui/favicon.png`.
- Images cartes :
  - `assets/ui/accueil-lentilles.jpg`
  - `assets/ui/accueil-verres.webp`
  - `assets/ui/accueil-solaire.avif`

Statut : termine. Ne pas reconstruire la page ; faire uniquement des ajustements ponctuels si demandes.

Interaction validee :
- cartes retournees au clic, pas au survol ;
- une seule carte ouverte a la fois ;
- quand une nouvelle carte s'ouvre, l'ancienne se referme avec un leger decalage ;
- animation de survol ajoutee sur les bulles cliquables ;
- univers `Verres` actif avec acces `Podium` et modale `SAV` ;
- univers `Solaire` actif avec modales catalogues ;
- univers `Lentilles` actif avec modales `Offre`, `Garantie`, `Produits` et `Offres 3+1` ;
- modale `Offre` avec boutons Alcon, Johnson & Johnson, Bausch & Lomb, Ophtalmic et Coopervision ;
- modale `Offres 3+1` avec boutons Precision One, Total One, Moist, Oasys et Oasys Max ;
- boutons internes des modales Lentilles harmonises avec le style des boutons Podium, adaptes a la palette Lentilles ;
- acces `Directeur` en pastille discrete en haut a droite, avec `Planning` et `Encaissements` relies a la modale en construction.

Attention : `index.html` sert actuellement l'accueil sur GitHub Pages. `accueil.html` reste une copie directe de la page d'accueil pour ouverture locale ou comparaison.

## Univers Verres

Etat valide local :
- bouton `Podium` actif depuis la carte Verres ;
- bouton `SAV` actif avec modale image ;
- image SAV : `assets/verres/sav-construction.png`.

Statut : termine cote accueil/navigation. Les changements restants doivent rester des ajustements fins.

## Univers Solaire

Etat valide local :
- boutons solaires actifs depuis la carte Solaire ;
- ouverture en modale des visuels/catalogues ;
- marques presentes : Demetz, Oakley, Ray-Ban, Vuarnet, Bolle.

Assets :
- `assets/solaire/demetz.jpg`
- `assets/solaire/oakley.png`
- `assets/solaire/rayban.jpg`
- `assets/solaire/vuarnet.jpg`
- `assets/solaire/bolle.png`

Statut : termine. Les prochaines modifications devraient se limiter a de l'agencement ou a un remplacement d'image.

## Univers Lentilles

Etat :
- boutons actifs depuis la carte Lentilles ;
- `Offre`, `Garantie`, `Produits` et `Offres 3+1` ouvrent des images en modale ;
- `Offre` affiche les visuels par marque avec boutons internes ;
- `Offres 3+1` affiche les visuels par gamme avec boutons internes, Moist ouvert par defaut ;
- les boutons internes des modales `Offre` et `Offres 3+1` reprennent le concept visuel des boutons Podium, avec la couleur du verso Lentilles et un etat actif bien visible.

Assets :
- `assets/lentilles/garantie-lentille.png`
- `assets/lentilles/entretien-lentille.png`
- `assets/lentilles/offre/alcon.png`
- `assets/lentilles/offre/johnson.png`
- `assets/lentilles/offre/bauschlomb.png`
- `assets/lentilles/offre/ophtalmic.png`
- `assets/lentilles/offre/coopervision.png`
- `assets/lentilles/offre3plus1/precision-one.png`
- `assets/lentilles/offre3plus1/total-one.png`
- `assets/lentilles/offre3plus1/moist.png`
- `assets/lentilles/offre3plus1/oasys.png`
- `assets/lentilles/offre3plus1/oasys-max.png`

Statut : termine. Les changements restants devraient etre des remplacements ponctuels d'images ou des ajustements de placement.

## Espace Directeur

Etat :
- acces discret en pastille sur l'accueil, en haut a droite ;
- ouverture d'un petit panneau avec `Planning` et `Encaissements` ;
- les deux entrees ouvrent pour l'instant la modale en construction.
- pour l'instant, conserver `Planning` en construction sur ce site.

Asset utilise :
- `assets/verres/sav-construction.png`

## Podium

Fichiers :
- `index.html` : entree GitHub Pages.
- `podium.html` : version directe de la page Podium.
- `podium.css` : style complet.
- `podium.js` : logique CSV, navigation, bulles, prix, panneau pedagogique et modales.

Etat valide :
- fond harmonise avec l'accueil ;
- fond actif : `assets/ui/accueil-background-marble.png` ;
- logo et texte Orion retires de la page Podium ;
- mise en page a deux vrais blocs : panneau pedagogique a gauche, verres a droite ;
- boutons `Essilor One` et `Delai Proximity` conserves en retrait ;
- rendu principal ajuste pour ecrans PC Full HD `1920x1080` et 2K ;
- responsive ajoute pour eviter les collisions sur largeurs plus petites ;
- bulles de verres fluidifiees sans casser les liaisons prix/matiere/traitement/pedagogie ;
- les options matiere/traitement indisponibles ne sont plus affichees en grise ;
- mode Reseaux espace correctement les sous-boutons ;
- police simplifiee et harmonisee ;
- modales contraintes sans scroll interne visible ;
- bulle photochromique avec icone soleil/lune et tooltip `Photochromique` ;
- les interactions dans une bulle de verre ne relancent plus l'animation du panneau pedagogique.

Statut : termine. Ne pas refaire la structure Podium ; intervenir seulement sur des ajustements de mise en page, de taille, de placement, de lisibilite ou de contenu.

Donnees :
- `data/verres-template.csv` pilote les verres, prix, matieres, traitements, reseaux et references.
- `data/pedagogie-template.csv` pilote le panneau pedagogique et les images de detail.

Regle importante : ne pas modifier la logique CSV a l'aveugle. Les bulles sont reliees aux prix, traitements, matieres, options photochromiques et au panneau pedagogique.

## Assets

Le dossier `assets/` contient des ressources partagees entre Accueil, Podium et possiblement d'autres pages.

Nettoyage effectue :
- suppression des anciennes images/logos et polices non references ;
- suppression de l'ancienne image unique de l'offre 3+1, remplacee par les 5 visuels ranges dans `assets/lentilles/offre3plus1/` ;
- verification statique : aucun asset restant n'est detecte comme orphelin.

Assets importants ajoutes ou valides :
- `assets/ui/accueil-background-marble.png` : fond actif Accueil et Podium.
- `assets/ui/favicon.png` : icone du site.
- `assets/lentilles/garantie-lentille.png` : visuel garantie Lentilles.
- `assets/lentilles/entretien-lentille.png` : visuel entretien Lentilles.

Ne rien supprimer sans recherche prealable dans le projet.

En particulier, verifier les usages avant de toucher aux fichiers dans :
- `assets/lentilles/`
- `assets/ui/`
- `assets/pedagogie/`
- `assets/solaire/`
- `assets/verres/`

## Workflow Conseille

Pour la suite, travailler par petites etapes :

1. verifier les fichiers concernes avant modification ;
2. ne modifier que le module vise ;
3. tester en local ou sur GitHub Pages ;
4. commit/push sur `main` seulement quand l'etat est stable ;
5. attendre le deploiement GitHub Pages, puis verifier en ligne.
6. seulement apres validation explicite, connecter ou publier de nouveaux modules comme Planning.

Rappel important : les modules Accueil, Podium, Verres, Solaire et Lentilles sont termines. Ne pas proposer de refonte ni de nouvelle architecture sans demande explicite.

URL publique :
https://hijomi2013.github.io/orion/

## Notes Locales

Source officielle locale actuelle :
`C:\Users\hijom\Documents\GitHub\orion-podium-test`

Ce dossier est celui que GitHub Desktop doit afficher comme `orion-podium-test`.
Le remote GitHub doit pointer vers `https://github.com/hijomi2013/orion.git`.

Ne plus utiliser les anciens dossiers locaux `New project`, `orion-podium-test-publish`, `orion-podium-test-deploy` ou `OrionV3` : ils etaient des copies de travail.

Dernier etat fonctionnel verifie :
- branche `main` mise a jour avec Accueil, Lentilles, Solaire, Verres et acces Directeur ;
- `index.html` sert l'accueil sur GitHub Pages ;
- `podium.html` reste la page directe du module Podium ;
- `accueil.html`, `accueil.css`, `accueil.js` representent l'accueil valide avec Verres, Solaire, Lentilles et Directeur actifs ;
- la suite du travail doit etre traitee comme une phase de finition/agencement, pas comme une phase de construction.

## Prompt Nouvelle Conversation

```text
On travaille sur le site Orion public apres bascule.

Depot local source :
C:\Users\hijom\Documents\GitHub\orion-podium-test

Site public :
https://hijomi2013.github.io/orion/

Ancien site Planning :
https://hijomi2013.github.io/orion-old/

Important :
- Lire README.md avant de modifier quoi que ce soit.
- Ne pas refaire l'architecture.
- Accueil, Podium, Verres, Solaire et Lentilles sont la premiere partie validee.
- Planning reste utilise sur l'ancien site `orion-old`.
- Sur le nouveau site `orion`, Planning doit rester en modale construction pour l'instant.
- Si des fichiers locaux `planning.html`, `planning.css`, `planning.js` existent, les ignorer tant que Planning n'est pas explicitement valide.
- Si `index.html`, `accueil.html` ou `accueil.js` contiennent localement un lien vers `planning.html`, ne pas pousser ce changement.
- Le site public `orion` doit garder Planning et Encaissements en construction pour l'instant.

Pages principales :
- index.html sert l'accueil GitHub Pages.
- accueil.html est une copie directe de l'accueil.
- podium.html est la page directe Podium.
- accueil.css / accueil.js gerent l'accueil et les modales.
- podium.css / podium.js gerent le Podium.

Etat fonctionnel valide :
- Fond marbre actif sur Accueil et Podium : assets/ui/accueil-background-marble.png.
- Favicon actif : assets/ui/favicon.png.
- Tuiles Accueil validees : Lentilles / Verres / Solaire.
- Verso des tuiles : libelle "Espace".
- Mini acces Directeur en haut a droite.
- Planning et Encaissements doivent rester en construction pour l'instant.
- Modales Lentilles Offre et Offres 3+1 : boutons internes harmonises avec le style Podium et palette Lentilles.
- Modal Offres 3+1 : Precision One, Total One, Moist, Oasys, Oasys Max ; Moist par defaut.
- Podium : ne pas faire bouger le panneau pedagogique quand on touche une bulle verre ou ses options.
- Photochromique : icone soleil/lune avec tooltip Photochromique.

Tache de la conversation :
1. Verifier les fichiers concernes avant modification.
2. Exclure explicitement tout travail Planning non valide.
3. Verifier les assets, chemins, GitHub Pages et fichiers HTML/CSS/JS.
4. Commit/push uniquement quand l'etat est stable.
5. Ne faire aucune action destructive sans confirmation explicite.
```
