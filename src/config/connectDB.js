import mongoose from "mongoose";
import "dotenv/config";

const connectDb = async () => {
  const connection_string = process.env.DB_CONNECTION_STRING;
  try {
    const connect = await mongoose.connect(connection_string, {
      dbName: "EduCart",
    });
    console.log(
      `Successfully Connected to database!, \nHOST: ${connect.connection.host}\nName: ${connect.connection.name}`
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDb;
