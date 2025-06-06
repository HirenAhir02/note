import express  from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const app = express();
const port = process.env.PORT 


//to make input as json
app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: true , credentials:true}))

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})


//imort rootes 
import authRouter from './routes/auth.route.js';
import  noteRouter  from './routes/note.route.js';

// ✅ Routes
app.use("/api/auth", authRouter)
app.use("/api/note", noteRouter)

// ✅ Then, error handler at the very end
app.use((err, req, res, next) => {
    console.error(err.stack);
    const status = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    
    if (!res.headersSent) {
      res.status(status).json({ success: false, message });
    }
});

  