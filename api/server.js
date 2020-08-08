const express = require('express');
const helmet = require('helmet');
const cors = require('cors')
const session = require('express-session')
const KnexSessionStore = require("connect-session-knex")(session)
const authRouter = require("../auth/auth-router.js");
const assignersRouter = require('../assigners/assigners-router.js');
const assignersTasksRouter = require('../tasks/tasks-router');
const db = require("../data/connection");
const server = express();



//Builtin Middleware

server.use(express.json());

//Third Party middleware
server.use(cors())
server.use(helmet())
server.use(session({
    resave: false, 
      saveUninitialized: false, 
      secret: "keep it secret, keep it safe",
      store: new KnexSessionStore({
          knex: db, 
          createtable: true, 
      }),
  }))






server.use("/auth", authRouter);
server.use('/duty', assignersRouter); 
server.use('/assignertasks', assignersTasksRouter);

module.exports = server;