"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const leaderboard_1 = require("../models/leaderboard");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    const entries = await leaderboard_1.Leaderboard.find({}).lean();
    res.json({ route: '/api/leaderboard/', items: entries });
});
exports.default = router;
