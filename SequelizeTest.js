require('dotenv').config();
const mainController = require('./app/controllers/mainController');

const test = async function () {

    //Test 1
    // const movies = await mainController.findAllMovies();

    //Test 2
    // const movies = await mainController.findMovieById(1);

    //Test 3
    // const movies = await mainController.findAllMoviesBySeasonId(2);

    //Test 4
    const movies = await mainController.findAllMoviesByCountryId(6);

    //Test 5
    // const movies = await mainController.findAllMoviesByGenreId(2);

    //Affichage des données
    console.log(movies);
}

test();