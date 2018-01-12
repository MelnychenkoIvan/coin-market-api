import express from 'express';
import authRoutes from './auth.route';

const router = express.Router();

router.get('/health-check', (req, res) => {
  res.send('OK');
});

// mount auth routes at /auth
router.use('/auth', authRoutes);

export default router;