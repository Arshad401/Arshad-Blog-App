import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGOOSE)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

app.listen(4000, () => {
  console.log("server is running on port 4000");
});


app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);


app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
    const message = err.message || 'internal server error';
    res.status(statuscode).json({
        success: false,
        statuscode,
        message,

    });
});