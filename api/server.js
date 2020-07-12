const express = require('express');
const helmet = require('helmet');

const authRouter = require("../auth/auth-router.js");
const assignersRouter = require('../assigners/assigners-router.js');

const server = express();

server.use(express.json());

server.use("/auth", authRouter);
server.use('/api/assigners', assignersRouter); 
server.use(helmet())

module.exports = server;