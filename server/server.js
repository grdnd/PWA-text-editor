// load evnironment variables
require('dotenv').config();

// import node modules
const express = require('express');

// create app to configure express
const app = express();

// specify PORT
const PORT = process.env.PORT || 3000;

// use static to serve static files
app.use(express.static('../client/dist'));

// recognize the incoming request object as strings or arrays
app.use(express.urlencoded({ extended: true }));

// allow app to receive json formatted data
app.use(express.json());

// require routes directory
require('./routes/htmlRoutes')(app);

// verify server status
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
