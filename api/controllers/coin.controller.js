import _                   from 'lodash';
import models              from '../models';
import { notFoundChecker } from '../../helpers/models-not-fund';

/**
 * Load coin
 */
function load(req, res, next, id) {
  models.Coin.findById(id, {
    include: [models.CoinHistory]
  })
    .then(coin => {
      notFoundChecker(coin);
      req.coin = coin;
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get coin
 * @return {Coin}
 */
function get(req, res) {
  return res.json(req.coin);
}

/**
 * Create new coin
 * @return {Coin}
 */
function create(req, res, next) {
  const coin = new models.Coin(_.pick(req.body, [
    'name', 'symbol', 'rank', 'price_usd', 'price_btc', '24h_volume_usd',
    'market_cap_usd', 'available_supply', 'total_supply', 'max_supply',
    'percent_change_1h', 'percent_change_24h', 'percent_change_7d', 'last_update'
  ]));

  coin.save()
    .then(savedCoin => res.json(savedCoin))
    .catch(e => next(e));
}

/**
 * Get coin list
 * @return {Coin[]}
 */
function list(req, res, next) {
  models.Coin.findAll({
    include: [models.CoinHistory]
  })
    .then(coins => res.json(coins))
    .catch(e => next(e));
}

/**
 * Update coin
 * @return {Coin}
 */
function update(req, res, next) {
  const coin = req.coin;

  coin.update(_.pick(req.body, [
    'name', 'symbol', 'rank', 'price_usd', 'price_btc', '24h_volume_usd',
    'market_cap_usd', 'available_supply', 'total_supply', 'max_supply',
    'percent_change_1h', 'percent_change_24h', 'percent_change_7d'
  ]))
    .then(updatedCoin => res.json(updatedCoin))
    .catch(e => next(e));
}

/**
 * Delete coin
 * @return {Coin}
 */
function remove(req, res, next) {
  const coin = req.coin;

  coin.destroy()
    .then(deletedCoin => res.json(deletedCoin))
    .catch(e => next(e));
}

export default { load, get, create, list, update, remove };