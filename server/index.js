const express = require('express');
const app = express();
const PORT = 3000;
const laodEnv = require('dotenv').config({ path: '.env' });
const { MongoClient } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.xbcxm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
    useUnifiedTopology: true
});
const testMongoDBConnection = require('./utils');

// Test mongodb connection
testMongoDBConnection(client);

// Server Static assets
app.use('/', express.static('../client/build'))

// Start Server
app.listen(PORT, () => {
    console.log(`Shaheen is listening at http://localhost:${PORT}`)
});