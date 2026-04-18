import mongoose from "mongoose";

/**
 * Connect to MongoDB Database
 * Uses Mongoose for schema validation and query building
 * 
 * TODO: Error Handling
 * - Add retry logic for failed connections
 * - Implement exponential backoff
 * - Add connection timeout configuration
 */

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined in .env");
    }

    console.log("🔄 Connecting to MongoDB...");

    const conn = await mongoose.connect(mongoURI, {
      // Options to prevent deprecation warnings
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    
    // TODO: Implement graceful shutdown
    process.exit(1);
  }
};

export default connectDB;
