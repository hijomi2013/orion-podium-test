# Orion Podium Test

Projet de test separe du site Orion officiel.

Ne pas toucher au depot/site `Orion` de production depuis ce projet.

Site de test en ligne :
https://hijomi2013.github.io/orion-podium-test/

Depot GitHub :
https://github.com/hijomi2013/orion-podium-test

## Etat Valide

Les blocs suivants sont maintenant consideres comme bons :

- `Accueil` : page d'accueil finale validee.
- `Podium` : module Podium finalise visuellement et fonctionnellement pour cette phase.
- `Univers Verres` : acces Podium et module SAV en construction valides en local.
- `Univers Solaire` : catalogues Demetz, Oakley, Ray-Ban, Vuarnet et Bolle valides en local.

La suite du travail doit porter sur l'`Univers Lentilles`.

## Accueil

Fichiers :
- `accueil.html`
- `accueil.css`
- `accueil.js`

Visuel valide :
- 3 tuiles premium : Lentilles / Verres / Solaire.
- Fond : `assets/ui/accueil-background-test.jpg`.
- Logo : `assets/ui/logo-orion-complet.png`.
- Images cartes :
  - `assets/ui/accueil-lentilles.jpg`
  - `assets/ui/accueil-verres.webp`
  - `assets/ui/accueil-solaire.avif`

Interaction validee :
- cartes retournees au clic, pas au survol ;
- une seule carte ouverte a la fois ;
- quand une nouvelle carte s'ouvre, l'ancienne se referme avec un leger decalage ;
- univers `Verres` actif avec acces `Podium` et modale `SAV` ;
- univers `Solaire` actif avec modales catalogues ;
- univers `Lentilles` encore a construire.

Attention : ces fichiers et assets d'accueil peuvent etre non suivis localement selon l'etat Git. Ne pas les supprimer ni les remplacer sans verification.

## Univers Verres

Etat valide local :
- bouton `Podium` actif depuis la carte Verres ;
- bouton `SAV` actif avec modale image ;
- image SAV : `assets/verres/sav-construction.png`.

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

## Univers Lentilles

Etat :
- a construire maintenant.
- les boutons `Offre`, `Garantie`, `Produits` et `Offres 3+1` sont encore des entrees d'attente.

## Podium

Fichiers :
- `index.html` : entree GitHub Pages.
- `podium.html` : version directe de la page Podium.
- `podium.css` : style complet.
- `podium.js` : logique CSV, navigation, bulles, prix, panneau pedagogique et modales.

Etat valide :
- fond harmonise avec l'accueil ;
- logo et texte Orion retires de la page Podium ;
- mise en page a deux vrais blocs : panneau pedagogique a gauche, verres a droite ;
- boutons `Essilor One` et `Delai Proximity` conserves en retrait ;
- rendu principal ajuste pour ecrans PC Full HD `1920x1080` et 2K ;
- responsive ajoute pour eviter les collisions sur largeurs plus petites ;
- bulles de verres fluidifiees sans casser les liaisons prix/matiere/traitement/pedagogie ;
- les options matiere/traitement indisponibles ne sont plus affichees en grise ;
- mode Reseaux espace correctement les sous-boutons ;
- police simplifiee et harmonisee ;
- modales contraintes sans scroll interne visible.

Donnees :
- `data/verres-template.csv` pilote les verres, prix, matieres, traitements, reseaux et references.
- `data/pedagogie-template.csv` pilote le panneau pedagogique et les images de detail.

Regle importante : ne pas modifier la logique CSV a l'aveugle. Les bulles sont reliees aux prix, traitements, matieres, options photochromiques et au panneau pedagogique.

## Assets

Le dossier `assets/` contient des ressources partagees entre Accueil, Podium et possiblement d'autres pages.

Ne rien supprimer sans recherche prealable dans le projet.

En particulier, verifier les usages avant de toucher aux fichiers dans :
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

URL de test :
https://hijomi2013.github.io/orion-podium-test/

## Notes Locales

Source officielle locale actuelle :
`C:\Users\hijom\Documents\GitHub\orion-podium-test`

Ce dossier est celui que GitHub Desktop doit afficher comme `orion-podium-test`.

Ne plus utiliser les anciens dossiers locaux `New project`, `orion-podium-test-publish`, `orion-podium-test-deploy` ou `OrionV3` : ils etaient des copies de travail.

Dernier etat fonctionnel verifie :
- branche `main` alignee avec `origin/main` avant validation des univers Verres/Solaire ;
- dernier commit pousse avant cette mise a jour : `8da51f9` (`Bust Essilor One image cache`) ;
- `index.html` sert l'accueil sur GitHub Pages ;
- `podium.html` reste la page directe du module Podium ;
- `accueil.html`, `accueil.css`, `accueil.js` representent l'accueil valide avec Verres et Solaire actifs.
