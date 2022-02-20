BEGIN;

ALTER TABLE "movie_is_genre"
    DROP CONSTRAINT movie_is_genre_pkey;

INSERT INTO "country" ("id", "name") VALUES
(1, 'Royaume Uni'),
(2, 'Russie'),
(3, 'Norvège'),
(4, 'Corrée du Sud'),
(5, 'États Unis');

INSERT INTO "genre" ("id", "name") VALUES
(1, 'Drame'),
(2, 'Musical'),
(3, 'Science-Fiction'),
(4, 'Historique'),
(5, 'Guerre'),
(6, 'Policier'),
(7, 'Thriller'),
(8, 'Romance'),
(9, 'Comédie dramatique');

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
    1, 3);

INSERT INTO "movie_is_genre" ("id", "movie_id", "genre_id") VALUES
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 2, 3),
(5, 3, 4),
(6, 3, 5);

INSERT INTO "movie_from_country" ("id", "movie_id", "country_id")VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3);

INSERT INTO "review" ("id", "bookmarked", "liked", "note", "comment", "movie_id", "user_id") VALUES
(1, false, true, 9, 'Ce film est génial.', 1, 1),
(2, false, false, 6, 'Franchement pas ouf ce film, je me suis carrément ennuyé...', 2, 3);
INSERT INTO "review" ("id", "bookmarked", "liked", "movie_id", "user_id") VALUES
(3, true, false, 2, 2);

ALTER TABLE "movie_is_genre"
    ADD FOREIGN KEY ("movie_id") REFERENCES "movie"("id");

COMMIT;