import mongoose from "mongoose";

async function  connectDB() {
      mongoose.connection.on("connected",()=>{
        console.log("Connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`);
  
}

export default connectDB;