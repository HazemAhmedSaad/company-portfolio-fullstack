import express from "express";
import { getServices, createService, updateService, deleteService, getServiceById } from "../controllers/serviceControllers.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.get("/", getServices);
router.get("/:id", getServiceById);
router.post("/", upload.single("imageIcon"), createService);
router.put("/:id", upload.single("imageIcon"), updateService);
router.delete("/:id", deleteService);

export default router;