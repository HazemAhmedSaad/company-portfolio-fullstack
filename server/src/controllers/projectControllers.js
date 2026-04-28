import projectModel from "../models/projectModel.js";

export const getProjects = async (req, res) => {
  try {
    const length = await projectModel.countDocuments({ isDeleted: false });
    const projects = await projectModel.find(
      { isDeleted: false },
      { isDeleted: 0 },
    );
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
      length: length,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await projectModel.findOne(
      {
        _id: id,
        isDeleted: false,
      },
      { isDeleted: 0 },
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project fetched successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createProject = async (req, res) => {
  try {
    const { title, clientName, description, technologies, status, link } =
      req.body;
    const images = req.files ? req.files.map((file) => file.filename) : [];
    const existingProject = await projectModel.findOne({ title });
    if (existingProject) {
      return res.status(400).json({
        success: false,
        message: "Project with this title already exists",
      });
    }

    const project = await projectModel.create({
      title,
      clientName,
      description,
      technologies,
      link,
      status,
      images,
    });
    const length = await projectModel.countDocuments({ isDeleted: false });

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: project,
      length: length,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, clientName, description, technologies, status, link } =
      req.body;

    let images;

    if (req.files && req.files.length > 0) {
      images = req.files.map((file) => file.filename);
    }

    const updateData = {
      title,
      clientName,
      description,
      technologies,
      status,
      link,
    };

    if (images) {
      updateData.images = images;
    }

    const project = await projectModel.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await projectModel.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { new: true },
    );
    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
