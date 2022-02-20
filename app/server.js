const path = require('path');
const express = require('express');
const router = require('./router');

require('dotenv').config({path: path.resolve(__dirname, '../.env')});
const port = process.env.PORT || 3000;
const host = process.env.HOST;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(path.join(__dirname, '../assets')));

app.use(router);

app.listen(port, () => {
    console.log(`Serveur démarré -> http://${host}:${port}}`);
});