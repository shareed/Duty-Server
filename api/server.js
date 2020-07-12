const express = require('express');
const helmet = require('helmet');

const assignersRouter = require('../assigners/assigners-router.js');

const server = express();

server.use(express.json());

server.use('/api/assigners', assignersRouter); 
server.use(helmet())

module.exports = server;