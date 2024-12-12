import { mongoose } from "mongoose";

process.loadEnvFile();

const URI_DB = process.env.URI_DB;

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB);
    console.log("Successful connection to the database");
  } catch (error) {
    console.log("Error connecting to the database");
  }
};

export { connectDB };
