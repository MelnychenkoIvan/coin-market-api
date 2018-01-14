import express from 'express';
import authRoutes from './auth.route';
import userRoutes from './user.route';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

// mount auth routes at /auth
router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;