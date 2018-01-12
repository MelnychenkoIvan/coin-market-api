process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.SERVER_PORT = process.env.SERVER_PORT || '4040';
require('babel-register');
require('babel-polyfill');
require('./server');