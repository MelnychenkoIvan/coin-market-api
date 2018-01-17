import express           from 'express';
import bodyParser        from 'body-parser';
import httpStatus        from 'http-status';
import expressValidation from 'express-validator';
import APIError          from '../helpers/APIError';
import config            from './config';
import Sequelize         from 'sequelize';

import routes from '../api/routes/index.route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/api', routes);

// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
  // if (err instanceof expressValidation.ValidationErrors) {
  //   // validation error contains errors which is an array of error each containing message[]
  //   const unifiedErrorMessage = err.errors.map(error => error.messages.join('. '))
  //     .join(' and ');
  //   const error = new APIError(unifiedErrorMessage, err.status, true);
  //   return next(error);
  // }
  // else if (!(err instanceof APIError)) {
  //   const apiError = new APIError(err.message, err.status, err.isPublic);
  //   return next(apiError);
  // }

  if (err instanceof Sequelize.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => `${error.message} `)
      .join(' and ');
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  }

  err.status = err.status || httpStatus.INTERNAL_SERVER_ERROR;
  return next(err);
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new APIError('API not found', httpStatus.NOT_FOUND);
  return next(err);
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {// eslint-disable-line no-unused-vars
  return res.status(err.status)
    .json({
      status : err.status,
      message: err.isPublic ? err.message : httpStatus[err.status],
      stack  : config.env === 'development' ? err.stack : {}
    });
});

module.exports = app;