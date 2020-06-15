const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();

server.use(express.json());

//router work
const accountRouter = require('../accounts/accountsRouter');
server.use('/api/accounts', accountRouter)


server.get('/', (req, res) => {
    res.send('Server is running');
});

module.exports = server;
