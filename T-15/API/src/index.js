const express = require('express');
const morgan = require('morgan');
const cors = require('cors');



// Set the app
const app = express();

// config
app.set('port', 3000);
app.set('json spaces', 2);

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false})); // mensajes sencillos
app.use(express.json());

// API dominio/api/routes
app.use('/api', require('./routes/rt'));


// Execute server
app.listen(app.get('port'), ()=> {
    // Alert
    console.log('Server is ready BABY!!!');
});



