const express = require('express');
const server = express();
const apiRouter = require('./api/apiRouter');
const helmet = require('helmet');
const cors = require('cors');

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api', apiRouter)

module.exports = server;