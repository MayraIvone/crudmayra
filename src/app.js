const express = require('express');
const path = require('path');
//const __dirname = path.resolve();
const morgan = require('morgan');
const app = express();
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//Importación de rutas
const personaRoutes = require('./routes/persona');

//Configuración
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//Funciones antes de las peticiones de usuario
app.use(morgan('dev'));
app.use(myConnection(mysql, {
    host:'localhost',
    user:'root',
    password:'1234',
    port:3306,
    database:'crud'
}, 'single'));

app.use(express.urlencoded({extended: false}));

//Rutas-Secciones del servidor
app.use('/', personaRoutes);

//Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));



app.listen(app.get('port'), () => {
    console.log('server on port 3000');
});