import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import jobRoutes from "./routes/jobRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Job Tracker API is running" });
});

app.use("/api/users", userRoutes);
app.use("/api/jobs", jobRoutes);

await connectDB();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
