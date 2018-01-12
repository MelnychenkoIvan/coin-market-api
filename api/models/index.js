import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
import config from './../../config/config';

const basename = path.basename(__filename);

let db = {};
let sequelize;

// if (config.env === 'development') {
//   sequelize = new Sequelize('sqlite://' + path.join(__dirname, config.db.storage), {
//     dialect: config.db.dialect,
//     storage: path.join(__dirname, config.db.storage)
//   });
// }

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {

  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;