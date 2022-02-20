BEGIN;

DROP TABLE IF EXISTS "movie",
"user",
"review",
"season",
"genre",
"country",
"movie_from_country",
"movie_is_genre";


CREATE TABLE "movie" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "french_title" TEXT NOT NULL,
    "original_title" TEXT NOT NULL,
    "directors" TEXT[] NOT NULL,
    "release_year" integer NOT NULL,
    "linguage" TEXT NOT NULL,
    "length" integer NOT NULL,
    "cast" TEXT[] NOT NULL,
    "presentation" TEXT,
    "season_id" integer NOT NULL,
    "user_id" integer NOT NULL,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz
);

CREATE TABLE "user" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "pseudo" TEXT NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "avatar" TEXT,
    "newsletter_subscription" BOOLEAN,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz
);

CREATE TABLE "review" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "bookmarked" BOOLEAN,
    "liked" BOOLEAN,
    "note" integer,
    "comment" TEXT,
    "movie_id" integer NOT NULL,
    "user_id" integer NOT NULL,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz
);

CREATE TABLE "season" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "year" integer NOT NULL,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz
);

CREATE TABLE "genre" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz
);

CREATE TABLE "country" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz
);

ALTER TABLE "movie"
    ADD FOREIGN KEY ("season_id") REFERENCES "season"("id"),
    ADD FOREIGN KEY ("user_id") REFERENCES "user"("id");

ALTER TABLE "review"
    ADD FOREIGN KEY ("movie_id") REFERENCES "movie"("id"),
    ADD FOREIGN KEY ("user_id") REFERENCES "user"("id");

CREATE TABLE IF NOT EXISTS "movie_from_country" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "movie_id" integer NOT NULL REFERENCES "movie"("id"),
    "country_id" integer NOT NULL REFERENCES "country"("id"),
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz,
    UNIQUE ("movie_id", "country_id")
);

CREATE TABLE IF NOT EXISTS "movie_is_genre" (
    "id" integer GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "movie_id" integer NOT NULL REFERENCES "movie"("id"),
    "genre_id" integer NOT NULL REFERENCES "genre"("id"),
    "createdAt" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" timestamptz,
    UNIQUE ("movie_id", "genre_id")
);

COMMIT;