const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');


// Conectarse a la base de datos
mongoose.connect('mongodb://localhost:27017/coursesdb');
const db = mongoose.connection;

// Manejando los errores
db.on('error', (err) => {
    console.log(err);
});

db.once('open', () =>  {
    console.log('MongoDB connection is established!!');
});

// Se empieza a ejecutar la aplicación
const app = express();

// Settings
app.set('port', 3000); // Funciona como una variable global
app.set('json spaces', 2);



// Middlewares
// Se aplican antes de que el servidor realice las distintas acciones
app.use(morgan('dev')); // Un Log de lo que sucede en el server
app.use(express.urlencoded({extended: false})); // Solo manejar datos sencillos
app.use(express.json());

//routes
app.use('/api', require('./routes/rt'));


// Se despliega el servidor en el puerto 3000 y se ejecuta una función
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
})
