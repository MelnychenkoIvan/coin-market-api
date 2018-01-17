import _      from 'lodash';
import models from '../models';

function create(req, res, next) {

  const coin = new models.CoinHistory(_.pick(req.body, [
    'coin_id', 'name', 'symbol', 'rank', 'price_usd', 'price_btc', '24h_volume_usd',
    'market_cap_usd', 'available_supply', 'total_supply', 'max_supply',
    'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'last_update'
  ]));

  coin.save()
    .then(savedCoin => res.json(savedCoin))
    .catch(e => next(e));
}

function list(req, res, next) {
  models.CoinHistory.findAll()
    .then(coins => res.json(coins))
    .catch(e => next(e));
}

export default { create, list };