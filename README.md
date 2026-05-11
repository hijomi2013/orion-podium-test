# Orion Podium Test

Projet de test separe du site Orion officiel.

Ne pas toucher au depot/site `Orion` de production depuis ce projet.

Site de test en ligne :
https://hijomi2013.github.io/orion-podium-test/

Depot GitHub :
https://github.com/hijomi2013/orion-podium-test

## Etat Valide

Deux blocs sont maintenant consideres comme bons :

- `Accueil` : page d'accueil finale validee.
- `Podium` : module Podium finalise visuellement et fonctionnellement pour cette phase.

La suite du travail doit porter sur les connexions entre les pages/modules.

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
- aucun lien actif pour l'instant.

Attention : ces fichiers et assets d'accueil peuvent etre non suivis localement selon l'etat Git. Ne pas les supprimer ni les remplacer sans verification.

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
- `assets/lens/`

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
- branche `main` alignee avec `origin/main` avant modification locale du README ;
- dernier commit pousse pour Podium : `bcf9efa` (`Improve podium responsive fallback`) ;
- `index.html` et `podium.html` alignes pour GitHub Pages ;
- `accueil.html`, `accueil.css`, `accueil.js` existent localement et representent l'accueil valide.
