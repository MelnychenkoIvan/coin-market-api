import express           from 'express';
import bodyParser        from 'body-parser';
import httpStatus        from 'http-status';
import expressValidation from 'express-validator';
import APIError          from '../helpers/APIError';
import config            from './config';

import routes from '../api/routes/index.route';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes);

// // if error is not an instanceOf APIError, convert it.
// app.use((err, req, res, next) => {
//   if (err instanceof expressValidation.ValidationError) {
//     // validation error contains errors which is an array of error each containing message[]
//     const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
//     const error = new APIError(unifiedErrorMessage, err.status, true);
//     return next(error);
//   }
//   else if (!(err instanceof APIError)) {
//     const apiError = new APIError(err.message, err.status, err.isPublic);
//     return next(apiError);
//   }
//   return next(err);
// });
//
// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   console.log('404 handler');
//   const err = new APIError('API not found', httpStatus.NOT_FOUND);
//   return next(err);
// });
//
// // error handler, send stacktrace only during development
// app.use((err, req, res, next) => {
//   console.log('stack stace', err);
//   res.status(err.status).json({
//     message: err.isPublic ? err.message : httpStatus[err.status],
//     stack  : config.env === 'development' ? err.stack : {}
//   });
// });

// app.use((err, req, res, next) => {
//   res.send(err);
//   return next(err);
// });

module.exports = app;