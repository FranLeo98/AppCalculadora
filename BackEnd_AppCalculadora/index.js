const express = require('express');
const morgan = require('morgan');
const app = express();

const {mongoose} = require ('./database')

// Configuraciones
app.set('port', process.env.PORT || 3000);
// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Rutas
app.use('/api/usuarios',require('./routes/usuario.route'));
// Inicio del servidor
app.listen(app.get('port'), () => {
    console.log ('La mama de trigo al', app.get('port'));
});