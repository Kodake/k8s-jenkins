import mongoose from 'mongoose';
import * as dotenv from "dotenv";

dotenv.config({ path: '.env' });

const conDB = async (): Promise<void> => {
    try {
      const mongoUrl = process.env.MONGO_URL;
      if (!mongoUrl) {
        throw new Error("MongoDB connection string is not defined in .env file");
      }
  
      await mongoose.connect(mongoUrl);
      console.log("DB connection stablished...");
    } catch (error) {
      console.error("Error connecting to the database: ", error);
      process.exit(1);
    }
  };
  
  export default conDB;