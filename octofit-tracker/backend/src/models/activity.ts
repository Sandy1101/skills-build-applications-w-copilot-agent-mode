import mongoose, { Schema, Document } from 'mongoose';

export interface IActivity extends Document {
  userId: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  distanceKm?: number;
  calories?: number;
  date: Date;
}

const activitySchema = new Schema<IActivity>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  distanceKm: Number,
  calories: Number,
  date: { type: Date, default: Date.now }
}, { timestamps: true });

export const Activity = mongoose.model<IActivity>('Activity', activitySchema);
