import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageIcon: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  offers: {
    type: [String],
    default: null,
  },
}, { timestamps: true });

export default mongoose.model("Service", serviceSchema);
