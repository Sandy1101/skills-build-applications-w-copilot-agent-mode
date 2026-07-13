import express from 'express';
import mongoose from 'mongoose';
import { API_PORT, apiBaseUrl } from './config/appConfig';
import usersRouter from './routes/users';
import teamsRouter from './routes/teams';
import activitiesRouter from './routes/activities';
import leaderboardRouter from './routes/leaderboard';
import workoutsRouter from './routes/workouts';

const app = express();
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';

app.use(express.json());
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', apiBaseUrl });
});

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

mongoose.connect(MONGO_URI)
  .then(() => {
    app.listen(API_PORT, () => {
      console.log(`Backend listening on port ${API_PORT}`);
      console.log(`API base URL: ${apiBaseUrl}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  });
