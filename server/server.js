import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from "../server/config/mongodb.js"
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);
app.use('/api/image',imageRouter);
await connectDB();

app.get('/',(req,res)=>{

res.send("API is working")
})

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})