# Architecture du site

Le site fonctionne avec le SGBD postgreSQL.

## Besoins

Détaillons l'organisation des données. Le symbole * signifie que la donnée est obligatoire

* Table <strong>Movie</strong> avec l'ensemble des films soumis et les données :
    * id*
    * Titre VF*
    * Titre VO
    * Réalisateur(s)*
    * Genre(s)*
    * Année de sortie*
    * Pays*
    * Langue*
    * Durée*
    * Casting*
    * Soumis par*
    * Présentation*

* Table <strong>User</strong> avec tous les utilisateurs :
    * id*
    * Pseudo*
    * Mail*
    * PW*
    * Avatar
    * Abonnement NL ?*

* Table <strong>Season</strong> avec les saisons :
    * id*
    * année*

* Table <strong>Review</strong> avec les intéractions :
    * id
    * bookmarked
    * liked
    * note
    * comment

* Table <strong>Genre</strong> avec les genres :
    * id
    * name

## MCD

[Mocodo](http://mocodo.wingi.net/)

```mocodo
Crée, 0N USER, 11 REVIEW
USER : id, Pseudo, Mail, PW, Avatar, Abonnement ML
Recommande, 0N USER, 11 MOVIE
SEASON : id, Année

REVIEW : id, Bookmarked, Liked, Note, Comment
Caractérise, 11 REVIEW, 0N MOVIE
MOVIE : id, Titre VF, Titre VO, Réalisateur(s), Année de sortie, Langue, Durée, Casting, Présentation
Dans, 1N SEASON, 11 MOVIE

COUNTRY: id, name
Vient de, 0N COUNTRY, 1N MOVIE
Appartient, 0N GENRE, 1N MOVIE
GENRE : id, nom
```

## Clés étrangères :

* movie :
    * season_id
    * user_id

* review :
    * user_id
    * movie_id

## Tables pivots
* movie_from_country
* movie is genre

