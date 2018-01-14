import express  from 'express';
import userCtrl from '../controllers/user.controller';

const router = express.Router();

router.route('/')
  /** POST /api/users - Create new user */
  .post(userCtrl.create);


router.route('/:userId')
  /** Get /api/users/:userId - Get user */
  .get(userCtrl.get)

  /** Put /api/users/:userId - Update user */
  .put(userCtrl.update);


/** Load user when API with userId route parameter is hit */
router.param('userId', userCtrl.load);

export default router;