import express  from 'express';
import coinCtrl from '../controllers/coin.controller';

const router = express.Router();

router.route('/')
  /** Post /api/coins - Create coin */
  .post(coinCtrl.create)

  /** Get /api/coins - Get list of coins */
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

export default router;