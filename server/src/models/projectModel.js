import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title:{
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    default: [],
    required: true,
  },
  technologies: {
    type: [String],
    default: [],
  },
  link: {
    type: String,
  },
  status: {
    type: String,
    default: "pending",
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);