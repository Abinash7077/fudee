import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const URI ='mongodb+srv://AbinashCluster:Baaji%40%238847@clusterabinash.ugikr4u.mongodb.net/FudeeData'
console.log(URI,"uri")
if (!URI) {
  throw new Error('Database URI is not defined in environment variables');
}

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
    });
    console.log('DB connected successfully...');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

export default connectDB;
