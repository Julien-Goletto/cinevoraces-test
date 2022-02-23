require('dotenv').config();
const movieController = require('./app/controllers/movieController');
const reviewController = require('./app/controllers/reviewController');

/**
 * Tests unitaires des méthodes dépendantes de sequelize
 */
const test = async function () {

    // 1 - Tests de movieController----------------------------------------------------------------------------------------
    const data = await movieController.findAllMovies();
    // const data = await movieController.findMovieById(1);
    // const data = await mainController.findAllMoviesBySeasonId(1);
    // const data = await movieController.findAllMoviesByCountryId(2);
    // const data = await movieController.findAllMoviesByGenreId(2);

    // 2 - Tests de reviewController----------------------------------------------------------------------------------------
    // const data = await reviewController.findAllReviews();

    //Affichage des données
    console.log(data);
}

test();