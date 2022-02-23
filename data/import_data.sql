BEGIN;

ALTER TABLE "movie_is_genre"
    DROP CONSTRAINT movie_is_genre_pkey;

INSERT INTO "country" ("id", "name") VALUES
(1, 'Royaume Uni'),
(2, 'Russie'),
(3, 'Norvège'),
(4, 'Corrée du Sud'),
(5, 'États Unis'),
(6, 'Australie');

INSERT INTO "genre" ("id", "name") VALUES
(1, 'Drame'),
(2, 'Musical'),
(3, 'Science-Fiction'),
(4, 'Historique'),
(5, 'Guerre'),
(6, 'Policier'),
(7, 'Thriller'),
(8, 'Romance'),
(9, 'Comédie dramatique'),
(10, 'Western');

INSERT INTO "season" ("id", "year") VALUES
(1, 2020),
(2, 2021),
(3, 2022);

INSERT INTO "user" ("id", "pseudo") VALUES
(1, 'Mat-Mat'),
(2, 'Yves Signal'),
(3, 'ajcrou'),
(4, 'Miku'),
(5, 'Mordicus');

INSERT INTO "movie" 
    ("id",
        "french_title",
        "original_title",
        "directors",
        "release_year",
        "linguage",
        "length",
        "cast",
        "presentation",
        "season_id",
        "user_id") VALUES
(1, 'Les Chaussons Rouges', 'The Red Shoes', '{"Michael Powell", "Emeric Pressburger"}', 1949, 'Anglais', 135,
    '{"Moira Shearer", "Marius Goring", "Anton Walbrook"}', 'Je propose de regarder les chaussons rouges. Film de Powell et Pressburger (D''ailleurs vous pouvez vous jeter sur leurs autres films, Narcisse Noir, Le voyeur, ... Y''a rien à jeter). Pourquoi ? Parce qu''il est superbe. Que la scène du ballet, je ne m''en suis jamais vraiment remis. Voilà... J''espère que ça vous plaira autant qu''à moi !',
    1, 1),
(2, 'Stalker', 'Сталкер', '{"Andreï Tarkovski"}', 1981, 'Russe', 163,
    '{"Alexandre Kaidanovski", "Anatoli Solonitsyne", "Nikolai Grinko"}', '',
    1, 2),
(3, 'Ultimatum', 'Kongens Nei', '{"Erik Poppe"}', 2016, 'Norvégien', 133,
    '{"Jesper Christensen", "Anders Baasmo Christiansen", "Tuva Novotny"}', 'J''ai décidé de vous proposer un film qui me paraît intéressant et un minimum original (et d''une qualité honorable dans sa réalisation / acteurs) tout en explorant un fait essentiel de l''Histoire norvégienne (et indirectement de la WWII) avec le film : Kongens nei (Erik Poppe - 2016). Ultimatum en français. Je conseille fortement de le visionner en VO sous-titrée en français (ou autre), car le film est centré notamment sur le personnage du Roi Haakon VII d''origine danoise (élément essentiel pour comprendre certains aspects du propos historique) et l''acteur Jesper Christensen fait un très bon boulot pour parler justement le norvégien avec un certain accent danois.
    Je ne veux pas détailler davantage pour laisser la découverte, en sachant que je proposerais à l''issus de la semaine de visionnage une petite analyse historique pour aller plus loin et mieux appréhender les faits explorés par le film.',
    1, 3),
(4, 'The Rover', 'The Rover', '{"David Michôd"}', 2014, 'Anglais', 100,
    '{"Guy Pearce", "Robert Pattinson", "Scott McNairy"}', 'Et le premier film de cette nouvelle saison est un film avec le beau Bob Pattinson, à mes yeux l''un des acteurs les plus talentueux de ma génération.
    Certes on peut rappeler ses débuts de carrière dans une adaptation de roman pour enfant puis un young adult aussi cringe que ridicule, mais c''est oublier que Pattinson se construit depuis une dizaine d''année une solide carrière pleine de rôles atypiques et surtout extrêmement varié.
    L''idée cette semaine c''est d''aller piocher deux de ses rôles les plus récents, loin du ronflant d''une carrière américaine "à la papa" chez James Gray (The Lost City of Z) ou l''an dernier chez Christopher Nolan (Tenet). The Rover de David Michôd (2014), western apocalyptique australien où il côtoie ce bon vieux Guy Pearce, en complète perdition ces dernières années.
    Un film boudé en salles française, mais qui a son succès d''estimes et semblent s''inscrire dans la mouvance des westerns contemporains sales et méchants.',
    2, 2);


INSERT INTO "movie_is_genre" ("id", "movie_id", "genre_id") VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 3, 4),
(6, 3, 5),
(7, 4, 1),
(7, 4, 10);

INSERT INTO "movie_from_country" ("id", "movie_id", "country_id")VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 6);

INSERT INTO "review" ("id", "bookmarked", "liked", "note", "comment", "movie_id", "user_id") VALUES
(1, false, true, 9, 'Ce film est génial.', 1, 1),
(2, false, false, 6, 'Franchement pas ouf ce film, je me suis carrément ennuyé...', 2, 3);
INSERT INTO "review" ("id", "bookmarked", "liked", "movie_id", "user_id") VALUES
(3, true, false, 2, 2);

ALTER TABLE "movie_is_genre"
    ADD FOREIGN KEY ("movie_id") REFERENCES "movie"("id");

COMMIT;