'use strict';

//Load .env and exposes them to process.env...
require('dotenv').config();

//Loading dependencies
const express       = require('express');
const compression   = require('compression');
const responseTime  = require('response-time');
const morgan        = require('morgan');
const extractor    = require('./lib');
const cors 			= require('cors');

/*Express Setup*/
let app = express();
const port = process.env.PORT || 8080;

// You can set morgan to log differently depending on your environment
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('combined'));
}

app.use(cors());
app.use(compression());
app.use(responseTime());
app.disable('x-powered-by');

/*Express Routes*/
app.post('/upload', extractor) 

/*Expose the code version and env*/
console.log("[API VERSION] ", process.env.VERSION) 
console.log("[CODE ENVIRONMENT] ", process.env.NODE_ENV) 

/*App is Listening*/
app.listen(port, ()=> console.log('[Listening on port] ', port));