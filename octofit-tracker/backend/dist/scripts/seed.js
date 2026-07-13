"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Seed the octofit_db database with test data
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("../models/user");
const team_1 = require("../models/team");
const activity_1 = require("../models/activity");
const leaderboard_1 = require("../models/leaderboard");
const workout_1 = require("../models/workout");
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/octofit_db';
async function seed() {
    await mongoose_1.default.connect(MONGO_URI);
    console.log('Seed the octofit_db database with test data');
    await Promise.all([
        user_1.User.deleteMany({}),
        team_1.Team.deleteMany({}),
        activity_1.Activity.deleteMany({}),
        leaderboard_1.Leaderboard.deleteMany({}),
        workout_1.Workout.deleteMany({})
    ]);
    const users = await user_1.User.insertMany([
        { name: 'Ava Chen', email: 'ava@example.com', role: 'captain' },
        { name: 'Noah Patel', email: 'noah@example.com', role: 'member' },
        { name: 'Mia Rodriguez', email: 'mia@example.com', role: 'member' }
    ]);
    const team = await team_1.Team.create({
        name: 'North Star Runners',
        sport: 'Running',
        captainId: users[0]._id
    });
    await user_1.User.updateMany({}, { $set: { teamId: team._id } });
    await activity_1.Activity.insertMany([
        {
            userId: users[0]._id,
            type: 'run',
            durationMinutes: 45,
            distanceKm: 7.2,
            calories: 500,
            date: new Date('2026-07-10')
        },
        {
            userId: users[1]._id,
            type: 'cycling',
            durationMinutes: 60,
            distanceKm: 20,
            calories: 700,
            date: new Date('2026-07-11')
        },
        {
            userId: users[2]._id,
            type: 'swim',
            durationMinutes: 30,
            distanceKm: 1.5,
            calories: 300,
            date: new Date('2026-07-12')
        }
    ]);
    await leaderboard_1.Leaderboard.insertMany([
        { userId: users[0]._id, points: 1200, rank: 1 },
        { userId: users[1]._id, points: 950, rank: 2 },
        { userId: users[2]._id, points: 880, rank: 3 }
    ]);
    await workout_1.Workout.insertMany([
        { name: 'Tempo Run', focus: 'Cardio', durationMinutes: 35, difficulty: 'hard' },
        { name: 'Core Circuit', focus: 'Strength', durationMinutes: 25, difficulty: 'moderate' },
        { name: 'Recovery Mobility', focus: 'Flexibility', durationMinutes: 20, difficulty: 'easy' }
    ]);
    console.log('Seed completed');
    await mongoose_1.default.disconnect();
}
seed().catch((error) => {
    console.error('Seed failed', error);
    process.exit(1);
});
