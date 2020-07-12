const express = require('express');
const helmet = require('helmet');

const assignersRouter = require('../assigners/assigners-router.js');
// const tasksRouter = require('../tasks/tasks-router.js');

const server = express();
server.use('/api/assigners', assignersRouter); 
// server.use('/api/hubs/tasks', tasksRouter); 
server.use(helmet())

module.exports = server;