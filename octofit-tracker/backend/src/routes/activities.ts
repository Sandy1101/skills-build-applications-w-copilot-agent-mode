import { Router } from 'express';
import { Activity } from '../models/activity';
const router = Router();

router.get('/', async (_req, res) => {
  const activities = await Activity.find({}).lean();
  res.json({ route: '/api/activities/', items: activities });
});

router.post('/', async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json({ route: '/api/activities/', created: activity });
});

export default router;
