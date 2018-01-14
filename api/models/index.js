import fs        from 'fs';
import path      from 'path';
import Sequelize from 'sequelize';
import config    from './../../config/config';

const basename = path.basename(__filename);

let db = {};
let sequelize;

if (config.env === 'development') {
  sequelize = new Sequelize('null', 'null', 'null', {
    dialect         : config.db.dialect,
    storage         : config.db.storage,
    operatorsAliases: false
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;