import express from "express";
import { getContactMessages, createContactMessage, updateContactMessage, deleteContactMessage } from "../controllers/contactMessageControllers.js";

const router = express.Router();

router.get("/", getContactMessages);
router.post("/", createContactMessage);
router.put("/:id", updateContactMessage);
router.delete("/:id", deleteContactMessage);

export default router;