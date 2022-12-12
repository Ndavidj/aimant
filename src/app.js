// Configuracion del archivo app.js

const express = require('express');
const app = express();

const path = require('path');

const mainRouter = require('./routes/mainRouter.js');

app.set('views', path.resolve(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', mainRouter);


app.listen(4200, ()=> {
    console.log('Server running on port http://localhost:4200');
})