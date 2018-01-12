import express from 'express';
import bodyParser from 'body-parser';

import routes from '../api/routes/index.route';

// todo remove
import db from './../api/models/index';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

module.exports = app;