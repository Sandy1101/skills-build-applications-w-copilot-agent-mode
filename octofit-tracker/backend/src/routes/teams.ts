import { Router } from 'express';
import { Team } from '../models/team';
const router = Router();

router.get('/', async (_req, res) => {
  const teams = await Team.find({}).lean();
  res.json({ route: '/api/teams/', items: teams });
});

router.post('/', async (req, res) => {
  const team = await Team.create(req.body);
  res.status(201).json({ route: '/api/teams/', created: team });
});

export default router;
