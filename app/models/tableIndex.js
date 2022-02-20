const Country = require('./country');
const Genre = require('./genre');
const Movie = require('./movie');
const Review = require('./review');
const Season = require('./season');
const User = require('./user');

// Relations 11 et 1N
User.hasMany(Movie, {
    foreignKey: "user_id",
    as : "recommendedMovies"
});
Movie.belongsTo(User, {
    foreignKey: "user_id",
    as : "recommendedByUser"
});

User.hasMany(Review, {
    foreignKey: "user_id",
    as : "reviewedMovies"
});
Review.belongsTo(User, {
    foreignKey: "user_id",
    as : "reviewedByUser"
});

Movie.hasMany(Review, {
    foreignKey: "movie_id",
    as : "associatedReviews"
});
Review.belongsTo(Movie, {
    foreignKey: "movie_id",
    as : "aboutMovie"
});

Season.hasMany(Movie, {
    foreignKey: "season_id",
    as : "seasonMovies"
});
Movie.belongsTo(Season, {
    foreignKey: "season_id",
    as : "inSeason"
});

//Many to many
Movie.belongsToMany(Genre, {
    as: "movieGenres",
    through: "movie_is_genre",
    foreignKey : "movie_id",
    otherKey : "genre_id"
});
Genre.belongsToMany(Movie, {
    as: "moviesFromGenre",
    through: "movie_is_genre",
    foreignKey : "genre_id",
    otherKey : "movie_id"
});

Movie.belongsToMany(Country, {
    as: "producedByCountries",
    through: "movie_from_country",
    foreignKey : "movie_id",
    otherKey : "country_id"
});
Country.belongsToMany(Movie, {
    as: "moviesFromCountry",
    through: "movie_from_country",
    foreignKey : "country_id",
    otherKey : "movie_id"
});

module.exports = {Country, Genre, Movie, Review, Season, User};