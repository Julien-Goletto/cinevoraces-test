require('dotenv').config();
const movieController = require('./app/controllers/movieController');

/**
 * Tests unitaires des méthodes dépendantes de sequelize
 */
const test = async function () {

    //Test 1
    // const movies = await movieController.findAllMovies();

    //Test 2
    // const movies = await movieController.findMovieById(1);

    //Test 3
    // const movies = await mainController.findAllMoviesBySeasonId(1);

    //Test 4
    // const movies = await movieController.findAllMoviesByCountryId(2);

    //Test 5
    const movies = await movieController.findAllMoviesByGenreId(2);

    //Affichage des données
    console.log(movies);
}

test();