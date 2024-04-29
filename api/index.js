import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/user.route.js";

dotenv.config()
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.log("Failed to connect to MongoDB", err)
    });

const app = express();

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// Path: api/routes/user.routes.js  {API routes}

app.use("/api/users", userRoutes);