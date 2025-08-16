import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URL);
    console.log('DB connected');
  } catch (error) {
    console.error('DB connection failed:', error.message);
    process.exit(1); 
  }
};

