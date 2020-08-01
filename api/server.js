const express = require('express');
const helmet = require('helmet');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const cors = require('cors')
const authRouter = require("../auth/auth-router.js");
const assignersRouter = require('../assigners/assigners-router.js');

const server = express();



//Builtin Middleware

server.use(express.json());

//Third Party middleware
server.use(cors())
server.use(helmet())



const sessionConfig = {
    name: 'monkey',
    secret: 'keep it secret, keep it safe!',// used to make sure the cookie is valid
    cookie: {
      maxAge: 1000 * 300,// 30 seconds
      secure: false,   // can i send cookie over a http connection, must be set to true during production, can be dynamically changed
      httpOnly: true,  // when true, js can't get to the cookie
    },
    // we should only save sessions when user allows it
    resave: false,// recreate session even if it has not change
    saveUninitialized: false, //set cookie automatically, only be true if user has opted in, can be dynamically changed
    store: new KnexSessionStore({
      knex: require('../data/dbConfig.js'), // configured instance of knex
      tablename: 'sessions', // table that will store sessions inside the db, name it anything you want
      sidfieldname: 'sid', // column that will hold the session id, name it anything you want
      createtable: true, // if the table does not exist, it will create it automatically
      clearInterval: 1000 * 60 * 60, // time it takes to check for old sessions and remove them from the database to keep it clean and performant
    }),
  }
  
  
server.use(session(sessionConfig));






server.use("/auth", authRouter);
server.use('/duty', assignersRouter); 

module.exports = server;