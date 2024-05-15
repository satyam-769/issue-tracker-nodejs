import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import {db} from './config/mongoose.js';
import routes from './routes/index.js';
const port = process.env.PORT || 8000;
const app = express();

import expressLayouts from 'express-ejs-layouts';

app.use(express.urlencoded());
app.use(express.static('assets'));
app.use(expressLayouts);

// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// use express router
app.use('/', routes);
app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is running on port: ${port}`);
});
