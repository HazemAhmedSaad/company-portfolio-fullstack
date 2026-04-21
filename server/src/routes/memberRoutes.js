import express from "express";
import {
  getMembers,
  getMemberById,
  createMember,
  updateMember,
  deleteMember,
} from "../controllers/memberControllers.js";
import upload from "../utils/upload.js";
const router = express.Router();

router.get("/", getMembers);
router.get("/:id", getMemberById);
router.post("/", upload.single("image"), createMember);
router.put("/:id", upload.single("image"), updateMember);
router.delete("/:id", deleteMember);

export default router;
