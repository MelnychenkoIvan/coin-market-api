import path from 'path';

const config = {
  env : process.env.NODE_ENV,
  port: process.env.SERVER_PORT,
  db  : {
    dialect: 'sqlite',
    storage: './db.coin.dev.sqlite'
  }
};

export default config;