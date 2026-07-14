import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shopezadmin:usha@myatlasclusteredu.xrp6uvs.mongodb.net/shop?retryWrites=true&w=majority&appName=myAtlasClusterEDU"
    );

    console.log("MongoDB Connected Successfully");
  } catch (err) {
    console.error("Database Connection Error:", err.message);
    process.exit(1);
  }
};

export default connectDB;
