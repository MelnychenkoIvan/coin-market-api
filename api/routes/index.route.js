import express           from 'express';
import coinRoutes        from './coin.route';
import coinHistoryRoutes from './coin-history.route';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

// mount coins routes at /coins
router.use('/coins', coinRoutes);

// mount coin history routes at /coin-history
router.use('/coin-history', coinHistoryRoutes);

export default router;