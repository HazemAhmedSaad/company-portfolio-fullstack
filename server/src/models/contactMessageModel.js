import mongoose from "mongoose";

const contactMessageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      RegExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    subject: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: false,
      unique: true,
      default: "",
      RegExp: /^\+?[1-9]\d{1,14}$/,
    },
    compenyName: {
      type: String,
      required: false,
      default: "",
    },
    message: {
      type: String,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    isAnswered: {
      type: Boolean,
      default: false,
    },
    isSpam: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("ContactMessage", contactMessageSchema);