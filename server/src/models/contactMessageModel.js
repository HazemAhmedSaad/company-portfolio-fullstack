import mongoose from "mongoose";
const contactMessageModel  = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      // استخدم match بدلاً من RegExp
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
    subject: { type: String, required: true },
    phone: {
      type: String,
      required: false,
      default: "",
      // تأكد من أن الـ Regex هنا يسمح بالأرقام العادية
      match: [
        /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
        "Please enter a valid phone number",
      ],
    },
    compenyName: { type: String, required: false, default: "" },
    message: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isRead: { type: Boolean, default: false },
    isAnswered: { type: Boolean, default: false },
    isSpam: { type: Boolean, default: false },
  },
  { timestamps: true },
);

export default mongoose.model("ContactMessage", contactMessageModel);
