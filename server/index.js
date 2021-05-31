const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const laodEnv = require('dotenv').config({ path: '.env' });
const PORT = process.env.PORT
const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xbcxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});
const testMongoDBConnection = require('./utils').testMongoDBConnection;
testMongoDBConnection(client);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const tiles = require('./routes/tiles');
const rooms = require('./routes/rooms');
const decor = require('./routes/decor');

app.use('/', express.static('../client/build'))

app.use('/tiles', tiles);
app.use('/rooms', rooms);
app.use('/decor', decor);
app.use('/assets', express.static('./assets'));

app.listen(PORT, () => {
    console.log(`Shaheen is listening at http://localhost:${PORT}`)
});
