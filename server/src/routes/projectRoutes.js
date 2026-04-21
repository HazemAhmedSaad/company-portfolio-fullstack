import express from "express";
import { getProjects, createProject, updateProject, deleteProject, getProjectById } from "../controllers/projectControllers.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.get("/", getProjects);
router.get("/:id", getProjectById);
router.post("/", upload.array("images", 10), createProject);
router.put("/:id", upload.array("images", 10), updateProject);
router.delete("/:id", deleteProject);

export default router;