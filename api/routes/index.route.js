import express    from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';
import coinRoutes from './coin.route';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

// mount auth routes at /auth
router.use('/auth', authRoutes);

// mount users routes at /users
router.use('/users', userRoutes);

router.use('/coins', coinRoutes);

export default router;