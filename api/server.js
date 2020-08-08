const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const authRouter = require("../auth/auth-router.js");
const assignersRouter = require('../assigners/assigners-router.js');
const assignersTasksRouter = require('../tasks/tasks-router');

const server = express();



//Builtin Middleware

server.use(express.json());

//Third Party middleware
server.use(cors())
server.use(helmet())






server.use("/auth", authRouter);
server.use('/duty', assignersRouter); 
server.use('/assignertasks', assignersTasksRouter);

module.exports = server;