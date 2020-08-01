const express = require('express');
const helmet = require('helmet');
var cors = require('cors')
const authRouter = require("../auth/auth-router.js");
const assignersRouter = require('../assigners/assigners-router.js');

const server = express();
server.use(cors())
server.use(express.json());

server.use("/auth", authRouter);
server.use('/duty', assignersRouter); 
server.use(helmet())

module.exports = server;