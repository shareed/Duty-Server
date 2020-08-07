const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
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



const sessionConfig = {
    name: 'monkey',
    secret: 'keep it secret, keep it safe!',
    cookie: {
      maxAge: 1000 * 300,
      secure: false, 
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
    store: new KnexSessionStore({
      knex: require('../data/dbConfig.js'), 
      tablename: 'sessions', 
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 60, 
    }),
  }
  
  
server.use(session(sessionConfig));






server.use("/auth", authRouter);
server.use('/duty', assignersRouter); 
server.use('/assignertasks', assignersTasksRouter);

module.exports = server;