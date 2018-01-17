import express           from 'express';
import authRoutes        from './auth.route';
import coinRoutes        from './coin.route';
import coinHistoryRoutes from './coin-history.route';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount coins routes at /coins
router.use('/coins', coinRoutes);

// mount coin history routes at /coin-history
router.use('/coin-history', coinHistoryRoutes);

export default router;