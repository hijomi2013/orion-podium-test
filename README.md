# Orion Podium Test

Projet de test separe du site Orion officiel. Ne pas toucher au depot/site `Orion` de production.

Site de test en ligne :
https://hijomi2013.github.io/orion-podium-test/

Depot GitHub :
https://github.com/hijomi2013/orion-podium-test

## Etat Actuel

Cette page correspond au module `Podium`.

La mecanique principale est en place :
- navigation principale : Marche libre, Reseaux, Devis, Forfait 2eme paire ;
- sous-navigation selon la section : reseaux, progressifs/unifocaux, forfaits, etc. ;
- bulles de verres avec ouverture au clic ;
- choix matiere, traitement et photochromique selon disponibilites du CSV ;
- prix standard visibles directement ;
- cas Santeclair : boutons Versailles / LVDB / Autres, prix affiche seulement apres clic ;
- panneau pedagogique relie au CSV pedagogique ;
- clic sur une carte du panneau pedagogique : ouverture d'une modal avec l'image detaillee ;
- effet de survol des cartes pedagogiques conserve apres navigation et rerender du panneau ;
- boutons rapides en haut a droite :
  - `Essilor One`, avec modal image `assets/ui/essilor-one.png` ;
  - `Delai Proximity`, avec modal image `assets/ui/proximity.png` ;
- les modals rapides sont contraintes pour tenir dans un ecran 21,5 pouces Full HD sans scroll.

Etat de fin de phase :
- la page `Podium` est consideree comme terminee pour l'instant ;
- les prochains travaux doivent partir sur une base saine autour de la page d'accueil Orion ;
- `Podium` doit etre considere comme un module a integrer dans un projet Orion plus large, sans modifier le site Orion principal.

## Fichiers Principaux

- `index.html` : entree GitHub Pages.
- `podium.html` : meme page que `index.html`, gardee pour lecture directe.
- `podium.css` : style complet de la page.
- `podium.js` : logique de navigation, chargement CSV, bulles, prix, panneau pedagogique et modals.
- `data/verres-template.csv` : base des verres, prix, matieres, traitements, reseaux et references.
- `data/pedagogie-template.csv` : contenu du panneau pedagogique et images de modal.
- `assets/` : images, pictos, police et ressources visuelles.

## Architecture Prevue

Le projet Orion complet doit etre pense comme un ensemble de modules relies par une page d'accueil.

Schema logique actuel :
- `Accueil` : future page centrale de navigation ;
- `Podium` : premier module termine pour l'instant ;
- autres modules : a definir et construire plus tard.

La prochaine etape prevue est la construction de la page d'accueil. Elle devra pointer vers le module `Podium` et preparer l'ajout de futurs modules.

## Regle Des CSV

`data/verres-template.csv` pilote les bulles de verres.

`data/pedagogie-template.csv` pilote le panneau pedagogique. Les correspondances se font par cle :
- pour le type de verre : `categorie=type_verre` et `cle` doit correspondre au `nom_verre` du CSV verres ;
- pour la matiere : `categorie=matiere` et `cle` doit correspondre a la valeur de `matiere` ;
- pour le traitement : `categorie=traitement` et `cle` doit correspondre a la valeur de `traitement` ;
- pour l'option photochromique : utiliser la cle/categorie prevue dans le CSV pedagogique.

Les images indiquees dans le CSV pedagogique doivent exister dans `assets/`.

## Workflow

Pour modifier les donnees :
1. modifier les CSV dans `data/` ;
2. ajouter les images necessaires dans `assets/` ;
3. verifier que les cles correspondent bien ;
4. commit/push sur `main` ;
5. attendre GitHub Pages, puis tester :
   https://hijomi2013.github.io/orion-podium-test/

## Notes Pour La Suite

Source officielle locale actuelle :
`C:\Users\hijom\Documents\GitHub\orion-podium-test`

Ce dossier est celui que GitHub Desktop doit afficher comme `orion-podium-test`.

Ne plus utiliser les anciens dossiers locaux `New project`, `orion-podium-test-publish`, `orion-podium-test-deploy` ou `OrionV3` : ils etaient des copies de travail.

Dernier etat verifie :
- branche locale `main` alignee avec `origin/main` ;
- remote GitHub : `https://github.com/hijomi2013/orion-podium-test` ;
- dernier commit fonctionnel avant passation : `3b3656f` (`Fit quick modals to viewport`) ;
- fichiers `index.html` et `podium.html` alignes pour GitHub Pages ;
- attention : ne jamais toucher au depot/site Orion principal depuis ce projet test.
