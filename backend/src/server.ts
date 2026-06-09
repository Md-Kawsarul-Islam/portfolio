/* eslint-disable no-console */
import config from './app/config';
import app from './app';
import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
}

// connect DB once
connectDB();

// IMPORTANT: no app.listen in Vercel
export default app;