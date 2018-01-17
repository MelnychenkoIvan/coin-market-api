import express         from 'express';
import coinHistoryCtrl from '../controllers/coin-history.controller';

const router = express.Router();

router.route('/')
  /** Get /api/coin-history - Get list of coins */
  .get(coinHistoryCtrl.list)

  /** Post /api/coin-history - Create coins */
  .post(coinHistoryCtrl.create);

export default router;