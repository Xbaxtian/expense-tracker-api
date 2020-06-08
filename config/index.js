import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Check for the .env file
const envFound = dotenv.config();
if (!envFound) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
console.log(process.env.MONGO_URL);

export default {
  port: parseInt(process.env.PORT, 10),
  mongoUrl: process.env.MONGO_URL,
  appKey: process.env.APP_KEY,
};
