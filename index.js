require('dotenv').config();

const express = require('express');
const package = require('./package.json');
const router = require('./routes/routes');
const logic = require('./logic/index');

//defining port:
const { env: { PORT } } = process;
const port = PORT || 8080;

//creating and initializing our server:
try {
    const app = express();

    app.use('/api', router);

    app.listen(port, () => console.log(`${package.name} ${package.version} up and running on port ${port}`));
    
    //fetching data to work with it locally:
    logic.retrieveData();

} catch(err) {
    console.log(err);
};