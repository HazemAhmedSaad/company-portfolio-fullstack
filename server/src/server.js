import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from ".//config/db.js";

import projectRoutes from "./routes/projectRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import memberRoutes from "./routes/memberRoutes.js";
// import galleryRoutes from "./routes/galleryRoutes.js";
import messageRoutes from "./routes/contactMessageRoutes.js";

dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("./uploads"));

app.use("/api/projects", projectRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/members", memberRoutes);
app.use("/api/messages", messageRoutes);
// app.use("/api/gallery", galleryRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on  http://localhost:${PORT}`),
);
