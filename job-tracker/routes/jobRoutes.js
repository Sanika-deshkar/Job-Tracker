import express from "express";
import {
  createJob,
  deleteJob,
  getJobs,
  updateJob,
} from "../controllers/jobController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getJobs).post(protect, createJob);
router.route("/:id").put(protect, updateJob).delete(protect, deleteJob);

export default router;
