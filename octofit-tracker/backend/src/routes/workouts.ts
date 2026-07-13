import { Router } from 'express';
import { Workout } from '../models/workout';
const router = Router();

router.get('/', async (_req, res) => {
  const workouts = await Workout.find({}).lean();
  res.json({ route: '/api/workouts/', items: workouts });
});

router.post('/', async (req, res) => {
  const workout = await Workout.create(req.body);
  res.status(201).json({ route: '/api/workouts/', created: workout });
});

export default router;
