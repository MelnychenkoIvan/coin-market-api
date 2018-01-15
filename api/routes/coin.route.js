import express  from 'express';
import coinCtrl from '../controllers/coin.controller';

const router = express.Router();

router.route('/')
  .post(coinCtrl.create)
  .get(coinCtrl.list);

router.route('/:coinId')
  /** Get /api/coins/:coinId - Get coin */
  .get(coinCtrl.get)

  /** Delete /api/coins/:coinId - Delete coin */
  .delete(coinCtrl.remove)

  /** Put /api/coins/:coinId - Update coin */
  .put(coinCtrl.update);

/** Load coin when API with coinId route parameter is hit */
router.param('coinId', coinCtrl.load);

export default router