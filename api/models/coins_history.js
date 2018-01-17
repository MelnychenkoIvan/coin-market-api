function create(sequelize, DataType) {
  const CoinHistory = sequelize.define('CoinHistory', {
    id                : {
      type         : DataType.INTEGER,
      primaryKey   : true,
      autoIncrement: true
    },
    name              : {
      type: DataType.STRING
    },
    symbol            : {
      type: DataType.STRING
    },
    rank              : {
      type: DataType.INTEGER
    },
    price_usd         : {
      type: DataType.DOUBLE
    },
    price_btc         : {
      type: DataType.INTEGER
    },
    '24h_volume_usd'  : {
      type: DataType.BIGINT
    },
    market_cap_usd    : {
      type: DataType.BIGINT
    },
    available_supply  : {
      type: DataType.DOUBLE
    },
    total_supply      : {
      type: DataType.DOUBLE
    },
    max_supply        : {
      type: DataType.DOUBLE
    },
    percent_change_1h : {
      type: DataType.INTEGER
    },
    percent_change_24h: {
      type: DataType.INTEGER
    },
    percent_change_7d : {
      type: DataType.INTEGER
    }
  });

  CoinHistory.associate = function (models) {
    CoinHistory.belongsTo(models.Coin, {
      foreignKey: {
        name: 'coin_id'
      },
      allowNull : false
    });
  };

  return CoinHistory;
}

export default create;