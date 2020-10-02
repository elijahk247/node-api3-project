const express = require('express');
const server = express();

// custom middlewares
server.use(express.json());

const userRouter = require('./users/userRouter.js');
server.use('/api/users', userRouter);

// const morgan = require('morgan');
// const logger = morgan('combined');    // created logger formatted to desired by project


server.get('/', (req, res) => {
  res.status(200).json({ message: 'Project 3 landing page' });
});

//custom middleware
function logger(req, res, next) {
  console.log('Request Method: ', req.method);
  console.log('Request URL: ', req.originalURL);
  console.log('Request Timestamp: ', new Date());
}

server.use(logger)

module.exports = server;
