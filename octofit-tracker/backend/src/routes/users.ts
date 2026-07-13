import { Router } from 'express';
import { User } from '../models/user';
const router = Router();

router.get('/', async (_req, res) => {
  const users = await User.find({}).lean();
  res.json({ route: '/api/users/', items: users });
});

router.post('/', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ route: '/api/users/', created: user });
});

export default router;
